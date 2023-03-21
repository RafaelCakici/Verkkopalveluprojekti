<?php
require "dbconnection.php";
$dbcon = createDbConnection();


//$sql = "CREATE TABLE product(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(50) NOT NULL, PRIMARY KEY(id))";

$sql = "INSERT INTO product (name) VALUES ('Tuutti'),('Strösseli'),('Jaatelokone'),('Kastike')";

$dbcon ->exec($sql);

//testing//