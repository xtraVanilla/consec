"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shelljs_1 = __importDefault(require("shelljs"));
function wasmExec(func, funcArgs) {
    const args = funcArgs.map((arg) => "'" + arg + "'").join();
    const result = (0, shelljs_1.default)(`node ../wasm_exec.js ../main.wasm ${func} ${args}`, {
        silent: true,
    });
    return result.stdout;
}
function add(a, b) {
    return wasmExec("add", [a, b]);
}
exports.default = add;
