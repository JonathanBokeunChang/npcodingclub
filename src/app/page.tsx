import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { Courses } from '@/components/landing/Courses';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Testimonials } from '@/components/landing/Testimonials';
import { CTA } from '@/components/landing/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Courses />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </>
  );
}
