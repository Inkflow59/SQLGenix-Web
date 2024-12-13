"use client";

import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ Icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
      <Icon className="h-12 w-12 mb-4 text-primary" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}