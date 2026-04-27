import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoSection from "@/components/BentoSection";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-accent/20 overflow-x-hidden">
      <Navbar />
      <Hero />
      <BentoSection />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
