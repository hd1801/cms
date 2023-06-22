step 1 - start db using this command 
```
docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -e MYSQL_DATABASE=cumsdbms -p 3306:3306 -d mysql:latest
```
step 2 - 
```npm i``` 

step 3 - copy cms.sql script and run it manually to create tables

step 4 - run seeds : ```node <path to seed.js files>``` 

step 5 - ``` npm run start ```



