INSERT INTO users (username, email, prime, prime_time, hash)
VALUES ($1, $2, $3, $4, $5)
RETURNING *;