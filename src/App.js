import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home
            // name={name}
            // setName={setName}
            // fetchQuestions={fetchQuestions}
            />
          </Route>
          {/*  <Route path="/quiz">
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route>
          <Route path="/result">
            <Result name={name} score={score} />
          </Route> */}
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
