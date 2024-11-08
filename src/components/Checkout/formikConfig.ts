import * as Yup from 'yup';

export const initialValues = {
  name: '',
  address: '',
  city: '',
  zipCode: '',
  number: '',
  complement: '',
  nameCard: '',
  numberCard: '',
  cvv: '',
  expirationMonth: '',
  expirationYear: '',
};

export const schema = (etapaFormulario: boolean): Yup.ObjectSchema<any> => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(5, 'o nome precisa de no mínimo 5 caracteres')
      .required('O campo nome é obrigatório'),
    address: Yup.string()
      .required('O endereço é obrigatório')
      .min(3, 'O endereço deve ter no mínimo 3 caracteres'),
    city: Yup.string()
      .required('A cidade é obrigatória')
      .min(2, 'A cidade deve ter no mínimo 2 caracteres'),
    zipCode: Yup.string()
      .min(9, 'O CEP precisa ter no mínimo 9 caracteres contando com o "-"')
      .max(9, 'O CEP deve ter no máximo 9 caracteres contando com o "-"')
      .required('O CEP é obrigatório')
      .matches(/^[0-9]{5}-[0-9]{3}$/, 'O CEP deve estar no formato 00000-000'),
    number: Yup.number()
      .typeError('O número deve ser numérico')
      .required('O número é obrigatório')
      .positive('O número deve ser positivo')
      .integer('O número deve ser um valor inteiro'),
    complement: Yup.string().optional(),
    ...(etapaFormulario && {
      nameCard: Yup.string()
        .required('O nome no cartão é obrigatório')
        .min(3, 'O nome deve ter no mínimo 3 caracteres'),
      numberCard: Yup.string()
        .required('O número do cartão é obrigatório')
        .matches(/^[0-9]{16}$/, 'O número do cartão deve ter 16 dígitos'),
      cvv: Yup.string()
        .required('O CVV é obrigatório')
        .matches(/^[0-9]{3}$/, 'O CVV deve ter exatamente 3 dígitos'),
      expirationMonth: Yup.string()
        .required('O mês de vencimento é obrigatório')
        .matches(/^(0[1-9]|1[0-2])$/, 'O mês deve estar entre 01 e 12'),
      expirationYear: Yup.string()
        .required('O ano de vencimento é obrigatório')
        .matches(/^[0-9]{2}$/, 'O ano de vencimento deve ter 2 dígitos'),
    }),
  });

  return validationSchema;
};
