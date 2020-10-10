export const validateField = (value, setError) => {
  if (!Number.isNaN(value) && !Number.isNaN(parseFloat(value))) {
    return setError(null);
  }
  return setError(true);
};
