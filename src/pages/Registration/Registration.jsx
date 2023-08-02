import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    Card, CardHeader, CardBody, CardFooter, Heading, VStack, Input, Button, Text, FormControl,
    FormErrorMessage, Select, Progress
} from '@chakra-ui/react';
import { signupuser } from '../../redux/features/authActions';
import '../SignIn/SignIn.css';
// import MyFormComponent from './MyFormComponent'; // Import your child form component

const SignUp = () => {
    const { loading, userInfo, error, success } = useSelector(
        (state) => state.auth
    )
    const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
        email: yup.string().required("E-mail is required."),
        role: yup.string().required("Role is required"),
        password: yup.string().required("Password is required."),
        confirmPassword: yup
            .string()
            .required('Confirm Password is required'),
    });
    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(() => {
        if (success) navigate('/signin')
    }, [navigate, userInfo, success])
    const {
        formState: { errors, isSubmitting },
        handleSubmit,
        register
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    });

    const onSubmit = handleSubmit((values) => {
        dispatch(signupuser(values))
    });

    return (
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
                <Card align="center" style={{ backgroundColor: '#f1eeec', padding: '2rem' }}>
                    < CardHeader >
                        <div className="relative leading-[120%] font-extrabold font-shippori text-[2.19rem]">
                            Sign Up
                        </div>
                    </ CardHeader>

                    <CardBody align="center">
                        <form onSubmit={onSubmit}>
                            <VStack spacing={4} flexDirection={{ base: 'column', md: 'row' }}>
                                <VStack flex={1} spacing={4} alignItems="stretch">
                                    {/* NGO Name */}
                                    <FormControl id="name" isInvalid={!!errors.name}>
                                        <Input type="text" placeholder="NGO Name" h="4rem" {...register('name')} />
                                        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                                    </FormControl>

                                    {/* Registration Number */}
                                    <FormControl id="registrationNumber" isInvalid={!!errors.registrationNumber}>
                                        <Input type="text" placeholder="Registration Number" h="4rem" {...register('registrationNumber')} />
                                        <FormErrorMessage>{errors.registrationNumber?.message}</FormErrorMessage>
                                    </FormControl>

                                    {/* Type of NGO */}
                                    <FormControl id="typeOfNGO" isInvalid={!!errors.typeOfNGO}>
                                        <Select placeholder="Type of NGO" size="lg" h="4rem" {...register('typeOfNGO')}>
                                            <option value="nonprofit">Nonprofit</option>
                                            <option value="charity">Charity</option>
                                            <option value="community">Community-based Organization</option>
                                        </Select>
                                        <FormErrorMessage>{errors.typeOfNGO?.message}</FormErrorMessage>
                                    </FormControl>
                                </VStack>

                                <VStack flex={1} spacing={4} alignItems="stretch">
                                    {/* Address */}
                                    <FormControl id="address" isInvalid={!!errors.address}>
                                        <Input type="text" placeholder="Address" h="4rem" {...register('address')} />
                                        <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
                                    </FormControl>

                                    {/* Phone Number */}
                                    <FormControl id="phoneNumber" isInvalid={!!errors.phoneNumber}>
                                        <Input type="text" placeholder="Phone Number" h="4rem" {...register('phoneNumber')} />
                                        <FormErrorMessage>{errors.phoneNumber?.message}</FormErrorMessage>
                                    </FormControl>
                                </VStack>
                            </VStack>

                            <Button
                                type="submit"
                                borderRadius="50px"
                                colorScheme="#2e4049"
                                margin="1em"
                                w="10rem"
                                h="4rem"
                                className="bg-dark"
                                size="lg"
                                isLoading={isSubmitting}
                            >
                                SIGN UP
                            </Button>
                        </form>

                    </CardBody>
                    <div
                        className="relative leading-[130%] inline-block w-[20rem] cursor-pointer font-ellen text-[2rem]"
                        onClick={() => { }}
                    >
                        <span>Already have an account?</span>
                        <span className="text-primary"><Link to="/signin">Sign In</Link></span>
                    </div>

                </Card >
            </div >


        </div >


    );
};

export default SignUp;
