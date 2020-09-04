import styled from 'styled-components';
import { shade } from 'polished';
import signUpBgImg from '../../assets/bgSignUp.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  place-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  align-items: center;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      text-decoration: none;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      display: block;

      &:hover {
        color: ${shade(0.2, '#F4ede8')};
      }
    }
  }

  > a {
    color: #f4ede8;
    text-decoration: none;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#F4ede8')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBgImg}) no-repeat center;
  background-size: cover;
`;
