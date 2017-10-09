import React, { PureComponent } from 'react';

import Field from './Field';

import './CreateRuleForm.css';

class CreateRuleForm extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      id: '',
      title: '',
      body: '',
      idIfTrue: '',
      idIfFalse: ''
    };
    this.onCreateRule = this.onCreateRule.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
  }

  onCreateRule(event) {
    event.preventDefault();
    if(this.props.ruleValidator(this.state)) {
      this.form.reset();
      this.props.onCreateRule(this.state);
    };
  }

  onFieldChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>1. Create flow</h2>
        <div className='section'>
          <form action="#" onSubmit={this.onCreateRule} ref={(form) => { this.form = form; }}>
            <fieldset className='CreateRuleForm-fieldset'>
              <legend>New Rule</legend>

              <Field name="title" placeholder="A nice title" onChange={this.onFieldChange} />
              <Field name="id" placeholder="ex. 1" onChange={this.onFieldChange} />
              <Field name="body">
                <textarea
                  className="Field-input col2"
                  rows="5"
                  name="body"
                  placeholder="// a nice an clean javascript function here"
                  defaultValue=""
                  onChange={this.onFieldChange}
                />
              </Field>
              <Field name="idIfTrue" label="Id if it passes" placeholder="ex. 2" onChange={this.onFieldChange} />
              <Field name="idIfFalse" label="Id if it fails" placeholder="ex. 3" onChange={this.onFieldChange} />
              <Field name="create" label=" ">
                <div className="CreateRuleForm-submit-container">
                  {this.props.ruleErrorMessage}
                  <input className='CreateRuleForm-submit col2' type="submit" name="create" value="Add new rule" />
                </div>
              </Field>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateRuleForm;
