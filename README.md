<p align="center">
  <a href="http://52.78.227.11:8080/">
    <img src="cracker logo.svg" width="200"/>
  </a>
  <p align="center">
    Web service to help KAIST students share their internship experiences
    <br />
    <a href="http://52.78.227.11:8080/">
      Service
    </a>
    |
    <a href="https://youtu.be/TtzbhPZTAmM">
      Video
    </a>
    |
    <a href="https://www.notion.so/sunnynah/CS473-Final-Report-482077897d8042e3acda90f57d9747a0">
      Final Report
    </a>
  </p>
</p>


# 1. About
Cracker는 2019년 가을학기 CS473수업에서 진행된 프로젝트로, 카이스트 학생들을 위한 인턴십 후기 공유 플랫폼입니다.

[![](http://img.youtube.com/vi/TtzbhPZTAmM/0.jpg)](http://www.youtube.com/watch?v=TtzbhPZTAmM "")

# 2. Structure
Our project is mainly divided into three parts; frontend(client), backend(server), database.
```
Cracker
├── frontend
├── backend
└── database
```
### Front-end
Frontend page starts with main.js which calls router that views vue files in views folder. Components for views are in component folder.
> **Stack:** Vue.js
### Back-end
Backend starts with app.js which connects db and backend server. It calls the routers which handles RESTful api calls for data transmission.
> **Stack:** Express.js, Node.js
### Database
Database is implemented separately by mongodb.
> **Stack:** MongoDB

# 3. How to setup
### Only for your first start
```
$ cd SparklingFD
$ ./setup.sh
```
### to start FE
```
$ cd frontend
$ npm run serve
```
### to start BE
```
$ cd backend 
$ npm install 
$ npm start
```
