import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
