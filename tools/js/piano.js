$keyboard_sounds = {
    "a": "c4",
    "w": "cm4",
    "s": "d4",
    "e": "dm4",
    "d": "e4",
    "f": "f4",
    "t": "fm4",
    "g": "g4",
    "y": "gm4",
    "h": "a4",
    "u": "am4",
    "j": "b4",
    "k": "c5",
}

var $mousedown = false;

document.addEventListener("mousedown", function(e) {  
    e.preventDefault();  
    $mousedown = true;
    if (e.target && e.target.tagName.toLowerCase() == "piano-key") {
        let $keytag = e.target;
        let $sound = $keytag.getAttribute("sound");
        let $src = 'resources/sounds/piano/' + $sound + '.wav';
        let $audio = new Audio($src);
        $audio.play();
    }
});

document.addEventListener("mouseup", function(e) {
    $mousedown = false;
});

document.addEventListener('keypress', function(e) {
    let $key = e.key.toLowerCase();
    let $sound = $keyboard_sounds[$key];
    
    let $src = 'resources/sounds/piano/' + $sound + '.wav';
    let $audio = new Audio($src);
    $audio.play();
});

document.addEventListener('keydown', function(e) {
    let $key = e.key.toLowerCase();
    let $sound = $keyboard_sounds[$key];
    let $keytag = document.querySelector('piano-key[sound="' + $sound + '"]');
    if ($keytag.classList.contains('active')) return;
    $keytag.classList.add('active');
});

document.addEventListener('keyup', function(e) {
    let $key = e.key.toLowerCase();
    let $sound = $keyboard_sounds[$key];
    let $keytag = document.querySelector('piano-key[sound="' + $sound + '"]');
    if (!$keytag.classList.contains('active')) return;
    $keytag.classList.remove('active');
});

$keytags = document.querySelectorAll("piano-key");
$keytags.forEach($keytag => {
    console.log($keytag);
    $keytag.addEventListener("mouseenter", function(e) {
        if (!$mousedown) return;
        let $sound = $keytag.getAttribute("sound");
        let $src = 'resources/sounds/piano/' + $sound + '.wav';
        let $audio = new Audio($src);
        $audio.play();
        if ($keytag.classList.contains('active')) return;
        $keytag.classList.add('active');
    });
    $keytag.addEventListener("mouseleave", function(e) {
        if (!$keytag.classList.contains('active')) return;
        $keytag.classList.remove('active');
    });
});
