import styled from 'styled-components';


interface IItemBlockProp {
  $isActive: boolean;
}

export const FiltersContainer = styled.div`
    width: 400px;
    padding: 24px;
    background: #fff;
    border-radius: 6px;
    display: flex;
    flex-flow: column;
    gap: 48px;
    -webkit-box-shadow: 0px 1px 1px 2px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 1px 1px 2px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

export const FiltersCurrencyBlock = styled.div`
    display: flex;
    flex-flow: column;
    gap: 24px;
`;

export const FiltersTitle = styled.h3`
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: #6b6b6b;
`;

export const FiltersCurrencyButtons = styled.div`
    width: 100%;
    display: flex;
`;

export const FiltersStopsBlock = styled.div`
    display: flex;
    flex-flow: column;
    gap: 24px;
`;

export const FiltersStopsList = styled.ul`
    display: flex;
    flex-flow: column;
    gap: 18px;
`;

export const FiltersStopsItem = styled.li`
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
`;

export const FiltersStopsItemBlock = styled.div<IItemBlockProp>`
    width: 26px;
    height: 26px;
    border: 1px solid ${(props) => (props.$isActive ? '#89beed' : '#a8a8a8')};
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FiltersStopsItemText = styled.span`
    font-size: 16px;
    line-height: 20px;
    color: #6b6b6b;
`;
