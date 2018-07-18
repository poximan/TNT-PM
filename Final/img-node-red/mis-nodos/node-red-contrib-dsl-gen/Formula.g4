grammar Formula;

/*
 * Parser Rules
 */
formula			: operacion
						;

operacion		: operIf | operOr | operAnd
						;

operIf			: IF '(' condicional ',' PALABRA ',' PALABRA ')'
						| IF '(' operacion ',' PALABRA ',' PALABRA ')'
						;

operOr			: OR '(' condicional ')'
						;

operAnd			: AND '(' condicional ')'
						;

condicional : comparacion
						| comparacion ',' condicional
						;

comparacion	: operando operador operando		{ console.log((Number)$1); console.log((Number)$3); }
						;

operando		: CELDA
						| LITERAL
						;

operador		: MAYOR
						| MENOR
						| MAYOR_IGUAL
						| MENOR_IGUAL
						| IGUAL
						| DISTINTO
						;

/*
 * Lexer Rules
 */
CELDA				: [A-Z][0-9]						;
PALABRA			: ["]([a-zA-Z]|' ')+["]	;
LITERAL			: [0-9]+								;

IF					: 'IF'	;
OR					: 'OR'	;
AND					: 'AND'	;

MAYOR				: '>'		;
MENOR				: '<'		;
MAYOR_IGUAL	: '>='	;
MENOR_IGUAL	: '<='	;
IGUAL				: '='		;
DISTINTO		: '<>'	;
