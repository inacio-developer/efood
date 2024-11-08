import { RootReduceType } from '../../store/rootReduce';
import { Product } from '../../model/typePurchase';
import { Button } from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { initialValues } from './formikConfig';
import { schema } from './formikConfig';
import { usePurchaseMutation } from '../../services/api';
import { formatsFieldText } from '../../utils/formatsFieldText';
import { formatsFieldCep } from '../../utils/formatsFieldCep';
import { formatFieldsLimits } from '../../utils/formatFieldLimit';
import { Order } from '../ConfirmOrder';
import * as S from './styles';
import { removeAll } from '../../features/cartSlice';

type CheckoutProps = {
  initialState: React.Dispatch<React.SetStateAction<boolean>>;
  status: React.Dispatch<React.SetStateAction<boolean>>;
};

const Checkout = ({ initialState, status }: CheckoutProps) => {
  const [nextForm, setNextForm] = useState(false);
  const cartState = useSelector((state: RootReduceType) => state.cart);
  const dispatch = useDispatch();
  const [purchase, { data, isLoading, isSuccess }] = usePurchaseMutation();
  const buttonStyle = {
    $width: '100%',
    $height: '2.4rem',
    $padding: '0.4rem',
    $align: 'center',
    $color: 'primary' as const,
    $backgroundColor: 'primary' as const,
  };

  const getErrorField = (fieldName: string): boolean => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;
    const hasError = isTouched && isInvalid;

    return hasError;
  };

  const handleValidation = async () => {
    await form.validateForm();

    const filled = Object.keys(form.touched).length > 0;
    const errors = Object.keys(form.errors).length === 0;
    const valid = form.isValid;

    form.setTouched({
      name: true,
      address: true,
      city: true,
      zipCode: true,
      number: true,
    });

    if (filled && errors && valid) {
      setNextForm(true);
    }
  };

  const backCheckout = () => {
    status(false);
  };

  const backAndress = () => {
    setNextForm(false);
  };

  const orders: Product[] = cartState.products.map(p => {
    return {
      id: p.id,
      price: p.preco,
    };
  });

  const form = useFormik({
    initialValues,
    validationSchema: schema(nextForm),
    onSubmit: values => {
      purchase({
        products: [...orders],
        delivery: {
          receiver: values.name,
          andress: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement,
          },
        },
        payment: {
          card: {
            name: values.nameCard,
            number: Number(values.numberCard),
            code: Number(values.cvv),
            expires: {
              month: Number(values.expirationMonth),
              year: Number(values.expirationYear),
            },
          },
        },
      });
    },
  });

  useEffect(() => {
    if (isSuccess) dispatch(removeAll());
  }, [isSuccess]);

  return (
    <>
      {!isSuccess && (
        <S.Form onSubmit={form.handleSubmit}>
          {!nextForm && (
            <div>
              <S.Title>Entrega</S.Title>
              <div>
                <S.Label htmlFor="recipient">Quem irá receber: </S.Label>
                <S.Field
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    form.handleChange(e);
                    form.setFieldValue(e.target.name, formatsFieldText(e));
                  }}
                  onBlur={form.handleBlur}
                  type="text"
                  name="name"
                  value={form.values.name}
                  id="recipient"
                  className={getErrorField('name') ? 'error' : ''}
                />
              </div>
              <div>
                <S.Label htmlFor="address">Endereço: </S.Label>
                <S.Field
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    form.handleChange(e);
                    form.setFieldValue(e.target.name, formatsFieldText(e));
                  }}
                  onBlur={form.handleBlur}
                  type="text"
                  name="address"
                  value={form.values.address}
                  id="address"
                  className={getErrorField('address') ? 'error' : ''}
                />
              </div>
              <div>
                <S.Label htmlFor="city">Cidade: </S.Label>
                <S.Field
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    form.handleChange(e);
                    form.setFieldValue(e.target.name, formatsFieldText(e));
                  }}
                  onBlur={form.handleBlur}
                  type="text"
                  name="city"
                  value={form.values.city}
                  id="city"
                  className={getErrorField('city') ? 'error' : ''}
                />
              </div>
              <S.Div>
                <div>
                  <S.Label htmlFor="zipCode">CEP: </S.Label>
                  <S.Field
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      form.handleChange(e);
                      form.setFieldValue('zipCode', formatsFieldCep(e));
                    }}
                    onBlur={form.handleBlur}
                    type="text"
                    name="zipCode"
                    value={form.values.zipCode}
                    id="zipCode"
                    className={getErrorField('zipCode') ? 'error' : ''}
                  />
                </div>
                <div>
                  <S.Label htmlFor="number">Número: </S.Label>
                  <S.Field
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    type="number"
                    name="number"
                    value={form.values.number}
                    id="number"
                    className={getErrorField('number') ? 'error' : ''}
                  />
                </div>
              </S.Div>
              <div>
                <S.Label htmlFor="complement">Complemento (opcional): </S.Label>
                <S.Field
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  type="text"
                  name="complement"
                  value={form.values.complement}
                  id="complement"
                  className={getErrorField('complement') ? 'error' : ''}
                />
              </div>
              <Button
                text={'Continuar com o pagamento'}
                styleButton={buttonStyle}
                onClick={handleValidation}
                type="button"
              />
              <Button
                text={'Voltar para o carrinho'}
                type="button"
                styleButton={buttonStyle}
                onClick={backCheckout}
              />
            </div>
          )}
          {nextForm && (
            <div>
              <S.Title>Pagamento - Valor a pagar {cartState.totalV}</S.Title>
              <div>
                <S.Label htmlFor="nameCart">Nome no cartão: </S.Label>
                <S.Field
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    form.handleChange(e);
                    form.setFieldValue(e.target.name, formatsFieldText(e));
                  }}
                  onBlur={form.handleBlur}
                  type="text"
                  name="nameCard"
                  value={form.values.nameCard}
                  id="nameCart"
                  className={getErrorField('nameCard') ? 'error' : ''}
                />
              </div>
              <S.Div>
                <div>
                  <S.Label htmlFor="numberCard">Número do cartão: </S.Label>
                  <S.Field
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      form.handleChange(e);
                      form.setFieldValue(
                        e.target.name,
                        formatFieldsLimits(e, 16),
                      );
                    }}
                    onBlur={form.handleBlur}
                    type="number"
                    name="numberCard"
                    value={form.values.numberCard}
                    id="numberCard"
                    className={getErrorField('numberCard') ? 'error' : ''}
                  />
                </div>
                <div>
                  <S.Label htmlFor="cvv">CVV: </S.Label>
                  <S.Field
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      form.handleChange(e);
                      form.setFieldValue(
                        e.target.name,
                        formatFieldsLimits(e, 3),
                      );
                    }}
                    onBlur={form.handleBlur}
                    type="number"
                    name="cvv"
                    value={form.values.cvv}
                    id="cvv"
                    className={getErrorField('cvv') ? 'error' : ''}
                  />
                </div>
              </S.Div>
              <S.Div>
                <div>
                  <S.Label htmlFor="expirationMonth">
                    Mês de vencimento:
                  </S.Label>
                  <S.Field
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      form.handleChange(e);
                      form.setFieldValue(
                        e.target.name,
                        formatFieldsLimits(e, 2),
                      );
                    }}
                    onBlur={form.handleBlur}
                    type="text"
                    name="expirationMonth"
                    value={form.values.expirationMonth}
                    id="expirationMonth"
                    className={getErrorField('expirationMonth') ? 'error' : ''}
                  />
                </div>
                <div>
                  <S.Label htmlFor="expirationYear">Ano de vencimento:</S.Label>
                  <S.Field
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      form.handleChange(e);
                      form.setFieldValue(
                        e.target.name,
                        formatFieldsLimits(e, 2),
                      );
                    }}
                    onBlur={form.handleBlur}
                    type="text"
                    name="expirationYear"
                    value={form.values.expirationYear}
                    id="expirationYear"
                    className={getErrorField('expirationYear') ? 'error' : ''}
                  />
                </div>
              </S.Div>
              <Button
                text={'Finalizar pagamento'}
                styleButton={{
                  ...buttonStyle,
                  $color: isLoading ? 'disabled' : 'primary',
                  $backgroundColor: isLoading ? 'disabled' : 'primary',
                }}
                type={'submit'}
              />
              <Button
                text={'Voltar para a edição de endereço'}
                styleButton={{
                  ...buttonStyle,
                  $color: isLoading ? 'disabled' : 'primary',
                  $backgroundColor: isLoading ? 'disabled' : 'primary',
                }}
                onClick={backAndress}
              />
            </div>
          )}
        </S.Form>
      )}
      {isSuccess && <Order id={data.orderId} status={initialState} />}
    </>
  );
};

export { Checkout };
