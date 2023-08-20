ALTER TABLE "verifier" ADD COLUMN "verified" boolean;--> statement-breakpoint
ALTER TABLE "verifier" DROP COLUMN IF EXISTS "full_name";--> statement-breakpoint
ALTER TABLE "verifier" DROP COLUMN IF EXISTS "phone";