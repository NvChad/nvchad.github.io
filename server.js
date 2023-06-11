import 'events';
import 'stream';
import { Headers as Headers$1, Request as Request$1, FormData, File, Response as Response$1, fetch as fetch$1 } from 'undici';
import crypto from 'crypto';
import Streams from 'stream/web';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var multipart$1 = {};

var hasRequiredMultipart;

function requireMultipart () {
	if (hasRequiredMultipart) return multipart$1;
	hasRequiredMultipart = 1;
	/**
	 * Multipart Parser (Finite State Machine)
	 * usage:
	 * const multipart = require('./multipart.js');
	 * const body = multipart.DemoData(); 							   // raw body
	 * const body = Buffer.from(event['body-json'].toString(),'base64'); // AWS case
	 * const boundary = multipart.getBoundary(event.params.header['content-type']);
	 * const parts = multipart.Parse(body,boundary);
	 * each part is:
	 * { filename: 'A.txt', type: 'text/plain', data: <Buffer 41 41 41 41 42 42 42 42> }
	 *  or { name: 'key', data: <Buffer 41 41 41 41 42 42 42 42> }
	 */
	Object.defineProperty(multipart$1, "__esModule", { value: true });
	multipart$1.DemoData = multipart$1.getBoundary = multipart$1.parse = void 0;
	var ParsingState;
	(function (ParsingState) {
	    ParsingState[ParsingState["INIT"] = 0] = "INIT";
	    ParsingState[ParsingState["READING_HEADERS"] = 1] = "READING_HEADERS";
	    ParsingState[ParsingState["READING_DATA"] = 2] = "READING_DATA";
	    ParsingState[ParsingState["READING_PART_SEPARATOR"] = 3] = "READING_PART_SEPARATOR";
	})(ParsingState || (ParsingState = {}));
	function parse(multipartBodyBuffer, boundary) {
	    var lastline = '';
	    var contentDispositionHeader = '';
	    var contentTypeHeader = '';
	    var state = ParsingState.INIT;
	    var buffer = [];
	    var allParts = [];
	    var currentPartHeaders = [];
	    for (var i = 0; i < multipartBodyBuffer.length; i++) {
	        var oneByte = multipartBodyBuffer[i];
	        var prevByte = i > 0 ? multipartBodyBuffer[i - 1] : null;
	        // 0x0a => \n
	        // 0x0d => \r
	        var newLineDetected = oneByte === 0x0a && prevByte === 0x0d;
	        var newLineChar = oneByte === 0x0a || oneByte === 0x0d;
	        if (!newLineChar)
	            lastline += String.fromCharCode(oneByte);
	        if (ParsingState.INIT === state && newLineDetected) {
	            // searching for boundary
	            if ('--' + boundary === lastline) {
	                state = ParsingState.READING_HEADERS; // found boundary. start reading headers
	            }
	            lastline = '';
	        }
	        else if (ParsingState.READING_HEADERS === state && newLineDetected) {
	            // parsing headers. Headers are separated by an empty line from the content. Stop reading headers when the line is empty
	            if (lastline.length) {
	                currentPartHeaders.push(lastline);
	            }
	            else {
	                // found empty line. search for the headers we want and set the values
	                for (var _i = 0, currentPartHeaders_1 = currentPartHeaders; _i < currentPartHeaders_1.length; _i++) {
	                    var h = currentPartHeaders_1[_i];
	                    if (h.toLowerCase().startsWith('content-disposition:')) {
	                        contentDispositionHeader = h;
	                    }
	                    else if (h.toLowerCase().startsWith('content-type:')) {
	                        contentTypeHeader = h;
	                    }
	                }
	                state = ParsingState.READING_DATA;
	                buffer = [];
	            }
	            lastline = '';
	        }
	        else if (ParsingState.READING_DATA === state) {
	            // parsing data
	            if (lastline.length > boundary.length + 4) {
	                lastline = ''; // mem save
	            }
	            if ('--' + boundary === lastline) {
	                var j = buffer.length - lastline.length;
	                var part = buffer.slice(0, j - 1);
	                allParts.push(process({ contentDispositionHeader: contentDispositionHeader, contentTypeHeader: contentTypeHeader, part: part }));
	                buffer = [];
	                currentPartHeaders = [];
	                lastline = '';
	                state = ParsingState.READING_PART_SEPARATOR;
	                contentDispositionHeader = '';
	                contentTypeHeader = '';
	            }
	            else {
	                buffer.push(oneByte);
	            }
	            if (newLineDetected) {
	                lastline = '';
	            }
	        }
	        else if (ParsingState.READING_PART_SEPARATOR === state) {
	            if (newLineDetected) {
	                state = ParsingState.READING_HEADERS;
	            }
	        }
	    }
	    return allParts;
	}
	multipart$1.parse = parse;
	//  read the boundary from the content-type header sent by the http client
	//  this value may be similar to:
	//  'multipart/form-data; boundary=----WebKitFormBoundaryvm5A9tzU1ONaGP5B',
	function getBoundary(header) {
	    var items = header.split(';');
	    if (items) {
	        for (var i = 0; i < items.length; i++) {
	            var item = new String(items[i]).trim();
	            if (item.indexOf('boundary') >= 0) {
	                var k = item.split('=');
	                return new String(k[1]).trim().replace(/^["']|["']$/g, '');
	            }
	        }
	    }
	    return '';
	}
	multipart$1.getBoundary = getBoundary;
	function DemoData() {
	    var body = 'trash1\r\n';
	    body += '------WebKitFormBoundaryvef1fLxmoUdYZWXp\r\n';
	    body += 'Content-Type: text/plain\r\n';
	    body +=
	        'Content-Disposition: form-data; name="uploads[]"; filename="A.txt"\r\n';
	    body += '\r\n';
	    body += '@11X';
	    body += '111Y\r\n';
	    body += '111Z\rCCCC\nCCCC\r\nCCCCC@\r\n\r\n';
	    body += '------WebKitFormBoundaryvef1fLxmoUdYZWXp\r\n';
	    body += 'Content-Type: text/plain\r\n';
	    body +=
	        'Content-Disposition: form-data; name="uploads[]"; filename="B.txt"\r\n';
	    body += '\r\n';
	    body += '@22X';
	    body += '222Y\r\n';
	    body += '222Z\r222W\n2220\r\n666@\r\n';
	    body += '------WebKitFormBoundaryvef1fLxmoUdYZWXp\r\n';
	    body += 'Content-Disposition: form-data; name="input1"\r\n';
	    body += '\r\n';
	    body += 'value1\r\n';
	    body += '------WebKitFormBoundaryvef1fLxmoUdYZWXp--\r\n';
	    return {
	        body: Buffer.from(body),
	        boundary: '----WebKitFormBoundaryvef1fLxmoUdYZWXp'
	    };
	}
	multipart$1.DemoData = DemoData;
	function process(part) {
	    // will transform this object:
	    // { header: 'Content-Disposition: form-data; name="uploads[]"; filename="A.txt"',
	    // info: 'Content-Type: text/plain',
	    // part: 'AAAABBBB' }
	    // into this one:
	    // { filename: 'A.txt', type: 'text/plain', data: <Buffer 41 41 41 41 42 42 42 42> }
	    var obj = function (str) {
	        var k = str.split('=');
	        var a = k[0].trim();
	        var b = JSON.parse(k[1].trim());
	        var o = {};
	        Object.defineProperty(o, a, {
	            value: b,
	            writable: true,
	            enumerable: true,
	            configurable: true
	        });
	        return o;
	    };
	    var header = part.contentDispositionHeader.split(';');
	    var filenameData = header[2];
	    var input = {};
	    if (filenameData) {
	        input = obj(filenameData);
	        var contentType = part.contentTypeHeader.split(':')[1].trim();
	        Object.defineProperty(input, 'type', {
	            value: contentType,
	            writable: true,
	            enumerable: true,
	            configurable: true
	        });
	    }
	    // always process the name field
	    Object.defineProperty(input, 'name', {
	        value: header[1].split('=')[1].replace(/"/g, ''),
	        writable: true,
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(input, 'data', {
	        value: Buffer.from(part.part),
	        writable: true,
	        enumerable: true,
	        configurable: true
	    });
	    return input;
	}
	
	return multipart$1;
}

var multipartExports = requireMultipart();
var multipart = /*@__PURE__*/getDefaultExportFromCjs(multipartExports);

var setCookie = {exports: {}};

var hasRequiredSetCookie;

function requireSetCookie () {
	if (hasRequiredSetCookie) return setCookie.exports;
	hasRequiredSetCookie = 1;

	var defaultParseOptions = {
	  decodeValues: true,
	  map: false,
	  silent: false,
	};

	function isNonEmptyString(str) {
	  return typeof str === "string" && !!str.trim();
	}

	function parseString(setCookieValue, options) {
	  var parts = setCookieValue.split(";").filter(isNonEmptyString);

	  var nameValuePairStr = parts.shift();
	  var parsed = parseNameValuePair(nameValuePairStr);
	  var name = parsed.name;
	  var value = parsed.value;

	  options = options
	    ? Object.assign({}, defaultParseOptions, options)
	    : defaultParseOptions;

	  try {
	    value = options.decodeValues ? decodeURIComponent(value) : value; // decode cookie value
	  } catch (e) {
	    console.error(
	      "set-cookie-parser encountered an error while decoding a cookie with value '" +
	        value +
	        "'. Set options.decodeValues to false to disable this feature.",
	      e
	    );
	  }

	  var cookie = {
	    name: name,
	    value: value,
	  };

	  parts.forEach(function (part) {
	    var sides = part.split("=");
	    var key = sides.shift().trimLeft().toLowerCase();
	    var value = sides.join("=");
	    if (key === "expires") {
	      cookie.expires = new Date(value);
	    } else if (key === "max-age") {
	      cookie.maxAge = parseInt(value, 10);
	    } else if (key === "secure") {
	      cookie.secure = true;
	    } else if (key === "httponly") {
	      cookie.httpOnly = true;
	    } else if (key === "samesite") {
	      cookie.sameSite = value;
	    } else {
	      cookie[key] = value;
	    }
	  });

	  return cookie;
	}

	function parseNameValuePair(nameValuePairStr) {
	  // Parses name-value-pair according to rfc6265bis draft

	  var name = "";
	  var value = "";
	  var nameValueArr = nameValuePairStr.split("=");
	  if (nameValueArr.length > 1) {
	    name = nameValueArr.shift();
	    value = nameValueArr.join("="); // everything after the first =, joined by a "=" if there was more than one part
	  } else {
	    value = nameValuePairStr;
	  }

	  return { name: name, value: value };
	}

	function parse(input, options) {
	  options = options
	    ? Object.assign({}, defaultParseOptions, options)
	    : defaultParseOptions;

	  if (!input) {
	    if (!options.map) {
	      return [];
	    } else {
	      return {};
	    }
	  }

	  if (input.headers) {
	    if (typeof input.headers.getSetCookie === "function") {
	      // for fetch responses - they combine headers of the same type in the headers array,
	      // but getSetCookie returns an uncombined array
	      input = input.headers.getSetCookie();
	    } else if (input.headers["set-cookie"]) {
	      // fast-path for node.js (which automatically normalizes header names to lower-case
	      input = input.headers["set-cookie"];
	    } else {
	      // slow-path for other environments - see #25
	      var sch =
	        input.headers[
	          Object.keys(input.headers).find(function (key) {
	            return key.toLowerCase() === "set-cookie";
	          })
	        ];
	      // warn if called on a request-like object with a cookie header rather than a set-cookie header - see #34, 36
	      if (!sch && input.headers.cookie && !options.silent) {
	        console.warn(
	          "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
	        );
	      }
	      input = sch;
	    }
	  }
	  if (!Array.isArray(input)) {
	    input = [input];
	  }

	  options = options
	    ? Object.assign({}, defaultParseOptions, options)
	    : defaultParseOptions;

	  if (!options.map) {
	    return input.filter(isNonEmptyString).map(function (str) {
	      return parseString(str, options);
	    });
	  } else {
	    var cookies = {};
	    return input.filter(isNonEmptyString).reduce(function (cookies, str) {
	      var cookie = parseString(str, options);
	      cookies[cookie.name] = cookie;
	      return cookies;
	    }, cookies);
	  }
	}

	/*
	  Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas
	  that are within a single set-cookie field-value, such as in the Expires portion.

	  This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2
	  Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128
	  React Native's fetch does this for *every* header, including set-cookie.

	  Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25
	  Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation
	*/
	function splitCookiesString(cookiesString) {
	  if (Array.isArray(cookiesString)) {
	    return cookiesString;
	  }
	  if (typeof cookiesString !== "string") {
	    return [];
	  }

	  var cookiesStrings = [];
	  var pos = 0;
	  var start;
	  var ch;
	  var lastComma;
	  var nextStart;
	  var cookiesSeparatorFound;

	  function skipWhitespace() {
	    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
	      pos += 1;
	    }
	    return pos < cookiesString.length;
	  }

	  function notSpecialChar() {
	    ch = cookiesString.charAt(pos);

	    return ch !== "=" && ch !== ";" && ch !== ",";
	  }

	  while (pos < cookiesString.length) {
	    start = pos;
	    cookiesSeparatorFound = false;

	    while (skipWhitespace()) {
	      ch = cookiesString.charAt(pos);
	      if (ch === ",") {
	        // ',' is a cookie separator if we have later first '=', not ';' or ','
	        lastComma = pos;
	        pos += 1;

	        skipWhitespace();
	        nextStart = pos;

	        while (pos < cookiesString.length && notSpecialChar()) {
	          pos += 1;
	        }

	        // currently special character
	        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
	          // we found cookies separator
	          cookiesSeparatorFound = true;
	          // pos is inside the next cookie, so back up and return it.
	          pos = nextStart;
	          cookiesStrings.push(cookiesString.substring(start, lastComma));
	          start = pos;
	        } else {
	          // in param ',' or param separator ';',
	          // we continue from that comma
	          pos = lastComma + 1;
	        }
	      } else {
	        pos += 1;
	      }
	    }

	    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
	      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
	    }
	  }

	  return cookiesStrings;
	}

	setCookie.exports = parse;
	setCookie.exports.parse = parse;
	setCookie.exports.parseString = parseString;
	setCookie.exports.splitCookiesString = splitCookiesString;
	return setCookie.exports;
}

requireSetCookie();

function nodeToWeb(nodeStream) {
  var destroyed = false;
  var listeners = {};

  function start(controller) {
    listeners["data"] = onData;
    listeners["end"] = onData;
    listeners["end"] = onDestroy;
    listeners["close"] = onDestroy;
    listeners["error"] = onDestroy;
    for (var name in listeners) nodeStream.on(name, listeners[name]);

    nodeStream.pause();

    function onData(chunk) {
      if (destroyed) return;
      controller.enqueue(chunk);
      nodeStream.pause();
    }

    function onDestroy(err) {
      if (destroyed) return;
      destroyed = true;

      for (var name in listeners) nodeStream.removeListener(name, listeners[name]);

      if (err) controller.error(err);
      else controller.close();
    }
  }

  function pull() {
    if (destroyed) return;
    nodeStream.resume();
  }

  function cancel() {
    destroyed = true;

    for (var name in listeners) nodeStream.removeListener(name, listeners[name]);

    nodeStream.push(null);
    nodeStream.pause();
    if (nodeStream.destroy) nodeStream.destroy();
    else if (nodeStream.close) nodeStream.close();
  }

  return new ReadableStream({ start: start, pull: pull, cancel: cancel });
}

function createHeaders(requestHeaders) {
  let headers = new Headers$1();

  for (let [key, values] of Object.entries(requestHeaders)) {
    if (values) {
      if (Array.isArray(values)) {
        for (const value of values) {
          headers.append(key, value);
        }
      } else {
        headers.set(key, values);
      }
    }
  }

  return headers;
}

class NodeRequest extends Request$1 {
  constructor(input, init) {
    if (init && init.data && init.data.on) {
      init = {
        duplex: "half",
        ...init,
        body: init.data.headers["content-type"]?.includes("x-www")
          ? init.data
          : nodeToWeb(init.data)
      };
    }

    super(input, init);
  }

  // async json() {
  //   return JSON.parse(await this.text());
  // }

  async buffer() {
    return Buffer.from(await super.arrayBuffer());
  }

  // async text() {
  //   return (await this.buffer()).toString();
  // }

  // @ts-ignore
  async formData() {
    if (this.headers.get("content-type") === "application/x-www-form-urlencoded") {
      return await super.formData();
    } else {
      const data = await this.buffer();
      const input = multipart.parse(
        data,
        this.headers.get("content-type").replace("multipart/form-data; boundary=", "")
      );
      const form = new FormData();
      input.forEach(({ name, data, filename, type }) => {
        // file fields have Content-Type set,
        // whereas non-file fields must not
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#multipart-form-data
        const isFile = type !== undefined;
        if (isFile) {
          const value = new File([data], filename, { type });
          form.append(name, value, filename);
        } else {
          const value = data.toString("utf-8");
          form.append(name, value);
        }
      });
      return form;
    }
  }

  // @ts-ignore
  clone() {
    /** @type {BaseNodeRequest & { buffer?: () => Promise<Buffer>; formData?: () => Promise<FormData> }}  */
    let el = super.clone();
    el.buffer = this.buffer.bind(el);
    el.formData = this.formData.bind(el);
    return el;
  }
}

function createRequest(req) {
  let origin = req.headers.origin && 'null' !== req.headers.origin
      ? req.headers.origin
      : `http://${req.headers.host}`;
  let url = new URL(req.url, origin);

  let init = {
    method: req.method,
    headers: createHeaders(req.headers),
    // POST, PUT, & PATCH will be read as body by NodeRequest
    data: req.method.indexOf("P") === 0 ? req : null
  };

  return new NodeRequest(url.href, init);
}

Object.assign(globalThis, Streams, {
  Request: Request$1,
  Response: Response$1,
  fetch: fetch$1,
  Headers: Headers$1
});

if (globalThis.crypto != crypto.webcrypto) {
  // @ts-ignore
  globalThis.crypto = crypto.webcrypto;
}

var manifest = {
	"/(index)": [
	{
		type: "script",
		href: "/assets/(index)-df599000.js"
	},
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	},
	{
		type: "script",
		href: "/assets/docs-b7e3ea08.js"
	},
	{
		type: "script",
		href: "/assets/ContextTitles-c3dc2c8f.js"
	},
	{
		type: "style",
		href: "/assets/docs-6be4e559.css"
	},
	{
		type: "style",
		href: "/assets/(index)-2c6a9d47.css"
	}
],
	"/(index)/*404": [
	{
		type: "script",
		href: "/assets/_...404_-ecbf8206.js"
	},
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	}
],
	"/(index)/docs": [
	{
		type: "script",
		href: "/assets/docs-b7e3ea08.js"
	},
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	},
	{
		type: "script",
		href: "/assets/ContextTitles-c3dc2c8f.js"
	},
	{
		type: "style",
		href: "/assets/docs-6be4e559.css"
	}
],
	"/(index)/docs/api": [
	{
		type: "script",
		href: "/assets/api-a1e0473b.js"
	},
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	},
	{
		type: "script",
		href: "/assets/index-995cd32a.js"
	}
],
	"/(index)/docs/config/format_lint": [
	{
		type: "script",
		href: "/assets/format_lint-9f8ef968.js"
	},
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	},
	{
		type: "script",
		href: "/assets/index-995cd32a.js"
	}
],
	"/(index)/docs/config/lsp": [
	{
		type: "script",
		href: "/assets/lsp-4dbc968d.js"
	},
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	},
	{
		type: "script",
		href: "/assets/index-995cd32a.js"
	}
],
	"/(index)/docs/config/mappings": [
	{
		type: "script",
		href: "/assets/mappings-d9cf9ecd.js"
	},
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	},
	{
		type: "script",
		href: "/assets/index-995cd32a.js"
	}
],
	"/(index)/docs/config/nvchad_ui": [
	{
		type: "script",
		href: "/assets/nvchad_ui-91bd7ca8.js"
	},
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	},
	{
		type: "script",
		href: "/assets/index-995cd32a.js"
	}
],
	"/(index)/docs/config/plugins": [
	{
		type: "script",
		href: "/assets/plugins-87525152.js"
	},
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	},
	{
		type: "script",
		href: "/assets/index-995cd32a.js"
	}
],
	"/(index)/docs/config/snippets": [
	{
		type: "script",
		href: "/assets/snippets-0d2ac922.js"
	},
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	},
	{
		type: "script",
		href: "/assets/index-995cd32a.js"
	}
],
	"/(index)/docs/config/syntax": [
	{
		type: "script",
		href: "/assets/syntax-54730f29.js"
	},
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	},
	{
		type: "script",
		href: "/assets/index-995cd32a.js"
	}
],
	"/(index)/docs/config/theming": [
	{
		type: "script",
		href: "/assets/theming-dbaa891b.js"
	},
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	},
	{
		type: "script",
		href: "/assets/index-995cd32a.js"
	}
],
	"/(index)/docs/config/walkthrough": [
	{
		type: "script",
		href: "/assets/walkthrough-6252b3a0.js"
	},
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	},
	{
		type: "script",
		href: "/assets/index-995cd32a.js"
	}
],
	"/(index)/docs/contribute": [
	{
		type: "script",
		href: "/assets/contribute-5ae89d6b.js"
	},
	{
		type: "script",
		href: "/assets/index-995cd32a.js"
	},
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	}
],
	"/(index)/docs/credits": [
	{
		type: "script",
		href: "/assets/credits-f1afdc8d.js"
	},
	{
		type: "script",
		href: "/assets/index-995cd32a.js"
	},
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	}
],
	"/(index)/docs/debugging-config": [
	{
		type: "script",
		href: "/assets/debugging-config-6c4a459f.js"
	},
	{
		type: "script",
		href: "/assets/index-995cd32a.js"
	},
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	}
],
	"/(index)/docs/features": [
	{
		type: "script",
		href: "/assets/features-155b0bff.js"
	},
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	},
	{
		type: "script",
		href: "/assets/index-995cd32a.js"
	}
],
	"/(index)/docs/quickstart/install": [
	{
		type: "script",
		href: "/assets/install-940bb81e.js"
	},
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	},
	{
		type: "script",
		href: "/assets/index-995cd32a.js"
	},
	{
		type: "script",
		href: "/assets/install-ad77c01a.js"
	}
],
	"/(index)/docs/quickstart/learn-lua": [
	{
		type: "script",
		href: "/assets/learn-lua-0459b60f.js"
	},
	{
		type: "script",
		href: "/assets/index-995cd32a.js"
	},
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	}
],
	"/(index)/docs/quickstart/post-install": [
	{
		type: "script",
		href: "/assets/post-install-b055cbed.js"
	},
	{
		type: "script",
		href: "/assets/index-995cd32a.js"
	},
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	}
],
	"/(index)/": [
	{
		type: "script",
		href: "/assets/index-a794a63f.js"
	},
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	},
	{
		type: "script",
		href: "/assets/install-ad77c01a.js"
	}
],
	"/(index)/news/(items)": [
	{
		type: "script",
		href: "/assets/(items)-14569d58.js"
	},
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	},
	{
		type: "script",
		href: "/assets/ContextTitles-c3dc2c8f.js"
	}
],
	"/(index)/news/(items)/": [
	{
		type: "script",
		href: "/assets/index-c15346d7.js"
	},
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	},
	{
		type: "script",
		href: "/assets/v2.0-b0ca50ad.js"
	},
	{
		type: "script",
		href: "/assets/index-995cd32a.js"
	},
	{
		type: "script",
		href: "/assets/v2.0_migration-57edecc9.js"
	}
],
	"/(index)/news/(items)/v2.0": [
	{
		type: "script",
		href: "/assets/v2.0-b0ca50ad.js"
	},
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	},
	{
		type: "script",
		href: "/assets/index-995cd32a.js"
	}
],
	"/(index)/news/(items)/v2.0_migration": [
	{
		type: "script",
		href: "/assets/v2.0_migration-57edecc9.js"
	},
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	},
	{
		type: "script",
		href: "/assets/index-995cd32a.js"
	}
],
	"/(index)/news/": [
	{
		type: "script",
		href: "/assets/index-c15346d7.js"
	},
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	},
	{
		type: "script",
		href: "/assets/v2.0-b0ca50ad.js"
	},
	{
		type: "script",
		href: "/assets/index-995cd32a.js"
	},
	{
		type: "script",
		href: "/assets/v2.0_migration-57edecc9.js"
	}
],
	"/(index)/themes": [
	{
		type: "script",
		href: "/assets/themes-d53b23f8.js"
	},
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	}
],
	"entry-client": [
	{
		type: "script",
		href: "/assets/entry-client-9739558d.js"
	},
	{
		type: "style",
		href: "/assets/entry-client-b89a592a.css"
	}
],
	"index.html": [
]
};

const ERROR = Symbol("error");
function castError(err) {
  if (err instanceof Error) return err;
  return new Error(typeof err === "string" ? err : "Unknown error", {
    cause: err
  });
}
function handleError(err) {
  const error = castError(err);
  const fns = lookup(Owner, ERROR);
  if (!fns) throw error;
  for (const f of fns) f(error);
}
const UNOWNED = {
  context: null,
  owner: null,
  owned: null,
  cleanups: null
};
let Owner = null;
function createOwner() {
  const o = {
    owner: Owner,
    context: null,
    owned: null,
    cleanups: null
  };
  if (Owner) {
    if (!Owner.owned) Owner.owned = [o];else Owner.owned.push(o);
  }
  return o;
}
function createRoot(fn, detachedOwner) {
  const owner = Owner,
    root = fn.length === 0 ? UNOWNED : {
      context: null,
      owner: detachedOwner === undefined ? owner : detachedOwner,
      owned: null,
      cleanups: null
    };
  Owner = root;
  let result;
  try {
    result = fn(fn.length === 0 ? () => {} : () => cleanNode(root));
  } catch (err) {
    handleError(err);
  } finally {
    Owner = owner;
  }
  return result;
}
function createSignal(value, options) {
  return [() => value, v => {
    return value = typeof v === "function" ? v(value) : v;
  }];
}
function createComputed(fn, value) {
  Owner = createOwner();
  try {
    fn(value);
  } catch (err) {
    handleError(err);
  } finally {
    Owner = Owner.owner;
  }
}
const createRenderEffect = createComputed;
function createEffect(fn, value) {}
function createMemo(fn, value) {
  Owner = createOwner();
  let v;
  try {
    v = fn(value);
  } catch (err) {
    handleError(err);
  } finally {
    Owner = Owner.owner;
  }
  return () => v;
}
function batch(fn) {
  return fn();
}
const untrack = batch;
function on(deps, fn, options = {}) {
  const isArray = Array.isArray(deps);
  const defer = options.defer;
  return () => {
    if (defer) return undefined;
    let value;
    if (isArray) {
      value = [];
      for (let i = 0; i < deps.length; i++) value.push(deps[i]());
    } else value = deps();
    return fn(value);
  };
}
function onCleanup(fn) {
  if (Owner) {
    if (!Owner.cleanups) Owner.cleanups = [fn];else Owner.cleanups.push(fn);
  }
  return fn;
}
function cleanNode(node) {
  if (node.owned) {
    for (let i = 0; i < node.owned.length; i++) cleanNode(node.owned[i]);
    node.owned = null;
  }
  if (node.cleanups) {
    for (let i = 0; i < node.cleanups.length; i++) node.cleanups[i]();
    node.cleanups = null;
  }
}
function catchError(fn, handler) {
  Owner = {
    owner: Owner,
    context: {
      [ERROR]: [handler]
    },
    owned: null,
    cleanups: null
  };
  try {
    return fn();
  } catch (err) {
    handleError(err);
  } finally {
    Owner = Owner.owner;
  }
}
function createContext(defaultValue) {
  const id = Symbol("context");
  return {
    id,
    Provider: createProvider(id),
    defaultValue
  };
}
function useContext(context) {
  let ctx;
  return (ctx = lookup(Owner, context.id)) !== undefined ? ctx : context.defaultValue;
}
function getOwner() {
  return Owner;
}
function children(fn) {
  const memo = createMemo(() => resolveChildren(fn()));
  memo.toArray = () => {
    const c = memo();
    return Array.isArray(c) ? c : c != null ? [c] : [];
  };
  return memo;
}
function runWithOwner(o, fn) {
  const prev = Owner;
  Owner = o;
  try {
    return fn();
  } catch (err) {
    handleError(err);
  } finally {
    Owner = prev;
  }
}
function lookup(owner, key) {
  return owner ? owner.context && owner.context[key] !== undefined ? owner.context[key] : lookup(owner.owner, key) : undefined;
}
function resolveChildren(children) {
  if (typeof children === "function" && !children.length) return resolveChildren(children());
  if (Array.isArray(children)) {
    const results = [];
    for (let i = 0; i < children.length; i++) {
      const result = resolveChildren(children[i]);
      Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
    }
    return results;
  }
  return children;
}
function createProvider(id) {
  return function provider(props) {
    return createMemo(() => {
      Owner.context = {
        [id]: props.value
      };
      return children(() => props.children);
    });
  };
}

function resolveSSRNode$1(node) {
  const t = typeof node;
  if (t === "string") return node;
  if (node == null || t === "boolean") return "";
  if (Array.isArray(node)) {
    let mapped = "";
    for (let i = 0, len = node.length; i < len; i++) mapped += resolveSSRNode$1(node[i]);
    return mapped;
  }
  if (t === "object") return node.t;
  if (t === "function") return resolveSSRNode$1(node());
  return String(node);
}
const sharedConfig = {};
function setHydrateContext(context) {
  sharedConfig.context = context;
}
function nextHydrateContext() {
  return sharedConfig.context ? {
    ...sharedConfig.context,
    id: `${sharedConfig.context.id}${sharedConfig.context.count++}-`,
    count: 0
  } : undefined;
}
function createUniqueId() {
  const ctx = sharedConfig.context;
  if (!ctx) throw new Error(`createUniqueId cannot be used under non-hydrating context`);
  return `${ctx.id}${ctx.count++}`;
}
function createComponent(Comp, props) {
  if (sharedConfig.context && !sharedConfig.context.noHydrate) {
    const c = sharedConfig.context;
    setHydrateContext(nextHydrateContext());
    const r = Comp(props || {});
    setHydrateContext(c);
    return r;
  }
  return Comp(props || {});
}
function mergeProps(...sources) {
  const target = {};
  for (let i = 0; i < sources.length; i++) {
    let source = sources[i];
    if (typeof source === "function") source = source();
    if (source) {
      const descriptors = Object.getOwnPropertyDescriptors(source);
      for (const key in descriptors) {
        if (key in target) continue;
        Object.defineProperty(target, key, {
          enumerable: true,
          get() {
            for (let i = sources.length - 1; i >= 0; i--) {
              let s = sources[i] || {};
              if (typeof s === "function") s = s();
              const v = s[key];
              if (v !== undefined) return v;
            }
          }
        });
      }
    }
  }
  return target;
}
function splitProps(props, ...keys) {
  const descriptors = Object.getOwnPropertyDescriptors(props),
    split = k => {
      const clone = {};
      for (let i = 0; i < k.length; i++) {
        const key = k[i];
        if (descriptors[key]) {
          Object.defineProperty(clone, key, descriptors[key]);
          delete descriptors[key];
        }
      }
      return clone;
    };
  return keys.map(split).concat(split(Object.keys(descriptors)));
}
function Show(props) {
  let c;
  return props.when ? typeof (c = props.children) === "function" ? c(props.keyed ? props.when : () => props.when) : c : props.fallback || "";
}
function ErrorBoundary$1(props) {
  let error,
    res,
    clean,
    sync = true;
  const ctx = sharedConfig.context;
  const id = ctx.id + ctx.count;
  function displayFallback() {
    cleanNode(clean);
    ctx.writeResource(id, error, true);
    setHydrateContext({
      ...ctx,
      count: 0
    });
    const f = props.fallback;
    return typeof f === "function" && f.length ? f(error, () => {}) : f;
  }
  createMemo(() => {
    clean = Owner;
    return catchError(() => res = props.children, err => {
      error = err;
      !sync && ctx.replace("e" + id, displayFallback);
      sync = true;
    });
  });
  if (error) return displayFallback();
  sync = false;
  return {
    t: `<!!$e${id}>${resolveSSRNode$1(res)}<!!$/e${id}>`
  };
}
const SuspenseContext = createContext();
function suspenseComplete(c) {
  for (const r of c.resources.values()) {
    if (r.loading) return false;
  }
  return true;
}
function startTransition(fn) {
  fn();
}
function Suspense(props) {
  let done;
  const ctx = sharedConfig.context;
  const id = ctx.id + ctx.count;
  const o = createOwner();
  const value = ctx.suspense[id] || (ctx.suspense[id] = {
    resources: new Map(),
    completed: () => {
      const res = runSuspense();
      if (suspenseComplete(value)) {
        done(resolveSSRNode$1(res));
      }
    }
  });
  function suspenseError(err) {
    if (!done || !done(undefined, err)) {
      runWithOwner(o.owner, () => {
        throw err;
      });
    }
  }
  function runSuspense() {
    setHydrateContext({
      ...ctx,
      count: 0
    });
    cleanNode(o);
    return runWithOwner(o, () => createComponent(SuspenseContext.Provider, {
      value,
      get children() {
        return catchError(() => props.children, suspenseError);
      }
    }));
  }
  const res = runSuspense();
  if (suspenseComplete(value)) return res;
  done = ctx.async ? ctx.registerFragment(id) : undefined;
  return catchError(() => {
    if (ctx.async) {
      setHydrateContext({
        ...ctx,
        count: 0,
        id: ctx.id + "0-f",
        noHydrate: true
      });
      const res = {
        t: `<template id="pl-${id}"></template>${resolveSSRNode$1(props.fallback)}<!pl-${id}>`
      };
      setHydrateContext(ctx);
      return res;
    }
    setHydrateContext({
      ...ctx,
      count: 0,
      id: ctx.id + "0-f"
    });
    ctx.writeResource(id, "$$f");
    return props.fallback;
  }, suspenseError);
}

