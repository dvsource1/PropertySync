-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "pst3_ad" (
	"id" integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY (sequence name "pst3_ad_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" varchar(256),
	"price" real,
	"address" text,
	"bedrooms" integer,
	"bathrooms" integer,
	"house_size" real,
	"land_size" real,
	"timestamp" timestamp,
	"area" varchar(256),
	"city" varchar(256),
	"contactCard" varchar(512),
	"phoneNumbers" varchar(512),
	"url" varchar(512),
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone,
	"reference" varchar(256) NOT NULL,
	"slug" text,
	"description" text,
	"account" varchar(256),
	"images" text
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "account_idx" ON "pst3_ad" USING btree ("account");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "phone_numbers_idx" ON "pst3_ad" USING btree ("phoneNumbers");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "reference_idx" ON "pst3_ad" USING btree ("reference");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "slug_idx" ON "pst3_ad" USING btree ("slug");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "title_idx" ON "pst3_ad" USING btree ("title");
*/