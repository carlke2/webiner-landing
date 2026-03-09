import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
}