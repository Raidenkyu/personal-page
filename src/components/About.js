import React, { Component } from "react";
import PropTypes from "prop-types";
import { Waypoint } from "react-waypoint";
import { onEnterHandler } from "../utils/waypointHandler";

class About extends Component {
  render() {
    const { data } = this.props;

    if (!data) return (<p>No Data Found</p>);

    const {
      name,
      bio,
      address,
      phone,
      email,
      resumeDownload,
      image,
    } = data;

    const {
      city,
      country,
    } = address;

    const profilepic = `images/${image}`;

    return (
      <section id="about">
        <Waypoint onEnter={onEnterHandler} topOffset="35%">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src={profilepic} alt="João Maduro Profile Pic" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span><br />
                    <span>
                      {city}, {country}
                    </span><br />
                    <span>{phone}</span><br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Waypoint>
      </section>
    );
  }
}

About.propTypes = {
  data: PropTypes.any,
};

export default About;
