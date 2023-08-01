function Button({ text, bgColor, width, borderRadius, onClick }) {
  const buttonStyle = {
    backgroundColor: bgColor,
    width: width ? width : "fit-content",
    borderRadius: borderRadius ? `${borderRadius}px` : "34px",
  };

  return (
    <button
      className="text-white font-medium text-lg px-8 py-5"
      style={buttonStyle}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;

// function Button({ text, bgColor, onClick }) {
//   return (
//     <button
//       className={`bg-primary w-fit text-white font-medium text-lg px-5 py-6 rounded-[34px]`}
//       onClick={onClick}
//     >
//       {text}
//     </button>
//   );
// }

// export default Button;
