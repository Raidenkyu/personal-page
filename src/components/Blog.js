import React, { Component } from "react";
import PropTypes from "prop-types";
import { Waypoint } from "react-waypoint";
import { onEnterHandler } from "../utils/waypointHandler";

class Blog extends Component {
  render() {
    const { data } = this.props;

    if (!data) return (<p>No Data Found</p>);

    const posts = data.posts.map((posts) => (
      <li key={posts.title}>
        <blockquote>
          <p>{posts.title}</p>
          <cite>published at {posts.date}</cite>
        </blockquote>
      </li>
    ));

    return (
      <section id="blog">
        <Waypoint onEnter={onEnterHandler} topOffset="35%">
          <div className="text-container">
            <div className="row">

              <div className="two columns header-col">
                <h1><span>Blog Posts</span></h1>
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
        </Waypoint>
      </section>
    );
  }
}

Blog.propTypes = {
  data: PropTypes.any,
};

export default Blog;
