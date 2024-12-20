"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogInput = exports.createBlogInput = exports.signinInput = exports.singupInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.singupInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(8).max(30),
    name: zod_1.default.string().optional()
});
//type inference 
exports.signinInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(8).max(30),
});
exports.createBlogInput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
});
exports.updateBlogInput = zod_1.default.object({
    id: zod_1.default.string(),
    title: zod_1.default.string(),
    content: zod_1.default.string(),
});