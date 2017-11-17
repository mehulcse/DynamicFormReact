import React from 'react';
import PropTypes from 'prop-types';

export default class If extends React.Component {

  static propTypes = {
    condition: PropTypes.any,
    children: PropTypes.element.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.condition) {
      return this.props.children;
    }
    return null;
  }
};