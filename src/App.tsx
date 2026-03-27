import { Switch, Route } from "wouter";
import Home from "@/pages/Home";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route>
        <div style={{ textAlign: "center", padding: "4rem", color: "#fff" }}>
          <h1>404 — Sahifa topilmadi</h1>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
