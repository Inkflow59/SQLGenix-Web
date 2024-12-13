import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { useTranslations } from 'next-intl';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SQLGenix - Modern PHP SQL Library',
  description: 'A modern and powerful PHP library for SQL query generation and manipulation',
};

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const t = useTranslations();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader t={t} />
          {children}
          <footer className="border-t py-8 mt-20">
            <div className="container mx-auto px-4 text-center text-muted-foreground">
              <p>© {new Date().getFullYear()} SQLGenix. {t('footer.rights')}</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}