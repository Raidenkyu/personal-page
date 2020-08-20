import React, { Component } from "react";
import PropTypes from "prop-types";

class Blog extends Component {
  render() {
    const { data } = this.props;

    if (!data) return (<p>No Data Found</p>);

    const posts = data.posts.map((testimonials) => (
      <li key={testimonials.user}>
        <blockquote>
          <p>{testimonials.title}</p>
          <cite>published at {testimonials.date}</cite>
        </blockquote>
      </li>
    ));

    return (
      <section id="blog">
        <div className="text-container">
          <div className="row">

            <div className="two columns header-col">
              <h1><span>Client Testimonials</span></h1>
            </div>

            <div>
              <h1>Check out my last blog post:</h1>
            </div>

            <div className="ten columns flex-container">
              <ul className="slides">
                {posts}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Blog.propTypes = {
  data: PropTypes.any,
};

export default Blog;
