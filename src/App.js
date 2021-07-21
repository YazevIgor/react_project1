import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import {Route, withRouter} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Login} from "./components/Login/Login";
import {initializeApp} from "./redux/app-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp(true);
    }

    render() {
        if (this.props.initial === false)
            return <Preloader/>
        else
            return (
                <div className='app-wrapper'>
                    <div className='header'>
                        <HeaderContainer/>
                    </div>
                    <div className='main'>
                        <Nav className="app-wrapper-navbar"/>
                        <div className='app-wrapper-content'>
                            <React.Suspense fallback={<div>Загрузка...</div>}>
                                <Route path='/messages'
                                       render={() => <DialogsContainer/>}/>
                            </React.Suspense>
                            <Route path='/profile/:userId?'
                                   render={() => <ProfileContainer/>}/>


                            <React.Suspense fallback={<div>Загрузка...</div>}>
                                <Route path='/users'
                                       render={() => <UsersContainer/>}/>
                            </React.Suspense>

                            <Route path='/login'
                                   render={() => <Login/>}/>
                        </div>
                    </div>
                </div>
            )
    }
}

let matStateToProps = (state) => {
    return {
        initial: state.app.initial
    }
}


export default compose(withRouter, connect(matStateToProps, {initializeApp}))(App);