import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactFitText from "react-fittext";
import { Waypoint } from "react-waypoint";
import { Link } from "react-scroll";

import { waypoints, onEnterHandler } from "../utils/waypointHandler";

class Header extends Component {
  render() {
    const { data, height } = this.props;

    if (!data) return (<p>No Data Found</p>);

    const {
      name,
      occupation,
      description,
      address,
      social,
    } = data;

    const city = address.city;
    const networks = social.map((network) => (
      <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
    ));

    return (
      <header id="home" style={{ height: height }}>

        <nav id="nav-wrap">

          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

          <ul id="nav" className="nav">
            <li><Link href="#home" activeClass="active" to="home" spy={true} smooth={true} duration={800}>Home</Link></li>
            <li><Link href="#about" activeClass="active" to="about" spy={true} smooth={true} duration={800}>About</Link></li>
            <li><Link href="#resume" activeClass="active" to="resume" spy={true} smooth={true} duration={800}>Resume</Link></li>
            <li><Link href="#portfolio" activeClass="active" to="portfolio" spy={true} smooth={true} duration={800}>Portfolio</Link></li>
            <li><Link href="#blog" activeClass="active" to="blog" spy={true} smooth={true} duration={800}>Blog</Link></li>
          </ul>

        </nav>

        <div className="row banner">
          <Waypoint onEnter={onEnterHandler.bind(undefined, waypoints[0])} topOffset="35%">
            <div className="banner-text">
              <ReactFitText compressor={1.0} minFontSize={40} maxFontSize={90}>
                <h1 className="responsive-headline">I&#39;m {name}.</h1>
              </ReactFitText>
              <h3>I&#39;m a {city} based <span>{occupation}</span>. {description}.</h3>
              <hr />
              <ul className="social">
                {networks}
              </ul>
            </div>
          </Waypoint>
        </div>

        <p className="scrolldown">
          <Link href="#about" activeClass="active" to="about" spy={true} smooth={true} duration={800}>
            <i className="icon-down-circle"></i>
          </Link>
        </p>

      </header>
    );
  }
}

Header.propTypes = {
  data: PropTypes.any,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Header;
