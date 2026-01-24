ALTER TABLE `blog_posts` MODIFY COLUMN `tags` text;--> statement-breakpoint
ALTER TABLE `blog_posts` MODIFY COLUMN `authorName` varchar(255);--> statement-breakpoint
ALTER TABLE `blog_posts` MODIFY COLUMN `authorRole` varchar(255);--> statement-breakpoint
ALTER TABLE `payments` MODIFY COLUMN `metadata` text;