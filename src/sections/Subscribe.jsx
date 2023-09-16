import Button from '../components/Button';

const Subscribe = () => {
  return (
    <div className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl font-bold font-palanquin text-center capitalize">
        Sign up for <span className="text-coral-red">updates</span> & Newsletter
      </h3>

      <div className="lg:max-w-[40%] w-full flex gap-4 p-2.5 rounded-full items-center max-sm:flex-col sm:border sm:border-slate-500">
        <input className="input" type="text" placeholder="subscribe" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" />
        </div>
      </div>
    </div>
  );
};
export default Subscribe;
