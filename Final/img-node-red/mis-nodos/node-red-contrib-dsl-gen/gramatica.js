const { procesar } = require("./antlr")

const OPER_IF = /^IF\((\w\d)(=|>|<|>=|<=|<>)(\w\d),\"(.+)\",\"(.+)\"\)$/;

evaluarExpresion = (xls_fila, cb) => {

  console.log(xls_fila.formula);
  procesar(xls_fila.formula)

  /*
  if(OPER_IF.test(xls_fila.formula))
    transformar(OPER_IF, xls_fila, (valor, attr) => {
      cb(valor, attr)
    }) */  
}

transformar = (EXP_REG, xls_fila, cb) => {

  let partes = EXP_REG.exec(xls_fila.formula)
  const valor = operadores[partes[2]](xls_fila.B, xls_fila.C, partes[4], partes[5])
  const attr = xls_fila.attr
  cb(valor, attr)
}

const operadores = {
  '>': function(a, b, ret_v, ret_f) {
    return (a > b)? ret_v : ret_f
  },
  '<': function(a, b, ret_v, ret_f) {
    return (a < b)? ret_v : ret_f
  },
  '<=': function(a, b, ret_v, ret_f) {
    return (a <= b)? ret_v : ret_f
  },
  '>=': function(a, b, ret_v, ret_f) {
    return (a >= b)? ret_v : ret_f
  },
  '=': function(a, b, ret_v, ret_f) {
    return (a == b)? ret_v : ret_f
  },
  '<>': function(a, b, ret_v, ret_f) {
    return (a != b)? ret_v : ret_f
  }
}

module.exports.evaluarExpresion = evaluarExpresion;
