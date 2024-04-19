import * as Styled from './top-block.styled';


export const TopBlock = () => (
  <Styled.TopBlockContainer>
    <img alt="Логотип" src={ `${process.env.PUBLIC_URL}/img/logo.png` } />
  </Styled.TopBlockContainer>
);
