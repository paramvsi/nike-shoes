import Button from '../components/Button';

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-xl:flex-col gap-10" id="contact-us">
      <h3 className="text-3xl leading-[68px] font-palanquin font-bold lg:max-w-md">
        Sign up for <span className="text-coral-red"> Updates </span>& Newsletter.
      </h3>
      <div className="flex lg:max-w-[40%] w-full items-center max-sm:flex-col gap-5 p-2.5 rounded-full sm:border sm:border-slate-gray">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label={'Sign Up'} fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
