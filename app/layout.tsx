import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StarsCanvas from '@/components/main/StarBackground';
import Navbar from '@/components/main/Navbar';
import Footer from '@/components/main/Footer';
import GoogleAnalytics from "@/components/main/GoogleAnalytics";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Krishnpal Singh Chouhan | Portfolio',
    description: 'This is my portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
        <GoogleAnalytics />
        {children}
        <Footer />
        </body>
        </html>
    );
}
