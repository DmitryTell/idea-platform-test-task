import { FC, ReactNode } from 'react';

import * as Styled from './content-block.styled';


interface IContentBlockProp {
  children: ReactNode;
}

export const ContentBlock: FC<IContentBlockProp> = ({ children }) => (
  <Styled.ContentBlock>
    { children }
  </Styled.ContentBlock>
);
