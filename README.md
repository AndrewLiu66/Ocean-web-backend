# Website

current website url: http://52.43.62.252/

## Description

This repository contains all the <b>back-end</b> source code of the UW Ocean Data Lab data visualization tool. All the front-end codes are already produced within the build file, so it's ready to be used.

If you want to see the detailed React code for the front-end interface, please go to https://github.com/AndrewLiu66/Ocean-lab-frontend

## Development

To run this repository, please follow the steps below in your terminal:

1. creates and run a virtual environment

```
$ pipx install virtualenv
$ virtualenv -p python3 venv
$ source ./venv/bin/activate
```

2. download all the dependencies

```
$ pip install -r requirements.txt
```
3. run the website

```
$ python3 app.py
```
3. checkout the website (this link should appear in the terminal immediately after you run the project)

```
$ http://127.0.0.1:5000
```

## Tech Stack
- Backend: Python Flask
- Frontend: React(the build file produced by https://github.com/AndrewLiu66/Ocean-web)
