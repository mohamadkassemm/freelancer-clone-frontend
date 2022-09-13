<?php
include("connect.php");

$query = $mysqli->prepare("SELECT messages FROM `contact-me`");
$query->execute();
$array = $query->get_result();

$response = [];

while($a = $array->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);
echo $json;


?>


