import { useEffect } from "react";
import { useMotionValue, motion, animate, useTransform } from "motion/react";
import Footer from "./Footer";
import { Features } from "./Features";
import Architecture from "./Architecture";
import { BlurFade } from "../components/Blur";
import Githubrepo from "@/Views/Githubrepo";
import FullscreenDiagram from "../components/FullScreenDiagram";
import Hero from "./Hero";
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
    <div className="min-h-screen">
      <BlurFade delay={0.3} duration={1} inView>
        <Hero />
      </BlurFade>
      <BlurFade delay={1} duration={1} inView>
        <Githubrepo />
      </BlurFade>{" "}
      <BlurFade delay={0.3} duration={1} inView>
        <Features />
      </BlurFade>
      <BlurFade delay={0.3} duration={1} inView>
        <Architecture />
      </BlurFade>
      <p className="heading">System Architecture Diagram</p>
      <FullscreenDiagram />
      <Footer />
    </div>
  );
}
