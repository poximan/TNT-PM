// Generated from Formula.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FormulaListener = require('./FormulaListener').FormulaListener;
var grammarFileName = "Formula.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0011J\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003\u001a\n\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004.\n\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007?\n\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0002",
    "\u0002\u000b\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0002\u0004\u0004",
    "\u0002\u0006\u0006\b\b\u0003\u0002\f\u0011\u0002D\u0002\u0014\u0003",
    "\u0002\u0002\u0002\u0004\u0019\u0003\u0002\u0002\u0002\u0006-\u0003",
    "\u0002\u0002\u0002\b/\u0003\u0002\u0002\u0002\n4\u0003\u0002\u0002\u0002",
    "\f>\u0003\u0002\u0002\u0002\u000e@\u0003\u0002\u0002\u0002\u0010E\u0003",
    "\u0002\u0002\u0002\u0012G\u0003\u0002\u0002\u0002\u0014\u0015\u0005",
    "\u0004\u0003\u0002\u0015\u0003\u0003\u0002\u0002\u0002\u0016\u001a\u0005",
    "\u0006\u0004\u0002\u0017\u001a\u0005\b\u0005\u0002\u0018\u001a\u0005",
    "\n\u0006\u0002\u0019\u0016\u0003\u0002\u0002\u0002\u0019\u0017\u0003",
    "\u0002\u0002\u0002\u0019\u0018\u0003\u0002\u0002\u0002\u001a\u0005\u0003",
    "\u0002\u0002\u0002\u001b\u001c\u0007\t\u0002\u0002\u001c\u001d\u0007",
    "\u0003\u0002\u0002\u001d\u001e\u0005\f\u0007\u0002\u001e\u001f\u0007",
    "\u0004\u0002\u0002\u001f \u0007\u0007\u0002\u0002 !\u0007\u0004\u0002",
    "\u0002!\"\u0007\u0007\u0002\u0002\"#\u0007\u0005\u0002\u0002#.\u0003",
    "\u0002\u0002\u0002$%\u0007\t\u0002\u0002%&\u0007\u0003\u0002\u0002&",
    "\'\u0005\u0004\u0003\u0002\'(\u0007\u0004\u0002\u0002()\u0007\u0007",
    "\u0002\u0002)*\u0007\u0004\u0002\u0002*+\u0007\u0007\u0002\u0002+,\u0007",
    "\u0005\u0002\u0002,.\u0003\u0002\u0002\u0002-\u001b\u0003\u0002\u0002",
    "\u0002-$\u0003\u0002\u0002\u0002.\u0007\u0003\u0002\u0002\u0002/0\u0007",
    "\n\u0002\u000201\u0007\u0003\u0002\u000212\u0005\f\u0007\u000223\u0007",
    "\u0005\u0002\u00023\t\u0003\u0002\u0002\u000245\u0007\u000b\u0002\u0002",
    "56\u0007\u0003\u0002\u000267\u0005\f\u0007\u000278\u0007\u0005\u0002",
    "\u00028\u000b\u0003\u0002\u0002\u00029?\u0005\u000e\b\u0002:;\u0005",
    "\u000e\b\u0002;<\u0007\u0004\u0002\u0002<=\u0005\f\u0007\u0002=?\u0003",
    "\u0002\u0002\u0002>9\u0003\u0002\u0002\u0002>:\u0003\u0002\u0002\u0002",
    "?\r\u0003\u0002\u0002\u0002@A\u0005\u0010\t\u0002AB\u0005\u0012\n\u0002",
    "BC\u0005\u0010\t\u0002CD\b\b\u0001\u0002D\u000f\u0003\u0002\u0002\u0002",
    "EF\t\u0002\u0002\u0002F\u0011\u0003\u0002\u0002\u0002GH\t\u0003\u0002",
    "\u0002H\u0013\u0003\u0002\u0002\u0002\u0005\u0019->"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "','", "')'", null, null, null, "'IF'", 
                     "'OR'", "'AND'", "'>'", "'<'", "'>='", "'<='", "'='", 
                     "'<>'" ];

var symbolicNames = [ null, null, null, null, "CELDA", "PALABRA", "LITERAL", 
                      "IF", "OR", "AND", "MAYOR", "MENOR", "MAYOR_IGUAL", 
                      "MENOR_IGUAL", "IGUAL", "DISTINTO" ];

var ruleNames =  [ "formula", "operacion", "operIf", "operOr", "operAnd", 
                   "condicional", "comparacion", "operando", "operador" ];

function FormulaParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

FormulaParser.prototype = Object.create(antlr4.Parser.prototype);
FormulaParser.prototype.constructor = FormulaParser;

