const { procesar } = require("./antlr")

celdasPorNumeros = (xls_fila) => {

  xls_fila.formula = xls_fila.formula.replace(/B\d/, xls_fila.B, "g");
  xls_fila.formula = xls_fila.formula.replace(/C\d/, xls_fila.C, "g");
}

evaluarExpresion = (xls_fila, cb) => {

  console.log(xls_fila.formula);
  procesar(xls_fila.formula, (valor) => {

    const attr = xls_fila.attr
    cb(valor, attr)
  })
}

module.exports.celdasPorNumeros = celdasPorNumeros;
module.exports.evaluarExpresion = evaluarExpresion;
