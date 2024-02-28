import "./App.css";
import { Header } from "./partials/header";
import { HeroImage } from "./partials/HeroImage";
import { Section1 } from "./partials/Section1";
import { Section2 } from "./partials/Section2";
import { Section3 } from "./partials/Section3";
import { Section4 } from "./partials/Section4";
import { Footer } from "./partials/Footer";

function App() {
  return (
    <>
      <Header />
      <Section1 />
      <HeroImage />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </>
  );
}

export default App;
