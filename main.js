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

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        let $tags = document.getElementsByClassName("check_sub_window");
        for(let i = 0; i < $tags.length; i ++) {
            let $tag = $tags[i];
            $tag.checked = false;
        }
    }
});

function getFileContents($path) {
    let $xhr = new XMLHttpRequest();
    $xhr.open("GET", $path);
    $xhr.send();

    $xhr.onreadystatechange = () => {
        if ($xhr.readyState == 4) {}
    }
}