drop table if exists credentials;
drop table if exists transfer;
drop table if exists account;
drop table if exists user_info;


Create table user_info(
user_id SERIAL PRIMARY KEY,
username VARCHAR(50),
email VARCHAR(100)
);


CREATE TABLE credentials(
user_id INT,
hash TEXT
);

CREATE TABLE account(
account_id SERIAL PRIMARY KEY,
user_id INT REFERENCES user_info(user_id),
account_balance INT
);

CREATE TABLE transfer(
transfer_id SERIAL PRIMARY KEY,
account_id INT REFERENCES account(account_id),
transfer_type VARCHAR(20),
transfer_amount INT
);