DROP TABLE users;
DROP TABLE promo_codes

CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(25),
email VARCHAR(100),
dungeon_master BOOLEAN,
prime BOOLEAN,
prime_time TEXT,
Hash TEXT
);

CREATE TABLE promo_codes (promo_id SERIAL PRIMARY KEY, promo_code TEXT, promo_time TEXT);