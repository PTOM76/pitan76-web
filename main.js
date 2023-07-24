function age(ymd){
    $today = new Date();
    $y = $today.getYear(); if($y < 1900) $y += 1900;
    $m = $today.getMonth() + 1;
    $d = $today.getDate();
    $today = $y * 10000 + $m * 100 + $d;
    document.write(Math.floor(($today - ymd) / 10000));
}

function copy2board($str) {
    navigator.clipboard.writeText($str);
    alert("クリップボードへコピー: " + $str);
}