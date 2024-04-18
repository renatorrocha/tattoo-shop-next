import { Inter, Londrina_Solid, Island_Moments } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const londrinaSolid = Londrina_Solid({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-londrina-solid",
});

const islandMoments = Island_Moments({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-island-moments",
});

export const fonts = `${inter.className} ${londrinaSolid.className} ${islandMoments.variable}`;