var I=(c=>(c[c.AggregateError=1]="AggregateError",c[c.ArrayPrototypeValues=2]="ArrayPrototypeValues",c[c.ArrowFunction=4]="ArrowFunction",c[c.BigInt=8]="BigInt",c[c.ErrorPrototypeStack=16]="ErrorPrototypeStack",c[c.Map=32]="Map",c[c.MethodShorthand=64]="MethodShorthand",c[c.ObjectAssign=128]="ObjectAssign",c[c.Promise=256]="Promise",c[c.Set=512]="Set",c[c.Symbol=1024]="Symbol",c[c.TypedArray=2048]="TypedArray",c[c.BigIntTypedArray=4096]="BigIntTypedArray",c))(I||{});var be="hjkmoquxzABCDEFGHIJKLNPQRTUVWXYZ$_",ve=be.length,Ae="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$_",ge=Ae.length;function se(e){let r=e%ve,n=be[r];for(e=(e-r)/ve;e>0;)r=e%ge,n+=Ae[r],e=(e-r)/ge;return n}var Le={disabledFeatures:0};function h(e={}){let r=Object.assign({},Le,e||{});return {markedRefs:new Set,refs:new Map,features:8191^r.disabledFeatures}}function V(e){return {stack:[],vars:[],assignments:[],validRefs:[],refSize:0,features:e.features,markedRefs:new Set(e.markedRefs),valueMap:new Map}}function R(e,r){e.markedRefs.add(r);}function m(e,r){let n=e.validRefs[r];n==null&&(n=e.refSize++,e.validRefs[r]=n);let t=e.vars[n];return t==null&&(t=se(n),e.vars[n]=t),t}function P(e,r){let n=e.refs.get(r);return n==null?e.refs.size:n}function z(e,r){let n=e.refs.get(r);if(n==null){let t=e.refs.size;return e.refs.set(r,t),t}return R(e,n),n}function S(e,r){if(!e)throw new Error(r)}function A$1(e){let r="",n=0;for(let t=0,a=e.length;t<a;t++){let o;switch(e[t]){case'"':o='\\"';break;case"\\":o="\\\\";break;case"<":o="\\x3C";break;case`
`:o="\\n";break;case"\r":o="\\r";break;case"\u2028":o="\\u2028";break;case"\u2029":o="\\u2029";break;default:continue}r+=e.slice(n,t)+o,n=t+1;}return n===0?r=e:r+=e.slice(n),r}var Ie={[0]:"Symbol.asyncIterator",[1]:"Symbol.hasInstance",[2]:"Symbol.isConcatSpreadable",[3]:"Symbol.iterator",[4]:"Symbol.match",[5]:"Symbol.matchAll",[6]:"Symbol.replace",[7]:"Symbol.search",[8]:"Symbol.species",[9]:"Symbol.split",[10]:"Symbol.toPrimitive",[11]:"Symbol.toStringTag",[12]:"Symbol.unscopables"},O={[Symbol.asyncIterator]:0,[Symbol.hasInstance]:1,[Symbol.isConcatSpreadable]:2,[Symbol.iterator]:3,[Symbol.match]:4,[Symbol.matchAll]:5,[Symbol.replace]:6,[Symbol.search]:7,[Symbol.species]:8,[Symbol.split]:9,[Symbol.toPrimitive]:10,[Symbol.toStringTag]:11,[Symbol.unscopables]:12};var T={t:2,i:void 0,s:!0,l:void 0,c:void 0,m:void 0,d:void 0,a:void 0,f:void 0},U={t:2,i:void 0,s:!1,l:void 0,c:void 0,m:void 0,d:void 0,a:void 0,f:void 0},j={t:4,i:void 0,s:void 0,l:void 0,c:void 0,m:void 0,d:void 0,a:void 0,f:void 0},M$1={t:3,i:void 0,s:void 0,l:void 0,c:void 0,m:void 0,d:void 0,a:void 0,f:void 0},D={t:5,i:void 0,s:void 0,l:void 0,c:void 0,m:void 0,d:void 0,a:void 0,f:void 0},_={t:6,i:void 0,s:void 0,l:void 0,c:void 0,m:void 0,d:void 0,a:void 0,f:void 0},L={t:7,i:void 0,s:void 0,l:void 0,c:void 0,m:void 0,d:void 0,a:void 0,f:void 0},x={t:8,i:void 0,s:void 0,l:void 0,c:void 0,m:void 0,d:void 0,a:void 0,f:void 0};function F(e){return {t:0,i:void 0,s:e,l:void 0,c:void 0,m:void 0,d:void 0,a:void 0,f:void 0}}function K(e){return {t:1,i:void 0,s:A$1(e),l:void 0,c:void 0,m:void 0,d:void 0,a:void 0,f:void 0}}function W(e,r){return S(e.features&8,'Unsupported type "BigInt"'),{t:9,i:void 0,s:""+r,l:void 0,c:void 0,m:void 0,d:void 0,a:void 0,f:void 0}}function Y(e){return {t:10,i:e,s:void 0,l:void 0,c:void 0,m:void 0,d:void 0,a:void 0,f:void 0}}function Z(e,r){return {t:11,i:e,s:r.toISOString(),l:void 0,c:void 0,m:void 0,d:void 0,f:void 0,a:void 0}}function G(e,r){return {t:12,i:e,s:void 0,l:void 0,c:r.source,m:r.flags,d:void 0,a:void 0,f:void 0}}function H(e,r,n){let t=n.constructor.name;S(e.features&2048,`Unsupported value type "${t}"`);let a=n.length,o=new Array(a);for(let i=0;i<a;i++)o[i]=""+n[i];return {t:22,i:r,s:o,l:n.byteOffset,c:t,m:void 0,d:void 0,a:void 0,f:void 0}}var ke=4104;function J(e,r,n){let t=n.constructor.name;S((e.features&ke)===ke,`Unsupported value type "${t}"`);let a=n.length,o=new Array(a);for(let i=0;i<a;i++)o[i]=""+n[i];return {t:23,i:r,s:o,l:n.byteOffset,c:t,m:void 0,d:void 0,a:void 0,f:void 0}}function $(e){return {t:24,i:void 0,s:O[e],l:void 0,c:void 0,m:void 0,d:void 0,a:void 0,f:void 0}}function w(e){return e instanceof EvalError?"EvalError":e instanceof RangeError?"RangeError":e instanceof ReferenceError?"ReferenceError":e instanceof SyntaxError?"SyntaxError":e instanceof TypeError?"TypeError":e instanceof URIError?"URIError":"Error"}function C(e,r){let n,t=w(r);r.name!==t?n={name:r.name}:r.constructor.name!==t&&(n={name:r.constructor.name});let a=Object.getOwnPropertyNames(r);for(let o of a)o!=="name"&&o!=="message"&&(o==="stack"?e.features&16&&(n=n||{},n[o]=r[o]):(n=n||{},n[o]=r[o]));return n}function q(e){let r=Object.getOwnPropertyNames(e);if(r.length){let n={};for(let t of r)n[t]=e[t];return n}}function N(e){if(!e||typeof e!="object"||Array.isArray(e))return !1;switch(e.constructor){case Map:case Set:case Int8Array:case Int16Array:case Int32Array:case Uint8Array:case Uint16Array:case Uint32Array:case Uint8ClampedArray:case Float32Array:case Float64Array:case BigInt64Array:case BigUint64Array:return !1;}return Symbol.iterator in e}var xe=/^[$A-Z_][0-9A-Z_$]*$/i;function le(e){let r=e[0];return (r==="$"||r==="_"||r>="A"&&r<="Z"||r>="a"&&r<="z")&&xe.test(e)}function ne(e){switch(e.t){case"index":return e.s+"="+e.v;case"map":return e.s+".set("+e.k+","+e.v+")";case"set":return e.s+".add("+e.v+")";default:return ""}}function nr(e){let r=[],n=e[0],t=n,a;for(let o=1,i=e.length;o<i;o++){if(a=e[o],a.t===t.t)switch(a.t){case"index":a.v===t.v?n={t:"index",s:a.s,k:void 0,v:ne(n)}:(r.push(n),n=a);break;case"map":a.s===t.s?n={t:"map",s:ne(n),k:a.k,v:a.v}:(r.push(n),n=a);break;case"set":a.s===t.s?n={t:"set",s:ne(n),k:void 0,v:a.v}:(r.push(n),n=a);break;}else r.push(n),n=a;t=a;}return r.push(n),r}function Pe(e){if(e.length){let r="",n=nr(e);for(let t=0,a=n.length;t<a;t++)r+=ne(n[t])+",";return r}}function ze(e){return Pe(e.assignments)}function Be(e,r,n){e.assignments.push({t:"index",s:r,k:void 0,v:n});}function tr(e,r,n){R(e,r),e.assignments.push({t:"set",s:m(e,r),k:void 0,v:n});}function Se(e,r,n,t){R(e,r),e.assignments.push({t:"map",s:m(e,r),k:n,v:t});}function me(e,r,n,t){R(e,r),Be(e,m(e,r)+"["+n+"]",t);}function Te(e,r,n,t){R(e,r),Be(e,m(e,r)+"."+n,t);}function b(e,r,n){return e.markedRefs.has(r)?m(e,r)+"="+n:n}function k(e,r){return r.t===10&&e.stack.includes(r.i)}function ye(e,r){let n=r.l,t="",a,o=!1;for(let i=0;i<n;i++)i!==0&&(t+=","),a=r.a[i],a?k(e,a)?(me(e,r.i,i,m(e,a.i)),o=!0):(t+=y(e,a),o=!1):o=!0;return "["+t+(o?",]":"]")}function ar(e,r){e.stack.push(r.i);let n=ye(e,r);return e.stack.pop(),b(e,r.i,n)}function Ue(e,r,n){if(n.s===0)return "{}";let t="";e.stack.push(r);let a,o,i,d,s,u=!1;for(let l=0;l<n.s;l++)a=n.k[l],o=n.v[l],i=Number(a),d=i>=0||le(a),k(e,o)?(s=m(e,o.i),d&&Number.isNaN(i)?Te(e,r,a,s):me(e,r,d?a:'"'+A$1(a)+'"',s)):(t+=(u?",":"")+(d?a:'"'+A$1(a)+'"')+":"+y(e,o),u=!0);return e.stack.pop(),"{"+t+"}"}function or(e,r,n,t){let a=Ue(e,n,r);return a!=="{}"?"Object.assign("+t+","+a+")":t}function ir(e,r,n){e.stack.push(r);let t=[],a,o,i,d,s,u;for(let l=0;l<n.s;l++)a=e.stack,e.stack=[],o=y(e,n.v[l]),e.stack=a,i=n.k[l],d=Number(i),s=e.assignments,e.assignments=t,u=d>=0||le(i),u&&Number.isNaN(d)?Te(e,r,i,o):me(e,r,u?i:'"'+A$1(i)+'"',o),e.assignments=s;return e.stack.pop(),Pe(t)}function te(e,r,n,t){if(n)if(e.features&128)t=or(e,n,r,t);else {R(e,r);let a=ir(e,r,n);if(a)return "("+b(e,r,t)+","+a+m(e,r)+")"}return b(e,r,t)}function sr(e,r){return te(e,r.i,r.d,"Object.create(null)")}function lr(e,r){return b(e,r.i,Ue(e,r.i,r.d))}function dr(e,r){let n="new Set",t=r.l;if(t){let a="";e.stack.push(r.i);let o,i=!1;for(let d=0;d<t;d++)o=r.a[d],k(e,o)?tr(e,r.i,m(e,o.i)):(a+=(i?",":"")+y(e,o),i=!0);e.stack.pop(),a&&(n+="(["+a+"])");}return b(e,r.i,n)}function ur(e,r){let n="new Map";if(r.d.s){let t="";e.stack.push(r.i);let a,o,i,d,s,u=!1;for(let l=0;l<r.d.s;l++)a=r.d.k[l],o=r.d.v[l],k(e,a)?(i=m(e,a.i),k(e,o)?(d=m(e,o.i),Se(e,r.i,i,d)):(s=e.stack,e.stack=[],Se(e,r.i,i,y(e,o)),e.stack=s)):k(e,o)?(d=m(e,o.i),s=e.stack,e.stack=[],Se(e,r.i,y(e,a),d),e.stack=s):(t+=(u?",[":"[")+y(e,a)+","+y(e,o)+"]",u=!0);e.stack.pop(),t&&(n+="(["+t+"])");}return b(e,r.i,n)}function fr(e,r){e.stack.push(r.i);let n="new AggregateError("+ye(e,r)+',"'+A$1(r.m)+'")';return e.stack.pop(),te(e,r.i,r.d,n)}function cr(e,r){let n="new "+r.c+'("'+A$1(r.m)+'")';return te(e,r.i,r.d,n)}function Sr(e,r){let n;if(k(e,r.f)){let t=m(e,r.f.i);e.features&4?n="Promise.resolve().then(()=>"+t+")":n="Promise.resolve().then(function(){return "+t+"})";}else {e.stack.push(r.i);let t=y(e,r.f);e.stack.pop(),n="Promise.resolve("+t+")";}return b(e,r.i,n)}function mr(e,r){let n="",t=r.t===23;for(let o=0,i=r.s.length;o<i;o++)n+=(o!==0?",":"")+r.s[o]+(t?"n":"");let a="["+n+"]"+(r.l!==0?","+r.l:"");return b(e,r.i,"new "+r.c+"("+a+")")}function yr(e,r){let n=e.stack;e.stack=[];let t=ye(e,r);e.stack=n;let a=t;return e.features&2?a+=".values()":a+="[Symbol.iterator]()",e.features&4?a="{[Symbol.iterator]:()=>"+a+"}":e.features&64?a="{[Symbol.iterator](){return "+a+"}}":a="{[Symbol.iterator]:function(){return "+a+"}}",te(e,r.i,r.d,a)}function y(e,r){switch(r.t){case 0:return ""+r.s;case 1:return '"'+r.s+'"';case 2:return r.s?"!0":"!1";case 4:return "void 0";case 3:return "null";case 5:return "-0";case 6:return "1/0";case 7:return "-1/0";case 8:return "NaN";case 9:return r.s+"n";case 10:return m(e,r.i);case 15:return ar(e,r);case 16:return lr(e,r);case 17:return sr(e,r);case 11:return b(e,r.i,'new Date("'+r.s+'")');case 12:return b(e,r.i,"/"+r.c+"/"+r.m);case 13:return dr(e,r);case 14:return ur(e,r);case 23:case 22:return mr(e,r);case 20:return fr(e,r);case 19:return cr(e,r);case 21:return yr(e,r);case 18:return Sr(e,r);case 24:return Ie[r.s];default:throw new Error("Unsupported type")}}function Ne(e,r){let n=r.length,t=new Array(n),a=new Array(n),o;for(let i=0;i<n;i++)i in r&&(o=r[i],N(o)?a[i]=o:t[i]=g(e,o));for(let i=0;i<n;i++)i in a&&(t[i]=g(e,a[i]));return t}function Nr(e,r,n){return {t:15,i:r,s:void 0,l:n.length,c:void 0,m:void 0,d:void 0,a:Ne(e,n),f:void 0}}function pr(e,r,n){S(e.features&32,'Unsupported type "Map"');let t=n.size,a=new Array(t),o=new Array(t),i=new Array(t),d=new Array(t),s=0,u=0;for(let[l,f]of n.entries())N(l)||N(f)?(i[s]=l,d[s]=f,s++):(a[u]=g(e,l),o[u]=g(e,f),u++);for(let l=0;l<s;l++)a[u+l]=g(e,i[l]),o[u+l]=g(e,d[l]);return {t:14,i:r,s:void 0,l:void 0,c:void 0,m:void 0,d:{k:a,v:o,s:t},a:void 0,f:void 0}}function vr(e,r,n){S(e.features&512,'Unsupported type "Set"');let t=n.size,a=new Array(t),o=new Array(t),i=0,d=0;for(let s of n.keys())N(s)?o[i++]=s:a[d++]=g(e,s);for(let s=0;s<i;s++)a[d+s]=g(e,o[s]);return {t:13,i:r,s:void 0,l:t,c:void 0,m:void 0,d:void 0,a,f:void 0}}function oe(e,r){let n=Object.keys(r),t=n.length,a=new Array(t),o=new Array(t),i=new Array(t),d=new Array(t),s=0,u=0,l;for(let f of n)l=r[f],N(l)?(i[s]=f,d[s]=l,s++):(a[u]=f,o[u]=g(e,l),u++);for(let f=0;f<s;f++)a[u+f]=i[f],o[u+f]=g(e,d[f]);return {k:a,v:o,s:t}}function De(e,r,n){S(e.features&1024,'Unsupported type "Iterable"');let t=q(n),a=Array.from(n);return {t:21,i:r,s:void 0,l:a.length,c:void 0,m:void 0,d:t?oe(e,t):void 0,a:Ne(e,a),f:void 0}}function je(e,r,n,t){return Symbol.iterator in n?De(e,r,n):{t:t?17:16,i:r,s:void 0,l:void 0,c:void 0,m:void 0,d:oe(e,n),a:void 0,f:void 0}}function Me(e,r,n){let t=C(e,n),a=t?oe(e,t):void 0;return {t:20,i:r,s:void 0,l:n.errors.length,c:void 0,m:n.message,d:a,a:Ne(e,n.errors),f:void 0}}function ae(e,r,n){let t=C(e,n),a=t?oe(e,t):void 0;return {t:19,i:r,s:void 0,l:void 0,c:w(n),m:n.message,d:a,a:void 0,f:void 0}}function g(e,r){switch(typeof r){case"boolean":return r?T:U;case"undefined":return j;case"string":return K(r);case"number":switch(r){case 1/0:return _;case-1/0:return L;}return r!==r?x:Object.is(r,-0)?D:F(r);case"bigint":return W(e,r);case"object":{if(!r)return M$1;let n=z(e,r);if(e.markedRefs.has(n))return Y(n);if(Array.isArray(r))return Nr(e,n,r);switch(r.constructor){case Date:return Z(n,r);case RegExp:return G(n,r);case Int8Array:case Int16Array:case Int32Array:case Uint8Array:case Uint16Array:case Uint32Array:case Uint8ClampedArray:case Float32Array:case Float64Array:return H(e,n,r);case BigInt64Array:case BigUint64Array:return J(e,n,r);case Map:return pr(e,n,r);case Set:return vr(e,n,r);case Object:return je(e,n,r,!1);case void 0:return je(e,n,r,!0);case AggregateError:return e.features&1?Me(e,n,r):ae(e,n,r);case Error:case EvalError:case RangeError:case ReferenceError:case SyntaxError:case TypeError:case URIError:return ae(e,n,r);}if(r instanceof AggregateError)return e.features&1?Me(e,n,r):ae(e,n,r);if(r instanceof Error)return ae(e,n,r);if(Symbol.iterator in r)return De(e,n,r);throw new Error("Unsupported type")}case"symbol":return S(e.features&1024,'Unsupported type "symbol"'),S(r in O,"seroval only supports well-known symbols"),$(r);default:throw new Error("Unsupported type")}}function ie(e,r){let n=g(e,r),t=n.t===16||n.t===21;return [n,P(e,r),t]}function pe(e,r,n,t){if(e.vars.length){let a=ze(e),o=t;if(a){let d=m(e,r);o=t+","+a+d,t.startsWith(d+"=")||(o=d+"="+o);}let i=e.vars.length>1?e.vars.join(","):e.vars[0];return e.features&4?(i=e.vars.length>1||e.vars.length===0?"("+i+")":i,"("+i+"=>("+o+"))()"):"(function("+i+"){return "+o+"})()"}return n?"("+t+")":t}function gr(e,r){let n=h(r),[t,a,o]=ie(n,e),i=V(n),d=y(i,t);return pe(i,a,o,d)}

const booleans = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"];
const BooleanAttributes = /*#__PURE__*/new Set(booleans);
const ChildProperties = /*#__PURE__*/new Set(["innerHTML", "textContent", "innerText", "children"]);
const Aliases = /*#__PURE__*/Object.assign(Object.create(null), {
  className: "class",
  htmlFor: "for"
});

const ES2017FLAG = I.AggregateError
| I.BigInt
| I.BigIntTypedArray;
function stringify(data) {
  return gr(data, {
    disabledFeatures: ES2017FLAG
  });
}

const VOID_ELEMENTS = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
const REPLACE_SCRIPT = `function $df(e,n,t,o,d){if(t=document.getElementById(e),o=document.getElementById("pl-"+e)){for(;o&&8!==o.nodeType&&o.nodeValue!=="pl-"+e;)d=o.nextSibling,o.remove(),o=d;_$HY.done?o.remove():o.replaceWith(t.content)}t.remove(),_$HY.set(e,n),_$HY.fe(e)}`;
function renderToStringAsync(code, options = {}) {
  const {
    timeoutMs = 30000
  } = options;
  let timeoutHandle;
  const timeout = new Promise((_, reject) => {
    timeoutHandle = setTimeout(() => reject("renderToString timed out"), timeoutMs);
  });
  return Promise.race([renderToStream(code, options), timeout]).then(html => {
    clearTimeout(timeoutHandle);
    return html;
  });
}
function renderToStream(code, options = {}) {
  let {
    nonce,
    onCompleteShell,
    onCompleteAll,
    renderId
  } = options;
  let dispose;
  const blockingResources = [];
  const registry = new Map();
  const dedupe = new WeakMap();
  const checkEnd = () => {
    if (!registry.size && !completed) {
      writeTasks();
      onCompleteAll && onCompleteAll({
        write(v) {
          !completed && buffer.write(v);
        }
      });
      writable && writable.end();
      completed = true;
      setTimeout(dispose);
    }
  };
  const pushTask = task => {
    tasks += task + ";";
    if (!scheduled && firstFlushed) {
      Promise.resolve().then(writeTasks);
      scheduled = true;
    }
  };
  const writeTasks = () => {
    if (tasks.length && !completed && firstFlushed) {
      buffer.write(`<script${nonce ? ` nonce="${nonce}"` : ""}>${tasks}</script>`);
      tasks = "";
    }
    scheduled = false;
  };
  let context;
  let writable;
  let tmp = "";
  let tasks = "";
  let firstFlushed = false;
  let completed = false;
  let scriptFlushed = false;
  let scheduled = true;
  let buffer = {
    write(payload) {
      tmp += payload;
    }
  };
  sharedConfig.context = context = {
    id: renderId || "",
    count: 0,
    async: true,
    resources: {},
    lazy: {},
    suspense: {},
    assets: [],
    nonce,
    block(p) {
      if (!firstFlushed) blockingResources.push(p);
    },
    replace(id, payloadFn) {
      if (firstFlushed) return;
      const placeholder = `<!!$${id}>`;
      const first = html.indexOf(placeholder);
      if (first === -1) return;
      const last = html.indexOf(`<!!$/${id}>`, first + placeholder.length);
      html = html.replace(html.slice(first, last + placeholder.length + 1), resolveSSRNode(payloadFn()));
    },
    writeResource(id, p, error, wait) {
      const serverOnly = sharedConfig.context.noHydrate;
      if (error) return !serverOnly && pushTask(serializeSet(dedupe, id, p));
      if (!p || typeof p !== "object" || !("then" in p)) return !serverOnly && pushTask(serializeSet(dedupe, id, p));
      if (!firstFlushed) wait && blockingResources.push(p);else !serverOnly && pushTask(`_$HY.init("${id}")`);
      if (serverOnly) return;
      p.then(d => {
        !completed && pushTask(serializeSet(dedupe, id, d));
      }).catch(() => {
        !completed && pushTask(`_$HY.set("${id}", {})`);
      });
    },
    registerFragment(key) {
      if (!registry.has(key)) {
        registry.set(key, []);
        firstFlushed && pushTask(`_$HY.init("${key}")`);
      }
      return (value, error) => {
        if (registry.has(key)) {
          const keys = registry.get(key);
          registry.delete(key);
          if (waitForFragments(registry, key)) return;
          if ((value !== undefined || error) && !completed) {
            if (!firstFlushed) {
              Promise.resolve().then(() => html = replacePlaceholder(html, key, value !== undefined ? value : ""));
              error && pushTask(serializeSet(dedupe, key, error));
            } else {
              buffer.write(`<template id="${key}">${value !== undefined ? value : " "}</template>`);
              pushTask(`${keys.length ? keys.map(k => `_$HY.unset("${k}")`).join(";") + ";" : ""}$df("${key}"${error ? "," + stringify(error) : ""})${!scriptFlushed ? ";" + REPLACE_SCRIPT : ""}`);
              scriptFlushed = true;
            }
          }
        }
        if (!registry.size) Promise.resolve().then(checkEnd);
        return firstFlushed;
      };
    }
  };
  let html = createRoot(d => {
    dispose = d;
    return resolveSSRNode(escape(code()));
  });
  function doShell() {
    sharedConfig.context = context;
    context.noHydrate = true;
    html = injectAssets(context.assets, html);
    for (const key in context.resources) {
      if (!("data" in context.resources[key] || context.resources[key].ref[0].error)) pushTask(`_$HY.init("${key}")`);
    }
    for (const key of registry.keys()) pushTask(`_$HY.init("${key}")`);
    if (tasks.length) html = injectScripts(html, tasks, nonce);
    buffer.write(html);
    tasks = "";
    scheduled = false;
    onCompleteShell && onCompleteShell({
      write(v) {
        !completed && buffer.write(v);
      }
    });
  }
  return {
    then(fn) {
      function complete() {
        doShell();
        fn(tmp);
      }
      if (onCompleteAll) {
        ogComplete = onCompleteAll;
        onCompleteAll = options => {
          ogComplete(options);
          complete();
        };
      } else onCompleteAll = complete;
      if (!registry.size) Promise.resolve().then(checkEnd);
    },
    pipe(w) {
      Promise.allSettled(blockingResources).then(() => {
        doShell();
        buffer = writable = w;
        buffer.write(tmp);
        firstFlushed = true;
        if (completed) writable.end();else setTimeout(checkEnd);
      });
    },
    pipeTo(w) {
      Promise.allSettled(blockingResources).then(() => {
        doShell();
        const encoder = new TextEncoder();
        const writer = w.getWriter();
        writable = {
          end() {
            writer.releaseLock();
            w.close();
          }
        };
        buffer = {
          write(payload) {
            writer.write(encoder.encode(payload));
          }
        };
        buffer.write(tmp);
        firstFlushed = true;
        if (completed) writable.end();else setTimeout(checkEnd);
      });
    }
  };
}
function HydrationScript(props) {
  const {
    nonce
  } = sharedConfig.context;
  return ssr(generateHydrationScript({
    nonce,
    ...props
  }));
}
function ssr(t, ...nodes) {
  if (nodes.length) {
    let result = "";
    for (let i = 0; i < nodes.length; i++) {
      result += t[i];
      const node = nodes[i];
      if (node !== undefined) result += resolveSSRNode(node);
    }
    t = result + t[nodes.length];
  }
  return {
    t
  };
}
function ssrClassList(value) {
  if (!value) return "";
  let classKeys = Object.keys(value),
    result = "";
  for (let i = 0, len = classKeys.length; i < len; i++) {
    const key = classKeys[i],
      classValue = !!value[key];
    if (!key || key === "undefined" || !classValue) continue;
    i && (result += " ");
    result += escape(key);
  }
  return result;
}
function ssrStyle(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  let result = "";
  const k = Object.keys(value);
  for (let i = 0; i < k.length; i++) {
    const s = k[i];
    const v = value[s];
    if (v != undefined) {
      if (i) result += ";";
      result += `${s}:${escape(v, true)}`;
    }
  }
  return result;
}
function ssrElement(tag, props, children, needsId) {
  if (props == null) props = {};else if (typeof props === "function") props = props();
  const skipChildren = VOID_ELEMENTS.test(tag);
  const keys = Object.keys(props);
  let result = `<${tag}${needsId ? ssrHydrationKey() : ""} `;
  let classResolved;
  for (let i = 0; i < keys.length; i++) {
    const prop = keys[i];
    if (ChildProperties.has(prop)) {
      if (children === undefined && !skipChildren) children = prop === "innerHTML" ? props[prop] : escape(props[prop]);
      continue;
    }
    const value = props[prop];
    if (prop === "style") {
      result += `style="${ssrStyle(value)}"`;
    } else if (prop === "class" || prop === "className" || prop === "classList") {
      if (classResolved) continue;
      let n;
      result += `class="${escape(((n = props.class) ? n + " " : "") + ((n = props.className) ? n + " " : ""), true) + ssrClassList(props.classList)}"`;
      classResolved = true;
    } else if (BooleanAttributes.has(prop)) {
      if (value) result += prop;else continue;
    } else if (value == undefined || prop === "ref" || prop.slice(0, 2) === "on") {
      continue;
    } else {
      result += `${Aliases[prop] || prop}="${escape(value, true)}"`;
    }
    if (i !== keys.length - 1) result += " ";
  }
  if (skipChildren) return {
    t: result + "/>"
  };
  if (typeof children === "function") children = children();
  return {
    t: result + `>${resolveSSRNode(children, true)}</${tag}>`
  };
}
function ssrAttribute(key, value, isBoolean) {
  return isBoolean ? value ? " " + key : "" : value != null ? ` ${key}="${value}"` : "";
}
function ssrHydrationKey() {
  const hk = getHydrationKey();
  return hk ? ` data-hk="${hk}"` : "";
}
function escape(s, attr) {
  const t = typeof s;
  if (t !== "string") {
    if (!attr && t === "function") return escape(s());
    if (!attr && Array.isArray(s)) {
      for (let i = 0; i < s.length; i++) s[i] = escape(s[i]);
      return s;
    }
    if (attr && t === "boolean") return String(s);
    return s;
  }
  const delim = attr ? '"' : "<";
  const escDelim = attr ? "&quot;" : "&lt;";
  let iDelim = s.indexOf(delim);
  let iAmp = s.indexOf("&");
  if (iDelim < 0 && iAmp < 0) return s;
  let left = 0,
    out = "";
  while (iDelim >= 0 && iAmp >= 0) {
    if (iDelim < iAmp) {
      if (left < iDelim) out += s.substring(left, iDelim);
      out += escDelim;
      left = iDelim + 1;
      iDelim = s.indexOf(delim, left);
    } else {
      if (left < iAmp) out += s.substring(left, iAmp);
      out += "&amp;";
      left = iAmp + 1;
      iAmp = s.indexOf("&", left);
    }
  }
  if (iDelim >= 0) {
    do {
      if (left < iDelim) out += s.substring(left, iDelim);
      out += escDelim;
      left = iDelim + 1;
      iDelim = s.indexOf(delim, left);
    } while (iDelim >= 0);
  } else while (iAmp >= 0) {
    if (left < iAmp) out += s.substring(left, iAmp);
    out += "&amp;";
    left = iAmp + 1;
    iAmp = s.indexOf("&", left);
  }
  return left < s.length ? out + s.substring(left) : out;
}
function resolveSSRNode(node, top) {
  const t = typeof node;
  if (t === "string") return node;
  if (node == null || t === "boolean") return "";
  if (Array.isArray(node)) {
    let prev = {};
    let mapped = "";
    for (let i = 0, len = node.length; i < len; i++) {
      if (!top && typeof prev !== "object" && typeof node[i] !== "object") mapped += `<!--!$-->`;
      mapped += resolveSSRNode(prev = node[i]);
    }
    return mapped;
  }
  if (t === "object") return node.t;
  if (t === "function") return resolveSSRNode(node());
  return String(node);
}
function getHydrationKey() {
  const hydrate = sharedConfig.context;
  return hydrate && !hydrate.noHydrate && `${hydrate.id}${hydrate.count++}`;
}
function useAssets(fn) {
  sharedConfig.context.assets.push(() => resolveSSRNode(fn()));
}
function generateHydrationScript({
  eventNames = ["click", "input"],
  nonce
} = {}) {
  return `<script${nonce ? ` nonce="${nonce}"` : ""}>(e=>{let t=e=>e&&e.hasAttribute&&(e.hasAttribute("data-hk")?e:t(e.host&&e.host.nodeType?e.host:e.parentNode));["${eventNames.join('", "')}"].forEach((o=>document.addEventListener(o,(o=>{let s=o.composedPath&&o.composedPath()[0]||o.target,a=t(s);a&&!e.completed.has(a)&&e.events.push([a,o])}))))})(window._$HY||(_$HY={events:[],completed:new WeakSet,r:{},fe(){},init(e,t){_$HY.r[e]=[new Promise((e=>t=e)),t]},set(e,t,o){(o=_$HY.r[e])&&o[1](t),_$HY.r[e]=[t]},unset(e){delete _$HY.r[e]},load:e=>_$HY.r[e]}));</script><!--xs-->`;
}
function NoHydration(props) {
  sharedConfig.context.noHydrate = true;
  return props.children;
}
function injectAssets(assets, html) {
  if (!assets || !assets.length) return html;
  let out = "";
  for (let i = 0, len = assets.length; i < len; i++) out += assets[i]();
  return html.replace(`</head>`, out + `</head>`);
}
function injectScripts(html, scripts, nonce) {
  const tag = `<script${nonce ? ` nonce="${nonce}"` : ""}>${scripts}</script>`;
  const index = html.indexOf("<!--xs-->");
  if (index > -1) {
    return html.slice(0, index) + tag + html.slice(index);
  }
  return html + tag;
}
function waitForFragments(registry, key) {
  for (const k of [...registry.keys()].reverse()) {
    if (key.startsWith(k)) {
      registry.get(k).push(key);
      return true;
    }
  }
  return false;
}
function serializeSet(registry, key, value) {
  const exist = registry.get(value);
  if (exist) return `_$HY.set("${key}", _$HY.r["${exist}"][0])`;
  value !== null && typeof value === "object" && registry.set(value, key);
  return `_$HY.set("${key}", ${stringify(value)})`;
}
function replacePlaceholder(html, key, value) {
  const marker = `<template id="pl-${key}">`;
  const close = `<!pl-${key}>`;
  const first = html.indexOf(marker);
  if (first === -1) return html;
  const last = html.indexOf(close, first + marker.length);
  return html.slice(0, first) + value + html.slice(last + close.length);
}

const isServer = true;
function Dynamic(props) {
  const [p, others] = splitProps(props, ["component"]);
  const comp = p.component,
    t = typeof comp;
  if (comp) {
    if (t === "function") return comp(others);else if (t === "string") {
      return ssrElement(comp, others, undefined, true);
    }
  }
}

function isWrappable(obj) {
  return obj != null && typeof obj === "object" && (Object.getPrototypeOf(obj) === Object.prototype || Array.isArray(obj));
}
function setProperty(state, property, value, force) {
  if (!force && state[property] === value) return;
  if (value === undefined) {
    delete state[property];
  } else state[property] = value;
}
function mergeStoreNode(state, value, force) {
  const keys = Object.keys(value);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    setProperty(state, key, value[key], force);
  }
}
function updateArray(current, next) {
  if (typeof next === "function") next = next(current);
  if (Array.isArray(next)) {
    if (current === next) return;
    let i = 0,
      len = next.length;
    for (; i < len; i++) {
      const value = next[i];
      if (current[i] !== value) setProperty(current, i, value);
    }
    setProperty(current, "length", len);
  } else mergeStoreNode(current, next);
}
function updatePath(current, path, traversed = []) {
  let part,
    next = current;
  if (path.length > 1) {
    part = path.shift();
    const partType = typeof part,
      isArray = Array.isArray(current);
    if (Array.isArray(part)) {
      for (let i = 0; i < part.length; i++) {
        updatePath(current, [part[i]].concat(path), traversed);
      }
      return;
    } else if (isArray && partType === "function") {
      for (let i = 0; i < current.length; i++) {
        if (part(current[i], i)) updatePath(current, [i].concat(path), traversed);
      }
      return;
    } else if (isArray && partType === "object") {
      const {
        from = 0,
        to = current.length - 1,
        by = 1
      } = part;
      for (let i = from; i <= to; i += by) {
        updatePath(current, [i].concat(path), traversed);
      }
      return;
    } else if (path.length > 1) {
      updatePath(current[part], path, [part].concat(traversed));
      return;
    }
    next = current[part];
    traversed = [part].concat(traversed);
  }
  let value = path[0];
  if (typeof value === "function") {
    value = value(next, traversed);
    if (value === next) return;
  }
  if (part === undefined && value == undefined) return;
  if (part === undefined || isWrappable(next) && isWrappable(value) && !Array.isArray(value)) {
    mergeStoreNode(next, value);
  } else setProperty(current, part, value);
}
function createStore(state) {
  const isArray = Array.isArray(state);
  function setStore(...args) {
    isArray && args.length === 1 ? updateArray(state, args[0]) : updatePath(state, args);
  }
  return [state, setStore];
}

const FETCH_EVENT = "$FETCH";

function getRouteMatches$1(routes, path, method) {
  const segments = path.split("/").filter(Boolean);
  routeLoop:
    for (const route of routes) {
      const matchSegments = route.matchSegments;
      if (segments.length < matchSegments.length || !route.wildcard && segments.length > matchSegments.length) {
        continue;
      }
      for (let index = 0; index < matchSegments.length; index++) {
        const match = matchSegments[index];
        if (!match) {
          continue;
        }
        if (segments[index] !== match) {
          continue routeLoop;
        }
      }
      const handler = route[method];
      if (handler === "skip" || handler === void 0) {
        return;
      }
      const params = {};
      for (const { type, name, index } of route.params) {
        if (type === ":") {
          params[name] = segments[index];
        } else {
          params[name] = segments.slice(index).join("/");
        }
      }
      return { handler, params };
    }
}

let apiRoutes$1;
const registerApiRoutes = (routes) => {
  apiRoutes$1 = routes;
};
async function internalFetch(route, init, env = {}, locals = {}) {
  if (route.startsWith("http")) {
    return await fetch(route, init);
  }
  let url = new URL(route, "http://internal");
  const request = new Request(url.href, init);
  const handler = getRouteMatches$1(apiRoutes$1, url.pathname, request.method.toUpperCase());
  if (!handler) {
    throw new Error(`No handler found for ${request.method} ${request.url}`);
  }
  let apiEvent = Object.freeze({
    request,
    params: handler.params,
    clientAddress: "127.0.0.1",
    env,
    locals,
    $type: FETCH_EVENT,
    fetch: internalFetch
  });
  const response = await handler.handler(apiEvent);
  return response;
}

const XSolidStartLocationHeader = "x-solidstart-location";
const LocationHeader = "Location";
const ContentTypeHeader = "content-type";
const XSolidStartResponseTypeHeader = "x-solidstart-response-type";
const XSolidStartContentTypeHeader = "x-solidstart-content-type";
const XSolidStartOrigin = "x-solidstart-origin";
const JSONResponseType = "application/json";
function redirect(url, init = 302) {
  let responseInit = init;
  if (typeof responseInit === "number") {
    responseInit = { status: responseInit };
  } else if (typeof responseInit.status === "undefined") {
    responseInit.status = 302;
  }
  if (url === "") {
    url = "/";
  }
  let headers = new Headers(responseInit.headers);
  headers.set(LocationHeader, url);
  const response = new Response(null, {
    ...responseInit,
    headers
  });
  return response;
}
const redirectStatusCodes = /* @__PURE__ */ new Set([204, 301, 302, 303, 307, 308]);
function isRedirectResponse(response) {
  return response && response instanceof Response && redirectStatusCodes.has(response.status);
}
class ResponseError extends Error {
  constructor(response) {
    let message = JSON.stringify({
      $type: "response",
      status: response.status,
      message: response.statusText,
      headers: [...response.headers.entries()]
    });
    super(message);
    this.name = "ResponseError";
    this.status = response.status;
    this.headers = new Map([...response.headers.entries()]);
    this.url = response.url;
    this.ok = response.ok;
    this.statusText = response.statusText;
    this.redirected = response.redirected;
    this.bodyUsed = false;
    this.type = response.type;
    this.response = () => response;
  }
  clone() {
    return this.response();
  }
  get body() {
    return this.response().body;
  }
  async arrayBuffer() {
    return await this.response().arrayBuffer();
  }
  async blob() {
    return await this.response().blob();
  }
  async formData() {
    return await this.response().formData();
  }
  async text() {
    return await this.response().text();
  }
  async json() {
    return await this.response().json();
  }
}

