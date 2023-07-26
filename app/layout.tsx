import "./globals.css";
import { inter } from "./fonts";

export const metadata = {
  title: "ERICZHANG",
  description: "ERICZHANG SANDBOX",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} theme-light dark:theme-dark`}>{children}</body>
    </html>
  );
}
