// import React from 'react';
// import accounting from 'accounting';
// import PropTypes from 'prop-types';
//
// export default class InputBox extends React.Component {
//
//   static propTypes = {
//     customClass: PropTypes.string,
//     value: PropTypes.oneOfType([
//       PropTypes.string,
//       PropTypes.number
//     ]),
//     type: PropTypes.oneOf(['Currency', 'Number', 'Text', 'Percentage', 'AlphaNumeric', 'Currency-Negative', 'Currency-Positive']),
//     onChange: PropTypes.func,
//     isDisabled: PropTypes.bool,
//     onBlur: PropTypes.func,
//     onKeyUp: PropTypes.func,
//     placeholder: PropTypes.string,
//     style: PropTypes.object,
//     isFocused: PropTypes.bool,
//     hasDefaultValue: PropTypes.bool,
//     id: PropTypes.string
//   };
//
//   constructor(props) {
//     super(props);
//     let value;
//     if ((this.props.type !== 'Text') && (this.props.type !== 'Number')) {
//       value = (this.props.value && parseFloat(this.props.value).toFixed(2));
//     } else {
//       value = this.props.value;
//     }
//     this.state = {
//       value: value || ''
//     };
//     this.focusInputBox = this.focusInputBox.bind(this);
//     this.handleOnBlur = this.handleOnBlur.bind(this);
//     this.handleOnChange = this.handleOnChange.bind(this);
//     this.updateValue = this.updateValue.bind(this);
//     this.handleOnFocus = this.handleOnFocus.bind(this);
//     this.isNumericField = this.isNumericField.bind(this);
//     this.renderCurrencySymbol = this.renderCurrencySymbol.bind(this);
//     this.renderPercentageSymbol = this.renderPercentageSymbol.bind(this);
//   }
//
//   componentWillReceiveProps(nextProps) {
//     if (this.props.value !== nextProps.value) {
//       this.setState({ value: nextProps.value });
//     }
//     if (nextProps.isFocused) {
//       this.focusInputBox();
//     }
//   }
//
//   componentDidMount() {
//     if (this.props.isFocused) {
//       this.focusInputBox();
//     }
//   }
//
//   focusInputBox() {
//     const inputBox = this.refs.inputBox;
//     inputBox.focus();
//   }
//
//   handleOnBlur(e) {
//     const nonNumericRegex = /[^0-9.]+/g;
//     let value = e.target.value;
//     if (value) {
//       switch (this.props.type) {
//       case 'Currency':
//       case 'Currency-Negative':
//       case 'Currency-Positive':
//       case 'Percentage':
//         value = parseFloat(value.replace(nonNumericRegex, "").replace(/^(-.*?)-/g, ""));
//         value = accounting.formatNumber(value, 2, '');
//         break;
//       case 'Number':
//         value = parseFloat(value.replace(nonNumericRegex, "").replace(/^(-.*?)-/g, ""));
//         value = accounting.formatNumber(value, '', '');
//         break;
//       }
//     }
//     if (this.isNumericField() && this.props.hasDefaultValue) {
//       if(value === "") {
//         value = 0;
//       }
//       this.setState({ value });
//     }
//     if (this.props.onBlur) {
//       this.props.onBlur(value);
//     }
//   }
//
//   handleOnChange(e) {
//     const nonNumericRegex = /[^0-9.]+/g;
//     const alphaNumericRegex = /[^0-9a-zA-Z]+/g;
//     let value = e.target.value;
//     if (value) {
//       switch (this.props.type) {
//       case 'Currency':
//       case 'Currency-Negative':
//       case 'Currency-Positive':
//       case 'Number':
//         value = value.replace(nonNumericRegex, "").replace(/^(-.*?)-/g, "");
//         value === '' ? value = 0 : value;
//         this.updateValue(value);
//         break;
//       case 'Percentage':
//         value = value.replace(nonNumericRegex, "").replace(/^(-.*?)-/g, "");
//         if (!isNaN(value) && value >= 0 && value <= 100) {
//           this.updateValue(value);
//         }
//         break;
//       case 'Text':
//         this.updateValue(value);
//         break;
//       case 'AlphaNumeric':
//         value = value.replace(alphaNumericRegex, "").replace(/^(-.*?)-/g, "");
//         this.updateValue(value);
//         break;
//       }
//     } else {
//       this.updateValue(value);
//     }
//   }
//
//   updateValue(value) {
//     this.setState({ value }, function () {
//       this.props.onChange(value);
//     });
//   }
//
//   handleOnFocus(e) {
//     if (this.isNumericField() && this.props.hasDefaultValue && parseFloat(e.target.value) === 0) {
//       this.setState({
//         value: ''
//       });
//     }
//   }
//
//   isNumericField() {
//     if (this.props.type === 'Currency' || this.props.type === 'Currency-Negative' ||
//       this.props.type === 'Currency-Positive' || this.props.type === 'Number' ||
//       this.props.type === 'Percentage') {
//       return true;
//     } else {
//       return false;
//     }
//   }
//
//   renderCurrencySymbol() {
//     if (this.props.type && this.props.type === 'Currency') {
//       return (
//         <span className="input-group-addon">$</span>
//       );
//     } else if (this.props.type && this.props.type === 'Currency-Negative') {
//       return (
//         <span className="input-group-addon">$&nbsp;-</span>
//       );
//     } else if (this.props.type && this.props.type === 'Currency-Positive') {
//       return (
//         <span className="input-group-addon">$&nbsp;+</span>
//       );
//     }
//   }
//
//   renderPercentageSymbol() {
//     if (this.props.type && this.props.type === 'Percentage') {
//       return (
//         <span className="input-group-addon">%</span>
//       );
//     }
//   }
//
//   render() {
//     /** This style has been added to fix overflow issue of input box in firefox */
//     const inputOverflowStyle = { overflow: 'hidden' };
//     return (
//       <span className={`input-group input-group-sm ${this.props.customClass}`} style={ this.props.style }>
//         { this.renderCurrencySymbol() }
//         <input type="text"
//                className="form-control form-control-sm"
//                id={ this.props.id }
//                placeholder={ this.props.placeholder }
//                value={ this.state.value }
//                onBlur={ this.handleOnBlur }
//                onChange={ this.handleOnChange }
//                onKeyUp={ this.props.onKeyUp }
//                onFocus={ this.handleOnFocus }
//                style={ inputOverflowStyle }
//                ref="inputBox"
//                disabled={this.props.isDisabled}/>
//         { this.renderPercentageSymbol() }
//       </span>
//     );
//   }
// };