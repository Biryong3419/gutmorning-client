import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';

//JavaScript Libraries
import jquery from 'jquery';
import 'react-bootstrap'
import {WOW} from 'wowjs'

import ModalVideo from 'modal-video';
//import '../contactform/contactform.js'

//css
import './MainComponent.css';
// Bootstrap css
import 'lib/bootstrap/css/bootstrap.css'
//Libraries CSS Files
import 'lib/nivo-slider/css/nivo-slider.css'
import 'lib/owlcarousel/assets/owl.carousel.css'
import 'lib/owlcarousel/assets/owl.theme.default.css'
import 'lib/font-awesome/css/font-awesome.css'
import 'lib/animate/animate.css'
import 'lib/modal-video/css/modal-video.min.css'
// Main Style
import 'assets/css/responsive.css'



class Main extends Component {

    componentDidMount(){
    
      window.$ = window.jQuery = jquery;
      require('hoverintent')
      require('superfish');
      require("jquery-ui/ui/effects/effect-slide");
      require('react-owl-carousel')
      loadJqueryScript();

      // Initiate the wowjs animation library
      // const wow = new WOW({
      //   offset: 100,
      //   mobile: false,
      //   live: true
      // })
      new WOW().init();
    }
    render() {
      
        let message = 'Gut Morning 장내 미생물 분석은 차세대 염기서열 분석법을 이용해 \n장에 어떤 종류의 미생물이 얼마나 살고 있는지를 분석하여 \n개인별 맞춤 건강 정보 및 장 건강 개선을 위한 솔루션을 제공해드리는 분석입니다.';
        let message2 = '비만과 만성변비 또는\n 잦은 설사로 고생하시는 분'
        return (
            <main>
                <MetaTags>
                    <title>GutMorning</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta name="keywords" content=""/>
                    <meta name="description" content="" />
                </MetaTags>

                {/*Section1*/}
                <section id="hero" className="wow fadeIn">
                    <div className="hero-container">
                        <h1>장내미생물 분석이란?</h1>
	                    <h3>&nbsp;</h3>
                        <h2 className='new-line'>{message}</h2>
                        <img src={require('assets/img/hero-img.png')} alt="Hero Imgs"/>
                        <a href="#mathcing" className="btn-get-started scrollto">Get Started</a>
                    </div>
                </section>

                {/*Section2*/}
                <section id="mathcing" className="padd-section text-center wow fadeInUp">
                    <div className="container">
                        <div className="section-title text-center">
                            <h2 >맞춤 솔루션</h2>
                        </div>
                    </div>
	                <section id="advanced-features">
	                    <div className="features-row section-bg">
	                        <div className="container">
	                            <div className="section-title text-center">
	                                <div className="col-12">
	                                    <img className="advanced-feature-img-right wow fadeInRight" src={require('assets/img/calendar.png')} alt=""/>
	                                        <div className="wow fadeInLeft">
	                                            <h3>&nbsp;</h3>
	                                            <p className="t1">발효 음식이나 건강기능식품으로 프로바이오틱스 미생물을 보강하는 것도 중요하지만, 적절한 식단을 꾸준히 섭취하여 유익한 미생물들이 장 내에서 잘 정착하고 증식해 나가도록 돕는 것도 매우 중요합니다.</p>
	                                            <p className="t2">Gut Morning 장내 미생물 분석은 장내 미생물 유형, 성별, 연령을 고려해 맞춤 식단을 추천해 드립니다. 본인의 장 건강을 위해서는 어떤 식단이 좋을 지 확인해 보세요!</p>
	                                                <div className="hero-container">
	     		 		                                <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">추천 프로바이오틱스</button>
	      			                                </div>
	                                        </div>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                    </section>
                    
                    {/* Button trigger modal */}
                    <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <div className="modal-body">
                                    <img src={require('assets/img/svg/bio_popup.svg')} alt="img" className="img-biopopup"/>
                                </div>
                                <div className="modal-footer">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*Section3*/}
                <section id="features" className="padd-section text-center wow fadeInUp">
                    <div className="container">
                        <div className="section-title text-center">
                            <h2 >추천대상</h2>
                            <p className="separator">▼ 이런 분들께 Gutmorning 장내미생물 분석을 추천합니다. ▼</p>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-3">
                                <div className="feature-block">
                                    <img src={require('assets/img/svg/1.svg')} alt="img" className="img-fluid"/>
                                    <h4>Weight loss solutions</h4>
                                    <p className='new-line'>{message2} </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="feature-block">
                                    <img src={require('assets/img/svg/2.svg')} alt="img" className="img-fluid"/>
                                    <h4>Customized solutions</h4>
                                    <p>장기간 프로바이오틱스 복용에도 만족스러운 효과를 보지 못하신 분</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="feature-block">
                                    <img src={require('assets/img/svg/3.svg')} alt="img" className="img-fluid"/>
                                    <h4>Disease prevention solutions</h4>
                                    <p>효과적인 맞춤 프로바이오틱스 복용 및 식습관으로 다양한 질병을 예방하고 싶으신 분</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="feature-block">
                                    <img src={require('assets/img/svg/4.svg')} alt="img" className="img-fluid"/>
                                    <h4>Health prediction solutions</h4>
                                    <p>현재 장내 미생물 분포에 대해 파악하고 미래의 건강상태를 예측해보고 싶으신 분</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*Section4*/}
                <section id="screenshots" className="padd-section text-center wow fadeInUp">

