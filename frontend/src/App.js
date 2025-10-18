import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";

import Footer from "./components/Footer";

import Home from "./pages/Home";

import About from "./pages/About";

import Music from "./pages/Music";

import Videos from "./pages/Videos";

import Artwork from "./pages/Artwork";

import Merchandise from "./pages/Merchandise";

import Charities from "./pages/Charities";

import News from "./pages/News";

import Contact from "./pages/Contact";

import Admin from "./pages/Admin";

import { Toaster } from "./components/ui/toaster";

function App() {

return (

<div className="App">

<BrowserRouter>

<div className="min-h-screen bg-gray-950 text-white">

<Header />

<main className="min-h-screen">

<Routes>

<Route path="/" element={<Home />} />

<Route path="/about" element={<About />} />

<Route path="/music" element={<Music />} />

<Route path="/videos" element={<Videos />} />

<Route path="/artwork" element={<Artwork />} />

<Route path="/merchandise" element={<Merchandise />} />

<Route path="/charities" element={<Charities />} />

<Route path="/news" element={<News />} />

<Route path="/contact" element={<Contact />} />

<Route path="/admin" element={<Admin />} />

</Routes>

</main>

<Footer />

<Toaster />

</div>

</BrowserRouter>

</div>

);

}

export default App;
