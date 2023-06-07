import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";
import Home from "./Home";
import Services from "./Services";
import Customofware from "./Customofware";
import Revolution from "./Revolution";
import Contact from "./Contact";
import About from "./About";
import Estimate from "./Estimate";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/revolution" element={<Revolution />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/estimate" element={<Estimate />} />
          <Route path="/customofware" element={<Customofware />} />{" "}
          {/* <Route path="/mobileapps" element={} /> */}
          {/* <Route path="/websites" element={} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
