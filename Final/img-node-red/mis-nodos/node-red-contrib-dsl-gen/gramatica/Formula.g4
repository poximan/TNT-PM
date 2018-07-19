grammar Formula;

/*
 * Parser Rules
 */
formula 		: operLogico
						;

operLogico 	: operIf
						| operOr
						| operAnd
						;

operIf 			: IF '(' comparacion ',' arg1=PALABRA ',' arg2=PALABRA ')'
						| IF '(' operLogico ',' arg1=PALABRA ',' arg2=PALABRA ')'
						;

operOr			: OR '(' comparacion ',' comparacion ')'
						;

operAnd			: AND '(' comparacion ',' comparacion ')'
						;

comparacion	: mayor
						| menor
						| mayori
						| menori
						| igual
						| distinto
						;

mayor				returns [boolean value]
						: arg1=operando '>' arg2=operando			{$value = $arg1.text > $arg2.text;}
						;

menor				returns [boolean value]
						: arg1=operando '<' arg2=operando			{$value = $arg1.text < $arg2.text;}
						;

mayori 			returns [boolean value]
						: arg1=operando '>=' arg2=operando		{$value = $arg1.text >= $arg2.text;}
						;

menori 			returns [boolean value]
						: arg1=operando '<=' arg2=operando		{$value = $arg1.text <= $arg2.text;}
						;

igual				returns [boolean value]
						: arg1=operando '=' arg2=operando			{$value = $arg1.text == $arg2.text;}
						;

distinto 		returns [boolean value]
						: arg1=operando '<>' arg2=operando	{$value = $arg1.text != $arg2.text;}
						;

operando		: CELDA
						| NUMERO
						;

/*
 * Lexer Rules
 */
CELDA				: [A-Z][0-9]											;
PALABRA			: ["]([a-zA-Z]|' ')+["]						;
NUMERO			: ('0'..'9')+ ('.' ('0'..'9')+)?	;

IF					: 'IF'	;
OR					: 'OR'	;
AND					: 'AND'	;
