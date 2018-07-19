// Generated from Formula.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FormulaListener = require('./FormulaListener').FormulaListener;
var grammarFileName = "Formula.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0011b\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003\u0018\n\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u0004.\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0005\u0007^\n\u0007\u0003\b\u0003\b\u0003\b\u0002\u0002\t\u0002\u0004",
    "\u0006\b\n\f\u000e\u0002\u0003\u0004\u0002\u0006\u0006\b\b\u0002b\u0002",
    "\u0010\u0003\u0002\u0002\u0002\u0004\u0017\u0003\u0002\u0002\u0002\u0006",
    "-\u0003\u0002\u0002\u0002\b/\u0003\u0002\u0002\u0002\n7\u0003\u0002",
    "\u0002\u0002\f]\u0003\u0002\u0002\u0002\u000e_\u0003\u0002\u0002\u0002",
    "\u0010\u0011\u0005\u0004\u0003\u0002\u0011\u0003\u0003\u0002\u0002\u0002",
    "\u0012\u0013\u0005\u0006\u0004\u0002\u0013\u0014\b\u0003\u0001\u0002",
    "\u0014\u0018\u0003\u0002\u0002\u0002\u0015\u0018\u0005\b\u0005\u0002",
    "\u0016\u0018\u0005\n\u0006\u0002\u0017\u0012\u0003\u0002\u0002\u0002",
    "\u0017\u0015\u0003\u0002\u0002\u0002\u0017\u0016\u0003\u0002\u0002\u0002",
    "\u0018\u0005\u0003\u0002\u0002\u0002\u0019\u001a\u0007\t\u0002\u0002",
    "\u001a\u001b\u0007\u0003\u0002\u0002\u001b\u001c\u0005\f\u0007\u0002",
    "\u001c\u001d\u0007\u0004\u0002\u0002\u001d\u001e\u0007\u0007\u0002\u0002",
    "\u001e\u001f\u0007\u0004\u0002\u0002\u001f \u0007\u0007\u0002\u0002",
    " !\u0007\u0005\u0002\u0002!\"\b\u0004\u0001\u0002\".\u0003\u0002\u0002",
    "\u0002#$\u0007\t\u0002\u0002$%\u0007\u0003\u0002\u0002%&\u0005\u0004",
    "\u0003\u0002&\'\u0007\u0004\u0002\u0002\'(\u0007\u0007\u0002\u0002(",
    ")\u0007\u0004\u0002\u0002)*\u0007\u0007\u0002\u0002*+\u0007\u0005\u0002",
    "\u0002+,\b\u0004\u0001\u0002,.\u0003\u0002\u0002\u0002-\u0019\u0003",
    "\u0002\u0002\u0002-#\u0003\u0002\u0002\u0002.\u0007\u0003\u0002\u0002",
    "\u0002/0\u0007\n\u0002\u000201\u0007\u0003\u0002\u000212\u0005\f\u0007",
    "\u000223\u0007\u0004\u0002\u000234\u0005\f\u0007\u000245\u0007\u0005",
    "\u0002\u000256\b\u0005\u0001\u00026\t\u0003\u0002\u0002\u000278\u0007",
    "\u000b\u0002\u000289\u0007\u0003\u0002\u00029:\u0005\f\u0007\u0002:",
    ";\u0007\u0004\u0002\u0002;<\u0005\f\u0007\u0002<=\u0007\u0005\u0002",
    "\u0002=>\b\u0006\u0001\u0002>\u000b\u0003\u0002\u0002\u0002?@\u0005",
    "\u000e\b\u0002@A\u0007\f\u0002\u0002AB\u0005\u000e\b\u0002BC\b\u0007",
    "\u0001\u0002C^\u0003\u0002\u0002\u0002DE\u0005\u000e\b\u0002EF\u0007",
    "\r\u0002\u0002FG\u0005\u000e\b\u0002GH\b\u0007\u0001\u0002H^\u0003\u0002",
    "\u0002\u0002IJ\u0005\u000e\b\u0002JK\u0007\u000e\u0002\u0002KL\u0005",
    "\u000e\b\u0002LM\b\u0007\u0001\u0002M^\u0003\u0002\u0002\u0002NO\u0005",
    "\u000e\b\u0002OP\u0007\u000f\u0002\u0002PQ\u0005\u000e\b\u0002QR\b\u0007",
    "\u0001\u0002R^\u0003\u0002\u0002\u0002ST\u0005\u000e\b\u0002TU\u0007",
    "\u0010\u0002\u0002UV\u0005\u000e\b\u0002VW\b\u0007\u0001\u0002W^\u0003",
    "\u0002\u0002\u0002XY\u0005\u000e\b\u0002YZ\u0007\u0011\u0002\u0002Z",
    "[\u0005\u000e\b\u0002[\\\b\u0007\u0001\u0002\\^\u0003\u0002\u0002\u0002",
    "]?\u0003\u0002\u0002\u0002]D\u0003\u0002\u0002\u0002]I\u0003\u0002\u0002",
    "\u0002]N\u0003\u0002\u0002\u0002]S\u0003\u0002\u0002\u0002]X\u0003\u0002",
    "\u0002\u0002^\r\u0003\u0002\u0002\u0002_`\t\u0002\u0002\u0002`\u000f",
    "\u0003\u0002\u0002\u0002\u0005\u0017-]"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "','", "')'", null, null, null, "'IF'", 
                     "'OR'", "'AND'", "'>'", "'<'", "'>='", "'<='", "'='", 
                     "'<>'" ];

