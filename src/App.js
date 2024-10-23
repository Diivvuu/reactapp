import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import MainSection from "./components/main-section";
import Footer from "./components/footer";

function App() {
  return (
    <div className="w-full min-h-screen font-poppins">
      <Header />
      <Hero />
      <MainSection/>
      <Footer/>
    </div>
  );
}

export default App;
