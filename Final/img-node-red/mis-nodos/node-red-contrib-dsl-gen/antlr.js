const antlr4 = require('antlr4/index');
const FormulaLexer = require('./FormulaLexer');
const FormulaParser = require('./FormulaParser');
const FormulaListenerImpl = require('./FormulaListenerImpl').FormulaListenerImpl;

function procesar(input) {

  var chars = new antlr4.InputStream(input);
  var lexer = new FormulaLexer.FormulaLexer(chars);
  var tokens  = new antlr4.CommonTokenStream(lexer);
  var parser = new FormulaParser.FormulaParser(tokens);

  parser.buildParseTrees = true;
  var tree = parser.formula();
  var formula = new FormulaListenerImpl();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(formula, tree);  
}

exports.procesar = procesar;
