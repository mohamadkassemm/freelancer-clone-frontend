<?php
include("connect.php");

$name= $_POST["full-name"]
$email= $_POST["email"]
$phoneNumber= $_POST["phone-number"]
$messages= $_POST["messages"]

$query = "INSERT INTO articles(name, author) VALUE (" . $name .", ?)";

?>


