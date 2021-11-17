function convertir() {
    var valor = parseFloat(document.getElementById("cantidad").value);
    document.getElementById("valor").innerHTML = valor;
    var de = document.getElementById("de").value;
    var a = document.getElementById("a").value;
    var dolar = 3877.00;
    var pmexicano = 187.88;
    var euro = 4441.88;
    var lesterlina = 5185.45;
    resultado = 0;
    //dolar a pmexicano
    if (de == 1 && a == 2) {
        resultado = valor * (dolar / pmexicano);
    }//dolar a pcolombiano
    else if (de == 1 && a == 3) {
        resultado = dolar * valor;
    }//dolar a euro
    else if (de == 1 && a == 4) {
        resultado = valor * (dolar / euro);
    }//dolar a lesterlina
    else if (de == 1 && a == 5) {
        resultado = valor * (dolar / lesterlina);
    }//pmexicano a dolar
    else if (de == 2 && a == 1) {
        resultado = valor * (pmexicano / dolar);
    }//pmexicano a pcolombiano
    else if (de == 2 && a == 3) {
        resultado = valor * pmexicano;
    }//pmexicano a eur
    else if (de == 2 && a == 4) {
        resultado = valor * (pmexicano / euro);
    }//pmexicano a lesterlina
    else if (de == 2 && a == 5) {
        resultado = valor * (pmexicano / lesterlina);
    }//pcolombiano a dolar
    else if (de == 3 && a == 1) {
        resultado = valor / dolar
    }//pcolombiano a pmexicano
    else if (de == 3 && a == 2) {
        resultado = valor / pmexicano
    }//pcolombiano a euro
    else if (de == 3 && a == 4) {
        resultado = valor / euro
    }//pcolombiano a lesterlina
    else if (de == 3 && a == 5) {
        resultado = valor / lesterlina
    }//euro a dolar
    else if (de == 4 && a == 1) {
        resultado = valor * (euro / dolar);
    }//euro a pmexicano
    else if (de == 4 && a == 2) {
        resultado = valor * (euro / pmexicano);
    }//euro a pcolombiano
    else if (de == 4 && a == 3) {
        resultado = valor * euro;
    }//euro a lesterlina
    else if (de == 4 && a == 5) {
        resultado = valor * (euro / lesterlina);
    }//lesterlina a dolar
    else if (de == 5 && a == 1) {
        resultado = valor * (lesterlina / dolar);
    }//lesterlina a pmexicano
    else if (de == 5 && a == 2) {
        resultado = valor * (lesterlina / pmexicano);
    }//lesterlina a pcolombiano
    else if (de == 5 && a == 3) {
        resultado = valor * lesterlina;
    }//lesterlina a euro
    else if (de == 5 && a == 4) {
        resultado = valor * (lesterlina / euro);
    }//en caso(de=a)
    else {
        resultado = valor;
    }
    document.getElementById("resultado").innerHTML = `$${resultado.toFixed(2)}`


}
