import React, { PureComponent } from 'react';

import Field from './Field';

import './ExecuteFlowForm.css';

class ExecuteFlowForm extends PureComponent {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onExecuteFlow(
      JSON.parse(this.objectText.value)
    );
  }

  render() {
    return (
      <form action="#" onSubmit={this.onSubmit}>
        <Field name="testingObject" label="Object">
          <textarea
            className='col2 Field-input'
            rows='5'
            name="testingObject"
            placeholder="// a cool JSON string here please"
            defaultValue=""
            ref={(textarea) => this.objectText = textarea}
          />
        </Field>
        <Field name="execute" label=" ">
          <div className="ExecuteFlowForm-submit-container">
            <input className='ExecuteFlowForm-submit col2' type="submit" value="Execute flow" />
          </div>
        </Field>
      </form>
    );
  }
}

export default ExecuteFlowForm;
