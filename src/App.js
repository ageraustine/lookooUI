import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WardrobePage from "./pages/WardrobePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/match" element={<WardrobePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
