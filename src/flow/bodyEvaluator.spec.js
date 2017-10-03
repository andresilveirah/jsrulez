import bodyEvaluator from './bodyEvaluator';

describe('bodyEvaluator', () => {
  const testingObject = { foo: 'bar' };
  let bodyString;

  it('evaluates the body string into a function and calls it passing the testingObject', () => {
    bodyString = "function(obj) { return obj.foo === 'bar' }";
    expect(bodyEvaluator(bodyString, testingObject)).toBeTruthy();
  });

  it('trhow an error in case the body cannot be evaluated', () => {
    bodyString = "crappy function";
    expect(() => bodyEvaluator(bodyString, testingObject)).toThrow(
      new Error('Could not evaluate Rule with body: crappy function')
    );
  });
});
