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
    "o": "cm5",
    "l": "d5",
    "p": "dm5",
    ";": "e5",
    ":": "f5",
    "]": "fm5",
    "'": "g5",
    "]": "gm5",
}

// キャッシュさせるためにnew Audio()を使う。
// ただ、同じ音を同時に鳴らすことができないのでこれは使わない
$sound_audios = {
    "c4": new Audio('resources/sounds/piano/c4.wav'),
    "cm4": new Audio('resources/sounds/piano/cm4.wav'),
    "d4": new Audio('resources/sounds/piano/d4.wav'),
    "dm4": new Audio('resources/sounds/piano/dm4.wav'),
    "e4": new Audio('resources/sounds/piano/e4.wav'),
    "f4": new Audio('resources/sounds/piano/f4.wav'),
    "fm4": new Audio('resources/sounds/piano/fm4.wav'),
    "g4": new Audio('resources/sounds/piano/g4.wav'),
    "gm4": new Audio('resources/sounds/piano/gm4.wav'),
    "a4": new Audio('resources/sounds/piano/a4.wav'),
    "am4": new Audio('resources/sounds/piano/am4.wav'),
    "b4": new Audio('resources/sounds/piano/b4.wav'),
    "c5": new Audio('resources/sounds/piano/c5.wav'),
    "cm5": new Audio('resources/sounds/piano/cm5.wav'),
    "d5": new Audio('resources/sounds/piano/d5.wav'),
    "dm5": new Audio('resources/sounds/piano/dm5.wav'),
    "e5": new Audio('resources/sounds/piano/e5.wav'),
    "f5": new Audio('resources/sounds/piano/f5.wav'),
    "fm5": new Audio('resources/sounds/piano/fm5.wav'),
    "g5": new Audio('resources/sounds/piano/g5.wav'),
    "gm5": new Audio('resources/sounds/piano/gm5.wav'),
    "a5": new Audio('resources/sounds/piano/a5.wav'),
    "am5": new Audio('resources/sounds/piano/am5.wav'),
    "b5": new Audio('resources/sounds/piano/b5.wav'),
    "c6": new Audio('resources/sounds/piano/c6.wav'),
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
