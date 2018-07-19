grammar Formula;

/*
 * Parser Rules
 */
formula 		returns [double value]
						: operacion
						;

operacion 	returns [double value]
						: operIf		{ console.log($operIf.value);}
						| operOr
						| operAnd
						;

operIf 			returns [double value]
						: IF '(' res=comparacion ',' arg1=PALABRA ',' arg2=PALABRA ')'	{ console.log($res.text) ; ($res.text == true)? $arg1.text : $arg2.text;}
						| IF '(' operacion ',' arg1=PALABRA ',' arg2=PALABRA ')'		{$value = ($operacion.text)? $arg1.text : $arg2.text;}
						;

operOr			returns [double value]
						: OR '(' arg1=comparacion ',' arg2=comparacion ')'	{$value = $arg1.text || $arg2.text;}
						;

operAnd			returns [double value]
						: AND '(' arg1=comparacion ',' arg2=comparacion ')'	{$value = $arg1.text && $arg2.text;}
						;

comparacion	returns [boolean value]
						: arg1=operando MAYOR arg2=operando			{$value = $arg1.text > $arg2.text;}
						| arg1=operando MENOR arg2=operando			{$value = $arg1.text < $arg2.text;}
						| arg1=operando MAYORI arg2=operando		{$value = $arg1.text >= $arg2.text;}
						| arg1=operando MENORI arg2=operando		{$value = $arg1.text <= $arg2.text;}
						| arg1=operando IGUAL arg2=operando			{$value = $arg1.text == $arg2.text;}
						| arg1=operando DISTINTO arg2=operando	{$value = $arg1.text != $arg2.text;}
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

MAYOR				: '>'		;
MENOR				: '<'		;
MAYORI			: '>='	;
MENORI			: '<='	;
IGUAL				: '='		;
DISTINTO		: '<>'	;
