import Button from "../components/Button";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

// images
import Boat from "../assets/Boat.jpg";
import Boat2 from "../assets/boat-2.jpg";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <Layout className={"h-screen"}>
      <section>
        <div className="my-40 flex items-center">
          <div>
            <h1 className="text-7xl font-extrabold">Explore New Horizons</h1>
            <p className="text-lg mt-8 w-4/5 font-light">
              Welcome to Aqua Voyage Boats — Your gateway to marine adventures!
              Our premium selection promises safety, comfort, and style for all
              your watersport, fishing, and cruising needs. Set sail with us and
              experience the unforgettable.
            </p>
            <div className="flex gap-4 mt-8">
              <Button variant="primary">Subscribe</Button>
              <Button variant="outline">
                <Link to="/about">Read More</Link>
              </Button>
            </div>
          </div>
          <img
            className="w-auto h-[650px] rounded-lg hover:rotate-6 transition-all duration-500"
            src={Boat2}
            alt="Boat sailing to paradice"
          />
          <img
            className="w-auto h-[650px] rounded-lg -mt-32 -ml-56 hover:rotate-6 transition-all duration-500"
            src={Boat}
            alt="Boat sailing to paradice"
          />
        </div>
      </section>
      <Gallery
        className={"grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center"}
      >
        <div className="bg-blue-500 w-full h-full flex items-center justify-start p-8 rounded-lg">
          <div>
            <h2 className="text-4xl font-semibold text-white mb-8">
              Book Your Memorable Cruise Adventure Now
            </h2>
            <Button variant="link">
              <Link to="/contact" className="flex items-center hover:gap-2">
                Book now
                <IoIosArrowForward className="mt-1" size={20} />
              </Link>
            </Button>
          </div>
        </div>
        <img className="rounded-lg" src={Boat2} alt="Our boats in Greece" />
        <img
          className="rounded-lg"
          src={Boat}
          alt="Beautiful Findland Cruise"
        />
      </Gallery>
    </Layout>
  );
}
