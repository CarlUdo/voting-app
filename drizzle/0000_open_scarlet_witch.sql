CREATE TABLE IF NOT EXISTS "represenatives" (
	"id" uuid PRIMARY KEY DEFAULT '6d3cf817-a27f-4c23-8d32-a0ebdcc7f2a9' NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	CONSTRAINT "represenatives_email_unique" UNIQUE("email")
);
