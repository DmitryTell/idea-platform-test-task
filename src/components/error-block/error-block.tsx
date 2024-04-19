import { FC } from 'react';

import * as Styled from './error-block.styled';


interface IErrorProp {
  text: string;
}

export const ErrorBlock: FC<IErrorProp> = ({ text }) => (
  <Styled.ErrorBlock>
    <Styled.ErrorText>{ text }</Styled.ErrorText>
  </Styled.ErrorBlock>
);
