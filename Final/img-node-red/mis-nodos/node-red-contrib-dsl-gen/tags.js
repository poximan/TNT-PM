var Excel = require("exceljs")

var tags_conocidos = []

actualizarTag = (cb) => {

  const pr = new Promise((resolve, reject) => {

    var workbook = new Excel.Workbook();
    workbook.xlsx.readFile("dominio/formulas.xlsx")
    .then(() => {

      var worksheet = workbook.getWorksheet(1);

      worksheet.getColumn('A')
      .eachCell({ includeEmpty: false }, (cell, rowNumber) => {
        tags_conocidos.push(cell.value)
      })
    })
    resolve(workbook)
  })
  cb(pr)
}

existeTag = (tag) => {
  if(tags_conocidos.includes(tag))
    return "existeTag"
  else{
    console.log(tag);
    return "noExisteTag"
  }
}

/*
------- ACCESO A PLANILLA
*/
const accesoPlanilla = {
  existeTag: (msg, cb) => {

    var xls_filas = []
    new Promise((resolve, reject) => {

      var workbook = new Excel.Workbook();
      workbook.xlsx.readFile("dominio/formulas.xlsx")
      .then(function() {

        var worksheet = workbook.getWorksheet(1);

        worksheet.getColumn('A')
        .eachCell({ includeEmpty: false }, (cell, rowNumber) => {
          if(msg.payload.tag == cell.value){

            var row = worksheet.getRow(rowNumber)

            if(msg.payload.valor === "true" || msg.payload.valor === "false")
              msg.payload.valor = (msg.payload.valor === "true")? 1 : 0;

            row.getCell('B').value = parseFloat(msg.payload.valor)

            xls_filas.push({
              tag: msg.payload.tag,
              B: row.getCell('B').value,
              C: row.getCell('C').value,
              formula: row.getCell('D').value.formula,
              attr: row.getCell('F').value
            })
            row.commit()
          }
        })
        resolve(workbook)
      })
    })
    .then((workbook) => {
      workbook.xlsx.writeFile("dominio/formulas.xlsx")
      cb(xls_filas)
    })
  },
  noExisteTag: (msg) => {
    console.log("no se reconoce tag obtenido desde uri mqtt");
  }
}

module.exports.actualizarTag = actualizarTag;
module.exports.existeTag = existeTag;
module.exports.accesoPlanilla = accesoPlanilla;
