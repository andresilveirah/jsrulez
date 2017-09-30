import React from 'react';

const RulesList = ({ rules, onRemoveClick }) => (
  <div>
    <h2>2. Rules list</h2>
    <ul>
      { rules.map(({id, title}) =>
        <li key={`rule-${id}`}>
          {title}<button id={`remove-rule-${id}`} onClick={() => onRemoveClick(id)}>&times;</button>
        </li>)
      }
    </ul>
  </div>
);

export default RulesList;
