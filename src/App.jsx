import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Curiosidades from "./pages/Curiosidades";
import Musicas from "./pages/Musicas";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Curiosidades" element={<Curiosidades />} />
        <Route path="Musicas" element={<Musicas />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
