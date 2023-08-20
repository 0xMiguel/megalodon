"use strict";
exports.__esModule = true;
exports["default"] = {
    schema: "./src/db/schema.ts",
    driver: 'pg',
    out: '../../supabase/migrations',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL
    }
};
