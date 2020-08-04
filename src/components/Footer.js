import React from "react";
import PropTypes from "prop-types";

const Component = React.Component;

class Footer extends Component {
  render() {
    const { data } = this.props;

    if (!data) return (<p>No Data Found</p>);

    const { social } = data;

    const networks = social.map((network) => (
      <li key={network.name}>
        <a href={network.url}>
          <i className={network.className}></i>
        </a>
      </li>
    ));

    return (
      <footer>

        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {networks}
            </ul>

            <ul className="copyright">
              <li>&copy; Copyright 2020 João Maduro</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
            </ul>

          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  data: PropTypes.any,
};

export default Footer;
