import React from 'react';

const RulesList = ({ rules }) => (
  <div>
    <h2>2. Rules list</h2>
    <ul>
      { rules.map(({id, title}) => <li key={`rule-${id}`}>{title}</li>) }
    </ul>
  </div>
);

export default RulesList;
