import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Layout } from '@layout/';
import {
  TopBlock,
  ContentBlock,
  Filters,
  Tickets,
  ErrorBlock,
} from '@components/';
import { getStateFilter, useGetTicketsQuery } from '@redux/';
import { ITicket } from '@interface/';
import { sortTicketsByPrice, filterTicketsByStops } from '@utils/';


export const MainPage = () => {
  const { stops } = useSelector(getStateFilter);

  const [tickets, setTickets] = useState<ITicket[] | []>([]);

  const { data, isLoading, error } = useGetTicketsQuery();

  useEffect(() => {
    if (data && !stops) {
      const result = sortTicketsByPrice(data.tickets);

      setTickets(result);
    }
  }, [data, stops]);

  useEffect(() => {
    if (data && stops) {
      const sortedTickets = sortTicketsByPrice(data.tickets);
      const result = filterTicketsByStops(sortedTickets, stops);

      setTickets(result);
    }
  }, [data, stops]);

  return (
    <Layout>
      <TopBlock />
      <ContentBlock>
        <Filters />
        { error ? (
          <ErrorBlock text="Ошибка загрузки" />
        ) : (
          <Tickets
            isLoading={ isLoading }
            tickets={ tickets }
          />
        ) }
      </ContentBlock>
    </Layout>
  );
};
