import React from "react";
import {connect} from "react-redux";
import {
    getMyStatus,
    setMyPhoto,
    setMyStatus,
    getUserPhoto,
    getMyUserData,
    setMyUserData
} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import Preloader from "../common/preloader/Preloader";


class ProfileContainer extends React.Component {
    renderPage() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = this.props.myId;
        this.props.getUserPhoto(userId);
        this.props.getMyStatus(userId);
        this.props.getMyUserData(userId);
    }

    componentDidMount() {
        this.renderPage();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.renderPage();
        }
    }

    render() {
        return (
            <div>{this.props.isFetching
                ? Preloader()
                : <Profile {...this.props}
                           photo={this.props.photo}
                           myId={this.props.myId}
                           isAuth={this.props.isAuth}
                           status={this.props.status}
                           setMyStatus={this.props.setMyStatus}
                           setMyUserData={this.props.setMyUserData}
                           setMyPhoto={this.props.setMyPhoto}
                           lookingForAJob={this.props.lookingForAJob}
                           lookingForAJobDescription={this.props.lookingForAJobDescription}
                           contacts={this.props.contacts}
                           aboutMe={this.props.aboutMe}
                           fullName={this.props.fullName}
                           userAuthId={this.props.match.params.userId} />}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        photo: state.profilePage.photo,
        status: state.profilePage.status,
        myId: state.authUser.id,
        isFetching: state.profilePage.isFetching,
        lookingForAJob: state.profilePage.lookingForAJob,
        lookingForAJobDescription: state.profilePage.lookingForAJobDescription,
        contacts: state.profilePage.contacts,
        fullName: state.profilePage.fullName,
        aboutMe: state.profilePage.aboutMe
    }
}
export default compose(
    connect(mapStateToProps, {getUserPhoto, getMyStatus, setMyStatus, setMyPhoto, getMyUserData, setMyUserData}),
    withRouter,
    withAuthRedirect)(ProfileContainer)
