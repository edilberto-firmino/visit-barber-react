import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: 1s;

  &:hover,
  &:focus {
    box-shadow: inset 22em 0 0 0 ${shade(0.2, '#ff9000')};
    color: #fff;
  }
`;