const api = [
  {
    GET: "skip",
    path: "/*404"
  },
  {
    GET: "skip",
    path: "/"
  },
  {
    GET: "skip",
    path: "/themes"
  },
  {
    GET: "skip",
    path: "/docs/api"
  },
  {
    GET: "skip",
    path: "/docs/contribute"
  },
  {
    GET: "skip",
    path: "/docs/credits"
  },
  {
    GET: "skip",
    path: "/docs/debugging-config"
  },
  {
    GET: "skip",
    path: "/docs/features"
  },
  {
    GET: "skip",
    path: "/news/"
  },
  {
    GET: "skip",
    path: "/docs/config/format_lint"
  },
  {
    GET: "skip",
    path: "/docs/config/lsp"
  },
  {
    GET: "skip",
    path: "/docs/config/mappings"
  },
  {
    GET: "skip",
    path: "/docs/config/nvchad_ui"
  },
  {
    GET: "skip",
    path: "/docs/config/plugins"
  },
  {
    GET: "skip",
    path: "/docs/config/snippets"
  },
  {
    GET: "skip",
    path: "/docs/config/syntax"
  },
  {
    GET: "skip",
    path: "/docs/config/theming"
  },
  {
    GET: "skip",
    path: "/docs/config/walkthrough"
  },
  {
    GET: "skip",
    path: "/docs/quickstart/install"
  },
  {
    GET: "skip",
    path: "/docs/quickstart/learn-lua"
  },
  {
    GET: "skip",
    path: "/docs/quickstart/post-install"
  },
  {
    GET: "skip",
    path: "/news/v2.0"
  },
  {
    GET: "skip",
    path: "/news/v2.0_migration"
  }
];
function expandOptionals$1(pattern) {
  let match = /(\/?\:[^\/]+)\?/.exec(pattern);
  if (!match)
    return [pattern];
  let prefix = pattern.slice(0, match.index);
  let suffix = pattern.slice(match.index + match[0].length);
  const prefixes = [prefix, prefix += match[1]];
  while (match = /^(\/\:[^\/]+)\?/.exec(suffix)) {
    prefixes.push(prefix += match[1]);
    suffix = suffix.slice(match[0].length);
  }
  return expandOptionals$1(suffix).reduce(
    (results, expansion) => [...results, ...prefixes.map((p) => p + expansion)],
    []
  );
}
function routeToMatchRoute(route) {
  const segments = route.path.split("/").filter(Boolean);
  const params = [];
  const matchSegments = [];
  let score = 0;
  let wildcard = false;
  for (const [index, segment] of segments.entries()) {
    if (segment[0] === ":") {
      const name = segment.slice(1);
      score += 3;
      params.push({
        type: ":",
        name,
        index
      });
      matchSegments.push(null);
    } else if (segment[0] === "*") {
      score -= 1;
      params.push({
        type: "*",
        name: segment.slice(1),
        index
      });
      wildcard = true;
    } else {
      score += 4;
      matchSegments.push(segment);
    }
  }
  return {
    ...route,
    score,
    params,
    matchSegments,
    wildcard
  };
}
const allRoutes = api.flatMap((route) => {
  const paths = expandOptionals$1(route.path);
  return paths.map((path) => ({ ...route, path }));
}).map(routeToMatchRoute).sort((a, b) => b.score - a.score);
registerApiRoutes(allRoutes);
function getApiHandler(url, method) {
  return getRouteMatches$1(allRoutes, url.pathname, method.toUpperCase());
}

const apiRoutes = ({ forward }) => {
  return async (event) => {
    let apiHandler = getApiHandler(new URL(event.request.url), event.request.method);
    if (apiHandler) {
      let apiEvent = Object.freeze({
        request: event.request,
        clientAddress: event.clientAddress,
        locals: event.locals,
        params: apiHandler.params,
        env: event.env,
        $type: FETCH_EVENT,
        fetch: internalFetch
      });
      try {
        return await apiHandler.handler(apiEvent);
      } catch (error) {
        if (error instanceof Response) {
          return error;
        }
        return new Response(JSON.stringify(error), {
          status: 500
        });
      }
    }
    return await forward(event);
  };
};
function normalizeIntegration(integration) {
    if (!integration) {
        return {
            signal: createSignal({ value: "" })
        };
    }
    else if (Array.isArray(integration)) {
        return {
            signal: integration
        };
    }
    return integration;
}
function staticIntegration(obj) {
    return {
        signal: [() => obj, next => Object.assign(obj, next)]
    };
}

function createBeforeLeave() {
    let listeners = new Set();
    function subscribe(listener) {
        listeners.add(listener);
        return () => listeners.delete(listener);
    }
    let ignore = false;
    function confirm(to, options) {
        if (ignore)
            return !(ignore = false);
        const e = {
            to,
            options,
            defaultPrevented: false,
            preventDefault: () => (e.defaultPrevented = true)
        };
        for (const l of listeners)
            l.listener({
                ...e,
                from: l.location,
                retry: (force) => {
                    force && (ignore = true);
                    l.navigate(to, options);
                }
            });
        return !e.defaultPrevented;
    }
    return {
        subscribe,
        confirm
    };
}

const hasSchemeRegex = /^(?:[a-z0-9]+:)?\/\//i;
const trimPathRegex = /^\/+|(\/)\/+$/g;
function normalizePath(path, omitSlash = false) {
    const s = path.replace(trimPathRegex, "$1");
    return s ? (omitSlash || /^[?#]/.test(s) ? s : "/" + s) : "";
}
function resolvePath(base, path, from) {
    if (hasSchemeRegex.test(path)) {
        return undefined;
    }
    const basePath = normalizePath(base);
    const fromPath = from && normalizePath(from);
    let result = "";
    if (!fromPath || path.startsWith("/")) {
        result = basePath;
    }
    else if (fromPath.toLowerCase().indexOf(basePath.toLowerCase()) !== 0) {
        result = basePath + fromPath;
    }
    else {
        result = fromPath;
    }
    return (result || "/") + normalizePath(path, !result);
}
function invariant(value, message) {
    if (value == null) {
        throw new Error(message);
    }
    return value;
}
function joinPaths(from, to) {
    return normalizePath(from).replace(/\/*(\*.*)?$/g, "") + normalizePath(to);
}
function extractSearchParams(url) {
    const params = {};
    url.searchParams.forEach((value, key) => {
        params[key] = value;
    });
    return params;
}
function createMatcher(path, partial, matchFilters) {
    const [pattern, splat] = path.split("/*", 2);
    const segments = pattern.split("/").filter(Boolean);
    const len = segments.length;
    return (location) => {
        const locSegments = location.split("/").filter(Boolean);
        const lenDiff = locSegments.length - len;
        if (lenDiff < 0 || (lenDiff > 0 && splat === undefined && !partial)) {
            return null;
        }
        const match = {
            path: len ? "" : "/",
            params: {}
        };
        const matchFilter = (s) => matchFilters === undefined ? undefined : matchFilters[s];
        for (let i = 0; i < len; i++) {
            const segment = segments[i];
            const locSegment = locSegments[i];
            const dynamic = segment[0] === ":";
            const key = dynamic ? segment.slice(1) : segment;
            if (dynamic && matchSegment(locSegment, matchFilter(key))) {
                match.params[key] = locSegment;
            }
            else if (dynamic || !matchSegment(locSegment, segment)) {
                return null;
            }
            match.path += `/${locSegment}`;
        }
        if (splat) {
            const remainder = lenDiff ? locSegments.slice(-lenDiff).join("/") : "";
            if (matchSegment(remainder, matchFilter(splat))) {
                match.params[splat] = remainder;
            }
            else {
                return null;
            }
        }
        return match;
    };
}
function matchSegment(input, filter) {
    const isEqual = (s) => s.localeCompare(input, undefined, { sensitivity: "base" }) === 0;
    if (filter === undefined) {
        return true;
    }
    else if (typeof filter === "string") {
        return isEqual(filter);
    }
    else if (typeof filter === "function") {
        return filter(input);
    }
    else if (Array.isArray(filter)) {
        return filter.some(isEqual);
    }
    else if (filter instanceof RegExp) {
        return filter.test(input);
    }
    return false;
}
function scoreRoute(route) {
    const [pattern, splat] = route.pattern.split("/*", 2);
    const segments = pattern.split("/").filter(Boolean);
    return segments.reduce((score, segment) => score + (segment.startsWith(":") ? 2 : 3), segments.length - (splat === undefined ? 0 : 1));
}
function createMemoObject(fn) {
    const map = new Map();
    const owner = getOwner();
    return new Proxy({}, {
        get(_, property) {
            if (!map.has(property)) {
                runWithOwner(owner, () => map.set(property, createMemo(() => fn()[property])));
            }
            return map.get(property)();
        },
        getOwnPropertyDescriptor() {
            return {
                enumerable: true,
                configurable: true
            };
        },
        ownKeys() {
            return Reflect.ownKeys(fn());
        }
    });
}
function expandOptionals(pattern) {
    let match = /(\/?\:[^\/]+)\?/.exec(pattern);
    if (!match)
        return [pattern];
    let prefix = pattern.slice(0, match.index);
    let suffix = pattern.slice(match.index + match[0].length);
    const prefixes = [prefix, (prefix += match[1])];
    // This section handles adjacent optional params. We don't actually want all permuations since
    // that will lead to equivalent routes which have the same number of params. For example
    // `/:a?/:b?/:c`? only has the unique expansion: `/`, `/:a`, `/:a/:b`, `/:a/:b/:c` and we can
    // discard `/:b`, `/:c`, `/:b/:c` by building them up in order and not recursing. This also helps
    // ensure predictability where earlier params have precidence.
    while ((match = /^(\/\:[^\/]+)\?/.exec(suffix))) {
        prefixes.push((prefix += match[1]));
        suffix = suffix.slice(match[0].length);
    }
    return expandOptionals(suffix).reduce((results, expansion) => [...results, ...prefixes.map(p => p + expansion)], []);
}

const MAX_REDIRECTS$1 = 100;
const RouterContextObj = createContext();
const RouteContextObj = createContext();
const useRouter = () => invariant(useContext(RouterContextObj), "Make sure your app is wrapped in a <Router />");
let TempRoute;
const useRoute = () => TempRoute || useContext(RouteContextObj) || useRouter().base;
const useResolvedPath = (path) => {
    const route = useRoute();
    return createMemo(() => route.resolvePath(path()));
};
const useHref = (to) => {
    const router = useRouter();
    return createMemo(() => {
        const to_ = to();
        return to_ !== undefined ? router.renderPath(to_) : to_;
    });
};
const useLocation$1 = () => useRouter().location;
function createRoutes(routeDef, base = "", fallback) {
    const { component, data, children } = routeDef;
    const isLeaf = !children || (Array.isArray(children) && !children.length);
    const shared = {
        key: routeDef,
        element: component
            ? () => createComponent(component, {})
            : () => {
                const { element } = routeDef;
                return element === undefined && fallback
                    ? createComponent(fallback, {})
                    : element;
            },
        preload: routeDef.component
            ? component.preload
            : routeDef.preload,
        data
    };
    return asArray(routeDef.path).reduce((acc, path) => {
        for (const originalPath of expandOptionals(path)) {
            const path = joinPaths(base, originalPath);
            const pattern = isLeaf ? path : path.split("/*", 1)[0];
            acc.push({
                ...shared,
                originalPath,
                pattern,
                matcher: createMatcher(pattern, !isLeaf, routeDef.matchFilters)
            });
        }
        return acc;
    }, []);
}
function createBranch(routes, index = 0) {
    return {
        routes,
        score: scoreRoute(routes[routes.length - 1]) * 10000 - index,
        matcher(location) {
            const matches = [];
            for (let i = routes.length - 1; i >= 0; i--) {
                const route = routes[i];
                const match = route.matcher(location);
                if (!match) {
                    return null;
                }
                matches.unshift({
                    ...match,
                    route
                });
            }
            return matches;
        }
    };
}
function asArray(value) {
    return Array.isArray(value) ? value : [value];
}
function createBranches(routeDef, base = "", fallback, stack = [], branches = []) {
    const routeDefs = asArray(routeDef);
    for (let i = 0, len = routeDefs.length; i < len; i++) {
        const def = routeDefs[i];
        if (def && typeof def === "object" && def.hasOwnProperty("path")) {
            const routes = createRoutes(def, base, fallback);
            for (const route of routes) {
                stack.push(route);
                const isEmptyArray = Array.isArray(def.children) && def.children.length === 0;
                if (def.children && !isEmptyArray) {
                    createBranches(def.children, route.pattern, fallback, stack, branches);
                }
                else {
                    const branch = createBranch([...stack], branches.length);
                    branches.push(branch);
                }
                stack.pop();
            }
        }
    }
    // Stack will be empty on final return
    return stack.length ? branches : branches.sort((a, b) => b.score - a.score);
}
function getRouteMatches(branches, location) {
    for (let i = 0, len = branches.length; i < len; i++) {
        const match = branches[i].matcher(location);
        if (match) {
            return match;
        }
    }
    return [];
}
function createLocation(path, state) {
    const origin = new URL("http://sar");
    const url = createMemo(prev => {
        const path_ = path();
        try {
            return new URL(path_, origin);
        }
        catch (err) {
            console.error(`Invalid path ${path_}`);
            return prev;
        }
    }, origin);
    const pathname = createMemo(() => url().pathname);
    const search = createMemo(() => url().search, true);
    const hash = createMemo(() => url().hash);
    const key = createMemo(() => "");
    return {
        get pathname() {
            return pathname();
        },
        get search() {
            return search();
        },
        get hash() {
            return hash();
        },
        get state() {
            return state();
        },
        get key() {
            return key();
        },
        query: createMemoObject(on(search, () => extractSearchParams(url())))
    };
}
function createRouterContext(integration, base = "", data, out) {
    const { signal: [source, setSource], utils = {} } = normalizeIntegration(integration);
    const parsePath = utils.parsePath || (p => p);
    const renderPath = utils.renderPath || (p => p);
    const beforeLeave = utils.beforeLeave || createBeforeLeave();
    const basePath = resolvePath("", base);
    const output = out
        ? Object.assign(out, {
            matches: [],
            url: undefined
        })
        : undefined;
    if (basePath === undefined) {
        throw new Error(`${basePath} is not a valid base path`);
    }
    else if (basePath && !source().value) {
        setSource({ value: basePath, replace: true, scroll: false });
    }
    const [isRouting, setIsRouting] = createSignal(false);
    const start = async (callback) => {
        setIsRouting(true);
        try {
            await startTransition(callback);
        }
        finally {
            setIsRouting(false);
        }
    };
    const [reference, setReference] = createSignal(source().value);
    const [state, setState] = createSignal(source().state);
    const location = createLocation(reference, state);
    const referrers = [];
    const baseRoute = {
        pattern: basePath,
        params: {},
        path: () => basePath,
        outlet: () => null,
        resolvePath(to) {
            return resolvePath(basePath, to);
        }
    };
    if (data) {
        try {
            TempRoute = baseRoute;
            baseRoute.data = data({
                data: undefined,
                params: {},
                location,
                navigate: navigatorFactory(baseRoute)
            });
        }
        finally {
            TempRoute = undefined;
        }
    }
    function navigateFromRoute(route, to, options) {
        // Untrack in case someone navigates in an effect - don't want to track `reference` or route paths
        untrack(() => {
            if (typeof to === "number") {
                if (!to) ;
                else if (utils.go) {
                    beforeLeave.confirm(to, options) && utils.go(to);
                }
                else {
                    console.warn("Router integration does not support relative routing");
                }
                return;
            }
            const { replace, resolve, scroll, state: nextState } = {
                replace: false,
                resolve: true,
                scroll: true,
                ...options
            };
            const resolvedTo = resolve ? route.resolvePath(to) : resolvePath("", to);
            if (resolvedTo === undefined) {
                throw new Error(`Path '${to}' is not a routable path`);
            }
            else if (referrers.length >= MAX_REDIRECTS$1) {
                throw new Error("Too many redirects");
            }
            const current = reference();
            if (resolvedTo !== current || nextState !== state()) {
                {
                    if (output) {
                        output.url = resolvedTo;
                    }
                    setSource({ value: resolvedTo, replace, scroll, state: nextState });
                }
            }
        });
    }
    function navigatorFactory(route) {
        // Workaround for vite issue (https://github.com/vitejs/vite/issues/3803)
        route = route || useContext(RouteContextObj) || baseRoute;
        return (to, options) => navigateFromRoute(route, to, options);
    }
    createRenderEffect(() => {
        const { value, state } = source();
        // Untrack this whole block so `start` doesn't cause Solid's Listener to be preserved
        untrack(() => {
            if (value !== reference()) {
                start(() => {
                    setReference(value);
                    setState(state);
                });
            }
        });
    });
    return {
        base: baseRoute,
        out: output,
        location,
        isRouting,
        renderPath,
        parsePath,
        navigatorFactory,
        beforeLeave
    };
}
function createRouteContext(router, parent, child, match, params) {
    const { base, location, navigatorFactory } = router;
    const { pattern, element: outlet, preload, data } = match().route;
    const path = createMemo(() => match().path);
    preload && preload();
    const route = {
        parent,
        pattern,
        get child() {
            return child();
        },
        path,
        params,
        data: parent.data,
        outlet,
        resolvePath(to) {
            return resolvePath(base.path(), to, path());
        }
    };
    if (data) {
        try {
            TempRoute = route;
            route.data = data({ data: parent.data, params, location, navigate: navigatorFactory(route) });
        }
        finally {
            TempRoute = undefined;
        }
    }
    return route;
}

const Router = props => {
  const {
    source,
    url,
    base,
    data,
    out
  } = props;
  const integration = source || (staticIntegration({
    value: url || ""
  }) );
  const routerState = createRouterContext(integration, base, data, out);
  return createComponent(RouterContextObj.Provider, {
    value: routerState,
    get children() {
      return props.children;
    }
  });
};
const Routes$1 = props => {
  const router = useRouter();
  const parentRoute = useRoute();
  const routeDefs = children(() => props.children);
  const branches = createMemo(() => createBranches(routeDefs(), joinPaths(parentRoute.pattern, props.base || ""), Outlet$1));
  const matches = createMemo(() => getRouteMatches(branches(), router.location.pathname));
  const params = createMemoObject(() => {
    const m = matches();
    const params = {};
    for (let i = 0; i < m.length; i++) {
      Object.assign(params, m[i].params);
    }
    return params;
  });
  if (router.out) {
    router.out.matches.push(matches().map(({
      route,
      path,
      params
    }) => ({
      originalPath: route.originalPath,
      pattern: route.pattern,
      path,
      params
    })));
  }
  const disposers = [];
  let root;
  const routeStates = createMemo(on(matches, (nextMatches, prevMatches, prev) => {
    let equal = prevMatches && nextMatches.length === prevMatches.length;
    const next = [];
    for (let i = 0, len = nextMatches.length; i < len; i++) {
      const prevMatch = prevMatches && prevMatches[i];
      const nextMatch = nextMatches[i];
      if (prev && prevMatch && nextMatch.route.key === prevMatch.route.key) {
        next[i] = prev[i];
      } else {
        equal = false;
        if (disposers[i]) {
          disposers[i]();
        }
        createRoot(dispose => {
          disposers[i] = dispose;
          next[i] = createRouteContext(router, next[i - 1] || parentRoute, () => routeStates()[i + 1], () => matches()[i], params);
        });
      }
    }
    disposers.splice(nextMatches.length).forEach(dispose => dispose());
    if (prev && equal) {
      return prev;
    }
    root = next[0];
    return next;
  }));
  return createComponent(Show, {
    get when() {
      return routeStates() && root;
    },
    keyed: true,
    children: route => createComponent(RouteContextObj.Provider, {
      value: route,
      get children() {
        return route.outlet();
      }
    })
  });
};
const Outlet$1 = () => {
  const route = useRoute();
  return createComponent(Show, {
    get when() {
      return route.child;
    },
    keyed: true,
    children: child => createComponent(RouteContextObj.Provider, {
      value: child,
      get children() {
        return child.outlet();
      }
    })
  });
};
function A(props) {
  props = mergeProps({
    inactiveClass: "inactive",
    activeClass: "active"
  }, props);
  const [, rest] = splitProps(props, ["href", "state", "class", "activeClass", "inactiveClass", "end"]);
  const to = useResolvedPath(() => props.href);
  const href = useHref(to);
  const location = useLocation$1();
  const isActive = createMemo(() => {
    const to_ = to();
    if (to_ === undefined) return false;
    const path = normalizePath(to_.split(/[?#]/, 1)[0]).toLowerCase();
    const loc = normalizePath(location.pathname).toLowerCase();
    return props.end ? path === loc : loc.startsWith(path);
  });
  return ssrElement("a", mergeProps({
    link: true
  }, rest, {
    get href() {
      return href() || props.href;
    },
    get state() {
      return JSON.stringify(props.state);
    },
    get classList() {
      return {
        ...(props.class && {
          [props.class]: true
        }),
        [props.inactiveClass]: !isActive(),
        [props.activeClass]: isActive(),
        ...rest.classList
      };
    },
    get ["aria-current"]() {
      return isActive() ? "page" : undefined;
    }
  }), undefined, true);
}

class ServerError extends Error {
  constructor(message, {
    status,
    stack
  } = {}) {
    super(message);
    this.name = "ServerError";
    this.status = status || 400;
    if (stack) {
      this.stack = stack;
    }
  }
}
class FormError extends ServerError {
  constructor(message, {
    fieldErrors = {},
    form,
    fields,
    stack
  } = {}) {
    super(message, {
      stack
    });
    this.formError = message;
    this.name = "FormError";
    this.fields = fields || Object.fromEntries(typeof form !== "undefined" ? form.entries() : []) || {};
    this.fieldErrors = fieldErrors;
  }
}

const ServerContext = createContext({});

const Routes = Routes$1;
const Outlet = Outlet$1;
const useLocation = useLocation$1;

const server$ = (_fn) => {
  throw new Error("Should be compiled away");
};
async function parseRequest(event) {
  let request = event.request;
  let contentType = request.headers.get(ContentTypeHeader);
  let name = new URL(request.url).pathname, args = [];
  if (contentType) {
    if (contentType === JSONResponseType) {
      let text = await request.text();
      try {
        args = JSON.parse(text, (key, value) => {
          if (!value) {
            return value;
          }
          if (value.$type === "headers") {
            let headers = new Headers();
            request.headers.forEach((value2, key2) => headers.set(key2, value2));
            value.values.forEach(([key2, value2]) => headers.set(key2, value2));
            return headers;
          }
          if (value.$type === "request") {
            return new Request(value.url, {
              method: value.method,
              headers: value.headers
            });
          }
          return value;
        });
      } catch (e) {
        throw new Error(`Error parsing request body: ${text}`);
      }
    } else if (contentType.includes("form")) {
      let formData = await request.clone().formData();
      args = [formData, event];
    }
  }
  return [name, args];
}
function respondWith(request, data, responseType) {
  if (data instanceof ResponseError) {
    data = data.clone();
  }
  if (data instanceof Response) {
    if (isRedirectResponse(data) && request.headers.get(XSolidStartOrigin) === "client") {
      let headers = new Headers(data.headers);
      headers.set(XSolidStartOrigin, "server");
      headers.set(XSolidStartLocationHeader, data.headers.get(LocationHeader));
      headers.set(XSolidStartResponseTypeHeader, responseType);
      headers.set(XSolidStartContentTypeHeader, "response");
      return new Response(null, {
        status: 204,
        statusText: "Redirected",
        headers
      });
    } else if (data.status === 101) {
      return data;
    } else {
      let headers = new Headers(data.headers);
      headers.set(XSolidStartOrigin, "server");
      headers.set(XSolidStartResponseTypeHeader, responseType);
      headers.set(XSolidStartContentTypeHeader, "response");
      return new Response(data.body, {
        status: data.status,
        statusText: data.statusText,
        headers
      });
    }
  } else if (data instanceof FormError) {
    return new Response(
      JSON.stringify({
        error: {
          message: data.message,
          stack: "",
          formError: data.formError,
          fields: data.fields,
          fieldErrors: data.fieldErrors
        }
      }),
      {
        status: 400,
        headers: {
          [XSolidStartResponseTypeHeader]: responseType,
          [XSolidStartContentTypeHeader]: "form-error"
        }
      }
    );
  } else if (data instanceof ServerError) {
    return new Response(
      JSON.stringify({
        error: {
          message: data.message,
          stack: ""
        }
      }),
      {
        status: data.status,
        headers: {
          [XSolidStartResponseTypeHeader]: responseType,
          [XSolidStartContentTypeHeader]: "server-error"
        }
      }
    );
  } else if (data instanceof Error) {
    console.error(data);
    return new Response(
      JSON.stringify({
        error: {
          message: "Internal Server Error",
          stack: "",
          status: data.status
        }
      }),
      {
        status: data.status || 500,
        headers: {
          [XSolidStartResponseTypeHeader]: responseType,
          [XSolidStartContentTypeHeader]: "error"
        }
      }
    );
  } else if (typeof data === "object" || typeof data === "string" || typeof data === "number" || typeof data === "boolean") {
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        [ContentTypeHeader]: "application/json",
        [XSolidStartResponseTypeHeader]: responseType,
        [XSolidStartContentTypeHeader]: "json"
      }
    });
  }
  return new Response("null", {
    status: 200,
    headers: {
      [ContentTypeHeader]: "application/json",
      [XSolidStartContentTypeHeader]: "json",
      [XSolidStartResponseTypeHeader]: responseType
    }
  });
}
async function handleServerRequest(event) {
  const url = new URL(event.request.url);
  if (server$.hasHandler(url.pathname)) {
    try {
      let [name, args] = await parseRequest(event);
      let handler = server$.getHandler(name);
      if (!handler) {
        throw {
          status: 404,
          message: "Handler Not Found for " + name
        };
      }
      const data = await handler.call(event, ...Array.isArray(args) ? args : [args]);
      return respondWith(event.request, data, "return");
    } catch (error) {
      return respondWith(event.request, error, "throw");
    }
  }
  return null;
}
const handlers = /* @__PURE__ */ new Map();
server$.createHandler = (_fn, hash, serverResource) => {
  let fn = function(...args) {
    let ctx;
    if (typeof this === "object") {
      ctx = this;
    } else if (sharedConfig.context && sharedConfig.context.requestContext) {
      ctx = sharedConfig.context.requestContext;
    } else {
      ctx = {
        request: new URL(hash, "http://localhost:3000").href,
        responseHeaders: new Headers()
      };
    }
    const execute = async () => {
      try {
        return serverResource ? _fn.call(ctx, args[0], ctx) : _fn.call(ctx, ...args);
      } catch (e) {
        if (e instanceof Error && /[A-Za-z]+ is not defined/.test(e.message)) {
          const error = new Error(
            e.message + "\n You probably are using a variable defined in a closure in your server function."
          );
          error.stack = e.stack;
          throw error;
        }
        throw e;
      }
    };
    return execute();
  };
  fn.url = hash;
  fn.action = function(...args) {
    return fn.call(this, ...args);
  };
  return fn;
};
server$.registerHandler = function(route, handler) {
  handlers.set(route, handler);
};
server$.getHandler = function(route) {
  return handlers.get(route);
};
server$.hasHandler = function(route) {
  return handlers.has(route);
};
server$.fetch = internalFetch;

const inlineServerFunctions = ({ forward }) => {
  return async (event) => {
    const url = new URL(event.request.url);
    if (server$.hasHandler(url.pathname)) {
      let contentType = event.request.headers.get(ContentTypeHeader);
      let origin = event.request.headers.get(XSolidStartOrigin);
      let formRequestBody;
      if (contentType != null && contentType.includes("form") && !(origin != null && origin.includes("client"))) {
        let [read1, read2] = event.request.body.tee();
        formRequestBody = new Request(event.request.url, {
          body: read2,
          headers: event.request.headers,
          method: event.request.method,
          duplex: "half"
        });
        event.request = new Request(event.request.url, {
          body: read1,
          headers: event.request.headers,
          method: event.request.method,
          duplex: "half"
        });
      }
      let serverFunctionEvent = Object.freeze({
        request: event.request,
        clientAddress: event.clientAddress,
        locals: event.locals,
        fetch: internalFetch,
        $type: FETCH_EVENT,
        env: event.env
      });
      const serverResponse = await handleServerRequest(serverFunctionEvent);
      let responseContentType = serverResponse.headers.get(XSolidStartContentTypeHeader);
      if (formRequestBody && responseContentType !== null && responseContentType.includes("error")) {
        const formData = await formRequestBody.formData();
        let entries = [...formData.entries()];
        return new Response(null, {
          status: 302,
          headers: {
            Location: new URL(event.request.headers.get("referer") || "").pathname + "?form=" + encodeURIComponent(
              JSON.stringify({
                url: url.pathname,
                entries,
                ...await serverResponse.json()
              })
            )
          }
        });
      }
      return serverResponse;
    }
    const response = await forward(event);
    return response;
  };
};

function renderAsync(fn, options) {
  return () => apiRoutes({
    forward: inlineServerFunctions({
      async forward(event) {
        let pageEvent = createPageEvent(event);
        let markup = await renderToStringAsync(() => fn(pageEvent), options);
        if (pageEvent.routerContext && pageEvent.routerContext.url) {
          return redirect(pageEvent.routerContext.url, {
            headers: pageEvent.responseHeaders
          });
        }
        markup = handleIslandsRouting(pageEvent, markup);
        return new Response(markup, {
          status: pageEvent.getStatusCode(),
          headers: pageEvent.responseHeaders
        });
      }
    })
  });
}
function createPageEvent(event) {
  let responseHeaders = new Headers({
    "Content-Type": "text/html"
  });
  const prevPath = event.request.headers.get("x-solid-referrer");
  let statusCode = 200;
  function setStatusCode(code) {
    statusCode = code;
  }
  function getStatusCode() {
    return statusCode;
  }
  const pageEvent = Object.freeze({
    request: event.request,
    prevUrl: prevPath || "",
    routerContext: {},
    tags: [],
    env: event.env,
    clientAddress: event.clientAddress,
    locals: event.locals,
    $type: FETCH_EVENT,
    responseHeaders,
    setStatusCode,
    getStatusCode,
    fetch: internalFetch
  });
  return pageEvent;
}
function handleIslandsRouting(pageEvent, markup) {
  return markup;
}

const MetaContext = createContext();
const cascadingTags = ["title", "meta"];
const getTagType = tag => tag.tag + (tag.name ? `.${tag.name}"` : "");
const MetaProvider = props => {
  const cascadedTagInstances = new Map();
  const actions = {
    addClientTag: tag => {
      let tagType = getTagType(tag);
      if (cascadingTags.indexOf(tag.tag) !== -1) {
        //  only cascading tags need to be kept as singletons
        if (!cascadedTagInstances.has(tagType)) {
          cascadedTagInstances.set(tagType, []);
        }
        let instances = cascadedTagInstances.get(tagType);
        let index = instances.length;
        instances = [...instances, tag];
        // track indices synchronously
        cascadedTagInstances.set(tagType, instances);
        return index;
      }
      return -1;
    },
    removeClientTag: (tag, index) => {
      const tagName = getTagType(tag);
      if (tag.ref) {
        const t = cascadedTagInstances.get(tagName);
        if (t) {
          if (tag.ref.parentNode) {
            tag.ref.parentNode.removeChild(tag.ref);
            for (let i = index - 1; i >= 0; i--) {
              if (t[i] != null) {
                document.head.appendChild(t[i].ref);
              }
            }
          }
          t[index] = null;
          cascadedTagInstances.set(tagName, t);
        } else {
          if (tag.ref.parentNode) {
            tag.ref.parentNode.removeChild(tag.ref);
          }
        }
      }
    }
  };
  {
    actions.addServerTag = tagDesc => {
      const {
        tags = []
      } = props;
      // tweak only cascading tags
      if (cascadingTags.indexOf(tagDesc.tag) !== -1) {
        const index = tags.findIndex(prev => {
          const prevName = prev.props.name || prev.props.property;
          const nextName = tagDesc.props.name || tagDesc.props.property;
          return prev.tag === tagDesc.tag && prevName === nextName;
        });
        if (index !== -1) {
          tags.splice(index, 1);
        }
      }
      tags.push(tagDesc);
    };
    if (Array.isArray(props.tags) === false) {
      throw Error("tags array should be passed to <MetaProvider /> in node");
    }
  }
  return createComponent(MetaContext.Provider, {
    value: actions,
    get children() {
      return props.children;
    }
  });
};
const MetaTag = (tag, props, setting) => {
  const id = createUniqueId();
  const c = useContext(MetaContext);
  if (!c) throw new Error("<MetaProvider /> should be in the tree");
  useHead({
    tag,
    props,
    setting,
    id,
    get name() {
      return props.name || props.property;
    }
  });
  return null;
};
function useHead(tagDesc) {
  const {
    addClientTag,
    removeClientTag,
    addServerTag
  } = useContext(MetaContext);
  createRenderEffect(() => {
    if (!isServer) ;
  });
  {
    addServerTag(tagDesc);
    return null;
  }
}
function renderTags(tags) {
  return tags.map(tag => {
    const keys = Object.keys(tag.props);
    // @ts-expect-error
    const props = keys.map(k => k === "children" ? "" : ` ${k}="${escape(tag.props[k], true)}"`).join("");
    if (tag.props.children) {
      // Tags might contain multiple text children:
      //   <Title>example - {myCompany}</Title>
      const children = Array.isArray(tag.props.children) ? tag.props.children.join("") : tag.props.children;
      if (tag.setting?.escape && typeof children === "string") {
        return `<${tag.tag} data-sm="${tag.id}"${props}>${escape(children)}</${tag.tag}>`;
      }
      return `<${tag.tag} data-sm="${tag.id}"${props}>${children}</${tag.tag}>`;
    }
    return `<${tag.tag} data-sm="${tag.id}"${props}/>`;
  }).join("");
}
const Title = props => MetaTag("title", props, {
  escape: true
});
const Meta$1 = props => MetaTag("meta", props, {
  escape: true
});

const _tmpl$$t = ["<div", " style=\"", "\"><div style=\"", "\"><p style=\"", "\" id=\"error-message\">", "</p><button id=\"reset-errors\" style=\"", "\">Clear errors and retry</button><pre style=\"", "\">", "</pre></div></div>"];
function ErrorBoundary(props) {
  return createComponent(ErrorBoundary$1, {
    fallback: (e, reset) => {
      return createComponent(Show, {
        get when() {
          return !props.fallback;
        },
        get fallback() {
          return props.fallback && props.fallback(e, reset);
        },
        get children() {
          return createComponent(ErrorMessage, {
            error: e
          });
        }
      });
    },
    get children() {
      return props.children;
    }
  });
}
function ErrorMessage(props) {
  return ssr(_tmpl$$t, ssrHydrationKey(), "padding:" + "16px", "background-color:" + "rgba(252, 165, 165)" + (";color:" + "rgb(153, 27, 27)") + (";border-radius:" + "5px") + (";overflow:" + "scroll") + (";padding:" + "16px") + (";margin-bottom:" + "8px"), "font-weight:" + "bold", escape(props.error.message), "color:" + "rgba(252, 165, 165)" + (";background-color:" + "rgb(153, 27, 27)") + (";border-radius:" + "5px") + (";padding:" + "4px 8px"), "margin-top:" + "8px" + (";width:" + "100%"), escape(props.error.stack));
}

const routeLayouts = {
  "/*404": {
    "id": "/(index)/*404",
    "layouts": ["/(index)"]
  },
  "/docs/api": {
    "id": "/(index)/docs/api",
    "layouts": ["/(index)", "/(index)/docs"]
  },
  "/docs/contribute": {
    "id": "/(index)/docs/contribute",
    "layouts": ["/(index)", "/(index)/docs"]
  },
  "/docs/credits": {
    "id": "/(index)/docs/credits",
    "layouts": ["/(index)", "/(index)/docs"]
  },
  "/docs/debugging-config": {
    "id": "/(index)/docs/debugging-config",
    "layouts": ["/(index)", "/(index)/docs"]
  },
  "/docs/features": {
    "id": "/(index)/docs/features",
    "layouts": ["/(index)", "/(index)/docs"]
  },
  "/docs/config/format_lint": {
    "id": "/(index)/docs/config/format_lint",
    "layouts": ["/(index)", "/(index)/docs"]
  },
  "/docs/config/lsp": {
    "id": "/(index)/docs/config/lsp",
    "layouts": ["/(index)", "/(index)/docs"]
  },
  "/docs/config/mappings": {
    "id": "/(index)/docs/config/mappings",
    "layouts": ["/(index)", "/(index)/docs"]
  },
  "/docs/config/nvchad_ui": {
    "id": "/(index)/docs/config/nvchad_ui",
    "layouts": ["/(index)", "/(index)/docs"]
  },
  "/docs/config/plugins": {
    "id": "/(index)/docs/config/plugins",
    "layouts": ["/(index)", "/(index)/docs"]
  },
  "/docs/config/snippets": {
    "id": "/(index)/docs/config/snippets",
    "layouts": ["/(index)", "/(index)/docs"]
  },
  "/docs/config/syntax": {
    "id": "/(index)/docs/config/syntax",
    "layouts": ["/(index)", "/(index)/docs"]
  },
  "/docs/config/theming": {
    "id": "/(index)/docs/config/theming",
    "layouts": ["/(index)", "/(index)/docs"]
  },
  "/docs/config/walkthrough": {
    "id": "/(index)/docs/config/walkthrough",
    "layouts": ["/(index)", "/(index)/docs"]
  },
  "/docs/quickstart/install": {
    "id": "/(index)/docs/quickstart/install",
    "layouts": ["/(index)", "/(index)/docs"]
  },
  "/docs/quickstart/learn-lua": {
    "id": "/(index)/docs/quickstart/learn-lua",
    "layouts": ["/(index)", "/(index)/docs"]
  },
  "/docs/quickstart/post-install": {
    "id": "/(index)/docs/quickstart/post-install",
    "layouts": ["/(index)", "/(index)/docs"]
  },
  "/": {
    "id": "/(index)/",
    "layouts": ["/(index)"]
  },
  "/themes": {
    "id": "/(index)/themes",
    "layouts": ["/(index)"]
  },
  "/news/v2.0": {
    "id": "/(index)/news/(items)/v2.0",
    "layouts": ["/(index)", "/(index)/news/(items)"]
  },
  "/news/v2.0_migration": {
    "id": "/(index)/news/(items)/v2.0_migration",
    "layouts": ["/(index)", "/(index)/news/(items)"]
  },
  "/news/": {
    "id": "/(index)/news/",
    "layouts": ["/(index)"]
  }
};

const _tmpl$$s = ["<link", " rel=\"stylesheet\"", ">"],
  _tmpl$2$i = ["<link", " rel=\"modulepreload\"", ">"];
function flattenIslands(match, manifest) {
  let result = [...match];
  match.forEach(m => {
    if (m.type !== "island") return;
    const islandManifest = manifest[m.href];
    if (islandManifest) {
      const res = flattenIslands(islandManifest.assets, manifest);
      result.push(...res);
    }
  });
  return result;
}
function getAssetsFromManifest(manifest, routerContext) {
  let match = routerContext.matches ? routerContext.matches.reduce((memo, m) => {
    if (m.length) {
      const fullPath = m.reduce((previous, match) => previous + match.originalPath, "");
      const route = routeLayouts[fullPath];
      if (route) {
        memo.push(...(manifest[route.id] || []));
        const layoutsManifestEntries = route.layouts.flatMap(manifestKey => manifest[manifestKey] || []);
        memo.push(...layoutsManifestEntries);
      }
    }
    return memo;
  }, []) : [];
  match.push(...(manifest["entry-client"] || []));
  match = manifest ? flattenIslands(match, manifest) : [];
  const links = match.reduce((r, src) => {
    r[src.href] = src.type === "style" ? ssr(_tmpl$$s, ssrHydrationKey(), ssrAttribute("href", escape(src.href, true), false)) : src.type === "script" ? ssr(_tmpl$2$i, ssrHydrationKey(), ssrAttribute("href", escape(src.href, true), false)) : undefined;
    return r;
  }, {});
  return Object.values(links);
}

/**
 * Links are used to load assets for the server rendered HTML
 * @returns {JSXElement}
 */
function Links$1() {
  const context = useContext(ServerContext);
  useAssets(() => getAssetsFromManifest(context.env.manifest, context.routerContext));
  return null;
}

function Meta() {
  const context = useContext(ServerContext);
  // @ts-expect-error The ssr() types do not match the Assets child types
  useAssets(() => ssr(renderTags(context.tags)));
  return null;
}

const _tmpl$4$9 = ["<script", " type=\"module\" async", "></script>"];
const isDev = "production" === "development";
const isIslands = false;
function Scripts() {
  const context = useContext(ServerContext);
  return [createComponent(HydrationScript, {}), isIslands , createComponent(NoHydration, {
    get children() {
      return (      ssr(_tmpl$4$9, ssrHydrationKey(), ssrAttribute("src", escape(context.env.manifest["entry-client"][0].href, true), false)) );
    }
  }), isDev ];
}

function Html(props) {
  {
    return ssrElement("html", props, undefined, false);
  }
}
function Head(props) {
  {
    return ssrElement("head", props, () => [escape(props.children), createComponent(Meta, {}), createComponent(Links$1, {})], false);
  }
}
function Body(props) {
  {
    return ssrElement("body", props, () => escape(props.children) , false);
  }
}

const sidebar_Items = [{
  label: ["Quickstart", "i-mingcute:safe-flash-fill"],
  items: [["Install", "quickstart/install"], ["Post Install", "quickstart/post-install"], ["Learn basic Lua", "quickstart/learn-lua"]]
}, {
  label: ["Custom config", "i-mdi-cog"],
  items: [["Walkthrough", "config/walkthrough"], ["Snippets", "config/snippets"], ["Manage Plugins", "config/plugins"], ["Syntax highlighting", "config/syntax"], ["LSP Configuration", "config/lsp"], ["Format & Lint", "config/format_lint"], ["Mappings", "config/mappings"], ["UI Customization", "config/nvchad_ui"], ["Customize colors", "config/theming"]]
}, ["Features", "features", "i-tabler:server-cog"], ["Api Functions", "api", "i-mdi:atom-variant"], ["Debug config", "debugging-config", "i-ri-bug-line"], ["Contributing", "contribute", "i-mdi-github"], ["Credits", "credits", "i-line-md:heart"]];

const _tmpl$$r = ["<div", " class=\"grid pl-4 gap-3 rounded-none\" border=\"0 l solid slate-2 dark:dark-4\" ml-3 pl-5>", "</div>"],
  _tmpl$2$h = ["<div", " class=\"grid gap-5\"><button class=\"rounded-xl gap-20 bg-sky-1 text-slate-7 dark:bg-dark-3 dark:text-white-2 p-2 w-full\"><div class=\"vertCentered\" font-medium><div", "></div> <!--#-->", "<!--/--></div><div class=\"", "\">", "</div></button><!--#-->", "<!--/--></div>"],
  _tmpl$3$a = ["<div", " i-octicon:chevron-down-12></div>"],
  _tmpl$4$8 = ["<div", " i-octicon:chevron-right-12></div>"],
  _tmpl$5$5 = ["<div", "", "><div h-full flex flex-col gap-5 class=\"[&amp;_*]:text-base dark:text-slate-4\">", "</div></div>"],
  _tmpl$6$3 = ["<div", "></div>"];
function NestedLabels(props) {
  const is_ActiveRoute = props.labels.filter(item => useLocation$1().pathname == `/docs/${item[1]}`).length;
  const [showLinks, collapseLinks] = createSignal(is_ActiveRoute == 1 ? true : false);
  return ssr(_tmpl$2$h, ssrHydrationKey(), ssrAttribute("class", escape(props.BtnLabel[1], true), false), escape(props.BtnLabel[0]), `text-xl bg-slate-6 text-slate-1 dark:bg-dark-4 p-1 rounded-full
                  ${showLinks() ? "dark:text-red-3" : "dark:text-white-2"}`, showLinks() ? _tmpl$3$a[0] + ssrHydrationKey() + _tmpl$3$a[1] : _tmpl$4$8[0] + ssrHydrationKey() + _tmpl$4$8[1], escape(createComponent(Show, {
    get when() {
      return showLinks();
    },
    get children() {
      return ssr(_tmpl$$r, ssrHydrationKey(), escape(props.labels.map(x => createComponent(A, {
        activeClass: "text-slate-7 dark:text-white-2 font-bold",
        get href() {
          return x[1];
        },
        get children() {
          return x[0];
        }
      }))));
    }
  })));
}
function SideBar() {
  const styles = `h-fit  xl:sticky z-10 top-0  xl:flex flex-col
     bg-white-1 dark:bg-dark-2
     text-gray-600 dark:text-grey rounded-none pt-0 p-7 xl:p-0`;
  return ssr(_tmpl$5$5, ssrHydrationKey() + ssrAttribute("class", escape(styles, true), false), ssrAttribute("hidden", sideBarShown() ? false : true, true), escape(sidebar_Items.map(item => {
    return item.label ? createComponent(NestedLabels, {
      get BtnLabel() {
        return item.label;
      },
      get labels() {
        return item.items;
      }
    }) : createComponent(A, {
      get href() {
        return item[1];
      },
      "class": "vertCentered",
      activeClass: "font-medium text-blue-5 dark:text-blue-3",
      get children() {
        return [ssr(_tmpl$6$3, ssrHydrationKey() + ssrAttribute("class", escape(item[2], true), false)), item[0]];
      }
    });
  })));
}

const _tmpl$$q = ["<div", " flex justify-between><!--#-->", "<!--/--><!--#-->", "<!--/--></div>"],
  _tmpl$2$g = ["<button", "><div i-ph:arrow-left-bold></div><!--#-->", "<!--/--></button>"],
  _tmpl$3$9 = ["<div", "></div>"],
  _tmpl$4$7 = ["<button", "><!--#-->", "<!--/--><div i-ph:arrow-right-bold></div></button>"];
let sorted_lables = [];
sidebar_Items.forEach(el => {
  if (!Array.isArray(el)) {
    el.items.forEach(labels => {
      sorted_lables.push(labels);
    });
  } else {
    sorted_lables.push(el);
  }
});

/* generate link labels and hrefs from sidebar_Items
arr = [
 ...
 ["Walkthrough", "config/walkthrough"],
 ["Options", "config/options"],
 ...
]
*/

function generateTxt(direction, wantLink) {
  let result = "";
  let current_path = useLocation$1().pathname.replace(/^\/docs\//, "");
  sorted_lables.forEach((el, index) => {
    if (current_path == el[1] && sorted_lables[index + direction]) {
      result = sorted_lables[index + direction][wantLink ? 1 : 0];
    }
  });
  return result;
}
const NextPrevPageBtns = (() => {
  const btnClass = "!bg-transparent text-blue-6 dark:text-blue-4  p-3 px-5 dark:border-dark-4";
  const border = "1 solid slate-2";
  return ssr(_tmpl$$q, ssrHydrationKey(), generateTxt(-1) ? escape(createComponent(A, {
    get href() {
      return generateTxt(-1, true);
    },
    get children() {
      return ssr(_tmpl$2$g, ssrHydrationKey() + ssrAttribute("border", escape(border, true), false) + ssrAttribute("class", escape(btnClass, true), false), escape(generateTxt(-1)));
    }
  })) : _tmpl$3$9[0] + ssrHydrationKey() + _tmpl$3$9[1], generateTxt(1) ? escape(createComponent(A, {
    get href() {
      return generateTxt(1, true);
    },
    get children() {
      return ssr(_tmpl$4$7, ssrHydrationKey() + ssrAttribute("border", escape(border, true), false) + ssrAttribute("class", escape(btnClass, true), false), escape(generateTxt(1)));
    }
  })) : _tmpl$3$9[0] + ssrHydrationKey() + _tmpl$3$9[1]);
});

const create_copyIcon = (id => {
  const docContent = document.getElementById(id);
  const preElements = docContent?.querySelectorAll("pre");
  preElements?.forEach(function (preElement) {
    const button = document.createElement("button");
    button.classList = "copyBtn";
    button.ariaLabel = "copy button";

    // create copy icon
    const icon = document.createElement("div");
    icon.classList = "i-uil:clipboard";
    button.appendChild(icon);
    button.addEventListener("click", function () {
      // use check icon for copyIcon div
      const copyIcon = button.querySelector("div");
      copyIcon.classList = "i-line-md:confirm-circle clickedCopyBtn";
      const content = preElement.textContent;
      navigator.clipboard.writeText(content);

      // reset to old copyIcon after 1s
      setTimeout(() => {
        copyIcon.classList = "i-uil:clipboard";
      }, 3000);
    });
    preElement.appendChild(button);
  });
});

function isElementVisible(myElement) {
  const rect = myElement.getBoundingClientRect();
  const isVisible = rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  return isVisible ? true : false;
}
const [activeContext_Heading, setActiveContext_Heading] = createSignal("");
const [contextHeadings, setHeadings] = createStore([]);
const generateActiveContext = id => {
  let docs_Elements = document.getElementById(id);
  let headings = docs_Elements?.querySelectorAll("h2,h3");

  // just get the first h2/h3
  for (let i = 0; i < headings.length; i++) {
    if (isElementVisible(headings[i])) {
      setActiveContext_Heading(headings[i].innerText);
      break;
    }
  }
};
const assign_heading_ids = () => {
  const docs = document.getElementById("DocContent");
  const headingElements = docs?.querySelectorAll("h2, h3");
  const headings = [];
  headingElements?.forEach(item => {
    item.id = item.innerText.replaceAll(/[ .&]/g, "_").toLowerCase();
    headings.push([item.localName.toLowerCase(), item.innerText]);
  });
  setHeadings(headings);
};
const autoscroll_toID = () => {
  const hash = location.hash;

  // if currentl link has an anhcor link (with # prefix) then autoscroll to it
  if (hash[0] === "#") {
    const id = hash.substring(1);
    document.getElementById(id).scrollIntoView();
  }
};

const _tmpl$$p = ["<div", " class=\"top-0 sticky my-5 xl:grid xl:h-[calc(100vh-11rem)]\"><div class=\"h-fit grid\"><button class=\"rounded-lg text-lg bg-blue-1 dark:bg-dark-3 mb-3 w-full\" m=\"t-[-2rem]\" xl=\"rounded-none pb-2 border-l-solid mb-0 pt-0 bg-transparent dark:bg-transparent\">Page Contents<div class=\"i-mdi-chevron-down-circle text-2xl xl:hidden text-slate-7 dark:bg-blue-3\"></div></button><div text=\"slate-5\" class=\"", "\">", "</div></div></div>"];

// style inactive/active title differently
function generateStyles(x) {
  let styles = `rounded-r-lg py-2  px-5 text-darkgrey xl:border-solid border-0 border-l-2 border-slate-2 dark:border-dark-3 ${activeContext_Heading() == x[1] ? "!border-blue-5 bg-slate-2 xl:bg-sky-1 !text-blue-7 font-medium dark:bg-dark-3 dark:!text-blue-3 dark:border-blue-4" : ""}`;
  return x[0] == "h3" ? `pl-10 ${styles}` : `${styles}`;
}

// for context bar on the right
function ContextTitles() {
  const [contextLabelsShown, toggleContextLabels] = createSignal(false);
  return ssr(_tmpl$$p, ssrHydrationKey(), `grid xl:grid py-3 xl:py-0 bg-slate-1 dark:bg-dark-3 xl:bg-transparent xl:dark-bg-transparent ${contextLabelsShown() ? "" : "hidden"}`, escape(contextHeadings.map(x => createComponent(A, {
    get href() {
      return `${useLocation$1().pathname}#${x[1].replaceAll(/[ .&]/g, "_").toLowerCase()}`;
    },
    get ["class"]() {
      return generateStyles(x);
    },
    onclick: () => setActiveContext_Heading(x[1]),
    get children() {
      return x[1];
    }
  }))));
}

const _tmpl$$o = ["<div", " grid class=\"xl:grid-cols-[auto_1fr] max-w-[1700px] mx-auto my-8 px-4\"><!--#-->", "<!--/--><div class=\"xl:blur-none\"", "><div class=\"flex flex-col-reverse xl:grid xl:grid-cols-[1fr_auto]\"><div xl:px-10><div id=\"DocContent\" w-full>", "</div><!--#-->", "<!--/--></div><!--#-->", "<!--/--></div></div></div>"];
const [sideBarShown, showSidebar] = createSignal(false);

// final component!
function Docs() {

  //  run on route change
  createEffect(on(() => useLocation().pathname, () => {
    setTimeout(() => {
      create_copyIcon("DocContent");
      assign_heading_ids();
      generateActiveContext("DocContent");
      autoscroll_toID();
    }, 50);
  }));
  return ssr(_tmpl$$o, ssrHydrationKey(), escape(createComponent(SideBar, {})), ssrAttribute("blur", sideBarShown() ? "sm" : "", false), escape(createComponent(Outlet, {})), escape(createComponent(NextPrevPageBtns, {})), contextHeadings.length > 1 && escape(createComponent(ContextTitles, {})));
}

const _tmpl$$n = ["<img", " src=\"/logo.svg\" alt=\"nvchad logo\" w=\"26px\" h=\"26px\">"],
  _tmpl$2$f = ["<div", " grid md:flex gap-5><!--#-->", "<!--/--><div text=\"slate-7 dark:slate-4\" class=\"", "\"><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--></div></div>"],
  _tmpl$3$8 = ["<button", " xl=\"hidden\" dark:bg-blue-3 dark:text-black><!--#-->", "<!--/-->Docs</button>"],
  _tmpl$4$6 = ["<div", " i-ic:round-close></div>"],
  _tmpl$5$4 = ["<div", " i-carbon:side-panel-close-filled></div>"],
  _tmpl$6$2 = ["<button", " class=\"", "\" aria-label=\"theme toggler\"><div text-base", "></div></button>"],
  _tmpl$7$2 = ["<div", " class=\"", "\"><div hidden id=\"docsearch\"></div><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--></div>"],
  _tmpl$8$2 = ["<button", " id=\"searchbar\" class=\"vertCentered text-base w-fit p-2 px-3 rounded-lg\" bg=\"slate-1 dark:dark-3\" text=\"slate-6\"><div i-ion-search></div>Search<div border=\"1 solid slate-6 dark:dark-4\" p=\"1 x-2\" class=\"ml-3 text-slate-7 dark:text-slate-4 text-sm rounded-lg\">Ctrl + k</div></button>"],
  _tmpl$9$1 = ["<div", " border=\"0 b solid slate-2 dark:dark-4\"><nav", "><div md=\"flex gap-3 mx-auto\" class=\"grid justify-between w-full gap-5\"><!--#-->", "<!--/--><!--#-->", "<!--/--></div><div class=\"vertCentered h-fit md:!hidden\"><!--#-->", "<!--/--><!--#-->", "<!--/--><button class=\"p-2 text-xl rounded-lg\"><div i-material-symbols-menu-rounded></div></button></div></nav></div>"];

// for toggling menu links, btns on mobile
const [linksShown, showLinks] = createSignal(false);
function Links() {
  return ssr(_tmpl$2$f, ssrHydrationKey(), escape(createComponent(A, {
    href: "/",
    "class": "vertCentered !gap-3 font-bold text-grey-4 dark:text-white-2",
    get children() {
      return [ssr(_tmpl$$n, ssrHydrationKey()), "NvChad"];
    }
  })), `grid md:vertCentered md:!gap-5 gap-5 ${linksShown() ? "" : "hidden"}`, escape(createComponent(A, {
    href: "/docs/quickstart/install",
    children: "Docs"
  })), escape(createComponent(A, {
    href: "/docs/features",
    children: "Features"
  })), escape(createComponent(A, {
    href: "/themes",
    children: "Themes"
  })), escape(createComponent(A, {
    href: "/news",
    children: "News"
  })));
}
function DocsBtn() {
  return useLocation$1().pathname.includes("docs") && ssr(_tmpl$3$8, ssrHydrationKey(), sideBarShown() ? _tmpl$4$6[0] + ssrHydrationKey() + _tmpl$4$6[1] : _tmpl$5$4[0] + ssrHydrationKey() + _tmpl$5$4[1]);
}
const ThemeToggleBtn = props => {
  const [theme, setTheme] = createSignal(globalThis.localStorage && localStorage.theme ? localStorage.theme : "light");
  return ssr(_tmpl$6$2, ssrHydrationKey(), `shadow-lg ${escape(props.display, true)} text-xl p-2 bg-slate-8 text-white-1 dark:bg-dark-3 rounded-full`, ssrAttribute("class", theme() == "light" ? "i-line-md:sun-rising-twotone-loop" : "i-ph-moon-stars-bold", false));
};
function BtnLinks$1() {
  const Btns = [["i-ph:chat-teardrop-text text-3xl", "#community", "nvchad discussions"], ["i-bi:github  ", "https://github.com/NvChad/NvChad", "Github repo"]];
  return ssr(_tmpl$7$2, ssrHydrationKey(), `md:vertCentered !gap-5 text-2xl ${linksShown() ? "vertCentered" : "hidden"}`, escape(createComponent(DocsBtn, {})), escape(createComponent(Searchbar, {})), escape(Btns.map(x => createComponent(A, {
    text: "slate-8 dark:slate-4",
    get href() {
      return x[1];
    },
    get ["aria-label"]() {
      return x[2];
    },
    get ["class"]() {
      return x[0];
    },
    get children() {
      return x[0];
    }
  }))), escape(createComponent(ThemeToggleBtn, {
    display: "hidden md:vertCentered"
  })));
}
function Searchbar() {
  return ssr(_tmpl$8$2, ssrHydrationKey());
}
function Navbar() {
  const styles = `sticky top-0 z-50
                flex md:vertCentered gap-5 justify-between 
                bg-white-1 dark:bg-dark-2 
                text-lg font-medium  p-4 py-3 max-w-[1700px] mx-auto`;
  return ssr(_tmpl$9$1, ssrHydrationKey(), ssrAttribute("class", escape(styles, true), false), escape(createComponent(Links, {})), escape(createComponent(BtnLinks$1, {})), escape(createComponent(ThemeToggleBtn, {})), escape(createComponent(DocsBtn, {})));
}

function Index() {
  return [createComponent(Navbar, {}), createComponent(Outlet, {})];
}

function HttpStatusCode(props) {
  const context = useContext(ServerContext);
  {
    context.setStatusCode(props.code);
  }
  onCleanup(() => {
    {
      context.setStatusCode(200);
    }
  });
  return null;
}

const _tmpl$$m = ["<main", "><!--#-->", "<!--/--><!--#-->", "<!--/--><h1>Page Not Found</h1></main>"];
function NotFound() {
  return ssr(_tmpl$$m, ssrHydrationKey(), escape(createComponent(Title, {
    children: "Not Found"
  })), escape(createComponent(HttpStatusCode, {
    code: 404
  })));
}

var a=["html","base","head","link","meta","style","title","body","address","article","aside","footer","header","main","nav","section","body","blockquote","dd","div","dl","dt","figcaption","figure","hr","li","ol","p","pre","ul","a","abbr","b","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","var","wbr","area","audio","img","map","track","video","embed","iframe","object","param","picture","portal","source","svg","math","canvas","noscript","script","del","ins","caption","col","colgroup","table","tbody","td","tfoot","th","thead","tr","button","datalist","fieldset","form","input","label","legend","meter","optgroup","option","output","progress","select","textarea","details","dialog","menu","summary","details","slot","template","acronym","applet","basefont","bgsound","big","blink","center","content","dir","font","frame","frameset","hgroup","image","keygen","marquee","menuitem","nobr","noembed","noframes","plaintext","rb","rtc","shadow","spacer","strike","tt","xmp","a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","head","header","h1","h2","h3","h4","h5","h6","hgroup","hr","html","i","iframe","image","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","plaintext","portal","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xmp","input"],n=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"];new Set(n);var r=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]);var o=createContext(Object.fromEntries([...a,...r.keys()].map(e=>[e,function(t){return t=mergeProps(t,{component:e}),createComponent(Dynamic,t)}]))),M=()=>useContext(o);

const _tmpl$$l = ["<kbd", ">Alt+1</kbd>"];
function _createMdxContent$i(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    h2: "h2",
    ul: "ul",
    li: "li",
    code: "code",
    pre: "pre",
    span: "span",
    a: "a"
  }, M(), props.components);
  return [createComponent(_components.h1, {
    children: "# NvChad API"
  }), "\n", createComponent(_components.p, {
    children: "These are list of some functions & tips/tricks which are provided by nvchad plugins that aren't included in the config. You can make commands & mappings out of them."
  }), "\n", createComponent(_components.h2, {
    children: "GotoTab"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return ["This utilizes the ", createComponent(_components.code, {
            children: "vim.t.bufs"
          }), " tab table variable where we store buffer numbers of current tab."];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["Then it loops from 1-9 to create mappings of switching tab by number i.e ", ssr(_tmpl$$l, ssrHydrationKey()), " will switch first tab."];
        }
      }), "\n"];
    }
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-keyword",
            children: "for"
          }), " i = ", createComponent(_components.span, {
            className: "hljs-number",
            children: "1"
          }), ", ", createComponent(_components.span, {
            className: "hljs-number",
            children: "9"
          }), ", ", createComponent(_components.span, {
            className: "hljs-number",
            children: "1"
          }), " ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "do"
          }), "\n  vim.keymap.set(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"n\""
          }), ", ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "string"
          }), ".", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "format"
          }), "(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"<A-%s>\""
          }), ", i), ", createComponent(_components.span, {
            className: "hljs-function",
            get children() {
              return [createComponent(_components.span, {
                className: "hljs-keyword",
                children: "function"
              }), createComponent(_components.span, {
                className: "hljs-params",
                children: "()"
              })];
            }
          }), "\n    vim.api.nvim_set_current_buf(vim.t.bufs[i])\n  ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), ")\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), "\n"];
        }
      });
    }
  }), "\n", createComponent(_components.h2, {
    children: "Arrange buffer"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "Used for arranging buffers left/right in the tabufline."
      }), "\n"];
    }
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- move buffer right"
          }), "\n", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "require"
          }), "(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"nvchad_ui.tabufline\""
          }), ").move_buf(", createComponent(_components.span, {
            className: "hljs-number",
            children: "1"
          }), ")\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- move buffer left"
          }), "\n", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "require"
          }), "(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"nvchad_ui.tabufline\""
          }), ").move_buf(", createComponent(_components.span, {
            className: "hljs-number",
            children: "-1"
          }), ")\n"];
        }
      });
    }
  }), "\n", createComponent(_components.h2, {
    children: "Toggle transparency"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "Used to toggle transparency, make sure that you have transparency option set in your chadrc."
      }), "\n"];
    }
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-built_in",
            children: "require"
          }), "(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"base46\""
          }), ").toggle_transparency()\n"];
        }
      });
    }
  }), "\n", createComponent(_components.h2, {
    children: "Toggle themes"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return ["Used to toggle between 2 themes, make sure that you have ", createComponent(_components.code, {
            children: "theme_toggle"
          }), " option set in your chadrc."];
        }
      }), "\n"];
    }
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-built_in",
            children: "require"
          }), "(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"base46\""
          }), ").toggle_theme()\n"];
        }
      });
    }
  }), "\n", createComponent(_components.h2, {
    children: "Close all buffers"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "Used to close all the buffers in current tab. ( the close icon in tabufline handles this )."
      }), "\n"];
    }
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-built_in",
            children: "require"
          }), "(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"nvchad_ui.tabufline\""
          }), ").closeAllBufs()\n"];
        }
      });
    }
  }), "\n", createComponent(_components.h2, {
    children: "Show only modifed buffers"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return ["This is an autocmd which will show only modified buffers and current buffer, ", createComponent(_components.a, {
            href: "https://github.com/NvChad/ui/issues/78",
            children: "read more"
          }), "."];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["Put it in your ", createComponent(_components.code, {
            children: "custom/init.lua"
          })];
        }
      }), "\n"];
    }
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return ["vim.api.nvim_create_autocmd({ ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"BufAdd\""
          }), ", ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"BufEnter\""
          }), ", ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"tabnew\""
          }), " }, {\n  callback = ", createComponent(_components.span, {
            className: "hljs-function",
            get children() {
              return [createComponent(_components.span, {
                className: "hljs-keyword",
                children: "function"
              }), createComponent(_components.span, {
                className: "hljs-params",
                children: "()"
              })];
            }
          }), "\n    vim.t.bufs = vim.tbl_filter(", createComponent(_components.span, {
            className: "hljs-function",
            get children() {
              return [createComponent(_components.span, {
                className: "hljs-keyword",
                children: "function"
              }), createComponent(_components.span, {
                className: "hljs-params",
                children: "(bufnr)"
              })];
            }
          }), "\n      ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "return"
          }), " vim.api.nvim_buf_get_option(bufnr, ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"modified\""
          }), ")\n    ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), ", vim.t.bufs)\n  ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), ",\n})\n"];
        }
      });
    }
  })];
}
function MDXContent$i(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, M(), props.components);
  return MDXLayout ? createComponent(MDXLayout, mergeProps(props, {
    get children() {
      return createComponent(_createMdxContent$i, props);
    }
  })) : _createMdxContent$i(props);
}

