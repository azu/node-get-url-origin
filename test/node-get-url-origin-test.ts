"use strict";
import * as assert from "assert";
import { getURLOrigin } from "../src/node-get-url-origin";

describe("getURLOrigin", () => {
    context("When is not URL", () => {
        it("Relative URL  => null", () => {
            assert(getURLOrigin("./path/to/file") === null);
        });
        it("Absolute Path => null", () => {
            assert(getURLOrigin("/path/to/file") === null);
        });
        it("Empty => null", () => {
            assert(getURLOrigin("") === null);
        });
        it("undefined => null", () => {
            assert((getURLOrigin as any)() === null);
        });
    });
    context("When URL", () => {
        it("return origin", () => {
            assert(getURLOrigin("https://example.com/file/to/path?example") === "https://example.com");
        });
        it("return origin that include ports", () => {
            assert(getURLOrigin("http://example.com:80/path/to/file") === "http://example.com:80");
        });
    });
});
