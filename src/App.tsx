
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
        <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -10,
          backgroundImage: "url('/circuit-dark.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          backgroundPosition: "top left",
        }}
      />
      <LoadingScreen>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LoadingScreen>
    </BrowserRouter>
  );
}
