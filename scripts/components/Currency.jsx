import React from "react";

export default class Currency extends React.Component {

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
          <label>Type</label>
          <select className="form-control"
                  value={this.props.fieldDetails.currencyType}
                  onChange={this.props.handleChange.bind(null, 'currencyType')}>
            <option value="">--Select Currency Type--</option>
            <option value="GBP">GBP</option>
            <option value="USD">USD</option>
            <option value="INR">INR</option>
          </select>
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
          <label>Min Value</label>
          <input type="number"
                 className="form-control"
                 placeholder="Min Value"
                 value={this.props.fieldDetails.minValue}
                 onChange={this.props.handleChange.bind(null, 'minValue')}/>
        </div>
        <div className="form-group">
          <label>Max Value</label>
          <input type="number"
                 className="form-control"
                 placeholder="Max Value"
                 value={this.props.fieldDetails.maxValue}
                 onChange={this.props.handleChange.bind(null, 'maxValue')}/>
        </div>
      </div>
    );
  }
};