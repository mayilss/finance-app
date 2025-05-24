export const formatCurrency = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format;

export const capitalizeFirstLetterLocale = (
  str: string,
  locale: string = "en",
): string => {
  if (!str) return str;
  return str[0].toLocaleUpperCase(locale) + str.slice(1);
};
