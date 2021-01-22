let EventEmitter = require("events");

let ee = new EventEmitter(); //インスタンスの生成

ee.on("event", () => {
  console.log("event 1st");
});
ee.on("event", () => {
  console.log("event 2nd");
});
ee.on("event", () => {
  console.log("event 3rd");
});

ee.emit("event");
