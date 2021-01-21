// console.log(JSON.stringify(process.env, null, 2));
// for (let i = 0; i < process.argv.length; i++) {
//   console.log(`${i} : ${process.argv[i]}`);
// }
console.log(`cwd():${process.cwd()}`);
console.log(`__dirname:${__dirname}`);

//実行環境の表示
console.log(process.platform);//darwin