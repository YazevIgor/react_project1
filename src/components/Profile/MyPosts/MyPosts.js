import React from "react";
import Post from "./Post/Post";
import classes from './MyPosts.module.css'

const MyPosts = props => {
    let newPostRef = React.createRef();
    let newPost = () => {
        props.addPostCreateAction();
    }
    let newText = () => {
        let text = newPostRef.current.value;
        props.addDataPostTextCreateAction(text);
    }

    return <div className={classes.wrapper}>
        {props.userAuthId
                ? <></>
                : <div><div className={classes.addPost}>
                <textarea onChange={newText} ref = {newPostRef} value={props.textData} />
                <button onClick={newPost}>Add post</button>
            </div>
                <div className={classes.post}>
                    {props.postsData.map(p => <Post posts={p.post} key={p.id}/>)}
                </div>
        </div>}

    </div>
}

export default MyPosts