CREATE TABLE `jobListing` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`location` text NOT NULL,
	`tags` text NOT NULL,
	`url` text NOT NULL,
	`company-name` text NOT NULL,
	`logo-url` text NOT NULL,
	`salary-options` text NOT NULL,
	`salary-min` integer,
	`salary-max` integer,
	`salary` integer,
	`salary-period` text,
	`promoted` integer DEFAULT 0 NOT NULL
);
