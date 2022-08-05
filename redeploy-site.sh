#!/bin/bash

#automatic deployment using docker container
cd portfolio-website
git fetch && git reset origin/main --hard
docker compose -f docker-compose.prod.yml down
docker compose -f docker-compose.prod.yml up -d --build


# #automatic deployment using systemctl server
# cd ~/portfolio-website
# git fetch && git reset origin/main --hard
# python -m venv python3-virtualenv
# source python3-virtualenv/bin/activate
# pip3 install -U pip #for bug fix when downloading cryptography library
# pip install -r requirements.txt
# systemctl daemon-reload
# systemctl restart myportfolio

# #automatic deployment script using tmux
# tmux kill-session
# cd ~/portfolio-website
# git fetch && git reset origin/main --hard
# python -m venv python3-virtualenv
# source python3-virtualenv/bin/activate
# pip3 install -U pip #for bug fix when downloading cryptography library
# pip install -r requirements.txt
# tmux new -d -s flask-host-session
# tmux send-keys -t flask-host-session "source python3-virtualenv/bin/activate" ENTER
# tmux send-keys -t flask-host-session "cd ~/portfolio-website" ENTER
# tmux send-keys -t flask-host-session "flask run --host=0.0.0.0" ENTER
