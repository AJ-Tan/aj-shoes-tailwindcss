const Button = ({
  label,
  iconURL,
  bgColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
        bgColor ? bgColor : 'bg-coral-red'
      } rounded-full ${textColor ? textColor : 'text-white'} ${
        borderColor ? borderColor : 'border-coral-red'
      }`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right"
          className="ml-2 rounded-full h-5 w-5"
        />
      )}
    </button>
  );
};
export default Button;
