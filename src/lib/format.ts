export const formatCurrency = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format;

export const formatDate = (date: string, withTime: boolean = false) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    ...(withTime && {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };
  return new Date(date).toLocaleDateString("de-De", options);
};
