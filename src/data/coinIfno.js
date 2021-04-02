export const setingUrl = (id) => `https://api.coingecko.com/api/v3/coins/${id}`;
export const getCoinInfo = (
  marketCap,
  lowDayPrice,
  hightDayPrice,
  dayTradingVol,
  maxSupply
) => {
  return [
    {
      id: 1,
      name: "Market Cap",
      data: marketCap,
    },
    {
      id: 2,
      name: "24h Low / 24h High",
      data: [lowDayPrice, ` / $${hightDayPrice}`],
    },
    {
      id: 3,
      name: "24 Hour Trading Vol",
      data: dayTradingVol,
    },
    {
      id: 4,
      name: "Max supply",
      data: maxSupply,
    },
  ];
};
export const getCoinPriceChanges = (market_data, currency) => {
    const {
      price_change_percentage_1h_in_currency,
      price_change_percentage_24h_in_currency,
      price_change_percentage_7d_in_currency,
      price_change_percentage_14d_in_currency,
      price_change_percentage_30d_in_currency,
      price_change_percentage_1y_in_currency
    } = market_data;
    return [
      {
        id: 1,
        period: "1h",
        data: price_change_percentage_1h_in_currency[currency],
      },
      {
        id: 2,
        period: "24h",
        data: price_change_percentage_24h_in_currency[currency],
      },
      {
        id: 3,
        period: "7d",
        data: price_change_percentage_7d_in_currency[currency],
      },
      {
        id: 4,
        period: "14d",
        data: price_change_percentage_14d_in_currency[currency],
      },
      {
        id: 5,
        period: "30d",
        data: price_change_percentage_30d_in_currency[currency],
      },
      {
        id: 6,
        period: "1y",
        data: price_change_percentage_1y_in_currency[currency],
      },
    ];
  };
  