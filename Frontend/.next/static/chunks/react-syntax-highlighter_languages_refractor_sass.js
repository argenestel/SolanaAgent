"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_sass"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/sass.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/sass.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = sass\nsass.displayName = 'sass'\nsass.aliases = []\nfunction sass(Prism) {\n  ;(function (Prism) {\n    Prism.languages.sass = Prism.languages.extend('css', {\n      // Sass comments don't need to be closed, only indented\n      comment: {\n        pattern: /^([ \\t]*)\\/[\\/*].*(?:(?:\\r?\\n|\\r)\\1[ \\t].+)*/m,\n        lookbehind: true,\n        greedy: true\n      }\n    })\n    Prism.languages.insertBefore('sass', 'atrule', {\n      // We want to consume the whole line\n      'atrule-line': {\n        // Includes support for = and + shortcuts\n        pattern: /^(?:[ \\t]*)[@+=].+/m,\n        greedy: true,\n        inside: {\n          atrule: /(?:@[\\w-]+|[+=])/\n        }\n      }\n    })\n    delete Prism.languages.sass.atrule\n    var variable = /\\$[-\\w]+|#\\{\\$[-\\w]+\\}/\n    var operator = [\n      /[+*\\/%]|[=!]=|<=?|>=?|\\b(?:and|not|or)\\b/,\n      {\n        pattern: /(\\s)-(?=\\s)/,\n        lookbehind: true\n      }\n    ]\n    Prism.languages.insertBefore('sass', 'property', {\n      // We want to consume the whole line\n      'variable-line': {\n        pattern: /^[ \\t]*\\$.+/m,\n        greedy: true,\n        inside: {\n          punctuation: /:/,\n          variable: variable,\n          operator: operator\n        }\n      },\n      // We want to consume the whole line\n      'property-line': {\n        pattern: /^[ \\t]*(?:[^:\\s]+ *:.*|:[^:\\s].*)/m,\n        greedy: true,\n        inside: {\n          property: [\n            /[^:\\s]+(?=\\s*:)/,\n            {\n              pattern: /(:)[^:\\s]+/,\n              lookbehind: true\n            }\n          ],\n          punctuation: /:/,\n          variable: variable,\n          operator: operator,\n          important: Prism.languages.sass.important\n        }\n      }\n    })\n    delete Prism.languages.sass.property\n    delete Prism.languages.sass.important // Now that whole lines for other patterns are consumed,\n    // what's left should be selectors\n    Prism.languages.insertBefore('sass', 'punctuation', {\n      selector: {\n        pattern:\n          /^([ \\t]*)\\S(?:,[^,\\r\\n]+|[^,\\r\\n]*)(?:,[^,\\r\\n]+)*(?:,(?:\\r?\\n|\\r)\\1[ \\t]+\\S(?:,[^,\\r\\n]+|[^,\\r\\n]*)(?:,[^,\\r\\n]+)*)*/m,\n        lookbehind: true,\n        greedy: true\n      }\n    })\n  })(Prism)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9zYXNzLmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZ0NBQWdDLFVBQVU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9zYXNzLmpzPzk3NTgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gc2Fzc1xuc2Fzcy5kaXNwbGF5TmFtZSA9ICdzYXNzJ1xuc2Fzcy5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIHNhc3MoUHJpc20pIHtcbiAgOyhmdW5jdGlvbiAoUHJpc20pIHtcbiAgICBQcmlzbS5sYW5ndWFnZXMuc2FzcyA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NzcycsIHtcbiAgICAgIC8vIFNhc3MgY29tbWVudHMgZG9uJ3QgbmVlZCB0byBiZSBjbG9zZWQsIG9ubHkgaW5kZW50ZWRcbiAgICAgIGNvbW1lbnQ6IHtcbiAgICAgICAgcGF0dGVybjogL14oWyBcXHRdKilcXC9bXFwvKl0uKig/Oig/Olxccj9cXG58XFxyKVxcMVsgXFx0XS4rKSovbSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdzYXNzJywgJ2F0cnVsZScsIHtcbiAgICAgIC8vIFdlIHdhbnQgdG8gY29uc3VtZSB0aGUgd2hvbGUgbGluZVxuICAgICAgJ2F0cnVsZS1saW5lJzoge1xuICAgICAgICAvLyBJbmNsdWRlcyBzdXBwb3J0IGZvciA9IGFuZCArIHNob3J0Y3V0c1xuICAgICAgICBwYXR0ZXJuOiAvXig/OlsgXFx0XSopW0ArPV0uKy9tLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIGF0cnVsZTogLyg/OkBbXFx3LV0rfFsrPV0pL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICBkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLnNhc3MuYXRydWxlXG4gICAgdmFyIHZhcmlhYmxlID0gL1xcJFstXFx3XSt8I1xce1xcJFstXFx3XStcXH0vXG4gICAgdmFyIG9wZXJhdG9yID0gW1xuICAgICAgL1srKlxcLyVdfFs9IV09fDw9P3w+PT98XFxiKD86YW5kfG5vdHxvcilcXGIvLFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvKFxccyktKD89XFxzKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH1cbiAgICBdXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnc2FzcycsICdwcm9wZXJ0eScsIHtcbiAgICAgIC8vIFdlIHdhbnQgdG8gY29uc3VtZSB0aGUgd2hvbGUgbGluZVxuICAgICAgJ3ZhcmlhYmxlLWxpbmUnOiB7XG4gICAgICAgIHBhdHRlcm46IC9eWyBcXHRdKlxcJC4rL20sXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgcHVuY3R1YXRpb246IC86LyxcbiAgICAgICAgICB2YXJpYWJsZTogdmFyaWFibGUsXG4gICAgICAgICAgb3BlcmF0b3I6IG9wZXJhdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBXZSB3YW50IHRvIGNvbnN1bWUgdGhlIHdob2xlIGxpbmVcbiAgICAgICdwcm9wZXJ0eS1saW5lJzoge1xuICAgICAgICBwYXR0ZXJuOiAvXlsgXFx0XSooPzpbXjpcXHNdKyAqOi4qfDpbXjpcXHNdLiopL20sXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgcHJvcGVydHk6IFtcbiAgICAgICAgICAgIC9bXjpcXHNdKyg/PVxccyo6KS8sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdHRlcm46IC8oOilbXjpcXHNdKy8sXG4gICAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHB1bmN0dWF0aW9uOiAvOi8sXG4gICAgICAgICAgdmFyaWFibGU6IHZhcmlhYmxlLFxuICAgICAgICAgIG9wZXJhdG9yOiBvcGVyYXRvcixcbiAgICAgICAgICBpbXBvcnRhbnQ6IFByaXNtLmxhbmd1YWdlcy5zYXNzLmltcG9ydGFudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICBkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLnNhc3MucHJvcGVydHlcbiAgICBkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLnNhc3MuaW1wb3J0YW50IC8vIE5vdyB0aGF0IHdob2xlIGxpbmVzIGZvciBvdGhlciBwYXR0ZXJucyBhcmUgY29uc3VtZWQsXG4gICAgLy8gd2hhdCdzIGxlZnQgc2hvdWxkIGJlIHNlbGVjdG9yc1xuICAgIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3Nhc3MnLCAncHVuY3R1YXRpb24nLCB7XG4gICAgICBzZWxlY3Rvcjoge1xuICAgICAgICBwYXR0ZXJuOlxuICAgICAgICAgIC9eKFsgXFx0XSopXFxTKD86LFteLFxcclxcbl0rfFteLFxcclxcbl0qKSg/OixbXixcXHJcXG5dKykqKD86LCg/Olxccj9cXG58XFxyKVxcMVsgXFx0XStcXFMoPzosW14sXFxyXFxuXSt8W14sXFxyXFxuXSopKD86LFteLFxcclxcbl0rKSopKi9tLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBncmVlZHk6IHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9KShQcmlzbSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/sass.js\n"));

/***/ })

}]);