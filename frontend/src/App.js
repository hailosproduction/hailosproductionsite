1|import { BrowserRouter, Routes, Route } from "react-router-dom";
2|import "./App.css";
3|import Header from "./components/Header";
4|import Footer from "./components/Footer";
5|import Home from "./pages/Home";
6|import About from "./pages/About";
7|import Music from "./pages/Music";
8|import Videos from "./pages/Videos";
9|import Artwork from "./pages/Artwork";
10|import Merchandise from "./pages/Merchandise";
11|import Charities from "./pages/Charities";
12|import News from "./pages/News";
13|import Contact from "./pages/Contact";
14|import Admin from "./pages/Admin";
15|import { Toaster } from "./components/ui/toaster";
16|
17|function App() {
18|  return (
19|    <div className="App">
20|      <BrowserRouter>
21|        <div className="min-h-screen bg-gray-950 text-white">
22|          <Header />
23|          <main className="min-h-screen">
24|            <Routes>
25|              <Route path="/" element={<Home />} />
26|              <Route path="/about" element={<About />} />
27|              <Route path="/music" element={<Music />} />
28|              <Route path="/videos" element={<Videos />} />
29|              <Route path="/artwork" element={<Artwork />} />
30|              <Route path="/merchandise" element={<Merchandise />} />
31|              <Route path="/charities" element={<Charities />} />
32|              <Route path="/news" element={<News />} />
33|              <Route path="/contact" element={<Contact />} />
34|              <Route path="/admin" element={<Admin />} />
35|            </Routes>
36|          </main>
37|          <Footer />
38|          <Toaster />
39|        </div>
40|      </BrowserRouter>
41|    </div>
42|  );
43|}
44|
45|export default App;
