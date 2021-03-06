import React from "react";

export default class Numeric extends React.Component {

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
        <div className="form-group">
          <label>Default Value</label>
          <input type="number"
                 className="form-control"
                 placeholder="Default Value"
                 value={this.props.fieldDetails.value}
                 onChange={this.props.handleChange.bind(null, 'value')}/>
        </div>
        <div className="form-group">
          <label className="mr-10">
            <input type="checkbox"
                   checked={this.props.fieldDetails.isDisabled}
                   onChange={this.props.handleToggle.bind(null, 'isDisabled')}/> Disabled
          </label>
        </div>
        <div className="form-group">
          <label className="mr-10">
            <input type="checkbox"
                   checked={this.props.fieldDetails.isRequired}
                   onChange={this.props.handleToggle.bind(null, 'isRequired')}/> Required
          </label>
        </div>
        <div className="form-group">
          <label className="mr-10">
            <input type="checkbox"
                   checked={this.props.fieldDetails.isPositive}
                   onChange={this.props.handleToggle.bind(null, 'isPositive')}/> Allow Only Positive Numbers
          </label>
        </div>
        <div className="form-group">
          <label className="mr-10">
            <input type="checkbox"
                   checked={this.props.fieldDetails.isInteger}
                   onChange={this.props.handleToggle.bind(null, 'isInteger')}/> Allow Only Whole Numbers
          </label>
        </div>
      </div>
    );
  }
};