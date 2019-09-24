DROP TABLE users

CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(25),
email VARCHAR(100),
dungeon_master BOOLEAN,
Hash TEXT
);
