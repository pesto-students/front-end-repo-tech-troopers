import { useDispatch, useSelector } from 'react-redux';
import Button from '../ui/Button/Button';

const VolunteerListing = ({ volunteerDetails, children }) => {

  const address = useSelector(state => state.auth.userInfo?.address)


  return (
    <section className="w-[850px] mx-auto mt-16 mb-6 bg-white max-w-6xl">
      <div className="flex items-center py-4 justify-start space-x-32 px-4">
        <h3 className="text-dark font-shippori text-2xl font-extrabold">
          {volunteerDetails.ngoDetailId.ngoName}
        </h3>
        <h4 className="text-gray-dark font-work text-2xl font-normal">
          {address && address.addressLine2} {address && address.addressLine2} | {address && address.city}
        </h4>
        <h5 className="text-gray-dark font-work text-2xl font-normal">
          Remote
        </h5>
      </div>

      <div className="py-4 max-w-3xl px-4">
        <h3 className="text-dark font-work text-xl font-medium">
          {volunteerDetails.category}
        </h3>
        <p className="text-gray-dark font-work text-lg font-normal">
          {volunteerDetails.description}
        </p>
      </div>

      <div className="flex items-center gap-4 pb-4 justify-center ">
        {children}
      </div>
    </section>
  );
};

export default VolunteerListing;
