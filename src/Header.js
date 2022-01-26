import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useStateValue} from "./StateProvider";
import { auth } from './firebase';


function Header() {
    const [{ basket,user },dispatch] = useStateValue();
    const handleAuthenticaton = () =>{
        if(user) {
            auth.signOut();

        }
    }

  

    return(
     <nav className="header">

        {/*logo on the left -> img */}
        <Link to="/">
        <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""></img>
        </Link>
        
        {/* search box */}
        <div className="header_search">
        <input type="text" className="header_searchInput"></input>
        <SearchIcon className="header_searchIcon"></SearchIcon>  
        </div>
      

        {/* 3 Links */}
        <div className="header_nav">
            {/* 1 link */}
            <Link to={!user &&"/login"} >
            <div onClick={handleAuthenticaton} className="header_option">
            <span className="header_optionline1">Hello {!user ? 'Guest':user.email} </span>
            <span className="header_optionline2">{user ? 'Sign Out':'Sign In'}</span>
            </div>
            </Link>

            {/* 2 link */}
            <Link to="/orders" className="header_link">
            <div className="header_option">
            <span className="header_optionline1">Returns</span>
            <span className="header_optionline2">&Orders</span>
            </div>
            </Link>

            {/* 3 link */}
            <Link to="/" className="header_link">
            <div className="header_option">
            <span className="header_optionline1">Try</span>
            <span className="header_optionline2">prime</span>
            </div>
            </Link>

        </div>


        {/* Basket icon with number */}
        <Link to="/checkout" className="header_link">
        <div className="header_optionBasket">
            {/*shopping basket icon*/}
            <ShoppingCartIcon></ShoppingCartIcon>

            {/* number of items in the basket*/}
       <span className="header_optionline2 header_basketCount">{basket.length}</span>

        </div>

        </Link>
            
        </nav>
    );   
    
}

export default Header
