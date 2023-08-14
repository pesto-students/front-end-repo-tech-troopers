import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Wedo from "../../components/homepage-ui/Wedo";
import OurCauses from "../../components/homepage-ui/OurCauses";
import Aboutus from "../../components/homepage-ui/Aboutus";
import Goals from "../../components/homepage-ui/Goals";
import DropDown from '../../components/commons/DropDown';
import Button from '../../components/ui/Button/Button';
import SearchElement from "../../components/volunteer-ui/Search";
import { fetchresourcesadmins } from '../../redux/features/resourcesAction';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const options = [
    'food',
    'clothing',
    'books',
    'sports',
    'toys'
]
const ResourcesAdmin = () => {
    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.auth)
    const { resources } = useSelector(state => state.resources) || [];
    // async function onReadMoreClick() {
    useEffect(() => {
        console.log("here")
        if (userInfo) dispatch(fetchresourcesadmins({ city: userInfo.address.city }));
    }, [])

    const handleSearch = (query) => {
        dispatch(fetchresourcesadmins({ city: userInfo.address.city, search: query })); // Dispatch your search action here
    };
    const handleFilter = (filter) => {
        dispatch(fetchresourcesadmins({ city: userInfo.address.city, filter }))
    }
    return (
        <>
            <div className='bg-lightg flex flex-col items-center justify-center'>
                <SearchElement onSearch={handleSearch} />
                <div className="flex items-center mt-4 justify-center mx-auto">
                    <DropDown onOptionChange={handleFilter} options={options} filterName="Category" />
                </div>
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

                                        </Box>
                                        <Text className="relative text-[1.56rem] leading-[120%] font-extrabold font-shippori-mincho">
                                            {resource.name}
                                        </Text>
                                        <Text className="relative text-[1.25rem] leading-[130%] text-dimgray inline-block w-[34.06rem]">
                                            {resource.description}
                                        </Text>

                                        <div className="flex items-center pb-4 justify-center gap-[1.88rem]">
                                            <Link to={`/resources/${resource._id}`}>READ MORE</Link>
                                        </div>
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

export default ResourcesAdmin;
