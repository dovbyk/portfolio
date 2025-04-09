
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <LoadingScreen>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LoadingScreen>
    </BrowserRouter>
  );
}
