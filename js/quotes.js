const quotes = [
{
  quoteEn: "Venture outside your comfort zone. The rewards are worth it",
  quoteKo: "안전지대 밖에서 모험을 해보세요. 보상은 그만한 가치가 있을 거예요",
  author: "라푼젤",
}, {
  quoteEn: "Get out of the place you’re used to. The reward for this will definitely be worth it",
  quoteKo: "익숙한 곳을 벗어나 봐. 그것에 대한 보상은 분명 가치가 있을 거야",
  author: "라푼젤"
}, {
  quoteEn: "Sometimes the smallest things take up the most room in your heart",
  quoteKo: "한 사람의 마음은 채우는 것이 가끔은 아주 작은 것들이야",
  author: "곰돌이 푸"
}, {
  quoteEn: "Life is a journey to be experienced, not a problem to be solved",
  quoteKo: "삶은 풀어야 하는 문제가 아니라 경험해 봐야 하는 긴 여행이야",
  author: "곰돌이 푸"
}, {
  quoteEn: "You cannot be happy everyday, but there are happy things everyday",
  quoteKo: "너가 매일 행복할 수는 없지만, 행복한 일들은 매일 있어",
  author: "곰돌이 푸"
}, {
  quoteEn: " Things that make me who I am make me special",
  quoteKo: "날 나답게 만드는 일들이 날 특별하게 만들어",
  author: "곰돌이 푸"
}, {
  quoteEn: "How do you spell love? You don't spell it. You feel it",
  quoteKo: "사랑은 어떻게 쓰는거야? 사랑은 쓰는게 아니야 느끼는거지",
  author: "곰돌이 푸"
}, {
  quoteEn: "The only thing predictable about life is it's unpredictability",
  quoteKo: "인생에서 예측할 수 있는 유일한 것은 예측할 수 없는 것이랍니다",
  author: "라따뚜이"
}, {
  quoteEn: "Love is putting someone else's needs before yours",
  quoteKo: "사랑은 너 자신보다 사랑하는 사람이 필요한 것을 채워주는 거야",
  author: "겨울왕국"
}, {
  quoteEn: "Success is not given for free. You have to be able to do anything for your goals",
  quoteKo: "성공은 공짜로 주어지는게 아니야. 목표를 위해 무엇이든 할 수 있어야해",
  author: "코코"
}, {
  quoteEn: "The past can hurt, but the way I see it, you can either run from it or learn from it",
  quoteKo: "과거는 상관없어. 아프긴 하겠지. 하지만 둘 중 하나야. 도망치든가, 극복하던가",
  author: "라이언 킹"
}, {
  quoteEn: "The only thing we know is things don’t always go the way we plan",
  quoteKo: "우리가 아는 단 한 가지는, 모든 건 계획대로만 흘러가지 않는다는 거야",
  author: "라이언 킹"
}, {
  quoteEn: "Every day, every minute, every second, you have a chance to change your life",
  quoteKo: "매일, 매분, 매초 인생을 바꿀 수 있는 기회가 있어",
  author: "덤보"
}, {
  quoteEn: "Like so many things, it is not what's outside, but what is inside that counts",
  quoteKo: "다른 많은 것들과 같이 외관이 아니라 그 안에 있는 게 중요하죠",
  author: "알라딘"
}, {
  quoteEn: "It's up to you how far you'll go. If you don't try, you'll never know",
  quoteKo: "얼마나 멀리 갈수 있는지는 당신에게 달려있죠. 해보지 않는다면 절대 알 수 없을 거예요",
  author: "아서왕의 검",
}, {
  quoteEn: "There comes a day when you're gonna look around and realize happiness is where you are",
  quoteKo: "주위를 둘러보고 행복이 자신이 있는 그곳이라는 것을 깨달은 날이 올 거야",
  author: "모아나"
}, {
  quoteEn: "A conscience is that still, small voice that people won’t listen to",
  quoteKo: "양심은 사람들이 듣지 않을 작은 목소리다",
  author: "피노키오"
}, {
  quoteEn: "I can’t go back to yesterday. Because I was a different person then",
  quoteKo: "나는 어제로 돌아갈 수 없다. 왜냐하면 나는 그때와 다른 사람이기 때문이다",
  author: "이상한 나라의 앨리스"
}, {
  quoteEn: "Only I can determine my own mood. And today, perhaps, I will choose happiness",
  quoteKo: "내 기분은 내가 정해. 오늘 나는 ‘행복’으로 할래",
  author: "이상한 나라의 앨리스"
}, {
  quoteEn: "Even if it's not special If you believe it's special, It's gonna be special",
  quoteKo: "비록 그것이 특별하지 않더러도 네가 그것이 특별하다고 믿는다면, 특별해지는 거야",
  author: "쿵푸팬더"
}, {
  quoteEn: "If you do only what you can, you'll never be better than now",
  quoteKo: "네가 할 줄 아는것만 한다면, 넌 절대 지금보다 나아지지 못해",
  author: "쿵푸팬더"
},
];

const quoteContainer = document.querySelector("#quote");
const quote = quoteContainer.querySelector("p:first-of-type");
const author = quoteContainer.querySelector("p:last-of-type");
const changeBtn = quoteContainer.querySelector(".langBtn");
const randomBtn = quoteContainer.querySelector(".randomBtn");
let idx;

function renderQuote(){
  idx = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[idx];
  quote.classList.add('en');
  quote.innerText = randomQuote.quoteEn;
  author.innerText = randomQuote.author;
};

function changeLang(){
  if(quote.classList.contains("en")){
    quote.innerText = quotes[idx].quoteKo;
    changeBtn.innerText = 'EN';
  }
  else {
    quote.innerText = quotes[idx].quoteEn;
    changeBtn.innerText = 'KO';
  }
  quote.classList.toggle('en');
};

renderQuote();
changeBtn.addEventListener('click', changeLang);
randomBtn.addEventListener('click', renderQuote);