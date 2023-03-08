function funcHell(callback) {
  callback();
}

funcHell(() => {
  console.log('1인척하는 익명함수');
  funcHell(() => {
    console.log('2인척하는 익명함수');
    funcHell(() => {
      console.log('3인척하는 익명함수');
    });
  });
});
