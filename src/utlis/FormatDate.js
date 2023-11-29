export default function formatDate(inputDateStr) {
  // Create a Date object from the input string
  var inputDate = new Date(inputDateStr);

  // Define the month names
  var monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  // Get the day, month, and year from the Date object
  var day = inputDate.getDate();
  var month = monthNames[inputDate.getMonth()];
  var year = inputDate.getFullYear();

  // Create the formatted date string
  var formattedDate = day + ' ' + month + ' ' + year;

  return formattedDate;
}
