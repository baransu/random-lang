/**
 * LR parser generated by the Syntax tool.
 *
 * https://www.npmjs.com/package/syntax-cli
 *
 *   npm install -g syntax-cli
 *
 *   syntax-cli --help
 *
 * To regenerate run:
 *
 *   syntax-cli \
 *     --grammar ~/path-to-grammar-file \
 *     --mode <parsing-mode> \
 *     --output ~/path-to-output-parser-file.js
 */

'use strict';

/**
 * Matched token text.
 */
let yytext;

/**
 * Length of the matched token text.
 */
let yyleng;

/**
 * Storage object.
 */
let yy = {};

/**
 * Result of semantic action.
 */
let __;

/**
 * Result location object.
 */
let __loc;

function yyloc(start, end) {
  if (!yy.options.captureLocations) {
    return null;
  }

  // Epsilon doesn't produce location.
  if (!start || !end) {
    return start || end;
  }

  return {
    startOffset: start.startOffset,
    endOffset: end.endOffset,
    startLine: start.startLine,
    endLine: end.endLine,
    startColumn: start.startColumn,
    endColumn: end.endColumn,
  };
}

const EOF = '$';

/**
 * List of productions (generated by Syntax tool).
 */
const productions = [[-1,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[0,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc); __ = { type: 'Program', body: _1 }  }],
[1,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc); __ = [_1]  }],
[1,2,(_1,_2,_1loc,_2loc) => { __loc = yyloc(_1loc, _2loc); _1.push(_2); __ = _1  }],
[2,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[2,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[2,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[3,7,(_1,_2,_3,_4,_5,_6,_7,_1loc,_2loc,_3loc,_4loc,_5loc,_6loc,_7loc) => { __loc = yyloc(_1loc, _7loc); __ = FunctionDeclaration(_2, _4, _7, __loc)  }],
[4,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[4,0,() => { __loc = null; __ = []  }],
[5,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc); __ = [_1]  }],
[5,3,(_1,_2,_3,_1loc,_2loc,_3loc) => { __loc = yyloc(_1loc, _3loc); _1.push(_3); __ = _1  }],
[6,4,(_1,_2,_3,_4,_1loc,_2loc,_3loc,_4loc) => { __loc = yyloc(_1loc, _4loc); __ = VariableDeclaration(_2, _4, __loc)  }],
[7,3,(_1,_2,_3,_1loc,_2loc,_3loc) => { __loc = yyloc(_1loc, _3loc); __ = _2  }],
[8,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc); __ = [_1]  }],
[8,2,(_1,_2,_1loc,_2loc) => { __loc = yyloc(_1loc, _2loc); _1.push(_2); __ = _1  }],
[9,3,(_1,_2,_3,_1loc,_2loc,_3loc) => { __loc = yyloc(_1loc, _3loc); __ = BinaryExpression(_2, _1, _3, __loc)  }],
[9,3,(_1,_2,_3,_1loc,_2loc,_3loc) => { __loc = yyloc(_1loc, _3loc); __ = _2  }],
[9,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[9,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[9,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[10,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[10,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[11,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc); __ = Literal('String', _1, __loc)  }],
[12,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc); __ = Literal('Numeric', Number(_1), __loc)  }],
[13,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc); __ = { type: 'Identifier', value: _1, loc: __loc }  }],
[14,2,(_1,_2,_1loc,_2loc) => { __loc = yyloc(_1loc, _2loc); __ = { type: 'CallExpression', callee: _1, arguments: _2, loc: __loc }  }],
[15,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[15,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[16,3,(_1,_2,_3,_1loc,_2loc,_3loc) => { __loc = yyloc(_1loc, _3loc); __ = _2  }],
[17,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[17,0,() => { __loc = null; __ = []  }],
[18,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc); __ = [_1]  }],
[18,3,(_1,_2,_3,_1loc,_2loc,_3loc) => { __loc = yyloc(_1loc, _3loc); __ = _1; _1.push(_3)  }]];

