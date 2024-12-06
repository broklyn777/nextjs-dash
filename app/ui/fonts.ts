import { Inter, Lusitana } from "next/font/google";

// Primär font
export const inter = Inter({
  subsets: ["latin"],
});

// Sekundär font
export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"], // Justera vikter efter behov
});
