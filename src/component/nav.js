import { Nav, NavItem,NavLink } from "reactstrap"
const NavBar = () => {
    const logOut = () =>{
        localStorage.removeItem("SignUp")
        localStorage.removeItem("SignIn")
          }
    return ( 
            <Nav pills>
             <NavItem> <NavLink   href="/home">Home</NavLink></NavItem>
             <NavItem><NavLink  href="/AddProduit">AddProduct</NavLink> </NavItem>
             <NavItem><NavLink href="/AddCategorie">AddCategorie</NavLink> </NavItem>
             <NavItem><NavLink href="/WishList">WishList</NavLink> </NavItem>
             <NavItem onClick={logOut} ><NavLink href="/">LogOut</NavLink></NavItem>
            </Nav>
     
     );
}
 
export default NavBar;