// 사용할 모듈
// socketio, express, fs, nodemon
// 영화관 좌석 예약 만들기

const socketio = require("socket.io");
const express = require("express");
const fs = require("fs");

const app = express();

const PORT = 3006;

const server = app.listen(PORT, () => {
  console.log(`${PORT}번 포트 접속!`);
});

// 1은 좌석 0은 좌석이 아닌 공간 예약은 2로
let seats = [
  [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
];

// socket.io 생성 및 실행
const io = socketio(server);

app.get("/", (req, res) => {
  fs.readFile("movie_seat.html", (err, data) => {
    console.log("movie_seat page load");
    res.end(data.toString());
  });
});

app.get("/seats", (req, res) => {
  res.send(seats);
});

io.sockets.on("connection", (socket) => {
  // on('이벤트명',이벤트시 동작 함수)
  socket.on("reserve", (data) => {
    console.log(data);

    seats[data.y][data.x] = 2;
    io.sockets.emit("reserve", data);
  });
});
