import { FC, HTMLProps } from 'react';

import * as Styled from './currency-buttons.styled';


interface ICurrencyButtonProps extends HTMLProps<HTMLButtonElement> {
  text: string;
  currency: string;
  onClick: React.MouseEventHandler;
}

export const CurrencyButtonRub: FC<ICurrencyButtonProps> = ({ text, currency, onClick }) => (
  <Styled.CurrencyButtonRub
    disabled={ currency === 'rub' }
    type="button"
    onClick={ onClick }
  >
    { text }
  </Styled.CurrencyButtonRub>
);

export const CurrencyButtonUsd: FC<ICurrencyButtonProps> = ({ text, currency, onClick }) => (
  <Styled.CurrencyButtonUsd
    disabled={ currency === 'usd' }
    type="button"
    onClick={ onClick }
  >
    { text }
  </Styled.CurrencyButtonUsd>
);

export const CurrencyButtonEur: FC<ICurrencyButtonProps> = ({ text, currency, onClick }) => (
  <Styled.CurrencyButtonEur
    disabled={ currency === 'eur' }
    type="button"
    onClick={ onClick }
  >
    { text }
  </Styled.CurrencyButtonEur>
);
