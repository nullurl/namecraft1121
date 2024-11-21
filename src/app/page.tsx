import Hero from '@/components/Hero';
import Features from '@/components/Features';
import NameGenerator from '@/components/NameGenerator';
import NameGuide from '@/components/NameGuide';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <Features />
      <NameGenerator />
      <NameGuide />
      <HowItWorks />
      <Pricing />
    </main>
  );
}