var symbolicNames = [ null, null, null, null, "CELDA", "PALABRA", "NUMERO", 
                      "IF", "OR", "AND", "MAYOR", "MENOR", "MAYORI", "MENORI", 
                      "IGUAL", "DISTINTO" ];

var ruleNames =  [ "formula", "operacion", "operIf", "operOr", "operAnd", 
                   "comparacion", "operando" ];

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
FormulaParser.NUMERO = 6;
FormulaParser.IF = 7;
FormulaParser.OR = 8;
FormulaParser.AND = 9;
FormulaParser.MAYOR = 10;
FormulaParser.MENOR = 11;
FormulaParser.MAYORI = 12;
FormulaParser.MENORI = 13;
FormulaParser.IGUAL = 14;
FormulaParser.DISTINTO = 15;

FormulaParser.RULE_formula = 0;
FormulaParser.RULE_operacion = 1;
FormulaParser.RULE_operIf = 2;
FormulaParser.RULE_operOr = 3;
FormulaParser.RULE_operAnd = 4;
FormulaParser.RULE_comparacion = 5;
FormulaParser.RULE_operando = 6;

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
    this.value = null
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
        this.state = 14;
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
    this.value = null
    this._operIf = null; // OperIfContext
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
        this.state = 21;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FormulaParser.IF:
            this.enterOuterAlt(localctx, 1);
            this.state = 16;
            localctx._operIf = this.operIf();
             console.log(localctx._operIf.value);
            break;
        case FormulaParser.OR:
            this.enterOuterAlt(localctx, 2);
            this.state = 19;
            this.operOr();
            break;
        case FormulaParser.AND:
            this.enterOuterAlt(localctx, 3);
            this.state = 20;
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
    this.value = null
    this.res = null; // ComparacionContext
    this.arg1 = null; // Token
    this.arg2 = null; // Token
    this._operacion = null; // OperacionContext
    return this;
}

OperIfContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperIfContext.prototype.constructor = OperIfContext;

OperIfContext.prototype.IF = function() {
    return this.getToken(FormulaParser.IF, 0);
};

