
USE myvinyls;

INSERT INTO genre(genre_name) 
VALUES("Pop"),("Punk"),("Rock"),("Salsa"),("Jazz"),("Hip Hop"),("Reggae"),("Electronic"),("Blues"),("Country");

INSERT INTO vinyl (id_vinyl, album_name, artist_name, price, relase_date, id_genre)
VALUES 
(1, "Nevermind", "Nirvana", 6, '1992-05-12', 1),
(2, "Ensalada de Coño", "Tu Madre es Puta", 3, '2016-09-15', 2),
(3, "Matadero 5", "Taburete", 2, '2022-11-18', 3),
(4, "Thriller", "Michael Jackson", 8, '1982-11-30', 1),
(5, "London Calling", "The Clash", 7, '1979-12-14', 2),
(6, "Led Zeppelin IV", "Led Zeppelin", 9, '1971-11-08', 3),
(7, "Kind of Blue", "Miles Davis", 10, '1959-08-17', 4),
(8, "The Miseducation of Lauryn Hill", "Lauryn Hill", 12, '1998-08-25', 5),
(9, "Illmatic", "Nas", 11, '1994-04-19', 6),
(10, "Legend", "Bob Marley & The Wailers", 14, '1984-05-08', 7),
(11, "Discovery", "Daft Punk", 15, '2001-03-12', 8),
(12, "Kind of Blue", "Miles Davis", 10, '1959-08-17', 4),
(13, "Abbey Road", "The Beatles", 13, '1969-09-26', 1),
(14, "Back in Black", "AC/DC", 16, '1980-07-25', 3),
(15, "Rumours", "Fleetwood Mac", 17, '1977-02-04', 2),
(16, "The Dark Side of the Moon", "Pink Floyd", 18, '1973-03-01', 3),
(17, "Born to Run", "Bruce Springsteen", 20, '1975-08-25', 4),
(18, "OK Computer", "Radiohead", 19, '1997-05-21', 5),
(19, "Hunky Dory", "David Bowie", 21, '1971-12-17', 1),
(20, "The Wall", "Pink Floyd", 22, '1979-11-30', 3);



INSERT INTO user(id_user,user_name,user_password,user_city,user_rol) 
VALUES (1,"admin","$2a$10$GPNUaohCwqzt2NJkhW.hSOT6AaCzTSdABf/AUixF40N.ThJ7YyMgW","Vinylcity","admin");



SELECT * 
FROM user;
