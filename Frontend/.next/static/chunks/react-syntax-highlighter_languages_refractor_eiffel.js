"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_eiffel"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/eiffel.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/eiffel.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = eiffel\neiffel.displayName = 'eiffel'\neiffel.aliases = []\nfunction eiffel(Prism) {\n  Prism.languages.eiffel = {\n    comment: /--.*/,\n    string: [\n      // Aligned-verbatim-strings\n      {\n        pattern: /\"([^[]*)\\[[\\s\\S]*?\\]\\1\"/,\n        greedy: true\n      }, // Non-aligned-verbatim-strings\n      {\n        pattern: /\"([^{]*)\\{[\\s\\S]*?\\}\\1\"/,\n        greedy: true\n      }, // Single-line string\n      {\n        pattern: /\"(?:%(?:(?!\\n)\\s)*\\n\\s*%|%\\S|[^%\"\\r\\n])*\"/,\n        greedy: true\n      }\n    ],\n    // normal char | special char | char code\n    char: /'(?:%.|[^%'\\r\\n])+'/,\n    keyword:\n      /\\b(?:across|agent|alias|all|and|as|assign|attached|attribute|check|class|convert|create|Current|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|implies|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|or|Precursor|redefine|rename|require|rescue|Result|retry|select|separate|some|then|undefine|until|variant|Void|when|xor)\\b/i,\n    boolean: /\\b(?:False|True)\\b/i,\n    // Convention: class-names are always all upper-case characters\n    'class-name': /\\b[A-Z][\\dA-Z_]*\\b/,\n    number: [\n      // hexa | octal | bin\n      /\\b0[xcb][\\da-f](?:_*[\\da-f])*\\b/i, // Decimal\n      /(?:\\b\\d(?:_*\\d)*)?\\.(?:(?:\\d(?:_*\\d)*)?e[+-]?)?\\d(?:_*\\d)*\\b|\\b\\d(?:_*\\d)*\\b\\.?/i\n    ],\n    punctuation: /:=|<<|>>|\\(\\||\\|\\)|->|\\.(?=\\w)|[{}[\\];(),:?]/,\n    operator: /\\\\\\\\|\\|\\.\\.\\||\\.\\.|\\/[~\\/=]?|[><]=?|[-+*^=~]/\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9laWZmZWwuanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHVCQUF1QixLQUFLLFVBQVU7QUFDdEM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxJQUFJO0FBQ3hEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvZWlmZmVsLmpzPzRkZGMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZWlmZmVsXG5laWZmZWwuZGlzcGxheU5hbWUgPSAnZWlmZmVsJ1xuZWlmZmVsLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gZWlmZmVsKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5laWZmZWwgPSB7XG4gICAgY29tbWVudDogLy0tLiovLFxuICAgIHN0cmluZzogW1xuICAgICAgLy8gQWxpZ25lZC12ZXJiYXRpbS1zdHJpbmdzXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC9cIihbXltdKilcXFtbXFxzXFxTXSo/XFxdXFwxXCIvLFxuICAgICAgICBncmVlZHk6IHRydWVcbiAgICAgIH0sIC8vIE5vbi1hbGlnbmVkLXZlcmJhdGltLXN0cmluZ3NcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogL1wiKFtee10qKVxce1tcXHNcXFNdKj9cXH1cXDFcIi8sXG4gICAgICAgIGdyZWVkeTogdHJ1ZVxuICAgICAgfSwgLy8gU2luZ2xlLWxpbmUgc3RyaW5nXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC9cIig/OiUoPzooPyFcXG4pXFxzKSpcXG5cXHMqJXwlXFxTfFteJVwiXFxyXFxuXSkqXCIvLFxuICAgICAgICBncmVlZHk6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIC8vIG5vcm1hbCBjaGFyIHwgc3BlY2lhbCBjaGFyIHwgY2hhciBjb2RlXG4gICAgY2hhcjogLycoPzolLnxbXiUnXFxyXFxuXSkrJy8sXG4gICAga2V5d29yZDpcbiAgICAgIC9cXGIoPzphY3Jvc3N8YWdlbnR8YWxpYXN8YWxsfGFuZHxhc3xhc3NpZ258YXR0YWNoZWR8YXR0cmlidXRlfGNoZWNrfGNsYXNzfGNvbnZlcnR8Y3JlYXRlfEN1cnJlbnR8ZGVidWd8ZGVmZXJyZWR8ZGV0YWNoYWJsZXxkb3xlbHNlfGVsc2VpZnxlbmR8ZW5zdXJlfGV4cGFuZGVkfGV4cG9ydHxleHRlcm5hbHxmZWF0dXJlfGZyb218ZnJvemVufGlmfGltcGxpZXN8aW5oZXJpdHxpbnNwZWN0fGludmFyaWFudHxsaWtlfGxvY2FsfGxvb3B8bm90fG5vdGV8b2Jzb2xldGV8b2xkfG9uY2V8b3J8UHJlY3Vyc29yfHJlZGVmaW5lfHJlbmFtZXxyZXF1aXJlfHJlc2N1ZXxSZXN1bHR8cmV0cnl8c2VsZWN0fHNlcGFyYXRlfHNvbWV8dGhlbnx1bmRlZmluZXx1bnRpbHx2YXJpYW50fFZvaWR8d2hlbnx4b3IpXFxiL2ksXG4gICAgYm9vbGVhbjogL1xcYig/OkZhbHNlfFRydWUpXFxiL2ksXG4gICAgLy8gQ29udmVudGlvbjogY2xhc3MtbmFtZXMgYXJlIGFsd2F5cyBhbGwgdXBwZXItY2FzZSBjaGFyYWN0ZXJzXG4gICAgJ2NsYXNzLW5hbWUnOiAvXFxiW0EtWl1bXFxkQS1aX10qXFxiLyxcbiAgICBudW1iZXI6IFtcbiAgICAgIC8vIGhleGEgfCBvY3RhbCB8IGJpblxuICAgICAgL1xcYjBbeGNiXVtcXGRhLWZdKD86XypbXFxkYS1mXSkqXFxiL2ksIC8vIERlY2ltYWxcbiAgICAgIC8oPzpcXGJcXGQoPzpfKlxcZCkqKT9cXC4oPzooPzpcXGQoPzpfKlxcZCkqKT9lWystXT8pP1xcZCg/Ol8qXFxkKSpcXGJ8XFxiXFxkKD86XypcXGQpKlxcYlxcLj8vaVxuICAgIF0sXG4gICAgcHVuY3R1YXRpb246IC86PXw8PHw+PnxcXChcXHx8XFx8XFwpfC0+fFxcLig/PVxcdyl8W3t9W1xcXTsoKSw6P10vLFxuICAgIG9wZXJhdG9yOiAvXFxcXFxcXFx8XFx8XFwuXFwuXFx8fFxcLlxcLnxcXC9bflxcLz1dP3xbPjxdPT98Wy0rKl49fl0vXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/eiffel.js\n"));

/***/ })

}]);