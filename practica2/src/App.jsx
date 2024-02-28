import "./App.css";
import { Header } from "./components/Header";
import { HeroImage } from "./components/HeroImage";
import { MainButtons } from "./components/MainButtons";
import { Cards } from "./components/Cards";
import { SectionImg } from "./components/SectionImg";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <HeroImage />
      <MainButtons />
      <Cards />
      <SectionImg />
      <Footer />
    </>
  );
}

export default App;
