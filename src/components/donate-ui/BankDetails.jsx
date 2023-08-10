import QR from '../../assets/QR-Code.png';
import Button from '../ui/Button/Button';

const bankDummyData = [
  {
    id: 1,
    cardTitle: 'Account Number',
    cardDesc: '222333330000456987',
  },
  {
    id: 2,
    cardTitle: 'Beneficiar Name',
    cardDesc: 'NGO',
  },
  {
    id: 3,
    cardTitle: 'IFSC Code',
    cardDesc: 'NGOBIOBNKPIS',
  },
];

const BankDetails = () => {
  return (
    <section className="w-[1200px] bg-gray-100 flex mt-24 mx-auto px-24 py-20">
      {/* section left */}
      <div className="max-w-lg">
        <h2 className="text-dark text-3xl font-shippori font-extrabold pb-3">
          Donate Here
        </h2>
        <p className="text-gray-dark text-xl font-work font-normal">
          Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque.
        </p>
        <div className="flex px-6 mt-5 items-center  rounded-3xl space-x-10 w-[380px] py-4 bg-white">
          <img src={QR} alt="" />
          <h3 className="font-work text-xl font-medium">
            Scan this QR code to Donate to{' '}
            <span className="text-primary">NGO</span>
          </h3>
        </div>
      </div>

      {/* section right */}
      <div className="pl-10">
        <h1 className="text-dark text-3xl font-shippori pb-3 font-extrabold">
          Bank Details
        </h1>
        <p className="text-gray-dark text-xl font-work font-normal">
          Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque.
        </p>

        {bankDummyData.map((item, id) => (
          <div
            key={id}
            style={{
              backgroundColor: item.backgroundColor,
              color: item.showButton ? '' : '#fff',
            }}
            className="flex items-center justify-between h-8 pt-11 space-x-3"
          >
            <p className="font-work font-medium whitespace-nowrap text-md md:text-xl text-gray-dark">
              {item.cardTitle}
            </p>
            <p className="font-work font-medium whitespace-nowrap text-md md:text-xl text-gray-dark">
              {item.cardDesc}
            </p>
          </div>
        ))}
        <div className="mt-11">
          <Button text="COPY ACCOUNT DETAILS" bgColor="#2E4049" />
        </div>
      </div>
    </section>
  );
};

export default BankDetails;