function _createMdxContent$h(props) {
  const _components = Object.assign({
    h2: "h2",
    ul: "ul",
    li: "li",
    p: "p",
    a: "a"
  }, M(), props.components);
  return [createComponent(_components.h2, {
    children: "Things to know before contributing"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return ["\n", createComponent(_components.p, {
            children: "When making a PR (pull request), please be very descriptive about what you've done."
          }), "\n"];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["\n", createComponent(_components.p, {
            children: "We are open to all PRs, but may decline some for many of reasons. Don't be discouraged, though! We're still open to discussion."
          }), "\n"];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["\n", createComponent(_components.p, {
            children: "PR's are always welcome; however, NvChad aims to be less bloated. So PR's regarding an existing plugin's enhancement and creating new features with existing plugins itself (without adding a new plugin), bug fixes, and corrections are more encouraged."
          }), "\n"];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["\n", createComponent(_components.p, {
            children: "NvChad won't keep adding more and more features (like adding new plugins) as requested if they feel unneeded and aren't usable by the majority. If you think the plugin you want to be added is very useful and many NvChaders would find it useful, then such PR's are welcome."
          }), "\n"];
        }
      }), "\n"];
    }
  }), "\n", createComponent(_components.h2, {
    children: "Format your PR with StyLua"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return ["Check the ", createComponent(_components.a, {
            href: "https://github.com/NvChad/NvChad/blob/main/.stylua.toml",
            children: "StyLua config"
          })];
        }
      }), "\n"];
    }
  }), "\n", createComponent(_components.h2, {
    children: "Other ways to contribute"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "Help other nvchad users on github discussions, issues, our discord/matrix server, telegram group."
      }), "\n", createComponent(_components.li, {
        children: "Star NvChad github repo."
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["If you would like to appreciate siduck's work ( creator of NvChad ) via funding then ", createComponent(_components.a, {
            href: "https://github.com/NvChad/NvChad#gift_heart-support",
            children: "check"
          }), "."];
        }
      }), "\n"];
    }
  })];
}
function MDXContent$h(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, M(), props.components);
  return MDXLayout ? createComponent(MDXLayout, mergeProps(props, {
    get children() {
      return createComponent(_createMdxContent$h, props);
    }
  })) : _createMdxContent$h(props);
}

function _createMdxContent$g(props) {
  const _components = Object.assign({
    p: "p",
    ul: "ul",
    li: "li",
    a: "a",
    strong: "strong"
  }, M(), props.components);
  return [createComponent(_components.p, {
    children: "The NvChad team would love to acknowledge many projects which made this possible."
  }), "\n", createComponent(_components.p, {
    children: "Thank you!"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return ["\n", createComponent(_components.p, {
            get children() {
              return [createComponent(_components.a, {
                href: "https://github.com/vim/vim",
                children: "Vim"
              }), " & ", createComponent(_components.a, {
                href: "https://github.com/neovim/neovim",
                children: "NeoVim"
              })];
            }
          }), "\n"];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["\n", createComponent(_components.p, {
            children: "Plugin maintainers."
          }), "\n"];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["\n", createComponent(_components.p, {
            children: "Other NeoVim configurations which inspired @siduck to create NvChad:"
          }), "\n", createComponent(_components.ul, {
            get children() {
              return ["\n", createComponent(_components.li, {
                get children() {
                  return createComponent(_components.a, {
                    href: "https://github.com/LunarVim/LunarVim",
                    children: "LunarVim"
                  });
                }
              }), "\n", createComponent(_components.li, {
                get children() {
                  return createComponent(_components.a, {
                    href: "https://github.com/SpaceVim/SpaceVim",
                    children: "SpaceVim"
                  });
                }
              }), "\n"];
            }
          }), "\n"];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["\n", createComponent(_components.p, {
            get children() {
              return ["Thanks to ", createComponent(_components.a, {
                href: "https://t.me/ufoludek",
                children: "ufoludek"
              }), " for making fun of me when I (@siduck) was using \"codeblocks\" ( 3 years ago ). I got to know from him that vim could do the same thing which got me interested in vim."];
            }
          }), "\n"];
        }
      }), "\n"];
    }
  }), "\n", createComponent(_components.p, {
    get children() {
      return createComponent(_components.strong, {
        children: "Some people who helped me a lot :"
      });
    }
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return createComponent(_components.a, {
            href: "https://github.com/elianiva",
            children: "elianava"
          });
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return createComponent(_components.a, {
            href: "https://github.com/ii14",
            children: "ii14"
          });
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return createComponent(_components.a, {
            href: "https://github.com/max397574",
            children: "max397574"
          });
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return createComponent(_components.a, {
            href: "https://github.com/lucario387",
            children: "lucario"
          });
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return createComponent(_components.a, {
            href: "https://github.com/tamton-aquib",
            children: "tamton-aquib"
          });
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return createComponent(_components.a, {
            href: "https://github.com/vhyrro",
            children: "vhyrro"
          });
        }
      }), "\n"];
    }
  })];
}
function MDXContent$g(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, M(), props.components);
  return MDXLayout ? createComponent(MDXLayout, mergeProps(props, {
    get children() {
      return createComponent(_createMdxContent$g, props);
    }
  })) : _createMdxContent$g(props);
}

function _createMdxContent$f(props) {
  const _components = Object.assign({
    h2: "h2",
    ul: "ul",
    li: "li",
    code: "code",
    a: "a"
  }, M(), props.components);
  return [createComponent(_components.h2, {
    children: "Basic debugging"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return ["You can check the health of Neovim with the ", createComponent(_components.code, {
            children: "checkhealth"
          }), " command."];
        }
      }), "\n", createComponent(_components.li, {
        children: "Make sure you dont have syntax errors in your custom config files"
      }), "\n", createComponent(_components.li, {
        children: "By default in NvChad sumneko lua LSP is enabled so it'll look for syntax errors etc for you."
      }), "\n"];
    }
  }), "\n", createComponent(_components.h2, {
    children: "Before logging an issue"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return createComponent(_components.a, {
            href: "https://github.com/NvChad/NvChad/issues?q=is%3Aissue",
            children: "Search the GitHub issue list"
          });
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["Then ", createComponent(_components.a, {
            href: "https://github.com/NvChad/NvChad/issues/new/choose",
            children: "log an issue, be sure to provide all prompted information"
          })];
        }
      }), "\n", createComponent(_components.li, {
        children: "If it's a plugin issue, then make sure you're familiar with the lazy loading of default NvChad plugins as that plugin might depend on the default plugin which is lazy loaded."
      }), "\n"];
    }
  })];
}
function MDXContent$f(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, M(), props.components);
  return MDXLayout ? createComponent(MDXLayout, mergeProps(props, {
    get children() {
      return createComponent(_createMdxContent$f, props);
    }
  })) : _createMdxContent$f(props);
}

