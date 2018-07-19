// Generated from Formula.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FormulaListener = require('./FormulaListener').FormulaListener;
var grammarFileName = "Formula.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0011n\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003\"\n\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u00046\n\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007L\n\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0002\u0002\u000f",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u0002",
    "\u0003\u0004\u0002\f\f\u000e\u000e\u0002h\u0002\u001c\u0003\u0002\u0002",
    "\u0002\u0004!\u0003\u0002\u0002\u0002\u00065\u0003\u0002\u0002\u0002",
    "\b7\u0003\u0002\u0002\u0002\n>\u0003\u0002\u0002\u0002\fK\u0003\u0002",
    "\u0002\u0002\u000eM\u0003\u0002\u0002\u0002\u0010R\u0003\u0002\u0002",
    "\u0002\u0012W\u0003\u0002\u0002\u0002\u0014\\\u0003\u0002\u0002\u0002",
    "\u0016a\u0003\u0002\u0002\u0002\u0018f\u0003\u0002\u0002\u0002\u001a",
    "k\u0003\u0002\u0002\u0002\u001c\u001d\u0005\u0004\u0003\u0002\u001d",
    "\u0003\u0003\u0002\u0002\u0002\u001e\"\u0005\u0006\u0004\u0002\u001f",
    "\"\u0005\b\u0005\u0002 \"\u0005\n\u0006\u0002!\u001e\u0003\u0002\u0002",
    "\u0002!\u001f\u0003\u0002\u0002\u0002! \u0003\u0002\u0002\u0002\"\u0005",
    "\u0003\u0002\u0002\u0002#$\u0007\u000f\u0002\u0002$%\u0007\u0003\u0002",
    "\u0002%&\u0005\f\u0007\u0002&\'\u0007\u0004\u0002\u0002\'(\u0007\r\u0002",
    "\u0002()\u0007\u0004\u0002\u0002)*\u0007\r\u0002\u0002*+\u0007\u0005",
    "\u0002\u0002+6\u0003\u0002\u0002\u0002,-\u0007\u000f\u0002\u0002-.\u0007",
    "\u0003\u0002\u0002./\u0005\u0004\u0003\u0002/0\u0007\u0004\u0002\u0002",
    "01\u0007\r\u0002\u000212\u0007\u0004\u0002\u000223\u0007\r\u0002\u0002",
    "34\u0007\u0005\u0002\u000246\u0003\u0002\u0002\u00025#\u0003\u0002\u0002",
    "\u00025,\u0003\u0002\u0002\u00026\u0007\u0003\u0002\u0002\u000278\u0007",
    "\u0010\u0002\u000289\u0007\u0003\u0002\u00029:\u0005\f\u0007\u0002:",
    ";\u0007\u0004\u0002\u0002;<\u0005\f\u0007\u0002<=\u0007\u0005\u0002",
    "\u0002=\t\u0003\u0002\u0002\u0002>?\u0007\u0011\u0002\u0002?@\u0007",
    "\u0003\u0002\u0002@A\u0005\f\u0007\u0002AB\u0007\u0004\u0002\u0002B",
    "C\u0005\f\u0007\u0002CD\u0007\u0005\u0002\u0002D\u000b\u0003\u0002\u0002",
    "\u0002EL\u0005\u000e\b\u0002FL\u0005\u0010\t\u0002GL\u0005\u0012\n\u0002",
    "HL\u0005\u0014\u000b\u0002IL\u0005\u0016\f\u0002JL\u0005\u0018\r\u0002",
    "KE\u0003\u0002\u0002\u0002KF\u0003\u0002\u0002\u0002KG\u0003\u0002\u0002",
    "\u0002KH\u0003\u0002\u0002\u0002KI\u0003\u0002\u0002\u0002KJ\u0003\u0002",
    "\u0002\u0002L\r\u0003\u0002\u0002\u0002MN\u0005\u001a\u000e\u0002NO",
    "\u0007\u0006\u0002\u0002OP\u0005\u001a\u000e\u0002PQ\b\b\u0001\u0002",
    "Q\u000f\u0003\u0002\u0002\u0002RS\u0005\u001a\u000e\u0002ST\u0007\u0007",
    "\u0002\u0002TU\u0005\u001a\u000e\u0002UV\b\t\u0001\u0002V\u0011\u0003",
    "\u0002\u0002\u0002WX\u0005\u001a\u000e\u0002XY\u0007\b\u0002\u0002Y",
    "Z\u0005\u001a\u000e\u0002Z[\b\n\u0001\u0002[\u0013\u0003\u0002\u0002",
    "\u0002\\]\u0005\u001a\u000e\u0002]^\u0007\t\u0002\u0002^_\u0005\u001a",
    "\u000e\u0002_`\b\u000b\u0001\u0002`\u0015\u0003\u0002\u0002\u0002ab",
    "\u0005\u001a\u000e\u0002bc\u0007\n\u0002\u0002cd\u0005\u001a\u000e\u0002",
    "de\b\f\u0001\u0002e\u0017\u0003\u0002\u0002\u0002fg\u0005\u001a\u000e",
    "\u0002gh\u0007\u000b\u0002\u0002hi\u0005\u001a\u000e\u0002ij\b\r\u0001",
    "\u0002j\u0019\u0003\u0002\u0002\u0002kl\t\u0002\u0002\u0002l\u001b\u0003",
    "\u0002\u0002\u0002\u0005!5K"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "','", "')'", "'>'", "'<'", "'>='", "'<='", 
                     "'='", "'<>'", null, null, null, "'IF'", "'OR'", "'AND'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, "CELDA", "PALABRA", "NUMERO", "IF", "OR", "AND" ];

