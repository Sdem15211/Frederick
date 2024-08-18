import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Frederick Desmet",
  description:
    "Frederick Desmet. Loodgieter en installateur sanitair & verwarming, airco en hernieuwbare energie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-background text-white overflow-x-hidden relative`}
      >
        <div className="-z-10 absolute bg-circles/30 size-[46.875rem] rounded-full blur-[9rem] -left-[15.625rem] -bottom-1/2" />
        <div className="-z-10 absolute bg-circles/30 size-[46.875rem] rounded-full blur-[9rem] -right-[17.625rem] -top-1/2" />
        {children}
      </body>
    </html>
  );
}
