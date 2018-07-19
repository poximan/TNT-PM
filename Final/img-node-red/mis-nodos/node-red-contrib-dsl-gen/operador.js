const operar = {
  mayor = (arg1, arg2) => {
    return parseFloat(arg1) > parseFloat(arg2)
  },
  menor = (arg1, arg2) => {
    return parseFloat(arg1) < parseFloat(arg2)
  },
  mayori = (arg1, arg2) => {
    return parseFloat(arg1) >= parseFloat(arg2)
  },
  menori = (arg1, arg2) => {
    return parseFloat(arg1) <= parseFloat(arg2)
  },
  igual = (arg1, arg2) => {
    return parseFloat(arg1) == parseFloat(arg2)
  },
  distinto = (arg1, arg2) => {
    return parseFloat(arg1) != parseFloat(arg2)
  }
}

exports.operar = operar;
