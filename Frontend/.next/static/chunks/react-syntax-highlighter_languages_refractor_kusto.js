"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_kusto"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/kusto.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/kusto.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = kusto\nkusto.displayName = 'kusto'\nkusto.aliases = []\nfunction kusto(Prism) {\n  Prism.languages.kusto = {\n    comment: {\n      pattern: /\\/\\/.*/,\n      greedy: true\n    },\n    string: {\n      pattern:\n        /```[\\s\\S]*?```|[hH]?(?:\"(?:[^\\r\\n\\\\\"]|\\\\.)*\"|'(?:[^\\r\\n\\\\']|\\\\.)*'|@(?:\"[^\\r\\n\"]*\"|'[^\\r\\n']*'))/,\n      greedy: true\n    },\n    verb: {\n      pattern: /(\\|\\s*)[a-z][\\w-]*/i,\n      lookbehind: true,\n      alias: 'keyword'\n    },\n    command: {\n      pattern: /\\.[a-z][a-z\\d-]*\\b/,\n      alias: 'keyword'\n    },\n    'class-name':\n      /\\b(?:bool|datetime|decimal|dynamic|guid|int|long|real|string|timespan)\\b/,\n    keyword:\n      /\\b(?:access|alias|and|anti|as|asc|auto|between|by|(?:contains|(?:ends|starts)with|has(?:perfix|suffix)?)(?:_cs)?|database|declare|desc|external|from|fullouter|has_all|in|ingestion|inline|inner|innerunique|into|(?:left|right)(?:anti(?:semi)?|inner|outer|semi)?|let|like|local|not|of|on|or|pattern|print|query_parameters|range|restrict|schema|set|step|table|tables|to|view|where|with|matches\\s+regex|nulls\\s+(?:first|last))(?![\\w-])/,\n    boolean: /\\b(?:false|null|true)\\b/,\n    function: /\\b[a-z_]\\w*(?=\\s*\\()/,\n    datetime: [\n      {\n        // RFC 822 + RFC 850\n        pattern:\n          /\\b(?:(?:Fri|Friday|Mon|Monday|Sat|Saturday|Sun|Sunday|Thu|Thursday|Tue|Tuesday|Wed|Wednesday)\\s*,\\s*)?\\d{1,2}(?:\\s+|-)(?:Apr|Aug|Dec|Feb|Jan|Jul|Jun|Mar|May|Nov|Oct|Sep)(?:\\s+|-)\\d{2}\\s+\\d{2}:\\d{2}(?::\\d{2})?(?:\\s*(?:\\b(?:[A-Z]|(?:[ECMT][DS]|GM|U)T)|[+-]\\d{4}))?\\b/,\n        alias: 'number'\n      },\n      {\n        // ISO 8601\n        pattern:\n          /[+-]?\\b(?:\\d{4}-\\d{2}-\\d{2}(?:[ T]\\d{2}:\\d{2}(?::\\d{2}(?:\\.\\d+)?)?)?|\\d{2}:\\d{2}(?::\\d{2}(?:\\.\\d+)?)?)Z?/,\n        alias: 'number'\n      }\n    ],\n    number:\n      /\\b(?:0x[0-9A-Fa-f]+|\\d+(?:\\.\\d+)?(?:[Ee][+-]?\\d+)?)(?:(?:min|sec|[mnµ]s|[dhms]|microsecond|tick)\\b)?|[+-]?\\binf\\b/,\n    operator: /=>|[!=]~|[!=<>]=?|[-+*/%|]|\\.\\./,\n    punctuation: /[()\\[\\]{},;.:]/\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9rdXN0by5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9IQUFvSCxJQUFJLHdFQUF3RSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLG1EQUFtRCxFQUFFO0FBQzlRO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsRUFBRTtBQUM3QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9rdXN0by5qcz8wNzhiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGt1c3RvXG5rdXN0by5kaXNwbGF5TmFtZSA9ICdrdXN0bydcbmt1c3RvLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24ga3VzdG8oUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmt1c3RvID0ge1xuICAgIGNvbW1lbnQ6IHtcbiAgICAgIHBhdHRlcm46IC9cXC9cXC8uKi8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjpcbiAgICAgICAgL2BgYFtcXHNcXFNdKj9gYGB8W2hIXT8oPzpcIig/OlteXFxyXFxuXFxcXFwiXXxcXFxcLikqXCJ8Jyg/OlteXFxyXFxuXFxcXCddfFxcXFwuKSonfEAoPzpcIlteXFxyXFxuXCJdKlwifCdbXlxcclxcbiddKicpKS8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgIHZlcmI6IHtcbiAgICAgIHBhdHRlcm46IC8oXFx8XFxzKilbYS16XVtcXHctXSovaSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ2tleXdvcmQnXG4gICAgfSxcbiAgICBjb21tYW5kOiB7XG4gICAgICBwYXR0ZXJuOiAvXFwuW2Etel1bYS16XFxkLV0qXFxiLyxcbiAgICAgIGFsaWFzOiAna2V5d29yZCdcbiAgICB9LFxuICAgICdjbGFzcy1uYW1lJzpcbiAgICAgIC9cXGIoPzpib29sfGRhdGV0aW1lfGRlY2ltYWx8ZHluYW1pY3xndWlkfGludHxsb25nfHJlYWx8c3RyaW5nfHRpbWVzcGFuKVxcYi8sXG4gICAga2V5d29yZDpcbiAgICAgIC9cXGIoPzphY2Nlc3N8YWxpYXN8YW5kfGFudGl8YXN8YXNjfGF1dG98YmV0d2VlbnxieXwoPzpjb250YWluc3woPzplbmRzfHN0YXJ0cyl3aXRofGhhcyg/OnBlcmZpeHxzdWZmaXgpPykoPzpfY3MpP3xkYXRhYmFzZXxkZWNsYXJlfGRlc2N8ZXh0ZXJuYWx8ZnJvbXxmdWxsb3V0ZXJ8aGFzX2FsbHxpbnxpbmdlc3Rpb258aW5saW5lfGlubmVyfGlubmVydW5pcXVlfGludG98KD86bGVmdHxyaWdodCkoPzphbnRpKD86c2VtaSk/fGlubmVyfG91dGVyfHNlbWkpP3xsZXR8bGlrZXxsb2NhbHxub3R8b2Z8b258b3J8cGF0dGVybnxwcmludHxxdWVyeV9wYXJhbWV0ZXJzfHJhbmdlfHJlc3RyaWN0fHNjaGVtYXxzZXR8c3RlcHx0YWJsZXx0YWJsZXN8dG98dmlld3x3aGVyZXx3aXRofG1hdGNoZXNcXHMrcmVnZXh8bnVsbHNcXHMrKD86Zmlyc3R8bGFzdCkpKD8hW1xcdy1dKS8sXG4gICAgYm9vbGVhbjogL1xcYig/OmZhbHNlfG51bGx8dHJ1ZSlcXGIvLFxuICAgIGZ1bmN0aW9uOiAvXFxiW2Etel9dXFx3Kig/PVxccypcXCgpLyxcbiAgICBkYXRldGltZTogW1xuICAgICAge1xuICAgICAgICAvLyBSRkMgODIyICsgUkZDIDg1MFxuICAgICAgICBwYXR0ZXJuOlxuICAgICAgICAgIC9cXGIoPzooPzpGcml8RnJpZGF5fE1vbnxNb25kYXl8U2F0fFNhdHVyZGF5fFN1bnxTdW5kYXl8VGh1fFRodXJzZGF5fFR1ZXxUdWVzZGF5fFdlZHxXZWRuZXNkYXkpXFxzKixcXHMqKT9cXGR7MSwyfSg/Olxccyt8LSkoPzpBcHJ8QXVnfERlY3xGZWJ8SmFufEp1bHxKdW58TWFyfE1heXxOb3Z8T2N0fFNlcCkoPzpcXHMrfC0pXFxkezJ9XFxzK1xcZHsyfTpcXGR7Mn0oPzo6XFxkezJ9KT8oPzpcXHMqKD86XFxiKD86W0EtWl18KD86W0VDTVRdW0RTXXxHTXxVKVQpfFsrLV1cXGR7NH0pKT9cXGIvLFxuICAgICAgICBhbGlhczogJ251bWJlcidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIElTTyA4NjAxXG4gICAgICAgIHBhdHRlcm46XG4gICAgICAgICAgL1srLV0/XFxiKD86XFxkezR9LVxcZHsyfS1cXGR7Mn0oPzpbIFRdXFxkezJ9OlxcZHsyfSg/OjpcXGR7Mn0oPzpcXC5cXGQrKT8pPyk/fFxcZHsyfTpcXGR7Mn0oPzo6XFxkezJ9KD86XFwuXFxkKyk/KT8pWj8vLFxuICAgICAgICBhbGlhczogJ251bWJlcidcbiAgICAgIH1cbiAgICBdLFxuICAgIG51bWJlcjpcbiAgICAgIC9cXGIoPzoweFswLTlBLUZhLWZdK3xcXGQrKD86XFwuXFxkKyk/KD86W0VlXVsrLV0/XFxkKyk/KSg/Oig/Om1pbnxzZWN8W21uwrVdc3xbZGhtc118bWljcm9zZWNvbmR8dGljaylcXGIpP3xbKy1dP1xcYmluZlxcYi8sXG4gICAgb3BlcmF0b3I6IC89PnxbIT1dfnxbIT08Pl09P3xbLSsqLyV8XXxcXC5cXC4vLFxuICAgIHB1bmN0dWF0aW9uOiAvWygpXFxbXFxde30sOy46XS9cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/kusto.js\n"));

/***/ })

}]);