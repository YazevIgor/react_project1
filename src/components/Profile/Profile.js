import React from "react";
import classes from './Profile.module.css'
import MyContainerPost from "./MyPosts/MyPostsContainer";
import ProfileInfoWithHooks from "./ProfileInfo/ProfileInfoWithHooks";

const Profile = (props) => {

    return <div className={classes.wrapper}>
        <ProfileInfoWithHooks status={props.status}
                              setMyStatus={props.setMyStatus}
                              myId={props.myId}
                              photo={props.photo}
                              lookingForAJob={props.lookingForAJob}
                              lookingForAJobDescription={props.lookingForAJobDescription}
                              contacts={props.contacts}
                              fullName={props.fullName}
                              aboutMe={props.aboutMe}
                              setMyUserData={props.setMyUserData}
                              ids={props}
                              userAuthId={props.userAuthId}/>
        <MyContainerPost userAuthId={props.userAuthId}/>
    </div>
}

export default Profile