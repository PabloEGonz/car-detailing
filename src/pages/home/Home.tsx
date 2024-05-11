import Hero from "./hero";
import carFix from "../../assets/car-fix.jpg";
import carwash from "../../assets/car-wash.jpg";
import deepClean from "../../assets/deep-clean.jpg";
const Home = () => {
  return (
    <div className="font-roboto">
      <Hero />
      <div className="py-16 px-5 lg:px-20 bg-car">
        <h2 className="text-center text-6xl text-gold font-italiana font-semibold py-5">
          Welcome to Just Detail
        </h2>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="basis-2/5">
            <img src={carFix} alt="" />
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
      <div className="py-16 px-5 lg:px-10 bg-car2 bg-cover">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="basis-2/5 text-white text-lg class">
            <h4 className="text-3xl font-italiana py-5">Deep Cleaning</h4>
            <p className="text-xl font-light">
              Revitalize your car's interior with our Deep Cleaning service! Say
              goodbye to dirt and grime, and hello to a fresh, like-new cabin.
              Our thorough treatment reaches every corner, leaving your car
              feeling brand new.
            </p>
          </div>
          <div className="basis-3/5 flex">
            <div>
              <img src={carwash} alt="" />
            </div>
            <div>
              <img src={deepClean} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
