import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Services from "./pages/Services";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
