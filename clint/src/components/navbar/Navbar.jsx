import { ArrowDropDown,Notifications, Search } from "@material-ui/icons"
import {  useState } from "react";
import "./navbar.scss"

const Navbar = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   

   window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
   };
    return (
        <div className={isScrolled ?"navbar scrolled":"navbar"}>
           <div className = "container">
             <div className = "left">
             <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2d/SW_logo_plantilla.png"
            alt=""
          />
          <span>HOME PAGE</span>
          <span>SERIES</span>
          <span>MOVIES</span>
          <span>NEW AND POPULAR</span>
          <span>MY LIST</span>
             </div>

             <div className = "right">
             <Search className="icon"/>
             <span>  Kid  </span>
          <Notifications className="icon " />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
            <div className="profile">
           < ArrowDropDown  className="icon" />
           <div className="options"> 
              <span>Settings</span>
              <span>Logout</span>
             </div>
          
             </div>

           </div>
           </div>
        </div>
    )
}

export default Navbar
