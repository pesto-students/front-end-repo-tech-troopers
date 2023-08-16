import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/commons/BannerImage';
import SingleEventCard from '../../components/events-ui/SingleEventCard';
import Footer from '../../components/commons/Footer';
import Button from '../../components/ui/Button/Button';
import axiosHelper from '../../axiosHelper';
import { toggleresourcestatus } from '../../redux/features/authActions';
const ResourceSingle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { resourceId } = useParams();
  let { resources } = useSelector((state) => state.resources) || [];
  resources = resources.find((res) => res._id === resourceId);

  const resourceData = [
    {
      id: 1,
      title: 'Created At',
      desc: resources?.createdAt,
      backgroundColor: '#FF6D6D',
      showButton: true,
    },
    {
      id: 2,
      title: 'Created By',
      desc: resources?.name,
      backgroundColor: '#2E4049',
      showButton: false,
    },
    {
      id: 3,
      title: 'Phone No.',
      desc: resources?.phoneNumber,
      backgroundColor: '#77D7D3',
      showButton: false,
    },
  ];

  const handleActionTooggle = async () => {
    try {
      const action = resources.status === 'APPROVED' ? 'ACTIVE' : 'APPROVE';
      await dispatch(
        toggleresourcestatus({
          action,
          resourceID: resourceId,
          userID: resources?.userId,
        })
      );
      navigate('/resources');
      // Update auth and resources store details (if needed)
      // ... your code to update the stores ...
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <>
      <Navbar />
      <Banner backgroundImage='bg-resources' text='Resources' buttons={<></>} />
      <section className='flex px-6 items-center justify-center py-6'>
        <div className='flex flex-col items-center'>
          <img
            src={resources?.imageURL || '/src/assets/volunteer_background.png'}
            className='bg-cover w-[800px]'
            alt=''
          />
          <div className='flex items-center justify-center -mt-10'>
            {resourceData.map((item, id) => (
              <div key={id} style={{ backgroundColor: item.backgroundColor }}>
                <div
                  className={` p-8 w- 48 h - 56 md: h - 48 py - 6 md: py - 10 px - 3 md: w - 56 md: px - 6`}
                >
                  <h2 className='font-shippori text-lg md:text-2xl text-white font-extrabold leading-1'>
                    {item.title}
                  </h2>
                  <p className='pt-5 pb-5 font-work text-xs md:text-lg text-white font-normal leading-6'>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className='max-w-xl grid grid-cols-1 gap-y-6'>
            <div className='flex flex-col max-w-full whitespace-normal p-4'>
              <h3 className='pt-12 pb-3 text-3xl font-shippori font-extrabold'>
                Category
              </h3>
              <p className='text-gray-dark text-xl font-normal'>
                {resources?.category}.
              </p>
            </div>
            <div className='flex flex-col max-w-full whitespace-normal p-4'>
              <h3 className='pt-12 pb-3 text-3xl font-shippori font-extrabold'>
                Description
              </h3>
              <p className='text-gray-dark text-xl font-normal'>
                {resources?.description}.
              </p>
            </div>
            <div className='flex flex-col max-w-full whitespace-normal p-4'>
              <h3 className='pt-12 pb-3 text-3xl font-shippori font-extrabold'>
                Address
              </h3>
              <p className='text-gray-dark text-xl font-normal'>
                {resources?.address.addressLine2}, {resources?.address.city},{' '}
                {resources?.address.state}, {resources?.address.pinCode}
              </p>
            </div>
          </div>

          <div className='flex items-center pb-4 justify-center gap-[1.88rem]'>
            <Button
              text={resources?.status === 'APPROVED' ? 'DISAPPROVE' : 'APPROVE'}
              onClick={handleActionTooggle}
              bgColor='#FF6D6D'
              textColor='#fff'
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default ResourceSingle;
