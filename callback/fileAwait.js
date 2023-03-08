const fs = require('fs').promises;

async function main() {
  let data = await fs.readFile('test-1.txt', 'utf-8');
  console.log(data.toString());
  data = await fs.readFile('test-2.txt', 'utf-8');
  console.log(data.toString());
  data = await fs.readFile('test-3.txt', 'utf-8');
  console.log(data.toString());
  data = await fs.readFile('test-4.txt', 'utf-8');
  console.log(data.toString());
}

main();
