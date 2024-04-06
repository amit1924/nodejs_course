import EventEmitter from "events";

// Creating Instance of EventEmitter
const customEmitter = new EventEmitter();

// 1. on:listen/register for an event

customEmitter.on("response", (name, id) => {
  console.log(`user: ${name} id: ${id}`);
});
customEmitter.emit("response", "amit", 19);
customEmitter.emit("response", "arsh", 3);
// 2 once: listen/register for an event fire only once

customEmitter.once("response", (name, id) => {
  console.log(`user: ${name} id: ${id}`);
});
customEmitter.emit("response", "amit", 19);
customEmitter.emit("response", "arsh", 3);
// 3.emit:emit/call an event
