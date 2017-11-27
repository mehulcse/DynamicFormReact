import React from "react";

export default class PreviewForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="container">
        <div className="col-lg-12 col-sm-12 col-md-12">
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
        </div>
        <div className="col-lg-12 col-sm-12 col-md-12">
        </div>
      </section>
    );
  }
};