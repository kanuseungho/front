// test16.js
'use strict';
let su1 = 10;
let su2 = -20;
let su3 = 3.14;
let su4 = -3.14;
let su5 = -31.4;
let num = 0;

num = Math.min(su1, su2);
num = Math.min(su1, su2, su3, su4, su5);
num = Math.max(su1, su2, su3, su4, su5);

num = Math.ceil(su3);   // 올림
num = Math.floor(su3);  // 내림
num = Math.ceil(su4);   // 올림
num = Math.floor(su4);  // 내림

num = Math.trunc(su3);  // 무조건 자르기
num = Math.trunc(su4);  // 무조건 자르기

num = Math.pow(2,5);       // 지수값

num = Math.sqrt(4);       // 제곱근

num = Math.abs(su4);         // 절대값

num = Math.random();      // 난수( 0 <= x < 1  실수형난수)
num = Math.random()*10;
num = parseInt(Math.random()*10);
num = parseInt(Math.random()*10) + 1;
num = Math.floor(Math.random()*10) + 1;

num = Math.floor(Math.random()*45) + 1;   // 1~45까지의 난수
// num = Math.floor(Math.random()*(10+5-1)) + 5;   // 5~14까지의 난수

// 소수 반올림 : toFixed(), round()
num = su3.toFixed(1);   // 매개변수가 없으면 정수반올림, 매개변수가 있으면 소수이하 반올림.
num = su3.toFixed(2);

num = Math.round(su3);  // 정수부만 반올림결과를 보고자 한다.

demo.innerHTML = num;