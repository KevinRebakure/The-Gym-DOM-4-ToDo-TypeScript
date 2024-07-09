"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = __importDefault(require("./actions/create"));
const interfaces_1 = require("./interfaces");
const form = document.getElementById("form");
const input = document.getElementById("input");
let count = 0;
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('submitted✅');
    (0, create_1.default)(interfaces_1.tasks, count, input.value, false);
    generateId();
    console.log(interfaces_1.tasks);
});
function generateId() {
    count++;
}
