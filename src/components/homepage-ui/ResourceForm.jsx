import Button from '../ui/Button/Button';

const ResourceForm = () => {
  return (
    <div className='relative flex flex-col justify-center min-h-screen overflow-hidden'>
      <div className='w-full p-6 m-auto bg-transparent rounded-md shadow-md lg:max-w-xl'>
        <h1 className='text-4xl text-white font-ellen font-normal leading-9'>
          Add a Resource to Help Our Cause
        </h1>
        <form className='mt-6'>
          <div className='mb-2'>
            <input
              type='text'
              className='block w-full px-4 py-2 mt-8 h-14 text-purple-700 bg-transparent border border-white  rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
              placeholder='Full Name*'
            />
          </div>
          <div className='mb-2'>
            <input
              type='email'
              className='block w-full px-4 py-2 mt-8 h-14 text-purple-700 bg-transparent border border-white rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
              placeholder='Email Address*'
            />
          </div>
          <div className='mb-2'>
            <input
              type='text'
              className='block w-full px-4 py-2 mt-8 h-14 text-purple-700 bg-transparent border border-white rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
              placeholder='Resource Category*'
            />
          </div>
          <div className='mb-2'>
            <input
              type='number'
              className='block w-full px-4 py-2 mt-8 h-14 text-purple-700 bg-transparent border border-white rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
              placeholder='Phone Number*'
            />
          </div>
          <div className='mb-2'>
            <input
              type='textarea'
              className='block w-full px-4 py-2 mt-8 h-36 text-purple-700 bg-transparent border border-white rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
              placeholder='Resource Description*'
            />
          </div>
          <div className='mt-6 text-center'>
            <Button text='VOLUNTEER' bgColor='#fff' textColor='#000' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResourceForm;
