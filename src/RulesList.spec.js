import React from 'react';
import { shallow } from 'enzyme';

import RulesList from './RulesList';

describe('RulesList', () => {
  it('renders a li element for each rule in its rules prop', () => {
    const rules = [{ title: 'a', id: '1' }, { title: 'b', id: '2'}];
    const rulesList = shallow(<RulesList rules={rules} />);
    expect(rulesList).toContainReact(<li>a</li>);
    expect(rulesList).toContainReact(<li>b</li>);
  });
});
