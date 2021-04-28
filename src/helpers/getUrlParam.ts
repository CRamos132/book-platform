/**
 * A function that queries the URL for a parameter
 * @param param the parameter name to be queried
 * @returns the value
 */
const getUrlParam = (param: string): string | null => {
  const parameters = new URLSearchParams(window.location.search);
  const parameter = parameters.get(param);
  return parameter;
};

export default getUrlParam;
