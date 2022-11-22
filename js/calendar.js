let changeMonth;
const cal_info = document.querySelector(".cal_info");
const calPrev = document.querySelector(".prev");
const calNext = document.querySelector(".next");

const renderCal = (date) => {
  changeMonth = date;
  
  // 현재 년월
  const currYear = new Date(date).getFullYear();
  const currMonth = new Date(date).getMonth() + 1;
  cal_info.innerText = `${currYear}년 ${currMonth}월`;

  const prevLastDay = new Date(currYear, currMonth - 1, 0).getDay(); // 전달 마지막 날 요일
  const currLastDate = new Date(currYear, currMonth, 0).getDate(); // 이번달 마지막일
  const currLastDay = new Date(currYear, currMonth, 0).getDay(); // 이번달 마지막 날 요일

  let htmls = '';
  // 이전달 공백, 전달이 토요일에 끝난다면 실행x
  if(prevLastDay != 6){
    for(let i = 0; i <= prevLastDay; i++){
      htmls += `<div class="nothing">x</div>`;
    }
  }
  // 이번달 날짜
  for(let i = 1; i <= currLastDate; i++){
    htmls += `<div>${i}</div>`;
  }
  // 이번달 공백
  for(let i = currLastDay; i < 6; i++){
    htmls += `<div class="nothing">x</div>`;
  }

  const calContent = document.querySelector(".cal_content");
  calContent.innerHTML = htmls;
};
const cDays = (direction) => {
  let cYear = changeMonth.getFullYear();
  let cMonth;
  if("prev" == direction){
    if(changeMonth.getMonth() == 0){
      cYear = cYear - 1;
      cMonth = 12;
    }
    else {
      cMonth = changeMonth.getMonth();
    }
  }
  if("next" == direction){
    if(changeMonth.getMonth() == 11){
      cYear = cYear + 1;
      cMonth = 1;
    }
    else {
      cMonth = changeMonth.getMonth() + 2;
    }
  }
  const temp = `${cYear}-${cMonth}-01`;
  renderCal(new Date(temp));
};

calPrev.addEventListener('click', () => cDays('prev'));
calNext.addEventListener('click', () => cDays('next'));

// 초기 실행
const today = new Date();
renderCal(today);