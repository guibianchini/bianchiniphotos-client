import { Route, Switch } from "react-router-dom";
import { Menu, Footer } from "./components";
import Home from "./pages/home";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Menu />
      <Switch>
        {/* <Route path='/panda' component={Panda}/>  
             <Route path='/gorilla' component={Gorilla}/>               
             <Route path='/rhino' component={Rhino}/> 
             <Route path='/seaTurtle' component={SeaTurtle}/>   */}
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
