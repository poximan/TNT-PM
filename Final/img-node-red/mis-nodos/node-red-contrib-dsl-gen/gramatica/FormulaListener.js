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


// Enter a parse tree produced by FormulaParser#operLogico.
FormulaListener.prototype.enterOperLogico = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#operLogico.
FormulaListener.prototype.exitOperLogico = function(ctx) {
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


// Enter a parse tree produced by FormulaParser#mayor.
FormulaListener.prototype.enterMayor = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#mayor.
FormulaListener.prototype.exitMayor = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#menor.
FormulaListener.prototype.enterMenor = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#menor.
FormulaListener.prototype.exitMenor = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#mayori.
FormulaListener.prototype.enterMayori = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#mayori.
FormulaListener.prototype.exitMayori = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#menori.
FormulaListener.prototype.enterMenori = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#menori.
FormulaListener.prototype.exitMenori = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#igual.
FormulaListener.prototype.enterIgual = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#igual.
FormulaListener.prototype.exitIgual = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#distinto.
FormulaListener.prototype.enterDistinto = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#distinto.
FormulaListener.prototype.exitDistinto = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#operando.
FormulaListener.prototype.enterOperando = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#operando.
FormulaListener.prototype.exitOperando = function(ctx) {
};



exports.FormulaListener = FormulaListener;