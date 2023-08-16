import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  VStack,
  Input,
  Button,
  Text,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { signinuser } from '../../redux/features/authActions';
import LoadingOverlay from '../../components/loader/Loader';
import AlertDialog from '../../components/alerDialog/alertDialog';
import './SignIn.css';
// import MyFormComponent from './MyFormComponent'; // Import your child form component

const SignIn = () => {
  const schema = yup.object().shape({
    email: yup.string().required('E-mail is required.'),
    password: yup.string().required('Password is required.'),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAlertOpen, setAlertOpen] = useState(false);
  const { loading, userInfo, error, isLoggedIn } = useSelector(
    (state) => state.auth
  );
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (isLoggedIn) {
      // if (userInfo.role === 'USER') {
      navigate('/');
      // }
    } else if (error) {
      setAlertOpen(true);
    }
  }, [navigate, userInfo, isLoggedIn, error]);

  const handleCloseDialog = () => {
    setAlertOpen(false);
  };

  const onSubmit = handleSubmit((values) => {
    dispatch(signinuser(values));
  });

  return (
    <>
      <LoadingOverlay isLoading={loading}></LoadingOverlay>
      <AlertDialog
        isOpen={isAlertOpen}
        onClose={handleCloseDialog}
        errorMessage={error || ''}
      />
      <div className='relative h-screen bg-whitesmoke-600'>
        {/* Background Image */}
        <div className='background-image absolute inset-0 bg-cover bg-center'></div>
        {/* White Background */}
        <div className='white-background absolute inset-0'></div>

        {/* Card Overlay */}
        <div className='absolute inset-0 flex flex-col gap-5 justify-center items-center w-full lg:w-30'>
          <div className='text-[6rem] leading-[108.3%] font-ellen text-white '>
            <p className='m-0'>Brighter Days</p>
          </div>
          <Card
            align='center'
            style={{ backgroundColor: '#f1eeec', padding: '2rem' }}
          >
            <CardHeader>
              <div className='relative leading-[120%] font-extrabold font-shippori text-[2.19rem]'>
                Sign In
              </div>
            </CardHeader>

            <CardBody align='center'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <VStack spacing='10rem'>
                  <div className='relative text-md leading-[130%] font-work -mt-6 text-gray-dark text-center max-w-lg'>
                    Sign in to your account and continue making a positive
                    impact in the lives of those who need it most.
                  </div>
                </VStack>

                <FormControl id='email' isInvalid={!!errors.email}>
                  <Input
                    placeholder='E-mail'
                    type='email'
                    margin='1em'
                    h='4rem'
                    w='50%'
                    size='sm'
                    style={{ backgroundColor: 'white' }}
                    autoFocus={true}
                    {...register('email')}
                  />
                  <div className='mx-32'>
                    <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                  </div>
                </FormControl>
                <VStack spacing={4}>
                  <FormControl id='password' isInvalid={!!errors.password}>
                    <Input
                      placeholder='Password'
                      type='password'
                      margin='1em'
                      h='4rem'
                      w='50%'
                      size='sm'
                      style={{ backgroundColor: 'white' }}
                      {...register('password')}
                    />
                    <div className='mx-32'>
                      <FormErrorMessage>
                        {errors.password?.message}
                      </FormErrorMessage>
                    </div>
                  </FormControl>
                </VStack>

                <VStack spacing={4}>
                  <Button
                    type='submit'
                    borderRadius='50px'
                    colorScheme='#2e4049'
                    margin='1em'
                    w='10rem'
                    h='4rem'
                    className='bg-dark '
                    size='lg'
                    isLoading={isSubmitting}
                  >
                    SIGN IN
                  </Button>
                </VStack>
              </form>
            </CardBody>
            <div
              className='relative leading-[130%] inline-block w-[20rem] cursor-pointer font-ellen text-[2rem]'
              onClick={() => {}}
            >
              <span>Don’t have an account?</span>
              <span className='text-primary'>
                <Link to='/signup'>Sign Up</Link>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SignIn;
