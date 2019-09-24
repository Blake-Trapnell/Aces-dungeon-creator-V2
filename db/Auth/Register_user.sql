INSERT INTO users (username, email, dungeon_master, hash)
VALUES ($1, $2, $3, $4)
RETURNING *;