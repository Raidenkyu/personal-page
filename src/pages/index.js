import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import "../styles/home/index.css";
import "../styles/home/default.scss";
import "../styles/home/layout.scss";

import LoadingSpinnerStyle from "../styles/home/LoadingSpinner.module.css";

import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import About from "../components/home/About";
import Resume from "../components/home/Resume";
import Blog from "../components/home/Blog";
import Portfolio from "../components/home/Portfolio";

import loadingSpinner from "../assets/images/loader.gif";

import resumeData from "../assets/data/resumeData.json";
import favicon from "../assets/images/favicon.ico";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
    };
  }

  getResumeData() {
    this.setState({ resumeData: resumeData });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    if (Object.entries(this.state.resumeData).length === 0) return (
      <div className={LoadingSpinnerStyle.loadingSpinnerContainer}>
        <img src={loadingSpinner} alt="loading" />
      </div>
    );

    const lattestPost = this.props.data.allMarkdownRemark.edges[0].node;

    return (
      <div className="App">
        <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href={favicon} />
          <title>João Maduro Development</title>
          <html className="index" lang="en" />
        </Helmet>

        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Blog data={lattestPost} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.any,
};

export default App;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1
      ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
