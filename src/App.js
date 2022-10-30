import React, {Component} from 'react';
import {Route, Routes, useParams} from "react-router-dom";
import './App.css';
import UsersContainer from './components/Users/UsersContainer';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialog/DialogsContainer';
import News from './components/News/News';
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile" element={<ProfileContainer/>}>
                            <Route path=":userId" element={<ProfileContainer/>}/>
                        </Route>
                        <Route path='/Users' element={<UsersContainer/>}/>
                        <Route path='/Dialogs' element={<DialogsContainer/>}/>
                        <Route path='/News' element={<News/>}/>
                        <Route path='/Music' element={<Music/>}/>
                        <Route path='/Settings' element={<Settings/>}/>
                        <Route path='/Login' element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        )
    }
}

const withRouter = WrappedComponent => props => {
    const params = useParams();
    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    );
};

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
    
export default compose( connect (mapStateToProps, {initializeApp}), withRouter)(App);
