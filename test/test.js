// MIT © 2017 azu
"use strict";
const assert = require("assert");
describe("gap-test", function() {
  describe("assert", function() {
    it("Error#code", function() {
      try {
        assert.ok(false)
      } catch (error) {
        assert.ok(error.code !== undefined, "assertion error should have error.code");
      }
    });
    it("assert.deepEqual", function() {
      assert.deepEqual(new Set([1, 2, 3]), new Set(["1", "2", "3"]), "assert.deepEqual should support Set");
      assert.deepEqual(new Set([[1, 2], [3, 4]]), new Set([
        ["3", "4"], ["1", "2"]
      ]), "assert.deepEqual should support Map");
    });
    it("assert.deepStrictEqual", function() {
      assert.deepStrictEqual(
        new Set([1, 2, 3]),
        new Set([1, 2, 3]),
        "assert.deepStrictEqual should support Set");
      assert.deepStrictEqual(
        new Set([[1, 2], [3, 4]]),
        new Set([[1, 2], [3, 4]]),
        "assert.deepStrictEqual should support Map");
    });
  });
  describe("events", function() {
    it("eventNames", function() {
      const EventEmitter = require('events');
      const myEE = new EventEmitter();
      myEE.on('foo', () => {
      });
      myEE.on('bar', () => {
      });
      assert.ok(typeof myEE.eventNames === "function", "should have eventNames");
      assert.deepStrictEqual(myEE.eventNames(), ['foo', 'bar']);
    });
    it("getMaxListeners()", function() {
      const EventEmitter = require('events');
      const myEE = new EventEmitter();
      assert.ok(typeof myEE.getMaxListeners === "function", "should have getMaxListeners()");
      assert.strictEqual(myEE.getMaxListeners(), 10);
    });
    it("prependListener()", function() {
      const EventEmitter = require('events');
      const myEE = new EventEmitter();
      assert.ok(typeof myEE.prependListener === "function", "should have prependListener()");
    });
    it("prependOnceListener()", function() {
      const EventEmitter = require('events');
      const myEE = new EventEmitter();
      assert.ok(typeof myEE.prependOnceListener === "function", "should have prependOnceListener()");
    });
  });
  describe("os", function() {
    it("constants", function() {
      const os = require("os");
      assert.ok(os.constants !== undefined, "should have os.constants");
    });
  });
  describe("path", function() {
    it("posix", function() {
      const path = require("path");
      assert.ok(path.posix !== undefined, "should have path.posix");
    });
    it("win32", function() {
      const path = require("path");
      assert.ok(path.win32 !== undefined, "should have path.win32")
    });
    it("parse", function() {
      const path = require("path");
      assert.ok(typeof path.parse === "function", "should have path.parse");
    });
    it("format", function() {
      const path = require("path");
      assert.ok(typeof path.format === "function", "should have path.format");
    });
  });
  describe("process", function() {
    it("platform", function() {
      assert.ok(process.platform !== undefined, "should have process.platform");
    });
    it("execArgv", function() {
      assert.ok(process.execArgv !== undefined, "should have process.execArgv");
    });
    it("cpuUsage()", function() {
      assert.ok(typeof process.cpuUsage === "function", "should have process.cpuUsage()");
    });
    it("emitWarning()", function() {
      assert.ok(typeof process.emitWarning === "function", "should have process.emitWarning()");
    });
  });
  describe("url", function() {
    it("URL", function() {
      const url = require("url");
      assert.ok(url.URL !== undefined, "should have url.URL");
    });
  });
  describe("util", function() {
    it("inspect.defaultOptions", function() {
      const util = require("util");
      assert.ok(util.inspect.defaultOptions !== undefined, "should have util.inspect.defaultOptions");
    });
    it("callbackify()", function() {
      const util = require("util");
      assert.ok(typeof util.callbackify === "function", "should have util.callbackify()");
    });
    it("promisify()", function() {
      const util = require("util");
      assert.ok(typeof util.promisify === "function", "should have util.promisify()");
    });
  });
  describe("vm", function() {
    it("isContext", function() {
      const vm = require("vm");
      assert.ok(vm.isContext !== undefined, "should have vm.isContext");
    });
  });
  describe("zlib", function() {
    xit("bytesRead", function() {
    });
  });
});