import { process } from './processor';

describe('Flow Processor', () => {
  let flow, callback;

  beforeEach(() => { callback = jest.fn(); });

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
      process(flow, callback);
    });

    it('calls the callback for each rule', () => {
      expect(callback.mock.calls.length).toBe(2);
    });

    it('passes the current rule for the callback for each executed rule', () => {
      expect(callback.mock.calls[0][0]).toEqual({
        id: 1,
        title: "First Rule",
        body: "true",
        idIfTrue: 2,
        idIfFalse: null
      });
      expect(callback.mock.calls[1][0]).toEqual({
        id: 2,
        title: "Last Rule",
        body: "false",
        idIfTrue: null,
        idIfFalse: null
      });
    });

    it('passes true or false depending on the rule\'s body', () => {
      expect(callback.mock.calls[0][1]).toBeTruthy();
      expect(callback.mock.calls[1][1]).toBeFalsy();
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
      process(flow, callback);
    });

    it('calls the callback for each rule', () => {
      expect(callback.mock.calls.length).toBe(2);
    });

    it('passes the current rule for the callback for each executed rule', () => {
      expect(callback.mock.calls[0][0]).toEqual({
        id: 1,
        title: "First Rule",
        body: "false",
        idIfTrue: null,
        idIfFalse: 2
      });
      expect(callback.mock.calls[1][0]).toEqual({
        id: 2,
        title: "Last Rule",
        body: "false",
        idIfTrue: null,
        idIfFalse: null
      });
    });

    it('passes true or false depending on the rule\'s body', () => {
      expect(callback.mock.calls[0][1]).toBeFalsy();
      expect(callback.mock.calls[1][1]).toBeFalsy();
    });
  });
});
