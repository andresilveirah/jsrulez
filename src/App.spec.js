import React from 'react';
import { shallow } from 'enzyme';

import CreateRuleForm from './CreateRuleForm';
import RulesList from './RulesList';
import App from './App';

describe('App', () => {
  let app, addRuleToFlow;

  beforeEach(() => {
    app = shallow(<App />);
    addRuleToFlow = app.instance().addRuleToFlow;
  });

  describe('addRuleToFlow', () => {
    it('adds a new rule to its flow state', () => {
      addRuleToFlow('I am a rule');
      expect(app).toHaveState('flow', ['I am a rule']);
    });
  });

  it('contains a CreateRuleForm component', () => {
    expect(app).toContainReact(<CreateRuleForm onCreateRule={addRuleToFlow} />);
  });

  it('contains a RulesList component', () => {
    expect(app).toContainReact(<RulesList rules={[]} />);
  });
});
