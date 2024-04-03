import "./App.css";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Services } from "./components/Services";
import { TestimonialContainer } from "./components/TestimonialContainer";

function App() {
  return (
    <main className="relative mx-auto max-w-[1440px]">
      <Header />
      <Main />
      <Services />
      <TestimonialContainer />
      <Gallery />
      <Footer />
    </main>
  );
}

export default App;
