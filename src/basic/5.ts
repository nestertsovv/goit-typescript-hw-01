enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek) => {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday ? true : false;
};

console.log(isWeekend(DayOfWeek.Monday));
console.log(new Date("2021-01-01"));

export {};
