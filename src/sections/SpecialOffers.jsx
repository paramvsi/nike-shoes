import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';
import Button from '../components/Button';

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="Offer" width={770} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capatalize font-bold lg:max-w-lg">
          <span className="text-coral-red mx-2">Special</span>
          offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Step up your game with the ultimate footwear upgrade from Nike. For a limited time, we're thrilled to offer
          you an unbeatable deal on our latest collection of Nike shoes. Whether you're a seasoned athlete, a
          trendsetter, or just someone who appreciates style and comfort, there's a pair of Nikes waiting for you!
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          <span className="text-black font-bold">Up to 40% off:</span> Yes, you read that right! Get your hands (and
          feet) on your favorite Nike kicks at a fraction of the price.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label={'Shop now'} iconUrl={arrowRight} />
          <Button
            label={'Learn more'}
            backgroundColor={'bg-white'}
            borderColor={'border-slate-gray'}
            textColor={'text-slate-gray'}
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
