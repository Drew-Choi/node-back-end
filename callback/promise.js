// @ts-check

const promise = new Promise((resol, rej) => {
  const tetz = 'older';
  if (tetz === 'old') {
    setTimeout(() => {
      resol('tetz is old');
    }, 3000);
  } else {
    rej('tetz is getting old');
  }
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });
