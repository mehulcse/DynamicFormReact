import React from "react";

export default class ShortText extends React.Component {

  constructor(props) {
    super(props);
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
        <div className="form-group">
          <label>Default Value</label>
          <input type="text"
                 className="form-control"
                 placeholder="Default Value"
                 value={this.props.fieldDetails.value}
                 onChange={this.props.handleChange.bind(null, 'value')}/>
        </div>
        <div className="form-group">
          <label className="mr-10" htmlFor="isDisabled">
            <input type="checkbox"
                   id="isDisabled"
                   checked={this.props.fieldDetails.isDisabled}
                   onChange={this.props.handleToggle.bind(null, 'isDisabled')}/> Disabled
          </label>
        </div>
        <div className="form-group">
          <label className="mr-10" htmlFor="isRequired">
            <input type="checkbox"
                   id="isRequired"
                   checked={this.props.fieldDetails.isRequired}
                   onChange={this.props.handleToggle.bind(null, 'isRequired')}/> Required
          </label>
        </div>
      </div>
    );
  }
};