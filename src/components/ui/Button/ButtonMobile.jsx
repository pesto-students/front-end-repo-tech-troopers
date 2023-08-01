function ButtonMobile({ text, bgColor, width, borderRadius, onClick }) {
  const buttonStyle = {
    backgroundColor: bgColor,
    width: width ? width : "fit-content",
    borderRadius: borderRadius ? `${borderRadius}px` : "34px",
  };

  return (
    <button
      className="text-white font-medium text-xs px-4 py-2"
      style={buttonStyle}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default ButtonMobile;
