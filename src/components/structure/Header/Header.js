import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.scss";
import classNames from "classnames/bind";
import { MdLock } from "react-icons/md";

const cx = classNames.bind(styles);
class Header extends Component {
   render () {
    // Disable header
    // if(window.location.pathname==='/auth/login' || window.location.pathname==='/auth/register'){
    //     return null;
    // }   
    return (<div id="header" className="header header-hide">
      <div className="container">
          <div id="logo" className="pull-left">
              <h1><a href="/#hero" className="scrollto">GutMorning</a></h1>
              {/* Uncomment below if you prefer to use an image logo
              <a href="#body"><img src="img/logo.png" alt="" title="" /></a> */}
          </div>
          <nav id="nav-menu-container">
              <ul className="nav-menu">
                  <li className="menu-active"><a href="/#hero">GutMorning</a></li>
                  {/* <li><a href="#about-us">About</a></li> */}
                  <li><a href="/#mathcing">맞춤솔루션</a></li>
                  <li><a href="/#features">추천대상</a></li>
                  <li><a href="/#screenshots">분석항목</a></li>
                  <li><a href="/#testimonials">장점</a></li>
                  <li><a href="/#blog">분석과정</a></li>
                  {/* <li><a href="kit.html"><b>Kit검사</b></a></li> */}
                  <li><Link to="kit"><b>Kit검사</b></Link></li>
                  <li><a href="http://gutmorning.co.kr/wp/"><b>마이크로바이옴 소식</b></a></li>
                  <li><Link className='loginAnchor' to={this.props.toUrl} onClick={this.props.onLoginOut}>{this.props.loginStatus}</Link></li>
              </ul> 
             
          </nav>
      </div>
  
  </div>)
    

   }
         
                        };

export default Header; 