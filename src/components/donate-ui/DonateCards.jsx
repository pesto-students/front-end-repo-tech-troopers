import School from '../../assets/build_school.png';
import Aid from '../../assets/medical_aid.png';
import Water from '../../assets/safe_water.png';
import Rights from '../../assets/human_rights.png';
import DonateCard from './DonateCard';
import AddCause from './AddCause';
import useAxios from '../../hooks/useAxios';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';
import { SpinnerCircular } from 'spinners-react';

function DonateCards({ openModal }) {
  const { data, loading, error, fetchData } = useAxios();
  let [isOpen, setIsOpen] = useState(false);

  const role = localStorage.getItem('userRole');

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    fetchData('cause');
  }, []);

  return (
    <section className='relative pt-8 pb-24 px-12 w-full bg-gray-50'>
      {loading ? (
        <div className='flex items-center justify-center mt-10'>
          <SpinnerCircular color={'#FF6D6D'} size={100} />
        </div>
      ) : (
        <div className='flex items-center flex-wrap justify-around space-y-5'>
          {data?.causeList?.map((card) => (
            <DonateCard {...card} key={card._id} />
          ))}
        </div>
      )}
      {role !== 'USER' && data ? (
        <div
          onClick={openModal}
          className='absolute w-full bottom-5 left-[90%] cursor-pointer'
        >
          <span className='p-4 bg-primary h-16 w-16 rounded-full text-white text-3xl font-extrabold flex items-center justify-center'>
            +
          </span>
        </div>
      ) : null}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <div className='fixed inset-0 bg-primary/25' />
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-primary bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-[110vh] items-center justify-center p-4 text-center z-50'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-50 p-6 text-left align-middle shadow-xl transition-all'>
                  <AddCause closeModal={closeModal} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
}

export default DonateCards;