const _tmpl$$k = ["<div", " class=\"iframe-container\"><iframe src=\"https://www.youtube.com/embed/xytzreFq_us\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allow=\"fullscreen\"></iframe></div>"],
  _tmpl$2$e = ["<div", " class=\"iframe-container\"><iframe src=\"https://www.youtube.com/embed/wt7IX8ojMrs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allow=\"fullscreen;\"></iframe></div>"],
  _tmpl$3$7 = ["<div", " class=\"iframe-container\"><iframe src=\"https://www.youtube.com/embed/V_9iJ96U_k8\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allow=\"fullscreen;\"></iframe></div>"],
  _tmpl$4$5 = ["<kbd", "> leader + pt </kbd>"],
  _tmpl$5$3 = ["<div", " class=\"iframe-container\"><iframe src=\"https://www.youtube.com/embed/3DysWI_6YpQ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allow=\"fullscreen;\"></iframe></div>"],
  _tmpl$6$1 = ["<div", " class=\"iframe-container\"><iframe src=\"https://www.youtube.com/embed/IljDD4cjgKc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allow=\"fullscreen;\"></iframe></div>"],
  _tmpl$7$1 = ["<div", " class=\"iframe-container\"><iframe src=\"https://www.youtube.com/embed/oMzMDXA-VO0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allow=\"fullscreen;\"></iframe></div>"],
  _tmpl$8$1 = ["<br", ">"];
function _createMdxContent$e(props) {
  const _components = Object.assign({
    h1: "h1",
    ul: "ul",
    li: "li",
    strong: "strong",
    h2: "h2",
    h4: "h4",
    p: "p",
    img: "img",
    code: "code",
    a: "a"
  }, M(), props.components);
  return [createComponent(_components.h1, {
    children: "Inbuilt features"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return ["NvChad is built upon its personal plugins and many general neovim plugins, below are the features that are provided by nvchad plugins ", createComponent(_components.strong, {
            children: "( our ui plugin, base46, extensions, nvterm, nvim-colorizer )"
          })];
        }
      }), "\n"];
    }
  }), "\n", createComponent(_components.h2, {
    children: "Base46"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "Base46 is NvChad's highlight performant theming plugin and has many ported themes ( around 57+ )."
      }), "\n"];
    }
  }), "\n", createComponent(_components.h4, {
    children: "How it works?"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "Gets highlight groups"
      }), "\n", createComponent(_components.li, {
        children: "Do some computations i.e check for overriden highlight groups, new highlight groups, theme overrides, custom user themes etc."
      }), "\n", createComponent(_components.li, {
        children: "Now base46 compiles all of that into bytecode."
      }), "\n", createComponent(_components.li, {
        children: "Integration files aren't loaded by default, for example highlight group for telescope, nvimtree etc are put into different files."
      }), "\n", createComponent(_components.li, {
        children: "highlight groups are lazyloaded i.e you load them when needed"
      }), "\n", createComponent(_components.li, {
        get children() {
          return createComponent(_components.strong, {
            children: "example : dofile(vim.g.base46_cache .. \"cmp\")"
          });
        }
      }), "\n", createComponent(_components.li, {
        children: "In the below video you can see that the chadrc file's ( user config ) UI related options reload on the fly"
      }), "\n"];
    }
  }), "\n", ssr(_tmpl$$k, ssrHydrationKey()), "\n", createComponent(_components.h2, {
    children: "Theme switcher"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "A theme switcher with telescope.nvim which reloads theme on the fly using base46 plugin + plenary.nvim."
      }), "\n"];
    }
  }), "\n", ssr(_tmpl$2$e, ssrHydrationKey()), "\n", createComponent(_components.h2, {
    children: "Statusline"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "We have our own statusline module ( our UI Plugin ) which has 4 statusline styles"
      }), "\n"];
    }
  }), "\n", createComponent(_components.p, {
    get children() {
      return createComponent(_components.img, {
        src: "/features/statuslines.webp",
        alt: "nvchad statusline"
      });
    }
  }), "\n", createComponent(_components.h2, {
    children: "Tabufline"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "NvChad's tabufline module ( from UI Plugin ) is a mix of tabline & bufferline."
      }), "\n", createComponent(_components.li, {
        children: "It manages buffers & tabs, buttons in it are clickable"
      }), "\n", createComponent(_components.li, {
        children: "Each tab will have its own set of buffers stored and the tabufline will show those only."
      }), "\n", createComponent(_components.li, {
        children: "Think it like workspaces on Linux/Windows where windows stay in their own workspaces, but in vim buffers from all tabs will be shown in every tab!"
      }), "\n"];
    }
  }), "\n", ssr(_tmpl$3$7, ssrHydrationKey()), "\n", createComponent(_components.h2, {
    children: "Nvterm"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "NvChad's terminal plugin to toggle and run commands in neovim terminal buffer"
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["Using it with our telescope picker ( :Telescope terms ) to unhide terminal buffers ", ssr(_tmpl$4$5, ssrHydrationKey()), "."];
        }
      }), "\n"];
    }
  }), "\n", ssr(_tmpl$5$3, ssrHydrationKey()), "\n", createComponent(_components.h2, {
    children: "Dashboard"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "Nvdash is NvChad's minimal dashboard module, It's very simple at this stage and will get more features in the future!"
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["Command to run it ", createComponent(_components.code, {
            children: "Nvdash"
          }), ", its disabled on startup, check the default_config.lua for its syntax and override it from chadrc."];
        }
      }), "\n"];
    }
  }), "\n", createComponent(_components.p, {
    get children() {
      return createComponent(_components.img, {
        src: "/features/nvdash.webp",
        alt: "nvdash"
      });
    }
  }), "\n", createComponent(_components.h2, {
    children: "NvCheatsheet"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "Auto-generated mappings cheatsheet module which has a similar layout to that of CSS's masonry layout."
      }), "\n", createComponent(_components.li, {
        children: "It has 2 themes ( grid & simple )"
      }), "\n"];
    }
  }), "\n", createComponent(_components.p, {
    get children() {
      return createComponent(_components.img, {
        src: "/features/nvcheatsheet.webp",
        alt: "nvcheatsheet"
      });
    }
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return ["command to toggle it : ", createComponent(_components.code, {
            children: "NvCheatsheet"
          }), " and mapping ", createComponent(_components.code, {
            children: "leader + ch"
          })];
        }
      }), "\n"];
    }
  }), "\n", ssr(_tmpl$6$1, ssrHydrationKey()), "\n", createComponent(_components.h1, {
    children: "General neovim plugins"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "These plugins aren't related to nvchad, we just tweak theme a bit and theme the UI related ones."
      }), "\n"];
    }
  }), "\n", createComponent(_components.h2, {
    children: "Telescope.nvim"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.a, {
            href: "https://github.com/nvim-telescope/telescope.nvim",
            children: "Telescope.nvim"
          }), " is a highly extendable fuzzy finder over lists. Built on the latest awesome features from neovim core. Telescope is centered around modularity, allowing for easy customization."];
        }
      }), "\n", createComponent(_components.li, {
        children: "Below are 2 styles of telescope in nvchad ( bordered and borderless )"
      }), "\n"];
    }
  }), "\n", createComponent(_components.p, {
    get children() {
      return createComponent(_components.img, {
        src: "/features/telescope.webp",
        alt: "telescope"
      });
    }
  }), "\n", createComponent(_components.h2, {
    children: "Nvim-tree.lua"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.a, {
            href: "https://github.com/kyazdani42/nvim-tree.lua",
            get children() {
              return createComponent(_components.code, {
                children: "nvim-tree.lua"
              });
            }
          }), " is a file explorer tree for Neovim written in Lua."];
        }
      }), "\n"];
    }
  }), "\n", createComponent(_components.p, {
    get children() {
      return createComponent(_components.img, {
        src: "https://raw.githubusercontent.com/siduck/dotfiles/all/rice%20flex/nvimtree.png",
        alt: "nvim tree"
      });
    }
  }), "\n", createComponent(_components.h2, {
    children: "Nvim-cmp"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return ["[", createComponent(_components.code, {
            children: "nvim-cmp"
          }), "](A completion plugin for neovim coded in Lua.) is a completion plugin for neovim coded in Lua."];
        }
      }), "\n", createComponent(_components.li, {
        children: "Below are some cmp styles in nvchad"
      }), "\n"];
    }
  }), "\n", createComponent(_components.p, {
    get children() {
      return createComponent(_components.img, {
        src: "/features/cmp.webp",
        alt: "nvim-cmp"
      });
    }
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "Note that thats just the cmp look in everblush theme, there are more 57 themes! You can hide cmp icons, cmpkind txt etc from the user config ( chadrc ) itself!"
      }), "\n"];
    }
  }), "\n", createComponent(_components.h2, {
    children: "Auto-completion & LSP"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.a, {
            href: "https://github.com/neovim/nvim-lspconfig",
            get children() {
              return createComponent(_components.code, {
                children: "nvim-lspconfig"
              });
            }
          }), " is used along with cmp for completion and ", createComponent(_components.a, {
            href: "https://github.com/L3MON4D3/LuaSnip",
            get children() {
              return createComponent(_components.code, {
                children: "luasnip"
              });
            }
          }), "  + ", createComponent(_components.a, {
            href: "https://github.com/rafamadriz/friendly-snippets",
            get children() {
              return createComponent(_components.code, {
                children: "friendly-snippets"
              });
            }
          }), " for snippet completion!"];
        }
      }), "\n"];
    }
  }), "\n", ssr(_tmpl$7$1, ssrHydrationKey()), "\n", ssr(_tmpl$8$1, ssrHydrationKey()), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.a, {
            href: "https://github.com/folke/lazy.nvim",
            get children() {
              return createComponent(_components.code, {
                children: "lazy.nvim"
              });
            }
          }), " - A modern plugin manager for Neovim"];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.a, {
            href: "https://github.com/folke/which-key.nvim",
            get children() {
              return createComponent(_components.code, {
                children: "whichkey.nvim"
              });
            }
          }), " - Create key bindings that stick. WhichKey is a lua plugin for Neovim 0.5 that displays a popup with possible keybindings of the command you started typing."];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.a, {
            href: "https://github.com/NvChad/nvim-colorizer.lua",
            get children() {
              return createComponent(_components.code, {
                children: "nvim-colorizer.lua"
              });
            }
          }), " - Fastest Neovim colorizer, hex colors, hsl codes and much more."];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.a, {
            href: "https://github.com/nvim-treesitter/nvim-treesitter",
            get children() {
              return createComponent(_components.code, {
                children: "nvim-treesitter"
              });
            }
          }), " - Nvim Treesitter configurations and abstraction layer, we use it for syntax highlighting & auto-indenting."];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.a, {
            href: "https://github.com/lukas-reineke/indent-blankline.nvim",
            get children() {
              return createComponent(_components.code, {
                children: "blankline"
              });
            }
          }), " - Indent guides for Neovim i.e indentline plugin."];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.a, {
            href: "https://github.com/lewis6991/gitsigns.nvim",
            get children() {
              return createComponent(_components.code, {
                children: "gitsigns.nvim"
              });
            }
          }), " - Git integration for buffers"];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return createComponent(_components.a, {
            href: "https://github.com/windwp/nvim-autopairs",
            get children() {
              return createComponent(_components.code, {
                children: "nvim-autopairs"
              });
            }
          });
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.a, {
            href: "https://github.com/numToStr/Comment.nvim",
            get children() {
              return createComponent(_components.code, {
                children: "comment.nvim"
              });
            }
          }), " - Commenting plugin"];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.a, {
            href: "https://github.com/williamboman/mason.nvim",
            get children() {
              return createComponent(_components.code, {
                children: "mason.nvim"
              });
            }
          }), " - Portable package manager for Neovim that runs everywhere Neovim runs. Easily install and manage LSP servers, DAP servers, linters, and formatters."];
        }
      }), "\n"];
    }
  })];
}
function MDXContent$e(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, M(), props.components);
  return MDXLayout ? createComponent(MDXLayout, mergeProps(props, {
    get children() {
      return createComponent(_createMdxContent$e, props);
    }
  })) : _createMdxContent$e(props);
}

const _tmpl$$j = ["<br", ">"];
function _createMdxContent$d(props) {
  const _components = Object.assign({
    h2: "h2",
    p: "p",
    code: "code",
    pre: "pre",
    span: "span",
    ul: "ul",
    li: "li",
    a: "a"
  }, M(), props.components);
  return [createComponent(_components.h2, {
    children: "Null-ls.nvim"
  }), "\n", createComponent(_components.p, {
    get children() {
      return ["It is recommended that you install ", createComponent(_components.code, {
        children: "null-ls"
      }), " to manage formatting & linting.\nHere's a possible install configuration for ", createComponent(_components.code, {
        children: "null-ls"
      }), ":"];
    }
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return ["{\n  ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"neovim/nvim-lspconfig\""
          }), ",\n\n   dependencies = {\n     ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"jose-elias-alvarez/null-ls.nvim\""
          }), ",\n     ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "config"
          }), " = ", createComponent(_components.span, {
            className: "hljs-function",
            get children() {
              return [createComponent(_components.span, {
                className: "hljs-keyword",
                children: "function"
              }), createComponent(_components.span, {
                className: "hljs-params",
                children: "()"
              })];
            }
          }), "\n       ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "require"
          }), " ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"custom.configs.null-ls\""
          }), "\n     ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), ",\n   },\n \n   ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "config"
          }), " = ", createComponent(_components.span, {
            className: "hljs-function",
            get children() {
              return [createComponent(_components.span, {
                className: "hljs-keyword",
                children: "function"
              }), createComponent(_components.span, {
                className: "hljs-params",
                children: "()"
              })];
            }
          }), "\n      ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "require"
          }), " ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"plugins.configs.lspconfig\""
          }), "\n      ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "require"
          }), " ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"custom.configs.lspconfig\""
          }), "\n   ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), ",\n}\n"];
        }
      });
    }
  }), "\n", ssr(_tmpl$$j, ssrHydrationKey()), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return ["Dependencies are loaded after the original plugin (", createComponent(_components.code, {
            children: "lspconfig"
          }), " in NvChad's case)."];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.code, {
            children: "null-ls"
          }), " is loaded after ", createComponent(_components.code, {
            children: "lspconfig"
          }), " as ", createComponent(_components.code, {
            children: "lspconfig"
          }), " is lazy-loaded."];
        }
      }), "\n"];
    }
  }), "\n", createComponent(_components.h2, {
    children: "Configuration"
  }), "\n", createComponent(_components.p, {
    get children() {
      return ["Make sure to check ", createComponent(_components.a, {
        href: "https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTINS.md",
        get children() {
          return [createComponent(_components.code, {
            children: "null-ls"
          }), " builtins"];
        }
      }), " to get exact names for formatters, linters etc."];
    }
  }), "\n", createComponent(_components.p, {
    get children() {
      return ["Here's an example configuration for ", createComponent(_components.code, {
        children: "null-ls"
      }), ", following the NvChad file directory structure:"];
    }
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- custom/configs/null-ls.lua"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " null_ls = ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "require"
          }), " ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"null-ls\""
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " formatting = null_ls.builtins.formatting\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " lint = null_ls.builtins.diagnostics\n\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " sources = {\n   formatting.prettier,\n   formatting.stylua,\n\n   lint.shellcheck,\n}\n\nnull_ls.setup {\n   ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "debug"
          }), " = ", createComponent(_components.span, {
            className: "hljs-literal",
            children: "true"
          }), ",\n   sources = sources,\n}\n"];
        }
      });
    }
  }), "\n", ssr(_tmpl$$j, ssrHydrationKey()), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return ["\n", createComponent(_components.p, {
            get children() {
              return ["Check ", createComponent(_components.a, {
                href: "https://github.com/jose-elias-alvarez/null-ls.nvim/wiki/Formatting-on-save",
                children: "null-ls docs"
              }), " for adding format on save.\nOther things to take into account when configuring ", createComponent(_components.code, {
                children: "null-ls"
              }), " for NvChad:"];
            }
          }), "\n"];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["\n", createComponent(_components.p, {
            get children() {
              return ["This shortcut is defined for code formatting: ", createComponent(_components.code, {
                children: "<leader> + fm"
              }), "."];
            }
          }), "\n"];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["\n", createComponent(_components.p, {
            get children() {
              return ["The linter, formatter or debugger that you will use in ", createComponent(_components.code, {
                children: "null-ls"
              }), " configuration, has to be downloaded via ", createComponent(_components.code, {
                children: "mason"
              }), " (that ensure_installed opt) or system wide."];
            }
          }), "\n"];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["\n", createComponent(_components.p, {
            get children() {
              return ["Make sure the LSP servers for the filetypes are active for the relevant ", createComponent(_components.code, {
                children: "null-ls"
              }), " formatter and/or linter to work."];
            }
          }), "\n"];
        }
      }), "\n"];
    }
  })];
}
function MDXContent$d(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, M(), props.components);
  return MDXLayout ? createComponent(MDXLayout, mergeProps(props, {
    get children() {
      return createComponent(_createMdxContent$d, props);
    }
  })) : _createMdxContent$d(props);
}

const _tmpl$$i = ["<br", ">"],
  _tmpl$2$d = ["<u", ">", "</u>"];
function _createMdxContent$c(props) {
  const _components = Object.assign({
    h2: "h2",
    p: "p",
    a: "a",
    code: "code",
    ul: "ul",
    li: "li",
    strong: "strong",
    pre: "pre",
    span: "span",
    blockquote: "blockquote"
  }, M(), props.components);
  return [createComponent(_components.h2, {
    children: "Setup lsp server"
  }), "\n", createComponent(_components.p, {
    get children() {
      return ["Before starting, it is strongly recommended that you walk through the LSP configuration: ", createComponent(_components.a, {
        href: "https://github.com/neovim/nvim-lspconfig",
        get children() {
          return [createComponent(_components.code, {
            children: "lspconfig"
          }), " repository"];
        }
      }), "."];
    }
  }), "\n", createComponent(_components.p, {
    get children() {
      return ["Then check ", createComponent(_components.a, {
        href: "https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md",
        children: "server_configurations.md"
      }), " to make sure your language's LSP server is present there."];
    }
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return createComponent(_components.strong, {
            children: "custom/plugins.lua"
          });
        }
      }), "\n"];
    }
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- In order to modify the `lspconfig` configuration:"
          }), "\n{\n  ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"neovim/nvim-lspconfig\""
          }), ",\n   ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "config"
          }), " = ", createComponent(_components.span, {
            className: "hljs-function",
            get children() {
              return [createComponent(_components.span, {
                className: "hljs-keyword",
                children: "function"
              }), createComponent(_components.span, {
                className: "hljs-params",
                children: "()"
              })];
            }
          }), "\n      ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "require"
          }), " ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"plugins.configs.lspconfig\""
          }), "\n      ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "require"
          }), " ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"custom.configs.lspconfig\""
          }), "\n   ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), ",\n},\n"];
        }
      });
    }
  }), "\n", ssr(_tmpl$$i, ssrHydrationKey()), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return createComponent(_components.strong, {
            children: "custom/configs/lspconfig.lua"
          });
        }
      }), "\n"];
    }
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " on_attach = ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "require"
          }), "(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"plugins.configs.lspconfig\""
          }), ").on_attach\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " capabilities = ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "require"
          }), "(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"plugins.configs.lspconfig\""
          }), ").capabilities\n\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " lspconfig = ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "require"
          }), " ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"lspconfig\""
          }), "\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " servers = { ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"html\""
          }), ", ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"cssls\""
          }), ", ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"clangd\""
          }), "}\n\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "for"
          }), " _, lsp ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "in"
          }), " ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "ipairs"
          }), "(servers) ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "do"
          }), "\n  lspconfig[lsp].setup {\n    on_attach = on_attach,\n    capabilities = capabilities,\n  }\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- Without the loop, you would have to manually set up each LSP "
          }), "\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- "
          }), "\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- lspconfig.html.setup {"
          }), "\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "--   on_attach = on_attach,"
          }), "\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "--   capabilities = capabilities,"
          }), "\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- }"
          }), "\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "--"
          }), "\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- lspconfig.cssls.setup {"
          }), "\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "--   on_attach = on_attach,"
          }), "\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "--   capabilities = capabilities,"
          }), "\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- }"
          }), "\n"];
        }
      });
    }
  }), "\n", createComponent(_components.h2, {
    children: "Mason.nvim"
  }), "\n", createComponent(_components.p, {
    get children() {
      return ["The ", createComponent(_components.code, {
        children: "mason.nvim"
      }), " plugin is used to install LSP servers, formatters, linters, and debug adapters. It's better to list all your required packages in your Mason override config, so they automatically install when running ", createComponent(_components.code, {
        children: "MasonInstallAll"
      }), " command."];
    }
  }), "\n", createComponent(_components.p, {
    get children() {
      return ["You can find the exact name of the LSP packages using ", createComponent(_components.code, {
        children: ":Mason"
      }), ", that will open a window."];
    }
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [" {\n   ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"williamboman/mason.nvim\""
          }), ",\n   opts = {\n      ensure_installed = {\n        ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"lua-language-server\""
          }), ",\n        ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"html-lsp\""
          }), ",\n        ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"prettier\""
          }), ",\n        ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"stylua\""
          }), "\n      },\n    },\n  }\n"];
        }
      });
    }
  }), "\n", ssr(_tmpl$$i, ssrHydrationKey()), "\n", createComponent(_components.blockquote, {
    get children() {
      return ["\n", createComponent(_components.p, {
        get children() {
          return ["Once the binaries are installed, you will have to configure them to properly work with LSP, null-ls, nvim-dap etc. It depends on what you installed. ", ssr(_tmpl$2$d, ssrHydrationKey(), escape(createComponent(_components.strong, {
            children: "NvChad does not provide any language configuration aside from lua"
          }))), "."];
        }
      }), "\n"];
    }
  })];
}
function MDXContent$c(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, M(), props.components);
  return MDXLayout ? createComponent(MDXLayout, mergeProps(props, {
    get children() {
      return createComponent(_createMdxContent$c, props);
    }
  })) : _createMdxContent$c(props);
}

const _tmpl$$h = ["<kbd", ">Ctrl</kbd>"],
  _tmpl$2$c = ["<kbd", ">Space</kbd>"],
  _tmpl$3$6 = ["<kbd", ">alt</kbd>"],
  _tmpl$4$4 = ["<kbd", ">shift</kbd>"],
  _tmpl$5$2 = ["<br", ">"];
function _createMdxContent$b(props) {
  const _components = Object.assign({
    h2: "h2",
    p: "p",
    ul: "ul",
    li: "li",
    code: "code",
    pre: "pre",
    span: "span",
    strong: "strong",
    blockquote: "blockquote"
  }, M(), props.components);
  return [createComponent(_components.h2, {
    children: "Overview"
  }), "\n", createComponent(_components.p, {
    children: "The mapping configuration uses the nvim name shorcuts as:"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.code, {
            children: "<C>"
          }), " -> ", ssr(_tmpl$$h, ssrHydrationKey())];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.code, {
            children: "<leader>"
          }), " -> ", ssr(_tmpl$2$c, ssrHydrationKey())];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.code, {
            children: "<A>"
          }), " -> ", ssr(_tmpl$3$6, ssrHydrationKey())];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.code, {
            children: "<S>"
          }), " -> ", ssr(_tmpl$4$4, ssrHydrationKey())];
        }
      }), "\n"];
    }
  }), "\n", ssr(_tmpl$5$2, ssrHydrationKey()), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return ["The default mappings are defined in ", createComponent(_components.code, {
            children: "core.mappings"
          }), " (`core/mappings.lua)."];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["Alternatively, you can use ", createComponent(_components.code, {
            children: "NvCheatsheet"
          }), " or ", createComponent(_components.code, {
            children: "Telescope keymaps"
          }), " to list all mappings."];
        }
      }), "\n"];
    }
  }), "\n", createComponent(_components.h2, {
    children: "Mapping format"
  }), "\n", createComponent(_components.p, {
    children: "In order to list custom shortcuts in NvCheatsheet, make sure to use the following format"
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- opts is an optional parameter"
          }), "\n[", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"keys\""
          }), "] = {", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"action\""
          }), ", ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"description\""
          }), ", opts = {}},\n\n[", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"<C-n>\""
          }), "] = {", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"<cmd> NvimTreeToggle <CR>\""
          }), ", ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"Toggle nvimtree\""
          }), "},\n[", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"<leader>ff\""
          }), "] = {", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"<cmd> Telescope <CR>\""
          }), ", ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"Telescope\""
          }), "},   \n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- opts can have the props: buffer, silent, noremap, nowait and so on."
          }), "\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- All standard key binding opts are supported. "
          }), "\n[", createComponent(_components.span, {
            className: "hljs-string",
            children: "\";\""
          }), "] = { ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\":\""
          }), ", ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"enter cmdline\""
          }), ", opts = { nowait = ", createComponent(_components.span, {
            className: "hljs-literal",
            children: "true"
          }), " } },\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- For a more complex keymap"
          }), "\n[", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"<leader>tt\""
          }), "] = {\n  ", createComponent(_components.span, {
            className: "hljs-function",
            get children() {
              return [createComponent(_components.span, {
                className: "hljs-keyword",
                children: "function"
              }), createComponent(_components.span, {
                className: "hljs-params",
                children: "()"
              })];
            }
          }), "\n     ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "require"
          }), "(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"base46\""
          }), ").toggle_transparency()\n  ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), ",\n  ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"toggle transparency\""
          }), ",\n},\n"];
        }
      });
    }
  }), "\n", createComponent(_components.h2, {
    children: "Add new mappings"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return ["\n", createComponent(_components.p, {
            children: "In order to add or customize the mappings, make sure that you follow the expected file structure for NvChad."
          }), "\n"];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["\n", createComponent(_components.p, {
            get children() {
              return ["The default mappings are loaded from ", createComponent(_components.code, {
                children: "core.mappings"
              }), ", and it is recommended that you place your mappings inside ", createComponent(_components.code, {
                children: "custom.mappings"
              }), " file."];
            }
          }), "\n"];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["\n", createComponent(_components.p, {
            get children() {
              return ["Remember that the mappings ", createComponent(_components.strong, {
                children: "must"
              }), " have a vim mode: ", createComponent(_components.code, {
                children: "n"
              }), " (for normal), ", createComponent(_components.code, {
                children: "v"
              }), " (for visual), ", createComponent(_components.code, {
                children: "i"
              }), " (for insert) and so on."];
            }
          }), "\n"];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["\n", createComponent(_components.p, {
            get children() {
              return createComponent(_components.strong, {
                children: "custom/chadrc.lua"
              });
            }
          }), "\n"];
        }
      }), "\n"];
    }
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return ["M.mappings = ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "require"
          }), " ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"custom.mappings\""
          }), "\n"];
        }
      });
    }
  }), "\n", ssr(_tmpl$5$2, ssrHydrationKey()), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return createComponent(_components.strong, {
            children: "custom/mappings.lua"
          });
        }
      }), "\n"];
    }
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " M = {}\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- In order to disable a default keymap, use"
          }), "\nM.disabled = {\n  n = {\n      [", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"<leader>h\""
          }), "] = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"\""
          }), ",\n      [", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"<C-a>\""
          }), "] = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"\""
          }), "\n  }\n}\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- Your custom mappings"
          }), "\nM.abc = {\n  n = {\n     [", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"<C-n>\""
          }), "] = {", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"<cmd> Telescope <CR>\""
          }), ", ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"Telescope\""
          }), "}\n     [", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"<C-s>\""
          }), "] = {", createComponent(_components.span, {
            className: "hljs-string",
            children: "\":Telescope Files <CR>\""
          }), ", ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"Telescope Files\""
          }), "} \n  }\n\n  i = {\n     [", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"jk\""
          }), "] = { ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"<ESC>\""
          }), ", ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"escape insert mode\""
          }), " , opts = { nowait = ", createComponent(_components.span, {
            className: "hljs-literal",
            children: "true"
          }), " }},\n    ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- ..."
          }), "\n  }\n}\n\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "return"
          }), " M\n"];
        }
      });
    }
  }), "\n", ssr(_tmpl$5$2, ssrHydrationKey()), "\n", createComponent(_components.blockquote, {
    get children() {
      return ["\n", createComponent(_components.p, {
        children: "Mappings will be automatically loaded. You don't need to load them manually!"
      }), "\n"];
    }
  }), "\n", createComponent(_components.h2, {
    children: "Manually load mappings"
  }), "\n", createComponent(_components.p, {
    children: "Even though it is not required, you can manually load your mappings"
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return ["M.some_plugin_name = {\n  plugin = ", createComponent(_components.span, {
            className: "hljs-literal",
            children: "true"
          }), ", ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- Important"
          }), "\n\n  n = {\n     [", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"<C-n>\""
          }), "] = {", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"<cmd> Telescope <CR>\""
          }), ", ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"Telescope\""
          }), "}\n  }\n}\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- Now to load it "
          }), "\n", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "require"
          }), "(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"core.utils\""
          }), ").load_mappings(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"someplugin\""
          }), ")\n"];
        }
      });
    }
  })];
}
function MDXContent$b(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, M(), props.components);
  return MDXLayout ? createComponent(MDXLayout, mergeProps(props, {
    get children() {
      return createComponent(_createMdxContent$b, props);
    }
  })) : _createMdxContent$b(props);
}

const _tmpl$$g = ["<br", ">"];
function _createMdxContent$a(props) {
  const _components = Object.assign({
    h2: "h2",
    p: "p",
    a: "a",
    code: "code",
    pre: "pre",
    span: "span",
    h3: "h3"
  }, M(), props.components);
  return [createComponent(_components.h2, {
    children: "Statusline & tabufline"
  }), "\n", createComponent(_components.p, {
    get children() {
      return ["We use our own ", createComponent(_components.a, {
        href: "https://github.com/NvChad/ui",
        children: "plugin"
      }), " for ", createComponent(_components.code, {
        children: "statusline"
      }), " and ", createComponent(_components.code, {
        children: "tabufline"
      }), ". The default config is (keep in mind that every plugin's default config is just a table):"];
    }
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return ["M.ui = {\n  ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- ...other options"
          }), "\n\n  statusline = {\n    theme = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"default\""
          }), ", ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- default/vscode/vscode_colored/minimal"
          }), "\n\n    ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- default/round/block/arrow (separators work only for \"default\" statusline theme;"
          }), "\n    ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- round and block will work for the minimal theme only)"
          }), "\n    separator_style = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"default\""
          }), ",\n    overriden_modules = ", createComponent(_components.span, {
            className: "hljs-literal",
            children: "nil"
          }), ",\n  },\n\n  tabufline = {\n    lazyload = ", createComponent(_components.span, {
            className: "hljs-literal",
            children: "true"
          }), ",\n    overriden_modules = ", createComponent(_components.span, {
            className: "hljs-literal",
            children: "nil"
          }), ",\n  },\n\n  ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- ...other options"
          }), "\n}\n"];
        }
      });
    }
  }), "\n", createComponent(_components.h3, {
    get children() {
      return ["Override ", createComponent(_components.code, {
        children: "statusline"
      }), " modules"];
    }
  }), "\n", createComponent(_components.p, {
    children: "It is also possible to override the plugin's configuration:"
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return ["M.ui = {\n  statusline = {\n    overriden_modules = ", createComponent(_components.span, {
            className: "hljs-function",
            get children() {
              return [createComponent(_components.span, {
                className: "hljs-keyword",
                children: "function"
              }), createComponent(_components.span, {
                className: "hljs-params",
                children: "()"
              })];
            }
          }), "\n      ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " st_modules = ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "require"
          }), " ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"nvchad_ui.statusline.default\""
          }), "\n      ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- this is just default table of statusline modules"
          }), "\n  \n      ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "return"
          }), " {\n        mode = ", createComponent(_components.span, {
            className: "hljs-function",
            get children() {
              return [createComponent(_components.span, {
                className: "hljs-keyword",
                children: "function"
              }), createComponent(_components.span, {
                className: "hljs-params",
                children: "()"
              })];
            }
          }), "\n          ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "return"
          }), " st_modules.mode() .. ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\" bruh \""
          }), " \n          ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- or just return \"\" to hide this module"
          }), "\n        ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), ",\n      }\n    ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), ",\n  },\n}\n"];
        }
      });
    }
  }), "\n", ssr(_tmpl$$g, ssrHydrationKey()), "\n", createComponent(_components.p, {
    get children() {
      return ["It is recommended to check the list of modules in ", createComponent(_components.a, {
        href: "https://github.com/NvChad/ui/blob/v2.0/lua/nvchad_ui/statusline",
        get children() {
          return ["our ", createComponent(_components.code, {
            children: "statusline"
          }), " modules file"];
        }
      }), ". In the above code, you can see that we want to print \"bruh\" next to the mode module, in the statusline. In order to add highlight group to your text, do:"];
    }
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-string",
            children: "\"%#BruhHl#\""
          }), " .. ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\" bruh \""
          }), " ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- the highlight group here is BruhHl"
          }), "\n"];
        }
      });
    }
  }), "\n", createComponent(_components.h3, {
    get children() {
      return ["Override ", createComponent(_components.code, {
        children: "tabufline"
      }), " modules"];
    }
  }), "\n", createComponent(_components.p, {
    get children() {
      return ["The configuration for overriding ", createComponent(_components.code, {
        children: "tabufline"
      }), " is the same as in ", createComponent(_components.code, {
        children: "statusline"
      }), ":"];
    }
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return ["M.ui = {\n  tabufline = {\n     overriden_modules = ", createComponent(_components.span, {
            className: "hljs-function",
            get children() {
              return [createComponent(_components.span, {
                className: "hljs-keyword",
                children: "function"
              }), createComponent(_components.span, {
                className: "hljs-params",
                children: "()"
              })];
            }
          }), "\n       ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " modules = ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "require"
          }), " ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"nvchad_ui.tabufline.modules\""
          }), "\n  \n       ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "return"
          }), " {\n         buttons = ", createComponent(_components.span, {
            className: "hljs-function",
            get children() {
              return [createComponent(_components.span, {
                className: "hljs-keyword",
                children: "function"
              }), createComponent(_components.span, {
                className: "hljs-params",
                children: "()"
              })];
            }
          }), "\n           ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "return"
          }), " modules.buttons() .. ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\" my button \""
          }), "\n         ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), ",\n         ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- or buttons = \"\" , this will hide the buttons"
          }), "\n       }\n     ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), ",\n  },\n}\n"];
        }
      });
    }
  }), "\n", ssr(_tmpl$$g, ssrHydrationKey()), "\n", createComponent(_components.p, {
    get children() {
      return ["Again, check the list of modules in ", createComponent(_components.a, {
        href: "https://github.com/NvChad/ui/blob/v2.0/lua/nvchad_ui/tabufline",
        children: "our tabufline modules file"
      }), "."];
    }
  })];
}
function MDXContent$a(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, M(), props.components);
  return MDXLayout ? createComponent(MDXLayout, mergeProps(props, {
    get children() {
      return createComponent(_createMdxContent$a, props);
    }
  })) : _createMdxContent$a(props);
}

