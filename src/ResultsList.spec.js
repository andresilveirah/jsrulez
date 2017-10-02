import React from 'react';
import { shallow } from 'enzyme';

import ResultsList from './ResultsList';

describe('ResultsList', () => {
  let results, resultsList;

  describe('when the results prop is empty', () => {
    beforeEach(() => {
      resultsList = shallow(<ResultsList results={[]} />);
    });

    it('does not render the word END', () => {
      expect(resultsList.text()).not.toContain('END.');
    });
  });

  describe('when the results prop is not empty', () => {
    beforeEach(() => {
      results = [
        { rule: { title: 'rule 1', id: '1' }, passed: true },
        { rule: { title: 'rule 2', id: '2' }, passed: false }
      ];
      resultsList = shallow(<ResultsList results={results} />);
    });

    it('renders a li element for each rule in its results prop', () => {
      expect(resultsList).toContainReact(<li>rule 1 passed</li>);
      expect(resultsList).toContainReact(<li>rule 2 failed</li>);
      expect(resultsList.text()).toContain('END.');
    });
  });
});
