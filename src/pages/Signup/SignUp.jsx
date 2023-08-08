import React, { useEffect, useState } from 'react';
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
  Select,
} from '@chakra-ui/react';
import LoadingOverlay from '../../components/loader/Loader';
import AlertDialog from '../../components/alerDialog/alertDialog';
import { signupuser } from '../../redux/features/authActions';
import '../SignIn/SignIn.css';
import SignUpForm from '../../forms/SignupForms';
// import MyFormComponent from './MyFormComponent'; // Import your child form component

const SignUp = () => {
  const [isAlertOpen, setAlertOpen] = useState(false);
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().required('E-mail is required.'),
    role: yup.string().required('Role is required'),
    password: yup.string().required('Password is required.'),
    confirmPassword: yup.string().required('Confirm Password is required'),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (success) {
      if (userInfo.role === 'USER') {
        navigate('/');
      } else {
        navigate('/ngodetails');
      }
    } else if (error) {
      setAlertOpen(true);
    }
  }, [navigate, userInfo, success, error]);
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((values) => {
    dispatch(signupuser(values, userInfo));
  });
  const handleCloseDialog = () => {
    setAlertOpen(false);
  };

  return (
    <>
      <LoadingOverlay isLoading={loading}></LoadingOverlay>
      <AlertDialog
        isOpen={isAlertOpen}
        onClose={handleCloseDialog}
        errorMessage={error || ''}
      />
      <div className="relative h-screen bg-gray-50">
        {/* Background Image */}
        <div className="background-image absolute inset-0 bg-cover bg-center"></div>
        {/* White Background */}
        <div className="white-background absolute inset-0"></div>

        {/* Card Overlay */}
        <div className="absolute inset-0 flex flex-col gap-5 justify-center items-center w-full lg:w-30">
          <div className="text-[4rem] leading-[108.3%] font-ellen text-white sm:text-[4rem] md:text-[10rem] lg:text-[8rem] ">
            <p className="mb-8">Brighter Days</p>
          </div>
          <Card
            align="center"
            style={{ backgroundColor: '#f1eeec', padding: '2rem' }}
          >
            <CardHeader>
              <div className="relative leading-[120%] font-extrabold font-shippori text-[2.19rem]">
                Sign Up
              </div>
            </CardHeader>

            <CardBody align="center">
              <SignUpForm
                onSubmitStep1={handleSubmit(onSubmit)}
                errors={errors}
                register={register}
                isSubmitting={isSubmitting}
              ></SignUpForm>
            </CardBody>
            <div
              className="relative leading-[130%] inline-block w-[20rem] cursor-pointer font-ellen text-[2rem]"
              onClick={() => { }}
            >
              <span>Already have an account?</span>
              <span className="text-primary">
                <Link to="/signin">Sign In</Link>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SignUp;
