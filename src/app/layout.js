import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import MusicPlayer from "@/components/MusicPlayer";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Muhdan Firdaus Salam | Software Engineer Portfolio",
  authors: {
    name: "Muhdan Firdaus Salam",
  },
  description: "Explore Muhdan Firdaus Salam software engineering portfolio showcasing expertise in frontend, backend, and blockchain development.",
  openGraph: {
    title: "Muhdan Firdaus Salam - Official Web Portfolio",
    description: "Explore Muhdan Firdaus Salam software engineering portfolio showcasing expertise in frontend, backend, and blockchain development.",
    images: [
      {
        url: "https://res.cloudinary.com/detetmaw8/image/upload/v1720009405/g1lls6hukdyyh7cn5aqp.png",
        alt: "Muhdan Firdaus Salam Portfolio",
        width: 1400,
        height: 700,
      },
    ],
    type: "website",
    locale: "en_US",
  },
  keywords: ["Muhdan Firdaus Salam", "Muhdan", "Software Engineer", "Blockchain Developer", "Backend Developer", "Frontend Developer", "Fullstack Developer", "Web Portfolio"],
  twitter: {
    card: "summary_large_image",
    site: "@Temlep557",
    title: "Muhdan Firdaus Salam - Web Portfolio",
    description: "Explore Muhdan Firdaus Salam software engineering portfolio showcasing expertise in frontend, backend, and blockchain development.",
    image: "https://res.cloudinary.com/detetmaw8/image/upload/v1720009405/g1lls6hukdyyh7cn5aqp.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <head>
        <meta property="og:title" content="Muhdan Firdaus Salam - Official Web Portfolio" />
        <meta property="og:description" content="Explore Farid Anang Samudra's software engineering portfolio showcasing expertise in frontend, backend, and blockchain development." />
        <meta property="og:url" content="https://frdanngspolio.vercel.app" />
        <meta property="og:image" content="https://res.cloudinary.com/detetmaw8/image/upload/v1720009405/g1lls6hukdyyh7cn5aqp.png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@yourTwitterHandle" />
        <meta property="twitter:title" content="Farid Anang Samudra - Web Portfolio" />
        <meta property="twitter:description" content="Explore Farid Anang Samudra's software engineering portfolio showcasing expertise in frontend, backend, and blockchain development." />
        <meta property="twitter:image" content="https://res.cloudinary.com/detetmaw8/image/upload/v1720009405/g1lls6hukdyyh7cn5aqp.png" />
      </head>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <MusicPlayer />
        </ThemeProvider>
      </body>
    </html>
  );
}