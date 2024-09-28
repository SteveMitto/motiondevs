import Header from "./_components/Header";
import Hero from "./_components/Hero";
import OurServices from "./_components/OurServices";
import SocialProof from "./_components/SocialProof";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <SocialProof />
      <OurServices />
    </div>
  );
}
