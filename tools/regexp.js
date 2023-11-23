// License: CC0-1.0 (https://creativecommons.org/publicdomain/zero/1.0/deed.ja)
function preg_match(pattern, subject, matches = null) {
    let patternMatches;
    let flags = "";
    if (patternMatches = pattern.match("^\/(.*)\/([a-zA-Z]*)$")) {
        flags = patternMatches[2];
        pattern = patternMatches[1];
    }
    const regex = new RegExp(pattern, flags);
    const result = subject.match(regex);
    if (matches !== null) {
        // ...演算子で配列を展開してpushする (matches.push(result[0], result[1], ...) と同じ)
        matches.push(...result);
    }
    return result !== null ? result.length : false;
}

function regexp_checkbtn() {
    let $result_tag = document.getElementById("result");
    $result_tag.innerHTML = "";

    let $pattern = document.getElementById("pattern").value;
    let $subject = document.getElementById("subject").value;
    let $matches = [];

    let $result = preg_match($pattern, $subject, $matches);

    let $output = "";

    if (!$pattern.match("^\/.*\/[a-zA-Z]*$")) $pattern = "/" + $pattern + "/";
    $output += "PHPコード: " + "<input id=\"php_code\" style=\"width:100%;height:22px; font-size: 15px;\" value=\"preg_match('" + $pattern + "', '" + $subject + "', $matches);\" disabled />" + "<br />";
    $output += "JSコード: " + "<input id=\"js_code\" style=\"width:100%;height:22px; font-size: 15px;\" value=\"$matches = '" + $subject + "'.match(" + $pattern + ");\" disabled />" + "<br /><br />";

    if ($result) {
        $output += "マッチしました。<br />";
        $output += "マッチした回数: " + $result + "<br />";
        if ($matches.length > 0) {
            $output += "マッチした文字列: <br />"
            $matches.forEach(function($match, $index) { 
                $output += "$matches[" + $index + "]: " + $match + "<br />";
            });
        }
    } else {
        $output += "マッチしませんでした。<br />";
    }
    $result_tag.innerHTML = $output;
}