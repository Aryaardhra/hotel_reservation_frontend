import { useContext } from "react";
import "./navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {

  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    dispatch({type: "LOGOUT"});
    localStorage.removeItem("user");
  }
  return (
    <div className="navbar">
       <div className="navContainer">
        <Link to="/" style={{textDecoration: "none"}}>
        <span className="logo">ONLINE BOOKING</span>
        </Link>
         { user ?  user?.username :(
           <div className="navItems">
          <NavLink to="/login" className="log" style={{textDecoration: "none"}}>Login</NavLink>
          <NavLink to="/register" className="log" style={{textDecoration: "none"}}> Register</NavLink>
          </div>
         )}
         <NavLink onClick={handleLogout} to="/" className="logout" >LOGOUT</NavLink>
       </div>
    </div>
  )
  
}


export default Navbar;