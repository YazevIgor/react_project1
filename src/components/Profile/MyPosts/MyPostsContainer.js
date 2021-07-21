import {addDataPostTextCreateAction,addPostCreateAction,} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const MyContainerPost = (props) => {
    return <MyPosts postsData={props.postsData}
                    textData={props.textData}
                    addPostCreateAction={props.addPostCreateAction}
                    addDataPostTextCreateAction={props.addPostCreateAction}
                    userAuthId={props.userAuthId} />
}

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        textData: state.profilePage.postText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPostCreateAction: () => dispatch(addPostCreateAction()),
        addDataPostTextCreateAction: (text) => dispatch(addDataPostTextCreateAction(text))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyContainerPost);
export default MyPostsContainer;