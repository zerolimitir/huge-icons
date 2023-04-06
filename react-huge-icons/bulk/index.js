'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var SvgAboutPhone = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M5 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.25 19a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75ZM12 6.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M13 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' })));
};
var ForwardRef$au = React.forwardRef(SvgAboutPhone);

var SvgAccessibility = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M13.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.18 5.272a.75.75 0 0 0-.36 1.456c1.944.48 3.597.793 5.18.935v4.29l-.744 5.954a.75.75 0 1 0 1.488.186L11.506 12h.988l.762 6.093a.75.75 0 0 0 1.488-.186L14 11.955V7.65c1.564-.147 3.221-.457 5.173-.92a.75.75 0 0 0-.346-1.46c-2.773.659-4.854.98-6.894.98-2.038.001-4.073-.317-6.754-.978Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$at = React.forwardRef(SvgAccessibility);

var SvgActivity = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.017 7.25c.29.007.55.18.668.445l3.279 7.377 1.34-3.35A.75.75 0 0 1 16 11.25h2a.75.75 0 0 1 0 1.5h-1.492l-1.812 4.529a.75.75 0 0 1-1.381.026L9.96 9.757l-1.29 2.578a.75.75 0 0 1-.67.415H6a.75.75 0 0 1 0-1.5h1.536L9.33 7.665a.75.75 0 0 1 .688-.415Z', clipRule: 'evenodd' })));
};
var ForwardRef$as = React.forwardRef(SvgActivity);

var SvgAddTo = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 19V9a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 8h7.5a1 1 0 0 1 .8.4l1.5 2A1 1 0 0 1 21 12h-5.5a1 1 0 0 1-.8-.4L12 8Zm0 0H4.5a1 1 0 0 0-.8.4l-1.5 2A1 1 0 0 0 3 12h5.5a1 1 0 0 0 .8-.4L12 8Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm11.25 4.19-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0L14.53 4.53a.75.75 0 0 0-1.06-1.06l-.72.72V2a.75.75 0 0 0-1.5 0v2.19Z', clipRule: 'evenodd' })));
};
var ForwardRef$ar = React.forwardRef(SvgAddTo);

var SvgAirPlane = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm16.684 20.306-1.887-2.564a2.029 2.029 0 0 1-.402-1.204V4.395a2.395 2.395 0 0 0-4.79 0v12.143c0 .428-.14.847-.402 1.204l-1.887 2.564c-.681.927.434 2.071 1.532 1.573l2.08-.943a2.618 2.618 0 0 1 2.143 0l2.081.943c1.099.498 2.213-.646 1.532-1.573Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm8.479 8.064-4.914 2.784c-1.02.578-.568 2.005.635 2.005h4.207c.662 0 1.198.486 1.198 1.086V6.224c0 .748-.426 1.444-1.126 1.84Zm11.956 2.784-4.914-2.784c-.7-.396-1.126-1.092-1.126-1.84v7.715c0-.6.536-1.085 1.198-1.085H19.8c1.203 0 1.655-1.428.635-2.006Z', opacity: 0.4 })));
};
var ForwardRef$aq = React.forwardRef(SvgAirPlane);

var SvgAirplaneModeOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm16.684 20.306-1.887-2.564a2.029 2.029 0 0 1-.402-1.204v-2.6c0-.599.536-1.084 1.198-1.084H19.8c1.203 0 1.655-1.428.635-2.006l-4.914-2.784c-.7-.396-1.126-1.092-1.126-1.84V4.395a2.395 2.395 0 0 0-4.79 0v1.829c0 .748-.426 1.444-1.126 1.84l-4.914 2.784c-1.02.578-.568 2.006.635 2.006h4.207c.662 0 1.198.486 1.198 1.085v2.599c0 .428-.14.847-.402 1.204l-1.887 2.564c-.681.927.433 2.071 1.532 1.573l2.08-.943a2.619 2.619 0 0 1 2.143 0l2.081.943c1.098.498 2.213-.646 1.532-1.573Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm16.684 20.307-1.887-2.565a2.029 2.029 0 0 1-.402-1.204v-2.143l-6.18-6.18-4.65 2.633c-1.02.578-.568 2.006.635 2.006h4.207c.662 0 1.198.486 1.198 1.085v2.599c0 .428-.14.847-.402 1.204l-1.887 2.565c-.681.926.433 2.07 1.532 1.572l2.08-.943a2.619 2.619 0 0 1 2.143 0l2.081.943c1.098.498 2.213-.646 1.532-1.572Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$ap = React.forwardRef(SvgAirplaneModeOff);

var SvgAirplaneMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm16.684 20.306-1.887-2.564a2.029 2.029 0 0 1-.402-1.204v-2.6c0-.599.536-1.084 1.198-1.084H19.8c1.203 0 1.655-1.428.635-2.006l-4.914-2.784c-.7-.396-1.126-1.092-1.126-1.84V4.395a2.395 2.395 0 0 0-4.79 0v1.829c0 .748-.426 1.444-1.126 1.84l-4.914 2.784c-1.02.578-.568 2.006.635 2.006h4.207c.662 0 1.198.486 1.198 1.085v2.599c0 .428-.14.847-.402 1.204l-1.887 2.564c-.681.927.433 2.071 1.532 1.573l2.08-.943a2.619 2.619 0 0 1 2.143 0l2.081.943c1.098.498 2.213-.646 1.532-1.573Z', opacity: 0.4 })));
};
var ForwardRef$ao = React.forwardRef(SvgAirplaneMode);

var SvgAmbulance = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14 19V7h3.21a2 2 0 0 1 1.367.54l2.79 2.617a2 2 0 0 1 .633 1.46V17a2 2 0 0 1-2 2 2 2 0 1 0-4 0h-2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M9 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 3h4a4 4 0 0 1 4 4v12H9a2 2 0 0 0-3.996-.125A4.002 4.002 0 0 1 2 15V7a4 4 0 0 1 4-4Zm.75 5a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-1.25h2.5V12a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v1.25h-2.5V8Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$an = React.forwardRef(SvgAmbulance);

var SvgAppsCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("circle", { cx: 7, cy: 7, r: 3, fill: 'currentColor', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 17, cy: 17, r: 3, fill: 'currentColor' }),
        React__namespace.createElement("circle", { cx: 7, cy: 17, r: 3, fill: 'currentColor', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 17, cy: 7, r: 3, fill: 'currentColor', opacity: 0.4 })));
};
var ForwardRef$am = React.forwardRef(SvgAppsCircle);

var SvgAppsDoubleCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm4-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V6ZM4 16a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2Z', opacity: 0.4 })));
};
var ForwardRef$al = React.forwardRef(SvgAppsDoubleCircle);

var SvgAppsRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V6ZM4 16a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2ZM4 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14 16a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2Z' })));
};
var ForwardRef$ak = React.forwardRef(SvgAppsRectangle);

var SvgAppsTripleRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V6ZM4 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm0 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2Z', opacity: 0.4 })));
};
var ForwardRef$aj = React.forwardRef(SvgAppsTripleRectangle);

var SvgArrowBackCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.53 6.47a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72H13a2.25 2.25 0 0 1 0 4.5H8a.75.75 0 0 0 0 1.5h5a3.75 3.75 0 1 0 0-7.5H9.81l.72-.72a.75.75 0 0 0 0-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$ai = React.forwardRef(SvgArrowBackCircle);

var SvgArrowBackRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.53 6.47a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72H13a2.25 2.25 0 0 1 0 4.5H8a.75.75 0 0 0 0 1.5h5a3.75 3.75 0 1 0 0-7.5H9.81l.72-.72a.75.75 0 0 0 0-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$ah = React.forwardRef(SvgArrowBackRectangle);

var SvgArrowBack = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.6 4.55a.75.75 0 0 0-1.05-.15l-4 3a.75.75 0 0 0 0 1.2l4 3a.75.75 0 1 0 .9-1.2l-2.2-1.65H15a3.25 3.25 0 1 1 0 6.5H5a.75.75 0 0 0 0 1.5h10a4.75 4.75 0 1 0 0-9.5H7.25l2.2-1.65a.75.75 0 0 0 .15-1.05Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M9.6 4.55a.75.75 0 0 0-1.05-.15l-4 3a.75.75 0 0 0 0 1.2l4 3a.75.75 0 1 0 .9-1.2L6.213 8 9.45 5.6a.75.75 0 0 0 .15-1.05Z' })));
};
var ForwardRef$ag = React.forwardRef(SvgArrowBack);

var SvgArrowDownCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.47 16.53a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8a.75.75 0 0 0-1.5 0v6.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z', clipRule: 'evenodd' })));
};
var ForwardRef$af = React.forwardRef(SvgArrowDownCircle);

var SvgArrowDownRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.47 16.53a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8a.75.75 0 0 0-1.5 0v6.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z', clipRule: 'evenodd' })));
};
var ForwardRef$ae = React.forwardRef(SvgArrowDownRectangle);

var SvgArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.47 18.53a.75.75 0 0 0 1.06 0l4-4a.75.75 0 1 0-1.06-1.06l-2.72 2.72V6a.75.75 0 0 0-1.5 0v10.19l-2.72-2.72a.75.75 0 0 0-1.06 1.06l4 4Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12.53 18.53a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l3.468 3.5 3.472-3.5a.75.75 0 1 1 1.06 1.06l-4 4Z' })));
};
var ForwardRef$ad = React.forwardRef(SvgArrowDown);

var SvgArrowDropDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15.518 7H8.482C6.94 7 5.977 8.674 6.755 10.008l3.517 6.03c.772 1.323 2.684 1.323 3.456 0l3.518-6.03C18.023 8.674 17.061 7 15.518 7Z', opacity: 0.4 })));
};
var ForwardRef$ac = React.forwardRef(SvgArrowDropDown);

var SvgArrowDropLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M17 15.518V8.482c0-1.544-1.675-2.505-3.008-1.728l-6.03 3.518c-1.324.772-1.324 2.684 0 3.455l6.03 3.518c1.333.778 3.008-.184 3.008-1.727Z', opacity: 0.4 })));
};
var ForwardRef$ab = React.forwardRef(SvgArrowDropLeft);

var SvgArrowDropRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7 15.518V8.482c0-1.544 1.674-2.505 3.008-1.728l6.03 3.518c1.323.772 1.323 2.684 0 3.455l-6.03 3.518C8.674 18.023 7 17.061 7 15.518Z', opacity: 0.4 })));
};
var ForwardRef$aa = React.forwardRef(SvgArrowDropRight);

var SvgArrowDropUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8.482 17.015h7.036c1.543 0 2.505-1.674 1.727-3.007l-3.517-6.031c-.772-1.323-2.684-1.323-3.456 0l-3.517 6.03c-.778 1.334.184 3.008 1.727 3.008Z', opacity: 0.4 })));
};
var ForwardRef$a9 = React.forwardRef(SvgArrowDropUp);

var SvgArrowLeftCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.47 12.53a.75.75 0 0 1 0-1.06l3-3a.75.75 0 1 1 1.06 1.06l-1.72 1.72H16a.75.75 0 0 1 0 1.5H9.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3Z', clipRule: 'evenodd' })));
};
var ForwardRef$a8 = React.forwardRef(SvgArrowLeftCircle);

var SvgArrowLeftRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.47 12.53a.75.75 0 0 1 0-1.06l3-3a.75.75 0 1 1 1.06 1.06l-1.72 1.72H16a.75.75 0 0 1 0 1.5H9.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3Z', clipRule: 'evenodd' })));
};
var ForwardRef$a7 = React.forwardRef(SvgArrowLeftRectangle);

var SvgArrowLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.47 11.47a.75.75 0 0 0 0 1.06l4 4a.75.75 0 1 0 1.06-1.06l-2.72-2.72H18a.75.75 0 0 0 0-1.5H7.81l2.72-2.72a.75.75 0 1 0-1.06-1.06l-4 4Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M5.47 12.53a.75.75 0 0 1 0-1.06l4-4a.75.75 0 1 1 1.06 1.06l-3.5 3.468 3.5 3.472a.75.75 0 1 1-1.06 1.06l-4-4Z' })));
};
var ForwardRef$a6 = React.forwardRef(SvgArrowLeft);

var SvgArrowMoveCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.53 18.53a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V7.81l-.72.72a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-.72-.72v8.38l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.47 12.53a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 1.06l-.72.72h8.38l-.72-.72a.75.75 0 1 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H7.81l.72.72a.75.75 0 1 1-1.06 1.06l-2-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$a5 = React.forwardRef(SvgArrowMoveCircle);

var SvgArrowMoveRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.53 18.53a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V7.81l-.72.72a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-.72-.72v8.38l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.47 12.53a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 1.06l-.72.72h8.38l-.72-.72a.75.75 0 1 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H7.81l.72.72a.75.75 0 1 1-1.06 1.06l-2-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$a4 = React.forwardRef(SvgArrowMoveRectangle);

var SvgArrowMove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.25 12a.75.75 0 0 1 .22-.53l3-3a.75.75 0 0 1 1.06 1.06l-1.72 1.72h14.38l-1.72-1.72a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H4.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1-.22-.53Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.53 21.53a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V4.81L9.53 6.53a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72v14.38l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$a3 = React.forwardRef(SvgArrowMove);

var SvgArrowReturnCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.47 6.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H11a2.25 2.25 0 0 0 0 4.5h5a.75.75 0 0 1 0 1.5h-5a3.75 3.75 0 1 1 0-7.5h3.19l-.72-.72a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$a2 = React.forwardRef(SvgArrowReturnCircle);

var SvgArrowReturnRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.47 6.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H11a2.25 2.25 0 0 0 0 4.5h5a.75.75 0 0 1 0 1.5h-5a3.75 3.75 0 1 1 0-7.5h3.19l-.72-.72a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$a1 = React.forwardRef(SvgArrowReturnRectangle);

var SvgArrowReturn = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14.4 4.55a.75.75 0 0 1 1.05-.15l4 3a.75.75 0 0 1 0 1.2l-4 3a.75.75 0 1 1-.9-1.2l2.2-1.65H9a3.25 3.25 0 1 0 0 6.5h10a.75.75 0 0 1 0 1.5H9a4.75 4.75 0 1 1 0-9.5h7.75l-2.2-1.65a.75.75 0 0 1-.15-1.05Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14.4 4.55a.75.75 0 0 1 1.05-.15l4 3a.75.75 0 0 1 0 1.2l-4 3a.75.75 0 1 1-.9-1.2L17.787 8 14.55 5.6a.75.75 0 0 1-.15-1.05Z' })));
};
var ForwardRef$a0 = React.forwardRef(SvgArrowReturn);

var SvgArrowRightCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.53 12.53a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8a.75.75 0 0 0 0 1.5h6.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z', clipRule: 'evenodd' })));
};
var ForwardRef$9$ = React.forwardRef(SvgArrowRightCircle);

var SvgArrowRightRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.53 12.53a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8a.75.75 0 0 0 0 1.5h6.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z', clipRule: 'evenodd' })));
};
var ForwardRef$9_ = React.forwardRef(SvgArrowRightRectangle);

var SvgArrowRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18.53 12.53a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 1 0-1.06 1.06l2.72 2.72H6a.75.75 0 0 0 0 1.5h10.19l-2.72 2.72a.75.75 0 1 0 1.06 1.06l4-4Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18.53 11.47a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l3.5-3.468-3.5-3.472a.75.75 0 0 1 1.06-1.06l4 4Z' })));
};
var ForwardRef$9Z = React.forwardRef(SvgArrowRight);

var SvgArrowSortCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.287 7.307A.75.75 0 0 1 10.75 8v8a.75.75 0 0 1-1.5 0V9.81l-.72.72a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 .817-.163Zm3.426 9.386A.75.75 0 0 1 13.25 16V8a.75.75 0 0 1 1.5 0v6.19l.72-.72a.75.75 0 0 1 1.06 1.06l-2 2a.75.75 0 0 1-.817.163Z', clipRule: 'evenodd' })));
};
var ForwardRef$9Y = React.forwardRef(SvgArrowSortCircle);

var SvgArrowSortRectangleHalf = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.287 7.307A.75.75 0 0 1 10.75 8v8a.75.75 0 0 1-1.5 0V9.81l-.72.72a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 .817-.163Zm3.426 9.386A.75.75 0 0 1 13.25 16V8a.75.75 0 0 1 1.5 0v6.19l.72-.72a.75.75 0 0 1 1.06 1.06l-2 2a.75.75 0 0 1-.817.163Z', clipRule: 'evenodd' })));
};
var ForwardRef$9X = React.forwardRef(SvgArrowSortRectangleHalf);

var SvgArrowSortRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.47 7.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72V16a.75.75 0 0 1-1.5 0V9.81l-.72.72a.75.75 0 1 1-1.06-1.06l2-2Zm7.06 9.06a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V8a.75.75 0 0 1 1.5 0v6.19l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$9W = React.forwardRef(SvgArrowSortRectangle);

var SvgArrowSort = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.47 5.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06L8.75 7.81V18a.75.75 0 0 1-1.5 0V7.81L5.53 9.53a.75.75 0 0 1-1.06-1.06l3-3Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.53 18.53a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V6a.75.75 0 0 1 1.5 0v10.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$9V = React.forwardRef(SvgArrowSort);

var SvgArrowThickDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15 5v8h1.796a1 1 0 0 1 .753 1.659l-4.044 4.62a2 2 0 0 1-3.01 0L6.45 14.66c-.565-.649-.105-1.66.754-1.66H9V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z', opacity: 0.4 })));
};
var ForwardRef$9U = React.forwardRef(SvgArrowThickDown);

var SvgArrowThickLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19 9h-8V7.204a1 1 0 0 0-1.659-.753l-4.62 4.044a2 2 0 0 0 0 3.01l4.62 4.044c.647.565 1.659.106 1.659-.753V15h8a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z', opacity: 0.4 })));
};
var ForwardRef$9T = React.forwardRef(SvgArrowThickLeft);

var SvgArrowThickRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M5.519 9h8V7.204a1 1 0 0 1 1.658-.753l4.621 4.044a2 2 0 0 1 0 3.01l-4.62 4.044c-.648.565-1.66.106-1.66-.753V15h-8a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Z', opacity: 0.4 })));
};
var ForwardRef$9S = React.forwardRef(SvgArrowThickRight);

var SvgArrowThickUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M9 19v-8H7.204a1 1 0 0 1-.753-1.659l4.044-4.62a2 2 0 0 1 3.01 0l4.044 4.62c.566.647.106 1.659-.753 1.659H15v8a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2Z', opacity: 0.4 })));
};
var ForwardRef$9R = React.forwardRef(SvgArrowThickUp);

var SvgArrowTransferCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.693 10.287a.75.75 0 0 1-.693.463H8a.75.75 0 0 1 0-1.5h6.19l-.72-.72a.75.75 0 0 1 1.06-1.06l2 2a.75.75 0 0 1 .163.817Zm-9.386 3.426A.75.75 0 0 1 8 13.25h8a.75.75 0 0 1 0 1.5H9.81l.72.72a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1-.163-.817Z', clipRule: 'evenodd' })));
};
var ForwardRef$9Q = React.forwardRef(SvgArrowTransferCircle);

var SvgArrowTransferRectangleHalf = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.693 10.287a.75.75 0 0 1-.693.463H8a.75.75 0 0 1 0-1.5h6.19l-.72-.72a.75.75 0 0 1 1.06-1.06l2 2a.75.75 0 0 1 .163.817Zm-9.386 3.426A.75.75 0 0 1 8 13.25h8a.75.75 0 0 1 0 1.5H9.81l.72.72a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1-.163-.817Z', clipRule: 'evenodd' })));
};
var ForwardRef$9P = React.forwardRef(SvgArrowTransferRectangleHalf);

var SvgArrowTransferRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.53 8.47a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H8a.75.75 0 0 1 0-1.5h6.19l-.72-.72a.75.75 0 0 1 1.06-1.06l2 2Zm-9.06 7.06a.75.75 0 0 1 0-1.06l2-2a.75.75 0 1 1 1.06 1.06l-.72.72H16a.75.75 0 0 1 0 1.5H9.81l.72.72a.75.75 0 1 1-1.06 1.06l-2-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$9O = React.forwardRef(SvgArrowTransferRectangle);

var SvgArrowTransfer = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18.53 7.47a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H6a.75.75 0 0 1 0-1.5h10.19l-1.72-1.72a.75.75 0 0 1 1.06-1.06l3 3Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.47 16.53a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 1.06l-1.72 1.72H18a.75.75 0 0 1 0 1.5H7.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3Z', clipRule: 'evenodd' })));
};
var ForwardRef$9N = React.forwardRef(SvgArrowTransfer);

var SvgArrowUpCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.47 7.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72V16a.75.75 0 0 1-1.5 0V9.81l-1.72 1.72a.75.75 0 0 1-1.06-1.06l3-3Z', clipRule: 'evenodd' })));
};
var ForwardRef$9M = React.forwardRef(SvgArrowUpCircle);

var SvgArrowUpRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.47 7.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72V16a.75.75 0 0 1-1.5 0V9.81l-1.72 1.72a.75.75 0 0 1-1.06-1.06l3-3Z', clipRule: 'evenodd' })));
};
var ForwardRef$9L = React.forwardRef(SvgArrowUpRectangle);

var SvgArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.47 5.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06l-2.72-2.72V18a.75.75 0 0 1-1.5 0V7.81l-2.72 2.72a.75.75 0 1 1-1.06-1.06l4-4Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M11.47 5.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06l-3.468-3.5-3.472 3.5a.75.75 0 1 1-1.06-1.06l4-4Z' })));
};
var ForwardRef$9K = React.forwardRef(SvgArrowUp);

var SvgAtm = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5V4h11Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M5 8h14v4H5V8Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5 1.25a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 5 1.25Z', clipRule: 'evenodd' })));
};
var ForwardRef$9J = React.forwardRef(SvgAtm);

var SvgAutoRotation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.47 2.984a.75.75 0 0 1 1.06 0l7.071 7.071a2.75 2.75 0 0 1 0 3.89l-2.962 2.962h1.018a.75.75 0 0 1 0 1.5h-1.829a1.75 1.75 0 0 1-1.75-1.75v-1.829a.75.75 0 0 1 1.5 0v1.018l2.963-2.962a1.25 1.25 0 0 0 0-1.768l-7.072-7.071a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.593 6.343a.75.75 0 0 1 .75-.75h1.829c.966 0 1.75.784 1.75 1.75v1.829a.75.75 0 0 1-1.5 0V8.154l-2.963 2.962a1.25 1.25 0 0 0 0 1.768l7.071 7.071a.75.75 0 1 1-1.06 1.06l-7.072-7.07a2.75 2.75 0 0 1 0-3.89l2.963-2.962H6.343a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$9I = React.forwardRef(SvgAutoRotation);

var SvgAuto = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 7.25a.75.75 0 0 1 .67.415l4 8a.75.75 0 1 1-1.34.67l-1.294-2.586-.036.001H9.964L8.67 16.334a.75.75 0 1 1-1.342-.67l4-8A.75.75 0 0 1 12 7.25Zm-1.287 5h2.573L12 9.677l-1.287 2.573Z', clipRule: 'evenodd' })));
};
var ForwardRef$9H = React.forwardRef(SvgAuto);

var SvgBadgePercent = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10.054 2.658a3 3 0 0 1 3.892 0l.683.582a3 3 0 0 0 1.707.707l.894.072a3 3 0 0 1 2.752 2.751l.071.894a3 3 0 0 0 .707 1.708l.582.682a3 3 0 0 1 0 3.892l-.582.683a3 3 0 0 0-.707 1.707l-.071.894a3 3 0 0 1-2.752 2.752l-.894.071a3 3 0 0 0-1.707.707l-.683.582a3 3 0 0 1-3.892 0l-.682-.582a3 3 0 0 0-1.708-.707l-.894-.071a3 3 0 0 1-2.75-2.752l-.072-.894a3 3 0 0 0-.707-1.707l-.582-.683a3 3 0 0 1 0-3.892l.582-.682a3 3 0 0 0 .707-1.708l.072-.894a3 3 0 0 1 2.75-2.75l.894-.072a3 3 0 0 0 1.708-.707l.682-.582Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.53 8.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$9G = React.forwardRef(SvgBadgePercent);

var SvgBagAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4.562 9.504A4 4 0 0 1 8.532 6h6.937a4 4 0 0 1 3.969 3.504l1 8A4 4 0 0 1 16.468 22H7.532a4 4 0 0 1-3.969-4.496l1-8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.25 5a3.75 3.75 0 1 1 7.5 0v2a.75.75 0 0 1-1.5 0V5a2.25 2.25 0 0 0-4.5 0v2a.75.75 0 0 1-1.5 0V5ZM12 10.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V17a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V11a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$9F = React.forwardRef(SvgBagAdd);

var SvgBagCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4.562 9.504A4 4 0 0 1 8.532 6h6.937a4 4 0 0 1 3.969 3.504l1 8A4 4 0 0 1 16.468 22H7.532a4 4 0 0 1-3.969-4.496l1-8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.25 5a3.75 3.75 0 1 1 7.5 0v2a.75.75 0 0 1-1.5 0V5a2.25 2.25 0 0 0-4.5 0v2a.75.75 0 0 1-1.5 0V5Zm7.244 6.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .937-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z', clipRule: 'evenodd' })));
};
var ForwardRef$9E = React.forwardRef(SvgBagCheck);

var SvgBagFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4.562 9.504A4 4 0 0 1 8.532 6h6.937a4 4 0 0 1 3.969 3.504l1 8A4 4 0 0 1 16.468 22H7.532a4 4 0 0 1-3.969-4.496l1-8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.25 5a3.75 3.75 0 1 1 7.5 0v2a.75.75 0 0 1-1.5 0V5a2.25 2.25 0 0 0-4.5 0v2a.75.75 0 0 1-1.5 0V5Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12.265 11.735 12 12l-.265-.265a1.875 1.875 0 0 0-2.652 2.651l1.856 1.857a1.5 1.5 0 0 0 2.122 0l1.856-1.857a1.875 1.875 0 0 0-2.652-2.651Z' })));
};
var ForwardRef$9D = React.forwardRef(SvgBagFavourite);

var SvgBagMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4.562 9.504A4 4 0 0 1 8.532 6h6.937a4 4 0 0 1 3.969 3.504l1 8A4 4 0 0 1 16.468 22H7.532a4 4 0 0 1-3.969-4.496l1-8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.25 5a3.75 3.75 0 1 1 7.5 0v2a.75.75 0 0 1-1.5 0V5a2.25 2.25 0 0 0-4.5 0v2a.75.75 0 0 1-1.5 0V5Zm0 9a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$9C = React.forwardRef(SvgBagMinus);

var SvgBagRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4.562 9.504A4 4 0 0 1 8.532 6h6.937a4 4 0 0 1 3.969 3.504l1 8A4 4 0 0 1 16.468 22H7.532a4 4 0 0 1-3.969-4.496l1-8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.25 5a3.75 3.75 0 1 1 7.5 0v2a.75.75 0 0 1-1.5 0V5a2.25 2.25 0 0 0-4.5 0v2a.75.75 0 0 1-1.5 0V5Zm1.098 6.349a.75.75 0 0 1 1.061 0L12 12.939l1.591-1.59a.75.75 0 0 1 1.06 1.06L13.062 14l1.59 1.591a.75.75 0 0 1-1.06 1.06L12 15.062l-1.591 1.59a.75.75 0 1 1-1.06-1.06l1.59-1.59-1.59-1.592a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$9B = React.forwardRef(SvgBagRemove);

var SvgBagSmile = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4.562 9.504A4 4 0 0 1 8.532 6h6.937a4 4 0 0 1 3.969 3.504l1 8A4 4 0 0 1 16.468 22H7.532a4 4 0 0 1-3.969-4.496l1-8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.25 5a3.75 3.75 0 1 1 7.5 0v2a.75.75 0 0 1-1.5 0V5a2.25 2.25 0 0 0-4.5 0v2a.75.75 0 0 1-1.5 0V5Zm7.403 10.632a.75.75 0 0 1-.285 1.022c-1.215.685-2.262 1.094-3.365 1.096-1.105.002-2.154-.404-3.374-1.098a.75.75 0 1 1 .742-1.304c1.136.647 1.911.903 2.629.902.719-.001 1.494-.262 2.632-.903a.75.75 0 0 1 1.021.285Z', clipRule: 'evenodd' })));
};
var ForwardRef$9A = React.forwardRef(SvgBagSmile);

var SvgBag = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4.562 9.504A4 4 0 0 1 8.532 6h6.937a4 4 0 0 1 3.969 3.504l1 8A4 4 0 0 1 16.468 22H7.532a4 4 0 0 1-3.969-4.496l1-8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.25 5a3.75 3.75 0 1 1 7.5 0v2a.75.75 0 0 1-1.5 0V5a2.25 2.25 0 0 0-4.5 0v2a.75.75 0 0 1-1.5 0V5Z', clipRule: 'evenodd' })));
};
var ForwardRef$9z = React.forwardRef(SvgBag);

var SvgBank = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3.033 10h17.934c1.02 0 1.42-1.351.572-1.93l-8.395-5.716a2.026 2.026 0 0 0-2.288 0L2.461 8.07c-.849.579-.448 1.93.572 1.93Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 10h4v8H6zm8 0h4v8h-4z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19.382 18a1 1 0 0 1 .894.553l1 2A1 1 0 0 1 20.382 22H3.618a1 1 0 0 1-.894-1.447l1-2A1 1 0 0 1 4.618 18h14.764Z', opacity: 0.4 })));
};
var ForwardRef$9y = React.forwardRef(SvgBank);

var SvgBarChartMiddleLong = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("rect", { width: 4, height: 18, x: 10, y: 3, fill: 'currentColor', rx: 2 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 10a2 2 0 1 1 4 0v9a2 2 0 1 1-4 0v-9Zm16 0a2 2 0 1 1 4 0v9a2 2 0 1 1-4 0v-9Z', opacity: 0.4 })));
};
var ForwardRef$9x = React.forwardRef(SvgBarChartMiddleLong);

var SvgBarChart = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 5a2 2 0 1 1 4 0v14a2 2 0 1 1-4 0V5Z', opacity: 0.4 }),
        React__namespace.createElement("rect", { width: 4, height: 13, x: 10, y: 8, fill: 'currentColor', rx: 2 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 5a2 2 0 1 1 4 0v14a2 2 0 1 1-4 0V5Z', opacity: 0.4 })));
};
var ForwardRef$9w = React.forwardRef(SvgBarChart);

var SvgBarcodeBorder = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 2.75A3.25 3.25 0 0 0 2.75 6v2a.75.75 0 0 1-1.5 0V6A4.75 4.75 0 0 1 6 1.25h2a.75.75 0 0 1 0 1.5H6ZM15.25 2a.75.75 0 0 1 .75-.75h2A4.75 4.75 0 0 1 22.75 6v2a.75.75 0 0 1-1.5 0V6A3.25 3.25 0 0 0 18 2.75h-2a.75.75 0 0 1-.75-.75ZM2 15.194a.75.75 0 0 1 .75.75V18A3.25 3.25 0 0 0 6 21.25h2a.75.75 0 0 1 0 1.5H6A4.75 4.75 0 0 1 1.25 18v-2.056a.75.75 0 0 1 .75-.75Zm20 0a.75.75 0 0 1 .75.75V18A4.75 4.75 0 0 1 18 22.75h-2a.75.75 0 0 1 0-1.5h2A3.25 3.25 0 0 0 21.25 18v-2.056a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.25 12a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM16 6.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm-4 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm-4 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 8 6.75Zm4 7a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm4 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm-8 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$9v = React.forwardRef(SvgBarcodeBorder);

var SvgBatteryAlert = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 2ZM12 8.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 7a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$9u = React.forwardRef(SvgBatteryAlert);

var SvgBatteryChargingFull = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.494 10.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .937-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07ZM9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$9t = React.forwardRef(SvgBatteryChargingFull);

var SvgBatteryCharging = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm9.11 13.161.908-1.108 3.185-3.89c.318-.386.904-.028.751.46l-.878 2.814c-.095.305.118.62.419.62h1.063c.379 0 .582.477.332.782l-4.093 4.997c-.318.388-.904.029-.751-.46l.878-2.813c.095-.305-.118-.62-.419-.62H9.442c-.379 0-.582-.477-.332-.782Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$9s = React.forwardRef(SvgBatteryCharging);

var SvgBatteryHorizontalCharging = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm8.11 12.129.908-.887 3.185-3.11c.318-.31.904-.024.751.367l-.878 2.25c-.095.245.118.497.419.497h1.063c.379 0 .582.381.332.625L9.797 15.87c-.318.31-.904.023-.751-.368l.878-2.25c.095-.245-.118-.497-.419-.497H8.442c-.379 0-.582-.381-.332-.625Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$9r = React.forwardRef(SvgBatteryHorizontalCharging);

var SvgBatteryHorizontalFull = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14.494 9.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .937-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07ZM22 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$9q = React.forwardRef(SvgBatteryHorizontalFull);

var SvgBatteryHorizontalLowbet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75ZM2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 16V8a2 2 0 0 0-2-2H7.06l11.805 11.804A2 2 0 0 0 20 16Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4.925 6 16.94 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h.925Z' })));
};
var ForwardRef$9p = React.forwardRef(SvgBatteryHorizontalLowbet);

var SvgBatteryHorizontalSavingMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm-11-1a.75.75 0 0 1 .75.75v2.25H14a.75.75 0 0 1 0 1.5h-2.25V15a.75.75 0 0 1-1.5 0v-2.25H8a.75.75 0 0 1 0-1.5h2.25V9a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$9o = React.forwardRef(SvgBatteryHorizontalSavingMode);

var SvgBatteryHorizontal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M23 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$9n = React.forwardRef(SvgBatteryHorizontal);

var SvgBatteryLowbet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 2Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 22h8a2 2 0 0 0 2-2v-2L6 6v14a2 2 0 0 0 2 2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$9m = React.forwardRef(SvgBatteryLowbet);

var SvgBatterySavingMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 2ZM12 9.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V16a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V10a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$9l = React.forwardRef(SvgBatterySavingMode);

var SvgBattery = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$9k = React.forwardRef(SvgBattery);

var SvgBill = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19 2H5a2 2 0 0 0-2 2v15.154a2 2 0 0 0 2.677 1.882l1.562-.562a2 2 0 0 1 1.498.058l2.442 1.099a2 2 0 0 0 1.642 0l2.442-1.1a2 2 0 0 1 1.498-.057l1.562.562A2 2 0 0 0 21 19.154V4a2 2 0 0 0-2-2Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.75 7a.75.75 0 0 1-.75.75H7a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75Zm0 4a.75.75 0 0 1-.75.75H7a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75Zm-5 4a.75.75 0 0 1-.75.75H7a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$9j = React.forwardRef(SvgBill);

var SvgBloodPlus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4 14.111c0-4.649 4.63-9.233 6.845-11.16a1.743 1.743 0 0 1 2.31 0C15.371 4.877 20 9.461 20 14.11 20 18 16.97 22 12 22c-4.97 0-8-4-8-7.889Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 10.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V17a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V11a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$9i = React.forwardRef(SvgBloodPlus);

var SvgBlood = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4 14.111c0-4.649 4.63-9.233 6.845-11.16a1.743 1.743 0 0 1 2.31 0C15.371 4.877 20 9.461 20 14.11 20 18 16.97 22 12 22c-4.97 0-8-4-8-7.889Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.264 19.049a.75.75 0 0 1 .593-.88c1.747-.34 2.934-1.735 3.287-3.33a.75.75 0 0 1 1.464.323c-.46 2.081-2.038 4.007-4.464 4.48a.75.75 0 0 1-.88-.593Z', clipRule: 'evenodd' })));
};
var ForwardRef$9h = React.forwardRef(SvgBlood);

var SvgBluetoothConnected = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.16 4.943a.25.25 0 0 0-.41.192V10.6l3.72-2.48a.25.25 0 0 0 .02-.4l-3.33-2.776ZM11.25 10.6V5.135c0-1.484 1.73-2.294 2.87-1.344l3.331 2.776a1.75 1.75 0 0 1-.15 2.8L13.352 12l3.95 2.633a1.75 1.75 0 0 1 .15 2.8l-3.33 2.776c-1.14.95-2.871.14-2.871-1.344v-5.463l-4.834 3.222a.75.75 0 0 1-.832-1.248L10.648 12 5.584 8.624a.75.75 0 1 1 .832-1.248L11.25 10.6Zm1.5 2.803v5.463a.25.25 0 0 0 .41.192l3.33-2.776a.25.25 0 0 0-.02-.4l-3.72-2.48Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18.414 10.586 19.828 12l-1.414 1.414L17 12l1.414-1.414Zm-12.828 0L7 12l-1.414 1.414L4.172 12l1.414-1.414Z' })));
};
var ForwardRef$9g = React.forwardRef(SvgBluetoothConnected);

var SvgBluetoothOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M17 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.16 4.943a.25.25 0 0 0-.41.192V10.6l3.72-2.48a.25.25 0 0 0 .021-.4l-3.33-2.776ZM9.25 10.6V5.135c0-1.484 1.73-2.294 2.87-1.344l3.331 2.776a1.75 1.75 0 0 1-.15 2.8L11.353 12l3.95 2.633a1.75 1.75 0 0 1 .15 2.8L12.12 20.21c-1.14.95-2.87.14-2.87-1.344v-5.463l-4.834 3.222a.75.75 0 0 1-.832-1.248L8.648 12 3.584 8.624a.75.75 0 0 1 .832-1.248L9.25 10.6Zm1.5 2.803v5.463a.25.25 0 0 0 .41.192l3.331-2.776a.25.25 0 0 0-.021-.4l-3.72-2.48Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18.282 8.155a.75.75 0 0 1 1.059.074A5.73 5.73 0 0 1 20.75 12a5.732 5.732 0 0 1-1.464 3.834.75.75 0 0 1-1.118-1A4.232 4.232 0 0 0 19.25 12a4.23 4.23 0 0 0-1.041-2.787.75.75 0 0 1 .073-1.058Z', clipRule: 'evenodd' })));
};
var ForwardRef$9f = React.forwardRef(SvgBluetoothOff);

var SvgBluetooth = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3.47 3.47a.75.75 0 0 1 1.06 0l16 16a.75.75 0 1 1-1.06 1.06l-16-16a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.25 10.31v1.288l-5.666 3.778a.75.75 0 0 0 .832 1.248L11.25 13.4v5.464c0 1.484 1.73 2.294 2.87 1.344l3.834-3.194-1.065-1.066-3.729 3.108a.25.25 0 0 1-.41-.192V12.4l.354-.236-1.854-1.854Zm7.274 5.153.012.012a1.34 1.34 0 0 0-.012-.012Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm14.377 11.317-1.081-1.082 3.174-2.116a.25.25 0 0 0 .021-.4L13.16 4.943a.25.25 0 0 0-.41.192V9.69l-1.5-1.5V5.135c0-1.484 1.73-2.294 2.87-1.344l3.331 2.776a1.75 1.75 0 0 1-.15 2.8l-2.924 1.95Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$9e = React.forwardRef(SvgBluetooth);

var SvgBoard = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.48 1.424a.75.75 0 0 0-.96 0L6.028 6h2.344L12 2.976 15.628 6h2.343l-5.49-4.576Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.25 10A.75.75 0 0 1 7 9.25h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$9d = React.forwardRef(SvgBoard);

var SvgBookmark = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14c0 1.648-1.881 2.589-3.2 1.6l-3.6-2.7a2 2 0 0 0-2.4 0l-3.6 2.7c-1.318.989-3.2.048-3.2-1.6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 8H4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3Z' })));
};
var ForwardRef$9c = React.forwardRef(SvgBookmark);

var SvgBoxAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 2h8v7.586c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0l-1.586 1.586c-.63.63-1.707.184-1.707-.707V2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19 15.25a.75.75 0 0 1 .75.75v2.25H22a.75.75 0 0 1 0 1.5h-2.25V22a.75.75 0 0 1-1.5 0v-2.25H16a.75.75 0 0 1 0-1.5h2.25V16a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$9b = React.forwardRef(SvgBoxAdd);

var SvgBoxArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 2h8v7.586c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0l-1.586 1.586c-.63.63-1.707.184-1.707-.707V2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm19.25 20.604-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.292a.75.75 0 1 0-1.06-1.061l-.72.72V16a.75.75 0 0 0-1.5 0v4.604Z', clipRule: 'evenodd' })));
};
var ForwardRef$9a = React.forwardRef(SvgBoxArrowDown);

var SvgBoxArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 2h8v7.586c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0l-1.586 1.586c-.63.63-1.707.184-1.707-.707V2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm19.25 17.396-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.292a.75.75 0 1 1-1.06 1.061l-.72-.72V22a.75.75 0 0 1-1.5 0v-4.604Z', clipRule: 'evenodd' })));
};
var ForwardRef$99 = React.forwardRef(SvgBoxArrowUp);

var SvgBoxCancel = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 2h8v7.586c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0l-1.586 1.586c-.63.63-1.707.184-1.707-.707V2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.348 16.348a.75.75 0 0 1 1.061 0L19 17.94l1.591-1.59a.75.75 0 1 1 1.06 1.06L20.062 19l1.59 1.591a.75.75 0 1 1-1.06 1.06L19 20.062l-1.591 1.59a.75.75 0 0 1-1.06-1.06L17.938 19l-1.59-1.591a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$98 = React.forwardRef(SvgBoxCancel);

var SvgBoxDone = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 2h8v7.586c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0l-1.586 1.586c-.63.63-1.707.184-1.707-.707V2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21.494 17.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .937-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z', clipRule: 'evenodd' })));
};
var ForwardRef$97 = React.forwardRef(SvgBoxDone);

var SvgBoxFavorite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 2h8v7.586c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0l-1.586 1.586c-.63.63-1.707.184-1.707-.707V2Zm10.265 14.735L18 17l-.265-.265a1.875 1.875 0 0 0-2.652 2.652l1.856 1.856a1.5 1.5 0 0 0 2.122 0l1.856-1.856a1.875 1.875 0 1 0-2.652-2.652Z' })));
};
var ForwardRef$96 = React.forwardRef(SvgBoxFavorite);

var SvgBoxLocation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 2h8v7.586c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0l-1.586 1.586c-.63.63-1.707.184-1.707-.707V2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19.65 21.336c.88-.96 2.35-2.79 2.35-4.336 0-2.21-1.343-3-3-3s-3 .79-3 3c0 1.546 1.469 3.376 2.35 4.336a.873.873 0 0 0 1.3 0ZM19 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$95 = React.forwardRef(SvgBoxLocation);

var SvgBoxMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 2h8v7.586c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0l-1.586 1.586c-.63.63-1.707.184-1.707-.707V2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22.75 19a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$94 = React.forwardRef(SvgBoxMinus);

var SvgBoxSearch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 2h8v7.586c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0l-1.586 1.586c-.63.63-1.707.184-1.707-.707V2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM14.25 18a3.75 3.75 0 1 1 6.879 2.068l.901.902a.75.75 0 1 1-1.06 1.06l-.902-.901A3.75 3.75 0 0 1 14.25 18Z', clipRule: 'evenodd' })));
};
var ForwardRef$93 = React.forwardRef(SvgBoxSearch);

var SvgBoxTime = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 2h8v7.586c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0l-1.586 1.586c-.63.63-1.707.184-1.707-.707V2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm.75-5.5a.75.75 0 0 0-1.5 0V18c0 .414.336.75.75.75h1a.75.75 0 0 0 0-1.5h-.25v-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$92 = React.forwardRef(SvgBoxTime);

var SvgBriefcaseTriangular = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 10a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11 2.75A2.25 2.25 0 0 0 8.75 5v2a.75.75 0 0 1-1.5 0V5A3.75 3.75 0 0 1 11 1.25h2A3.75 3.75 0 0 1 16.75 5v2a.75.75 0 0 1-1.5 0V5A2.25 2.25 0 0 0 13 2.75h-2Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 6H6a4 4 0 0 0-4 4v1s6.095 4 10 4c3.905 0 10-4 10-4v-1a4 4 0 0 0-4-4Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' })));
};
var ForwardRef$91 = React.forwardRef(SvgBriefcaseTriangular);

var SvgBriefcase = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 10a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11 2.75A2.25 2.25 0 0 0 8.75 5v2a.75.75 0 0 1-1.5 0V5A3.75 3.75 0 0 1 11 1.25h2A3.75 3.75 0 0 1 16.75 5v2a.75.75 0 0 1-1.5 0V5A2.25 2.25 0 0 0 13 2.75h-2Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 6H6a4 4 0 0 0-4 4v3h20v-3a4 4 0 0 0-4-4Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' })));
};
var ForwardRef$90 = React.forwardRef(SvgBriefcase);

var SvgCallHospital = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-1.25-7a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0V7.75h2.5V9a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-1.5 0v1.25h-2.5V5Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 20.222V18.91a2 2 0 0 0-1.257-1.857l-1.479-.592a2 2 0 0 0-2.531.963l-.066.132s-2.223-.445-4-2.223c-1.778-1.777-2.223-4-2.223-4l.132-.066a2 2 0 0 0 .963-2.531l-.592-1.479A2 2 0 0 0 5.09 6H3.778C2.796 6 2 6.796 2 7.778 2 15.633 8.368 22 16.222 22c.982 0 1.778-.796 1.778-1.778Z', opacity: 0.4 })));
};
var ForwardRef$8$ = React.forwardRef(SvgCallHospital);

var SvgCameraOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.126 6.5H8a5 5 0 0 0-5 5v4a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5l-12.874-9ZM12 16.5a3 3 0 0 1-1.283-5.712l3.99 4.007A3 3 0 0 1 12 16.5Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-1.725-1.726A4.98 4.98 0 0 0 21 15.5v-4a5 5 0 0 0-5-5h-.126a4.002 4.002 0 0 0-7.748 0H8a4.91 4.91 0 0 0-.422.018L3.53 2.47ZM13 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$8_ = React.forwardRef(SvgCameraOff);

var SvgCameraSwitch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M17 13.853v-2.118c0-1.462-1.244-2.647-2.778-2.647h-.07C13.906 8.175 13.036 7.5 12 7.5s-1.905.675-2.152 1.588h-.07C8.244 9.088 7 10.273 7 11.735v2.118C7 15.315 8.244 16.5 9.778 16.5h4.444c1.534 0 2.778-1.185 2.778-2.647Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.25 4c0-.942.782-1.806 1.83-1.69 4.877.537 8.67 4.67 8.67 9.69a.75.75 0 0 1-1.5 0 8.251 8.251 0 0 0-7.334-8.2.118.118 0 0 0-.101.037.226.226 0 0 0-.065.163v.5a.75.75 0 0 1-1.5 0V4ZM3 11.25a.75.75 0 0 1 .75.75 8.251 8.251 0 0 0 7.334 8.2.118.118 0 0 0 .101-.037.226.226 0 0 0 .065-.163v-.5a.75.75 0 0 1 1.5 0v.5c0 .942-.782 1.806-1.83 1.69-4.877-.538-8.67-4.67-8.67-9.69a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M13.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z' })));
};
var ForwardRef$8Z = React.forwardRef(SvgCameraSwitch);

var SvgCamera = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 15.5v-4a5 5 0 0 0-5-5h-.126a4.002 4.002 0 0 0-7.748 0H8a5 5 0 0 0-5 5v4a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15 13.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM13 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' })));
};
var ForwardRef$8Y = React.forwardRef(SvgCamera);

var SvgCapsuleOpen = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M9.5 19.5c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5S8 17 8 17s1.5 1.395 1.5 2.5Zm8 0c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5S16 17 16 17s1.5 1.395 1.5 2.5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M13.5 13.5c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5S12 11 12 11s1.5 1.395 1.5 2.5Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10.071 6.828 7.243 4A3 3 0 0 0 3 8.242l2.829 2.829 4.242-4.243Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M13.929 6.828 16.757 4A3 3 0 0 1 21 8.242l-2.829 2.829-4.242-4.243Z' })));
};
var ForwardRef$8X = React.forwardRef(SvgCapsuleOpen);

var SvgCapsule = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10.558 4.792a6.117 6.117 0 0 1 8.65 8.65l-5.766 5.767a6.117 6.117 0 1 1-8.65-8.65l5.766-5.767Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.42 6.52a.75.75 0 0 1 1.06 0 3.75 3.75 0 0 1 0 5.303.75.75 0 1 1-1.06-1.06 2.25 2.25 0 0 0 0-3.182.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4.792 10.558a6.117 6.117 0 0 0 8.65 8.65l2.883-2.883-8.65-8.65-2.883 2.883Z' })));
};
var ForwardRef$8W = React.forwardRef(SvgCapsule);

var SvgCardAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 6, cy: 17, r: 1, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 7h20v4H2V7Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19 14.25a.75.75 0 0 1 .75.75v2.25H22a.75.75 0 0 1 0 1.5h-2.25V21a.75.75 0 0 1-1.5 0v-2.25H16a.75.75 0 0 1 0-1.5h2.25V15a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$8V = React.forwardRef(SvgCardAdd);

var SvgCardArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 6, cy: 17, r: 1, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 7h20v4H2V7Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm19.25 19.604-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.292a.75.75 0 1 0-1.06-1.061l-.72.72V16a.75.75 0 0 0-1.5 0v3.604Z', clipRule: 'evenodd' })));
};
var ForwardRef$8U = React.forwardRef(SvgCardArrowDown);

var SvgCardArrowLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 6, cy: 17, r: 1, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 7h20v4H2V7Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm17.396 18.25.72-.72a.75.75 0 1 0-1.06-1.06l-1.293 1.293a1.75 1.75 0 0 0 0 2.474l1.292 1.293a.75.75 0 1 0 1.061-1.06l-.72-.72H22a.75.75 0 0 0 0-1.5h-4.604Z', clipRule: 'evenodd' })));
};
var ForwardRef$8T = React.forwardRef(SvgCardArrowLeft);

var SvgCardArrowRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 6, cy: 17, r: 1, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 7h20v4H2V7Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm20.604 18.25-.72-.72a.75.75 0 1 1 1.06-1.06l1.293 1.293a1.75 1.75 0 0 1 0 2.474l-1.292 1.293a.75.75 0 1 1-1.061-1.06l.72-.72H16a.75.75 0 0 1 0-1.5h4.604Z', clipRule: 'evenodd' })));
};
var ForwardRef$8S = React.forwardRef(SvgCardArrowRight);

var SvgCardArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 6, cy: 17, r: 1, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 7h20v4H2V7Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm19.25 17.396-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.292a.75.75 0 1 1-1.06 1.061l-.72-.72V21a.75.75 0 0 1-1.5 0v-3.604Z', clipRule: 'evenodd' })));
};
var ForwardRef$8R = React.forwardRef(SvgCardArrowUp);

var SvgCardCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 6, cy: 17, r: 1, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 7h20v4H2V7Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22.494 16.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .936-1.172l1.753 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z', clipRule: 'evenodd' })));
};
var ForwardRef$8Q = React.forwardRef(SvgCardCheck);

var SvgCardDash = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 7h20v4H2V7Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.25 17a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$8P = React.forwardRef(SvgCardDash);

var SvgCardDot = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 6, cy: 17, r: 1, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 7h20v4H2V7Z' })));
};
var ForwardRef$8O = React.forwardRef(SvgCardDot);

var SvgCardMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 6, cy: 17, r: 1, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 7h20v4H2V7Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22.75 18a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$8N = React.forwardRef(SvgCardMinus);

var SvgCardRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 6, cy: 17, r: 1, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 7h20v4H2V7Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21.652 15.349a.75.75 0 0 1 0 1.06L20.06 18l1.59 1.591a.75.75 0 1 1-1.06 1.06L19 19.062l-1.591 1.59a.75.75 0 0 1-1.06-1.06l1.59-1.59-1.59-1.592a.75.75 0 0 1 1.06-1.06L19 16.939l1.591-1.59a.75.75 0 0 1 1.06 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$8M = React.forwardRef(SvgCardRemove);

var SvgCardUser = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 6, cy: 17, r: 1, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 7h20v4H2V7Z' }),
        React__namespace.createElement("circle", { cx: 2, cy: 2, r: 2, fill: 'currentColor', transform: 'matrix(1 0 0 -1 17 18)' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19 18c1.282 0 2.401.804 3 2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1c.599-1.196 1.718-2 3-2Z' })));
};
var ForwardRef$8L = React.forwardRef(SvgCardUser);

var SvgCardWithdraw = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4 12a2 2 0 0 1 2-2h9a2 2 0 1 1 0 4H6a2 2 0 0 1-2-2Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15 14H6.167C4.97 14 4 14.895 4 16s.97 2 2.167 2H15a2 2 0 1 0 0-4Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 18a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm11.25 5.604-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.292a.75.75 0 0 0-1.06-1.061l-.72.72V2a.75.75 0 0 0-1.5 0v3.604Z', clipRule: 'evenodd' })));
};
var ForwardRef$8K = React.forwardRef(SvgCardWithdraw);

var SvgCardiogram = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12.765 4.702 12 5.524l-.765-.822c-2.113-2.27-5.538-2.27-7.65 0-2.113 2.27-2.113 5.95 0 8.22l6.885 7.397a2.06 2.06 0 0 0 3.06 0l6.886-7.397c2.112-2.27 2.112-5.95 0-8.22-2.113-2.27-5.538-2.27-7.651 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10 8.25a.75.75 0 0 1 .624.334L14 13.648l1.376-2.064A.75.75 0 0 1 16 11.25h5a.75.75 0 0 1 0 1.5h-4.599l-1.777 2.666a.75.75 0 0 1-1.248 0L10 10.352l-1.376 2.064A.75.75 0 0 1 8 12.75H3a.75.75 0 0 1 0-1.5h4.599l1.777-2.666A.75.75 0 0 1 10 8.25Z', clipRule: 'evenodd' })));
};
var ForwardRef$8J = React.forwardRef(SvgCardiogram);

var SvgCargoShip = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 2h8a2 2 0 0 1 2 2v9H6V4a2 2 0 0 1 2-2Zm5 3.75a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5h2Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm11.235 9.156-8.01 3.409c-1.133.482-1.572 1.886-.923 2.949l2.956 5.13a2.581 2.581 0 0 1 2.187.368 2.582 2.582 0 0 0 2.866.063l.186-.118a2.75 2.75 0 0 1 2.994.037A2.72 2.72 0 0 0 16.5 21c.46-.307.992-.458 1.522-.454l3.676-5.032c.65-1.063.21-2.467-.922-2.95l-8.011-3.408a1.95 1.95 0 0 0-1.53 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.376 22.416a.75.75 0 0 0 1.04.208l1.533-1.022a1.832 1.832 0 0 1 2.066.024 3.332 3.332 0 0 0 3.7.081l.184-.118a2 2 0 0 1 2.176.03 3.468 3.468 0 0 0 3.841.005 1.954 1.954 0 0 1 2.168 0l1.5 1a.75.75 0 1 0 .832-1.248l-1.5-1a3.454 3.454 0 0 0-3.832 0 1.969 1.969 0 0 1-2.177-.006 3.5 3.5 0 0 0-3.813-.046l-.185.118a1.832 1.832 0 0 1-2.034-.045 3.332 3.332 0 0 0-3.758-.043l-1.533 1.022a.75.75 0 0 0-.208 1.04Z', clipRule: 'evenodd' })));
};
var ForwardRef$8I = React.forwardRef(SvgCargoShip);

var SvgCargo = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 1.25a.75.75 0 0 1 .75.75v1.649l5.73 4.775a.75.75 0 1 1-.96 1.152L12 4.976l-5.52 4.6a.75.75 0 0 1-.96-1.152l5.73-4.775V2a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 12a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 11.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Zm-5 0a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Zm10 0a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$8H = React.forwardRef(SvgCargo);

var SvgCartAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.75 1.25a.75.75 0 0 0 0 1.5h2C5.44 2.75 6 3.31 6 4h1.5a2.75 2.75 0 0 0-2.75-2.75h-2Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 4h12a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V4Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 9.5, cy: 20.5, r: 1.5, fill: 'currentColor' }),
        React__namespace.createElement("circle", { cx: 18.5, cy: 20.5, r: 1.5, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14 7.25a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75V13a.75.75 0 0 1-1.5 0v-1.75H11.5a.75.75 0 0 1 0-1.5h1.75V8a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$8G = React.forwardRef(SvgCartAdd);

var SvgCartArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.75 1.25a.75.75 0 0 0 0 1.5h2C5.44 2.75 6 3.31 6 4h1.5a2.75 2.75 0 0 0-2.75-2.75h-2Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 4h12a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V4Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 9.5, cy: 20.5, r: 1.5, fill: 'currentColor' }),
        React__namespace.createElement("circle", { cx: 18.5, cy: 20.5, r: 1.5, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm13.25 12.19-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.293a.75.75 0 0 0-1.06-1.06l-.72.72V8a.75.75 0 0 0-1.5 0v4.19Z', clipRule: 'evenodd' })));
};
var ForwardRef$8F = React.forwardRef(SvgCartArrowDown);

var SvgCartArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.75 1.25a.75.75 0 0 0 0 1.5h2C5.44 2.75 6 3.31 6 4h1.5a2.75 2.75 0 0 0-2.75-2.75h-2Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 4h12a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V4Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 9.5, cy: 20.5, r: 1.5, fill: 'currentColor' }),
        React__namespace.createElement("circle", { cx: 18.5, cy: 20.5, r: 1.5, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm13.25 9.396-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.292a.75.75 0 1 1-1.06 1.061l-.72-.72v4.19a.75.75 0 0 1-1.5 0v-4.19Z', clipRule: 'evenodd' })));
};
var ForwardRef$8E = React.forwardRef(SvgCartArrowUp);

var SvgCartCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.75 1.25a.75.75 0 0 0 0 1.5h2C5.44 2.75 6 3.31 6 4h1.5a2.75 2.75 0 0 0-2.75-2.75h-2Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 4h12a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V4Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 9.5, cy: 20.5, r: 1.5, fill: 'currentColor' }),
        React__namespace.createElement("circle", { cx: 18.5, cy: 20.5, r: 1.5, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.494 8.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.753-1.402a.75.75 0 0 1 .938-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z', clipRule: 'evenodd' })));
};
var ForwardRef$8D = React.forwardRef(SvgCartCheck);

var SvgCartHasDash = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 4h12a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.75 1.25a.75.75 0 0 0 0 1.5h2C5.44 2.75 6 3.31 6 4h1.5a2.75 2.75 0 0 0-2.75-2.75h-2Z', clipRule: 'evenodd' }),
        React__namespace.createElement("circle", { cx: 9.5, cy: 20.5, r: 1.5, fill: 'currentColor' }),
        React__namespace.createElement("circle", { cx: 18.5, cy: 20.5, r: 1.5, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.25 8.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$8C = React.forwardRef(SvgCartHasDash);

var SvgCartMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.75 1.25a.75.75 0 0 0 0 1.5h2C5.44 2.75 6 3.31 6 4h1.5a2.75 2.75 0 0 0-2.75-2.75h-2Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 4h12a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V4Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 9.5, cy: 20.5, r: 1.5, fill: 'currentColor' }),
        React__namespace.createElement("circle", { cx: 18.5, cy: 20.5, r: 1.5, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.5 9.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$8B = React.forwardRef(SvgCartMinus);

var SvgCartRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.75 1.25a.75.75 0 0 0 0 1.5h2C5.44 2.75 6 3.31 6 4h1.5a2.75 2.75 0 0 0-2.75-2.75h-2Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 4h12a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V4Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 9.5, cy: 20.5, r: 1.5, fill: 'currentColor' }),
        React__namespace.createElement("circle", { cx: 18.5, cy: 20.5, r: 1.5, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.702 8.202a.75.75 0 0 1 1.06 0L14 9.44l1.237-1.238a.75.75 0 1 1 1.061 1.06L15.061 10.5l1.237 1.238a.75.75 0 0 1-1.06 1.06L14 11.561l-1.238 1.237a.75.75 0 0 1-1.06-1.06l1.237-1.238-1.237-1.237a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$8A = React.forwardRef(SvgCartRemove);

var SvgCartSmile = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.75 1.25a.75.75 0 0 0 0 1.5h2C5.44 2.75 6 3.31 6 4h1.5a2.75 2.75 0 0 0-2.75-2.75h-2Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 4h12a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V4Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 9.5, cy: 20.5, r: 1.5, fill: 'currentColor' }),
        React__namespace.createElement("circle", { cx: 18.5, cy: 20.5, r: 1.5, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.653 11.632a.75.75 0 0 1-.285 1.021c-1.215.686-2.262 1.095-3.365 1.097-1.105.002-2.154-.404-3.374-1.098a.75.75 0 0 1 .742-1.304c1.136.647 1.911.903 2.629.902.719-.001 1.494-.262 2.631-.903a.75.75 0 0 1 1.022.285Z', clipRule: 'evenodd' })));
};
var ForwardRef$8z = React.forwardRef(SvgCartSmile);

var SvgCart = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2 2a.75.75 0 0 1 .75-.75h2A2.75 2.75 0 0 1 7.5 4v1A.75.75 0 0 1 6 5V4c0-.69-.56-1.25-1.25-1.25h-2A.75.75 0 0 1 2 2Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 4h12a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V4Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 9.5, cy: 20.5, r: 1.5, fill: 'currentColor' }),
        React__namespace.createElement("circle", { cx: 18.5, cy: 20.5, r: 1.5, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 4H6v4h16a4 4 0 0 0-4-4Z' })));
};
var ForwardRef$8y = React.forwardRef(SvgCart);

var SvgCast = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 7v9a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M1.25 19a.75.75 0 0 1 .75-.75A2.75 2.75 0 0 1 4.75 21a.75.75 0 0 1-1.5 0c0-.69-.56-1.25-1.25-1.25a.75.75 0 0 1-.75-.75Zm0-4a.75.75 0 0 1 .75-.75A6.75 6.75 0 0 1 8.75 21a.75.75 0 0 1-1.5 0c0-2.9-2.35-5.25-5.25-5.25a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M1.25 11a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75a.75.75 0 0 1-1.5 0A9.25 9.25 0 0 0 2 11.75a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$8x = React.forwardRef(SvgCast);

var SvgCctv = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 18a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 7.5A1.5 1.5 0 0 1 3.5 6h17a1.5 1.5 0 0 1 0 3h-17A1.5 1.5 0 0 1 2 7.5Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 12a4 4 0 0 1 4 4v1.064A8.963 8.963 0 0 1 12 18a8.963 8.963 0 0 1-4-.936V16a4 4 0 0 1 4-4Zm0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$8w = React.forwardRef(SvgCctv);

var SvgChartArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2 1.25a.75.75 0 0 1 .75.75v16A3.25 3.25 0 0 0 6 21.25h16a.75.75 0 0 1 0 1.5H6A4.75 4.75 0 0 1 1.25 18V2A.75.75 0 0 1 2 1.25Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.47 9.47a.75.75 0 0 1 1.06 0l2.586 2.585a1.25 1.25 0 0 0 1.768 0l1.171-1.171a2.75 2.75 0 0 1 3.89 0l2.305 2.305V12.5a.75.75 0 0 1 1.5 0V14A1.75 1.75 0 0 1 19 15.75h-1.5a.75.75 0 0 1 0-1.5h.69l-2.306-2.306a1.25 1.25 0 0 0-1.768 0l-1.171 1.172a2.75 2.75 0 0 1-3.89 0L6.47 10.53a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$8v = React.forwardRef(SvgChartArrowDown);

var SvgChartArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2 1.25a.75.75 0 0 1 .75.75v16A3.25 3.25 0 0 0 6 21.25h16a.75.75 0 0 1 0 1.5H6A4.75 4.75 0 0 1 1.25 18V2A.75.75 0 0 1 2 1.25Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.75 9a.75.75 0 0 1 .75-.75H19c.966 0 1.75.784 1.75 1.75v1.5a.75.75 0 0 1-1.5 0v-.69l-2.305 2.306a2.75 2.75 0 0 1-3.89 0l-1.171-1.171a1.25 1.25 0 0 0-1.768 0L7.53 14.53a.75.75 0 0 1-1.06-1.06l2.585-2.586a2.75 2.75 0 0 1 3.89 0l1.171 1.171a1.25 1.25 0 0 0 1.768 0l2.305-2.305H17.5a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$8u = React.forwardRef(SvgChartArrowUp);

var SvgChartHistogram = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7 13.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm4-2a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Zm4 2a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm4-2a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2 1.25a.75.75 0 0 1 .75.75v16A3.25 3.25 0 0 0 6 21.25h16a.75.75 0 0 1 0 1.5H6A4.75 4.75 0 0 1 1.25 18V2A.75.75 0 0 1 2 1.25Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19.53 5.47a.75.75 0 0 1 0 1.06l-2.585 2.586a2.75 2.75 0 0 1-3.89 0l-1.171-1.171a1.25 1.25 0 0 0-1.768 0L7.53 10.53a.75.75 0 1 1-1.06-1.06l2.585-2.586a2.75 2.75 0 0 1 3.89 0l1.171 1.171a1.25 1.25 0 0 0 1.768 0L18.47 5.47a.75.75 0 0 1 1.06 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$8t = React.forwardRef(SvgChartHistogram);

var SvgClipboardActivity = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 18V8a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 4a2 2 0 0 1 2-2h4a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.12 10.26a.75.75 0 0 1 .55.405l1.536 3.069 1.264-1.264a.75.75 0 0 1 .53-.22h2a.75.75 0 0 1 0 1.5h-1.69l-1.78 1.78a.75.75 0 0 1-1.2-.195l-1.536-3.069L9.53 13.53a.75.75 0 0 1-.53.22H7a.75.75 0 0 1 0-1.5h1.69l1.78-1.78a.75.75 0 0 1 .65-.21Z', clipRule: 'evenodd' })));
};
var ForwardRef$8s = React.forwardRef(SvgClipboardActivity);

var SvgClipboardAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 18V8a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("rect", { width: 8, height: 4, x: 8, y: 2, fill: 'currentColor', rx: 2 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 10.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V17a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V11a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$8r = React.forwardRef(SvgClipboardAdd);

var SvgClipboardCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 18V8a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("rect", { width: 8, height: 4, x: 8, y: 2, fill: 'currentColor', rx: 2 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.494 11.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .937-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z', clipRule: 'evenodd' })));
};
var ForwardRef$8q = React.forwardRef(SvgClipboardCheck);

var SvgClipboardDelete = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 18V8a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("rect", { width: 8, height: 4, x: 8, y: 2, fill: 'currentColor', rx: 2 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14.652 11.349a.75.75 0 0 1 0 1.06L13.06 14l1.59 1.591a.75.75 0 1 1-1.06 1.06L12 15.062l-1.591 1.59a.75.75 0 1 1-1.06-1.06l1.59-1.59-1.59-1.592a.75.75 0 0 1 1.06-1.06L12 12.939l1.591-1.59a.75.75 0 0 1 1.06 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$8p = React.forwardRef(SvgClipboardDelete);

var SvgClipboardDownload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 18V8a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("rect", { width: 8, height: 4, x: 8, y: 2, fill: 'currentColor', rx: 2 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm12.75 15.19.72-.72a.75.75 0 1 1 1.06 1.06l-1.293 1.293a1.75 1.75 0 0 1-2.474 0L9.47 15.53a.75.75 0 0 1 1.06-1.06l.72.72V11a.75.75 0 1 1 1.5 0v4.19Z', clipRule: 'evenodd' })));
};
var ForwardRef$8o = React.forwardRef(SvgClipboardDownload);

var SvgClipboardFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 18V8a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("rect", { width: 8, height: 4, x: 8, y: 2, fill: 'currentColor', rx: 2 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm12.265 11.917-.265.265-.265-.265a1.875 1.875 0 1 0-2.652 2.652l1.856 1.856a1.5 1.5 0 0 0 2.122 0l1.856-1.857a1.875 1.875 0 1 0-2.652-2.651Z' })));
};
var ForwardRef$8n = React.forwardRef(SvgClipboardFavourite);

var SvgClipboardList = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 18V8a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("rect", { width: 8, height: 4, x: 8, y: 2, fill: 'currentColor', rx: 2 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.25 10a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M9.5 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' })));
};
var ForwardRef$8m = React.forwardRef(SvgClipboardList);

var SvgClipboardMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 18V8a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("rect", { width: 8, height: 4, x: 8, y: 2, fill: 'currentColor', rx: 2 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.75 14a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$8l = React.forwardRef(SvgClipboardMinus);

var SvgClipboardSearch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 18V8a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("rect", { width: 8, height: 4, x: 8, y: 2, fill: 'currentColor', rx: 2 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 10.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM8.25 13a3.75 3.75 0 1 1 6.879 2.068l.901.902a.75.75 0 1 1-1.06 1.06l-.902-.901A3.75 3.75 0 0 1 8.25 13Z', clipRule: 'evenodd' })));
};
var ForwardRef$8k = React.forwardRef(SvgClipboardSearch);

var SvgClipboardUpload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 18V8a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("rect", { width: 8, height: 4, x: 8, y: 2, fill: 'currentColor', rx: 2 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm12.75 12.396.72.72a.75.75 0 1 0 1.06-1.06l-1.293-1.293a1.75 1.75 0 0 0-2.474 0L9.47 12.056a.75.75 0 1 0 1.06 1.06l.72-.72v4.19a.75.75 0 0 0 1.5 0v-4.19Z', clipRule: 'evenodd' })));
};
var ForwardRef$8j = React.forwardRef(SvgClipboardUpload);

var SvgClipboard = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 18V8a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.25 10A.75.75 0 0 1 8 9.25h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("rect", { width: 8, height: 4, x: 8, y: 2, fill: 'currentColor', rx: 2 })));
};
var ForwardRef$8i = React.forwardRef(SvgClipboard);

var SvgCoinDollar = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 5.75a.75.75 0 0 1 .75.75v.854a2.75 2.75 0 0 1 2 2.646.75.75 0 0 1-1.5 0A1.25 1.25 0 1 0 12 11.25a2.75 2.75 0 0 1 .75 5.396v.854a.75.75 0 0 1-1.5 0v-.854a2.751 2.751 0 0 1-2-2.646.75.75 0 0 1 1.5 0A1.25 1.25 0 1 0 12 12.75a2.75 2.75 0 0 1-.75-5.396V6.5a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$8h = React.forwardRef(SvgCoinDollar);

var SvgCoinEuro = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.84 11.25a3.173 3.173 0 0 0 0 1.5H13a.75.75 0 0 1 0 1.5h-2.322c.604.615 1.455 1 2.405 1 .938 0 1.782-.377 2.387-.981a.75.75 0 1 1 1.06 1.06 4.863 4.863 0 0 1-3.447 1.421 4.85 4.85 0 0 1-4.258-2.5H8a.75.75 0 0 1 0-1.5h.31a4.715 4.715 0 0 1 0-1.5H8a.75.75 0 0 1 0-1.5h.825a4.85 4.85 0 0 1 4.258-2.5c1.348 0 2.57.543 3.447 1.42a.75.75 0 1 1-1.06 1.061 3.363 3.363 0 0 0-2.387-.981c-.95 0-1.8.385-2.405 1H13a.75.75 0 0 1 0 1.5H9.84Z', clipRule: 'evenodd' })));
};
var ForwardRef$8g = React.forwardRef(SvgCoinEuro);

var SvgCoinPound = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.48 9.385a2.135 2.135 0 1 1 4.27 0v.497a.75.75 0 1 1-1.5 0v-.497a.635.635 0 1 0-1.27 0v.57c0 .437-.04.87-.122 1.295H13a.75.75 0 0 1 0 1.5h-1.61a6.908 6.908 0 0 1-1.075 1.704.482.482 0 0 0 .365.796H14a.75.75 0 0 1 0 1.5h-3.32c-1.693 0-2.607-1.987-1.504-3.273.197-.228.373-.472.527-.727H9a.75.75 0 0 1 0-1.5h1.323c.104-.42.158-.856.158-1.295v-.57Z', clipRule: 'evenodd' })));
};
var ForwardRef$8f = React.forwardRef(SvgCoinPound);

var SvgCoinYen = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.55 6.4a.75.75 0 0 1 1.05.15l2.4 3.2 2.4-3.2a.75.75 0 0 1 1.2.9l-2.1 2.8H15a.75.75 0 1 1 0 1.5h-2.25v1.5H15a.75.75 0 1 1 0 1.5h-2.25V17a.75.75 0 1 1-1.5 0v-2.25H9a.75.75 0 1 1 0-1.5h2.25v-1.5H9a.75.75 0 1 1 0-1.5h1.5l-2.1-2.8a.75.75 0 0 1 .15-1.05Z', clipRule: 'evenodd' })));
};
var ForwardRef$8e = React.forwardRef(SvgCoinYen);

var SvgCoin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 4a2 2 0 1 1 0 4h-8a2 2 0 1 1 0-4h8Zm0 8a2 2 0 1 1 0 4h-8a2 2 0 1 1 0-4h8Z', opacity: 0.4 }),
        React__namespace.createElement("rect", { width: 4, height: 12, x: 16, y: 8, fill: 'currentColor', rx: 2, transform: 'rotate(90 16 8)' }),
        React__namespace.createElement("rect", { width: 4, height: 12, x: 17, y: 16, fill: 'currentColor', rx: 2, transform: 'rotate(90 17 16)' })));
};
var ForwardRef$8d = React.forwardRef(SvgCoin);

var SvgColorInversion = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 13.111C21 8.201 15.375 2 12 2v20c4.97 0 9-3.98 9-8.889Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 13.111C3 8.201 8.625 2 12 2v20c-4.97 0-9-3.98-9-8.889Z', opacity: 0.4 })));
};
var ForwardRef$8c = React.forwardRef(SvgColorInversion);

var SvgComputer = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.25 18v3.25H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25V18h-1.5Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.25 15a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$8b = React.forwardRef(SvgComputer);

var SvgCoupon = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 17a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-1c0-.552-.46-.984-.982-1.164a3.001 3.001 0 0 1 0-5.672C21.54 8.984 22 8.552 22 8V7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1c0 .552.46.984.982 1.164a3.001 3.001 0 0 1 0 5.672C2.46 15.016 2 15.448 2 16v1Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.53 8.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$8a = React.forwardRef(SvgCoupon);

var SvgCube = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm18.625 4.944-5-2.222a4 4 0 0 0-3.25 0l-5 2.222A4 4 0 0 0 3 8.6v6.8a4 4 0 0 0 2.375 3.656l5 2.222a4 4 0 0 0 3.25 0l5-2.222A4 4 0 0 0 21 15.4V8.6a4 4 0 0 0-2.375-3.656Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm18.625 4.944-5-2.222a4 4 0 0 0-3.25 0l-5 2.222a3.995 3.995 0 0 0-1.61 1.304L12 10l8.236-3.752a3.996 3.996 0 0 0-1.611-1.304Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 7.25a.75.75 0 0 1 .75.75v13.552a4 4 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75Z' })));
};
var ForwardRef$89 = React.forwardRef(SvgCube);

var SvgDarkMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2v20Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2v20Z', opacity: 0.4 })));
};
var ForwardRef$88 = React.forwardRef(SvgDarkMode);

var SvgDeliveryAirPlane = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.75 5a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm5.434 15.828-1.55-1.513a1.117 1.117 0 0 0-.78-.315c-.77 0-1.303.751-1.033 1.455l1.517 3.95C4.188 20.964 5.717 22 7.425 22h13.126c.8 0 1.449-.633 1.449-1.414a1.4 1.4 0 0 0-.424-1l-1.449-1.414A4.149 4.149 0 0 0 17.23 17h-8.9a4.149 4.149 0 0 1-2.897-1.172Z' })));
};
var ForwardRef$87 = React.forwardRef(SvgDeliveryAirPlane);

var SvgDeliveryCancel = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10 3H6a4 4 0 0 0-4 4v8a4.002 4.002 0 0 0 3.004 3.875A2 2 0 0 1 9 19h5V7a4 4 0 0 0-4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14 19V7h3.21a2 2 0 0 1 1.367.54l2.79 2.617a2 2 0 0 1 .633 1.46V17a2 2 0 0 1-2 2h-6Zm-4.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20.495 19a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.945 8.055a.75.75 0 0 1 0 1.061L9.06 10l.884.884a.75.75 0 0 1-1.061 1.06L8 11.061l-.884.883a.75.75 0 0 1-1.06-1.06L6.939 10l-.883-.884a.75.75 0 1 1 1.06-1.06L8 8.938l.884-.884a.75.75 0 0 1 1.06 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$86 = React.forwardRef(SvgDeliveryCancel);

var SvgDeliveryConveyor = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5 15a3 3 0 1 0 0 6h14a3 3 0 1 0 0-6H5Zm12 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-6 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6.75-13a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$85 = React.forwardRef(SvgDeliveryConveyor);

var SvgDeliveryDone = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10 3H6a4 4 0 0 0-4 4v8a4.002 4.002 0 0 0 3.004 3.875A2 2 0 0 1 9 19h5V7a4 4 0 0 0-4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14 19V7h3.21a2 2 0 0 1 1.367.54l2.79 2.617a2 2 0 0 1 .633 1.46V17a2 2 0 0 1-2 2h-6Zm-4.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20.495 19a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.494 7.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .937-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z', clipRule: 'evenodd' })));
};
var ForwardRef$84 = React.forwardRef(SvgDeliveryDone);

var SvgDeliveryParachute = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 5.25a.75.75 0 0 1 .75.75v6.446a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75ZM4.584 6.376a.75.75 0 0 1 1.04.208l4 6a.75.75 0 1 1-1.248.832l-4-6a.75.75 0 0 1 .208-1.04Zm14.832 0a.75.75 0 0 1 .208 1.04l-4 6a.75.75 0 1 1-1.248-.832l4-6a.75.75 0 0 1 1.04-.208Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 2C7.582 2 4 4.686 4 8c0-1.105 1.79-2 4-2s4 .895 4 2c0-1.105 1.79-2 4-2s3.883.972 4 2c0-3.314-3.582-6-8-6Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9 12a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H9Zm4 2.75a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5h2Z', clipRule: 'evenodd' })));
};
var ForwardRef$83 = React.forwardRef(SvgDeliveryParachute);

var SvgDeliveryTime = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10 3H6a4 4 0 0 0-4 4v8a4.002 4.002 0 0 0 3.004 3.875A2 2 0 0 1 9 19h5V7a4 4 0 0 0-4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14 19V7h3.21a2 2 0 0 1 1.367.54l2.79 2.617a2 2 0 0 1 .633 1.46V17a2 2 0 0 1-2 2h-6Zm-4.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20.495 19a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 6.75a.75.75 0 0 1 .75.75v2.75h1.75a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75V7.5A.75.75 0 0 1 8 6.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$82 = React.forwardRef(SvgDeliveryTime);

var SvgDelivery = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10 3H6a4 4 0 0 0-4 4v8a4.002 4.002 0 0 0 3.004 3.875A2 2 0 0 1 9 19h5V7a4 4 0 0 0-4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14 19V7h3.21a2 2 0 0 1 1.367.54l2.79 2.617a2 2 0 0 1 .633 1.46V17a2 2 0 0 1-2 2h-6Zm-4.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20.495 19a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z', opacity: 0.4 })));
};
var ForwardRef$81 = React.forwardRef(SvgDelivery);

var SvgDeposit = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 3h12a4 4 0 0 1 0 8V7H6v4a4 4 0 1 1 0-8Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 19V7H6v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm11.25 12.396-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.293a.75.75 0 1 1-1.06 1.06l-.72-.72v4.19a.75.75 0 0 1-1.5 0v-4.19Z', clipRule: 'evenodd' })));
};
var ForwardRef$80 = React.forwardRef(SvgDeposit);

var SvgDestinationDashedThree = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 7c0 2.21-2 6-4 6s-4-3.79-4-6a4 4 0 0 1 8 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.25 15A2.75 2.75 0 0 1 10 12.25h2a.75.75 0 0 1 0 1.5h-2a1.25 1.25 0 1 0 0 2.5h9a2.75 2.75 0 1 1 0 5.5H3a.75.75 0 0 1 0-1.5h16a1.25 1.25 0 1 0 0-2.5h-9A2.75 2.75 0 0 1 7.25 15Z', clipRule: 'evenodd' })));
};
var ForwardRef$7$ = React.forwardRef(SvgDestinationDashedThree);

var SvgDestinationDashedTwo = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10 16c0 2.21-2 6-4 6s-4-3.79-4-6a4 4 0 0 1 8 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.5 16a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20.225 8.607C21.055 7.56 22 6.123 22 5c0-2-1.343-3-3-3s-3 1-3 3.21c0 1.204.892 2.519 1.703 3.466.68.795 1.871.75 2.522-.07ZM19 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-1.47 4.97a.75.75 0 0 1 0 1.06l-.16.161a.75.75 0 1 1-1.061-1.06l.16-.161a.75.75 0 0 1 1.061 0Zm-2.089 2.089a.75.75 0 0 1 0 1.06l-.321.322a.75.75 0 1 1-1.061-1.06l.321-.322a.75.75 0 0 1 1.061 0Zm-2.25 2.25a.75.75 0 0 1 0 1.06l-.16.161a.75.75 0 1 1-1.061-1.06l.16-.161a.75.75 0 0 1 1.061 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$7_ = React.forwardRef(SvgDestinationDashedTwo);

var SvgDestinationLine = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M9 16c0 2.21-2 6-4 6s-4-3.79-4-6a4 4 0 0 1 8 0ZM22 5c0 1.123-.946 2.561-1.775 3.607-.651.82-1.841.864-2.522.069C16.892 7.729 16 6.414 16 5.209 16 3 17.343 2 19 2s3 1 3 3Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6.5 16a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.225 8.607C7.055 7.56 8 6.123 8 5c0-2-1.343-3-3-3S2 3 2 5.21c0 1.204.892 2.519 1.703 3.466.68.795 1.871.75 2.522-.07ZM5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18.03 10.97a.75.75 0 0 1 0 1.06l-.154.155a.75.75 0 0 1-1.061-1.06l.155-.155a.75.75 0 0 1 1.06 0Zm-2.012 2.012a.75.75 0 0 1 0 1.06l-.31.31a.75.75 0 0 1-1.06-1.06l.31-.31a.75.75 0 0 1 1.06 0Zm-2.166 2.166a.75.75 0 0 1 0 1.06l-.31.31a.75.75 0 1 1-1.06-1.06l.31-.31a.75.75 0 0 1 1.06 0Zm-2.167 2.167a.75.75 0 0 1 0 1.06l-.155.155a.75.75 0 1 1-1.06-1.06l.154-.155a.75.75 0 0 1 1.061 0ZM8.25 9.5A.75.75 0 0 1 9 8.75h.214a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm2.786 0a.75.75 0 0 1 .75-.75h.428a.75.75 0 0 1 0 1.5h-.428a.75.75 0 0 1-.75-.75Zm3 0a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-.214a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$7Z = React.forwardRef(SvgDestinationLine);

var SvgDestination = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10 16c0 2.21-2 6-4 6s-4-3.79-4-6a4 4 0 0 1 8 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.5 16a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.225 8.607C16.055 7.56 17 6.123 17 5c0-2-1.343-3-3-3s-3 1-3 3.21c0 1.204.892 2.519 1.703 3.466.68.795 1.871.75 2.522-.07ZM14 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 5.25a.75.75 0 0 1 .75.75v1A2.25 2.25 0 0 0 17 15.25h1a3.75 3.75 0 1 1 0 7.5h-7a.75.75 0 0 1 0-1.5h7a2.25 2.25 0 0 0 0-4.5h-1A3.75 3.75 0 0 1 13.25 13v-1a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$7Y = React.forwardRef(SvgDestination);

var SvgDevices = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 4h12a2 2 0 0 1 1.998 1.916H14.9a2 2 0 0 0-2 2V17H4V6a2 2 0 0 1 2-2Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14 9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V9Zm-1 8H3.5a1.5 1.5 0 0 0 0 3H13v-3Z' })));
};
var ForwardRef$7X = React.forwardRef(SvgDevices);

var SvgDigitalHealth = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm5.852 15.246 3.719 4.599c1.245 1.54 3.613 1.54 4.858 0l3.72-4.598A3.82 3.82 0 0 0 19 12.845v-.173C19 10.644 17.338 9 15.288 9a3.73 3.73 0 0 0-2.625 1.076L12 10.73l-.663-.655A3.733 3.733 0 0 0 8.712 9C6.662 9 5 10.644 5 12.672v.173c0 .873.3 1.72.852 2.401Z', opacity: 0.4 })));
};
var ForwardRef$7W = React.forwardRef(SvgDigitalHealth);

var SvgDirectionDownDoubleCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.4 8.55a.75.75 0 0 1 1.05-.15l2.8 2.1a1.25 1.25 0 0 0 1.5 0l2.8-2.1a.75.75 0 0 1 .9 1.2l-2.8 2.1a2.75 2.75 0 0 1-3.3 0l-2.8-2.1a.75.75 0 0 1-.15-1.05Zm0 5a.75.75 0 0 1 1.05-.15l2.8 2.1a1.25 1.25 0 0 0 1.5 0l2.8-2.1a.75.75 0 0 1 .9 1.2l-2.8 2.1a2.75 2.75 0 0 1-3.3 0l-2.8-2.1a.75.75 0 0 1-.15-1.05Z', clipRule: 'evenodd' })));
};
var ForwardRef$7V = React.forwardRef(SvgDirectionDownDoubleCircle);

var SvgDirectionDownDoubleRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.4 7.55a.75.75 0 0 1 1.05-.15l2.8 2.1a1.25 1.25 0 0 0 1.5 0l2.8-2.1a.75.75 0 0 1 .9 1.2l-2.8 2.1a2.75 2.75 0 0 1-3.3 0l-2.8-2.1a.75.75 0 0 1-.15-1.05Zm0 5a.75.75 0 0 1 1.05-.15l2.8 2.1a1.25 1.25 0 0 0 1.5 0l2.8-2.1a.75.75 0 0 1 .9 1.2l-2.8 2.1a2.75 2.75 0 0 1-3.3 0l-2.8-2.1a.75.75 0 0 1-.15-1.05Z', clipRule: 'evenodd' })));
};
var ForwardRef$7U = React.forwardRef(SvgDirectionDownDoubleRectangle);

var SvgDirectionDownDouble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.414 6.532a.75.75 0 0 1 1.055-.118L12 10.04l4.532-3.626a.75.75 0 1 1 .936 1.172l-5 4a.75.75 0 0 1-.937 0l-5-4a.75.75 0 0 1-.117-1.054Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.414 12.531a.75.75 0 0 1 1.055-.117L12 16.04l4.532-3.626a.75.75 0 1 1 .936 1.172l-5 4a.75.75 0 0 1-.937 0l-5-4a.75.75 0 0 1-.117-1.055Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$7T = React.forwardRef(SvgDirectionDownDouble);

var SvgDirectionDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.414 9.532a.75.75 0 0 1 1.055-.118L12 13.04l4.532-3.626a.75.75 0 1 1 .936 1.172l-5 4a.75.75 0 0 1-.937 0l-5-4a.75.75 0 0 1-.117-1.054Z', clipRule: 'evenodd' })));
};
var ForwardRef$7S = React.forwardRef(SvgDirectionDown);

var SvgDirectionLeftDoubleCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.45 7.4a.75.75 0 0 1 .15 1.05l-2.1 2.8a1.25 1.25 0 0 0 0 1.5l2.1 2.8a.75.75 0 1 1-1.2.9l-2.1-2.8a2.75 2.75 0 0 1 0-3.3l2.1-2.8a.75.75 0 0 1 1.05-.15Zm-5 0a.75.75 0 0 1 .15 1.05l-2.1 2.8a1.25 1.25 0 0 0 0 1.5l2.1 2.8a.75.75 0 1 1-1.2.9l-2.1-2.8a2.75 2.75 0 0 1 0-3.3l2.1-2.8a.75.75 0 0 1 1.05-.15Z', clipRule: 'evenodd' })));
};
var ForwardRef$7R = React.forwardRef(SvgDirectionLeftDoubleCircle);

var SvgDirectionLeftDoubleRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.45 7.4a.75.75 0 0 1 .15 1.05l-2.1 2.8a1.25 1.25 0 0 0 0 1.5l2.1 2.8a.75.75 0 1 1-1.2.9l-2.1-2.8a2.75 2.75 0 0 1 0-3.3l2.1-2.8a.75.75 0 0 1 1.05-.15Zm-5 0a.75.75 0 0 1 .15 1.05l-2.1 2.8a1.25 1.25 0 0 0 0 1.5l2.1 2.8a.75.75 0 1 1-1.2.9l-2.1-2.8a2.75 2.75 0 0 1 0-3.3l2.1-2.8a.75.75 0 0 1 1.05-.15Z', clipRule: 'evenodd' })));
};
var ForwardRef$7Q = React.forwardRef(SvgDirectionLeftDoubleRectangle);

var SvgDirectionLeftDouble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.468 6.414a.75.75 0 0 1 .118 1.055L13.96 12l3.626 4.532a.75.75 0 1 1-1.172.936l-4-5a.75.75 0 0 1 0-.937l4-5a.75.75 0 0 1 1.054-.117Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.469 6.414a.75.75 0 0 1 .117 1.055L7.96 12l3.626 4.532a.75.75 0 1 1-1.172.936l-4-5a.75.75 0 0 1 0-.937l4-5a.75.75 0 0 1 1.055-.117Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$7P = React.forwardRef(SvgDirectionLeftDouble);

var SvgDirectionLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14.469 6.414a.75.75 0 0 1 .117 1.055L10.96 12l3.626 4.532a.75.75 0 1 1-1.172.936l-4-5a.75.75 0 0 1 0-.937l4-5a.75.75 0 0 1 1.055-.117Z', clipRule: 'evenodd' })));
};
var ForwardRef$7O = React.forwardRef(SvgDirectionLeft);

var SvgDirectionRightDoubleCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.55 16.6a.75.75 0 0 1-.15-1.05l2.1-2.8a1.25 1.25 0 0 0 0-1.5l-2.1-2.8a.75.75 0 0 1 1.2-.9l2.1 2.8a2.75 2.75 0 0 1 0 3.3l-2.1 2.8a.75.75 0 0 1-1.05.15Zm5 0a.75.75 0 0 1-.15-1.05l2.1-2.8a1.25 1.25 0 0 0 0-1.5l-2.1-2.8a.75.75 0 0 1 1.2-.9l2.1 2.8a2.75 2.75 0 0 1 0 3.3l-2.1 2.8a.75.75 0 0 1-1.05.15Z', clipRule: 'evenodd' })));
};
var ForwardRef$7N = React.forwardRef(SvgDirectionRightDoubleCircle);

var SvgDirectionRightDoubleRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.55 16.6a.75.75 0 0 1-.15-1.05l2.1-2.8a1.25 1.25 0 0 0 0-1.5l-2.1-2.8a.75.75 0 0 1 1.2-.9l2.1 2.8a2.75 2.75 0 0 1 0 3.3l-2.1 2.8a.75.75 0 0 1-1.05.15Zm5 0a.75.75 0 0 1-.15-1.05l2.1-2.8a1.25 1.25 0 0 0 0-1.5l-2.1-2.8a.75.75 0 0 1 1.2-.9l2.1 2.8a2.75 2.75 0 0 1 0 3.3l-2.1 2.8a.75.75 0 0 1-1.05.15Z', clipRule: 'evenodd' })));
};
var ForwardRef$7M = React.forwardRef(SvgDirectionRightDoubleRectangle);

var SvgDirectionRightDouble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.532 6.414a.75.75 0 0 0-.118 1.055L10.04 12l-3.626 4.532a.75.75 0 1 0 1.172.936l4-5a.75.75 0 0 0 0-.937l-4-5a.75.75 0 0 0-1.054-.117Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.531 6.414a.75.75 0 0 0-.117 1.055L16.04 12l-3.626 4.532a.75.75 0 1 0 1.172.936l4-5a.75.75 0 0 0 0-.937l-4-5a.75.75 0 0 0-1.055-.117Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$7L = React.forwardRef(SvgDirectionRightDouble);

var SvgDirectionRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.532 6.414a.75.75 0 0 0-.118 1.055L13.04 12l-3.626 4.532a.75.75 0 1 0 1.172.936l4-5a.75.75 0 0 0 0-.937l-4-5a.75.75 0 0 0-1.054-.117Z', clipRule: 'evenodd' })));
};
var ForwardRef$7K = React.forwardRef(SvgDirectionRight);

var SvgDirectionUpDoubleCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.6 15.45a.75.75 0 0 1-1.05.15l-2.8-2.1a1.25 1.25 0 0 0-1.5 0l-2.8 2.1a.75.75 0 1 1-.9-1.2l2.8-2.1a2.75 2.75 0 0 1 3.3 0l2.8 2.1a.75.75 0 0 1 .15 1.05Zm0-5a.75.75 0 0 1-1.05.15l-2.8-2.1a1.25 1.25 0 0 0-1.5 0l-2.8 2.1a.75.75 0 1 1-.9-1.2l2.8-2.1a2.75 2.75 0 0 1 3.3 0l2.8 2.1a.75.75 0 0 1 .15 1.05Z', clipRule: 'evenodd' })));
};
var ForwardRef$7J = React.forwardRef(SvgDirectionUpDoubleCircle);

var SvgDirectionUpDoubleRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.6 15.45a.75.75 0 0 1-1.05.15l-2.8-2.1a1.25 1.25 0 0 0-1.5 0l-2.8 2.1a.75.75 0 1 1-.9-1.2l2.8-2.1a2.75 2.75 0 0 1 3.3 0l2.8 2.1a.75.75 0 0 1 .15 1.05Zm0-5a.75.75 0 0 1-1.05.15l-2.8-2.1a1.25 1.25 0 0 0-1.5 0l-2.8 2.1a.75.75 0 1 1-.9-1.2l2.8-2.1a2.75 2.75 0 0 1 3.3 0l2.8 2.1a.75.75 0 0 1 .15 1.05Z', clipRule: 'evenodd' })));
};
var ForwardRef$7I = React.forwardRef(SvgDirectionUpDoubleRectangle);

var SvgDirectionUpDouble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.414 17.468a.75.75 0 0 0 1.055.118L12 13.96l4.532 3.626a.75.75 0 1 0 .936-1.172l-5-4a.75.75 0 0 0-.937 0l-5 4a.75.75 0 0 0-.117 1.054Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.414 11.469a.75.75 0 0 0 1.055.117L12 7.96l4.532 3.626a.75.75 0 1 0 .936-1.172l-5-4a.75.75 0 0 0-.937 0l-5 4a.75.75 0 0 0-.117 1.055Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$7H = React.forwardRef(SvgDirectionUpDouble);

var SvgDirectionUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.586 14.469a.75.75 0 0 1-1.054.117L12 10.96l-4.531 3.626a.75.75 0 1 1-.937-1.172l5-4a.75.75 0 0 1 .937 0l5 4a.75.75 0 0 1 .117 1.055Z', clipRule: 'evenodd' })));
};
var ForwardRef$7G = React.forwardRef(SvgDirectionUp);

var SvgDna = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6.341 2C7.165 4.33 9.387 6 12 6h.341A6.003 6.003 0 0 0 18 2H6.341ZM12 18a6.002 6.002 0 0 0-5.659 4H18a6.003 6.003 0 0 0-5.659-4H12Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.868 13.259a6.026 6.026 0 0 0 0-2.518.948.948 0 0 1-.128.009H6.577a.94.94 0 0 1-.105-.006 6.024 6.024 0 0 0 0 2.512.94.94 0 0 1 .105-.006H17.74c.043 0 .086.003.128.009Zm-.534 1.491H7.007a6 6 0 0 0 5.164 3.248 6 6 0 0 0 5.163-3.248ZM12.17 6.002a6 6 0 0 1 5.163 3.248H7.007a6 6 0 0 1 5.164-3.248Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$7F = React.forwardRef(SvgDna);

var SvgDoNotDisturb = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.25 12a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$7E = React.forwardRef(SvgDoNotDisturb);

var SvgDollar = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2.25a.75.75 0 0 1 .75.75v1.316a4.251 4.251 0 0 1 3.5 4.184.75.75 0 0 1-1.5 0 2.75 2.75 0 0 0-2-2.646v5.462a4.251 4.251 0 0 1 0 8.368V21a.75.75 0 0 1-1.5 0v-1.316a4.251 4.251 0 0 1-3.5-4.184.75.75 0 0 1 1.5 0 2.75 2.75 0 0 0 2 2.646v-5.462a4.251 4.251 0 0 1 0-8.368V3a.75.75 0 0 1 .75-.75Zm-.75 3.604a2.751 2.751 0 0 0 0 5.292V5.854Zm1.5 7v5.293a2.751 2.751 0 0 0 0-5.293Z', clipRule: 'evenodd' })));
};
var ForwardRef$7D = React.forwardRef(SvgDollar);

var SvgDonateCoin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4 8H2v9l4.31 2.155A8 8 0 0 0 9.89 20H18a2 2 0 1 0 0-4h-1.584c-.931 0-1.85-.217-2.683-.633l-2.941-1.471a1.911 1.911 0 0 0-.53-3.156L4 8Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 18, cy: 8, r: 4, fill: 'currentColor' })));
};
var ForwardRef$7C = React.forwardRef(SvgDonateCoin);

var SvgDonate = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4 8H2v9l4.31 2.155A8 8 0 0 0 9.89 20H18a2 2 0 1 0 0-4h-1.584c-.931 0-1.85-.217-2.683-.633l-2.941-1.471a1.911 1.911 0 0 0-.53-3.156L4 8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm12.608 8.51 2.83 3.538a2 2 0 0 0 3.124 0l2.83-3.538A2.776 2.776 0 0 0 22 6.776v-.124A2.652 2.652 0 0 0 19.348 4h-.297c-.513 0-1.005.204-1.367.566a.967.967 0 0 1-1.368 0A1.934 1.934 0 0 0 14.95 4h-.297A2.652 2.652 0 0 0 12 6.652v.124c0 .63.214 1.242.608 1.734Z' })));
};
var ForwardRef$7B = React.forwardRef(SvgDonate);

var SvgDonation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4 9H2v9l4.31 2.155A8 8 0 0 0 9.89 21H18a2 2 0 1 0 0-4h-1.584c-.931 0-1.85-.217-2.683-.633l-2.941-1.471a1.911 1.911 0 0 0-.53-3.156L4 9Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15 3a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-5Zm3.5 3.75a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5h2Z', clipRule: 'evenodd' })));
};
var ForwardRef$7A = React.forwardRef(SvgDonation);

var SvgDownloadCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 13a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.47 10.47a.75.75 0 0 0 0 1.06l4 4a.75.75 0 0 0 1.06 0l4-4a.75.75 0 1 0-1.06-1.06l-2.72 2.72V1a.75.75 0 0 0-1.5 0v12.19l-2.72-2.72a.75.75 0 0 0-1.06 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$7z = React.forwardRef(SvgDownloadCircle);

var SvgDownloadRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7 9h10a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.47 11.47a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V3a.75.75 0 0 0-1.5 0v10.19l-1.72-1.72a.75.75 0 0 0-1.06 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$7y = React.forwardRef(SvgDownloadRectangle);

var SvgDribbble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 12c0 4.48 2.945 8.27 7.004 9.543A9.994 9.994 0 0 0 12 22a9.975 9.975 0 0 0 7.465-3.346A9.962 9.962 0 0 0 22 12a10.008 10.008 0 0 0-5.065-8.7A9.954 9.954 0 0 0 12 2a9.96 9.96 0 0 0-6.455 2.362A9.978 9.978 0 0 0 2 12Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M11.106 9.799a31.134 31.134 0 0 0-.833 1.886 16.783 16.783 0 0 0-3.742-.42c-1.566 0-3.086.215-4.53.62A10.186 10.186 0 0 0 2.1 13.42a15.249 15.249 0 0 1 4.431-.655c1.1 0 2.173.117 3.21.34A31.574 31.574 0 0 0 8.077 21.2a9.939 9.939 0 0 0 1.471.496c.17-2.867.738-5.622 1.646-8.206 3.132 1.004 5.853 2.994 7.829 5.628a10.035 10.035 0 0 0 1.005-1.155c-2.122-2.726-4.997-4.8-8.3-5.877.232-.566.48-1.123.745-1.67a16.731 16.731 0 0 0 6.227 1.196 16.8 16.8 0 0 0 3.275-.32 9.981 9.981 0 0 0-.216-1.487 15.3 15.3 0 0 1-3.059.307 15.24 15.24 0 0 1-5.536-1.036 29.234 29.234 0 0 1 4.018-5.631 9.996 9.996 0 0 0-1.387-.7 30.758 30.758 0 0 0-4.005 5.717 16.047 16.047 0 0 1-5.537-4.647 10.044 10.044 0 0 0-1.16.953 17.557 17.557 0 0 0 6.013 5.03Z' })));
};
var ForwardRef$7x = React.forwardRef(SvgDribbble);

var SvgDrive = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm2 16 3 5 2.778-5L12 8.4 9 3 2 16Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm19 21 3-5H7.778L5 21h14Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 16 15 3H9l3 5.4 4.222 7.6H22Z', opacity: 0.4 })));
};
var ForwardRef$7w = React.forwardRef(SvgDrive);

var SvgEarnings = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 16a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm-8-8a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.25 4a.75.75 0 0 1 .75-.75h4A2.75 2.75 0 0 1 20.75 6v4a.75.75 0 0 1-1.5 0V6c0-.06-.004-.12-.012-.177L4.53 20.53a.75.75 0 0 1-1.06-1.06L18.177 4.762A1.261 1.261 0 0 0 18 4.75h-4a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$7v = React.forwardRef(SvgEarnings);

var SvgEuro = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.86 10.75a7.126 7.126 0 0 0 0 2.5H16a.75.75 0 0 1 0 1.5H8.303c1.106 2.635 3.755 4.5 6.864 4.5 2.08 0 3.957-.836 5.303-2.182a.75.75 0 0 1 1.06 1.061 8.976 8.976 0 0 1-6.363 2.621c-3.936 0-7.292-2.508-8.468-6H3a.75.75 0 0 1 0-1.5h3.34a8.674 8.674 0 0 1 0-2.5H3a.75.75 0 0 1 0-1.5h3.699c1.176-3.492 4.532-6 8.468-6a8.976 8.976 0 0 1 6.363 2.62.75.75 0 1 1-1.06 1.062 7.476 7.476 0 0 0-5.303-2.182c-3.11 0-5.758 1.865-6.864 4.5H16a.75.75 0 0 1 0 1.5H7.86Z', clipRule: 'evenodd' })));
};
var ForwardRef$7u = React.forwardRef(SvgEuro);

var SvgExchangeRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.47 6.47a.75.75 0 0 1 1.06 0l2 2A.75.75 0 0 1 16 9.75h-6c-.69 0-1.25.56-1.25 1.25v1a.75.75 0 0 1-1.5 0v-1A2.75 2.75 0 0 1 10 8.25h4.19l-.72-.72a.75.75 0 0 1 0-1.06Zm-2.94 11.06a.75.75 0 0 1-1.06 0l-2-2A.75.75 0 0 1 8 14.25h6c.69 0 1.25-.56 1.25-1.25v-1a.75.75 0 0 1 1.5 0v1A2.75 2.75 0 0 1 14 15.75H9.81l.72.72a.75.75 0 0 1 0 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$7t = React.forwardRef(SvgExchangeRectangle);

var SvgExchange = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.47 3.47a.75.75 0 0 1 1.06 0l3 3A.75.75 0 0 1 20 7.75H9A4.25 4.25 0 0 0 4.75 12v1a.75.75 0 0 1-1.5 0v-1A5.75 5.75 0 0 1 9 6.25h9.19l-1.72-1.72a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.53 20.53a.75.75 0 0 1-1.06 0l-3-3A.75.75 0 0 1 4 16.25h11A4.25 4.25 0 0 0 19.25 12v-1a.75.75 0 0 1 1.5 0v1A5.75 5.75 0 0 1 15 17.75H5.81l1.72 1.72a.75.75 0 0 1 0 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$7s = React.forwardRef(SvgExchange);

var SvgEyeDropper = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm16.607 3.414-2.121 2.122 2.828 2.828 2.121-2.121a2 2 0 1 0-2.828-2.829Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm8.586 11.435 5.9-5.9 2.828 2.829-5.9 5.9a4 4 0 0 1-2.828 1.17H7.414v-1.17a4 4 0 0 1 1.172-2.83Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.198 9.308 13.54 5.652a.75.75 0 0 1 1.06-1.061l3.658 3.657a.75.75 0 1 1-1.061 1.06Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.737 20.131c0 1.377-.836 1.87-1.868 1.87S4 21.506 4 20.13c0-1.375 1.869-3.114 1.869-3.114s1.868 1.739 1.868 3.114Z' })));
};
var ForwardRef$7r = React.forwardRef(SvgEyeDropper);

var SvgEyeScannerBorder = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 17c3.078 0 5.75-2.427 7.088-3.899a1.62 1.62 0 0 0 0-2.202C17.75 9.426 15.078 7 12 7c-3.078 0-5.75 2.426-7.088 3.899a1.62 1.62 0 0 0 0 2.202C6.25 14.573 8.922 17 12 17Zm0-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 2.75A3.25 3.25 0 0 0 2.75 6v2a.75.75 0 0 1-1.5 0V6A4.75 4.75 0 0 1 6 1.25h2a.75.75 0 0 1 0 1.5H6ZM15.25 2a.75.75 0 0 1 .75-.75h2A4.75 4.75 0 0 1 22.75 6v2a.75.75 0 0 1-1.5 0V6A3.25 3.25 0 0 0 18 2.75h-2a.75.75 0 0 1-.75-.75ZM22 15.25a.75.75 0 0 1 .75.75v2A4.75 4.75 0 0 1 18 22.75h-2a.75.75 0 0 1 0-1.5h2A3.25 3.25 0 0 0 21.25 18v-2a.75.75 0 0 1 .75-.75Zm-20 .556a.75.75 0 0 1 .75.75V18A3.25 3.25 0 0 0 6 21.25h2a.75.75 0 0 1 0 1.5H6A4.75 4.75 0 0 1 1.25 18v-1.444a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$7q = React.forwardRef(SvgEyeScannerBorder);

var SvgEye = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19.102 10.086a2.487 2.487 0 0 1 0 3.828C17.45 15.324 14.883 17 12 17s-5.45-1.675-7.102-3.086a2.487 2.487 0 0 1 0-3.828C6.55 8.676 9.117 7 12 7s5.45 1.675 7.102 3.086Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM2.47 4.47a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06Zm19.06 0a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0Zm-16.5 12.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 0 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0Zm13.94 0a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06ZM12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$7p = React.forwardRef(SvgEye);

var SvgFacebookSquare = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M17 7h-2.5a4 4 0 0 0-4 4v2H7v3h3.5v6h3v-6H17v-3h-3.5v-2a1 1 0 0 1 1-1H17V7Z' })));
};
var ForwardRef$7o = React.forwardRef(SvgFacebookSquare);

var SvgFacebook = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 3h-3a5 5 0 0 0-5 5v13h4V8a1 1 0 0 1 1-1h3V3Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 14h12v-4H6v4Z' })));
};
var ForwardRef$7n = React.forwardRef(SvgFacebook);

var SvgFastDelivery = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10 3H6a4 4 0 0 0-4 4v8a4.002 4.002 0 0 0 3.004 3.875A2 2 0 0 1 9 19h5V7a4 4 0 0 0-4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14 19V7h3.21a2 2 0 0 1 1.367.54l2.79 2.617a2 2 0 0 1 .633 1.46V17a2 2 0 0 1-2 2h-6Zm-4.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20.495 19a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.25 8A.75.75 0 0 1 8 7.25h2a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 8Zm-2 4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$7m = React.forwardRef(SvgFastDelivery);

var SvgFastTime = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 5.25a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0V6a.75.75 0 0 0-.75-.75Zm.97 7.72a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 1 0 1.06-1.06l-1.5-1.5a.75.75 0 0 0-1.06 0ZM1.25 18a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm0-6a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$7l = React.forwardRef(SvgFastTime);

var SvgFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12.765 4.702 12 5.524l-.765-.822c-2.113-2.27-5.538-2.27-7.65 0-2.113 2.27-2.113 5.95 0 8.22l6.885 7.397a2.06 2.06 0 0 0 3.06 0l6.886-7.397c2.112-2.27 2.112-5.95 0-8.22-2.113-2.27-5.538-2.27-7.651 0Z', opacity: 0.4 })));
};
var ForwardRef$7k = React.forwardRef(SvgFavourite);

var SvgFigma = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 3h3a3 3 0 1 1 0 6h-3V3Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 12a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 18a3 3 0 0 1 3-3h3v3a3 3 0 1 1-6 0Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 15, cy: 12, r: 3, fill: 'currentColor', opacity: 0.4 })));
};
var ForwardRef$7j = React.forwardRef(SvgFigma);

var SvgFilterBigCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.25 8A.75.75 0 0 1 3 7.25h4a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 8Zm0 8a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm14 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm-3-8a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-6-8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z', opacity: 0.4 })));
};
var ForwardRef$7i = React.forwardRef(SvgFilterBigCircle);

var SvgFilterSmallCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6Zm0 6a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm15 0a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Zm-7 6a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.75-.75Zm-8 0a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M9 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm10-6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5-6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z', opacity: 0.4 })));
};
var ForwardRef$7h = React.forwardRef(SvgFilterSmallCircle);

var SvgFingerPrintBorder = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 2.75A3.25 3.25 0 0 0 2.75 6v2a.75.75 0 0 1-1.5 0V6A4.75 4.75 0 0 1 6 1.25h2a.75.75 0 0 1 0 1.5H6ZM15.25 2a.75.75 0 0 1 .75-.75h2A4.75 4.75 0 0 1 22.75 6v2a.75.75 0 0 1-1.5 0V6A3.25 3.25 0 0 0 18 2.75h-2a.75.75 0 0 1-.75-.75ZM2 15.25a.75.75 0 0 1 .75.75v2A3.25 3.25 0 0 0 6 21.25h2a.75.75 0 0 1 0 1.5H6A4.75 4.75 0 0 1 1.25 18v-2a.75.75 0 0 1 .75-.75Zm20 0a.75.75 0 0 1 .75.75v2A4.75 4.75 0 0 1 18 22.75h-2a.75.75 0 0 1 0-1.5h2A3.25 3.25 0 0 0 21.25 18v-2a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13 9.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13 7.75A2.25 2.25 0 0 0 10.75 10v2.657c0 1.7-.675 3.329-1.877 4.53l-.343.343a.75.75 0 0 1-1.06-1.06l.343-.343a4.907 4.907 0 0 0 1.437-3.47V10a3.75 3.75 0 1 1 7.5 0v2.657c0 1.7-.675 3.329-1.877 4.53l-.343.343a.75.75 0 1 1-1.06-1.06l.343-.343a4.907 4.907 0 0 0 1.437-3.47V10A2.25 2.25 0 0 0 13 7.75Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$7g = React.forwardRef(SvgFingerPrintBorder);

var SvgFingerPrint = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 7.25A2.75 2.75 0 0 0 9.25 10v6.515a6.75 6.75 0 0 1-1.977 4.773l-.243.242a.75.75 0 0 1-1.06-1.06l.242-.243a5.25 5.25 0 0 0 1.538-3.712V10a4.25 4.25 0 0 1 8.5 0v6.515a6.75 6.75 0 0 1-1.977 4.773l-.243.242a.75.75 0 1 1-1.06-1.06l.242-.243a5.25 5.25 0 0 0 1.538-3.712V10A2.75 2.75 0 0 0 12 7.25Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 3.75A6.25 6.25 0 0 0 5.75 10v7a.75.75 0 0 1-1.5 0v-7a7.75 7.75 0 1 1 15.5 0v7a.75.75 0 0 1-1.5 0v-7A6.25 6.25 0 0 0 12 3.75Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$7f = React.forwardRef(SvgFingerPrint);

var SvgFiverr = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16 3h-4a5 5 0 0 0-5 5v2H4v4h3v7h4v-7h5v7h4V10h-9V8a1 1 0 0 1 1-1h4V3Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 14v-4h-4v11h4v-7Z' })));
};
var ForwardRef$7e = React.forwardRef(SvgFiverr);

var SvgFlagCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.75 16.095C5.87 16.427 3 17.602 3 19c0 1.657 4.03 3 9 3s9-1.343 9-3c0-1.398-2.868-2.572-6.75-2.905V18a2.25 2.25 0 1 1-4.5 0v-1.905Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12.75 18a.75.75 0 0 1-1.5 0l.005-14a2 2 0 0 1 2-2h5.382a1 1 0 0 1 .894 1.447l-1.053 2.106a1 1 0 0 0 0 .894l1.053 2.106A1 1 0 0 1 18.637 10H12.75v8Z' })));
};
var ForwardRef$7d = React.forwardRef(SvgFlagCircle);

var SvgFlag = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.75 16H7.875A4 4 0 0 0 4.8 17.44l-1.067 1.28C2.648 20.022 3.574 22 5.27 22h13.46c1.696 0 2.622-1.978 1.537-3.28L19.2 17.44A4 4 0 0 0 16.127 16H14.25v1.5a2.25 2.25 0 0 1-4.5 0V16Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12.75 17.5a.75.75 0 0 1-1.5 0l.005-14a2 2 0 0 1 2-2h5.382a1 1 0 0 1 .894 1.447l-1.053 2.106a1 1 0 0 0 0 .894l1.053 2.106a1 1 0 0 1-.894 1.447H12.75v8Z' })));
};
var ForwardRef$7c = React.forwardRef(SvgFlag);

var SvgFlashAuto = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 13.5 12 2v8.5h5L8 22v-8.5H3Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18.5 1.25a.75.75 0 0 1 .692.462l2.5 6a.75.75 0 0 1-1.384.576l-.641-1.538h-2.334l-.64 1.538a.75.75 0 0 1-1.385-.576l2.5-6a.75.75 0 0 1 .692-.462Zm-.542 4h1.084l-.542-1.3-.542 1.3Z', clipRule: 'evenodd' })));
};
var ForwardRef$7b = React.forwardRef(SvgFlashAuto);

var SvgFlashLight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M17.143 2H6.857A.857.857 0 0 0 6 2.857a5.144 5.144 0 0 0 3 4.677V19a3 3 0 1 0 6 0V7.534c1.77-.813 3-2.601 3-4.677A.857.857 0 0 0 17.143 2Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 8.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$7a = React.forwardRef(SvgFlashLight);

var SvgFlashOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14.5 10.5H19l-2.5 3L10 7l4-5v8.5h.5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10 13.5H5l3.732-4.768 6.536 6.537L10 22v-8.5Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3.47 3.47a.75.75 0 0 1 1.06 0l16 16a.75.75 0 1 1-1.06 1.06l-16-16a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$79 = React.forwardRef(SvgFlashOff);

var SvgFlash = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M5 13.5 14 2v8.5h5L10 22v-8.5H5Z', opacity: 0.4 })));
};
var ForwardRef$78 = React.forwardRef(SvgFlash);

var SvgGiveBlood = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14 8.056c0-1.984 1.685-3.943 2.868-5.075a1.621 1.621 0 0 1 2.264 0C20.315 4.113 22 6.072 22 8.056 22 10 20.485 12 18 12c-2.485 0-4-2-4-3.944Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4 10H2v9l4.31 2.155A8 8 0 0 0 9.89 22H18a2 2 0 1 0 0-4h-1.584c-.931 0-1.85-.217-2.683-.633l-2.714-1.721a1.911 1.911 0 0 0-.757-2.906L4 10Z', opacity: 0.4 })));
};
var ForwardRef$77 = React.forwardRef(SvgGiveBlood);

var SvgGivePill = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16 5a3 3 0 1 1 6 0v6a3 3 0 1 1-6 0V5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16 8h6v3a3 3 0 1 1-6 0V8Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4 10H2v9l4.31 2.155A8 8 0 0 0 9.89 22H18a2 2 0 1 0 0-4h-1.584c-.931 0-1.85-.217-2.683-.633l-2.714-1.721a1.911 1.911 0 0 0-.757-2.906L4 10Z', opacity: 0.4 })));
};
var ForwardRef$76 = React.forwardRef(SvgGivePill);

var SvgGlassBroken = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.75 13.996v7.254H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25v-7.254h1.5Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M11.233 14h1.534c4.342 0 7.247-4.47 5.483-8.437l-1.32-2.97A1 1 0 0 0 16.018 2H7.983a1 1 0 0 0-.914.594l-1.32 2.97C3.987 9.53 6.892 14 11.234 14Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.835 4.33a.75.75 0 0 1 .336 1.006l-.957 1.914H13a.75.75 0 0 1 .67 1.086l-1.5 3a.75.75 0 1 1-1.34-.671l.957-1.915H11a.75.75 0 0 1-.67-1.085l1.5-3a.75.75 0 0 1 1.005-.336Z', clipRule: 'evenodd' })));
};
var ForwardRef$75 = React.forwardRef(SvgGlassBroken);

var SvgGlobeEarth = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 22c5.523 0 10-4.477 10-10a9.993 9.993 0 0 0-4.655-8.453A9.953 9.953 0 0 0 12 2c-5.147 0-9.386 3.889-9.939 8.889a9.98 9.98 0 0 0 3.653 8.889A9.958 9.958 0 0 0 12 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18.667 16.444a2.222 2.222 0 0 1-2.223-2.222A2.222 2.222 0 0 0 14.222 12a2.222 2.222 0 1 1 0-4.445 2.222 2.222 0 0 0 2.222-2.222c0-.732.355-1.382.9-1.786A9.993 9.993 0 0 1 22 12a9.958 9.958 0 0 1-1.04 4.444h-2.293ZM4.222 10.889c1.228 0 2.222.995 2.222 2.222 0 1.227.995 2.222 2.223 2.222a2.222 2.222 0 1 1 0 4.445H5.714a9.98 9.98 0 0 1-3.653-8.89h2.161Z' })));
};
var ForwardRef$74 = React.forwardRef(SvgGlobeEarth);

var SvgGlobe = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("circle", { cx: 12, cy: 12, r: 10, fill: 'currentColor', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.557 8.072c.162-.93.378-1.765.636-2.474.293-.806.627-1.414.966-1.808.34-.396.627-.513.841-.513.214 0 .5.117.841.513.34.394.673 1.002.966 1.808.258.709.475 1.544.637 2.474A25.789 25.789 0 0 0 12 7.957c-.841 0-1.66.04-2.443.115Zm-1.32.164c.177-1.148.435-2.19.756-3.074.323-.888.722-1.65 1.198-2.204.474-.551 1.083-.958 1.81-.958.725 0 1.334.407 1.808.958.476.553.876 1.316 1.198 2.204.322.885.58 1.926.757 3.074 1.148.178 2.19.435 3.074.757.888.323 1.651.722 2.204 1.198.551.474.958 1.083.958 1.809s-.407 1.335-.958 1.81c-.553.475-1.316.874-2.204 1.197-.884.322-1.926.58-3.074.757-.178 1.148-.435 2.19-.757 3.074-.322.887-.722 1.65-1.198 2.204-.474.551-1.083.958-1.809.958s-1.335-.407-1.809-.958c-.476-.553-.875-1.317-1.198-2.204-.321-.885-.579-1.926-.757-3.074-1.148-.178-2.19-.435-3.074-.757-.887-.323-1.65-.722-2.204-1.198C2.407 13.335 2 12.726 2 12s.407-1.335.958-1.81c.553-.475 1.317-.874 2.204-1.197.885-.322 1.926-.58 3.074-.757Zm-.165 6.207a14.69 14.69 0 0 1-2.473-.636c-.807-.293-1.414-.627-1.809-.966-.396-.34-.513-.627-.513-.841 0-.214.117-.5.513-.841.395-.339 1.002-.673 1.809-.966a14.686 14.686 0 0 1 2.473-.636A25.79 25.79 0 0 0 7.958 12c0 .841.04 1.66.114 2.443Zm1.302.183c-.09-.828-.14-1.71-.14-2.626 0-.917.05-1.798.14-2.627A24.39 24.39 0 0 1 12 9.234c.917 0 1.799.05 2.627.14.09.828.14 1.71.14 2.626 0 .917-.05 1.798-.14 2.626-.828.09-1.71.14-2.627.14-.916 0-1.798-.05-2.626-.14Zm.183 1.302c.162.93.378 1.765.636 2.473.293.807.627 1.415.966 1.809.34.396.627.513.841.513.214 0 .5-.117.841-.513.34-.394.673-1.002.966-1.809.258-.708.475-1.543.637-2.473-.783.075-1.602.114-2.444.114-.841 0-1.66-.039-2.443-.114Zm6.372-1.485a14.69 14.69 0 0 0 2.473-.636c.806-.293 1.414-.627 1.808-.966.396-.34.514-.627.514-.841 0-.214-.118-.5-.514-.841-.394-.339-1.002-.673-1.808-.966a14.686 14.686 0 0 0-2.473-.636 26.011 26.011 0 0 1 0 4.886Z', clipRule: 'evenodd' })));
};
var ForwardRef$73 = React.forwardRef(SvgGlobe);

var SvgGmail = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 3H6a4 4 0 0 0-4 4l7.501 6.001a4 4 0 0 0 4.998 0L22 7a4 4 0 0 0-4-4Z' })));
};
var ForwardRef$72 = React.forwardRef(SvgGmail);

var SvgGold = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8.392 8.153A1.5 1.5 0 0 1 9.852 7h4.296a1.5 1.5 0 0 1 1.46 1.153l.952 4A1.5 1.5 0 0 1 15.1 14H8.9a1.5 1.5 0 0 1-1.46-1.847l.952-4Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3.392 15.153A1.5 1.5 0 0 1 4.852 14h4.297a1.5 1.5 0 0 1 1.459 1.153l.952 4A1.5 1.5 0 0 1 10.101 21H3.899a1.5 1.5 0 0 1-1.46-1.847l.953-4Zm10 0A1.5 1.5 0 0 1 14.852 14h4.297a1.5 1.5 0 0 1 1.459 1.153l.952 4A1.5 1.5 0 0 1 20.101 21h-6.202a1.5 1.5 0 0 1-1.46-1.847l.953-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75Zm6.53 1.22a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0Zm-13.06 0a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$71 = React.forwardRef(SvgGold);

var SvgGooglePlus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19.25 14a.75.75 0 0 0 1.5 0v-1.25H22a.75.75 0 0 0 0-1.5h-1.25V10a.75.75 0 0 0-1.5 0v1.25H18a.75.75 0 0 0 0 1.5h1.25V14Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M9 19a7 7 0 0 0 7-7v-.037c-.003-.585-.51-1.013-1.095-1.013H10.05a1.05 1.05 0 1 0 0 2.1h3.737A4.902 4.902 0 0 1 4.1 12a4.9 4.9 0 0 1 7.55-4.123c.487.314 1.147.326 1.557-.084.41-.41.414-1.083-.052-1.427A7 7 0 1 0 9 19Z', opacity: 0.4 })));
};
var ForwardRef$70 = React.forwardRef(SvgGooglePlus);

var SvgGoogle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 13.5v-3h9.888c.074.49.112.99.112 1.5 0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2a9.969 9.969 0 0 1 7.071 2.929L16.95 7.05a7 7 0 1 0 1.89 6.45H12Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 13.5v-3h9.888a10.08 10.08 0 0 1 0 3H12Z' })));
};
var ForwardRef$6$ = React.forwardRef(SvgGoogle);

var SvgGpsCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM1.25 12a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm17 0a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM12 18.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', clipRule: 'evenodd' })));
};
var ForwardRef$6_ = React.forwardRef(SvgGpsCircle);

var SvgGpsOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm0 18a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75ZM22.75 12a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Zm-18 0a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 20A8 8 0 0 1 6.898 5.837l11.264 11.265A7.983 7.983 0 0 1 12 20Zm0-5a3 3 0 0 1-1.524-5.584l4.109 4.108A2.998 2.998 0 0 1 12 15Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15 12a3 3 0 0 0-4.524-2.585l4.109 4.109c.264-.447.415-.968.415-1.524Z' })));
};
var ForwardRef$6Z = React.forwardRef(SvgGpsOff);

var SvgGpsSend = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM1.25 12a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm17 0a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM12 18.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-2.752-7.584 1.515.505a.5.5 0 0 1 .316.316l.505 1.515a.5.5 0 0 0 .934.04l1.99-4.643a.5.5 0 0 0-.657-.657l-4.642 1.99a.5.5 0 0 0 .039.934Z', clipRule: 'evenodd' })));
};
var ForwardRef$6Y = React.forwardRef(SvgGpsSend);

var SvgGps = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm0 18a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75ZM22.75 12a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Zm-18 0a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' })));
};
var ForwardRef$6X = React.forwardRef(SvgGps);

var SvgGraphicEq = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 6.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7A.75.75 0 0 1 8 6.25Zm8 0a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M4 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4A.75.75 0 0 1 4 9.25Zm16 0a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$6W = React.forwardRef(SvgGraphicEq);

var SvgHanger = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 4.75c-.734 0-1.299.577-1.299 1.25a.75.75 0 0 1-1.5 0c0-1.536 1.27-2.75 2.799-2.75S14.799 4.464 14.799 6c0 .55-.166 1.064-.449 1.494a9.006 9.006 0 0 1-.575.756l-.103.125c-.158.192-.304.367-.438.548-.21.282-.348.518-.421.73l8.754 6.104c2.259 1.575 1.065 4.993-1.62 4.993H4.053c-2.684 0-3.878-3.418-1.62-4.993l8.854-6.173c.107-.62.436-1.142.745-1.558.16-.214.334-.425.493-.617l.094-.113c.19-.23.35-.432.48-.628.127-.194.2-.422.2-.668 0-.673-.564-1.25-1.298-1.25Zm0 6.164-8.71 6.074c-.984.687-.539 2.262.762 2.262h15.896c1.3 0 1.746-1.575.761-2.262L12 10.914Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10.701 6c0-.673.565-1.25 1.299-1.25s1.299.577 1.299 1.25c0 .246-.073.474-.201.668-.13.196-.29.398-.48.628l-.094.113a16.05 16.05 0 0 0-.493.617c-.305.41-.629.923-.74 1.531h1.558c.079-.187.206-.394.385-.634.134-.18.28-.356.438-.548l.103-.125a8.97 8.97 0 0 0 .575-.756c.283-.43.449-.944.449-1.494 0-1.536-1.27-2.75-2.799-2.75-1.528 0-2.799 1.214-2.799 2.75a.75.75 0 1 0 1.5 0Z' })));
};
var ForwardRef$6V = React.forwardRef(SvgHanger);

var SvgHangout = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 22c4.97 0 9-6.03 9-11a9 9 0 1 0-9 9v2Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M13.5 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v2a1.5 1.5 0 0 1-.78 1.317c-.364.198-.72-.153-.72-.567a.75.75 0 0 0-.75-.75.75.75 0 0 1-.75-.75V10Zm-6 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v2a1.5 1.5 0 0 1-.78 1.317c-.364.198-.72-.153-.72-.567a.75.75 0 0 0-.75-.75.75.75 0 0 1-.75-.75V10Z' })));
};
var ForwardRef$6U = React.forwardRef(SvgHangout);

var SvgHealthCare = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.459 2.946 16 3.402l-.459-.456a3.258 3.258 0 0 0-4.59 0 3.217 3.217 0 0 0 0 4.566l4.13 4.11c.508.504 1.33.504 1.837 0l4.131-4.11a3.217 3.217 0 0 0 0-4.566 3.258 3.258 0 0 0-4.59 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4 10H2v9l4.31 2.155A8 8 0 0 0 9.89 22H18a2 2 0 1 0 0-4h-1.584c-.931 0-1.85-.217-2.683-.633l-2.714-1.721a1.911 1.911 0 0 0-.757-2.906L4 10Z', opacity: 0.4 })));
};
var ForwardRef$6T = React.forwardRef(SvgHealthCare);

var SvgHeart = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12.765 4.702 12 5.524l-.765-.822c-2.113-2.27-5.538-2.27-7.65 0-2.113 2.27-2.113 5.95 0 8.22l6.885 7.397a2.06 2.06 0 0 0 3.06 0l6.886-7.397c2.112-2.27 2.112-5.95 0-8.22-2.113-2.27-5.538-2.27-7.651 0Z', opacity: 0.4 })));
};
var ForwardRef$6S = React.forwardRef(SvgHeart);

var SvgHomeAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 10.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.75 14a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$6R = React.forwardRef(SvgHomeAdd);

var SvgHomeArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.25 17c0 .414.336.75.75.75h2a.75.75 0 0 0 .67-.415l1-2a.75.75 0 0 0-1.34-.67l-.33.658-1.435-2.87c-.645-1.29-2.485-1.29-3.13 0l-1.211 2.423a.25.25 0 0 1-.448 0l-2.105-4.211a.75.75 0 1 0-1.342.67l2.106 4.212c.645 1.29 2.485 1.29 3.13 0l1.211-2.423a.25.25 0 0 1 .448 0l1.563 3.126H14a.75.75 0 0 0-.75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$6Q = React.forwardRef(SvgHomeArrowDown);

var SvgHomeArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.25 11a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .67.415l1 2a.75.75 0 0 1-1.34.67l-.33-.658-1.435 2.87c-.645 1.29-2.485 1.29-3.13 0l-1.211-2.423a.25.25 0 0 0-.448 0l-2.105 4.211a.75.75 0 1 1-1.342-.67l2.106-4.212c.645-1.29 2.485-1.29 3.13 0l1.211 2.423a.25.25 0 0 0 .448 0l1.563-3.126H14a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$6P = React.forwardRef(SvgHomeArrowUp);

var SvgHomeCelsius = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.01 11.75c-1.25 0-2.26 1.01-2.26 2.25s1.01 2.25 2.26 2.25c.574 0 1.096-.212 1.495-.563a.75.75 0 1 1 .99 1.126 3.753 3.753 0 0 1-2.486.937A3.755 3.755 0 0 1 8.25 14a3.755 3.755 0 0 1 3.76-3.75 3.75 3.75 0 0 1 2.485.937.75.75 0 1 1-.99 1.126 2.253 2.253 0 0 0-1.496-.563Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.5 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' })));
};
var ForwardRef$6O = React.forwardRef(SvgHomeCelsius);

var SvgHomeCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.416 10.376a.75.75 0 0 1 .208 1.04l-2.647 3.97a2.75 2.75 0 0 1-4.232.42L8.47 14.53a.75.75 0 0 1 1.06-1.06l1.275 1.275a1.25 1.25 0 0 0 1.924-.19l2.647-3.97a.75.75 0 0 1 1.04-.209Z', clipRule: 'evenodd' })));
};
var ForwardRef$6N = React.forwardRef(SvgHomeCheck);

var SvgHomeCloud = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7 13.5a3.5 3.5 0 0 0 3.5 3.5h4a2.5 2.5 0 1 0-.78-4.876A3.501 3.501 0 0 0 7 13.5Z' })));
};
var ForwardRef$6M = React.forwardRef(SvgHomeCloud);

var SvgHomeDownload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.177 15.763a.25.25 0 0 1-.354 0L10.53 14.47a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.293a.75.75 0 0 0-1.06-1.06l-1.293 1.293Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 16.75a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-1.5 0v7c0 .414.336.75.75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$6L = React.forwardRef(SvgHomeDownload);

var SvgHomeEye = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.991 15.097a1.486 1.486 0 0 0 0-2.194C15.08 12.046 13.631 11 12 11c-1.63 0-3.079 1.046-3.991 1.903a1.486 1.486 0 0 0 0 2.194c.912.857 2.36 1.903 3.99 1.903 1.631 0 3.08-1.046 3.992-1.903ZM12 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$6K = React.forwardRef(SvgHomeEye);

var SvgHomeFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12.31 11.69 12 12l-.31-.31a2.187 2.187 0 1 0-3.093 3.094l2.166 2.166a1.75 1.75 0 0 0 2.474 0l2.166-2.166a2.188 2.188 0 0 0-3.094-3.094Z' })));
};
var ForwardRef$6J = React.forwardRef(SvgHomeFavourite);

var SvgHomeFilter = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.25 11a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Zm4 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm2 5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Zm-6 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10 9.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm4 5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$6I = React.forwardRef(SvgHomeFilter);

var SvgHomeFlash = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.45 8.4a.75.75 0 0 1 .15 1.05l-2.1 2.8H14a.75.75 0 0 1 .6 1.2l-3 4a.75.75 0 1 1-1.2-.9l2.1-2.8H10a.75.75 0 0 1-.6-1.2l3-4a.75.75 0 0 1 1.05-.15Z', clipRule: 'evenodd' })));
};
var ForwardRef$6H = React.forwardRef(SvgHomeFlash);

var SvgHomeFluid = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15.5 14.4C15.5 11.915 12 9 12 9s-3.5 2.915-3.5 5.4c0 2.485 1.843 3.6 3.5 3.6s3.5-1.115 3.5-3.6Z' })));
};
var ForwardRef$6G = React.forwardRef(SvgHomeFluid);

var SvgHomeGraph = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 10.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm8 0a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm-4-2a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$6F = React.forwardRef(SvgHomeGraph);

var SvgHomeInformation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 12.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M13 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' })));
};
var ForwardRef$6E = React.forwardRef(SvgHomeInformation);

var SvgHomeLink = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.177 8.934a2.75 2.75 0 0 1 3.889 3.89l-.354.353a.75.75 0 1 1-1.06-1.06l.353-.354a1.25 1.25 0 1 0-1.768-1.768l-1.414 1.414a1.25 1.25 0 0 0 0 1.768l-1.06 1.06a2.75 2.75 0 0 1 0-3.889l1.414-1.414Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.823 17.066a2.75 2.75 0 1 1-3.889-3.89l.354-.353a.75.75 0 0 1 1.06 1.06l-.353.354a1.25 1.25 0 0 0 1.768 1.768l1.414-1.414a1.25 1.25 0 0 0 0-1.768l1.06-1.06a2.75 2.75 0 0 1 0 3.889l-1.414 1.414Z', clipRule: 'evenodd' })));
};
var ForwardRef$6D = React.forwardRef(SvgHomeLink);

var SvgHomeLocationBig = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.986v-8.07c0-1.239-.57-2.408-1.544-3.169l-5-3.902a3.99 3.99 0 0 0-4.912 0l-5 3.902A4.018 4.018 0 0 0 3 9.916v8.07A4.007 4.007 0 0 0 7 22h10c2.21 0 4-1.797 4-4.014Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c2 0 5-4.239 5-7a5 5 0 0 0-10 0c0 2.761 3 7 5 7Zm0-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z', clipRule: 'evenodd' })));
};
var ForwardRef$6C = React.forwardRef(SvgHomeLocationBig);

var SvgHomeLocation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 18s3.5-2.915 3.5-5.4c0-2.485-1.843-3.6-3.5-3.6s-3.5 1.115-3.5 3.6C8.5 15.085 12 18 12 18Zm0-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z', clipRule: 'evenodd' })));
};
var ForwardRef$6B = React.forwardRef(SvgHomeLocation);

var SvgHomeLock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.75 12a1.25 1.25 0 1 1 2.5 0v1h-2.5v-1Zm-1.5 1.145V12a2.75 2.75 0 1 1 5.5 0v1.145A2 2 0 0 1 16 15v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1a2 2 0 0 1 1.25-1.855Z', clipRule: 'evenodd' })));
};
var ForwardRef$6A = React.forwardRef(SvgHomeLock);

var SvgHomeMail = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10 10a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3h-4Zm.335 2.33a.75.75 0 1 0-.67 1.34l1.105.554a2.75 2.75 0 0 0 2.46 0l1.105-.553a.75.75 0 1 0-.67-1.342l-1.106.553a1.25 1.25 0 0 1-1.118 0l-1.106-.553Z', clipRule: 'evenodd' })));
};
var ForwardRef$6z = React.forwardRef(SvgHomeMail);

var SvgHomeMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.75 14a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$6y = React.forwardRef(SvgHomeMinus);

var SvgHomeNotification = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M11 19h2' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8.667 12.333a3.333 3.333 0 1 1 6.667 0v1.234c0 .595.246 1.164.68 1.571.712.668.24 1.862-.736 1.862H8.721c-.976 0-1.448-1.194-.736-1.862.434-.407.68-.976.68-1.57v-1.235Z' })));
};
var ForwardRef$6x = React.forwardRef(SvgHomeNotification);

var SvgHomePower = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 9.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.496 10.792a.75.75 0 0 1 .066 1.058 3.25 3.25 0 1 0 4.875 0 .75.75 0 1 1 1.125-.992 4.75 4.75 0 1 1-7.125 0 .75.75 0 0 1 1.06-.066Z', clipRule: 'evenodd' })));
};
var ForwardRef$6w = React.forwardRef(SvgHomePower);

var SvgHomeRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14.652 16.651a.75.75 0 0 1-1.061 0L9.348 12.41a.75.75 0 0 1 1.061-1.06l4.243 4.242a.75.75 0 0 1 0 1.06Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.348 16.652a.75.75 0 0 1 0-1.06l4.243-4.244a.75.75 0 1 1 1.06 1.061l-4.242 4.243a.75.75 0 0 1-1.06 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$6v = React.forwardRef(SvgHomeRemove);

var SvgHomeSetting = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.576 10h.848c.469 0 .849.358.849.8 0 .506.54.827.985.585l.045-.024c.406-.221.925-.09 1.159.293l.424.692c.235.383.095.872-.31 1.093a.639.639 0 0 0 0 1.122c.405.22.544.71.31 1.093l-.424.692c-.234.383-.753.514-1.16.293l-.044-.024a.666.666 0 0 0-.985.585c0 .442-.38.8-.849.8h-.848c-.469 0-.849-.358-.849-.8a.666.666 0 0 0-.985-.585l-.045.024c-.406.221-.925.09-1.159-.293l-.424-.692c-.234-.383-.095-.872.31-1.093a.639.639 0 0 0 0-1.122.776.776 0 0 1-.31-1.093l.424-.692c.234-.383.753-.514 1.16-.293l.044.024a.666.666 0 0 0 .985-.585c0-.442.38-.8.849-.8ZM12 15.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z', clipRule: 'evenodd' })));
};
var ForwardRef$6u = React.forwardRef(SvgHomeSetting);

var SvgHomeShare = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15 8.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-2.25.75a2.25 2.25 0 1 1 .688 1.62l-3.205 1.602a2.259 2.259 0 0 1 0 .556l3.205 1.603a2.25 2.25 0 1 1-.671 1.342l-3.205-1.604a2.25 2.25 0 1 1 0-3.239l3.205-1.602a2.26 2.26 0 0 1-.017-.278ZM8 12.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm7 3.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$6t = React.forwardRef(SvgHomeShare);

var SvgHomeShield = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm11.106 9.447-2 1c-.678.339-1.115 1.034-1.078 1.79.147 3.034.902 4.412 2.859 5.95a1.802 1.802 0 0 0 2.226 0c1.962-1.547 2.69-2.942 2.851-5.94.041-.762-.396-1.463-1.079-1.804l-1.99-.996a2 2 0 0 0-1.79 0Z' })));
};
var ForwardRef$6s = React.forwardRef(SvgHomeShield);

var SvgHomeUpload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.177 10.237a.25.25 0 0 0-.354 0L10.53 11.53a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.293a.75.75 0 0 1-1.06 1.06l-1.293-1.293Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 9.25a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$6r = React.forwardRef(SvgHomeUpload);

var SvgHomeWarning = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 14.75a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M13 17a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z' })));
};
var ForwardRef$6q = React.forwardRef(SvgHomeWarning);

var SvgHomeWave = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.5 11.75a.75.75 0 0 0-.75.75v1a2.25 2.25 0 0 1-2.25 2.25H7a.75.75 0 0 1 0-1.5h.5a.75.75 0 0 0 .75-.75v-1a2.25 2.25 0 0 1 4.5 0v3a.75.75 0 0 0 1.5 0 2.25 2.25 0 0 1 2.25-2.25h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0v-3a.75.75 0 0 0-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$6p = React.forwardRef(SvgHomeWave);

var SvgHomeWifi = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12.75 17a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 11.75a5.23 5.23 0 0 0-3.712 1.538.75.75 0 1 1-1.061-1.061A6.731 6.731 0 0 1 12 10.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 0 1-1.06 1.06A5.231 5.231 0 0 0 12 11.75Zm0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 1 1-1.06-1.06A3.74 3.74 0 0 1 12 13.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.061 1.061A2.24 2.24 0 0 0 12 14.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$6o = React.forwardRef(SvgHomeWifi);

var SvgHome = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.31 15.707a.75.75 0 0 1 .983-.397c1.542.654 2.67.943 3.746.94 1.075-.003 2.175-.296 3.664-.938a.75.75 0 0 1 .594 1.377c-1.575.679-2.89 1.058-4.255 1.061-1.365.004-2.706-.368-4.335-1.06a.75.75 0 0 1-.397-.983Z', clipRule: 'evenodd' })));
};
var ForwardRef$6n = React.forwardRef(SvgHome);

var SvgHoney = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 3.5 16.5 6v5L12 13.5 7.5 11V6L12 3.5Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm7.5 11 4.5 2.5v5L7.5 21 3 18.5v-5L7.5 11Zm9 0 4.5 2.5v5L16.5 21 12 18.5v-5l4.5-2.5Z', opacity: 0.4 })));
};
var ForwardRef$6m = React.forwardRef(SvgHoney);

var SvgHospitalBed = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20.75 14H2v4h20.75v-2a2 2 0 0 0-2-2ZM22 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16 3.75a.75.75 0 0 1 .75.75v1.25h1.5V4.5a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0V7.25h-1.5V8.5a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75ZM2 8.25a.75.75 0 0 1 .75.75v8.25H22a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-3.25H2.75V22a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 2 8.25Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M5 12v2h5v-2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1Z' })));
};
var ForwardRef$6l = React.forwardRef(SvgHospitalBed);

var SvgHospitalPanel = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 7.25a.75.75 0 0 1 .75.75v3.25h6.5V8a.75.75 0 0 1 1.5 0v8a.75.75 0 0 1-1.5 0v-3.25h-6.5V16a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 8 7.25Z', clipRule: 'evenodd' })));
};
var ForwardRef$6k = React.forwardRef(SvgHospitalPanel);

var SvgHospital = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4 6v16h16V6a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M9 17v5h6v-5a3 3 0 1 0-6 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 4.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V11a.75.75 0 0 1-1.5 0V8.75H9a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 .75-.75ZM2.25 22a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$6j = React.forwardRef(SvgHospital);

var SvgHotspotOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.6 5.55a.75.75 0 0 1-.15 1.05 9.235 9.235 0 0 0-3.7 7.4 9.219 9.219 0 0 0 2.71 6.54.75.75 0 0 1-1.061 1.061A10.719 10.719 0 0 1 1.25 14c0-3.517 1.69-6.64 4.3-8.6a.75.75 0 0 1 1.05.15Zm2.916 2.935a.75.75 0 0 1-.249 1.031A5.246 5.246 0 0 0 6.75 14a5.23 5.23 0 0 0 1.538 3.712.75.75 0 1 1-1.061 1.06A6.731 6.731 0 0 1 5.25 14a6.747 6.747 0 0 1 3.235-5.764.75.75 0 0 1 1.031.25ZM12 12.75A1.25 1.25 0 1 0 13.25 14a.75.75 0 0 1 1.5 0A2.75 2.75 0 1 1 12 11.25a.75.75 0 0 1 0 1.5Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M1.47 1.47a.75.75 0 0 1 1.06 0l20 20a.75.75 0 1 1-1.06 1.06l-20-20a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 4.75a9.231 9.231 0 0 0-3.15.55.75.75 0 0 1-.51-1.41A10.732 10.732 0 0 1 12 3.25c5.937 0 10.75 4.813 10.75 10.75 0 1.284-.226 2.517-.64 3.66a.75.75 0 1 1-1.41-.51c.356-.982.55-2.043.55-3.15A9.25 9.25 0 0 0 12 4.75ZM11.25 8a.75.75 0 0 1 .75-.75A6.75 6.75 0 0 1 18.75 14a.75.75 0 1 1-1.5 0c0-2.9-2.35-5.25-5.25-5.25a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$6i = React.forwardRef(SvgHotspotOff);

var SvgHotspot = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 8.75a5.25 5.25 0 0 0-3.712 8.962.75.75 0 0 1-1.061 1.061 6.75 6.75 0 1 1 9.546 0 .75.75 0 0 1-1.06-1.06A5.25 5.25 0 0 0 12 8.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 4.75A9.25 9.25 0 0 0 2.75 14a9.219 9.219 0 0 0 2.71 6.54.75.75 0 0 1-1.061 1.061A10.719 10.719 0 0 1 1.25 14C1.25 8.063 6.063 3.25 12 3.25S22.75 8.063 22.75 14c0 2.968-1.204 5.657-3.149 7.601a.75.75 0 0 1-1.06-1.06A9.218 9.218 0 0 0 21.25 14 9.25 9.25 0 0 0 12 4.75Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$6h = React.forwardRef(SvgHotspot);

var SvgInCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.47 7.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2a.75.75 0 0 1 0-1.5h12.19l-2.72-2.72a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$6g = React.forwardRef(SvgInCircle);

var SvgInRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7 3h4a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.53 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72H21a.75.75 0 0 0 0-1.5H10.81l1.72-1.72a.75.75 0 0 0 0-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$6f = React.forwardRef(SvgInRectangle);

var SvgInjection = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.371 14.917a.75.75 0 0 1-.024 1.06l-5.83 5.566a.75.75 0 0 1-1.035-1.085l5.829-5.565a.75.75 0 0 1 1.06.024Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.905 2.47a.75.75 0 0 1 1.06 0l1.401 1.4.014.014a.95.95 0 0 1 .013.014l1.4 1.4a.75.75 0 1 1-1.06 1.06l-.884-.883-2.297 2.298a.75.75 0 0 1-1.061-1.06l2.298-2.299-.884-.884a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M13.485 6.535 8.3 11.721a2 2 0 0 0-.566 1.131l-.236 1.65a2 2 0 0 0 2.263 2.263l1.65-.236a2 2 0 0 0 1.131-.566l5.186-5.185a2 2 0 0 0 0-2.828l-1.414-1.415a2 2 0 0 0-2.829 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm9.761 16.765 1.65-.236a2 2 0 0 0 1.131-.565l3.772-3.771-7.071-1.415-.943.943a2 2 0 0 0-.566 1.131l-.236 1.65a2 2 0 0 0 2.263 2.263Z' })));
};
var ForwardRef$6e = React.forwardRef(SvgInjection);

var SvgInstagram = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 18, cy: 6, r: 1, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', clipRule: 'evenodd' })));
};
var ForwardRef$6d = React.forwardRef(SvgInstagram);

var SvgInternet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 13.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM21.25 19a.75.75 0 0 1-.75.75H14a.75.75 0 0 1 0-1.5h6.5a.75.75 0 0 1 .75.75Zm-10 0a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h6.5a.75.75 0 0 1 .75.75Zm.75.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0Zm-4 11a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.953 8.75h-2.962c-.043 1.77-.238 3.407-.548 4.732a6.006 6.006 0 0 0 3.51-4.732Zm-5.384 5.223a8.5 8.5 0 0 0 .198-.632c.317-1.164.539-2.768.587-4.59h-2.708c.048 1.822.27 3.426.587 4.59a8.5 8.5 0 0 0 .198.632 6.083 6.083 0 0 0 1.138 0Zm-3.012-.491c-.31-1.325-.505-2.962-.548-4.732H6.046a6.006 6.006 0 0 0 3.51 4.732ZM12 2a6 6 0 0 0-5.954 5.25H9.01c.043-1.77.238-3.407.548-4.731a5.962 5.962 0 0 1 1.874-.492 8.492 8.492 0 0 0-.198.633c-.317 1.163-.539 2.767-.587 4.59h2.708c-.048-1.823-.27-3.427-.587-4.59a8.492 8.492 0 0 0-.198-.633 5.962 5.962 0 0 1 1.874.492c.31 1.324.505 2.96.548 4.731h2.963A6 6 0 0 0 12 2Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$6c = React.forwardRef(SvgInternet);

var SvgInvoicePercent = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19 2H5a2 2 0 0 0-2 2v15.154a2 2 0 0 0 2.677 1.882l1.562-.562a2 2 0 0 1 1.498.058l2.442 1.099a2 2 0 0 0 1.642 0l2.442-1.1a2 2 0 0 1 1.498-.057l1.562.562A2 2 0 0 0 21 19.154V4a2 2 0 0 0-2-2Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.53 8.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$6b = React.forwardRef(SvgInvoicePercent);

var SvgInvoice = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.75 7a.75.75 0 0 1-.75.75H7a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75Zm0 5a.75.75 0 0 1-.75.75H7a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75Zm-5 5a.75.75 0 0 1-.75.75H7a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$6a = React.forwardRef(SvgInvoice);

var SvgLaptop = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10H4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1 3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z' })));
};
var ForwardRef$69 = React.forwardRef(SvgLaptop);

var SvgLightMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm0 18a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm9.31-12.625a.75.75 0 0 1-.275 1.025l-1.732 1a.75.75 0 1 1-.75-1.3l1.732-1a.75.75 0 0 1 1.025.275Zm-15.589 9a.75.75 0 0 1-.274 1.025l-1.732 1a.75.75 0 0 1-.75-1.3l1.732-1a.75.75 0 0 1 1.024.275Zm-3.031-9a.75.75 0 0 1 1.025-.275l1.732 1a.75.75 0 1 1-.75 1.3l-1.732-1a.75.75 0 0 1-.275-1.025Zm15.589 9a.75.75 0 0 1 1.024-.275l1.732 1a.75.75 0 0 1-.75 1.3l-1.732-1a.75.75 0 0 1-.274-1.025Z', clipRule: 'evenodd' })));
};
var ForwardRef$68 = React.forwardRef(SvgLightMode);

var SvgLineChartAscending = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19 6.75a.75.75 0 0 1-.15 1.05l-4.8 3.6a.75.75 0 0 1-.9-1.2l4.8-3.6a.75.75 0 0 1 1.05.15Zm-8 6a.75.75 0 0 1-.15 1.05l-4.8 3.6a.75.75 0 1 1-.9-1.2l4.8-3.6a.75.75 0 0 1 1.05.15Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-8 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-8 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' })));
};
var ForwardRef$67 = React.forwardRef(SvgLineChartAscending);

var SvgLineChartDescending = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19.307 16.96a.75.75 0 0 0 .208-1.04l-5.781-8.672a.75.75 0 0 0-1.248.832l5.78 8.672a.75.75 0 0 0 1.04.208ZM5 11.25a.75.75 0 0 0 1.05.15l4.8-3.6a.75.75 0 0 0-.9-1.2l-4.8 3.6A.75.75 0 0 0 5 11.25Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 12a1.997 1.997 0 0 0-2-2 2 2 0 1 0 2 2Zm8-6a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm8 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z' })));
};
var ForwardRef$66 = React.forwardRef(SvgLineChartDescending);

var SvgLineChart = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19.307 7.04a.75.75 0 0 1 .208 1.04l-5.781 8.672a.75.75 0 1 1-1.248-.832l5.78-8.672a.75.75 0 0 1 1.04-.208ZM5 12.75a.75.75 0 0 1 1.05-.15l4.8 3.6a.75.75 0 0 1-.9 1.2l-4.8-3.6A.75.75 0 0 1 5 12.75Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 12a1.997 1.997 0 0 1-2 2 2 2 0 1 1 2-2Zm8 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8-12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' })));
};
var ForwardRef$65 = React.forwardRef(SvgLineChart);

var SvgLinkedln = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("circle", { cx: 4, cy: 4, r: 2, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 8.5h4V22H2V8.5Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M13 8.5H9V22h4v-7a2 2 0 1 1 4 0v7h4v-7a6 6 0 0 0-8-5.659V8.5Z', opacity: 0.4 })));
};
var ForwardRef$64 = React.forwardRef(SvgLinkedln);

var SvgLocationAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c3.375 0 9-6.202 9-11.111C21 5.979 16.97 2 12 2s-9 3.98-9 8.889C3 15.799 8.625 22 12 22Zm.75-13a.75.75 0 0 0-1.5 0v1.25H10a.75.75 0 0 0 0 1.5h1.25V13a.75.75 0 0 0 1.5 0v-1.25H14a.75.75 0 0 0 0-1.5h-1.25V9Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 16a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm.75-7a.75.75 0 0 0-1.5 0v1.25H10a.75.75 0 0 0 0 1.5h1.25V13a.75.75 0 0 0 1.5 0v-1.25H14a.75.75 0 0 0 0-1.5h-1.25V9Z', clipRule: 'evenodd' })));
};
var ForwardRef$63 = React.forwardRef(SvgLocationAdd);

var SvgLocationHospital = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 9.889c0 4.649-4.63 9.233-6.845 11.16-.67.584-1.64.584-2.31 0C8.629 19.123 4 14.539 4 9.89 4 6 7.03 2 12 2c4.97 0 8 4 8 7.889Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-1.25-7a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-1.25h2.5V12a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v1.25h-2.5V8Z', clipRule: 'evenodd' })));
};
var ForwardRef$62 = React.forwardRef(SvgLocationHospital);

var SvgLocationMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c3.375 0 9-6.202 9-11.111C21 5.979 16.97 2 12 2s-9 3.98-9 8.889C3 15.799 8.625 22 12 22Zm2-10.25a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5h4Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 16a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm2-4.25a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5h4Z', clipRule: 'evenodd' })));
};
var ForwardRef$61 = React.forwardRef(SvgLocationMinus);

var SvgLocationRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c3.375 0 9-6.202 9-11.111C21 5.979 16.97 2 12 2s-9 3.98-9 8.889C3 15.799 8.625 22 12 22Zm-.884-12.945a.75.75 0 1 0-1.06 1.061l.883.884-.883.884a.75.75 0 0 0 1.06 1.06l.884-.883.884.883a.75.75 0 0 0 1.06-1.06L13.061 11l.884-.884a.75.75 0 1 0-1.061-1.06L12 9.938l-.884-.884Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 16a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-.884-6.945a.75.75 0 1 0-1.06 1.061l.883.884-.883.884a.75.75 0 0 0 1.06 1.06l.884-.883.884.883a.75.75 0 0 0 1.06-1.06L13.061 11l.884-.884a.75.75 0 1 0-1.061-1.06L12 9.938l-.884-.884Z', clipRule: 'evenodd' })));
};
var ForwardRef$60 = React.forwardRef(SvgLocationRemove);

var SvgLocationShare = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19 11c0 4.418-4.5 9-7 9s-7-4.582-7-9 3.134-7 7-7 7 2.582 7 7Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3.388 5.332a.75.75 0 0 1 .327 1.009c-.612 1.198-.965 2.63-.965 4.284 0 1.033.204 2.088.567 3.128a.75.75 0 1 1-1.416.494c-.409-1.17-.651-2.393-.651-3.622 0-1.871.4-3.54 1.129-4.966a.75.75 0 0 1 1.009-.327Zm17.224 0a.75.75 0 0 1 1.01.327c.727 1.426 1.128 3.095 1.128 4.966 0 1.23-.242 2.452-.65 3.622a.75.75 0 1 1-1.417-.494c.363-1.04.567-2.095.567-3.128 0-1.654-.353-3.086-.965-4.284a.75.75 0 0 1 .327-1.01Z', clipRule: 'evenodd' }),
        React__namespace.createElement("circle", { cx: 12, cy: 11, r: 3, fill: 'currentColor' })));
};
var ForwardRef$5$ = React.forwardRef(SvgLocationShare);

var SvgLocationUser = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c3.375 0 9-6.202 9-11.111C21 5.979 16.97 2 12 2s-9 3.98-9 8.889C3 15.799 8.625 22 12 22Zm1.5-13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-3.503 4.87c.567.398 1.256.63 2.003.63a3.477 3.477 0 0 0 2.542-1.094A2.998 2.998 0 0 0 12 12a2.998 2.998 0 0 0-2.542 1.406c.163.172.344.328.54.465Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14.863 15.1a5 5 0 1 0-5.725-8.2 5 5 0 0 0 5.725 8.2ZM13.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-3.503 4.87c.567.398 1.256.63 2.003.63a3.477 3.477 0 0 0 2.542-1.094A2.998 2.998 0 0 0 12 12a2.998 2.998 0 0 0-2.542 1.406c.163.172.344.328.54.465Z', clipRule: 'evenodd' })));
};
var ForwardRef$5_ = React.forwardRef(SvgLocationUser);

var SvgLocation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 10.889C21 15.799 15.375 22 12 22s-9-6.202-9-11.111C3 5.979 7.03 2 12 2s9 3.98 9 8.889Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 12, cy: 11, r: 3, fill: 'currentColor' })));
};
var ForwardRef$5Z = React.forwardRef(SvgLocation);

var SvgLock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.75 7a3.25 3.25 0 0 1 6.5 0H16c.256 0 .507.024.75.07V7a4.75 4.75 0 1 0-9.5 0v.07A4.02 4.02 0 0 1 8 7h.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4 11a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' })));
};
var ForwardRef$5Y = React.forwardRef(SvgLock);

var SvgMapAccordionBelow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21.098 15.567a19.2 19.2 0 0 0 .18-.134A1.86 1.86 0 0 0 22 13.938v-9.67c0-.853-1.028-1.348-1.736-.872-1 .672-2.297 1.42-3.514 1.747v4.904c2.475.638 4.348 2.814 4.348 5.48v.04Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M9.43 14.969a3.76 3.76 0 0 0-.68-.121V2.088c1.278.106 2.264.856 3.25 1.607.986.75 1.972 1.5 3.25 1.606v4.557c-2.952 0-5.457 2.138-5.807 4.994-.005.039-.01.078-.013.117Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2.722 4.717c.99-.748 2.836-2.015 4.528-2.471v12.76c-1.217.328-2.514 1.075-3.514 1.747C3.028 17.23 2 16.735 2 15.881v-9.67c0-.584.255-1.141.722-1.494Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19.338 17.614c.26-.743.41-1.473.41-2.088 0-2.385-2.014-4.319-4.498-4.319-2.305 0-4.205 1.664-4.468 3.809-.02.167-.03.337-.03.51 0 2.385 2.249 6.478 4.498 6.478 1.669 0 3.338-2.253 4.088-4.39Zm-4.088-1.009a1.35 1.35 0 1 0 0-2.699 1.35 1.35 0 0 0 0 2.7Z', clipRule: 'evenodd' })));
};
var ForwardRef$5X = React.forwardRef(SvgMapAccordionBelow);

var SvgMapAccordionFlag = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.75 13.925v7.917c1.692-.456 3.539-1.723 4.528-2.471A1.86 1.86 0 0 0 22 17.876v-9.67c0-.853-1.028-1.348-1.736-.872-.815.548-1.826 1.145-2.83 1.525v3.663a1.76 1.76 0 0 1-.684 1.403Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 20.393c-.986-.75-1.972-1.5-3.25-1.607V6.026c1.278.107 2.264.857 3.25 1.607.668.508 1.337 1.017 2.096 1.325v3.564c0 .772.484 1.428 1.154 1.653V22c-1.278-.107-2.264-.857-3.25-1.607Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2.722 8.655c.99-.748 2.836-2.015 4.528-2.471v12.76c-1.217.328-2.514 1.076-3.514 1.748-.708.476-1.736-.02-1.736-.873v-9.67c0-.584.255-1.141.722-1.494Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15.188 2.648c0-.32.26-.58.58-.58h4.634a.58.58 0 0 1 .519.84l-.643 1.285.643 1.286a.58.58 0 0 1-.518.839h-4.056v6.245a.58.58 0 0 1-1.159 0V2.648Z' })));
};
var ForwardRef$5W = React.forwardRef(SvgMapAccordionFlag);

var SvgMapAccordionPin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.75 13.925v7.917c1.692-.456 3.539-1.723 4.528-2.471A1.86 1.86 0 0 0 22 17.876v-9.67c0-.853-1.028-1.348-1.736-.872-.815.548-1.826 1.145-2.83 1.525v3.663a1.76 1.76 0 0 1-.684 1.403Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 20.393c-.986-.75-1.972-1.5-3.25-1.607V6.026c1.278.107 2.264.857 3.25 1.607.668.508 1.337 1.017 2.096 1.325v3.564c0 .772.484 1.428 1.154 1.653V22c-1.278-.107-2.264-.857-3.25-1.607Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2.722 8.655c.99-.748 2.836-2.015 4.528-2.471v12.76c-1.217.328-2.514 1.076-3.514 1.748-.708.476-1.736-.02-1.736-.873v-9.67c0-.584.255-1.141.722-1.494Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.515 5.859a2 2 0 1 0-1.5 0v6.145a.75.75 0 0 0 1.5 0V5.859Z', clipRule: 'evenodd' })));
};
var ForwardRef$5V = React.forwardRef(SvgMapAccordionPin);

var SvgMapAccordionTop = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.75 13.757v8.096c1.692-.456 3.539-1.724 4.528-2.472A1.86 1.86 0 0 0 22 17.887v-9.67c0-.52-.383-.908-.842-1.022a8.98 8.98 0 0 1-.407 1.585c-.419 1.194-1.096 2.434-1.935 3.401-.535.618-1.235 1.236-2.066 1.576Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M9.646 6.223a3.817 3.817 0 0 0-.896-.186v12.76c1.278.107 2.264.857 3.25 1.607.986.75 1.972 1.5 3.25 1.607v-7.993c-.887-.052-1.665-.465-2.281-.957-.668-.533-1.248-1.238-1.72-1.978-.924-1.447-1.603-3.3-1.603-4.814v-.046Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2.722 8.666c.99-.748 2.836-2.015 4.528-2.471v12.76c-1.217.328-2.514 1.076-3.514 1.748-.708.476-1.736-.02-1.736-.873v-9.67c0-.584.255-1.141.722-1.494Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19.49 8.337c.258-.736.406-1.458.406-2.068 0-2.363-1.995-4.279-4.457-4.279-2.283 0-4.165 1.649-4.426 3.774-.02.165-.03.334-.03.505 0 2.363 2.228 6.418 4.457 6.418 1.653 0 3.306-2.232 4.05-4.35Zm-4.05-.998a1.337 1.337 0 1 0 0-2.675 1.337 1.337 0 0 0 0 2.675Z', clipRule: 'evenodd' })));
};
var ForwardRef$5U = React.forwardRef(SvgMapAccordionTop);

var SvgMapAccordion = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M17.59 17.476c.21-.704.34-1.427.34-2.1a5.59 5.59 0 0 0-1.18-3.444V4.998c1.217-.327 2.514-1.075 3.514-1.747.708-.476 1.736.019 1.736.872v9.67a1.86 1.86 0 0 1-.722 1.495c-.827.625-2.254 1.614-3.689 2.188Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15.25 10.569A6.054 6.054 0 0 0 12 9.627a6.052 6.052 0 0 0-3.25.94V1.943c1.278.106 2.264.856 3.25 1.607.986.75 1.972 1.5 3.25 1.606v5.413Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.25 11.932a5.614 5.614 0 0 0-1.18 3.356c-.836.371-1.653.863-2.334 1.32C3.028 17.084 2 16.59 2 15.736v-9.67c0-.585.255-1.141.722-1.494.99-.748 2.836-2.015 4.528-2.471v9.831Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.145 17.492c.265-.754.416-1.493.416-2.117 0-2.418-2.042-4.379-4.561-4.379-2.337 0-4.263 1.687-4.53 3.862a4.25 4.25 0 0 0-.032.517c0 2.419 2.281 6.569 4.562 6.569 1.692 0 3.385-2.285 4.145-4.452ZM12 16.47a1.368 1.368 0 1 0 0-2.737 1.368 1.368 0 0 0 0 2.737Z', clipRule: 'evenodd' })));
};
var ForwardRef$5T = React.forwardRef(SvgMapAccordion);

var SvgMapBig = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.442 15.903C17.302 13.997 19 11.142 19 8.857 19 5.07 15.866 2 12 2S5 5.07 5 8.857c0 2.285 1.698 5.14 3.558 7.046C9.78 17.157 11.074 18 12 18c.926 0 2.22-.843 3.442-2.097ZM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.055 16.493C4.612 17.029 3 17.952 3 19c0 1.657 4.03 3 9 3s9-1.343 9-3c0-1.048-1.612-1.97-4.055-2.507-.142.157-.285.31-.429.457-.672.69-1.395 1.299-2.115 1.746-.687.426-1.528.804-2.401.804-.873 0-1.714-.378-2.4-.804-.721-.448-1.444-1.057-2.116-1.746-.144-.147-.287-.3-.429-.457Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$5S = React.forwardRef(SvgMapBig);

var SvgMapCircleGps = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4.522 7.416c-.715.433-1.347.884-1.8 1.226A1.86 1.86 0 0 0 2 10.137v9.67c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894 1.66-.186 2.83.705 4 1.595s2.34 1.781 4 1.595c1.867-.209 4.14-1.757 5.278-2.617A1.86 1.86 0 0 0 22 17.863v-9.67c0-.853-1.028-1.348-1.736-.872-.24.162-.497.327-.766.49a7.893 7.893 0 0 1-.038.968A7.501 7.501 0 0 1 4.523 7.416Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.968 8.624A6 6 0 1 0 6.032 7.375a6 6 0 0 0 11.936 1.25Zm-8.72-.208 1.515.505a.5.5 0 0 1 .316.316l.505 1.515a.5.5 0 0 0 .934.04l1.99-4.643a.5.5 0 0 0-.657-.657L9.21 7.482a.5.5 0 0 0 .039.934Z', clipRule: 'evenodd' })));
};
var ForwardRef$5R = React.forwardRef(SvgMapCircleGps);

var SvgMapFlag = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12.848 9.642c-.62-.309-1.185-.739-1.75-1.169-1.17-.89-2.34-1.78-4-1.595-1.518.17-3.305 1.226-4.532 2.077-.961.667-1.468 1.787-1.468 2.958v8.747c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.735 4.264-1.893 1.66-.186 2.83.704 4 1.595 1.17.89 2.341 1.78 4 1.595 1.519-.17 3.306-1.226 4.532-2.077.961-.667 1.468-1.787 1.468-2.958V9.82c0-.721-.744-1.215-1.421-.965a28.46 28.46 0 0 1-2.507.804v3.196c0 1.242-.968 2.25-2.161 2.25-1.194 0-2.16-1.008-2.16-2.25V9.642Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14.25 1.897a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .67 1.085l-.832 1.665.833 1.664A.75.75 0 0 1 21 6.647h-5.25v6.485a.75.75 0 1 1-1.5 0V1.897Z' })));
};
var ForwardRef$5Q = React.forwardRef(SvgMapFlag);

var SvgMapGpsBelow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20.645 15.882c.236-.166.45-.323.633-.462A1.86 1.86 0 0 0 22 13.925v-9.67c0-.853-1.028-1.347-1.736-.871-1 .672-2.297 1.42-3.514 1.747v5.87l1.317-.44c2.017-.671 3.936 1.248 3.263 3.264l-.685 2.057Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8.75 14.443c.146-.29.348-.555.605-.776a2.6 2.6 0 0 1 .874-.492L15.25 11.5V5.289c-1.278-.107-2.264-.857-3.25-1.607-.986-.75-1.972-1.5-3.25-1.607v12.368Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2.722 4.704c.99-.747 2.836-2.015 4.528-2.47v12.76c-1.217.327-2.514 1.075-3.514 1.747-.708.476-1.736-.019-1.736-.872v-9.67c0-.585.255-1.142.722-1.495Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm13.597 17.611-2.894-.964c-.84-.28-.963-1.334-.371-1.842.102-.088.226-.16.371-.208l7.838-2.612a1.08 1.08 0 0 1 1.366 1.366l-1.377 4.132-1.235 3.706c-.329.985-1.722.985-2.05 0l-.964-2.894a1.08 1.08 0 0 0-.684-.684Z' })));
};
var ForwardRef$5P = React.forwardRef(SvgMapGpsBelow);

var SvgMapGpsNavigation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.75 11.94v9.868c1.692-.456 3.539-1.724 4.528-2.472A1.86 1.86 0 0 0 22 17.842v-9.67c0-.853-1.028-1.348-1.736-.872-.508.34-1.091.701-1.702 1.016a6.598 6.598 0 0 1-1.812 3.624Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8.75 13.093v5.659c1.278.107 2.264.857 3.25 1.607.986.75 1.972 1.5 3.25 1.607v-8.874a6.61 6.61 0 0 1-3.25.85c-1.18 0-2.29-.309-3.25-.85Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M5.372 6.915c-1.056.552-2.024 1.233-2.65 1.706A1.86 1.86 0 0 0 2 10.116v9.669c0 .854 1.028 1.348 1.736.872 1-.672 2.297-1.42 3.514-1.747v-6.97a6.622 6.622 0 0 1-1.878-5.025Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.283 7.855A5.311 5.311 0 1 0 6.718 6.75a5.311 5.311 0 0 0 10.565 1.106Zm-7.72-.185 1.342.447a.442.442 0 0 1 .28.28l.447 1.342a.443.443 0 0 0 .827.034l1.76-4.11a.443.443 0 0 0-.58-.58l-4.11 1.76a.443.443 0 0 0 .035.827Z', clipRule: 'evenodd' })));
};
var ForwardRef$5O = React.forwardRef(SvgMapGpsNavigation);

var SvgMapGps = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3.468 4.101C4.695 3.251 6.481 2.195 8 2.025c1.66-.186 2.83.704 4 1.595 1.17.89 2.34 1.78 4 1.595 1.411-.158 3.054-1.081 4.264-1.894.708-.476 1.736.02 1.736.873v8.747c0 1.17-.507 2.29-1.468 2.957-.321.223-.68.46-1.063.691l.897-2.691c.672-2.017-1.247-3.936-3.264-3.264l-7.838 2.613A2.523 2.523 0 0 0 7.65 14.84c-1.326.254-2.802 1.093-3.913 1.84-.708.476-1.736-.02-1.736-.872V7.059c0-1.17.507-2.29 1.468-2.958Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm12.633 17.684-2.894-.965c-.84-.28-.964-1.333-.372-1.841a1.1 1.1 0 0 1 .372-.208l7.837-2.613a1.08 1.08 0 0 1 1.367 1.367l-1.378 4.131-1.235 3.706c-.328.985-1.721.985-2.05 0l-.964-2.894a1.08 1.08 0 0 0-.683-.683Z' })));
};
var ForwardRef$5N = React.forwardRef(SvgMapGps);

var SvgMapLocationAccordion = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.75 11.152v10.74c1.692-.457 3.539-1.724 4.528-2.472A1.86 1.86 0 0 0 22 17.925v-9.67c0-.853-1.028-1.347-1.736-.871-.688.462-1.516.96-2.362 1.332l-.055.162c-.27.766-.643 1.552-1.097 2.274Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8.75 11.975v6.86c1.278.107 2.264.857 3.25 1.607.986.75 1.972 1.5 3.25 1.607v-9.072c-.746.673-1.694 1.217-2.788 1.217-.98 0-1.836-.441-2.505-.976a7.442 7.442 0 0 1-1.207-1.243Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6.59 6.448c-1.495.56-3.006 1.605-3.868 2.257A1.86 1.86 0 0 0 2 10.199v9.67c0 .853 1.028 1.348 1.736.872 1-.672 2.297-1.42 3.514-1.747V9.337c-.392-.974-.64-1.987-.66-2.89Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.568 8.43c.262-.747.412-1.48.412-2.097 0-2.396-2.023-4.338-4.518-4.338-2.315 0-4.223 1.671-4.487 3.825-.02.168-.031.34-.031.513 0 2.395 2.259 6.506 4.518 6.506 1.676 0 3.353-2.263 4.106-4.41Zm-4.106-1.013a1.356 1.356 0 1 0 0-2.71 1.356 1.356 0 0 0 0 2.71Z', clipRule: 'evenodd' })));
};
var ForwardRef$5M = React.forwardRef(SvgMapLocationAccordion);

var SvgMapLocationBelow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17 22c2 0 5-4.239 5-7a5 5 0 0 0-10 0c0 .49.095 1.027.261 1.578C13.034 19.133 15.355 22 17 22Zm0-6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3.468 4.101C4.695 3.251 6.481 2.195 8 2.025c1.66-.186 2.83.704 4 1.595 1.17.89 2.34 1.78 4 1.595 1.411-.158 3.054-1.081 4.264-1.894.708-.476 1.736.02 1.736.873v6.652a6.5 6.5 0 0 0-11.489 4.504c-.735-.413-1.539-.674-2.511-.565-1.411.158-3.054 1.081-4.264 1.894-.708.476-1.736-.02-1.736-.872V7.059c0-1.17.507-2.29 1.468-2.958Z', opacity: 0.4 })));
};
var ForwardRef$5L = React.forwardRef(SvgMapLocationBelow);

var SvgMapLocationMiddle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.194 17.949C16.686 16.94 17 15.893 17 15a5 5 0 0 0-10 0c0 2.761 3 7 5 7 1.353 0 3.164-1.94 4.194-4.051ZM12 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2.722 4.642C3.86 3.782 6.132 2.234 8 2.025c1.66-.186 2.83.704 4 1.595 1.17.89 2.34 1.78 4 1.595 1.411-.158 3.054-1.081 4.264-1.894.708-.476 1.736.02 1.736.873v9.669a1.86 1.86 0 0 1-.722 1.495c-.735.555-1.942 1.397-3.209 1.98.264-.768.431-1.568.431-2.338a6.5 6.5 0 1 0-13 0c0 .202.012.407.034.614-.646.326-1.264.706-1.798 1.065-.708.476-1.736-.02-1.736-.872v-9.67c0-.585.255-1.142.722-1.495Z', opacity: 0.4 })));
};
var ForwardRef$5K = React.forwardRef(SvgMapLocationMiddle);

var SvgMapLocationTop = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21.56 9.106c.276-.734.44-1.46.44-2.106a5 5 0 0 0-10 0c0 .212.018.432.051.659C12.454 10.387 15.153 14 17 14c1.532 0 3.652-2.488 4.56-4.894ZM17 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10.513 6.59a6.014 6.014 0 0 0 .054 1.287c.25 1.689 1.166 3.508 2.228 4.89.539.7 1.16 1.348 1.821 1.835.633.465 1.462.898 2.384.898.774 0 1.475-.306 2.033-.659.574-.362 1.112-.848 1.593-1.38A12.18 12.18 0 0 0 22 11.601v5.34c0 1.17-.507 2.29-1.468 2.957-1.227.852-3.013 1.907-4.532 2.077-1.66.186-2.83-.704-4-1.595-1.17-.89-2.34-1.78-4-1.595-1.411.158-3.054 1.081-4.264 1.894-.708.476-1.736-.02-1.736-.872v-8.748c0-1.17.507-2.29 1.468-2.958C4.695 7.251 6.481 6.195 8 6.025c.973-.11 1.777.152 2.513.566Z', opacity: 0.4 })));
};
var ForwardRef$5J = React.forwardRef(SvgMapLocationTop);

var SvgMapLocation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M5.5 6.87c-1.105.563-2.127 1.28-2.778 1.772A1.86 1.86 0 0 0 2 10.137v9.67c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894 1.66-.186 2.83.705 4 1.595s2.34 1.781 4 1.595c1.867-.209 4.14-1.757 5.278-2.617A1.86 1.86 0 0 0 22 17.863v-9.67c0-.853-1.028-1.348-1.736-.872a16.89 16.89 0 0 1-1.97 1.151c-.295 1.277-.878 2.611-1.592 3.73-.53.83-1.18 1.62-1.93 2.218-.74.591-1.688 1.08-2.772 1.08-1.084 0-2.031-.489-2.772-1.08-.75-.598-1.4-1.389-1.93-2.219C6.276 10.6 5.521 8.556 5.5 6.871Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 14c2.5 0 5-4.549 5-7.2S14.761 2 12 2 7 4.149 7 6.8 9.5 14 12 14Zm0-6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z', clipRule: 'evenodd' })));
};
var ForwardRef$5I = React.forwardRef(SvgMapLocation);

var SvgMapPaper = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.75 19.83c1.692-.457 3.539-1.724 4.528-2.472A1.86 1.86 0 0 0 22 15.863v-9.67c0-.853-1.028-1.348-1.736-.872-1 .672-2.297 1.42-3.514 1.748v12.76Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 18.38c-.986-.75-1.972-1.5-3.25-1.607V4.013c1.278.107 2.264.857 3.25 1.607.986.75 1.972 1.5 3.25 1.607v12.76c-1.278-.107-2.264-.857-3.25-1.607Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2.722 6.642c.99-.748 2.836-2.015 4.528-2.471v12.76c-1.217.328-2.514 1.076-3.514 1.748-.708.476-1.736-.02-1.736-.873V8.137c0-.585.255-1.142.722-1.495Z', opacity: 0.4 })));
};
var ForwardRef$5H = React.forwardRef(SvgMapPaper);

var SvgMapPeopleAccordion = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.75 17.16v4.648c1.692-.456 3.539-1.724 4.528-2.472A1.86 1.86 0 0 0 22 17.842v-9.67c0-.853-1.028-1.348-1.736-.872l-.161.107a5.485 5.485 0 0 1 .647 2.59 2.5 2.5 0 0 1-2 2.45v1.55a3.5 3.5 0 0 1-2 3.163Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10.812 6.748c-.624-.392-1.29-.692-2.062-.757v12.76c1.278.108 2.264.858 3.25 1.608.986.75 1.972 1.5 3.25 1.607v-4.469a3.5 3.5 0 0 1-3.5-3.5v-1.55a2.5 2.5 0 0 1-2-2.45 5.482 5.482 0 0 1 1.062-3.249Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.25 6.15c-1.692.455-3.539 1.723-4.528 2.47A1.86 1.86 0 0 0 2 10.117v9.669c0 .853 1.028 1.348 1.736.872 1-.672 2.297-1.42 3.514-1.747V6.15Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.25 5.997a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0A3.993 3.993 0 0 0 11.784 8a3.983 3.983 0 0 0-.534 1.998 1 1 0 0 0 1 1 1 1 0 0 1 1 1v2a2 2 0 1 0 4 0v-2a1 1 0 0 1 1-1 1 1 0 0 0 1-1 4 4 0 0 0-4-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$5G = React.forwardRef(SvgMapPeopleAccordion);

var SvgMapPeople = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10.63 6.659C9.865 6.206 9.026 5.91 8 6.025c-1.867.209-4.14 1.757-5.278 2.617A1.86 1.86 0 0 0 2 10.137v9.67c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894 1.66-.186 2.83.705 4 1.595s2.34 1.78 4 1.595c1.867-.209 4.14-1.757 5.278-2.617A1.86 1.86 0 0 0 22 17.863v-9.67c0-.853-1.028-1.348-1.736-.872-.11.074-.224.15-.341.224l.069.144c.326.705.508 1.489.508 2.311a2.5 2.5 0 0 1-2 2.45V14a3.5 3.5 0 1 1-7 0v-1.55a2.5 2.5 0 0 1-2-2.45 5.482 5.482 0 0 1 1.13-3.341Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a3.993 3.993 0 0 0-3.466 2.002A3.983 3.983 0 0 0 11 10a1 1 0 0 0 1 1 1 1 0 0 1 1 1v2a2 2 0 1 0 4 0v-2a1 1 0 0 1 1-1 1 1 0 0 0 1-1 4 4 0 0 0-4-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$5F = React.forwardRef(SvgMapPeople);

var SvgMapPin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M13.75 8.788C13.13 8.48 12.565 8.05 12 7.62c-1.17-.89-2.34-1.78-4-1.595-1.519.17-3.305 1.225-4.532 2.076C2.507 8.77 2 9.89 2 11.06v8.748c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894 1.66-.186 2.83.705 4 1.595s2.34 1.78 4 1.595c1.519-.17 3.305-1.225 4.532-2.077.961-.667 1.468-1.787 1.468-2.957V8.194c0-.854-1.028-1.349-1.736-.873a16.63 16.63 0 0 1-2.014 1.172V12a2.25 2.25 0 0 1-4.5 0V8.788Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.75 5.855a2 2 0 1 0-1.5 0V12a.75.75 0 0 0 1.5 0V5.855Z', clipRule: 'evenodd' })));
};
var ForwardRef$5E = React.forwardRef(SvgMapPin);

var SvgMapSmall = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 17c2 0 6-4.686 6-8A6 6 0 0 0 6 9c0 3.314 4 8 6 8Zm0-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.012 15.094A4 4 0 0 0 4.8 16.439l-1.067 1.28C2.648 19.023 3.574 21 5.27 21h13.46c1.696 0 2.622-1.978 1.537-3.28L19.2 16.44a4 4 0 0 0-2.211-1.346l-.06.077c-.689.873-1.467 1.66-2.249 2.246-.723.54-1.678 1.083-2.68 1.083-1.002 0-1.957-.542-2.68-1.083-.782-.585-1.56-1.373-2.248-2.246l-.06-.077Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$5D = React.forwardRef(SvgMapSmall);

var SvgMap = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 4.025c-1.867.209-4.14 1.757-5.278 2.617A1.86 1.86 0 0 0 2 8.137v9.67c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894 3.318-.371 4.682 3.562 8 3.19 1.867-.209 4.14-1.757 5.278-2.617A1.86 1.86 0 0 0 22 15.863v-9.67c0-.853-1.028-1.348-1.736-.872-1.21.813-2.853 1.736-4.264 1.894-3.318.371-4.682-3.562-8-3.19Z', opacity: 0.4 })));
};
var ForwardRef$5C = React.forwardRef(SvgMap);

var SvgMask = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20 6.75c-.69 0-1.25.56-1.25 1.25v3a.75.75 0 0 1-1.5 0V8a2.75 2.75 0 1 1 5.5 0v4A4.75 4.75 0 0 1 18 16.75v-1.5A3.25 3.25 0 0 0 21.25 12V8c0-.69-.56-1.25-1.25-1.25Zm-16 0c.69 0 1.25.56 1.25 1.25v3a.75.75 0 0 0 1.5 0V8a2.75 2.75 0 0 0-5.5 0v4A4.75 4.75 0 0 0 6 16.75v-1.5A3.25 3.25 0 0 1 2.75 12V8c0-.69.56-1.25 1.25-1.25Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M9.876 7.224a4.75 4.75 0 0 1 4.248 0l4.211 2.105a.75.75 0 0 1 .415.671v5.127a4.75 4.75 0 0 1-1.71 3.649l-.719.6a6.75 6.75 0 0 1-8.642 0l-.72-.6a4.75 4.75 0 0 1-1.709-3.65V10a.75.75 0 0 1 .415-.67l4.21-2.106Z' })));
};
var ForwardRef$5B = React.forwardRef(SvgMask);

var SvgMasterCard = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10 9.75a2.25 2.25 0 1 0 .875 4.324A3.734 3.734 0 0 1 10.25 12c0-.767.23-1.48.625-2.074A2.242 2.242 0 0 0 10 9.75Zm2-.923a3.75 3.75 0 1 0 0 6.345 3.75 3.75 0 1 0 0-6.345Zm2 .923a2.24 2.24 0 0 0-1.5.573A2.243 2.243 0 0 0 11.75 12c0 .666.289 1.264.75 1.677A2.25 2.25 0 1 0 14 9.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$5A = React.forwardRef(SvgMasterCard);

var SvgMaximizeCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19 13a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16 3.75a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V4.81l-9.72 9.72a.75.75 0 1 1-1.06-1.06l9.72-9.72H16Z', clipRule: 'evenodd' })));
};
var ForwardRef$5z = React.forwardRef(SvgMaximizeCircle);

var SvgMaximizeRectangleDoted = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 12h2a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10 2h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.25 7a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V8.81l-5.72 5.72a.75.75 0 1 1-1.06-1.06l5.72-5.72H12a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$5y = React.forwardRef(SvgMaximizeRectangleDoted);

var SvgMaximizeRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7 5h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15 2.25h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V4.81l-9.72 9.72a.75.75 0 1 1-1.06-1.06l9.72-9.72H15a.75.75 0 0 1 0-1.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$5x = React.forwardRef(SvgMaximizeRectangle);

var SvgMedicalBook = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M17 2H7a3 3 0 0 0-3 3v14h16V5a3 3 0 0 0-3-3Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 5.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V12a.75.75 0 0 1-1.5 0V9.75H9a.75.75 0 0 1 0-1.5h2.25V6a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 16H7a3 3 0 1 0 0 6h10a3 3 0 0 0 3-3v-3Z' })));
};
var ForwardRef$5w = React.forwardRef(SvgMedicalBook);

var SvgMedicalInformation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 18v-8a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 10.25a.75.75 0 0 1 .75.75v2.25H11a.75.75 0 0 1 0 1.5H8.75V17a.75.75 0 0 1-1.5 0v-2.25H5a.75.75 0 0 1 0-1.5h2.25V11a.75.75 0 0 1 .75-.75ZM19.75 12a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75Zm-2 4a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10 5a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0V5Z' })));
};
var ForwardRef$5v = React.forwardRef(SvgMedicalInformation);

var SvgMedicalService = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11 2.75A2.25 2.25 0 0 0 8.75 5v2a.75.75 0 0 1-1.5 0V5A3.75 3.75 0 0 1 11 1.25h2A3.75 3.75 0 0 1 16.75 5v2a.75.75 0 0 1-1.5 0V5A2.25 2.25 0 0 0 13 2.75h-2Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 10a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 10.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V17a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V11a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$5u = React.forwardRef(SvgMedicalService);

var SvgMenuCircleHorizontal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("circle", { cx: 16.75, cy: 12.25, r: 1.25, fill: 'currentColor', opacity: 0.4, transform: 'rotate(90 16.75 12.25)' }),
        React__namespace.createElement("circle", { cx: 11.75, cy: 12.25, r: 1.25, fill: 'currentColor', transform: 'rotate(90 11.75 12.25)' }),
        React__namespace.createElement("circle", { cx: 6.75, cy: 12.25, r: 1.25, fill: 'currentColor', opacity: 0.4, transform: 'rotate(90 6.75 12.25)' })));
};
var ForwardRef$5t = React.forwardRef(SvgMenuCircleHorizontal);

var SvgMenuCircleVertical = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("circle", { cx: 12.25, cy: 7.25, r: 1.25, fill: 'currentColor', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 12.25, cy: 12.25, r: 1.25, fill: 'currentColor' }),
        React__namespace.createElement("circle", { cx: 12.25, cy: 17.25, r: 1.25, fill: 'currentColor', opacity: 0.4 })));
};
var ForwardRef$5s = React.forwardRef(SvgMenuCircleVertical);

var SvgMenuHome = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$5r = React.forwardRef(SvgMenuHome);

var SvgMenuLineHorizontalHalf = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.25 8A.75.75 0 0 1 7 7.25h5a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 8Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.25 12a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.25 16a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$5q = React.forwardRef(SvgMenuLineHorizontalHalf);

var SvgMenuLineHorizontal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.25 8A.75.75 0 0 1 7 7.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 8Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.25 12a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.25 16a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$5p = React.forwardRef(SvgMenuLineHorizontal);

var SvgMenuLineVerticalHalf = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 6.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 11.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Zm8-5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$5o = React.forwardRef(SvgMenuLineVerticalHalf);

var SvgMenuLineVertical = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 6.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4A.75.75 0 0 1 8 9.25Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$5n = React.forwardRef(SvgMenuLineVertical);

var SvgMenuUser = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75Zm0-5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75Zm2 10a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("circle", { cx: 7, cy: 8, r: 3, fill: 'currentColor' }),
        React__namespace.createElement("ellipse", { cx: 7, cy: 15.5, fill: 'currentColor', opacity: 0.4, rx: 5, ry: 3.5 })));
};
var ForwardRef$5m = React.forwardRef(SvgMenuUser);

var SvgMessenger = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.511.335 2.945.936 4.229l-.713 4.396a1 1 0 0 0 1.151 1.146l4.356-.726A9.96 9.96 0 0 0 12 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm10 9-4 6 4-3 4 3 4-6-4 3-4-3Z' })));
};
var ForwardRef$5l = React.forwardRef(SvgMessenger);

var SvgMiniStoreCrooked = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 18V7H4v11a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.769 2H7.23C5.414 2 3.78 3.245 3.105 5.143l-.758 2.132c-.23.645-.388 1.336-.221 2C2.522 10.848 3.808 12 5.333 12c1.841 0 3.334-1.679 3.334-3.75C8.667 10.321 10.159 12 12 12c1.841 0 3.333-1.679 3.333-3.75 0 2.071 1.493 3.75 3.334 3.75 1.525 0 2.81-1.152 3.207-2.725.167-.664.009-1.355-.22-2l-.759-2.132C20.22 3.245 18.586 2 16.77 2ZM9 19a3 3 0 1 1 6 0v3H9v-3Z' })));
};
var ForwardRef$5k = React.forwardRef(SvgMiniStoreCrooked);

var SvgMiniStoreSmile = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 18V8H4v10a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.769 2H7.23C5.414 2 3.78 3.245 3.105 5.143l-.758 2.132c-.23.645-.388 1.336-.221 2C2.522 10.848 3.808 12 5.333 12c1.841 0 3.334-1.679 3.334-3.75C8.667 10.321 10.159 12 12 12c1.841 0 3.333-1.679 3.333-3.75 0 2.071 1.493 3.75 3.334 3.75 1.525 0 2.81-1.152 3.207-2.725.167-.664.009-1.355-.22-2l-.759-2.132C20.22 3.245 18.586 2 16.77 2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.653 16.632a.75.75 0 0 1-.285 1.021c-1.215.686-2.262 1.095-3.365 1.097-1.105.002-2.154-.404-3.374-1.098a.75.75 0 1 1 .742-1.304c1.136.647 1.911.904 2.629.902.719-.001 1.494-.262 2.632-.903a.75.75 0 0 1 1.021.285Z', clipRule: 'evenodd' })));
};
var ForwardRef$5j = React.forwardRef(SvgMiniStoreSmile);

var SvgMinimizeCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("circle", { cx: 11, cy: 13, r: 8, fill: 'currentColor', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15 13.25a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 1.5 0v3.19l9.72-9.72a.75.75 0 1 1 1.06 1.06l-9.72 9.72H15Z', clipRule: 'evenodd' })));
};
var ForwardRef$5i = React.forwardRef(SvgMinimizeCircle);

var SvgMinimizeRectangleDoted = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14 22H6a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 12h-2a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.81 16.25H12a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 1.5 0v3.19l5.72-5.72a.75.75 0 1 1 1.06 1.06l-5.72 5.72Z', clipRule: 'evenodd' })));
};
var ForwardRef$5h = React.forwardRef(SvgMinimizeRectangleDoted);

var SvgMinimizeRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6.625 5.375h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21.155 2.845a.75.75 0 0 1 0 1.06l-9.72 9.72h4.19a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0v4.19l9.72-9.72a.75.75 0 0 1 1.06 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$5g = React.forwardRef(SvgMinimizeRectangle);

var SvgMobileDataOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.75 18.172a1.27 1.27 0 0 0 .134-.117l1.586-1.585a.75.75 0 1 1 1.06 1.06l-1.585 1.586a2.75 2.75 0 0 1-3.89 0L4.47 17.53a.75.75 0 1 1 1.06-1.06l1.586 1.585c.043.043.087.082.134.117V8a.75.75 0 0 1 1.5 0v10.172Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3.47 3.47a.75.75 0 0 1 1.06 0l16 16a.75.75 0 1 1-1.06 1.06l-16-16a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.75 13.69V5.828c.047.035.091.074.134.117L18.47 7.53a.75.75 0 1 0 1.06-1.061l-1.585-1.586a2.75 2.75 0 0 0-3.89 0L12.47 6.47a.75.75 0 0 0 1.06 1.06l1.586-1.585a1.22 1.22 0 0 1 .134-.117v6.362l1.5 1.5Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$5f = React.forwardRef(SvgMobileDataOff);

var SvgMobileData = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.75 18.172a1.27 1.27 0 0 0 .134-.116l1.586-1.586a.75.75 0 1 1 1.06 1.06l-1.585 1.586a2.75 2.75 0 0 1-3.89 0L4.47 17.531a.75.75 0 1 1 1.06-1.061l1.586 1.586c.043.042.087.081.134.116V10a.75.75 0 0 1 1.5 0v8.172Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.25 5.828a1.259 1.259 0 0 0-.134.117L13.53 7.53a.75.75 0 1 1-1.06-1.061l1.585-1.586a2.75 2.75 0 0 1 3.89 0L19.53 6.47a.75.75 0 0 1-1.06 1.06l-1.586-1.585a1.26 1.26 0 0 0-.134-.117V14a.75.75 0 0 1-1.5 0V5.828Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$5e = React.forwardRef(SvgMobileData);

var SvgMobilePayment = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 7h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-6V7Zm1 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 10.5h8V9h-8v1.5Z', opacity: 0.4 })));
};
var ForwardRef$5d = React.forwardRef(SvgMobilePayment);

var SvgMobile = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M5 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.25 19a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$5c = React.forwardRef(SvgMobile);

var SvgMoneyAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 9)' }),
        React__namespace.createElement("circle", { cx: 2, cy: 2, r: 2, fill: 'currentColor', transform: 'matrix(1 0 0 -1 10 14)' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19 13.25a.75.75 0 0 1 .75.75v2.25H22a.75.75 0 0 1 0 1.5h-2.25V20a.75.75 0 0 1-1.5 0v-2.25H16a.75.75 0 0 1 0-1.5h2.25V14a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$5b = React.forwardRef(SvgMoneyAdd);

var SvgMoneyArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 9)' }),
        React__namespace.createElement("circle", { cx: 2, cy: 2, r: 2, fill: 'currentColor', transform: 'matrix(1 0 0 -1 10 14)' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm19.25 18.604-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.292a.75.75 0 1 0-1.06-1.061l-.72.72V14a.75.75 0 0 0-1.5 0v4.604Z', clipRule: 'evenodd' })));
};
var ForwardRef$5a = React.forwardRef(SvgMoneyArrowDown);

var SvgMoneyArrowLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 9)' }),
        React__namespace.createElement("circle", { cx: 2, cy: 2, r: 2, fill: 'currentColor', transform: 'matrix(1 0 0 -1 10 14)' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm17.396 17.25.72-.72a.75.75 0 1 0-1.06-1.06l-1.293 1.293a1.75 1.75 0 0 0 0 2.474l1.292 1.293a.75.75 0 1 0 1.061-1.06l-.72-.72H22a.75.75 0 0 0 0-1.5h-4.604Z', clipRule: 'evenodd' })));
};
var ForwardRef$59 = React.forwardRef(SvgMoneyArrowLeft);

var SvgMoneyArrowRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 9)' }),
        React__namespace.createElement("circle", { cx: 2, cy: 2, r: 2, fill: 'currentColor', transform: 'matrix(1 0 0 -1 10 14)' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm20.604 17.25-.72-.72a.75.75 0 1 1 1.06-1.06l1.293 1.293a1.75 1.75 0 0 1 0 2.474l-1.292 1.293a.75.75 0 1 1-1.061-1.06l.72-.72H16a.75.75 0 0 1 0-1.5h4.604Z', clipRule: 'evenodd' })));
};
var ForwardRef$58 = React.forwardRef(SvgMoneyArrowRight);

var SvgMoneyArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 9)' }),
        React__namespace.createElement("circle", { cx: 2, cy: 2, r: 2, fill: 'currentColor', transform: 'matrix(1 0 0 -1 10 14)' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm19.25 15.396-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.293a.75.75 0 1 1-1.06 1.06l-.72-.72V20a.75.75 0 0 1-1.5 0v-4.604Z', clipRule: 'evenodd' })));
};
var ForwardRef$57 = React.forwardRef(SvgMoneyArrowUp);

var SvgMoneyBagCoin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14.086 7H9.914L8.513 5.393c-1.373-1.575.229-3.93 2.234-3.283l.928.3c.211.067.439.067.65 0l.928-.3c2.005-.647 3.607 1.708 2.234 3.283L14.086 7Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M5.684 10.21A6 6 0 0 1 11.411 6h1.178a6 6 0 0 1 5.727 4.21l1.25 4c1.207 3.864-1.68 7.79-5.727 7.79H10.16c-4.048 0-6.934-3.926-5.727-7.79l1.25-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14.5 14.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z' })));
};
var ForwardRef$56 = React.forwardRef(SvgMoneyBagCoin);

var SvgMoneyBagCoins = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14.086 7H9.914L8.513 5.393c-1.373-1.575.229-3.93 2.234-3.283l.928.3c.211.067.439.067.65 0l.928-.3c2.005-.647 3.607 1.708 2.234 3.283L14.086 7Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M5.684 10.21A6 6 0 0 1 11.411 6h1.178a6 6 0 0 1 5.727 4.21l1.25 4c1.207 3.864-1.68 7.79-5.727 7.79H10.16c-4.048 0-6.934-3.926-5.727-7.79l1.25-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 20a2 2 0 0 1 2-2h6a2 2 0 0 1 0 4h-6a2 2 0 0 1-2-2Zm0-4a2 2 0 0 1 2-2h6a2 2 0 0 1 0 4h-6a2 2 0 0 1-2-2Z' })));
};
var ForwardRef$55 = React.forwardRef(SvgMoneyBagCoins);

var SvgMoneyBagDollar = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14.086 7H9.914L8.513 5.393c-1.373-1.575.229-3.93 2.234-3.283l.928.3c.211.067.439.067.65 0l.928-.3c2.005-.647 3.607 1.708 2.234 3.283L14.086 7Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M5.684 10.21A6 6 0 0 1 11.411 6h1.178a6 6 0 0 1 5.727 4.21l1.25 4c1.207 3.864-1.68 7.79-5.727 7.79H10.16c-4.048 0-6.934-3.926-5.727-7.79l1.25-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 8.75a.75.75 0 0 1 .75.75v.846c1.106.288 2 1.197 2 2.404a.75.75 0 0 1-1.5 0c0-.461-.462-1-1.25-1s-1.25.539-1.25 1c0 .461.462 1 1.25 1 1.422 0 2.75 1.028 2.75 2.5 0 1.207-.894 2.116-2 2.404v.846a.75.75 0 0 1-1.5 0v-.846c-1.106-.288-2-1.197-2-2.404a.75.75 0 0 1 1.5 0c0 .461.462 1 1.25 1s1.25-.539 1.25-1c0-.461-.462-1-1.25-1-1.422 0-2.75-1.028-2.75-2.5 0-1.207.894-2.116 2-2.404V9.5a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$54 = React.forwardRef(SvgMoneyBagDollar);

var SvgMoneyBagEuro = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14.086 7H9.914L8.513 5.393c-1.373-1.575.229-3.93 2.234-3.283l.928.3c.211.067.439.067.65 0l.928-.3c2.005-.647 3.607 1.708 2.234 3.283L14.086 7Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M5.684 10.21A6 6 0 0 1 11.411 6h1.178a6 6 0 0 1 5.727 4.21l1.25 4c1.207 3.864-1.68 7.79-5.727 7.79H10.16c-4.048 0-6.934-3.926-5.727-7.79l1.25-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.761 14.25a2.784 2.784 0 0 0 0 .5H12a.75.75 0 0 1 0 1.5h-1.621c.504.61 1.267 1 2.121 1a2.74 2.74 0 0 0 1.964-.825.75.75 0 1 1 1.072 1.05 4.25 4.25 0 0 1-6.91-1.224H8a.75.75 0 0 1 0-1.501h.257a4.315 4.315 0 0 1 0-.5H8a.75.75 0 0 1 0-1.5h.626a4.25 4.25 0 0 1 6.91-1.224.75.75 0 1 1-1.072 1.05 2.74 2.74 0 0 0-1.964-.826c-.854 0-1.617.39-2.121 1H12a.75.75 0 0 1 0 1.5H9.761Z', clipRule: 'evenodd' })));
};
var ForwardRef$53 = React.forwardRef(SvgMoneyBagEuro);

var SvgMoneyBagPound = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14.086 7H9.914L8.513 5.393c-1.373-1.575.229-3.93 2.234-3.283l.928.3c.211.067.439.067.65 0l.928-.3c2.005-.647 3.607 1.708 2.234 3.283L14.086 7Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M5.684 10.21A6 6 0 0 1 11.411 6h1.178a6 6 0 0 1 5.727 4.21l1.25 4c1.207 3.864-1.68 7.79-5.727 7.79H10.16c-4.048 0-6.934-3.926-5.727-7.79l1.25-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.48 11.885a2.135 2.135 0 0 1 4.27 0v.497a.75.75 0 0 1-1.5 0v-.497a.635.635 0 1 0-1.27 0v.57c0 .437-.04.87-.122 1.295H13a.75.75 0 0 1 0 1.5h-1.61a6.908 6.908 0 0 1-1.075 1.704.482.482 0 0 0 .365.796H14a.75.75 0 0 1 0 1.5h-3.32c-1.693 0-2.607-1.987-1.504-3.273.197-.228.373-.472.527-.727H9a.75.75 0 0 1 0-1.5h1.323c.104-.42.158-.856.158-1.295v-.57Z', clipRule: 'evenodd' })));
};
var ForwardRef$52 = React.forwardRef(SvgMoneyBagPound);

var SvgMoneyBagYen = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14.086 7H9.914L8.513 5.393c-1.373-1.575.229-3.93 2.234-3.283l.928.3c.211.067.439.067.65 0l.928-.3c2.005-.647 3.607 1.708 2.234 3.283L14.086 7Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M5.684 10.21A6 6 0 0 1 11.411 6h1.178a6 6 0 0 1 5.727 4.21l1.25 4c1.207 3.864-1.68 7.79-5.727 7.79H10.16c-4.048 0-6.934-3.926-5.727-7.79l1.25-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.584 10.376a.75.75 0 0 1 1.04.208L12 12.648l1.376-2.064a.75.75 0 0 1 1.248.832l-1.556 2.334H14a.75.75 0 0 1 0 1.5h-1.25v.5H14a.75.75 0 0 1 0 1.5h-1.25V19a.75.75 0 0 1-1.5 0v-1.75H10a.75.75 0 1 1 0-1.5h1.25v-.5H10a.75.75 0 1 1 0-1.5h.932l-1.556-2.334a.75.75 0 0 1 .208-1.04Z', clipRule: 'evenodd' })));
};
var ForwardRef$51 = React.forwardRef(SvgMoneyBagYen);

var SvgMoneyBag = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14.086 7H9.914L8.513 5.393c-1.373-1.575.229-3.93 2.234-3.283l.928.3c.211.067.439.067.65 0l.928-.3c2.005-.647 3.607 1.708 2.234 3.283L14.086 7Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M5.684 10.21A6 6 0 0 1 11.411 6h1.178a6 6 0 0 1 5.727 4.21l1.25 4c1.207 3.864-1.68 7.79-5.727 7.79H10.16c-4.048 0-6.934-3.926-5.727-7.79l1.25-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.656 16.636a.75.75 0 0 1-.292 1.02c-1.253.695-2.324 1.096-3.43 1.091-1.11-.004-2.14-.416-3.312-1.099a.75.75 0 1 1 .756-1.296c1.083.632 1.84.892 2.562.895.726.003 1.527-.254 2.696-.903a.75.75 0 0 1 1.02.292Z', clipRule: 'evenodd' })));
};
var ForwardRef$50 = React.forwardRef(SvgMoneyBag);

var SvgMoneyBigCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 2, cy: 2, r: 2, fill: 'currentColor', transform: 'matrix(1 0 0 -1 10 14)' })));
};
var ForwardRef$4$ = React.forwardRef(SvgMoneyBigCircle);

var SvgMoneyCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 9)' }),
        React__namespace.createElement("circle", { cx: 2, cy: 2, r: 2, fill: 'currentColor', transform: 'matrix(1 0 0 -1 10 14)' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22.494 15.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .936-1.172l1.753 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z', clipRule: 'evenodd' })));
};
var ForwardRef$4_ = React.forwardRef(SvgMoneyCheck);

var SvgMoneyCoin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 4H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z', opacity: 0.4 }),
        React__namespace.createElement("rect", { width: 10, height: 4, x: 12, y: 16, fill: 'currentColor', rx: 2 }),
        React__namespace.createElement("rect", { width: 10, height: 4, x: 12, y: 12, fill: 'currentColor', rx: 2 })));
};
var ForwardRef$4Z = React.forwardRef(SvgMoneyCoin);

var SvgMoneyDash = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M4.25 7A.75.75 0 0 1 5 6.25h2a.75.75 0 0 1 0 1.5H5A.75.75 0 0 1 4.25 7Zm12 10a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("circle", { cx: 12, cy: 12, r: 2, fill: 'currentColor' })));
};
var ForwardRef$4Y = React.forwardRef(SvgMoneyDash);

var SvgMoneyDollar = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 5.75a.75.75 0 0 1 .75.75v.854a2.75 2.75 0 0 1 2 2.646.75.75 0 0 1-1.5 0A1.25 1.25 0 1 0 12 11.25a2.75 2.75 0 0 1 .75 5.396v.854a.75.75 0 0 1-1.5 0v-.854a2.751 2.751 0 0 1-2-2.646.75.75 0 0 1 1.5 0A1.25 1.25 0 1 0 12 12.75a2.75 2.75 0 0 1-.75-5.396V6.5a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$4X = React.forwardRef(SvgMoneyDollar);

var SvgMoneyDoubleDot = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 2, cy: 2, r: 2, fill: 'currentColor', transform: 'matrix(1 0 0 -1 10 14)' }),
        React__namespace.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 17 13)' }),
        React__namespace.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 13)' })));
};
var ForwardRef$4W = React.forwardRef(SvgMoneyDoubleDot);

var SvgMoneyEuro = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.84 11.25a3.173 3.173 0 0 0 0 1.5H13a.75.75 0 0 1 0 1.5h-2.322c.604.615 1.455 1 2.405 1 .938 0 1.782-.377 2.387-.981a.75.75 0 1 1 1.06 1.06 4.863 4.863 0 0 1-3.447 1.421 4.85 4.85 0 0 1-4.258-2.5H8a.75.75 0 0 1 0-1.5h.31a4.715 4.715 0 0 1 0-1.5H8a.75.75 0 0 1 0-1.5h.825a4.85 4.85 0 0 1 4.258-2.5c1.348 0 2.57.543 3.447 1.42a.75.75 0 1 1-1.06 1.061 3.363 3.363 0 0 0-2.387-.981c-.95 0-1.8.385-2.405 1H13a.75.75 0 0 1 0 1.5H9.84Z', clipRule: 'evenodd' })));
};
var ForwardRef$4V = React.forwardRef(SvgMoneyEuro);

var SvgMoneyFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 9)' }),
        React__namespace.createElement("circle", { cx: 2, cy: 2, r: 2, fill: 'currentColor', transform: 'matrix(1 0 0 -1 10 14)' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm19.221 15.779-.22.22-.222-.22a1.562 1.562 0 1 0-2.21 2.21l1.547 1.546a1.25 1.25 0 0 0 1.768 0l1.547-1.546a1.562 1.562 0 1 0-2.21-2.21Z' })));
};
var ForwardRef$4U = React.forwardRef(SvgMoneyFavourite);

var SvgMoneyIncome = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 11a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 17 20)' }),
        React__namespace.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 12)' }),
        React__namespace.createElement("circle", { cx: 2, cy: 2, r: 2, fill: 'currentColor', transform: 'matrix(1 0 0 -1 10 17)' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm11.25 4.104-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.292a.75.75 0 0 0-1.06-1.061l-.72.72V2a.75.75 0 0 0-1.5 0v2.104Z', clipRule: 'evenodd' })));
};
var ForwardRef$4T = React.forwardRef(SvgMoneyIncome);

var SvgMoneyMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 9)' }),
        React__namespace.createElement("circle", { cx: 2, cy: 2, r: 2, fill: 'currentColor', transform: 'matrix(1 0 0 -1 10 14)' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22.75 17a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$4S = React.forwardRef(SvgMoneyMinus);

var SvgMoneyPound = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.48 9.385a2.135 2.135 0 1 1 4.27 0v.497a.75.75 0 1 1-1.5 0v-.497a.635.635 0 1 0-1.27 0v.57c0 .437-.04.87-.122 1.295H13a.75.75 0 0 1 0 1.5h-1.61a6.908 6.908 0 0 1-1.075 1.704.482.482 0 0 0 .365.796H14a.75.75 0 0 1 0 1.5h-3.32c-1.693 0-2.607-1.987-1.504-3.273.197-.228.373-.472.527-.727H9a.75.75 0 0 1 0-1.5h1.323c.104-.42.158-.856.158-1.295v-.57Z', clipRule: 'evenodd' })));
};
var ForwardRef$4R = React.forwardRef(SvgMoneyPound);

var SvgMoneyProfitBelow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 17 14)' }),
        React__namespace.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 6)' }),
        React__namespace.createElement("circle", { cx: 2, cy: 2, r: 2, fill: 'currentColor', transform: 'matrix(1 0 0 -1 10 11)' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm11.25 19.896-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.292a.75.75 0 1 1-1.06 1.061l-.72-.72V22a.75.75 0 0 1-1.5 0v-2.104Z', clipRule: 'evenodd' })));
};
var ForwardRef$4Q = React.forwardRef(SvgMoneyProfitBelow);

var SvgMoneyProfitTop = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 11a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 17 20)' }),
        React__namespace.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 12)' }),
        React__namespace.createElement("circle", { cx: 2, cy: 2, r: 2, fill: 'currentColor', transform: 'matrix(1 0 0 -1 10 17)' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm11.25 3.396-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.292a.75.75 0 0 1-1.06 1.061l-.72-.72V5.5a.75.75 0 0 1-1.5 0V3.396Z', clipRule: 'evenodd' })));
};
var ForwardRef$4P = React.forwardRef(SvgMoneyProfitTop);

var SvgMoneyRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 9)' }),
        React__namespace.createElement("circle", { cx: 2, cy: 2, r: 2, fill: 'currentColor', transform: 'matrix(1 0 0 -1 10 14)' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22.03 15.227a.75.75 0 0 1 0 1.06l-1.59 1.592 1.59 1.59a.75.75 0 1 1-1.06 1.061l-1.591-1.59-1.591 1.59a.75.75 0 0 1-1.061-1.06l1.591-1.591-1.591-1.591a.75.75 0 0 1 1.06-1.061l1.592 1.591 1.59-1.591a.75.75 0 0 1 1.061 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$4O = React.forwardRef(SvgMoneyRemove);

var SvgMoneySmallCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 17 17)' }),
        React__namespace.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 9)' }),
        React__namespace.createElement("circle", { cx: 2, cy: 2, r: 2, fill: 'currentColor', transform: 'matrix(1 0 0 -1 10 14)' })));
};
var ForwardRef$4N = React.forwardRef(SvgMoneySmallCircle);

var SvgMoneyUser = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 9)' }),
        React__namespace.createElement("circle", { cx: 2, cy: 2, r: 2, fill: 'currentColor', transform: 'matrix(1 0 0 -1 10 14)' }),
        React__namespace.createElement("circle", { cx: 2, cy: 2, r: 2, fill: 'currentColor', transform: 'matrix(1 0 0 -1 17 18)' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19 18c1.282 0 2.401.804 3 2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1c.599-1.196 1.718-2 3-2Z' })));
};
var ForwardRef$4M = React.forwardRef(SvgMoneyUser);

var SvgMoneyWithdraw = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 17 14)' }),
        React__namespace.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 6)' }),
        React__namespace.createElement("circle", { cx: 2, cy: 2, r: 2, fill: 'currentColor', transform: 'matrix(1 0 0 -1 10 11)' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm11.25 20.604-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.292a.75.75 0 1 0-1.06-1.061l-.72.72V18.5a.75.75 0 0 0-1.5 0v2.104Z', clipRule: 'evenodd' })));
};
var ForwardRef$4L = React.forwardRef(SvgMoneyWithdraw);

var SvgMoneyYen = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.55 6.4a.75.75 0 0 1 1.05.15l2.4 3.2 2.4-3.2a.75.75 0 0 1 1.2.9l-2.1 2.8H15a.75.75 0 1 1 0 1.5h-2.25v1.5H15a.75.75 0 1 1 0 1.5h-2.25V17a.75.75 0 1 1-1.5 0v-2.25H9a.75.75 0 1 1 0-1.5h2.25v-1.5H9a.75.75 0 1 1 0-1.5h1.5l-2.1-2.8a.75.75 0 0 1 .15-1.05Z', clipRule: 'evenodd' })));
};
var ForwardRef$4K = React.forwardRef(SvgMoneyYen);

var SvgMoney = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 12, cy: 12, r: 2, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6.5 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm13 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-13 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm13 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' })));
};
var ForwardRef$4J = React.forwardRef(SvgMoney);

var SvgMusicOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.75 9.298a.75.75 0 0 0-.75.75v8a.75.75 0 0 0 1.5 0v-8a.75.75 0 0 0-.75-.75Zm8.5-3a.75.75 0 0 0-.75.75v9a.75.75 0 0 0 1.5 0v-9a.75.75 0 0 0-.75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm10.514 10.042 4.743-1.897A2 2 0 0 1 18 10.002v-5a2 2 0 0 0-2.743-1.857l-4.743 1.897A4 4 0 0 0 8 8.756v5a4 4 0 0 1 2.514-3.714ZM18 16.048a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15.257 8.145A2 2 0 0 1 18 10.002v-5a2 2 0 0 0-2.743-1.857l-4.742 1.897a4 4 0 0 0-2.216 2.196l2.636 2.636 4.322-1.729ZM18 16.048a3 3 0 0 0-3.787-2.896l3.683 3.683c.068-.25.104-.515.104-.787Z', opacity: 0.4 })));
};
var ForwardRef$4I = React.forwardRef(SvgMusicOff);

var SvgMusic = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.75 9.298a.75.75 0 0 0-.75.75v8a.75.75 0 0 0 1.5 0v-8a.75.75 0 0 0-.75-.75Zm8.5-3a.75.75 0 0 0-.75.75v9a.75.75 0 0 0 1.5 0v-9a.75.75 0 0 0-.75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm11.514 10.042 4.743-1.897A2 2 0 0 1 19 10.002v-5a2 2 0 0 0-2.743-1.857l-4.743 1.897A4 4 0 0 0 9 8.756v5a4 4 0 0 1 2.514-3.714ZM19 16.048a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM10.5 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z', opacity: 0.4 })));
};
var ForwardRef$4H = React.forwardRef(SvgMusic);

var SvgNavigation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm9.21 13.396-3.703-1.234c-2.01-.67-2.01-3.513 0-4.183l11.588-3.862c1.723-.575 3.363 1.065 2.788 2.788l-3.862 11.588c-.67 2.01-3.513 2.01-4.183 0l-1.234-3.703a2.204 2.204 0 0 0-1.394-1.394Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.059 13.916c.245.24.433.54.545.874l1.234 3.703c.67 2.01 3.513 2.01 4.183 0l3.862-11.588a2.18 2.18 0 0 0-.545-2.268l-9.28 9.279Z', clipRule: 'evenodd' })));
};
var ForwardRef$4G = React.forwardRef(SvgNavigation);

var SvgNetflix = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M9 20V9.5L4 3v17h5ZM20 3h-5v10l5 7V3Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4 3h5l11 17h-5L4 3Z' })));
};
var ForwardRef$4F = React.forwardRef(SvgNetflix);

var SvgNextArrow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 15.518V8.482c0-1.544 1.674-2.505 3.008-1.728l6.03 3.518c1.323.772 1.323 2.684 0 3.455l-6.03 3.518C4.674 18.023 3 17.061 3 15.518Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M11 15.518V8.482c0-1.544 1.674-2.505 3.008-1.728l6.03 3.518c1.323.772 1.323 2.684 0 3.455l-6.03 3.518c-1.334.778-3.008-.184-3.008-1.727Z' })));
};
var ForwardRef$4E = React.forwardRef(SvgNextArrow);

var SvgNightMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18.328 14.869A9.197 9.197 0 0 1 9.525 3 9.201 9.201 0 0 0 3 11.803 9.197 9.197 0 0 0 12.197 21 9.201 9.201 0 0 0 21 14.475a9.196 9.196 0 0 1-2.672.394Z', opacity: 0.4 })));
};
var ForwardRef$4D = React.forwardRef(SvgNightMode);

var SvgNotificationOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4.847 9.194c.391-3.454 3.232-6.058 6.607-6.058 3.376 0 6.217 2.604 6.608 6.058l.36 3.182c.09.791.41 1.536.92 2.135 1.08 1.272.203 3.262-1.437 3.262h-12.9c-1.642 0-2.518-1.99-1.438-3.262.51-.6.83-1.344.92-2.134l.36-3.183Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M11.454 21.954c1.448 0 2.68-.872 3.137-2.09a.523.523 0 0 0-.523-.523H8.841a.523.523 0 0 0-.523.522c.457 1.219 1.689 2.091 3.136 2.091Zm6.969-9.577-.36-3.183c-.392-3.454-3.232-6.058-6.608-6.058-2.433 0-4.384 1.14-5.32 2.72L18.03 17.751c1.468 0 2.392-1.969 1.312-3.24a3.99 3.99 0 0 1-.92-2.134Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M1.491 2.32a.784.784 0 0 0 0 1.11l18.818 18.817a.784.784 0 0 0 1.11-1.108L2.598 2.32a.784.784 0 0 0-1.108 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$4C = React.forwardRef(SvgNotificationOff);

var SvgNotificationWithCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M5.68 9.794C6.054 6.491 8.77 4 12 4c3.23 0 5.946 2.49 6.32 5.794l.345 3.044a3.82 3.82 0 0 0 .88 2.042c1.033 1.216.194 3.12-1.375 3.12H5.83c-1.57 0-2.408-1.904-1.375-3.12a3.816 3.816 0 0 0 .88-2.042l.345-3.044Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 22c1.385 0 2.563-.835 3-2a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5c.437 1.165 1.615 2 3 2Zm8-17a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' })));
};
var ForwardRef$4B = React.forwardRef(SvgNotificationWithCircle);

var SvgNotification = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M5.68 8.794C6.054 5.491 8.77 3 12 3c3.23 0 5.946 2.49 6.32 5.794l.345 3.044a3.82 3.82 0 0 0 .88 2.042c1.033 1.216.194 3.12-1.375 3.12H5.83c-1.57 0-2.408-1.904-1.375-3.12a3.816 3.816 0 0 0 .88-2.042l.345-3.044Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 21c1.385 0 2.563-.835 3-2a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5c.437 1.165 1.615 2 3 2Z' })));
};
var ForwardRef$4A = React.forwardRef(SvgNotification);

var SvgOpenBoxAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 16.764V8l-8 2-8-2v8.764a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.763Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm20 6-7.106-3.553a2 2 0 0 0-1.788 0L4 6l8 4 8-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm20 6-8 4 2 3 8-4-2-3ZM4 6l8 4-2 3-8-4 2-3Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 1.25a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V6a.75.75 0 0 1-1.5 0V4.75H10a.75.75 0 0 1 0-1.5h1.25V2a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$4z = React.forwardRef(SvgOpenBoxAdd);

var SvgOpenBoxArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 16.764V8l-8 2-8-2v8.764a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.763Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm20 6-7.106-3.553a2 2 0 0 0-1.788 0L4 6l8 4 8-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm20 6-8 4 2 3 8-4-2-3ZM4 6l8 4-2 3-8-4 2-3Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm11.25 5.604-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.292a.75.75 0 0 0-1.06-1.061l-.72.72V2a.75.75 0 0 0-1.5 0v3.604Z', clipRule: 'evenodd' })));
};
var ForwardRef$4y = React.forwardRef(SvgOpenBoxArrowDown);

var SvgOpenBoxArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 16.764V8l-8 2-8-2v8.764a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.763Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm20 6-7.106-3.553a2 2 0 0 0-1.788 0L4 6l8 4 8-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm20 6-8 4 2 3 8-4-2-3ZM4 6l8 4-2 3-8-4 2-3Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm11.25 3.396-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.292a.75.75 0 0 1-1.06 1.061l-.72-.72V7a.75.75 0 0 1-1.5 0V3.396Z', clipRule: 'evenodd' })));
};
var ForwardRef$4x = React.forwardRef(SvgOpenBoxArrowUp);

var SvgOpenBoxDone = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 16.764V8l-8 2-8-2v8.764a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.763Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm20 6-7.106-3.553a2 2 0 0 0-1.788 0L4 6l8 4 8-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm20 6-8 4 2 3 8-4-2-3ZM4 6l8 4-2 3-8-4 2-3Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.494 1.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214L8.532 4.586a.75.75 0 1 1 .937-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z', clipRule: 'evenodd' })));
};
var ForwardRef$4w = React.forwardRef(SvgOpenBoxDone);

var SvgOpenBoxFavorite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 16.764V8l-8 2-8-2v8.764a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.763Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm20 6-7.106-3.553a2 2 0 0 0-1.788 0L4 6l8 4 8-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm20 6-8 4 2 3 8-4-2-3ZM4 6l8 4-2 3-8-4 2-3Zm8.23-3.5-.23.24-.23-.24a1.568 1.568 0 0 0-2.295 0 1.768 1.768 0 0 0 0 2.412L11.082 6.6a1.254 1.254 0 0 0 1.836 0l1.607-1.688a1.768 1.768 0 0 0 0-2.412 1.568 1.568 0 0 0-2.296 0Z' })));
};
var ForwardRef$4v = React.forwardRef(SvgOpenBoxFavorite);

var SvgOpenBoxMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 16.764V8l-8 2-8-2v8.764a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.763Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm20 6-7.106-3.553a2 2 0 0 0-1.788 0L4 6l8 4 8-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm20 6-8 4 2 3 8-4-2-3ZM4 6l8 4-2 3-8-4 2-3Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14.75 5a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$4u = React.forwardRef(SvgOpenBoxMinus);

var SvgOpenBoxRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 16.764V8l-8 2-8-2v8.764a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.764Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm20 6-7.106-3.553a2 2 0 0 0-1.788 0L4 6l8 4 8-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm20 6-8 4 2 3 8-4-2-3ZM4 6l8 4-2 3-8-4 2-3Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.945 2.056a.75.75 0 0 1 0 1.06L13.06 4l.884.884a.75.75 0 1 1-1.061 1.06L12 5.062l-.884.884a.75.75 0 0 1-1.06-1.061L10.94 4l-.884-.884a.75.75 0 1 1 1.06-1.06l.884.883.884-.883a.75.75 0 0 1 1.06 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$4t = React.forwardRef(SvgOpenBoxRemove);

var SvgOpenBoxSearch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 16.764V8l-8 2-8-2v8.764a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.763Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm20 6-7.106-3.553a2 2 0 0 0-1.788 0L4 6l8 4 8-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm20 6-8 4 2 3 8-4-2-3ZM4 6l8 4-2 3-8-4 2-3Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11 2.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM8.25 4a2.75 2.75 0 1 1 5.152 1.34l.628.63a.75.75 0 0 1-1.06 1.06l-.63-.628A2.75 2.75 0 0 1 8.25 4Z', clipRule: 'evenodd' })));
};
var ForwardRef$4s = React.forwardRef(SvgOpenBoxSearch);

var SvgOpenBoxTwoSide = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 17V8l-5-4H9L4 8v9a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 4h7.263c.343 0 .661.184.838.486l1.758 3C22.25 8.152 21.781 9 21.021 9h-4.984a1.945 1.945 0 0 1-1.675-.971L12 4Zm0 0H4.737a.973.973 0 0 0-.838.486l-1.758 3C1.75 8.152 2.219 9 2.979 9h4.984c.686 0 1.322-.369 1.675-.971L12 4Z' })));
};
var ForwardRef$4r = React.forwardRef(SvgOpenBoxTwoSide);

var SvgOpenBox = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 16.764V8l-8 2-8-2v8.764a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.763Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 16.764V8l-8 2-8-2v8.764a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.763Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm20 6-7.106-3.553a2 2 0 0 0-1.788 0L4 6l8 4 8-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm20 6-8 4 2 3 8-4-2-3ZM4 6l8 4-2 3-8-4 2-3Z' })));
};
var ForwardRef$4q = React.forwardRef(SvgOpenBox);

var SvgOutCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.47 7.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H8a.75.75 0 0 1 0-1.5h12.19l-2.72-2.72a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$4p = React.forwardRef(SvgOutCircle);

var SvgOutRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7 3h4a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.47 8.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.19l-1.72-1.72a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$4o = React.forwardRef(SvgOutRectangle);

var SvgPackageBoxCube = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm18.625 4.944-5-2.222a4 4 0 0 0-3.25 0l-5 2.222A4 4 0 0 0 3 8.6v6.8a4 4 0 0 0 2.375 3.656l5 2.222a4 4 0 0 0 3.25 0l5-2.222A4 4 0 0 0 21 15.4V8.6a4 4 0 0 0-2.375-3.656Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm18.625 4.944-5-2.222a4 4 0 0 0-3.25 0l-5 2.222a3.995 3.995 0 0 0-1.61 1.304L12 10l8.236-3.752a3.996 3.996 0 0 0-1.611-1.304Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 7.25a.75.75 0 0 1 .75.75v13.552a4 4 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75Z' })));
};
var ForwardRef$4n = React.forwardRef(SvgPackageBoxCube);

var SvgPackageBoxDash = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.25 6a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 6Z', clipRule: 'evenodd' })));
};
var ForwardRef$4m = React.forwardRef(SvgPackageBoxDash);

var SvgPackageBoxFavorite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 18V7.657a4 4 0 0 0-1.172-2.829l-1.656-1.656A4 4 0 0 0 16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.172 4.828A4 4 0 0 0 2 7.657V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.171 4.828A4 4 0 0 0 2.054 7h19.892a4 4 0 0 0-1.118-2.172l-1.656-1.656A4 4 0 0 0 16.343 2ZM9 7h6v6l-3-2-3 2V7Z' })));
};
var ForwardRef$4l = React.forwardRef(SvgPackageBoxFavorite);

var SvgPackageBoxHandle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 25', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 18.5V7.461a2 2 0 0 0-.75-1.561l-3.154-2.523a4 4 0 0 0-2.5-.877H8.404a4 4 0 0 0-2.499.877L2.751 5.9A2 2 0 0 0 2 7.46V18.5a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M9 6.5h6v6l-3-2-3 2v-6Zm6.597-4H8.403a4 4 0 0 0-2.499.877L2.751 5.9a2 2 0 0 0-.505.6h19.508a2 2 0 0 0-.505-.6l-3.153-2.523a4 4 0 0 0-2.5-.877Z' })));
};
var ForwardRef$4k = React.forwardRef(SvgPackageBoxHandle);

var SvgPackageBoxTwoSide = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm18.625 4.944-5-2.222a4 4 0 0 0-3.25 0l-5 2.222A4 4 0 0 0 3 8.6v6.8a4 4 0 0 0 2.375 3.656l5 2.222a4 4 0 0 0 3.25 0l5-2.222A4 4 0 0 0 21 15.4V8.6a4 4 0 0 0-2.375-3.656Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm18.625 4.944-5-2.222a4 4 0 0 0-3.25 0l-5 2.222a3.995 3.995 0 0 0-1.61 1.304L12 10l8.236-3.752a3.996 3.996 0 0 0-1.611-1.304Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 7.25a.75.75 0 0 1 .75.75v13.552a4 4 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75Zm5-1a.75.75 0 0 1 .75.75v12.445l-1.5.666V7a.75.75 0 0 1 .75-.75Z' })));
};
var ForwardRef$4j = React.forwardRef(SvgPackageBoxTwoSide);

var SvgPackageBox = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 25', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 6.5a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-12Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 2.5h8v7.586c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0l-1.586 1.586c-.63.63-1.707.184-1.707-.707V2.5Z' })));
};
var ForwardRef$4i = React.forwardRef(SvgPackageBox);

var SvgPackageCube = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm16.83 8.203-4-1.824a2 2 0 0 0-1.66 0l-4 1.824A2 2 0 0 0 6 10.023v4.954a2 2 0 0 0 1.17 1.82l4 1.824a2 2 0 0 0 1.66 0l4-1.824a2 2 0 0 0 1.17-1.82v-4.954a2 2 0 0 0-1.17-1.82Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm16.83 8.203-4-1.824a2 2 0 0 0-1.66 0l-4 1.824A2 2 0 0 0 6.147 9.27L12 12l5.852-2.731a2 2 0 0 0-1.022-1.066Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 10.25a.75.75 0 0 1 .75.75v7.656a2 2 0 0 1-1.5 0V11a.75.75 0 0 1 .75-.75Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm0 19a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm8.601-16.852a.75.75 0 0 1 0 1.061l-.707.707a.75.75 0 0 1-1.06-1.06l.707-.708a.75.75 0 0 1 1.06 0ZM5.166 18.834a.75.75 0 0 1 0 1.06l-.707.707a.75.75 0 0 1-1.06-1.06l.707-.707a.75.75 0 0 1 1.06 0ZM22.75 12a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75Zm-19 0a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75Zm16.851 8.601a.75.75 0 0 1-1.06 0l-.707-.707a.75.75 0 0 1 1.06-1.06l.707.707a.75.75 0 0 1 0 1.06ZM5.166 5.166a.75.75 0 0 1-1.06 0l-.708-.707A.75.75 0 1 1 4.46 3.4l.707.707a.75.75 0 0 1 0 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$4h = React.forwardRef(SvgPackageCube);

var SvgPackageDashCentre = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 18V7.657a4 4 0 0 0-1.172-2.829l-1.656-1.656A4 4 0 0 0 16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.172 4.828A4 4 0 0 0 2 7.657V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.171 4.828A4 4 0 0 0 2.054 7h19.892a4 4 0 0 0-1.118-2.172l-1.656-1.656A4 4 0 0 0 16.343 2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.25 10a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$4g = React.forwardRef(SvgPackageDashCentre);

var SvgPackageDashLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 18V7.657a4 4 0 0 0-1.172-2.829l-1.656-1.656A4 4 0 0 0 16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.172 4.828A4 4 0 0 0 2 7.657V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.171 4.828A4 4 0 0 0 2.054 7h19.892a4 4 0 0 0-1.118-2.172l-1.656-1.656A4 4 0 0 0 16.343 2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M4.25 10A.75.75 0 0 1 5 9.25h3a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$4f = React.forwardRef(SvgPackageDashLeft);

var SvgPackageDashRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 18V7.657a4 4 0 0 0-1.172-2.829l-1.656-1.656A4 4 0 0 0 16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.172 4.828A4 4 0 0 0 2 7.657V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.171 4.828A4 4 0 0 0 2.054 7h19.892a4 4 0 0 0-1.118-2.172l-1.656-1.656A4 4 0 0 0 16.343 2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.25 19a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Zm0-3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$4e = React.forwardRef(SvgPackageDashRight);

var SvgPackageFavorite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 2h8v7.586c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0l-1.586 1.586c-.63.63-1.707.184-1.707-.707V2Z' })));
};
var ForwardRef$4d = React.forwardRef(SvgPackageFavorite);

var SvgPackageSun = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 16V9.495a2 2 0 0 0-.586-1.414L15.92 6.586A2 2 0 0 0 14.505 6h-5.01a2 2 0 0 0-1.414.586L6.586 8.08A2 2 0 0 0 6 9.495V16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.25 11a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14.505 6h-5.01a2 2 0 0 0-1.414.586L6.586 8.08a2 2 0 0 0-.524.92h11.876a2 2 0 0 0-.524-.92L15.92 6.587A2 2 0 0 0 14.505 6Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm0 19a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm8.601-16.852a.75.75 0 0 1 0 1.061l-.707.707a.75.75 0 0 1-1.06-1.06l.707-.708a.75.75 0 0 1 1.06 0ZM5.166 18.834a.75.75 0 0 1 0 1.06l-.707.707a.75.75 0 0 1-1.06-1.06l.707-.707a.75.75 0 0 1 1.06 0ZM22.75 12a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75Zm-19 0a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75Zm16.851 8.601a.75.75 0 0 1-1.06 0l-.707-.707a.75.75 0 0 1 1.06-1.06l.707.707a.75.75 0 0 1 0 1.06ZM5.166 5.166a.75.75 0 0 1-1.06 0l-.708-.707A.75.75 0 1 1 4.46 3.4l.707.707a.75.75 0 0 1 0 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$4c = React.forwardRef(SvgPackageSun);

var SvgPackage = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm0 19a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm8.601-16.852a.75.75 0 0 1 0 1.061l-.707.707a.75.75 0 0 1-1.06-1.06l.707-.708a.75.75 0 0 1 1.06 0ZM5.166 18.834a.75.75 0 0 1 0 1.06l-.707.707a.75.75 0 0 1-1.06-1.06l.707-.707a.75.75 0 0 1 1.06 0ZM22.75 12a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75Zm-9-3a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Zm-10 3a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75Zm16.851 8.601a.75.75 0 0 1-1.06 0l-.707-.707a.75.75 0 0 1 1.06-1.06l.707.707a.75.75 0 0 1 0 1.06ZM5.166 5.166a.75.75 0 0 1-1.06 0l-.708-.707A.75.75 0 1 1 4.46 3.4l.707.707a.75.75 0 0 1 0 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$4b = React.forwardRef(SvgPackage);

var SvgPackagingAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 18V7.657a4 4 0 0 0-1.172-2.829l-1.656-1.656A4 4 0 0 0 16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.172 4.828A4 4 0 0 0 2 7.657V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.171 4.828A4 4 0 0 0 2.054 7h19.892a4 4 0 0 0-1.118-2.172l-1.656-1.656A4 4 0 0 0 16.343 2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 10.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V17a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V11a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$4a = React.forwardRef(SvgPackagingAdd);

var SvgPackagingArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 18V7.657a4 4 0 0 0-1.172-2.829l-1.656-1.656A4 4 0 0 0 16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.172 4.828A4 4 0 0 0 2 7.657V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.171 4.828A4 4 0 0 0 2.054 7h19.892a4 4 0 0 0-1.118-2.172l-1.656-1.656A4 4 0 0 0 16.343 2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm11.25 15.604-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.292a.75.75 0 1 0-1.06-1.061l-.72.72V11a.75.75 0 0 0-1.5 0v4.604Z', clipRule: 'evenodd' })));
};
var ForwardRef$49 = React.forwardRef(SvgPackagingArrowDown);

var SvgPackagingArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 18V7.657a4 4 0 0 0-1.172-2.829l-1.656-1.656A4 4 0 0 0 16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.172 4.828A4 4 0 0 0 2 7.657V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.171 4.828A4 4 0 0 0 2.054 7h19.892a4 4 0 0 0-1.118-2.172l-1.656-1.656A4 4 0 0 0 16.343 2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm11.25 12.396-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.293a.75.75 0 1 1-1.06 1.06l-.72-.72V17a.75.75 0 0 1-1.5 0v-4.604Z', clipRule: 'evenodd' })));
};
var ForwardRef$48 = React.forwardRef(SvgPackagingArrowUp);

var SvgPackagingCancel = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 18V7.657a4 4 0 0 0-1.172-2.829l-1.656-1.656A4 4 0 0 0 16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.172 4.828A4 4 0 0 0 2 7.657V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.171 4.828A4 4 0 0 0 2.054 7h19.892a4 4 0 0 0-1.118-2.172l-1.656-1.656A4 4 0 0 0 16.343 2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.348 11.348a.75.75 0 0 1 1.061 0L12 12.94l1.591-1.59a.75.75 0 1 1 1.06 1.06L13.062 14l1.59 1.591a.75.75 0 1 1-1.06 1.06L12 15.062l-1.591 1.59a.75.75 0 0 1-1.06-1.06L10.938 14l-1.59-1.591a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$47 = React.forwardRef(SvgPackagingCancel);

var SvgPackagingDone = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 18V7.657a4 4 0 0 0-1.172-2.829l-1.656-1.656A4 4 0 0 0 16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.172 4.828A4 4 0 0 0 2 7.657V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.171 4.828A4 4 0 0 0 2.054 7h19.892a4 4 0 0 0-1.118-2.172l-1.656-1.656A4 4 0 0 0 16.343 2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.494 11.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .937-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z', clipRule: 'evenodd' })));
};
var ForwardRef$46 = React.forwardRef(SvgPackagingDone);

var SvgPackagingFavorite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 18V7.657a4 4 0 0 0-1.172-2.829l-1.656-1.656A4 4 0 0 0 16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.172 4.828A4 4 0 0 0 2 7.657V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.171 4.828A4 4 0 0 0 2.054 7h19.892a4 4 0 0 0-1.118-2.172l-1.656-1.656A4 4 0 0 0 16.343 2Zm-4.078 9.917-.265.265-.265-.265a1.875 1.875 0 1 0-2.652 2.652l1.856 1.856a1.5 1.5 0 0 0 2.122 0l1.856-1.857a1.875 1.875 0 1 0-2.652-2.651Z' })));
};
var ForwardRef$45 = React.forwardRef(SvgPackagingFavorite);

var SvgPackagingLocationBox = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M13 16a2 2 0 0 1 2-2h1.002c.603-1.32.998-2.687.998-4 0-5.523-3.134-8-7-8s-7 2.477-7 8c0 3.281 2.47 6.899 4.476 9.295 1.341 1.602 3.707 1.602 5.048 0 .156-.187.315-.38.476-.582V16Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 10, cy: 9, r: 3, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4Zm3 2.75a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5h2Z', clipRule: 'evenodd' })));
};
var ForwardRef$44 = React.forwardRef(SvgPackagingLocationBox);

var SvgPackagingLocation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 18V7.657a4 4 0 0 0-1.172-2.829l-1.656-1.656A4 4 0 0 0 16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.172 4.828A4 4 0 0 0 2 7.657V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.171 4.828A4 4 0 0 0 2.054 7h19.892a4 4 0 0 0-1.118-2.172l-1.656-1.656A4 4 0 0 0 16.343 2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.65 17.336c.88-.96 2.35-2.79 2.35-4.336 0-2.21-1.343-3-3-3s-3 .79-3 3c0 1.546 1.469 3.376 2.35 4.336a.873.873 0 0 0 1.3 0ZM12 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$43 = React.forwardRef(SvgPackagingLocation);

var SvgPackagingMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 18V7.657a4 4 0 0 0-1.172-2.829l-1.656-1.656A4 4 0 0 0 16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.172 4.828A4 4 0 0 0 2 7.657V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.171 4.828A4 4 0 0 0 2.054 7h19.892a4 4 0 0 0-1.118-2.172l-1.656-1.656A4 4 0 0 0 16.343 2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.75 14a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$42 = React.forwardRef(SvgPackagingMinus);

var SvgPackagingSearch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 18V7.657a4 4 0 0 0-1.172-2.829l-1.656-1.656A4 4 0 0 0 16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.172 4.828A4 4 0 0 0 2 7.657V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.171 4.828A4 4 0 0 0 2.054 7h19.892a4 4 0 0 0-1.118-2.172l-1.656-1.656A4 4 0 0 0 16.343 2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 11.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM8.25 14a3.75 3.75 0 1 1 6.879 2.068l.901.902a.75.75 0 1 1-1.06 1.06l-.902-.901A3.75 3.75 0 0 1 8.25 14Z', clipRule: 'evenodd' })));
};
var ForwardRef$41 = React.forwardRef(SvgPackagingSearch);

var SvgPackagingTime = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 18V7.657a4 4 0 0 0-1.172-2.829l-1.656-1.656A4 4 0 0 0 16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.172 4.828A4 4 0 0 0 2 7.657V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.171 4.828A4 4 0 0 0 2.054 7h19.892a4 4 0 0 0-1.118-2.172l-1.656-1.656A4 4 0 0 0 16.343 2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm.75-5.5a.75.75 0 0 0-1.5 0V14c0 .414.336.75.75.75h1a.75.75 0 0 0 0-1.5h-.25v-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$40 = React.forwardRef(SvgPackagingTime);

var SvgPaperPin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 13.25a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7 10.172V7.828a2 2 0 0 0-.586-1.414C5.154 5.154 6.047 3 7.828 3h8.344c1.781 0 2.674 2.154 1.414 3.414A2 2 0 0 0 17 7.828v2.344a2 2 0 0 0 .586 1.414c1.26 1.26.367 3.414-1.414 3.414H7.828c-1.781 0-2.674-2.154-1.414-3.414A2 2 0 0 0 7 10.172Z' })));
};
var ForwardRef$3$ = React.forwardRef(SvgPaperPin);

var SvgParcel = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 18V7.657a4 4 0 0 0-1.172-2.829l-1.656-1.656A4 4 0 0 0 16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.172 4.828A4 4 0 0 0 2 7.657V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.171 4.828A4 4 0 0 0 2.054 7h19.892a4 4 0 0 0-1.118-2.172l-1.656-1.656A4 4 0 0 0 16.343 2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm8.25 13.396-.72.72a.75.75 0 0 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.293a.75.75 0 1 1-1.06 1.06l-.72-.72V17a.75.75 0 0 1-1.5 0v-3.604Zm6 2.208-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.292a.75.75 0 1 0-1.06-1.061l-.72.72V12a.75.75 0 0 0-1.5 0v3.604Z', clipRule: 'evenodd' })));
};
var ForwardRef$3_ = React.forwardRef(SvgParcel);

var SvgPayoneer = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-3a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$3Z = React.forwardRef(SvgPayoneer);

var SvgPaypal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.7 18H7l2-5h4a5 5 0 0 0 4.703-6.703A5.002 5.002 0 0 1 16 16h-4l-2 5H5.5l1.2-3Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M13 3H8.5L3 18h4l2-5h4a5 5 0 0 0 0-10Z', opacity: 0.4 })));
};
var ForwardRef$3Y = React.forwardRef(SvgPaypal);

var SvgPeopleCircleBelow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.508 16.234C5.272 16.69 3 17.756 3 19c0 1.657 4.03 3 9 3s9-1.343 9-3c0-1.244-2.272-2.311-5.508-2.766a3.5 3.5 0 0 1-6.984 0Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a4 4 0 0 0-4 4v1a1 1 0 0 0 1 1 1 1 0 0 1 1 1v3a2 2 0 1 0 4 0v-3a1 1 0 0 1 1-1 1 1 0 0 0 1-1v-1a4 4 0 0 0-4-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$3X = React.forwardRef(SvgPeopleCircleBelow);

var SvgPeople = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.5 16h-.626A4 4 0 0 0 4.8 17.44l-1.067 1.28C2.648 20.022 3.574 22 5.27 22h13.46c1.696 0 2.622-1.978 1.537-3.28L19.2 17.44A4 4 0 0 0 16.127 16H15.5a3.5 3.5 0 1 1-7 0Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a4 4 0 0 0-4 4v1a1 1 0 0 0 1 1 1 1 0 0 1 1 1v3a2 2 0 1 0 4 0v-3a1 1 0 0 1 1-1 1 1 0 0 0 1-1v-1a4 4 0 0 0-4-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$3W = React.forwardRef(SvgPeople);

var SvgPhoneLock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16 13.75c-.69 0-1.25.56-1.25 1.25v2a.75.75 0 0 1-1.5 0v-2a2.75 2.75 0 1 1 5.5 0v2a.75.75 0 0 1-1.5 0v-2c0-.69-.56-1.25-1.25-1.25Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 16h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z' })));
};
var ForwardRef$3V = React.forwardRef(SvgPhoneLock);

var SvgPieChart = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 13a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21.802 10.013a10.012 10.012 0 0 0-7.815-7.816C12.905 1.98 12 2.895 12 4v6a2 2 0 0 0 2 2h6c1.105 0 2.02-.905 1.802-1.987Z' })));
};
var ForwardRef$3U = React.forwardRef(SvgPieChart);

var SvgPillTablet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 2h4a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4V2Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h4V2H8Zm0 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M17 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' })));
};
var ForwardRef$3T = React.forwardRef(SvgPillTablet);

var SvgPillsCapsule = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M5 4a2 2 0 0 1 2-2h10a2 2 0 1 1 0 4H7a2 2 0 0 1-2-2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M5 10a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' })));
};
var ForwardRef$3S = React.forwardRef(SvgPillsCapsule);

var SvgPills = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16 15a7 7 0 0 0-7.938-6.938 7 7 0 1 1 7.875 7.875A7.07 7.07 0 0 0 16 15Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19.95 13.95a7 7 0 0 0 0-9.9l-6 6a6.978 6.978 0 0 1 1.988 5.887 6.97 6.97 0 0 0 4.012-1.987Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16 15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M9 22a7 7 0 0 0 7-7H2a7 7 0 0 0 7 7Z' })));
};
var ForwardRef$3R = React.forwardRef(SvgPills);

var SvgPinCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.75 16.095C5.868 16.427 3 17.602 3 19c0 1.657 4.03 3 9 3s9-1.343 9-3c0-1.398-2.868-2.573-6.75-2.905V18a2.25 2.25 0 0 1-4.5 0v-1.905Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.75 7.905A3.001 3.001 0 0 0 12 2a3 3 0 0 0-.75 5.905V18a.75.75 0 0 0 1.5 0V7.905Z', clipRule: 'evenodd' })));
};
var ForwardRef$3Q = React.forwardRef(SvgPinCircle);

var SvgPin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.75 15H7.874A4 4 0 0 0 4.8 16.44l-1.067 1.28C2.648 19.022 3.574 21 5.27 21h13.46c1.696 0 2.622-1.978 1.537-3.28L19.2 16.44A4 4 0 0 0 16.127 15H14.25v1a2.25 2.25 0 0 1-4.5 0v-1Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.75 6.855a2 2 0 1 0-1.5 0V16a.75.75 0 0 0 1.5 0V6.855Z', clipRule: 'evenodd' })));
};
var ForwardRef$3P = React.forwardRef(SvgPin);

var SvgPinterestCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("circle", { cx: 12, cy: 12, r: 10, fill: 'currentColor', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 7.75a4.25 4.25 0 0 0-3.682 6.374.75.75 0 1 1-1.298.752 5.75 5.75 0 1 1 3.652 2.72L9.594 21.69a.75.75 0 0 1-1.45-.382l2.63-10a.75.75 0 0 1 1.451.382l-1.171 4.453A4.25 4.25 0 1 0 12 7.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$3O = React.forwardRef(SvgPinterestCircle);

var SvgPinterest = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 4.4c-3.045 0-5.474 2.297-5.474 5.086 0 .185.01.368.032.548.064.558-.178 1.14-.692 1.367-.76.337-1.661-.033-1.786-.854A7.064 7.064 0 0 1 4 9.486C4 5.33 7.603 2 12 2s8 3.331 8 7.486c0 4.154-3.603 7.485-8 7.485a8.58 8.58 0 0 1-1.45-.123L9.165 21.15c-.204.634-.91.99-1.577.797-.667-.193-1.043-.864-.84-1.498l4.043-12.571c.204-.634.91-.99 1.577-.797.667.193 1.043.864.84 1.498l-1.914 5.95c.23.028.466.042.705.042 3.045 0 5.474-2.297 5.474-5.085 0-2.789-2.43-5.086-5.474-5.086Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 4.4c-3.045 0-5.474 2.297-5.474 5.086 0 .185.01.368.032.548.064.558-.178 1.14-.692 1.367-.76.337-1.661-.033-1.786-.854A7.064 7.064 0 0 1 4 9.486C4 5.33 7.603 2 12 2s8 3.331 8 7.486c0 4.154-3.603 7.485-8 7.485a8.58 8.58 0 0 1-1.45-.123l.745-2.318c.23.027.466.041.705.041 3.045 0 5.474-2.297 5.474-5.085 0-2.789-2.43-5.086-5.474-5.086Z' })));
};
var ForwardRef$3N = React.forwardRef(SvgPinterest);

var SvgPlaster = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14.206 4.166a3.98 3.98 0 1 1 5.628 5.628l-10.04 10.04a3.98 3.98 0 0 1-5.628-5.628l10.04-10.04Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M11.831 9.34a1 1 0 0 1 1.414 0l1.414 1.415a1 1 0 0 1 0 1.414l-2.49 2.49a1 1 0 0 1-1.415 0L9.34 13.246a1 1 0 0 1 0-1.414l2.491-2.49Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.712 5.813a.75.75 0 0 1 1.061 0l1.414 1.414a.75.75 0 0 1-1.06 1.06l-1.415-1.414a.75.75 0 0 1 0-1.06Zm-9.899 9.9a.75.75 0 0 1 1.06 0l1.415 1.414a.75.75 0 1 1-1.06 1.06l-1.415-1.414a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$3M = React.forwardRef(SvgPlaster);

var SvgPound = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M7 12h10m2-4V6.5a3.5 3.5 0 1 0-7 0v2.069a10 10 0 0 1-2.106 6.14L7.51 17.771C6.489 19.086 7.425 21 9.089 21H19' })));
};
var ForwardRef$3L = React.forwardRef(SvgPound);

var SvgPress = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10 7v6l-1.414-1.414A2 2 0 0 0 7.172 11h-.066a2 2 0 0 0-1.82 2.828l2.648 5.827A4 4 0 0 0 11.576 22h4.103a4 4 0 0 0 3.473-2.015l.321-.563A4 4 0 0 0 20 17.438V17a4 4 0 0 0-4-4h-2V7a2 2 0 1 0-4 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2.75A5.25 5.25 0 0 0 6.75 8a.75.75 0 0 1-1.5 0 6.75 6.75 0 0 1 13.5 0 .75.75 0 0 1-1.5 0c0-2.9-2.35-5.25-5.25-5.25Z', clipRule: 'evenodd' })));
};
var ForwardRef$3K = React.forwardRef(SvgPress);

var SvgPreviousArrow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21.03 15.518V8.482c0-1.544-1.674-2.505-3.007-1.728l-6.03 3.518c-1.324.772-1.324 2.684 0 3.455l6.03 3.518c1.333.778 3.008-.184 3.008-1.727Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M13.03 15.518V8.482c0-1.544-1.674-2.505-3.007-1.728l-6.03 3.518c-1.324.772-1.324 2.684 0 3.455l6.03 3.518c1.333.778 3.008-.184 3.008-1.727Z' })));
};
var ForwardRef$3J = React.forwardRef(SvgPreviousArrow);

var SvgProfitCart = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 3H6a4 4 0 1 0 0 8h12a4 4 0 0 0 0-8Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 19V7H6v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm11.25 12.396-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.293a.75.75 0 1 1-1.06 1.06l-.72-.72v4.19a.75.75 0 0 1-1.5 0v-4.19Z', clipRule: 'evenodd' })));
};
var ForwardRef$3I = React.forwardRef(SvgProfitCart);

var SvgProfitCoin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4 12a2 2 0 0 1 2-2h9a2 2 0 1 1 0 4H6a2 2 0 0 1-2-2Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15 14H6.167C4.97 14 4 14.895 4 16s.97 2 2.167 2H15a2 2 0 1 0 0-4Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 18a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm11.25 3.396-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.292a.75.75 0 0 1-1.06 1.061l-.72-.72V7a.75.75 0 0 1-1.5 0V3.396Z', clipRule: 'evenodd' })));
};
var ForwardRef$3H = React.forwardRef(SvgProfitCoin);

var SvgProfit = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 5.75a.75.75 0 0 1 .75.75v.854a2.75 2.75 0 0 1 2 2.646.75.75 0 0 1-1.5 0A1.25 1.25 0 1 0 12 11.25a2.75 2.75 0 0 1 .75 5.396v.854a.75.75 0 0 1-1.5 0v-.854a2.751 2.751 0 0 1-2-2.646.75.75 0 0 1 1.5 0A1.25 1.25 0 1 0 12 12.75a2.75 2.75 0 0 1-.75-5.396V6.5a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3.886 8.719a8.753 8.753 0 0 1 16.75 1.866l.914-.685a.75.75 0 1 1 .9 1.2l-1.011.758a2.75 2.75 0 0 1-2.88.26l-.895-.447a.75.75 0 1 1 .671-1.342l.804.402a7.252 7.252 0 0 0-13.862-1.45.75.75 0 1 1-1.39-.562Zm-.557 4.46a1.228 1.228 0 0 0-.1.045l-.894.447a.75.75 0 1 1-.67-1.342l.894-.447a2.75 2.75 0 0 1 2.88.26l1.01.758a.75.75 0 1 1-.9 1.2l-.613-.46a7.253 7.253 0 0 0 13.787 1.079.75.75 0 1 1 1.39.562A8.753 8.753 0 0 1 3.33 13.18Z', clipRule: 'evenodd' })));
};
var ForwardRef$3G = React.forwardRef(SvgProfit);

var SvgPyramid = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21.594 16.5 14.648 4.516c-1.17-2.021-4.125-2.021-5.296 0L2.406 16.5c-1.162 2.005.307 4.5 2.649 4.5h13.89c2.342 0 3.81-2.495 2.649-4.5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm20.724 15-3.477-6H6.753l-3.477 6h17.448Z' })));
};
var ForwardRef$3F = React.forwardRef(SvgPyramid);

var SvgQrScan = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7 5.75c-.69 0-1.25.56-1.25 1.25v1a.75.75 0 0 1-1.5 0V7A2.75 2.75 0 0 1 7 4.25h10A2.75 2.75 0 0 1 19.75 7v1a.75.75 0 0 1-1.5 0V7c0-.69-.56-1.25-1.25-1.25H7Zm10 12.5c.69 0 1.25-.56 1.25-1.25v-1a.75.75 0 0 1 1.5 0v1A2.75 2.75 0 0 1 17 19.75H7A2.75 2.75 0 0 1 4.25 17v-1a.75.75 0 0 1 1.5 0v1c0 .69.56 1.25 1.25 1.25h10Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M1.25 12a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$3E = React.forwardRef(SvgQrScan);

var SvgReceipt = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19 2H5a2 2 0 0 0-2 2v15.154a2 2 0 0 0 2.677 1.882l1.562-.562a2 2 0 0 1 1.498.058l2.442 1.099a2 2 0 0 0 1.642 0l2.442-1.1a2 2 0 0 1 1.498-.057l1.562.562A2 2 0 0 0 21 19.154V4a2 2 0 0 0-2-2Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.75 7a.75.75 0 0 1-.75.75H7a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75Zm0 4a.75.75 0 0 1-.75.75H7a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75Zm-5 4a.75.75 0 0 1-.75.75H7a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$3D = React.forwardRef(SvgReceipt);

var SvgRedoCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.465 6.75a.75.75 0 0 1 .75.75V10a.75.75 0 0 1-.565.727l-1.965.5a.75.75 0 1 1-.37-1.454l.833-.212a3.25 3.25 0 1 0 1 3.252.75.75 0 1 1 1.452.374A4.752 4.752 0 0 1 7.25 12a4.75 4.75 0 0 1 7.465-3.898V7.5a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$3C = React.forwardRef(SvgRedoCircle);

var SvgRedoRectangleLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.41 6.75a.75.75 0 0 0-.75.75V10a.75.75 0 0 0 .564.727l1.965.5a.75.75 0 1 0 .37-1.454l-.833-.212a3.25 3.25 0 1 1-1 3.252.75.75 0 1 0-1.452.374A4.752 4.752 0 0 0 16.624 12a4.75 4.75 0 0 0-7.465-3.898V7.5a.75.75 0 0 0-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$3B = React.forwardRef(SvgRedoRectangleLeft);

var SvgRedoRectangleRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.465 6.75a.75.75 0 0 1 .75.75V10a.75.75 0 0 1-.565.727l-1.965.5a.75.75 0 1 1-.37-1.454l.833-.212a3.25 3.25 0 1 0 1 3.252.75.75 0 1 1 1.452.374A4.752 4.752 0 0 1 7.25 12a4.75 4.75 0 0 1 7.465-3.898V7.5a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$3A = React.forwardRef(SvgRedoRectangleRight);

var SvgRedo = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 3.75A8.25 8.25 0 1 0 20.25 12a.75.75 0 0 1 1.5 0c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25a9.723 9.723 0 0 1 7.046 3.01V3a.75.75 0 1 1 1.5 0v4.5a.75.75 0 0 1-.75.75h-4.421a.75.75 0 0 1 0-1.5h2.99a8.233 8.233 0 0 0-6.365-3Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19.114 6.75V3a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-.75.75h-4.421a.75.75 0 0 1 0-1.5h3.67Z' })));
};
var ForwardRef$3z = React.forwardRef(SvgRedo);

var SvgReloadCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.509 5.303a.75.75 0 0 1 .974.42l.795 2.002a.75.75 0 0 1-1.066.93A4.497 4.497 0 0 0 12 8.084c-2.397 0-4.25 1.802-4.25 3.917 0 .345.048.678.138.995a.75.75 0 1 1-1.443.41A5.13 5.13 0 0 1 6.25 12c0-3.04 2.624-5.417 5.75-5.417.433 0 .856.045 1.262.131l-.173-.437a.75.75 0 0 1 .42-.974Zm3.12 4.776a.75.75 0 0 1 .926.516c.127.449.195.92.195 1.405 0 3.04-2.624 5.417-5.75 5.417a6.16 6.16 0 0 1-1.262-.131l.173.437a.75.75 0 1 1-1.394.554l-.795-2.002a.75.75 0 0 1 1.066-.93 4.497 4.497 0 0 0 2.212.572c2.397 0 4.25-1.802 4.25-3.917a3.63 3.63 0 0 0-.138-.995.75.75 0 0 1 .516-.927Z', clipRule: 'evenodd' })));
};
var ForwardRef$3y = React.forwardRef(SvgReloadCircle);

var SvgReloadRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.509 5.303a.75.75 0 0 1 .974.42l.795 2.002a.75.75 0 0 1-1.066.93A4.497 4.497 0 0 0 12 8.084c-2.397 0-4.25 1.802-4.25 3.917 0 .345.048.678.138.995a.75.75 0 1 1-1.443.41A5.13 5.13 0 0 1 6.25 12c0-3.04 2.624-5.417 5.75-5.417.433 0 .856.045 1.262.131l-.173-.437a.75.75 0 0 1 .42-.974Zm3.12 4.776a.75.75 0 0 1 .926.516c.127.449.195.92.195 1.405 0 3.04-2.624 5.417-5.75 5.417a6.16 6.16 0 0 1-1.262-.131l.173.437a.75.75 0 1 1-1.394.554l-.795-2.002a.75.75 0 0 1 1.066-.93 4.497 4.497 0 0 0 2.212.572c2.397 0 4.25-1.802 4.25-3.917a3.63 3.63 0 0 0-.138-.995.75.75 0 0 1 .516-.927Z', clipRule: 'evenodd' })));
};
var ForwardRef$3x = React.forwardRef(SvgReloadRectangle);

var SvgReload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18.554 7.35a.75.75 0 0 1 1.025.274 8.75 8.75 0 0 1-10.27 12.703l.535 1.406a.75.75 0 1 1-1.402.534l-1.178-3.09a.75.75 0 0 1 1.08-.915 7.25 7.25 0 0 0 9.937-9.886.75.75 0 0 1 .273-1.025Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14.59 1.3a.75.75 0 0 1 .968.433l1.178 3.09a.75.75 0 0 1-1.08.915 7.25 7.25 0 0 0-9.937 9.886.75.75 0 1 1-1.298.752 8.75 8.75 0 0 1 10.27-12.703l-.535-1.406a.75.75 0 0 1 .434-.968Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$3w = React.forwardRef(SvgReload);

var SvgRestart = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2.75a9.25 9.25 0 1 0 8.289 13.36.75.75 0 1 1 1.343.668A10.75 10.75 0 0 1 12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12a.75.75 0 0 1-.987.711l-3-1a.75.75 0 0 1 .474-1.422l1.953.65A9.251 9.251 0 0 0 12 2.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$3v = React.forwardRef(SvgRestart);

var SvgReturnBox = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 19V9a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 8h7.5a1 1 0 0 1 .8.4l1.5 2A1 1 0 0 1 21 12h-5.5a1 1 0 0 1-.8-.4L12 8Zm0 0H4.5a1 1 0 0 0-.8.4l-1.5 2A1 1 0 0 0 3 12h5.5a1 1 0 0 0 .8-.4L12 8Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.325 1.674A.75.75 0 0 1 8 1.25h6.5a2.25 2.25 0 0 1 0 4.5H13a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 0 0-1.5H9.552l.622.784a.75.75 0 1 1-1.176.932l-1.586-2a.75.75 0 0 1-.087-.792Z', clipRule: 'evenodd' })));
};
var ForwardRef$3u = React.forwardRef(SvgReturnBox);

var SvgReturnCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7 9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.75 10a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2.75A9.25 9.25 0 0 0 2.75 12a.75.75 0 0 1-1.5 0C1.25 6.063 6.063 1.25 12 1.25a10.72 10.72 0 0 1 7.708 3.256l.58-1.743a.75.75 0 0 1 1.424.474l-1 3a.75.75 0 0 1-1.31.213A9.235 9.235 0 0 0 12 2.75Zm10 8.5a.75.75 0 0 1 .75.75c0 5.937-4.813 10.75-10.75 10.75a10.72 10.72 0 0 1-7.708-3.256l-.58 1.743a.75.75 0 1 1-1.424-.474l1-3a.75.75 0 0 1 1.31-.213A9.25 9.25 0 0 0 21.25 12a.75.75 0 0 1 .751-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$3t = React.forwardRef(SvgReturnCircle);

var SvgReturn = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 19V9a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 8h7.5a1 1 0 0 1 .8.4l1.5 2A1 1 0 0 1 21 12h-5.5a1 1 0 0 1-.8-.4L12 8Zm0 0H4.5a1 1 0 0 0-.8.4l-1.5 2A1 1 0 0 0 3 12h5.5a1 1 0 0 0 .8-.4L12 8Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm12.75 3.396.72.72a.75.75 0 1 0 1.06-1.06l-1.293-1.293a1.75 1.75 0 0 0-2.474 0L9.47 3.055a.75.75 0 0 0 1.06 1.061l.72-.72V5.5a.75.75 0 0 0 1.5 0V3.396Z', clipRule: 'evenodd' })));
};
var ForwardRef$3s = React.forwardRef(SvgReturn);

var SvgReward = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7 16.107v4.416a1 1 0 0 0 1.371.928l3.258-1.302a1 1 0 0 1 .742 0l3.258 1.302A1 1 0 0 0 17 20.523v-4.416a2.166 2.166 0 0 1-.705.179l-.937.074a2.17 2.17 0 0 0-1.235.512l-.715.61a2.17 2.17 0 0 1-2.816 0l-.715-.61a2.17 2.17 0 0 0-1.235-.512l-.937-.074A2.166 2.166 0 0 1 7 16.107Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10.592 2.518a2.17 2.17 0 0 1 2.816 0l.715.61c.348.296.78.475 1.235.512l.937.074a2.17 2.17 0 0 1 1.99 1.991l.075.937c.037.455.216.887.512 1.235l.61.715a2.17 2.17 0 0 1 0 2.816l-.61.715a2.17 2.17 0 0 0-.512 1.235l-.074.937a2.17 2.17 0 0 1-1.991 1.99l-.937.075a2.17 2.17 0 0 0-1.235.512l-.715.61a2.17 2.17 0 0 1-2.816 0l-.715-.61a2.17 2.17 0 0 0-1.235-.512l-.937-.074a2.17 2.17 0 0 1-1.99-1.991l-.075-.937a2.17 2.17 0 0 0-.512-1.235l-.61-.715a2.17 2.17 0 0 1 0-2.816l.61-.715a2.17 2.17 0 0 0 .512-1.235l.074-.937a2.17 2.17 0 0 1 1.991-1.99l.937-.075a2.17 2.17 0 0 0 1.235-.512l.715-.61Z', opacity: 0.4 })));
};
var ForwardRef$3r = React.forwardRef(SvgReward);

var SvgRoadHorizontal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.25 12a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75Zm5.5 0a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75Zm-11 0a.75.75 0 0 0-.75-.75H6a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$3q = React.forwardRef(SvgRoadHorizontal);

var SvgRoadLocationHorizontal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.814 8H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-1.814a10.88 10.88 0 0 1-1.284 2.814c-.428.662-.953 1.3-1.566 1.787-.605.481-1.402.899-2.336.899-.934 0-1.731-.418-2.336-.899-.613-.487-1.138-1.125-1.566-1.787A10.904 10.904 0 0 1 6.814 8Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.25 16.327a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75Zm5.5 0a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75Zm-11 0a.75.75 0 0 0-.75-.75H6a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75ZM14.642 10C15.452 8.747 16 7.157 16 6a4 4 0 0 0-8 0c0 1.157.548 2.747 1.358 4 .736 1.14 1.69 2 2.642 2 .953 0 1.905-.86 2.642-2ZM12 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z', clipRule: 'evenodd' })));
};
var ForwardRef$3p = React.forwardRef(SvgRoadLocationHorizontal);

var SvgRoadLocation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.386 4a2 2 0 0 0-1.873 1.298l-4.5 12A2 2 0 0 0 3.886 20h16.228a2 2 0 0 0 1.873-2.702L18.3 7.47a1.5 1.5 0 0 1-1.127-2.722A2 2 0 0 0 15.614 4H8.386Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 12c2 0 4-3.79 4-6a4 4 0 0 0-8 0c0 2.21 2 6 4 6Zm0-4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-6 7.75a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75Zm0-4.5a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75Zm0-4.5a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$3o = React.forwardRef(SvgRoadLocation);

var SvgRoadPinHorizontal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10.577 8a1.456 1.456 0 0 0-.005.117v3.881a1.428 1.428 0 0 0 2.856 0V8.117c0-.04-.002-.078-.005-.117H19a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h5.577Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.25 15.393a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75Zm4.5 0a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75Zm-9 0a.75.75 0 0 0-.75-.75H7a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75Zm4-9.538a2 2 0 1 0-1.5 0V12a.75.75 0 0 0 1.5 0V5.855Z', clipRule: 'evenodd' })));
};
var ForwardRef$3n = React.forwardRef(SvgRoadPinHorizontal);

var SvgRoadPin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.75 6a1.249 1.249 0 0 1-1.588-1.924A1.998 1.998 0 0 0 15.614 4H8.386a2 2 0 0 0-1.873 1.298l-4.5 12A2 2 0 0 0 3.886 20h16.228a2 2 0 0 0 1.873-2.702L17.75 6Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 15.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm0-4.5a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm0-4.5a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75ZM20 5a3.001 3.001 0 0 1-2.25 2.905V12a.75.75 0 0 1-1.5 0V7.905A3.001 3.001 0 0 1 17 2a3 3 0 0 1 3 3Zm-3 1.25a1.249 1.249 0 1 0 0-2.497 1.249 1.249 0 0 0 0 2.497Z', clipRule: 'evenodd' })));
};
var ForwardRef$3m = React.forwardRef(SvgRoadPin);

var SvgRoad = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6.513 5.298A2 2 0 0 1 8.386 4h7.228a2 2 0 0 1 1.873 1.298l4.5 12A2 2 0 0 1 20.114 20H3.886a2 2 0 0 1-1.873-2.702l4.5-12Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 15.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm0-4.5a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm0-4.5a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$3l = React.forwardRef(SvgRoad);

var SvgRoofHomeAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 10.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.75 14a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$3k = React.forwardRef(SvgRoofHomeAdd);

var SvgRoofHomeArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.25 17c0 .414.336.75.75.75h2a.75.75 0 0 0 .67-.415l1-2a.75.75 0 0 0-1.34-.67l-.33.658-1.435-2.87c-.645-1.29-2.485-1.29-3.13 0l-1.211 2.423a.25.25 0 0 1-.448 0l-2.105-4.211a.75.75 0 1 0-1.342.67l2.106 4.212c.645 1.29 2.485 1.29 3.13 0l1.211-2.423a.25.25 0 0 1 .448 0l1.563 3.126H14a.75.75 0 0 0-.75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$3j = React.forwardRef(SvgRoofHomeArrowDown);

var SvgRoofHomeArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.25 11a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .67.415l1 2a.75.75 0 0 1-1.34.67l-.33-.658-1.435 2.87c-.645 1.29-2.485 1.29-3.13 0l-1.211-2.423a.25.25 0 0 0-.448 0l-2.105 4.211a.75.75 0 1 1-1.342-.67l2.106-4.212c.645-1.29 2.485-1.29 3.13 0l1.211 2.423a.25.25 0 0 0 .448 0l1.563-3.126H14a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$3i = React.forwardRef(SvgRoofHomeArrowUp);

var SvgRoofHomeCelsius = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.01 12.25c-1.25 0-2.26 1.01-2.26 2.25s1.01 2.25 2.26 2.25c.574 0 1.096-.212 1.495-.563a.75.75 0 1 1 .99 1.126 3.753 3.753 0 0 1-2.486.937A3.755 3.755 0 0 1 8.25 14.5a3.755 3.755 0 0 1 3.76-3.75 3.75 3.75 0 0 1 2.485.937.75.75 0 1 1-.99 1.126 2.253 2.253 0 0 0-1.496-.563Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.5 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' })));
};
var ForwardRef$3h = React.forwardRef(SvgRoofHomeCelsius);

var SvgRoofHomeCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.416 11.376a.75.75 0 0 1 .208 1.04l-2.647 3.97a2.75 2.75 0 0 1-4.232.42L8.47 15.53a.75.75 0 0 1 1.06-1.06l1.275 1.275a1.25 1.25 0 0 0 1.924-.19l2.647-3.97a.75.75 0 0 1 1.04-.209Z', clipRule: 'evenodd' })));
};
var ForwardRef$3g = React.forwardRef(SvgRoofHomeCheck);

var SvgRoofHomeCloud = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7 13.5a3.5 3.5 0 0 0 3.5 3.5h4a2.5 2.5 0 1 0-.78-4.876A3.501 3.501 0 0 0 7 13.5Z' })));
};
var ForwardRef$3f = React.forwardRef(SvgRoofHomeCloud);

var SvgRoofHomeDownload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.177 15.763a.25.25 0 0 1-.354 0L10.53 14.47a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.293a.75.75 0 0 0-1.06-1.06l-1.293 1.293Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 16.75a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-1.5 0v7c0 .414.336.75.75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$3e = React.forwardRef(SvgRoofHomeDownload);

var SvgRoofHomeEye = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.991 15.097a1.486 1.486 0 0 0 0-2.194C15.08 12.046 13.631 11 12 11c-1.63 0-3.079 1.046-3.991 1.903a1.486 1.486 0 0 0 0 2.194c.912.857 2.36 1.903 3.99 1.903 1.631 0 3.08-1.046 3.992-1.903ZM12 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$3d = React.forwardRef(SvgRoofHomeEye);

var SvgRoofHomeFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm12.31 11.403-.31.31-.31-.31a2.187 2.187 0 1 0-3.093 3.093l2.166 2.166a1.75 1.75 0 0 0 2.475 0l2.165-2.165a2.187 2.187 0 1 0-3.094-3.094Z' })));
};
var ForwardRef$3c = React.forwardRef(SvgRoofHomeFavourite);

var SvgRoofHomeFilter = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Zm4 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm2 5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Zm-6 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10 10.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm4 5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$3b = React.forwardRef(SvgRoofHomeFilter);

var SvgRoofHomeFlash = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.45 8.4a.75.75 0 0 1 .15 1.05l-2.1 2.8H14a.75.75 0 0 1 .6 1.2l-3 4a.75.75 0 1 1-1.2-.9l2.1-2.8H10a.75.75 0 0 1-.6-1.2l3-4a.75.75 0 0 1 1.05-.15Z', clipRule: 'evenodd' })));
};
var ForwardRef$3a = React.forwardRef(SvgRoofHomeFlash);

var SvgRoofHomeFluid = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15.5 14.4C15.5 11.915 12 9 12 9s-3.5 2.915-3.5 5.4c0 2.485 1.843 3.6 3.5 3.6s3.5-1.115 3.5-3.6Z' })));
};
var ForwardRef$39 = React.forwardRef(SvgRoofHomeFluid);

var SvgRoofHomeGraph = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 11.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm8 0a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm-4-2a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0v-8a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$38 = React.forwardRef(SvgRoofHomeGraph);

var SvgRoofHomeInformation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 11.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M13 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' })));
};
var ForwardRef$37 = React.forwardRef(SvgRoofHomeInformation);

var SvgRoofHomeLink = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.177 8.934a2.75 2.75 0 0 1 3.889 3.89l-.354.353a.75.75 0 1 1-1.06-1.06l.353-.354a1.25 1.25 0 1 0-1.768-1.768l-1.414 1.414a1.25 1.25 0 0 0 0 1.768l-1.06 1.06a2.75 2.75 0 0 1 0-3.889l1.414-1.414Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.823 17.066a2.75 2.75 0 1 1-3.889-3.89l.354-.353a.75.75 0 0 1 1.06 1.06l-.353.354a1.25 1.25 0 0 0 1.768 1.768l1.414-1.414a1.25 1.25 0 0 0 0-1.768l1.06-1.06a2.75 2.75 0 0 1 0 3.889l-1.414 1.414Z', clipRule: 'evenodd' })));
};
var ForwardRef$36 = React.forwardRef(SvgRoofHomeLink);

var SvgRoofHomeLocationBig = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c2 0 5-4.239 5-7a5 5 0 0 0-10 0c0 2.761 3 7 5 7Zm0-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z', clipRule: 'evenodd' })));
};
var ForwardRef$35 = React.forwardRef(SvgRoofHomeLocationBig);

var SvgRoofHomeLocation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 19s3.5-2.915 3.5-5.4c0-2.485-1.843-3.6-3.5-3.6s-3.5 1.115-3.5 3.6C8.5 16.085 12 19 12 19Zm0-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z', clipRule: 'evenodd' })));
};
var ForwardRef$34 = React.forwardRef(SvgRoofHomeLocation);

var SvgRoofHomeLock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.75 12a1.25 1.25 0 1 1 2.5 0v1h-2.5v-1Zm-1.5 1.145V12a2.75 2.75 0 1 1 5.5 0v1.145A2 2 0 0 1 16 15v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1a2 2 0 0 1 1.25-1.855Z', clipRule: 'evenodd' })));
};
var ForwardRef$33 = React.forwardRef(SvgRoofHomeLock);

var SvgRoofHomeMail = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10 10a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3h-4Zm.335 2.33a.75.75 0 1 0-.67 1.34l1.105.554a2.75 2.75 0 0 0 2.46 0l1.105-.553a.75.75 0 1 0-.67-1.342l-1.106.553a1.25 1.25 0 0 1-1.118 0l-1.106-.553Z', clipRule: 'evenodd' })));
};
var ForwardRef$32 = React.forwardRef(SvgRoofHomeMail);

var SvgRoofHomeMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.75 14a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$31 = React.forwardRef(SvgRoofHomeMinus);

var SvgRoofHomeNotification = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M11 19h2' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8.667 12.333a3.333 3.333 0 1 1 6.667 0v1.234c0 .595.246 1.164.68 1.571.712.668.24 1.862-.736 1.862H8.721c-.976 0-1.448-1.194-.736-1.862.434-.407.68-.976.68-1.57v-1.235Z' })));
};
var ForwardRef$30 = React.forwardRef(SvgRoofHomeNotification);

var SvgRoofHomePower = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 9.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.496 10.792a.75.75 0 0 1 .066 1.058 3.25 3.25 0 1 0 4.875 0 .75.75 0 1 1 1.125-.992 4.75 4.75 0 1 1-7.125 0 .75.75 0 0 1 1.06-.066Z', clipRule: 'evenodd' })));
};
var ForwardRef$2$ = React.forwardRef(SvgRoofHomePower);

var SvgRoofHomeRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14.652 16.651a.75.75 0 0 1-1.061 0L9.348 12.41a.75.75 0 0 1 1.061-1.06l4.243 4.242a.75.75 0 0 1 0 1.06Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.348 16.652a.75.75 0 0 1 0-1.06l4.243-4.244a.75.75 0 1 1 1.06 1.061l-4.242 4.243a.75.75 0 0 1-1.06 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$2_ = React.forwardRef(SvgRoofHomeRemove);

var SvgRoofHomeSetting = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.576 10h.848c.469 0 .849.358.849.8 0 .506.54.827.985.585l.045-.024c.406-.221.925-.09 1.159.293l.424.692c.235.383.095.872-.31 1.093a.639.639 0 0 0 0 1.122c.405.22.544.71.31 1.093l-.424.692c-.234.383-.753.514-1.16.293l-.044-.024a.666.666 0 0 0-.985.585c0 .442-.38.8-.849.8h-.848c-.469 0-.849-.358-.849-.8a.666.666 0 0 0-.985-.585l-.045.024c-.406.221-.925.09-1.159-.293l-.424-.692c-.234-.383-.095-.872.31-1.093a.639.639 0 0 0 0-1.122.776.776 0 0 1-.31-1.093l.424-.692c.234-.383.753-.514 1.16-.293l.044.024a.666.666 0 0 0 .985-.585c0-.442.38-.8.849-.8ZM12 15.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z', clipRule: 'evenodd' })));
};
var ForwardRef$2Z = React.forwardRef(SvgRoofHomeSetting);

var SvgRoofHomeShare = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15 9.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-2.25.75a2.25 2.25 0 1 1 .745 1.672l-2.272 1.478a2.254 2.254 0 0 1 0 .7l2.272 1.478a2.25 2.25 0 1 1-.718 1.323l-2.272-1.479a2.25 2.25 0 1 1 0-3.344l2.272-1.478a2.254 2.254 0 0 1-.027-.35ZM9 13.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm6 3.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$2Y = React.forwardRef(SvgRoofHomeShare);

var SvgRoofHomeShield = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm11.106 9.447-2 1c-.678.339-1.115 1.033-1.078 1.79.147 3.034.902 4.412 2.859 5.95a1.802 1.802 0 0 0 2.226 0c1.962-1.548 2.69-2.943 2.851-5.94.041-.762-.396-1.463-1.079-1.805l-1.99-.995a2 2 0 0 0-1.79 0Z' })));
};
var ForwardRef$2X = React.forwardRef(SvgRoofHomeShield);

var SvgRoofHomeUpload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.177 10.237a.25.25 0 0 0-.354 0L10.53 11.53a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.293a.75.75 0 0 1-1.06 1.06l-1.293-1.293Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 9.25a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$2W = React.forwardRef(SvgRoofHomeUpload);

var SvgRoofHomeWarning = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 14.75a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M13 17a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z' })));
};
var ForwardRef$2V = React.forwardRef(SvgRoofHomeWarning);

var SvgRoofHomeWave = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.5 11.75a.75.75 0 0 0-.75.75v1a2.25 2.25 0 0 1-2.25 2.25H7a.75.75 0 0 1 0-1.5h.5a.75.75 0 0 0 .75-.75v-1a2.25 2.25 0 0 1 4.5 0v3a.75.75 0 0 0 1.5 0 2.25 2.25 0 0 1 2.25-2.25h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0v-3a.75.75 0 0 0-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$2U = React.forwardRef(SvgRoofHomeWave);

var SvgRoofHomeWifi = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12.75 17a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 11.75a5.23 5.23 0 0 0-3.712 1.538.75.75 0 1 1-1.061-1.061A6.731 6.731 0 0 1 12 10.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 0 1-1.06 1.06A5.231 5.231 0 0 0 12 11.75Zm0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 1 1-1.06-1.06A3.74 3.74 0 0 1 12 13.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.061 1.061A2.24 2.24 0 0 0 12 14.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$2T = React.forwardRef(SvgRoofHomeWifi);

var SvgRoofHome = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.31 15.707a.75.75 0 0 1 .983-.397c1.542.654 2.67.943 3.746.94 1.075-.003 2.175-.296 3.664-.938a.75.75 0 0 1 .594 1.377c-1.575.679-2.89 1.058-4.255 1.061-1.365.004-2.706-.368-4.335-1.06a.75.75 0 0 1-.397-.983Z', clipRule: 'evenodd' })));
};
var ForwardRef$2S = React.forwardRef(SvgRoofHome);

var SvgRotateLock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.75 9a1.25 1.25 0 1 1 2.5 0v1H14c.265 0 .518.052.75.145V9a2.75 2.75 0 1 0-5.5 0v1.145c.232-.093.485-.145.75-.145h.75V9Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14 10h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2.75a9.25 9.25 0 1 0 8.289 13.36.75.75 0 1 1 1.343.668A10.75 10.75 0 0 1 12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12a.75.75 0 0 1-.987.711l-3-1a.75.75 0 0 1 .474-1.422l1.953.65A9.251 9.251 0 0 0 12 2.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$2R = React.forwardRef(SvgRotateLock);

var SvgSafeBoxStar = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 5.25a.75.75 0 0 1 .75.75v1.309a4.74 4.74 0 0 1 2.69 1.416l1.515-.875a.75.75 0 1 1 .75 1.3l-1.412.815c.293.617.457 1.307.457 2.035a4.73 4.73 0 0 1-.457 2.035l1.412.815a.75.75 0 0 1-.75 1.3l-1.514-.875a4.74 4.74 0 0 1-2.691 1.416V18a.75.75 0 0 1-1.5 0v-1.309a4.74 4.74 0 0 1-2.69-1.416l-1.515.874a.75.75 0 0 1-.75-1.299l1.412-.815A4.731 4.731 0 0 1 7.25 12c0-.728.164-1.418.457-2.035l-1.412-.816a.75.75 0 0 1 .75-1.299l1.515.875a4.74 4.74 0 0 1 2.69-1.416V6a.75.75 0 0 1 .75-.75Zm0 3.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$2Q = React.forwardRef(SvgSafeBoxStar);

var SvgSafeBox = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 6h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm4 4a2 2 0 0 1 1.855 1.25H16a.75.75 0 0 1 0 1.5h-2.145A2 2 0 1 1 12 10Z', clipRule: 'evenodd' })));
};
var ForwardRef$2P = React.forwardRef(SvgSafeBox);

var SvgScreenRotate = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M5.46 11.47a2 2 0 0 1 0-2.829l3.18-3.182a2 2 0 0 1 2.829 0l7.07 7.07a2 2 0 0 1 0 2.83L15.36 18.54a2 2 0 0 1-2.829 0l-7.07-7.072Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.269 3.057a.75.75 0 0 1 .897-.566 9.768 9.768 0 0 1 6.823 5.725l.371-.607a.75.75 0 1 1 1.28.782l-1.223 2a.75.75 0 0 1-1.371-.225 8.263 8.263 0 0 0-6.212-6.212.75.75 0 0 1-.565-.897ZM3.345 13.26a.75.75 0 0 1 .61.574 8.263 8.263 0 0 0 6.211 6.211.75.75 0 1 1-.332 1.463 9.768 9.768 0 0 1-6.822-5.725l-.372.608a.75.75 0 1 1-1.28-.782l1.223-2a.75.75 0 0 1 .762-.35Z', clipRule: 'evenodd' })));
};
var ForwardRef$2O = React.forwardRef(SvgScreenRotate);

var SvgScreenshot = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.25 5A2.75 2.75 0 0 1 5 2.25h4a.75.75 0 0 1 0 1.5H5c-.69 0-1.25.56-1.25 1.25v4a.75.75 0 0 1-1.5 0V5Zm19.5 14A2.75 2.75 0 0 1 19 21.75h-4a.75.75 0 0 1 0-1.5h4c.69 0 1.25-.56 1.25-1.25v-4a.75.75 0 0 1 1.5 0v4Z', clipRule: 'evenodd' })));
};
var ForwardRef$2N = React.forwardRef(SvgScreenshot);

var SvgSdStorage = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 18V6a4 4 0 0 0-4-4h-5.343a4 4 0 0 0-2.829 1.172L5.172 5.828A4 4 0 0 0 4 8.657V18a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17 4.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75Zm-3 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75Zm-3 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$2M = React.forwardRef(SvgSdStorage);

var SvgSecurity = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10.376 2.722 5.378 4.943c-1.446.643-2.4 2.082-2.308 3.661.36 6.174 2.168 8.892 6.866 12.073a3.685 3.685 0 0 0 4.129 0c4.712-3.197 6.456-5.954 6.847-12.052.102-1.59-.854-3.043-2.31-3.69l-4.977-2.213a4 4 0 0 0-3.25 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.494 9.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .937-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z', clipRule: 'evenodd' })));
};
var ForwardRef$2L = React.forwardRef(SvgSecurity);

var SvgSensor = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("circle", { cx: 12, cy: 12, r: 2, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.46 4.398a.75.75 0 0 1 0 1.061 9.219 9.219 0 0 0-2.71 6.54 9.219 9.219 0 0 0 2.71 6.542.75.75 0 0 1-1.061 1.06A10.719 10.719 0 0 1 1.25 12c0-2.969 1.204-5.657 3.149-7.602a.75.75 0 0 1 1.06 0Zm13.08 0a.75.75 0 0 1 1.061 0A10.719 10.719 0 0 1 22.75 12c0 2.968-1.204 5.657-3.149 7.601a.75.75 0 0 1-1.06-1.06A9.218 9.218 0 0 0 21.25 12a9.219 9.219 0 0 0-2.71-6.541.75.75 0 0 1 0-1.06ZM8.289 7.227a.75.75 0 0 1 0 1.06A5.231 5.231 0 0 0 6.75 12a5.23 5.23 0 0 0 1.538 3.712.75.75 0 1 1-1.061 1.06A6.731 6.731 0 0 1 5.25 12c0-1.864.756-3.553 1.977-4.773a.75.75 0 0 1 1.06 0Zm7.424 0a.75.75 0 0 1 1.061 0A6.731 6.731 0 0 1 18.75 12a6.73 6.73 0 0 1-1.977 4.773.75.75 0 0 1-1.06-1.06A5.231 5.231 0 0 0 17.25 12c0-1.45-.587-2.762-1.538-3.713a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$2K = React.forwardRef(SvgSensor);

var SvgSetting = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12.848 4h-1.697c-.937 0-1.696.716-1.696 1.6a1.333 1.333 0 0 1-1.97 1.17l-.09-.048c-.812-.442-1.85-.18-2.319.585l-.848 1.386c-.469.765-.19 1.744.62 2.186.89.483.89 1.759 0 2.242-.81.442-1.089 1.42-.62 2.186l.848 1.386c.469.765 1.507 1.027 2.318.585l.09-.049c.889-.483 1.97.16 1.97 1.171 0 .884.76 1.6 1.697 1.6h1.697c.938 0 1.697-.716 1.697-1.6a1.333 1.333 0 0 1 1.97-1.17l.09.049c.812.441 1.85.18 2.319-.586l.848-1.386c.469-.765.19-1.744-.62-2.186a1.277 1.277 0 0 1 0-2.242c.81-.442 1.089-1.42.62-2.186l-.848-1.386c-.469-.765-1.507-1.027-2.318-.585l-.09.049a1.333 1.333 0 0 1-1.97-1.171c0-.884-.76-1.6-1.697-1.6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' })));
};
var ForwardRef$2J = React.forwardRef(SvgSetting);

var SvgShield = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10.375 2.722 5.378 4.943c-1.446.643-2.4 2.082-2.308 3.661.36 6.174 2.168 8.892 6.866 12.073a3.685 3.685 0 0 0 4.129 0c4.712-3.197 6.455-5.954 6.847-12.052.102-1.59-.854-3.043-2.31-3.69l-4.978-2.213a4 4 0 0 0-3.249 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.494 9.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .937-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z', clipRule: 'evenodd' })));
};
var ForwardRef$2I = React.forwardRef(SvgShield);

var SvgShipping = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19.65 9.336C20.53 8.376 22 6.546 22 5c0-2.21-1.343-3-3-3s-3 .79-3 3c0 1.546 1.469 3.376 2.35 4.336a.873.873 0 0 0 1.3 0ZM19 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7 14a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.25 14a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75ZM4 7.75c-.69 0-1.25.56-1.25 1.25v6c0 .69.56 1.25 1.25 1.25h.846a.75.75 0 0 1 0 1.5H4A2.75 2.75 0 0 1 1.25 15V9A2.75 2.75 0 0 1 4 6.25h10a.75.75 0 0 1 0 1.5H4Z', clipRule: 'evenodd' })));
};
var ForwardRef$2H = React.forwardRef(SvgShipping);

var SvgShoppingBagAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15.611 3H8.389a4 4 0 0 0-3.945 3.342l-1.667 10A4 4 0 0 0 6.722 21h10.556a4 4 0 0 0 3.946-4.658l-1.667-10A4 4 0 0 0 15.612 3Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.75 7a3.75 3.75 0 1 1-7.5 0V6a.75.75 0 0 1 1.5 0v1a2.25 2.25 0 0 0 4.5 0V6a.75.75 0 0 1 1.5 0v1ZM19 14.25a.75.75 0 0 1 .75.75v2.25H22a.75.75 0 0 1 0 1.5h-2.25V21a.75.75 0 0 1-1.5 0v-2.25H16a.75.75 0 0 1 0-1.5h2.25V15a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$2G = React.forwardRef(SvgShoppingBagAdd);

var SvgShoppingBagCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15.611 3H8.389a4 4 0 0 0-3.945 3.342l-1.667 10A4 4 0 0 0 6.722 21h10.556a4 4 0 0 0 3.946-4.658l-1.667-10A4 4 0 0 0 15.612 3Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.75 7a3.75 3.75 0 1 1-7.5 0V6a.75.75 0 0 1 1.5 0v1a2.25 2.25 0 0 0 4.5 0V6a.75.75 0 0 1 1.5 0v1Zm6.744 9.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .936-1.172l1.753 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z', clipRule: 'evenodd' })));
};
var ForwardRef$2F = React.forwardRef(SvgShoppingBagCheck);

var SvgShoppingBagFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15.611 3H8.389a4 4 0 0 0-3.945 3.342l-1.667 10A4 4 0 0 0 6.722 21h10.556a4 4 0 0 0 3.946-4.658l-1.667-10A4 4 0 0 0 15.612 3Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.75 7a3.75 3.75 0 1 1-7.5 0V6a.75.75 0 0 1 1.5 0v1a2.25 2.25 0 0 0 4.5 0V6a.75.75 0 0 1 1.5 0v1Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm18.522 15.917-.265.265-.265-.265a1.875 1.875 0 1 0-2.652 2.652l1.857 1.856a1.5 1.5 0 0 0 2.12 0l1.857-1.857a1.875 1.875 0 1 0-2.652-2.651Z' })));
};
var ForwardRef$2E = React.forwardRef(SvgShoppingBagFavourite);

var SvgShoppingBagMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15.611 3H8.389a4 4 0 0 0-3.945 3.342l-1.667 10A4 4 0 0 0 6.722 21h10.556a4 4 0 0 0 3.946-4.658l-1.667-10A4 4 0 0 0 15.612 3Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.75 7a3.75 3.75 0 1 1-7.5 0V6a.75.75 0 0 1 1.5 0v1a2.25 2.25 0 0 0 4.5 0V6a.75.75 0 0 1 1.5 0v1Zm7 10a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$2D = React.forwardRef(SvgShoppingBagMinus);

var SvgShoppingBagRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15.611 3H8.389a4 4 0 0 0-3.945 3.342l-1.667 10A4 4 0 0 0 6.722 21h10.556a4 4 0 0 0 3.946-4.658l-1.667-10A4 4 0 0 0 15.612 3Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.75 7a3.75 3.75 0 1 1-7.5 0V6a.75.75 0 0 1 1.5 0v1a2.25 2.25 0 0 0 4.5 0V6a.75.75 0 0 1 1.5 0v1Zm5.902 8.349a.75.75 0 0 1 0 1.06L20.06 18l1.59 1.591a.75.75 0 0 1-1.06 1.06L19 19.062l-1.591 1.59a.75.75 0 0 1-1.06-1.06l1.59-1.59-1.59-1.592a.75.75 0 1 1 1.06-1.06L19 16.939l1.591-1.59a.75.75 0 0 1 1.06 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$2C = React.forwardRef(SvgShoppingBagRemove);

var SvgShoppingBag = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15.611 3H8.389a4 4 0 0 0-3.945 3.342l-1.667 10A4 4 0 0 0 6.722 21h10.556a4 4 0 0 0 3.946-4.658l-1.667-10A4 4 0 0 0 15.612 3Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.75 7a3.75 3.75 0 1 1-7.5 0V6a.75.75 0 0 1 1.5 0v1a2.25 2.25 0 0 0 4.5 0V6a.75.75 0 0 1 1.5 0v1Z', clipRule: 'evenodd' })));
};
var ForwardRef$2B = React.forwardRef(SvgShoppingBag);

var SvgShoppingBasketAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.386 1.357a.75.75 0 0 1 .257 1.029l-3 5a.75.75 0 1 1-1.286-.772l3-5a.75.75 0 0 1 1.029-.257Zm9 6.286a.75.75 0 0 1-1.03-.257l-3-5a.75.75 0 0 1 1.287-.772l3 5a.75.75 0 0 1-.257 1.03Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20.282 18.808A3.973 3.973 0 0 1 16.4 22H7.6a3.972 3.972 0 0 1-3.882-3.192l-1.635-8C1.576 8.326 3.454 6 5.965 6h12.07c2.511 0 4.39 2.326 3.882 4.808l-1.635 8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18.035 6H5.965C3.729 6 1.995 7.844 2 10h20c.005-2.156-1.73-4-3.965-4Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 12.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V19a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V13a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$2A = React.forwardRef(SvgShoppingBasketAdd);

var SvgShoppingBasketArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.386 1.357a.75.75 0 0 1 .257 1.029l-3 5a.75.75 0 1 1-1.286-.772l3-5a.75.75 0 0 1 1.029-.257Zm9 6.286a.75.75 0 0 1-1.03-.257l-3-5a.75.75 0 0 1 1.287-.772l3 5a.75.75 0 0 1-.257 1.03Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20.282 18.808A3.973 3.973 0 0 1 16.4 22H7.6a3.972 3.972 0 0 1-3.882-3.192l-1.635-8C1.576 8.326 3.454 6 5.965 6h12.07c2.511 0 4.39 2.326 3.882 4.808l-1.635 8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18.035 6H5.965C3.729 6 1.995 7.844 2 10h20c.005-2.156-1.73-4-3.965-4Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm11.25 17.19-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.293a.75.75 0 0 0-1.06-1.06l-.72.72V13a.75.75 0 0 0-1.5 0v4.19Z', clipRule: 'evenodd' })));
};
var ForwardRef$2z = React.forwardRef(SvgShoppingBasketArrowDown);

var SvgShoppingBasketArrowOut = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.386 1.357a.75.75 0 0 1 .257 1.029l-3 5a.75.75 0 1 1-1.286-.772l3-5a.75.75 0 0 1 1.029-.257Zm9 6.286a.75.75 0 0 1-1.03-.257l-3-5a.75.75 0 0 1 1.287-.772l3 5a.75.75 0 0 1-.257 1.03Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20.282 18.808A3.973 3.973 0 0 1 16.4 22H7.6a3.972 3.972 0 0 1-3.882-3.192l-1.635-8C1.576 8.326 3.454 6 5.965 6h12.07c2.511 0 4.39 2.326 3.882 4.808l-1.635 8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18.035 6H5.965C3.729 6 1.995 7.844 2 10h20c.005-2.156-1.73-4-3.965-4Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm11.25 14.396-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.293a.75.75 0 1 1-1.06 1.06l-.72-.72v4.19a.75.75 0 0 1-1.5 0v-4.19Z', clipRule: 'evenodd' })));
};
var ForwardRef$2y = React.forwardRef(SvgShoppingBasketArrowOut);

var SvgShoppingBasketCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.386 1.357a.75.75 0 0 1 .257 1.029l-3 5a.75.75 0 0 1-1.286-.772l3-5a.75.75 0 0 1 1.029-.257Zm9 6.286a.75.75 0 0 1-1.03-.257l-3-5a.75.75 0 1 1 1.287-.772l3 5a.75.75 0 0 1-.257 1.03Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20.282 18.808A3.973 3.973 0 0 1 16.4 22H7.6a3.972 3.972 0 0 1-3.882-3.192l-1.635-8C1.576 8.326 3.454 6 5.965 6h12.07c2.511 0 4.39 2.326 3.882 4.808l-1.635 8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18.035 6H5.965C3.729 6 1.995 7.844 2 10h20c.005-2.156-1.73-4-3.965-4Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.494 13.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .937-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z', clipRule: 'evenodd' })));
};
var ForwardRef$2x = React.forwardRef(SvgShoppingBasketCheck);

var SvgShoppingBasketDoubleDoor = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.386 1.357a.75.75 0 0 1 .257 1.029l-3 5a.75.75 0 0 1-1.286-.772l3-5a.75.75 0 0 1 1.029-.257Zm9 6.286a.75.75 0 0 1-1.03-.257l-3-5a.75.75 0 1 1 1.287-.772l3 5a.75.75 0 0 1-.257 1.03Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20.282 18.808A3.973 3.973 0 0 1 16.4 22H7.6a3.972 3.972 0 0 1-3.882-3.192l-1.635-8C1.576 8.326 3.454 6 5.965 6h12.07c2.511 0 4.39 2.326 3.882 4.808l-1.635 8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18.035 6H5.965C3.729 6 1.995 7.844 2 10h20c.005-2.156-1.73-4-3.965-4Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9 13.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm6 0a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$2w = React.forwardRef(SvgShoppingBasketDoubleDoor);

var SvgShoppingBasketFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.386 1.357a.75.75 0 0 1 .257 1.029l-3 5a.75.75 0 0 1-1.286-.772l3-5a.75.75 0 0 1 1.029-.257Zm9 6.286a.75.75 0 0 1-1.03-.257l-3-5a.75.75 0 1 1 1.287-.772l3 5a.75.75 0 0 1-.257 1.03Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20.282 18.808A3.973 3.973 0 0 1 16.4 22H7.6a3.972 3.972 0 0 1-3.882-3.192l-1.635-8C1.576 8.326 3.454 6 5.965 6h12.07c2.511 0 4.39 2.326 3.882 4.808l-1.635 8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18.035 6H5.965C3.729 6 1.995 7.844 2 10h20c.005-2.156-1.73-4-3.965-4Zm-5.77 7.735L12 14l-.265-.265a1.875 1.875 0 0 0-2.652 2.651l1.856 1.857a1.5 1.5 0 0 0 2.122 0l1.856-1.857a1.875 1.875 0 0 0-2.652-2.651Z' })));
};
var ForwardRef$2v = React.forwardRef(SvgShoppingBasketFavourite);

var SvgShoppingBasketMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.386 1.357a.75.75 0 0 1 .257 1.029l-3 5a.75.75 0 1 1-1.286-.772l3-5a.75.75 0 0 1 1.029-.257Zm9 6.286a.75.75 0 0 1-1.03-.257l-3-5a.75.75 0 0 1 1.287-.772l3 5a.75.75 0 0 1-.257 1.03Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20.282 18.808A3.973 3.973 0 0 1 16.4 22H7.6a3.972 3.972 0 0 1-3.882-3.192l-1.635-8C1.576 8.326 3.454 6 5.965 6h12.07c2.511 0 4.39 2.326 3.882 4.808l-1.635 8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18.035 6H5.965C3.729 6 1.995 7.844 2 10h20c.005-2.156-1.73-4-3.965-4Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.75 16a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$2u = React.forwardRef(SvgShoppingBasketMinus);

var SvgShoppingBasketRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.386 1.357a.75.75 0 0 1 .257 1.029l-3 5a.75.75 0 1 1-1.286-.772l3-5a.75.75 0 0 1 1.029-.257Zm9 6.286a.75.75 0 0 1-1.03-.257l-3-5a.75.75 0 0 1 1.287-.772l3 5a.75.75 0 0 1-.257 1.03Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20.282 18.808A3.973 3.973 0 0 1 16.4 22H7.6a3.972 3.972 0 0 1-3.882-3.192l-1.635-8C1.576 8.326 3.454 6 5.965 6h12.07c2.511 0 4.39 2.326 3.882 4.808l-1.635 8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18.035 6H5.965C3.729 6 1.995 7.844 2 10h20c.005-2.156-1.73-4-3.965-4Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14.652 13.348a.75.75 0 0 1 0 1.061L13.06 16l1.59 1.591a.75.75 0 1 1-1.06 1.06L12 17.062l-1.591 1.59a.75.75 0 0 1-1.06-1.06L10.938 16l-1.59-1.591a.75.75 0 0 1 1.06-1.06L12 14.938l1.591-1.59a.75.75 0 0 1 1.06 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$2t = React.forwardRef(SvgShoppingBasketRemove);

var SvgShoppingBasketSimple = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.386 1.357a.75.75 0 0 1 .257 1.029l-3 5a.75.75 0 0 1-1.286-.772l3-5a.75.75 0 0 1 1.029-.257Zm9 6.286a.75.75 0 0 1-1.03-.257l-3-5a.75.75 0 1 1 1.287-.772l3 5a.75.75 0 0 1-.257 1.03Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20.282 18.808A3.973 3.973 0 0 1 16.4 22H7.6a3.972 3.972 0 0 1-3.882-3.192l-1.635-8C1.576 8.326 3.454 6 5.965 6h12.07c2.511 0 4.39 2.326 3.882 4.808l-1.635 8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18.035 6H5.965C3.729 6 1.995 7.844 2 10h20c.005-2.156-1.73-4-3.965-4Z' })));
};
var ForwardRef$2s = React.forwardRef(SvgShoppingBasketSimple);

var SvgShoppingBasketSingleDoor = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.53 1.47a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l5-5a.75.75 0 0 1 1.06 0Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20.282 18.808A3.973 3.973 0 0 1 16.4 22H7.6a3.972 3.972 0 0 1-3.882-3.192l-1.635-8C1.576 8.326 3.454 6 5.965 6h12.07c2.511 0 4.39 2.326 3.882 4.808l-1.635 8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18.035 6H5.965C3.729 6 1.995 7.844 2 10h20c.005-2.156-1.73-4-3.965-4Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9 13.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm6 0a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$2r = React.forwardRef(SvgShoppingBasketSingleDoor);

var SvgShoppingBasket = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 2.75c-.69 0-1.25.56-1.25 1.25v3a.75.75 0 0 1-1.5 0V4A2.75 2.75 0 0 1 8 1.25h8A2.75 2.75 0 0 1 18.75 4v3a.75.75 0 0 1-1.5 0V4c0-.69-.56-1.25-1.25-1.25H8Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20.282 18.808A3.973 3.973 0 0 1 16.4 22H7.6a3.972 3.972 0 0 1-3.882-3.192l-1.635-8C1.576 8.326 3.454 6 5.965 6h12.07c2.511 0 4.39 2.326 3.882 4.808l-1.635 8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18.035 6H5.965C3.729 6 1.995 7.844 2 10h20c.005-2.156-1.73-4-3.965-4Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9 13.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm6 0a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$2q = React.forwardRef(SvgShoppingBasket);

var SvgShutDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 1.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$2p = React.forwardRef(SvgShutDown);

var SvgSignalCellularBad = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M17.856 20H4.148c-1.965 0-2.894-2.331-1.434-3.596l13.708-11.87C17.802 3.339 20 4.28 20 6.067v11.87c0 1.14-.96 2.063-2.144 2.063Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.47 15.47a.75.75 0 0 1 1.06 0L20 16.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L21.06 18l1.47 1.47a.75.75 0 1 1-1.06 1.06L20 19.06l-1.47 1.47a.75.75 0 0 1-1.06-1.06L18.94 18l-1.47-1.47a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$2o = React.forwardRef(SvgSignalCellularBad);

var SvgSignalCellularLine = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15 7.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9 11.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0v-8a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3 15.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$2n = React.forwardRef(SvgSignalCellularLine);

var SvgSignalCellularNoInternetDashed = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20 3.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14 7.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 11.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0v-8a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2 15.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm20.53.22a.75.75 0 0 1 0 1.06L21.06 18l1.47 1.47a.75.75 0 1 1-1.06 1.06L20 19.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L18.94 18l-1.47-1.47a.75.75 0 1 1 1.06-1.06L20 16.94l1.47-1.47a.75.75 0 0 1 1.06 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$2m = React.forwardRef(SvgSignalCellularNoInternetDashed);

var SvgSignalCellularNoInternet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18.856 20H5.148c-1.965 0-2.894-2.331-1.434-3.596l13.708-11.87C18.802 3.339 21 4.28 21 6.067v11.87c0 1.14-.96 2.063-2.144 2.063Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 11.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm0 7a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$2l = React.forwardRef(SvgSignalCellularNoInternet);

var SvgSignalCellularOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18.856 19H5.148c-1.965 0-2.894-2.331-1.434-3.596l13.708-11.87C18.802 2.339 21 3.28 21 5.067v11.87c0 1.14-.96 2.063-2.144 2.063Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18.856 19H5.148c-1.965 0-2.894-2.331-1.434-3.596L9.979 9.98 18.856 19Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$2k = React.forwardRef(SvgSignalCellularOff);

var SvgSignalCellular = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18.856 20H5.148c-1.965 0-2.894-2.331-1.434-3.596l13.708-11.87C18.802 3.339 21 4.28 21 6.067v11.87c0 1.14-.96 2.063-2.144 2.063Z', opacity: 0.4 })));
};
var ForwardRef$2j = React.forwardRef(SvgSignalCellular);

var SvgSignpostBig = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12.5 2h-1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16.495 9H5.687a1 1 0 0 1-.664-.253l-1.687-1.5a1 1 0 0 1 0-1.494l1.687-1.5A1 1 0 0 1 5.688 4h10.807a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1Zm-8.529 7h10.438c.237 0 .465-.09.642-.253l1.63-1.5a1.024 1.024 0 0 0 0-1.494l-1.63-1.5a.947.947 0 0 0-.642-.253H7.966C7.432 11 7 11.448 7 12v3c0 .552.432 1 .966 1Z' })));
};
var ForwardRef$2i = React.forwardRef(SvgSignpostBig);

var SvgSignpostRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12.5 2h-1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M5.557 6.638 10.5 5.314l3-.804 2.218-.595a1 1 0 0 1 .851.16l1.548 1.14a1 1 0 0 1 .323 1.206l-.77 1.76a1 1 0 0 1-.658.564l-3.512.941-3 .804-3.649.978a1 1 0 0 1-1.225-.707L4.85 7.863a1 1 0 0 1 .707-1.225ZM6 14h10.52a1 1 0 0 1 .78.375l1.2 1.5a1 1 0 0 1 0 1.25l-1.2 1.5a1 1 0 0 1-.78.375H6a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Z' })));
};
var ForwardRef$2h = React.forwardRef(SvgSignpostRight);

var SvgSignpostSmall = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10.5 7.95H5.66a.463.463 0 0 1-.365-.181l-1.169-1.5a.522.522 0 0 1 0-.636l1.169-1.5a.463.463 0 0 1 .365-.182h4.84v4Zm0 8H4.078a.516.516 0 0 1-.361-.146l-1.53-1.5a.493.493 0 0 1 0-.707l1.53-1.5a.516.516 0 0 1 .36-.146H10.5v4Zm3-8h6.43c.135 0 .265.053.36.147l1.533 1.5c.2.195.2.512 0 .707l-1.532 1.5a.516.516 0 0 1-.362.147H13.5v-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3Z' })));
};
var ForwardRef$2g = React.forwardRef(SvgSignpostSmall);

var SvgSignpostTop = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12.5 2h-1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3.866 11.5 10.5 7.67l3-1.732 2.132-1.23a1 1 0 0 1 .758-.1l2.732.731a1 1 0 0 1 .707 1.225l-.732 2.732a1 1 0 0 1-.466.607L13.5 12.866l-3 1.732-3.634 2.098A1 1 0 0 1 5.5 16.33l-2-3.464a1 1 0 0 1 .366-1.366Z' })));
};
var ForwardRef$2f = React.forwardRef(SvgSignpostTop);

var SvgSignpost = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10.5 10H5.414a1 1 0 0 1-.707-.293l-2-2a1 1 0 0 1 0-1.414l2-2A1 1 0 0 1 5.414 4H10.5v6Zm3 0h5.086a1 1 0 0 1 .707.293l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-.707.293H13.5v-6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3Z' })));
};
var ForwardRef$2e = React.forwardRef(SvgSignpost);

var SvgSimCard = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4 18V6a4 4 0 0 1 4-4h5.343a4 4 0 0 1 2.829 1.172l2.656 2.656A4 4 0 0 1 20 8.657V18a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.25 18a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm0-4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$2d = React.forwardRef(SvgSimCard);

var SvgSkype = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4 12a8 8 0 0 0 8.958 7.943 5 5 0 1 0 6.986-6.986 8 8 0 0 0-8.9-8.9 5 5 0 1 0-6.986 6.986A8.08 8.08 0 0 0 4 12Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.75 10a2.75 2.75 0 0 1 2.75-2.75h1A2.75 2.75 0 0 1 15.25 10a.75.75 0 0 1-1.5 0c0-.69-.56-1.25-1.25-1.25h-1a1.25 1.25 0 1 0 0 2.5h1a2.75 2.75 0 1 1 0 5.5h-1A2.75 2.75 0 0 1 8.75 14a.75.75 0 0 1 1.5 0c0 .69.56 1.25 1.25 1.25h1a1.25 1.25 0 1 0 0-2.5h-1A2.75 2.75 0 0 1 8.75 10Z', clipRule: 'evenodd' })));
};
var ForwardRef$2c = React.forwardRef(SvgSkype);

var SvgSlack = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12.63 4.236a2 2 0 0 1 4 0v5a2 2 0 1 1-4 0v-5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21.842 9.236a2 2 0 0 1-2 2h-2v-2a2 2 0 1 1 4 0ZM16.63 19.862a2 2 0 0 0-2-2h-2v2a2 2 0 0 0 4 0ZM7.319 4.138a2 2 0 0 0 2 2h2v-2a2 2 0 1 0-4 0Zm-5.17 10.499a2 2 0 0 1 2-2h2v2a2 2 0 1 1-4 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.29 14.637a2 2 0 1 1 4 0v5.225a2 2 0 0 1-4 0v-5.225Zm2.13-7.401a2 2 0 1 1 0 4H4.148a2 2 0 1 1 0-4h5.27Zm10.422 5.401a2 2 0 0 1 0 4H14.63a2 2 0 0 1 0-4h5.212Z', opacity: 0.4 })));
};
var ForwardRef$2b = React.forwardRef(SvgSlack);

var SvgSmartAirConditioning = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2.75a5.23 5.23 0 0 0-3.712 1.538.75.75 0 0 1-1.061-1.061A6.731 6.731 0 0 1 12 1.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 0 1-1.06 1.06A5.231 5.231 0 0 0 12 2.75Zm0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 0 1-1.06-1.06A3.74 3.74 0 0 1 12 4.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.061 1.061A2.24 2.24 0 0 0 12 5.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 8a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4h12Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20.162 17.366C22.019 16.171 20.209 14 18 14H6c-2.21 0-4.02 2.17-2.162 3.366A3.981 3.981 0 0 0 6 18h12c.796 0 1.538-.233 2.162-.634Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16 19.75a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm-4 0a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm-4 0a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$2a = React.forwardRef(SvgSmartAirConditioning);

var SvgSmartDoor = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2.75a5.23 5.23 0 0 0-3.712 1.538.75.75 0 0 1-1.061-1.061A6.731 6.731 0 0 1 12 1.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 0 1-1.06 1.06A5.231 5.231 0 0 0 12 2.75Zm0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 0 1-1.06-1.06A3.74 3.74 0 0 1 12 4.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.061 1.061A2.24 2.24 0 0 0 12 5.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14 8a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4h4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9 12.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$29 = React.forwardRef(SvgSmartDoor);

var SvgSmartHumidity = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 14c0-4.163-4.546-8.87-6.784-10.933a1.779 1.779 0 0 0-2.431 0C8.546 5.13 4 9.837 4 14c0 5.523 4.213 8 8 8s8-2.477 8-8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12.75 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 12.75a5.23 5.23 0 0 0-3.712 1.538.75.75 0 1 1-1.061-1.061A6.731 6.731 0 0 1 12 11.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 0 1-1.06 1.06A5.231 5.231 0 0 0 12 12.75Zm0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 1 1-1.06-1.06A3.74 3.74 0 0 1 12 14.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.061 1.061A2.24 2.24 0 0 0 12 15.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$28 = React.forwardRef(SvgSmartHumidity);

var SvgSmartKeyDotted = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14 2h-4a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20.5 19h-7a1.5 1.5 0 0 1 0-3h7a1.5 1.5 0 0 1 0 3ZM12.75 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-2.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm5.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-2.75 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-2.75-3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm5.5-3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z' })));
};
var ForwardRef$27 = React.forwardRef(SvgSmartKeyDotted);

var SvgSmartKey = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14 2h-4a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12.75 11.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 6.75c-.941 0-1.807.416-2.446 1.115a.75.75 0 0 1-1.108-1.012C9.343 5.873 10.598 5.25 12 5.25c1.402 0 2.657.623 3.553 1.603a.75.75 0 1 1-1.107 1.012c-.639-.7-1.505-1.115-2.446-1.115Zm0 3c-.356 0-.691.156-.947.436a.75.75 0 1 1-1.107-1.012A2.778 2.778 0 0 1 12 8.25c.816 0 1.541.363 2.053.924a.75.75 0 0 1-1.107 1.012A1.278 1.278 0 0 0 12 9.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20.5 19h-7a1.5 1.5 0 0 1 0-3h7a1.5 1.5 0 0 1 0 3Z' })));
};
var ForwardRef$26 = React.forwardRef(SvgSmartKey);

var SvgSmartLight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2.75a5.23 5.23 0 0 0-3.712 1.538.75.75 0 0 1-1.061-1.061A6.731 6.731 0 0 1 12 1.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 0 1-1.06 1.06A5.231 5.231 0 0 0 12 2.75Zm0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 0 1-1.06-1.06A3.74 3.74 0 0 1 12 4.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.061 1.061A2.24 2.24 0 0 0 12 5.75Zm0 9.5a.75.75 0 0 1 .75.75v5.25H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25V16a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7.873 9.029A2 2 0 0 1 9.621 8h4.758a2 2 0 0 1 1.748 1.029l2.222 4C19.09 14.362 18.126 16 16.601 16H7.4c-1.525 0-2.489-1.638-1.748-2.971l2.222-4Z', opacity: 0.4 })));
};
var ForwardRef$25 = React.forwardRef(SvgSmartLight);

var SvgSmartLock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2.75A3.25 3.25 0 0 0 8.75 6v3a.75.75 0 0 1-1.5 0V6a4.75 4.75 0 0 1 9.5 0v3a.75.75 0 0 1-1.5 0V6A3.25 3.25 0 0 0 12 2.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4 12a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12.75 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 12.75a5.23 5.23 0 0 0-3.712 1.538.75.75 0 1 1-1.061-1.061A6.731 6.731 0 0 1 12 11.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 0 1-1.06 1.06A5.231 5.231 0 0 0 12 12.75Zm0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 1 1-1.06-1.06A3.74 3.74 0 0 1 12 14.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.061 1.061A2.24 2.24 0 0 0 12 15.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$24 = React.forwardRef(SvgSmartLock);

var SvgSmartMusic = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18.25 9.25A.75.75 0 0 1 19 10v8a.75.75 0 0 1-1.5 0v-8a.75.75 0 0 1 .75-.75Zm-8.5 2a.75.75 0 0 1 .75.75v8A.75.75 0 0 1 9 20v-8a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-8.5 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14 2.75a5.23 5.23 0 0 0-3.712 1.538.75.75 0 0 1-1.061-1.061A6.731 6.731 0 0 1 14 1.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 0 1-1.06 1.06A5.231 5.231 0 0 0 14 2.75Zm0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 0 1-1.06-1.06A3.74 3.74 0 0 1 14 4.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.061 1.061A2.24 2.24 0 0 0 14 5.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M17.804 8.239a1 1 0 0 1 1.196.98v1.961a1 1 0 0 1-.804.98l-8 1.6A1 1 0 0 1 9 12.78v-1.96a1 1 0 0 1 .804-.981l8-1.6Z', opacity: 0.4 })));
};
var ForwardRef$23 = React.forwardRef(SvgSmartMusic);

var SvgSmartPhone = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12.75 14a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 8.75a5.23 5.23 0 0 0-3.712 1.538.75.75 0 1 1-1.061-1.061A6.731 6.731 0 0 1 12 7.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 0 1-1.06 1.06A5.231 5.231 0 0 0 12 8.75Zm0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 1 1-1.06-1.06A3.74 3.74 0 0 1 12 10.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.061 1.061A2.24 2.24 0 0 0 12 11.75ZM10.25 19a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$22 = React.forwardRef(SvgSmartPhone);

var SvgSmartPlug = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2.75a5.23 5.23 0 0 0-3.712 1.538.75.75 0 0 1-1.061-1.061A6.731 6.731 0 0 1 12 1.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 0 1-1.06 1.06A5.231 5.231 0 0 0 12 2.75Zm0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 0 1-1.06-1.06A3.74 3.74 0 0 1 12 4.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.061 1.061A2.24 2.24 0 0 0 12 5.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M5 11a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16 15a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-4.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$21 = React.forwardRef(SvgSmartPlug);

var SvgSmartPower = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19 15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2.75a5.23 5.23 0 0 0-3.712 1.538.75.75 0 0 1-1.06-1.061A6.731 6.731 0 0 1 12 1.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 1 1-1.06 1.06A5.231 5.231 0 0 0 12 2.75Zm0 3a2.24 2.24 0 0 0-1.59.659.75.75 0 0 1-1.062-1.06A3.74 3.74 0 0 1 12 4.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.06 1.061A2.24 2.24 0 0 0 12 5.75Zm0 1.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$20 = React.forwardRef(SvgSmartPower);

var SvgSmartRemote = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 12a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12.75 11.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm3 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm3 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-3 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-3 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-3 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2.75a5.23 5.23 0 0 0-3.712 1.538.75.75 0 0 1-1.061-1.061A6.731 6.731 0 0 1 12 1.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 0 1-1.06 1.06A5.231 5.231 0 0 0 12 2.75Zm0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 0 1-1.06-1.06A3.74 3.74 0 0 1 12 4.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.061 1.061A2.24 2.24 0 0 0 12 5.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$1$ = React.forwardRef(SvgSmartRemote);

var SvgSmartSpeaker = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 5.75a5.23 5.23 0 0 0-3.712 1.538.75.75 0 0 1-1.061-1.061A6.731 6.731 0 0 1 12 4.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 0 1-1.06 1.06A5.231 5.231 0 0 0 12 5.75Zm0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 0 1-1.06-1.06A3.74 3.74 0 0 1 12 7.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.061 1.061A2.24 2.24 0 0 0 12 8.75ZM12 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z', clipRule: 'evenodd' })));
};
var ForwardRef$1_ = React.forwardRef(SvgSmartSpeaker);

var SvgSmartSwitch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 5.507a5.23 5.23 0 0 0-3.712 1.538.75.75 0 1 1-1.061-1.06A6.731 6.731 0 0 1 12 4.006c1.864 0 3.552.757 4.773 1.977a.75.75 0 0 1-1.06 1.061A5.231 5.231 0 0 0 12 5.507Zm0 3a2.24 2.24 0 0 0-1.591.66.75.75 0 0 1-1.06-1.061A3.74 3.74 0 0 1 12 7.007a3.74 3.74 0 0 1 2.652 1.099.75.75 0 0 1-1.061 1.06A2.24 2.24 0 0 0 12 8.507Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M17 12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h10Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M17 12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h3Z' })));
};
var ForwardRef$1Z = React.forwardRef(SvgSmartSwitch);

var SvgSmartThermostat = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2.75a5.23 5.23 0 0 0-3.712 1.538.75.75 0 0 1-1.061-1.061A6.731 6.731 0 0 1 12 1.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 0 1-1.06 1.06A5.231 5.231 0 0 0 12 2.75Zm0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 0 1-1.06-1.06A3.74 3.74 0 0 1 12 4.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.061 1.061A2.24 2.24 0 0 0 12 5.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 8a2 2 0 0 0-2 2v6.764a3 3 0 1 0 4 0V10a2 2 0 0 0-2-2Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 12, cy: 19, r: 1, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.25 9a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$1Y = React.forwardRef(SvgSmartThermostat);

var SvgSmartTv = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 15.25a.75.75 0 0 1 .75.75v3.282c1.36.101 2.778.443 4.485 1.006a.75.75 0 0 1-.47 1.424c-2-.66-3.472-.964-4.878-.962-1.402.002-2.795.31-4.638.957a.75.75 0 0 1-.498-1.415c1.675-.588 3.082-.94 4.499-1.023V16a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 3a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12.75 13a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 7.75a5.23 5.23 0 0 0-3.712 1.538.75.75 0 0 1-1.061-1.061A6.731 6.731 0 0 1 12 6.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 0 1-1.06 1.06A5.231 5.231 0 0 0 12 7.75Zm0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 1 1-1.06-1.06A3.74 3.74 0 0 1 12 9.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.061 1.061A2.24 2.24 0 0 0 12 10.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$1X = React.forwardRef(SvgSmartTv);

var SvgSmartWatch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16 7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3h8ZM8 17v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3H8Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15 5a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12.75 15a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 9.75a5.23 5.23 0 0 0-3.712 1.538.75.75 0 1 1-1.061-1.061A6.731 6.731 0 0 1 12 8.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 0 1-1.06 1.06A5.231 5.231 0 0 0 12 9.75Zm0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 1 1-1.06-1.06A3.74 3.74 0 0 1 12 11.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.061 1.061A2.24 2.24 0 0 0 12 12.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$1W = React.forwardRef(SvgSmartWatch);

var SvgSnapchat = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 17c-1.102 0-1.844 0-2.365.589-.608.687-1.279 1.411-2.197 1.411h-.771a2 2 0 0 0-1.2.4l-1.067.8a4 4 0 0 1-4.8 0l-1.067-.8a2 2 0 0 0-1.2-.4h-.771c-.918 0-1.59-.724-2.197-1.411C3.845 17 3.102 17 2 17l2.4-1.8A4 4 0 0 0 6 12v-.5h-.5a1.5 1.5 0 0 1 0-3H6V8a6 6 0 0 1 12 0v.5h.5a1.5 1.5 0 0 1 0 3H18v.5a4 4 0 0 0 1.6 3.2L22 17Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M5.5 11.5H6v-3h-.5a1.5 1.5 0 0 0 0 3Zm13-3H18v3h.5a1.5 1.5 0 0 0 0-3Z' })));
};
var ForwardRef$1V = React.forwardRef(SvgSnapchat);

var SvgSolarPanel = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19 16V9H5v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.236 2a2 2 0 0 0-1.789 1.106l-2 4A2 2 0 0 0 5.236 10h2.218l.715-3.25H3.625l.75-1.5h4.124L9.214 2H7.236Zm3.51 0-.715 3.25h3.938L13.254 2h-2.508Zm4.04 0 .715 3.25h4.124l-1.072-2.144A2 2 0 0 0 16.763 2h-1.977Zm5.589 4.75h-4.544l.715 3.25h2.218a2 2 0 0 0 1.789-2.894l-.178-.356ZM15 10l-.701-3.25H9.7L8.986 10H15Zm-1.55 3.4a.75.75 0 0 1 .15 1.05l-2.1 2.8H14a.75.75 0 0 1 .6 1.2l-3 4a.75.75 0 1 1-1.2-.9l2.1-2.8H10a.75.75 0 0 1-.6-1.2l3-4a.75.75 0 0 1 1.05-.15Z', clipRule: 'evenodd' })));
};
var ForwardRef$1U = React.forwardRef(SvgSolarPanel);

var SvgSpotify = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("circle", { cx: 12, cy: 12, r: 10, fill: 'currentColor', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.546 9.124c-2.184-.122-4.16.13-5.267.572a.75.75 0 0 1-.557-1.392c1.393-.558 3.616-.806 5.907-.678 2.302.129 4.8.644 6.735 1.718a.75.75 0 1 1-.728 1.312c-1.665-.925-3.916-1.41-6.09-1.532ZM11 12.312c-1.907-.06-3.548.185-4.285.407a.75.75 0 0 1-.431-1.437c.93-.28 2.738-.533 4.764-.469 2.027.064 4.37.45 6.315 1.531a.75.75 0 1 1-.728 1.312c-1.654-.92-3.729-1.283-5.635-1.344Zm4.635 4.344c-3.361-1.868-7.367-1.403-8.92-.937a.75.75 0 0 1-.431-1.437c1.78-.534 6.24-1.07 10.08 1.063a.75.75 0 1 1-.729 1.31Z', clipRule: 'evenodd' })));
};
var ForwardRef$1T = React.forwardRef(SvgSpotify);

var SvgSpringNotesAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm-8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 9.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V16a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V10a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$1S = React.forwardRef(SvgSpringNotesAdd);

var SvgSpringNotesCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm-8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.494 10.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .937-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z', clipRule: 'evenodd' })));
};
var ForwardRef$1R = React.forwardRef(SvgSpringNotesCheck);

var SvgSpringNotesDelete = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm-8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14.652 10.349a.75.75 0 0 1 0 1.06L13.06 13l1.59 1.591a.75.75 0 1 1-1.06 1.06L12 14.062l-1.591 1.59a.75.75 0 1 1-1.06-1.06l1.59-1.59-1.59-1.592a.75.75 0 0 1 1.06-1.06L12 11.939l1.591-1.59a.75.75 0 0 1 1.06 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$1Q = React.forwardRef(SvgSpringNotesDelete);

var SvgSpringNotesDownload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm-8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm11.25 14.19-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.293a.75.75 0 0 0-1.06-1.06l-.72.72V10a.75.75 0 1 0-1.5 0v4.19Z', clipRule: 'evenodd' })));
};
var ForwardRef$1P = React.forwardRef(SvgSpringNotesDownload);

var SvgSpringNotesEditAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Zm8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19.143 12.49a1.674 1.674 0 0 1 2.367 2.367l-5.015 5.015a.997.997 0 0 1-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.627-2.197a.993.993 0 0 1 .255-.434l5.015-5.015Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 7.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V14a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V8a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$1O = React.forwardRef(SvgSpringNotesEditAdd);

var SvgSpringNotesEditCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Zm8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19.143 12.49a1.674 1.674 0 0 1 2.367 2.367l-5.015 5.015a.997.997 0 0 1-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.627-2.197a.993.993 0 0 1 .255-.434l5.015-5.015Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.494 8.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .937-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z', clipRule: 'evenodd' })));
};
var ForwardRef$1N = React.forwardRef(SvgSpringNotesEditCheck);

var SvgSpringNotesEditDelete = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Zm8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19.143 12.49a1.674 1.674 0 0 1 2.367 2.367l-5.015 5.015a.997.997 0 0 1-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.627-2.197a.993.993 0 0 1 .255-.434l5.015-5.015Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14.652 9.349a.75.75 0 0 1 0 1.06L13.06 12l1.59 1.591a.75.75 0 1 1-1.06 1.06L12 13.062l-1.591 1.59a.75.75 0 1 1-1.06-1.06l1.59-1.59-1.59-1.592a.75.75 0 0 1 1.06-1.06L12 10.939l1.591-1.59a.75.75 0 0 1 1.06 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$1M = React.forwardRef(SvgSpringNotesEditDelete);

var SvgSpringNotesEditDownload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Zm8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19.143 12.49a1.674 1.674 0 0 1 2.367 2.367l-5.015 5.015a.997.997 0 0 1-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.627-2.197a.993.993 0 0 1 .255-.434l5.015-5.015Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm11.25 12.19-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.293a.75.75 0 0 0-1.06-1.06l-.72.72V9a.75.75 0 0 0-1.5 0v3.19Z', clipRule: 'evenodd' })));
};
var ForwardRef$1L = React.forwardRef(SvgSpringNotesEditDownload);

var SvgSpringNotesEditFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Zm8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19.143 12.49a1.674 1.674 0 0 1 2.367 2.367l-5.015 5.015a.997.997 0 0 1-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.627-2.197a.993.993 0 0 1 .255-.434l5.015-5.015Zm-6.662-1.939-.265.265-.265-.265a1.875 1.875 0 0 0-2.652 2.652l1.856 1.856a1.5 1.5 0 0 0 2.122 0l1.856-1.856a1.875 1.875 0 0 0-2.652-2.652Z' })));
};
var ForwardRef$1K = React.forwardRef(SvgSpringNotesEditFavourite);

var SvgSpringNotesEditMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Zm8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19.143 12.49a1.674 1.674 0 0 1 2.367 2.367l-5.015 5.015a.997.997 0 0 1-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.627-2.197a.993.993 0 0 1 .255-.434l5.015-5.015Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.75 11a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$1J = React.forwardRef(SvgSpringNotesEditMinus);

var SvgSpringNotesEditSearch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Zm8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19.143 12.49a1.674 1.674 0 0 1 2.367 2.367l-5.015 5.015a.997.997 0 0 1-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.627-2.197a.993.993 0 0 1 .255-.434l5.015-5.015Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.75 11a3.25 3.25 0 1 1 1.544 2.767l-.764.763a.75.75 0 0 1-1.06-1.06l.763-.764A3.235 3.235 0 0 1 8.75 11ZM12 9.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$1I = React.forwardRef(SvgSpringNotesEditSearch);

var SvgSpringNotesEditUpload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Zm8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19.143 12.49a1.674 1.674 0 0 1 2.367 2.367l-5.015 5.015a.997.997 0 0 1-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.627-2.197a.993.993 0 0 1 .255-.434l5.015-5.015Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm11.25 10.396-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.293a.75.75 0 1 1-1.06 1.06l-.72-.72v3.19a.75.75 0 0 1-1.5 0v-3.19Z', clipRule: 'evenodd' })));
};
var ForwardRef$1H = React.forwardRef(SvgSpringNotesEditUpload);

var SvgSpringNotesEdit = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Zm8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19.143 12.49a1.674 1.674 0 0 1 2.367 2.367l-5.015 5.015a.997.997 0 0 1-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.627-2.197a.993.993 0 0 1 .255-.434l5.015-5.015Z' })));
};
var ForwardRef$1G = React.forwardRef(SvgSpringNotesEdit);

var SvgSpringNotesFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm-8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12.265 10.674 12 10.94l-.265-.265a1.875 1.875 0 0 0-2.652 2.652l1.856 1.856a1.5 1.5 0 0 0 2.122 0l1.856-1.856a1.875 1.875 0 1 0-2.652-2.652Z' })));
};
var ForwardRef$1F = React.forwardRef(SvgSpringNotesFavourite);

var SvgSpringNotesList = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm-8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.75 13a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Zm0-4a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Zm0 8a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8.5 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' })));
};
var ForwardRef$1E = React.forwardRef(SvgSpringNotesList);

var SvgSpringNotesRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm-8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.75 13a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$1D = React.forwardRef(SvgSpringNotesRemove);

var SvgSpringNotesSearch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm-8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 10.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM8.25 13a3.75 3.75 0 1 1 6.879 2.068l.901.902a.75.75 0 1 1-1.06 1.06l-.902-.901A3.75 3.75 0 0 1 8.25 13Z', clipRule: 'evenodd' })));
};
var ForwardRef$1C = React.forwardRef(SvgSpringNotesSearch);

var SvgSpringNotesUpload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm-8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm12.75 11.81.72.72a.75.75 0 1 0 1.06-1.06l-1.293-1.293a1.75 1.75 0 0 0-2.474 0L9.47 11.47a.75.75 0 0 0 1.06 1.06l.72-.72V16a.75.75 0 1 0 1.5 0v-4.19Z', clipRule: 'evenodd' })));
};
var ForwardRef$1B = React.forwardRef(SvgSpringNotesUpload);

var SvgSpringNotesWriteEdit = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Zm8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19.143 12.49a1.674 1.674 0 0 1 2.367 2.367l-5.015 5.015a.997.997 0 0 1-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.627-2.197a.993.993 0 0 1 .255-.434l5.015-5.015Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.75 9a.75.75 0 0 1-.75.75H8a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 .75.75Zm-2 4a.75.75 0 0 1-.75.75H8a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Zm-4 4a.75.75 0 0 1-.75.75H8a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$1A = React.forwardRef(SvgSpringNotesWriteEdit);

var SvgSpringNotes = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm-8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.25 9A.75.75 0 0 1 7 8.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 9Zm0 4a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$1z = React.forwardRef(SvgSpringNotes);

var SvgStandbyMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z' })));
};
var ForwardRef$1y = React.forwardRef(SvgStandbyMode);

var SvgStethoscope = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.25 10.75a2 2 0 0 0-2 2v5.5a4.5 4.5 0 1 1-9 0V13a.75.75 0 0 1 1.5 0v5.25a3 3 0 1 0 6 0v-5.5a3.5 3.5 0 1 1 7 0V14a.75.75 0 0 1-1.5 0v-1.25a2 2 0 0 0-2-2Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3.25 2.354A2.751 2.751 0 0 0 1.25 5v3a5.75 5.75 0 0 0 11.5 0V5a2.75 2.75 0 0 0-2-2.646V4c.304.228.5.591.5 1v3a4.25 4.25 0 0 1-8.5 0V5c0-.409.196-.772.5-1V2.354Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm-6 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 4 1.25Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$1x = React.forwardRef(SvgStethoscope);

var SvgStorage = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 2a4 4 0 0 1 4 4v6H2V6a4 4 0 0 1 4-4h12Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 22a4 4 0 0 1-4-4v-6h20v6a4 4 0 0 1-4 4H6Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 5.25a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm-4 0a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0V6a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 15.25a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm-4 0a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$1w = React.forwardRef(SvgStorage);

var SvgStoreSmile = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 18V7H3v11a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 8.25V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2.25C2 10.321 3.492 12 5.333 12c1.841 0 3.334-1.679 3.334-3.75C8.667 10.321 10.159 12 12 12c1.84 0 3.333-1.679 3.333-3.75 0 2.071 1.493 3.75 3.334 3.75C20.507 12 22 10.321 22 8.25Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.653 17.632a.75.75 0 0 1-.285 1.021c-1.215.686-2.262 1.095-3.365 1.097-1.105.002-2.154-.404-3.374-1.098a.75.75 0 1 1 .742-1.304c1.136.647 1.911.904 2.629.902.719-.001 1.494-.262 2.632-.903a.75.75 0 0 1 1.021.285Z', clipRule: 'evenodd' })));
};
var ForwardRef$1v = React.forwardRef(SvgStoreSmile);

var SvgStore = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 18V7H3v11a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7 18a2 2 0 1 1 4 0v4H7v-4Zm15-9.75V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2.25C2 10.321 3.492 12 5.333 12c1.841 0 3.334-1.679 3.334-3.75C8.667 10.321 10.159 12 12 12c1.841 0 3.333-1.679 3.333-3.75 0 2.071 1.493 3.75 3.334 3.75C20.507 12 22 10.321 22 8.25ZM14 15a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1Z' })));
};
var ForwardRef$1u = React.forwardRef(SvgStore);

var SvgSwitch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16 6a6 6 0 0 1 0 12H8A6 6 0 0 1 8 6h8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z' })));
};
var ForwardRef$1t = React.forwardRef(SvgSwitch);

var SvgSyrup = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7 3.5A1.5 1.5 0 0 1 8.5 2h7a1.5 1.5 0 0 1 0 3h-7A1.5 1.5 0 0 1 7 3.5Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 12.14a4 4 0 0 1 1.781-3.327l.328-.22A2 2 0 0 0 9 6.93V5h6v1.93a2 2 0 0 0 .89 1.664l.329.219A4 4 0 0 1 18 12.14V18a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-5.86Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' })));
};
var ForwardRef$1s = React.forwardRef(SvgSyrup);

var SvgTablet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h8Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z' })));
};
var ForwardRef$1r = React.forwardRef(SvgTablet);

var SvgTagCrooked = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M9.411 4.69a4.078 4.078 0 0 1 3.165-1.19l3.964.278a3.96 3.96 0 0 1 3.682 3.682l.278 3.964a4.077 4.077 0 0 1-1.19 3.165l-6.564 6.565c-1.584 1.583-4.134 1.6-5.696.038L2.808 16.95c-1.562-1.562-1.545-4.112.038-5.695l6.565-6.566Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 14.828, cy: 9.172, r: 2, fill: 'currentColor', transform: 'rotate(45 14.828 9.172)' })));
};
var ForwardRef$1q = React.forwardRef(SvgTagCrooked);

var SvgTag = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M5 8.66c0-1.183.51-2.307 1.397-3.078l3-2.606a3.96 3.96 0 0 1 5.206 0l3 2.606A4.078 4.078 0 0 1 19 8.661v9.285C19 20.185 17.21 22 15 22H9c-2.21 0-4-1.815-4-4.054V8.66Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 12, cy: 8, r: 2, fill: 'currentColor' })));
};
var ForwardRef$1p = React.forwardRef(SvgTag);

var SvgTaskCheckPaper = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 18V6a4 4 0 0 1 4-4h7l7 7v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14 5V2l7 7h-3a4 4 0 0 1-4-4Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.494 11.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .937-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z', clipRule: 'evenodd' })));
};
var ForwardRef$1o = React.forwardRef(SvgTaskCheckPaper);

var SvgTelegram = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm2.896 10.796 15.39-6.65a1 1 0 0 1 1.383 1.074l-2.104 13.276a1 1 0 0 1-1.714.53l-3.453-3.657a2 2 0 0 1-.125-2.6L14.71 9.63c.14-.18-.081-.416-.27-.289l-4.847 3.252a4 4 0 0 1-2.8.637l-3.644-.527c-.998-.144-1.18-1.508-.254-1.908Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm19.411 4.379-4.762 4.953a.192.192 0 0 0-.208.01l-4.847 3.252a4 4 0 0 1-2.8.637l-3.644-.527c-.998-.144-1.18-1.508-.254-1.908l15.39-6.65a.994.994 0 0 1 1.125.233Z', clipRule: 'evenodd' })));
};
var ForwardRef$1n = React.forwardRef(SvgTelegram);

var SvgTestTube = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm12.889 6.142 4.97 4.97-9.112 9.11a3.514 3.514 0 1 1-4.97-4.97l9.112-9.11Zm4.141-2.485a2.343 2.343 0 1 1 3.313 3.313l-.828.828-3.313-3.313.828-.828Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12.474 3.242a1.757 1.757 0 0 1 2.485 0l5.798 5.798a1.757 1.757 0 0 1-2.485 2.485l-5.798-5.798a1.757 1.757 0 0 1 0-2.485Zm-8.696 12.01a3.514 3.514 0 1 0 4.97 4.97l6.225-6.225-8.946-.994-2.25 2.25Z' })));
};
var ForwardRef$1m = React.forwardRef(SvgTestTube);

var SvgThermometer = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm9.69 10.174 6.316-6.317a2.925 2.925 0 0 1 4.137 4.137l-6.317 6.316a1.95 1.95 0 0 1-1.103.552l-1.126.161a1.95 1.95 0 0 0-1.103.552l-4.997 4.997a1.463 1.463 0 1 1-2.069-2.069l4.997-4.997a1.95 1.95 0 0 0 .552-1.103l.16-1.126a1.95 1.95 0 0 1 .552-1.103Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M5.497 20.572a1.463 1.463 0 1 1-2.069-2.069l2.499-2.498 2.068 2.068-2.498 2.499Z' })));
};
var ForwardRef$1l = React.forwardRef(SvgThermometer);

var SvgTiktok = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10 21a6 6 0 0 0 6-6V8.197c.883.51 1.907.803 3 .803h1V6h-1a3 3 0 0 1-3-3h-3v12a3 3 0 1 1-3-3V9a6 6 0 0 0 0 12Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16 3a3 3 0 0 0 3 3h1v3h-1a5.972 5.972 0 0 1-3-.803V3Z' })));
};
var ForwardRef$1k = React.forwardRef(SvgTiktok);

var SvgTooth = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20.263 4.24c-2.423-2.288-4.944-1.367-6.869-.003a2.43 2.43 0 0 1-2.793.006c-1.933-1.356-4.464-2.27-6.865-.004C-1.258 8.953 5.85 20.862 8.42 20.862c2.554 0 .7-7.295 3.58-7.387 2.88.092 1.026 7.387 3.58 7.387 2.57 0 9.678-11.909 4.683-16.623Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3.736 4.24c2.4-2.266 4.932-1.353 6.864.003.419.294.91.44 1.4.438v8.794c-2.88.091-1.026 7.387-3.58 7.387-2.57 0-9.678-11.909-4.684-16.623Z' })));
};
var ForwardRef$1j = React.forwardRef(SvgTooth);

var SvgTransfer = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm8 12a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm20.604 6.75-.72.72a.75.75 0 0 0 1.06 1.06l1.293-1.293a1.75 1.75 0 0 0 0-2.474L20.945 3.47a.75.75 0 1 0-1.061 1.06l.72.72H16a.75.75 0 0 0 0 1.5h4.604Zm-17.208 12 .72.72a.75.75 0 1 1-1.06 1.06l-1.293-1.293a1.75 1.75 0 0 1 0-2.474l1.292-1.293a.75.75 0 0 1 1.061 1.06l-.72.72H8a.75.75 0 0 1 0 1.5H3.396Z', clipRule: 'evenodd' })));
};
var ForwardRef$1i = React.forwardRef(SvgTransfer);

var SvgTransfusion = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 14.9c0-4.072 3.837-8.089 5.83-9.9a1.724 1.724 0 0 1 2.34 0C18.164 6.81 22 10.827 22 14.9c0 3.5-2.65 7.1-7 7.1s-7-3.6-7-7.1Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6.81 3.067C5.06 4.75 2 8.197 2 11.689 2 14.8 4.272 18 8 18c.234 0 .462-.012.683-.037A7.316 7.316 0 0 1 8 14.9c0-3.115 2.246-6.199 4.194-8.287-.973-1.47-2.146-2.72-3.004-3.546a1.7 1.7 0 0 0-2.38 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.264 19.143a.75.75 0 0 1 .594-.879c1.277-.247 2.15-1.26 2.41-2.427a.75.75 0 0 1 1.464.326c-.369 1.658-1.637 3.196-3.59 3.574a.75.75 0 0 1-.878-.594Z', clipRule: 'evenodd' })));
};
var ForwardRef$1h = React.forwardRef(SvgTransfusion);

var SvgTrolleyCrooked = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.859 5.905c-.373-1.37-1.795-2.167-3.164-1.806l-.886.234a.75.75 0 1 0 .382 1.45l.887-.234a1.09 1.09 0 0 1 1.334.75l2.77 10.175A2.493 2.493 0 0 1 8.607 16L5.86 5.905Zm5.134 13.458a2.488 2.488 0 0 0 .053-1.565l10.763-2.838a.75.75 0 1 1 .382 1.45l-11.198 2.953Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M11.061 17.853a2.5 2.5 0 1 1-4.828 1.294 2.5 2.5 0 0 1 4.828-1.294ZM8.27 7.146a1.804 1.804 0 0 1 1.3-2.213l7.094-1.871c.979-.258 1.986.314 2.248 1.278l1.9 6.981a1.804 1.804 0 0 1-1.297 2.213l-7.094 1.871c-.98.259-1.986-.313-2.249-1.277l-1.9-6.982Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.44 6.19a.75.75 0 0 1-.534.917l-1.773.467a.75.75 0 0 1-.382-1.45l1.773-.468a.75.75 0 0 1 .917.534Z', clipRule: 'evenodd' })));
};
var ForwardRef$1g = React.forwardRef(SvgTrolleyCrooked);

var SvgTrolley = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V7Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.25 8a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 19.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2 1.25a.75.75 0 0 0 0 1.5h1c.69 0 1.25.56 1.25 1.25v13.334a2.488 2.488 0 0 1 1.5-.322V4A2.75 2.75 0 0 0 3 1.25H2Zm5.666 19.5a2.488 2.488 0 0 0 .322-1.5H22a.75.75 0 0 1 0 1.5H7.666Z', clipRule: 'evenodd' })));
};
var ForwardRef$1f = React.forwardRef(SvgTrolley);

var SvgTurnLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8.973 3.254a4.281 4.281 0 0 1 6.054 0l5.72 5.719a4.281 4.281 0 0 1 0 6.054l-5.72 5.72a4.281 4.281 0 0 1-6.054 0l-5.72-5.72a4.281 4.281 0 0 1 0-6.054l5.72-5.72Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm10.396 10.75.72.72a.75.75 0 1 1-1.06 1.06l-1.293-1.293a1.75 1.75 0 0 1 0-2.474l1.293-1.293a.75.75 0 1 1 1.06 1.06l-.72.72H12A2.75 2.75 0 0 1 14.75 12v4a.75.75 0 0 1-1.5 0v-4c0-.69-.56-1.25-1.25-1.25h-1.604Z', clipRule: 'evenodd' })));
};
var ForwardRef$1e = React.forwardRef(SvgTurnLeft);

var SvgTurnRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8.973 3.254a4.281 4.281 0 0 1 6.054 0l5.72 5.719a4.281 4.281 0 0 1 0 6.054l-5.72 5.72a4.281 4.281 0 0 1-6.054 0l-5.72-5.72a4.281 4.281 0 0 1 0-6.054l5.72-5.72Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm13.604 10.75-.72.72a.75.75 0 1 0 1.06 1.06l1.293-1.293a1.75 1.75 0 0 0 0-2.474L13.944 7.47a.75.75 0 1 0-1.06 1.06l.72.72H12A2.75 2.75 0 0 0 9.25 12v4a.75.75 0 0 0 1.5 0v-4c0-.69.56-1.25 1.25-1.25h1.604Z', clipRule: 'evenodd' })));
};
var ForwardRef$1d = React.forwardRef(SvgTurnRight);

var SvgTurnTwoSide = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8.973 3.254a4.281 4.281 0 0 1 6.054 0l5.72 5.719a4.281 4.281 0 0 1 0 6.054l-5.72 5.72a4.281 4.281 0 0 1-6.054 0l-5.72-5.72a4.281 4.281 0 0 1 0-6.054l5.72-5.72Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.116 8.47a.75.75 0 0 1 0 1.06l-.72.72H10c.788 0 1.499.331 2 .863a2.742 2.742 0 0 1 2-.863h1.604l-.72-.72a.75.75 0 0 1 1.06-1.06l1.293 1.293a1.75 1.75 0 0 1 0 2.474l-1.292 1.293a.75.75 0 1 1-1.061-1.06l.72-.72H14c-.69 0-1.25.56-1.25 1.25v3a.75.75 0 0 1-1.5 0v-3c0-.69-.56-1.25-1.25-1.25H8.396l.72.72a.75.75 0 1 1-1.06 1.06l-1.293-1.293a1.75 1.75 0 0 1 0-2.474L8.055 8.47a.75.75 0 0 1 1.061 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$1c = React.forwardRef(SvgTurnTwoSide);

var SvgTurn = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8.973 3.254a4.281 4.281 0 0 1 6.054 0l5.72 5.719a4.281 4.281 0 0 1 0 6.054l-5.72 5.72a4.281 4.281 0 0 1-6.054 0l-5.72-5.72a4.281 4.281 0 0 1 0-6.054l5.72-5.72Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm12.75 7.396.72.72a.75.75 0 1 0 1.06-1.06l-1.293-1.293a1.75 1.75 0 0 0-2.474 0L9.47 7.055a.75.75 0 0 0 1.06 1.061l.72-.72v5.14A4.733 4.733 0 0 0 8 11.25h-.604l.72-.72a.75.75 0 1 0-1.06-1.06l-1.293 1.293a1.75 1.75 0 0 0 0 2.474l1.292 1.293a.75.75 0 0 0 1.061-1.06l-.72-.72H8A3.25 3.25 0 0 1 11.25 16v1a.75.75 0 0 0 1.5 0v-1A3.25 3.25 0 0 1 16 12.75h.604l-.72.72a.75.75 0 1 0 1.06 1.06l1.293-1.293a1.75 1.75 0 0 0 0-2.474L16.945 9.47a.75.75 0 1 0-1.061 1.06l.72.72H16c-1.257 0-2.4.488-3.25 1.286v-5.14Z', clipRule: 'evenodd' })));
};
var ForwardRef$1b = React.forwardRef(SvgTurn);

var SvgTwitterPlus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M9 3.5V2h4v5h4v4h-4v5a2 2 0 0 0 2 2h4v4h-4a6 6 0 0 1-6-6v-5H5V7h.5A3.5 3.5 0 0 0 9 3.5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M9 3.5V2h4v5H5.5A3.5 3.5 0 0 0 9 3.5Z' })));
};
var ForwardRef$1a = React.forwardRef(SvgTwitterPlus);

var SvgTwitterSparrow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15.286 4c-2.104 0-3.81 1.79-3.81 4 0 .334.04.658.113.968-2.023 0-5.07-.409-7.615-2.958-.338-.34-.962-.113-.938.366.377 7.687 3.669 9.929 5.364 10.068-1.095 1.082-2.685 1.935-4.285 2.318-.422.101-.527.564-.114.698 1.145.372 2.784.516 3.666.54 6.241 0 11.314-5.253 11.427-11.778.819-.533 1.344-1.69 1.639-2.51.071-.199-.256-.431-.451-.35-.613.255-1.39.315-2.052.1C17.532 4.569 16.472 4 15.286 4Z', opacity: 0.4 })));
};
var ForwardRef$19 = React.forwardRef(SvgTwitterSparrow);

var SvgTwitter = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 4v13a5 5 0 0 0 5 5h5a2 2 0 1 0 0-4h-4a2 2 0 0 1-2-2v-4h6a2 2 0 1 0 0-4h-6V4a2 2 0 1 0-4 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16 8h-6v4h6a2 2 0 1 0 0-4Z' })));
};
var ForwardRef$18 = React.forwardRef(SvgTwitter);

var SvgUTurnLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8.973 3.254a4.281 4.281 0 0 1 6.054 0l5.72 5.719a4.281 4.281 0 0 1 0 6.054l-5.72 5.72a4.281 4.281 0 0 1-6.054 0l-5.72-5.72a4.281 4.281 0 0 1 0-6.054l5.72-5.72Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15 16.75a.75.75 0 0 1-.75-.75v-5a2.25 2.25 0 0 0-4.5 0v1.604l.72-.72a.75.75 0 1 1 1.06 1.06l-1.293 1.293a1.75 1.75 0 0 1-2.474 0L6.47 12.944a.75.75 0 1 1 1.06-1.06l.72.72V11a3.75 3.75 0 1 1 7.5 0v5a.75.75 0 0 1-.75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$17 = React.forwardRef(SvgUTurnLeft);

var SvgUTurnRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8.973 3.254a4.281 4.281 0 0 1 6.054 0l5.72 5.719a4.281 4.281 0 0 1 0 6.054l-5.72 5.72a4.281 4.281 0 0 1-6.054 0l-5.72-5.72a4.281 4.281 0 0 1 0-6.054l5.72-5.72Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9 16.75a.75.75 0 0 0 .75-.75v-5a2.25 2.25 0 0 1 4.5 0v1.604l-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.293a.75.75 0 1 0-1.06-1.06l-.72.72V11a3.75 3.75 0 1 0-7.5 0v5c0 .414.336.75.75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$16 = React.forwardRef(SvgUTurnRight);

var SvgUmbrella = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10 21.25c.69 0 1.25-.56 1.25-1.25v-8a.75.75 0 0 1 1.5 0v8a2.75 2.75 0 1 1-5.5 0 .75.75 0 0 1 1.5 0c0 .69.56 1.25 1.25 1.25Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 2c4.308 0 8.66 3.778 9.744 8.022C22.017 11.092 21.104 12 20 12H4c-1.105 0-2.017-.908-1.744-1.978C3.339 5.778 7.692 2 12 2Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 2c2.21 0 4 4.477 4 10H8C8 6.477 9.79 2 12 2Z' })));
};
var ForwardRef$15 = React.forwardRef(SvgUmbrella);

var SvgUndoCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.41 6.75a.75.75 0 0 0-.75.75V10a.75.75 0 0 0 .564.727l1.965.5a.75.75 0 1 0 .37-1.454l-.833-.212a3.25 3.25 0 1 1-1 3.252.75.75 0 1 0-1.452.374A4.752 4.752 0 0 0 16.624 12a4.75 4.75 0 0 0-7.465-3.898V7.5a.75.75 0 0 0-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$14 = React.forwardRef(SvgUndoCircle);

var SvgUndo = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 3.75A8.25 8.25 0 1 1 3.75 12a.75.75 0 0 0-1.5 0c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25a9.722 9.722 0 0 0-7.046 3.01V3a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75h4.421a.75.75 0 0 0 0-1.5h-2.99a8.233 8.233 0 0 1 6.365-3Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4.954 6.75V3a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75h4.421a.75.75 0 0 0 0-1.5H4.954Z' })));
};
var ForwardRef$13 = React.forwardRef(SvgUndo);

var SvgUnlock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.85 4.562A3.25 3.25 0 0 1 15.25 7H16c.256 0 .507.024.75.07V7a4.75 4.75 0 0 0-7.892-3.562.75.75 0 1 0 .993 1.124Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M4 11a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M14 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' })));
};
var ForwardRef$12 = React.forwardRef(SvgUnlock);

var SvgUploadCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 14a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.47 6.53a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1-1.06 1.06l-2.72-2.72V16a.75.75 0 0 1-1.5 0V3.81L8.53 6.53a.75.75 0 0 1-1.06 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$11 = React.forwardRef(SvgUploadCircle);

var SvgUploadRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7 9h10a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.47 6.53a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V15a.75.75 0 0 1-1.5 0V4.81L9.53 6.53a.75.75 0 0 1-1.06 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$10 = React.forwardRef(SvgUploadRectangle);

var SvgUsb = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 3.25a.75.75 0 0 1 .75.75v6.96l4.33-1.444a.25.25 0 0 0 .17-.237V6a.75.75 0 0 1 1.5 0v3.28a1.75 1.75 0 0 1-1.197 1.66l-4.803 1.6V19a.75.75 0 0 1-1.5 0v-4.46l-4.803-1.6a1.75 1.75 0 0 1-1.197-1.66V8a.75.75 0 0 1 1.5 0v3.28a.25.25 0 0 0 .17.236l4.33 1.443V4a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm10.2 3.4 1-1.333a1 1 0 0 1 1.6 0l1 1.333A1 1 0 0 1 13 5h-2a1 1 0 0 1-.8-1.6ZM19.5 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM14 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM4.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1Z' })));
};
var ForwardRef$$ = React.forwardRef(SvgUsb);

var SvgUserAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("ellipse", { cx: 10, cy: 17, fill: 'currentColor', opacity: 0.4, rx: 7, ry: 4 }),
        React__namespace.createElement("circle", { cx: 10, cy: 7, r: 4, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18.25 13a.75.75 0 0 0 1.5 0v-1.25H21a.75.75 0 0 0 0-1.5h-1.25V9a.75.75 0 0 0-1.5 0v1.25H17a.75.75 0 0 0 0 1.5h1.25V13Z', clipRule: 'evenodd' })));
};
var ForwardRef$_ = React.forwardRef(SvgUserAdd);

var SvgUserBlock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("ellipse", { cx: 10, cy: 17, fill: 'currentColor', opacity: 0.4, rx: 7, ry: 4 }),
        React__namespace.createElement("circle", { cx: 10, cy: 7, r: 4, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19 14a3 3 0 0 0 2.482-4.686l-4.168 4.168a3.016 3.016 0 0 1-.796-.796l4.168-4.168A3 3 0 1 0 19 14Z', clipRule: 'evenodd' })));
};
var ForwardRef$Z = React.forwardRef(SvgUserBlock);

var SvgUserCircleAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 11a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.87 13.75c-1.072.003-2.137.296-3.563.934a.75.75 0 1 1-.614-1.368c1.52-.681 2.805-1.062 4.172-1.066 1.361-.004 2.73.367 4.418 1.056a.75.75 0 1 1-.566 1.388c-1.612-.657-2.77-.947-3.848-.944Z', clipRule: 'evenodd' }),
        React__namespace.createElement("circle", { r: 3, fill: 'currentColor', transform: 'matrix(1 0 0 -1 11 8)' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18.75 16a.75.75 0 0 0-1.5 0v1.25H16a.75.75 0 0 0 0 1.5h1.25V20a.75.75 0 0 0 1.5 0v-1.25H20a.75.75 0 0 0 0-1.5h-1.25V16Z', clipRule: 'evenodd' })));
};
var ForwardRef$Y = React.forwardRef(SvgUserCircleAdd);

var SvgUserCircleBlock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("circle", { r: 9, fill: 'currentColor', opacity: 0.4, transform: 'matrix(1 0 0 -1 11 11)' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.87 13.75c-1.072.003-2.137.296-3.563.934a.75.75 0 1 1-.614-1.368c1.52-.681 2.805-1.062 4.172-1.066 1.361-.004 2.73.367 4.418 1.056a.75.75 0 1 1-.566 1.388c-1.612-.657-2.77-.947-3.848-.944Z', clipRule: 'evenodd' }),
        React__namespace.createElement("circle", { r: 3, fill: 'currentColor', transform: 'matrix(1 0 0 -1 11 8)' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 21a3 3 0 0 0 2.482-4.686l-4.168 4.168a3.016 3.016 0 0 1-.796-.796l4.168-4.168A3 3 0 1 0 18 21Z', clipRule: 'evenodd' })));
};
var ForwardRef$X = React.forwardRef(SvgUserCircleBlock);

var SvgUserCircleMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("circle", { r: 9, fill: 'currentColor', opacity: 0.4, transform: 'matrix(1 0 0 -1 11 11)' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.87 13.75c-1.072.003-2.137.296-3.563.934a.75.75 0 1 1-.614-1.368c1.52-.681 2.805-1.062 4.172-1.066 1.361-.004 2.73.367 4.418 1.056a.75.75 0 1 1-.566 1.388c-1.612-.657-2.77-.947-3.848-.944Z', clipRule: 'evenodd' }),
        React__namespace.createElement("circle", { r: 3, fill: 'currentColor', transform: 'matrix(1 0 0 -1 11 8)' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20.502 18a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$W = React.forwardRef(SvgUserCircleMinus);

var SvgUserCircleRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 25', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("circle", { r: 9, fill: 'currentColor', opacity: 0.4, transform: 'matrix(1 0 0 -1 11 11.757)' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.87 14.507c-1.072.003-2.137.295-3.563.934a.75.75 0 1 1-.614-1.369c1.52-.68 2.805-1.062 4.172-1.065 1.361-.004 2.73.366 4.418 1.055a.75.75 0 1 1-.566 1.389c-1.612-.658-2.77-.947-3.848-.944Z', clipRule: 'evenodd' }),
        React__namespace.createElement("circle", { r: 3, fill: 'currentColor', transform: 'matrix(1 0 0 -1 11 8.757)' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18.884 20.7a.75.75 0 0 0 1.06-1.06l-.883-.884.884-.883a.75.75 0 0 0-1.061-1.06l-.884.883-.884-.884a.75.75 0 1 0-1.06 1.06l.883.884-.884.885a.75.75 0 1 0 1.061 1.06l.884-.884.884.884Z', clipRule: 'evenodd' })));
};
var ForwardRef$V = React.forwardRef(SvgUserCircleRemove);

var SvgUserCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 12a9.976 9.976 0 0 1-3.441 7.549A9.961 9.961 0 0 1 12 22a9.961 9.961 0 0 1-6.559-2.451A9.977 9.977 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18.559 19.549a7.003 7.003 0 0 0-13.118 0A9.961 9.961 0 0 0 12 22a9.96 9.96 0 0 0 6.559-2.451Z' }),
        React__namespace.createElement("circle", { r: 3, fill: 'currentColor', transform: 'matrix(1 0 0 -1 12 10)' })));
};
var ForwardRef$U = React.forwardRef(SvgUserCircle);

var SvgUserCommunity = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("circle", { cx: 6, cy: 4, r: 2, fill: 'currentColor' }),
        React__namespace.createElement("ellipse", { cx: 6, cy: 8, fill: 'currentColor', opacity: 0.4, rx: 3, ry: 2 }),
        React__namespace.createElement("circle", { cx: 18, cy: 16, r: 2, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.25 2a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75a.75.75 0 0 1-1.5 0A9.25 9.25 0 0 0 12 2.75a.75.75 0 0 1-.75-.75ZM2 11.25a.75.75 0 0 1 .75.75A9.25 9.25 0 0 0 12 21.25a.75.75 0 0 1 0 1.5C6.063 22.75 1.25 17.937 1.25 12a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("ellipse", { cx: 18, cy: 20, fill: 'currentColor', opacity: 0.4, rx: 3, ry: 2 })));
};
var ForwardRef$T = React.forwardRef(SvgUserCommunity);

var SvgUserMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("ellipse", { cx: 10, cy: 17, fill: 'currentColor', opacity: 0.4, rx: 7, ry: 4 }),
        React__namespace.createElement("circle", { cx: 10, cy: 7, r: 4, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.25 11a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$S = React.forwardRef(SvgUserMinus);

var SvgUserPolygon = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M9.922 2.571a4.067 4.067 0 0 1 4.156 0l4.844 2.868C20.208 6.201 21 7.61 21 9.132v5.736c0 1.523-.792 2.931-2.078 3.693l-4.844 2.868a4.067 4.067 0 0 1-4.156 0L5.078 18.56C3.792 17.799 3 16.39 3 14.868V9.132c0-1.523.792-2.931 2.078-3.693l4.844-2.868Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M9.922 21.429a4.067 4.067 0 0 0 4.156 0l4.223-2.501c-1.258-2.23-3.609-3.73-6.301-3.73s-5.043 1.5-6.301 3.73l4.223 2.5Z' }),
        React__namespace.createElement("circle", { r: 3, fill: 'currentColor', transform: 'matrix(1 0 0 -1 12 10)' })));
};
var ForwardRef$R = React.forwardRef(SvgUserPolygon);

var SvgUserRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 2H6a4 4 0 0 0-4 4v12a4.002 4.002 0 0 0 4 4h12a4.002 4.002 0 0 0 4-4V6a4 4 0 0 0-4-4Z', opacity: 0.4 }),
        React__namespace.createElement("circle", { r: 3, fill: 'currentColor', transform: 'matrix(1 0 0 -1 12 10)' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 22h12c.345 0 .68-.044.999-.126a7 7 0 0 0-13.998 0c.32.082.654.126.999.126Z' })));
};
var ForwardRef$Q = React.forwardRef(SvgUserRectangle);

var SvgUserRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("ellipse", { cx: 10, cy: 17, fill: 'currentColor', opacity: 0.4, rx: 7, ry: 4 }),
        React__namespace.createElement("circle", { cx: 10, cy: 7, r: 4, fill: 'currentColor' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.575 8.575a.719.719 0 0 1 1.016 0l1.41 1.408 1.408-1.408a.719.719 0 1 1 1.016 1.016l-1.408 1.41 1.408 1.408a.719.719 0 1 1-1.016 1.016L19 12.017l-1.409 1.408a.719.719 0 1 1-1.016-1.016L17.983 11l-1.408-1.409a.719.719 0 0 1 0-1.016Z', clipRule: 'evenodd' })));
};
var ForwardRef$P = React.forwardRef(SvgUserRemove);

var SvgUser = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("ellipse", { cx: 12, cy: 17, fill: 'currentColor', opacity: 0.4, rx: 7, ry: 4 }),
        React__namespace.createElement("circle", { cx: 12, cy: 7, r: 4, fill: 'currentColor' })));
};
var ForwardRef$O = React.forwardRef(SvgUser);

var SvgUsersDouble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("circle", { cx: 15, cy: 8, r: 3, fill: 'currentColor', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.115 18.948c.564-.576.885-1.24.885-1.948 0-1.701-1.859-3.155-4.479-3.733a11.262 11.262 0 0 1 2.48-.267c3.313 0 6 1.343 6 3 0 1.466-2.105 2.687-4.886 2.948Z', clipRule: 'evenodd' }),
        React__namespace.createElement("ellipse", { cx: 10, cy: 17, fill: 'currentColor', opacity: 0.4, rx: 7, ry: 4 }),
        React__namespace.createElement("circle", { cx: 10, cy: 7, r: 4, fill: 'currentColor' })));
};
var ForwardRef$N = React.forwardRef(SvgUsersDouble);

var SvgUsersTriple = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("circle", { cx: 7.5, cy: 8.5, r: 2.5, fill: 'currentColor', opacity: 0.4 }),
        React__namespace.createElement("circle", { cx: 16.5, cy: 8.5, r: 2.5, fill: 'currentColor', opacity: 0.4 }),
        React__namespace.createElement("ellipse", { cx: 12, cy: 16, fill: 'currentColor', opacity: 0.4, rx: 6, ry: 3 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.495 17.987C17.43 17.458 18 16.762 18 16c0-1.187-1.379-2.213-3.38-2.7A9.176 9.176 0 0 1 17 13c2.761 0 5 1.12 5 2.5S19.76 18 17 18c-.17 0-.34-.004-.505-.013Zm-8.99 0A9.296 9.296 0 0 1 7 18c-2.761 0-5-1.12-5-2.5S4.239 13 7 13c.861 0 1.672.109 2.38.3C7.378 13.788 6 14.814 6 16c0 .762.569 1.458 1.505 1.987Z', clipRule: 'evenodd' }),
        React__namespace.createElement("circle", { cx: 12, cy: 8, r: 3, fill: 'currentColor' })));
};
var ForwardRef$M = React.forwardRef(SvgUsersTriple);

var SvgVibrateMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M7 7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm3-1a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm-17 6.5a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75Zm-3 1a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-.75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$L = React.forwardRef(SvgVibrateMode);

var SvgVideoOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 9a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V9Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M13 5H5.82l11.04 11.043c.027-.105.14-.39.14-1.043V9a4 4 0 0 0-4-4Zm4 4.334 1.54-1.644C19.782 6.367 22 7.245 22 9.058v5.885c0 1.813-2.219 2.69-3.46 1.368L17 14.667V9.334Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M1.22 1.47a.75.75 0 0 0 0 1.06l20 20a.75.75 0 1 0 1.06-1.06l-20-20a.75.75 0 0 0-1.06 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$K = React.forwardRef(SvgVideoOff);

var SvgVideo = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 9a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V9Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm17 9.334 1.54-1.644C19.782 6.367 22 7.245 22 9.058v5.885c0 1.813-2.219 2.69-3.46 1.368L17 14.667V9.334ZM14 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' })));
};
var ForwardRef$J = React.forwardRef(SvgVideo);

var SvgViewOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21.13 14.147a3.085 3.085 0 0 0 0-4.294C19.174 7.795 15.816 5 12 5 8.184 5 4.825 7.795 2.87 9.853a3.085 3.085 0 0 0 0 4.294C4.825 16.205 8.184 19 12 19c3.816 0 7.174-2.795 9.13-4.853ZM12 15a3 3 0 0 1-2.585-4.524l4.109 4.109A2.986 2.986 0 0 1 12 15Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 19c-3.816 0-7.175-2.795-9.13-4.853a3.085 3.085 0 0 1 0-4.294c.83-.873 1.912-1.879 3.175-2.748L3.47 4.53a.75.75 0 1 1 1.06-1.06l16 16a.75.75 0 1 1-1.06 1.06l-2.827-2.827C15.233 18.471 13.66 19 12 19Zm0-4a3 3 0 0 1-2.585-4.524l4.109 4.109A2.986 2.986 0 0 1 12 15Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M9.879 9.879a3.001 3.001 0 0 1 4.242 4.242L12 12 9.879 9.879Z' })));
};
var ForwardRef$I = React.forwardRef(SvgViewOff);

var SvgViewPrivacy = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21.13 8.853a3.085 3.085 0 0 1 0 4.294C19.174 15.205 15.816 18 12 18c-3.816 0-7.175-2.795-9.13-4.853a3.085 3.085 0 0 1 0-4.294C4.825 6.795 8.184 4 12 4c3.816 0 7.174 2.795 9.13 4.853Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18.5 13.75a.75.75 0 0 0-.75.75V16a.75.75 0 0 1-1.5 0v-1.5a2.25 2.25 0 0 1 4.5 0V16a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 0-.75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M20 15h-3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2Z' })));
};
var ForwardRef$H = React.forwardRef(SvgViewPrivacy);

var SvgView = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21.13 9.853a3.085 3.085 0 0 1 0 4.294C19.174 16.205 15.816 19 12 19c-3.816 0-7.175-2.795-9.13-4.853a3.085 3.085 0 0 1 0-4.294C4.825 7.795 8.184 5 12 5c3.816 0 7.174 2.795 9.13 4.853Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' })));
};
var ForwardRef$G = React.forwardRef(SvgView);

var SvgWalletAddClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V7Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 12a3 3 0 0 0-3-3H2v6h3a3 3 0 0 0 3-3Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19 14.25a.75.75 0 0 1 .75.75v2.25H22a.75.75 0 0 1 0 1.5h-2.25V21a.75.75 0 0 1-1.5 0v-2.25H16a.75.75 0 0 1 0-1.5h2.25V15a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$F = React.forwardRef(SvgWalletAddClose);

var SvgWalletAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4h14ZM2 12v4h4a2 2 0 1 0 0-4H2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19 15.25a.75.75 0 0 1 .75.75v2.25H22a.75.75 0 0 1 0 1.5h-2.25V22a.75.75 0 0 1-1.5 0v-2.25H16a.75.75 0 0 1 0-1.5h2.25V16a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$E = React.forwardRef(SvgWalletAdd);

var SvgWalletArrowDownClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V7Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 12a3 3 0 0 0-3-3H2v6h3a3 3 0 0 0 3-3Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm19.25 19.604-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.292a.75.75 0 1 0-1.06-1.061l-.72.72V15a.75.75 0 0 0-1.5 0v4.604Z', clipRule: 'evenodd' })));
};
var ForwardRef$D = React.forwardRef(SvgWalletArrowDownClose);

var SvgWalletArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4h14ZM2 12v4h4a2 2 0 1 0 0-4H2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm19.25 20.604-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.292a.75.75 0 1 0-1.06-1.061l-.72.72V16a.75.75 0 0 0-1.5 0v4.604Z', clipRule: 'evenodd' })));
};
var ForwardRef$C = React.forwardRef(SvgWalletArrowDown);

var SvgWalletArrowLeftClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V7Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 12a3 3 0 0 0-3-3H2v6h3a3 3 0 0 0 3-3Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm17.396 18.25.72-.72a.75.75 0 1 0-1.06-1.06l-1.293 1.293a1.75 1.75 0 0 0 0 2.474l1.292 1.293a.75.75 0 1 0 1.061-1.06l-.72-.72H22a.75.75 0 0 0 0-1.5h-4.604Z', clipRule: 'evenodd' })));
};
var ForwardRef$B = React.forwardRef(SvgWalletArrowLeftClose);

var SvgWalletArrowLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4h14ZM2 12v4h4a2 2 0 1 0 0-4H2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm17.396 19.25.72-.72a.75.75 0 1 0-1.06-1.06l-1.293 1.293a1.75 1.75 0 0 0 0 2.474l1.292 1.293a.75.75 0 1 0 1.061-1.06l-.72-.72H22a.75.75 0 0 0 0-1.5h-4.604Z', clipRule: 'evenodd' })));
};
var ForwardRef$A = React.forwardRef(SvgWalletArrowLeft);

var SvgWalletArrowRightClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V7Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 12a3 3 0 0 0-3-3H2v6h3a3 3 0 0 0 3-3Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm20.604 18.25-.72-.72a.75.75 0 1 1 1.06-1.06l1.293 1.293a1.75 1.75 0 0 1 0 2.474l-1.292 1.293a.75.75 0 1 1-1.061-1.06l.72-.72H16a.75.75 0 0 1 0-1.5h4.604Z', clipRule: 'evenodd' })));
};
var ForwardRef$z = React.forwardRef(SvgWalletArrowRightClose);

var SvgWalletArrowRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4h14ZM2 12v4h4a2 2 0 1 0 0-4H2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm20.604 19.25-.72-.72a.75.75 0 1 1 1.06-1.06l1.293 1.293a1.75 1.75 0 0 1 0 2.474l-1.292 1.293a.75.75 0 1 1-1.061-1.06l.72-.72H16a.75.75 0 0 1 0-1.5h4.604Z', clipRule: 'evenodd' })));
};
var ForwardRef$y = React.forwardRef(SvgWalletArrowRight);

var SvgWalletArrowUpClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V7Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 12a3 3 0 0 0-3-3H2v6h3a3 3 0 0 0 3-3Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm19.25 16.396-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.292a.75.75 0 1 1-1.06 1.061l-.72-.72V21a.75.75 0 0 1-1.5 0v-4.604Z', clipRule: 'evenodd' })));
};
var ForwardRef$x = React.forwardRef(SvgWalletArrowUpClose);

var SvgWalletArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4h14ZM2 12v4h4a2 2 0 1 0 0-4H2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm19.25 17.396-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.292a.75.75 0 1 1-1.06 1.061l-.72-.72V22a.75.75 0 0 1-1.5 0v-4.604Z', clipRule: 'evenodd' })));
};
var ForwardRef$w = React.forwardRef(SvgWalletArrowUp);

var SvgWalletCheckClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V7Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 12a3 3 0 0 0-3-3H2v6h3a3 3 0 0 0 3-3Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22.494 16.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .936-1.172l1.753 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z', clipRule: 'evenodd' })));
};
var ForwardRef$v = React.forwardRef(SvgWalletCheckClose);

var SvgWalletCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4h14ZM2 12v4h4a2 2 0 1 0 0-4H2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22.494 17.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .936-1.172l1.753 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z', clipRule: 'evenodd' })));
};
var ForwardRef$u = React.forwardRef(SvgWalletCheck);

var SvgWalletClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V7Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 12a3 3 0 0 0-3-3H2v6h3a3 3 0 0 0 3-3Z' })));
};
var ForwardRef$t = React.forwardRef(SvgWalletClose);

var SvgWalletMinusClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V7Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 12a3 3 0 0 0-3-3H2v6h3a3 3 0 0 0 3-3Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21.75 18a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$s = React.forwardRef(SvgWalletMinusClose);

var SvgWalletMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4h14ZM2 12v4h4a2 2 0 1 0 0-4H2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22.75 18a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$r = React.forwardRef(SvgWalletMinus);

var SvgWalletOpenLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 6h16a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4H2Zm20 6v4h-4a2 2 0 1 1 0-4h4Z' })));
};
var ForwardRef$q = React.forwardRef(SvgWalletOpenLeft);

var SvgWalletOpenRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4h14ZM2 12v4h4a2 2 0 1 0 0-4H2Z' })));
};
var ForwardRef$p = React.forwardRef(SvgWalletOpenRight);

var SvgWalletRemoveClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V7Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 12a3 3 0 0 0-3-3H2v6h3a3 3 0 0 0 3-3Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22.03 16.227a.75.75 0 0 1 0 1.06l-1.59 1.592 1.59 1.59a.75.75 0 1 1-1.06 1.061l-1.591-1.59-1.591 1.59a.75.75 0 0 1-1.061-1.06l1.591-1.591-1.591-1.591a.75.75 0 0 1 1.06-1.061l1.592 1.591 1.59-1.591a.75.75 0 0 1 1.061 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$o = React.forwardRef(SvgWalletRemoveClose);

var SvgWalletRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4h14ZM2 12v4h4a2 2 0 1 0 0-4H2Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22.03 17.227a.75.75 0 0 1 0 1.06l-1.59 1.592 1.59 1.59a.75.75 0 1 1-1.06 1.061l-1.591-1.59-1.591 1.59a.75.75 0 0 1-1.061-1.06l1.591-1.591-1.591-1.591a.75.75 0 0 1 1.06-1.061l1.592 1.591 1.59-1.591a.75.75 0 0 1 1.061 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$n = React.forwardRef(SvgWalletRemove);

var SvgWalletUserClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V7Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M8 12a3 3 0 0 0-3-3H2v6h3a3 3 0 0 0 3-3Z' }),
        React__namespace.createElement("circle", { cx: 2, cy: 2, r: 2, fill: 'currentColor', transform: 'matrix(1 0 0 -1 17 18)' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19 18c1.282 0 2.401.804 3 2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1c.599-1.196 1.718-2 3-2Z' })));
};
var ForwardRef$m = React.forwardRef(SvgWalletUserClose);

var SvgWalletUser = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4h14ZM2 12v4h4a2 2 0 1 0 0-4H2Z' }),
        React__namespace.createElement("circle", { cx: 2, cy: 2, r: 2, fill: 'currentColor', transform: 'matrix(1 0 0 -1 17 19)' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M19 19c1.282 0 2.401.804 3 2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1c.599-1.196 1.718-2 3-2Z' })));
};
var ForwardRef$l = React.forwardRef(SvgWalletUser);

var SvgWallet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M22 9v6h-3a3 3 0 1 1 0-6h3Z' })));
};
var ForwardRef$k = React.forwardRef(SvgWallet);

var SvgWarehouse = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 10.083a4 4 0 0 1 1.706-3.277l6-4.2a4 4 0 0 1 4.588 0l6 4.2A4 4 0 0 1 22 10.083V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9.917Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16 10H8a2 2 0 0 0-2 2v2h12v-2a2 2 0 0 0-2-2Zm2 8H6v4h12v-4Z' })));
};
var ForwardRef$j = React.forwardRef(SvgWarehouse);

var SvgWhatsapp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.511.335 2.945.936 4.229l-.713 4.396a1 1 0 0 0 1.151 1.146l4.356-.726A9.96 9.96 0 0 0 12 22Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M16 15.111v-.436c0-.542-.33-1.03-.833-1.23l-.466-.187a1.08 1.08 0 0 0-1.14.215c-.165.154-.38.273-.594.199a4.358 4.358 0 0 1-1.634-1.005 4.358 4.358 0 0 1-1.005-1.634c-.074-.213.045-.429.199-.593.28-.298.375-.74.215-1.14l-.187-.467A1.325 1.325 0 0 0 9.325 8H8.89a.889.889 0 0 0-.89.889A7.111 7.111 0 0 0 15.111 16a.889.889 0 0 0 .889-.889Z' })));
};
var ForwardRef$i = React.forwardRef(SvgWhatsapp);

var SvgWheelChairHuman = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M15 15h-3V8a7 7 0 1 0 5.362 11.5l.142-.208L15 15Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 6.25a.75.75 0 0 1 .75.75v7.25H15a.75.75 0 0 1 .648.372l3.283 5.628H20a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.648-.372L14.57 15.75H12a.75.75 0 0 1-.75-.75V7a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M13.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' })));
};
var ForwardRef$h = React.forwardRef(SvgWheelChairHuman);

var SvgWheelChair = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18.5 16H7V6h10a2 2 0 0 1 2 2v8.063a2.005 2.005 0 0 0-.5-.063Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3.25 3A.75.75 0 0 1 4 2.25h1A2.75 2.75 0 0 1 7.75 5v10.25H18.5A2.75 2.75 0 0 1 21.25 18a.75.75 0 0 1-1.5 0 1.25 1.25 0 0 0-1.25-1.25H7a.75.75 0 0 1-.75-.75V5c0-.69-.56-1.25-1.25-1.25H4A.75.75 0 0 1 3.25 3Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M12 16a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm10.492 3.008a1.992 1.992 0 1 1-3.984 0 1.992 1.992 0 0 1 3.985 0Z', opacity: 0.4 })));
};
var ForwardRef$g = React.forwardRef(SvgWheelChair);

var SvgWidgets = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 16a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4ZM2 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm12 12a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M13.1 8.071a2 2 0 0 1 0-2.828l2.829-2.829a2 2 0 0 1 2.828 0l2.829 2.829a2 2 0 0 1 0 2.828L18.757 10.9a2 2 0 0 1-2.828 0L13.1 8.07Z' })));
};
var ForwardRef$f = React.forwardRef(SvgWidgets);

var SvgWifiSignalBad = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10.393 18.83 3.036 8.898c-.594-.801-.513-1.93.26-2.56 5.448-4.45 11.96-4.45 17.408 0 .773.63.854 1.759.26 2.56L14.222 18l-.615.83a2 2 0 0 1-3.214 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.47 13.47a.75.75 0 0 1 1.06 0l1.591 1.59 1.591-1.59a.75.75 0 0 1 1.061 1.06l-1.591 1.591 1.591 1.591a.75.75 0 0 1-1.06 1.061l-1.592-1.591-1.59 1.591a.75.75 0 0 1-1.061-1.06l1.59-1.592-1.59-1.59a.75.75 0 0 1 0-1.061Z', clipRule: 'evenodd' })));
};
var ForwardRef$e = React.forwardRef(SvgWifiSignalBad);

var SvgWifiSignalNoInternet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10.393 18.83 3.036 8.898c-.594-.801-.513-1.93.26-2.56 5.448-4.45 11.96-4.45 17.408 0 .773.63.854 1.759.26 2.56L14.222 18l-.615.83a2 2 0 0 1-3.214 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm0 7a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$d = React.forwardRef(SvgWifiSignalNoInternet);

var SvgWifiSignalOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm10.393 20.83-7.357-9.932c-.594-.801-.513-1.93.26-2.56 5.448-4.45 11.96-4.45 17.408 0 .773.63.854 1.759.26 2.56l-7.357 9.932a2 2 0 0 1-3.214 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm10.393 20.83-7.357-9.932c-.594-.801-.513-1.93.26-2.56C4.513 7.342 5.783 6.57 7.082 6.02l10.05 10.05-3.525 4.76a2 2 0 0 1-3.214 0Z' })));
};
var ForwardRef$c = React.forwardRef(SvgWifiSignalOff);

var SvgWifiSignal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10.393 18.83 3.036 8.898c-.594-.801-.513-1.93.26-2.56 5.448-4.45 11.96-4.45 17.408 0 .773.63.854 1.759.26 2.56l-7.357 9.932a2 2 0 0 1-3.214 0Z', opacity: 0.4 })));
};
var ForwardRef$b = React.forwardRef(SvgWifiSignal);

var SvgWifiOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M13.445 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.5 4.75a13.2 13.2 0 0 0-8.939 3.47.75.75 0 1 1-1.012-1.108A14.7 14.7 0 0 1 12.5 3.25a14.7 14.7 0 0 1 9.951 3.862.75.75 0 1 1-1.012 1.107A13.2 13.2 0 0 0 12.5 4.75Zm0 5a8.22 8.22 0 0 0-5.719 2.304.75.75 0 1 1-1.04-1.081A9.72 9.72 0 0 1 12.5 8.25a9.72 9.72 0 0 1 6.759 2.723.75.75 0 1 1-1.04 1.08A8.22 8.22 0 0 0 12.5 9.75Zm0 5a3.24 3.24 0 0 0-2.454 1.119.75.75 0 1 1-1.132-.985A4.74 4.74 0 0 1 12.5 13.25a4.74 4.74 0 0 1 3.585 1.634.75.75 0 1 1-1.131.985A3.24 3.24 0 0 0 12.5 14.75Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M3.561 8.22A.75.75 0 1 1 2.55 7.111a14.782 14.782 0 0 1 3.329-2.295L7.002 5.94a13.268 13.268 0 0 0-3.44 2.278Zm3.22 3.834a.75.75 0 0 1-1.04-1.081 9.743 9.743 0 0 1 3.974-2.32l1.24 1.241a8.225 8.225 0 0 0-4.174 2.16ZM12.5 14.75a3.24 3.24 0 0 0-2.454 1.119.75.75 0 0 1-1.132-.985A4.74 4.74 0 0 1 12.5 13.25c.941 0 1.82.274 2.557.747l1.188 1.187a.75.75 0 0 1-1.291.685A3.24 3.24 0 0 0 12.5 14.75Z' })));
};
var ForwardRef$a = React.forwardRef(SvgWifiOff);

var SvgWifi = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M13 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 4.75a13.2 13.2 0 0 0-8.939 3.47.75.75 0 1 1-1.012-1.108A14.7 14.7 0 0 1 12 3.25a14.7 14.7 0 0 1 9.951 3.862.75.75 0 1 1-1.012 1.107A13.2 13.2 0 0 0 12 4.75Zm0 5a8.22 8.22 0 0 0-5.719 2.304.75.75 0 1 1-1.04-1.081A9.72 9.72 0 0 1 12 8.25a9.72 9.72 0 0 1 6.759 2.723.75.75 0 1 1-1.04 1.08A8.22 8.22 0 0 0 12 9.75Zm0 5a3.24 3.24 0 0 0-2.454 1.119.75.75 0 1 1-1.132-.985A4.74 4.74 0 0 1 12 13.25a4.74 4.74 0 0 1 3.585 1.634.75.75 0 1 1-1.131.985A3.24 3.24 0 0 0 12 14.75Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$9 = React.forwardRef(SvgWifi);

var SvgWirelessCharging = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.45 7.4a.75.75 0 0 1 .15 1.05l-2.1 2.8H14a.75.75 0 0 1 .6 1.2l-3 4a.75.75 0 0 1-1.2-.9l2.1-2.8H10a.75.75 0 0 1-.6-1.2l3-4a.75.75 0 0 1 1.05-.15Z', clipRule: 'evenodd', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.288 7.227a.75.75 0 0 1 0 1.06A5.231 5.231 0 0 0 6.75 12a5.23 5.23 0 0 0 1.538 3.712.75.75 0 1 1-1.061 1.06A6.731 6.731 0 0 1 5.25 12a6.73 6.73 0 0 1 1.977-4.773.75.75 0 0 1 1.06 0Zm7.424 0a.75.75 0 0 1 1.061 0A6.731 6.731 0 0 1 18.75 12a6.731 6.731 0 0 1-1.977 4.773.75.75 0 0 1-1.06-1.06A5.231 5.231 0 0 0 17.25 12a5.23 5.23 0 0 0-1.538-3.712.75.75 0 0 1 0-1.061Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.46 4.398a.75.75 0 0 1 0 1.061 9.219 9.219 0 0 0-2.71 6.54 9.219 9.219 0 0 0 2.71 6.542.75.75 0 0 1-1.061 1.06A10.719 10.719 0 0 1 1.25 12c0-2.969 1.204-5.657 3.149-7.602a.75.75 0 0 1 1.06 0Zm13.08 0a.75.75 0 0 1 1.061 0A10.719 10.719 0 0 1 22.75 12c0 2.968-1.204 5.657-3.149 7.601a.75.75 0 0 1-1.06-1.06A9.218 9.218 0 0 0 21.25 12a9.219 9.219 0 0 0-2.71-6.541.75.75 0 0 1 0-1.06Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$8 = React.forwardRef(SvgWirelessCharging);

var SvgWithdraw = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 3H6a4 4 0 1 0 0 8h12a4 4 0 0 0 0-8Z' }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 19V7H6v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm11.25 15.19-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.293a.75.75 0 0 0-1.06-1.06l-.72.72V11a.75.75 0 1 0-1.5 0v4.19Z', clipRule: 'evenodd' })));
};
var ForwardRef$7 = React.forwardRef(SvgWithdraw);

var SvgYen = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.55 2.4a.75.75 0 0 1 1.05.15l5.4 7.2 5.4-7.2a.75.75 0 0 1 1.2.9l-5.1 6.8H18a.75.75 0 1 1 0 1.5h-5.25v2.5H18a.75.75 0 1 1 0 1.5h-5.25V21a.75.75 0 1 1-1.5 0v-5.25H6a.75.75 0 1 1 0-1.5h5.25v-2.5H6a.75.75 0 1 1 0-1.5h4.5l-5.1-6.8a.75.75 0 0 1 .15-1.05Z', clipRule: 'evenodd' })));
};
var ForwardRef$6 = React.forwardRef(SvgYen);

var SvgYoutube = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M2 7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'm10.447 8.724 4.764 2.381a1 1 0 0 1 0 1.79l-4.764 2.381A1 1 0 0 1 9 14.382V9.618a1 1 0 0 1 1.447-.894Z' })));
};
var ForwardRef$5 = React.forwardRef(SvgYoutube);

var SvgZoomInRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.25 7a.75.75 0 0 1 1.5 0v2.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-2.72 2.72H17a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V7ZM7 13.75a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-2.19l-2.72 2.72a.75.75 0 0 1-1.06-1.06l2.72-2.72H7Z', clipRule: 'evenodd' })));
};
var ForwardRef$4 = React.forwardRef(SvgZoomInRectangle);

var SvgZoomIn = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.25 13a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-3.19l-5.72 5.72a.75.75 0 0 1-1.06-1.06l5.72-5.72H6a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20.53 3.47a.75.75 0 0 1 0 1.06l-5.72 5.72H18a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 1.5 0v3.19l5.72-5.72a.75.75 0 0 1 1.06 0Z', clipRule: 'evenodd', opacity: 0.4 })));
};
var ForwardRef$3 = React.forwardRef(SvgZoomIn);

var SvgZoomOutCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13 8.75a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V9.81l-5.44 5.44H11a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.19l5.44-5.44H13Z', clipRule: 'evenodd' })));
};
var ForwardRef$2 = React.forwardRef(SvgZoomOutCircle);

var SvgZoomOutRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13 8.75a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V9.81l-5.44 5.44H11a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.19l5.44-5.44H13Z', clipRule: 'evenodd' })));
};
var ForwardRef$1 = React.forwardRef(SvgZoomOutRectangle);

var SvgZoomOut = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M13.5 6.75a.75.75 0 0 1 0-1.5H18a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V7.81l-4.72 4.72-1.06-1.06 4.72-4.72H13.5Z', opacity: 0.4 }),
        React__namespace.createElement("path", { fill: 'currentColor', d: 'M10.627 17.123a.75.75 0 1 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 1 1 1.5 0v2.689l4.72-4.72 1.06 1.06-4.719 4.72h2.69Z' })));
};
var ForwardRef = React.forwardRef(SvgZoomOut);

exports.AboutPhone = ForwardRef$au;
exports.Accessibility = ForwardRef$at;
exports.Activity = ForwardRef$as;
exports.AddTo = ForwardRef$ar;
exports.AirPlane = ForwardRef$aq;
exports.AirplaneMode = ForwardRef$ao;
exports.AirplaneModeOff = ForwardRef$ap;
exports.Ambulance = ForwardRef$an;
exports.AppsCircle = ForwardRef$am;
exports.AppsDoubleCircle = ForwardRef$al;
exports.AppsRectangle = ForwardRef$ak;
exports.AppsTripleRectangle = ForwardRef$aj;
exports.ArrowBack = ForwardRef$ag;
exports.ArrowBackCircle = ForwardRef$ai;
exports.ArrowBackRectangle = ForwardRef$ah;
exports.ArrowDown = ForwardRef$ad;
exports.ArrowDownCircle = ForwardRef$af;
exports.ArrowDownRectangle = ForwardRef$ae;
exports.ArrowDropDown = ForwardRef$ac;
exports.ArrowDropLeft = ForwardRef$ab;
exports.ArrowDropRight = ForwardRef$aa;
exports.ArrowDropUp = ForwardRef$a9;
exports.ArrowLeft = ForwardRef$a6;
exports.ArrowLeftCircle = ForwardRef$a8;
exports.ArrowLeftRectangle = ForwardRef$a7;
exports.ArrowMove = ForwardRef$a3;
exports.ArrowMoveCircle = ForwardRef$a5;
exports.ArrowMoveRectangle = ForwardRef$a4;
exports.ArrowReturn = ForwardRef$a0;
exports.ArrowReturnCircle = ForwardRef$a2;
exports.ArrowReturnRectangle = ForwardRef$a1;
exports.ArrowRight = ForwardRef$9Z;
exports.ArrowRightCircle = ForwardRef$9$;
exports.ArrowRightRectangle = ForwardRef$9_;
exports.ArrowSort = ForwardRef$9V;
exports.ArrowSortCircle = ForwardRef$9Y;
exports.ArrowSortRectangle = ForwardRef$9W;
exports.ArrowSortRectangleHalf = ForwardRef$9X;
exports.ArrowThickDown = ForwardRef$9U;
exports.ArrowThickLeft = ForwardRef$9T;
exports.ArrowThickRight = ForwardRef$9S;
exports.ArrowThickUp = ForwardRef$9R;
exports.ArrowTransfer = ForwardRef$9N;
exports.ArrowTransferCircle = ForwardRef$9Q;
exports.ArrowTransferRectangle = ForwardRef$9O;
exports.ArrowTransferRectangleHalf = ForwardRef$9P;
exports.ArrowUp = ForwardRef$9K;
exports.ArrowUpCircle = ForwardRef$9M;
exports.ArrowUpRectangle = ForwardRef$9L;
exports.Atm = ForwardRef$9J;
exports.Auto = ForwardRef$9H;
exports.AutoRotation = ForwardRef$9I;
exports.BadgePercent = ForwardRef$9G;
exports.Bag = ForwardRef$9z;
exports.BagAdd = ForwardRef$9F;
exports.BagCheck = ForwardRef$9E;
exports.BagFavourite = ForwardRef$9D;
exports.BagMinus = ForwardRef$9C;
exports.BagRemove = ForwardRef$9B;
exports.BagSmile = ForwardRef$9A;
exports.Bank = ForwardRef$9y;
exports.BarChart = ForwardRef$9w;
exports.BarChartMiddleLong = ForwardRef$9x;
exports.BarcodeBorder = ForwardRef$9v;
exports.Battery = ForwardRef$9k;
exports.BatteryAlert = ForwardRef$9u;
exports.BatteryCharging = ForwardRef$9s;
exports.BatteryChargingFull = ForwardRef$9t;
exports.BatteryHorizontal = ForwardRef$9n;
exports.BatteryHorizontalCharging = ForwardRef$9r;
exports.BatteryHorizontalFull = ForwardRef$9q;
exports.BatteryHorizontalLowbet = ForwardRef$9p;
exports.BatteryHorizontalSavingMode = ForwardRef$9o;
exports.BatteryLowbet = ForwardRef$9m;
exports.BatterySavingMode = ForwardRef$9l;
exports.Bill = ForwardRef$9j;
exports.Blood = ForwardRef$9h;
exports.BloodPlus = ForwardRef$9i;
exports.Bluetooth = ForwardRef$9e;
exports.BluetoothConnected = ForwardRef$9g;
exports.BluetoothOff = ForwardRef$9f;
exports.Board = ForwardRef$9d;
exports.Bookmark = ForwardRef$9c;
exports.BoxAdd = ForwardRef$9b;
exports.BoxArrowDown = ForwardRef$9a;
exports.BoxArrowUp = ForwardRef$99;
exports.BoxCancel = ForwardRef$98;
exports.BoxDone = ForwardRef$97;
exports.BoxFavorite = ForwardRef$96;
exports.BoxLocation = ForwardRef$95;
exports.BoxMinus = ForwardRef$94;
exports.BoxSearch = ForwardRef$93;
exports.BoxTime = ForwardRef$92;
exports.Briefcase = ForwardRef$90;
exports.BriefcaseTriangular = ForwardRef$91;
exports.CallHospital = ForwardRef$8$;
exports.Camera = ForwardRef$8Y;
exports.CameraOff = ForwardRef$8_;
exports.CameraSwitch = ForwardRef$8Z;
exports.Capsule = ForwardRef$8W;
exports.CapsuleOpen = ForwardRef$8X;
exports.CardAdd = ForwardRef$8V;
exports.CardArrowDown = ForwardRef$8U;
exports.CardArrowLeft = ForwardRef$8T;
exports.CardArrowRight = ForwardRef$8S;
exports.CardArrowUp = ForwardRef$8R;
exports.CardCheck = ForwardRef$8Q;
exports.CardDash = ForwardRef$8P;
exports.CardDot = ForwardRef$8O;
exports.CardMinus = ForwardRef$8N;
exports.CardRemove = ForwardRef$8M;
exports.CardUser = ForwardRef$8L;
exports.CardWithdraw = ForwardRef$8K;
exports.Cardiogram = ForwardRef$8J;
exports.Cargo = ForwardRef$8H;
exports.CargoShip = ForwardRef$8I;
exports.Cart = ForwardRef$8y;
exports.CartAdd = ForwardRef$8G;
exports.CartArrowDown = ForwardRef$8F;
exports.CartArrowUp = ForwardRef$8E;
exports.CartCheck = ForwardRef$8D;
exports.CartHasDash = ForwardRef$8C;
exports.CartMinus = ForwardRef$8B;
exports.CartRemove = ForwardRef$8A;
exports.CartSmile = ForwardRef$8z;
exports.Cast = ForwardRef$8x;
exports.Cctv = ForwardRef$8w;
exports.ChartArrowDown = ForwardRef$8v;
exports.ChartArrowUp = ForwardRef$8u;
exports.ChartHistogram = ForwardRef$8t;
exports.Clipboard = ForwardRef$8i;
exports.ClipboardActivity = ForwardRef$8s;
exports.ClipboardAdd = ForwardRef$8r;
exports.ClipboardCheck = ForwardRef$8q;
exports.ClipboardDelete = ForwardRef$8p;
exports.ClipboardDownload = ForwardRef$8o;
exports.ClipboardFavourite = ForwardRef$8n;
exports.ClipboardList = ForwardRef$8m;
exports.ClipboardMinus = ForwardRef$8l;
exports.ClipboardSearch = ForwardRef$8k;
exports.ClipboardUpload = ForwardRef$8j;
exports.Coin = ForwardRef$8d;
exports.CoinDollar = ForwardRef$8h;
exports.CoinEuro = ForwardRef$8g;
exports.CoinPound = ForwardRef$8f;
exports.CoinYen = ForwardRef$8e;
exports.ColorInversion = ForwardRef$8c;
exports.Computer = ForwardRef$8b;
exports.Coupon = ForwardRef$8a;
exports.Cube = ForwardRef$89;
exports.DarkMode = ForwardRef$88;
exports.Delivery = ForwardRef$81;
exports.DeliveryAirPlane = ForwardRef$87;
exports.DeliveryCancel = ForwardRef$86;
exports.DeliveryConveyor = ForwardRef$85;
exports.DeliveryDone = ForwardRef$84;
exports.DeliveryParachute = ForwardRef$83;
exports.DeliveryTime = ForwardRef$82;
exports.Deposit = ForwardRef$80;
exports.Destination = ForwardRef$7Y;
exports.DestinationDashedThree = ForwardRef$7$;
exports.DestinationDashedTwo = ForwardRef$7_;
exports.DestinationLine = ForwardRef$7Z;
exports.Devices = ForwardRef$7X;
exports.DigitalHealth = ForwardRef$7W;
exports.DirectionDown = ForwardRef$7S;
exports.DirectionDownDouble = ForwardRef$7T;
exports.DirectionDownDoubleCircle = ForwardRef$7V;
exports.DirectionDownDoubleRectangle = ForwardRef$7U;
exports.DirectionLeft = ForwardRef$7O;
exports.DirectionLeftDouble = ForwardRef$7P;
exports.DirectionLeftDoubleCircle = ForwardRef$7R;
exports.DirectionLeftDoubleRectangle = ForwardRef$7Q;
exports.DirectionRight = ForwardRef$7K;
exports.DirectionRightDouble = ForwardRef$7L;
exports.DirectionRightDoubleCircle = ForwardRef$7N;
exports.DirectionRightDoubleRectangle = ForwardRef$7M;
exports.DirectionUp = ForwardRef$7G;
exports.DirectionUpDouble = ForwardRef$7H;
exports.DirectionUpDoubleCircle = ForwardRef$7J;
exports.DirectionUpDoubleRectangle = ForwardRef$7I;
exports.Dna = ForwardRef$7F;
exports.DoNotDisturb = ForwardRef$7E;
exports.Dollar = ForwardRef$7D;
exports.Donate = ForwardRef$7B;
exports.DonateCoin = ForwardRef$7C;
exports.Donation = ForwardRef$7A;
exports.DownloadCircle = ForwardRef$7z;
exports.DownloadRectangle = ForwardRef$7y;
exports.Dribbble = ForwardRef$7x;
exports.Drive = ForwardRef$7w;
exports.Earnings = ForwardRef$7v;
exports.Euro = ForwardRef$7u;
exports.Exchange = ForwardRef$7s;
exports.ExchangeRectangle = ForwardRef$7t;
exports.Eye = ForwardRef$7p;
exports.EyeDropper = ForwardRef$7r;
exports.EyeScannerBorder = ForwardRef$7q;
exports.Facebook = ForwardRef$7n;
exports.FacebookSquare = ForwardRef$7o;
exports.FastDelivery = ForwardRef$7m;
exports.FastTime = ForwardRef$7l;
exports.Favourite = ForwardRef$7k;
exports.Figma = ForwardRef$7j;
exports.FilterBigCircle = ForwardRef$7i;
exports.FilterSmallCircle = ForwardRef$7h;
exports.FingerPrint = ForwardRef$7f;
exports.FingerPrintBorder = ForwardRef$7g;
exports.Fiverr = ForwardRef$7e;
exports.Flag = ForwardRef$7c;
exports.FlagCircle = ForwardRef$7d;
exports.Flash = ForwardRef$78;
exports.FlashAuto = ForwardRef$7b;
exports.FlashLight = ForwardRef$7a;
exports.FlashOff = ForwardRef$79;
exports.GiveBlood = ForwardRef$77;
exports.GivePill = ForwardRef$76;
exports.GlassBroken = ForwardRef$75;
exports.Globe = ForwardRef$73;
exports.GlobeEarth = ForwardRef$74;
exports.Gmail = ForwardRef$72;
exports.Gold = ForwardRef$71;
exports.Google = ForwardRef$6$;
exports.GooglePlus = ForwardRef$70;
exports.Gps = ForwardRef$6X;
exports.GpsCircle = ForwardRef$6_;
exports.GpsOff = ForwardRef$6Z;
exports.GpsSend = ForwardRef$6Y;
exports.GraphicEq = ForwardRef$6W;
exports.Hanger = ForwardRef$6V;
exports.Hangout = ForwardRef$6U;
exports.HealthCare = ForwardRef$6T;
exports.Heart = ForwardRef$6S;
exports.Home = ForwardRef$6n;
exports.HomeAdd = ForwardRef$6R;
exports.HomeArrowDown = ForwardRef$6Q;
exports.HomeArrowUp = ForwardRef$6P;
exports.HomeCelsius = ForwardRef$6O;
exports.HomeCheck = ForwardRef$6N;
exports.HomeCloud = ForwardRef$6M;
exports.HomeDownload = ForwardRef$6L;
exports.HomeEye = ForwardRef$6K;
exports.HomeFavourite = ForwardRef$6J;
exports.HomeFilter = ForwardRef$6I;
exports.HomeFlash = ForwardRef$6H;
exports.HomeFluid = ForwardRef$6G;
exports.HomeGraph = ForwardRef$6F;
exports.HomeInformation = ForwardRef$6E;
exports.HomeLink = ForwardRef$6D;
exports.HomeLocation = ForwardRef$6B;
exports.HomeLocationBig = ForwardRef$6C;
exports.HomeLock = ForwardRef$6A;
exports.HomeMail = ForwardRef$6z;
exports.HomeMinus = ForwardRef$6y;
exports.HomeNotification = ForwardRef$6x;
exports.HomePower = ForwardRef$6w;
exports.HomeRemove = ForwardRef$6v;
exports.HomeSetting = ForwardRef$6u;
exports.HomeShare = ForwardRef$6t;
exports.HomeShield = ForwardRef$6s;
exports.HomeUpload = ForwardRef$6r;
exports.HomeWarning = ForwardRef$6q;
exports.HomeWave = ForwardRef$6p;
exports.HomeWifi = ForwardRef$6o;
exports.Honey = ForwardRef$6m;
exports.Hospital = ForwardRef$6j;
exports.HospitalBed = ForwardRef$6l;
exports.HospitalPanel = ForwardRef$6k;
exports.Hotspot = ForwardRef$6h;
exports.HotspotOff = ForwardRef$6i;
exports.InCircle = ForwardRef$6g;
exports.InRectangle = ForwardRef$6f;
exports.Injection = ForwardRef$6e;
exports.Instagram = ForwardRef$6d;
exports.Internet = ForwardRef$6c;
exports.Invoice = ForwardRef$6a;
exports.InvoicePercent = ForwardRef$6b;
exports.Laptop = ForwardRef$69;
exports.LightMode = ForwardRef$68;
exports.LineChart = ForwardRef$65;
exports.LineChartAscending = ForwardRef$67;
exports.LineChartDescending = ForwardRef$66;
exports.Linkedln = ForwardRef$64;
exports.Location = ForwardRef$5Z;
exports.LocationAdd = ForwardRef$63;
exports.LocationHospital = ForwardRef$62;
exports.LocationMinus = ForwardRef$61;
exports.LocationRemove = ForwardRef$60;
exports.LocationShare = ForwardRef$5$;
exports.LocationUser = ForwardRef$5_;
exports.Lock = ForwardRef$5Y;
exports.Map = ForwardRef$5C;
exports.MapAccordion = ForwardRef$5T;
exports.MapAccordionBelow = ForwardRef$5X;
exports.MapAccordionFlag = ForwardRef$5W;
exports.MapAccordionPin = ForwardRef$5V;
exports.MapAccordionTop = ForwardRef$5U;
exports.MapBig = ForwardRef$5S;
exports.MapCircleGps = ForwardRef$5R;
exports.MapFlag = ForwardRef$5Q;
exports.MapGps = ForwardRef$5N;
exports.MapGpsBelow = ForwardRef$5P;
exports.MapGpsNavigation = ForwardRef$5O;
exports.MapLocation = ForwardRef$5I;
exports.MapLocationAccordion = ForwardRef$5M;
exports.MapLocationBelow = ForwardRef$5L;
exports.MapLocationMiddle = ForwardRef$5K;
exports.MapLocationTop = ForwardRef$5J;
exports.MapPaper = ForwardRef$5H;
exports.MapPeople = ForwardRef$5F;
exports.MapPeopleAccordion = ForwardRef$5G;
exports.MapPin = ForwardRef$5E;
exports.MapSmall = ForwardRef$5D;
exports.Mask = ForwardRef$5B;
exports.MasterCard = ForwardRef$5A;
exports.MaximizeCircle = ForwardRef$5z;
exports.MaximizeRectangle = ForwardRef$5x;
exports.MaximizeRectangleDoted = ForwardRef$5y;
exports.MedicalBook = ForwardRef$5w;
exports.MedicalInformation = ForwardRef$5v;
exports.MedicalService = ForwardRef$5u;
exports.MenuCircleHorizontal = ForwardRef$5t;
exports.MenuCircleVertical = ForwardRef$5s;
exports.MenuHome = ForwardRef$5r;
exports.MenuLineHorizontal = ForwardRef$5p;
exports.MenuLineHorizontalHalf = ForwardRef$5q;
exports.MenuLineVertical = ForwardRef$5n;
exports.MenuLineVerticalHalf = ForwardRef$5o;
exports.MenuUser = ForwardRef$5m;
exports.Messenger = ForwardRef$5l;
exports.MiniStoreCrooked = ForwardRef$5k;
exports.MiniStoreSmile = ForwardRef$5j;
exports.MinimizeCircle = ForwardRef$5i;
exports.MinimizeRectangle = ForwardRef$5g;
exports.MinimizeRectangleDoted = ForwardRef$5h;
exports.Mobile = ForwardRef$5c;
exports.MobileData = ForwardRef$5e;
exports.MobileDataOff = ForwardRef$5f;
exports.MobilePayment = ForwardRef$5d;
exports.Money = ForwardRef$4J;
exports.MoneyAdd = ForwardRef$5b;
exports.MoneyArrowDown = ForwardRef$5a;
exports.MoneyArrowLeft = ForwardRef$59;
exports.MoneyArrowRight = ForwardRef$58;
exports.MoneyArrowUp = ForwardRef$57;
exports.MoneyBag = ForwardRef$50;
exports.MoneyBagCoin = ForwardRef$56;
exports.MoneyBagCoins = ForwardRef$55;
exports.MoneyBagDollar = ForwardRef$54;
exports.MoneyBagEuro = ForwardRef$53;
exports.MoneyBagPound = ForwardRef$52;
exports.MoneyBagYen = ForwardRef$51;
exports.MoneyBigCircle = ForwardRef$4$;
exports.MoneyCheck = ForwardRef$4_;
exports.MoneyCoin = ForwardRef$4Z;
exports.MoneyDash = ForwardRef$4Y;
exports.MoneyDollar = ForwardRef$4X;
exports.MoneyDoubleDot = ForwardRef$4W;
exports.MoneyEuro = ForwardRef$4V;
exports.MoneyFavourite = ForwardRef$4U;
exports.MoneyIncome = ForwardRef$4T;
exports.MoneyMinus = ForwardRef$4S;
exports.MoneyPound = ForwardRef$4R;
exports.MoneyProfitBelow = ForwardRef$4Q;
exports.MoneyProfitTop = ForwardRef$4P;
exports.MoneyRemove = ForwardRef$4O;
exports.MoneySmallCircle = ForwardRef$4N;
exports.MoneyUser = ForwardRef$4M;
exports.MoneyWithdraw = ForwardRef$4L;
exports.MoneyYen = ForwardRef$4K;
exports.Music = ForwardRef$4H;
exports.MusicOff = ForwardRef$4I;
exports.Navigation = ForwardRef$4G;
exports.Netflix = ForwardRef$4F;
exports.NextArrow = ForwardRef$4E;
exports.NightMode = ForwardRef$4D;
exports.Notification = ForwardRef$4A;
exports.NotificationOff = ForwardRef$4C;
exports.NotificationWithCircle = ForwardRef$4B;
exports.OpenBox = ForwardRef$4q;
exports.OpenBoxAdd = ForwardRef$4z;
exports.OpenBoxArrowDown = ForwardRef$4y;
exports.OpenBoxArrowUp = ForwardRef$4x;
exports.OpenBoxDone = ForwardRef$4w;
exports.OpenBoxFavorite = ForwardRef$4v;
exports.OpenBoxMinus = ForwardRef$4u;
exports.OpenBoxRemove = ForwardRef$4t;
exports.OpenBoxSearch = ForwardRef$4s;
exports.OpenBoxTwoSide = ForwardRef$4r;
exports.OutCircle = ForwardRef$4p;
exports.OutRectangle = ForwardRef$4o;
exports.Package = ForwardRef$4b;
exports.PackageBox = ForwardRef$4i;
exports.PackageBoxCube = ForwardRef$4n;
exports.PackageBoxDash = ForwardRef$4m;
exports.PackageBoxFavorite = ForwardRef$4l;
exports.PackageBoxHandle = ForwardRef$4k;
exports.PackageBoxTwoSide = ForwardRef$4j;
exports.PackageCube = ForwardRef$4h;
exports.PackageDashCentre = ForwardRef$4g;
exports.PackageDashLeft = ForwardRef$4f;
exports.PackageDashRight = ForwardRef$4e;
exports.PackageFavorite = ForwardRef$4d;
exports.PackageSun = ForwardRef$4c;
exports.PackagingAdd = ForwardRef$4a;
exports.PackagingArrowDown = ForwardRef$49;
exports.PackagingArrowUp = ForwardRef$48;
exports.PackagingCancel = ForwardRef$47;
exports.PackagingDone = ForwardRef$46;
exports.PackagingFavorite = ForwardRef$45;
exports.PackagingLocation = ForwardRef$43;
exports.PackagingLocationBox = ForwardRef$44;
exports.PackagingMinus = ForwardRef$42;
exports.PackagingSearch = ForwardRef$41;
exports.PackagingTime = ForwardRef$40;
exports.PaperPin = ForwardRef$3$;
exports.Parcel = ForwardRef$3_;
exports.Payoneer = ForwardRef$3Z;
exports.Paypal = ForwardRef$3Y;
exports.People = ForwardRef$3W;
exports.PeopleCircleBelow = ForwardRef$3X;
exports.PhoneLock = ForwardRef$3V;
exports.PieChart = ForwardRef$3U;
exports.PillTablet = ForwardRef$3T;
exports.Pills = ForwardRef$3R;
exports.PillsCapsule = ForwardRef$3S;
exports.Pin = ForwardRef$3P;
exports.PinCircle = ForwardRef$3Q;
exports.Pinterest = ForwardRef$3N;
exports.PinterestCircle = ForwardRef$3O;
exports.Plaster = ForwardRef$3M;
exports.Pound = ForwardRef$3L;
exports.Press = ForwardRef$3K;
exports.PreviousArrow = ForwardRef$3J;
exports.Profit = ForwardRef$3G;
exports.ProfitCart = ForwardRef$3I;
exports.ProfitCoin = ForwardRef$3H;
exports.Pyramid = ForwardRef$3F;
exports.QrScan = ForwardRef$3E;
exports.Receipt = ForwardRef$3D;
exports.Redo = ForwardRef$3z;
exports.RedoCircle = ForwardRef$3C;
exports.RedoRectangleLeft = ForwardRef$3B;
exports.RedoRectangleRight = ForwardRef$3A;
exports.Reload = ForwardRef$3w;
exports.ReloadCircle = ForwardRef$3y;
exports.ReloadRectangle = ForwardRef$3x;
exports.Restart = ForwardRef$3v;
exports.Return = ForwardRef$3s;
exports.ReturnBox = ForwardRef$3u;
exports.ReturnCircle = ForwardRef$3t;
exports.Reward = ForwardRef$3r;
exports.Road = ForwardRef$3l;
exports.RoadHorizontal = ForwardRef$3q;
exports.RoadLocation = ForwardRef$3o;
exports.RoadLocationHorizontal = ForwardRef$3p;
exports.RoadPin = ForwardRef$3m;
exports.RoadPinHorizontal = ForwardRef$3n;
exports.RoofHome = ForwardRef$2S;
exports.RoofHomeAdd = ForwardRef$3k;
exports.RoofHomeArrowDown = ForwardRef$3j;
exports.RoofHomeArrowUp = ForwardRef$3i;
exports.RoofHomeCelsius = ForwardRef$3h;
exports.RoofHomeCheck = ForwardRef$3g;
exports.RoofHomeCloud = ForwardRef$3f;
exports.RoofHomeDownload = ForwardRef$3e;
exports.RoofHomeEye = ForwardRef$3d;
exports.RoofHomeFavourite = ForwardRef$3c;
exports.RoofHomeFilter = ForwardRef$3b;
exports.RoofHomeFlash = ForwardRef$3a;
exports.RoofHomeFluid = ForwardRef$39;
exports.RoofHomeGraph = ForwardRef$38;
exports.RoofHomeInformation = ForwardRef$37;
exports.RoofHomeLink = ForwardRef$36;
exports.RoofHomeLocation = ForwardRef$34;
exports.RoofHomeLocationBig = ForwardRef$35;
exports.RoofHomeLock = ForwardRef$33;
exports.RoofHomeMail = ForwardRef$32;
exports.RoofHomeMinus = ForwardRef$31;
exports.RoofHomeNotification = ForwardRef$30;
exports.RoofHomePower = ForwardRef$2$;
exports.RoofHomeRemove = ForwardRef$2_;
exports.RoofHomeSetting = ForwardRef$2Z;
exports.RoofHomeShare = ForwardRef$2Y;
exports.RoofHomeShield = ForwardRef$2X;
exports.RoofHomeUpload = ForwardRef$2W;
exports.RoofHomeWarning = ForwardRef$2V;
exports.RoofHomeWave = ForwardRef$2U;
exports.RoofHomeWifi = ForwardRef$2T;
exports.RotateLock = ForwardRef$2R;
exports.SafeBox = ForwardRef$2P;
exports.SafeBoxStar = ForwardRef$2Q;
exports.ScreenRotate = ForwardRef$2O;
exports.Screenshot = ForwardRef$2N;
exports.SdStorage = ForwardRef$2M;
exports.Security = ForwardRef$2L;
exports.Sensor = ForwardRef$2K;
exports.Setting = ForwardRef$2J;
exports.Shield = ForwardRef$2I;
exports.Shipping = ForwardRef$2H;
exports.ShoppingBag = ForwardRef$2B;
exports.ShoppingBagAdd = ForwardRef$2G;
exports.ShoppingBagCheck = ForwardRef$2F;
exports.ShoppingBagFavourite = ForwardRef$2E;
exports.ShoppingBagMinus = ForwardRef$2D;
exports.ShoppingBagRemove = ForwardRef$2C;
exports.ShoppingBasket = ForwardRef$2q;
exports.ShoppingBasketAdd = ForwardRef$2A;
exports.ShoppingBasketArrowDown = ForwardRef$2z;
exports.ShoppingBasketArrowOut = ForwardRef$2y;
exports.ShoppingBasketCheck = ForwardRef$2x;
exports.ShoppingBasketDoubleDoor = ForwardRef$2w;
exports.ShoppingBasketFavourite = ForwardRef$2v;
exports.ShoppingBasketMinus = ForwardRef$2u;
exports.ShoppingBasketRemove = ForwardRef$2t;
exports.ShoppingBasketSimple = ForwardRef$2s;
exports.ShoppingBasketSingleDoor = ForwardRef$2r;
exports.ShutDown = ForwardRef$2p;
exports.SignalCellular = ForwardRef$2j;
exports.SignalCellularBad = ForwardRef$2o;
exports.SignalCellularLine = ForwardRef$2n;
exports.SignalCellularNoInternet = ForwardRef$2l;
exports.SignalCellularNoInternetDashed = ForwardRef$2m;
exports.SignalCellularOff = ForwardRef$2k;
exports.Signpost = ForwardRef$2e;
exports.SignpostBig = ForwardRef$2i;
exports.SignpostRight = ForwardRef$2h;
exports.SignpostSmall = ForwardRef$2g;
exports.SignpostTop = ForwardRef$2f;
exports.SimCard = ForwardRef$2d;
exports.Skype = ForwardRef$2c;
exports.Slack = ForwardRef$2b;
exports.SmartAirConditioning = ForwardRef$2a;
exports.SmartDoor = ForwardRef$29;
exports.SmartHumidity = ForwardRef$28;
exports.SmartKey = ForwardRef$26;
exports.SmartKeyDotted = ForwardRef$27;
exports.SmartLight = ForwardRef$25;
exports.SmartLock = ForwardRef$24;
exports.SmartMusic = ForwardRef$23;
exports.SmartPhone = ForwardRef$22;
exports.SmartPlug = ForwardRef$21;
exports.SmartPower = ForwardRef$20;
exports.SmartRemote = ForwardRef$1$;
exports.SmartSpeaker = ForwardRef$1_;
exports.SmartSwitch = ForwardRef$1Z;
exports.SmartThermostat = ForwardRef$1Y;
exports.SmartTv = ForwardRef$1X;
exports.SmartWatch = ForwardRef$1W;
exports.Snapchat = ForwardRef$1V;
exports.SolarPanel = ForwardRef$1U;
exports.Spotify = ForwardRef$1T;
exports.SpringNotes = ForwardRef$1z;
exports.SpringNotesAdd = ForwardRef$1S;
exports.SpringNotesCheck = ForwardRef$1R;
exports.SpringNotesDelete = ForwardRef$1Q;
exports.SpringNotesDownload = ForwardRef$1P;
exports.SpringNotesEdit = ForwardRef$1G;
exports.SpringNotesEditAdd = ForwardRef$1O;
exports.SpringNotesEditCheck = ForwardRef$1N;
exports.SpringNotesEditDelete = ForwardRef$1M;
exports.SpringNotesEditDownload = ForwardRef$1L;
exports.SpringNotesEditFavourite = ForwardRef$1K;
exports.SpringNotesEditMinus = ForwardRef$1J;
exports.SpringNotesEditSearch = ForwardRef$1I;
exports.SpringNotesEditUpload = ForwardRef$1H;
exports.SpringNotesFavourite = ForwardRef$1F;
exports.SpringNotesList = ForwardRef$1E;
exports.SpringNotesRemove = ForwardRef$1D;
exports.SpringNotesSearch = ForwardRef$1C;
exports.SpringNotesUpload = ForwardRef$1B;
exports.SpringNotesWriteEdit = ForwardRef$1A;
exports.StandbyMode = ForwardRef$1y;
exports.Stethoscope = ForwardRef$1x;
exports.Storage = ForwardRef$1w;
exports.Store = ForwardRef$1u;
exports.StoreSmile = ForwardRef$1v;
exports.Switch = ForwardRef$1t;
exports.Syrup = ForwardRef$1s;
exports.Tablet = ForwardRef$1r;
exports.Tag = ForwardRef$1p;
exports.TagCrooked = ForwardRef$1q;
exports.TaskCheckPaper = ForwardRef$1o;
exports.Telegram = ForwardRef$1n;
exports.TestTube = ForwardRef$1m;
exports.Thermometer = ForwardRef$1l;
exports.Tiktok = ForwardRef$1k;
exports.Tooth = ForwardRef$1j;
exports.Transfer = ForwardRef$1i;
exports.Transfusion = ForwardRef$1h;
exports.Trolley = ForwardRef$1f;
exports.TrolleyCrooked = ForwardRef$1g;
exports.Turn = ForwardRef$1b;
exports.TurnLeft = ForwardRef$1e;
exports.TurnRight = ForwardRef$1d;
exports.TurnTwoSide = ForwardRef$1c;
exports.Twitter = ForwardRef$18;
exports.TwitterPlus = ForwardRef$1a;
exports.TwitterSparrow = ForwardRef$19;
exports.UTurnLeft = ForwardRef$17;
exports.UTurnRight = ForwardRef$16;
exports.Umbrella = ForwardRef$15;
exports.Undo = ForwardRef$13;
exports.UndoCircle = ForwardRef$14;
exports.Unlock = ForwardRef$12;
exports.UploadCircle = ForwardRef$11;
exports.UploadRectangle = ForwardRef$10;
exports.Usb = ForwardRef$$;
exports.User = ForwardRef$O;
exports.UserAdd = ForwardRef$_;
exports.UserBlock = ForwardRef$Z;
exports.UserCircle = ForwardRef$U;
exports.UserCircleAdd = ForwardRef$Y;
exports.UserCircleBlock = ForwardRef$X;
exports.UserCircleMinus = ForwardRef$W;
exports.UserCircleRemove = ForwardRef$V;
exports.UserCommunity = ForwardRef$T;
exports.UserMinus = ForwardRef$S;
exports.UserPolygon = ForwardRef$R;
exports.UserRectangle = ForwardRef$Q;
exports.UserRemove = ForwardRef$P;
exports.UsersDouble = ForwardRef$N;
exports.UsersTriple = ForwardRef$M;
exports.VibrateMode = ForwardRef$L;
exports.Video = ForwardRef$J;
exports.VideoOff = ForwardRef$K;
exports.View = ForwardRef$G;
exports.ViewOff = ForwardRef$I;
exports.ViewPrivacy = ForwardRef$H;
exports.Wallet = ForwardRef$k;
exports.WalletAdd = ForwardRef$E;
exports.WalletAddClose = ForwardRef$F;
exports.WalletArrowDown = ForwardRef$C;
exports.WalletArrowDownClose = ForwardRef$D;
exports.WalletArrowLeft = ForwardRef$A;
exports.WalletArrowLeftClose = ForwardRef$B;
exports.WalletArrowRight = ForwardRef$y;
exports.WalletArrowRightClose = ForwardRef$z;
exports.WalletArrowUp = ForwardRef$w;
exports.WalletArrowUpClose = ForwardRef$x;
exports.WalletCheck = ForwardRef$u;
exports.WalletCheckClose = ForwardRef$v;
exports.WalletClose = ForwardRef$t;
exports.WalletMinus = ForwardRef$r;
exports.WalletMinusClose = ForwardRef$s;
exports.WalletOpenLeft = ForwardRef$q;
exports.WalletOpenRight = ForwardRef$p;
exports.WalletRemove = ForwardRef$n;
exports.WalletRemoveClose = ForwardRef$o;
exports.WalletUser = ForwardRef$l;
exports.WalletUserClose = ForwardRef$m;
exports.Warehouse = ForwardRef$j;
exports.Whatsapp = ForwardRef$i;
exports.WheelChair = ForwardRef$g;
exports.WheelChairHuman = ForwardRef$h;
exports.Widgets = ForwardRef$f;
exports.Wifi = ForwardRef$9;
exports.WifiOff = ForwardRef$a;
exports.WifiSignal = ForwardRef$b;
exports.WifiSignalBad = ForwardRef$e;
exports.WifiSignalNoInternet = ForwardRef$d;
exports.WifiSignalOff = ForwardRef$c;
exports.WirelessCharging = ForwardRef$8;
exports.Withdraw = ForwardRef$7;
exports.Yen = ForwardRef$6;
exports.Youtube = ForwardRef$5;
exports.ZoomIn = ForwardRef$3;
exports.ZoomInRectangle = ForwardRef$4;
exports.ZoomOut = ForwardRef;
exports.ZoomOutCircle = ForwardRef$2;
exports.ZoomOutRectangle = ForwardRef$1;
