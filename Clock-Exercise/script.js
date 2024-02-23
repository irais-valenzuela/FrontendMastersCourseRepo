const updateTime = () => {
  const timePTag = document.getElementById("time");

  const currentTime = new Date().toLocaleTimeString();

  timePTag.innerText = currentTime;

  timePTag.style.margin = "5px 0 0 5px";
  timePTag.style.color = "red";

};

updateTime()
setInterval(updateTime, 3000);
