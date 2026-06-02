/* Data schemas for ai-saas */

CREATE TABLE users (
    user_id UUID PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE subscriptions (
    sub_id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(user_id),
    plan VARCHAR(50),
    start_date DATE,
    end_date DATE,
    status VARCHAR(20)
);

-- Repository: https://github.com/nikidav9/ai-saas