/**
 * Encoded tokens map.
 */
const tokens = {"FN":"19","LPAREN":"20","RPAREN":"21","ARROW":"22","COMMA":"23","LET":"24","ASSIGN":"25","LCURLY":"26","RCURLY":"27","ADDITIVE_OPERATOR":"28","STRING":"29","NUMBER":"30","IDENTIFIER":"31","$":"32"};

/**
 * Parsing table (generated by Syntax tool).
 */
const table = [{"0":49,"1":1,"2":2,"3":3,"6":4,"7":9,"9":5,"10":11,"11":14,"12":15,"13":50,"14":10,"15":13,"19":"s6","20":"s8","24":"s7","26":"s12","29":"s16","30":"s17","31":"s51"},{"2":18,"3":3,"6":4,"7":9,"9":5,"10":11,"11":14,"12":15,"13":50,"14":10,"15":13,"19":"s6","20":"s8","24":"s7","26":"s12","29":"s16","30":"s17","31":"s51","32":"r1"},{"19":"r2","20":"r2","24":"r2","26":"r2","29":"r2","30":"r2","31":"r2","32":"r2"},{"19":"r4","20":"r4","24":"r4","26":"r4","29":"r4","30":"r4","31":"r4","32":"r4"},{"19":"r5","20":"r5","24":"r5","26":"r5","29":"r5","30":"r5","31":"r5","32":"r5"},{"19":"r6","20":"r6","24":"r6","26":"r6","28":"s19","29":"r6","30":"r6","31":"r6","32":"r6"},{"13":36,"31":"s51"},{"13":44,"31":"s51"},{"7":9,"9":21,"10":11,"11":14,"12":15,"13":50,"14":10,"15":13,"20":"s8","26":"s12","29":"s16","30":"s17","31":"s51"},{"19":"r18","20":"r18","21":"r18","23":"r18","24":"r18","26":"r18","27":"r18","28":"r18","29":"r18","30":"r18","31":"r18","32":"r18"},{"19":"r19","20":"r19/r28","21":"r19","23":"r19","24":"r19","26":"r19","27":"r19","28":"r19","29":"r19","30":"r19","31":"r19","32":"r19"},{"19":"r20","20":"r20","21":"r20","23":"r20","24":"r20","26":"r20","27":"r20","28":"r20","29":"r20","30":"r20","31":"r20","32":"r20"},{"1":25,"2":2,"3":3,"6":4,"7":9,"8":23,"9":24,"10":11,"11":14,"12":15,"13":50,"14":10,"15":13,"19":"s6","20":"s8","24":"s7","26":"s12","29":"s16","30":"s17","31":"s51"},{"16":27,"20":"s28"},{"19":"r21","20":"r21","21":"r21","23":"r21","24":"r21","26":"r21","27":"r21","28":"r21","29":"r21","30":"r21","31":"r21","32":"r21"},{"19":"r22","20":"r22","21":"r22","23":"r22","24":"r22","26":"r22","27":"r22","28":"r22","29":"r22","30":"r22","31":"r22","32":"r22"},{"19":"r23","20":"r23","21":"r23","23":"r23","24":"r23","26":"r23","27":"r23","28":"r23","29":"r23","30":"r23","31":"r23","32":"r23"},{"19":"r24","20":"r24","21":"r24","23":"r24","24":"r24","26":"r24","27":"r24","28":"r24","29":"r24","30":"r24","31":"r24","32":"r24"},{"19":"r3","20":"r3","24":"r3","26":"r3","29":"r3","30":"r3","31":"r3","32":"r3"},{"7":9,"9":20,"10":11,"11":14,"12":15,"13":50,"14":10,"15":13,"20":"s8","26":"s12","29":"s16","30":"s17","31":"s51"},{"19":"r16","20":"r16","21":"r16","23":"r16","24":"r16","26":"r16","27":"r16","28":"r16/s19","29":"r16","30":"r16","31":"r16","32":"r16"},{"21":"s22","28":"s19"},{"19":"r17","20":"r17","21":"r17","23":"r17","24":"r17","26":"r17","27":"r17","28":"r17","29":"r17","30":"r17","31":"r17","32":"r17"},{"27":"s26"},{"19":"r6","20":"r6","24":"r6","26":"r6","27":"r14","28":"s19","29":"r6","30":"r6","31":"r6"},{"2":18,"3":3,"6":4,"7":9,"9":35,"10":11,"11":14,"12":15,"13":50,"14":10,"15":13,"19":"s6","20":"s8","24":"s7","26":"s12","29":"s16","30":"s17","31":"s51"},{"19":"r13","20":"r13","21":"r13","23":"r13","24":"r13","26":"r13","27":"r13","28":"r13","29":"r13","30":"r13","31":"r13","32":"r13"},{"19":"r26","20":"r26","21":"r26","23":"r26","24":"r26","26":"r26","27":"r26","28":"r26","29":"r26","30":"r26","31":"r26","32":"r26"},{"7":9,"9":31,"10":11,"11":14,"12":15,"13":50,"14":10,"15":13,"17":29,"18":30,"20":"s8","21":"r31","26":"s12","29":"s16","30":"s17","31":"s51"},{"21":"s32"},{"21":"r30","23":"s33"},{"21":"r32","23":"r32","28":"s19"},{"19":"r29","20":"r29","21":"r29","23":"r29","24":"r29","26":"r29","27":"r29","28":"r29","29":"r29","30":"r29","31":"r29","32":"r29"},{"7":9,"9":34,"10":11,"11":14,"12":15,"13":50,"14":10,"15":13,"20":"s8","26":"s12","29":"s16","30":"s17","31":"s51"},{"21":"r33","23":"r33","28":"s19"},{"19":"r6","20":"r6","24":"r6","26":"r6","27":"r15","28":"s19","29":"r6","30":"r6","31":"r6"},{"20":"s37"},{"4":38,"5":39,"13":40,"21":"r9","31":"s51"},{"21":"s41"},{"21":"r8","23":"s47"},{"21":"r10","23":"r10"},{"22":"s42"},{"7":9,"9":43,"10":11,"11":14,"12":15,"13":50,"14":10,"15":13,"20":"s8","26":"s12","29":"s16","30":"s17","31":"s51"},{"19":"r7","20":"r7","24":"r7","26":"r7","28":"s19","29":"r7","30":"r7","31":"r7","32":"r7"},{"25":"s45"},{"7":9,"9":46,"10":11,"11":14,"12":15,"13":50,"14":10,"15":13,"20":"s8","26":"s12","29":"s16","30":"s17","31":"s51"},{"19":"r12","20":"r12","24":"r12","26":"r12","28":"s19","29":"r12","30":"r12","31":"r12","32":"r12"},{"13":48,"31":"s51"},{"21":"r11","23":"r11"},{"32":"acc"},{"20":"r27"},{"20":"r25","21":"r25","23":"r25","25":"r25"}];