Object.defineProperty(FormulaParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

FormulaParser.EOF = antlr4.Token.EOF;
FormulaParser.T__0 = 1;
FormulaParser.T__1 = 2;
FormulaParser.T__2 = 3;
FormulaParser.CELDA = 4;
FormulaParser.PALABRA = 5;
FormulaParser.LITERAL = 6;
FormulaParser.IF = 7;
FormulaParser.OR = 8;
FormulaParser.AND = 9;
FormulaParser.MAYOR = 10;
FormulaParser.MENOR = 11;
FormulaParser.MAYOR_IGUAL = 12;
FormulaParser.MENOR_IGUAL = 13;
FormulaParser.IGUAL = 14;
FormulaParser.DISTINTO = 15;

FormulaParser.RULE_formula = 0;
FormulaParser.RULE_operacion = 1;
FormulaParser.RULE_operIf = 2;
FormulaParser.RULE_operOr = 3;
FormulaParser.RULE_operAnd = 4;
FormulaParser.RULE_condicional = 5;
FormulaParser.RULE_comparacion = 6;
FormulaParser.RULE_operando = 7;
FormulaParser.RULE_operador = 8;

function FormulaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_formula;
    return this;
}

FormulaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormulaContext.prototype.constructor = FormulaContext;

FormulaContext.prototype.operacion = function() {
    return this.getTypedRuleContext(OperacionContext,0);
};

FormulaContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterFormula(this);
	}
};

FormulaContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitFormula(this);
	}
};




FormulaParser.FormulaContext = FormulaContext;

FormulaParser.prototype.formula = function() {

    var localctx = new FormulaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, FormulaParser.RULE_formula);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 18;
        this.operacion();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperacionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_operacion;
    return this;
}

OperacionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperacionContext.prototype.constructor = OperacionContext;

OperacionContext.prototype.operIf = function() {
    return this.getTypedRuleContext(OperIfContext,0);
};

OperacionContext.prototype.operOr = function() {
    return this.getTypedRuleContext(OperOrContext,0);
};

OperacionContext.prototype.operAnd = function() {
    return this.getTypedRuleContext(OperAndContext,0);
};

OperacionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterOperacion(this);
	}
};

OperacionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitOperacion(this);
	}
};




FormulaParser.OperacionContext = OperacionContext;

FormulaParser.prototype.operacion = function() {

    var localctx = new OperacionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, FormulaParser.RULE_operacion);
    try {
        this.state = 23;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FormulaParser.IF:
            this.enterOuterAlt(localctx, 1);
            this.state = 20;
            this.operIf();
            break;
        case FormulaParser.OR:
            this.enterOuterAlt(localctx, 2);
            this.state = 21;
            this.operOr();
            break;
        case FormulaParser.AND:
            this.enterOuterAlt(localctx, 3);
            this.state = 22;
            this.operAnd();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperIfContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_operIf;
    return this;
}

OperIfContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperIfContext.prototype.constructor = OperIfContext;

OperIfContext.prototype.IF = function() {
    return this.getToken(FormulaParser.IF, 0);
};

OperIfContext.prototype.condicional = function() {
    return this.getTypedRuleContext(CondicionalContext,0);
};

OperIfContext.prototype.PALABRA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FormulaParser.PALABRA);
    } else {
        return this.getToken(FormulaParser.PALABRA, i);
    }
};


OperIfContext.prototype.operacion = function() {
    return this.getTypedRuleContext(OperacionContext,0);
};

OperIfContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterOperIf(this);
	}
};

OperIfContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitOperIf(this);
	}
};




FormulaParser.OperIfContext = OperIfContext;

FormulaParser.prototype.operIf = function() {

    var localctx = new OperIfContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, FormulaParser.RULE_operIf);
    try {
        this.state = 43;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 25;
            this.match(FormulaParser.IF);
            this.state = 26;
            this.match(FormulaParser.T__0);
            this.state = 27;
            this.condicional();
            this.state = 28;
            this.match(FormulaParser.T__1);
            this.state = 29;
            this.match(FormulaParser.PALABRA);
            this.state = 30;
            this.match(FormulaParser.T__1);
            this.state = 31;
            this.match(FormulaParser.PALABRA);
            this.state = 32;
            this.match(FormulaParser.T__2);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 34;
            this.match(FormulaParser.IF);
            this.state = 35;
            this.match(FormulaParser.T__0);
            this.state = 36;
            this.operacion();
            this.state = 37;
            this.match(FormulaParser.T__1);
            this.state = 38;
            this.match(FormulaParser.PALABRA);
            this.state = 39;
            this.match(FormulaParser.T__1);
            this.state = 40;
            this.match(FormulaParser.PALABRA);
            this.state = 41;
            this.match(FormulaParser.T__2);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperOrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_operOr;
    return this;
}

OperOrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperOrContext.prototype.constructor = OperOrContext;

OperOrContext.prototype.OR = function() {
    return this.getToken(FormulaParser.OR, 0);
};

OperOrContext.prototype.condicional = function() {
    return this.getTypedRuleContext(CondicionalContext,0);
};

OperOrContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterOperOr(this);
	}
};

OperOrContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitOperOr(this);
	}
};




FormulaParser.OperOrContext = OperOrContext;

