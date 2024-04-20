import { ITicket } from '@interface/';


export const filterTicketsByStops = (tickets: ITicket[], stops: number[] | null) => {
  const result: ITicket[] = [];

  tickets.forEach((ticket) => {
    if (stops?.includes(ticket.stops)) {
      result.push(ticket);
    }
  });

  return result;
};
