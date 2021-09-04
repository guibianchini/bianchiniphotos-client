import { Route, Switch } from "react-router-dom";
import { Menu, Footer } from "./components";
import Home from "./pages/home";
import Routes from "../routes";


import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Menu />
      <Switch>
        <Route
          path="/instagram"
          component={() => {
            global.window &&
              (global.window.location.href = "https://instagram.com/bianchiniphotos");
            return null;
          }}
        />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
      <Routes />
    </>
  );
}

export default App;
