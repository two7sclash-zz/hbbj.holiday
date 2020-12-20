import { ThemeProvider } from "next-themes";

import "@assets/main.css";
import 'react-jinke-music-player/assets/index.css'

import "typeface-open-sans";
import "typeface-merriweather";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
