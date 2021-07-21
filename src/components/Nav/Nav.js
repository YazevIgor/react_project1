import React from "react";
import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";
const Nav = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to='/profile' activeClassName={classes.active}>Моя страница</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/messages" activeClassName={classes.active}>Диалоги</NavLink>
        </div>

        <div className={classes.item}>
            <NavLink to="/news" activeClassName={classes.active}>Новости</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/users" activeClassName={classes.active}>Пользователи</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/music" activeClassName={classes.active}>Музыка</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/settings" activeClassName={classes.active}>Настройки</NavLink>
        </div>
    </nav>
}

export default Nav