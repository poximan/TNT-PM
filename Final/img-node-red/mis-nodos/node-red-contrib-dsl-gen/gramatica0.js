let arr_lexemas = [
    [ "operando", /^\w\d$/ ],
    [ "separador", /^,$/ ],
    [ "par abrir", /^\($/ ],
    [ "par cerrar", /^\)$/ ],
    [ "oper condic if", /^IF$/ ],
    [ "oper condic and", /^AND$/ ],
    [ "oper condic or", /^OR$/ ],
    [ "oper log mayor", /^>$/ ],
    [ "oper log menor", /^<$/ ],
    [ "oper log mayor igual", /^>=$/ ],
    [ "oper log menor igual", /^<=$/ ],
    [ "oper log igual", /^=$/ ],
    [ "oper log distinto", /^<>$/ ],
    [ "signo literal", /^"$/ ]
  ]

var lexemas = new Map(arr_lexemas);

evaluarExpresion = (xls_fila, cb) => {

  let expresion = []
  console.log(xls_fila.formula);

  // analisis lexico
  for (var i = 0, chr = ""; i < xls_fila.formula.length; i++) {

    chr += xls_fila.formula.charAt(i)
    lexemas.forEach((K, V) => {

      if(K.test(chr)){
        // caso especial literales
        if(chr == "\""){
          while((chr_sig = xls_fila.formula.charAt(++i)) != "\"")
            chr += chr_sig
          V = chr += chr_sig
        }
        chr = ""
        expresion.push({ K, V })
      }
    });
  }
  console.log(expresion);
}

module.exports.evaluarExpresion = evaluarExpresion;
