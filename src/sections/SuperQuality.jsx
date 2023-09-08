import { shoe8 } from '../assets/images';
import Button from '../components/Button';

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capatalize font-bold lg:max-w-lg">
          We Provide you
          <span className="text-coral-red mx-2">Super Quality</span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          This shoe is a classic with a runway inspired look. It has been designed by one of our most famous designers
          and brings back the shape that defined the era. The large Air element ensures long lasting comfort and gives
          the shoe a casual look. The upper material is made of calfskin in a chic light brown colour. The sole is made
          of natural rubber, which is flexible but still robust.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction.</p>
        <div className="mt-11">
          <Button label={'View Details'} />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="Shoe 8" width={570} height={570} className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
