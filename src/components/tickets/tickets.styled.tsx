import styled from 'styled-components';


export const TicketsList = styled.ul`
    width: 1000px;
    height: 100vh;
    padding: 10px;
    padding-bottom: 250px;
    overflow: auto;
    display: flex;
    flex-flow: column;
    gap: 30px;
    scrollbar-width: 0;

    &::-webkit-scrollbar {
        width: 0;
    }
`;

export const TicketsLoadingItem = styled.li`
    width: 100%;
    height: 100px;
    -webkit-animation: skeleton-animation 2s linear infinite alternate both;
    animation: skeleton-animation 2s linear infinite alternate both;
`;

export const TicketsItem = styled.li`
    width: 100%;
    background: #fff;
    border-radius: 6px;
    -webkit-box-shadow: 0px 1px 1px 2px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 1px 1px 2px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 1px 1px 2px rgba(0, 0, 0, 0.2);
    display: flex;
`;

export const TicketsItemLeftBlock = styled.div`
    width: 300px;
    padding: 30px;
    border-right: 1px solid #a8a8a8;
    display: flex;
    flex-flow: column;
    gap: 30px;
`;

export const TicketsItemBrand = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
`;

export const TicketsItemBrandText = styled.p`
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    color: #040083;
    display: flex;
    flex-flow: column;
`;

export const TicketsItemBuyButton = styled.button`
    height: 80px;
    background: #f97117;
    border: none;
    border-radius: 6px;
    font-size: 20px;
    line-height: 26px;
    color: #fff;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;

    &:hover {
        opacity: 0.8;
    }
`;

export const TicketsItemRightBlock = styled.div`
    width: 700px;
    padding: 30px;
    display: flex;
    flex-flow: column;
    gap: 5px;
`;

export const TicketsItemTimeBlock = styled.div`
    width: 100%;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    gap: 30px;
`;

export const TicketsItemTime = styled.span`
    font-size: 54px;
    line-height: 58px;
    color: #555555;
`;

export const TicketsItemStopsBlock = styled.div`
    flex-grow: 1;
    display: flex;
    flex-flow: column;
    align-items: center;
`;

export const TicketsItemStopsText = styled.span`
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    color: #a8a8a8;
`;

export const TicketsItemStopsGraphics = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const TicketsItemStopsLine = styled.div`
    flex-grow: 1;
    border: 1px solid #a8a8a8;
`;

export const TicketsItemPointsBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TicketsItemPointsText = styled.span`
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    color: #555555;
`;

export const TicketsItemDateBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TicketsItemDateText = styled.span`
    font-size: 16px;
    line-height: 20px;
    color: #a8a8a8;
`;
