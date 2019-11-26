Our project is mainly devided into three parts; client(frontend, vue), server(backend, express&nodejs), database(database, mongodb)
Frontend page starts with main.js which calls router that views vue files in views folder. Components for views are in component folder.
Backend starts with app.js which connects db and backend server. It calls the routers which handles RESTful api calls for data transmission.
Database is implemented separately by mongodb.

How to setup (Only for your first start)
```
cd SparklingFD
./setup.sh
```
How to start FE
```
cd frontend
npm run serve
```
How to start BE
```
cd backend 
npm install 
npm start
```
