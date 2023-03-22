import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useGetCurrentUserQuery } from "./store";
import Header from "./components/Header";
import Landing from "./components/Landing";
import "materialize-css/dist/css/materialize.min.css";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveryNew = () => <h2>SurveryNew</h2>;

function App() {
  useGetCurrentUserQuery();
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/surveys" component={Dashboard}></Route>
          <Route path="/surveys/new" component={SurveryNew}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
