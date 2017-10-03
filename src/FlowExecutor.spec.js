import React from 'react';
import { shallow } from 'enzyme';

import FlowExecutor from './FlowExecutor';
import ResultsList from './ResultsList';
import ExecuteFlowForm from './ExecuteFlowForm';

function* engineMock(testingObject) {
  yield({ currentRule: `first-rule-${testingObject}`, passed: true });
  yield({ currentRule: `second-rule-${testingObject}`, passed: false });
}

describe('FlowExecutor', () => {
  let flowExecutor, onExecuteFlow;

  beforeEach(() => {
    flowExecutor = shallow(<FlowExecutor engine={engineMock} />);
    onExecuteFlow = flowExecutor.instance().onExecuteFlow;
  });

  it('contains a ExecuteFlowForm component', () => {
    expect(flowExecutor).toContainReact(<ExecuteFlowForm onExecuteFlow={onExecuteFlow} />);
  });

  it('contains a ResultsList component', () => {
    expect(flowExecutor).toContainReact(<ResultsList results={[]} />);
  });

  describe('onExecuteFlow', () => {
    beforeEach(() => { onExecuteFlow('testing'); });

    it('calls the engine passing the testingObject and stores the results in its results state', () => {
      expect(flowExecutor).toHaveState('results', [
        { rule: 'first-rule-testing', passed: true },
        { rule: 'second-rule-testing', passed: false }
      ])
    });
  });
});
