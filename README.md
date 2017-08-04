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

## Gap



|    Node.js     |               Browser shim               |                  Issue                   | Link                                     |
| :------------: | :--------------------------------------: | :--------------------------------------: | ---------------------------------------- |
|     assert     | [defunctzombie/commonjs-assert](https://github.com/defunctzombie/commonjs-assert) |       Error code and Error message       | [Issue](https://github.com/nodejs/node/issues/13937), [Article](https://medium.com/the-node-js-collection/node-js-errors-changes-you-need-to-know-about-dc8c82417f65) |
|                |                                          | `assert.deepEqual` support `Map`, `Set`, `Iterator` etc... | [Issue](https://github.com/nodejs/node/issues/2309), [Document](https://nodejs.org/api/assert.html#assert_assert_deepequal_actual_expected_message), [Release](https://nodejs.org/en/blog/release/v8.0.0/) |
|     buffer     | [feross/buffer](https://github.com/feross/buffer) |                   TODO                   |                                          |
| child_process  |                   ---                    |                   ---                    |                                          |
|    cluster     |                   ---                    |                   ---                    |                                          |
|    console     | [Raynos/console-browserify](https://github.com/Raynos/console-browserify) |                   TODO                   |                                          |
|   constants    | [juliangruber/constants-browserify](https://github.com/juliangruber/constants-browserify) |                   ---                    |                                          |
|     crypto     | [crypto-browserify/crypto-browserify](https://github.com/crypto-browserify/crypto-browserify) |                   ---                    |                                          |
|     dgram      |                   ---                    |                   ---                    |                                          |
|      dns       |                   ---                    |                   TODO                   |                                          |
|     domain     | [bevry/domain-browser](https://github.com/bevry/domain-browser) |                   ---                    |                                          |
|     events     | [Gozala/events](https://github.com/Gozala/events) | [`eventNames`](https://nodejs.org/api/events.html#events_emitter_eventnames) | [Issue](https://github.com/Gozala/events/pull/32), [Document](https://nodejs.org/api/events.html#events_emitter_eventnames) |
|                |                                          | [`getMaxListeners`](https://nodejs.org/api/events.html#events_emitter_getmaxlisteners) | [Document](https://nodejs.org/api/events.html#events_emitter_getmaxlisteners) |
|                |                                          | [`prependListener`](https://nodejs.org/api/events.html#events_emitter_prependlistener_eventname_listener) | [Document](https://nodejs.org/api/events.html#events_emitter_prependlistener_eventname_listener) |
|                |                                          | [`prependOnceListener`](https://nodejs.org/api/events.html#events_emitter_prependoncelistener_eventname_listener) | [Document](https://nodejs.org/api/events.html#events_emitter_prependoncelistener_eventname_listener) |
|       fs       |                   ---                    |                   ---                    |                                          |
|      http      | [jhiesey/stream-http](https://github.com/jhiesey/stream-http) |                   ---                    |                                          |
|     https      | [substack/https-browserify](https://github.com/substack/https-browserify) |                   ---                    |                                          |
|     module     |                   ---                    |                   ---                    |                                          |
|      net       |                   ---                    |                   TODO                   |                                          |
|       os       | [CoderPuppy/os-browserify](https://github.com/CoderPuppy/os-browserify) |                   TODO                   |                                          |
|      path      | [substack/path-browserify](https://github.com/substack/path-browserify) |                   TODO                   |                                          |
|    process     | [shtylman/node-process](https://github.com/shtylman/node-process) |                   TODO                   |                                          |
|    punycode    | [bestiejs/punycode.js](https://github.com/bestiejs/punycode.js) |                   TODO                   |                                          |
|  querystring   | [mike-spainhower/querystring](https://github.com/mike-spainhower/querystring) |                   TODO                   |                                          |
|    readline    |                   ---                    |                   ---                    |                                          |
|      repl      |                   ---                    |                   ---                    |                                          |
|     stream     | [substack/stream-browserify](https://github.com/substack/stream-browserify) |                   TODO                   |                                          |
| string_decoder | [rvagg/string_decoder](https://github.com/rvagg/string_decoder) |                   TODO                   |                                          |
|      sys       | [defunctzombie/node-util](https://github.com/defunctzombie/node-util) |                   TODO                   |                                          |
|     timers     | [jryans/timers-browserify](https://github.com/jryans/timers-browserify) |                   TODO                   |                                          |
|      tls       |                   ---                    |                   ---                    |                                          |
|      tty       | [substack/tty-browserify](https://github.com/substack/tty-browserify) |                   TODO                   |                                          |
|      url       | [defunctzombie/node-url](https://github.com/defunctzombie/node-url) |          WHATWG URL API support          | [Release](https://nodejs.org/en/blog/release/v8.0.0/#say-hello-to-the-whatwg-url-parser), [Document](https://nodejs.org/api/url.html#url_the_whatwg_url_api), [Issue](https://github.com/defunctzombie/node-url/issues/33) |
|                |                                          |     `url.format` support WHATWG URL      | [Release](https://nodejs.org/en/blog/release/v7.6.0/), [Document](https://nodejs.org/api/url.html#url_url_format_url_options) |
|      util      | [defunctzombie/node-util](https://github.com/defunctzombie/node-util) |                   TODO                   |                                          |
|       vm       | [substack/vm-browserify](https://github.com/substack/vm-browserify) |                   TODO                   |                                          |
|      zlib      | [devongovett/browserify-zlib](https://github.com/devongovett/browserify-zlib) |                   TODO                   |                                          |
