import { BrowserRouter, Route , Switch} from 'react-router-dom';
import './App.css';
import AddCategorie from './component/AddCategorie';
import AddProduit from './component/AddProduit';
import Home from './component/Home';
import NavBar from './component/nav';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import WishList from './component/WishList';



function App() {
  return (
    <BrowserRouter>
    <div className="login">
  
    <Switch>
       <Route path="/" exact  ><SignIn/></Route>
    <Route path="/signUp"><SignUp/></Route>
    <Route path='/AddProduit'><AddProduit />  </Route>
    <Route path='/AddCategorie'><AddCategorie /></Route>
    <Route path='/WishList'><WishList /></Route>
    <Route  path="/Home" ><Home/></Route>
    </Switch>
    </div>
  </BrowserRouter>
  )
}

export default App;
