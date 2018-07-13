const OPER_IF = /^IF\((\w\d)(=|>|<|>=|<=|<>)(\w\d),\"(.+)\",\"(.+)\"\)$/;

evaluar = (xls_fila, cb) => {

  if(OPER_IF.test(xls_fila.formula)){
    let partes = OPER_IF.exec(xls_fila.formula)

    const valor = operadores[partes[2]](xls_fila.B, xls_fila.C, partes[4], partes[5])
    const attr = xls_fila.attr
    cb(valor, attr)
  }
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

module.exports.evaluar = evaluar;
