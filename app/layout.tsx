import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Github } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SQLGenix - Librairie PHP moderne pour SQL',
  description: 'Une librairie PHP moderne et puissante pour la génération et la manipulation de requêtes SQL',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <header className="border-b">
          <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              SQLGenix
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/docs" className="hover:text-primary">
                Documentation
              </Link>
              <Link href="/docs/examples" className="hover:text-primary">
                Exemples
              </Link>
              <a
                href="https://github.com/sqlgenix/sqlgenix"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </nav>
        </header>
        {children}
        <footer className="border-t py-8 mt-20">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} SQLGenix. Tous droits réservés.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}