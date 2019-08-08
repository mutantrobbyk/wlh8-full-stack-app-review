insert into user_info (username, email)
values(${username}, ${email})
returning *;