OperIfContext.prototype.comparacion = function() {
    return this.getTypedRuleContext(ComparacionContext,0);
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
            this.state = 23;
            this.match(FormulaParser.IF);
            this.state = 24;
            this.match(FormulaParser.T__0);
            this.state = 25;
            localctx.res = this.comparacion();
            this.state = 26;
            this.match(FormulaParser.T__1);
            this.state = 27;
            localctx.arg1 = this.match(FormulaParser.PALABRA);
            this.state = 28;
            this.match(FormulaParser.T__1);
            this.state = 29;
            localctx.arg2 = this.match(FormulaParser.PALABRA);
            this.state = 30;
            this.match(FormulaParser.T__2);
             console.log((localctx.res===null ? null : this._input.getText(new antlr4.Interval(localctx.res.start,localctx.res.stop)))) ; ((localctx.res===null ? null : this._input.getText(new antlr4.Interval(localctx.res.start,localctx.res.stop))) == true)? (localctx.arg1===null ? null : localctx.arg1.text) : (localctx.arg2===null ? null : localctx.arg2.text);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 33;
            this.match(FormulaParser.IF);
            this.state = 34;
            this.match(FormulaParser.T__0);
            this.state = 35;
            localctx._operacion = this.operacion();
            this.state = 36;
            this.match(FormulaParser.T__1);
            this.state = 37;
            localctx.arg1 = this.match(FormulaParser.PALABRA);
            this.state = 38;
            this.match(FormulaParser.T__1);
            this.state = 39;
            localctx.arg2 = this.match(FormulaParser.PALABRA);
            this.state = 40;
            this.match(FormulaParser.T__2);
            localctx.value =  ((localctx._operacion===null ? null : this._input.getText(new antlr4.Interval(localctx._operacion.start,localctx._operacion.stop))))? (localctx.arg1===null ? null : localctx.arg1.text) : (localctx.arg2===null ? null : localctx.arg2.text)
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
    this.value = null
    this.arg1 = null; // ComparacionContext
    this.arg2 = null; // ComparacionContext
    return this;
}

OperOrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperOrContext.prototype.constructor = OperOrContext;

OperOrContext.prototype.OR = function() {
    return this.getToken(FormulaParser.OR, 0);
};

OperOrContext.prototype.comparacion = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ComparacionContext);
    } else {
        return this.getTypedRuleContext(ComparacionContext,i);
    }
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
        localctx.arg1 = this.comparacion();
        this.state = 48;
        this.match(FormulaParser.T__1);
        this.state = 49;
        localctx.arg2 = this.comparacion();
        this.state = 50;
        this.match(FormulaParser.T__2);
        localctx.value =  (localctx.arg1===null ? null : this._input.getText(new antlr4.Interval(localctx.arg1.start,localctx.arg1.stop))) || (localctx.arg2===null ? null : this._input.getText(new antlr4.Interval(localctx.arg2.start,localctx.arg2.stop)))
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
    this.value = null
    this.arg1 = null; // ComparacionContext
    this.arg2 = null; // ComparacionContext
    return this;
}

OperAndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperAndContext.prototype.constructor = OperAndContext;

OperAndContext.prototype.AND = function() {
    return this.getToken(FormulaParser.AND, 0);
};

OperAndContext.prototype.comparacion = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ComparacionContext);
    } else {
        return this.getTypedRuleContext(ComparacionContext,i);
    }
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
        this.state = 53;
        this.match(FormulaParser.AND);
        this.state = 54;
        this.match(FormulaParser.T__0);
        this.state = 55;
        localctx.arg1 = this.comparacion();
        this.state = 56;
        this.match(FormulaParser.T__1);
        this.state = 57;
        localctx.arg2 = this.comparacion();
        this.state = 58;
        this.match(FormulaParser.T__2);
        localctx.value =  (localctx.arg1===null ? null : this._input.getText(new antlr4.Interval(localctx.arg1.start,localctx.arg1.stop))) && (localctx.arg2===null ? null : this._input.getText(new antlr4.Interval(localctx.arg2.start,localctx.arg2.stop)))
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
    this.value = null
    this.arg1 = null; // OperandoContext
    this.arg2 = null; // OperandoContext
    return this;
}

ComparacionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComparacionContext.prototype.constructor = ComparacionContext;

