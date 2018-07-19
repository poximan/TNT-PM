const antlr4 = require('antlr4/index');
const FormulaLexer = require('./gramatica/FormulaLexer');
const FormulaParser = require('./gramatica/FormulaParser');
const FormulaListenerImpl = require('./FormulaListenerImpl').FormulaListenerImpl;

function procesar(input, cb) {

  var chars = new antlr4.InputStream(input)
  var lexer = new FormulaLexer.FormulaLexer(chars)
  var tokens  = new antlr4.CommonTokenStream(lexer)
  var parser = new FormulaParser.FormulaParser(tokens)

  parser.buildParseTrees = true
  var tree = parser.formula()

  var res = []
  var formula = new FormulaListenerImpl(res)

  antlr4.tree.ParseTreeWalker.DEFAULT.walk(formula, tree)
  cb(res.pop())
}

exports.procesar = procesar;
