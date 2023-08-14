import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormControl, FormErrorMessage, Input, Select, VStack, HStack, Text, Textarea } from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import Navbar from "../../components/navbar/Navbar";
import Wedo from "../../components/homepage-ui/Wedo";
import OurCauses from "../../components/homepage-ui/OurCauses";
import Banner from '../../components/commons/BannerImage';
import Footer from '../../components/commons/Footer';
import AlertDialog from '../../components/alerDialog/alertDialog';
import Aboutus from "../../components/homepage-ui/Aboutus";
import Goals from "../../components/homepage-ui/Goals";
import Button from "../../components/ui/Button/Button";
import ModalComponent from '../../components/commons/Modal';
import FileUploadButton from '../../components/commons/FileUpload';
import LoadingOverlay from '../../components/loader/Loader';
import ResourcesAdmin from './ResourcesAdmin';
import ResourcesUser from './ResourcesUser';
import axiosHelper from '../../axiosHelper';


const Resources = () => {
    const { role, _id } = useSelector(
        (state) => state.auth.userInfo
    )
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resourceData, setResourceData] = useState(null);
    const [error, setError] = useState("");
    const [isAlertOpen, setAlertOpen] = useState(false);
    const imageURL = useRef('');

    const setImageurl = (url) => {
        imageURL.current = url
    }


    const handleOpenModal = () => {
        if (!role) {
            setError("Please login to Add a Resource")
            setAlertOpen(true)
        } else {
            setIsModalOpen(true);

        }
    };
    const handleChildData = (dataFromChild) => {
        setResourceData(dataFromChild);
    };
    const resourceSchema = yup.object({
        name: yup.string().required('Name is required'),
        category: yup.string().required('Category is required'),
        description: yup.string().required('Description is required'),
        phoneNumber: yup.number().required('Phone number is required'),
        email: yup.string().email().required('email is required'),
        address: yup.object().shape({
            addressLine1: yup.string().required("Address line 1 is required"),
            addressLine2: yup.string().required("Address line 2 is required"),
            city: yup.string().required("City is required"),
            state: yup.string().required("State is required"),
            pinCode: yup.string().required("Pin code is required"),
        }).required(),
    });

    const {
        formState: { errors, isSubmitting },
        handleSubmit,
        register,
        setValue
    } = useForm({
        resolver: yupResolver(resourceSchema),
    });
    React.useEffect(() => {
        if (resourceData) {
            // Loop through each property in resourceData and set the corresponding form field
            Object.keys(resourceData).forEach((key) => {
                setValue(key, resourceData[key]);
            });
        }
    }, [resourceData, setValue]);
    const onSubmit = handleSubmit(async (data) => {
        console.log("here")
        if (imageURL) data.imageURL = imageURL.current;
        try {
            // setLoading(true);
            if (!resourceData) {
                const response = await axiosHelper.post('/resource', data);
                // setLoading(false);
                if (response.message === "successful") {
                    alert('Form submitted successfully!');
                } else {
                    alert('Form submission failed.');
                }
            } else {
                const response = await axiosHelper.patch(`/resource/${resourceData._id}`, data);
                if (response.status === 200) {
                    alert('Form submitted successfully!');
                } else {
                    alert('Form submission failed.');
                }
            }

        } catch (error) {
            alert('An error occurred while submitting the form.');
            console.error('Error:', error);
        }


    });
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const buttons = role !== "NGO_USER" && (<Button onClick={handleOpenModal} text='DONATE' bgColor='#FF6D6D' />);
    const body = (<form onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="name" isInvalid={!!errors.name}>
            <Input className="mb-4" type=" text" placeholder="Name" h="4rem" {...register('name')} style={{ backgroundColor: 'white' }} />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl id="phone" isInvalid={!!errors.phoneNumber}>
            <Input className="mb-4" type="tel" placeholder="Phone no." h="4rem" {...register('phoneNumber')} style={{ backgroundColor: 'white' }} />
            <FormErrorMessage>{errors.phoneNumber?.message}</FormErrorMessage>
        </FormControl>
        <VStack spacing={4} flexDirection={{ base: 'column', md: 'row' }}>

            <VStack flex={1} spacing={4} alignItems="stretch">
                {/* NGO Name */}
                <FormControl id="emal" isInvalid={!!errors.email}>
                    <Input type="email" placeholder="Email Id" h="4rem" {...register('email')} style={{ backgroundColor: 'white' }} />
                    <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                </FormControl>
            </VStack>

            <VStack flex={1} spacing={4} alignItems="stretch">
                {/* Type of NGO */}
                <FormControl id="category" isInvalid={!!errors.category} style={{ backgroundColor: 'white' }} >
                    <Select placeholder="Category" size="lg" h="4rem" {...register('category')}>
                        <option value="food">Food</option>
                        <option value="clothing">Clothng</option>
                        <option value="books">Books</option>
                        <option value="sports">Sports/Recreation Equipment</option>
                        <option value="toys">Toys</option>

                    </Select>
                    <FormErrorMessage>{errors.category?.message}</FormErrorMessage>
                </FormControl>
            </VStack>
        </VStack>
        <FormControl id="description" isInvalid={!!errors.description} >
            <Textarea
                {...register('description')}
                style={{ backgroundColor: 'white' }}
                placeholder="Enter your message..."
                size="lg"
                className="mb-4 mt-4"
                resize="vertical" // Allow vertical resizing of the textarea
            />
            <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
        </FormControl>
        <VStack spacing={4} flexDirection={{ base: 'column', md: 'row' }}>
            <VStack flex={1} spacing={4} alignItems="stretch">
                <FormControl id="addressLine1" isInvalid={!!errors?.address?.addressLine1}>
                    <Input type="text" name="address.addressLine1" style={{ backgroundColor: 'white' }} placeholder="addressLine1" h="4rem" {...register('address.addressLine1')} />
                    <FormErrorMessage>{errors?.address?.addressLine1?.message}</FormErrorMessage>
                </FormControl>
                <FormControl id="street" isInvalid={!!errors?.address?.street}>
                    <Input type="text" style={{ backgroundColor: 'white' }} placeholder="Street" name="address.street" h="4rem" {...register('address.street')} />
                    <FormErrorMessage>{errors?.address?.street?.message}</FormErrorMessage>
                </FormControl>
                <FormControl id="state" isInvalid={!!errors?.address?.state} style={{ backgroundColor: 'white' }} >
                    <Select placeholder="State" size="lg" h="4rem" {...register('address.state')}>
                        <option value="karnataka">Karnataka</option>
                    </Select>
                    <FormErrorMessage>{errors.adress?.state?.message}</FormErrorMessage>
                </FormControl>



            </VStack>

            <VStack flex={1} spacing={4} alignItems="stretch">
                {/* Address */}
                <FormControl id="addressLine2" isInvalid={!!errors?.address?.addressLine2}>
                    <Input type="text" style={{ backgroundColor: 'white' }} placeholder="addressLine2" name="address.addressLine2" h="4rem" {...register('address.addressLine2')} />
                    <FormErrorMessage>{errors?.address?.addressLine2?.message}</FormErrorMessage>
                </FormControl>
                <FormControl id="city" isInvalid={!!errors?.address?.city}>
                    <Input type="text" style={{ backgroundColor: 'white' }} placeholder="City" name="address.city" h="4rem" {...register('address.city')} />
                    <FormErrorMessage>{errors?.address?.city?.message}</FormErrorMessage>
                </FormControl>
                <FormControl id="pincode" isInvalid={!!errors?.address?.pincode}>
                    <Input type="text" style={{ backgroundColor: 'white' }} placeholder="Pin Code" name="address.pinCode" h="4rem" {...register('address.pinCode')} />
                    <FormErrorMessage>{errors?.address?.pinCode?.message}</FormErrorMessage>
                </FormControl>

            </VStack>
        </VStack>
        <FileUploadButton returnImage={setImageurl} />
        <Button type="submit" text='SUBMIT' bgColor='#FF6D6D' />


    </form >);
    return (
        <>
            <LoadingOverlay isLoading={loading}></LoadingOverlay>
            <AlertDialog
                isOpen={isAlertOpen}
                onClose={() => { setAlertOpen(false); }}
                errorMessage={error || ''}
            />
            <div className='scrollbar-hide'>
                < Navbar />
                <Banner backgroundImage='bg-resources' text='Resources' buttons={buttons} />
                {role === 'NGO_USER' ? (<ResourcesAdmin />) : (<ResourcesUser sendDataToParent={handleChildData} handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal} />)}
                <Footer />
            </div>
            {ReactDOM.createPortal(
                <ModalComponent title="Add a Resource" isOpen={isModalOpen} onClose={handleCloseModal} body={body} />,
                document.body
            )}
        </>
    );
};

export default Resources;
