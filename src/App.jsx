import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Itsrayhan from "./pages/Itsrayhan";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Itsrayhan />} />
      </Routes>
    </BrowserRouter>
  );
}
