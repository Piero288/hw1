<?php
    $app_id='e0b5722a';
    $app_key='ab63381a993524f6288c0312a477e8dd';
    $curl= curl_init();
    curl_setopt($curl, CURLOPT_URL, "https://api.edamam.com/search?q=infuse&app_id=".$app_id."&app_key=".$app_key);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($curl);
    curl_close($curl);
    echo $result;
?>