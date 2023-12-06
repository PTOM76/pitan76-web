"use strict";

function hex2bin(hex) {
    return decodeURIComponent(hex.match(new RegExp(
        '[0-7][0-9A-F]|' +
        '[CD][2-90-F][89AB][0-9A-F]|' +
        'E0[AB][0-9A-F][89AB][0-9A-F]|' +
        'E[1-9A-C](?:[89AB][0-9A-F]){2}|' +
        'ED[89][0-9A-F][89AB][0-9A-F]|' +
        'E[E-F](?:[89AB][0-9A-F]){2}|' +
        'F0[9B][0-9A-F](?:[89AB][0-9A-F]){2}|' +
        'F[1-3](?:[89AB][0-9A-F]){3}|' +
        'F48[0-9A-F](?:[89AB][0-9A-F]){2}'
    , 'gi')).map(function (char) {
        return char.replace(/([0-9A-F]{2})/gi, '%$1');
    }).join(''));
}

function input(hex) {
    document.getElementById('text_out').value = "" + document.getElementById('text_out').value + hex2bin(hex);
    document.getElementById('text_view').innerHTML = document.getElementById('text_out').value;
}