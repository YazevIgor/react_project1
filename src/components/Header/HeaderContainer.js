import React from "react";
import {connect} from "react-redux";
import {addUserLoginData, getAuthUserPhoto,} from "../../redux/header-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserPhoto(this.props.id);
    }
    component

    render() {
        return (
            <Header isAuth={this.props.isAuth} email={this.props.email} photo={this.props.photo} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authUser.isAuth,
        email: state.authUser.email,
        id: state.authUser.id,
        photo: state.authUser.photo
    }
}

export default connect(mapStateToProps, {addUserLoginData, getAuthUserPhoto})(HeaderContainer);