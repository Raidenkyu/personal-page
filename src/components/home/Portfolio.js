import React, { Component } from "react";
import PropTypes from "prop-types";
import { Waypoint } from "react-waypoint";
import { waypoints, onEnterHandler } from "../../utils/waypointHandler";

class Portfolio extends Component {
  render() {
    const { data } = this.props;

    if (!data) return (<p>No Data Found</p>);

    const projects = data.projects.map((projects) => {
      const projectImage = require(`../../assets/images/portfolio/${projects.image}`);
      return <div key={projects.title} className="columns portfolio-item">
        <div className="item-wrap">
          <a href={projects.url} title={projects.title}>
            <img alt={projects.title} src={projectImage} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{projects.title}</h5>
                <p>{projects.category}</p>
              </div>
            </div>
            <div className="link-icon"><i className="fa fa-link"></i></div>
          </a>
        </div>
      </div>;
    });

    return (
      <section id="portfolio">
        <Waypoint onEnter={onEnterHandler.bind(undefined, waypoints[3])} topOffset="35%">
          <div className="row">

            <div className="twelve columns collapsed">

              <h1>Check Out Some of My Works.</h1>

              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
              </div>
            </div>
          </div>
        </Waypoint>
      </section>
    );
  }
}

Portfolio.propTypes = {
  data: PropTypes.any,
};

export default Portfolio;
