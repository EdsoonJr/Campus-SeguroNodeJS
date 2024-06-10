import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Header data={this.props.resumeData.main} />
        <Resume data={this.props.resumeData.resume} />
        <About data={this.props.resumeData.main} />
        <Portfolio data={this.props.resumeData.portfolio} />
        <Contact data={this.props.resumeData.main} />
        <Footer data={this.props.resumeData.main} />
      </div>
    );
  }
}

export default MainPage;
