function forLoop(arr) {
  var s = '';
  for (let i = 1; i < 25; i++) {
    if (i > 1) {s = 's'}
    var str = `I am ${i} strange loop${s}.`;
    arr.push(str);
  }
  return arr;
}

function whileLoop(num) {
  let i = num;
  while (i > 0){ console.log(--i)}
  return 'done'
}