var ruleNames =  [ "formula", "operLogico", "operIf", "operOr", "operAnd", 
                   "comparacion", "mayor", "menor", "mayori", "menori", 
                   "igual", "distinto", "operando" ];

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
FormulaParser.T__3 = 4;
FormulaParser.T__4 = 5;
FormulaParser.T__5 = 6;
FormulaParser.T__6 = 7;
FormulaParser.T__7 = 8;
FormulaParser.T__8 = 9;
FormulaParser.CELDA = 10;
FormulaParser.PALABRA = 11;
FormulaParser.NUMERO = 12;
FormulaParser.IF = 13;
FormulaParser.OR = 14;
FormulaParser.AND = 15;

FormulaParser.RULE_formula = 0;
FormulaParser.RULE_operLogico = 1;
FormulaParser.RULE_operIf = 2;
FormulaParser.RULE_operOr = 3;
FormulaParser.RULE_operAnd = 4;
FormulaParser.RULE_comparacion = 5;
FormulaParser.RULE_mayor = 6;
FormulaParser.RULE_menor = 7;
FormulaParser.RULE_mayori = 8;
FormulaParser.RULE_menori = 9;
FormulaParser.RULE_igual = 10;
FormulaParser.RULE_distinto = 11;
FormulaParser.RULE_operando = 12;

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

FormulaContext.prototype.operLogico = function() {
    return this.getTypedRuleContext(OperLogicoContext,0);
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
        this.state = 26;
        this.operLogico();
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

function OperLogicoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_operLogico;
    return this;
}

OperLogicoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperLogicoContext.prototype.constructor = OperLogicoContext;

OperLogicoContext.prototype.operIf = function() {
    return this.getTypedRuleContext(OperIfContext,0);
};

OperLogicoContext.prototype.operOr = function() {
    return this.getTypedRuleContext(OperOrContext,0);
};

OperLogicoContext.prototype.operAnd = function() {
    return this.getTypedRuleContext(OperAndContext,0);
};

OperLogicoContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterOperLogico(this);
	}
};

OperLogicoContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitOperLogico(this);
	}
};




FormulaParser.OperLogicoContext = OperLogicoContext;

