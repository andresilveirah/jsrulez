import React, { PureComponent } from 'react';

import Field from './Field';

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
    this.form.reset();
    this.props.onCreateRule(this.state);
  }

  onFieldChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>1. Create flow</h2>
        <form action="#" onSubmit={this.onCreateRule} ref={(form) => { this.form = form; }}>
          <fieldset>
            <legend>New Rule</legend>

            <Field name="title" placeholder="A nice title" onChange={this.onFieldChange} />
            <Field name="id" placeholder="ex. 1" onChange={this.onFieldChange} />
            <Field name="body" placeholder="ex. 1">
              <textarea name="body" placeholder="// a nice an clean javascript function here" defaultValue="" onChange={this.onFieldChange} />
            </Field>
            <Field name="idIfTrue" label="Id if it passes" placeholder="ex. 2" onChange={this.onFieldChange} />
            <Field name="idIfFalse" label="Id if it fails" placeholder="ex. 3" onChange={this.onFieldChange} />

            <input type="submit" name="create" value="Add new rule" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default CreateRuleForm;
