import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Navbar from '../../components/navbar/Navbar';
import Wedo from '../../components/homepage-ui/Wedo';
import OurCauses from '../../components/homepage-ui/OurCauses';
import Aboutus from '../../components/homepage-ui/Aboutus';
import Goals from '../../components/homepage-ui/Goals';
import DropDown from '../../components/commons/DropDown';
import Button from '../../components/ui/Button/Button';
import SearchElement from '../../components/volunteer-ui/Search';
import { fetchvolunteersadmins } from '../../redux/features/volunteerActions';
import { deleteVolunteer } from '../../redux/features/volunteerSlice';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import VolunteerListing from '../../components/volunteer-ui/VolunteerListing';
import ModalComponent from '../../components/commons/Modal';
import axiosHelper from '../../axiosHelper';
import InterestedUsers from '../../forms/InterestedUsers';

const options = ['food', 'clothing', 'books', 'sports', 'toys'];
const VolunteerAdmin = ({ sendDataToParent }) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { volunteers } = useSelector((state) => state.volunteers) || [];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState([]);
  // async function onReadMoreClick() {
  useEffect(() => {
    if (userInfo) dispatch(fetchvolunteersadmins());
  }, []);

  const handleSearch = (query) => {
    dispatch(
      fetchvolunteersadmins({ city: userInfo.address.city, search: query })
    ); // Dispatch your search action here
  };
  const handleFilter = (filter) => {
    dispatch(fetchvolunteeradmins({ city: userInfo.address.city, filter }));
  };
  async function handleDeleteClick(volunteerId) {
    try {
      const data = await axiosHelper.delete(`/voluntary/admin/${volunteerId}`);
      if (data === 'Task deleted successfully') {
        dispatch(deleteVolunteer(volunteerId));
      }
    } catch (error) {
      // alert('Error uploading image.');
      console.error(error);
    }
  }
  async function onEditCLick(resourceData) {
    sendDataToParent(resourceData);
  }
  const showDetails = (interestedUsers) => {
    if (JSON.stringify(interestedUsers) !== JSON.stringify(modalContent))
      setModalContent(interestedUsers);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className='bg-lightg flex flex-col items-center justify-center'>
        {volunteers.map((volunteer) => (
          <VolunteerListing volunteerDetails={volunteer}>
            {volunteer.interestedUsers &&
              volunteer.interestedUsers.length > 0 ? (
              <Button
                text='READ MORE'
                bgColor='#000'
                onClick={() => {
                  showDetails(volunteer.interestedUsers);
                }}
                textColor='#fff'
              />
            ) : (
              <>
                {' '}
                <Button
                  text='EDIT'
                  onClick={() => onEditCLick(volunteer)}
                  bgColor='#000'
                  textColor='#fff'
                />
                <Button
                  text='DELETE'
                  bgColor='#000'
                  onClick={() => {
                    handleDeleteClick(volunteer._id);
                  }}
                  textColor='#fff'
                />
              </>
            )}
          </VolunteerListing>
        ))}
      </div>
      {ReactDOM.createPortal(
        <ModalComponent
          title='Interested People'
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
          body={
            <>
              <InterestedUsers participants={modalContent}></InterestedUsers>
            </>
          }
        />,
        document.body
      )}
    </>
  );
};

export default VolunteerAdmin;
