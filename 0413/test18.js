// test18.js
'use strict';

// 오늘날짜를 전역변수로 선언...
const today = new Date();
const year = today.getFullYear(); // 연도 4자리
const month = today.getMonth() + 1;   // 월(기존월보다 -1)
const date = today.getDate();     // 일
const hour = today.getHours();    // 시
const minute = today.getMinutes(); // 분
const second = today.getSeconds(); // 초
const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;

// 표준날짜
function fCheck1() {
  // let temp = year + "-" + month + "-" + date;
  // document.getElementById("date1").value = temp;
  document.getElementById("date1").value = yymmdd;
}

// 날짜 비교하기(사용자함수 : isSameDay(날짜형식1,날짜형식2))
function fCheck2() {
  let start = document.getElementById("date1").value;
  let end = document.getElementById("date2").value;

  const startDate = new Date(start);
  const endDate = new Date(end);
  let temp;

  if(isSameDay(startDate, endDate)) temp = "같다.";
  else temp = "다르다."

  demo.innerHTML = "비교한 날짜는 " + temp;
}

// 날짜 비교 사용자 함수
function isSameDay(startDate, endDate) {
  return startDate.getFullYear() === endDate.getFullYear() &&
  startDate.getMonth() === endDate.getMonth() &&
  startDate.getDate() === endDate.getDate()
}

// 날짜 비교하기(경과된 시간으로 비교하기)
function fCheck3() {
  let start = document.getElementById("date1").value;
  let end = document.getElementById("date2").value;

  const startDate = new Date(start);
  const endDate = new Date(end);

  // getTime() : 1/1000초
  let temp = endDate.getTime() - startDate.getTime();
  temp = temp / (60*60*24*1000) // 1/1000초를 날짜로 변경하기


  demo.innerHTML = "비교한 날짜는 " + temp.toFixed(0) + "일 차이가 남니다.";
}