import React from "react";
import Alert from "react-s-alert";

export default class ShortText extends React.Component {

  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.fieldDetails.value || ''
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.renderInputField = this.renderInputField.bind(this);
  }

  handleOnChange(fieldDetails, e) {
    if (e.target.value && e.target.value.length > parseInt(fieldDetails.maxChar)) {
      Alert.error(`The field should have maximum ${fieldDetails.maxChar} Characters.`);
      return;
    }
    this.setState({ value: e.target.value });
  }

  handleOnBlur(fieldDetails, e) {
    if (e.target.value && e.target.value.length < parseInt(fieldDetails.minChar)) {
      Alert.error(`The field should have minimum ${fieldDetails.minChar} Characters.`);
      // this.setState({ value: '' });
    }
  }

  renderInputField(fieldDetails) {
    if (fieldDetails.type === 'shortText') {
      return (
        <input type="text"
               className="form-control"
               onChange={this.handleOnChange.bind(this, fieldDetails)}
               onBlur={this.handleOnBlur.bind(this, fieldDetails)}
               value={this.state.value}
               required={fieldDetails.isRequired}
               disabled={fieldDetails.isDisabled}
               placeholder={fieldDetails.placeHolder}/>
      );
    } else if (fieldDetails.type === 'scrollingText') {
      return (
        <textarea className="form-control"
                  onChange={this.handleOnChange.bind(this, fieldDetails)}
                  onBlur={this.handleOnBlur.bind(this, fieldDetails)}
                  value={this.state.value}
                  required={fieldDetails.isRequired}
                  disabled={fieldDetails.isDisabled}
                  placeholder={fieldDetails.placeHolder}/>
      )
    }
  }

  render() {
    const { fieldDetails } = this.props;
    return (
      <div className="form-group">
        <label>{fieldDetails.label}</label>
        {this.renderInputField(fieldDetails)}
      </div>
    );
  }
};