FormulaParser.prototype.operLogico = function() {

    var localctx = new OperLogicoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, FormulaParser.RULE_operLogico);
    try {
        this.state = 31;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FormulaParser.IF:
            this.enterOuterAlt(localctx, 1);
            this.state = 28;
            this.operIf();
            break;
        case FormulaParser.OR:
            this.enterOuterAlt(localctx, 2);
            this.state = 29;
            this.operOr();
            break;
        case FormulaParser.AND:
            this.enterOuterAlt(localctx, 3);
            this.state = 30;
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
    this.arg1 = null; // Token
    this.arg2 = null; // Token
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


OperIfContext.prototype.operLogico = function() {
    return this.getTypedRuleContext(OperLogicoContext,0);
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
        this.state = 51;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 33;
            this.match(FormulaParser.IF);
            this.state = 34;
            this.match(FormulaParser.T__0);
            this.state = 35;
            this.comparacion();
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
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 42;
            this.match(FormulaParser.IF);
            this.state = 43;
            this.match(FormulaParser.T__0);
            this.state = 44;
            this.operLogico();
            this.state = 45;
            this.match(FormulaParser.T__1);
            this.state = 46;
            localctx.arg1 = this.match(FormulaParser.PALABRA);
            this.state = 47;
            this.match(FormulaParser.T__1);
            this.state = 48;
            localctx.arg2 = this.match(FormulaParser.PALABRA);
            this.state = 49;
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
        this.state = 53;
        this.match(FormulaParser.OR);
        this.state = 54;
        this.match(FormulaParser.T__0);
        this.state = 55;
        this.comparacion();
        this.state = 56;
        this.match(FormulaParser.T__1);
        this.state = 57;
        this.comparacion();
        this.state = 58;
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
        this.state = 60;
        this.match(FormulaParser.AND);
        this.state = 61;
        this.match(FormulaParser.T__0);
        this.state = 62;
        this.comparacion();
        this.state = 63;
        this.match(FormulaParser.T__1);
        this.state = 64;
        this.comparacion();
        this.state = 65;
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
    return this;
}

ComparacionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComparacionContext.prototype.constructor = ComparacionContext;

ComparacionContext.prototype.mayor = function() {
    return this.getTypedRuleContext(MayorContext,0);
};

ComparacionContext.prototype.menor = function() {
    return this.getTypedRuleContext(MenorContext,0);
};

ComparacionContext.prototype.mayori = function() {
    return this.getTypedRuleContext(MayoriContext,0);
};

ComparacionContext.prototype.menori = function() {
    return this.getTypedRuleContext(MenoriContext,0);
};

ComparacionContext.prototype.igual = function() {
    return this.getTypedRuleContext(IgualContext,0);
};

ComparacionContext.prototype.distinto = function() {
    return this.getTypedRuleContext(DistintoContext,0);
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
        this.state = 73;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 67;
            this.mayor();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 68;
            this.menor();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 69;
            this.mayori();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 70;
            this.menori();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 71;
            this.igual();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 72;
            this.distinto();
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

function MayorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_mayor;
    this.value = null
    this.arg1 = null; // OperandoContext
    this.arg2 = null; // OperandoContext
    return this;
}

MayorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MayorContext.prototype.constructor = MayorContext;

MayorContext.prototype.operando = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OperandoContext);
    } else {
        return this.getTypedRuleContext(OperandoContext,i);
    }
};

MayorContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterMayor(this);
	}
};

MayorContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitMayor(this);
	}
};




FormulaParser.MayorContext = MayorContext;

FormulaParser.prototype.mayor = function() {

    var localctx = new MayorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, FormulaParser.RULE_mayor);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        localctx.arg1 = this.operando();
        this.state = 76;
        this.match(FormulaParser.T__3);
        this.state = 77;
        localctx.arg2 = this.operando();
        localctx.value =  (localctx.arg1===null ? null : this._input.getText(new antlr4.Interval(localctx.arg1.start,localctx.arg1.stop))) > (localctx.arg2===null ? null : this._input.getText(new antlr4.Interval(localctx.arg2.start,localctx.arg2.stop)))
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

function MenorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_menor;
    this.value = null
    this.arg1 = null; // OperandoContext
    this.arg2 = null; // OperandoContext
    return this;
}

MenorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MenorContext.prototype.constructor = MenorContext;

MenorContext.prototype.operando = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OperandoContext);
    } else {
        return this.getTypedRuleContext(OperandoContext,i);
    }
};

MenorContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterMenor(this);
	}
};

MenorContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitMenor(this);
	}
};




FormulaParser.MenorContext = MenorContext;

FormulaParser.prototype.menor = function() {

    var localctx = new MenorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, FormulaParser.RULE_menor);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80;
        localctx.arg1 = this.operando();
        this.state = 81;
        this.match(FormulaParser.T__4);
        this.state = 82;
        localctx.arg2 = this.operando();
        localctx.value =  (localctx.arg1===null ? null : this._input.getText(new antlr4.Interval(localctx.arg1.start,localctx.arg1.stop))) < (localctx.arg2===null ? null : this._input.getText(new antlr4.Interval(localctx.arg2.start,localctx.arg2.stop)))
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

function MayoriContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_mayori;
    this.value = null
    this.arg1 = null; // OperandoContext
    this.arg2 = null; // OperandoContext
    return this;
}

MayoriContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MayoriContext.prototype.constructor = MayoriContext;

MayoriContext.prototype.operando = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OperandoContext);
    } else {
        return this.getTypedRuleContext(OperandoContext,i);
    }
};

MayoriContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterMayori(this);
	}
};

MayoriContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitMayori(this);
	}
};




FormulaParser.MayoriContext = MayoriContext;

FormulaParser.prototype.mayori = function() {

    var localctx = new MayoriContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, FormulaParser.RULE_mayori);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 85;
        localctx.arg1 = this.operando();
        this.state = 86;
        this.match(FormulaParser.T__5);
        this.state = 87;
        localctx.arg2 = this.operando();
        localctx.value =  (localctx.arg1===null ? null : this._input.getText(new antlr4.Interval(localctx.arg1.start,localctx.arg1.stop))) >= (localctx.arg2===null ? null : this._input.getText(new antlr4.Interval(localctx.arg2.start,localctx.arg2.stop)))
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

function MenoriContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_menori;
    this.value = null
    this.arg1 = null; // OperandoContext
    this.arg2 = null; // OperandoContext
    return this;
}

MenoriContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MenoriContext.prototype.constructor = MenoriContext;

MenoriContext.prototype.operando = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OperandoContext);
    } else {
        return this.getTypedRuleContext(OperandoContext,i);
    }
};

MenoriContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterMenori(this);
	}
};

MenoriContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitMenori(this);
	}
};




FormulaParser.MenoriContext = MenoriContext;

FormulaParser.prototype.menori = function() {

    var localctx = new MenoriContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, FormulaParser.RULE_menori);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        localctx.arg1 = this.operando();
        this.state = 91;
        this.match(FormulaParser.T__6);
        this.state = 92;
        localctx.arg2 = this.operando();
        localctx.value =  (localctx.arg1===null ? null : this._input.getText(new antlr4.Interval(localctx.arg1.start,localctx.arg1.stop))) <= (localctx.arg2===null ? null : this._input.getText(new antlr4.Interval(localctx.arg2.start,localctx.arg2.stop)))
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

function IgualContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_igual;
    this.value = null
    this.arg1 = null; // OperandoContext
    this.arg2 = null; // OperandoContext
    return this;
}

IgualContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IgualContext.prototype.constructor = IgualContext;

IgualContext.prototype.operando = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OperandoContext);
    } else {
        return this.getTypedRuleContext(OperandoContext,i);
    }
};

IgualContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterIgual(this);
	}
};

IgualContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitIgual(this);
	}
};




FormulaParser.IgualContext = IgualContext;

FormulaParser.prototype.igual = function() {

    var localctx = new IgualContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, FormulaParser.RULE_igual);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        localctx.arg1 = this.operando();
        this.state = 96;
        this.match(FormulaParser.T__7);
        this.state = 97;
        localctx.arg2 = this.operando();
        localctx.value =  (localctx.arg1===null ? null : this._input.getText(new antlr4.Interval(localctx.arg1.start,localctx.arg1.stop))) == (localctx.arg2===null ? null : this._input.getText(new antlr4.Interval(localctx.arg2.start,localctx.arg2.stop)))
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

function DistintoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_distinto;
    this.value = null
    this.arg1 = null; // OperandoContext
    this.arg2 = null; // OperandoContext
    return this;
}

DistintoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DistintoContext.prototype.constructor = DistintoContext;

DistintoContext.prototype.operando = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OperandoContext);
    } else {
        return this.getTypedRuleContext(OperandoContext,i);
    }
};

DistintoContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.enterDistinto(this);
	}
};

DistintoContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaListener ) {
        listener.exitDistinto(this);
	}
};




FormulaParser.DistintoContext = DistintoContext;

FormulaParser.prototype.distinto = function() {

    var localctx = new DistintoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, FormulaParser.RULE_distinto);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
        localctx.arg1 = this.operando();
        this.state = 101;
        this.match(FormulaParser.T__8);
        this.state = 102;
        localctx.arg2 = this.operando();
        localctx.value =  (localctx.arg1===null ? null : this._input.getText(new antlr4.Interval(localctx.arg1.start,localctx.arg1.stop))) != (localctx.arg2===null ? null : this._input.getText(new antlr4.Interval(localctx.arg2.start,localctx.arg2.stop)))
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
    this.enterRule(localctx, 24, FormulaParser.RULE_operando);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105;
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
