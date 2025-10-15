import {  Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter =Inter({subsets: ["latin"]});

export const metadata = {
  title: "AI Content Platform",
  description: "Content Creation Powered by AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${inter.className} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* Header  */}
            <main className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
            {children}
            </main>
          </ThemeProvider>
      </body>
    </html>
  );
}
