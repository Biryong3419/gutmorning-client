import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div id="header" className="header header-hide">
                <div class="container">
                    <div id="logo" class="pull-left">
                        <h1><a href="index.html#hero" class="scrollto">GutMorning</a></h1>
                        {/* Uncomment below if you prefer to use an image logo
                        <a href="#body"><img src="img/logo.png" alt="" title="" /></a> */}
                    </div>

                    <nav id="nav-menu-container">
                        <ul class="nav-menu">
                            <li class="menu-active"><a href="index.html#hero">GutMorning</a></li>
                            {/* <li><a href="#about-us">About</a></li> */}
                            <li><a href="index.html#mathcing">맞춤솔루션</a></li>
                            <li><a href="index.html#features">추천대상</a></li>
                            <li><a href="index.html#screenshots">분석항목</a></li>
                            <li><a href="index.html#testimonials">장점</a></li>
                            <li><a href="index.html#blog">분석과정</a></li>
                            {/* <li><a href="kit.html"><b>Kit검사</b></a></li> */}
                            <li><Link to="kit"><b>Kit검사</b></Link></li>
                            <li><a href="http://gutmorning.co.kr/wp/"><b>마이크로바이옴 소식</b></a></li>
                        </ul> 
                    </nav>
                        {/* #nav-menu-container*/}
                </div>
            </div>
        );
    }
}

export default Header;