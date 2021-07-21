import React from "react";
import {connect} from "react-redux";
import {
    addUser,
    addUsers,
    clickPage,
    clickSubscribe,
    clickUnSubscribe,
    followToggle,
    updateCurrentPage,
    updateIsFetching,
    updateLoadFollowing,
    updateTotalCountPages
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {
    getCurrentPage,
    getIsFetching,
    getLoadFollowing,
    getSizePage,
    getTotalCountPages,
    getUsers
} from "../../selectors/users-selector";

class UsersContainer extends React.Component {
    componentDidMount() {this.props.addUsers(this.props.currentPage, this.props.sizePage)}
    onClickPage = (page) => {this.props.clickPage(this.props.sizePage, page)}
    onClickSubscribe = (id) => {this.props.clickSubscribe(id)}
    onClickUnSubscribe = (id) => {this.props.clickUnSubscribe(id)}

    render() {
        return (<>
            <div>{this.props.isFetching ? Preloader() : null}</div>
            <Users totalCountPages={this.props.totalCountPages}
                   currentPage={this.props.currentPage}
                   sizePage={this.props.sizePage}
                   followToggle={this.props.followToggle}
                   users={this.props.users}
                   loadFollowing={this.props.loadFollowing}
                   onClickPage={this.onClickPage}
                   onClickSubscribe={this.onClickSubscribe}
                   onClickUnSubscribe={this.onClickUnSubscribe}
                   updateLoadFollowing={this.updateLoadFollowing}/>
        </>);
    }

}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalCountPages: getTotalCountPages(state),
        currentPage: getCurrentPage(state),
        sizePage: getSizePage(state),
        isFetching: getIsFetching(state),
        loadFollowing: getLoadFollowing(state),
    }
}
let mapDispatchToPropsContainer = {
    followToggle,
    addUser,
    updateTotalCountPages,
    updateCurrentPage,
    updateIsFetching,
    updateLoadFollowing,
    addUsers,
    clickPage,
    clickSubscribe,
    clickUnSubscribe
}

export default connect(mapStateToProps, mapDispatchToPropsContainer)(UsersContainer);
