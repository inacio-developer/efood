export const formatFieldsLimits = (
  e: React.ChangeEvent<HTMLInputElement>,
  number: number,
): string => {
  const value = e.target.value.slice(0, number);
  return value;
};
