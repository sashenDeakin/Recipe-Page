import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MyRecipes from "./components/my-recipes";
import RecipePage from "./components/recipe-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipePage />} />
        <Route path="/recipes" element={<MyRecipes />} />
      </Routes>
    </Router>
  );
}

export default App;
