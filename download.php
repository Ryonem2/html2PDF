<?php

$postData = file_get_contents('php://input');
$jsondata = json_decode($postData);
echo $postData;
$data =  json_encode($jsondata->body);

echo $data;
?>