import SectionHeading from '../sectionHeading/SectionHeading';
import Children from '../../assets/children.png';
import Button from '../ui/Button/Button';
import ResourceForm from './ResourceForm';

const Community = () => {
  return (
    <div className='bg-resource-pattern  flex items-center justify-center mx-auto relative w-screen h-screen  bg-no-repeat sm:bg-cover md:bg-cover bg-contain'>
      <div className='flex flex-col max-w-2xl '>
        <SectionHeading
          heading='How We Help'
          title='Join The Community To Give Education For Children'
        />
        <p>
          Lorem Ipsum is simply dummy text of the printin typesetting dummy text
          ever when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
        </p>
        <img className='bg-contain' src={Children} alt='' />
        <Button text='MORE CAUSES' bgColor='#FF6D6D' onClick={() => {}} />
      </div>
      <ResourceForm />
    </div>
  );
};

export default Community;
