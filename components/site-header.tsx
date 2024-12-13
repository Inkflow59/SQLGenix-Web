import Link from "next/link";
import { Github } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";

export function SiteHeader({ t }: { t: any }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          SQLGenix
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/docs" className="hover:text-primary">
            {t('navigation.documentation')}
          </Link>
          <Link href="/docs/examples" className="hover:text-primary">
            {t('navigation.examples')}
          </Link>
          <a
            href="https://github.com/sqlgenix/sqlgenix"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <Github className="h-5 w-5" />
          </a>
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </nav>
    </header>
  );
}