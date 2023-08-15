import { useEffect, useState } from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import Wedo from '../../components/homepage-ui/Wedo';
import OurCauses from '../../components/homepage-ui/OurCauses';
import Aboutus from '../../components/homepage-ui/Aboutus';
import Goals from '../../components/homepage-ui/Goals';
import LoadingOverlay from '../../components/loader/Loader';
import AlertDialog from '../../components/alerDialog/alertDialog';
import { fetchresourcesuser } from '../../redux/features/resourcesAction';
import { deleteResource } from '../../redux/features/resourcesSlice';
import useAxios from '../../hooks/useAxios';
import Button from '../../components/ui/Button/Button';

const ResourcesUser = ({ sendDataToParent, handleOpenModal }) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  const dispatch = useDispatch();
  const [isAlertOpen, setAlertOpen] = useState(false);
  const { data, loading, error, deleteData } = useAxios();
  const { _id } = useSelector((state) => state.auth.userInfo);
  const { resources } = useSelector((state) => state.resources) || [];
  useEffect(() => {
    if (_id) dispatch(fetchresourcesuser({ userId: _id }));
  }, []);
  async function onEditCLick(resourceData) {
    handleOpenModal();
    sendDataToParent(resourceData);
  }
  async function handleDeleteClick(resourceId) {
    try {
      await deleteData(`resource/${resourceId}`);
      if (error) {
        setAlertOpen(true);
      } else {
        dispatch(deleteResource(resourceId));
      }
    } catch (error) {
      // alert('Error uploading image.');
      console.error(error);
    }
  }
  return (
    <>
      <LoadingOverlay isLoading={loading}></LoadingOverlay>
      <AlertDialog
        isOpen={isAlertOpen}
        onClose={() => {
          setAlertOpen(false);
        }}
        errorMessage={error || ''}
      />
      <div className='bg-lightg flex flex-col items-center justify-center'>
        {resources.map((resource) => (
          <Box
            key={resource._id}
            className='mb-8 mt-8 top-[25.39rem] left-[21.94rem] w-[60rem] flex flex-col items-center justify-start gap-[2.19rem] text-[1.13rem] font-work-sans'
            p={8}
            bg='white'
          >
            <Flex
              className='w-[74.44rem] flex-row items-center justify-start'
              w='full'
              justifyContent='space-between'
            >
              <Image
                className='relative w-[10.06rem] h-[10.22rem] object-cover'
                src={resource.imageURL}
                alt='Image'
              />
              <Box
                className='bg-base-white w-[38.94rem] flex flex-col py-[5.5rem] px-[2.44rem] box-border items-start justify-start'
                w='full'
                p={8}
                rounded='2xl'
              >
                <Box className='w-[34.06rem] flex flex-col items-start justify-start gap-[1.88rem]'>
                  <Box className='flex flex-row items-center justify-start gap-2'>
                    <Text className='relative uppercase font-medium'>
                      {new Date(resource.createdAt).toLocaleDateString(
                        'en-US',
                        options
                      )}{' '}
                      | {resource.address.city}
                    </Text>
                    <Button
                      onClick={() => onEditCLick(resource)}
                      colorScheme='teal'
                      size='sm'
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDeleteClick(resource._id)}
                      colorScheme='red'
                      size='sm'
                    >
                      Delete
                    </Button>
                  </Box>
                  <Text className='relative text-[1.56rem] leading-[120%] font-extrabold font-shippori-mincho'>
                    {resource.name}
                  </Text>
                  <Text className='relative text-[1.25rem] leading-[130%] text-dimgray inline-block w-[34.06rem]'>
                    {resource.description}
                  </Text>

                  <div className='flex items-center pb-4 justify-center gap-[1.88rem]'>
                    <Button
                      text='EDIT'
                      bgColor='#FF6D6D'
                      onClick={() => onEditCLick(resource)}
                      textColor='#fff'
                    />
                    <Button
                      text='DELETE'
                      bgColor='#000'
                      onClick={() => handleDeleteClick(resource._id)}
                      textColor='#fff'
                    />
                  </div>
                </Box>
              </Box>
            </Flex>
          </Box>
        ))}
      </div>
    </>
  );
};

export default ResourcesUser;
