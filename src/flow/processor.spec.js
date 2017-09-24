import flowProcessor from './processor';

describe('Flow Processor', () => {
  let flow, processor;

  describe('follows the idIfTrue if the rule\'s body returns true', () => {
    beforeEach(() => {
      flow = [
        {
          id: 1,
          title: "First Rule",
          body: "true",
          idIfTrue: 2,
          idIfFalse: null
        },
        {
          id: 2,
          title: "Last Rule",
          body: "false",
          idIfTrue: null,
          idIfFalse: null
        }
      ];
      processor = flowProcessor(flow);
    });

    it('yields the current rule for the each executed rule', () => {
      expect(processor.next().value.currentRule).toEqual({
        id: 1,
        title: "First Rule",
        body: "true",
        idIfTrue: 2,
        idIfFalse: null
      });
      expect(processor.next().value.currentRule).toEqual({
        id: 2,
        title: "Last Rule",
        body: "false",
        idIfTrue: null,
        idIfFalse: null
      });
      expect(processor.next().value).toBeUndefined();
    });

    it('yields true or false depending on the evaluated rule\'s body', () => {
      expect(processor.next().value.passed).toBeTruthy();
      expect(processor.next().value.passed).toBeFalsy();
      expect(processor.next().value).toBeUndefined();
    });
  });

  describe('follows the idIfFalse if the rule\'s body returns false', () => {
    beforeEach(() => {
      flow = [
        {
          id: 1,
          title: "First Rule",
          body: "false",
          idIfTrue: null,
          idIfFalse: 2
        },
        {
          id: 2,
          title: "Last Rule",
          body: "false",
          idIfTrue: null,
          idIfFalse: null
        }
      ];
      processor = flowProcessor(flow);
    });

    it('yields the current rule for the each executed rule', () => {
      expect(processor.next().value.currentRule).toEqual({
        id: 1,
        title: "First Rule",
        body: "false",
        idIfTrue: null,
        idIfFalse: 2
      });
      expect(processor.next().value.currentRule).toEqual({
        id: 2,
        title: "Last Rule",
        body: "false",
        idIfTrue: null,
        idIfFalse: null
      });
      expect(processor.next().value).toBeUndefined();
    });

    it('yields true or false depending on the evaluated rule\'s body', () => {
      expect(processor.next().value.passed).toBeFalsy();
      expect(processor.next().value.passed).toBeFalsy();
      expect(processor.next().value).toBeUndefined();
    });
  });

  describe('when the flow is empty', () => {
    it('it yields undefined', () => {
      expect(flowProcessor([]).next().value).toBeUndefined();
    });
  });
});
