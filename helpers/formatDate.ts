import { format, parseISO, fromUnixTime, isValid } from "date-fns";

export const formatDate = (date: number | string | Date) => {
  let dateObject: Date;

  if (typeof date === "number") {
    dateObject = fromUnixTime(date / 1000);
  } else if (typeof date === "string") {
    dateObject = parseISO(date);
  } else if (date instanceof Date) {
    dateObject = date;
  } else {
    return "Invalid Date";
  }

  if (!isValid(dateObject)) {
    return "Invalid Date";
  }

  return format(dateObject, "dd.MM.yyyy");
};
