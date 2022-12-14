BEGIN;

DROP TABLE IF EXISTS users, operations CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    balance INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE operations (
    id SERIAL PRIMARY KEY,
    amount DOUBLE PRECISION NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    user_id INTEGER NOT NULL
);


COMMIT;
