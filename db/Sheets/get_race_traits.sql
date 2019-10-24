SELECT trait, trait_text FROM racial_traits
WHERE race = $1 AND sub_race = 0;