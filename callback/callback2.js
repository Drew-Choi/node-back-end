// @ts-check

// function func1(callback) {
//   console.log('1번 함수');

//   function fakeFunc3() {
//     console.log('3번인척하는 함수');
//   }

//   callback(fakeFunc3);
// }

// function func2(callback) {
//   console.log('2번 함수');
//   callback();
// }

// function func3() {
//   console.log('3번 함수');
// }

// func1(func2);

function multiplication(number, callback) {
  console.log('계산 중 입니다.');
  let answer = 0;
  setTimeout(function () {
    answer = number * number;
    callback(answer);
  }, 2000);
}

function say(result) {
  console.log(result);
}

multiplication(3, say);
