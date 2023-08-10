import Button from '../ui/Button/Button';

const VolunteerListing = () => {
  return (
    <section className="w-[850px] mx-auto mt-16 mb-6 bg-white max-w-6xl">
      <div className="flex items-center py-4 justify-start space-x-32 px-4">
        <h3 className="text-dark font-shippori text-2xl font-extrabold">
          Org Name
        </h3>
        <h4 className="text-gray-dark font-work text-2xl font-normal">
          HSR LAYOUT| Bangalore
        </h4>
        <h5 className="text-gray-dark font-work text-2xl font-normal">
          Remote
        </h5>
      </div>

      <div className="py-4 max-w-3xl px-4">
        <h3 className="text-dark font-work text-xl font-medium">
          SKILL/CATEGORY
        </h3>
        <p className="text-gray-dark font-work text-lg font-normal">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered altera in some form, by injected randomised
          words.
        </p>
      </div>

      <div className="flex items-center pb-4 justify-center">
        <Button text="READ MORE" bgColor="#000" textColor="#fff" />
      </div>
    </section>
  );
};

export default VolunteerListing;
