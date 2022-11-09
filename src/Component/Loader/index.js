import React from 'react';
import './../../css/_loader.less';

const Loader = () => {
    return (
        <div className="loader__wrap">
            <div className="loader">
                <div className="holder">
                    <div className="box"></div>
                </div>
                <div className="holder">
                    <div className="box"></div>
                </div>
                <div className="holder">
                    <div className="box"></div>
                </div>
            </div>
        </div>
    )
}

export default Loader;