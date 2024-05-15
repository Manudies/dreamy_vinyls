
USE myvinyls;

INSERT INTO genre(genre_name) 
VALUES("Pop"),("Punk"),("Rock"),("Salsa");

INSERT INTO vinyl (id_vinyl,album_name,artist_name,price,relase_date,id_genre)
VALUES (1,"Nevermind","Nirvana",6,'1992-05-12',1),(2,"Ensalda de Coño","Tu Madre es Puta",3,'2016-09-15',2),(3,"Matadero 5","Taburete",2,'2022-11-18',3);



INSERT INTO user(id_user,user_name,user_password,user_city,user_rol) 
VALUES (1,"admin","$2a$10$GPNUaohCwqzt2NJkhW.hSOT6AaCzTSdABf/AUixF40N.ThJ7YyMgW","Vinylcity","admin");



SELECT * 
FROM user;