                    <div className="container">
                        <div className="section-title text-center">
                            <h2>어떤 검사결과를 받아볼 수 있나요?</h2>
                            <p className="separator"> </p>
                        </div>
                    </div>

                    <div className="container">
                        <div className="owl-carousel owl-theme">
                            <div><img src={require('assets/img/screen/1.jpg')} alt="img"/></div>
                            <div><img src={require('assets/img/screen/2.jpg')} alt="img"/></div>
                            <div><img src={require('assets/img/screen/3.jpg')} alt="img"/></div>
                            <div><img src={require('assets/img/screen/4.jpg')} alt="img"/></div>
                            <div><img src={require('assets/img/screen/5.jpg')} alt="img"/></div>
                            <div><img src={require('assets/img/screen/6.jpg')} alt="img"/></div>
                            <div><img src={require('assets/img/screen/7.jpg')} alt="img"/></div>
                            <div><img src={require('assets/img/screen/8.jpg')} alt="img"/></div>
                            <div><img src={require('assets/img/screen/9.jpg')} alt="img"/></div>
                        </div>
                    </div>

                </section>        

                <section id="testimonials" className="padd-section text-center wow fadeInUp">
                  <div className="container">
                      <div className="row justify-content-center">
		  
            		        <div className="section-title text-center">
                          <h2 className='new-line'>{`Gut Morning
                          장내미생물 분석의 장점`}</h2>
                          <p className="separator new-line">{``}</p>
		                      <img width="320px" src={require('assets/img/kit.png')} alt="kit"/>
                        </div>

                        <div className="col-md-8">

                          <div className="testimonials-content">
                            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

                              <div className="carousel-inner" role="listbox">

                                <div className="carousel-item  active">
                                  <div className="top-top">
                                    <h3>첫째,</h3>
                                    <p className='new-line'>{`
                                    혼자서도 쉽게 사용할 수 있는 키트를 제공합니다.
                                    `}</p>
                                  </div>
                                </div>

                                <div className="carousel-item">
                                  <div className="top-top">
                                    <h3>둘째,</h3>
                                    <p className='new-line'>{`
                                    세계적으로 인정된 미생물 유전체 데이터 베이스를 
                                    이용하여 정확한 미생물 분석을 수행합니다.`}</p>
                                  </div>
                                </div>

                                <div className="carousel-item ">
                                  <div className="top-top">

                                    <h3>셋째,</h3>
                                    <p className='new-line'>{`
                                    누적된 한국인 장내미생물 분석 결과를 이용하여 
                                    한국인 맞춤 분석 결과를 제공 합니다.`}</p>
                                  </div>
                                </div>

                              </div>

                              <div className="btm-btm">
                                <ul className="list-unstyled carousel-indicators">
                                  <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                                  <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                  <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </section>


