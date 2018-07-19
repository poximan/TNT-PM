// Generated from Formula.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by FormulaParser.
function FormulaListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

FormulaListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
FormulaListener.prototype.constructor = FormulaListener;

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



exports.FormulaListener = FormulaListener;