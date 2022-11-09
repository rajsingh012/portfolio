import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ThemeMode from './themeMode';
import LeftBar from './Home/leftBar';
import Main from './Home/routeMain';
import './../css/_reset.less';

class MasterLayout extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="homepage_container">
                    <LeftBar />
                    <Main />
                </div>
                <ThemeMode />
            </BrowserRouter>
        )
    }
}

export default MasterLayout;