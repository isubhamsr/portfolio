import "tailwindcss/tailwind.css"
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routers from "./Routers";
import Base from "./modules/core/Base";

function App() {
  return (
    <BrowserRouter>
      <Base>
        <Routers />
      </Base>
    </BrowserRouter>
  );
}

export default App;
