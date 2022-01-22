export const nth = function (d) {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const formatDate = (dateParam: string): string => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateObj = new Date(dateParam);

  const month = months[dateObj.getMonth()];
  const day = days[dateObj.getDay()]; // Friday
  const date = dateObj.getDate();

  return `${day} ${date + nth(date)} ${month} @${dateObj.toLocaleTimeString(
    "us-en",
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  )}`;
};
