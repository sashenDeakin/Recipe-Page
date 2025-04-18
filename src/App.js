import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import RecipePage from "./components/recipe-page";
import SearchPage from "./components/search-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
