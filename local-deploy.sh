#!/bin/sh

python -m venv python3-virtualenv
source python3-virtualenv/bin/activate
pip install -r requirements.txt
flask run
