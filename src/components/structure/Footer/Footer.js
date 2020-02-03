import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    
    render() {
      // Disable footer
      // if(window.location.pathname==='/auth/login' || window.location.pathname==='/auth/register'){
      //   return null;
      // }   
        return (
            <footer className="footer">
    <div className="container">
      <div className="row">

        <div className="col-md-12 col-lg-4">
          <div className="footer-logo">

            <a className="navbar-brand" href="#">Gutmorning</a>
            {/* <p>문의 032-715-7904 <br>팩스 032-555-3629<br>메일 gutmorning2018@gmail.com</p> */}
            <p className='new-line'>{
            `문의 032-715-7904
            팩스 032-555-3629
            메일 gutmorning2018@gmail.com`
            }</p>
          </div>
        </div>

        <div className="col-sm-6 col-md-3 col-lg-2">
          <div className="list-menu">
{/* 
            <h4>Abou Us</h4>

            <ul className="list-unstyled">
              <li><a href="#">About us</a></li>
              <li><a href="#">Features item</a></li>
              <li><a href="#">Live streaming</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>

          </div>
        </div>

        <div className="col-sm-6 col-md-3 col-lg-2">
          <div className="list-menu">

            <h4>Abou Us</h4>

            <ul className="list-unstyled">
              <li><a href="#">About us</a></li>
              <li><a href="#">Features item</a></li>
              <li><a href="#">Live streaming</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>

          </div>
        </div>

        <div className="col-sm-6 col-md-3 col-lg-2">
          <div className="list-menu">

            <h4>Support</h4>

            <ul className="list-unstyled">
              <li><a href="#">faq</a></li>
              <li><a href="#">Editor help</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>

          </div>
        </div>

        <div className="col-sm-6 col-md-3 col-lg-2">
          <div className="list-menu">

            <h4>Abou Us</h4>

            <ul className="list-unstyled">
              <li><a href="#">About us</a></li>
              <li><a href="#">Features item</a></li>
              <li><a href="#">Live streaming</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul> */}

          </div>
        </div>

      </div>
    </div>

    <div className="copyrights">
      <div className="container">
        <p>&copy; Copyrights Gutmorning. All rights reserved.</p>
        <div className="credits">
          
            {/* All the links in the footer should remain intact.
            You can delete the links only if you purchased the pro version.
            Licensing information: https://bootstrapmade.com/license/
            Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=eStartup
          
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
        </div>
      </div>
    </div>

  </footer>
        );
    }
}

export default Footer;