const clock = document.querySelector("#clock");
const todayDate = clock.querySelector(".today_date");
const todayTime = clock.querySelector(".today_time");

function getClock(){
  const clockDate = new Date();
  todayTime.innerText = clockDate.toLocaleTimeString('ko', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};
todayDate.innerText = today.toLocaleDateString('ko', {dateStyle: 'full'});
getClock(); // 바로 실행
setInterval(getClock, 1000);

