const clock = document.querySelector("#clock");
const todayDate = clock.querySelector(".today_date");
const todayTime = clock.querySelector(".today_time");

function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  todayTime.innerText = `${hours}시 ${minutes}분 ${seconds}초`;
};
todayDate.innerText = new Date().toLocaleDateString().slice(0, -1);
getClock(); // 바로 실행
setInterval(getClock, 1000);

