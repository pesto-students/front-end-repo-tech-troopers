import Button from '../ui/Button/Button';

const Message = () => {
  return (
    <div className="bg-message-pattern pb-4 md:pt-16  bg-primary relative w-screen h-full  md:h-[65vh]  bg-no-repeat sm:bg-cover md:bg-cover bg-contain">
      <div className="flex flex-col space-y-1 md:space-y-4 items-center justify-center">
        <h5 className="text-white font-ellen text-lg md:text-3xl font-normal leading-9">
          Let's make a difference together!
        </h5>
        <p className="font-work text-white font-normal leading-6 text-sm md:text-xl">
          We're just a message away,write to us today
        </p>
      </div>

      <form className="flex pt-5 md:pt-10 flex-col items-center space-y-4">
        <input
          type="email"
          placeholder="Enter your Email"
          className="w-3/4 md:w-96 h-10 md:h-16 rounded-full px-4 outline-none"
        />
        <textarea
          className="w-3/4 md:w-96 h-24 md:h-32 rounded-3xl px-4 outline-none p-4"
          placeholder="Enter your Message"
        />
        <Button text="SEND" bgColor="#2E4049" />
      </form>
    </div>
  );
};

export default Message;
