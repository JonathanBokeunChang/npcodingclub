import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NP Coding Club | Learn to Code for Free',
  description:
    'NP Coding Club empowers middle and high school students to master programming through gamified, project-based learning. Free Web Dev, AI/ML, and USACO courses.',
  keywords: [
    'coding club',
    'learn to code',
    'programming for kids',
    'web development',
    'python',
    'machine learning',
    'USACO',
    'competitive programming',
    'free coding courses',
  ],
  authors: [{ name: 'NP Coding Club' }],
  openGraph: {
    title: 'NP Coding Club | Learn to Code for Free',
    description:
      'Empowering students to master programming through gamified learning.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <AuthProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
