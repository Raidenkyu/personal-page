import React, { Component } from "react";
import ReactGA from "react-ga";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Blog from "./components/Blog";
import Portfolio from "./components/Portfolio";

import resumeData from "./assets/data/resumeData.json";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
      width: window.innerWidth,
      height: window.innerHeight,
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    this.setState({ resumeData: resumeData });
  }

  resizeHandler() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  componentDidMount() {

    this.getResumeData();
    window.addEventListener("resize", this.resizeHandler.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeHandler.bind(this));
  }

  render() {
    console.log(this.state.width);
    return (
      <div className="App">
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
