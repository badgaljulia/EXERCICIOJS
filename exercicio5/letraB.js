function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  let timeOfDay;

if (hours >= 6 && hours < 12) {
   timeOfDay = "morning";
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
} else if (hours >= 12 && hours < 18) {
   timeOfDay = "morning";
  document.body.style.backgroundColor = "yellow";
  document.body.style.color = "black";
} else if (hours >= 18 && hours < 24) {
   timeOfDay = "morning";
  document.body.style.backgroundColor = "darkgray";
  document.body.style.color = "white";
} else if (hours >= 0 && hours < 6) {
   timeOfDay = "morning";
  document.body.style.backgroundColor = "blue";
  document.body.style.color = "white";
}
  bgColorDisplay.textContent = document.body.style.backgroundColor;

  document.title = ${timeOfDay} Time of Day Page;
}

updateTime();
setInterval(updateTime, 60000);