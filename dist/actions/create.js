"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createTask;
function createTask(_tasks, _id, _task, _completed) {
    _tasks.unshift({
        id: _id,
        task: _task,
        completed: _completed,
    });
}
