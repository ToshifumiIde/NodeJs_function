let { echo, area } = require("./methods");
//methods.jsから読み込み
let Lamborghini = require("./lamborghini");
let Config = require("./config");

echo("メッセージ");
console.log(area(10, 20));

let car = new Lamborghini("lamborghini");

car.echo();
car.drive();

console.log(Config.url);
console.log(Config.retry);
console.log(JSON.stringify(Config));