import { HeroSection } from "./hero/hero-section";
import { FeaturesSection } from "./features/features-section";
import { CodeExampleSection } from "./code-example/code-example-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <CodeExampleSection />
    </main>
  );
}