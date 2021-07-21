import React, {useState} from "react";
import userPhoto from '../assets/images/person-male.png'
import styles from './Users.module.css'
import {NavLink} from "react-router-dom";



let Users = (props) => {
    let [firstNumber, setFirstNumber] = useState(0);
    let [lastNumber, setLastNumber] = useState(props.sizePage);
    let pages = [];
    const totalPages = Math.ceil(props.totalCountPages / props.sizePage);
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div><button onClick={() => {setFirstNumber(firstNumber - props.sizePage); setLastNumber(lastNumber - props.sizePage)}}>Назад</button>
                {pages.slice(firstNumber, lastNumber).map((page) => {
                    return <span onClick={() => props.onClickPage(page)}
                                 className={props.currentPage === page ? styles.currentPages : null}
                                 key={page}>{` ${page}`}</span>})}
                <button onClick={() => {setFirstNumber(firstNumber + props.sizePage); setLastNumber(lastNumber + props.sizePage)}}>Вперед</button>
            </div>

            {props.users.map(u =>
                <div key={u.id}>
                    <NavLink  to={"/profile/" + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles} width={100}
                             height={100} alt='' />
                    </NavLink>
                    <div>
                        {u.followed
                            ? <button disabled={ props.loadFollowing.some(id => id === u.id)} onClick={() => {props.onClickUnSubscribe(u.id)}}>UnFollowed</button>
                            : <button disabled={ props.loadFollowing.some(id => id === u.id)} onClick={() => {props.onClickSubscribe(u.id)}}>Followed</button>}
                    </div>
                    <div>{u.name}</div>
                    <div>{u.id}</div>

                </div>)}
        </div>)
}
export default Users