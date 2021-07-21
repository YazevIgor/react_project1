import React from "react";
import classes from './Post.module.css'



const Post = (props) => {
    return <div className={classes}>
        <div> {props.posts} </div>
    </div>
}
export default Post