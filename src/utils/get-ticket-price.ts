export const getTicketPrice = (price: number, currency: string) => {
  if (currency === 'usd') {
    return `${Math.round(price / 95)}$`;
  }

  if (currency === 'eur') {
    return `${Math.round(price / 105)}€`;
  }

  return `${price}₽`;
};
