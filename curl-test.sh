#!/bin/sh

curl --request GET 'http://localhost:5000/api/timeline_post' \
--form 'name="name1"' \
--form 'email="email1"' \
--form 'content="content1"'

curl --location --request POST 'http://127.0.0.1:5000/api/timeline_post' \
--form 'name="name7"' \
--form 'email="email7"' \
--form 'content="content7"'