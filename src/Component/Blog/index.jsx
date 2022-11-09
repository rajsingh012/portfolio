import React from 'react';
import MediumProfile from "react-medium-profile";
import './../../css/_blog.less';

const Blog = () => {
    return (
        <div className="rightbar__wrapper">
            <div className="blog__section">
                <h1 className="aboutus__section--heading">Latest
                        <span className="aboutus__section--colortext">Blog</span>
                </h1>
                <div className="blog__section--wrap">
                    <MediumProfile username={"raj.shing012"} />
                </div>
                <h1 className="blog__section--icons">👆</h1>
                <h3>Click to fetch Medium profile </h3>
            </div>
        </div>
    )
}

export default Blog;