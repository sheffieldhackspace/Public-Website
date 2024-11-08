document.addEventListener("DOMContentLoaded", () => {
  let cal = document.getElementById("cal-next");
  if (!cal) return;

  let today = new Date();
  let today_day = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  let next_date;
  // check next few weeks
  for (let i = 0; i < 22; i++) {
    next = new Date(
      today_day.getFullYear(),
      today_day.getMonth(),
      today_day.getDate() + i
    );
    // skip: not a Wednesday
    if (next.getDay() != 3) {
      continue;
    }
    // skip: is not between 1 and 7 days or 15 and 21 days through the month
    let date = next.getDate();
    if (
      !(
        (
          (date >= 1 && date <= 7) || // week 1
          (date >= 15 && date <= 21)
        ) // week 3
      )
    ) {
      continue;
    }
    next_date = new Date(
      Date.UTC(next.getFullYear(), next.getMonth(), next.getDate(), 18)
    );
    break;
  }
  const oneDay = 24 * 60 * 60 * 1000;
  const days_til = Math.round(Math.abs((today - next_date) / oneDay));
  cal.innerHTML = ` (next in ${days_til} days, ${next_date.getFullYear()}-${
    next_date.getMonth() + 1
  }-${next_date.getDate()})`;
});
