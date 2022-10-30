create TABLE welbex(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    publish_date TIMESTAMP NOT NULL DEFAULT NOW(),
    distance FLOAT
);