"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_shellSession"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/bash.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/bash.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = bash\nbash.displayName = 'bash'\nbash.aliases = ['shell']\nfunction bash(Prism) {\n  ;(function (Prism) {\n    // $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\\n' '|'\n    // + LC_ALL, RANDOM, REPLY, SECONDS.\n    // + make sure PS1..4 are here as they are not always set,\n    // - some useless things.\n    var envVars =\n      '\\\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\\\b'\n    var commandAfterHeredoc = {\n      pattern: /(^([\"']?)\\w+\\2)[ \\t]+\\S.*/,\n      lookbehind: true,\n      alias: 'punctuation',\n      // this looks reasonably well in all themes\n      inside: null // see below\n    }\n    var insideString = {\n      bash: commandAfterHeredoc,\n      environment: {\n        pattern: RegExp('\\\\$' + envVars),\n        alias: 'constant'\n      },\n      variable: [\n        // [0]: Arithmetic Environment\n        {\n          pattern: /\\$?\\(\\([\\s\\S]+?\\)\\)/,\n          greedy: true,\n          inside: {\n            // If there is a $ sign at the beginning highlight $(( and )) as variable\n            variable: [\n              {\n                pattern: /(^\\$\\(\\([\\s\\S]+)\\)\\)/,\n                lookbehind: true\n              },\n              /^\\$\\(\\(/\n            ],\n            number:\n              /\\b0x[\\dA-Fa-f]+\\b|(?:\\b\\d+(?:\\.\\d*)?|\\B\\.\\d+)(?:[Ee]-?\\d+)?/,\n            // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic\n            operator:\n              /--|\\+\\+|\\*\\*=?|<<=?|>>=?|&&|\\|\\||[=!+\\-*/%<>^&|]=?|[?~:]/,\n            // If there is no $ sign at the beginning highlight (( and )) as punctuation\n            punctuation: /\\(\\(?|\\)\\)?|,|;/\n          }\n        }, // [1]: Command Substitution\n        {\n          pattern: /\\$\\((?:\\([^)]+\\)|[^()])+\\)|`[^`]+`/,\n          greedy: true,\n          inside: {\n            variable: /^\\$\\(|^`|\\)$|`$/\n          }\n        }, // [2]: Brace expansion\n        {\n          pattern: /\\$\\{[^}]+\\}/,\n          greedy: true,\n          inside: {\n            operator: /:[-=?+]?|[!\\/]|##?|%%?|\\^\\^?|,,?/,\n            punctuation: /[\\[\\]]/,\n            environment: {\n              pattern: RegExp('(\\\\{)' + envVars),\n              lookbehind: true,\n              alias: 'constant'\n            }\n          }\n        },\n        /\\$(?:\\w+|[#?*!@$])/\n      ],\n      // Escape sequences from echo and printf's manuals, and escaped quotes.\n      entity:\n        /\\\\(?:[abceEfnrtv\\\\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/\n    }\n    Prism.languages.bash = {\n      shebang: {\n        pattern: /^#!\\s*\\/.*/,\n        alias: 'important'\n      },\n      comment: {\n        pattern: /(^|[^\"{\\\\$])#.*/,\n        lookbehind: true\n      },\n      'function-name': [\n        // a) function foo {\n        // b) foo() {\n        // c) function foo() {\n        // but not “foo {”\n        {\n          // a) and c)\n          pattern: /(\\bfunction\\s+)[\\w-]+(?=(?:\\s*\\(?:\\s*\\))?\\s*\\{)/,\n          lookbehind: true,\n          alias: 'function'\n        },\n        {\n          // b)\n          pattern: /\\b[\\w-]+(?=\\s*\\(\\s*\\)\\s*\\{)/,\n          alias: 'function'\n        }\n      ],\n      // Highlight variable names as variables in for and select beginnings.\n      'for-or-select': {\n        pattern: /(\\b(?:for|select)\\s+)\\w+(?=\\s+in\\s)/,\n        alias: 'variable',\n        lookbehind: true\n      },\n      // Highlight variable names as variables in the left-hand part\n      // of assignments (“=” and “+=”).\n      'assign-left': {\n        pattern: /(^|[\\s;|&]|[<>]\\()\\w+(?=\\+?=)/,\n        inside: {\n          environment: {\n            pattern: RegExp('(^|[\\\\s;|&]|[<>]\\\\()' + envVars),\n            lookbehind: true,\n            alias: 'constant'\n          }\n        },\n        alias: 'variable',\n        lookbehind: true\n      },\n      string: [\n        // Support for Here-documents https://en.wikipedia.org/wiki/Here_document\n        {\n          pattern: /((?:^|[^<])<<-?\\s*)(\\w+)\\s[\\s\\S]*?(?:\\r?\\n|\\r)\\2/,\n          lookbehind: true,\n          greedy: true,\n          inside: insideString\n        }, // Here-document with quotes around the tag\n        // → No expansion (so no “inside”).\n        {\n          pattern: /((?:^|[^<])<<-?\\s*)([\"'])(\\w+)\\2\\s[\\s\\S]*?(?:\\r?\\n|\\r)\\3/,\n          lookbehind: true,\n          greedy: true,\n          inside: {\n            bash: commandAfterHeredoc\n          }\n        }, // “Normal” string\n        {\n          // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html\n          pattern:\n            /(^|[^\\\\](?:\\\\\\\\)*)\"(?:\\\\[\\s\\S]|\\$\\([^)]+\\)|\\$(?!\\()|`[^`]+`|[^\"\\\\`$])*\"/,\n          lookbehind: true,\n          greedy: true,\n          inside: insideString\n        },\n        {\n          // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html\n          pattern: /(^|[^$\\\\])'[^']*'/,\n          lookbehind: true,\n          greedy: true\n        },\n        {\n          // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html\n          pattern: /\\$'(?:[^'\\\\]|\\\\[\\s\\S])*'/,\n          greedy: true,\n          inside: {\n            entity: insideString.entity\n          }\n        }\n      ],\n      environment: {\n        pattern: RegExp('\\\\$?' + envVars),\n        alias: 'constant'\n      },\n      variable: insideString.variable,\n      function: {\n        pattern:\n          /(^|[\\s;|&]|[<>]\\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\\s;|&])/,\n        lookbehind: true\n      },\n      keyword: {\n        pattern:\n          /(^|[\\s;|&]|[<>]\\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\\s;|&])/,\n        lookbehind: true\n      },\n      // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html\n      builtin: {\n        pattern:\n          /(^|[\\s;|&]|[<>]\\()(?:\\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\\s;|&])/,\n        lookbehind: true,\n        // Alias added to make those easier to distinguish from strings.\n        alias: 'class-name'\n      },\n      boolean: {\n        pattern: /(^|[\\s;|&]|[<>]\\()(?:false|true)(?=$|[)\\s;|&])/,\n        lookbehind: true\n      },\n      'file-descriptor': {\n        pattern: /\\B&\\d\\b/,\n        alias: 'important'\n      },\n      operator: {\n        // Lots of redirections here, but not just that.\n        pattern:\n          /\\d?<>|>\\||\\+=|=[=~]?|!=?|<<[<-]?|[&\\d]?>>|\\d[<>]&?|[<>][&=]?|&[>&]?|\\|[&|]?/,\n        inside: {\n          'file-descriptor': {\n            pattern: /^\\d/,\n            alias: 'important'\n          }\n        }\n      },\n      punctuation: /\\$?\\(\\(?|\\)\\)?|\\.\\.|[{}[\\];\\\\]/,\n      number: {\n        pattern: /(^|\\s)(?:[1-9]\\d*|0)(?:[.,]\\d+)?\\b/,\n        lookbehind: true\n      }\n    }\n    commandAfterHeredoc.inside = Prism.languages.bash\n    /* Patterns in command substitution. */\n    var toBeCopied = [\n      'comment',\n      'function-name',\n      'for-or-select',\n      'assign-left',\n      'string',\n      'environment',\n      'function',\n      'keyword',\n      'builtin',\n      'boolean',\n      'file-descriptor',\n      'operator',\n      'punctuation',\n      'number'\n    ]\n    var inside = insideString.variable[1].inside\n    for (var i = 0; i < toBeCopied.length; i++) {\n      inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]]\n    }\n    Prism.languages.shell = Prism.languages.bash\n  })(Prism)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9iYXNoLmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esd0JBQXdCLEdBQUcsSUFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLElBQUksY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLElBQUk7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDZpREFBNmlEO0FBQy9qRDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0Esa0JBQWtCLGtHQUFrRztBQUNwSDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK1JBQStSO0FBQ2pUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHlCQUF5QixtQ0FBbUM7QUFDNUQ7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLDJDQUEyQyxJQUFJO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9iYXNoLmpzPzhmMDgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYmFzaFxuYmFzaC5kaXNwbGF5TmFtZSA9ICdiYXNoJ1xuYmFzaC5hbGlhc2VzID0gWydzaGVsbCddXG5mdW5jdGlvbiBiYXNoKFByaXNtKSB7XG4gIDsoZnVuY3Rpb24gKFByaXNtKSB7XG4gICAgLy8gJCBzZXQgfCBncmVwICdeW0EtWl1bXls6c3BhY2U6XV0qPScgfCBjdXQgLWQ9IC1mMSB8IHRyICdcXG4nICd8J1xuICAgIC8vICsgTENfQUxMLCBSQU5ET00sIFJFUExZLCBTRUNPTkRTLlxuICAgIC8vICsgbWFrZSBzdXJlIFBTMS4uNCBhcmUgaGVyZSBhcyB0aGV5IGFyZSBub3QgYWx3YXlzIHNldCxcbiAgICAvLyAtIHNvbWUgdXNlbGVzcyB0aGluZ3MuXG4gICAgdmFyIGVudlZhcnMgPVxuICAgICAgJ1xcXFxiKD86QkFTSHxCQVNIT1BUU3xCQVNIX0FMSUFTRVN8QkFTSF9BUkdDfEJBU0hfQVJHVnxCQVNIX0NNRFN8QkFTSF9DT01QTEVUSU9OX0NPTVBBVF9ESVJ8QkFTSF9MSU5FTk98QkFTSF9SRU1BVENIfEJBU0hfU09VUkNFfEJBU0hfVkVSU0lORk98QkFTSF9WRVJTSU9OfENPTE9SVEVSTXxDT0xVTU5TfENPTVBfV09SREJSRUFLU3xEQlVTX1NFU1NJT05fQlVTX0FERFJFU1N8REVGQVVMVFNfUEFUSHxERVNLVE9QX1NFU1NJT058RElSU1RBQ0t8RElTUExBWXxFVUlEfEdETVNFU1NJT058R0RNX0xBTkd8R05PTUVfS0VZUklOR19DT05UUk9MfEdOT01FX0tFWVJJTkdfUElEfEdQR19BR0VOVF9JTkZPfEdST1VQU3xISVNUQ09OVFJPTHxISVNURklMRXxISVNURklMRVNJWkV8SElTVFNJWkV8SE9NRXxIT1NUTkFNRXxIT1NUVFlQRXxJRlN8SU5TVEFOQ0V8Sk9CfExBTkd8TEFOR1VBR0V8TENfQUREUkVTU3xMQ19BTEx8TENfSURFTlRJRklDQVRJT058TENfTUVBU1VSRU1FTlR8TENfTU9ORVRBUll8TENfTkFNRXxMQ19OVU1FUklDfExDX1BBUEVSfExDX1RFTEVQSE9ORXxMQ19USU1FfExFU1NDTE9TRXxMRVNTT1BFTnxMSU5FU3xMT0dOQU1FfExTX0NPTE9SU3xNQUNIVFlQRXxNQUlMQ0hFQ0t8TUFOREFUT1JZX1BBVEh8Tk9fQVRfQlJJREdFfE9MRFBXRHxPUFRFUlJ8T1BUSU5EfE9SQklUX1NPQ0tFVERJUnxPU1RZUEV8UEFQRVJTSVpFfFBBVEh8UElQRVNUQVRVU3xQUElEfFBTMXxQUzJ8UFMzfFBTNHxQV0R8UkFORE9NfFJFUExZfFNFQ09ORFN8U0VMSU5VWF9JTklUfFNFU1NJT058U0VTU0lPTlRZUEV8U0VTU0lPTl9NQU5BR0VSfFNIRUxMfFNIRUxMT1BUU3xTSExWTHxTU0hfQVVUSF9TT0NLfFRFUk18VUlEfFVQU1RBUlRfRVZFTlRTfFVQU1RBUlRfSU5TVEFOQ0V8VVBTVEFSVF9KT0J8VVBTVEFSVF9TRVNTSU9OfFVTRVJ8V0lORE9XSUR8WEFVVEhPUklUWXxYREdfQ09ORklHX0RJUlN8WERHX0NVUlJFTlRfREVTS1RPUHxYREdfREFUQV9ESVJTfFhER19HUkVFVEVSX0RBVEFfRElSfFhER19NRU5VX1BSRUZJWHxYREdfUlVOVElNRV9ESVJ8WERHX1NFQVR8WERHX1NFQVRfUEFUSHxYREdfU0VTU0lPTl9ERVNLVE9QfFhER19TRVNTSU9OX0lEfFhER19TRVNTSU9OX1BBVEh8WERHX1NFU1NJT05fVFlQRXxYREdfVlROUnxYTU9ESUZJRVJTKVxcXFxiJ1xuICAgIHZhciBjb21tYW5kQWZ0ZXJIZXJlZG9jID0ge1xuICAgICAgcGF0dGVybjogLyheKFtcIiddPylcXHcrXFwyKVsgXFx0XStcXFMuKi8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgYWxpYXM6ICdwdW5jdHVhdGlvbicsXG4gICAgICAvLyB0aGlzIGxvb2tzIHJlYXNvbmFibHkgd2VsbCBpbiBhbGwgdGhlbWVzXG4gICAgICBpbnNpZGU6IG51bGwgLy8gc2VlIGJlbG93XG4gICAgfVxuICAgIHZhciBpbnNpZGVTdHJpbmcgPSB7XG4gICAgICBiYXNoOiBjb21tYW5kQWZ0ZXJIZXJlZG9jLFxuICAgICAgZW52aXJvbm1lbnQ6IHtcbiAgICAgICAgcGF0dGVybjogUmVnRXhwKCdcXFxcJCcgKyBlbnZWYXJzKSxcbiAgICAgICAgYWxpYXM6ICdjb25zdGFudCdcbiAgICAgIH0sXG4gICAgICB2YXJpYWJsZTogW1xuICAgICAgICAvLyBbMF06IEFyaXRobWV0aWMgRW52aXJvbm1lbnRcbiAgICAgICAge1xuICAgICAgICAgIHBhdHRlcm46IC9cXCQ/XFwoXFwoW1xcc1xcU10rP1xcKVxcKS8sXG4gICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSAkIHNpZ24gYXQgdGhlIGJlZ2lubmluZyBoaWdobGlnaHQgJCgoIGFuZCApKSBhcyB2YXJpYWJsZVxuICAgICAgICAgICAgdmFyaWFibGU6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdHRlcm46IC8oXlxcJFxcKFxcKFtcXHNcXFNdKylcXClcXCkvLFxuICAgICAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgL15cXCRcXChcXCgvXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbnVtYmVyOlxuICAgICAgICAgICAgICAvXFxiMHhbXFxkQS1GYS1mXStcXGJ8KD86XFxiXFxkKyg/OlxcLlxcZCopP3xcXEJcXC5cXGQrKSg/OltFZV0tP1xcZCspPy8sXG4gICAgICAgICAgICAvLyBPcGVyYXRvcnMgYWNjb3JkaW5nIHRvIGh0dHBzOi8vd3d3LmdudS5vcmcvc29mdHdhcmUvYmFzaC9tYW51YWwvYmFzaHJlZi5odG1sI1NoZWxsLUFyaXRobWV0aWNcbiAgICAgICAgICAgIG9wZXJhdG9yOlxuICAgICAgICAgICAgICAvLS18XFwrXFwrfFxcKlxcKj0/fDw8PT98Pj49P3wmJnxcXHxcXHx8Wz0hK1xcLSovJTw+XiZ8XT0/fFs/fjpdLyxcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG5vICQgc2lnbiBhdCB0aGUgYmVnaW5uaW5nIGhpZ2hsaWdodCAoKCBhbmQgKSkgYXMgcHVuY3R1YXRpb25cbiAgICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXFwoXFwoP3xcXClcXCk/fCx8Oy9cbiAgICAgICAgICB9XG4gICAgICAgIH0sIC8vIFsxXTogQ29tbWFuZCBTdWJzdGl0dXRpb25cbiAgICAgICAge1xuICAgICAgICAgIHBhdHRlcm46IC9cXCRcXCgoPzpcXChbXildK1xcKXxbXigpXSkrXFwpfGBbXmBdK2AvLFxuICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgIHZhcmlhYmxlOiAvXlxcJFxcKHxeYHxcXCkkfGAkL1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgLy8gWzJdOiBCcmFjZSBleHBhbnNpb25cbiAgICAgICAge1xuICAgICAgICAgIHBhdHRlcm46IC9cXCRcXHtbXn1dK1xcfS8sXG4gICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgb3BlcmF0b3I6IC86Wy09PytdP3xbIVxcL118IyM/fCUlP3xcXF5cXF4/fCwsPy8sXG4gICAgICAgICAgICBwdW5jdHVhdGlvbjogL1tcXFtcXF1dLyxcbiAgICAgICAgICAgIGVudmlyb25tZW50OiB7XG4gICAgICAgICAgICAgIHBhdHRlcm46IFJlZ0V4cCgnKFxcXFx7KScgKyBlbnZWYXJzKSxcbiAgICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgICAgYWxpYXM6ICdjb25zdGFudCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC9cXCQoPzpcXHcrfFsjPyohQCRdKS9cbiAgICAgIF0sXG4gICAgICAvLyBFc2NhcGUgc2VxdWVuY2VzIGZyb20gZWNobyBhbmQgcHJpbnRmJ3MgbWFudWFscywgYW5kIGVzY2FwZWQgcXVvdGVzLlxuICAgICAgZW50aXR5OlxuICAgICAgICAvXFxcXCg/OlthYmNlRWZucnR2XFxcXFwiXXxPP1swLTddezEsM318VVswLTlhLWZBLUZdezh9fHVbMC05YS1mQS1GXXs0fXx4WzAtOWEtZkEtRl17MSwyfSkvXG4gICAgfVxuICAgIFByaXNtLmxhbmd1YWdlcy5iYXNoID0ge1xuICAgICAgc2hlYmFuZzoge1xuICAgICAgICBwYXR0ZXJuOiAvXiMhXFxzKlxcLy4qLyxcbiAgICAgICAgYWxpYXM6ICdpbXBvcnRhbnQnXG4gICAgICB9LFxuICAgICAgY29tbWVudDoge1xuICAgICAgICBwYXR0ZXJuOiAvKF58W15cIntcXFxcJF0pIy4qLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgICdmdW5jdGlvbi1uYW1lJzogW1xuICAgICAgICAvLyBhKSBmdW5jdGlvbiBmb28ge1xuICAgICAgICAvLyBiKSBmb28oKSB7XG4gICAgICAgIC8vIGMpIGZ1bmN0aW9uIGZvbygpIHtcbiAgICAgICAgLy8gYnV0IG5vdCDigJxmb28ge+KAnVxuICAgICAgICB7XG4gICAgICAgICAgLy8gYSkgYW5kIGMpXG4gICAgICAgICAgcGF0dGVybjogLyhcXGJmdW5jdGlvblxccyspW1xcdy1dKyg/PSg/OlxccypcXCg/OlxccypcXCkpP1xccypcXHspLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGFsaWFzOiAnZnVuY3Rpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBiKVxuICAgICAgICAgIHBhdHRlcm46IC9cXGJbXFx3LV0rKD89XFxzKlxcKFxccypcXClcXHMqXFx7KS8sXG4gICAgICAgICAgYWxpYXM6ICdmdW5jdGlvbidcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIC8vIEhpZ2hsaWdodCB2YXJpYWJsZSBuYW1lcyBhcyB2YXJpYWJsZXMgaW4gZm9yIGFuZCBzZWxlY3QgYmVnaW5uaW5ncy5cbiAgICAgICdmb3Itb3Itc2VsZWN0Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvKFxcYig/OmZvcnxzZWxlY3QpXFxzKylcXHcrKD89XFxzK2luXFxzKS8sXG4gICAgICAgIGFsaWFzOiAndmFyaWFibGUnLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAgLy8gSGlnaGxpZ2h0IHZhcmlhYmxlIG5hbWVzIGFzIHZhcmlhYmxlcyBpbiB0aGUgbGVmdC1oYW5kIHBhcnRcbiAgICAgIC8vIG9mIGFzc2lnbm1lbnRzICjigJw94oCdIGFuZCDigJwrPeKAnSkuXG4gICAgICAnYXNzaWduLWxlZnQnOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXFxzO3wmXXxbPD5dXFwoKVxcdysoPz1cXCs/PSkvLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBlbnZpcm9ubWVudDoge1xuICAgICAgICAgICAgcGF0dGVybjogUmVnRXhwKCcoXnxbXFxcXHM7fCZdfFs8Pl1cXFxcKCknICsgZW52VmFycyksXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgYWxpYXM6ICdjb25zdGFudCdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFsaWFzOiAndmFyaWFibGUnLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAgc3RyaW5nOiBbXG4gICAgICAgIC8vIFN1cHBvcnQgZm9yIEhlcmUtZG9jdW1lbnRzIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hlcmVfZG9jdW1lbnRcbiAgICAgICAge1xuICAgICAgICAgIHBhdHRlcm46IC8oKD86XnxbXjxdKTw8LT9cXHMqKShcXHcrKVxcc1tcXHNcXFNdKj8oPzpcXHI/XFxufFxccilcXDIvLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICAgIGluc2lkZTogaW5zaWRlU3RyaW5nXG4gICAgICAgIH0sIC8vIEhlcmUtZG9jdW1lbnQgd2l0aCBxdW90ZXMgYXJvdW5kIHRoZSB0YWdcbiAgICAgICAgLy8g4oaSIE5vIGV4cGFuc2lvbiAoc28gbm8g4oCcaW5zaWRl4oCdKS5cbiAgICAgICAge1xuICAgICAgICAgIHBhdHRlcm46IC8oKD86XnxbXjxdKTw8LT9cXHMqKShbXCInXSkoXFx3KylcXDJcXHNbXFxzXFxTXSo/KD86XFxyP1xcbnxcXHIpXFwzLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgIGJhc2g6IGNvbW1hbmRBZnRlckhlcmVkb2NcbiAgICAgICAgICB9XG4gICAgICAgIH0sIC8vIOKAnE5vcm1hbOKAnSBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgIC8vIGh0dHBzOi8vd3d3LmdudS5vcmcvc29mdHdhcmUvYmFzaC9tYW51YWwvaHRtbF9ub2RlL0RvdWJsZS1RdW90ZXMuaHRtbFxuICAgICAgICAgIHBhdHRlcm46XG4gICAgICAgICAgICAvKF58W15cXFxcXSg/OlxcXFxcXFxcKSopXCIoPzpcXFxcW1xcc1xcU118XFwkXFwoW14pXStcXCl8XFwkKD8hXFwoKXxgW15gXStgfFteXCJcXFxcYCRdKSpcIi8sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgICAgaW5zaWRlOiBpbnNpZGVTdHJpbmdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC8vIGh0dHBzOi8vd3d3LmdudS5vcmcvc29mdHdhcmUvYmFzaC9tYW51YWwvaHRtbF9ub2RlL1NpbmdsZS1RdW90ZXMuaHRtbFxuICAgICAgICAgIHBhdHRlcm46IC8oXnxbXiRcXFxcXSknW14nXSonLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGdyZWVkeTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLy8gaHR0cHM6Ly93d3cuZ251Lm9yZy9zb2Z0d2FyZS9iYXNoL21hbnVhbC9odG1sX25vZGUvQU5TSV8wMDJkQy1RdW90aW5nLmh0bWxcbiAgICAgICAgICBwYXR0ZXJuOiAvXFwkJyg/OlteJ1xcXFxdfFxcXFxbXFxzXFxTXSkqJy8sXG4gICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgZW50aXR5OiBpbnNpZGVTdHJpbmcuZW50aXR5XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgZW52aXJvbm1lbnQ6IHtcbiAgICAgICAgcGF0dGVybjogUmVnRXhwKCdcXFxcJD8nICsgZW52VmFycyksXG4gICAgICAgIGFsaWFzOiAnY29uc3RhbnQnXG4gICAgICB9LFxuICAgICAgdmFyaWFibGU6IGluc2lkZVN0cmluZy52YXJpYWJsZSxcbiAgICAgIGZ1bmN0aW9uOiB7XG4gICAgICAgIHBhdHRlcm46XG4gICAgICAgICAgLyhefFtcXHM7fCZdfFs8Pl1cXCgpKD86YWRkfGFwcm9wb3N8YXB0fGFwdC1jYWNoZXxhcHQtZ2V0fGFwdGl0dWRlfGFzcGVsbHxhdXRvbXlzcWxiYWNrdXB8YXdrfGJhc2VuYW1lfGJhc2h8YmN8YmNvbnNvbGV8Ymd8YnppcDJ8Y2FsfGNhdHxjZmRpc2t8Y2hncnB8Y2hrY29uZmlnfGNobW9kfGNob3dufGNocm9vdHxja3N1bXxjbGVhcnxjbXB8Y29sdW1ufGNvbW18Y29tcG9zZXJ8Y3B8Y3Jvbnxjcm9udGFifGNzcGxpdHxjdXJsfGN1dHxkYXRlfGRjfGRkfGRkcmVzY3VlfGRlYm9vdHN0cmFwfGRmfGRpZmZ8ZGlmZjN8ZGlnfGRpcnxkaXJjb2xvcnN8ZGlybmFtZXxkaXJzfGRtZXNnfGRvY2tlcnxkb2NrZXItY29tcG9zZXxkdXxlZ3JlcHxlamVjdHxlbnZ8ZXRodG9vbHxleHBhbmR8ZXhwZWN0fGV4cHJ8ZmRmb3JtYXR8ZmRpc2t8Zmd8ZmdyZXB8ZmlsZXxmaW5kfGZtdHxmb2xkfGZvcm1hdHxmcmVlfGZzY2t8ZnRwfGZ1c2VyfGdhd2t8Z2l0fGdwYXJ0ZWR8Z3JlcHxncm91cGFkZHxncm91cGRlbHxncm91cG1vZHxncm91cHN8Z3J1Yi1ta2NvbmZpZ3xnemlwfGhhbHR8aGVhZHxoZ3xoaXN0b3J5fGhvc3R8aG9zdG5hbWV8aHRvcHxpY29udnxpZHxpZmNvbmZpZ3xpZmRvd258aWZ1cHxpbXBvcnR8aW5zdGFsbHxpcHxqb2JzfGpvaW58a2lsbHxraWxsYWxsfGxlc3N8bGlua3xsbnxsb2NhdGV8bG9nbmFtZXxsb2dyb3RhdGV8bG9va3xscGN8bHByfGxwcmludHxscHJpbnRkfGxwcmludHF8bHBybXxsc3xsc29mfGx5bnh8bWFrZXxtYW58bWN8bWRhZG18bWtjb25maWd8bWtkaXJ8bWtlMmZzfG1rZmlmb3xta2ZzfG1raXNvZnN8bWtub2R8bWtzd2FwfG1tdnxtb3JlfG1vc3R8bW91bnR8bXRvb2xzfG10cnxtdXR0fG12fG5hbm98bmN8bmV0c3RhdHxuaWNlfG5sfG5vZGV8bm9odXB8bm90aWZ5LXNlbmR8bnBtfG5zbG9va3VwfG9wfG9wZW58cGFydGVkfHBhc3N3ZHxwYXN0ZXxwYXRoY2hrfHBpbmd8cGtpbGx8cG5wbXxwb2RtYW58cG9kbWFuLWNvbXBvc2V8cG9wZHxwcnxwcmludGNhcHxwcmludGVudnxwc3xwdXNoZHxwdnxxdW90YXxxdW90YWNoZWNrfHF1b3RhY3RsfHJhbXxyYXJ8cmNwfHJlYm9vdHxyZW1zeW5jfHJlbmFtZXxyZW5pY2V8cmV2fHJtfHJtZGlyfHJwbXxyc3luY3xzY3B8c2NyZWVufHNkaWZmfHNlZHxzZW5kbWFpbHxzZXF8c2VydmljZXxzZnRwfHNofHNoZWxsY2hlY2t8c2h1ZnxzaHV0ZG93bnxzbGVlcHxzbG9jYXRlfHNvcnR8c3BsaXR8c3NofHN0YXR8c3RyYWNlfHN1fHN1ZG98c3VtfHN1c3BlbmR8c3dhcG9ufHN5bmN8dGFjfHRhaWx8dGFyfHRlZXx0aW1lfHRpbWVvdXR8dG9wfHRvdWNofHRyfHRyYWNlcm91dGV8dHNvcnR8dHR5fHVtb3VudHx1bmFtZXx1bmV4cGFuZHx1bmlxfHVuaXRzfHVucmFyfHVuc2hhcnx1bnppcHx1cGRhdGUtZ3J1Ynx1cHRpbWV8dXNlcmFkZHx1c2VyZGVsfHVzZXJtb2R8dXNlcnN8dXVkZWNvZGV8dXVlbmNvZGV8dnx2Y3BrZ3x2ZGlyfHZpfHZpbXx2aXJzaHx2bXN0YXR8d2FpdHx3YXRjaHx3Y3x3Z2V0fHdoZXJlaXN8d2hpY2h8d2hvfHdob2FtaXx3cml0ZXx4YXJnc3x4ZGctb3Blbnx5YXJufHllc3x6ZW5pdHl8emlwfHpzaHx6eXBwZXIpKD89JHxbKVxcczt8Jl0pLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGtleXdvcmQ6IHtcbiAgICAgICAgcGF0dGVybjpcbiAgICAgICAgICAvKF58W1xcczt8Jl18Wzw+XVxcKCkoPzpjYXNlfGRvfGRvbmV8ZWxpZnxlbHNlfGVzYWN8Zml8Zm9yfGZ1bmN0aW9ufGlmfGlufHNlbGVjdHx0aGVufHVudGlsfHdoaWxlKSg/PSR8WylcXHM7fCZdKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAvLyBodHRwczovL3d3dy5nbnUub3JnL3NvZnR3YXJlL2Jhc2gvbWFudWFsL2h0bWxfbm9kZS9TaGVsbC1CdWlsdGluLUNvbW1hbmRzLmh0bWxcbiAgICAgIGJ1aWx0aW46IHtcbiAgICAgICAgcGF0dGVybjpcbiAgICAgICAgICAvKF58W1xcczt8Jl18Wzw+XVxcKCkoPzpcXC58OnxhbGlhc3xiaW5kfGJyZWFrfGJ1aWx0aW58Y2FsbGVyfGNkfGNvbW1hbmR8Y29udGludWV8ZGVjbGFyZXxlY2hvfGVuYWJsZXxldmFsfGV4ZWN8ZXhpdHxleHBvcnR8Z2V0b3B0c3xoYXNofGhlbHB8bGV0fGxvY2FsfGxvZ291dHxtYXBmaWxlfHByaW50Znxwd2R8cmVhZHxyZWFkYXJyYXl8cmVhZG9ubHl8cmV0dXJufHNldHxzaGlmdHxzaG9wdHxzb3VyY2V8dGVzdHx0aW1lc3x0cmFwfHR5cGV8dHlwZXNldHx1bGltaXR8dW1hc2t8dW5hbGlhc3x1bnNldCkoPz0kfFspXFxzO3wmXSkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAvLyBBbGlhcyBhZGRlZCB0byBtYWtlIHRob3NlIGVhc2llciB0byBkaXN0aW5ndWlzaCBmcm9tIHN0cmluZ3MuXG4gICAgICAgIGFsaWFzOiAnY2xhc3MtbmFtZSdcbiAgICAgIH0sXG4gICAgICBib29sZWFuOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXFxzO3wmXXxbPD5dXFwoKSg/OmZhbHNlfHRydWUpKD89JHxbKVxcczt8Jl0pLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgICdmaWxlLWRlc2NyaXB0b3InOiB7XG4gICAgICAgIHBhdHRlcm46IC9cXEImXFxkXFxiLyxcbiAgICAgICAgYWxpYXM6ICdpbXBvcnRhbnQnXG4gICAgICB9LFxuICAgICAgb3BlcmF0b3I6IHtcbiAgICAgICAgLy8gTG90cyBvZiByZWRpcmVjdGlvbnMgaGVyZSwgYnV0IG5vdCBqdXN0IHRoYXQuXG4gICAgICAgIHBhdHRlcm46XG4gICAgICAgICAgL1xcZD88Pnw+XFx8fFxcKz18PVs9fl0/fCE9P3w8PFs8LV0/fFsmXFxkXT8+PnxcXGRbPD5dJj98Wzw+XVsmPV0/fCZbPiZdP3xcXHxbJnxdPy8sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgICdmaWxlLWRlc2NyaXB0b3InOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXlxcZC8sXG4gICAgICAgICAgICBhbGlhczogJ2ltcG9ydGFudCdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwdW5jdHVhdGlvbjogL1xcJD9cXChcXCg/fFxcKVxcKT98XFwuXFwufFt7fVtcXF07XFxcXF0vLFxuICAgICAgbnVtYmVyOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxcXHMpKD86WzEtOV1cXGQqfDApKD86Wy4sXVxcZCspP1xcYi8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgY29tbWFuZEFmdGVySGVyZWRvYy5pbnNpZGUgPSBQcmlzbS5sYW5ndWFnZXMuYmFzaFxuICAgIC8qIFBhdHRlcm5zIGluIGNvbW1hbmQgc3Vic3RpdHV0aW9uLiAqL1xuICAgIHZhciB0b0JlQ29waWVkID0gW1xuICAgICAgJ2NvbW1lbnQnLFxuICAgICAgJ2Z1bmN0aW9uLW5hbWUnLFxuICAgICAgJ2Zvci1vci1zZWxlY3QnLFxuICAgICAgJ2Fzc2lnbi1sZWZ0JyxcbiAgICAgICdzdHJpbmcnLFxuICAgICAgJ2Vudmlyb25tZW50JyxcbiAgICAgICdmdW5jdGlvbicsXG4gICAgICAna2V5d29yZCcsXG4gICAgICAnYnVpbHRpbicsXG4gICAgICAnYm9vbGVhbicsXG4gICAgICAnZmlsZS1kZXNjcmlwdG9yJyxcbiAgICAgICdvcGVyYXRvcicsXG4gICAgICAncHVuY3R1YXRpb24nLFxuICAgICAgJ251bWJlcidcbiAgICBdXG4gICAgdmFyIGluc2lkZSA9IGluc2lkZVN0cmluZy52YXJpYWJsZVsxXS5pbnNpZGVcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRvQmVDb3BpZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGluc2lkZVt0b0JlQ29waWVkW2ldXSA9IFByaXNtLmxhbmd1YWdlcy5iYXNoW3RvQmVDb3BpZWRbaV1dXG4gICAgfVxuICAgIFByaXNtLmxhbmd1YWdlcy5zaGVsbCA9IFByaXNtLmxhbmd1YWdlcy5iYXNoXG4gIH0pKFByaXNtKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/bash.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/refractor/lang/shell-session.js":
/*!******************************************************!*\
  !*** ./node_modules/refractor/lang/shell-session.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nvar refractorBash = __webpack_require__(/*! ./bash.js */ \"(app-pages-browser)/./node_modules/refractor/lang/bash.js\")\nmodule.exports = shellSession\nshellSession.displayName = 'shellSession'\nshellSession.aliases = []\nfunction shellSession(Prism) {\n  Prism.register(refractorBash)\n  ;(function (Prism) {\n    // CAREFUL!\n    // The following patterns are concatenated, so the group referenced by a back reference is non-obvious!\n    var strings = [\n      // normal string\n      /\"(?:\\\\[\\s\\S]|\\$\\([^)]+\\)|\\$(?!\\()|`[^`]+`|[^\"\\\\`$])*\"/.source,\n      /'[^']*'/.source,\n      /\\$'(?:[^'\\\\]|\\\\[\\s\\S])*'/.source, // here doc\n      // 2 capturing groups\n      /<<-?\\s*([\"']?)(\\w+)\\1\\s[\\s\\S]*?[\\r\\n]\\2/.source\n    ].join('|')\n    Prism.languages['shell-session'] = {\n      command: {\n        pattern: RegExp(\n          // user info\n          /^/.source +\n            '(?:' + // <user> \":\" ( <path> )?\n            (/[^\\s@:$#%*!/\\\\]+@[^\\r\\n@:$#%*!/\\\\]+(?::[^\\0-\\x1F$#%*?\"<>:;|]+)?/\n              .source +\n              '|' + // <path>\n              // Since the path pattern is quite general, we will require it to start with a special character to\n              // prevent false positives.\n              /[/~.][^\\0-\\x1F$#%*?\"<>@:;|]*/.source) +\n            ')?' + // shell symbol\n            /[$#%](?=\\s)/.source + // bash command\n            /(?:[^\\\\\\r\\n \\t'\"<$]|[ \\t](?:(?!#)|#.*$)|\\\\(?:[^\\r]|\\r\\n?)|\\$(?!')|<(?!<)|<<str>>)+/.source.replace(\n              /<<str>>/g,\n              function () {\n                return strings\n              }\n            ),\n          'm'\n        ),\n        greedy: true,\n        inside: {\n          info: {\n            // foo@bar:~/files$ exit\n            // foo@bar$ exit\n            // ~/files$ exit\n            pattern: /^[^#$%]+/,\n            alias: 'punctuation',\n            inside: {\n              user: /^[^\\s@:$#%*!/\\\\]+@[^\\r\\n@:$#%*!/\\\\]+/,\n              punctuation: /:/,\n              path: /[\\s\\S]+/\n            }\n          },\n          bash: {\n            pattern: /(^[$#%]\\s*)\\S[\\s\\S]*/,\n            lookbehind: true,\n            alias: 'language-bash',\n            inside: Prism.languages.bash\n          },\n          'shell-symbol': {\n            pattern: /^[$#%]/,\n            alias: 'important'\n          }\n        }\n      },\n      output: /.(?:.*(?:[\\r\\n]|.$))*/\n    }\n    Prism.languages['sh-session'] = Prism.languages['shellsession'] =\n      Prism.languages['shell-session']\n  })(Prism)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9zaGVsbC1zZXNzaW9uLmpzIiwibWFwcGluZ3MiOiJBQUFZO0FBQ1osb0JBQW9CLG1CQUFPLENBQUMsNEVBQVc7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvc2hlbGwtc2Vzc2lvbi5qcz9lZjE2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xudmFyIHJlZnJhY3RvckJhc2ggPSByZXF1aXJlKCcuL2Jhc2guanMnKVxubW9kdWxlLmV4cG9ydHMgPSBzaGVsbFNlc3Npb25cbnNoZWxsU2Vzc2lvbi5kaXNwbGF5TmFtZSA9ICdzaGVsbFNlc3Npb24nXG5zaGVsbFNlc3Npb24uYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBzaGVsbFNlc3Npb24oUHJpc20pIHtcbiAgUHJpc20ucmVnaXN0ZXIocmVmcmFjdG9yQmFzaClcbiAgOyhmdW5jdGlvbiAoUHJpc20pIHtcbiAgICAvLyBDQVJFRlVMIVxuICAgIC8vIFRoZSBmb2xsb3dpbmcgcGF0dGVybnMgYXJlIGNvbmNhdGVuYXRlZCwgc28gdGhlIGdyb3VwIHJlZmVyZW5jZWQgYnkgYSBiYWNrIHJlZmVyZW5jZSBpcyBub24tb2J2aW91cyFcbiAgICB2YXIgc3RyaW5ncyA9IFtcbiAgICAgIC8vIG5vcm1hbCBzdHJpbmdcbiAgICAgIC9cIig/OlxcXFxbXFxzXFxTXXxcXCRcXChbXildK1xcKXxcXCQoPyFcXCgpfGBbXmBdK2B8W15cIlxcXFxgJF0pKlwiLy5zb3VyY2UsXG4gICAgICAvJ1teJ10qJy8uc291cmNlLFxuICAgICAgL1xcJCcoPzpbXidcXFxcXXxcXFxcW1xcc1xcU10pKicvLnNvdXJjZSwgLy8gaGVyZSBkb2NcbiAgICAgIC8vIDIgY2FwdHVyaW5nIGdyb3Vwc1xuICAgICAgLzw8LT9cXHMqKFtcIiddPykoXFx3KylcXDFcXHNbXFxzXFxTXSo/W1xcclxcbl1cXDIvLnNvdXJjZVxuICAgIF0uam9pbignfCcpXG4gICAgUHJpc20ubGFuZ3VhZ2VzWydzaGVsbC1zZXNzaW9uJ10gPSB7XG4gICAgICBjb21tYW5kOiB7XG4gICAgICAgIHBhdHRlcm46IFJlZ0V4cChcbiAgICAgICAgICAvLyB1c2VyIGluZm9cbiAgICAgICAgICAvXi8uc291cmNlICtcbiAgICAgICAgICAgICcoPzonICsgLy8gPHVzZXI+IFwiOlwiICggPHBhdGg+ICk/XG4gICAgICAgICAgICAoL1teXFxzQDokIyUqIS9cXFxcXStAW15cXHJcXG5AOiQjJSohL1xcXFxdKyg/OjpbXlxcMC1cXHgxRiQjJSo/XCI8Pjo7fF0rKT8vXG4gICAgICAgICAgICAgIC5zb3VyY2UgK1xuICAgICAgICAgICAgICAnfCcgKyAvLyA8cGF0aD5cbiAgICAgICAgICAgICAgLy8gU2luY2UgdGhlIHBhdGggcGF0dGVybiBpcyBxdWl0ZSBnZW5lcmFsLCB3ZSB3aWxsIHJlcXVpcmUgaXQgdG8gc3RhcnQgd2l0aCBhIHNwZWNpYWwgY2hhcmFjdGVyIHRvXG4gICAgICAgICAgICAgIC8vIHByZXZlbnQgZmFsc2UgcG9zaXRpdmVzLlxuICAgICAgICAgICAgICAvWy9+Ll1bXlxcMC1cXHgxRiQjJSo/XCI8PkA6O3xdKi8uc291cmNlKSArXG4gICAgICAgICAgICAnKT8nICsgLy8gc2hlbGwgc3ltYm9sXG4gICAgICAgICAgICAvWyQjJV0oPz1cXHMpLy5zb3VyY2UgKyAvLyBiYXNoIGNvbW1hbmRcbiAgICAgICAgICAgIC8oPzpbXlxcXFxcXHJcXG4gXFx0J1wiPCRdfFsgXFx0XSg/Oig/ISMpfCMuKiQpfFxcXFwoPzpbXlxccl18XFxyXFxuPyl8XFwkKD8hJyl8PCg/ITwpfDw8c3RyPj4pKy8uc291cmNlLnJlcGxhY2UoXG4gICAgICAgICAgICAgIC88PHN0cj4+L2csXG4gICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5nc1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApLFxuICAgICAgICAgICdtJ1xuICAgICAgICApLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgIC8vIGZvb0BiYXI6fi9maWxlcyQgZXhpdFxuICAgICAgICAgICAgLy8gZm9vQGJhciQgZXhpdFxuICAgICAgICAgICAgLy8gfi9maWxlcyQgZXhpdFxuICAgICAgICAgICAgcGF0dGVybjogL15bXiMkJV0rLyxcbiAgICAgICAgICAgIGFsaWFzOiAncHVuY3R1YXRpb24nLFxuICAgICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICAgIHVzZXI6IC9eW15cXHNAOiQjJSohL1xcXFxdK0BbXlxcclxcbkA6JCMlKiEvXFxcXF0rLyxcbiAgICAgICAgICAgICAgcHVuY3R1YXRpb246IC86LyxcbiAgICAgICAgICAgICAgcGF0aDogL1tcXHNcXFNdKy9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGJhc2g6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXlskIyVdXFxzKilcXFNbXFxzXFxTXSovLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGFsaWFzOiAnbGFuZ3VhZ2UtYmFzaCcsXG4gICAgICAgICAgICBpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5iYXNoXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnc2hlbGwtc3ltYm9sJzoge1xuICAgICAgICAgICAgcGF0dGVybjogL15bJCMlXS8sXG4gICAgICAgICAgICBhbGlhczogJ2ltcG9ydGFudCdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvdXRwdXQ6IC8uKD86LiooPzpbXFxyXFxuXXwuJCkpKi9cbiAgICB9XG4gICAgUHJpc20ubGFuZ3VhZ2VzWydzaC1zZXNzaW9uJ10gPSBQcmlzbS5sYW5ndWFnZXNbJ3NoZWxsc2Vzc2lvbiddID1cbiAgICAgIFByaXNtLmxhbmd1YWdlc1snc2hlbGwtc2Vzc2lvbiddXG4gIH0pKFByaXNtKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/shell-session.js\n"));

/***/ })

}]);