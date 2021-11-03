import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Pages
import index from './pages/index';
import login from './pages/login';
import register from './pages/register';

//Components
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
//CSS
import '../src/css/index.css';
import '../src/css/LoginRegister.css';


function App() {
  return (
    
    <Router>
      <NavBar />
      <hr className="hr"></hr>      
      <Switch>
        <Route exact path="/" component={index} />
        <Route exact path="/login" component={login} />
        <Route exact path="/register" component={register} />
        
      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;
