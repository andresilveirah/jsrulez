import React from 'react';
import { shallow } from 'enzyme';

import ExecuteFlowForm from './ExecuteFlowForm';
import Field from './Field';

describe('ExecuteFlowForm', () => {
  let executeFlowForm;

  beforeEach(() => {
    executeFlowForm = shallow(<ExecuteFlowForm />);
  });

  describe('contain Fields for', () => {
    it('testingObject', () => {
      expect(executeFlowForm.containsMatchingElement(
        <Field name='testingObject' label='Object'>
          <textarea name="testingObject" defaultValue="" />
        </Field>
      )).toBeTruthy();
    })
  });

  describe('onExecuteFlow', () => {
    let onExecuteFlowMock, jsonString;

    beforeEach(() => {
      jsonString = '{"foo":"bar"}';
      onExecuteFlowMock = jest.fn();
      executeFlowForm = shallow(<ExecuteFlowForm onExecuteFlow={onExecuteFlowMock} />);
      executeFlowForm.instance().objectText = { value: jsonString };
      executeFlowForm.find('form').simulate('submit', { preventDefault: () => {} });
    });

    it('calls the onExecuteFlowMock prop passing the parsed JSON coming from the testingObject field', () => {
      expect(onExecuteFlowMock).toHaveBeenCalledWith({ foo: 'bar' });
    });
  });
});
