const getUrlParam = (param: string): string | null => {
  const parameters = new URLSearchParams(window.location.search);
  const parameter = parameters.get(param);
  return parameter;
};

export default getUrlParam;
