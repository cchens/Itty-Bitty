DROP SCHEMA IF EXISTS ittybitty_dev CASCADE;
CREATE SCHEMA ittybitty_dev;
SET search_path TO ittybitty_dev;


CREATE TABLE users (
	user_id serial PRIMARY KEY,
	provider varchar(20),
	id text UNIQUE,
	displayName text NOT NULL,
	name json,
	email varchar(50) NOT NULL,
	photo text DEFAULT NULL,
	achievements json,
	password text NOT NULL
);

CREATE TABLE achievements (
	achievement_id serial PRIMARY KEY,
	name varchar(200) UNIQUE,
	description text DEFAULT NULL
);

CREATE TABLE levels (
	level_id serial PRIMARY KEY,
	description text DEFAULT NULL,
	type varchar(50) NOT NULL,
	level_num integer NOT NULL,
	difficulty integer NOT NULL,
	content json NOT NULL
);

CREATE TABLE scores (
	user_id integer REFERENCES users(user_id) NOT NULL,
	level_id integer REFERENCES levels(level_id) NOT NULL,
	score integer NOT NULL,
	PRIMARY KEY (user_id, level_id)
);

CREATE TABLE questions (
	question_id serial PRIMARY KEY,
	level_id integer REFERENCES levels(level_id) NOT NULL,
	question text NOT NULL,
	choice1 text,
	choice2 text,
	choice3 text,
	choice4 text,
	answer text NOT NULL,
	explanation text NOT NULL
);
