function getDayAndMonth(inputDate) {
  const date = new Date(inputDate);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });

  return { day, month };
}

const inputDateString = '2018-03-29T00:00:00.000Z';
const { day, month } = getDayAndMonth(inputDateString);

export default getDayAndMonth;