const _tmpl$$f = ["<br", ">"];
function _createMdxContent$9(props) {
  const _components = Object.assign({
    h2: "h2",
    p: "p",
    a: "a",
    code: "code",
    ul: "ul",
    li: "li",
    blockquote: "blockquote",
    strong: "strong",
    pre: "pre",
    span: "span"
  }, M(), props.components);
  return [createComponent(_components.h2, {
    children: "Overview"
  }), "\n", createComponent(_components.p, {
    get children() {
      return ["NvChad uses ", createComponent(_components.a, {
        href: "https://github.com/folke/lazy.nvim",
        children: "lazy.nvim"
      }), " for plugins management. Basically, NvChad expects a user plugin table, which then gets merged with the default plugins table. You can find the default table in: ", createComponent(_components.a, {
        href: "https://github.com/NvChad/NvChad/blob/v2.0/lua/plugins/init.lua",
        get children() {
          return createComponent(_components.code, {
            children: "lua/plugins/init.lua"
          });
        }
      }), "."];
    }
  }), "\n", createComponent(_components.h2, {
    children: "Lazy loading"
  }), "\n", createComponent(_components.p, {
    children: "We lazy load almost 95% of the plugins, so we expect and recommend you to lazy load the plugins as well, as its efficient in reducing startuptime."
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "We don't want users making NvChad slow just because they didn't lazy load plugins they've added."
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["Please read the ", createComponent(_components.a, {
            href: "https://github.com/folke/lazy.nvim#-plugin-spec",
            children: "lazy.nvim plugin specs"
          }), " docs to know what options are available for lazyloading etc."];
        }
      }), "\n", createComponent(_components.li, {
        children: "Try your best to lazy-load a plugin!"
      }), "\n"];
    }
  }), "\n", createComponent(_components.h2, {
    children: "Manage custom plugins"
  }), "\n", createComponent(_components.p, {
    get children() {
      return ["All NvChad default plugins will have ", createComponent(_components.code, {
        children: "lazy = true"
      }), " set. Therefore, if you want a plugin to be enabled on startup, change it to ", createComponent(_components.code, {
        children: "lazy = false"
      }), "."];
    }
  }), "\n", createComponent(_components.p, {
    get children() {
      return ["It is recommended that you avoid saving any files in the ", createComponent(_components.code, {
        children: "custom/plugins/*"
      }), " directory."];
    }
  }), "\n", createComponent(_components.blockquote, {
    get children() {
      return ["\n", createComponent(_components.p, {
        get children() {
          return ["Our system utilizes the import feature provided by", createComponent(_components.code, {
            children: "lazy.nvim"
          }), ", which imports all files in a directory and expects each file to return plugin tables. This behavior is undesirable for our purposes, so it is recommendeed to create a single file named ", createComponent(_components.strong, {
            children: "custom/plugins.lua"
          }), ". This file will be imported by ", createComponent(_components.code, {
            children: "lazy.nvim"
          }), ", and no other files in the directory will be processed."];
        }
      }), "\n"];
    }
  }), "\n", ssr(_tmpl$$f, ssrHydrationKey()), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return createComponent(_components.strong, {
            children: "custom/chadrc.lua"
          });
        }
      }), "\n"];
    }
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return ["M.plugins = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"custom.plugins\""
          }), "\n"];
        }
      });
    }
  }), "\n", ssr(_tmpl$$f, ssrHydrationKey()), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return createComponent(_components.strong, {
            children: "custom/plugins.lua"
          });
        }
      }), "\n"];
    }
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " plugins = {\n\n  { ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"elkowar/yuck.vim\""
          }), " , lazy = ", createComponent(_components.span, {
            className: "hljs-literal",
            children: "false"
          }), " },  ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- load a plugin at startup"
          }), "\n\n  ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- You can use any plugin specification from lazy.nvim"
          }), "\n  {\n    ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"Pocco81/TrueZen.nvim\""
          }), ",\n    cmd = { ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"TZAtaraxis\""
          }), ", ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"TZMinimalist\""
          }), " },\n    ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "config"
          }), " = ", createComponent(_components.span, {
            className: "hljs-function",
            get children() {
              return [createComponent(_components.span, {
                className: "hljs-keyword",
                children: "function"
              }), createComponent(_components.span, {
                className: "hljs-params",
                children: "()"
              })];
            }
          }), "\n      ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "require"
          }), " ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"custom.configs.truezen\""
          }), " ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- just an example path"
          }), "\n    ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), ",\n  },\n\n  ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- this opts will extend the default opts "
          }), "\n  {\n    ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"nvim-treesitter/nvim-treesitter\""
          }), ",\n    opts = {\n      ensure_installed = {", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"html\""
          }), ", ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"css\""
          }), ", ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"bash\""
          }), "},\n    },\n  },\n\n  ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- if you load some function or module within your opt, wrap it with a function"
          }), "\n  {\n   ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"nvim-telescope/telescope.nvim\""
          }), ",\n   opts = {\n     defaults = {\n       mappings = {\n         i = {\n           [", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"<esc>\""
          }), "] = ", createComponent(_components.span, {
            className: "hljs-function",
            get children() {
              return [createComponent(_components.span, {
                className: "hljs-keyword",
                children: "function"
              }), createComponent(_components.span, {
                className: "hljs-params",
                children: "(...)"
              })];
            }
          }), "\n               ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "require"
          }), "(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"telescope.actions\""
          }), ").", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "close"
          }), "(...)\n            ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), ",\n          },\n        },\n      },\n    },\n   },\n\n   {\n     ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"folke/which-key.nvim\""
          }), ",\n     enabled = ", createComponent(_components.span, {
            className: "hljs-literal",
            children: "false"
          }), ",\n   }\n\n}\n\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "return"
          }), " plugins\n"];
        }
      });
    }
  })];
}
function MDXContent$9(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, M(), props.components);
  return MDXLayout ? createComponent(MDXLayout, mergeProps(props, {
    get children() {
      return createComponent(_createMdxContent$9, props);
    }
  })) : _createMdxContent$9(props);
}

const _tmpl$$e = ["<br", ">"];
function _createMdxContent$8(props) {
  const _components = Object.assign({
    h2: "h2",
    p: "p",
    code: "code",
    ul: "ul",
    li: "li",
    a: "a",
    strong: "strong",
    pre: "pre",
    span: "span",
    blockquote: "blockquote"
  }, M(), props.components);
  return [createComponent(_components.h2, {
    children: "Luasnip"
  }), "\n", createComponent(_components.p, {
    get children() {
      return ["NvChad uses ", createComponent(_components.code, {
        children: "luasnip"
      }), " plugin for handling snippets, by default it uses ", createComponent(_components.code, {
        children: "friendly-snippets"
      }), " plugin which provides snippets for many languages ."];
    }
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return ["But you would want to extend or add your own snippets so read ", createComponent(_components.a, {
            href: "https://github.com/L3MON4D3/LuaSnip/blob/master/DOC.md#loaders",
            children: "luasnip docs"
          }), "."];
        }
      }), "\n"];
    }
  }), "\n", createComponent(_components.h2, {
    children: "Globals"
  }), "\n", createComponent(_components.p, {
    get children() {
      return ["These are the globals you can use to include the path of your snippets. Put them in ", createComponent(_components.strong, {
        children: "custom/init.lua"
      }), "."];
    }
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- vscode format i.e json files"
          }), "\nvim.g.vscode_snippets_path = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"your snippets path\""
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- snipmate format "
          }), "\nvim.g.snipmate_snippets_path = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"your snippets path\""
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- lua format "
          }), "\nvim.g.lua_snippets_path = vim.fn.stdpath ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"config\""
          }), " .. ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"/lua/custom/lua_snippets\""
          }), "\n"];
        }
      });
    }
  }), "\n", ssr(_tmpl$$e, ssrHydrationKey()), "\n", createComponent(_components.blockquote, {
    get children() {
      return ["\n", createComponent(_components.p, {
        children: "The above code is an example in which we first get the path of nvim config and then add our custom snippets dir"
      }), "\n"];
    }
  })];
}
function MDXContent$8(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, M(), props.components);
  return MDXLayout ? createComponent(MDXLayout, mergeProps(props, {
    get children() {
      return createComponent(_createMdxContent$8, props);
    }
  })) : _createMdxContent$8(props);
}

const _tmpl$$d = ["<br", ">"];
function _createMdxContent$7(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    a: "a",
    h2: "h2",
    code: "code",
    ul: "ul",
    li: "li",
    pre: "pre",
    span: "span"
  }, M(), props.components);
  return [createComponent(_components.h1, {
    children: "Nvim-treesitter"
  }), "\n", createComponent(_components.p, {
    get children() {
      return ["We use ", createComponent(_components.a, {
        href: "https://github.com/nvim-treesitter/nvim-treesitter",
        children: "Nvim-treesitter"
      }), " plugin to have proper syntax highlighting in NvChad. It can be used for various things such as auto indent etc too."];
    }
  }), "\n", createComponent(_components.h2, {
    children: "Install parsers"
  }), "\n", createComponent(_components.p, {
    get children() {
      return ["The TSInstall command is used to install treesitter parsers i.e ", createComponent(_components.code, {
        children: "TSInstall <parser>"
      })];
    }
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "Example :"
      }), "\n"];
    }
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        children: "TSInstall lua html\n"
      });
    }
  }), "\n", ssr(_tmpl$$d, ssrHydrationKey()), "\n", createComponent(_components.p, {
    children: "But this may be tedious when you have so many parsers to install and you'd have to repeat this step if you're re-installing nvchad with your old custom settings."
  }), "\n", createComponent(_components.h2, {
    children: "Custom config"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "So now we'll just override the default config and add our own parser names to it."
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["For knowing correct parser names, do check ", createComponent(_components.a, {
            href: "https://github.com/nvim-treesitter/nvim-treesitter#supported-languages",
            children: "nvim-treesitter docs"
          })];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return createComponent(_components.code, {
            children: "custom/plugins.lua"
          });
        }
      }), "\n"];
    }
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return ["{\n    ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"nvim-treesitter/nvim-treesitter\""
          }), ",\n    opts = {\n      ensure_installed = {\n        ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- defaults "
          }), "\n        ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"vim\""
          }), ",\n        ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"lua\""
          }), ",\n\n        ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- web dev "
          }), "\n        ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"html\""
          }), ",\n        ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"css\""
          }), ",\n        ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"javascript\""
          }), ",\n        ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"typescript\""
          }), ",\n        ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"tsx\""
          }), ",\n        ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"json\""
          }), ",\n        ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- \"vue\", \"svelte\","
          }), "\n\n       ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- low level"
          }), "\n        ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"c\""
          }), ",\n        ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"zig\""
          }), "\n      },\n    },\n  },\n"];
        }
      });
    }
  })];
}
function MDXContent$7(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, M(), props.components);
  return MDXLayout ? createComponent(MDXLayout, mergeProps(props, {
    get children() {
      return createComponent(_createMdxContent$7, props);
    }
  })) : _createMdxContent$7(props);
}

const _tmpl$$c = ["<br", ">"],
  _tmpl$2$b = ["<u", ">WARNING: Do this at your own risk because you might not be able to make nice nvchad themes like siduck.</u>"];
function _createMdxContent$6(props) {
  const _components = Object.assign({
    h2: "h2",
    ul: "ul",
    li: "li",
    a: "a",
    p: "p",
    pre: "pre",
    code: "code",
    span: "span",
    strong: "strong",
    h3: "h3",
    blockquote: "blockquote"
  }, M(), props.components);
  return [createComponent(_components.h2, {
    children: "Override default highlight groups"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "Make sure you use a valid highlight group."
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["Check your theme colors in the ", createComponent(_components.a, {
            href: "https://github.com/NvChad/base46/tree/v2.0/lua/base46/themes",
            children: "base46 theme dir"
          })];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["To know which highlight groups are available, check the ", createComponent(_components.a, {
            href: "https://github.com/NvChad/base46/tree/v2.0/lua/base46/integrations",
            children: "base46 integrations dir"
          })];
        }
      }), "\n", createComponent(_components.li, {
        children: "Also if you just press tab key in hl_override, a list of highlight groups will show up via the completion menu."
      }), "\n"];
    }
  }), "\n", createComponent(_components.p, {
    children: "When modifying the custom highlight groups in your theme file, such as \"onedark.lua\", it is important to note that only the variables from \"base_30\" can be used for this purpose."
  }), "\n", createComponent(_components.p, {
    children: "Although hex colors can also be used in the \"fg/bg\" field, it is recommended to utilize the variable names (e.g. \"blue\", \"darker_black\", \"one_bg\", etc.) from your theme file as they will provide a better aesthetic. This way, there is no need to manually write the hex colors."
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return ["M.ui = {\n   hl_override = {\n      Pmenu = { bg = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"white\""
          }), " },\n      ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- Pmenu = { bg = \"#ffffff\" }, this works too"
          }), "\n\n      MyHighlightGroup = { ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- custom highlights are also allowed"
          }), "\n         fg = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"red\""
          }), ",\n         bg = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"darker_black\""
          }), "\n      }\n   },\n}\n"];
        }
      });
    }
  }), "\n", ssr(_tmpl$$c, ssrHydrationKey()), "\n", createComponent(_components.p, {
    get children() {
      return ["In order to add custom highlights, its the same as above, just use ", createComponent(_components.strong, {
        get children() {
          return createComponent(_components.code, {
            children: "hl_add"
          });
        }
      }), "."];
    }
  }), "\n", createComponent(_components.h2, {
    children: "Customize themes"
  }), "\n", createComponent(_components.p, {
    children: "If you just want to customize an already existing theme, you can change the following configuration:"
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return ["M.ui = {\n   changed_themes = {\n      onedark = {\n         base_16 = {\n            base00 = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"#mycol\""
          }), ",\n         },\n         base_30 = {\n            red = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"#mycol\""
          }), ",\n            white = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"#mycol\""
          }), ",\n         },\n      },\n\n      nord = {\n         ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- and so on!"
          }), "\n      },\n   },\n}\n"];
        }
      });
    }
  }), "\n", createComponent(_components.h3, {
    children: "Local themes"
  }), "\n", createComponent(_components.blockquote, {
    get children() {
      return ["\n", ssr(_tmpl$2$b, ssrHydrationKey()), "\n"];
    }
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return ["Default themes can be found in our ", createComponent(_components.a, {
            href: "https://github.com/NvChad/base46",
            get children() {
              return createComponent(_components.code, {
                children: "base46"
              });
            }
          }), " repository."];
        }
      }), "\n"];
    }
  }), "\n", createComponent(_components.p, {
    children: "Here is the default structure for NvChad themes:"
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- place the file in /custom/themes/<theme-name>.lua"
          }), "\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- for example: custom/themes/siduck.lua"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " M = {}\n\nM.base_30 = {\n   ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- 30 colors based on base_16"
          }), "\n}\n\nM.base_16 = {\n   ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- base16 colors"
          }), "\n}\n\nM.", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "type"
          }), " = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"dark\""
          }), " ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- light / dark"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "return"
          }), " M\n"];
        }
      });
    }
  }), "\n", ssr(_tmpl$$c, ssrHydrationKey()), "\n", createComponent(_components.p, {
    children: "Finally, add your theme in chadrc."
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return ["M.ui = {\n   theme = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"siduck\""
          }), ",\n}\n"];
        }
      });
    }
  })];
}
function MDXContent$6(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, M(), props.components);
  return MDXLayout ? createComponent(MDXLayout, mergeProps(props, {
    get children() {
      return createComponent(_createMdxContent$6, props);
    }
  })) : _createMdxContent$6(props);
}

const _tmpl$$b = ["<br", ">"],
  _tmpl$2$a = ["<kbd", ">space</kbd>"];
function _createMdxContent$5(props) {
  const _components = Object.assign({
    h1: "h1",
    h2: "h2",
    p: "p",
    code: "code",
    ul: "ul",
    li: "li",
    pre: "pre",
    span: "span",
    strong: "strong",
    img: "img",
    blockquote: "blockquote"
  }, M(), props.components);
  return [createComponent(_components.h1, {
    children: "How does NvChad work?"
  }), "\n", createComponent(_components.h2, {
    children: "Understanding the basics"
  }), "\n", createComponent(_components.p, {
    get children() {
      return ["Before getting into the this topic, first you should understand the ", createComponent(_components.code, {
        children: "vim.tbl_deep_extend"
      }), " function which is used for merging tables and their values recursively."];
    }
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return ["The function ", createComponent(_components.code, {
            children: "vim.tbl_deep_extend"
          }), " is normally used to merge 2 tables, and its syntax looks like this:"];
        }
      }), "\n"];
    }
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- table 1"
          }), "\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " person = {\n    name = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"joe\""
          }), ",\n    age = ", createComponent(_components.span, {
            className: "hljs-number",
            children: "19"
          }), ",\n}\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- table 2"
          }), "\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " someone = {\n    name = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"siduck\""
          }), ",\n}\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- \"force\" will overwrite equal values from the someone table over the person table"
          }), "\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " result = vim.tbl_deep_extend(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"force\""
          }), ", person, someone)\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- result : "
          }), "\n{\n    name = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"siduck\""
          }), ", ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- as you can see, name has been overwritten"
          }), "\n    age = ", createComponent(_components.span, {
            className: "hljs-number",
            children: "19"
          }), ",\n}\n"];
        }
      });
    }
  }), "\n", ssr(_tmpl$$b, ssrHydrationKey()), "\n", createComponent(_components.p, {
    children: "Its usage can even be used in more complex tables. As said, it works recursively, which means that it will apply the same behaviour for nested table values:"
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " person = {\n    name = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"joe\""
          }), ",\n    age = ", createComponent(_components.span, {
            className: "hljs-number",
            children: "19"
          }), ",\n    skills = {", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"python\""
          }), ", ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"java\""
          }), ", ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"c++\""
          }), "}\n\n    distros_used = {\n        ubuntu = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"5 years\""
          }), ",\n        arch = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"10 minutes\""
          }), ",\n        manjaro = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"10 years\""
          }), ",\n    }\n}\n\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " someone = {\n    name = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"siduck\""
          }), ",\n    skills = {", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"js\""
          }), ", ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"lua\""
          }), "},\n\n    distros_used = {\n       ubuntu = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"1 month\""
          }), ",\n       artix = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"2 years\""
          }), "\n    }\n}\n\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " result = vim.tbl_deep_extend(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"force\""
          }), ", person, someone)\n"];
        }
      });
    }
  }), "\n", ssr(_tmpl$$b, ssrHydrationKey()), "\n", createComponent(_components.p, {
    get children() {
      return ["The resulting table will have merged each property from the tables, and the same for the ", createComponent(_components.code, {
        children: "skills"
      }), " and ", createComponent(_components.code, {
        children: "distros_used"
      }), " values:"];
    }
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return ["{\n   name = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"siduck\""
          }), ",\n   age = ", createComponent(_components.span, {
            className: "hljs-number",
            children: "19"
          }), "\n\n   skills = {", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"js\""
          }), ", ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"lua\""
          }), "},\n\n   distros_used = {\n       ubuntu = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"1 month\""
          }), ",\n       arch = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"10 minutes\""
          }), ",\n       manjaro = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"10 years\""
          }), ",\n       artix = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"2 years\""
          }), "\n   }\n}\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- tbl_deep_extend function merges values recursively, but if there's an array (list), it won't merge the list tables. "
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- Example: the first table has {\"python\", \"java\", \"c++\"} and the second table has {\"js\",\"lua\"}. "
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- Now you might be wondering that it should merge it like this: { \"python\", \"java\", \"c++\", \"lua\"}"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- But no! thats wrong, the result will be only {\"js\",\"lua\"}"
          }), "\n"];
        }
      });
    }
  }), "\n", ssr(_tmpl$$b, ssrHydrationKey()), "\n", createComponent(_components.p, {
    get children() {
      return ["To sum up, ", createComponent(_components.code, {
        children: "tbl_deep_extend"
      }), " merges dictonary tables recursively (i.e tables which have ", createComponent(_components.code, {
        children: "key/value"
      }), " pair but not lists)."];
    }
  }), "\n", createComponent(_components.h2, {
    children: "Config Structure"
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        children: "├── init.lua ( main init.lua )\n│\n├── lua\n│   │\n│   ├── core\n│   │   ├── default_config.lua\n│   │   ├── mappings.lua\n│   │   ├── utils.lua \n│   │   └── init.lua  \n│   │\n│   ├── plugins\n│   │    ├── init.lua \n│   │    └── configs\n│   │        ├── cmp.lua\n│   │        └── other configs\n│   │  \n│   │   USER CONFIG  \n│   │  \n│   ├── custom *\n│   │   ├── chadrc.lua\n│   │   ├── init.lua\n│   │   ├── more files, dirs\n"
      });
    }
  }), "\n", ssr(_tmpl$$b, ssrHydrationKey()), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.strong, {
            get children() {
              return [createComponent(_components.code, {
                children: "init.lua"
              }), " -"];
            }
          }), " runs whole config"];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.strong, {
            get children() {
              return [createComponent(_components.code, {
                children: "core/default_config"
              }), " -"];
            }
          }), " returns a table of default options in NvChad."];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.strong, {
            get children() {
              return [createComponent(_components.code, {
                children: "core/mappings"
              }), " -"];
            }
          }), " default mappings"];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.strong, {
            get children() {
              return [createComponent(_components.code, {
                children: "core/init"
              }), " -"];
            }
          }), " default globals, nvim options, commands, autocmds"];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.strong, {
            get children() {
              return [createComponent(_components.code, {
                children: "core/utils"
              }), " -"];
            }
          }), " helpful functions"];
        }
      }), "\n"];
    }
  }), "\n", createComponent(_components.h2, {
    children: "Custom config"
  }), "\n", createComponent(_components.p, {
    get children() {
      return ["There are 2 important files in ", createComponent(_components.strong, {
        children: "custom"
      }), " dir which extend NvChad:"];
    }
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.strong, {
            get children() {
              return createComponent(_components.code, {
                children: "custom/chadrc.lua"
              });
            }
          }), " meant to override that table in ", createComponent(_components.code, {
            children: "default_config.lua"
          }), " file"];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.strong, {
            get children() {
              return createComponent(_components.code, {
                children: "custom/init.lua"
              });
            }
          }), " runs in the main ", createComponent(_components.code, {
            children: "init.lua"
          }), ", its meant to have vim options, globals, autocmds, commands etc."];
        }
      }), "\n"];
    }
  }), "\n", createComponent(_components.p, {
    get children() {
      return createComponent(_components.img, {
        src: "/illustrations/config_nutshell.webp",
        alt: "GitHub Logo"
      });
    }
  }), "\n", createComponent(_components.p, {
    get children() {
      return ["From now on, whenever we talk about paths, keep in mind that they're relative to the ", createComponent(_components.code, {
        children: "lua"
      }), " folder in your ", createComponent(_components.code, {
        children: "nvim"
      }), " config (by default it should be ", createComponent(_components.code, {
        children: "~/.config/nvim/"
      }), ")."];
    }
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return ["\n", createComponent(_components.p, {
            get children() {
              return ["It is not recommended to make changes outside the ", createComponent(_components.code, {
                children: "custom"
              }), " dir, because NvChad config is a repo and it ", createComponent(_components.strong, {
                children: "gitignores"
              }), " only the custom dir, it uses ", createComponent(_components.code, {
                children: "git pull"
              }), " to update the config."];
            }
          }), "\n"];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["\n", createComponent(_components.p, {
            get children() {
              return ["Any other file outside the ", createComponent(_components.code, {
                children: "custom"
              }), " dir will be treated as a change by ", createComponent(_components.code, {
                children: "git"
              }), ", meaning that NvChad will not be able to fast-forward the pull."];
            }
          }), "\n"];
        }
      }), "\n"];
    }
  }), "\n", createComponent(_components.h2, {
    children: "Themes"
  }), "\n", createComponent(_components.p, {
    get children() {
      return ["You can see all the themes with the following keymap: ", createComponent(_components.code, {
        children: "<leader> + th"
      }), "."];
    }
  }), "\n", createComponent(_components.blockquote, {
    get children() {
      return ["\n", createComponent(_components.p, {
        get children() {
          return ["The ", createComponent(_components.code, {
            children: "leader"
          }), " key is the  ", ssr(_tmpl$2$a, ssrHydrationKey()), "  in NvChad."];
        }
      }), "\n"];
    }
  }), "\n", createComponent(_components.h2, {
    children: "Mappings"
  }), "\n", createComponent(_components.p, {
    children: "If you want to know all the keymaps, you can run the following comands:"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return createComponent(_components.code, {
            children: "NvCheatsheet"
          });
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return createComponent(_components.code, {
            children: "Telescope keymaps"
          });
        }
      }), "\n"];
    }
  })];
}
function MDXContent$5(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, M(), props.components);
  return MDXLayout ? createComponent(MDXLayout, mergeProps(props, {
    get children() {
      return createComponent(_createMdxContent$5, props);
    }
  })) : _createMdxContent$5(props);
}

const _tmpl$$a = ["<button", " class=\"", "\"><div", " text-base></div><!--#-->", "<!--/--></button>"],
  _tmpl$2$9 = ["<div", " grid gap-5><div flex flex-wrap class=\"[&amp;_*]:rounded-lg [&amp;_button]:p-3 [&amp;_button]:w-fit vertCentered !gap-3\"><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--></div><pre class=\"hljs\">", "</pre></div>"];
const [osname, setOS] = createSignal("Linux / Macos");

// installer commands
const unix_cmd = "git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1 && nvim";
const windows_cmd = "git clone https://github.com/NvChad/NvChad $HOME\\AppData\\Local\\nvim --depth 1 && nvim";
const docker_cmd = `docker run -w /root -it --rm alpine:latest sh -uelic '
  apk add git nodejs neovim ripgrep build-base --update
  git clone https://github.com/NvChad/NvChad ~/.config/nvim
  nvim
  '`;
const [oscmd, setOSCMD] = createSignal(unix_cmd);
const Btn = props => {
  const {
    cmd,
    os,
    icon
  } = props;
  return ssr(_tmpl$$a, ssrHydrationKey(), `!text-vsm ${osname() == os ? "text-white-1 bg-blue-6 dark:bg-blue-3 dark:text-dark-1" : "bg-slate-1"}`, ssrAttribute("class", escape(icon, true), false), escape(os));
};
const OS_Selector = (() => {
  return ssr(_tmpl$2$9, ssrHydrationKey(), escape(createComponent(Btn, {
    os: "Linux / Macos",
    cmd: unix_cmd,
    icon: "i-mingcute:hashtag-fill"
  })), escape(createComponent(Btn, {
    os: "Windows",
    cmd: windows_cmd,
    icon: "i-mdi:windows"
  })), escape(createComponent(Btn, {
    os: "Docker",
    cmd: docker_cmd,
    icon: "i-nonicons:docker-16"
  })), escape(oscmd));
});

const _tmpl$$9 = ["<strong", ">Mono</strong>"],
  _tmpl$2$8 = ["<strong", ">Example : </strong>"],
  _tmpl$3$5 = ["<s", ">JetbrainsMono Nerd Font Mono</s>"],
  _tmpl$4$3 = ["<strong", ">(OPTIONAL)</strong>"];
function _createMdxContent$4(props) {
  const _components = Object.assign({
    h2: "h2",
    ul: "ul",
    li: "li",
    a: "a",
    strong: "strong",
    code: "code",
    p: "p",
    pre: "pre",
    span: "span"
  }, M(), props.components);
  return [createComponent(_components.h2, {
    children: "Pre-requisites"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.a, {
            href: "https://github.com/neovim/neovim/releases/tag/v0.9.0",
            children: "Neovim 0.9.0"
          }), "."];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.a, {
            href: "https://www.nerdfonts.com/",
            children: "Nerd Font"
          }), " as your terminal font.", "\n", createComponent(_components.ul, {
            get children() {
              return ["\n", createComponent(_components.li, {
                get children() {
                  return ["Make sure the nerd font you set doesnt end with ", ssr(_tmpl$$9, ssrHydrationKey()), " to prevent small icons."];
                }
              }), "\n", createComponent(_components.li, {
                get children() {
                  return [ssr(_tmpl$2$8, ssrHydrationKey()), " JetbrainsMono Nerd Font and not ", createComponent(_components.strong, {
                    get children() {
                      return ssr(_tmpl$3$5, ssrHydrationKey());
                    }
                  })];
                }
              }), "\n"];
            }
          }), "\n"];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.a, {
            href: "https://github.com/BurntSushi/ripgrep",
            children: "Ripgrep"
          }), " is required for grep searching with Telescope ", ssr(_tmpl$4$3, ssrHydrationKey()), "."];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["GCC, Windows users must have ", createComponent(_components.a, {
            href: "http://mingw-w64.org/downloads",
            get children() {
              return createComponent(_components.code, {
                children: "mingw"
              });
            }
          }), " installed and set on path."];
        }
      }), "\n", createComponent(_components.li, {
        children: "Delete old neovim folder (check commands below)"
      }), "\n"];
    }
  }), "\n", createComponent(_components.h2, {
    children: "Install"
  }), "\n", createComponent(OS_Selector, {}), "\n", createComponent(_components.h2, {
    children: "Update"
  }), "\n", createComponent(_components.p, {
    children: "To update NvChad run the following command :"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.code, {
            children: "NvChadUpdate"
          }), "."];
        }
      }), "\n"];
    }
  }), "\n", createComponent(_components.h2, {
    children: "Uninstall"
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-bash",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-comment",
            children: "# Linux / Macos (unix)"
          }), "\n", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "rm"
          }), " -rf ~/.config/nvim\n", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "rm"
          }), " -rf ~/.local/share/nvim\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "# Windows"
          }), "\nrd -r ~\\AppData\\Local\\nvim\nrd -r ~\\AppData\\Local\\nvim-data\n"];
        }
      });
    }
  })];
}
function MDXContent$4(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, M(), props.components);
  return MDXLayout ? createComponent(MDXLayout, mergeProps(props, {
    get children() {
      return createComponent(_createMdxContent$4, props);
    }
  })) : _createMdxContent$4(props);
}

function _createMdxContent$3(props) {
  const _components = Object.assign({
    h2: "h2",
    pre: "pre",
    code: "code",
    span: "span",
    h3: "h3",
    p: "p",
    strong: "strong",
    ul: "ul",
    li: "li"
  }, M(), props.components);
  return [createComponent(_components.h2, {
    children: "Comments"
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- comment"
          }), "\n", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "print"
          }), "(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"Hi\""
          }), ") ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- comment"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "--[[\n multi-line \n comment\n]]"
          }), "\n"];
        }
      });
    }
  }), "\n", createComponent(_components.h2, {
    children: "Variables"
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- Different types"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " x = ", createComponent(_components.span, {
            className: "hljs-number",
            children: "10"
          }), " ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- number"
          }), "\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " name = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"sid\""
          }), " ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- string"
          }), "\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " isAlive = ", createComponent(_components.span, {
            className: "hljs-literal",
            children: "true"
          }), " ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- boolean"
          }), "\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " a = ", createComponent(_components.span, {
            className: "hljs-literal",
            children: "nil"
          }), " ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "--no value or invalid value"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- increment in numbers"
          }), "\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " n = ", createComponent(_components.span, {
            className: "hljs-number",
            children: "1"
          }), "\nn = n + ", createComponent(_components.span, {
            className: "hljs-number",
            children: "1"
          }), "\n", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "print"
          }), "(n) ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- 2"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- strings"
          }), "\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- Concatenate strings"
          }), "\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " phrase = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"I am\""
          }), "\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " name = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"Sid\""
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "print"
          }), "(phrase .. ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\" \""
          }), " .. name) ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- I am Sid"
          }), "\n", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "print"
          }), "(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"I am \""
          }), " .. ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"Sid\""
          }), ")\n"];
        }
      });
    }
  }), "\n", createComponent(_components.h2, {
    children: "Comparison Operators"
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [" == equality\n < less than\n > greater than\n <= less than ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "or"
          }), " equal to\n >= greater than ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "or"
          }), " equal to\n ~= inequality\n"];
        }
      });
    }
  }), "\n", createComponent(_components.h2, {
    children: "Conditional Statements"
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- Number comparisons"
          }), "\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " age = ", createComponent(_components.span, {
            className: "hljs-number",
            children: "10"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "if"
          }), " age > ", createComponent(_components.span, {
            className: "hljs-number",
            children: "18"
          }), " ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "then"
          }), "\n  ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "print"
          }), "(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"over 18\""
          }), ") ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- this will not be executed"
          }), "\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- elseif and else"
          }), "\nage = ", createComponent(_components.span, {
            className: "hljs-number",
            children: "20"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "if"
          }), " age > ", createComponent(_components.span, {
            className: "hljs-number",
            children: "18"
          }), " ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "then"
          }), "\n  ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "print"
          }), "(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"over 18\""
          }), ")\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "elseif"
          }), " age == ", createComponent(_components.span, {
            className: "hljs-number",
            children: "18"
          }), " ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "then"
          }), "\n  ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "print"
          }), "(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"18 huh\""
          }), ")\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "else"
          }), "\n  ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "print"
          }), "(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"kiddo\""
          }), ")\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- Boolean comparison"
          }), "\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " isAlive = ", createComponent(_components.span, {
            className: "hljs-literal",
            children: "true"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "if"
          }), " isAlive ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "then"
          }), "\n    ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "print"
          }), "(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"Be grateful!\""
          }), ")\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- String comparisons"
          }), "\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " name = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"sid\""
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "if"
          }), " name ~= ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"sid\""
          }), " ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "then"
          }), "\n  ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "print"
          }), "(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"not sid\""
          }), ")\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), "\n"];
        }
      });
    }
  }), "\n", createComponent(_components.h3, {
    children: "Combining Statements"
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " age = ", createComponent(_components.span, {
            className: "hljs-number",
            children: "22"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "if"
          }), " age == ", createComponent(_components.span, {
            className: "hljs-number",
            children: "10"
          }), " ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "and"
          }), " x > ", createComponent(_components.span, {
            className: "hljs-number",
            children: "0"
          }), " ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "then"
          }), " ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- both should be true"
          }), "\n  ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "print"
          }), "(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"kiddo!\""
          }), ")\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "elseif"
          }), " x == ", createComponent(_components.span, {
            className: "hljs-number",
            children: "18"
          }), " ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "or"
          }), " x > ", createComponent(_components.span, {
            className: "hljs-number",
            children: "18"
          }), " ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "then"
          }), " ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- 1 or more are true"
          }), "\n  ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "print"
          }), "(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"over 18\""
          }), ")\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- result: over 18"
          }), "\n"];
        }
      });
    }
  }), "\n", createComponent(_components.p, {
    get children() {
      return createComponent(_components.strong, {
        children: "Invert Value"
      });
    }
  }), "\n", createComponent(_components.p, {
    get children() {
      return ["You can also invert a value with the ", createComponent(_components.strong, {
        children: "not"
      }), " keyword:"];
    }
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " isAlive = ", createComponent(_components.span, {
            className: "hljs-literal",
            children: "true"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "if"
          }), " ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "not"
          }), " isAlive ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "then"
          }), "\n  ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "print"
          }), "(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\" ye ded!\""
          }), ")\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), "\n"];
        }
      });
    }
  }), "\n", createComponent(_components.h2, {
    children: "Functions"
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " ", createComponent(_components.span, {
            className: "hljs-function",
            get children() {
              return [createComponent(_components.span, {
                className: "hljs-keyword",
                children: "function"
              }), " ", createComponent(_components.span, {
                className: "hljs-title",
                children: "print_num"
              }), createComponent(_components.span, {
                className: "hljs-params",
                children: "(a)"
              })];
            }
          }), "\n  ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "print"
          }), "(a)\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "or"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " print_num = ", createComponent(_components.span, {
            className: "hljs-function",
            get children() {
              return [createComponent(_components.span, {
                className: "hljs-keyword",
                children: "function"
              }), createComponent(_components.span, {
                className: "hljs-params",
                children: "(a)"
              })];
            }
          }), "\n  ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "print"
          }), "(a)\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), "\n\nprint_num(", createComponent(_components.span, {
            className: "hljs-number",
            children: "5"
          }), ") ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- prints 5 "
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- multiple parameters"
          }), "\n", createComponent(_components.span, {
            className: "hljs-function",
            get children() {
              return [createComponent(_components.span, {
                className: "hljs-keyword",
                children: "function"
              }), " ", createComponent(_components.span, {
                className: "hljs-title",
                children: "sum"
              }), createComponent(_components.span, {
                className: "hljs-params",
                children: "(a, b)"
              })];
            }
          }), "\n  ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "return"
          }), " a + b\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), "\n"];
        }
      });
    }
  }), "\n", createComponent(_components.h2, {
    children: "Scope"
  }), "\n", createComponent(_components.p, {
    children: "Variables have different scopes. Once the end of the scope is reached, the values in that scope are no longer accessible."
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-function",
            get children() {
              return [createComponent(_components.span, {
                className: "hljs-keyword",
                children: "function"
              }), " ", createComponent(_components.span, {
                className: "hljs-title",
                children: "foo"
              }), createComponent(_components.span, {
                className: "hljs-params",
                children: "()"
              })];
            }
          }), "\n  ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " n = ", createComponent(_components.span, {
            className: "hljs-number",
            children: "10"
          }), "\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "print"
          }), "(n) ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- nil , n isn't accessible outside foo()"
          }), "\n"];
        }
      });
    }
  }), "\n", createComponent(_components.h2, {
    children: "Loops"
  }), "\n", createComponent(_components.p, {
    children: "Different ways to make a loop:"
  }), "\n", createComponent(_components.h3, {
    children: "While"
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " i = ", createComponent(_components.span, {
            className: "hljs-number",
            children: "1"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "while"
          }), " i <= ", createComponent(_components.span, {
            className: "hljs-number",
            children: "3"
          }), " ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "do"
          }), "\n   ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "print"
          }), "(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"hi\""
          }), ")\n   i = i + ", createComponent(_components.span, {
            className: "hljs-number",
            children: "1"
          }), "\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), "\n"];
        }
      });
    }
  }), "\n", createComponent(_components.h3, {
    children: "For"
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-keyword",
            children: "for"
          }), " i = ", createComponent(_components.span, {
            className: "hljs-number",
            children: "1"
          }), ", ", createComponent(_components.span, {
            className: "hljs-number",
            children: "3"
          }), " ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "do"
          }), "\n   ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "print"
          }), "(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"hi\""
          }), ")\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), "\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- Both print \"hi\" 3 times"
          }), "\n"];
        }
      });
    }
  }), "\n", createComponent(_components.h2, {
    children: "Tables"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "Tables can be used to store complex data."
      }), "\n", createComponent(_components.li, {
        children: "Types of tables: arrays (lists) and dicts (key,value)"
      }), "\n"];
    }
  }), "\n", createComponent(_components.h3, {
    children: "Arrays"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "Items within these can be accessed by \"index\"."
      }), "\n"];
    }
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " colors = { ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"red\""
          }), ", ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"green\""
          }), ", ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"blue\""
          }), " }\n\n", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "print"
          }), "(colors[", createComponent(_components.span, {
            className: "hljs-number",
            children: "1"
          }), "]) ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- red"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- Different ways to loop through lists"
          }), "\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- #colors is the length of the table, #tablename is the syntax"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "for"
          }), " i = ", createComponent(_components.span, {
            className: "hljs-number",
            children: "1"
          }), ", #colors ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "do"
          }), "\n  ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "print"
          }), "(colors[i])\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- ipairs "
          }), "\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "for"
          }), " index, value ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "in"
          }), " ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "ipairs"
          }), "(colors) ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "do"
          }), "\n   ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "print"
          }), "(colors[index])\n   ", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- or"
          }), "\n   ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "print"
          }), "(value)\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- If you dont use index or value here then you can replace it with _ "
          }), "\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "for"
          }), " _, value ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "in"
          }), " ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "ipairs"
          }), "(colors) ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "do"
          }), "\n   ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "print"
          }), "(value)\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), "\n"];
        }
      });
    }
  }), "\n", createComponent(_components.h3, {
    children: "Dictionaries"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "These contain keys and values:"
      }), "\n"];
    }
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " info = { \n   name = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"sid\""
          }), ",\n   age = ", createComponent(_components.span, {
            className: "hljs-number",
            children: "20"
          }), ",\n   isAlive = ", createComponent(_components.span, {
            className: "hljs-literal",
            children: "true"
          }), "\n}\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- both print sid"
          }), "\n", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "print"
          }), "(info[", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"name\""
          }), "])\n", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "print"
          }), "(info.name)\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- Loop by pairs"
          }), "\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "for"
          }), " key, value ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "in"
          }), " ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "pairs"
          }), "(info) ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "do"
          }), "\n   ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "print"
          }), "(key .. ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\" \""
          }), " .. ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "tostring"
          }), "(value))\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- prints name sid, age 20 etc"
          }), "\n"];
        }
      });
    }
  }), "\n", createComponent(_components.h3, {
    get children() {
      return createComponent(_components.strong, {
        children: "Nested Tables"
      });
    }
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- Nested lists"
          }), "\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " data = {\n    { ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"sid\""
          }), ", ", createComponent(_components.span, {
            className: "hljs-number",
            children: "20"
          }), " },\n    { ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"tim\""
          }), ", ", createComponent(_components.span, {
            className: "hljs-number",
            children: "90"
          }), " },\n}\n\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "for"
          }), " i = ", createComponent(_components.span, {
            className: "hljs-number",
            children: "1"
          }), ", #data ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "do"
          }), "\n  ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "print"
          }), "(data[i][", createComponent(_components.span, {
            className: "hljs-number",
            children: "1"
          }), "] .. ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\" is \""
          }), " .. data[i][", createComponent(_components.span, {
            className: "hljs-number",
            children: "2"
          }), "] .. ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\" years old\""
          }), ")\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "end"
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- Nested dictionaries"
          }), "\n", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "local"
          }), " data = {\n    sid = { age = ", createComponent(_components.span, {
            className: "hljs-number",
            children: "20"
          }), " },\n    tim = { age = ", createComponent(_components.span, {
            className: "hljs-number",
            children: "90"
          }), " },\n}\n"];
        }
      });
    }
  }), "\n", createComponent(_components.h2, {
    children: "Modules"
  }), "\n", createComponent(_components.p, {
    children: "Import code from other files"
  }), "\n", createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-built_in",
            children: "require"
          }), "(", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"path\""
          }), ")\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- for example in ~/.config/nvim/lua , all dirs and files are accessable via require"
          }), "\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- Do know that all files in that lua folder are in path!"
          }), "\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- ~/.config/nvim/lua/custom "
          }), "\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- ~/.config/nvim/lua/custom/init.lua"
          }), "\n\n ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "require"
          }), " ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"custom\""
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- both do the same thing"
          }), "\n"];
        }
      });
    }
  })];
}
function MDXContent$3(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, M(), props.components);
  return MDXLayout ? createComponent(MDXLayout, mergeProps(props, {
    get children() {
      return createComponent(_createMdxContent$3, props);
    }
  })) : _createMdxContent$3(props);
}

