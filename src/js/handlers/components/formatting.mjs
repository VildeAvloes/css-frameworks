/**
 * Formats the date string into a readable string with date and time.
 *
 * @param {string} dateString - The date string to be formatted.
 *
 * @returns {string} A formatted date string with year, month, day, hour and minute.
 *
 * @example
 * const originalDateString = "2023-12-14T15:30:00Z";
 * const formattedDate = formatDateString(originalDateString);
 * console.log(formattedDate);
 * Output: "Desember 14, 2023, 3:30PM"
 */
export function formatDateString(dateString) {
  const date = new Date(dateString);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const formattedDate = date.toLocaleString("en-US", options);

  return formattedDate;
}
