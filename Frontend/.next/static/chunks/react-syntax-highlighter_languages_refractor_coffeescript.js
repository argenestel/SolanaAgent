"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_coffeescript"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/coffeescript.js":
/*!*****************************************************!*\
  !*** ./node_modules/refractor/lang/coffeescript.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = coffeescript\ncoffeescript.displayName = 'coffeescript'\ncoffeescript.aliases = ['coffee']\nfunction coffeescript(Prism) {\n  ;(function (Prism) {\n    // Ignore comments starting with { to privilege string interpolation highlighting\n    var comment = /#(?!\\{).+/\n    var interpolation = {\n      pattern: /#\\{[^}]+\\}/,\n      alias: 'variable'\n    }\n    Prism.languages.coffeescript = Prism.languages.extend('javascript', {\n      comment: comment,\n      string: [\n        // Strings are multiline\n        {\n          pattern: /'(?:\\\\[\\s\\S]|[^\\\\'])*'/,\n          greedy: true\n        },\n        {\n          // Strings are multiline\n          pattern: /\"(?:\\\\[\\s\\S]|[^\\\\\"])*\"/,\n          greedy: true,\n          inside: {\n            interpolation: interpolation\n          }\n        }\n      ],\n      keyword:\n        /\\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\\b/,\n      'class-member': {\n        pattern: /@(?!\\d)\\w+/,\n        alias: 'variable'\n      }\n    })\n    Prism.languages.insertBefore('coffeescript', 'comment', {\n      'multiline-comment': {\n        pattern: /###[\\s\\S]+?###/,\n        alias: 'comment'\n      },\n      // Block regexp can contain comments and interpolation\n      'block-regex': {\n        pattern: /\\/{3}[\\s\\S]*?\\/{3}/,\n        alias: 'regex',\n        inside: {\n          comment: comment,\n          interpolation: interpolation\n        }\n      }\n    })\n    Prism.languages.insertBefore('coffeescript', 'string', {\n      'inline-javascript': {\n        pattern: /`(?:\\\\[\\s\\S]|[^\\\\`])*`/,\n        inside: {\n          delimiter: {\n            pattern: /^`|`$/,\n            alias: 'punctuation'\n          },\n          script: {\n            pattern: /[\\s\\S]+/,\n            alias: 'language-javascript',\n            inside: Prism.languages.javascript\n          }\n        }\n      },\n      // Block strings\n      'multiline-string': [\n        {\n          pattern: /'''[\\s\\S]*?'''/,\n          greedy: true,\n          alias: 'string'\n        },\n        {\n          pattern: /\"\"\"[\\s\\S]*?\"\"\"/,\n          greedy: true,\n          alias: 'string',\n          inside: {\n            interpolation: interpolation\n          }\n        }\n      ]\n    })\n    Prism.languages.insertBefore('coffeescript', 'keyword', {\n      // Object property\n      property: /(?!\\d)\\w+(?=\\s*:(?!:))/\n    })\n    delete Prism.languages.coffeescript['template-string']\n    Prism.languages.coffee = Prism.languages.coffeescript\n  })(Prism)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9jb2ZmZWVzY3JpcHQuanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsdUNBQXVDO0FBQ3ZDLHlCQUF5QjtBQUN6QjtBQUNBLG1CQUFtQixHQUFHLElBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EscUJBQXFCLEVBQUUsV0FBVyxFQUFFO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvY29mZmVlc2NyaXB0LmpzP2JiZGUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY29mZmVlc2NyaXB0XG5jb2ZmZWVzY3JpcHQuZGlzcGxheU5hbWUgPSAnY29mZmVlc2NyaXB0J1xuY29mZmVlc2NyaXB0LmFsaWFzZXMgPSBbJ2NvZmZlZSddXG5mdW5jdGlvbiBjb2ZmZWVzY3JpcHQoUHJpc20pIHtcbiAgOyhmdW5jdGlvbiAoUHJpc20pIHtcbiAgICAvLyBJZ25vcmUgY29tbWVudHMgc3RhcnRpbmcgd2l0aCB7IHRvIHByaXZpbGVnZSBzdHJpbmcgaW50ZXJwb2xhdGlvbiBoaWdobGlnaHRpbmdcbiAgICB2YXIgY29tbWVudCA9IC8jKD8hXFx7KS4rL1xuICAgIHZhciBpbnRlcnBvbGF0aW9uID0ge1xuICAgICAgcGF0dGVybjogLyNcXHtbXn1dK1xcfS8sXG4gICAgICBhbGlhczogJ3ZhcmlhYmxlJ1xuICAgIH1cbiAgICBQcmlzbS5sYW5ndWFnZXMuY29mZmVlc2NyaXB0ID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnamF2YXNjcmlwdCcsIHtcbiAgICAgIGNvbW1lbnQ6IGNvbW1lbnQsXG4gICAgICBzdHJpbmc6IFtcbiAgICAgICAgLy8gU3RyaW5ncyBhcmUgbXVsdGlsaW5lXG4gICAgICAgIHtcbiAgICAgICAgICBwYXR0ZXJuOiAvJyg/OlxcXFxbXFxzXFxTXXxbXlxcXFwnXSkqJy8sXG4gICAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBTdHJpbmdzIGFyZSBtdWx0aWxpbmVcbiAgICAgICAgICBwYXR0ZXJuOiAvXCIoPzpcXFxcW1xcc1xcU118W15cXFxcXCJdKSpcIi8sXG4gICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgaW50ZXJwb2xhdGlvbjogaW50ZXJwb2xhdGlvblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGtleXdvcmQ6XG4gICAgICAgIC9cXGIoPzphbmR8YnJlYWt8Ynl8Y2F0Y2h8Y2xhc3N8Y29udGludWV8ZGVidWdnZXJ8ZGVsZXRlfGRvfGVhY2h8ZWxzZXxleHRlbmR8ZXh0ZW5kc3xmYWxzZXxmaW5hbGx5fGZvcnxpZnxpbnxpbnN0YW5jZW9mfGlzfGlzbnR8bGV0fGxvb3B8bmFtZXNwYWNlfG5ld3xub3xub3R8bnVsbHxvZnxvZmZ8b258b3J8b3dufHJldHVybnxzdXBlcnxzd2l0Y2h8dGhlbnx0aGlzfHRocm93fHRydWV8dHJ5fHR5cGVvZnx1bmRlZmluZWR8dW5sZXNzfHVudGlsfHdoZW58d2hpbGV8d2luZG93fHdpdGh8eWVzfHlpZWxkKVxcYi8sXG4gICAgICAnY2xhc3MtbWVtYmVyJzoge1xuICAgICAgICBwYXR0ZXJuOiAvQCg/IVxcZClcXHcrLyxcbiAgICAgICAgYWxpYXM6ICd2YXJpYWJsZSdcbiAgICAgIH1cbiAgICB9KVxuICAgIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2NvZmZlZXNjcmlwdCcsICdjb21tZW50Jywge1xuICAgICAgJ211bHRpbGluZS1jb21tZW50Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvIyMjW1xcc1xcU10rPyMjIy8sXG4gICAgICAgIGFsaWFzOiAnY29tbWVudCdcbiAgICAgIH0sXG4gICAgICAvLyBCbG9jayByZWdleHAgY2FuIGNvbnRhaW4gY29tbWVudHMgYW5kIGludGVycG9sYXRpb25cbiAgICAgICdibG9jay1yZWdleCc6IHtcbiAgICAgICAgcGF0dGVybjogL1xcL3szfVtcXHNcXFNdKj9cXC97M30vLFxuICAgICAgICBhbGlhczogJ3JlZ2V4JyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgY29tbWVudDogY29tbWVudCxcbiAgICAgICAgICBpbnRlcnBvbGF0aW9uOiBpbnRlcnBvbGF0aW9uXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2NvZmZlZXNjcmlwdCcsICdzdHJpbmcnLCB7XG4gICAgICAnaW5saW5lLWphdmFzY3JpcHQnOiB7XG4gICAgICAgIHBhdHRlcm46IC9gKD86XFxcXFtcXHNcXFNdfFteXFxcXGBdKSpgLyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgZGVsaW1pdGVyOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXmB8YCQvLFxuICAgICAgICAgICAgYWxpYXM6ICdwdW5jdHVhdGlvbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNjcmlwdDoge1xuICAgICAgICAgICAgcGF0dGVybjogL1tcXHNcXFNdKy8sXG4gICAgICAgICAgICBhbGlhczogJ2xhbmd1YWdlLWphdmFzY3JpcHQnLFxuICAgICAgICAgICAgaW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIEJsb2NrIHN0cmluZ3NcbiAgICAgICdtdWx0aWxpbmUtc3RyaW5nJzogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0dGVybjogLycnJ1tcXHNcXFNdKj8nJycvLFxuICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgICBhbGlhczogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdHRlcm46IC9cIlwiXCJbXFxzXFxTXSo/XCJcIlwiLyxcbiAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgICAgYWxpYXM6ICdzdHJpbmcnLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgaW50ZXJwb2xhdGlvbjogaW50ZXJwb2xhdGlvblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnY29mZmVlc2NyaXB0JywgJ2tleXdvcmQnLCB7XG4gICAgICAvLyBPYmplY3QgcHJvcGVydHlcbiAgICAgIHByb3BlcnR5OiAvKD8hXFxkKVxcdysoPz1cXHMqOig/ITopKS9cbiAgICB9KVxuICAgIGRlbGV0ZSBQcmlzbS5sYW5ndWFnZXMuY29mZmVlc2NyaXB0Wyd0ZW1wbGF0ZS1zdHJpbmcnXVxuICAgIFByaXNtLmxhbmd1YWdlcy5jb2ZmZWUgPSBQcmlzbS5sYW5ndWFnZXMuY29mZmVlc2NyaXB0XG4gIH0pKFByaXNtKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/coffeescript.js\n"));

/***/ })

}]);