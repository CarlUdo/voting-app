CREATE TABLE IF NOT EXISTS "public_voters" (
	"id" uuid PRIMARY KEY DEFAULT 'b1d15213-f68c-420c-b1f7-080aed75e72b' NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	CONSTRAINT "public_voters_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "represenatives" (
	"id" uuid PRIMARY KEY DEFAULT '2cc925b0-12e6-403a-b2a2-1f771a373f04' NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	CONSTRAINT "represenatives_email_unique" UNIQUE("email")
);
