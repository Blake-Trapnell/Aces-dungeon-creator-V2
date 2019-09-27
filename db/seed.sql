DROP TABLE users;
DROP TABLE promo_codes;
DROP TABLE skills;

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

CREATE TABLE skills (
skills_id SERIAL PRIMARY KEY,
sheet_id INT,
user_id INT,
acrobatics BOOLEAN,
arcana BOOLEAN,
athletics BOOLEAN,
deception BOOLEAN,
history BOOLEAN,
insight BOOLEAN,
intimidation BOOLEAN,
investigation BOOLEAN,
medicine BOOLEAN,
nature BOOLEAN,
perception BOOLEAN,
performance BOOLEAN,
persuassion BOOLEAN,
religion BOOLEAN,
sleight_of_hand BOOLEAN,
stealth BOOLEAN,
Survival BOOLEAN
);