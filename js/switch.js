const modeSwitch = document.querySelector(".switch");
const light = modeSwitch.querySelector("#nightOff");
const night = modeSwitch.querySelector("#nightOn");
const nightChk = modeSwitch.querySelector("#modeChk");

let mode;
const DARKMODE = {
  theme: 'dark'
};
const LIGHTMODE = {
  theme: 'light'
};
const SHOW = 'show';

// 현재 시간으로 렌더링
const hours = new Date().getHours();
hours > 5 && hours < 18 ? mode = LIGHTMODE.theme : mode = DARKMODE.theme;

function renderNightAndDay(mode){
  // mode = 'light'; // 확인용
  document.documentElement.setAttribute('color-theme', mode);
}
  
renderNightAndDay(mode);

// 클릭 이벤트  - 다시하기
function handlerShowToggle(e){
  console.log(e.target);
  afternoon.classList.toggle(SHOW);
  night.classList.toggle(SHOW);
}

nightChk.addEventListener('change', handlerShowToggle);
console.log(nightChk.checked);

