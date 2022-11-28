import { DateTime } from "luxon";

export const formatToLocalTime = (
  secs: number,
  zone: string,
  format: string = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => {
  return DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
};