function _createMdxContent$2(props) {
  const _components = Object.assign({
    h2: "h2",
    p: "p",
    ul: "ul",
    li: "li",
    a: "a"
  }, M(), props.components);
  return [createComponent(_components.h2, {
    children: "If you're new to Neovim/Vim"
  }), "\n", createComponent(_components.p, {
    children: "We strongly encourage you to learn how to use Neovim/Vim. If you are totally new to Vim then you cannot use NvChad until you gain some basic knowledge about Vim's modes, default editor commands, globals, mappings etc."
  }), "\n", createComponent(_components.p, {
    children: "These are highly recommended and a must do for any new Vimmer:"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "Vim tutor"
      }), "\n"];
    }
  }), "\n", createComponent(_components.h2, {
    children: "Learn lua"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "Learning basic lua is highly recommended when configuring neovim config."
      }), "\n", createComponent(_components.li, {
        children: "It's a really simple & small language, would barely take 5-10 minutes if you're a programmer."
      }), "\n"];
    }
  }), "\n", createComponent(_components.h2, {
    children: "Nvim lua"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "You should know how to convert a vimscript code into lua for your config."
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["Read the official ", createComponent(_components.a, {
            href: "https://neovim.io/doc/user/lua-guide.html#lua-guide",
            children: "documentation"
          }), " for this."];
        }
      }), "\n"];
    }
  }), "\n", createComponent(_components.h2, {
    children: "Read NvChad docs"
  }), "\n", createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "Read the docs in order ( follow the arrows below )."
      }), "\n"];
    }
  })];
}
function MDXContent$2(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, M(), props.components);
  return MDXLayout ? createComponent(MDXLayout, mergeProps(props, {
    get children() {
      return createComponent(_createMdxContent$2, props);
    }
  })) : _createMdxContent$2(props);
}

const _tmpl$$8 = ["<div", " class=\"i-grommet-icons-install-option\"></div>"],
  _tmpl$2$7 = ["<div", " class=\"i-mdi-docker\"></div>"],
  _tmpl$3$4 = ["<div", " class=\"mx-auto flex gap-3 text-sm md:text-lg text-white-2 [&amp;_a]:shadow-xl\"><!--#-->", "<!--/--><!--#-->", "<!--/--></div>"],
  _tmpl$4$2 = ["<div", " text-slate-8 grid text-center mx-auto mb-10><h1 mb-0>Enhance your Neovim workflow</h1><p font-medium text-base md:text-xl>Blazing fast Neovim config providing solid defaults and a beautiful UI</p><!--#-->", "<!--/--></div>"],
  _tmpl$5$1 = ["<div", " class=\"", "\"><!--#-->", "<!--/--><div><img src=\"/banner.webp\" alt=\"NvChad screenshot\" class=\"rounded-lg md:rounded-xl max-w-[90vw] 2xl:max-w-[1700px] softshadow m-auto\"></div></div>"];
function BtnLinks() {
  const linkStyles = "vertCentered bg-onedark w-fit p-3 px-4 rounded-full";
  return ssr(_tmpl$3$4, ssrHydrationKey(), escape(createComponent(A, {
    href: "/docs/quickstart/install",
    "class": linkStyles,
    get children() {
      return [ssr(_tmpl$$8, ssrHydrationKey()), " Install"];
    }
  })), escape(createComponent(A, {
    href: "/docs/quickstart/install",
    "class": linkStyles,
    onclick: () => {
      setOS("Docker");
      setOSCMD(docker_cmd);
    },
    get children() {
      return [ssr(_tmpl$2$7, ssrHydrationKey()), " Docker"];
    }
  })));
}
function HeroText() {
  return ssr(_tmpl$4$2, ssrHydrationKey(), escape(createComponent(BtnLinks, {})));
}
function Hero() {
  let redGradient = "bg-gradient-to-r dark:from-red-4  dark:to-violet-4";
  let blueGradient = "bg-gradient-to-r from-blue-3 to-blue-5";
  return ssr(_tmpl$5$1, ssrHydrationKey(), `grid shadow-md p-10 pb-15 pt-0 justify-center rounded-none ${escape(blueGradient, true)} dark:${escape(redGradient, true)}`, escape(createComponent(HeroText, {})));
}

const _tmpl$$7 = ["<div", " class=\"grid gap-5 text-center justify-center rounded-2xl p-10 h-fit\"><div w-fit bg-dark-3 text-white-1 rounded-full mx-auto shadow-md><div class=\"", "\" text=\"5xl xl:7xl\" m-5></div></div><div grid><h2 mb-2 whitespace-nowrap>", "</h2><p text-lg dark:text-slate-4>", "</p></div></div>"],
  _tmpl$2$6 = ["<section", " max=\"w-[1700px]\" m-auto grid justify-center text-center my-20 px-5><div grid md:grid-cols-2 lg:grid-cols-3>", "</div></section>"];
const FeatureList = [{
  title: "Fast by default",
  icon: "i-fluent:rocket-20-regular text-yellow-2",
  description: ` 
        Blazing fast startup time as plugins are lazy loaded wherever possible;
        modules will load only when needed.
    `
}, {
  title: "Beautiful UI",
  icon: "i-circum:palette",
  description: ` 
        NvChad provides a pretty UI while still embracing the CLI; UI plugins
        are themed with visual elegance.
    `
}, {
  title: "Highly customizable",
  icon: "i-ion:cog-sharp text-emerald-3",
  description: ` 
        Default plugins, UI, configuration can easily be disabled or overriden
        via the chadrc file.
    `
}, {
  title: "Update mechanism",
  icon: "i-line-md:downloading-loop",
  description: ` 
        Update mechanism via git to stay up to date with the latest changes
        while preserving user configuration.
    `
}, {
  title: "Powered by Lua",
  icon: "i-file-icons:lua text-blue-3",
  description: ` 
        Configuration is written in Lua which integrates well with the Neovim
        lua api & lua plugins.
      `
}, {
  title: "Prettiest themes",
  icon: "i-ph:paint-brush-broad text-red-3",
  description: ` 
        57 inbuilt beautifully ported & custom themes! All the theme colors are
        overridable via user config.
        `
}, {
  title: "Lightweight",
  icon: "i-ph:feather text-purple-3",
  description: `
        The config is around 1.3k LOC & 60% of it is just plugin configs &
        mappings. We try to keep the codebase as simple as possible.
      `
}, {
  title: "Inbuilt UI Plugins",
  icon: "i-lucide:package text-orange-3",
  description: `
          NvChad manages its own theme plugin and UI modules like statusline, bufferline, dashboard into its own UI plugins.
    `
}, {
  title: "Ease of Use",
  icon: "i-octicon:smiley-16 text-green-3",
  description: `
      NvChad provides custom configuration to be simple and autocompletion for them. All you do is overriding tables!
    `
}];
function Feature(props) {
  const {
    details
  } = props;
  return ssr(_tmpl$$7, ssrHydrationKey(), `${escape(details.icon, true)}`, escape(details.title), escape(details.description));
}
function Features() {
  return ssr(_tmpl$2$6, ssrHydrationKey(), escape(FeatureList.map((feature, i) => createComponent(Feature, {
    key: i,
    details: feature
  }))));
}

const _tmpl$$6 = ["<div", " grid gap-0 id=\"community\"><h3 text-start font-normal>Communities</h3><div flex gap-5 bg=\"dark-4 dark:dark-3\" p=\"3 x-4\">", "</div></div>"],
  _tmpl$2$5 = ["<a", " capitalize", " vertcentered><div", " text-2xl rounded-none></div></a>"],
  _tmpl$3$3 = ["<div", " bg=\"dark-2 dark:dark-1\" text-white-1 rounded-none><div p-10 grid gap-10 max=\"w-[1700px]\" mx-auto text-center><div class=\"grid gap-10 mx-auto md:mx-0 md:flex md:justify-between\"><div grid text-start><p text-lg>Powered by Github pages</p><div flex vertcentered justify-center bg=\"dark-4 dark:dark-3\" p=\"3 x-4\"><div i-logos-solidjs-icon></div> Solidjs + <div i-simple-icons:unocss rounded-none></div> Unocss</div></div><!--#-->", "<!--/--></div><div grid gap-5 h-fit py-10 rounded-none border=\"0 t-2 solid dark-4\"><div mx-auto capitalize vertcentered text-2xl font-semibold><img src=\"/logo.svg\" alt=\"nvchad logo\" w=\"33px\" h=\"33px\">NvChad</div><span dark:text-white-2>Copyright \xA9 2023 Siduck\u2122</span></div></div></div>"];
const links = [["github discussions", "i-mdi:github", "https://github.com/NvChad/NvChad/discussions"], ["discord server", "i-ic:baseline-discord text-indigo-4", "https://discord.com/invite/gADmkJb9Fb"], ["youtube channel", "i-ph:youtube-logo-fill text-red-4", "https://www.youtube.com/@siduck_og"], ["telegram group", "i-uil:telegram text-sky-3", "https://t.me/nvchad_tg"], ["matrix space", "i-cib:matrix text-emerald-3", "https://matrix.to/#/#nvchad:matrix.org"]];
function Communities() {
  return ssr(_tmpl$$6, ssrHydrationKey(), escape(links.map(x => {
    return ssr(_tmpl$2$5, ssrHydrationKey(), ssrAttribute("href", escape(x[2], true), false) + ssrAttribute("aria-label", escape(x[0], true), false), ssrAttribute("class", escape(x[1], true), false));
  })));
}
function Footer() {
  return ssr(_tmpl$3$3, ssrHydrationKey(), escape(createComponent(Communities, {})));
}

function Home() {
  return [createComponent(Hero, {}), createComponent(Features, {}), createComponent(Footer, {})];
}

const _tmpl$$5 = ["<div", " flex justify-between gap-2><div flex flex-wrap gap-3>", "</div><div flex h-fit><button bg=\"white-1\" border=\"solid 1 blue-3 dark:dark-4 r-0\" rounded-r-none><div i-ri:layout-grid-line rounded-none></div> Grid</button><button class=\"rounded-l-none text-slate-7 dark:text-blue-4\" bg=\"blue-2 dark:dark-4\"><div><!--#-->", "<!--/--><!--#-->", "<!--/--></div></button></div></div>"],
  _tmpl$2$4 = ["<button", " class=\"gap-2 justify-start capitalize px-3\"", "><div", "></div> <!--#-->", "<!--/--></button>"],
  _tmpl$3$2 = ["<div", " i-bi:toggle2-on text-xl></div>"],
  _tmpl$4$1 = ["<div", " i-bi:toggle2-off text-xl></div>"],
  _tmpl$5 = ["<div", " class=\"", "\">", "</div>"],
  _tmpl$6 = ["<div", " softshadow grid relative><img loading=\"lazy\"", " rounded=\"lg\" shadow-b-md width=\"2560\" height=\"1440\"><div class=\"", "\" font-medium capitalize p=\"2 x-3\">", "</div></div>"],
  _tmpl$7 = ["<div", " top-0 left-0 sticky><button class=\"px-3 my-6 mx-auto bg-red-4 text-white-1 dark:text-red-3\"><div i-ion:close></div>Close</button><img", " class=\"z-[9999] rounded-lg softShadow h-auto w-full\"></div>"],
  _tmpl$8 = ["<div", " class=\"max-w-[1700px] mx-auto\"><!--#-->", "<!--/--><!--#-->", "<!--/--></div>"],
  _tmpl$9 = ["<div", " grid class=\"gap-5 my-6\" p=\"x-4 2xl:0\"><!--#-->", "<!--/--><!--#-->", "<!--/--></div>"];

// language labels with their icon classes
const languages = [{
  lang: "python",
  icon: "i-mdi:language-python",
  images: /* #__PURE__ */ Object.assign({"../../../public/themes/python/aquarium.webp": () => import('./aquarium-f771b696-f771b696.js'),"../../../public/themes/python/ashes.webp": () => import('./ashes-b9ecb65e-b9ecb65e.js'),"../../../public/themes/python/ayu_dark.webp": () => import('./ayu_dark-cb81dad6-cb81dad6.js'),"../../../public/themes/python/ayu_light.webp": () => import('./ayu_light-6070f0d6-6070f0d6.js'),"../../../public/themes/python/bearded-arc.webp": () => import('./bearded-arc-1c02f131-1c02f131.js'),"../../../public/themes/python/blossom_light.webp": () => import('./blossom_light-c9220ff0-c9220ff0.js'),"../../../public/themes/python/catppuccin.webp": () => import('./catppuccin-74a9c3bc-74a9c3bc.js'),"../../../public/themes/python/chadracula.webp": () => import('./chadracula-2bf5dd2a-2bf5dd2a.js'),"../../../public/themes/python/chadtain.webp": () => import('./chadtain-774901f7-774901f7.js'),"../../../public/themes/python/chocolate.webp": () => import('./chocolate-bf94ed57-bf94ed57.js'),"../../../public/themes/python/dark_horizon.webp": () => import('./dark_horizon-325a7c93-325a7c93.js'),"../../../public/themes/python/decay.webp": () => import('./decay-9124eeb7-9124eeb7.js'),"../../../public/themes/python/doomchad.webp": () => import('./doomchad-e968f825-e968f825.js'),"../../../public/themes/python/everblush.webp": () => import('./everblush-46a1c299-46a1c299.js'),"../../../public/themes/python/everforest.webp": () => import('./everforest-5ece04d3-5ece04d3.js'),"../../../public/themes/python/everforest_light.webp": () => import('./everforest_light-95ccc659-95ccc659.js'),"../../../public/themes/python/falcon.webp": () => import('./falcon-02a34858-02a34858.js'),"../../../public/themes/python/gatekeeper.webp": () => import('./gatekeeper-abe2ac84-abe2ac84.js'),"../../../public/themes/python/github_dark.webp": () => import('./github_dark-c0f8997e-c0f8997e.js'),"../../../public/themes/python/github_light.webp": () => import('./github_light-fe5880ff-fe5880ff.js'),"../../../public/themes/python/gruvbox.webp": () => import('./gruvbox-7ccdf973-7ccdf973.js'),"../../../public/themes/python/gruvbox_light.webp": () => import('./gruvbox_light-f28217c7-f28217c7.js'),"../../../public/themes/python/gruvchad.webp": () => import('./gruvchad-f0229d09-f0229d09.js'),"../../../public/themes/python/jellybeans.webp": () => import('./jellybeans-18220292-18220292.js'),"../../../public/themes/python/kanagawa.webp": () => import('./kanagawa-0a20707f-0a20707f.js'),"../../../public/themes/python/melange.webp": () => import('./melange-20a1152a-20a1152a.js'),"../../../public/themes/python/monekai.webp": () => import('./monekai-cda6354f-cda6354f.js'),"../../../public/themes/python/monochrome.webp": () => import('./monochrome-a97db7f2-a97db7f2.js'),"../../../public/themes/python/mountain.webp": () => import('./mountain-5298fc7c-5298fc7c.js'),"../../../public/themes/python/nightfox.webp": () => import('./nightfox-91b2b285-91b2b285.js'),"../../../public/themes/python/nightlamp.webp": () => import('./nightlamp-cc64f8a2-cc64f8a2.js'),"../../../public/themes/python/nightowl.webp": () => import('./nightowl-02e82ac4-02e82ac4.js'),"../../../public/themes/python/nord.webp": () => import('./nord-4648daee-4648daee.js'),"../../../public/themes/python/oceanic-light.webp": () => import('./oceanic-light-1b13e798-1b13e798.js'),"../../../public/themes/python/oceanic-next.webp": () => import('./oceanic-next-098697ad-098697ad.js'),"../../../public/themes/python/one_light.webp": () => import('./one_light-8a32c6df-8a32c6df.js'),"../../../public/themes/python/onedark.webp": () => import('./onedark-674c37bb-674c37bb.js'),"../../../public/themes/python/onenord.webp": () => import('./onenord-0f09c6f9-0f09c6f9.js'),"../../../public/themes/python/onenord_light.webp": () => import('./onenord_light-acd43a3f-acd43a3f.js'),"../../../public/themes/python/oxocarbon.webp": () => import('./oxocarbon-b9bac3c3-b9bac3c3.js'),"../../../public/themes/python/palenight.webp": () => import('./palenight-8628cc07-8628cc07.js'),"../../../public/themes/python/pastelDark.webp": () => import('./pastelDark-ee3d7bcd-ee3d7bcd.js'),"../../../public/themes/python/pastelbeans.webp": () => import('./pastelbeans-940ba68d-940ba68d.js'),"../../../public/themes/python/penumbra_dark.webp": () => import('./penumbra_dark-04f27228-04f27228.js'),"../../../public/themes/python/penumbra_light.webp": () => import('./penumbra_light-733f0f5b-733f0f5b.js'),"../../../public/themes/python/radium.webp": () => import('./radium-afd37f6f-afd37f6f.js'),"../../../public/themes/python/rosepine.webp": () => import('./rosepine-e5f40131-e5f40131.js'),"../../../public/themes/python/rxyhn.webp": () => import('./rxyhn-33cdb123-33cdb123.js'),"../../../public/themes/python/solarized_dark.webp": () => import('./solarized_dark-d60ed6cc-d60ed6cc.js'),"../../../public/themes/python/sweetpastel.webp": () => import('./sweetpastel-169e1605-169e1605.js'),"../../../public/themes/python/tokyodark.webp": () => import('./tokyodark-e6159bb8-e6159bb8.js'),"../../../public/themes/python/tokyonight.webp": () => import('./tokyonight-fd96af2a-fd96af2a.js'),"../../../public/themes/python/tomorrow_night.webp": () => import('./tomorrow_night-810fd10e-810fd10e.js'),"../../../public/themes/python/tundra.webp": () => import('./tundra-c708cbd3-c708cbd3.js'),"../../../public/themes/python/vscode_dark.webp": () => import('./vscode_dark-0213bcd0-0213bcd0.js'),"../../../public/themes/python/wombat.webp": () => import('./wombat-c1567970-c1567970.js'),"../../../public/themes/python/yoru.webp": () => import('./yoru-9e568325-9e568325.js')})
}, {
  lang: "javascript",
  icon: "i-skill-icons:javascript",
  images: /* #__PURE__ */ Object.assign({"../../../public/themes/javascript/aquarium.webp": () => import('./aquarium-2e058886-2e058886.js'),"../../../public/themes/javascript/ashes.webp": () => import('./ashes-4b109f9f-4b109f9f.js'),"../../../public/themes/javascript/ayu_dark.webp": () => import('./ayu_dark-2d359fb3-2d359fb3.js'),"../../../public/themes/javascript/ayu_light.webp": () => import('./ayu_light-cc5846e4-cc5846e4.js'),"../../../public/themes/javascript/bearded-arc.webp": () => import('./bearded-arc-209bbbd4-209bbbd4.js'),"../../../public/themes/javascript/blossom_light.webp": () => import('./blossom_light-d51007c0-d51007c0.js'),"../../../public/themes/javascript/catppuccin.webp": () => import('./catppuccin-616bb5fd-616bb5fd.js'),"../../../public/themes/javascript/chadracula.webp": () => import('./chadracula-7042bf3d-7042bf3d.js'),"../../../public/themes/javascript/chadtain.webp": () => import('./chadtain-ed9868f7-ed9868f7.js'),"../../../public/themes/javascript/chocolate.webp": () => import('./chocolate-c6f37894-c6f37894.js'),"../../../public/themes/javascript/dark_horizon.webp": () => import('./dark_horizon-025a762c-025a762c.js'),"../../../public/themes/javascript/decay.webp": () => import('./decay-c3a41998-c3a41998.js'),"../../../public/themes/javascript/doomchad.webp": () => import('./doomchad-8d0b8abf-8d0b8abf.js'),"../../../public/themes/javascript/everblush.webp": () => import('./everblush-6c038a3a-6c038a3a.js'),"../../../public/themes/javascript/everforest.webp": () => import('./everforest-75b5091f-75b5091f.js'),"../../../public/themes/javascript/everforest_light.webp": () => import('./everforest_light-02bd59ba-02bd59ba.js'),"../../../public/themes/javascript/falcon.webp": () => import('./falcon-b374eba2-b374eba2.js'),"../../../public/themes/javascript/gatekeeper.webp": () => import('./gatekeeper-b790a93d-b790a93d.js'),"../../../public/themes/javascript/github_dark.webp": () => import('./github_dark-38357338-38357338.js'),"../../../public/themes/javascript/github_light.webp": () => import('./github_light-0e91d9df-0e91d9df.js'),"../../../public/themes/javascript/gruvbox.webp": () => import('./gruvbox-71924be7-71924be7.js'),"../../../public/themes/javascript/gruvbox_light.webp": () => import('./gruvbox_light-9bf39a9b-9bf39a9b.js'),"../../../public/themes/javascript/gruvchad.webp": () => import('./gruvchad-11a82920-11a82920.js'),"../../../public/themes/javascript/jellybeans.webp": () => import('./jellybeans-b3339c37-b3339c37.js'),"../../../public/themes/javascript/kanagawa.webp": () => import('./kanagawa-f5417d59-f5417d59.js'),"../../../public/themes/javascript/melange.webp": () => import('./melange-215d59c6-215d59c6.js'),"../../../public/themes/javascript/monekai.webp": () => import('./monekai-028779f9-028779f9.js'),"../../../public/themes/javascript/monochrome.webp": () => import('./monochrome-2fe5dcee-2fe5dcee.js'),"../../../public/themes/javascript/mountain.webp": () => import('./mountain-2f1d2aca-2f1d2aca.js'),"../../../public/themes/javascript/nightfox.webp": () => import('./nightfox-6adda494-6adda494.js'),"../../../public/themes/javascript/nightlamp.webp": () => import('./nightlamp-ef52ddae-ef52ddae.js'),"../../../public/themes/javascript/nightowl.webp": () => import('./nightowl-c0de3ab2-c0de3ab2.js'),"../../../public/themes/javascript/nord.webp": () => import('./nord-5d381766-5d381766.js'),"../../../public/themes/javascript/oceanic-light.webp": () => import('./oceanic-light-02c5c018-02c5c018.js'),"../../../public/themes/javascript/oceanic-next.webp": () => import('./oceanic-next-93845a39-93845a39.js'),"../../../public/themes/javascript/one_light.webp": () => import('./one_light-f2b1411b-f2b1411b.js'),"../../../public/themes/javascript/onedark.webp": () => import('./onedark-18f1bba8-18f1bba8.js'),"../../../public/themes/javascript/onenord.webp": () => import('./onenord-aafde7ed-aafde7ed.js'),"../../../public/themes/javascript/onenord_light.webp": () => import('./onenord_light-52000fb4-52000fb4.js'),"../../../public/themes/javascript/oxocarbon.webp": () => import('./oxocarbon-59896541-59896541.js'),"../../../public/themes/javascript/palenight.webp": () => import('./palenight-d5a24a9e-d5a24a9e.js'),"../../../public/themes/javascript/pastelDark.webp": () => import('./pastelDark-23ed1701-23ed1701.js'),"../../../public/themes/javascript/pastelbeans.webp": () => import('./pastelbeans-c961e106-c961e106.js'),"../../../public/themes/javascript/penumbra_dark.webp": () => import('./penumbra_dark-4692c910-4692c910.js'),"../../../public/themes/javascript/penumbra_light.webp": () => import('./penumbra_light-9f6ecef4-9f6ecef4.js'),"../../../public/themes/javascript/radium.webp": () => import('./radium-ae691e37-ae691e37.js'),"../../../public/themes/javascript/rosepine.webp": () => import('./rosepine-9610b175-9610b175.js'),"../../../public/themes/javascript/rxyhn.webp": () => import('./rxyhn-4f67b566-4f67b566.js'),"../../../public/themes/javascript/solarized_dark.webp": () => import('./solarized_dark-a5860f85-a5860f85.js'),"../../../public/themes/javascript/sweetpastel.webp": () => import('./sweetpastel-ff366585-ff366585.js'),"../../../public/themes/javascript/tokyodark.webp": () => import('./tokyodark-f157bdfe-f157bdfe.js'),"../../../public/themes/javascript/tokyonight.webp": () => import('./tokyonight-aa11e76b-aa11e76b.js'),"../../../public/themes/javascript/tomorrow_night.webp": () => import('./tomorrow_night-b246c911-b246c911.js'),"../../../public/themes/javascript/tundra.webp": () => import('./tundra-54adbb1c-54adbb1c.js'),"../../../public/themes/javascript/vscode_dark.webp": () => import('./vscode_dark-8b278cc9-8b278cc9.js'),"../../../public/themes/javascript/wombat.webp": () => import('./wombat-a6efc270-a6efc270.js'),"../../../public/themes/javascript/yoru.webp": () => import('./yoru-15f24eaf-15f24eaf.js')})
}, {
  lang: "haskell",
  icon: "i-logos:haskell-icon",
  images: /* #__PURE__ */ Object.assign({"../../../public/themes/haskell/aquarium.webp": () => import('./aquarium-da679aa6-da679aa6.js'),"../../../public/themes/haskell/ashes.webp": () => import('./ashes-8e810589-8e810589.js'),"../../../public/themes/haskell/ayu_dark.webp": () => import('./ayu_dark-61a1e641-61a1e641.js'),"../../../public/themes/haskell/ayu_light.webp": () => import('./ayu_light-3c6c9bc0-3c6c9bc0.js'),"../../../public/themes/haskell/bearded-arc.webp": () => import('./bearded-arc-c0f34586-c0f34586.js'),"../../../public/themes/haskell/blossom_light.webp": () => import('./blossom_light-ae901c63-ae901c63.js'),"../../../public/themes/haskell/catppuccin.webp": () => import('./catppuccin-6a12c132-6a12c132.js'),"../../../public/themes/haskell/chadracula.webp": () => import('./chadracula-a3b1f7db-a3b1f7db.js'),"../../../public/themes/haskell/chadtain.webp": () => import('./chadtain-193cd171-193cd171.js'),"../../../public/themes/haskell/chocolate.webp": () => import('./chocolate-36af0990-36af0990.js'),"../../../public/themes/haskell/dark_horizon.webp": () => import('./dark_horizon-1ae1997b-1ae1997b.js'),"../../../public/themes/haskell/decay.webp": () => import('./decay-3a4fc51d-3a4fc51d.js'),"../../../public/themes/haskell/doomchad.webp": () => import('./doomchad-135ad42b-135ad42b.js'),"../../../public/themes/haskell/everblush.webp": () => import('./everblush-6c8104f8-6c8104f8.js'),"../../../public/themes/haskell/everforest.webp": () => import('./everforest-574bcbe0-574bcbe0.js'),"../../../public/themes/haskell/everforest_light.webp": () => import('./everforest_light-9be41589-9be41589.js'),"../../../public/themes/haskell/falcon.webp": () => import('./falcon-af4dbf93-af4dbf93.js'),"../../../public/themes/haskell/gatekeeper.webp": () => import('./gatekeeper-fbbda606-fbbda606.js'),"../../../public/themes/haskell/github_dark.webp": () => import('./github_dark-b29632b2-b29632b2.js'),"../../../public/themes/haskell/github_light.webp": () => import('./github_light-0de1c7ec-0de1c7ec.js'),"../../../public/themes/haskell/gruvbox.webp": () => import('./gruvbox-aa55cf27-aa55cf27.js'),"../../../public/themes/haskell/gruvbox_light.webp": () => import('./gruvbox_light-848a4795-848a4795.js'),"../../../public/themes/haskell/gruvchad.webp": () => import('./gruvchad-c83846bd-c83846bd.js'),"../../../public/themes/haskell/jellybeans.webp": () => import('./jellybeans-db71ccb7-db71ccb7.js'),"../../../public/themes/haskell/kanagawa.webp": () => import('./kanagawa-c19e1972-c19e1972.js'),"../../../public/themes/haskell/melange.webp": () => import('./melange-a67b71bb-a67b71bb.js'),"../../../public/themes/haskell/monekai.webp": () => import('./monekai-1a73832a-1a73832a.js'),"../../../public/themes/haskell/monochrome.webp": () => import('./monochrome-370c08e4-370c08e4.js'),"../../../public/themes/haskell/mountain.webp": () => import('./mountain-7f590371-7f590371.js'),"../../../public/themes/haskell/nightfox.webp": () => import('./nightfox-8999fb14-8999fb14.js'),"../../../public/themes/haskell/nightlamp.webp": () => import('./nightlamp-58469c69-58469c69.js'),"../../../public/themes/haskell/nightowl.webp": () => import('./nightowl-e6821b18-e6821b18.js'),"../../../public/themes/haskell/nord.webp": () => import('./nord-00ede658-00ede658.js'),"../../../public/themes/haskell/oceanic-light.webp": () => import('./oceanic-light-f9758741-f9758741.js'),"../../../public/themes/haskell/oceanic-next.webp": () => import('./oceanic-next-dca10a1c-dca10a1c.js'),"../../../public/themes/haskell/one_light.webp": () => import('./one_light-efb2753e-efb2753e.js'),"../../../public/themes/haskell/onedark.webp": () => import('./onedark-aca3bf41-aca3bf41.js'),"../../../public/themes/haskell/onenord.webp": () => import('./onenord-a18dfd17-a18dfd17.js'),"../../../public/themes/haskell/onenord_light.webp": () => import('./onenord_light-3e94076d-3e94076d.js'),"../../../public/themes/haskell/oxocarbon.webp": () => import('./oxocarbon-1ca696f1-1ca696f1.js'),"../../../public/themes/haskell/palenight.webp": () => import('./palenight-71310a19-71310a19.js'),"../../../public/themes/haskell/pastelDark.webp": () => import('./pastelDark-cc5d9763-cc5d9763.js'),"../../../public/themes/haskell/pastelbeans.webp": () => import('./pastelbeans-736b8542-736b8542.js'),"../../../public/themes/haskell/penumbra_dark.webp": () => import('./penumbra_dark-9d9b91b3-9d9b91b3.js'),"../../../public/themes/haskell/penumbra_light.webp": () => import('./penumbra_light-c965da08-c965da08.js'),"../../../public/themes/haskell/radium.webp": () => import('./radium-8231ae7c-8231ae7c.js'),"../../../public/themes/haskell/rosepine.webp": () => import('./rosepine-8c619018-8c619018.js'),"../../../public/themes/haskell/rxyhn.webp": () => import('./rxyhn-01a4a7b2-01a4a7b2.js'),"../../../public/themes/haskell/solarized_dark.webp": () => import('./solarized_dark-e477c7a9-e477c7a9.js'),"../../../public/themes/haskell/sweetpastel.webp": () => import('./sweetpastel-be2c12e9-be2c12e9.js'),"../../../public/themes/haskell/tokyodark.webp": () => import('./tokyodark-55dd251d-55dd251d.js'),"../../../public/themes/haskell/tokyonight.webp": () => import('./tokyonight-ff54e8b8-ff54e8b8.js'),"../../../public/themes/haskell/tomorrow_night.webp": () => import('./tomorrow_night-a522100c-a522100c.js'),"../../../public/themes/haskell/tundra.webp": () => import('./tundra-07c7048f-07c7048f.js'),"../../../public/themes/haskell/vscode_dark.webp": () => import('./vscode_dark-26e25e73-26e25e73.js'),"../../../public/themes/haskell/wombat.webp": () => import('./wombat-46b3d32d-46b3d32d.js'),"../../../public/themes/haskell/yoru.webp": () => import('./yoru-3a24fcd2-3a24fcd2.js')})
}, {
  lang: "c",
  icon: "i-logos:c-plusplus",
  images: /* #__PURE__ */ Object.assign({"../../../public/themes/c/aquarium.webp": () => import('./aquarium-b916962a-b916962a.js'),"../../../public/themes/c/ashes.webp": () => import('./ashes-53fc0e93-53fc0e93.js'),"../../../public/themes/c/ayu_dark.webp": () => import('./ayu_dark-67d76b0f-67d76b0f.js'),"../../../public/themes/c/ayu_light.webp": () => import('./ayu_light-2237051c-2237051c.js'),"../../../public/themes/c/bearded-arc.webp": () => import('./bearded-arc-37adf6da-37adf6da.js'),"../../../public/themes/c/blossom_light.webp": () => import('./blossom_light-334b9db3-334b9db3.js'),"../../../public/themes/c/catppuccin.webp": () => import('./catppuccin-6be758df-6be758df.js'),"../../../public/themes/c/chadracula.webp": () => import('./chadracula-2bbbe82e-2bbbe82e.js'),"../../../public/themes/c/chadtain.webp": () => import('./chadtain-0180c547-0180c547.js'),"../../../public/themes/c/chocolate.webp": () => import('./chocolate-0920d50a-0920d50a.js'),"../../../public/themes/c/dark_horizon.webp": () => import('./dark_horizon-d303d014-d303d014.js'),"../../../public/themes/c/decay.webp": () => import('./decay-332c313b-332c313b.js'),"../../../public/themes/c/doomchad.webp": () => import('./doomchad-bb983d75-bb983d75.js'),"../../../public/themes/c/everblush.webp": () => import('./everblush-483f3974-483f3974.js'),"../../../public/themes/c/everforest.webp": () => import('./everforest-710f30a9-710f30a9.js'),"../../../public/themes/c/everforest_light.webp": () => import('./everforest_light-76753f52-76753f52.js'),"../../../public/themes/c/falcon.webp": () => import('./falcon-53f0b10f-53f0b10f.js'),"../../../public/themes/c/gatekeeper.webp": () => import('./gatekeeper-0951f7e0-0951f7e0.js'),"../../../public/themes/c/github_dark.webp": () => import('./github_dark-94ef1db3-94ef1db3.js'),"../../../public/themes/c/github_light.webp": () => import('./github_light-46860402-46860402.js'),"../../../public/themes/c/gruvbox.webp": () => import('./gruvbox-2a5fd85f-2a5fd85f.js'),"../../../public/themes/c/gruvbox_light.webp": () => import('./gruvbox_light-992cd29d-992cd29d.js'),"../../../public/themes/c/gruvchad.webp": () => import('./gruvchad-b533aa5f-b533aa5f.js'),"../../../public/themes/c/jellybeans.webp": () => import('./jellybeans-659a4610-659a4610.js'),"../../../public/themes/c/kanagawa.webp": () => import('./kanagawa-bad9e08b-bad9e08b.js'),"../../../public/themes/c/melange.webp": () => import('./melange-34c617f7-34c617f7.js'),"../../../public/themes/c/monekai.webp": () => import('./monekai-fffef5bd-fffef5bd.js'),"../../../public/themes/c/monochrome.webp": () => import('./monochrome-ead21cca-ead21cca.js'),"../../../public/themes/c/mountain.webp": () => import('./mountain-1c479c88-1c479c88.js'),"../../../public/themes/c/nightfox.webp": () => import('./nightfox-d5fc1290-d5fc1290.js'),"../../../public/themes/c/nightlamp.webp": () => import('./nightlamp-1d41c9c6-1d41c9c6.js'),"../../../public/themes/c/nightowl.webp": () => import('./nightowl-ea59e9a7-ea59e9a7.js'),"../../../public/themes/c/nord.webp": () => import('./nord-5e41dc26-5e41dc26.js'),"../../../public/themes/c/oceanic-light.webp": () => import('./oceanic-light-af0b8dff-af0b8dff.js'),"../../../public/themes/c/oceanic-next.webp": () => import('./oceanic-next-15490b53-15490b53.js'),"../../../public/themes/c/one_light.webp": () => import('./one_light-863d6179-863d6179.js'),"../../../public/themes/c/onedark.webp": () => import('./onedark-317988ad-317988ad.js'),"../../../public/themes/c/onenord.webp": () => import('./onenord-fa0019da-fa0019da.js'),"../../../public/themes/c/onenord_light.webp": () => import('./onenord_light-d5cb1e65-d5cb1e65.js'),"../../../public/themes/c/oxocarbon.webp": () => import('./oxocarbon-cfd69e78-cfd69e78.js'),"../../../public/themes/c/palenight.webp": () => import('./palenight-12fdd8eb-12fdd8eb.js'),"../../../public/themes/c/pastelDark.webp": () => import('./pastelDark-9610068a-9610068a.js'),"../../../public/themes/c/pastelbeans.webp": () => import('./pastelbeans-a0c94666-a0c94666.js'),"../../../public/themes/c/penumbra_dark.webp": () => import('./penumbra_dark-8b78d722-8b78d722.js'),"../../../public/themes/c/penumbra_light.webp": () => import('./penumbra_light-87458ffc-87458ffc.js'),"../../../public/themes/c/radium.webp": () => import('./radium-4d3ef110-4d3ef110.js'),"../../../public/themes/c/rosepine.webp": () => import('./rosepine-2d705075-2d705075.js'),"../../../public/themes/c/rxyhn.webp": () => import('./rxyhn-24d09db1-24d09db1.js'),"../../../public/themes/c/solarized_dark.webp": () => import('./solarized_dark-f9c3c97e-f9c3c97e.js'),"../../../public/themes/c/sweetpastel.webp": () => import('./sweetpastel-8d7345b6-8d7345b6.js'),"../../../public/themes/c/tokyodark.webp": () => import('./tokyodark-1e063202-1e063202.js'),"../../../public/themes/c/tokyonight.webp": () => import('./tokyonight-677d56d0-677d56d0.js'),"../../../public/themes/c/tomorrow_night.webp": () => import('./tomorrow_night-793b7670-793b7670.js'),"../../../public/themes/c/tundra.webp": () => import('./tundra-c783375f-c783375f.js'),"../../../public/themes/c/vscode_dark.webp": () => import('./vscode_dark-ac0c57f5-ac0c57f5.js'),"../../../public/themes/c/wombat.webp": () => import('./wombat-542317be-542317be.js'),"../../../public/themes/c/yoru.webp": () => import('./yoru-75392de4-75392de4.js')})
}, {
  lang: "lua",
  icon: "i-logos:lua dark:i-skill-icons:lua-light",
  images: /* #__PURE__ */ Object.assign({"../../../public/themes/lua/aquarium.webp": () => import('./aquarium-b521589a-b521589a.js'),"../../../public/themes/lua/ashes.webp": () => import('./ashes-4959e784-4959e784.js'),"../../../public/themes/lua/ayu_dark.webp": () => import('./ayu_dark-f0762474-f0762474.js'),"../../../public/themes/lua/ayu_light.webp": () => import('./ayu_light-c435c5ad-c435c5ad.js'),"../../../public/themes/lua/bearded-arc.webp": () => import('./bearded-arc-d5c3745f-d5c3745f.js'),"../../../public/themes/lua/blossom_light.webp": () => import('./blossom_light-aa17213e-aa17213e.js'),"../../../public/themes/lua/catppuccin.webp": () => import('./catppuccin-fa94ce1d-fa94ce1d.js'),"../../../public/themes/lua/chadracula.webp": () => import('./chadracula-c3f08042-c3f08042.js'),"../../../public/themes/lua/chadtain.webp": () => import('./chadtain-652c9657-652c9657.js'),"../../../public/themes/lua/chocolate.webp": () => import('./chocolate-80865f4a-80865f4a.js'),"../../../public/themes/lua/dark_horizon.webp": () => import('./dark_horizon-819d8091-819d8091.js'),"../../../public/themes/lua/decay.webp": () => import('./decay-f90b426d-f90b426d.js'),"../../../public/themes/lua/doomchad.webp": () => import('./doomchad-e46f6741-e46f6741.js'),"../../../public/themes/lua/everblush.webp": () => import('./everblush-1655f06a-1655f06a.js'),"../../../public/themes/lua/everforest.webp": () => import('./everforest-47922f42-47922f42.js'),"../../../public/themes/lua/everforest_light.webp": () => import('./everforest_light-1f508990-1f508990.js'),"../../../public/themes/lua/falcon.webp": () => import('./falcon-045235de-045235de.js'),"../../../public/themes/lua/gatekeeper.webp": () => import('./gatekeeper-2ba46cc7-2ba46cc7.js'),"../../../public/themes/lua/github_dark.webp": () => import('./github_dark-379a595f-379a595f.js'),"../../../public/themes/lua/github_light.webp": () => import('./github_light-cec13f3c-cec13f3c.js'),"../../../public/themes/lua/gruvbox.webp": () => import('./gruvbox-fd9fffef-fd9fffef.js'),"../../../public/themes/lua/gruvbox_light.webp": () => import('./gruvbox_light-8ffbb3d4-8ffbb3d4.js'),"../../../public/themes/lua/gruvchad.webp": () => import('./gruvchad-585fb557-585fb557.js'),"../../../public/themes/lua/jellybeans.webp": () => import('./jellybeans-e3df097d-e3df097d.js'),"../../../public/themes/lua/kanagawa.webp": () => import('./kanagawa-b48a7f0a-b48a7f0a.js'),"../../../public/themes/lua/melange.webp": () => import('./melange-df10821d-df10821d.js'),"../../../public/themes/lua/monekai.webp": () => import('./monekai-d847752d-d847752d.js'),"../../../public/themes/lua/monochrome.webp": () => import('./monochrome-d96c8369-d96c8369.js'),"../../../public/themes/lua/mountain.webp": () => import('./mountain-b0b13df8-b0b13df8.js'),"../../../public/themes/lua/nightfox.webp": () => import('./nightfox-4d7d636e-4d7d636e.js'),"../../../public/themes/lua/nightlamp.webp": () => import('./nightlamp-5d839437-5d839437.js'),"../../../public/themes/lua/nightowl.webp": () => import('./nightowl-ce6cccde-ce6cccde.js'),"../../../public/themes/lua/nord.webp": () => import('./nord-e4e6b31d-e4e6b31d.js'),"../../../public/themes/lua/oceanic-light.webp": () => import('./oceanic-light-990f2ae9-990f2ae9.js'),"../../../public/themes/lua/oceanic-next.webp": () => import('./oceanic-next-9351a78c-9351a78c.js'),"../../../public/themes/lua/one_light.webp": () => import('./one_light-55548645-55548645.js'),"../../../public/themes/lua/onedark.webp": () => import('./onedark-28451fd0-28451fd0.js'),"../../../public/themes/lua/onenord.webp": () => import('./onenord-ad6fe651-ad6fe651.js'),"../../../public/themes/lua/onenord_light.webp": () => import('./onenord_light-a287763a-a287763a.js'),"../../../public/themes/lua/oxocarbon.webp": () => import('./oxocarbon-befab3ab-befab3ab.js'),"../../../public/themes/lua/palenight.webp": () => import('./palenight-fee54539-fee54539.js'),"../../../public/themes/lua/pastelDark.webp": () => import('./pastelDark-e2fa4b07-e2fa4b07.js'),"../../../public/themes/lua/pastelbeans.webp": () => import('./pastelbeans-70270a4f-70270a4f.js'),"../../../public/themes/lua/penumbra_dark.webp": () => import('./penumbra_dark-1395ed56-1395ed56.js'),"../../../public/themes/lua/penumbra_light.webp": () => import('./penumbra_light-9c3d8f4b-9c3d8f4b.js'),"../../../public/themes/lua/radium.webp": () => import('./radium-a5d38deb-a5d38deb.js'),"../../../public/themes/lua/rosepine.webp": () => import('./rosepine-78d89bd2-78d89bd2.js'),"../../../public/themes/lua/rxyhn.webp": () => import('./rxyhn-b93cccc6-b93cccc6.js'),"../../../public/themes/lua/solarized_dark.webp": () => import('./solarized_dark-a76121e4-a76121e4.js'),"../../../public/themes/lua/sweetpastel.webp": () => import('./sweetpastel-e13940b3-e13940b3.js'),"../../../public/themes/lua/tokyodark.webp": () => import('./tokyodark-8ce22554-8ce22554.js'),"../../../public/themes/lua/tokyonight.webp": () => import('./tokyonight-02522107-02522107.js'),"../../../public/themes/lua/tomorrow_night.webp": () => import('./tomorrow_night-9f369eaa-9f369eaa.js'),"../../../public/themes/lua/tundra.webp": () => import('./tundra-176bb82a-176bb82a.js'),"../../../public/themes/lua/vscode_dark.webp": () => import('./vscode_dark-2ebb21f3-2ebb21f3.js'),"../../../public/themes/lua/wombat.webp": () => import('./wombat-308756bc-308756bc.js'),"../../../public/themes/lua/yoru.webp": () => import('./yoru-b9d25413-b9d25413.js')})
}];

