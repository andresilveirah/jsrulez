import React, { Component } from 'react';

import CreateRuleForm from './CreateRuleForm';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { flow: [] };
    this.addRuleToFlow = this.addRuleToFlow.bind(this);
  }

  addRuleToFlow(rule) {
    this.setState({
      flow: [...this.state.flow, rule]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>JS RULEZ</h1>
        <CreateRuleForm onCreateRule={this.addRuleToFlow} />
        <div>
          <h2>2. Rules list</h2>
          <ul>
            <li>
              <div>
                <span>Rule 1</span>
                <a href="x">&times;</a>
              </div>
            </li>
            <li>
              <div>
                <span>Rule 2</span>
                <a href="x">&times;</a>
              </div>
            </li>
            <li>
              <div>
                <span>Rule 3</span>
                <a href="x">&times;</a>
              </div>
            </li>
          </ul>
        </div>
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
