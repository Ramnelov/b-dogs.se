import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "B-Dogs",
  description: "Never put B-Dogs in a corner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className="fixed bottom-0 w-full text-center p-2 text-sm">
          <a
            href="https://github.com/B-Dogs/b-dogs.se"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            https://github.com/Ramnelov/b-dogs.se
          </a>
        </footer>
      </body>
    </html>
  );
}
