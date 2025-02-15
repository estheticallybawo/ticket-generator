import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Ticket Generator",
  description: "Developed by Esther for HNG Stage 2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
