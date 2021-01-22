"use strict";

{
  // console.log("hello world !");

  // const debug = "デバッグとは、作成したプログラムの誤り（バグ）を除去すること";
  // console.log(debug);
  // const mainDebug =
  //   "近年主流のデバッグは、統合開発環境（IDE）でブレークポイントを設置してデバッグする";
  // console.log(debug, mainDebug);
  // const reasonOfIDE = "いちいちコンソール表示させなくても状態が確認できる";
  // console.log(reasonOfIDE);

  // const importantThing = {
  //   breakpoint: "統合環境でデバックする際、一時的に動作を停止させる場所",
  //   typeOfDebug: [
  //     { stepOver: "メソッド内に入らず、1行ずつ実行" },
  //     { stepIn: "メソッドの中に入る" },
  //     { stepOut: "メソッド呼び出し元へ戻った次へ" },
  //   ],
  // };

  const parent = function(){
    console.log("parent() is called");
    let a = "a is local";
    child();
    console.log("parent() is executed");
  };

  let a = "a is global"
  const child = function(){
    console.log("child() is called");
    console.log("child() is executed");
    console.log(`「${a}」 is called 定義時のスコープを参照している`);
  };

  parent();

}
