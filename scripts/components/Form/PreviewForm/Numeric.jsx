import React from "react";
import Alert from "react-s-alert";

export default class Numeric extends React.Component {

  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.fieldDetails.value || ''
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  handleOnChange(fieldDetails, e) {
    if (e.target.value > parseInt(fieldDetails.maxValue)) {
      Alert.error(`The field value should be less than or equals to ${fieldDetails.maxValue}.`);
      return;
    }
    this.setState({ value: e.target.value });
  }

  handleOnBlur(fieldDetails, e) {
    if (e.target.value < parseInt(fieldDetails.minValue)) {
      Alert.error(`The field value should be greater than or equals to ${fieldDetails.minValue}.`);
      // this.setState({ value: '' });
    }
  }

  render() {
    const { fieldDetails } = this.props;
    return (
      <div className="form-group">
        <label>{fieldDetails.label}</label>
        <input type="number"
               className="form-control"
               onChange={this.handleOnChange.bind(this, fieldDetails)}
               onBlur={this.handleOnBlur.bind(this, fieldDetails)}
               value={this.state.value}
               required={fieldDetails.isRequired}
               disabled={fieldDetails.isDisabled}
               placeholder={fieldDetails.placeHolder}/>
      </div>
    );
  }
};