#!/bin/sh

python -m venv python3-virtualenv
source python3-virtualenv/bin/activate
pip install -r requirements.txt

if [ $# -eq 0 ]
then
    flask run
elif [ $1 == 0 ]
then
    flask run
elif [ $1 == 1 ]
then
    tmux new -d -s flask-host-session
    tmux send-keys -t flask-host-session "source python3-virtualenv/bin/activate" ENTER
    tmux send-keys -t flask-host-session "cd ~/workspace/mlh/portfolio-website" ENTER
    tmux send-keys -t flask-host-session "flask run" ENTER
fi
