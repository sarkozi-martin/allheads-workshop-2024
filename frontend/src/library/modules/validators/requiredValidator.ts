export const makeRequiredValidator = (errorMessage = 'Pole je povinné') => {
  return (value: any) => {
    if (
      value === null ||
      value === undefined ||
      (Array.isArray(value) && value.length === 0) ||
      String(value).trim().length === 0
    ) {
      return errorMessage;
    }

    return true;
  };
};
