// 설치 파일
// init / express / fs / socket.io

const express = require("express");
const fs = require("fs");
const socketio = require("socket.io");
const PORT = 3007;
const app = express();

const server = app.listen(PORT, () => {
  console.log(`${PORT}번 포트 연결!`);
});
let seats1 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
let seats2 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
let seats3 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
let seats4 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
let _seats = [seats1, seats2, seats3, seats4];
let tc = 0;
const io = socketio(server);

app.get("/", (req, res) => {
  fs.readFile("page_bus.html", (err, data) => {
    console.log("page load");
    res.end(data.toString());
  });
});

const seat_ctr = app.get("/seats", (req, res) => {
  // app.get("/time/:1", (reqst, result) => {
  //   res.send(seats1);
  // });
  // app.get("/time/:2", (reqst, result) => {
  //   res.send(seats2);
  // });
  console.log(_seats[tc]);
  res.send(_seats[tc]);
});

io.sockets.on("connection", (socket) => {
  console.log("소켓연결성공");
  socket.on("time", (data) => {
    tc = data.tc;
    seat_ctr;
    console.log(tc);
  });
  socket.on("bus_res", (data) => {
    console.log("예약데이터 넘김");
    console.log(data);
    let seats = _seats[tc];
    console.log(seats);
    seats[data.y][data.x] = 2;
    io.sockets.emit("bus_res", data);
  });
});
