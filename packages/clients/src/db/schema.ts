import { pgTable, serial, text, varchar, boolean } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  phone: varchar('phone', { length: 256 }),
});

export const verifier = pgTable('verifier', {
  id: serial('id').primaryKey(),
  verified: boolean('verified')
});