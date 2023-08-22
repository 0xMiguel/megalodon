"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.supabaseClient = void 0;
var supabase_js_1 = require("@supabase/supabase-js");
var dotenv_1 = require("dotenv");
var path_1 = require("path");
var process_1 = __importDefault(require("process"));
var envPath = (0, path_1.resolve)(__dirname, process_1["default"].env.NODE_ENV === 'development' ? "../../.env.local" : "../../.env.production");
(0, dotenv_1.config)({ path: envPath });
// eslint-disable-next-line turbo/no-undeclared-env-vars
var supabaseApiUrl = process_1["default"].env.SUPABASE_API;
// eslint-disable-next-line turbo/no-undeclared-env-vars
var supabaseAnonKey = process_1["default"].env.SUPABASE_ANON_KEY;
// Supabase client for server-side applications
exports.supabaseClient = (0, supabase_js_1.createClient)(supabaseApiUrl, supabaseAnonKey);
