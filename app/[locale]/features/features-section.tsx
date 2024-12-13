"use client";

import { Database, Shield, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import { FeatureCard } from "./feature-card";

export function FeaturesSection() {
  const t = useTranslations("features");

  const features = [
    {
      Icon: Database,
      titleKey: "intuitive.title",
      descriptionKey: "intuitive.description",
    },
    {
      Icon: Shield,
      titleKey: "security.title",
      descriptionKey: "security.description",
    },
    {
      Icon: Zap,
      titleKey: "performance.title",
      descriptionKey: "performance.description",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t("title")}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              Icon={feature.Icon}
              title={t(feature.titleKey)}
              description={t(feature.descriptionKey)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}