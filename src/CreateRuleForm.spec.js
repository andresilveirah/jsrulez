import React from 'react';
import { shallow } from 'enzyme';

import CreateRuleForm from './CreateRuleForm';
import Field from './Field';
import ErrorMessages from './ErrorMessages';

describe('CreateRuleForm', () => {
  let createRuleForm, onFieldChange;

  describe('contain Fields for', () => {
    beforeEach(() => {
      createRuleForm = shallow(<CreateRuleForm />);
      onFieldChange = createRuleForm.instance().onFieldChange;
    });

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

  describe('renders ErrorMessages component', () => {
    expect(shallow(<CreateRuleForm />)).toContainReact(
      <ErrorMessages attributesErrors={{}} />
    );
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
    });

    describe('when noEmptyFields returns true', () => {
      let noEmptyFields;

      beforeEach(() => {
        noEmptyFields = () => true;
      });

      describe('and ruleValidator returns true', () => {
        beforeEach(() => {
          createRuleForm = shallow(
            <CreateRuleForm
              onCreateRule={onCreateRuleMock}
              ruleValidator={() => true}
            />);
          createRuleForm.instance().form = formMock;
          createRuleForm.instance().noEmptyFields = noEmptyFields;
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

      describe('when ruleValidator returns false', () => {
        beforeEach(() => {
          createRuleForm = shallow(
            <CreateRuleForm
              onCreateRule={onCreateRuleMock}
              ruleValidator={() => false}
            />);
          createRuleForm.instance().form = formMock;
          createRuleForm.instance().noEmptyFields = noEmptyFields;
          onCreateRule = createRuleForm.instance().onCreateRule;
          onCreateRule(event);
        });

        it('does not reset the form', () => {
          expect(formMock.reset).not.toHaveBeenCalled();
        });

        it('does not call call the onCreateRule prop', () => {
          expect(onCreateRuleMock).not.toHaveBeenCalled();
        });
      });
    });

    describe('when noEmptyFields returns false', () => {
      let noEmptyFields, ruleValidator, reset;

      beforeEach(() => {
        noEmptyFields = () => false;
        ruleValidator = jest.fn();
        reset = jest.fn();
        createRuleForm = shallow(
          <CreateRuleForm
            onCreateRule={onCreateRuleMock}
            ruleValidator={ruleValidator}
          />);
        createRuleForm.instance().form = formMock;
        createRuleForm.instance().noEmptyFields = noEmptyFields;
        createRuleForm.instance().reset = reset;

        onCreateRule(event);
      });

      it('does not call ruleValidator', () => {
        expect(onCreateRuleMock).not.toHaveBeenCalled();
      });

      it('does not call onCreateRule', () => {
        expect(ruleValidator).not.toHaveBeenCalled();
      });

      it('does not reset the component', () => {
        expect(reset).not.toHaveBeenCalled();
      });
    });
  });

  describe('reset', () => {
    let formMock, createRuleForm;

    beforeEach(() => {
      formMock = { reset: jest.fn() };
      createRuleForm = shallow(<CreateRuleForm />);
      createRuleForm.instance().form = formMock;
      createRuleForm.instance().reset();
    });

    it('resets the form', () => {
      expect(formMock.reset).toHaveBeenCalled();
    });

    it('resets the rule state', () => {
      expect(createRuleForm).toHaveState('rule', {
        id: '',
        title: '',
        body: '',
        idIfTrue: '',
        idIfFalse: '',
      })
    });
  });

  describe('noEmptyFields', () => {
    let createRuleForm, noEmptyFieldsReturn;

    beforeEach(() => {
      createRuleForm = shallow(<CreateRuleForm />);
    });

    describe('when rule.id is empty', () => {
      beforeEach(() => {
        noEmptyFieldsReturn = createRuleForm.instance().noEmptyFields({ id: '' })
      });

      it('adds id to the error state', () => {
        expect(createRuleForm.state().errors.id).toEqual('Cannot be empty');
      });

      it('returns false', () => {
        expect(noEmptyFieldsReturn).toBeFalsy();
      });
    });

    describe('when rule.title is empty', () => {
      beforeEach(() => {
        noEmptyFieldsReturn = createRuleForm.instance().noEmptyFields({ title: '' })
      });

      it('adds id to the error state', () => {
        expect(createRuleForm.state().errors.title).toEqual('Cannot be empty');
      });

      it('returns false', () => {
        expect(noEmptyFieldsReturn).toBeFalsy();
      });
    });
  });
});
