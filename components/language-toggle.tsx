"use client";

import { usePathname, useRouter } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (value: string) => {
    router.push(pathname.replace(/^\/[a-z]{2}/, `/${value}`));
  };

  return (
    <Select onValueChange={handleChange} defaultValue={pathname.split('/')[1] || 'fr'}>
      <SelectTrigger className="w-[100px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="fr">Français</SelectItem>
        <SelectItem value="en">English</SelectItem>
      </SelectContent>
    </Select>
  );
}