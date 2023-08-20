"use strict";
exports.__esModule = true;
exports.verifier = exports.users = void 0;
var pg_core_1 = require("drizzle-orm/pg-core");
exports.users = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    fullName: (0, pg_core_1.text)('full_name'),
    phone: (0, pg_core_1.varchar)('phone', { length: 256 })
});
exports.verifier = (0, pg_core_1.pgTable)('verifier', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    verified: (0, pg_core_1.boolean)('verified')
});
