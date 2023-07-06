export const Footer = () => (
  // <footer className="footer-area">
  //   <div className="container">
  //     <div className="row">
  //       <div className="col-12 col-md-4">
  //         <div className="footer-single-widget">
  //           <a href="#">
  //             <img src="img/core-img/logo.png" alt="" />
  //           </a>
  //           <div className="copywrite-text mt-30">
  //             <p>
  //               Team graduation
  //             </p>
  //             <p>
  //               SV {" "}
  //               <a href="#" target="_blank">
  //                 DiemHoang -- AnhPhuong
  //               </a>
  //             </p>
  //             <p />
  //           </div>
  //         </div>
  //       </div>
  //       <div className="col-12 col-md-4">
  //         <div className="footer-single-widget">
  //           <ul className="footer-menu d-flex justify-content-between">
  //             <li>
  //               <a href="#">Home</a>
  //             </li>
  //             <li>
  //               <a href="#">Fashion</a>
  //             </li>
  //             <li>
  //               <a href="#">Entertainment</a>
  //             </li>
  //             <li>
  //               <a href="#">Contact</a>
  //             </li>
  //             <li>
  //               <a href="#">Sports</a>
  //             </li>
  //             <li>
  //               <a href="#">Business</a>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //       <div className="col-12 col-md-4">
  //         <div className="footer-single-widget">
  //           <h5>Subscribe</h5>
  //           <form action="#" method="post">
  //             <input
  //               type="email"
  //               name="email"
  //               id="eemail"
  //               placeholder="Enter your mail"
  //             />
  //             <button type="button">
  //               <i className="fa fa-arrow-right" />
  //             </button>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </footer>
  <footer className="footer-section">
    <div className="container">
      <div className="footer-cta pt-3 ">
        <div className="row">
          <div className="col-md-4 col-md-4 mb-30">
            <div className="single-cta">
              <i className="fa fa-map-marker" />
              <div className="cta-text">
                <h4>Find us</h4>
                <span>Hoa Khanh, Lien Chieu, Da Nang</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-md-4 mb-30">
            <div className="single-cta">
              <i className="fa fa-phone" />
              <div className="cta-text">
                <h4>Call us</h4>
                <span>+91 1234567890</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-md-4 mb-30">
            <div className="single-cta">
              <i className="fa fa-envelope" />
              <div className="cta-text">
                <h4>Mail us</h4>
                <span>newspaper@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-content pt-5 pb-1">
        <div className="row">
          <div className="col-md-4 col-lg-4 ">
            <div className="footer-widget">
              <div className="footer-text">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="footer-social-icon">
                <span>Follow us</span>
                <ul className="social_icon">
                  <li><a href="#"><i className="fa fa-facebook-f" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-instagram" /></a></li>
                  <li><a href="#"><i className="fa fa-youtube" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-md-6">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>Useful Links</h3>
              </div>
              <ul>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Gallery</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-md-6">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>Subscribe</h3>
              </div>
              <div className="footer-text mb-25">
              </div>
              <div className="subscribe-form">
                <form action="#">
                  <input type="text" placeholder="Email Address" />
                  <button><i className="fa fa-send-o" /></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6 text-center text-lg-left">
            <div className="copyright-text">
              <p>Team graduation:&nbsp; <a href="#">Diễm Hoàng & Anh Phương</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
