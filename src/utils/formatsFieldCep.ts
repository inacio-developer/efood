export const formatsFieldCep = (
  e: React.ChangeEvent<HTMLInputElement>,
): string => {
  let cep: string = e.target.value.replaceAll(/\D/g, '').slice(0, 8);
  if (cep.length >= 8) cep = `${cep.slice(0, 5)}-${cep.slice(5, 8)}`;
  return cep;
};
