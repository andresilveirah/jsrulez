import React from 'react';

const ResultsList = ({ results }) => (
  <div>
    <div>
      Results
    </div>
    <div>
      <ul>
        { results.map(({rule, passed}) =>
          <li key={`result-rule-${rule.id}`}>
            {rule.title} {passed ? 'passed' : 'failed' }
          </li>
        )}
      </ul>
      { results.length > 0 && "END." }
    </div>
  </div>
);

export default ResultsList;
