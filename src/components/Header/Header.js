import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from './../assets/images/logo.png';

const Header = (props) => {

    return <header>
        <div className={classes.header}>
            <img src={logo} alt=""/>
                <img src={props.photo} alt="" className={classes.img}/>
                <div>
                    {props.isAuth ? props.email : <NavLink to={"/login/"}>login</NavLink>}
                </div>

        </div>

    </header>
}

export default Header