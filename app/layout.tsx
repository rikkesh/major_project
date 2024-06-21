import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import "bootstrap/dist/css/bootstrap.css"

import "./globals.css";
import  "./src/pages/queue/queue.module.css";
import "./src/pages/stack/stack.module.css";
import "./src/pages/dequeue/dequeue.module.css"



// ...rest of the code



const inter = Inter({ subsets: ["latin"],
  weight:["200","300","400","500","600","700","900"]
 });

export const metadata: Metadata = {
  title: "AlgoViz",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
