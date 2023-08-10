import { useEffect } from 'react';
import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from "../../components/navbar/Navbar";
import Wedo from "../../components/homepage-ui/Wedo";
import OurCauses from "../../components/homepage-ui/OurCauses";
import Aboutus from "../../components/homepage-ui/Aboutus";
import Goals from "../../components/homepage-ui/Goals";
import { fetchresourcesuser } from '../../redux/features/resourcesAction';
import { deleteResource } from '../../redux/features/resourcesSlice';
import axiosHelper from '../../axiosHelper';


const ResourcesUser = ({ sendDataToParent, handleOpenModal }) => {
    const dispatch = useDispatch();
    const { _id } = useSelector(state => state.auth.userInfo)
    const { resources } = useSelector(state => state.resources) || [];
    useEffect(() => {
        if (_id) dispatch(fetchresourcesuser({ userId: _id }))
    }, [])
    async function onEditCLick(resourceData) {
        handleOpenModal();
        sendDataToParent(resourceData);
    }
    async function handleDeleteClick(resourceId) {
        try {
            const data = await axiosHelper.delete(
                `/resource/${resourceId}`
            );
            if (data === "Resource deleted successfully") {
                dispatch(deleteResource);
            }
        } catch (error) {
            // alert('Error uploading image.');
            console.error(error);
        }

    }
    return (
        <>
            <div className='bg-lightg flex flex-col items-center justify-center'>
                {
                    resources.map((resource) => (
                        <Box
                            key={resource._id}
                            className="mb-8 mt-8 top-[25.39rem] left-[21.94rem] w-[60rem] flex flex-col items-center justify-start gap-[2.19rem] text-[1.13rem] font-work-sans"
                            p={8}
                            bg="white"
                        >
                            <Flex
                                className="w-[74.44rem] flex-row items-center justify-start"
                                w="full"
                                justifyContent="space-between"
                            >
                                <Image
                                    className="relative w-[10.06rem] h-[10.22rem] object-cover"
                                    src="https://placehold.co/400"
                                    alt="Image"
                                />
                                <Box
                                    className="bg-base-white w-[38.94rem] flex flex-col py-[5.5rem] px-[2.44rem] box-border items-start justify-start"
                                    w="full"
                                    p={8}
                                    rounded="2xl"
                                >
                                    <Box className="w-[34.06rem] flex flex-col items-start justify-start gap-[1.88rem]">
                                        <Box className="flex flex-row items-center justify-start gap-2">
                                            <Text className="relative uppercase font-medium">
                                                {resource.createdAt} | {resource.address.city}
                                            </Text>
                                            <Button
                                                onClick={() => onEditCLick(resource)}
                                                colorScheme="teal"
                                                size="sm"
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                onClick={() => handleDeleteClick(resource._id)}
                                                colorScheme="red"
                                                size="sm"
                                            >
                                                Delete
                                            </Button>
                                        </Box>
                                        <Text className="relative text-[1.56rem] leading-[120%] font-extrabold font-shippori-mincho">
                                            {resource.name}
                                        </Text>
                                        <Text className="relative text-[1.25rem] leading-[130%] text-dimgray inline-block w-[34.06rem]">
                                            {resource.description}
                                        </Text>
                                    </Box>
                                </Box>
                            </Flex>
                        </Box>
                    ))
                }

            </div>
        </>
    );
};

export default ResourcesUser;
