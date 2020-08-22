import React, { Component } from "react";
import PropTypes from "prop-types";
import { Waypoint } from "react-waypoint";
import { onEnterHandler } from "../utils/waypointHandler";

class Resume extends Component {
  render() {
    const { data } = this.props;

    if (!data) return (<p>No Data Found</p>);

    const {
      skillmessage,
      education,
      work,
      skills,
    } = data;

    const educationList = education.map((education) => (
      <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
    ));

    const workList = work.map((work) => (
      <div key={work.company}><h3>{work.company}</h3>
        <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
        <p>{work.description}</p>
      </div>
    ));

    const skillsList = skills.map((skills) => {
      const className = `bar-expand ${skills.name.toLowerCase()}`;

      return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>;
    });

    return (
      <Waypoint onEnter={onEnterHandler} topOffset="35%">
        <section id="resume">

          <div className="row education">
            <div className="three columns header-col">
              <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  {educationList}
                </div>
              </div>
            </div>
          </div>

          <div className="row work">

            <div className="three columns header-col">
              <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {workList}
            </div>
          </div>

          <div className="row skill">

            <div className="three columns header-col">
              <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

              <p>{skillmessage}
              </p>

              <div className="bars">
                <ul className="skills">
                  {skillsList}
                </ul>
              </div>
            </div>
          </div>

        </section>
      </Waypoint>
    );
  }
}

Resume.propTypes = {
  data: PropTypes.any,
};

export default Resume;
