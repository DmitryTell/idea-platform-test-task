import { FC } from 'react';
import { useSelector } from 'react-redux';

import { ReactComponent as PlaneIcon } from '@assets/PlaneIcon.svg';
import { getStateFilter } from '@redux/';
import { ITicket } from '@interface/';
import { getTicketPrice } from '@utils/';

import { ticketsStops } from './lib';
import * as Styled from './tickets.styled';


interface ITicketsProps {
  isLoading: boolean;
  tickets: ITicket[];
}

export const Tickets: FC<ITicketsProps> = ({ isLoading, tickets }) => {
  const { currency } = useSelector(getStateFilter);

  return (
    <Styled.TicketsList>
      { isLoading
        ? [1, 2, 3, 4, 5].map((item) => (
          <Styled.TicketsLoadingItem key={ String(item) } />
        ))
        : tickets.map((ticket, index) => (
          <Styled.TicketsItem key={ String(index + 1) }>
            <Styled.TicketsItemLeftBlock>
              <Styled.TicketsItemBrand>
                <Styled.TicketsItemBrandText>
                  <span>turkish</span>
                  <span>airlines</span>
                </Styled.TicketsItemBrandText>
                <img alt="Логотип бренда" src={ `${process.env.PUBLIC_URL}/img/brand-logo.png` } />
              </Styled.TicketsItemBrand>
              <Styled.TicketsItemBuyButton type="button">
                <span>Купить</span>
                <span>за { getTicketPrice(ticket.price, currency) }</span>
              </Styled.TicketsItemBuyButton>
            </Styled.TicketsItemLeftBlock>
            <Styled.TicketsItemRightBlock>
              <Styled.TicketsItemTimeBlock>
                <Styled.TicketsItemTime>{ ticket.departure_time }</Styled.TicketsItemTime>
                <Styled.TicketsItemStopsBlock>
                  <Styled.TicketsItemStopsText>
                    { ticketsStops[ticket.stops] }
                  </Styled.TicketsItemStopsText>
                  <Styled.TicketsItemStopsGraphics>
                    <Styled.TicketsItemStopsLine />
                    <PlaneIcon />
                  </Styled.TicketsItemStopsGraphics>
                </Styled.TicketsItemStopsBlock>
                <Styled.TicketsItemTime>{ ticket.arrival_time }</Styled.TicketsItemTime>
              </Styled.TicketsItemTimeBlock>
              <Styled.TicketsItemPointsBlock>
                <Styled.TicketsItemPointsText>
                  { ticket.origin }, { ticket.origin_name }
                </Styled.TicketsItemPointsText>
                <Styled.TicketsItemPointsText>
                  { ticket.destination_name }, { ticket.destination }
                </Styled.TicketsItemPointsText>
              </Styled.TicketsItemPointsBlock>
              <Styled.TicketsItemDateBlock>
                <Styled.TicketsItemDateText>{ ticket.departure_date }</Styled.TicketsItemDateText>
                <Styled.TicketsItemDateText>{ ticket.arrival_date }</Styled.TicketsItemDateText>
              </Styled.TicketsItemDateBlock>
            </Styled.TicketsItemRightBlock>
          </Styled.TicketsItem>
        )) }
    </Styled.TicketsList>
  );
};
