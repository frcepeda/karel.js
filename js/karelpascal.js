/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var karelpascal = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"BEGINPROG":4,"def_list":5,"BEGINEXEC":6,"expr_list":7,"ENDEXEC":8,"ENDPROG":9,"EOF":10,"def":11,";":12,"PROTO":13,"line":14,"var":15,"(":16,")":17,"DEF":18,"AS":19,"expr":20,"genexpr":21,"FORWARD":22,"LEFT":23,"PICKBUZZER":24,"LEAVEBUZZER":25,"HALT":26,"RET":27,"call":28,"cond":29,"loop":30,"repeat":31,"BEGIN":32,"END":33,"integer":34,"IF":35,"term":36,"THEN":37,"ELSE":38,"WHILE":39,"DO":40,"REPEAT":41,"TIMES":42,"OR":43,"and_term":44,"AND":45,"not_term":46,"NOT":47,"clause":48,"IFZ":49,"bool_fun":50,"IFNFWALL":51,"IFFWALL":52,"IFNLWALL":53,"IFLWALL":54,"IFNRWALL":55,"IFRWALL":56,"IFWBUZZER":57,"IFNWBUZZER":58,"IFBBUZZER":59,"IFNBBUZZER":60,"IFW":61,"IFN":62,"IFE":63,"IFS":64,"IFNW":65,"IFNN":66,"IFNE":67,"IFNS":68,"NUM":69,"INC":70,"DEC":71,"VAR":72,"$accept":0,"$end":1},
terminals_: {2:"error",4:"BEGINPROG",6:"BEGINEXEC",8:"ENDEXEC",9:"ENDPROG",10:"EOF",12:";",13:"PROTO",16:"(",17:")",18:"DEF",19:"AS",22:"FORWARD",23:"LEFT",24:"PICKBUZZER",25:"LEAVEBUZZER",26:"HALT",27:"RET",32:"BEGIN",33:"END",35:"IF",37:"THEN",38:"ELSE",39:"WHILE",40:"DO",41:"REPEAT",42:"TIMES",43:"OR",45:"AND",47:"NOT",49:"IFZ",51:"IFNFWALL",52:"IFFWALL",53:"IFNLWALL",54:"IFLWALL",55:"IFNRWALL",56:"IFRWALL",57:"IFWBUZZER",58:"IFNWBUZZER",59:"IFBBUZZER",60:"IFNBBUZZER",61:"IFW",62:"IFN",63:"IFE",64:"IFS",65:"IFNW",66:"IFNN",67:"IFNE",68:"IFNS",69:"NUM",70:"INC",71:"DEC",72:"VAR"},
productions_: [0,[3,7],[3,6],[5,3],[5,2],[11,3],[11,6],[11,5],[11,8],[7,3],[7,1],[21,1],[21,0],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,3],[28,1],[28,4],[29,5],[29,7],[30,5],[31,5],[36,3],[36,1],[44,3],[44,1],[46,2],[46,1],[48,4],[48,1],[48,3],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[34,1],[34,1],[34,4],[34,4],[15,1],[14,0]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
    	var program = $$[$0-3].concat([['LINE', yylineno], ['HALT']]);
    	var prototypes = {};
    	var functions = {};

    	for (var i = 0; i < $$[$0-5].length; i++) {
    		if ($$[$0-5][i][1] == null) {
    			if (prototypes[$$[$0-5][i][0]] || functions[$$[$0-5][i][0]]) {
    				throw "Prototype redefinition: " + $$[$0-5][i][0];
    			}
    			prototypes[$$[$0-5][i][0]] = $$[$0-5][i][2];
    		} else {
    	    		if (functions[$$[$0-5][i][0]]) {
    				throw "Function redefinition: " + $$[$0-5][i][0];
    			} else if (prototypes[$$[$0-5][i][0]]) {
    				if (prototypes[$$[$0-5][i][0]] != $$[$0-5][i][2]) {
    					throw "Prototype parameter mismatch";
    				}
    			}

    			functions[$$[$0-5][i][0]] = program.length;

    			for (var j = 0; j < $$[$0-5][i][1].length; j++) {
    				if ($$[$0-5][i][1][j][0] == 'CALL' &&
    				    !functions[$$[$0-5][i][1][j][1]] &&
    				    !prototypes[$$[$0-5][i][1][j][1]]) {
    					throw "Unknown function: " + $$[$0-5][i][1][j][1];
    				}
    			}
    
    			program = program.concat($$[$0-5][i][1]);
    		}
    	}
    	
    	for (var i = 0; i < program.length; i++) {
    		if (program[i][0] == 'CALL') {
    			if (!functions[program[i][1]]) {
    				throw "Unknown function: " + program[i][1];
    			}
    			program[i].push(program[i][1]);
    			program[i][1] = functions[program[i][2]];
    		} else if (program[i][0] == 'PARAM' && program[i][1] != 0) {
			throw "Unknown variable: " + program[i][1];
    		}
    	}
    	
    	return program;
    
