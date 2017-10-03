import React from 'react';
import { shallow } from 'enzyme';

import CreateRuleForm from './CreateRuleForm';
import RulesList from './RulesList';
import FlowExecutor from './FlowExecutor';
import App from './App';

describe('App', () => {
  let app, addRuleToFlow, removeRuleFromFlow, flowEngine;

  beforeEach(() => {
    flowEngine = () => {};
    app = shallow(<App flowEngine={flowEngine} />);
    addRuleToFlow = app.instance().addRuleToFlow;
    removeRuleFromFlow = app.instance().removeRuleFromFlow;
  });

  describe('addRuleToFlow', () => {
    it('adds a new rule to its flow state', () => {
      addRuleToFlow('I am a rule');
      expect(app).toHaveState('flow', ['I am a rule']);
    });
  });

  describe('removeRuleFromFlow', () => {
    it('well... removes a rule from the flow state', () => {
      addRuleToFlow({ id: 1 });
      addRuleToFlow({ id: 2 });
      removeRuleFromFlow(2);
      expect(app).toHaveState('flow', [{ id: 1 }]);
    });
  });

  it('contains a CreateRuleForm component', () => {
    expect(app).toContainReact(<CreateRuleForm onCreateRule={addRuleToFlow} />);
  });

  it('contains a RulesList component', () => {
    expect(app).toContainReact(<RulesList rules={[]} onRemoveClick={removeRuleFromFlow} />);
  });

  it('contains a FlowExecutor component', () => {
    expect(app).toContainReact(<FlowExecutor engine={flowEngine([])} />);
  });
});
