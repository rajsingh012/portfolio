import React, { Component } from 'react';
import Slider from "react-slick";
import skills from './../static/skills.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './../../css/_skills.less';

class Technology extends Component {

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true
        };
        return (
            <div className="rightbar__wrapper">
                <div className="skills__section">
                    <h1 className="aboutus__section--heading">Skills
                        <span className="aboutus__section--colortext">Knowledge</span>
                    </h1>
                    <div className="skills__section--wrapper">
                        <div className="skills__section--slickwrap">
                            <Slider {...settings}>
                                {skills.map(data => {
                                    const { displayLabel = '', imgUrl = '', key = '', experience = '' } = data;
                                    return (
                                        <div key={key}>
                                            <div className="skills__section--slickbox">
                                                <div className="skills__section--imgdiv">
                                                    <img className="skills__section--skilllogo" src={imgUrl} />
                                                </div>
                                                <p className="skills__section--expyear">{experience}</p>
                                                <h3 className="skills__section--namelang">{displayLabel}</h3>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>

                        <table className="table__data">
                            <thead>
                                <tr className="table__data--headrow">
                                    <th className="table__data--heading">S. No.</th>
                                    <th className="table__data--heading">Name</th>
                                    <th className="table__data--heading">Years of Experience</th>
                                </tr>
                            </thead>
                            <tbody>
                                {skills.map(data => {
                                    const { displayLabel = '', key = '', experience = '', id = 0 } = data;
                                    return (
                                        < tr className="table__data--row" key={key}>
                                            <td className="table__data--heading">{id}</td>
                                            <td className="table__data--heading">{displayLabel}</td>
                                            <td className="table__data--heading">{experience}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        )
    }
}

export default Technology;