import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import ProductModules from "@/components/ProductModules";
import Integrations from "@/components/Integrations";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ThreeBackground from "@/components/ThreeBackground";
import ScrollProgress from "@/components/ScrollProgress";
import MarqueeTicker from "@/components/MarqueeTicker";
import MouseFollower from "@/components/MouseFollower";
import WaveDivider from "@/components/WaveDivider";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-ink flex flex-col font-inter selection:bg-brand-orange/20 selection:text-ink">
      <ScrollProgress />
      <MouseFollower />
      <ThreeBackground />
      <div className="relative z-10 flex flex-col flex-1">
        <Nav />
        <MarqueeTicker />
        <main className="flex-1">
          <Hero />
          <WaveDivider />
          <Stats />
          <WaveDivider flip />
          <Features />
          <WaveDivider />
          <ProductModules />
          <WaveDivider flip />
          <Integrations />
          <WaveDivider />
          <Testimonials />
          <WaveDivider flip />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