/**
 * Parsing stack.
 */
const stack = [];

/**
 * Tokenizer instance.
 */
let tokenizer;
/**
 * Generic tokenizer used by the parser in the Syntax tool.
 *
 * https://www.npmjs.com/package/syntax-cli
 *
 * See `--custom-tokinzer` to skip this generation, and use a custom one.
 */

const lexRules = [[/^#.*/, function() { /* skip comments */ }],
[/^\s+/, function() { /* skip whitespace */ }],
[/^let/, function() { return 'LET' }],
[/^fn/, function() { return 'FN' }],
[/^\->/, function() { return 'ARROW' }],
[/^\(/, function() { return 'LPAREN' }],
[/^\)/, function() { return 'RPAREN' }],
[/^\{/, function() { return 'LCURLY' }],
[/^\}/, function() { return 'RCURLY' }],
[/^\[/, function() { return 'LBRACKET' }],
[/^\]/, function() { return 'RBRACKET' }],
[/^:/, function() { return 'COLON' }],
[/^;/, function() { return 'SEMICOLON' }],
[/^,/, function() { return 'COMMA' }],
[/^\./, function() { return 'DOT' }],
[/^\|\|/, function() { return 'LOGICAL_OR' }],
[/^&&/, function() { return 'LOGICAL_AND' }],
[/^=/, function() { return 'ASSIGN' }],
[/^(\d+(\.\d+)?)/, function() { return 'NUMBER' }],
[/^(=|!)=/, function() { return 'EQUALITY_OPERATOR' }],
[/^(\+|\-)/, function() { return 'ADDITIVE_OPERATOR' }],
[/^(\*|\/)/, function() { return 'MULTIPLICATIVE_OPERATOR' }],
[/^(>|<)=?/, function() { return 'RELATIONAL_OPERATOR' }],
[/^"[^"]*"/, function() { yytext = yytext.slice(1, -1); return 'STRING'; }],
[/^'[^']*'/, function() { yytext = yytext.slice(1, -1); return 'CHAR'; }],
[/^[a-zA-Z_]+/, function() { return 'IDENTIFIER' }]];
const lexRulesByConditions = {"INITIAL":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]};

