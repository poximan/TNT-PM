// Generated from Formula.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0011P\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0006\u0006-\n\u0006\r\u0006\u000e\u0006.\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0006\u00074\n\u0007\r\u0007\u000e\u00075\u0003\b\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0002\u0002\u0011\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006",
    "\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e",
    "\u001b\u000f\u001d\u0010\u001f\u0011\u0003\u0002\u0006\u0003\u0002C",
    "\\\u0003\u00022;\u0003\u0002$$\u0005\u0002\"\"C\\c|\u0002Q\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f",
    "\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013",
    "\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017",
    "\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b",
    "\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f",
    "\u0003\u0002\u0002\u0002\u0003!\u0003\u0002\u0002\u0002\u0005#\u0003",
    "\u0002\u0002\u0002\u0007%\u0003\u0002\u0002\u0002\t\'\u0003\u0002\u0002",
    "\u0002\u000b*\u0003\u0002\u0002\u0002\r3\u0003\u0002\u0002\u0002\u000f",
    "7\u0003\u0002\u0002\u0002\u0011:\u0003\u0002\u0002\u0002\u0013=\u0003",
    "\u0002\u0002\u0002\u0015A\u0003\u0002\u0002\u0002\u0017C\u0003\u0002",
    "\u0002\u0002\u0019E\u0003\u0002\u0002\u0002\u001bH\u0003\u0002\u0002",
    "\u0002\u001dK\u0003\u0002\u0002\u0002\u001fM\u0003\u0002\u0002\u0002",
    "!\"\u0007*\u0002\u0002\"\u0004\u0003\u0002\u0002\u0002#$\u0007.\u0002",
    "\u0002$\u0006\u0003\u0002\u0002\u0002%&\u0007+\u0002\u0002&\b\u0003",
    "\u0002\u0002\u0002\'(\t\u0002\u0002\u0002()\t\u0003\u0002\u0002)\n\u0003",
    "\u0002\u0002\u0002*,\t\u0004\u0002\u0002+-\t\u0005\u0002\u0002,+\u0003",
    "\u0002\u0002\u0002-.\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002",
    "./\u0003\u0002\u0002\u0002/0\u0003\u0002\u0002\u000201\t\u0004\u0002",
    "\u00021\f\u0003\u0002\u0002\u000224\t\u0003\u0002\u000232\u0003\u0002",
    "\u0002\u000245\u0003\u0002\u0002\u000253\u0003\u0002\u0002\u000256\u0003",
    "\u0002\u0002\u00026\u000e\u0003\u0002\u0002\u000278\u0007K\u0002\u0002",
    "89\u0007H\u0002\u00029\u0010\u0003\u0002\u0002\u0002:;\u0007Q\u0002",
    "\u0002;<\u0007T\u0002\u0002<\u0012\u0003\u0002\u0002\u0002=>\u0007C",
    "\u0002\u0002>?\u0007P\u0002\u0002?@\u0007F\u0002\u0002@\u0014\u0003",
    "\u0002\u0002\u0002AB\u0007@\u0002\u0002B\u0016\u0003\u0002\u0002\u0002",
    "CD\u0007>\u0002\u0002D\u0018\u0003\u0002\u0002\u0002EF\u0007@\u0002",
    "\u0002FG\u0007?\u0002\u0002G\u001a\u0003\u0002\u0002\u0002HI\u0007>",
    "\u0002\u0002IJ\u0007?\u0002\u0002J\u001c\u0003\u0002\u0002\u0002KL\u0007",
    "?\u0002\u0002L\u001e\u0003\u0002\u0002\u0002MN\u0007>\u0002\u0002NO",
    "\u0007@\u0002\u0002O \u0003\u0002\u0002\u0002\u0006\u0002,.5\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function FormulaLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

FormulaLexer.prototype = Object.create(antlr4.Lexer.prototype);
FormulaLexer.prototype.constructor = FormulaLexer;

Object.defineProperty(FormulaLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

FormulaLexer.EOF = antlr4.Token.EOF;
FormulaLexer.T__0 = 1;
FormulaLexer.T__1 = 2;
FormulaLexer.T__2 = 3;
FormulaLexer.CELDA = 4;
FormulaLexer.PALABRA = 5;
FormulaLexer.LITERAL = 6;
FormulaLexer.IF = 7;
FormulaLexer.OR = 8;
FormulaLexer.AND = 9;
FormulaLexer.MAYOR = 10;
FormulaLexer.MENOR = 11;
FormulaLexer.MAYOR_IGUAL = 12;
FormulaLexer.MENOR_IGUAL = 13;
FormulaLexer.IGUAL = 14;
FormulaLexer.DISTINTO = 15;

FormulaLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

FormulaLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

FormulaLexer.prototype.literalNames = [ null, "'('", "','", "')'", null, 
                                        null, null, "'IF'", "'OR'", "'AND'", 
                                        "'>'", "'<'", "'>='", "'<='", "'='", 
                                        "'<>'" ];

FormulaLexer.prototype.symbolicNames = [ null, null, null, null, "CELDA", 
                                         "PALABRA", "LITERAL", "IF", "OR", 
                                         "AND", "MAYOR", "MENOR", "MAYOR_IGUAL", 
                                         "MENOR_IGUAL", "IGUAL", "DISTINTO" ];

FormulaLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "CELDA", "PALABRA", 
                                     "LITERAL", "IF", "OR", "AND", "MAYOR", 
                                     "MENOR", "MAYOR_IGUAL", "MENOR_IGUAL", 
                                     "IGUAL", "DISTINTO" ];

FormulaLexer.prototype.grammarFileName = "Formula.g4";



exports.FormulaLexer = FormulaLexer;

