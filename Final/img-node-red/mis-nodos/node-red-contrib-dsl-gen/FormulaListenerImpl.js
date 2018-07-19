const antlr4 = require('antlr4/index');
const FormulaLexer = require('./gramatica/FormulaLexer');
const FormulaParser = require('./gramatica/FormulaParser');
var FormulaListener = require('./gramatica/FormulaListener').FormulaListener;

FormulaListenerImpl = function(res) {
  this.res = res;
  FormulaListener.call(this);
	return this;
};

FormulaListenerImpl.prototype = Object.create(FormulaListener.prototype);
FormulaListenerImpl.prototype.constructor = FormulaListenerImpl;


// Enter a parse tree produced by FormulaParser#operIf.
FormulaListener.prototype.enterOperIf = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#operIf.
FormulaListener.prototype.exitOperIf = function(ctx) {

  const val = this.res.pop()
  const valV = trimChar(ctx.arg1.text, '\"')
  const valF = trimChar(ctx.arg2.text, '\"')

  if(val)
    this.res.push(valV)
  else
    this.res.push(valF)
};


// Enter a parse tree produced by FormulaParser#operOr.
FormulaListener.prototype.enterOperOr = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#operOr.
FormulaListener.prototype.exitOperOr = function(ctx) {

  const valV = this.res.pop()
  const valF = this.res.pop()

  this.res.push(valV || valF)
};


// Enter a parse tree produced by FormulaParser#operAnd.
FormulaListener.prototype.enterOperAnd = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#operAnd.
FormulaListener.prototype.exitOperAnd = function(ctx) {

  const valV = this.res.pop()
  const valF = this.res.pop()

  this.res.push(valV && valF)
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
  this.res.push(ctx.value);
};


// Enter a parse tree produced by FormulaParser#menor.
FormulaListener.prototype.enterMenor = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#menor.
FormulaListener.prototype.exitMenor = function(ctx) {
  this.res.push(ctx.value);
};


// Enter a parse tree produced by FormulaParser#mayori.
FormulaListener.prototype.enterMayori = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#mayori.
FormulaListener.prototype.exitMayori = function(ctx) {
  this.res.push(ctx.value);
};


// Enter a parse tree produced by FormulaParser#menori.
FormulaListener.prototype.enterMenori = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#menori.
FormulaListener.prototype.exitMenori = function(ctx) {
  this.res.push(ctx.value);
};


// Enter a parse tree produced by FormulaParser#igual.
FormulaListener.prototype.enterIgual = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#igual.
FormulaListener.prototype.exitIgual = function(ctx) {
  this.res.push(ctx.value);
};


// Enter a parse tree produced by FormulaParser#distinto.
FormulaListener.prototype.enterDistinto = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#distinto.
FormulaListener.prototype.exitDistinto = function(ctx) {
  this.res.push(ctx.value);
};


// Enter a parse tree produced by FormulaParser#operando.
FormulaListener.prototype.enterOperando = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#operando.
FormulaListener.prototype.exitOperando = function(ctx) {
};

/*
@param {string} topico
@param {string} char
*/
trimChar = (topico, char) => {
  if(topico.startsWith(char))
    topico = topico.slice(1)
  if(topico.endsWith(char))
    topico = topico.slice(0, -1)
  return topico;
}

exports.FormulaListenerImpl = FormulaListenerImpl;