const EOF_TOKEN = {
  type: EOF,
  value: '',
};

tokenizer = {
  initString(string) {
    this._string = string;
    this._cursor = 0;

    this._states = ['INITIAL'];
    this._tokensQueue = [];

    this._currentLine = 1;
    this._currentColumn = 0;
    this._currentLineBeginOffset = 0;

    /**
     * Matched token location data.
     */
    this._tokenStartOffset = 0;
    this._tokenEndOffset = 0;
    this._tokenStartLine = 1;
    this._tokenEndLine = 1;
    this._tokenStartColumn = 0;
    this._tokenEndColumn = 0;

    return this;
  },

  /**
   * Returns tokenizer states.
   */
  getStates() {
    return this._states;
  },

  getCurrentState() {
    return this._states[this._states.length - 1];
  },

  pushState(state) {
    this._states.push(state);
  },

  begin(state) {
    this.pushState(state);
  },

  popState() {
    if (this._states.length > 1) {
      return this._states.pop();
    }
    return this._states[0];
  },

  getNextToken() {
    // Something was queued, return it.
    if (this._tokensQueue.length > 0) {
      return this._toToken(this._tokensQueue.shift());
    }

    if (!this.hasMoreTokens()) {
      return EOF_TOKEN;
    }

    let string = this._string.slice(this._cursor);
    let lexRulesForState = lexRulesByConditions[this.getCurrentState()];

    for (let i = 0; i < lexRulesForState.length; i++) {
      let lexRuleIndex = lexRulesForState[i];
      let lexRule = lexRules[lexRuleIndex];

      let matched = this._match(string, lexRule[0]);

      // Manual handling of EOF token (the end of string). Return it
      // as `EOF` symbol.
      if (string === '' && matched === '') {
        this._cursor++;
      }

      if (matched !== null) {
        yytext = matched;
        yyleng = yytext.length;
        let token = lexRule[1].call(this);

        if (!token) {
          return this.getNextToken();
        }

        // If multiple tokens are returned, save them to return
        // on next `getNextToken` call.

        if (Array.isArray(token)) {
          const tokensToQueue = token.slice(1);
          token = token[0];
          if (tokensToQueue.length > 0) {
            this._tokensQueue.unshift(...tokensToQueue);
          }
        }

        return this._toToken(token, yytext);
      }
    }

    if (this.isEOF()) {
      this._cursor++;
      return EOF_TOKEN;
    }

    this.throwUnexpectedToken(
      string[0],
      this._currentLine,
      this._currentColumn
    );
  },

  /**
   * Throws default "Unexpected token" exception, showing the actual
   * line from the source, pointing with the ^ marker to the bad token.
   * In addition, shows `line:column` location.
   */
  throwUnexpectedToken(symbol, line, column) {
    const lineSource = this._string.split('\n')[line - 1];
    let lineData = '';

    if (lineSource) {
      const pad = ' '.repeat(column);
      lineData = '\n\n' + lineSource + '\n' + pad + '^\n';
    }

    throw new SyntaxError(
      `${lineData}Unexpected token: "${symbol}" ` +
      `at ${line}:${column}.`
    );
  },

  getCursor() {
    return this._cursor;
  },

  getCurrentLine() {
    return this._currentLine;
  },

  getCurrentColumn() {
    return this._currentColumn;
  },

  _captureLocation(matched) {
    const nlRe = /\n/g;

    // Absolute offsets.
    this._tokenStartOffset = this._cursor;

    // Line-based locations, start.
    this._tokenStartLine = this._currentLine;
    this._tokenStartColumn =
      this._tokenStartOffset - this._currentLineBeginOffset;

    // Extract `\n` in the matched token.
    let nlMatch;
    while ((nlMatch = nlRe.exec(matched)) !== null) {
      this._currentLine++;
      this._currentLineBeginOffset = this._tokenStartOffset + nlMatch.index + 1;
    }

    this._tokenEndOffset = this._cursor + matched.length;

    // Line-based locations, end.
    this._tokenEndLine = this._currentLine;
    this._tokenEndColumn = this._currentColumn =
      (this._tokenEndOffset - this._currentLineBeginOffset);
  },

  _toToken(tokenType, yytext = '') {
    return {
      // Basic data.
      type: tokenType,
      value: yytext,

      // Location data.
      startOffset: this._tokenStartOffset,
      endOffset: this._tokenEndOffset,
      startLine: this._tokenStartLine,
      endLine: this._tokenEndLine,
      startColumn: this._tokenStartColumn,
      endColumn: this._tokenEndColumn,
    };
  },

  isEOF() {
    return this._cursor === this._string.length;
  },

  hasMoreTokens() {
    return this._cursor <= this._string.length;
  },

  _match(string, regexp) {
    let matched = string.match(regexp);
    if (matched) {
      // Handle `\n` in the matched token to track line numbers.
      this._captureLocation(matched[0]);
      this._cursor += matched[0].length;
      return matched[0];
    }
    return null;
  },
};

