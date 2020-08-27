import React, { Component } from "react";
import "../styles/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Resume from "../components/Resume";
import Blog from "../components/Blog";
import Portfolio from "../components/Portfolio";

import loadingSpinner from "../assets/images/loader.gif";

import resumeData from "../assets/data/resumeData.json";

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
    if (Object.entries(this.state.resumeData).length === 0) return (<img src={loadingSpinner} alt="loading" />);

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
