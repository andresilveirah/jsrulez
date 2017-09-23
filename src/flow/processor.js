/*
  The process function receives a Flow and a callback.
  A Flow is an array of Rules. Each Rule has the following format:
    {
      id: 1,
      title: "First Rule",
      body: "true",
      idIfTrue: 2,
      idIfFalse: null
    }
  The process function is a recursive function that starts by evaluating the
  body of the first Rule in the Flow array. If the evaluated body returns true
  it processes the Rule with the id equals to idIfTrue of the current Rule.
  Alternatively, if the evaluated body returns false it then processes the Rule
  with the id equals to idIfFalse of the current Rule. Finally, if any of the
  ids to be fallowed (idIfTrue or idIfFalse) is null, the execution is finished.
*/

const process = (flow, callback) => {
  if(invalidFlow(flow)) { return; }

  runForestRun(flow, flow[0], callbackify(callback));
};

const runForestRun = (flow, currentRule, callback) => {
  if(currentRule === null) { return; }

  const passed = executeBody(currentRule.body);

  callback(currentRule, passed);
  runForestRun(flow, nextRule(flow, currentRule, passed), callback);
};

const nextRule = (flow, currentRule, passed) =>
  findRule(flow, pickId(currentRule, passed))

const pickId = (rule, passed) => passed ? rule.idIfTrue : rule.idIfFalse;

const findRule = (flow, id) => flow.find(rule => rule.id === id) || null;

const executeBody = (body) => eval(body);

const callbackify = (maybeFunction) =>
  Object.prototype.toString.call(maybeFunction) === '[object Function]' ?
  maybeFunction :
  () => {};

const invalidFlow = (flow) => !Array.isArray(flow) || flow.length === 0;

export { process };
