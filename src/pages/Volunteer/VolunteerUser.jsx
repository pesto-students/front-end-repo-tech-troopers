import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Wedo from "../../components/homepage-ui/Wedo";
import OurCauses from "../../components/homepage-ui/OurCauses";
import Aboutus from "../../components/homepage-ui/Aboutus";
import Goals from "../../components/homepage-ui/Goals";
import DropDown from '../../components/commons/DropDown';
import Button from '../../components/ui/Button/Button';
import SearchElement from "../../components/volunteer-ui/Search";
import { fetchvolunteersuser } from '../../redux/features/volunteerActions';
import { deleteVolunteer } from '../../redux/features/volunteerSlice';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import VolunteerListing from "../../components/volunteer-ui/VolunteerListing";

const options = [
    'food',
    'clothing',
    'books',
    'sports',
    'toys'
]
const VolunteerUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userInfo } = useSelector(state => state.auth)
    const { volunteers } = useSelector(state => state.volunteers) || [];
    // async function onReadMoreClick() {
    useEffect(() => {
        if (userInfo) dispatch(fetchvolunteersuser());
    }, [])

    const handleSearch = (query) => {
        dispatch(fetchvolunteersuser({ city: userInfo.address.city, search: query })); // Dispatch your search action here
    };
    const handleFilter = (filter) => {
        dispatch(fetchvolunteerusers({ city: userInfo.address.city, filter }))
    }
    async function handleDeleteClick(volunteerId) {
        try {
            const data = await axiosHelper.delete(
                `/voluntary/admin/${volunteerId}`
            );
            if (data === "Volunteer deleted successfully") {
                dispatch(deleteResource);
            }
        } catch (error) {
            // alert('Error uploading image.');
            console.error(error);
        }

    }

    return (
        <div className='bg-lightg flex flex-col items-center justify-center'>
            <SearchElement onSearch={handleSearch} />
            <div className="flex items-center mt-4 justify-center mx-auto">
                <DropDown onOptionChange={handleFilter} options={options} filterName="Category" />
            </div>
            {

                volunteers.map((volunteer) => (
                    <VolunteerListing volunteerDetails={volunteer} >
                        <Button text="READ MORE" bgColor="#000" onClick={() => { navigate(`/volunteer/${volunteer._id}`) }} textColor="#fff" />
                    </VolunteerListing>
                ))
            }

        </div>
    );
};

export default VolunteerUser;
