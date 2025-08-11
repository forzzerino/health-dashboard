import titleWhite from "../assets/title-white.png";
import { LogosSlider } from "../components/slider";
import { FlickeringGridBg } from "@/components/HeroBackground";
function Hero() {
  return (
    <section id="hero" className="mx-auto md:h-[46rem]">
      <FlickeringGridBg />
      <div className="pt-36 md:pt-72 relative lg:px-24 mx-auto px-8 md:px-0 shadow-2xl container ">
        <div className="lg:max-w-xl ">
          <img src={titleWhite} alt="cellenta logo" />
        </div>{" "}
        <p className="mt-6 text-balance text-3xl  md:text-5xl font-semibold ">
          <span className="italic font-extralight font-mono tracking-tighter text-cyan-300 ">
            AI-Powered
          </span>{" "}
          Online Charging System
        </p>
        <p>
          Real-time balance tracking, charging, and customer management for
          telecom services
        </p>
      </div>
      <LogosSlider />
    </section>
  );
}

export default Hero;
