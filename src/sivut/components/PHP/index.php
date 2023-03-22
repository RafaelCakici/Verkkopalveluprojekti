<?php
require "dbconnection.php";
$dbcon = createDbConnection();


//$sql = "CREATE TABLE Kastike(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(50) NOT NULL, textDescription VARCHAR(4000) PRIMARY KEY(id))";

//$sql = "INSERT INTO Tuutti (name) VALUES ('Suklaa'),('Mansikka'),('Kinuski'),('Vanilja')";

//$sql = "INSERT INTO Tuutti VALUES
('SKL_1','Suussa sulava suklaa','Mansikka' 100, 0.25, 24) ";

$dbcon ->exec($sql);

//testing//