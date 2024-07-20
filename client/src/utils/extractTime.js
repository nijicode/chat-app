import moment from "moment/moment";

export function extractTime(createdAt) {
  // Ensure createdAt is a Date object or an ISO 8601 string
  if (!(createdAt instanceof Date)) {
    createdAt = new Date(createdAt);
  }

  // Format the date to hours and minutes (e.g., "14:30")
  const formattedTime = moment(createdAt).format("HH:mm");

  return formattedTime;
}
