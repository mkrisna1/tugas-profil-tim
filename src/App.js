import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Krisna from "./pages/krisna";
import Putra from "./pages/putra";
import Timothy from "./pages/timothy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/krisna" element={<Krisna />} />
        <Route path="/putra" element={<Putra />} />
        <Route path="/timothy" element={<Timothy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;