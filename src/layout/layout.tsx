import { FC, ReactNode } from 'react';

import * as Styled from './layout.styled';


interface ILayoutProp {
  children: ReactNode;
}

export const Layout: FC<ILayoutProp> = ({ children }) => (
  <Styled.LayoutWrapper>
    <Styled.LayoutContainer>
      { children }
    </Styled.LayoutContainer>
  </Styled.LayoutWrapper>
);
