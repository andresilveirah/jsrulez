import React, { PureComponent } from 'react';

import ResultsList from './ResultsList';
import ExecuteFlowForm from './ExecuteFlowForm';

class FlowExecutor extends PureComponent {
  constructor() {
    super();
    this.state = { results: [] };
    this.onExecuteFlow = this.onExecuteFlow.bind(this);
  }

  onExecuteFlow(testingObject) {
    let results = [];
    for(let { currentRule, passed } of this.props.engine(testingObject)) {
      results = [ ...results, { rule: currentRule, passed } ];
    }
    this.setState({ results });
  }

  render() {
    return (
      <div>
        <h2>3. Execute flow</h2>
        <div className='section'>
          <ExecuteFlowForm onExecuteFlow={this.onExecuteFlow} />
          <ResultsList results={this.state.results} />
        </div>
      </div>
    );
  }
}

export default FlowExecutor;
