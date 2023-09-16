const ShoeCard = ({
  imgURL: { bigShoe, thumbnail },
  changeBigShoeImage,
  bigShoeImg,
  toggleImg,
  index,
}) => {
  const handleClick = () => {
    toggleImg(false, index);
    setTimeout(() => {
      changeBigShoeImage(bigShoe);
    }, 500);
  };
  // transform hover:scale-105 transition duration-300
  return (
    <div
      className={`flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl min-h-full max-sm:p-4 border-2 rounded-xl ${
        bigShoeImg === bigShoe
          ? 'border-coral-red'
          : 'border-transparent hover-scale-up'
      } max-sm:flex-1 bg-no-repeat`}
      onClick={handleClick}
    >
      <img
        src={thumbnail}
        alt="shoe collection"
        width={127}
        height={103}
        className="object-contain"
      />
    </div>
  );
};
export default ShoeCard;

{
  /* <div
  className={`border-2 rounded-xl ${
    bigShoeImg === bigShoe ? 'border-coral-red' : 'border-transparent'
  } cursor-pointer max-sm:flex-1`}
  onClick={handleClick}
>
  <div
    className={`flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4`}
  >
    <img
      src={thumbnail}
      alt="shoe collection"
      width={127}
      height={103}
      className="object-contain"
    />
  </div>
</div>; */
}
