import React from 'react';
import { shallow } from 'enzyme';

import CreateRuleForm from './CreateRuleForm';
import Field from './Field';

describe('CreateRuleForm', () => {
  let createRuleForm, onFieldChange;

  beforeEach(() => {
    createRuleForm = shallow(<CreateRuleForm />);
    onFieldChange = createRuleForm.instance().onFieldChange;
  });

  describe('contain Fields for', () => {
    ['title', 'id', 'idIfTrue', 'idIfFalse'].forEach(attributeName =>
      it(attributeName, () => {
        expect(createRuleForm.containsMatchingElement(
          <Field name={attributeName} onChange={onFieldChange} />
        )).toBeTruthy();
      })
    );

    it('body', () => {
      expect(createRuleForm.containsMatchingElement(
        <Field name='body'>
          <textarea name="body" defaultValue="" onChange={onFieldChange} />
        </Field>
      )).toBeTruthy();
    })
  });

  describe('onFieldChange', () => {
    it('calls setState with event target name and value', () => {
      onFieldChange({ target: { name: 'foo', value: 'bar' } });
      expect(createRuleForm).toHaveState('foo', 'bar');
    });
  });

  describe('onCreateRule', () => {
    let event, onCreateRule, onCreateRuleMock, formMock;

    beforeEach(() => {
      event = { preventDefault: jest.fn() };
      formMock = { reset: jest.fn() };
      onCreateRuleMock = jest.fn();
      createRuleForm = shallow(<CreateRuleForm onCreateRule={onCreateRuleMock} />);
      createRuleForm.instance().form = formMock;
      onCreateRule = createRuleForm.instance().onCreateRule;
      onCreateRule(event);
    });

    it('resets the form', () => {
      expect(formMock.reset).toHaveBeenCalled();
    });

    it('calls the onCreateRule prop passing a new rule to it', () => {
      expect(onCreateRuleMock).toHaveBeenCalledWith({
        title: '',
        id: '',
        idIfTrue: '',
        idIfFalse: '',
        body: ''
      });
    });
  });
});
