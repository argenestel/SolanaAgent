"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_qore"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/qore.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/qore.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = qore\nqore.displayName = 'qore'\nqore.aliases = []\nfunction qore(Prism) {\n  Prism.languages.qore = Prism.languages.extend('clike', {\n    comment: {\n      pattern: /(^|[^\\\\])(?:\\/\\*[\\s\\S]*?\\*\\/|(?:\\/\\/|#).*)/,\n      lookbehind: true\n    },\n    // Overridden to allow unescaped multi-line strings\n    string: {\n      pattern: /(\"|')(?:\\\\[\\s\\S]|(?!\\1)[^\\\\])*\\1/,\n      greedy: true\n    },\n    keyword:\n      /\\b(?:abstract|any|assert|binary|bool|boolean|break|byte|case|catch|char|class|code|const|continue|data|default|do|double|else|enum|extends|final|finally|float|for|goto|hash|if|implements|import|inherits|instanceof|int|interface|long|my|native|new|nothing|null|object|our|own|private|reference|rethrow|return|short|soft(?:bool|date|float|int|list|number|string)|static|strictfp|string|sub|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\\b/,\n    boolean: /\\b(?:false|true)\\b/i,\n    function: /\\$?\\b(?!\\d)\\w+(?=\\()/,\n    number:\n      /\\b(?:0b[01]+|0x(?:[\\da-f]*\\.)?[\\da-fp\\-]+|(?:\\d+(?:\\.\\d+)?|\\.\\d+)(?:e\\d+)?[df]|(?:\\d+(?:\\.\\d+)?|\\.\\d+))\\b/i,\n    operator: {\n      pattern:\n        /(^|[^.])(?:\\+[+=]?|-[-=]?|[!=](?:==?|~)?|>>?=?|<(?:=>?|<=?)?|&[&=]?|\\|[|=]?|[*\\/%^]=?|[~?])/,\n      lookbehind: true\n    },\n    variable: /\\$(?!\\d)\\w+\\b/\n  })\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9xb3JlLmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3FvcmUuanM/YzA0NiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBxb3JlXG5xb3JlLmRpc3BsYXlOYW1lID0gJ3FvcmUnXG5xb3JlLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gcW9yZShQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMucW9yZSA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuICAgIGNvbW1lbnQ6IHtcbiAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKSg/OlxcL1xcKltcXHNcXFNdKj9cXCpcXC98KD86XFwvXFwvfCMpLiopLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIC8vIE92ZXJyaWRkZW4gdG8gYWxsb3cgdW5lc2NhcGVkIG11bHRpLWxpbmUgc3RyaW5nc1xuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjogLyhcInwnKSg/OlxcXFxbXFxzXFxTXXwoPyFcXDEpW15cXFxcXSkqXFwxLyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAga2V5d29yZDpcbiAgICAgIC9cXGIoPzphYnN0cmFjdHxhbnl8YXNzZXJ0fGJpbmFyeXxib29sfGJvb2xlYW58YnJlYWt8Ynl0ZXxjYXNlfGNhdGNofGNoYXJ8Y2xhc3N8Y29kZXxjb25zdHxjb250aW51ZXxkYXRhfGRlZmF1bHR8ZG98ZG91YmxlfGVsc2V8ZW51bXxleHRlbmRzfGZpbmFsfGZpbmFsbHl8ZmxvYXR8Zm9yfGdvdG98aGFzaHxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbmhlcml0c3xpbnN0YW5jZW9mfGludHxpbnRlcmZhY2V8bG9uZ3xteXxuYXRpdmV8bmV3fG5vdGhpbmd8bnVsbHxvYmplY3R8b3VyfG93bnxwcml2YXRlfHJlZmVyZW5jZXxyZXRocm93fHJldHVybnxzaG9ydHxzb2Z0KD86Ym9vbHxkYXRlfGZsb2F0fGludHxsaXN0fG51bWJlcnxzdHJpbmcpfHN0YXRpY3xzdHJpY3RmcHxzdHJpbmd8c3VifHN1cGVyfHN3aXRjaHxzeW5jaHJvbml6ZWR8dGhpc3x0aHJvd3x0aHJvd3N8dHJhbnNpZW50fHRyeXx2b2lkfHZvbGF0aWxlfHdoaWxlKVxcYi8sXG4gICAgYm9vbGVhbjogL1xcYig/OmZhbHNlfHRydWUpXFxiL2ksXG4gICAgZnVuY3Rpb246IC9cXCQ/XFxiKD8hXFxkKVxcdysoPz1cXCgpLyxcbiAgICBudW1iZXI6XG4gICAgICAvXFxiKD86MGJbMDFdK3wweCg/OltcXGRhLWZdKlxcLik/W1xcZGEtZnBcXC1dK3woPzpcXGQrKD86XFwuXFxkKyk/fFxcLlxcZCspKD86ZVxcZCspP1tkZl18KD86XFxkKyg/OlxcLlxcZCspP3xcXC5cXGQrKSlcXGIvaSxcbiAgICBvcGVyYXRvcjoge1xuICAgICAgcGF0dGVybjpcbiAgICAgICAgLyhefFteLl0pKD86XFwrWys9XT98LVstPV0/fFshPV0oPzo9PT98fik/fD4+Pz0/fDwoPzo9Pj98PD0/KT98JlsmPV0/fFxcfFt8PV0/fFsqXFwvJV5dPT98W34/XSkvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgdmFyaWFibGU6IC9cXCQoPyFcXGQpXFx3K1xcYi9cbiAgfSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/qore.js\n"));

/***/ })

}]);