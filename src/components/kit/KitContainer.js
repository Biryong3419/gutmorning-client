import React, { Component } from "react";

import 'assets/vendor/venobox/venobox.css'
import 'lib/owlcarousel/assets/owl.carousel.min.css'
import 'lib/font-awesome/css/font-awesome.min.css'
import 'lib/modal-video/css/modal-video.min.css'
import 'assets/vendor/bootstrap/css/bootstrap.min.css'
import 'assets/vendor/aos/aos.css'
import jquery from 'jquery';
import './KitContainer.css';
//JavaScript Libraries

class KitContainer extends Component {
    componentDidMount() {

    }

    render () {
  return (
 
<div className="new">

{/*Video Section*/}

<section id="screenshots"  className="why-us text-center wow fadeInUp" data-aos="fade-up" date-aos-delay="200">
      <div className="container-fluid container-full hot-to-use-div">
		        <div className="section-title text-center">
		  <h2>키트 사용방법</h2>
      </div>

        <div className="row justify-content-center">
          <div className="video-box">
            <img src="assets/img/why-us.png" className="img-fluid" alt=""/>
            <a href="https://youtu.be/aa_uaZc__c8" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
          </div>

        </div>

      </div>
    </section> 


{/*Pricing Table Section*/}
 <section id="pricing" className="padd-section text-center wow fadeInUp">
            <div className="container">
                <div className="section-title text-center">
                    <h2>키트 구매하기</h2>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3"></div>
                    <div className="col-md-6 col-lg-3">
                        <div className="block-pricing">
                            <div className="table">
                                <h3>키트구매</h3>
                                <h2>200,000원</h2>
                                <ul className="list-unstyled">
                                    <li>
                                        <b>키트 구매</b>
                                    </li>
                                    <li>
                                        <b>
                                            분석 및 결과 발송</b>
                                    </li>
                                </ul>
                                <div className="table_btn">
                                    <a href="#" className="btn">
                                        <i className="fa fa-shopping-cart"></i>구매하기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="block-pricing">
                            <div className="table">
                                <h3>키트구매
                                    <br/>
                                    +
                                    <br/>프로바이오틱스</h3>
                                <h2>220,000원</h2>
                                <ul className="list-unstyled">
                                    <li>
                                        <b>키트 구매</b>
                                    </li>
                                    <li>
                                        <b>분석 및 결과 발송</b>
                                    </li>
                                    <li>
                                        <b>결과에 맞는 맞춤
                                            <br/>
                                            프로바이오틱스 제품 포함</b>
                                    </li>
                                </ul>
                                <div className="table_btn">
                                    <a href="#" className="btn">
                                        <i className="fa fa-shopping-cart"></i>구매하기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
   
   {/* Get Started Section */}
    <section id="get-started" className="padd-section text-center wow fadeInUp">
            <div className="container">
                <div className="section-title text-center">
                    <h2>검사 진행 가이드</h2>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="feature-block">
                            <img src={require('assets/img/01.svg')}alt="img" className="img-fluid"/>
                            <p>Gut Morning 홈페이지에서
                                <br/>
                                키트 신청을 해주세요.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="feature-block">
                            <img src={require('assets/img/02.svg')} alt="img" className="img-fluid"/>
                            <p>신청한  주소지로
                                <br/>
                                키트를 수령합니다</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="feature-block">
                            <img src={require('assets/img/03.svg')} alt="img" className="img-fluid"/>
                            <p>홈페이지에서 키트를
                                <br/>
                                등록 합니다.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="feature-block">
                            <img src={require('assets/img/04.svg')} alt="img" className="img-fluid"/>
                            <p>키트 사용방법을 참고하여
                                <br/>
                                채변을 진행 합니다.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="feature-block">
                            <img src={require('assets/img/05.svg')} alt="img" className="img-fluid"/>
                            <p>반송 구성품을 밀봉 후
                                <br/>
                                회수 신청을하고,
                                <br/>
                                키트를 반송합니다.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="feature-block">
                            <img src={require('assets/img/06.svg')} alt="img" className="img-fluid"/>
                            <p>약 2~3주후
                                <br/>
                                결과를 확인합니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>



 </div>

 
 
			
  );
   };
};




export default KitContainer;
