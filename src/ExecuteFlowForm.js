import React, { PureComponent } from 'react';

import Field from './Field';

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
            name="testingObject"
            placeholder="// a cool JSON string here please"
            defaultValue=""
            ref={(textarea) => this.objectText = textarea}
          />
        </Field>
        <input type="submit" name="execute" value="Execute flow" />
      </form>
    );
  }
}

export default ExecuteFlowForm;