// remove "../../public" from image pathnames
languages.map((lang, i) => {
  const lang_imglist = lang.images;
  let arr = [];
  Object.keys(lang_imglist).map(key => {
    arr.push(key.replace("../../public", ""));
  });
  languages[i].images = arr;
});
const [activeLang, setLangOpt] = createSignal("python");
const [activeImages, setImages] = createSignal(languages[0].images);
const [galleryShown, setGalleryStatus] = createSignal(true);
const [zoomedImg, setZoomedImgPath] = createSignal("");
const [gridMode, setGridMode] = createSignal(true);
function LangListBtns() {
  return ssr(_tmpl$$5, ssrHydrationKey(), escape(languages.map(x => {
    return ssr(_tmpl$2$4, ssrHydrationKey(), ssrAttribute("border", activeLang() == x.lang ? "2 solid blue-5" : "", false), ssrAttribute("class", escape(x.icon, true), false), escape(x.lang));
  })), gridMode() && _tmpl$3$2[0] + ssrHydrationKey() + _tmpl$3$2[1], !gridMode() && _tmpl$4$1[0] + ssrHydrationKey() + _tmpl$4$1[1]);
}
function Gallery() {
  return ssr(_tmpl$5, ssrHydrationKey(), `grid gap-6 [&_*]:max-w-[100%] [&_*]:h-auto ${gridMode() ? "lg:grid-cols-3 2xl:grid-cols-4" : ""}`, escape(activeImages().map(key => {
    const filename = key?.split("/").pop();
    const theme = filename.split(".")[0];
    const theme_type = theme.includes("light") ? "light" : "dark";
    const label_position = gridMode() ? "top-0 right-0 rounded-br-none rounded-tl-none" : "bottom-0 left-1/2 transform -translate-x-1/2 rounded-b-none";
    const label_color = theme_type == "dark" ? "bg-white-1 text-dark-3" : " bg-dark-4 text-white-1";
    return ssr(_tmpl$6, ssrHydrationKey(), ssrAttribute("src", escape(key, true), false), `absolute vertCentered justify-between ${escape(label_position, true)} ${escape(label_color, true)}`, escape(theme));
  })));
}
function ImageZoomed() {
  return ssr(_tmpl$7, ssrHydrationKey(), ssrAttribute("src", escape(zoomedImg(), true), false));
}
function Themes() {
  return ssr(_tmpl$8, ssrHydrationKey(), !galleryShown() && escape(createComponent(ImageZoomed, {})), galleryShown() && ssr(_tmpl$9, ssrHydrationKey(), escape(createComponent(LangListBtns, {})), escape(createComponent(Gallery, {}))));
}

const _tmpl$$4 = ["<div", " p=\"5 xl:10\" class=\"box mx-auto flex flex-col-reverse xl:grid xl:grid-cols-[1fr_auto]\"><div id=\"newsContent\">", "</div><!--#-->", "<!--/--></div>"];
function NewsPage(props) {
  return ssr(_tmpl$$4, ssrHydrationKey(), escape(props.children), contextHeadings.length > 1 && escape(createComponent(ContextTitles, {})));
}

function Items() {
  return createComponent(NewsPage, {
    get children() {
      return createComponent(Outlet, {});
    }
  });
}

const _tmpl$$3 = ["<u", ">NvDash</u>"],
  _tmpl$2$3 = ["<div", " id=\"DocContent\" class=\"news\"><!--#-->", "<!--/--><!--#-->", "<!--/--><div my-10><!--#-->", "<!--/--><!--#-->", "<!--/--></div><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><div class=\"iframe-container\"><iframe src=\"https://www.youtube.com/embed/xytzreFq_us\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allow=\"fullscreen\"></iframe></div><br><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><div class=\"iframe-container\"><iframe src=\"https://www.youtube.com/embed/IljDD4cjgKc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allow=\"fullscreen;\"></iframe></div><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--></div>"];
const meta$1 = {
  heading: "NvChad v2.0 released!",
  details: "This release brings new UI features in our ui plugin & usage of lazy.nvim. Improvements in startuptime, using base46 theme plugin as a compiler for our themes!",
  cover: "v2.0.webp"
};
function _createMdxContent$1(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    img: "img",
    h2: "h2",
    pre: "pre",
    code: "code",
    span: "span",
    strong: "strong",
    ul: "ul",
    li: "li",
    a: "a"
  }, M(), props.components);
  return ssr(_tmpl$2$3, ssrHydrationKey(), escape(createComponent(_components.h1, {
    children: "# Announcing NvChad v2.0"
  })), escape(createComponent(_components.p, {
    get children() {
      return createComponent(_components.img, {
        src: "/news/v2.0.webp",
        alt: "v2.0 poster"
      });
    }
  })), escape(createComponent(_components.h2, {
    children: "Changelog"
  })), escape(createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return ["\n## Added\n\n- Lazy.nvim ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "package"
          }), " manager\n- NvDash ( dashboard ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "module"
          }), " )\n- Multiple statusline themes : vscode, vscode_colored, minimal. \n- Some cmp styles : flat_light, flat_dark, atom, atom_colored\n- NvCheatsheet, a mappings cheatsheet with ", createComponent(_components.span, {
            className: "hljs-number",
            children: "2"
          }), " themes ( grid & simple )\n- Ported ", createComponent(_components.span, {
            className: "hljs-number",
            children: "13"
          }), " new themes to base46 \n- Made base46 generate compiled cache of highlight groups.\n- Make some chadrc ui options auto-reloadable.\n- Added types ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "for"
          }), " chadrc options.\n\n\n## Changed \n\n- Made nvchad_ui options overridable from chadrc itself.\n- Refactored our telescope extensions, made them more minimal.\n- override_opts is renamed to opts ( cuz lazy.nvim handles it now )\n- M.plugins ", createComponent(_components.span, {
            className: "hljs-keyword",
            children: "in"
          }), " chadrc now expects only a ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "string"
          }), "\n\n\n## Removed\n\n- Alpha.nvim dashboard plugin\n- Packer.nvim ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "package"
          }), " manager\n- Impatient.nvim as lazy.nvim handles cache part too.\n\n"];
        }
      });
    }
  })), escape(createComponent(_components.p, {
    get children() {
      return ["NvChad ", createComponent(_components.code, {
        children: "v2.0"
      }), ", a new release is now available, after all these months! From this release onwards, NvChad will take care about stability & exciting featuers at the same time."];
    }
  })), escape(createComponent(_components.p, {
    get children() {
      return ["Meaning that each release ", createComponent(_components.strong, {
        children: "( version like v3.0 v4.0 etc )"
      }), " will be maintained in their own separate branches.  New versions will release based on new features, bug fixes will still be done in older versions of NvChad."];
    }
  })), escape(createComponent(_components.p, {
    children: "So Whats new in this release?"
  })), escape(createComponent(_components.h2, {
    children: "Using lazy.nvim"
  })), escape(createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "Lazy.nvim is used as the package manager, replacing packer so obviously it has minor syntax changes."
      }), "\n"];
    }
  })), escape(createComponent(_components.h2, {
    children: "Cachifying base46"
  })), escape(createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return ["\n", createComponent(_components.p, {
            children: "Before base46 used to do some sort of computations like checking for user define highlight groups, highlight groups overrides, theme specific overrides i.e if user has changed colors in specific themes etc and then it would generate a final list of all highlight groups -> then load them."
          }), "\n"];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["\n", createComponent(_components.p, {
            children: "Now it base46 does all the computations beforehand ( when its compile module runs ) and then generates highlight group files in the form of bytecode which is faster to run."
          }), "\n"];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["\n", createComponent(_components.p, {
            children: "Now you can live-reload some parts of the UI table in chadrc."
          }), "\n"];
        }
      }), "\n"];
    }
  })), escape(createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return ["13 New themes have been added so now we in total have around 57 ~ themes! Check the ", createComponent(_components.a, {
            href: "/themes",
            get children() {
              return createComponent(_components.code, {
                children: "theme page"
              });
            }
          }), " for more details"];
        }
      }), "\n"];
    }
  })), escape(createComponent(_components.h2, {
    children: "NvDash"
  })), escape(createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "Nvdash is NvChad's minimal dashboard module, It's very simple at this stage and will get more features in the future!"
      }), "\n", createComponent(_components.li, {
        get children() {
          return [ssr(_tmpl$$3, ssrHydrationKey()), " is the command"];
        }
      }), "\n"];
    }
  })), escape(createComponent(_components.p, {
    get children() {
      return createComponent(_components.img, {
        src: "/features/nvdash.webp",
        alt: "nvdash"
      });
    }
  })), escape(createComponent(_components.h2, {
    children: "New cmp styles"
  })), escape(createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "Now we have around 4-5 cmp styles, you can remove their icons, cmp_kind text directly from chadrc itself now."
      }), "\n"];
    }
  })), escape(createComponent(_components.p, {
    get children() {
      return createComponent(_components.img, {
        src: "/features/cmp.webp",
        alt: "nvim-cmp"
      });
    }
  })), escape(createComponent(_components.h2, {
    children: "Statusline themes"
  })), escape(createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "3 new statusline themes have been added! ( the first one is the default )"
      }), "\n"];
    }
  })), escape(createComponent(_components.p, {
    get children() {
      return createComponent(_components.img, {
        src: "/features/statuslines.webp",
        alt: "nvchad statusline"
      });
    }
  })), escape(createComponent(_components.h2, {
    children: "NvCheatsheet"
  })), escape(createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "Auto-generated mappings cheatsheet module which has a similar layout to that of CSS's masonry layout."
      }), "\n", createComponent(_components.li, {
        children: "It will list both default & user keys and their descriptions."
      }), "\n", createComponent(_components.li, {
        children: "It has 2 themes ( grid & simple )"
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["Command to toggle it : ", createComponent(_components.code, {
            children: "NvCheatsheet"
          }), " and mapping ", createComponent(_components.code, {
            children: "leader + ch"
          })];
        }
      }), "\n"];
    }
  })), escape(createComponent(_components.p, {
    get children() {
      return createComponent(_components.img, {
        src: "/features/nvcheatsheet.webp",
        alt: "nvcheatsheet"
      });
    }
  })), escape(createComponent(_components.h2, {
    children: "Chadrc completion"
  })), escape(createComponent(_components.p, {
    get children() {
      return createComponent(_components.img, {
        src: "/features/chadrc_types.webp",
        alt: "chadrc types"
      });
    }
  })), escape(createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "Big thanks to @Lucario387 for adding types to chadrc options. This will get you autocompletions for all nvchad options in the chadrc file!"
      }), "\n"];
    }
  })), escape(createComponent(_components.h2, {
    children: "Example_config"
  })), escape(createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return ["To have a custom config quickstart, you can check the ", createComponent(_components.a, {
            href: "https://github.com/NvChad/example_config/",
            children: "example_config"
          }), ". If you want something featureful, check its ", createComponent(_components.code, {
            children: "v2.0_featureful"
          }), " branch."];
        }
      }), "\n"];
    }
  })), escape(createComponent(_components.h2, {
    children: "Notice To v1.0 users"
  })), escape(createComponent(_components.p, {
    children: "As there's lazy.nvim being used in this release so this might be a breaking change for you, but dont worry, you can still use old nvchad version and slowly migrate to v2.0."
  })), escape(createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return ["Migration changes are mentioned in this ", createComponent(_components.a, {
            href: "/news/v2.0_migration",
            children: "section"
          }), "."];
        }
      }), "\n"];
    }
  })));
}
function MDXContent$1(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, M(), props.components);
  return MDXLayout ? createComponent(MDXLayout, mergeProps(props, {
    get children() {
      return createComponent(_createMdxContent$1, props);
    }
  })) : _createMdxContent$1(props);
}

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: MDXContent$1,
  meta: meta$1
}, Symbol.toStringTag, { value: 'Module' }));

const _tmpl$$2 = ["<u", ">", "</u>"],
  _tmpl$2$2 = ["<div", " id=\"DocContent\" class=\"news\"><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><br><!--#-->", "<!--/--><!--#-->", "<!--/--><br><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--></div>"];
const meta = {
  heading: "Breaking changes in v2.0",
  details: "NvChad's v2.0 uses lazy.nvim instead of packer so there are slight differences in the plugin related syntax & some commands have been removed.",
  cover: "v2.0_migration.svg"
};
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    img: "img",
    ul: "ul",
    li: "li",
    h2: "h2",
    code: "code",
    strong: "strong",
    pre: "pre",
    span: "span",
    a: "a"
  }, M(), props.components);
  return ssr(_tmpl$2$2, ssrHydrationKey(), escape(createComponent(_components.h1, {
    children: "# Breaking changes in v2.0"
  })), escape(createComponent(_components.p, {
    get children() {
      return createComponent(_components.img, {
        src: "/news/v2.0_migration.svg",
        alt: "v2.0 poster"
      });
    }
  })), escape(createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return ["\n", createComponent(_components.p, {
            children: "Take your own time in migrating to v2.0.  This release is in a separate branch so technically you can still use old nvchad."
          }), "\n"];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["\n", createComponent(_components.p, {
            children: "To use v2.0 , you have to delete all old neovim dirs ( backup custom dir ) and then re-install nvchad again"
          }), "\n"];
        }
      }), "\n"];
    }
  })), escape(createComponent(_components.h2, {
    children: "Lazy.nvim"
  })), escape(createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "This release uses lazy.nvim instead of packer.nvim for plugin management."
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["The ", createComponent(_components.code, {
            children: "M.plugins"
          }), " variable in chadrc expects a string now instead of table."];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["The string should be path of your file which returns a table, example : ", ssr(_tmpl$$2, ssrHydrationKey(), escape(createComponent(_components.strong, {
            children: "custom/plugins.lua"
          })))];
        }
      }), "\n"];
    }
  })), escape(createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-comment",
            children: "--  before "
          }), "\nM.plugins = ", createComponent(_components.span, {
            className: "hljs-built_in",
            children: "require"
          }), " ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"custom.plugins\""
          }), "\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "--  now"
          }), "\nM.plugins = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"custom.plugins\""
          }), "\n"];
        }
      });
    }
  })), escape(createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return ["\n", createComponent(_components.p, {
            children: "Rename your custom plugins dir to something else, like configs etc. It shouldnt be \"plugins\" ( as per our example )  and update the path in your custom plugins table."
          }), "\n"];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["\n", createComponent(_components.p, {
            children: "Also old plugin syntax has some slight changes now ( as per lazy.nvim's syntax )"
          }), "\n"];
        }
      }), "\n"];
    }
  })), escape(createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- before"
          }), "\n[", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"some plugin\""
          }), " ] = { options } \n \n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- now"
          }), "\n{\n  ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"some plugin\""
          }), ",\n   options\n}\n"];
        }
      });
    }
  })), escape(createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return ["Check ", createComponent(_components.a, {
            href: "https://github.com/folke/lazy.nvim#examples",
            children: "lazy.nvim docs"
          }), " to know how it works & its syntax."];
        }
      }), "\n"];
    }
  })), escape(createComponent(_components.h2, {
    children: "Override opts"
  })), escape(createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.code, {
            children: "override_opts"
          }), " which was used to overridin default plugin configs is now ", createComponent(_components.code, {
            children: "opts"
          })];
        }
      }), "\n"];
    }
  })), escape(createComponent(_components.h2, {
    children: "NvChad ui options"
  })), escape(createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "These options can now be directly changed from chadrc file"
      }), "\n"];
    }
  })), escape(createComponent(_components.pre, {
    get children() {
      return createComponent(_components.code, {
        className: "hljs language-lua",
        get children() {
          return [createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- before "
          }), "\n[", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"NvChad/ui\""
          }), "] = {\n     override_opts = {\n         statusline = {\n             separator_style  = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"round\""
          }), " \n          }\n     }\n}\n\n", createComponent(_components.span, {
            className: "hljs-comment",
            children: "-- now "
          }), "\nM.ui = {\n    statusline = {\n         separator_style = ", createComponent(_components.span, {
            className: "hljs-string",
            children: "\"round\""
          }), "\n     }\n}\n"];
        }
      });
    }
  })), escape(createComponent(_components.h2, {
    children: "Removed Alpha-nvim"
  })), escape(createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "Its replaced by our own dashboard module which has a simple config & is lightweight."
      }), "\n", createComponent(_components.li, {
        get children() {
          return ["Check the NvDash config in the ", createComponent(_components.a, {
            href: "https://github.com/NvChad/NvChad/blob/v2.0/lua/core/default_config.lua#L50",
            children: "default_config file"
          })];
        }
      }), "\n"];
    }
  })), escape(createComponent(_components.h2, {
    children: "Removed commands & mappings"
  })), escape(createComponent(_components.p, {
    get children() {
      return ["Some mappings and commands have been removed. However their functions still exist, just make your own commands/mappings for them. Read our ", createComponent(_components.a, {
        href: "http://nvchad.com/#/docs/api",
        children: "api functions docs"
      }), "."];
    }
  })), escape(createComponent(_components.p, {
    get children() {
      return createComponent(_components.strong, {
        children: "Removed commands"
      });
    }
  })), escape(createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        children: "Tbufpick , TbufLeft, TbufRight"
      }), "\n"];
    }
  })), escape(createComponent(_components.p, {
    get children() {
      return createComponent(_components.strong, {
        children: "Removed mappings"
      });
    }
  })), escape(createComponent(_components.ul, {
    get children() {
      return ["\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.code, {
            children: "\\"
          }), " ( to trigger tbufpick)."];
        }
      }), "\n", createComponent(_components.li, {
        get children() {
          return [createComponent(_components.code, {
            children: "leader + tt"
          }), " ( for toggling themes )"];
        }
      }), "\n"];
    }
  })));
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, M(), props.components);
  return MDXLayout ? createComponent(MDXLayout, mergeProps(props, {
    get children() {
      return createComponent(_createMdxContent, props);
    }
  })) : _createMdxContent(props);
}

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: MDXContent,
  meta
}, Symbol.toStringTag, { value: 'Module' }));

const toMeta = (v) =>
  Object.entries(v).map(([link, mod]) => ({
    link: link.replace(/^\.\/|\.mdx$/g, ""),
    ...mod.meta,
  }));

const news = toMeta(/* #__PURE__ */ Object.assign({"./v2.0.mdx": __vite_glob_0_0,"./v2.0_migration.mdx": __vite_glob_0_1}));

const _tmpl$$1 = ["<div", " m=\"y-5 xl:y-10 x-auto\" px-3 max=\"w-[1700px]\"><div grid gap-5 class=\"md:grid-cols-2 2xl:grid-cols-3\">", "</div></div>"],
  _tmpl$2$1 = ["<button", " bg-blue-6 text-white-1 dark:bg-blue-3 dark:text-dark-1 px-5>read more</button>"],
  _tmpl$3$1 = ["<div", " border=\"slate 0 dark:dark-4 solid\" class=\"shadow-xl flex flex-col gap-4 items-start\" bg=\"dark:dark-3\"><img src=\"", "\" w-full rounded-t-lg loading=\"lazy\"><div h-full flex flex-col gap-10 justify-between p-10 pt-5><div><h2 class=\"m-0\" pb-5>", "</h2><p text-lg class=\"m-0 p-0\">", "</p></div><!--#-->", "<!--/--></div></div>"];
function News() {
  return ssr(_tmpl$$1, ssrHydrationKey(), escape(news.map(x => {
    /* card */
    return ssr(_tmpl$3$1, ssrHydrationKey(), `/news/${escape(x.cover, true)}`, escape(x.heading), escape(x.details), escape(createComponent(A, {
      get href() {
        return x.link;
      },
      get children() {
        return ssr(_tmpl$2$1, ssrHydrationKey());
      }
    })));
  })));
}

/// <reference path="../server/types.tsx" />

const fileRoutes = [{
  component: Index,
  path: "",
  children: [{
    component: NotFound,
    path: "/*404"
  }, {
    component: Docs,
    path: "/docs",
    children: [{
      component: MDXContent$i,
      path: "/api"
    }, {
      component: MDXContent$h,
      path: "/contribute"
    }, {
      component: MDXContent$g,
      path: "/credits"
    }, {
      component: MDXContent$f,
      path: "/debugging-config"
    }, {
      component: MDXContent$e,
      path: "/features"
    }, {
      component: MDXContent$d,
      path: "/config/format_lint"
    }, {
      component: MDXContent$c,
      path: "/config/lsp"
    }, {
      component: MDXContent$b,
      path: "/config/mappings"
    }, {
      component: MDXContent$a,
      path: "/config/nvchad_ui"
    }, {
      component: MDXContent$9,
      path: "/config/plugins"
    }, {
      component: MDXContent$8,
      path: "/config/snippets"
    }, {
      component: MDXContent$7,
      path: "/config/syntax"
    }, {
      component: MDXContent$6,
      path: "/config/theming"
    }, {
      component: MDXContent$5,
      path: "/config/walkthrough"
    }, {
      component: MDXContent$4,
      path: "/quickstart/install"
    }, {
      component: MDXContent$3,
      path: "/quickstart/learn-lua"
    }, {
      component: MDXContent$2,
      path: "/quickstart/post-install"
    }]
  }, {
    component: Home,
    path: "/"
  }, {
    component: Themes,
    path: "/themes"
  }, {
    component: Items,
    path: "/news",
    children: [{
      component: MDXContent$1,
      path: "/v2.0"
    }, {
      component: MDXContent,
      path: "/v2.0_migration"
    }]
  }, {
    component: News,
    path: "/news/"
  }]
}];

/**
 * Routes are the file system based routes, used by Solid App Router to show the current page according to the URL.
 */

const FileRoutes = () => {
  return fileRoutes;
};

const _tmpl$ = ["<link", " rel=\"icon\" type=\"image/svg+xml\" href=\"/logo.svg\">"],
  _tmpl$2 = ["<link", " rel=\"preconnect\" href=\"https://fonts.googleapis.com\">"],
  _tmpl$3 = ["<link", " rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin=\"\">"],
  _tmpl$4 = ["<link", " href=\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap\" rel=\"stylesheet\">"];
function Root() {
  return createComponent(Html, {
    lang: "en",
    get children() {
      return [createComponent(Head, {
        get children() {
          return [createComponent(Meta$1, {
            name: "description",
            content: "NvChad is a blazing fast neovim framework with solid defaults and beautiful UI"
          }), ssr(_tmpl$, ssrHydrationKey()), ssr(_tmpl$2, ssrHydrationKey()), ssr(_tmpl$3, ssrHydrationKey()), ssr(_tmpl$4, ssrHydrationKey()), createComponent(Title, {
            children: "NvChad"
          }), createComponent(Meta$1, {
            charset: "utf-8"
          }), createComponent(Meta$1, {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
          })];
        }
      }), createComponent(Body, {
        get children() {
          return [createComponent(Suspense, {
            get children() {
              return createComponent(ErrorBoundary, {
                get children() {
                  return createComponent(Routes, {
                    get children() {
                      return createComponent(FileRoutes, {});
                    }
                  });
                }
              });
            }
          }), createComponent(Scripts, {})];
        }
      })];
    }
  });
}

const rootData = Object.values(/* #__PURE__ */ Object.assign({

}))[0];
const dataFn = rootData ? rootData.default : undefined;

/** Function responsible for listening for streamed [operations]{@link Operation}. */

/** Input parameters for to an Exchange factory function. */

/** Function responsible for receiving an observable [operation]{@link Operation} and returning a [result]{@link OperationResult}. */

/** This composes an array of Exchanges into a single ExchangeIO function */
const composeMiddleware = exchanges => ({
  forward
}) => exchanges.reduceRight((forward, exchange) => exchange({
  forward
}), forward);
function createHandler(...exchanges) {
  const exchange = composeMiddleware(exchanges);
  return async event => {
    return await exchange({
      forward: async op => {
        return new Response(null, {
          status: 404
        });
      }
    })(event);
  };
}
function StartRouter(props) {
  return createComponent(Router, props);
}
const docType = ssr("<!DOCTYPE html>");
function StartServer({
  event
}) {
  const parsed = new URL(event.request.url);
  const path = parsed.pathname + parsed.search;

  // @ts-ignore
  sharedConfig.context.requestContext = event;
  return createComponent(ServerContext.Provider, {
    value: event,
    get children() {
      return createComponent(MetaProvider, {
        get tags() {
          return event.tags;
        },
        get children() {
          return createComponent(StartRouter, {
            url: path,
            get out() {
              return event.routerContext;
            },
            location: path,
            get prevLocation() {
              return event.prevUrl;
            },
            data: dataFn,
            routes: fileRoutes,
            get children() {
              return [docType, createComponent(Root, {})];
            }
          });
        }
      });
    }
  });
}

const entryServer = createHandler(renderAsync(event => createComponent(StartServer, {
  event: event
})));

const MAX_REDIRECTS = 10;
async function handleRequest(req) {
  req.headers = {};
  req.method = "GET";
  const webRes = await entryServer({
    request: createRequest(req),
    env: { manifest }
  });
  return webRes;
}

var server = async req => {
  let webRes = await handleRequest(req);
  if (webRes.status === 200) {
    return webRes.text();
  } else if (webRes.status === 302) {
    let redirects = 1;
    while (redirects < MAX_REDIRECTS) {
      webRes = await handleRequest({ url: webRes.headers.get("location") });
      if (webRes.status === 200) {
        return webRes.text();
      } else if (webRes.status === 302) {
        redirects++;
      } else {
        return "<h1>Error</h1>";
      }
    }
  }
  return webRes.text();
};

export { server as default };
