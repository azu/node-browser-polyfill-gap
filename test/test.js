// MIT © 2017 azu
"use strict";
const assert = require("assert");
describe("gap-test", function() {
  describe("assert", function() {
    it("Error#code", function() {
      try {
        assert.ok(false)
      } catch (error) {
        console.log(error);
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
    it("os.constants", function() {
      const os = require("os");
      assert.ok(os.constants !== undefined, "should have os.constants");
    });
  });
  describe("path", function() {
    it("", function() {
    });
  });
  describe("process", function() {
    it("", function() {
    });
  });
  describe("url", function() {
    it("", function() {
    });
  });
  describe("util", function() {
    it("", function() {
    });
  });
  describe("vm", function() {
    it("", function() {
    });
  });
  describe("zlib", function() {
    it("", function() {
    });
  });
});