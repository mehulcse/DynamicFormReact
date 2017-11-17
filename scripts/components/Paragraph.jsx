import React from "react";

export default class Paragraph extends React.Component {

  render() {
    return (
      <div className="form-group col-lg-7 col-md-7">
        <div className="form-group">
          <label>Label</label>
          <input type="text"
                 className="form-control"
                 placeholder="Label"
                 value={this.props.fieldDetails.label}
                 onChange={this.props.handleChange.bind(null, 'label')}/>
        </div>
        <div className="form-group">
          <label>Placeholder</label>
          <input type="text"
                 className="form-control"
                 placeholder="Placeholder"
                 value={this.props.fieldDetails.placeHolder}
                 onChange={this.props.handleChange.bind(null, 'placeHolder')}/>
        </div>
        <div className="form-group">
          <label>Minimum Characters</label>
          <input type="number"
                 className="form-control"
                 placeholder="Minimum Characters"
                 value={this.props.fieldDetails.minChar}
                 onChange={this.props.handleChange.bind(null, 'minChar')}/>
        </div>
        <div className="form-group">
          <label>Maximum Characters</label>
          <input type="number"
                 className="form-control"
                 placeholder="Maximum Characters"
                 value={this.props.fieldDetails.maxChar}
                 onChange={this.props.handleChange.bind(null, 'maxChar')}/>
        </div>
      </div>
    );
  }
};