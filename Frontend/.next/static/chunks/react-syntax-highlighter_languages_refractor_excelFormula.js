"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_excelFormula"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/excel-formula.js":
/*!******************************************************!*\
  !*** ./node_modules/refractor/lang/excel-formula.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = excelFormula\nexcelFormula.displayName = 'excelFormula'\nexcelFormula.aliases = []\nfunction excelFormula(Prism) {\n  Prism.languages['excel-formula'] = {\n    comment: {\n      pattern: /(\\bN\\(\\s*)\"(?:[^\"]|\"\")*\"(?=\\s*\\))/i,\n      lookbehind: true,\n      greedy: true\n    },\n    string: {\n      pattern: /\"(?:[^\"]|\"\")*\"(?!\")/,\n      greedy: true\n    },\n    reference: {\n      // https://www.ablebits.com/office-addins-blog/2015/12/08/excel-reference-another-sheet-workbook/\n      // Sales!B2\n      // 'Winter sales'!B2\n      // [Sales.xlsx]Jan!B2:B5\n      // D:\\Reports\\[Sales.xlsx]Jan!B2:B5\n      // '[Sales.xlsx]Jan sales'!B2:B5\n      // 'D:\\Reports\\[Sales.xlsx]Jan sales'!B2:B5\n      pattern:\n        /(?:'[^']*'|(?:[^\\s()[\\]{}<>*?\"';,$&]*\\[[^^\\s()[\\]{}<>*?\"']+\\])?\\w+)!/,\n      greedy: true,\n      alias: 'string',\n      inside: {\n        operator: /!$/,\n        punctuation: /'/,\n        sheet: {\n          pattern: /[^[\\]]+$/,\n          alias: 'function'\n        },\n        file: {\n          pattern: /\\[[^[\\]]+\\]$/,\n          inside: {\n            punctuation: /[[\\]]/\n          }\n        },\n        path: /[\\s\\S]+/\n      }\n    },\n    'function-name': {\n      pattern: /\\b[A-Z]\\w*(?=\\()/i,\n      alias: 'keyword'\n    },\n    range: {\n      pattern:\n        /\\$?\\b(?:[A-Z]+\\$?\\d+:\\$?[A-Z]+\\$?\\d+|[A-Z]+:\\$?[A-Z]+|\\d+:\\$?\\d+)\\b/i,\n      alias: 'property',\n      inside: {\n        operator: /:/,\n        cell: /\\$?[A-Z]+\\$?\\d+/i,\n        column: /\\$?[A-Z]+/i,\n        row: /\\$?\\d+/\n      }\n    },\n    cell: {\n      // Excel is case insensitive, so the string \"foo1\" could be either a variable or a cell.\n      // To combat this, we match cells case insensitive, if the contain at least one \"$\", and case sensitive otherwise.\n      pattern: /\\b[A-Z]+\\d+\\b|\\$[A-Za-z]+\\$?\\d+\\b|\\b[A-Za-z]+\\$\\d+\\b/,\n      alias: 'property'\n    },\n    number: /(?:\\b\\d+(?:\\.\\d+)?|\\B\\.\\d+)(?:e[+-]?\\d+)?\\b/i,\n    boolean: /\\b(?:FALSE|TRUE)\\b/i,\n    operator: /[-+*/^%=&,]|<[=>]?|>=?/,\n    punctuation: /[[\\]();{}|]/\n  }\n  Prism.languages['xlsx'] = Prism.languages['xls'] =\n    Prism.languages['excel-formula']\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9leGNlbC1mb3JtdWxhLmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLE9BQU8sbUJBQW1CO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvZXhjZWwtZm9ybXVsYS5qcz9hZjNlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4Y2VsRm9ybXVsYVxuZXhjZWxGb3JtdWxhLmRpc3BsYXlOYW1lID0gJ2V4Y2VsRm9ybXVsYSdcbmV4Y2VsRm9ybXVsYS5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGV4Y2VsRm9ybXVsYShQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXNbJ2V4Y2VsLWZvcm11bGEnXSA9IHtcbiAgICBjb21tZW50OiB7XG4gICAgICBwYXR0ZXJuOiAvKFxcYk5cXChcXHMqKVwiKD86W15cIl18XCJcIikqXCIoPz1cXHMqXFwpKS9pLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvXCIoPzpbXlwiXXxcIlwiKSpcIig/IVwiKS8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgIHJlZmVyZW5jZToge1xuICAgICAgLy8gaHR0cHM6Ly93d3cuYWJsZWJpdHMuY29tL29mZmljZS1hZGRpbnMtYmxvZy8yMDE1LzEyLzA4L2V4Y2VsLXJlZmVyZW5jZS1hbm90aGVyLXNoZWV0LXdvcmtib29rL1xuICAgICAgLy8gU2FsZXMhQjJcbiAgICAgIC8vICdXaW50ZXIgc2FsZXMnIUIyXG4gICAgICAvLyBbU2FsZXMueGxzeF1KYW4hQjI6QjVcbiAgICAgIC8vIEQ6XFxSZXBvcnRzXFxbU2FsZXMueGxzeF1KYW4hQjI6QjVcbiAgICAgIC8vICdbU2FsZXMueGxzeF1KYW4gc2FsZXMnIUIyOkI1XG4gICAgICAvLyAnRDpcXFJlcG9ydHNcXFtTYWxlcy54bHN4XUphbiBzYWxlcychQjI6QjVcbiAgICAgIHBhdHRlcm46XG4gICAgICAgIC8oPzonW14nXSonfCg/OlteXFxzKClbXFxde308Pio/XCInOywkJl0qXFxbW15eXFxzKClbXFxde308Pio/XCInXStcXF0pP1xcdyspIS8sXG4gICAgICBncmVlZHk6IHRydWUsXG4gICAgICBhbGlhczogJ3N0cmluZycsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgb3BlcmF0b3I6IC8hJC8sXG4gICAgICAgIHB1bmN0dWF0aW9uOiAvJy8sXG4gICAgICAgIHNoZWV0OiB7XG4gICAgICAgICAgcGF0dGVybjogL1teW1xcXV0rJC8sXG4gICAgICAgICAgYWxpYXM6ICdmdW5jdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAgZmlsZToge1xuICAgICAgICAgIHBhdHRlcm46IC9cXFtbXltcXF1dK1xcXSQvLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgcHVuY3R1YXRpb246IC9bW1xcXV0vXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwYXRoOiAvW1xcc1xcU10rL1xuICAgICAgfVxuICAgIH0sXG4gICAgJ2Z1bmN0aW9uLW5hbWUnOiB7XG4gICAgICBwYXR0ZXJuOiAvXFxiW0EtWl1cXHcqKD89XFwoKS9pLFxuICAgICAgYWxpYXM6ICdrZXl3b3JkJ1xuICAgIH0sXG4gICAgcmFuZ2U6IHtcbiAgICAgIHBhdHRlcm46XG4gICAgICAgIC9cXCQ/XFxiKD86W0EtWl0rXFwkP1xcZCs6XFwkP1tBLVpdK1xcJD9cXGQrfFtBLVpdKzpcXCQ/W0EtWl0rfFxcZCs6XFwkP1xcZCspXFxiL2ksXG4gICAgICBhbGlhczogJ3Byb3BlcnR5JyxcbiAgICAgIGluc2lkZToge1xuICAgICAgICBvcGVyYXRvcjogLzovLFxuICAgICAgICBjZWxsOiAvXFwkP1tBLVpdK1xcJD9cXGQrL2ksXG4gICAgICAgIGNvbHVtbjogL1xcJD9bQS1aXSsvaSxcbiAgICAgICAgcm93OiAvXFwkP1xcZCsvXG4gICAgICB9XG4gICAgfSxcbiAgICBjZWxsOiB7XG4gICAgICAvLyBFeGNlbCBpcyBjYXNlIGluc2Vuc2l0aXZlLCBzbyB0aGUgc3RyaW5nIFwiZm9vMVwiIGNvdWxkIGJlIGVpdGhlciBhIHZhcmlhYmxlIG9yIGEgY2VsbC5cbiAgICAgIC8vIFRvIGNvbWJhdCB0aGlzLCB3ZSBtYXRjaCBjZWxscyBjYXNlIGluc2Vuc2l0aXZlLCBpZiB0aGUgY29udGFpbiBhdCBsZWFzdCBvbmUgXCIkXCIsIGFuZCBjYXNlIHNlbnNpdGl2ZSBvdGhlcndpc2UuXG4gICAgICBwYXR0ZXJuOiAvXFxiW0EtWl0rXFxkK1xcYnxcXCRbQS1aYS16XStcXCQ/XFxkK1xcYnxcXGJbQS1aYS16XStcXCRcXGQrXFxiLyxcbiAgICAgIGFsaWFzOiAncHJvcGVydHknXG4gICAgfSxcbiAgICBudW1iZXI6IC8oPzpcXGJcXGQrKD86XFwuXFxkKyk/fFxcQlxcLlxcZCspKD86ZVsrLV0/XFxkKyk/XFxiL2ksXG4gICAgYm9vbGVhbjogL1xcYig/OkZBTFNFfFRSVUUpXFxiL2ksXG4gICAgb3BlcmF0b3I6IC9bLSsqL14lPSYsXXw8Wz0+XT98Pj0/LyxcbiAgICBwdW5jdHVhdGlvbjogL1tbXFxdKCk7e318XS9cbiAgfVxuICBQcmlzbS5sYW5ndWFnZXNbJ3hsc3gnXSA9IFByaXNtLmxhbmd1YWdlc1sneGxzJ10gPVxuICAgIFByaXNtLmxhbmd1YWdlc1snZXhjZWwtZm9ybXVsYSddXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/excel-formula.js\n"));

/***/ })

}]);