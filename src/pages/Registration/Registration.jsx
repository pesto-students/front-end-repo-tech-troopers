import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    Card, CardHeader, CardBody, CardFooter, Heading, HStack, VStack, Input, Button, Text, FormControl,
    FormErrorMessage, Select
} from '@chakra-ui/react';
import LoadingOverlay from '../../components/loader/Loader';
import AlertDialog from '../../components/alerDialog/alertDialog';
import { addngodetails } from '../../redux/features/authActions';
import '../SignIn/SignIn.css';
import NGODetails from '../../forms/NGODetails';
// import MyFormComponent from './MyFormComponent'; // Import your child form component

const Registration = () => {
    const [isAlertOpen, setAlertOpen] = useState(false);
    const { loading, userInfo, error, registration } = useSelector(
        (state) => state.auth
    )
    const schemaNGO = yup.object().shape({
        name: yup.string().required("NGO name is required"),
        registrationNumber: yup.string().required("Registration Number is required"),
        typeOfNGO: yup.string().required("NGO type is required"),
    });
    const address = yup.object().shape({
        addressLine1: yup.string().required("Adress line 1 is required"),
        addressLine2: yup.string().required("Adress line 2 is required"),
        city: yup.string().required("City is required"),
        state: yup.string().required("State is required"),
        pinCode: yup.string().required("Pin code is required")
    })
    const schema = yup.object().shape({
        address: yup.object().shape({
            addressLine1: yup.string().required("Address line 1 is required"),
            addressLine2: yup.string().required("Address line 2 is required"),
            city: yup.string().required("City is required"),
            state: yup.string().required("State is required"),
            pinCode: yup.string().required("Pin code is required"),
        }).required(),
        ngoDetails: yup.object().shape({
            ngoName: yup.string().required("NGO name is required"),
            registrationNumber: yup.string().required("Registration Number is required"),
            typeOfNGO: yup.string().required("NGO type is required"),
        }).required()
    });



    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(() => {
        if (registration) navigate('/')
        else if (error) {
            setAlertOpen(true);
        }
    }, [navigate, userInfo, registration, error])
    const {
        formState: { errors, isSubmitting },
        handleSubmit,
        register,
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const onSubmit = handleSubmit((values) => {
        // console.log("here")
        values.userId = userInfo._id;
        dispatch(addngodetails(values))
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
                errorMessage={error || ""}
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
                    <Card align="center" style={{ backgroundColor: '#f1eeec', padding: '2rem' }}>
                        < CardHeader >
                            <div className="relative leading-[120%] font-extrabold font-shippori text-[2.19rem]">
                                Sign Up
                            </div>
                        </ CardHeader>

                        <CardBody align="center">

                            {/* <NGODetails onSubmitStep2={handleSubmit(onSubmit)} errors={errors} register={register} isSubmitting={isSubmitting} ></NGODetails> */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <VStack spacing={4} flexDirection={{ base: 'column', md: 'row' }}>
                                    <VStack flex={1} spacing={4} alignItems="stretch">
                                        {/* NGO Name */}
                                        <FormControl id="ngoName" isInvalid={!!errors?.ngoDetails?.ngoName}>
                                            <Input type="text" name="ngoDetails.ngoName" placeholder="NGO Name" h="4rem" {...register('ngoDetails.ngoName')} style={{ backgroundColor: 'white' }} />
                                            <FormErrorMessage>{errors?.ngoDetails?.ngoName?.message}</FormErrorMessage>
                                        </FormControl>


                                        {/* Type of NGO */}
                                        <FormControl id="typeOfNGO" isInvalid={!!errors?.ngoDetails?.typeOfNGO}>
                                            <Select placeholder="Type of NGO" name="ngoDetails.typeOfNGO" size="lg" h="4rem" {...register('ngoDetails.typeOfNGO')}>
                                                <option value="nonprofit">Nonprofit</option>
                                                <option value="charity">Charity</option>
                                                <option value="community">Community-based Organization</option>
                                            </Select>
                                            <FormErrorMessage>{errors?.ngoDetails?.typeOfNGO?.message}</FormErrorMessage>
                                        </FormControl>
                                        <FormControl id="addressLine2" isInvalid={!!errors?.address?.addressLine2}>
                                            <Input type="text" placeholder="addressLine2" name="address.addressLine2" h="4rem" {...register('address.addressLine2')} />
                                            <FormErrorMessage>{errors?.address?.addressLine2?.message}</FormErrorMessage>
                                        </FormControl>

                                        <FormControl id="state" isInvalid={!!errors?.address?.state}>
                                            <Input type="text" placeholder="state" name="address.state" h="4rem" {...register('address.state')} />
                                            <FormErrorMessage>{errors?.address?.state?.message}</FormErrorMessage>
                                        </FormControl>
                                    </VStack>

                                    <VStack flex={1} spacing={4} alignItems="stretch">

                                        {/* Registration Number */}
                                        <FormControl id="registrationNumber" isInvalid={!!errors?.ngoDetails?.registrationNumber}>
                                            <Input type="text" name="ngoDetails.registrationNumber" placeholder="Registration Number" h="4rem" {...register('ngoDetails.registrationNumber')} />
                                            <FormErrorMessage>{errors?.ngoDetails?.registrationNumber?.message}</FormErrorMessage>
                                        </FormControl>
                                        {/* Address */}
                                        <FormControl id="addressLine1" isInvalid={!!errors?.address?.addressLine1}>
                                            <Input type="text" name="address.addressLine1" placeholder="addressLine1" h="4rem" {...register('address.addressLine1')} />
                                            <FormErrorMessage>{errors?.address?.addressLine1?.message}</FormErrorMessage>
                                        </FormControl>

                                        <FormControl id="city" isInvalid={!!errors?.address?.city}>
                                            <Input type="text" placeholder="city" h="4rem" {...register('address.city')} />
                                            <FormErrorMessage>{errors?.address?.city?.message}</FormErrorMessage>
                                        </FormControl>
                                        <FormControl id="pinCode" isInvalid={!!errors?.address?.pinCode}>
                                            <Input type="text" name="address.pinCode" placeholder="pincode" h="4rem" {...register('address.pinCode')} />
                                            <FormErrorMessage>{errors?.address?.pinCode?.message}</FormErrorMessage>
                                        </FormControl>
                                    </VStack>
                                </VStack>
                                <HStack className='flex justify-center items-center'>
                                    <Button type="submit" borderRadius="50px" colorScheme='#2e4049' margin="1em" w="10rem" h="4rem" className='bg-dark ' size='lg' >
                                        SUBMIT
                                    </Button>

                                </HStack>

                            </form>
                        </CardBody>

                    </Card >
                </div >


            </div >
        </>

    );
};

export default Registration;
