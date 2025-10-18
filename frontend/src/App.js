import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Music from "./pages/Music";
import Videos from "./pages/Videos";
import Artwork from "./pages/Artwork";
import Merchandise from "./pages/Merchandise";
import Charities from "./pages/Charities";
import News from "./pages/News";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <div className="App min-h-screen bg-gray-900 text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/music" element={<Music />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/artwork" element={<Artwork />} />
            <Route path="/merchandise" element={<Merchandise />} />
            <Route path="/charities" element={<Charities />} />
            <Route path="/news" element={<News />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
