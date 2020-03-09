import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.scss";
import classNames from "classnames/bind";
import { Basename } from 'config';

const cx = classNames.bind(styles);
class Header extends Component {
 myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
componentDidMount () {
    // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
}

render () {
    let userControlUi
    let loginOrLogout = '로그인'
    if (this.props.loginStatus)
      loginOrLogout='로그아웃'
    if ('로그아웃' == loginOrLogout) {
        userControlUi = 
        <div className="dropdown">
                <img height='30' src={require('assets/img/user-icon.png')} onClick={this.myFunction} alt="img" className="dropbtn"/>
        <div id="myDropdown" className="dropdown-content">
            <a href="/user/info">내정보</a>
       <a className='cursor-activate' onClick={this.props.onLoginOut}>{loginOrLogout}</a>
        </div>  
    </div>
    } else if('로그인' == loginOrLogout) {
        userControlUi =   <a className='cursor-activate' onClick={this.props.onLoginOut}>{loginOrLogout}</a>
    }

    // Disable header
    // if(window.location.pathname==='/auth/login' || window.location.pathname==='/auth/register'){
    //     return null;
    // }   
    return (<div id="header" className="header header-hide">
      <div className="container">
          <div id="logo" className="pull-left">
              <h1><a href={Basename+"/#hero"} className="scrollto">GutMorning</a></h1>
              {/* Uncomment below if you prefer to use an image logo
              <a href="#body"><img src="img/logo.png" alt="" title="" /></a> */}
          </div>
          <nav id="nav-menu-container">
              <ul className="nav-menu">
                  <li className="menu-active"><a href={Basename+"/#hero"}>GutMorning</a></li>
                  {/* <li><a href="#about-us">About</a></li> */}
                  <li><a href={Basename+"/#mathcing"}>맞춤솔루션</a></li>
                  <li><a href={Basename+"/#features"}>추천대상</a></li>
                  <li><a href={Basename+"/#screenshots"}>분석항목</a></li>
                  <li><a href={Basename+"/#testimonials"}>장점</a></li>
                  <li><a href={Basename+"/#blog"}>분석과정</a></li>
                  {/* <li><a href="kit.html"><b>Kit검사</b></a></li> */}
                  <li><Link to="kit"><b>Kit검사</b></Link></li>
                  <li><a href="http://gutmorning.co.kr/wp/"><b>마이크로바이옴 소식</b></a></li>
                  <li>{userControlUi}</li>
              </ul> 
             
          </nav>
      </div>
  
  </div>)
    

   }
         
                        };

export default Header; 