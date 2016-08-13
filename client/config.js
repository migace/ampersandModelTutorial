System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "plugin-babel",
  typescriptOptions: {
    "tsconfig": true,
    "jsx": "react"
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  packages: {
    "src": {
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "ts"
        }
      }
    },
    "src/components": {
      "defaultExtension": "tsx",
      "meta": {
        "*.tsx": {
          "loader": "ts"
        }
      }
    }
  },

  meta: {
    "*.js": {
      "babelOptions": {
        "es2015": false
      }
    }
  },

  map: {
    "ampersand-model": "npm:ampersand-model@8.0.0",
    "ampersand-sync": "npm:ampersand-sync@5.0.0",
    "jquery": "npm:jquery@3.1.0",
    "less": "npm:systemjs-less-plugin@1.8.3",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.13",
    "plugin-babel-runtime": "npm:babel-runtime@5.8.38",
    "qwest": "npm:qwest@4.4.5",
    "react": "npm:react@15.3.0",
    "react-dom": "npm:react-dom@15.3.0",
    "socket.io-client": "npm:socket.io-client@1.4.8",
    "socketio": "npm:socketio@1.0.0",
    "sockjs-client": "npm:sockjs-client@1.0.0-beta.12",
    "ts": "github:frankwallis/plugin-typescript@5.0.9",
    "ts-runtime": "npm:babel-runtime@5.8.38",
    "typescript": "npm:typescript@1.8.10",
    "typings": "npm:typings@1.3.2",
    "github:frankwallis/plugin-typescript@5.0.9": {
      "typescript": "npm:typescript@2.0.0"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.7"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.8"
    },
    "github:jspm/nodelibs-punycode@0.1.0": {
      "punycode": "npm:punycode@1.3.2"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:accepts@1.3.1": {
      "mime-types": "npm:mime-types@2.1.11",
      "negotiator": "npm:negotiator@0.6.0"
    },
    "npm:accepts@1.3.3": {
      "mime-types": "npm:mime-types@2.1.11",
      "negotiator": "npm:negotiator@0.6.1"
    },
    "npm:agent-base@2.0.1": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "extend": "npm:extend@3.0.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "semver": "npm:semver@5.0.3",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ampersand-events@2.0.2": {
      "ampersand-version": "npm:ampersand-version@1.0.2",
      "lodash": "npm:lodash@4.14.1"
    },
    "npm:ampersand-model@8.0.0": {
      "ampersand-state": "npm:ampersand-state@5.0.2",
      "ampersand-sync": "npm:ampersand-sync@5.0.0",
      "ampersand-version": "npm:ampersand-version@1.0.2",
      "lodash": "npm:lodash@4.14.1"
    },
    "npm:ampersand-state@5.0.2": {
      "ampersand-events": "npm:ampersand-events@2.0.2",
      "ampersand-version": "npm:ampersand-version@1.0.2",
      "array-next": "npm:array-next@0.0.1",
      "key-tree-store": "npm:key-tree-store@1.3.0",
      "lodash": "npm:lodash@4.14.1"
    },
    "npm:ampersand-sync@5.0.0": {
      "ampersand-version": "npm:ampersand-version@1.0.2",
      "lodash": "npm:lodash@4.14.1",
      "media-type": "npm:media-type@0.3.0",
      "qs": "npm:qs@6.2.0",
      "request": "npm:request@2.74.0",
      "xhr": "npm:xhr@2.2.2"
    },
    "npm:ampersand-version@1.0.2": {
      "find-root": "npm:find-root@0.1.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "through2": "npm:through2@0.6.5"
    },
    "npm:ansi-align@1.1.0": {
      "string-width": "npm:string-width@1.0.1"
    },
    "npm:any-promise@1.3.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:array-next@0.0.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:asap@2.0.4": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.8.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:asn1@0.2.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "sys": "github:jspm/nodelibs-util@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert-plus@0.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert-plus@1.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:async@1.5.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:aws-sign2@0.6.0": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:aws4@1.4.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:base64id@0.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:benchmark@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:better-assert@1.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "callsite": "npm:callsite@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bindings@1.2.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bl@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "readable-stream": "npm:readable-stream@2.0.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:bluebird@3.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bn.js@4.11.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:boom@2.10.1": {
      "hoek": "npm:hoek@2.16.3",
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:boxen@0.6.0": {
      "ansi-align": "npm:ansi-align@1.1.0",
      "camelcase": "npm:camelcase@2.1.1",
      "chalk": "npm:chalk@1.1.3",
      "cli-boxes": "npm:cli-boxes@1.0.0",
      "filled-array": "npm:filled-array@1.1.0",
      "object-assign": "npm:object-assign@4.1.0",
      "repeating": "npm:repeating@2.0.1",
      "string-width": "npm:string-width@1.0.1",
      "widest-line": "npm:widest-line@1.0.0"
    },
    "npm:brace-expansion@1.1.6": {
      "balanced-match": "npm:balanced-match@0.4.2",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.1",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.9",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.1.4",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-shims@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bufferutil@1.2.1": {
      "bindings": "npm:bindings@1.2.1",
      "nan": "npm:nan@2.4.0"
    },
    "npm:chalk@1.1.3": {
      "ansi-styles": "npm:ansi-styles@2.2.1",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:cli-boxes@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:clone@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:code-point-at@1.0.0": {
      "number-is-nan": "npm:number-is-nan@1.0.0"
    },
    "npm:columnify@1.5.4": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "wcwidth": "npm:wcwidth@1.0.1"
    },
    "npm:combined-stream@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "delayed-stream": "npm:delayed-stream@1.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.9.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:concat-stream@1.5.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@2.0.6",
      "typedarray": "npm:typedarray@0.0.6"
    },
    "npm:configstore@2.0.0": {
      "dot-prop": "npm:dot-prop@2.4.0",
      "graceful-fs": "npm:graceful-fs@4.1.5",
      "mkdirp": "npm:mkdirp@0.5.1",
      "object-assign": "npm:object-assign@4.1.0",
      "os-tmpdir": "npm:os-tmpdir@1.0.1",
      "osenv": "npm:osenv@0.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "uuid": "npm:uuid@2.0.2",
      "write-file-atomic": "npm:write-file-atomic@1.1.4",
      "xdg-basedir": "npm:xdg-basedir@2.0.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:content-disposition@0.5.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:cookie-signature@1.0.6": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.1"
    },
    "npm:create-error-class@3.0.2": {
      "capture-stack-trace": "npm:capture-stack-trace@1.0.0"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.5"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:cryptiles@2.0.5": {
      "boom": "npm:boom@2.10.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:dashdash@1.14.0": {
      "assert-plus": "npm:assert-plus@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:debug@0.7.4": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:debug@2.2.0": {
      "ms": "npm:ms@0.7.1"
    },
    "npm:deep-extend@0.4.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:defaults@1.0.3": {
      "clone": "npm:clone@1.0.2"
    },
    "npm:delayed-stream@1.0.0": {
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:depd@1.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:destroy@1.0.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:detect-indent@4.0.0": {
      "repeating": "npm:repeating@2.0.1"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:dot-prop@2.4.0": {
      "is-obj": "npm:is-obj@1.0.1"
    },
    "npm:duplexer2@0.1.4": {
      "readable-stream": "npm:readable-stream@2.0.6"
    },
    "npm:ecc-jsbn@0.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "jsbn": "npm:jsbn@0.1.0"
    },
    "npm:elliptic@6.3.1": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.13"
    },
    "npm:engine.io-client@1.6.11": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-emitter": "npm:component-emitter@1.1.2",
      "component-inherit": "npm:component-inherit@0.0.3",
      "debug": "npm:debug@2.2.0",
      "engine.io-parser": "npm:engine.io-parser@1.2.4",
      "has-cors": "npm:has-cors@1.1.0",
      "indexof": "npm:indexof@0.0.1",
      "parsejson": "npm:parsejson@0.0.1",
      "parseqs": "npm:parseqs@0.0.2",
      "parseuri": "npm:parseuri@0.0.4",
      "yeast": "npm:yeast@0.1.2"
    },
    "npm:engine.io-parser@1.2.4": {
      "after": "npm:after@0.8.1",
      "arraybuffer.slice": "npm:arraybuffer.slice@0.0.6",
      "base64-arraybuffer": "npm:base64-arraybuffer@0.1.2",
      "blob": "npm:blob@0.0.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "has-binary": "npm:has-binary@0.1.6",
      "utf8": "npm:utf8@2.1.0"
    },
    "npm:engine.io@1.6.11": {
      "accepts": "npm:accepts@1.3.1",
      "base64id": "npm:base64id@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "debug": "npm:debug@2.2.0",
      "engine.io-parser": "npm:engine.io-parser@1.2.4",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "ws": "npm:ws@1.0.1",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:error-ex@1.3.0": {
      "is-arrayish": "npm:is-arrayish@0.2.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:etag@1.7.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:express@4.14.0": {
      "accepts": "npm:accepts@1.3.3",
      "array-flatten": "npm:array-flatten@1.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "content-disposition": "npm:content-disposition@0.5.1",
      "content-type": "npm:content-type@1.0.2",
      "cookie": "npm:cookie@0.3.1",
      "cookie-signature": "npm:cookie-signature@1.0.6",
      "debug": "npm:debug@2.2.0",
      "depd": "npm:depd@1.1.0",
      "encodeurl": "npm:encodeurl@1.0.1",
      "escape-html": "npm:escape-html@1.0.3",
      "etag": "npm:etag@1.7.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "finalhandler": "npm:finalhandler@0.5.0",
      "fresh": "npm:fresh@0.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "merge-descriptors": "npm:merge-descriptors@1.0.1",
      "methods": "npm:methods@1.1.2",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "on-finished": "npm:on-finished@2.3.0",
      "parseurl": "npm:parseurl@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-to-regexp": "npm:path-to-regexp@0.1.7",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "proxy-addr": "npm:proxy-addr@1.1.2",
      "qs": "npm:qs@6.2.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "range-parser": "npm:range-parser@1.2.0",
      "send": "npm:send@0.14.1",
      "serve-static": "npm:serve-static@1.11.1",
      "type-is": "npm:type-is@1.6.13",
      "utils-merge": "npm:utils-merge@1.0.0",
      "vary": "npm:vary@1.1.0"
    },
    "npm:extsprintf@1.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:faye-websocket@0.7.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "websocket-driver": "npm:websocket-driver@0.6.5"
    },
    "npm:fbjs@0.8.3": {
      "core-js": "npm:core-js@1.2.7",
      "immutable": "npm:immutable@3.8.1",
      "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
      "loose-envify": "npm:loose-envify@1.2.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "ua-parser-js": "npm:ua-parser-js@0.7.10"
    },
    "npm:finalhandler@0.5.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "escape-html": "npm:escape-html@1.0.3",
      "on-finished": "npm:on-finished@2.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "statuses": "npm:statuses@1.3.0",
      "unpipe": "npm:unpipe@1.0.0"
    },
    "npm:find-root@0.1.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:for-each@0.3.2": {
      "is-function": "npm:is-function@1.0.1"
    },
    "npm:forever-agent@0.6.1": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:form-data@1.0.0-rc4": {
      "async": "npm:async@1.5.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "combined-stream": "npm:combined-stream@1.0.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "mime-types": "npm:mime-types@2.1.11",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:formatio@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "samsam": "npm:samsam@1.1.2"
    },
    "npm:fs.realpath@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:generate-function@2.0.0": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:generate-object-property@1.2.0": {
      "is-property": "npm:is-property@1.0.2"
    },
    "npm:getpass@0.1.6": {
      "assert-plus": "npm:assert-plus@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:glob@7.0.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fs.realpath": "npm:fs.realpath@1.0.0",
      "inflight": "npm:inflight@1.0.5",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.2",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:global@4.3.0": {
      "process": "npm:process@0.5.2"
    },
    "npm:got@5.6.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-error-class": "npm:create-error-class@3.0.2",
      "duplexer2": "npm:duplexer2@0.1.4",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-plain-obj": "npm:is-plain-obj@1.1.0",
      "is-redirect": "npm:is-redirect@1.0.0",
      "is-retry-allowed": "npm:is-retry-allowed@1.1.0",
      "is-stream": "npm:is-stream@1.1.0",
      "lowercase-keys": "npm:lowercase-keys@1.0.0",
      "node-status-codes": "npm:node-status-codes@1.0.0",
      "object-assign": "npm:object-assign@4.1.0",
      "parse-json": "npm:parse-json@2.2.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.1",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "read-all-stream": "npm:read-all-stream@3.1.0",
      "readable-stream": "npm:readable-stream@2.0.6",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "timed-out": "npm:timed-out@2.0.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "url-parse-lax": "npm:url-parse-lax@1.0.0"
    },
    "npm:graceful-fs@4.1.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:har-validator@2.0.6": {
      "chalk": "npm:chalk@1.1.3",
      "commander": "npm:commander@2.9.0",
      "is-my-json-valid": "npm:is-my-json-valid@2.13.1",
      "pinkie-promise": "npm:pinkie-promise@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:has-binary@0.1.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "isarray": "npm:isarray@0.0.1"
    },
    "npm:has-binary@0.1.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "isarray": "npm:isarray@0.0.1"
    },
    "npm:has@1.0.1": {
      "function-bind": "npm:function-bind@1.1.0"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:hawk@3.1.3": {
      "boom": "npm:boom@2.10.1",
      "cryptiles": "npm:cryptiles@2.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "hoek": "npm:hoek@2.16.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sntp": "npm:sntp@1.0.9",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:hoek@2.16.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:http-errors@1.5.0": {
      "inherits": "npm:inherits@2.0.1",
      "setprototypeof": "npm:setprototypeof@1.0.1",
      "statuses": "npm:statuses@1.3.0"
    },
    "npm:http-proxy-agent@1.0.0": {
      "agent-base": "npm:agent-base@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "extend": "npm:extend@3.0.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:http-signature@1.1.1": {
      "assert-plus": "npm:assert-plus@0.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "jsprim": "npm:jsprim@1.3.0",
      "sshpk": "npm:sshpk@1.9.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:https-proxy-agent@1.0.0": {
      "agent-base": "npm:agent-base@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "extend": "npm:extend@3.0.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inflight@1.0.5": {
      "once": "npm:once@1.3.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wrappy": "npm:wrappy@1.0.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ini@1.3.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:invariant@2.2.1": {
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-absolute@0.2.5": {
      "is-relative": "npm:is-relative@0.2.1",
      "is-windows": "npm:is-windows@0.1.1"
    },
    "npm:is-finite@1.0.1": {
      "number-is-nan": "npm:number-is-nan@1.0.0"
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "number-is-nan": "npm:number-is-nan@1.0.0"
    },
    "npm:is-function@1.0.1": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-my-json-valid@2.13.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "generate-function": "npm:generate-function@2.0.0",
      "generate-object-property": "npm:generate-object-property@1.2.0",
      "jsonpointer": "npm:jsonpointer@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:is-npm@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-relative@0.2.1": {
      "is-unc-path": "npm:is-unc-path@0.1.1"
    },
    "npm:is-unc-path@0.1.1": {
      "unc-path-regex": "npm:unc-path-regex@0.1.2"
    },
    "npm:is-windows@0.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:isobject@2.1.0": {
      "isarray": "npm:isarray@1.0.0"
    },
    "npm:isomorphic-fetch@2.2.1": {
      "node-fetch": "npm:node-fetch@1.6.0",
      "whatwg-fetch": "npm:whatwg-fetch@1.0.0"
    },
    "npm:isstream@0.1.2": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jodid25519@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "jsbn": "npm:jsbn@0.1.0"
    },
    "npm:jquery@3.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:jsonpointer@2.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:jsprim@1.3.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "extsprintf": "npm:extsprintf@1.0.2",
      "json-schema": "npm:json-schema@0.2.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "verror": "npm:verror@1.3.6"
    },
    "npm:latest-version@2.0.0": {
      "package-json": "npm:package-json@2.3.3"
    },
    "npm:lockfile@1.0.1": {
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:loose-envify@1.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:make-error-cause@1.2.1": {
      "make-error": "npm:make-error@1.2.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:mime-db@1.23.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:mime-types@2.1.11": {
      "mime-db": "npm:mime-db@1.23.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mime@1.3.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:minimatch@3.0.2": {
      "brace-expansion": "npm:brace-expansion@1.1.6",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:mocha@1.21.5": {
      "css": "github:systemjs/plugin-css@0.1.26"
    },
    "npm:nan@2.4.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:node-fetch@1.6.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encoding": "npm:encoding@0.1.12",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-stream": "npm:is-stream@1.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:node-uuid@1.4.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:nopt@1.0.10": {
      "abbrev": "npm:abbrev@1.0.9",
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:oauth-sign@0.8.2": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0"
    },
    "npm:object.pick@1.1.2": {
      "isobject": "npm:isobject@2.1.0"
    },
    "npm:on-finished@2.3.0": {
      "ee-first": "npm:ee-first@1.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:once@1.3.3": {
      "wrappy": "npm:wrappy@1.0.2"
    },
    "npm:options@0.0.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:os-homedir@1.0.1": {
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-tmpdir@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:osenv@0.1.3": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "os-homedir": "npm:os-homedir@1.0.1",
      "os-tmpdir": "npm:os-tmpdir@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:package-json@2.3.3": {
      "got": "npm:got@5.6.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rc": "npm:rc@1.1.6",
      "registry-url": "npm:registry-url@3.1.0",
      "semver": "npm:semver@5.3.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:pako@0.2.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.8.0",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:parse-headers@2.0.1": {
      "for-each": "npm:for-each@0.3.2",
      "trim": "npm:trim@0.0.1"
    },
    "npm:parse-json@2.2.0": {
      "error-ex": "npm:error-ex@1.3.0"
    },
    "npm:parsejson@0.0.1": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:parseqs@0.0.2": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:parseuri@0.0.4": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:parseurl@1.3.1": {
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-is-absolute@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:pinkie-promise@2.0.1": {
      "pinkie": "npm:pinkie@2.0.4"
    },
    "npm:pinkyswear@2.2.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promises-aplus-tests": "npm:promises-aplus-tests@2.0.5"
    },
    "npm:popsicle-proxy-agent@3.0.0": {
      "http-proxy-agent": "npm:http-proxy-agent@1.0.0",
      "https-proxy-agent": "npm:https-proxy-agent@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:popsicle-retry@3.2.1": {
      "any-promise": "npm:any-promise@1.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:popsicle@8.0.4": {
      "any-promise": "npm:any-promise@1.3.0",
      "arrify": "npm:arrify@1.0.1",
      "concat-stream": "npm:concat-stream@1.5.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "make-error-cause": "npm:make-error-cause@1.2.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "throwback": "npm:throwback@1.1.1",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "xtend": "npm:xtend@4.0.1",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:promise-finally@2.2.1": {
      "any-promise": "npm:any-promise@1.3.0"
    },
    "npm:promise@7.1.1": {
      "asap": "npm:asap@2.0.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:promises-aplus-tests@2.0.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "mocha": "npm:mocha@1.21.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sinon": "npm:sinon@1.17.5",
      "underscore": "npm:underscore@1.6.0"
    },
    "npm:proxy-addr@1.1.2": {
      "forwarded": "npm:forwarded@0.1.0",
      "ipaddr.js": "npm:ipaddr.js@1.1.1"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:qwest@4.4.5": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "jquery-param": "npm:jquery-param@0.1.2",
      "pinkyswear": "npm:pinkyswear@2.2.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:randombytes@2.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rc@1.1.6": {
      "deep-extend": "npm:deep-extend@0.4.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ini": "npm:ini@1.3.4",
      "minimist": "npm:minimist@1.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-json-comments": "npm:strip-json-comments@1.0.4"
    },
    "npm:react-dom@15.3.0": {
      "react": "npm:react@15.3.0"
    },
    "npm:react@15.3.0": {
      "fbjs": "npm:fbjs@0.8.3",
      "loose-envify": "npm:loose-envify@1.2.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:read-all-stream@3.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.1",
      "readable-stream": "npm:readable-stream@2.0.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:readable-stream@1.0.34": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:readable-stream@2.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-shims": "npm:buffer-shims@1.0.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:registry-url@3.1.0": {
      "rc": "npm:rc@1.1.6"
    },
    "npm:repeating@2.0.1": {
      "is-finite": "npm:is-finite@1.0.1"
    },
    "npm:request@2.74.0": {
      "aws-sign2": "npm:aws-sign2@0.6.0",
      "aws4": "npm:aws4@1.4.1",
      "bl": "npm:bl@1.1.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "caseless": "npm:caseless@0.11.0",
      "combined-stream": "npm:combined-stream@1.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "extend": "npm:extend@3.0.0",
      "forever-agent": "npm:forever-agent@0.6.1",
      "form-data": "npm:form-data@1.0.0-rc4",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "har-validator": "npm:har-validator@2.0.6",
      "hawk": "npm:hawk@3.1.3",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "http-signature": "npm:http-signature@1.1.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-typedarray": "npm:is-typedarray@1.0.0",
      "isstream": "npm:isstream@0.1.2",
      "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
      "mime-types": "npm:mime-types@2.1.11",
      "node-uuid": "npm:node-uuid@1.4.7",
      "oauth-sign": "npm:oauth-sign@0.8.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "qs": "npm:qs@6.2.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stringstream": "npm:stringstream@0.0.5",
      "tough-cookie": "npm:tough-cookie@2.3.1",
      "tunnel-agent": "npm:tunnel-agent@0.4.3",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:rimraf@2.5.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@7.0.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:semver-diff@2.1.0": {
      "semver": "npm:semver@5.3.0"
    },
    "npm:semver@5.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:semver@5.3.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:send@0.14.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "depd": "npm:depd@1.1.0",
      "destroy": "npm:destroy@1.0.4",
      "encodeurl": "npm:encodeurl@1.0.1",
      "escape-html": "npm:escape-html@1.0.3",
      "etag": "npm:etag@1.7.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fresh": "npm:fresh@0.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http-errors": "npm:http-errors@1.5.0",
      "mime": "npm:mime@1.3.4",
      "ms": "npm:ms@0.7.1",
      "on-finished": "npm:on-finished@2.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "range-parser": "npm:range-parser@1.2.0",
      "statuses": "npm:statuses@1.3.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:serve-static@1.11.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encodeurl": "npm:encodeurl@1.0.1",
      "escape-html": "npm:escape-html@1.0.3",
      "parseurl": "npm:parseurl@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "send": "npm:send@0.14.1",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:sha.js@2.4.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sinon@1.17.5": {
      "formatio": "npm:formatio@1.1.1",
      "lolex": "npm:lolex@1.3.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "samsam": "npm:samsam@1.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:slide@1.1.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sntp@1.0.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "dgram": "github:jspm/nodelibs-dgram@0.1.0",
      "dns": "github:jspm/nodelibs-dns@0.1.0",
      "hoek": "npm:hoek@2.16.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:socket.io-adapter@0.4.0": {
      "debug": "npm:debug@2.2.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "socket.io-parser": "npm:socket.io-parser@2.2.2"
    },
    "npm:socket.io-client@1.4.8": {
      "backo2": "npm:backo2@1.0.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-bind": "npm:component-bind@1.0.0",
      "component-emitter": "npm:component-emitter@1.2.0",
      "debug": "npm:debug@2.2.0",
      "engine.io-client": "npm:engine.io-client@1.6.11",
      "has-binary": "npm:has-binary@0.1.7",
      "indexof": "npm:indexof@0.0.1",
      "object-component": "npm:object-component@0.0.3",
      "parseuri": "npm:parseuri@0.0.4",
      "socket.io-parser": "npm:socket.io-parser@2.2.6",
      "to-array": "npm:to-array@0.1.4"
    },
    "npm:socket.io-parser@2.2.2": {
      "benchmark": "npm:benchmark@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-emitter": "npm:component-emitter@1.1.2",
      "debug": "npm:debug@0.7.4",
      "isarray": "npm:isarray@0.0.1",
      "json3": "npm:json3@3.2.6"
    },
    "npm:socket.io-parser@2.2.6": {
      "benchmark": "npm:benchmark@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-emitter": "npm:component-emitter@1.1.2",
      "debug": "npm:debug@2.2.0",
      "isarray": "npm:isarray@0.0.1",
      "json3": "npm:json3@3.3.2"
    },
    "npm:socket.io@1.4.8": {
      "debug": "npm:debug@2.2.0",
      "engine.io": "npm:engine.io@1.6.11",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "has-binary": "npm:has-binary@0.1.7",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "socket.io-adapter": "npm:socket.io-adapter@0.4.0",
      "socket.io-client": "npm:socket.io-client@1.4.8",
      "socket.io-parser": "npm:socket.io-parser@2.2.6",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:socketio@1.0.0": {
      "express": "npm:express@4.14.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "socket.io": "npm:socket.io@1.4.8"
    },
    "npm:sockjs-client@1.0.0-beta.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "faye-websocket": "npm:faye-websocket@0.7.3",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "inherits": "npm:inherits@2.0.1",
      "json3": "npm:json3@3.3.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url-parse": "npm:url-parse@1.1.1"
    },
    "npm:sort-keys@1.1.2": {
      "is-plain-obj": "npm:is-plain-obj@1.1.0"
    },
    "npm:sshpk@1.9.2": {
      "asn1": "npm:asn1@0.2.3",
      "assert-plus": "npm:assert-plus@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "dashdash": "npm:dashdash@1.14.0",
      "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
      "getpass": "npm:getpass@0.1.6",
      "jodid25519": "npm:jodid25519@1.0.2",
      "jsbn": "npm:jsbn@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tweetnacl": "npm:tweetnacl@0.13.3",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:statuses@1.3.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string-width@1.0.1": {
      "code-point-at": "npm:code-point-at@1.0.0",
      "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
      "strip-ansi": "npm:strip-ansi@3.0.1"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:stringstream@0.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:strip-ansi@3.0.1": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:strip-bom@2.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "is-utf8": "npm:is-utf8@0.2.1"
    },
    "npm:strip-json-comments@1.0.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:thenify@3.2.0": {
      "any-promise": "npm:any-promise@1.3.0",
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:through2@0.6.5": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.0.34",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:throwback@1.1.1": {
      "any-promise": "npm:any-promise@1.3.0"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.8"
    },
    "npm:touch@1.0.0": {
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "nopt": "npm:nopt@1.0.10",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:tough-cookie@2.3.1": {
      "net": "github:jspm/nodelibs-net@0.1.2",
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:tunnel-agent@0.4.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:type-is@1.6.13": {
      "media-typer": "npm:media-typer@0.3.0",
      "mime-types": "npm:mime-types@2.1.11"
    },
    "npm:typescript@1.8.10": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:typescript@1.8.7": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:typescript@2.0.0": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:typings-core@1.4.0": {
      "any-promise": "npm:any-promise@1.3.0",
      "array-uniq": "npm:array-uniq@1.0.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "configstore": "npm:configstore@2.0.0",
      "debug": "npm:debug@2.2.0",
      "detect-indent": "npm:detect-indent@4.0.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.5",
      "has": "npm:has@1.0.1",
      "invariant": "npm:invariant@2.2.1",
      "is-absolute": "npm:is-absolute@0.2.5",
      "listify": "npm:listify@1.0.0",
      "lockfile": "npm:lockfile@1.0.1",
      "make-error-cause": "npm:make-error-cause@1.2.1",
      "mkdirp": "npm:mkdirp@0.5.1",
      "object.pick": "npm:object.pick@1.1.2",
      "parse-json": "npm:parse-json@2.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "popsicle": "npm:popsicle@8.0.4",
      "popsicle-proxy-agent": "npm:popsicle-proxy-agent@3.0.0",
      "popsicle-retry": "npm:popsicle-retry@3.2.1",
      "popsicle-status": "npm:popsicle-status@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise-finally": "npm:promise-finally@2.2.1",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "rc": "npm:rc@1.1.6",
      "rimraf": "npm:rimraf@2.5.4",
      "sort-keys": "npm:sort-keys@1.1.2",
      "string-template": "npm:string-template@1.0.0",
      "strip-bom": "npm:strip-bom@2.0.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "thenify": "npm:thenify@3.2.0",
      "throat": "npm:throat@3.0.0",
      "touch": "npm:touch@1.0.0",
      "typescript": "npm:typescript@1.8.7",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "xtend": "npm:xtend@4.0.1",
      "zip-object": "npm:zip-object@0.1.0"
    },
    "npm:typings@1.3.2": {
      "any-promise": "npm:any-promise@1.3.0",
      "archy": "npm:archy@1.0.0",
      "bluebird": "npm:bluebird@3.4.1",
      "chalk": "npm:chalk@1.1.3",
      "columnify": "npm:columnify@1.5.4",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "listify": "npm:listify@1.0.0",
      "minimist": "npm:minimist@1.2.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "typings-core": "npm:typings-core@1.4.0",
      "update-notifier": "npm:update-notifier@1.0.2",
      "wordwrap": "npm:wordwrap@1.0.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:ua-parser-js@0.7.10": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:ultron@1.0.2": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:update-notifier@1.0.2": {
      "boxen": "npm:boxen@0.6.0",
      "chalk": "npm:chalk@1.1.3",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "configstore": "npm:configstore@2.0.0",
      "is-npm": "npm:is-npm@1.0.0",
      "latest-version": "npm:latest-version@2.0.0",
      "lazy-req": "npm:lazy-req@1.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "semver-diff": "npm:semver-diff@2.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xdg-basedir": "npm:xdg-basedir@2.0.0"
    },
    "npm:url-parse-lax@1.0.0": {
      "prepend-http": "npm:prepend-http@1.0.4",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:url-parse@1.1.1": {
      "querystringify": "npm:querystringify@0.0.3",
      "requires-port": "npm:requires-port@1.0.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:utf-8-validate@1.2.1": {
      "bindings": "npm:bindings@1.2.1",
      "nan": "npm:nan@2.4.0"
    },
    "npm:utf8@2.1.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:uuid@2.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:verror@1.3.6": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "extsprintf": "npm:extsprintf@1.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:wcwidth@1.0.1": {
      "defaults": "npm:defaults@1.0.3"
    },
    "npm:websocket-driver@0.6.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "websocket-extensions": "npm:websocket-extensions@0.1.1"
    },
    "npm:websocket-extensions@0.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:widest-line@1.0.0": {
      "string-width": "npm:string-width@1.0.1"
    },
    "npm:write-file-atomic@1.1.4": {
      "graceful-fs": "npm:graceful-fs@4.1.5",
      "imurmurhash": "npm:imurmurhash@0.1.4",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "slide": "npm:slide@1.1.6"
    },
    "npm:ws@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bufferutil": "npm:bufferutil@1.2.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "options": "npm:options@0.0.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "ultron": "npm:ultron@1.0.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "utf-8-validate": "npm:utf-8-validate@1.2.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:xdg-basedir@2.0.0": {
      "os-homedir": "npm:os-homedir@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:xhr@2.2.2": {
      "global": "npm:global@4.3.0",
      "is-function": "npm:is-function@1.0.1",
      "parse-headers": "npm:parse-headers@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "xtend": "npm:xtend@4.0.1"
    }
  }
});
