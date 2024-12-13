"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">{t("title")}</h1>
          <p className="text-xl text-muted-foreground mb-8">{t("description")}</p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/docs">
                {t("documentation")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/docs/getting-started">{t("quickStart")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}