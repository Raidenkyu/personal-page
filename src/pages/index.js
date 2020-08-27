import React, { Component } from "react";
import { Helmet } from "react-helmet";

import "../styles/App.css";
import LoadingSpinnerStyle from "../styles/LoadingSpinner.module.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Resume from "../components/Resume";
import Blog from "../components/Blog";
import Portfolio from "../components/Portfolio";

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

    return (
      <div className="App">
        <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href={favicon} />
          <title>João Maduro Development</title>
        </Helmet>

        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Blog data={this.state.resumeData.blog} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
