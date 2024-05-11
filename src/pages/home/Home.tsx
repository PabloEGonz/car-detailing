import Hero from "./hero";
import carFix from "../../assets/car-fix.jpg";
const Home = () => {
  return (
    <div>
      <Hero />
      <div className="py-16 px-5 lg:px-20">
        <h2 className="text-center text-6xl text-gold font-italiana font-semibold py-5">
          Welcome to Just Detail
        </h2>
        <div className="flex gap-5">
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
      <div>
        
      </div>
    </div>
  );
};

export default Home;
