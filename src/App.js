import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>JS RULEZ</h1>
        <div>
          <h2>1. Create flow</h2>
          <form action="#">
            <fieldset>
              <legend>New Rule</legend>

              <div className="field">
                <label htmlFor="title">
                  <strong>Title</strong>
                </label>
                <input type="text" name="title" placeholder="A title" value="" />
              </div>

              <div className="field">
                <label htmlFor="id">
                  <strong>Id</strong>
                </label>
                <input type="text" name="id" placeholder="Ex. 1" value="" />
              </div>

              <div className="field">
                <label htmlFor="body">
                  <strong>Body</strong>
                </label>
                <textarea name="body" placeholder="// a nice an clean javascript function here" value="" />
              </div>

              <div className="field">
                <label htmlFor="idIfTrue">
                  <strong>Id if rule passes</strong>
                </label>
                <input type="text" name="idIfTrue" placeholder="Ex. 2" value="" />
              </div>

              <div className="field">
                <label htmlFor="idIfFalse">
                  <strong>Id if rule fails</strong>
                </label>
                <input type="text" name="idIfFalse" placeholder="Ex. 3" value="" />
              </div>

              <input type="submit" name="create" value="Add new rule" />
            </fieldset>
          </form>
        </div>
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
