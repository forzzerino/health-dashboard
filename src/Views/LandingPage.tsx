import { useEffect } from "react";
import { useMotionValue, motion, animate, useTransform } from "motion/react";
import titleWhite from "../assets/title-white.png";
import Footer from "./Footer";
import { Modules } from "./Hero";
import Architecture from "./Architecture";
import { BlurFade } from "../components/Blur";
import { LogosSlider } from "../components/slider";
import Githubrepo from "@/Views/Githubrepo";

type HTMLContentProps = {
  value: number;
};

export function HTMLContent({ value }: HTMLContentProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration: 5 });
    return () => controls.stop();
  }, [count, value]);

  return <motion.pre>{rounded}</motion.pre>;
}

export default function LandingPage() {
  return (
    <div className="min-h-screen  ">
      <BlurFade delay={0.3} duration={1} inView>
        <div className="py-12 sm:pt-36">
          {" "}
          <div className="md:mx-auto mx-12 lg:max-w-7xl lg:px-8  box-border ">
            <img src={titleWhite} alt="" className="" />
            <p className=" mt-2 text-center text-4xl md:text-6xl font-semibold ">
              <span className="italic font-extralight font-mono  text-cyan-300 ">
                AI-Powered
              </span>{" "}
              Online Charging System
            </p>
          </div>{" "}
        </div>
        <LogosSlider />
      </BlurFade>
      <BlurFade delay={1} duration={1} inView>
        <Githubrepo />
      </BlurFade>
      <BlurFade delay={0.3} duration={1} inView>
        <Architecture />
      </BlurFade>
      <BlurFade delay={0.3} duration={1} inView>
        <Modules />
      </BlurFade>
      <Footer />
    </div>
  );
}
