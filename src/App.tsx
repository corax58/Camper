import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import PictureCard from "./components/PictureCard";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Why from "./components/Why";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <PictureCard />
      <Why />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
