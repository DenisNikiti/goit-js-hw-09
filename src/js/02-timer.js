import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

const buttonEl = document.querySelector("[ data-start]")
const timer = document.querySelectorAll(".value")
let  deltatime = {}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}




const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      
      buttonEl.disabled = true
   
       deltatime = convertMs(selectedDates[0].valueOf() - Date.now())
      if (selectedDates[0].valueOf() - Date.now() < 0) {
        return window.alert("Please choose a date in the future") 
      }
              buttonEl.disabled = false
  },
};

flatpickr("#datetime-picker", options)


buttonEl.addEventListener("click",onButtonclick)



function onButtonclick(evt) {
      timer[0].textContent = deltatime.days
      timer[1].textContent = deltatime.hours
      timer[2].textContent = deltatime.minutes
      timer[3].textContent = deltatime.seconds
    
    
    const time = setInterval(Intervl, 1000);
    
    function Intervl() {

          if (timer[0].textContent === "00" && timer[1].textContent === "00" && timer[2].textContent === "00" && timer[3].textContent === "00") {
              clearInterval(time)
              return
          }
        timer[3].textContent = addLeadingZero(timer[3].textContent - 1)

    }
       if (timer[3].textContent === "00") {
        timer[3].textContent = 60
    }
    
    if (timer[3].textContent === "00" && timer[2].textContent != "00") {
        timer[2].textContent = addLeadingZero(timer[2].textContent - 1)
    }

    if (timer[2].textContent === "00" && timer[1].textContent != "00") {
        timer[1].textContent = addLeadingZero(timer[1].textContent - 1)
        timer[2].textContent = "60"
    }

   if (timer[1].textContent === "00" && timer[0].textContent != "00") {
       timer[0].textContent = addLeadingZero(timer[0].textContent - 1)
       timer[1].textContent = "60"
   }
      
}





function addLeadingZero(value) {
  return String(value).padStart(2,0)
}