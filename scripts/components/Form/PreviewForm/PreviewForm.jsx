import React from "react";
import ShortText from "./ShortText.jsx";
import Numeric from "./Numeric.jsx";

export default class PreviewForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.renderFields = this.renderFields.bind(this);
  }

  renderFields() {
    if (this.props.fields && this.props.fields.length > 0) {
      return this.props.fields.map((element, index)=> {
        switch (element.type) {
        case 'shortText':
        case 'scrollingText':
          return <ShortText fieldDetails={element}
                            key={index}/>;
          break;
        case 'numeric':
          return <Numeric fieldDetails={element}
                          key={index}/>;
          break;
        case 'currency':
          break;
        case 'checkBox':
          break;
        default:
          return <div></div>
        }
      });
    }
  }

  render() {
    return (
      <section className="container">
        <div className="col-lg-12 col-sm-12 col-md-12">
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
        </div>
        <div className="col-lg-12 col-sm-12 col-md-12">
          {this.renderFields()}
        </div>
      </section>
    );
  }
};