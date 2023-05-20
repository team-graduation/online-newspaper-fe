import React, { Component } from 'react';
import LOGO from 'img/blog-img/b1.jpg';

class Home extends Component {
    render() {
        return (
            <div>
              {/* Preloader Start */}
              {/* <div id="preloader">
                <div className="preload-content">
                  <div id="world-load" />
                </div>
              </div> */}
              {/* Preloader End */}
              {/* ***** Header Area Start ***** */}
              <header className="header-area">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <nav className="navbar navbar-expand-lg">
                        {/* Logo */}
                        <a className="navbar-brand" href="#"><img src="" alt="Logo" /></a>
                        {/* Navbar Toggler */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#worldNav" aria-controls="worldNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                        {/* Navbar */}
                        <div className="collapse navbar-collapse" id="worldNav">
                          <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="index.html">Home</a>
                                <a className="dropdown-item" href="catagory.html">Catagory</a>
                                <a className="dropdown-item" href="single-blog.html">Single Blog</a>
                                <a className="dropdown-item" href="regular-page.html">Regular Page</a>
                                <a className="dropdown-item" href="contact.html">Contact</a>
                              </div>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Gadgets</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Lifestyle</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Video</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Contact</a>
                            </li>
                          </ul>
                          {/* Search Form  */}
                          <div id="search-wrapper">
                            <form action="#">
                              <input type="text" id="search" placeholder="Search something..." />
                              <div id="close-icon" />
                              <input className="d-none" type="submit" defaultValue />
                            </form>
                          </div>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </header>
              {/* ***** Header Area End ***** */}
              {/* ********** Hero Area Start ********** */}
              <div className="hero-area">
                {/* Hero Slides Area */}
                <div className="hero-slides owl-carousel">
                  {/* Single Slide */}
                  <div className="single-hero-slide bg-img background-overlay" style={{backgroundImage: 'url(/img/blog-img/bg2.jpg)'}} />
                  {/* Single Slide */}
                  <div className="single-hero-slide bg-img background-overlay" style={{backgroundImage: 'url(/img/blog-img/bg1.jpg)'}} />
                </div>
                {/* Hero Post Slide */}
                <div className="hero-post-area">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="hero-post-slide">
                          {/* Single Slide */}
                          <div className="single-slide d-flex align-items-center">
                            <div className="post-number">
                              <p>1</p>
                            </div>
                            <div className="post-title">
                              <a href="single-blog.html">How Did van Gogh’s Turbulent Mind Depict One of the Most Complex</a>
                            </div>
                          </div>
                          {/* Single Slide */}
                          <div className="single-slide d-flex align-items-center">
                            <div className="post-number">
                              <p>2</p>
                            </div>
                            <div className="post-title">
                              <a href="single-blog.html">How Did van Gogh’s Turbulent Mind Depict One of the Most Complex</a>
                            </div>
                          </div>
                          {/* Single Slide */}
                          <div className="single-slide d-flex align-items-center">
                            <div className="post-number">
                              <p>3</p>
                            </div>
                            <div className="post-title">
                              <a href="single-blog.html">How Did van Gogh’s Turbulent Mind Depict One of the Most Complex</a>
                            </div>
                          </div>
                          {/* Single Slide */}
                          <div className="single-slide d-flex align-items-center">
                            <div className="post-number">
                              <p>4</p>
                            </div>
                            <div className="post-title">
                              <a href="single-blog.html">How Did van Gogh’s Turbulent Mind Depict One of the Most Complex</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ********** Hero Area End ********** */}
              <div className="main-content-wrapper section-padding-100">
                <div className="container">
                  <div className="row justify-content-center">
                    {/* ============= Post Content Area Start ============= */}
                    <div className="col-12 col-lg-8">
                      <div className="post-content-area mb-50">
                        {/* Catagory Area */}
                        <div className="world-catagory-area">
                          <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="title">Don’t Miss</li>
                            <li className="nav-item">
                              <a className="nav-link active" id="tab1" data-toggle="tab" href="#world-tab-1" role="tab" aria-controls="world-tab-1" aria-selected="true">All</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" id="tab2" data-toggle="tab" href="#world-tab-2" role="tab" aria-controls="world-tab-2" aria-selected="false">Style hunter</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" id="tab3" data-toggle="tab" href="#world-tab-3" role="tab" aria-controls="world-tab-3" aria-selected="false">Vogue</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" id="tab4" data-toggle="tab" href="#world-tab-4" role="tab" aria-controls="world-tab-4" aria-selected="false">Health &amp; Fitness</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" id="tab5" data-toggle="tab" href="#world-tab-5" role="tab" aria-controls="world-tab-5" aria-selected="false">Travel</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" id="tab6" data-toggle="tab" href="#world-tab-6" role="tab" aria-controls="world-tab-6" aria-selected="false">Gadgets</a>
                            </li>
                            <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">More</a>
                              <div className="dropdown-menu">
                                <a className="nav-link" id="tab7" data-toggle="tab" href="#world-tab-7" role="tab" aria-controls="world-tab-7" aria-selected="false">Sports</a>
                                <a className="nav-link" id="tab8" data-toggle="tab" href="#world-tab-8" role="tab" aria-controls="world-tab-8" aria-selected="false">Politices</a>
                                <a className="nav-link" id="tab9" data-toggle="tab" href="#world-tab-9" role="tab" aria-controls="world-tab-9" aria-selected="false">Features</a>
                              </div>
                            </li>
                          </ul>
                          <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="world-tab-1" role="tabpanel" aria-labelledby="tab1">
                              <div className="row">
                                <div className="col-12 col-md-6">
                                  <div className="world-catagory-slider owl-carousel wow fadeInUpBig" data-wow-delay="0.1s">
                                    {
                                      [0,1,2,3].map(function(post) {
                                        return <div className="single-blog-post">
                                      {/* Post Thumbnail */}
                                      <div className="post-thumbnail">
                                        <img src="/img/blog-img/b1.jpg" alt="" />
                                        {/* Catagory */}
                                        <div className="post-cta"><a href="#">travel</a></div>
                                      </div>
                                      {/* Post Content */}
                                      <div className="post-content">
                                        <a href="#" className="headline">
                                          <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                        </a>
                                        <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                        {/* Post Meta */}
                                        <div className="post-meta">
                                          <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                        </div>
                                      </div>
                                    </div>
                                      })
                                    }
                                    {/* Single Blog Post */}
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {[0,1,2,3,4].map(function(post) {
                                      return <div className="single-blog-post post-style-2 d-flex align-items-center wow fadeInUpBig" data-wow-delay="0.2s">
                                        {/* Post Thumbnail */}
                                        <div className="post-thumbnail">
                                          <img src="/img/blog-img/b10.jpg" alt="" />
                                        </div>
                                        {/* Post Content */}
                                        <div className="post-content">
                                          <a href="#" className="headline">
                                            <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                          </a>
                                          {/* Post Meta */}
                                          <div className="post-meta">
                                            <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                          </div>
                                        </div>
                                      </div>
                                  } )}
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="world-tab-2" role="tabpanel" aria-labelledby="tab2">
                              <div className="row">
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b1.jpg" alt="" />
                                      {/* Catagory */}
                                      <div className="post-cta"><a href="#">travel</a></div>
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                      </a>
                                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b10.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b11.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b12.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b13.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="world-tab-3" role="tabpanel" aria-labelledby="tab3">
                              <div className="row">
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b1.jpg" alt="" />
                                      {/* Catagory */}
                                      <div className="post-cta"><a href="#">travel</a></div>
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                      </a>
                                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b10.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b11.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b12.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b13.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="world-tab-4" role="tabpanel" aria-labelledby="tab4">
                              <div className="row">
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b1.jpg" alt="" />
                                      {/* Catagory */}
                                      <div className="post-cta"><a href="#">travel</a></div>
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                      </a>
                                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b10.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b11.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b12.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b13.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="world-tab-5" role="tabpanel" aria-labelledby="tab5">
                              <div className="row">
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b1.jpg" alt="" />
                                      {/* Catagory */}
                                      <div className="post-cta"><a href="#">travel</a></div>
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                      </a>
                                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b10.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b11.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b12.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b13.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="world-tab-6" role="tabpanel" aria-labelledby="tab6">
                              <div className="row">
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b1.jpg" alt="" />
                                      {/* Catagory */}
                                      <div className="post-cta"><a href="#">travel</a></div>
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                      </a>
                                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b10.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b11.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b12.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b13.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="world-tab-7" role="tabpanel" aria-labelledby="tab7">
                              <div className="row">
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b1.jpg" alt="" />
                                      {/* Catagory */}
                                      <div className="post-cta"><a href="#">travel</a></div>
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                      </a>
                                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b10.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b11.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b12.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b13.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="world-tab-8" role="tabpanel" aria-labelledby="tab8">
                              <div className="row">
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b1.jpg" alt="" />
                                      {/* Catagory */}
                                      <div className="post-cta"><a href="#">travel</a></div>
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                      </a>
                                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b10.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b11.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b12.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b13.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="world-tab-9" role="tabpanel" aria-labelledby="tab9">
                              <div className="row">
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b1.jpg" alt="" />
                                      {/* Catagory */}
                                      <div className="post-cta"><a href="#">travel</a></div>
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                      </a>
                                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b10.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b11.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b12.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b13.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Catagory Area */}
                        <div className="world-catagory-area mt-50">
                          <ul className="nav nav-tabs" id="myTab2" role="tablist">
                            <li className="title">What's Trending</li>
                            <li className="nav-item">
                              <a className="nav-link active" id="tab10" data-toggle="tab" href="#world-tab-10" role="tab" aria-controls="world-tab-10" aria-selected="true">All</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" id="tab11" data-toggle="tab" href="#world-tab-11" role="tab" aria-controls="world-tab-11" aria-selected="false">Style hunter</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" id="tab12" data-toggle="tab" href="#world-tab-12" role="tab" aria-controls="world-tab-12" aria-selected="false">Vogue</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" id="tab13" data-toggle="tab" href="#world-tab-13" role="tab" aria-controls="world-tab-13" aria-selected="false">Health &amp; Fitness</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" id="tab14" data-toggle="tab" href="#world-tab-14" role="tab" aria-controls="world-tab-14" aria-selected="false">Travel</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" id="tab15" data-toggle="tab" href="#world-tab-15" role="tab" aria-controls="world-tab-15" aria-selected="false">Gadgets</a>
                            </li>
                            <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">More</a>
                              <div className="dropdown-menu">
                                <a className="nav-link" id="tab16" data-toggle="tab" href="#world-tab-16" role="tab" aria-controls="world-tab-16" aria-selected="false">Sports</a>
                                <a className="nav-link" id="tab17" data-toggle="tab" href="#world-tab-17" role="tab" aria-controls="world-tab-17" aria-selected="false">Politices</a>
                                <a className="nav-link" id="tab18" data-toggle="tab" href="#world-tab-18" role="tab" aria-controls="world-tab-18" aria-selected="false">Features</a>
                              </div>
                            </li>
                          </ul>
                          <div className="tab-content" id="myTabContent2">
                            <div className="tab-pane fade show active" id="world-tab-10" role="tabpanel" aria-labelledby="tab10">
                              <div className="row">
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post wow fadeInUpBig" data-wow-delay="0.2s">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b2.jpg" alt="" />
                                      {/* Catagory */}
                                      <div className="post-cta"><a href="#">travel</a></div>
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                      </a>
                                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post wow fadeInUpBig" data-wow-delay="0.3s">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b3.jpg" alt="" />
                                      {/* Catagory */}
                                      <div className="post-cta"><a href="#">travel</a></div>
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                      </a>
                                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="world-catagory-slider2 owl-carousel wow fadeInUpBig" data-wow-delay="0.4s">
                                    {/* ========= Single Catagory Slide ========= */}
                                    <div className="single-cata-slide">
                                      <div className="row">
                                        <div className="col-12 col-md-6">
                                          {/* Single Blog Post */}
                                          <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                            {/* Post Thumbnail */}
                                            <div className="post-thumbnail">
                                              <img src="/img/blog-img/b14.jpg" alt="" />
                                            </div>
                                            {/* Post Content */}
                                            <div className="post-content">
                                              <a href="#" className="headline">
                                                <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                              </a>
                                              {/* Post Meta */}
                                              <div className="post-meta">
                                                <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                          {/* Single Blog Post */}
                                          <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                            {/* Post Thumbnail */}
                                            <div className="post-thumbnail">
                                              <img src="/img/blog-img/b15.jpg" alt="" />
                                            </div>
                                            {/* Post Content */}
                                            <div className="post-content">
                                              <a href="#" className="headline">
                                                <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                              </a>
                                              {/* Post Meta */}
                                              <div className="post-meta">
                                                <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                          {/* Single Blog Post */}
                                          <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                            {/* Post Thumbnail */}
                                            <div className="post-thumbnail">
                                              <img src="/img/blog-img/b16.jpg" alt="" />
                                            </div>
                                            {/* Post Content */}
                                            <div className="post-content">
                                              <a href="#" className="headline">
                                                <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                              </a>
                                              {/* Post Meta */}
                                              <div className="post-meta">
                                                <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                          {/* Single Blog Post */}
                                          <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                            {/* Post Thumbnail */}
                                            <div className="post-thumbnail">
                                              <img src="/img/blog-img/b17.jpg" alt="" />
                                            </div>
                                            {/* Post Content */}
                                            <div className="post-content">
                                              <a href="#" className="headline">
                                                <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                              </a>
                                              {/* Post Meta */}
                                              <div className="post-meta">
                                                <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* ========= Single Catagory Slide ========= */}
                                    <div className="single-cata-slide">
                                      <div className="row">
                                        <div className="col-12 col-md-6">
                                          {/* Single Blog Post */}
                                          <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                            {/* Post Thumbnail */}
                                            <div className="post-thumbnail">
                                              <img src="/img/blog-img/b17.jpg" alt="" />
                                            </div>
                                            {/* Post Content */}
                                            <div className="post-content">
                                              <a href="#" className="headline">
                                                <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                              </a>
                                              {/* Post Meta */}
                                              <div className="post-meta">
                                                <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                          {/* Single Blog Post */}
                                          <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                            {/* Post Thumbnail */}
                                            <div className="post-thumbnail">
                                              <img src="/img/blog-img/b15.jpg" alt="" />
                                            </div>
                                            {/* Post Content */}
                                            <div className="post-content">
                                              <a href="#" className="headline">
                                                <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                              </a>
                                              {/* Post Meta */}
                                              <div className="post-meta">
                                                <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                          {/* Single Blog Post */}
                                          <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                            {/* Post Thumbnail */}
                                            <div className="post-thumbnail">
                                              <img src="/img/blog-img/b14.jpg" alt="" />
                                            </div>
                                            {/* Post Content */}
                                            <div className="post-content">
                                              <a href="#" className="headline">
                                                <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                              </a>
                                              {/* Post Meta */}
                                              <div className="post-meta">
                                                <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                          {/* Single Blog Post */}
                                          <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                            {/* Post Thumbnail */}
                                            <div className="post-thumbnail">
                                              <img src="/img/blog-img/b16.jpg" alt="" />
                                            </div>
                                            {/* Post Content */}
                                            <div className="post-content">
                                              <a href="#" className="headline">
                                                <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                              </a>
                                              {/* Post Meta */}
                                              <div className="post-meta">
                                                <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="world-tab-11" role="tabpanel" aria-labelledby="tab11">
                              <div className="row">
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b2.jpg" alt="" />
                                      {/* Catagory */}
                                      <div className="post-cta"><a href="#">travel</a></div>
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                      </a>
                                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b3.jpg" alt="" />
                                      {/* Catagory */}
                                      <div className="post-cta"><a href="#">travel</a></div>
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                      </a>
                                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b14.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b15.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b16.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b17.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="world-tab-12" role="tabpanel" aria-labelledby="tab12">
                              <div className="row">
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b2.jpg" alt="" />
                                      {/* Catagory */}
                                      <div className="post-cta"><a href="#">travel</a></div>
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                      </a>
                                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b3.jpg" alt="" />
                                      {/* Catagory */}
                                      <div className="post-cta"><a href="#">travel</a></div>
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                      </a>
                                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b2.jpg" alt="" />
                                      {/* Catagory */}
                                      <div className="post-cta"><a href="#">travel</a></div>
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                      </a>
                                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b3.jpg" alt="" />
                                      {/* Catagory */}
                                      <div className="post-cta"><a href="#">travel</a></div>
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                      </a>
                                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="world-tab-13" role="tabpanel" aria-labelledby="tab13">
                              <div className="row">
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b14.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b15.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b16.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b17.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b14.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b15.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b16.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b17.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="world-tab-14" role="tabpanel" aria-labelledby="tab14">
                              <div className="row">
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b2.jpg" alt="" />
                                      {/* Catagory */}
                                      <div className="post-cta"><a href="#">travel</a></div>
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                      </a>
                                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b3.jpg" alt="" />
                                      {/* Catagory */}
                                      <div className="post-cta"><a href="#">travel</a></div>
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                      </a>
                                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b14.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b15.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b16.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b17.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="world-tab-15" role="tabpanel" aria-labelledby="tab15">
                              <div className="row">
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b2.jpg" alt="" />
                                      {/* Catagory */}
                                      <div className="post-cta"><a href="#">travel</a></div>
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                      </a>
                                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b3.jpg" alt="" />
                                      {/* Catagory */}
                                      <div className="post-cta"><a href="#">travel</a></div>
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                      </a>
                                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b14.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b15.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b16.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b17.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="world-tab-16" role="tabpanel" aria-labelledby="tab16">
                              <div className="row">
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b2.jpg" alt="" />
                                      {/* Catagory */}
                                      <div className="post-cta"><a href="#">travel</a></div>
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                      </a>
                                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b3.jpg" alt="" />
                                      {/* Catagory */}
                                      <div className="post-cta"><a href="#">travel</a></div>
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                      </a>
                                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b14.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b15.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b16.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b17.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="world-tab-17" role="tabpanel" aria-labelledby="tab17">
                              <div className="row">
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b2.jpg" alt="" />
                                      {/* Catagory */}
                                      <div className="post-cta"><a href="#">travel</a></div>
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                      </a>
                                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b3.jpg" alt="" />
                                      {/* Catagory */}
                                      <div className="post-cta"><a href="#">travel</a></div>
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                      </a>
                                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b14.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b15.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b16.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b17.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="world-tab-18" role="tabpanel" aria-labelledby="tab18">
                              <div className="row">
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b2.jpg" alt="" />
                                      {/* Catagory */}
                                      <div className="post-cta"><a href="#">travel</a></div>
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                      </a>
                                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b3.jpg" alt="" />
                                      {/* Catagory */}
                                      <div className="post-cta"><a href="#">travel</a></div>
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                      </a>
                                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b14.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b15.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b16.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  {/* Single Blog Post */}
                                  <div className="single-blog-post post-style-2 d-flex align-items-center mb-1">
                                    {/* Post Thumbnail */}
                                    <div className="post-thumbnail">
                                      <img src="/img/blog-img/b17.jpg" alt="" />
                                    </div>
                                    {/* Post Content */}
                                    <div className="post-content">
                                      <a href="#" className="headline">
                                        <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                      </a>
                                      {/* Post Meta */}
                                      <div className="post-meta">
                                        <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ========== Sidebar Area ========== */}
                    <div className="col-12 col-md-8 col-lg-4">
                      <div className="post-sidebar-area wow fadeInUpBig" data-wow-delay="0.2s">
                        {/* Widget Area */}
                        <div className="sidebar-widget-area">
                          <h5 className="title">About World</h5>
                          <div className="widget-content">
                            <p>The mango is perfect in that it is always yellow and if it’s not, I don’t want to hear about it. The mango’s only flaw, and it’s a minor one, is the effort it sometimes takes to undress the mango, carve it up in a way that makes sense, and find its way to the mouth.</p>
                          </div>
                        </div>
                        {/* Widget Area */}
                        <div className="sidebar-widget-area">
                          <h5 className="title">Top Stories</h5>
                          <div className="widget-content">
                            {/* Single Blog Post */}
                            <div className="single-blog-post post-style-2 d-flex align-items-center widget-post">
                              {/* Post Thumbnail */}
                              <div className="post-thumbnail">
                                <img src="/img/blog-img/b11.jpg" alt="" />
                              </div>
                              {/* Post Content */}
                              <div className="post-content">
                                <a href="#" className="headline">
                                  <h5 className="mb-0">How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                </a>
                              </div>
                            </div>
                            {/* Single Blog Post */}
                            <div className="single-blog-post post-style-2 d-flex align-items-center widget-post">
                              {/* Post Thumbnail */}
                              <div className="post-thumbnail">
                                <img src="/img/blog-img/b13.jpg" alt="" />
                              </div>
                              {/* Post Content */}
                              <div className="post-content">
                                <a href="#" className="headline">
                                  <h5 className="mb-0">How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                </a>
                              </div>
                            </div>
                            {/* Single Blog Post */}
                            <div className="single-blog-post post-style-2 d-flex align-items-center widget-post">
                              {/* Post Thumbnail */}
                              <div className="post-thumbnail">
                                <img src="/img/blog-img/b14.jpg" alt="" />
                              </div>
                              {/* Post Content */}
                              <div className="post-content">
                                <a href="#" className="headline">
                                  <h5 className="mb-0">How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                </a>
                              </div>
                            </div>
                            {/* Single Blog Post */}
                            <div className="single-blog-post post-style-2 d-flex align-items-center widget-post">
                              {/* Post Thumbnail */}
                              <div className="post-thumbnail">
                                <img src="/img/blog-img/b10.jpg" alt="" />
                              </div>
                              {/* Post Content */}
                              <div className="post-content">
                                <a href="#" className="headline">
                                  <h5 className="mb-0">How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                </a>
                              </div>
                            </div>
                            {/* Single Blog Post */}
                            <div className="single-blog-post post-style-2 d-flex align-items-center widget-post">
                              {/* Post Thumbnail */}
                              <div className="post-thumbnail">
                                <img src="/img/blog-img/b12.jpg" alt="" />
                              </div>
                              {/* Post Content */}
                              <div className="post-content">
                                <a href="#" className="headline">
                                  <h5 className="mb-0">How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Widget Area */}
                        <div className="sidebar-widget-area">
                          <h5 className="title">Stay Connected</h5>
                          <div className="widget-content">
                            <div className="social-area d-flex justify-content-between">
                              <a href="#"><i className="fa fa-facebook" /></a>
                              <a href="#"><i className="fa fa-twitter" /></a>
                              <a href="#"><i className="fa fa-pinterest" /></a>
                              <a href="#"><i className="fa fa-vimeo" /></a>
                              <a href="#"><i className="fa fa-instagram" /></a>
                              <a href="#"><i className="fa fa-google" /></a>
                            </div>
                          </div>
                        </div>
                        {/* Widget Area */}
                        <div className="sidebar-widget-area">
                          <h5 className="title">Today’s Pick</h5>
                          <div className="widget-content">
                            {/* Single Blog Post */}
                            <div className="single-blog-post todays-pick">
                              {/* Post Thumbnail */}
                              <div className="post-thumbnail">
                                <img src="/img/blog-img/b22.jpg" alt="" />
                              </div>
                              {/* Post Content */}
                              <div className="post-content px-0 pb-0">
                                <a href="#" className="headline">
                                  <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    {/* ========== Single Blog Post ========== */}
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="single-blog-post post-style-3 mt-50 wow fadeInUpBig" data-wow-delay="0.2s">
                        {/* Post Thumbnail */}
                        <div className="post-thumbnail">
                          <img src="/img/blog-img/b4.jpg" alt="" />
                          {/* Post Content */}
                          <div className="post-content d-flex align-items-center justify-content-between">
                            {/* Catagory */}
                            <div className="post-tag"><a href="#">travel</a></div>
                            {/* Headline */}
                            <a href="#" className="headline">
                              <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                            </a>
                            {/* Post Meta */}
                            <div className="post-meta">
                              <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ========== Single Blog Post ========== */}
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="single-blog-post post-style-3 mt-50 wow fadeInUpBig" data-wow-delay="0.4s">
                        {/* Post Thumbnail */}
                        <div className="post-thumbnail">
                          <img src="/img/blog-img/b5.jpg" alt="" />
                          {/* Post Content */}
                          <div className="post-content d-flex align-items-center justify-content-between">
                            {/* Catagory */}
                            <div className="post-tag"><a href="#">travel</a></div>
                            {/* Headline */}
                            <a href="#" className="headline">
                              <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                            </a>
                            {/* Post Meta */}
                            <div className="post-meta">
                              <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ========== Single Blog Post ========== */}
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="single-blog-post post-style-3 mt-50 wow fadeInUpBig" data-wow-delay="0.6s">
                        {/* Post Thumbnail */}
                        <div className="post-thumbnail">
                          <img src="/img/blog-img/b6.jpg" alt="" />
                          {/* Post Content */}
                          <div className="post-content d-flex align-items-center justify-content-between">
                            {/* Catagory */}
                            <div className="post-tag"><a href="#">travel</a></div>
                            {/* Headline */}
                            <a href="#" className="headline">
                              <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                            </a>
                            {/* Post Meta */}
                            <div className="post-meta">
                              <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="world-latest-articles">
                    <div className="row">
                      <div className="col-12 col-lg-8">
                        <div className="title">
                          <h5>Latest Articles</h5>
                        </div>
                        {/* Single Blog Post */}
                        <div className="single-blog-post post-style-4 d-flex align-items-center wow fadeInUpBig" data-wow-delay="0.2s">
                          {/* Post Thumbnail */}
                          <div className="post-thumbnail">
                            <img src="/img/blog-img/b18.jpg" alt="" />
                          </div>
                          {/* Post Content */}
                          <div className="post-content">
                            <a href="#" className="headline">
                              <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                            </a>
                            <p>Pick the yellow peach that looks like a sunset with its red, orange, and pink coat skin, peel it off with your teeth. Sink them into unripened...</p>
                            {/* Post Meta */}
                            <div className="post-meta">
                              <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                            </div>
                          </div>
                        </div>
                        {/* Single Blog Post */}
                        <div className="single-blog-post post-style-4 d-flex align-items-center wow fadeInUpBig" data-wow-delay="0.3s">
                          {/* Post Thumbnail */}
                          <div className="post-thumbnail">
                            <img src="/img/blog-img/b19.jpg" alt="" />
                          </div>
                          {/* Post Content */}
                          <div className="post-content">
                            <a href="#" className="headline">
                              <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                            </a>
                            <p>Pick the yellow peach that looks like a sunset with its red, orange, and pink coat skin, peel it off with your teeth. Sink them into unripened...</p>
                            {/* Post Meta */}
                            <div className="post-meta">
                              <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                            </div>
                          </div>
                        </div>
                        {/* Single Blog Post */}
                        <div className="single-blog-post post-style-4 d-flex align-items-center wow fadeInUpBig" data-wow-delay="0.4s">
                          {/* Post Thumbnail */}
                          <div className="post-thumbnail">
                            <img src="/img/blog-img/b20.jpg" alt="" />
                          </div>
                          {/* Post Content */}
                          <div className="post-content">
                            <a href="#" className="headline">
                              <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                            </a>
                            <p>Pick the yellow peach that looks like a sunset with its red, orange, and pink coat skin, peel it off with your teeth. Sink them into unripened...</p>
                            {/* Post Meta */}
                            <div className="post-meta">
                              <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                            </div>
                          </div>
                        </div>
                        {/* Single Blog Post */}
                        <div className="single-blog-post post-style-4 d-flex align-items-center wow fadeInUpBig" data-wow-delay="0.5s">
                          {/* Post Thumbnail */}
                          <div className="post-thumbnail">
                            <img src="/img/blog-img/b21.jpg" alt="" />
                          </div>
                          {/* Post Content */}
                          <div className="post-content">
                            <a href="#" className="headline">
                              <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                            </a>
                            <p>Pick the yellow peach that looks like a sunset with its red, orange, and pink coat skin, peel it off with your teeth. Sink them into unripened...</p>
                            {/* Post Meta */}
                            <div className="post-meta">
                              <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-4">
                        <div className="title">
                          <h5>Most Popular Videos</h5>
                        </div>
                        {/* Single Blog Post */}
                        <div className="single-blog-post wow fadeInUpBig" data-wow-delay="0.2s">
                          {/* Post Thumbnail */}
                          <div className="post-thumbnail">
                            <img src="/img/blog-img/b7.jpg" alt="" />
                            {/* Catagory */}
                            <div className="post-cta"><a href="#">travel</a></div>
                            {/* Video Button */}
                            <a href="https://www.youtube.com/watch?v=IhnqEwFSJRg" className="video-btn"><i className="fa fa-play" /></a>
                          </div>
                          {/* Post Content */}
                          <div className="post-content">
                            <a href="#" className="headline">
                              <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                            </a>
                            <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                            {/* Post Meta */}
                            <div className="post-meta">
                              <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                            </div>
                          </div>
                        </div>
                        {/* Single Blog Post */}
                        <div className="single-blog-post wow fadeInUpBig" data-wow-delay="0.4s">
                          {/* Post Thumbnail */}
                          <div className="post-thumbnail">
                            <img src="/img/blog-img/b8.jpg" alt="" />
                            {/* Catagory */}
                            <div className="post-cta"><a href="#">travel</a></div>
                            {/* Video Button */}
                            <a href="https://www.youtube.com/watch?v=IhnqEwFSJRg" className="video-btn"><i className="fa fa-play" /></a>
                          </div>
                          {/* Post Content */}
                          <div className="post-content">
                            <a href="#" className="headline">
                              <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                            </a>
                            <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                            {/* Post Meta */}
                            <div className="post-meta">
                              <p><a href="#" className="post-author">Katy Liu</a> on <a href="#" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Load More btn */}
                  <div className="row">
                    <div className="col-12">
                      <div className="load-more-btn mt-50 text-center">
                        <a href="#" className="btn world-btn">Load More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ***** Footer Area Start ***** */}
              <footer className="footer-area">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <div className="footer-single-widget">
                        <a href="#"><img src="/img/core-img/logo.png" alt="" /></a>
                        <div className="copywrite-text mt-30">
                          <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            Copyright © | Made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a> 
                          </p><p>Proudly distributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a></p>
                          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}<p />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="footer-single-widget">
                        <ul className="footer-menu d-flex justify-content-between">
                          <li><a href="#">Home</a></li>
                          <li><a href="#">Fashion</a></li>
                          <li><a href="#">Lifestyle</a></li>
                          <li><a href="#">Contact</a></li>
                          <li><a href="#">Gadgets</a></li>
                          <li><a href="#">Video</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="footer-single-widget">
                        <h5>Subscribe</h5>
                        <form action="#" method="post">
                          <input type="email" name="email" id="email" placeholder="Enter your mail" />
                          <button type="button"><i className="fa fa-arrow-right" /></button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
              {/* ***** Footer Area End ***** */}
              {/* jQuery (Necessary for All JavaScript Plugins) */}
              {/* Popper js */}
              {/* Bootstrap js */}
              {/* Plugins js */}
              {/* Active js */}
            </div>
          );
    }
}
export default Home;