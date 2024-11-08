import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  height: 28rem;
  padding: 2.5rem 0 3.2rem 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
`;

const Category = styled.h2`
  font-size: ${({ theme }) => theme.text.size.h2};
  font-weight: ${({ theme }) => theme.text.weight.thin};
  color: ${({ theme }) => theme.text.color.accent};
  z-index: 20;

  @media (max-width: 1048px) {
    width: 95%;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.text.size.h2};
  font-weight: ${({ theme }) => theme.text.weight.black};
  color: ${({ theme }) => theme.text.color.accent};
  text-shadow:
    -1px -1px 0 black,
    1px -1px 0 black,
    -1px 1px 0 black,
    1px 1px 0 black;
  z-index: 20;

  @media (max-width: 1048px) {
    width: 95%;
    margin: 0 auto;
  }

  @media (max-width: 336px) {
    font-size: 2.8rem;
  }
`;

export { Div, Overlay, Category, Title };