  {/* <!--==========================
    Blog Section
  ============================--> */}
  {/* <section id="blog" className="padd-section wow fadeInUp">

    <div className="container">
      <div className="section-title text-center">

        <h2>분석과정</h2>

      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-3 col-lg-3 wow bounceInUp" data-wow-duration="1.4s">
          <div className="block-blog text-left">
             <img src="img/analysis-02.png" alt="img">

          </div>
        </div>

        <div className="col-md-3 col-lg-3">
          <div className="block-blog text-left wow bounceInUp" data-wow-delay="0.4s" data-wow-duration="1.4s">
            <img src="img/analysis-03.png" alt="img">
           
          </div>
        </div>

        <div className="col-md-3 col-lg-3">
          <div className="block-blog text-left wow bounceInUp" data-wow-delay="0.8s" data-wow-duration="1.4s">
            <img src="img/analysis-04.png" alt="img">
          </div>
        </div>
        
        <div className="col-md-3 col-lg-3">
          <div className="block-blog text-left wow bounceInUp" data-wow-delay="1.2s" data-wow-duration="1.4s">
            <img src="img/analysis-05.png" alt="img">
          </div>
        </div>
      </div>
    </div>
  </section> */}
  
  

  {/* <!--==========================
    Newsletter Section
  ============================--> */}
  {/* <section id="newsletter" className="newsletter text-center wow fadeInUp">
    <div className="overlay padd-section">
      <div className="container">

        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-6">
            <form className="form-inline" method="POST" action="#">

            </form>

          </div>
        </div>


      </div>
    </div>
  </section> */}

            </main>
        );
    }
}

function loadJqueryScript() {
  jquery(document).ready(function( $ ) {
    $(window).scroll(function () {
      //var height = $(window).height();
      var scroll = $(window).scrollTop();
      if (scroll) {
        $(".header-hide").addClass("scroll-header");
      } else {
        $(".header-hide").removeClass("scroll-header");
      }
  
    });
  
    // Back to top button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
    $('.back-to-top').click(function(){
      $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
      return false;
    });
  
    
  
    // Initiate superfish on nav menu
    $('.nav-menu').superfish({
      animation: {
        opacity: 'show'
      },
      speed: 400
    });
  
    // Mobile Navigation
    if ($('#nav-menu-container').length) {
      var $mobile_nav = $('#nav-menu-container').clone().prop({
        id: 'mobile-nav'
      });
      $mobile_nav.find('> ul').attr({
        'class': '',
        'id': ''
      });
      $('body').append($mobile_nav);
      $('body').prepend('<button type="button" id="mobile-nav-toggle"><i className="fa fa-bars"></i></button>');
      $('body').append('<div id="mobile-body-overly"></div>');
      $('#mobile-nav').find('.menu-has-children').prepend('<i className="fa fa-chevron-down"></i>');
  
      $(document).on('click', '.menu-has-children i', function(e) {
        $(this).next().toggleClass('menu-item-active');
        $(this).nextAll('ul').eq(0).slideToggle();
        $(this).toggleClass("fa-chevron-up fa-chevron-down");
      });
  
      $(document).on('click', '#mobile-nav-toggle', function(e) {
        $('body').toggleClass('mobile-nav-active');
        $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
        $('#mobile-body-overly').toggle();
      });
  
      $(document).click(function(e) {
        var container = $("#mobile-nav, #mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('#mobile-body-overly').fadeOut();
          }
        }
      });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
      $("#mobile-nav, #mobile-nav-toggle").hide();
    }
  
    // Smooth scroll for the menu and links with .scrollto classes
    $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
      if (window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && window.location.hostname === this.hostname) {
        var target = $(this.hash);
        if (target.length) {
          var top_space = 0;
  
          if ($('#header').length) {
            top_space = $('#header').outerHeight();
  
            if( ! $('#header').hasClass('header-fixed') ) {
              top_space = top_space - 20;
            }
          }
  
          $('html, body').animate({
            scrollTop: target.offset().top - top_space
          }, 1500, 'easeInOutExpo');
  
          if ($(this).parents('.nav-menu').length) {
            $('.nav-menu .menu-active').removeClass('menu-active');
            $(this).closest('li').addClass('menu-active');
          }
  
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('#mobile-body-overly').fadeOut();
          }
          return false;
        }
      }
    });
  
    // Modal video
    new ModalVideo('.js-modal-btn', {channel: 'youtube'});
  
    // Init Owl Carousel
    $('.owl-carousel').owlCarousel({
      items: 4,
      autoplay: true,
      loop: true,
      margin: 30,
      dots: true,
      responsiveClass: true,
      responsive: {
  
        320: { items: 1},
        480: { items: 2},
        600: { items: 2},
        767: { items: 3},
        768: { items: 3},
        992: { items: 4}
      }
    });
  
  // custom code
  
  });
}
  
export default Main;