/**
 * Expose tokenizer so it can be accessed in semantic actions.
 */
yy.lexer = tokenizer;
yy.tokenizer = tokenizer;

/**
 * Global parsing options. Some options can be shadowed per
 * each `parse` call, if the optations are passed.
 *
 * Initalized to the `captureLocations` which is passed
 * from the generator. Other options can be added at runtime.
 */
yy.options = {
  captureLocations: true,
};

/**
 * Parsing module.
 */
const yyparse = {
  /**
   * Sets global parsing options.
   */
  setOptions(options) {
    yy.options = options;
    return this;
  },

  /**
   * Returns parsing options.
   */
  getOptions() {
    return yy.options;
  },

  /**
   * Parses a string.
   */
  parse(string, parseOptions) {
    if (!tokenizer) {
      throw new Error(`Tokenizer instance wasn't specified.`);
    }

    tokenizer.initString(string);

    /**
     * If parse options are passed, override global parse options for
     * this call, and later restore global options.
     */
    let globalOptions = yy.options;
    if (parseOptions) {
      yy.options = Object.assign({}, yy.options, parseOptions);
    }

    /**
     * Allow callers to do setup work based on the
     * parsing string, and passed options.
     */
    yyparse.onParseBegin(string, tokenizer, yy.options);

    stack.length = 0;
    stack.push(0);

    let token = tokenizer.getNextToken();
    let shiftedToken = null;

    do {
      if (!token) {
        // Restore options.
        yy.options = globalOptions;
        unexpectedEndOfInput();
      }

      let state = stack[stack.length - 1];
      let column = tokens[token.type];

      if (!table[state].hasOwnProperty(column)) {
        yy.options = globalOptions;
        unexpectedToken(token);
      }

      let entry = table[state][column];

      // Shift action.
      if (entry[0] === 's') {
        let loc = null;

        if (yy.options.captureLocations) {
          loc = {
            startOffset: token.startOffset,
            endOffset: token.endOffset,
            startLine: token.startLine,
            endLine: token.endLine,
            startColumn: token.startColumn,
            endColumn: token.endColumn,
          };
        }

        stack.push(
          {symbol: tokens[token.type], semanticValue: token.value, loc},
          Number(entry.slice(1))
        );
        shiftedToken = token;
        token = tokenizer.getNextToken();
      }

      // Reduce action.
      else if (entry[0] === 'r') {
        let productionNumber = entry.slice(1);
        let production = productions[productionNumber];
        let hasSemanticAction = typeof production[2] === 'function';
        let semanticValueArgs = hasSemanticAction ? [] : null;

        const locationArgs = (
          hasSemanticAction && yy.options.captureLocations
            ? []
            : null
        );

        if (production[1] !== 0) {
          let rhsLength = production[1];
          while (rhsLength-- > 0) {
            stack.pop();
            let stackEntry = stack.pop();

            if (hasSemanticAction) {
              semanticValueArgs.unshift(stackEntry.semanticValue);

              if (locationArgs) {
                locationArgs.unshift(stackEntry.loc);
              }
            }
          }
        }

        const reduceStackEntry = {symbol: production[0]};

        if (hasSemanticAction) {
          yytext = shiftedToken ? shiftedToken.value : null;
          yyleng = shiftedToken ? shiftedToken.value.length : null;

          const semanticActionArgs = (
            locationArgs !== null
              ? semanticValueArgs.concat(locationArgs)
              : semanticValueArgs
          );

          production[2](...semanticActionArgs);

          reduceStackEntry.semanticValue = __;

          if (locationArgs) {
            reduceStackEntry.loc = __loc;
          }
        }

        const nextState = stack[stack.length - 1];
        const symbolToReduceWith = production[0];

        stack.push(
          reduceStackEntry,
          table[nextState][symbolToReduceWith]
        );
      }

      // Accept.
      else if (entry === 'acc') {
        stack.pop();
        let parsed = stack.pop();

        if (stack.length !== 1 ||
            stack[0] !== 0 ||
            tokenizer.hasMoreTokens()) {
          // Restore options.
          yy.options = globalOptions;
          unexpectedToken(token);
        }

        if (parsed.hasOwnProperty('semanticValue')) {
          yy.options = globalOptions;
          yyparse.onParseEnd(parsed.semanticValue);
          return parsed.semanticValue;
        }

        yyparse.onParseEnd();

        // Restore options.
        yy.options = globalOptions;
        return true;
      }

    } while (tokenizer.hasMoreTokens() || stack.length > 1);
  },

  setTokenizer(customTokenizer) {
    tokenizer = customTokenizer;
    return yyparse;
  },

  getTokenizer() {
    return tokenizer;
  },

  onParseBegin(string, tokenizer, options) {},
  onParseEnd(parsed) {},
};

/**
 * Creates generic binary expression node.
 */
function BinaryExpression(operator, left, right, loc) {
  return {
    type: 'BinaryExpression',
    operator,
    left,
    right,
    loc,
  };
}

/**
 * Creates a literal node.
 */
function Literal(typePrefix, value, loc) {
  return { type: typePrefix + 'Literal', value, loc };
}
  

function VariableDeclaration(id, expression, loc) {
  return {
    type: 'VariableDeclaration',
    id,
    expression,
    loc
  }
}

function FunctionDeclaration(id, params, body, loc) {
  return {
    type: 'FunctionDeclaration',
    id,
    params,
    body,
    loc
  }
}

function unexpectedToken(token) {
  if (token.type === EOF) {
    unexpectedEndOfInput();
  }

  tokenizer.throwUnexpectedToken(
    token.value,
    token.startLine,
    token.startColumn
  );
}

function unexpectedEndOfInput() {
  parseError(`Unexpected end of input.`);
}

function parseError(message) {
  throw new SyntaxError(message);
}

module.exports = yyparse;