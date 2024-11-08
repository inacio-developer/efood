export const convertReal = (value: number): string =>
  value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