ComparacionContext.prototype.MAYOR = function() {
    return this.getToken(FormulaParser.MAYOR, 0);
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

ComparacionContext.prototype.MENOR = function() {
    return this.getToken(FormulaParser.MENOR, 0);
};

ComparacionContext.prototype.MAYORI = function() {
    return this.getToken(FormulaParser.MAYORI, 0);
};

ComparacionContext.prototype.MENORI = function() {
    return this.getToken(FormulaParser.MENORI, 0);
};

ComparacionContext.prototype.IGUAL = function() {
    return this.getToken(FormulaParser.IGUAL, 0);
};

ComparacionContext.prototype.DISTINTO = function() {
    return this.getToken(FormulaParser.DISTINTO, 0);
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
    this.enterRule(localctx, 10, FormulaParser.RULE_comparacion);
    try {
        this.state = 91;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 61;
            localctx.arg1 = this.operando();
            this.state = 62;
            this.match(FormulaParser.MAYOR);
            this.state = 63;
            localctx.arg2 = this.operando();
            localctx.value =  (localctx.arg1===null ? null : this._input.getText(new antlr4.Interval(localctx.arg1.start,localctx.arg1.stop))) > (localctx.arg2===null ? null : this._input.getText(new antlr4.Interval(localctx.arg2.start,localctx.arg2.stop)))
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 66;
            localctx.arg1 = this.operando();
            this.state = 67;
            this.match(FormulaParser.MENOR);
            this.state = 68;
            localctx.arg2 = this.operando();
            localctx.value =  (localctx.arg1===null ? null : this._input.getText(new antlr4.Interval(localctx.arg1.start,localctx.arg1.stop))) < (localctx.arg2===null ? null : this._input.getText(new antlr4.Interval(localctx.arg2.start,localctx.arg2.stop)))
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 71;
            localctx.arg1 = this.operando();
            this.state = 72;
            this.match(FormulaParser.MAYORI);
            this.state = 73;
            localctx.arg2 = this.operando();
            localctx.value =  (localctx.arg1===null ? null : this._input.getText(new antlr4.Interval(localctx.arg1.start,localctx.arg1.stop))) >= (localctx.arg2===null ? null : this._input.getText(new antlr4.Interval(localctx.arg2.start,localctx.arg2.stop)))
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 76;
            localctx.arg1 = this.operando();
            this.state = 77;
            this.match(FormulaParser.MENORI);
            this.state = 78;
            localctx.arg2 = this.operando();
            localctx.value =  (localctx.arg1===null ? null : this._input.getText(new antlr4.Interval(localctx.arg1.start,localctx.arg1.stop))) <= (localctx.arg2===null ? null : this._input.getText(new antlr4.Interval(localctx.arg2.start,localctx.arg2.stop)))
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 81;
            localctx.arg1 = this.operando();
            this.state = 82;
            this.match(FormulaParser.IGUAL);
            this.state = 83;
            localctx.arg2 = this.operando();
            localctx.value =  (localctx.arg1===null ? null : this._input.getText(new antlr4.Interval(localctx.arg1.start,localctx.arg1.stop))) == (localctx.arg2===null ? null : this._input.getText(new antlr4.Interval(localctx.arg2.start,localctx.arg2.stop)))
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 86;
            localctx.arg1 = this.operando();
            this.state = 87;
            this.match(FormulaParser.DISTINTO);
            this.state = 88;
            localctx.arg2 = this.operando();
            localctx.value =  (localctx.arg1===null ? null : this._input.getText(new antlr4.Interval(localctx.arg1.start,localctx.arg1.stop))) != (localctx.arg2===null ? null : this._input.getText(new antlr4.Interval(localctx.arg2.start,localctx.arg2.stop)))
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

OperandoContext.prototype.NUMERO = function() {
    return this.getToken(FormulaParser.NUMERO, 0);
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
    this.enterRule(localctx, 12, FormulaParser.RULE_operando);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        _la = this._input.LA(1);
        if(!(_la===FormulaParser.CELDA || _la===FormulaParser.NUMERO)) {
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
