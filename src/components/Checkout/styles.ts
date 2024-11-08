import styled from 'styled-components';

const Form = styled.form`
  margin-bottom: 2.4rem;

  div {
    margin: 0rem 0 0.4rem 0;
  }

  Button:first-of-type {
    margin-top: 2.4rem;
    margin-bottom: 1.2rem;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    --moz-appearance: textfield;
  }
`;

const Title = styled.h4`
  font-size: ${({ theme }) => theme.text.size.h4};
  font-weight: ${({ theme }) => theme.text.weight.bold};
  color: ${({ theme }) => theme.text.color.alternative};
  margin-bottom: 1.6rem;
`;

const Label = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.text.size.standard};
  color: ${({ theme }) => theme.text.color.accent};
  font-weight: ${({ theme }) => theme.text.weight.bold};
  margin: 0.8rem 0;
`;

const Field = styled.input`
  width: 100%;
  padding: 0.6rem;
  font-size: ${({ theme }) => theme.text.size.standard};
  font-weight: ${({ theme }) => theme.text.weight.bold};
  color: ${({ theme }) => theme.text.color.form};
  background-color: ${({ theme }) => theme.colors.primary};
  border: 0.2rem solid transparent;
  outline: none;

  &.error {
    border: 0.2rem solid red;
  }
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3.4rem;
`;

export { Title, Form, Label, Field, Div };
