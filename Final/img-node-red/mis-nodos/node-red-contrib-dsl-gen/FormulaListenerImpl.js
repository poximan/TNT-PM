const antlr4 = require('antlr4/index');
const FormulaLexer = require('./FormulaLexer');
const FormulaParser = require('./FormulaParser');
var FormulaListener = require('./FormulaListener').FormulaListener;

FormulaListenerImpl = function() {
  FormulaListener.call(this);
	return this;
};

FormulaListenerImpl.prototype = Object.create(FormulaListener.prototype);
FormulaListenerImpl.prototype.constructor = FormulaListenerImpl;

// Enter a parse tree produced by FormulaParser#operIf.
FormulaListener.prototype.enterOperIf = function(ctx) {
  console.log("entrando if!!!");
};

// Exit a parse tree produced by FormulaParser#operIf.
FormulaListener.prototype.exitOperIf = function(ctx) {
  console.log("saliendo if!!!");  
};

// Enter a parse tree produced by FormulaParser#operOr.
FormulaListener.prototype.enterOperOr = function(ctx) {
  console.log("entrando or!!!");
};

// Exit a parse tree produced by FormulaParser#operOr.
FormulaListener.prototype.exitOperOr = function(ctx) {
  console.log("saliendo or!!!");
};


// Enter a parse tree produced by FormulaParser#operAnd.
FormulaListener.prototype.enterOperAnd = function(ctx) {
  console.log("entrando and!!!");
};

// Exit a parse tree produced by FormulaParser#operAnd.
FormulaListener.prototype.exitOperAnd = function(ctx) {
  console.log("saliendo and!!!");
};



exports.FormulaListenerImpl = FormulaListenerImpl;
