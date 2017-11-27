import React from "react";

export default class NewField extends React.Component {

  constructor(props) {
    super(props);
    this.renderCheckBoxes = this.renderCheckBoxes.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    this.addCheckbox = this.addCheckbox.bind(this);
    this.removeCheckBox = this.removeCheckBox.bind(this);
  }

  handleCheckBoxChange(index, e) {
    let optionLabels = this.props.fieldDetails.optionLabels.slice(0);
    optionLabels.splice(index, 1, e.target.value);
    this.props.updateState('optionLabels', optionLabels);
  }

  addCheckbox(e) {
    e.preventDefault();
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    let optionLabels = this.props.fieldDetails.optionLabels.slice(0);
    optionLabels.push('');
    this.props.updateState('optionLabels', optionLabels);
  }

  removeCheckBox(index) {
    let optionLabels = this.props.fieldDetails.optionLabels.slice(0);
    optionLabels.splice(index, 1);
    this.props.updateState('optionLabels', optionLabels);
  }

  renderCheckBoxes() {
    if(this.props.fieldDetails && this.props.fieldDetails.optionLabels && this.props.fieldDetails.optionLabels.length > 0) {
      return this.props.fieldDetails.optionLabels.map((element, index) => {
        return (
          <div className="form-group form-inline" key={index}>
            <label className="mr-10">
              <input type="checkbox" disabled="disabled"/>
            </label>
            <input type="text"
                   className="form-control mr-10"
                   placeholder="Option"
                   value={element}
                   onChange={this.handleCheckBoxChange.bind(this, index)}/>
            <i className="fa fa-times remove-option"
               onClick={this.removeCheckBox.bind(this, index)}/>
          </div>
        )
      });
    }
  }

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
        <div>
          {this.renderCheckBoxes()}
        </div>
        <div className="my-10 text-center">
          <button className="btn btn-primary"
                  onClick={this.addCheckbox}>
            <i className="fa fa-plus-square"/> Add Checkbox
          </button>
        </div>
      </div>
    );
  }
};