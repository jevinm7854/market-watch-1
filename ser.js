const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const splinenum = () => {
return [
{
id: 1,
x: "Sun",
y: Number((((Math.random() * 100) % 10) + 5).toFixed(1)),
},
{
id: 2,
x: "Mon",
y: Number((((Math.random() * 100) % 10) + 15).toFixed(1)),
},
{
id: 3,
x: "Tue",
y: Number((((Math.random() * 100) % 10) + 15).toFixed(1)),
},
{
id: 4,
x: "Wed",
y: Number((((Math.random() * 100) % 10) + 15).toFixed(1)),
},
{
id: 5,
x: "Thu",
y: Number((((Math.random() * 100) % 10) + 15).toFixed(1)),
},
{
id: 6,
x: "Fri",
y: Number((((Math.random() * 100) % 10) + 15).toFixed(1)),
},
{
id: 7,
x: "Sat",
y: Number((((Math.random() * 100) % 10) + 5).toFixed(1)),
},
];
};

const num = () => {
// x = Math.random() * 100;
// return x.toFixed(2);
return [
{
id: 1,
ticker: "US",
Change: Math.random() * 100 - 50,
Net: Math.random() * 100 - 50,
},
{
id: 2,
ticker: "IN",
Change: Math.random() * 100 - 50,
Net: Math.random() * 100 - 50,
},
{
id: 3,
ticker: "FR",
Change: Math.random() * 100 - 50,
Net: Math.random() * 100 - 50,
},
{
id: 4,
ticker: "MH",
Change: Math.random() * 100 - 50,
Net: Math.random() * 100 - 50,
},
{
id: 5,
ticker: "GJ",
Change: Math.random() * 100 - 50,
Net: Math.random() * 100 - 50,
},
{
id: 6,
ticker: "UP",
Change: Math.random() * 100 - 50,
Net: Math.random() * 100 - 50,
},
{
id: 7,
ticker: "MP",
Change: Math.random() * 100 - 50,
Net: Math.random() * 100 - 50,
},
{
id: 8,
ticker: "EU",
Change: Math.random() * 100 - 50,
Net: Math.random() * 100 - 50,
},
{
id: 9,
ticker: "AU",
Change: Math.random() * 100 - 50,
Net: Math.random() * 100 - 50,
},
{
id: 10,
ticker: "TN",
Change: Math.random() * 100 - 50,
Net: Math.random() * 100 - 50,
},
{
id: 11,
ticker: "NZ",
Change: Math.random() * 100 - 50,
Net: Math.random() * 100 - 50,
},
{
id: 12,
ticker: "HR",
Change: Math.random() * 100 - 50,
Net: Math.random() * 100 - 50,
},
];
};

const io = new Server(server, {
cors: {
origin: "*",
methods: ["GET", "POST"],
},
});

io.on("connection", (socket) => {
socket.on("sendServer", (data) => {
// console.log("connect id", socket.id);
setInterval(() => {
socket.emit("fromServer", num());
}, 2000);
});
socket.on("disconnect", (data) => {
// console.log("Socket disconnect", socket.id);
});

socket.on("fromSpline", (data) => {
setInterval(() => {
// console.log("Hii");
socket.emit("fromServerSpline", splinenum());
}, 5000);
});
});

server.listen(3005, () => {
console.log("SERVER IS RUNNING");
});
 