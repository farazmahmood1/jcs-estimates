import React, { useState, useEffect } from 'react';
import './Blogs.css';
import { blogs } from './components/blogs';

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
  };

  const handleClosePopup = () => {
    setSelectedBlog(null);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        handleClosePopup();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div>
      <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg">
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Blog Post</h1>
            <ul className="breadcumb-menu">
              <li><a >Home</a></li>
              <li>Blog Post</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="th-blog-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="th-blog blog-single has-post-thumbnail">
                <div className="blog-img"><a ><img src="assets/img/blog/blog-s-1-1.jpg" alt="Blog Image" /></a></div>
                <div className="blog-content">
                  <div className="blog-meta"><a className="author" ><img src="assets/img/blog/author-1-1.png" alt="avater" /> By Themeholy</a> <a ><i className="fa-light fa-calendar-days" />21 June, 2024</a> <a ><i className="fa-regular fa-comments" />Comments (3)</a>
                  </div>
                  <h2 className="blog-title"><a >Unsatiable entreaties may collecting
                    Power.</a></h2>
                  <p className="blog-text">Progressively plagiarize quality metrics for impactful data.
                    Assertively. Holisticly leverage existing magnetic functionalities. Assertively
                    orchestrate high-quality customer service vis-a-vis intuitive interfaces. Conveniently
                    enhance highly efficient infomediaries.</p><a className="line-btn">Read More</a>
                </div>
              </div>
              <div className="th-blog blog-single has-post-thumbnail">
                <div className="blog-img th-carousel" data-arrows="true" data-slide-show={1} data-fade="true"><a ><img src="assets/img/blog/blog-s-1-2.jpg" alt="Blog Image" /></a><a ><img src="assets/img/blog/blog-s-1-4.jpg" alt="Blog Image" /></a></div>
                <div className="blog-content">
                  <div className="blog-meta"><a className="author" ><img src="assets/img/blog/author-1-1.png" alt="avater" /> By Themeholy</a> <a ><i className="fa-light fa-calendar-days" />22 June, 2024</a> <a ><i className="fa-regular fa-comments" />Comments (3)</a>
                  </div>
                  <h2 className="blog-title"><a >Regional Manager limited time
                    management.</a></h2>
                  <p className="blog-text">Progressively plagiarize quality metrics for impactful data.
                    Assertively. Holisticly leverage existing magnetic functionalities. Assertively
                    orchestrate high-quality customer service vis-a-vis intuitive interfaces. Conveniently
                    enhance highly efficient infomediaries.</p><a  className="line-btn">Read More</a>
                </div>
              </div>
              <div className="th-blog blog-single">
                <div className="blog-content">
                  <div className="blog-meta"><a className="author"><img src="assets/img/blog/author-1-1.png" alt="avater" /> By Themeholy</a> <a ><i className="fa-light fa-calendar-days" />24 June, 2024</a> <a ><i className="fa-regular fa-comments" />Comments (3)</a>
                  </div>
                  <h2 className="blog-title"><a >What’s the Holding Back It Solution
                    Industry?</a></h2>
                  <p className="blog-text">Progressively plagiarize quality metrics for impactful data.
                    Assertively. Holisticly leverage existing magnetic functionalities. Assertively
                    orchestrate high-quality customer service vis-a-vis intuitive interfaces. Conveniently
                    enhance highly efficient infomediaries.</p><a  className="line-btn">Read More</a>
                </div>
              </div>
              <div className="th-blog blog-single has-post-thumbnail">
                <div className="blog-img"><a ><img src="assets/img/blog/blog-s-1-3.jpg" alt="Blog Image" /></a><a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" className="play-btn popup-video"><i className="fas fa-play" /></a></div>
                <div className="blog-content">
                  <div className="blog-meta"><a className="author" ><img src="assets/img/blog/author-1-1.png" alt="avater" /> By Themeholy</a> <a ><i className="fa-light fa-calendar-days" />24 June, 2024</a> <a ><i className="fa-regular fa-comments" />Comments (3)</a>
                  </div>
                  <h2 className="blog-title"><a >Latin derived from Cicero's 1st-century
                    BC</a></h2>
                  <p className="blog-text">Progressively plagiarize quality metrics for impactful data.
                    Assertively. Holisticly leverage existing magnetic functionalities. Assertively
                    orchestrate high-quality customer service vis-a-vis intuitive interfaces. Conveniently
                    enhance highly efficient infomediaries.</p><a  className="line-btn">Read More</a>
                </div>
              </div>
              <div className="th-blog blog-single has-post-thumbnail">
                <div className="blog-audio"><iframe title="Tell Me U Luv Me (with Trippie Redd) by Juice WRLD" src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F830279092&show_artwork=true&maxwidth=751&maxheight=1000&dnt=1" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta"><a className="author" ><img src="assets/img/blog/author-1-1.png" alt="avater" /> By Themeholy</a> <a ><i className="fa-light fa-calendar-days" />25 June, 2024</a> <a ><i className="fa-regular fa-comments" />Comments (3)</a>
                  </div>
                  <h2 className="blog-title"><a >Regional Manager limited time
                    management.</a></h2>
                  <p className="blog-text">Progressively plagiarize quality metrics for impactful data.
                    Assertively. Holisticly leverage existing magnetic functionalities. Assertively
                    orchestrate high-quality customer service vis-a-vis intuitive interfaces. Conveniently
                    enhance highly efficient infomediaries.</p><a  className="line-btn">Read More</a>
                </div>
              </div>
              <div className="th-pagination text-center">
                <ul>
                  <li><a >1</a></li>
                  <li><a >2</a></li>
                  <li><a >3</a></li>
                  <li><a ><i className="far fa-arrow-right" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-5">
              <aside className="sidebar-area">
                <div className="widget widget_search">
                  <form className="search-form"><input type="text" placeholder="Enter Keyword" /> <button type="submit"><i className="far fa-search" /></button></form>
                </div>
                <div className="widget widget_categories">
                  <h3 className="widget_title">Categories</h3>
                  <ul>
                    <li><a >IT Solution</a></li>
                    <li><a >SEO Marketing</a></li>
                    <li><a >Web Development</a></li>
                    <li><a >Cloud Solution</a></li>
                    <li><a >Network Marketing</a></li>
                    <li><a >UI/UX Design</a></li>
                  </ul>
                </div>
                <div className="widget">
                  <h3 className="widget_title">Recent Posts</h3>
                  <div className="recent-post-wrap">
                    <div className="recent-post">
                      <div className="media-img"><a ><img src="assets/img/blog/recent-post-1-1.jpg" alt="Blog Image" /></a></div>
                      <div className="media-body">
                        <h4 className="post-title"><a className="text-inherit" >Unsatiable entreaties may collecting Power.</a>
                        </h4>
                        <div className="recent-post-meta"><a ><i className="fal fa-calendar-days" />21 June, 2024</a></div>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img"><a ><img src="assets/img/blog/recent-post-1-2.jpg" alt="Blog Image" /></a></div>
                      <div className="media-body">
                        <h4 className="post-title"><a className="text-inherit" >Regional
                          Manager limited time management.</a></h4>
                        <div className="recent-post-meta"><a ><i className="fal fa-calendar-days" />22 June, 2024</a></div>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img"><a ><img src="assets/img/blog/recent-post-1-3.jpg" alt="Blog Image" /></a></div>
                      <div className="media-body">
                        <h4 className="post-title"><a className="text-inherit" >What’s
                          the Holding Back It Solution Industry?</a></h4>
                        <div className="recent-post-meta"><a ><i className="fal fa-calendar-days" />23 June, 2024</a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget">
                  <h3 className="widget_title">Gallery Post</h3>
                  <div className="sidebar-gallery">
                    <div className="gallery-thumb"><img src="assets/img/widget/gallery_1_1.jpg" alt="Gallery Image" /> <a href="assets/img/widget/gallery_1_1.jpg" className="gallery-btn popup-image"><i className="fab fa-instagram" /></a></div>
                    <div className="gallery-thumb"><img src="assets/img/widget/gallery_1_2.jpg" alt="Gallery Image" /> <a href="assets/img/widget/gallery_1_2.jpg" className="gallery-btn popup-image"><i className="fab fa-instagram" /></a></div>
                    <div className="gallery-thumb"><img src="assets/img/widget/gallery_1_3.jpg" alt="Gallery Image" /> <a href="assets/img/widget/gallery_1_3.jpg" className="gallery-btn popup-image"><i className="fab fa-instagram" /></a></div>
                    <div className="gallery-thumb"><img src="assets/img/widget/gallery_1_4.jpg" alt="Gallery Image" /> <a href="assets/img/widget/gallery_1_4.jpg" className="gallery-btn popup-image"><i className="fab fa-instagram" /></a></div>
                    <div className="gallery-thumb"><img src="assets/img/widget/gallery_1_5.jpg" alt="Gallery Image" /> <a href="assets/img/widget/gallery_1_5.jpg" className="gallery-btn popup-image"><i className="fab fa-instagram" /></a></div>
                    <div className="gallery-thumb"><img src="assets/img/widget/gallery_1_6.jpg" alt="Gallery Image" /> <a href="assets/img/widget/gallery_1_6.jpg" className="gallery-btn popup-image"><i className="fab fa-instagram" /></a></div>
                  </div>
                </div>
                <div className="widget widget_tag_cloud">
                  <h3 className="widget_title">Popular Tags</h3>
                  <div className="tagcloud"><a >Technology</a> <a >Advice</a> <a >Solution</a> <a >Consultion</a> <a >Business</a> <a >Services</a> <a >Start Up</a> <a >Agency</a> <a >Software</a></div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

export default Blogs;
