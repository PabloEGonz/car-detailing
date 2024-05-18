import Hero from "./hero";
import carFix from "../../assets/car-fix.jpg";
import carwash from "../../assets/car-wash.jpg";
import deepClean from "../../assets/deep-clean.jpg";
import carDent from "../../assets/car-dent.jpg";
import carDent2 from "../../assets/car-dent2.jpg";
import headlight from "../../assets/headlight.jpg";
import headlight2 from "../../assets/headlight2.jpg";
import ambientLight from "../../assets/ambient-light.jpg";
import ambientLight2 from "../../assets/ambient-light2.jpg";
import Form from "../../components/Form";
const Home = () => {
  return (
    <div className="font-roboto">
      <Hero />
      <div className="py-16 px-5 lg:px-20 bg-car">
        <h2 className="text-center text-6xl text-gold font-italiana font-semibold py-5">
          Welcome to Jus Detail
        </h2>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="basis-2/5">
            <img src={carFix} alt="" loading="lazy" />
          </div>
          <div className="basis-3/5 font-thin">
            <p className="p-2 text-3xl text-balance">
              We are located in Queens, New York, we bring a new level of
              excellence to car detailing services in the area.
            </p>
            <p className="p-2 text-2xl text-balance">
              With a focus on quality and customer satisfaction, we specialize
              in headlight restoration, deep cleaning, paintless dent repair,
              and ambient light installation. Whether your vehicle needs a
              refresh or a complete transformation, we've got you covered.
            </p>
          </div>
        </div>
      </div>
      <div className="py-16 px-5 lg:px-20 bg-car2 space-y-16">
        <div id="deep-cleaning" className="flex flex-col lg:flex-row gap-10">
          <div className="basis-2/5 text-white text-lg class">
            <h4 className="text-3xl font-italiana py-3">Deep Cleaning</h4>
            <p className="text-2xl font-extralight">
              Revitalize your car's interior with our Deep Cleaning service! Say
              goodbye to dirt and grime, and hello to a fresh, like-new cabin.
              Our thorough treatment reaches every corner, leaving your car
              feeling brand new.
            </p>
          </div>
          <div className="basis-3/5 flex">
            <div>
              <img src={carwash} alt="" loading="lazy" />
            </div>
            <div>
              <img src={deepClean} alt="" loading="lazy" />
            </div>
          </div>
        </div>
        <div id="dent-fix" className="flex flex-col lg:flex-row gap-8">
          <div className="basis-2/5 flex">
            <div>
              <img src={carDent} alt="" loading="lazy" />
            </div>
          </div>
          <div className="basis-1/2 text-white text-lg">
            <h4 className="text-3xl font-italiana pb-3">
              Paintless Dent Repair
            </h4>
            <p className="text-2xl font-extralight">
              We offer a convenient solution to restore your vehicle's exterior
              to its pristine state. Our skilled technicians use specialized
              techniques to remove dents without the need for paint or fillers,
              preserving your car's original finish. Say goodbye to unsightly
              dings and hello to a smooth, flawless look.
            </p>
            <img src={carDent2} alt="" loading="lazy" />
          </div>
        </div>
        <div id="headlight" className="flex flex-col lg:flex-row gap-10">
          <div className="basis-2/5 text-white text-lg class">
            <h4 className="text-3xl font-italiana py-3">
              Headlight Restoration
            </h4>
            <p className="text-2xl font-extralight">
              Our skilled technicians use specialized methods to remove
              oxidation and restore clarity to your lights. Say goodbye to
              cloudy, dim beams and hello to clear visibility for safer driving.
            </p>
          </div>
          <div className="basis-3/5 flex">
            <div>
              <img src={headlight} alt="" loading="lazy" />
            </div>
            <div>
              <img src={headlight2} alt="" loading="lazy" />
            </div>
          </div>
        </div>
        <div id="ambient-lights" className="flex flex-col lg:flex-row gap-10">
          <div className="basis-3/5 flex">
            <div>
              <img src={ambientLight} alt="" loading="lazy" />
            </div>
            <div>
              <img src={ambientLight2} alt="" loading="lazy" />
            </div>
          </div>
          <div className="basis-2/5 text-white text-lg class">
            <h4 className="text-3xl font-italiana pb-3">Ambient Lights</h4>
            <p className="text-2xl font-extralight">
              Upgrade your ride with our Ambient Light Installation service!
              Whether you're after a soft glow or a bold burst of color, our
              team specializes in crafting the perfect interior atmosphere for
              your vehicle. Say farewell to dull interiors and welcome a
              personalized ambiance that suits your taste.
            </p>
          </div>
        </div>
      </div>
      <div className="py-16 px-5 lg:px-20 bg-car3 bg-cover">
        <Form />
      </div>
    </div>
  );
};

export default Home;
