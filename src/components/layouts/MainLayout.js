import { ThemeProvider } from "styled-components";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import GlobalStyles from "../styles/Global";
import Content from "./Content";
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#0f0f0f",
    footer: "#000000"
  },
  mobile: "768px"
};

export default function MainLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />

        <Sidebar />

        {children}

        <Footer />
      </>
    </ThemeProvider>
  );
}
