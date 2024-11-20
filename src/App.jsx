import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import Container4List from "./components/Container4List";
import Nav from "./components/Nav";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";
import Search from "./components/Search";
function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [localRun, setLocalRun] = useState(true);
  return (
    <>
      <Nav />
      <div>
        <Search
          recipes={recipes}
          setRecipes={setRecipes}
          setSelectedId={setSelectedId}
          localRun={localRun}
        />
      </div>
      <Container>
        <Container4List>
          <RecipeList recipes={recipes} setSelectedId={setSelectedId} />
        </Container4List>
        <Container4List>
          <RecipeDetails selectedId={selectedId} localRun={localRun} />
        </Container4List>
      </Container>
    </>
  );
}

export default App;
