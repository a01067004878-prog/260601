const home = document.getElementById("home");
const questionContainer = document.getElementById("questionContainer");
const resultContainer = document.getElementById("resultContainer");

const startBtn = document.getElementById("startBtn");
const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");

const progress = document.getElementById("progress");
const question = document.getElementById("question");

const animalEmoji = document.getElementById("animalEmoji");
const mbtiType = document.getElementById("mbtiType");
const animalName = document.getElementById("animalName");
const description = document.getElementById("description");

const restartBtn = document.getElementById("restartBtn");

// =========================
// 질문 16개
// =========================

const questions = [

{
question:"새로운 사람을 만나는 것이 즐겁다.",
answerA:"그렇다",
answerB:"아니다",
aType:"E",
bType:"I"
},
{
question:"모임에서 먼저 말을 거는 편이다.",
answerA:"그렇다",
answerB:"아니다",
aType:"E",
bType:"I"
},
{
question:"에너지를 얻는 방법은?",
answerA:"사람들과 어울리기",
answerB:"혼자만의 시간",
aType:"E",
bType:"I"
},
{
question:"휴일에는?",
answerA:"밖에서 활동",
answerB:"집에서 휴식",
aType:"E",
bType:"I"
},

{
question:"설명서를 읽을 때?",
answerA:"세부 내용부터",
answerB:"전체 개념부터",
aType:"S",
bType:"N"
},
{
question:"더 흥미로운 것은?",
answerA:"현실적인 정보",
answerB:"새로운 아이디어",
aType:"S",
bType:"N"
},
{
question:"문제를 해결할 때?",
answerA:"경험을 활용",
answerB:"가능성을 탐색",
aType:"S",
bType:"N"
},
{
question:"대화할 때 선호하는 것은?",
answerA:"사실 이야기",
answerB:"상상 이야기",
aType:"S",
bType:"N"
},

{
question:"결정을 내릴 때?",
answerA:"논리 우선",
answerB:"감정 우선",
aType:"T",
bType:"F"
},
{
question:"친구 고민 상담 시?",
answerA:"해결책 제시",
answerB:"공감 먼저",
aType:"T",
bType:"F"
},
{
question:"의견 충돌이 생기면?",
answerA:"정답을 찾는다",
answerB:"관계를 고려한다",
aType:"T",
bType:"F"
},
{
question:"팀 프로젝트에서?",
answerA:"효율성",
answerB:"분위기",
aType:"T",
bType:"F"
},

{
question:"여행 스타일은?",
answerA:"계획형",
answerB:"즉흥형",
aType:"J",
bType:"P"
},
{
question:"할 일은?",
answerA:"미리 끝낸다",
answerB:"마감 직전",
aType:"J",
bType:"P"
},
{
question:"일정이 바뀌면?",
answerA:"불편하다",
answerB:"상관없다",
aType:"J",
bType:"P"
},
{
question:"책상 상태는?",
answerA:"깔끔하다",
answerB:"조금 어질러짐",
aType:"J",
bType:"P"
}

];

// =========================
// 결과 데이터
// =========================

const resultData = {

INTJ:{
emoji:"🦉",
animal:"부엉이",
description:"전략적이고 분석적인 천재형 동물"
},

INTP:{
emoji:"🦊",
animal:"여우",
description:"창의적이고 독창적인 아이디어 뱅크"
},

ENTJ:{
emoji:"🦁",
animal:"사자",
description:"강한 추진력과 리더십의 상징"
},

ENTP:{
emoji:"🐒",
animal:"원숭이",
description:"재치 있고 호기심이 많은 탐험가"
},

INFJ:{
emoji:"🦌",
animal:"사슴",
description:"통찰력과 배려심이 뛰어난 이상주의자"
},

INFP:{
emoji:"🐰",
animal:"토끼",
description:"감수성이 풍부한 순수한 몽상가"
},

ENFJ:{
emoji:"🐬",
animal:"돌고래",
description:"주변 사람을 이끄는 따뜻한 리더"
},

ENFP:{
emoji:"🦜",
animal:"앵무새",
description:"열정과 자유로움이 넘치는 분위기메이커"
},

ISTJ:{
emoji:"🐘",
animal:"코끼리",
description:"신뢰와 책임감의 대표주자"
},

ISFJ:{
emoji:"🐶",
animal:"강아지",
description:"헌신적이고 배려심이 많은 친구"
},

ESTJ:{
emoji:"🐂",
animal:"황소",
description:"실행력이 뛰어난 관리자형"
},

ESFJ:{
emoji:"🐧",
animal:"펭귄",
description:"사람들과 협력하는 사교형 리더"
},

ISTP:{
emoji:"🐆",
animal:"표범",
description:"독립적이고 행동력이 강한 해결사"
},

ISFP:{
emoji:"🐱",
animal:"고양이",
description:"자유롭고 감성이 풍부한 예술가"
},

ESTP:{
emoji:"🐯",
animal:"호랑이",
description:"도전 정신이 강한 행동파"
},

ESFP:{
emoji:"🦦",
animal:"수달",
description:"즐거움과 에너지가 넘치는 엔터테이너"
}

};

// =========================
// 상태
// =========================

let currentQuestion = 0;

let score = {
E:0,
I:0,
S:0,
N:0,
T:0,
F:0,
J:0,
P:0
};

// =========================
// 시작
// =========================

startBtn.addEventListener("click", startTest);

function startTest(){

home.classList.add("hidden");
resultContainer.classList.add("hidden");
questionContainer.classList.remove("hidden");

currentQuestion = 0;

score = {
E:0,
I:0,
S:0,
N:0,
T:0,
F:0,
J:0,
P:0
};

showQuestion();
}

// =========================
// 질문 출력
// =========================

function showQuestion(){

const q = questions[currentQuestion];

progress.innerText =
`${currentQuestion + 1} / ${questions.length}`;

question.innerText = q.question;

answerA.innerText = q.answerA;
answerB.innerText = q.answerB;
}

// =========================
// 답변 처리
// =========================

answerA.addEventListener("click", () => {
selectAnswer("A");
});

answerB.addEventListener("click", () => {
selectAnswer("B");
});

function selectAnswer(choice){

const q = questions[currentQuestion];

if(choice === "A"){
score[q.aType]++;
}else{
score[q.bType]++;
}

currentQuestion++;

if(currentQuestion >= questions.length){
showResult();
}else{
showQuestion();
}
}

// =========================
// 동점 랜덤 처리
// =========================

function pick(a,b){

if(a>b) return true;
if(b>a) return false;

return Math.random() < 0.5;
}

// =========================
// MBTI 계산
// =========================

function getMBTI(){

return (
(pick(score.E,score.I) ? "E":"I") +
(pick(score.S,score.N) ? "S":"N") +
(pick(score.T,score.F) ? "T":"F") +
(pick(score.J,score.P) ? "J":"P")
);

}

// =========================
// 결과 출력
// =========================

function showResult(){

questionContainer.classList.add("hidden");
resultContainer.classList.remove("hidden");

const type = getMBTI();
const result = resultData[type];

animalEmoji.innerText = result.emoji;
mbtiType.innerText = type;
animalName.innerText = result.animal;
description.innerText = result.description;
}

// =========================
// 다시하기
// =========================

restartBtn.addEventListener("click", () => {

resultContainer.classList.add("hidden");
home.classList.remove("hidden");

});
