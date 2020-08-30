import React, { Component } from "react";
import PropTypes from "prop-types";
import { Waypoint } from "react-waypoint";
import { waypoints, onEnterHandler } from "../../utils/waypointHandler";

class Blog extends Component {
  render() {
    const { data } = this.props;

    if (!data) return (<p>No Data Found</p>);

    const posts = (
      <li key={data.frontmatter.title}>
        <blockquote>
          <a href={data.fields.slug}><p>{data.frontmatter.title}</p></a>
          <cite>published at {data.frontmatter.date}</cite>
        </blockquote>
      </li>
    );

    return (
      <section id="blog">
        <Waypoint onEnter={onEnterHandler.bind(undefined, waypoints[4])} topOffset="35%">
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

              <div className="link-container">
                <a href="/blog">Click here to see all posts in my blog</a>
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
