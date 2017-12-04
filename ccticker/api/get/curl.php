<?php

$ch = curl_init("https://api.coinmarketcap.com/v1/ticker/?limit=30");
$fp = fopen("/var/www/portfolio/app/market/api/data/ticker.json", "w");

// wget https://api.coinmarketcap.com/v1/ticker/?limit=30 -O /var/www/portfolio/app/market/api/data/ticker.json

curl_setopt($ch, CURLOPT_FILE, $fp);
curl_setopt($ch, CURLOPT_HEADER, 0);

curl_exec($ch);
curl_close($ch);
fclose($fp);

//
// $ch = curl_init("http://www.example.com/");
// $fp = fopen("example_homepage.txt", "w");
//
// curl_setopt($ch, CURLOPT_FILE, $fp);
// curl_setopt($ch, CURLOPT_HEADER, 0);
//
// curl_exec($ch);
// curl_close($ch);
// fclose($fp);


 ?>
