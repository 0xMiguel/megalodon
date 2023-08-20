CREATE TABLE IF NOT EXISTS "verifier" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text,
	"phone" varchar(256)
);
