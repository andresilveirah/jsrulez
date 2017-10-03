import React, { Component } from 'react';

import CreateRuleForm from './CreateRuleForm';
import RulesList from './RulesList';
import FlowExecutor from './FlowExecutor';

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
        <FlowExecutor engine={this.props.flowEngine(this.state.flow)} />
      </div>
    );
  }
}

export default App;
