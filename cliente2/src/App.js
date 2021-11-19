import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Pages
import index from './pages/index';
import login from './pages/login';
import register from './pages/register';
import search from './pages/search';
import search2 from './pages/search2';
import profile from './pages/profile';
import productItem from './pages/productItem';
import cart from './pages/cart';
import CreateProduct from './pages/createProduct';
import build from './pages/build';
import dashboard from './pages/dashboard';
import history from './pages/history';

//Components
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
//CSS
import '../src/css/index.css';
import '../src/css/search.css';
import '../src/css/LoginRegister.css';
import '../src/css/profile.css';
import '../src/css/productItem.css';
import '../src/css/cart.css';
import '../src/css/createProduct.css';
import '../src/css/build.css';
import '../src/css/dashboard.css';

function App() {
  return (
    
    <Router>
      <NavBar />
      <hr className="hr"></hr>      
      <Switch>
        <Route exact path="/" component={index} />
        <Route exact path="/index" component={index} />
        <Route exact path="/login" component={login} />
        <Route exact path="/register" component={register} />
        <Route exact path="/search/:category" component={search} />
        <Route exact path="/search2/:searchWord" component={search2} />
        <Route exact path="/profile" component={profile} />
        <Route exact path="/cart" component={cart} />
        <Route exact path="/CreateProduct" component={CreateProduct} />
        <Route exact path="/productItem/:id" component={productItem} />
        <Route exact path="/build" component={build} />
        <Route exact path="/dashboard" component={dashboard} />
        <Route exact path="/history" component={history} />
        
      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;
