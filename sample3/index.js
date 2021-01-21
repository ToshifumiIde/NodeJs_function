setTimeout(() => {
  console.log("setTimeout()が実行されました");
}, 100);

console.log("global");

let end = (new Date()).getTime() + 500;
while(new Date().getTime() < end){
  console.log("処理中です");
}