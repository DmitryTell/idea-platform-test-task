import { ITicket } from '@interface/';


export const sortTicketsByPrice = (tickets: ITicket[]) => {
  const result: ITicket[] = [];
  const prices = tickets.map((ticket) => ticket.price).sort((a, b) => a - b);

  prices.forEach((price) => {
    tickets.forEach((ticket) => {
      if (price === ticket.price) {
        result.push(ticket);
      }
    });
  });

  return result;
};
