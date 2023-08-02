import SectionHeading from '../sectionHeading/SectionHeading';
import Button from '../ui/Button/Button';
import Goals from './Goals';

const Aboutus = () => {
  return (
    <section className=' overflow-x-hidden justify-around md:justify-center mx-auto'>
      {/* Section Top */}
      <div className=' w-72  leading-10 pb-1'>
        <SectionHeading
          heading='About Us'
          title='Help People, Our Main Goals'
        />
      </div>

      {/* Section bottom */}
      <div className='w-[602px]'>
        <p className='pb-7 text-gray-dark font-work text-xl font-medium leading-6'>
          Lorem Ipsum is simply dummy text of the printin typesetting dummy text
          ever when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
        </p>
        <p className='pb-7 text-gray-dark font-work text-xl font-medium leading-6'>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining when an unknown printer took a
          galley of type and scrambled it to make a type specimen book.
          essentially.
        </p>
        <Button
          text='MORE ABOUT'
          bgColor='#FF6D6D'
          width=''
          borderRadius='34'
        />
      </div>
    </section>
  );
};

export default Aboutus;