FormulaParser.prototype.operOr = function() {

    var localctx = new OperOrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, FormulaParser.RULE_operOr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 45;
        this.match(FormulaParser.OR);
        this.state = 46;
        this.match(FormulaParser.T__0);
        this.state = 47;
        this.condicional();
        this.state = 48;
        this.match(FormulaParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperAndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_operAnd;
    return this;
}

OperAndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperAndContext.prototype.constructor = OperAndContext;

OperAndContext.prototype.AND = function() {
    return this.getToken(FormulaParser.AND, 0);
};

OperAndContext.prototype.condicional = function() {
    return this.getTypedRuleContext(CondicionalContext,0);
};

OperAndContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterOperAnd(this);
	}
};

OperAndContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitOperAnd(this);
	}
};




FormulaParser.OperAndContext = OperAndContext;

FormulaParser.prototype.operAnd = function() {

    var localctx = new OperAndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, FormulaParser.RULE_operAnd);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this.match(FormulaParser.AND);
        this.state = 51;
        this.match(FormulaParser.T__0);
        this.state = 52;
        this.condicional();
        this.state = 53;
        this.match(FormulaParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CondicionalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_condicional;
    return this;
}

CondicionalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CondicionalContext.prototype.constructor = CondicionalContext;

CondicionalContext.prototype.comparacion = function() {
    return this.getTypedRuleContext(ComparacionContext,0);
};

CondicionalContext.prototype.condicional = function() {
    return this.getTypedRuleContext(CondicionalContext,0);
};

CondicionalContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterCondicional(this);
	}
};

CondicionalContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitCondicional(this);
	}
};




FormulaParser.CondicionalContext = CondicionalContext;

FormulaParser.prototype.condicional = function() {

    var localctx = new CondicionalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, FormulaParser.RULE_condicional);
    try {
        this.state = 60;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 55;
            this.comparacion();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 56;
            this.comparacion();
            this.state = 57;
            this.match(FormulaParser.T__1);
            this.state = 58;
            this.condicional();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ComparacionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_comparacion;
    this.pri = null; // OperandoContext
    this.seg = null; // OperandoContext
    return this;
}

ComparacionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComparacionContext.prototype.constructor = ComparacionContext;

ComparacionContext.prototype.operador = function() {
    return this.getTypedRuleContext(OperadorContext,0);
};

ComparacionContext.prototype.operando = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OperandoContext);
    } else {
        return this.getTypedRuleContext(OperandoContext,i);
    }
};

ComparacionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterComparacion(this);
	}
};

ComparacionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitComparacion(this);
	}
};




FormulaParser.ComparacionContext = ComparacionContext;

FormulaParser.prototype.comparacion = function() {

    var localctx = new ComparacionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, FormulaParser.RULE_comparacion);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        localctx.pri = this.operando();
        this.state = 63;
        this.operador();
        this.state = 64;
        localctx.seg = this.operando();
         console.log((localctx.pri===null ? null : this._input.getText(new antlr4.Interval(localctx.pri.start,localctx.pri.stop)))); console.log((localctx.seg===null ? null : this._input.getText(new antlr4.Interval(localctx.seg.start,localctx.seg.stop)))); 
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperandoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_operando;
    return this;
}

OperandoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperandoContext.prototype.constructor = OperandoContext;

OperandoContext.prototype.CELDA = function() {
    return this.getToken(FormulaParser.CELDA, 0);
};

OperandoContext.prototype.LITERAL = function() {
    return this.getToken(FormulaParser.LITERAL, 0);
};

OperandoContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterOperando(this);
	}
};

OperandoContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitOperando(this);
	}
};




FormulaParser.OperandoContext = OperandoContext;

FormulaParser.prototype.operando = function() {

    var localctx = new OperandoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, FormulaParser.RULE_operando);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        _la = this._input.LA(1);
        if(!(_la===FormulaParser.CELDA || _la===FormulaParser.LITERAL)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperadorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_operador;
    return this;
}

OperadorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperadorContext.prototype.constructor = OperadorContext;

OperadorContext.prototype.MAYOR = function() {
    return this.getToken(FormulaParser.MAYOR, 0);
};

OperadorContext.prototype.MENOR = function() {
    return this.getToken(FormulaParser.MENOR, 0);
};

OperadorContext.prototype.MAYOR_IGUAL = function() {
    return this.getToken(FormulaParser.MAYOR_IGUAL, 0);
};

OperadorContext.prototype.MENOR_IGUAL = function() {
    return this.getToken(FormulaParser.MENOR_IGUAL, 0);
};

OperadorContext.prototype.IGUAL = function() {
    return this.getToken(FormulaParser.IGUAL, 0);
};

OperadorContext.prototype.DISTINTO = function() {
    return this.getToken(FormulaParser.DISTINTO, 0);
};

OperadorContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterOperador(this);
	}
};

OperadorContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitOperador(this);
	}
};




FormulaParser.OperadorContext = OperadorContext;

FormulaParser.prototype.operador = function() {

    var localctx = new OperadorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, FormulaParser.RULE_operador);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 69;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FormulaParser.MAYOR) | (1 << FormulaParser.MENOR) | (1 << FormulaParser.MAYOR_IGUAL) | (1 << FormulaParser.MENOR_IGUAL) | (1 << FormulaParser.IGUAL) | (1 << FormulaParser.DISTINTO))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.FormulaParser = FormulaParser;
