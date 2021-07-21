import React, {useEffect, useState} from "react";
import userPhoto from "../../assets/images/person-male.png";
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(true);
    let [status, setStatus] = useState(props.status);
    let [fullName, setFullName] = useState(props.fullName);
    let [lookingForAJob, setLookingForAJob] = useState(props.lookingForAJob);
    let [lookingForAJobDescription, setLookingForAJobDescription] = useState(props.lookingForAJobDescription);
    let [aboutMe, setAboutMe] = useState(props.aboutMe);
    let [contacts, setContacts] = useState(props.contacts);

    useEffect(() => {
        setStatus(props.status);
        setFullName(props.fullName);
        setLookingForAJob(props.lookingForAJob);
        setLookingForAJobDescription(props.lookingForAJobDescription);
        setAboutMe(props.aboutMe);
        setContacts(props.contacts)
        setEditMode(true);
    }, [props.status, props.fullName, props.lookingForAJob, props.lookingForAJobDescription, props.contacts, props.aboutMe])

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    let onDataAccept = () => {
        props.setMyStatus(status);
        props.setMyUserData(lookingForAJob, lookingForAJobDescription, fullName, {}, aboutMe);
    }
    let onFullNameChange = (e) => {
        setFullName(e.currentTarget.value)
    }
    let onAboutMeChange = (e) => {
        setAboutMe(e.currentTarget.value)
    }
    let onLookingForAJobChange = (e) => {
        setLookingForAJob(e.currentTarget.value)
    }
    let onLookingForAJobChangeDescription = (e) => {
        setLookingForAJobDescription(e.currentTarget.value)
    }
    let onContacts = (e, id) => {
        contacts[id] = e.currentTarget.value;
    }
    const photoSelected = (e) => {
        if (e.target.files.length) {
            props.setMyPhoto(e.target.files[0]);
        }
    }

    return <div className={classes.wrapper}>
        <div className={classes.avatar}>
            <img src={props.photo || userPhoto} alt=""/>
            {props.userAuthId
                ? <></>
                : <div>
                    {editMode
                        ? <button onClick={() => {setEditMode(false)}}>Редактировать</button>
                        : <div>
                            <button onClick={onDataAccept}>Принять изменения</button>
                            <input type={"file"} onChange={photoSelected}/></div>}
                </div>
            }
        </div>
        <div className={classes.info}>
            {editMode
                ? <div>
                    <div><h3><span>{fullName}</span></h3></div>
                    <div><span>{status || '-----'}</span></div>
                    <div><span>{aboutMe}</span></div>
                    <div><span>{`Я ищу работу: ${props.lookingForAJob}`}</span></div>
                    <div><span>{lookingForAJobDescription}</span></div>
                </div>
                : <div>
                    <div><input onChange={onFullNameChange} value={fullName}/></div>
                    <div><input onChange={onStatusChange} autoFocus={true} value={status}/></div>
                    <div><input onChange={onAboutMeChange} value={aboutMe}/></div>
                    <div><input onChange={onLookingForAJobChange} value={lookingForAJob}/></div>
                    <div><input onChange={onLookingForAJobChangeDescription} value={lookingForAJobDescription}/></div>
                </div>}
        </div>
        <div className={classes.contacts}>
            {editMode
                ?
                <div>
                    <div><h3><span>Контакты:</span></h3></div>
                    <div>github:{contacts[0]}</div>
                    <div>vk:{contacts[1]}</div>
                    <div>facebook: {contacts[2]}</div>
                    <div>instagram: {contacts[3]}</div>
                    <div>twitter: {contacts[4]}</div>
                    <div>website: {contacts[5]}</div>
                    <div>youtube: {contacts[6]}</div>
                    <div>main link: {contacts[7]}</div>
                </div>
                :
                <div>
                    <div><input onChange={onContacts} value={contacts[0]}/></div>
                    <div><input onChange={onContacts} value={contacts[1]}/></div>
                    <div><input onChange={onContacts} value={contacts[2]}/></div>
                    <div><input onChange={onContacts} value={contacts[3]}/></div>
                    <div><input onChange={onContacts} value={contacts[4]}/></div>
                    <div><input onChange={onContacts} value={contacts[5]}/></div>
                    <div><input onChange={onContacts} value={contacts[6]}/></div>
                    <div><input onChange={onContacts} value={contacts[7]}/></div>
                </div>}
        </div>
    </div>
}

export default ProfileInfo