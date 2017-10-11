import createFunction from './createFunction';

export default  (bodyString, testingObject) => {
  try {
    return createFunction(bodyString)(testingObject);
  } catch (_error) {
     throw new Error(`Could not evaluate Rule with body: ${bodyString}`);
  }
};
