import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import LayoutRoutes from "./components/LayoutRoutes";

function App() {
  return (
    <Router>
      <LayoutRoutes />
    </Router>
  );
}

export default App;
