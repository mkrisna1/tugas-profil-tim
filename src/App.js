import { BrowserRouter, Routes, Route } from "react-router-dom";
import Krisna from "./pages/krisna";
import Putra from "./pages/putra";
import Timothy from "./pages/timothy";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/krisna" element={<Krisna />} />
        <Route path="/putra" element={<Putra />} />
        <Route path="/timothy" element={<Timothy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;