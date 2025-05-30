import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Providers} from './providers';
import {UsageRefreshProvider} from '@/app/components/UsageRefreshContext';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Cloud Storage",
    description: "Secure file storage solution",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" suppressHydrationWarning>

        <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
            <UsageRefreshProvider>

        <Providers>
            <div className="min-h-screen flex flex-col">
                {children}
            </div>
        </Providers>
        </UsageRefreshProvider>
        </body>
        </html>
    );
}