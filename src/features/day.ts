const getAllDays = (current: Date) => {
  let week = [];

  let firstDay = current.getDate() - current.getDay();

  for (let i = 0; i < 7; i++) {
    week.push(new Date(current.setDate(firstDay++)));
  }
  return week;
};

export { getAllDays };
