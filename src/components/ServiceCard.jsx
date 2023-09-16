const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 min-w-[350px] rounded-[20px] shadow-3xl px-10 py-16 hover-scale-up">
      <div className="w-11 h-11 flex items-center justify-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="font-bold text-3xl mt-5 font-palanquin leading-normal">
        {label}
      </h3>
      <p className="mt-3 break-words text-lg text-slate-500 leading-normal">
        {subtext}
      </p>
    </div>
  );
};
export default ServiceCard;
