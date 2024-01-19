function transcribir() {
    var textoEntrada = document.getElementById("inputTexto").value;
    var brailleOutput = traducirATextoBraille(textoEntrada);
    document.getElementById("brailleOutput").innerHTML = brailleOutput;
}

function traducirATextoBraille(texto) {
    var brailleMap = {
        'a': '⠁', 'b': '⠃', 'c': '⠉', 'd': '⠙', 'e': '⠑',
        'f': '⠋', 'g': '⠛', 'h': '⠓', 'i': '⠊', 'j': '⠚',
        'k': '⠅', 'l': '⠇', 'm': '⠍', 'n': '⠝', 'o': '⠕',
        'p': '⠏', 'q': '⠟', 'r': '⠗', 's': '⠎', 't': '⠞',
        'u': '⠥', 'v': '⠧', 'w': '⠺', 'x': '⠭', 'y': '⠽',
        'z': '⠵', 'á': '⠷', 'é': '⠮', 'í': '⠾', 'ó': '⠬',
        'ú': '⠳', 'ü': '⠿', 'ñ': '⠻', '0': '⠼⠚', '1': '⠼⠁', '2': '⠼⠃', '3': '⠼⠉',
        '4': '⠼⠙', '5': '⠼⠑', '6': '⠼⠋', '7': '⠼⠛',
        '8': '⠼⠓', '9': '⠼⠊'
    };

    return texto.toLowerCase().split('').map(function(caracter) {
        return brailleMap[caracter] || caracter;
    }).join('');
}
