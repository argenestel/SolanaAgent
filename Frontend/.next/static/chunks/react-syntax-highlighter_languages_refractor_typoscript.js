"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_typoscript"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/typoscript.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/typoscript.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = typoscript\ntyposcript.displayName = 'typoscript'\ntyposcript.aliases = ['tsconfig']\nfunction typoscript(Prism) {\n  ;(function (Prism) {\n    var keywords =\n      /\\b(?:ACT|ACTIFSUB|CARRAY|CASE|CLEARGIF|COA|COA_INT|CONSTANTS|CONTENT|CUR|EDITPANEL|EFFECT|EXT|FILE|FLUIDTEMPLATE|FORM|FRAME|FRAMESET|GIFBUILDER|GMENU|GMENU_FOLDOUT|GMENU_LAYERS|GP|HMENU|HRULER|HTML|IENV|IFSUB|IMAGE|IMGMENU|IMGMENUITEM|IMGTEXT|IMG_RESOURCE|INCLUDE_TYPOSCRIPT|JSMENU|JSMENUITEM|LLL|LOAD_REGISTER|NO|PAGE|RECORDS|RESTORE_REGISTER|TEMPLATE|TEXT|TMENU|TMENUITEM|TMENU_LAYERS|USER|USER_INT|_GIFBUILDER|global|globalString|globalVar)\\b/\n    Prism.languages.typoscript = {\n      comment: [\n        {\n          // multiline comments /* */\n          pattern: /(^|[^\\\\])\\/\\*[\\s\\S]*?(?:\\*\\/|$)/,\n          lookbehind: true\n        },\n        {\n          // double-slash comments - ignored when backslashes or colon is found in front\n          // also ignored whenever directly after an equal-sign, because it would probably be an url without protocol\n          pattern: /(^|[^\\\\:= \\t]|(?:^|[^= \\t])[ \\t]+)\\/\\/.*/,\n          lookbehind: true,\n          greedy: true\n        },\n        {\n          // hash comments - ignored when leading quote is found for hex colors in strings\n          pattern: /(^|[^\"'])#.*/,\n          lookbehind: true,\n          greedy: true\n        }\n      ],\n      function: [\n        {\n          // old include style\n          pattern:\n            /<INCLUDE_TYPOSCRIPT:\\s*source\\s*=\\s*(?:\"[^\"\\r\\n]*\"|'[^'\\r\\n]*')\\s*>/,\n          inside: {\n            string: {\n              pattern: /\"[^\"\\r\\n]*\"|'[^'\\r\\n]*'/,\n              inside: {\n                keyword: keywords\n              }\n            },\n            keyword: {\n              pattern: /INCLUDE_TYPOSCRIPT/\n            }\n          }\n        },\n        {\n          // new include style\n          pattern: /@import\\s*(?:\"[^\"\\r\\n]*\"|'[^'\\r\\n]*')/,\n          inside: {\n            string: /\"[^\"\\r\\n]*\"|'[^'\\r\\n]*'/\n          }\n        }\n      ],\n      string: {\n        pattern: /^([^=]*=[< ]?)(?:(?!\\]\\n).)*/,\n        lookbehind: true,\n        inside: {\n          function: /\\{\\$.*\\}/,\n          // constants include\n          keyword: keywords,\n          number: /^\\d+$/,\n          punctuation: /[,|:]/\n        }\n      },\n      keyword: keywords,\n      number: {\n        // special highlighting for indexes of arrays in tags\n        pattern: /\\b\\d+\\s*[.{=]/,\n        inside: {\n          operator: /[.{=]/\n        }\n      },\n      tag: {\n        pattern: /\\.?[-\\w\\\\]+\\.?/,\n        inside: {\n          punctuation: /\\./\n        }\n      },\n      punctuation: /[{}[\\];(),.:|]/,\n      operator: /[<>]=?|[!=]=?=?|--?|\\+\\+?|&&?|\\|\\|?|[?*/~^%]/\n    }\n    Prism.languages.tsconfig = Prism.languages.typoscript\n  })(Prism)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy90eXBvc2NyaXB0LmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsTUFBTTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLHVCQUF1QixJQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvdHlwb3NjcmlwdC5qcz9lNDk3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHR5cG9zY3JpcHRcbnR5cG9zY3JpcHQuZGlzcGxheU5hbWUgPSAndHlwb3NjcmlwdCdcbnR5cG9zY3JpcHQuYWxpYXNlcyA9IFsndHNjb25maWcnXVxuZnVuY3Rpb24gdHlwb3NjcmlwdChQcmlzbSkge1xuICA7KGZ1bmN0aW9uIChQcmlzbSkge1xuICAgIHZhciBrZXl3b3JkcyA9XG4gICAgICAvXFxiKD86QUNUfEFDVElGU1VCfENBUlJBWXxDQVNFfENMRUFSR0lGfENPQXxDT0FfSU5UfENPTlNUQU5UU3xDT05URU5UfENVUnxFRElUUEFORUx8RUZGRUNUfEVYVHxGSUxFfEZMVUlEVEVNUExBVEV8Rk9STXxGUkFNRXxGUkFNRVNFVHxHSUZCVUlMREVSfEdNRU5VfEdNRU5VX0ZPTERPVVR8R01FTlVfTEFZRVJTfEdQfEhNRU5VfEhSVUxFUnxIVE1MfElFTlZ8SUZTVUJ8SU1BR0V8SU1HTUVOVXxJTUdNRU5VSVRFTXxJTUdURVhUfElNR19SRVNPVVJDRXxJTkNMVURFX1RZUE9TQ1JJUFR8SlNNRU5VfEpTTUVOVUlURU18TExMfExPQURfUkVHSVNURVJ8Tk98UEFHRXxSRUNPUkRTfFJFU1RPUkVfUkVHSVNURVJ8VEVNUExBVEV8VEVYVHxUTUVOVXxUTUVOVUlURU18VE1FTlVfTEFZRVJTfFVTRVJ8VVNFUl9JTlR8X0dJRkJVSUxERVJ8Z2xvYmFsfGdsb2JhbFN0cmluZ3xnbG9iYWxWYXIpXFxiL1xuICAgIFByaXNtLmxhbmd1YWdlcy50eXBvc2NyaXB0ID0ge1xuICAgICAgY29tbWVudDogW1xuICAgICAgICB7XG4gICAgICAgICAgLy8gbXVsdGlsaW5lIGNvbW1lbnRzIC8qICovXG4gICAgICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pXFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKS8sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLy8gZG91YmxlLXNsYXNoIGNvbW1lbnRzIC0gaWdub3JlZCB3aGVuIGJhY2tzbGFzaGVzIG9yIGNvbG9uIGlzIGZvdW5kIGluIGZyb250XG4gICAgICAgICAgLy8gYWxzbyBpZ25vcmVkIHdoZW5ldmVyIGRpcmVjdGx5IGFmdGVyIGFuIGVxdWFsLXNpZ24sIGJlY2F1c2UgaXQgd291bGQgcHJvYmFibHkgYmUgYW4gdXJsIHdpdGhvdXQgcHJvdG9jb2xcbiAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcOj0gXFx0XXwoPzpefFtePSBcXHRdKVsgXFx0XSspXFwvXFwvLiovLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBoYXNoIGNvbW1lbnRzIC0gaWdub3JlZCB3aGVuIGxlYWRpbmcgcXVvdGUgaXMgZm91bmQgZm9yIGhleCBjb2xvcnMgaW4gc3RyaW5nc1xuICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlwiJ10pIy4qLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGdyZWVkeTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgZnVuY3Rpb246IFtcbiAgICAgICAge1xuICAgICAgICAgIC8vIG9sZCBpbmNsdWRlIHN0eWxlXG4gICAgICAgICAgcGF0dGVybjpcbiAgICAgICAgICAgIC88SU5DTFVERV9UWVBPU0NSSVBUOlxccypzb3VyY2VcXHMqPVxccyooPzpcIlteXCJcXHJcXG5dKlwifCdbXidcXHJcXG5dKicpXFxzKj4vLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgc3RyaW5nOiB7XG4gICAgICAgICAgICAgIHBhdHRlcm46IC9cIlteXCJcXHJcXG5dKlwifCdbXidcXHJcXG5dKicvLFxuICAgICAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgICAgICBrZXl3b3JkOiBrZXl3b3Jkc1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAga2V5d29yZDoge1xuICAgICAgICAgICAgICBwYXR0ZXJuOiAvSU5DTFVERV9UWVBPU0NSSVBUL1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC8vIG5ldyBpbmNsdWRlIHN0eWxlXG4gICAgICAgICAgcGF0dGVybjogL0BpbXBvcnRcXHMqKD86XCJbXlwiXFxyXFxuXSpcInwnW14nXFxyXFxuXSonKS8sXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICBzdHJpbmc6IC9cIlteXCJcXHJcXG5dKlwifCdbXidcXHJcXG5dKicvXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgc3RyaW5nOiB7XG4gICAgICAgIHBhdHRlcm46IC9eKFtePV0qPVs8IF0/KSg/Oig/IVxcXVxcbikuKSovLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBmdW5jdGlvbjogL1xce1xcJC4qXFx9LyxcbiAgICAgICAgICAvLyBjb25zdGFudHMgaW5jbHVkZVxuICAgICAgICAgIGtleXdvcmQ6IGtleXdvcmRzLFxuICAgICAgICAgIG51bWJlcjogL15cXGQrJC8sXG4gICAgICAgICAgcHVuY3R1YXRpb246IC9bLHw6XS9cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGtleXdvcmQ6IGtleXdvcmRzLFxuICAgICAgbnVtYmVyOiB7XG4gICAgICAgIC8vIHNwZWNpYWwgaGlnaGxpZ2h0aW5nIGZvciBpbmRleGVzIG9mIGFycmF5cyBpbiB0YWdzXG4gICAgICAgIHBhdHRlcm46IC9cXGJcXGQrXFxzKlsuez1dLyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgb3BlcmF0b3I6IC9bLns9XS9cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRhZzoge1xuICAgICAgICBwYXR0ZXJuOiAvXFwuP1stXFx3XFxcXF0rXFwuPy8sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXFwuL1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHVuY3R1YXRpb246IC9be31bXFxdOygpLC46fF0vLFxuICAgICAgb3BlcmF0b3I6IC9bPD5dPT98WyE9XT0/PT98LS0/fFxcK1xcKz98JiY/fFxcfFxcfD98Wz8qL35eJV0vXG4gICAgfVxuICAgIFByaXNtLmxhbmd1YWdlcy50c2NvbmZpZyA9IFByaXNtLmxhbmd1YWdlcy50eXBvc2NyaXB0XG4gIH0pKFByaXNtKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/typoscript.js\n"));

/***/ })

}]);