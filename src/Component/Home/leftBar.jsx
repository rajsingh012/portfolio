import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import menuList from './../static/menubar.json';
import './../../css/_leftbar.less';

class LeftBar extends Component {
    render() {
        return (
            <div className="leftbar__wrapper">
                <ul className="leftbar__wrapper--ullist">
                    {menuList.map(list => {
                        const { id = '', displayLabel = '', key = '', urlName = '', faIcon = '' } = list;
                        return (
                            <li className="leftbar__wrapper--listing" key={key}>
                                <Link to={urlName}>
                                    <span className="leftbar__wrapper--iconsbg">
                                        <span className={faIcon}></span>
                                    </span>
                                    <span className="leftbar__wrapper--listname">{displayLabel}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default LeftBar;