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

// Enter a parse tree produced by FormulaParser#formula.
FormulaListener.prototype.enterFormula = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#formula.
FormulaListener.prototype.exitFormula = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#operacion.
FormulaListener.prototype.enterOperacion = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#operacion.
FormulaListener.prototype.exitOperacion = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#operIf.
FormulaListener.prototype.enterOperIf = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#operIf.
FormulaListener.prototype.exitOperIf = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#operOr.
FormulaListener.prototype.enterOperOr = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#operOr.
FormulaListener.prototype.exitOperOr = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#operAnd.
FormulaListener.prototype.enterOperAnd = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#operAnd.
FormulaListener.prototype.exitOperAnd = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#comparacion.
FormulaListener.prototype.enterComparacion = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#comparacion.
FormulaListener.prototype.exitComparacion = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#operando.
FormulaListener.prototype.enterOperando = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#operando.
FormulaListener.prototype.exitOperando = function(ctx) {
};


exports.FormulaListenerImpl = FormulaListenerImpl;
