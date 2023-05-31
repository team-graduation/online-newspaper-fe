export const Footer = () => (
  <footer className="footer-area">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="footer-single-widget">
            <a href="#">
              <img src="img/core-img/logo.png" alt="" />
            </a>
            <div className="copywrite-text mt-30">
              <p>
                Team graduation
              </p>
              <p>
                SV {" "}
                <a href="#" target="_blank">
                  DiemHoang -- AnhPhuong
                </a>
              </p>
              <p />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="footer-single-widget">
            <ul className="footer-menu d-flex justify-content-between">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Fashion</a>
              </li>
              <li>
                <a href="#">Entertainment</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Sports</a>
              </li>
              <li>
                <a href="#">Business</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="footer-single-widget">
            <h5>Subscribe</h5>
            <form action="#" method="post">
              <input
                type="email"
                name="email"
                id="eemail"
                placeholder="Enter your mail"
              />
              <button type="button">
                <i className="fa fa-arrow-right" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
