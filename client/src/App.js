import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveryNew = () => <h2>SurveryNew</h2>;
const Landing = () => <h2>Landing</h2>;

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" component={Header}></Route>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/surveys" component={Dashboard}></Route>
          <Route path="/surveys/new" component={SurveryNew}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
