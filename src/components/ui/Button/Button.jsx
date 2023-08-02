function Button({ text, bgColor, textColor, onClick }) {
  const buttonStyle = {
    backgroundColor: bgColor,
    color: textColor ? textColor : 'white',
  };

  return (
    <button
      className='text-white w-fit uppercase font-work font-medium text-[10px] md:text-lg px-4 py-2 md:px-8 md:py-5 rounded-2xl md:rounded-[34px]'
      style={buttonStyle}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
