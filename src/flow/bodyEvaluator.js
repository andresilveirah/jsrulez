export default  (bodyString, testingObject) => {
  try {
    return eval(`(${bodyString})`)(testingObject); // eslint-disable-line no-eval
  } catch (_error) {
     throw new Error(`Could not evaluate Rule with body: ${bodyString}`);
  }
};
