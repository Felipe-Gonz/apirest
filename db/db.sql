CREATE DATABASE IF NOT EXISTS utecdb2022;

USE utecdb2022;

CREATE TABLE producto (
	id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
    precio INT(11) DEFAULT NULL,
    existencias INT(11) DEFAULT NULL,
    PRIMARY KEY(id)
    );
    
DESCRIBE producto;

INSERT INTO producto VALUES
	(1, 'PC Lenovo', 1200, 1),
    (2, 'PC DELL', 1000, 22),
    (3, 'PC ASUS', 700, 30);

SELECT * FROM producto;