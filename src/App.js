import React, { Component } from 'react';

import CreateRuleForm from './CreateRuleForm';
import RulesList from './RulesList';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { flow: [] };
    this.addRuleToFlow = this.addRuleToFlow.bind(this);
    this.removeRuleFromFlow = this.removeRuleFromFlow.bind(this);
  }

  addRuleToFlow(rule) {
    this.setState({
      flow: [...this.state.flow, rule]
    });
  }

  removeRuleFromFlow(ruleId) {
    this.setState({
      flow: this.state.flow.filter(({ id }) => id !== ruleId)
    });
  }

  render() {
    return (
      <div className="App">
        <h1>JS RULEZ</h1>
        <CreateRuleForm onCreateRule={this.addRuleToFlow} />
        <RulesList rules={this.state.flow} onRemoveClick={this.removeRuleFromFlow} />
        <div>
          <h2>3. Execute flow</h2>
          <form action="#">
            <div className="field">
              <label htmlFor="object">
                <strong>Object</strong>
              </label>
              <textarea name="object" placeholder="// a nice an clean JSON object here" value="" />
            </div>
            <input type="submit" name="execute" value="Execute flow" />
          </form>
          <div>
            <div>
              Results
            </div>
            <div>
              <ul>
                <li>
                  rule 1 passed
                </li>
                <li>
                  rule 4 failed
                </li>
                <li>
                  rule 5 passed. End
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
