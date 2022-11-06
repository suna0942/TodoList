const modeSwitch = document.querySelector(".switch");
const light = modeSwitch.querySelector("#nightOff");
const night = modeSwitch.querySelector("#nightOn");
const modeChk = modeSwitch.querySelector("#modeChk");

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
  document.documentElement.setAttribute('color-theme', mode);
  mode == DARKMODE.theme ? modeChk.checked = true : modeChk.checked = false;
}
  
renderNightAndDay(mode);

modeChk.addEventListener('change', (e) => {
  const checkedYn = e.target.checked;
  if(checkedYn) mode = DARKMODE.theme;
  else mode = LIGHTMODE.theme;
  renderNightAndDay(mode)
});

