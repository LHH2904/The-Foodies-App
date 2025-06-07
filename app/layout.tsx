import type {Metadata} from "next";
import "./globals.css";
import {ReactNode} from "react";
import MainHeader from "@/components/main-header/main-header";


// const geistSans = Geist({
//     variable: "--font-geist-sans",
//     subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// });

export const metadata: Metadata = {
    title: "The Foodies App",
    description: "Delicious meals, shared by a food-loving community",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body>

        <MainHeader/>
        {children}
        </body>
        </html>
    );
}
