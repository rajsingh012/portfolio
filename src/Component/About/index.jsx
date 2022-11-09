import React, { Component } from 'react';
import experience from './../static/experience.json';
import './../../css/_about.less';

class AboutUs extends Component {
    render() {
        return (
            <div className="rightbar__wrapper">
                <div className="aboutus__section">
                    <h1 className="aboutus__section--heading">About
                        <span className="aboutus__section--colortext">Me</span>
                    </h1>
                    <div className="aboutus__mainwrap">
                        <div className="aboutus__mainwrap--leftbox">
                            <h2 className="aboutus__mainwrap--personal">PERSONAL INFOS</h2>
                            <div className="aboutus__mainwrap--leftboxlist">
                                <div className="aboutus__mainwrap--innerleft">
                                    <h4 className="aboutus__mainwrap--nameheading">Full Name :
                                <span className="aboutus__mainwrap--name"> Raj Singh</span></h4>
                                    <h4 className="aboutus__mainwrap--nameheading">DOB :
                                <span className="aboutus__mainwrap--name"> 15-02-1995</span></h4>
                                    <h4 className="aboutus__mainwrap--nameheading">Nationality :
                                <span className="aboutus__mainwrap--name"> Indian</span></h4>
                                    <h4 className="aboutus__mainwrap--nameheading">Address :
                                <span className="aboutus__mainwrap--name"> 415, A - Block Barwani Plaza Plasia Square
                                Indore (M.P.)- 452001</span>
                                    </h4>
                                </div>
                                <div className="aboutus__mainwrap--innerright">
                                    <h4 className="aboutus__mainwrap--nameheading">Phone :
                                <span className="aboutus__mainwrap--name"> +91 958 456 222 8</span></h4>
                                    <h4 className="aboutus__mainwrap--nameheading">Email :
                                <span className="aboutus__mainwrap--name"> rajshing012@gmail.com</span></h4>
                                    <h4 className="aboutus__mainwrap--nameheading">Skype :
                                <span className="aboutus__mainwrap--name"> </span></h4>
                                    <h4 className="aboutus__mainwrap--nameheading">Language :
                                <span className="aboutus__mainwrap--name"> Hindi, English</span>
                                    </h4>
                                </div>
                            </div>
                            <a className="aboutus__mainwrap--downloadcv" href="./../../../public/img/Resume.docx" download>
                                Download CV
                                <span className="aboutus__mainwrap--downloadimg"></span>
                            </a>
                        </div>
                        <div className="aboutus__mainwrap--rightbox">
                            <div className="aboutus__mainwrap--experience">
                                {experience.map(data => {
                                    const { displayLabel = '', key = '', value = '' } = data;
                                    return (
                                        <div className="aboutus__mainwrap--mainexp">
                                            <div className="aboutus__mainwrap--expbox" key={key}>
                                                <h1 className="aboutus__mainwrap--boxvalue">{value} <span className="aboutus__mainwrap--plusicon">+</span> </h1>
                                                <p className="aboutus__mainwrap--boxcontent">{displayLabel}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs;