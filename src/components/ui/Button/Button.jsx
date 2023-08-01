function Button({ text, bgColor, onClick }) {
  return (
    <button
      className={`bg-primary w-fit text-white font-medium text-lg px-5 py-6 rounded-[34px]`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
