"use strict";

{
  //1.遅延実行メソッド（以下4種類）を利用して実行順を確認
  //setTimeout()
  //setImmediate()
  //process.nextTick()
  //Promise.resolve().then()

  setTimeout(() => {
    console.log("setTimeout()を実行");
  }, 0);

  setImmediate(() => {
    console.log("setImmediate()を実行");
  });

  process.nextTick(() => {
    console.log("nextTick()");
  });

  Promise.resolve().then(() => {
    console.log("Promise.resolve().then()");
  });
}
