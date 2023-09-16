const ShoeCard = ({
  imgURL: { bigShoe, thumbnail },
  changeBigShoeImage,
  bigShoeImg,
}) => {
  const handleClick = () => {
    const heroImg = document.getElementById('hero-img');

    if (bigShoe !== bigShoeImg) {
      heroImg.classList.add('opacity-0');
      setTimeout(() => {
        changeBigShoeImage(bigShoe);
      }, 300);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === bigShoe ? 'border-coral-red' : 'border-transparent'
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};
export default ShoeCard;
