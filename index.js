const currenttime = document.querySelector("h1");
const selectmenu = document.querySelectorAll("select");
const content = document.querySelector(".container");
const setalarmbtn = document.querySelector(".button");

let audio = new Audio("./audio.mp3");
let alrmtime, issetalarm
for (let i = 12; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectmenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectmenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 2; i > 0; i--) {
  let ampm = i == 1 ? "am" : "pm";
  let option = `<option value="${ampm}">${ampm}</option>`;
  selectmenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}
setInterval(() => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let ampm = "am";

  if (h > 12) {
    h = h - 12;
    ampm = "pm";
  }
  h = h == 0 ? (h = 12) : h;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  currenttime.innerText = `${h}:${m}:${s} ${ampm}`;

  if (alrmtime == `${h}:${m} ${ampm}`) {
    audio.play();
   console.log('time');
  }
}, 1000);

function setAlarm() {
if(issetalarm){
alrmtime=""
audio.pause()
content.classList.remove("disable");
setalarmbtn.innerText = "set alarm";
return issetalarm=false
}
  let time = `${selectmenu[0].value}:${selectmenu[1].value} ${selectmenu[2].value}`;
  alrmtime = time;
issetalarm=true
  content.classList.add("disable");
  setalarmbtn.innerText = "clear alarm";
}

setalarmbtn.addEventListener("click", setAlarm);
