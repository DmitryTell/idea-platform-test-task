import styled from 'styled-components';


const CurrencyButton = styled.button`
    width: 115px;
    height: 60px;
    background: transparent;
    border: none;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    color: #89beed;
    transition: all 0.5s;

    &:disabled {
        background: #3e9df0;
        border-color: #3e9df0;
        color: #fff;
    }

    &:not(button[disabled]):hover {
        background: #F3F7FA;
        border-color: #89beed;
    }
`;

export const CurrencyButtonRub = styled(CurrencyButton)`
    border-top: 1px solid #a8a8a8;
    border-left: 1px solid #a8a8a8;
    border-bottom: 1px solid #a8a8a8;
    border-radius: 4px 0 0 4px;
`;

export const CurrencyButtonUsd = styled(CurrencyButton)`
    border: 1px solid #a8a8a8;
`;

export const CurrencyButtonEur = styled(CurrencyButton)`
    border-top: 1px solid #a8a8a8;
    border-right: 1px solid #a8a8a8;
    border-bottom: 1px solid #a8a8a8;
    border-radius: 0 4px 4px 0;
`;
