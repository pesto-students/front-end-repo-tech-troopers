import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import {
  FormControl,
  FormErrorMessage,
  Input,
  Select,
  VStack,
  HStack,
  Text,
  Textarea,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
  FormLabel,
} from '@chakra-ui/react';
import Navbar from '../../components/navbar/Navbar';
import DropDown from '../../components/commons/DropDown';
import Banner from '../../components/commons/BannerImage';
import VolunteerListing from '../../components/volunteer-ui/VolunteerListing';
import VolunteerAdmin from './VolunteerAdmin';
import VolunteerUser from './VolunteerUser';
import Search from '../../components/volunteer-ui/Search';
import Quote from '../../components/volunteer-ui/Quote';
import Footer from '../../components/commons/Footer';
import Button from '../../components/ui/Button/Button';
import ModalComponent from '../../components/commons/Modal';
import LoadingOverlay from '../../components/loader/Loader';
import AlertDialog from '../../components/alerDialog/alertDialog';
import axiosHelper from '../../axiosHelper';
import { fetchvolunteersadmins } from '../../redux/features/volunteerActions';
import useAxios from '../../hooks/useAxios';
import volunteerSchema from '../../validations/volunteer.validation';

const Volunteer = () => {
  const dispatch = useDispatch();
  const [ageRange, setAgeRange] = useState([18, 40]);
  const [volunteerData, setVolunteerData] = useState(null);
  const [isAlertOpen, setAlertOpen] = useState(false);
  const navigate = useNavigate();
  const { data, loading, error, postData, putData } = useAxios();
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    setValue,
  } = useForm({
    resolver: yupResolver(volunteerSchema),
  });

  const { role, _id } = useSelector((state) => state.auth.userInfo);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleSliderChange = (newValues) => {
    setAgeGroup(newValues);
  };
  const handleChildData = (dataFromChild) => {
    setVolunteerData(dataFromChild);
  };
  useEffect(() => {
    if (volunteerData) {
      setIsModalOpen(true);
      // Loop through each property in resourceData and set the corresponding form field
      Object.keys(volunteerData).forEach((key) => {
        setValue(key, volunteerData[key]);
      });
    }
  }, [volunteerData, setValue]);
  useEffect(() => {
    if (error) {
      setAlertOpen(true);
    } else {
      handleCloseModal();
      dispatch(
        fetchvolunteersadmins()
      );
    }
  }, [error, data]);
  const onSubmit = handleSubmit(async (data) => {
    try {
      data.ageGroup = ageRange;
      if (!volunteerData) {
        data.userId = _id;

        postData('voluntary/admin', data);
      } else {
        putData(`voluntary/admin/${volunteerData._id}`, data);
      }
    } catch (error) {
      alert('An error occurred while submitting the form.');
      console.error('Error:', error);
    }
  });
  const body = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4} flexDirection={{ base: 'column', md: 'row' }}>
        <FormControl id='tite' isInvalid={!!errors.title}>
          <Input
            className='mb-4'
            type=' text'
            placeholder='Title'
            h='4rem'
            {...register('title')}
            style={{ backgroundColor: 'white' }}
          />
          <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
        </FormControl>
        <FormControl
          id='category'
          className='mb-4'
          isInvalid={!!errors.category}
        >
          <Select
            placeholder='Category'
            size='lg'
            h='4rem'
            {...register('category')}
            style={{ backgroundColor: 'white' }}
          >
            <option value='Education and Tutoring'>
              Education and Tutoring
            </option>
            <option value='Environmental Conservation'>Clothing</option>
            <option value='Community Development'>Community Development</option>
            <option value='Technology and Digital Skills'>
              Technology and Digital Skills
            </option>
            <option value='Animal Welfare'>Animal Welfare</option>
            <option value='Arts and Culture'>Arts and Culture</option>
            <option value='Arts and Culture'>Advocacy and Human Rightse</option>
          </Select>
          <FormErrorMessage>{errors.phoneNumber?.message}</FormErrorMessage>
        </FormControl>
      </VStack >
      <FormControl id='description' isInvalid={!!errors.description}>
        <Textarea
          {...register('description')}
          style={{ backgroundColor: 'white' }}
          placeholder='Description'
          size='lg'
          className='mb-4 mt-4'
          resize='vertical' // Allow vertical resizing of the textarea
        />
        <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
      </FormControl>
      <VStack spacing={4} flexDirection={{ base: 'column', md: 'row' }}>
        <FormControl
          className='mb-4'
          id='timeCommitment'
          isInvalid={!!errors.timeCommitment}
          style={{ backgroundColor: 'white' }}
        >
          <Select
            placeholder='Time Commitment'
            size='lg'
            h='4rem'
            {...register('timeCommitment')}
          >
            <option value='1-5 hours per week'>1-5 hours per week</option>
            <option value='5-10 hours per week'>5-10 hours per week</option>
            <option value='10-20 hours per week'>10-20 hours per week</option>
            <option value='20+ hours per week'>20+ hours per week</option>
          </Select>
          <FormErrorMessage>{errors.phoneNumber?.message}</FormErrorMessage>
        </FormControl>
      </VStack>
      <Box>
        <FormControl isInvalid={errors.ageRange}>
          <FormLabel>Age Range</FormLabel>
          <RangeSlider
            aria-label={['min', 'max']}
            defaultValue={ageRange}
            onChange={(newRange) => {
              setAgeRange(newRange);
            }}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
          <FormErrorMessage>
            {errors.ageRange && errors.ageRange.message}
          </FormErrorMessage>
          <HStack justify='space-between'>
            <Text>{ageRange[0]}</Text>
            <Text>{ageRange[1]}</Text>
          </HStack>
        </FormControl>
      </Box >
      <Button type='submit' text='SUBMIT' bgColor='#FF6D6D' />
    </form >
  );
  const buttons = role === 'NGO_USER' && (
    <Button
      onClick={() => {
        setIsModalOpen(true);
      }}
      text='ADD VOLUNTEERING EVENT'
      bgColor='#FF6D6D'
    />
  );
  return (
    <>
      <LoadingOverlay isLoading={loading}></LoadingOverlay>
      <AlertDialog
        isOpen={isAlertOpen}
        onClose={() => {
          setAlertOpen(false);
        }}
        errorMessage={error?.message || 'Error occured'}
      />
      <div className='bg-[#ECF1F0]'>
        <Navbar />
        <Banner
          backgroundImage='bg-resources'
          text='Volunteer'
          buttons={buttons}
        />
        <div className='flex items-center mt-4 justify-center mx-auto'></div>
        {role === 'NGO_USER' ? (
          <VolunteerAdmin sendDataToParent={handleChildData} />
        ) : (
          <VolunteerUser />
        )}
        <Quote />
        <Footer />
        {ReactDOM.createPortal(
          <ModalComponent
            title='Add a Volunteering Event'
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            body={body}
          />,
          document.body
        )}
      </div>
    </>
  );
};

export default Volunteer;
