const Button = ({ label, iconURL, bgColor, borderColor, textColor }) => {
  return (
    <button
      className={`transition duration-300 ease-in-out flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
        bgColor ? bgColor : 'bg-coral-red hover:bg-[#f05a48] btnIconTransform'
      } rounded-full ${textColor ? textColor : 'text-white'} ${
        borderColor ? borderColor : 'border-coral-red'
      }`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right"
          className="ml-2 rounded-full h-5 w-5 transition duration-300"
        />
      )}
    </button>
  );
};
export default Button;