break;
case 2: return $$[$0-3].concat([['HALT']]); 
break;
case 3: this.$ = $$[$0-2].concat($$[$0-1]); 
break;
case 4: this.$ = $$[$0-1]; 
break;
case 5: this.$ = [[$$[$0].toLowerCase(), null, 1]]; 
break;
case 6: this.$ = [[$$[$0-3].toLowerCase(), null, 2]]; 
break;
case 7: this.$ = [[$$[$0-2].toLowerCase(), $$[$0-3].concat($$[$0]).concat([['RET']]), 1]]; 
break;
case 8:
    	var result = $$[$0-6].concat($$[$0]).concat([['RET']]);
    	for (var i = 0; i < result.length; i++) {
    		if (result[i][0] == 'PARAM') {
    			if (result[i][1] == $$[$0-3].toLowerCase()) {
    				result[i][1] = 0;
    			} else {
				throw "Unknown variable: " + $$[$0-3];
    			}
    		}
    	}
    	this.$ = [[$$[$0-5].toLowerCase(), result, 2]];
    
break;
case 9: this.$ = $$[$0-2].concat($$[$0]); 
break;
case 10: this.$ = $$[$0]; 
break;
case 11: this.$ = $$[$0]; 
break;
case 12: this.$ = []; 
break;
case 13: this.$ = [['LINE', yylineno], ['WORLDWALLS'], ['ORIENTATION'], ['MASK'], ['AND'], ['NOT'], ['EZ', 'WALL'], ['FORWARD']]; 
break;
case 14: this.$ = [['LINE', yylineno], ['LEFT']]; 
break;
case 15: this.$ = [['LINE', yylineno], ['WORLDBUZZERS'], ['EZ', 'WORLDUNDERFLOW'], ['PICKBUZZER']]; 
break;
case 16: this.$ = [['LINE', yylineno], ['BAGBUZZERS'], ['EZ', 'BAGUNDERFLOW'], ['LEAVEBUZZER']]; 
break;
case 17: this.$ = [['LINE', yylineno], ['HALT']]; 
break;
case 18: this.$ = [['LINE', yylineno], ['RET']]; 
break;
case 19: this.$ = $$[$0]; 
break;
case 20: this.$ = $$[$0]; 
break;
case 21: this.$ = $$[$0]; 
break;
case 22: this.$ = $$[$0]; 
break;
case 23: this.$ = $$[$0-1]; 
break;
case 24: this.$ = [['LINE', yylineno], ['LOAD', 0], ['CALL', $$[$0].toLowerCase()], ['LINE', yylineno]]; 
break;
case 25: this.$ = [['LINE', yylineno]].concat($$[$0-1]).concat([['CALL', $$[$0-3].toLowerCase()], ['LINE', yylineno]]); 
break;
case 26: this.$ = $$[$0-2].concat($$[$0-3]).concat([['JZ', $$[$0].length]]).concat($$[$0]); 
break;
case 27: this.$ = $$[$0-4].concat($$[$0-5]).concat([['JZ', 1 + $$[$0-2].length]]).concat($$[$0-2]).concat([['JMP', $$[$0].length]]).concat($$[$0]); 
break;
case 28: this.$ = $$[$0-2].concat($$[$0-3]).concat([['JZ', 1 + $$[$0].length]]).concat($$[$0]).concat([['JMP', -1 -($$[$0-2].length + 1 + $$[$0].length + 1)]]); 
break;
case 29: this.$ = $$[$0-2].concat($$[$0-3]).concat([['DUP'], ['JLEZ', $$[$0].length + 2]]).concat($$[$0]).concat([['DEC'], ['JMP', -1 -($$[$0].length + 4)], ['POP']]); 
break;
case 30: this.$ = $$[$0-2].concat($$[$0]).concat([['OR']]); 
break;
case 31: this.$ = $$[$0]; 
break;
case 32: this.$ = $$[$0-2].concat($$[$0]).concat([['AND']]); 
break;
case 33: this.$ = $$[$0]; 
break;
case 34: this.$ = $$[$0].concat([['NOT']]); 
break;
case 35: this.$ = $$[$0]; 
break;
case 36: this.$ = $$[$0-1].concat([['NOT']]); 
break;
case 37: this.$ = $$[$0]; 
break;
case 38: this.$ = $$[$0-1]; 
break;
case 39: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['MASK'], ['AND'], ['NOT']]; 
break;
case 40: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['MASK'], ['AND']]; 
break;
case 41: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['ROTL'], ['MASK'], ['AND'], ['NOT']]; 
break;
case 42: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['ROTL'], ['MASK'], ['AND']]; 
break;
case 43: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['ROTR'], ['MASK'], ['AND'], ['NOT']]; 
break;
case 44: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['ROTR'], ['MASK'], ['AND']]; 
break;
case 45: this.$ = [['WORLDBUZZERS'], ['LOAD', 0], ['EQ'], ['NOT']]; 
break;
case 46: this.$ = [['WORLDBUZZERS'], ['NOT']]; 
break;
case 47: this.$ = [['BAGBUZZERS'], ['LOAD', 0], ['EQ'], ['NOT']]; 
break;
case 48: this.$ = [['BAGBUFFERS'], ['NOT']]; 
break;
case 49: this.$ = [['ORIENTATION'], ['LOAD', 0], ['EQ']]; 
break;
case 50: this.$ = [['ORIENTATION'], ['LOAD', 1], ['EQ']]; 
break;
case 51: this.$ = [['ORIENTATION'], ['LOAD', 2], ['EQ']]; 
break;
case 52: this.$ = [['ORIENTATION'], ['LOAD', 3], ['EQ']]; 
break;
case 53: this.$ = [['ORIENTATION'], ['LOAD', 0], ['EQ'], ['NOT']]; 
break;
case 54: this.$ = [['ORIENTATION'], ['LOAD', 1], ['EQ'], ['NOT']]; 
break;
case 55: this.$ = [['ORIENTATION'], ['LOAD', 2], ['EQ'], ['NOT']]; 
break;
case 56: this.$ = [['ORIENTATION'], ['LOAD', 3], ['EQ'], ['NOT']]; 
break;
case 57: this.$ = [['PARAM', $$[$0].toLowerCase()]]; 
break;
case 58: this.$ = [['LOAD', parseInt(yytext)]]; 
break;
case 59: this.$ = $$[$0-1].concat([['INC']]); 
break;
case 60: this.$ = $$[$0-1].concat([['DEC']]); 
break;
case 61: this.$ = yytext; 
break;
case 62: this.$ = [['LINE', yylineno]]; 
break;
}
},
table: [{3:1,4:[1,2]},{1:[3]},{5:3,6:[1,4],11:5,13:[1,6],18:[1,7]},{6:[1,8],11:9,13:[1,6],18:[1,7]},{7:10,8:[2,12],12:[2,12],15:24,20:12,21:11,22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:19,29:20,30:21,31:22,32:[1,23],35:[1,25],39:[1,26],41:[1,27],72:[1,28]},{12:[1,29]},{14:30,72:[2,62]},{14:31,72:[2,62]},{7:32,8:[2,12],12:[2,12],15:24,20:12,21:11,22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:19,29:20,30:21,31:22,32:[1,23],35:[1,25],39:[1,26],41:[1,27],72:[1,28]},{12:[1,33]},{8:[1,34],12:[1,35]},{8:[2,10],12:[2,10],33:[2,10]},{8:[2,11],12:[2,11],33:[2,11]},{8:[2,13],12:[2,13],33:[2,13],38:[2,13]},{8:[2,14],12:[2,14],33:[2,14],38:[2,14]},{8:[2,15],12:[2,15],33:[2,15],38:[2,15]},{8:[2,16],12:[2,16],33:[2,16],38:[2,16]},{8:[2,17],12:[2,17],33:[2,17],38:[2,17]},{8:[2,18],12:[2,18],33:[2,18],38:[2,18]},{8:[2,19],12:[2,19],33:[2,19],38:[2,19]},{8:[2,20],12:[2,20],33:[2,20],38:[2,20]},{8:[2,21],12:[2,21],33:[2,21],38:[2,21]},{8:[2,22],12:[2,22],33:[2,22],38:[2,22]},{7:36,12:[2,12],15:24,20:12,21:11,22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:19,29:20,30:21,31:22,32:[1,23],33:[2,12],35:[1,25],39:[1,26],41:[1,27],72:[1,28]},{8:[2,24],12:[2,24],16:[1,37],33:[2,24],38:[2,24]},{14:38,16:[2,62],47:[2,62],49:[2,62],51:[2,62],52:[2,62],53:[2,62],54:[2,62],55:[2,62],56:[2,62],57:[2,62],58:[2,62],59:[2,62],60:[2,62],61:[2,62],62:[2,62],63:[2,62],64:[2,62],65:[2,62],66:[2,62],67:[2,62],68:[2,62]},{14:39,16:[2,62],47:[2,62],49:[2,62],51:[2,62],52:[2,62],53:[2,62],54:[2,62],55:[2,62],56:[2,62],57:[2,62],58:[2,62],59:[2,62],60:[2,62],61:[2,62],62:[2,62],63:[2,62],64:[2,62],65:[2,62],66:[2,62],67:[2,62],68:[2,62]},{14:40,69:[2,62],70:[2,62],71:[2,62],72:[2,62]},{8:[2,61],12:[2,61],16:[2,61],17:[2,61],19:[2,61],33:[2,61],38:[2,61],42:[2,61]},{6:[2,4],13:[2,4],18:[2,4]},{15:41,72:[1,28]},{15:42,72:[1,28]},{8:[1,43],12:[1,35]},{6:[2,3],13:[2,3],18:[2,3]},{9:[1,44]},{8:[2,12],12:[2,12],15:24,20:12,21:45,22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:19,29:20,30:21,31:22,32:[1,23],33:[2,12],35:[1,25],39:[1,26],41:[1,27],72:[1,28]},{12:[1,35],33:[1,46]},{15:48,34:47,69:[1,49],70:[1,50],71:[1,51],72:[1,28]},{16:[1,59],36:52,44:53,46:54,47:[1,55],48:56,49:[1,57],50:58,51:[1,60],52:[1,61],53:[1,62],54:[1,63],55:[1,64],56:[1,65],57:[1,66],58:[1,67],59:[1,68],60:[1,69],61:[1,70],62:[1,71],63:[1,72],64:[1,73],65:[1,74],66:[1,75],67:[1,76],68:[1,77]},{16:[1,59],36:78,44:53,46:54,47:[1,55],48:56,49:[1,57],50:58,51:[1,60],52:[1,61],53:[1,62],54:[1,63],55:[1,64],56:[1,65],57:[1,66],58:[1,67],59:[1,68],60:[1,69],61:[1,70],62:[1,71],63:[1,72],64:[1,73],65:[1,74],66:[1,75],67:[1,76],68:[1,77]},{15:48,34:79,69:[1,49],70:[1,50],71:[1,51],72:[1,28]},{12:[2,5],16:[1,80]},{16:[1,82],19:[1,81]},{9:[1,83]},{10:[1,84]},{8:[2,9],12:[2,9],33:[2,9]},{8:[2,23],12:[2,23],33:[2,23],38:[2,23]},{17:[1,85]},{17:[2,57],42:[2,57]},{17:[2,58],42:[2,58]},{16:[1,86]},{16:[1,87]},{37:[1,88],43:[1,89]},{17:[2,31],37:[2,31],40:[2,31],43:[2,31],45:[1,90]},{17:[2,33],37:[2,33],40:[2,33],43:[2,33],45:[2,33]},{16:[1,59],48:91,49:[1,57],50:58,51:[1,60],52:[1,61],53:[1,62],54:[1,63],55:[1,64],56:[1,65],57:[1,66],58:[1,67],59:[1,68],60:[1,69],61:[1,70],62:[1,71],63:[1,72],64:[1,73],65:[1,74],66:[1,75],67:[1,76],68:[1,77]},{17:[2,35],37:[2,35],40:[2,35],43:[2,35],45:[2,35]},{16:[1,92]},{17:[2,37],37:[2,37],40:[2,37],43:[2,37],45:[2,37]},{16:[1,59],36:93,44:53,46:54,47:[1,55],48:56,49:[1,57],50:58,51:[1,60],52:[1,61],53:[1,62],54:[1,63],55:[1,64],56:[1,65],57:[1,66],58:[1,67],59:[1,68],60:[1,69],61:[1,70],62:[1,71],63:[1,72],64:[1,73],65:[1,74],66:[1,75],67:[1,76],68:[1,77]},{17:[2,39],37:[2,39],40:[2,39],43:[2,39],45:[2,39]},{17:[2,40],37:[2,40],40:[2,40],43:[2,40],45:[2,40]},{17:[2,41],37:[2,41],40:[2,41],43:[2,41],45:[2,41]},{17:[2,42],37:[2,42],40:[2,42],43:[2,42],45:[2,42]},{17:[2,43],37:[2,43],40:[2,43],43:[2,43],45:[2,43]},{17:[2,44],37:[2,44],40:[2,44],43:[2,44],45:[2,44]},{17:[2,45],37:[2,45],40:[2,45],43:[2,45],45:[2,45]},{17:[2,46],37:[2,46],40:[2,46],43:[2,46],45:[2,46]},{17:[2,47],37:[2,47],40:[2,47],43:[2,47],45:[2,47]},{17:[2,48],37:[2,48],40:[2,48],43:[2,48],45:[2,48]},{17:[2,49],37:[2,49],40:[2,49],43:[2,49],45:[2,49]},{17:[2,50],37:[2,50],40:[2,50],43:[2,50],45:[2,50]},{17:[2,51],37:[2,51],40:[2,51],43:[2,51],45:[2,51]},{17:[2,52],37:[2,52],40:[2,52],43:[2,52],45:[2,52]},{17:[2,53],37:[2,53],40:[2,53],43:[2,53],45:[2,53]},{17:[2,54],37:[2,54],40:[2,54],43:[2,54],45:[2,54]},{17:[2,55],37:[2,55],40:[2,55],43:[2,55],45:[2,55]},{17:[2,56],37:[2,56],40:[2,56],43:[2,56],45:[2,56]},{40:[1,94],43:[1,89]},{42:[1,95]},{15:96,72:[1,28]},{15:24,20:97,22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:19,29:20,30:21,31:22,32:[1,23],35:[1,25],39:[1,26],41:[1,27],72:[1,28]},{15:98,72:[1,28]},{10:[1,99]},{1:[2,2]},{8:[2,25],12:[2,25],33:[2,25],38:[2,25]},{15:48,34:100,69:[1,49],70:[1,50],71:[1,51],72:[1,28]},{15:48,34:101,69:[1,49],70:[1,50],71:[1,51],72:[1,28]},{15:24,20:102,22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:19,29:20,30:21,31:22,32:[1,23],35:[1,25],39:[1,26],41:[1,27],72:[1,28]},{16:[1,59],44:103,46:54,47:[1,55],48:56,49:[1,57],50:58,51:[1,60],52:[1,61],53:[1,62],54:[1,63],55:[1,64],56:[1,65],57:[1,66],58:[1,67],59:[1,68],60:[1,69],61:[1,70],62:[1,71],63:[1,72],64:[1,73],65:[1,74],66:[1,75],67:[1,76],68:[1,77]},{16:[1,59],46:104,47:[1,55],48:56,49:[1,57],50:58,51:[1,60],52:[1,61],53:[1,62],54:[1,63],55:[1,64],56:[1,65],57:[1,66],58:[1,67],59:[1,68],60:[1,69],61:[1,70],62:[1,71],63:[1,72],64:[1,73],65:[1,74],66:[1,75],67:[1,76],68:[1,77]},{17:[2,34],37:[2,34],40:[2,34],43:[2,34],45:[2,34]},{15:48,34:105,69:[1,49],70:[1,50],71:[1,51],72:[1,28]},{17:[1,106],43:[1,89]},{15:24,20:107,22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:19,29:20,30:21,31:22,32:[1,23],35:[1,25],39:[1,26],41:[1,27],72:[1,28]},{15:24,20:108,22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:19,29:20,30:21,31:22,32:[1,23],35:[1,25],39:[1,26],41:[1,27],72:[1,28]},{17:[1,109]},{12:[2,7]},{17:[1,110]},{1:[2,1]},{17:[1,111]},{17:[1,112]},{8:[2,26],12:[2,26],33:[2,26],38:[1,113]},{17:[2,30],37:[2,30],40:[2,30],43:[2,30],45:[1,90]},{17:[2,32],37:[2,32],40:[2,32],43:[2,32],45:[2,32]},{17:[1,114]},{17:[2,38],37:[2,38],40:[2,38],43:[2,38],45:[2,38]},{8:[2,28],12:[2,28],33:[2,28],38:[2,28]},{8:[2,29],12:[2,29],33:[2,29],38:[2,29]},{12:[2,6]},{19:[1,115]},{17:[2,59],42:[2,59]},{17:[2,60],42:[2,60]},{15:24,20:116,22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:19,29:20,30:21,31:22,32:[1,23],35:[1,25],39:[1,26],41:[1,27],72:[1,28]},{17:[2,36],37:[2,36],40:[2,36],43:[2,36],45:[2,36]},{15:24,20:117,22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:19,29:20,30:21,31:22,32:[1,23],35:[1,25],39:[1,26],41:[1,27],72:[1,28]},{8:[2,27],12:[2,27],33:[2,27],38:[2,27]},{12:[2,8]}],
defaultActions: {84:[2,2],97:[2,7],99:[2,1],109:[2,6],117:[2,8]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* ignore */
break;
case 1:/* ignore */
break;
case 2:/* ignore */
break;
case 3: return 4; 
break;
case 4: return 6; 
break;
case 5: return 8; 
break;
case 6: return 9; 
break;
case 7: return 18; 
break;
case 8: return 13; 
break;
case 9: return 27; 
break;
case 10: return 19; 
break;
case 11: return 26; 
break;
case 12: return 23; 
break;
case 13: return 22; 
break;
case 14: return 24; 
break;
case 15: return 25; 
break;
case 16: return 32; 
break;
case 17: return 33; 
break;
case 18: return 37; 
break;
case 19: return 39; 
break;
case 20: return 40; 
break;
case 21: return 41; 
break;
case 22: return 42; 
break;
case 23: return 71; 
break;
case 24: return 70; 
break;
case 25: return 49; 
break;
case 26: return 51; 
break;
case 27: return 52; 
break;
case 28: return 53; 
break;
case 29: return 54; 
break;
case 30: return 55; 
break;
case 31: return 56; 
break;
case 32: return 57; 
break;
case 33: return 58; 
break;
case 34: return 59; 
break;
case 35: return 60; 
break;
case 36: return 62; 
break;
case 37: return 64; 
break;
case 38: return 63; 
break;
case 39: return 61; 
break;
case 40: return 66; 
break;
case 41: return 68; 
break;
case 42: return 67; 
break;
case 43: return 65; 
break;
case 44: return 38; 
break;
case 45: return 35; 
break;
case 46: return 47; 
break;
case 47: return 43; 
break;
case 48: return 45; 
break;
case 49: return 16; 
break;
case 50: return 17; 
break;
case 51: return 12; 
break;
case 52: return 69; 
break;
case 53: return 72; 
break;
case 54: return 10; 
break;
}
},
rules: [/^(?:\s+)/i,/^(?:\{[^}]*\})/i,/^(?:\(\*([^*]|\*[^)])*\*\))/i,/^(?:iniciar-programa\b)/i,/^(?:inicia-ejecucion\b)/i,/^(?:termina-ejecucion\b)/i,/^(?:finalizar-programa\b)/i,/^(?:define-nueva-instruccion\b)/i,/^(?:define-prototipo-instruccion\b)/i,/^(?:sal-de-instruccion\b)/i,/^(?:como\b)/i,/^(?:apagate\b)/i,/^(?:gira-izquierda\b)/i,/^(?:avanza\b)/i,/^(?:coge-zumbador\b)/i,/^(?:deja-zumbador\b)/i,/^(?:inicio\b)/i,/^(?:fin\b)/i,/^(?:entonces\b)/i,/^(?:mientras\b)/i,/^(?:hacer\b)/i,/^(?:repetir\b)/i,/^(?:veces\b)/i,/^(?:precede\b)/i,/^(?:sucede\b)/i,/^(?:si-es-cero\b)/i,/^(?:frente-libre\b)/i,/^(?:frente-bloqueado\b)/i,/^(?:izquierda-libre\b)/i,/^(?:izquierda-bloqueada\b)/i,/^(?:derecha-libre\b)/i,/^(?:derecha-bloqueada\b)/i,/^(?:junto-a-zumbador\b)/i,/^(?:no-junto-a-zumbador\b)/i,/^(?:algun-zumbador-en-la-mochila\b)/i,/^(?:ningun-zumbador-en-la-mochila\b)/i,/^(?:orientado-al-norte\b)/i,/^(?:orientado-al-sur\b)/i,/^(?:orientado-al-este\b)/i,/^(?:orientado-al-oeste\b)/i,/^(?:no-orientado-al-norte\b)/i,/^(?:no-orientado-al-sur\b)/i,/^(?:no-orientado-al-este\b)/i,/^(?:no-orientado-al-oeste\b)/i,/^(?:sino\b)/i,/^(?:si\b)/i,/^(?:no\b)/i,/^(?:o\b)/i,/^(?:y\b)/i,/^(?:\()/i,/^(?:\))/i,/^(?:;)/i,/^(?:[0-9]+)/i,/^(?:[a-zA-Z_][a-zA-Z0-9_-]*)/i,/^(?:$)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = karelpascal;
exports.Parser = karelpascal.Parser;
exports.parse = function () { return karelpascal.parse.apply(karelpascal, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}