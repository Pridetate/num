export const amountValidation = (amount: string) => {
  return amount.match(/^-?\d+(\.\d{1,2})?$/);
};
