import React from "react";
import If from "../../Reusable/If/If.jsx";
import Text from "./Text.jsx";
import Numeric from "./Numeric.jsx";
import Currency from "./Currency.jsx";
import CheckBox from "./CheckBox.jsx";

export default class NewField extends React.Component {

  constructor(props) {
    super(props);
    this.onTypeChange = this.onTypeChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateState = this.updateState.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  onTypeChange(e) {
    let fieldDetails;
    switch (e.target.value) {
    case 'shortText':
    case 'scrollingText':
      fieldDetails = {
        label: '',
        placeHolder: '',
        minChar: '',
        maxChar: '',
        value: '',
        isDisabled: false,
        isRequired: false
      };
      break;
    case 'numeric':
      fieldDetails = {
        label: '',
        placeHolder: '',
        minValue: '',
        maxValue: '',
        value: '',
        isDisabled: false,
        isRequired: false,
        isPositive: false,
        isInteger: false
      };
      break;
    case 'currency':
      fieldDetails = {
        label: '',
        placeHolder: '',
        minValue: '',
        maxValue: '',
        currencyType: '',
        value: '',
        isDisabled: false,
        isRequired: false
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
    // switch (attribute) {
    // case 'minValue':
    //   if(fieldDetails.maxValue < e.target.value) {
    //     Alert.error('Minimum value should be less than Maximum value.');
    //   }
    //   break;
    // case 'maxValue':
    //   if(fieldDetails.minValue > e.target.value) {
    //     Alert.error('Maximum value should be greater than Minimum value.');
    //   }
    //   break;
    // case 'minChar':
    //   break;
    // case 'maxChar':
    //   break;
    // default:
    //
    // }
    fieldDetails[attribute] = e.target.value;
    this.props.updateFields(fieldDetails);
  }

  handleToggle(attribute) {
    let fieldDetails = this.props.fieldDetails;
    fieldDetails[attribute] = !fieldDetails[attribute];
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
          <If
            condition={this.props.fieldDetails.type === 'shortText' || this.props.fieldDetails.type === 'scrollingText'}>
            <Text fieldDetails={this.props.fieldDetails}
                       handleToggle={this.handleToggle}
                       handleChange={this.handleChange}/>
          </If>
          <If condition={this.props.fieldDetails.type === 'numeric'}>
            <Numeric fieldDetails={this.props.fieldDetails}
                     handleToggle={this.handleToggle}
                     handleChange={this.handleChange}/>
          </If>
          <If condition={this.props.fieldDetails.type === 'currency'}>
            <Currency fieldDetails={this.props.fieldDetails}
                      handleToggle={this.handleToggle}
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
              <option value="numeric">Numeric</option>
              <option value="currency">Currency</option>
              <option value="shortText">Short Text</option>
              <option value="scrollingText">Scrolling Text</option>
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