import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home'; //
import Login from './components/Login'; //
import Register from './components/Register'; //
import Carrito from './components/Carrito'; //
import Busqueda from './components/Busqueda'; //
import Producto from './components/Producto'; //
import ABCProduct from './components/ABCProduct'; //
import Perfil from './components/Perfil'; //
import Building from './components/Building'; //

function App() {
  return (
    
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Carrito" component={Carrito} />
        <Route exact path="/Busqueda" component={Busqueda} />
        <Route exact path="/Producto" component={Producto} />
        <Route exact path="/ABCProduct" component={ABCProduct} />
        <Route exact path="/Building" component={Building} />
        
      </Switch>
    </Router>
    
  );
}

export default App;
