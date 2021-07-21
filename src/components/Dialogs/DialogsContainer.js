import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AddMessageCreateAction, AddMessageTextCreateAction} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) =>{
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        messagesText: state.messagesPage.messagesText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AddMessageCreateAction: () => dispatch(AddMessageCreateAction()),
        AddMessageTextCreateAction: (text) => dispatch(AddMessageTextCreateAction(text))
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs)
