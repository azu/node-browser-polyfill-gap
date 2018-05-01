# Node.js and Browser shim gap

[webpack](https://github.com/webpack/webpack "webpack") and [browserify](https://github.com/substack/node-browserify "browserify") user shim libraries for in-browser usage.

For example, webpack and browserify alias `assert` module to [commonjs-assert](https://github.com/defunctzombie/commonjs-assert "commonjs-assert") in browser-env.

## Shim library

- webpack:
  - [webpack/node-libs-browser: The node core libs for in browser usage.](https://github.com/webpack/node-libs-browser "webpack/node-libs-browser: The node core libs for in browser usage.")
- browserify:
  - [substack/browserify-handbook: how to build modular applications with browserify](https://github.com/substack/browserify-handbook#builtins)
  - [node-browserify/builtins.js at master · substack/node-browserify](https://github.com/substack/node-browserify/blob/master/lib/builtins.js)

## Purpose

Recently, Node.js have upgraded own core module like `assert`. But, shim module like [commonjs-assert](https://github.com/defunctzombie/commonjs-assert "commonjs-assert") does not follow the breaking change.

This repository aim to collect the gap issue between Node.js and Browser shims.

## Test Suite

### Node.js >= 10.0.0 [![Build Status](https://travis-ci.org/azu/node-browser-shim-gap.svg?branch=master)](https://travis-ci.org/azu/node-browser-shim-gap)

    npm run test:node 

### webpack [CI Test Status](https://travis-ci.org/azu/node-browser-shim-gap)

    npm run test:webpack 

### browserify [CI Test Status](https://travis-ci.org/azu/node-browser-shim-gap)

    npm run test:browserify

## Gap list

|    Node.js     |               Browser shim               |                  Issue                   | Link                                     |
| :------------: | :--------------------------------------: | :--------------------------------------: | ---------------------------------------- |
|     assert     | [defunctzombie/commonjs-assert](https://github.com/defunctzombie/commonjs-assert) | Error code and Error message are different | [Issue](https://github.com/nodejs/node/issues/13937), [Article](https://medium.com/the-node-js-collection/node-js-errors-changes-you-need-to-know-about-dc8c82417f65) |
|                |                                          | `assert.deepEqual` does't support `Map`, `Set`, `Iterator` etc... | [Issue](https://github.com/nodejs/node/issues/2309), [Document](https://nodejs.org/api/assert.html#assert_assert_deepequal_actual_expected_message), [Release](https://nodejs.org/en/blog/release/v8.0.0/) |
|                |                                          | `require("assert").strict` | [Docs](https://nodejs.org/api/assert.html#assert_strict_mode), [Release](https://nodejs.org/en/blog/release/v9.9.0/) |
|     buffer     | [feross/buffer](https://github.com/feross/buffer) |                   ---                    |                                          |
| child_process  |                   ---                    |                   ---                    |                                          |
|    cluster     |                   ---                    |                   ---                    |                                          |
|    console     | [Raynos/console-browserify](https://github.com/Raynos/console-browserify) |                   ---                    |                                          |
|   constants    | [juliangruber/constants-browserify](https://github.com/juliangruber/constants-browserify) |                   ---                    |                                          |
|     crypto     | [crypto-browserify/crypto-browserify](https://github.com/crypto-browserify/crypto-browserify) |                   ---                    |                                          |
|     dgram      |                   ---                    |                   ---                    |                                          |
|      dns       |                   ---                    |                   ---                    |                                          |
|     domain     | [bevry/domain-browser](https://github.com/bevry/domain-browser) |                   ---                    |                                          |
|     events     | [Gozala/events](https://github.com/Gozala/events) | [`eventNames`](https://nodejs.org/api/events.html#events_emitter_eventnames) | [Issue](https://github.com/Gozala/events/pull/32) |
|                |                                          | [`getMaxListeners`](https://nodejs.org/api/events.html#events_emitter_getmaxlisteners) | [Issue](https://github.com/Gozala/events/pull/32) |
|                |                                          | [`prependListener`](https://nodejs.org/api/events.html#events_emitter_prependlistener_eventname_listener) | [Issue](https://github.com/Gozala/events/pull/32) |
|                |                                          | [`prependOnceListener`](https://nodejs.org/api/events.html#events_emitter_prependoncelistener_eventname_listener) | [Issue](https://github.com/Gozala/events/pull/32) |
|                |                                          | `off` | [Issue](https://github.com/nodejs/node/pull/17156) |
|       fs       |                   [fs/promises](https://nodejs.org/api/fs.html#fs_fs_promises_api)                    |    [PR](https://github.com/nodejs/node/pull/18297)              ---                    |                                          |
|      http      | [jhiesey/stream-http](https://github.com/jhiesey/stream-http) |                   ---                    |                                          |
|     https      | [substack/https-browserify](https://github.com/substack/https-browserify) |                   ---                    |                                          |
|     module     |                   ---                    |                   ---                    |                                          |
|      net       |                   ---                    |                   ---                    |                                          |
|       os       | [CoderPuppy/os-browserify](https://github.com/CoderPuppy/os-browserify) | [os.constants](https://nodejs.org/api/os.html#os_os_constants "os.constants") |                                          |
|      path      | [substack/path-browserify](https://github.com/substack/path-browserify) | [path.posix](https://nodejs.org/api/path.html#path_path_posix "path.posix") | [Issue](https://github.com/substack/path-browserify/issues/11 "Update to use newer node path code · Issue #11 · substack/path-browserify") |
|                |                                          | [path.parse(path)](https://nodejs.org/docs/latest/api/path.html#path_path_parse_path "path.parse(path)") | [Issue](https://github.com/substack/path-browserify/issues/2) |
|                |                                          | [path.win32](https://nodejs.org/api/path.html#path_path_posix "path.win32") |                                          |
|                |                                          | [path.format(pathObject)](https://nodejs.org/api/path.html#path_path_posix "path.format(pathObject)") |                                          |
|    process     | [shtylman/node-process](https://github.com/shtylman/node-process) | [process.channel](https://nodejs.org/api/process.html#process_process_channel "process.channel") |                                          |
|                |                                          | [process.platform](https://nodejs.org/api/process.html#process_process_platform "process.platform") | [Issue](https://github.com/defunctzombie/node-process/issues/55) |
|                |                                          | [process.execArgv](https://nodejs.org/api/process.html#process_process_execargv "process.execArgv") | [Issue](https://github.com/defunctzombie/node-process/issues/75) |
|                |                                          | [process.cpuUsage([previousValue])](https://nodejs.org/api/process.html#process_process_cpuusage_previousvalue "process.cpuUsage([previousValue])") |                                          |
|                |                                          | [process.emitWarning(warning[, options])](https://nodejs.org/api/process.html#process_process_emitwarning_warning_options "process.emitWarning(warning[, options])") |                                          |
|    punycode    | [bestiejs/punycode.js](https://github.com/bestiejs/punycode.js) |                   ---                    |                                          |
|  querystring   | [mike-spainhower/querystring](https://github.com/mike-spainhower/querystring) |                   ---                    |                                          |
|    readline    |                   ---                    |                   ---                    |                                          |
|      repl      |                   ---                    |                   ---                    |                                          |
|     stream     | [substack/stream-browserify](https://github.com/substack/stream-browserify) |                   ---                    |                                          |
| string_decoder | [rvagg/string_decoder](https://github.com/rvagg/string_decoder) |                   TODO                   | [Repository](https://github.com/nodejs/string_decoder) |
|      sys       | [defunctzombie/node-util](https://github.com/defunctzombie/node-util) |                   TODO                   |                                          |
|     timers     | [jryans/timers-browserify](https://github.com/jryans/timers-browserify) |                   ---                    |                                          |
|      tls       |                   ---                    |                   ---                    |                                          |
|      tty       | [substack/tty-browserify](https://github.com/substack/tty-browserify) |                   ---                    |                                          |
|      url       | [defunctzombie/node-url](https://github.com/defunctzombie/node-url) |          `url.URL`(WHATWG URL)           | [Release](https://nodejs.org/en/blog/release/v8.0.0/#say-hello-to-the-whatwg-url-parser), [Document](https://nodejs.org/api/url.html#url_the_whatwg_url_api), [Issue](https://github.com/defunctzombie/node-url/issues/33) |
|                |                                          | `url.format` does't support  WHATWG URL  | [Release](https://nodejs.org/en/blog/release/v7.6.0/), [Document](https://nodejs.org/api/url.html#url_url_format_url_options) |
|      util      | [defunctzombie/node-util](https://github.com/defunctzombie/node-util) | [util.callbackify(original)](https://nodejs.org/api/util.html#util_util_callbackify_original "util.callbackify(original)") |                                          |
|                |                                          | [util.inspect.custom](https://nodejs.org/api/util.html#util_util_inspect_custom "util.inspect.custom") |                                          |
|                |                                          | [util.inspect.defaultOptions](https://nodejs.org/api/util.html#util_util_inspect_defaultoptions "util.inspect.defaultOptions") |                                          |
|                |                                          | [util.promisify(original)](https://nodejs.org/api/util.html#util_util_promisify_original "util.promisify(original)") |                                          |
|                |                                          | [util.promisify.custom](https://nodejs.org/api/util.html#util_util_promisify_custom "util.promisify.custom") |                                          |
|                |                                          | [util.inspect() options maxArrayLength, breakLength](https://github.com/defunctzombie/node-util/issues/15 "util.inspect() options maxArrayLength, breakLength") |                                          |
|                |                                          | [util.isDeepStrictEqual](https://nodejs.org/api/util.html#util_util_isdeepstrictequal_val1_val2) |                                          |
|                |                                          | [util.isDeepStrictEqual](https://nodejs.org/api/util.html#util_util_isdeepstrictequal_val1_val2) |                                          |
|       vm       | [substack/vm-browserify](https://github.com/substack/vm-browserify) | [vm.isContext(sandbox)](https://nodejs.org/api/vm.html#vm_vm_runincontext_code_contextifiedsandbox_options "vm.isContext(sandbox)") |                                          |
|      zlib      | [devongovett/browserify-zlib](https://github.com/devongovett/browserify-zlib) | [zlib.bytesRead](https://nodejs.org/api/zlib.html#zlib_zlib_bytesread "zlib.bytesRead#") |                                          |
