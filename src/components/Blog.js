import React, { Component } from "react";
import PropTypes from "prop-types";

class Blog extends Component {
  render() {
    const { data } = this.props;

    if (!data) return (<p>No Data Found</p>);

    const testimonials = data.testimonials.map((testimonials) => (
      <li key={testimonials.user}>
        <blockquote>
          <p>{testimonials.text}</p>
          <cite>{testimonials.user}</cite>
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

            <div className="ten columns flex-container">
              <ul className="slides">
                {testimonials}
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
