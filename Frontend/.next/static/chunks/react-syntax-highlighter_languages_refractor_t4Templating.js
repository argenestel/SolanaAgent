"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_t4Templating"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/t4-templating.js":
/*!******************************************************!*\
  !*** ./node_modules/refractor/lang/t4-templating.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = t4Templating\nt4Templating.displayName = 't4Templating'\nt4Templating.aliases = []\nfunction t4Templating(Prism) {\n  ;(function (Prism) {\n    function createBlock(prefix, inside, contentAlias) {\n      return {\n        pattern: RegExp('<#' + prefix + '[\\\\s\\\\S]*?#>'),\n        alias: 'block',\n        inside: {\n          delimiter: {\n            pattern: RegExp('^<#' + prefix + '|#>$'),\n            alias: 'important'\n          },\n          content: {\n            pattern: /[\\s\\S]+/,\n            inside: inside,\n            alias: contentAlias\n          }\n        }\n      }\n    }\n    function createT4(insideLang) {\n      var grammar = Prism.languages[insideLang]\n      var className = 'language-' + insideLang\n      return {\n        block: {\n          pattern: /<#[\\s\\S]+?#>/,\n          inside: {\n            directive: createBlock('@', {\n              'attr-value': {\n                pattern: /=(?:(\"|')(?:\\\\[\\s\\S]|(?!\\1)[^\\\\])*\\1|[^\\s'\">=]+)/,\n                inside: {\n                  punctuation: /^=|^[\"']|[\"']$/\n                }\n              },\n              keyword: /\\b\\w+(?=\\s)/,\n              'attr-name': /\\b\\w+/\n            }),\n            expression: createBlock('=', grammar, className),\n            'class-feature': createBlock('\\\\+', grammar, className),\n            standard: createBlock('', grammar, className)\n          }\n        }\n      }\n    }\n    Prism.languages['t4-templating'] = Object.defineProperty({}, 'createT4', {\n      value: createT4\n    })\n  })(Prism)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy90NC10ZW1wbGF0aW5nLmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy90NC10ZW1wbGF0aW5nLmpzPzU5MjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdDRUZW1wbGF0aW5nXG50NFRlbXBsYXRpbmcuZGlzcGxheU5hbWUgPSAndDRUZW1wbGF0aW5nJ1xudDRUZW1wbGF0aW5nLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gdDRUZW1wbGF0aW5nKFByaXNtKSB7XG4gIDsoZnVuY3Rpb24gKFByaXNtKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlQmxvY2socHJlZml4LCBpbnNpZGUsIGNvbnRlbnRBbGlhcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGF0dGVybjogUmVnRXhwKCc8IycgKyBwcmVmaXggKyAnW1xcXFxzXFxcXFNdKj8jPicpLFxuICAgICAgICBhbGlhczogJ2Jsb2NrJyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgZGVsaW1pdGVyOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiBSZWdFeHAoJ148IycgKyBwcmVmaXggKyAnfCM+JCcpLFxuICAgICAgICAgICAgYWxpYXM6ICdpbXBvcnRhbnQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvW1xcc1xcU10rLyxcbiAgICAgICAgICAgIGluc2lkZTogaW5zaWRlLFxuICAgICAgICAgICAgYWxpYXM6IGNvbnRlbnRBbGlhc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVUNChpbnNpZGVMYW5nKSB7XG4gICAgICB2YXIgZ3JhbW1hciA9IFByaXNtLmxhbmd1YWdlc1tpbnNpZGVMYW5nXVxuICAgICAgdmFyIGNsYXNzTmFtZSA9ICdsYW5ndWFnZS0nICsgaW5zaWRlTGFuZ1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYmxvY2s6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvPCNbXFxzXFxTXSs/Iz4vLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgZGlyZWN0aXZlOiBjcmVhdGVCbG9jaygnQCcsIHtcbiAgICAgICAgICAgICAgJ2F0dHItdmFsdWUnOiB7XG4gICAgICAgICAgICAgICAgcGF0dGVybjogLz0oPzooXCJ8JykoPzpcXFxcW1xcc1xcU118KD8hXFwxKVteXFxcXF0pKlxcMXxbXlxccydcIj49XSspLyxcbiAgICAgICAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXj18XltcIiddfFtcIiddJC9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGtleXdvcmQ6IC9cXGJcXHcrKD89XFxzKS8sXG4gICAgICAgICAgICAgICdhdHRyLW5hbWUnOiAvXFxiXFx3Ky9cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogY3JlYXRlQmxvY2soJz0nLCBncmFtbWFyLCBjbGFzc05hbWUpLFxuICAgICAgICAgICAgJ2NsYXNzLWZlYXR1cmUnOiBjcmVhdGVCbG9jaygnXFxcXCsnLCBncmFtbWFyLCBjbGFzc05hbWUpLFxuICAgICAgICAgICAgc3RhbmRhcmQ6IGNyZWF0ZUJsb2NrKCcnLCBncmFtbWFyLCBjbGFzc05hbWUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFByaXNtLmxhbmd1YWdlc1sndDQtdGVtcGxhdGluZyddID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnY3JlYXRlVDQnLCB7XG4gICAgICB2YWx1ZTogY3JlYXRlVDRcbiAgICB9KVxuICB9KShQcmlzbSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/t4-templating.js\n"));

/***/ })

}]);