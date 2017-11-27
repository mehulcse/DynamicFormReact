import React from "react";
import NewField from "./NewField.jsx";

export default class DynamicForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      fields: [],
      status: 'in_progress'
    };
    this.renderNewField = this.renderNewField.bind(this);
    this.addNewField = this.addNewField.bind(this);
    this.removeField = this.removeField.bind(this);
  }

  addNewField(e) {
    e.preventDefault();
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    let fields = this.state.fields.slice(0);
    fields.push({
      type: '',
      label: ''
    });
    this.setState({ fields });
  }

  removeField(index) {
    let fields = this.state.fields.slice(0);
    fields.splice(index, 1);
    this.setState({ fields });
  }

  updateFields(index, updatedObject) {
    let fields = this.state.fields.slice(0);
    fields.splice(index, 1, updatedObject);
    this.setState({ fields });
  }

  renderNewField() {
    if (this.state.fields && this.state.fields.length > 0) {
      return this.state.fields.map((element, index) => {
        return (
          <NewField fieldDetails={element}
                    key={index}
                    removeField={this.removeField.bind(this, index)}
                    updateFields={this.updateFields.bind(this, index)}
                    index={index}/>
        )
      });
    }
  }

  render() {
    return (
      <section className="container">
        <form>
          <div>
            <div className="form-group">
              <label>Title</label>
              <input type="text"
                     className="form-control"
                     placeholder="Title"
                     value={this.state.title}
                     onChange={(e)=> {
                       this.setState({ title: e.target.value });
                     }}/>
            </div>
            <div className="form-group">
              <label>Description</label>
              <input type="text"
                     className="form-control"
                     placeholder="Description"
                     value={this.state.description}
                     onChange={(e)=> {
                       this.setState({ description: e.target.value });
                     }}/>
            </div>
          </div>
          <div>
            {this.renderNewField()}
          </div>
          <div className="my-10 text-center">
            <button className="btn btn-primary"
                    onClick={this.addNewField}>
              <i className="fa fa-plus-square"/> Add New Field
            </button>
          </div>
          <div className="text-right">
            <button className="btn btn-default mr-10"
                    onClick={(e)=> {
                      e.preventDefault();
                      if (e.stopPropagation) {
                        e.stopPropagation();
                      }
                    }}>
              Preview
            </button>
            <button className="btn btn-primary"
                    onClick={(e)=> {
                      e.preventDefault();
                      if (e.stopPropagation) {
                        e.stopPropagation();
                      }
                      console.log(this.state)
                    }}>Submit
            </button>
          </div>
        </form>
      </section>
    );
  }
};