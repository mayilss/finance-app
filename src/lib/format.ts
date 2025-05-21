export const formatCurrency = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format;

export const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  return new Date(date).toLocaleDateString("de-De", options);
};
