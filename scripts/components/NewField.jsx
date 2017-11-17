import React from "react";
import If from "./Reusable/If/If.jsx";
import TextField from "./TextField.jsx";
import Paragraph from "./Paragraph.jsx";
import Numeric from "./Numeric.jsx";
import Currency from "./Currency.jsx";
import CheckBox from "./CheckBox.jsx";

export default class NewField extends React.Component {

  constructor(props) {
    super(props);
    this.onTypeChange = this.onTypeChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  onTypeChange(e) {
    let fieldDetails;
    switch (e.target.value) {
    case 'text':
    case 'paragraph':
      fieldDetails = {
        label: '',
        placeHolder: '',
        minChar: '',
        maxChar: ''
      };
      break;
    case 'numeric':
      fieldDetails = {
        label: '',
        placeHolder: '',
        minValue: '',
        maxValue: ''
      };
      break;
    case 'currency':
      fieldDetails = {
        label: '',
        placeHolder: '',
        minValue: '',
        maxValue: '',
        currencyType: ''
      };
      break;
    case 'checkBox':
      fieldDetails = {
        label: '',
        optionLabels: ['']
      };
      break;
    }
    this.props.updateFields(Object.assign({ type: e.target.value }, fieldDetails));
  }

  handleChange(attribute, e) {
    let fieldDetails = this.props.fieldDetails;
    fieldDetails[attribute] = e.target.value;
    this.props.updateFields(fieldDetails);
  }

  updateState(attribute, value) {
    let fieldDetails = this.props.fieldDetails;
    fieldDetails[attribute] = value;
    this.props.updateFields(fieldDetails);
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <If condition={this.props.fieldDetails.type === 'text'}>
            <TextField fieldDetails={this.props.fieldDetails}
                       handleChange={this.handleChange}/>
          </If>
          <If condition={this.props.fieldDetails.type === 'paragraph'}>
            <Paragraph fieldDetails={this.props.fieldDetails}
                       handleChange={this.handleChange}/>
          </If>
          <If condition={this.props.fieldDetails.type === 'numeric'}>
            <Numeric fieldDetails={this.props.fieldDetails}
                     handleChange={this.handleChange}/>
          </If>
          <If condition={this.props.fieldDetails.type === 'currency'}>
            <Currency fieldDetails={this.props.fieldDetails}
                      handleChange={this.handleChange}/>
          </If>
          <If condition={this.props.fieldDetails.type === 'checkBox'}>
            <CheckBox fieldDetails={this.props.fieldDetails}
                      updateState={this.updateState}
                      handleChange={this.handleChange}/>
          </If>
          <If condition={this.props.fieldDetails.type === ''}>
            <div className="form-group col-lg-7 col-md-7">
              <p className="text-center">Select Type of the Field</p>
            </div>
          </If>
          <div className="form-group col-lg-4 col-md-4">
            <label>Type</label>
            <select className="form-control"
                    onChange={this.onTypeChange}
                    value={this.props.fieldDetails.type}>
              <option value="">--Select Type--</option>
              <option value="text">Short Answer</option>
              <option value="paragraph">Paragraph</option>
              <option value="numeric">Numeric</option>
              <option value="currency">Currency</option>
              <option value="checkBox">Check box</option>
            </select>
          </div>
          <div>
            <i className="fa fa-times remove-field"
               onClick={this.props.removeField}/>
          </div>
        </div>
      </div>
    );
  }
};