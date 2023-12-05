import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import BodySection from "./components/BodySection";
import ContactSection from "./components/contactsection/ContactSection";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <BodySection />
        <ContactSection />
      </BrowserRouter>
    </div>
  );
}

export default App;
