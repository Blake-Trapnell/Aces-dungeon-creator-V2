DROP TABLE users;
DROP TABLE promo_codes;
DROP TABLE background_skills;
DROP TABLE class_race_skills;

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

CREATE TABLE background_skills (
skills_id SERIAL PRIMARY KEY,
skill TEXT,
acoylte BOOLEAN,
charlatan BOOLEAN,
criminal_spy BOOLEAN,
entertainer BOOLEAN,
folk_hero BOOLEAN,
guild_artisan BOOLEAN,
hermit BOOLEAN,
noble BOOLEAN,
outlander BOOLEAN,
sage BOOLEAN,
sailor BOOLEAN,
soldier BOOLEAN,
urchin BOOLEAN
);

CREATE TABLE class_race_skills (
skills_id SERIAL PRIMARY KEY,
skill TEXT,
barbarian BOOLEAN,
bard BOOLEAN,
cleric BOOLEAN,
druid BOOLEAN,
fighter BOOLEAN,
monk BOOLEAN,
paladin BOOLEAN,
ranger BOOLEAN,
rogue BOOLEAN,
sorcerer BOOLEAN,
warlock BOOLEAN,
wizard BOOLEAN
);

CREATE TABLE racial_traits (
trait_id SERIAL PRIMARY KEY, 
race INT, 
sub_race INT, 
trait VARCHAR(50), 
trait_text text);

INSERT INTO background_skills (skill, acoylte, charlatan, criminal_spy, entertainer, folk_hero, guild_artisan, hermit, noble, outlander, sage, sailor, Soldier, Urchin)
VALUES ('cro', FALSE, FALSE, FALSE, TRUE , FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE),
('anim', FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE),
('arca', FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, FALSE, FALSE),
('athl', FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, TRUE, TRUE, FALSE),
('dece', FALSE, TRUE, TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE),
('hist', FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE , FALSE, TRUE , FALSE, FALSE, FALSE),
('insi', TRUE, FALSE, FALSE, FALSE, FALSE, TRUE , FALSE, FALSE, FALSE, FALSE, FALSE, TRUE , FALSE),
('inti', FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE),
('inve', FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE ),
('medi', FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE , FALSE, FALSE, FALSE, FALSE, FALSE, FALSE ),
('natu', FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE ),
('perc', FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE , FALSE, FALSE ),
('perf', FALSE, FALSE, FALSE, TRUE , FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE ),
('pers', FALSE, FALSE, FALSE, FALSE, FALSE, TRUE , FALSE, TRUE , FALSE, FALSE, FALSE, FALSE, FALSE ),
('reli', TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE ),
('slei', FALSE, TRUE , FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE ),
('stea', FALSE, FALSE, TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE ),
('surv', FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, FALSE, FALSE, TRUE , FALSE, FALSE, FALSE, FALSE);


INSERT INTO class_race_skills (skill, barbarian, bard, cleric, druid, fighter, monk, paladin, ranger, rogue, sorcerer, warlock, wizard)
VALUES ('acro', FALSE, TRUE, FALSE, FALSE, TRUE, TRUE, FALSE, FALSE, TRUE, FALSE, FALSE, FALSE),
('anim', TRUE, TRUE, FALSE, TRUE, TRUE, FALSE, FALSE, TRUE, FALSE, FALSE, FALSE, FALSE),
('arca', FALSE, TRUE, FALSE, TRUE, TRUE, FALSE, FALSE, TRUE, FALSE, FALSE, FALSE, FALSE),
('athl', True, true, false, false, true, true, true, true, true, false, false, false),
('dece', false, true, false, false, false, false, false, false, true, true, true, false),
('hist', false, true, true, false, true, true, false, false, false, false, true, true),
('insi', false, true, true, true, true, true, true, true, true, true, false, true),
('inti', true, true, false, false, true, false, true, false, true, true, true, false),
('inve', false, true, false, false, false, false, false, true, true, false, true, true),
('medi', false, true, true, true, false, false, true, false, false, false, false, true),
('natu', true, true, false, true, false, false, false, true, false, false, true, false),
('perc', true, true, false, true, true, false, false, true, true, false, false, false),
('perf', false, true, false, false, false, false, false, false, true, false, false, false),
('pers', false, true, true, false, false, false, true, false, true, true, false, false),
('reli', false, true, true, true, false, true, true, false, false, true, true, true),
('slei', false, true, false, false, false, false, false, false, true, false, false, false),
('stea', false, true, false, false, false, true, false, true, true, false, false, false),
('surv', true, true, false, true, true, false, false, true, false, false, false, false);