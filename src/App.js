import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import './App.css';
import AddCategorie from './component/AddCategorie';
import AddProduit from './component/AddProduit';
import Home from './component/Home';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import WishList from './component/WishList';



function App() {
  return (
    <BrowserRouter>
    <div className="login">
  
<Routes>
       <Route path="/" exact element={<SignIn/>} />
    <Route path="/signUp" element={<SignUp/>}/>
    <Route path='/AddProduit' element={<AddProduit /> }/> 
    <Route path='/AddCategorie' element={<AddCategorie />}/>
    <Route path='/WishList' element={<WishList />}/>
    <Route  path="/Home" element={<Home/>} />
    </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App;
