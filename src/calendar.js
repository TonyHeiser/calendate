const currentDate = document.querySelector(".calendar__title");
const daysTag = document.querySelector(".days");
const prevBtn = document.querySelector('[data-action="prev"]');
const nextBtn = document.querySelector('[data-action="next"]');

let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

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
  "December"
];

const renderCalendar = () => {
  let firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay();
  let lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  let lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate();
  let lastDayofMonth = new Date(currentYear, currentMonth + 1, 0).getDay();
  let liTag = "";

  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="last-month"><button class="calendar__day-btn"><span class="calendar__number">${lastDateofLastMonth - i + 1}</span></button></li>`
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    const padNumber = String(i).padStart(2, "0");
    let isToday = 
      i === date.getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear() 
        ? "calendar__today"
        : "";
    liTag += `<li class="${isToday}"><button class="calendar__day-btn"><span class="calendar__number">${padNumber}</span></button></li>`
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    const day = i - lastDayofMonth + 1;
    const padNumber = String(day).padStart(2, "0");
    liTag += `<li class="next-month"><button class="calendar__day-btn"><span class="calendar__number">${padNumber}</span></button></li>`
  }

  currentDate.innerText = `${months[currentMonth]} ${currentYear}`
  daysTag.innerHTML = liTag;
}

renderCalendar();

function changeMonth(delta) {
  currentMonth += delta;

  const temp = new Date(currentYear, currentMonth);

  currentYear = temp.getFullYear();
  currentMonth = temp.getMonth();

  renderCalendar();
}

prevBtn.addEventListener("click", function() { changeMonth(-1) });
nextBtn.addEventListener("click", function() { changeMonth(1) });