let sum = 0;
console.time("timer1");
for (let i = 1; i <= 1000; i++) {
  sum += i;
}
console.timeEnd("timer1");