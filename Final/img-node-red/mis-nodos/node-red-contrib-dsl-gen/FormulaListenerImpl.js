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

// Exit a parse tree produced by FormulaParser#operOr.
FormulaListener.prototype.exitOperOr = function(ctx) {

  const valV = this.res.pop()
  const valF = this.res.pop()

  this.res.push(valV || valF)
};

// Exit a parse tree produced by FormulaParser#operAnd.
FormulaListener.prototype.exitOperAnd = function(ctx) {

  const valV = this.res.pop()
  const valF = this.res.pop()

  this.res.push(valV && valF)
};

// Exit a parse tree produced by FormulaParser#mayor.
FormulaListener.prototype.exitMayor = function(ctx) {
  this.res.push(ctx.value);
};

// Exit a parse tree produced by FormulaParser#menor.
FormulaListener.prototype.exitMenor = function(ctx) {
  this.res.push(ctx.value);
};

// Exit a parse tree produced by FormulaParser#mayori.
FormulaListener.prototype.exitMayori = function(ctx) {
  this.res.push(ctx.value);
};

// Exit a parse tree produced by FormulaParser#menori.
FormulaListener.prototype.exitMenori = function(ctx) {
  this.res.push(ctx.value);
};

// Exit a parse tree produced by FormulaParser#igual.
FormulaListener.prototype.exitIgual = function(ctx) {
  this.res.push(ctx.value);
};

// Exit a parse tree produced by FormulaParser#distinto.
FormulaListener.prototype.exitDistinto = function(ctx) {
  this.res.push(ctx.value);
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
