import * as React from 'react';
import { forwardRef } from 'react';

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
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 14, height: 20, x: 5, y: 2, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, rx: 3 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M11 19h2M12 7v4' }),
        React.createElement("circle", { cx: 12, cy: 14, r: 1, fill: 'currentColor' })));
};
var ForwardRef$au = forwardRef(SvgAboutPhone);

var SvgAccessibility = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M13.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M5 6c5.424 1.337 8.4 1.33 14 0' }),
        React.createElement("path", { fill: 'currentColor', d: 'M10 12V7h4v5h-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm11 10-1 8m3-8 1 8' })));
};
var ForwardRef$at = forwardRef(SvgAccessibility);

var SvgActivity = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 12h2l2-4 4 9 2-5h2' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z' })));
};
var ForwardRef$as = forwardRef(SvgActivity);

var SvgAddTo = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M4 12v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7m-8-4h7.5a1 1 0 0 1 .8.4l1.5 2A1 1 0 0 1 21 12h-5.5a1 1 0 0 1-.8-.4L12 8Zm0 0H4.5a1 1 0 0 0-.8.4l-1.5 2A1 1 0 0 0 3 12h5.5a1 1 0 0 0 .8-.4L12 8Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm14 4-1.293 1.293a1 1 0 0 1-1.414 0L10 4m2-2v3' })));
};
var ForwardRef$ar = forwardRef(SvgAddTo);

var SvgAirPlane = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'm16.684 20.306-1.887-2.564a2.029 2.029 0 0 1-.402-1.204v-2.6c0-.599.536-1.084 1.198-1.084H19.8c1.203 0 1.655-1.428.635-2.006l-4.914-2.784c-.7-.396-1.126-1.092-1.126-1.84V4.395a2.395 2.395 0 0 0-4.79 0v1.829c0 .748-.426 1.444-1.126 1.84l-4.914 2.784c-1.02.578-.568 2.006.635 2.006h4.207c.662 0 1.198.486 1.198 1.085v2.599c0 .428-.14.847-.402 1.204l-1.887 2.564c-.681.927.433 2.071 1.532 1.573l2.08-.943a2.619 2.619 0 0 1 2.143 0l2.081.943c1.098.498 2.213-.646 1.532-1.573Z' })));
};
var ForwardRef$aq = forwardRef(SvgAirPlane);

var SvgAirplaneModeOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M21 21 3 3m11.395 11.395v2.143c0 .428.14.847.402 1.204l1.887 2.564c.681.927-.434 2.071-1.532 1.573l-2.08-.943a2.619 2.619 0 0 0-2.143 0l-2.081.943c-1.099.498-2.213-.646-1.532-1.573l1.887-2.564c.262-.357.402-.776.402-1.204v-2.6c0-.599-.536-1.084-1.198-1.084H4.2c-1.203 0-1.655-1.428-.635-2.006l4.65-2.634m1.39-2.61V4.396a2.395 2.395 0 0 1 4.79 0v1.829c0 .748.426 1.444 1.126 1.84l4.914 2.784c1.02.578.569 2.006-.635 2.006h-2.946' })));
};
var ForwardRef$ap = forwardRef(SvgAirplaneModeOff);

var SvgAirplaneMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'm16.684 20.306-1.887-2.564a2.029 2.029 0 0 1-.402-1.204v-2.6c0-.599.536-1.084 1.198-1.084H19.8c1.203 0 1.655-1.428.635-2.006l-4.914-2.784c-.7-.396-1.126-1.092-1.126-1.84V4.395a2.395 2.395 0 0 0-4.79 0v1.829c0 .748-.426 1.444-1.126 1.84l-4.914 2.784c-1.02.578-.568 2.006.635 2.006h4.207c.662 0 1.198.486 1.198 1.085v2.599c0 .428-.14.847-.402 1.204l-1.887 2.564c-.681.927.433 2.071 1.532 1.573l2.08-.943a2.619 2.619 0 0 1 2.143 0l2.081.943c1.098.498 2.213-.646 1.532-1.573Z' })));
};
var ForwardRef$ao = forwardRef(SvgAirplaneMode);

var SvgAmbulance = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M14 19V7m0 12h2m-2 0H9m5-12a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a4.002 4.002 0 0 0 3.004 3.875M14 7h3.21a2 2 0 0 1 1.367.54l2.79 2.617a2 2 0 0 1 .633 1.46V17a2 2 0 0 1-2 2m0 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m-7 0a2 2 0 1 1-3.996-.125M9 19a2 2 0 0 0-3.996-.125' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 8v4m4-4v4m0-2H6' })));
};
var ForwardRef$an = forwardRef(SvgAmbulance);

var SvgAppsCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M9.25 7A2.25 2.25 0 0 1 7 9.25v1.5A3.75 3.75 0 0 0 10.75 7h-1.5ZM7 9.25A2.25 2.25 0 0 1 4.75 7h-1.5A3.75 3.75 0 0 0 7 10.75v-1.5ZM4.75 7A2.25 2.25 0 0 1 7 4.75v-1.5A3.75 3.75 0 0 0 3.25 7h1.5ZM7 4.75A2.25 2.25 0 0 1 9.25 7h1.5A3.75 3.75 0 0 0 7 3.25v1.5ZM19.25 17A2.25 2.25 0 0 1 17 19.25v1.5A3.75 3.75 0 0 0 20.75 17h-1.5ZM17 19.25A2.25 2.25 0 0 1 14.75 17h-1.5A3.75 3.75 0 0 0 17 20.75v-1.5ZM14.75 17A2.25 2.25 0 0 1 17 14.75v-1.5A3.75 3.75 0 0 0 13.25 17h1.5ZM17 14.75A2.25 2.25 0 0 1 19.25 17h1.5A3.75 3.75 0 0 0 17 13.25v1.5ZM9.25 17A2.25 2.25 0 0 1 7 19.25v1.5A3.75 3.75 0 0 0 10.75 17h-1.5ZM7 19.25A2.25 2.25 0 0 1 4.75 17h-1.5A3.75 3.75 0 0 0 7 20.75v-1.5ZM4.75 17A2.25 2.25 0 0 1 7 14.75v-1.5A3.75 3.75 0 0 0 3.25 17h1.5ZM7 14.75A2.25 2.25 0 0 1 9.25 17h1.5A3.75 3.75 0 0 0 7 13.25v1.5ZM19.25 7A2.25 2.25 0 0 1 17 9.25v1.5A3.75 3.75 0 0 0 20.75 7h-1.5ZM17 9.25A2.25 2.25 0 0 1 14.75 7h-1.5A3.75 3.75 0 0 0 17 10.75v-1.5ZM14.75 7A2.25 2.25 0 0 1 17 4.75v-1.5A3.75 3.75 0 0 0 13.25 7h1.5ZM17 4.75A2.25 2.25 0 0 1 19.25 7h1.5A3.75 3.75 0 0 0 17 3.25v1.5Z' })));
};
var ForwardRef$am = forwardRef(SvgAppsCircle);

var SvgAppsDoubleCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M9.25 7A2.25 2.25 0 0 1 7 9.25v1.5A3.75 3.75 0 0 0 10.75 7h-1.5ZM7 9.25A2.25 2.25 0 0 1 4.75 7h-1.5A3.75 3.75 0 0 0 7 10.75v-1.5ZM4.75 7A2.25 2.25 0 0 1 7 4.75v-1.5A3.75 3.75 0 0 0 3.25 7h1.5ZM7 4.75A2.25 2.25 0 0 1 9.25 7h1.5A3.75 3.75 0 0 0 7 3.25v1.5ZM19.25 17A2.25 2.25 0 0 1 17 19.25v1.5A3.75 3.75 0 0 0 20.75 17h-1.5ZM17 19.25A2.25 2.25 0 0 1 14.75 17h-1.5A3.75 3.75 0 0 0 17 20.75v-1.5ZM14.75 17A2.25 2.25 0 0 1 17 14.75v-1.5A3.75 3.75 0 0 0 13.25 17h1.5ZM17 14.75A2.25 2.25 0 0 1 19.25 17h1.5A3.75 3.75 0 0 0 17 13.25v1.5Zm-1-10h2v-1.5h-2v1.5ZM19.25 6v2h1.5V6h-1.5ZM18 9.25h-2v1.5h2v-1.5ZM14.75 8V6h-1.5v2h1.5ZM16 9.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 16 10.75v-1.5ZM19.25 8c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 8h-1.5ZM18 4.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 3.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 13.25 6h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM6 14.75h2v-1.5H6v1.5ZM9.25 16v2h1.5v-2h-1.5ZM8 19.25H6v1.5h2v-1.5ZM4.75 18v-2h-1.5v2h1.5ZM6 19.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 6 20.75v-1.5ZM9.25 18c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 10.75 18h-1.5ZM8 14.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 8 13.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 3.25 16h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z' })));
};
var ForwardRef$al = forwardRef(SvgAppsDoubleCircle);

var SvgAppsRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16 4.75h2v-1.5h-2v1.5ZM19.25 6v2h1.5V6h-1.5ZM18 9.25h-2v1.5h2v-1.5ZM14.75 8V6h-1.5v2h1.5ZM16 9.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 16 10.75v-1.5ZM19.25 8c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 8h-1.5ZM18 4.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 3.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 13.25 6h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM6 14.75h2v-1.5H6v1.5ZM9.25 16v2h1.5v-2h-1.5ZM8 19.25H6v1.5h2v-1.5ZM4.75 18v-2h-1.5v2h1.5ZM6 19.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 6 20.75v-1.5ZM9.25 18c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 10.75 18h-1.5ZM8 14.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 8 13.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 3.25 16h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm0-8.5h2v-1.5H6v1.5ZM9.25 6v2h1.5V6h-1.5ZM8 9.25H6v1.5h2v-1.5ZM4.75 8V6h-1.5v2h1.5ZM6 9.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 6 10.75v-1.5ZM9.25 8c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 10.75 8h-1.5ZM8 4.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 8 3.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 3.25 6h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm10 11.5h2v-1.5h-2v1.5ZM19.25 16v2h1.5v-2h-1.5ZM18 19.25h-2v1.5h2v-1.5ZM14.75 18v-2h-1.5v2h1.5ZM16 19.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 16 20.75v-1.5ZM19.25 18c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 18h-1.5ZM18 14.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 13.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 13.25 16h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z' })));
};
var ForwardRef$ak = forwardRef(SvgAppsRectangle);

var SvgAppsTripleRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M19.25 17A2.25 2.25 0 0 1 17 19.25v1.5A3.75 3.75 0 0 0 20.75 17h-1.5ZM17 19.25A2.25 2.25 0 0 1 14.75 17h-1.5A3.75 3.75 0 0 0 17 20.75v-1.5ZM14.75 17A2.25 2.25 0 0 1 17 14.75v-1.5A3.75 3.75 0 0 0 13.25 17h1.5ZM17 14.75A2.25 2.25 0 0 1 19.25 17h1.5A3.75 3.75 0 0 0 17 13.25v1.5Zm-1-10h2v-1.5h-2v1.5ZM19.25 6v2h1.5V6h-1.5ZM18 9.25h-2v1.5h2v-1.5ZM14.75 8V6h-1.5v2h1.5ZM16 9.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 16 10.75v-1.5ZM19.25 8c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 8h-1.5ZM18 4.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 3.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 13.25 6h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM6 4.75h2v-1.5H6v1.5ZM9.25 6v2h1.5V6h-1.5ZM8 9.25H6v1.5h2v-1.5ZM4.75 8V6h-1.5v2h1.5ZM6 9.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 6 10.75v-1.5ZM9.25 8c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 10.75 8h-1.5ZM8 4.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 8 3.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 3.25 6h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm0 11.5h2v-1.5H6v1.5ZM9.25 16v2h1.5v-2h-1.5ZM8 19.25H6v1.5h2v-1.5ZM4.75 18v-2h-1.5v2h1.5ZM6 19.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 6 20.75v-1.5ZM9.25 18c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 10.75 18h-1.5ZM8 14.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 8 13.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 3.25 16h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z' })));
};
var ForwardRef$aj = forwardRef(SvgAppsTripleRectangle);

var SvgArrowBackCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { fill: 'currentColor', d: 'M9.47 6.47a.75.75 0 1 1 1.06 1.06L9.47 6.47ZM8 9l-.53.53a.75.75 0 0 1 0-1.06L8 9Zm2.53 1.47a.75.75 0 1 1-1.06 1.06l1.06-1.06ZM8 15.75a.75.75 0 0 1 0-1.5v1.5Zm2.53-8.22-2 2-1.06-1.06 2-2 1.06 1.06Zm-2 .94 2 2-1.06 1.06-2-2 1.06-1.06ZM8 8.25h5v1.5H8v-1.5Zm5 7.5H8v-1.5h5v1.5ZM16.75 12A3.75 3.75 0 0 1 13 15.75v-1.5A2.25 2.25 0 0 0 15.25 12h1.5ZM13 8.25A3.75 3.75 0 0 1 16.75 12h-1.5A2.25 2.25 0 0 0 13 9.75v-1.5Z' })));
};
var ForwardRef$ai = forwardRef(SvgArrowBackCircle);

var SvgArrowBackRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M9.47 6.47a.75.75 0 1 1 1.06 1.06L9.47 6.47ZM8 9l-.53.53a.75.75 0 0 1 0-1.06L8 9Zm2.53 1.47a.75.75 0 1 1-1.06 1.06l1.06-1.06ZM8 15.75a.75.75 0 0 1 0-1.5v1.5Zm2.53-8.22-2 2-1.06-1.06 2-2 1.06 1.06Zm-2 .94 2 2-1.06 1.06-2-2 1.06-1.06ZM8 8.25h5v1.5H8v-1.5Zm5 7.5H8v-1.5h5v1.5ZM16.75 12A3.75 3.75 0 0 1 13 15.75v-1.5A2.25 2.25 0 0 0 15.25 12h1.5ZM13 8.25A3.75 3.75 0 0 1 16.75 12h-1.5A2.25 2.25 0 0 0 13 9.75v-1.5Z' })));
};
var ForwardRef$ah = forwardRef(SvgArrowBackRectangle);

var SvgArrowBack = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm5 8-.45.6a.75.75 0 0 1 0-1.2L5 8Zm0 8.75a.75.75 0 0 1 0-1.5v1.5ZM8.55 4.4a.75.75 0 1 1 .9 1.2l-.9-1.2Zm.9 6a.75.75 0 1 1-.9 1.2l.9-1.2ZM5 7.25h10v1.5H5v-1.5Zm10 9.5H5v-1.5h10v1.5ZM4.55 7.4l4-3 .9 1.2-4 3-.9-1.2Zm.9 0 4 3-.9 1.2-4-3 .9-1.2Zm14.3 4.6A4.75 4.75 0 0 1 15 16.75v-1.5A3.25 3.25 0 0 0 18.25 12h1.5ZM15 7.25A4.75 4.75 0 0 1 19.75 12h-1.5A3.25 3.25 0 0 0 15 8.75v-1.5Z' })));
};
var ForwardRef$ag = forwardRef(SvgArrowBack);

var SvgArrowDownCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm9 13 3 3m0 0 3-3m-3 3V8' })));
};
var ForwardRef$af = forwardRef(SvgArrowDownCircle);

var SvgArrowDownRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm3 11 3 3m0 0 3-3m-3 3V8' })));
};
var ForwardRef$ae = forwardRef(SvgArrowDownRectangle);

var SvgArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm8 14 4 4m0 0 4-4m-4 4V6' })));
};
var ForwardRef$ad = forwardRef(SvgArrowDown);

var SvgArrowDropDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M15.518 7H8.482c-1.544 0-2.505 1.674-1.727 3.008l3.517 6.03c.772 1.323 2.684 1.323 3.456 0l3.518-6.03C18.023 8.674 17.061 7 15.518 7Z' })));
};
var ForwardRef$ac = forwardRef(SvgArrowDropDown);

var SvgArrowDropLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M17 15.518V8.482c0-1.544-1.674-2.505-3.008-1.727l-6.03 3.517c-1.323.772-1.323 2.684 0 3.456l6.03 3.518c1.334.777 3.008-.184 3.008-1.728Z' })));
};
var ForwardRef$ab = forwardRef(SvgArrowDropLeft);

var SvgArrowDropRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M7 15.518V8.482c0-1.544 1.674-2.505 3.008-1.727l6.03 3.517c1.323.772 1.323 2.684 0 3.456l-6.03 3.518C8.674 18.023 7 17.061 7 15.518Z' })));
};
var ForwardRef$aa = forwardRef(SvgArrowDropRight);

var SvgArrowDropUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8.482 17h7.036c1.543 0 2.505-1.674 1.727-3.008l-3.517-6.03c-.772-1.323-2.684-1.323-3.456 0l-3.517 6.03C5.977 15.326 6.938 17 8.482 17Z' })));
};
var ForwardRef$a9 = forwardRef(SvgArrowDropUp);

var SvgArrowLeftCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm11 15-3-3m0 0 3-3m-3 3h8' })));
};
var ForwardRef$a8 = forwardRef(SvgArrowLeftCircle);

var SvgArrowLeftRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-7 13-3-3m0 0 3-3m-3 3h8' })));
};
var ForwardRef$a7 = forwardRef(SvgArrowLeftRectangle);

var SvgArrowLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm10 8-4 4m0 0 4 4m-4-4h12' })));
};
var ForwardRef$a6 = forwardRef(SvgArrowLeft);

var SvgArrowMoveCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Zm11 4-2 2m0 0-2-2m2 2V6m0 0 2 2m-2-2-2 2m-2 6-2-2m0 0 2-2m-2 2h12m0 0-2 2m2-2-2-2' })));
};
var ForwardRef$a5 = forwardRef(SvgArrowMoveCircle);

var SvgArrowMoveRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-4 14-2 2m0 0-2-2m2 2V6m0 0 2 2m-2-2-2 2m-2 6-2-2m0 0 2-2m-2 2h12m0 0-2 2m2-2-2-2' })));
};
var ForwardRef$a4 = forwardRef(SvgArrowMoveRectangle);

var SvgArrowMove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm15 18-3 3m0 0-3-3m3 3V3m0 0 3 3m-3-3L9 6m-3 9-3-3m0 0 3-3m-3 3h18m0 0-3 3m3-3-3-3' })));
};
var ForwardRef$a3 = forwardRef(SvgArrowMove);

var SvgArrowReturnCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { fill: 'currentColor', d: 'M14.53 6.47a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM16 9l.53.53a.75.75 0 0 0 0-1.06L16 9Zm-2.53 1.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM16 15.75a.75.75 0 0 0 0-1.5v1.5Zm-2.53-8.22 2 2 1.06-1.06-2-2-1.06 1.06Zm2 .94-2 2 1.06 1.06 2-2-1.06-1.06Zm.53-.22h-5v1.5h5v-1.5Zm-5 7.5h5v-1.5h-5v1.5ZM7.25 12A3.75 3.75 0 0 0 11 15.75v-1.5A2.25 2.25 0 0 1 8.75 12h-1.5ZM11 8.25A3.75 3.75 0 0 0 7.25 12h1.5A2.25 2.25 0 0 1 11 9.75v-1.5Z' })));
};
var ForwardRef$a2 = forwardRef(SvgArrowReturnCircle);

var SvgArrowReturnRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M14.53 6.47a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM16 9l.53.53a.75.75 0 0 0 0-1.06L16 9Zm-2.53 1.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM16 15.75a.75.75 0 0 0 0-1.5v1.5Zm-2.53-8.22 2 2 1.06-1.06-2-2-1.06 1.06Zm2 .94-2 2 1.06 1.06 2-2-1.06-1.06Zm.53-.22h-5v1.5h5v-1.5Zm-5 7.5h5v-1.5h-5v1.5ZM7.25 12A3.75 3.75 0 0 0 11 15.75v-1.5A2.25 2.25 0 0 1 8.75 12h-1.5ZM11 8.25A3.75 3.75 0 0 0 7.25 12h1.5A2.25 2.25 0 0 1 11 9.75v-1.5Z' })));
};
var ForwardRef$a1 = forwardRef(SvgArrowReturnRectangle);

var SvgArrowReturn = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm19 8 .45.6a.75.75 0 0 0 0-1.2L19 8Zm0 8.75a.75.75 0 0 0 0-1.5v1.5ZM15.45 4.4a.75.75 0 1 0-.9 1.2l.9-1.2Zm-.9 6a.75.75 0 1 0 .9 1.2l-.9-1.2ZM19 7.25H9v1.5h10v-1.5Zm-10 9.5h10v-1.5H9v1.5ZM19.45 7.4l-4-3-.9 1.2 4 3 .9-1.2Zm-.9 0-4 3 .9 1.2 4-3-.9-1.2ZM4.25 12A4.75 4.75 0 0 0 9 16.75v-1.5A3.25 3.25 0 0 1 5.75 12h-1.5ZM9 7.25A4.75 4.75 0 0 0 4.25 12h1.5A3.25 3.25 0 0 1 9 8.75v-1.5Z' })));
};
var ForwardRef$a0 = forwardRef(SvgArrowReturn);

var SvgArrowRightCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm13 15 3-3m0 0-3-3m3 3H8' })));
};
var ForwardRef$9$ = forwardRef(SvgArrowRightCircle);

var SvgArrowRightRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm7 13 3-3m0 0-3-3m3 3H8' })));
};
var ForwardRef$9_ = forwardRef(SvgArrowRightRectangle);

var SvgArrowRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm14 16 4-4m0 0-4-4m4 4H6' })));
};
var ForwardRef$9Z = forwardRef(SvgArrowRight);

var SvgArrowSortCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { fill: 'currentColor', d: 'M7.47 9.47a.75.75 0 1 0 1.06 1.06L7.47 9.47ZM10 8h.75a.75.75 0 0 0-1.28-.53L10 8Zm-.75 8a.75.75 0 0 0 1.5 0h-1.5Zm-.72-5.47 2-2-1.06-1.06-2 2 1.06 1.06ZM9.25 8v8h1.5V8h-1.5Zm7.28 6.53a.75.75 0 1 0-1.06-1.06l1.06 1.06ZM14 16h-.75a.75.75 0 0 0 1.28.53L14 16Zm.75-8a.75.75 0 0 0-1.5 0h1.5Zm.72 5.47-2 2 1.06 1.06 2-2-1.06-1.06ZM14.75 16V8h-1.5v8h1.5Z' })));
};
var ForwardRef$9Y = forwardRef(SvgArrowSortCircle);

var SvgArrowSortRectangleHalf = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M7.47 9.47a.75.75 0 1 0 1.06 1.06L7.47 9.47ZM10 8h.75a.75.75 0 0 0-1.28-.53L10 8Zm-.75 8a.75.75 0 0 0 1.5 0h-1.5Zm-.72-5.47 2-2-1.06-1.06-2 2 1.06 1.06ZM9.25 8v8h1.5V8h-1.5Zm7.28 6.53a.75.75 0 1 0-1.06-1.06l1.06 1.06ZM14 16h-.75a.75.75 0 0 0 1.28.53L14 16Zm.75-8a.75.75 0 0 0-1.5 0h1.5Zm.72 5.47-2 2 1.06 1.06 2-2-1.06-1.06ZM14.75 16V8h-1.5v8h1.5Z' })));
};
var ForwardRef$9X = forwardRef(SvgArrowSortRectangleHalf);

var SvgArrowSortRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4ZM7 10l2-2m0 0 2 2M9 8v8m8-2-2 2m0 0-2-2m2 2V8' })));
};
var ForwardRef$9W = forwardRef(SvgArrowSortRectangle);

var SvgArrowSort = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm5 9 3-3m0 0 3 3M8 6v12m11-3-3 3m0 0-3-3m3 3V6' })));
};
var ForwardRef$9V = forwardRef(SvgArrowSort);

var SvgArrowThickDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15 13h-.75c0 .414.336.75.75.75V13Zm-6 0v.75a.75.75 0 0 0 .75-.75H9Zm-2.549 1.659.565-.494-.565.494Zm11.098 0-.565-.494.565.494ZM15.75 13V5h-1.5v8h1.5ZM13 2.25h-2v1.5h2v-1.5ZM8.25 5v8h1.5V5h-1.5ZM9 12.25H7.204v1.5H9v-1.5Zm-3.113 2.902 4.043 4.622 1.13-.988-4.044-4.621-1.13.987Zm8.183 4.622 4.043-4.622-1.129-.987-4.043 4.62 1.129.989Zm2.726-7.524H15v1.5h1.796v-1.5ZM9.93 19.774a2.75 2.75 0 0 0 4.14 0l-1.13-.988a1.25 1.25 0 0 1-1.88 0l-1.13.988ZM7.204 12.25c-1.504 0-2.307 1.77-1.317 2.902l1.129-.987a.25.25 0 0 1 .188-.415v-1.5ZM11 2.25A2.75 2.75 0 0 0 8.25 5h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm7.113 12.902c.99-1.131.187-2.902-1.317-2.902v1.5a.25.25 0 0 1 .188.415l1.13.987ZM15.75 5A2.75 2.75 0 0 0 13 2.25v1.5c.69 0 1.25.56 1.25 1.25h1.5Z' })));
};
var ForwardRef$9U = forwardRef(SvgArrowThickDown);

var SvgArrowThickLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M11 9v.75a.75.75 0 0 1-.75-.75H11Zm0 6h-.75a.75.75 0 0 1 .75-.75V15Zm-1.659 2.549.494-.565-.494.565Zm0-11.098.494.565-.494-.565ZM11 8.25h8v1.5h-8v-1.5ZM21.75 11v2h-1.5v-2h1.5ZM19 15.75h-8v-1.5h8v1.5ZM11.75 15v1.796h-1.5V15h1.5Zm-2.902 3.113L4.226 14.07l.988-1.13 4.621 4.044-.987 1.13ZM4.226 9.93l4.622-4.043.987 1.129-4.621 4.043-.988-1.129Zm7.524-2.726V9h-1.5V7.204h1.5ZM4.226 14.07a2.75 2.75 0 0 1 0-4.14l.988 1.13a1.25 1.25 0 0 0 0 1.88l-.988 1.13Zm7.524 2.726c0 1.504-1.77 2.307-2.902 1.317l.987-1.129a.25.25 0 0 0 .415-.188h1.5Zm10-3.796A2.75 2.75 0 0 1 19 15.75v-1.5c.69 0 1.25-.56 1.25-1.25h1.5ZM8.848 5.887c1.131-.99 2.902-.187 2.902 1.317h-1.5a.25.25 0 0 0-.415-.188l-.987-1.13ZM19 8.25A2.75 2.75 0 0 1 21.75 11h-1.5c0-.69-.56-1.25-1.25-1.25v-1.5Z' })));
};
var ForwardRef$9T = forwardRef(SvgArrowThickLeft);

var SvgArrowThickRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M13 9v.75a.75.75 0 0 0 .75-.75H13Zm0 6h.75a.75.75 0 0 0-.75-.75V15Zm1.659 2.549-.494-.565.494.565Zm0-11.098-.494.565.494-.565ZM13 8.25H5v1.5h8v-1.5ZM2.25 11v2h1.5v-2h-1.5ZM5 15.75h8v-1.5H5v1.5Zm7.25-.75v1.796h1.5V15h-1.5Zm2.902 3.113 4.622-4.043-.988-1.13-4.621 4.044.987 1.13Zm4.622-8.183-4.622-4.043-.987 1.129 4.62 4.043.989-1.129ZM12.25 7.204V9h1.5V7.204h-1.5Zm7.524 6.866a2.75 2.75 0 0 0 0-4.14l-.988 1.13a1.25 1.25 0 0 1 0 1.88l.988 1.13Zm-7.524 2.726c0 1.504 1.77 2.307 2.902 1.317l-.987-1.129a.25.25 0 0 1-.415-.188h-1.5ZM2.25 13A2.75 2.75 0 0 0 5 15.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5Zm12.902-7.113c-1.131-.99-2.902-.187-2.902 1.317h1.5a.25.25 0 0 1 .415-.188l.987-1.13ZM5 8.25A2.75 2.75 0 0 0 2.25 11h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z' })));
};
var ForwardRef$9S = forwardRef(SvgArrowThickRight);

var SvgArrowThickUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M9 11h.75a.75.75 0 0 0-.75-.75V11Zm6 0v-.75a.75.75 0 0 0-.75.75H15Zm2.549-1.659-.565.494.565-.494Zm-11.098 0 .565.494-.565-.494ZM8.25 11v8h1.5v-8h-1.5ZM11 21.75h2v-1.5h-2v1.5ZM15.75 19v-8h-1.5v8h1.5ZM15 11.75h1.796v-1.5H15v1.5Zm3.113-2.902L14.07 4.226l-1.13.988 4.044 4.621 1.13-.987ZM9.93 4.226 5.887 8.848l1.129.987 4.043-4.621-1.129-.988ZM7.204 11.75H9v-1.5H7.204v1.5Zm6.866-7.524a2.75 2.75 0 0 0-4.14 0l1.13.988a1.25 1.25 0 0 1 1.88 0l1.13-.988Zm2.726 7.524c1.504 0 2.307-1.77 1.317-2.902l-1.129.987a.25.25 0 0 1-.188.415v1.5ZM13 21.75A2.75 2.75 0 0 0 15.75 19h-1.5c0 .69-.56 1.25-1.25 1.25v1.5ZM5.887 8.848c-.99 1.131-.187 2.902 1.317 2.902v-1.5a.25.25 0 0 1-.188-.415l-1.13-.987ZM8.25 19A2.75 2.75 0 0 0 11 21.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5Z' })));
};
var ForwardRef$9R = forwardRef(SvgArrowThickUp);

var SvgArrowTransferCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { fill: 'currentColor', d: 'M14.53 7.47a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM16 10v.75a.75.75 0 0 0 .53-1.28L16 10Zm-8-.75a.75.75 0 0 0 0 1.5v-1.5Zm5.47-.72 2 2 1.06-1.06-2-2-1.06 1.06Zm2.53.72H8v1.5h8v-1.5Zm-6.53 7.28a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM8 14v-.75a.75.75 0 0 0-.53 1.28L8 14Zm8 .75a.75.75 0 0 0 0-1.5v1.5Zm-5.47.72-2-2-1.06 1.06 2 2 1.06-1.06ZM8 14.75h8v-1.5H8v1.5Z' })));
};
var ForwardRef$9Q = forwardRef(SvgArrowTransferCircle);

var SvgArrowTransferRectangleHalf = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M14.53 7.47a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM16 10v.75a.75.75 0 0 0 .53-1.28L16 10Zm-8-.75a.75.75 0 0 0 0 1.5v-1.5Zm5.47-.72 2 2 1.06-1.06-2-2-1.06 1.06Zm2.53.72H8v1.5h8v-1.5Zm-6.53 7.28a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM8 14v-.75a.75.75 0 0 0-.53 1.28L8 14Zm8 .75a.75.75 0 0 0 0-1.5v1.5Zm-5.47.72-2-2-1.06 1.06 2 2 1.06-1.06ZM8 14.75h8v-1.5H8v1.5Z' })));
};
var ForwardRef$9P = forwardRef(SvgArrowTransferRectangleHalf);

var SvgArrowTransferRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-4 5 2 2m0 0-2 2m2-2H8m2 8-2-2m0 0 2-2m-2 2h8' })));
};
var ForwardRef$9O = forwardRef(SvgArrowTransferRectangle);

var SvgArrowTransfer = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm15 5 3 3m0 0-3 3m3-3H6m3 11-3-3m0 0 3-3m-3 3h12' })));
};
var ForwardRef$9N = forwardRef(SvgArrowTransfer);

var SvgArrowUpCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm9 11 3-3m0 0 3 3m-3-3v8' })));
};
var ForwardRef$9M = forwardRef(SvgArrowUpCircle);

var SvgArrowUpRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm3 9 3-3m0 0 3 3m-3-3v8' })));
};
var ForwardRef$9L = forwardRef(SvgArrowUpRectangle);

var SvgArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm8 10 4-4m0 0 4 4m-4-4v12' })));
};
var ForwardRef$9K = forwardRef(SvgArrowUp);

var SvgAtm = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M16 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5V4h11Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M5 8h14v4H5V8Zm0-6v20' })));
};
var ForwardRef$9J = forwardRef(SvgAtm);

var SvgAutoRotation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm12 3.515 7.071 7.07a2 2 0 0 1 0 2.83l-3.536 3.535M12 20.485l-7.071-7.07a2 2 0 0 1 0-2.83L8.464 7.05' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M14.828 14.829v1.828a1 1 0 0 0 1 1h1.829M9.172 9.171V7.343a1 1 0 0 0-1-1H6.343' })));
};
var ForwardRef$9I = forwardRef(SvgAutoRotation);

var SvgAuto = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M10 13h4' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm8 16 4-8 4 8' })));
};
var ForwardRef$9H = forwardRef(SvgAuto);

var SvgBadgePercent = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7.664 3.947l.06.748-.06-.748Zm1.708-.707-.487-.57.487.57ZM4.018 6.77l-.747-.06.747.06ZM6.77 4.018l-.06-.747.06.747ZM3.24 9.371l-.57-.486.57.486Zm.707-1.707.748.06-.748-.06Zm-1.289 6.282.571-.487-.57.487Zm0-3.892.571.487-.57-.487Zm1.29 6.282.747-.06-.748.06Zm-.708-1.708-.57.487.57-.487Zm3.53 5.354-.06.747.06-.747ZM4.018 17.23l-.747.06.747-.06Zm5.354 3.53.486-.57-.486.57Zm-1.708-.707.06-.748-.06.748Zm6.282 1.289-.487-.571.487.57Zm-3.892 0-.486.57.486-.57Zm6.282-1.29-.06-.747.06.748Zm-1.707.708.486.57-.486-.57Zm5.353-3.53.747.06-.747-.06Zm-2.752 2.752.06.747-.06-.747Zm3.53-5.354.57.487-.57-.487Zm-.707 1.708-.748-.06.748.06Zm1.289-6.282-.571.487.57-.487Zm0 3.892-.571-.487.57.487Zm-1.29-6.282-.747.06.748-.06Zm.708 1.707.57-.486-.57.486Zm-3.53-5.353.06-.747-.06.747Zm2.752 2.752.747-.06-.747.06Zm-5.353-3.53-.487.57.487-.57Zm1.707.707-.06.748.06-.748Zm-2.39-1.289.486-.57-.486.57Zm-3.892 0 .487.571-.487-.57Zm3.405.571.683.582.973-1.142-.683-.582-.973 1.142Zm2.817 1.466.894.071.12-1.495-.895-.072-.119 1.496Zm2.958 2.135.071.894 1.495-.12-.07-.893-1.496.119Zm.955 3.028.582.683 1.142-.973-.582-.683-1.142.973Zm.582 3.601-.582.683 1.142.973.582-.683-1.142-.973Zm-1.466 2.817-.071.894 1.495.12.072-.895-1.496-.119Zm-2.135 2.958-.894.071.12 1.495.893-.07-.119-1.496Zm-3.028.955-.683.582.973 1.142.683-.582-.973-1.142Zm-3.601.582-.683-.582-.973 1.142.683.582.973-1.142Zm-2.817-1.466-.894-.071-.12 1.495.895.072.119-1.496ZM4.766 17.17l-.071-.894-1.496.12.072.893 1.495-.119Zm-.955-3.028-.582-.683-1.142.973.582.683 1.142-.973Zm-.582-3.601.582-.683-1.142-.973-.582.683 1.142.973Zm1.466-2.817.071-.894-1.495-.12-.072.895 1.496.119ZM6.83 4.766l.894-.071-.12-1.496-.893.072.119 1.495Zm3.028-.955.683-.582-.973-1.142-.683.582.973 1.142Zm-2.134.884a3.75 3.75 0 0 0 2.134-.884l-.973-1.142a2.25 2.25 0 0 1-1.28.53l.119 1.496ZM4.766 6.83A2.25 2.25 0 0 1 6.83 4.766l-.12-1.495a3.75 3.75 0 0 0-3.44 3.44l1.496.119Zm-.955 3.028a3.75 3.75 0 0 0 .884-2.134l-1.496-.12a2.25 2.25 0 0 1-.53 1.281l1.142.973Zm-.582 3.601a2.25 2.25 0 0 1 0-2.918l-1.142-.973a3.75 3.75 0 0 0 0 4.864l1.142-.973Zm1.466 2.817a3.75 3.75 0 0 0-.884-2.134l-1.142.973c.307.36.493.808.53 1.28l1.496-.119Zm2.135 2.958a2.25 2.25 0 0 1-2.064-2.064l-1.495.12a3.75 3.75 0 0 0 3.44 3.44l.119-1.496Zm3.028.955a3.75 3.75 0 0 0-2.134-.884l-.12 1.495c.473.038.92.224 1.281.53l.973-1.14Zm3.601.582a2.25 2.25 0 0 1-2.918 0l-.973 1.142a3.75 3.75 0 0 0 4.864 0l-.973-1.142Zm2.817-1.466a3.75 3.75 0 0 0-2.134.884l.973 1.142a2.25 2.25 0 0 1 1.28-.53l-.119-1.496Zm2.958-2.135a2.25 2.25 0 0 1-2.064 2.064l.12 1.495a3.75 3.75 0 0 0 3.44-3.44l-1.496-.119Zm.955-3.028a3.75 3.75 0 0 0-.884 2.134l1.495.12a2.25 2.25 0 0 1 .53-1.281l-1.14-.973Zm.582-3.601a2.25 2.25 0 0 1 0 2.918l1.142.973a3.75 3.75 0 0 0 0-4.864l-1.142.973Zm-1.466-2.817a3.75 3.75 0 0 0 .884 2.134l1.142-.973a2.25 2.25 0 0 1-.53-1.28l-1.496.119ZM17.17 4.766a2.25 2.25 0 0 1 2.064 2.064l1.495-.12a3.75 3.75 0 0 0-3.44-3.44l-.119 1.496Zm-3.028-.955a3.75 3.75 0 0 0 2.134.884l.12-1.496a2.25 2.25 0 0 1-1.281-.53l-.973 1.142Zm.29-1.724a3.75 3.75 0 0 0-4.864 0l.973 1.142a2.25 2.25 0 0 1 2.918 0l.973-1.142ZM8.47 14.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm7.06-4.94a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-6 6 6-6-1.06-1.06-6 6 1.06 1.06Z' })));
};
var ForwardRef$9G = forwardRef(SvgBadgePercent);

var SvgBagAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15.25 6a.75.75 0 0 0 1.5 0h-1.5Zm-8 0a.75.75 0 0 0 1.5 0h-1.5ZM12 2.75A3.25 3.25 0 0 1 15.25 6h1.5A4.75 4.75 0 0 0 12 1.25v1.5Zm0-1.5A4.75 4.75 0 0 0 7.25 6h1.5A3.25 3.25 0 0 1 12 2.75v-1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'm3.562 17.504.744.093-.744-.093Zm16.876 0-.744.093.744-.093Zm-1-8 .744-.093-.744.093Zm-14.876 0-.744-.093.744.093Zm3.97-2.754h6.937v-1.5H8.53v1.5Zm10.162 2.847 1 8 1.488-.186-1-8-1.488.186ZM16.469 21.25H7.53v1.5h8.938v-1.5ZM4.306 17.597l1-8-1.488-.186-1 8 1.488.186Zm3.225 3.653a3.25 3.25 0 0 1-3.225-3.653l-1.488-.186A4.75 4.75 0 0 0 7.53 22.75v-1.5Zm12.163-3.653a3.25 3.25 0 0 1-3.225 3.653v1.5a4.75 4.75 0 0 0 4.713-5.34l-1.488.187ZM15.469 6.75a3.25 3.25 0 0 1 3.225 2.847l1.488-.186A4.75 4.75 0 0 0 15.47 5.25v1.5ZM8.53 5.25a4.75 4.75 0 0 0-4.713 4.16l1.488.187A3.25 3.25 0 0 1 8.531 6.75v-1.5Zm.47 8a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6 0h6v-1.5H9v1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M12.75 11a.75.75 0 0 0-1.5 0h1.5Zm-1.5 6a.75.75 0 0 0 1.5 0h-1.5Zm0-6v6h1.5v-6h-1.5Z' })));
};
var ForwardRef$9F = forwardRef(SvgBagAdd);

var SvgBagCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15.25 6a.75.75 0 0 0 1.5 0h-1.5Zm-8 0a.75.75 0 0 0 1.5 0h-1.5ZM12 2.75A3.25 3.25 0 0 1 15.25 6h1.5A4.75 4.75 0 0 0 12 1.25v1.5Zm0-1.5A4.75 4.75 0 0 0 7.25 6h1.5A3.25 3.25 0 0 1 12 2.75v-1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'm3.562 17.504.744.093-.744-.093Zm16.876 0-.744.093.744-.093Zm-1-8 .744-.093-.744.093Zm-14.876 0-.744-.093.744.093Zm3.97-2.754h6.937v-1.5H8.53v1.5Zm10.162 2.847 1 8 1.488-.186-1-8-1.488.186ZM16.469 21.25H7.53v1.5h8.938v-1.5ZM4.306 17.597l1-8-1.488-.186-1 8 1.488.186Zm3.225 3.653a3.25 3.25 0 0 1-3.225-3.653l-1.488-.186A4.75 4.75 0 0 0 7.53 22.75v-1.5Zm12.163-3.653a3.25 3.25 0 0 1-3.225 3.653v1.5a4.75 4.75 0 0 0 4.713-5.34l-1.488.187ZM15.469 6.75a3.25 3.25 0 0 1 3.225 2.847l1.488-.186A4.75 4.75 0 0 0 15.47 5.25v1.5ZM8.53 5.25a4.75 4.75 0 0 0-4.713 4.16l1.488.187A3.25 3.25 0 0 1 8.531 6.75v-1.5Zm.939 8.164a.75.75 0 0 0-.938 1.172l.938-1.172Zm1.284 1.988.468-.585-.468.585Zm1.377-.122-.564-.494.564.494Zm3.434-2.786a.75.75 0 1 0-1.128-.988l1.128.988Zm-7.033 2.092 1.753 1.402.937-1.171-1.752-1.403-.938 1.172Zm4.163 1.188 2.87-3.28-1.128-.988-2.87 3.28 1.128.988Zm-2.41.214a1.75 1.75 0 0 0 2.41-.214l-1.128-.988a.25.25 0 0 1-.345.03l-.937 1.172Z' })));
};
var ForwardRef$9E = forwardRef(SvgBagCheck);

var SvgBagFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15.25 6a.75.75 0 0 0 1.5 0h-1.5Zm-8 0a.75.75 0 0 0 1.5 0h-1.5ZM12 2.75A3.25 3.25 0 0 1 15.25 6h1.5A4.75 4.75 0 0 0 12 1.25v1.5Zm0-1.5A4.75 4.75 0 0 0 7.25 6h1.5A3.25 3.25 0 0 1 12 2.75v-1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'm3.562 17.504.744.093-.744-.093Zm16.876 0-.744.093.744-.093Zm-1-8 .744-.093-.744.093Zm-14.876 0-.744-.093.744.093Zm3.97-2.754h6.937v-1.5H8.53v1.5Zm10.162 2.847 1 8 1.488-.186-1-8-1.488.186ZM16.469 21.25H7.53v1.5h8.938v-1.5ZM4.306 17.597l1-8-1.488-.186-1 8 1.488.186Zm3.225 3.653a3.25 3.25 0 0 1-3.225-3.653l-1.488-.186A4.75 4.75 0 0 0 7.53 22.75v-1.5Zm12.163-3.653a3.25 3.25 0 0 1-3.225 3.653v1.5a4.75 4.75 0 0 0 4.713-5.34l-1.488.187ZM15.469 6.75a3.25 3.25 0 0 1 3.225 2.847l1.488-.186A4.75 4.75 0 0 0 15.47 5.25v1.5ZM8.53 5.25a4.75 4.75 0 0 0-4.713 4.16l1.488.187A3.25 3.25 0 0 1 8.531 6.75v-1.5ZM12 12l-.53.53a.75.75 0 0 0 1.06 0L12 12Zm.265-.265-.53-.53.53.53Zm-.53 0-.53.53.53-.53Zm-2.652 2.652.53-.53-.53.53Zm1.856 1.856-.53.53.53-.53Zm2.122 0 .53.53-.53-.53Zm1.856-1.856-.53-.53.53.53Zm-5.834-2.652.53.53-.53-.53Zm3.447.795.266-.265-1.061-1.06-.265.265 1.06 1.06Zm-1.325-.265.265.265 1.06-1.06-.265-.266-1.06 1.061Zm-2.652 2.652 1.856 1.856 1.06-1.06-1.855-1.857-1.061 1.06Zm5.038 1.856 1.856-1.856-1.06-1.06-1.857 1.855 1.061 1.061Zm.796-4.508c.439.44.439 1.152 0 1.591l1.06 1.06a2.625 2.625 0 0 0 0-3.712l-1.06 1.061Zm1.06-1.06a2.625 2.625 0 0 0-3.712 0l1.06 1.06c.44-.44 1.152-.44 1.591 0l1.061-1.06Zm-5.833 1.06a1.123 1.123 0 0 1 1.59 0l1.061-1.06a2.625 2.625 0 0 0-3.712 0l1.06 1.06Zm.795 4.508a2.25 2.25 0 0 0 3.182 0l-1.06-1.06a.75.75 0 0 1-1.061 0l-1.061 1.06Zm-1.856-5.569a2.625 2.625 0 0 0 0 3.713l1.06-1.06a1.125 1.125 0 0 1 0-1.592l-1.06-1.06Z' })));
};
var ForwardRef$9D = forwardRef(SvgBagFavourite);

var SvgBagMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15.25 6a.75.75 0 0 0 1.5 0h-1.5Zm-8 0a.75.75 0 0 0 1.5 0h-1.5ZM12 2.75A3.25 3.25 0 0 1 15.25 6h1.5A4.75 4.75 0 0 0 12 1.25v1.5Zm0-1.5A4.75 4.75 0 0 0 7.25 6h1.5A3.25 3.25 0 0 1 12 2.75v-1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'm3.562 17.504.744.093-.744-.093Zm16.876 0-.744.093.744-.093Zm-1-8 .744-.093-.744.093Zm-14.876 0-.744-.093.744.093Zm3.97-2.754h6.937v-1.5H8.53v1.5Zm10.162 2.847 1 8 1.488-.186-1-8-1.488.186ZM16.469 21.25H7.53v1.5h8.938v-1.5ZM4.306 17.597l1-8-1.488-.186-1 8 1.488.186Zm3.225 3.653a3.25 3.25 0 0 1-3.225-3.653l-1.488-.186A4.75 4.75 0 0 0 7.53 22.75v-1.5Zm12.163-3.653a3.25 3.25 0 0 1-3.225 3.653v1.5a4.75 4.75 0 0 0 4.713-5.34l-1.488.187ZM15.469 6.75a3.25 3.25 0 0 1 3.225 2.847l1.488-.186A4.75 4.75 0 0 0 15.47 5.25v1.5ZM8.53 5.25a4.75 4.75 0 0 0-4.713 4.16l1.488.187A3.25 3.25 0 0 1 8.531 6.75v-1.5Zm.47 8a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6 0h6v-1.5H9v1.5Z' })));
};
var ForwardRef$9C = forwardRef(SvgBagMinus);

var SvgBagRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15.25 6a.75.75 0 0 0 1.5 0h-1.5Zm-8 0a.75.75 0 0 0 1.5 0h-1.5ZM12 2.75A3.25 3.25 0 0 1 15.25 6h1.5A4.75 4.75 0 0 0 12 1.25v1.5Zm0-1.5A4.75 4.75 0 0 0 7.25 6h1.5A3.25 3.25 0 0 1 12 2.75v-1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'm3.562 17.504.744.093-.744-.093Zm16.876 0-.744.093.744-.093Zm-1-8 .744-.093-.744.093Zm-14.876 0-.744-.093.744.093Zm3.97-2.754h6.937v-1.5H8.53v1.5Zm10.162 2.847 1 8 1.488-.186-1-8-1.488.186ZM16.469 21.25H7.53v1.5h8.938v-1.5ZM4.306 17.597l1-8-1.488-.186-1 8 1.488.186Zm3.225 3.653a3.25 3.25 0 0 1-3.225-3.653l-1.488-.186A4.75 4.75 0 0 0 7.53 22.75v-1.5Zm12.163-3.653a3.25 3.25 0 0 1-3.225 3.653v1.5a4.75 4.75 0 0 0 4.713-5.34l-1.488.187ZM15.469 6.75a3.25 3.25 0 0 1 3.225 2.847l1.488-.186A4.75 4.75 0 0 0 15.47 5.25v1.5ZM8.53 5.25a4.75 4.75 0 0 0-4.713 4.16l1.488.187A3.25 3.25 0 0 1 8.531 6.75v-1.5Zm1.879 6.098a.75.75 0 1 0-1.06 1.061l1.06-1.06Zm3.182 5.304a.75.75 0 1 0 1.06-1.061l-1.06 1.06Zm-4.243-4.243 4.243 4.243 1.06-1.061-4.242-4.243-1.06 1.061Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M14.652 12.409a.75.75 0 0 0-1.061-1.06l1.06 1.06Zm-5.304 3.182a.75.75 0 1 0 1.061 1.06l-1.06-1.06Zm4.243-4.243-4.243 4.243 1.061 1.06 4.243-4.242-1.061-1.06Z' })));
};
var ForwardRef$9B = forwardRef(SvgBagRemove);

var SvgBagSmile = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15.25 6a.75.75 0 0 0 1.5 0h-1.5Zm-8 0a.75.75 0 0 0 1.5 0h-1.5ZM12 2.75A3.25 3.25 0 0 1 15.25 6h1.5A4.75 4.75 0 0 0 12 1.25v1.5Zm0-1.5A4.75 4.75 0 0 0 7.25 6h1.5A3.25 3.25 0 0 1 12 2.75v-1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'm3.562 17.504.744.093-.744-.093Zm16.876 0-.744.093.744-.093Zm-1-8 .744-.093-.744.093Zm-14.876 0-.744-.093.744.093Zm3.97-2.754h6.937v-1.5H8.53v1.5Zm10.162 2.847 1 8 1.488-.186-1-8-1.488.186ZM16.469 21.25H7.53v1.5h8.938v-1.5ZM4.306 17.597l1-8-1.488-.186-1 8 1.488.186Zm3.225 3.653a3.25 3.25 0 0 1-3.225-3.653l-1.488-.186A4.75 4.75 0 0 0 7.53 22.75v-1.5Zm12.163-3.653a3.25 3.25 0 0 1-3.225 3.653v1.5a4.75 4.75 0 0 0 4.713-5.34l-1.488.187ZM15.469 6.75a3.25 3.25 0 0 1 3.225 2.847l1.488-.186A4.75 4.75 0 0 0 15.47 5.25v1.5ZM8.53 5.25a4.75 4.75 0 0 0-4.713 4.16l1.488.187A3.25 3.25 0 0 1 8.531 6.75v-1.5Zm.84 10.098a.75.75 0 1 0-.74 1.304l.74-1.304Zm5.998 1.305a.75.75 0 1 0-.736-1.306l.736 1.306Zm-6.739-.001c1.22.694 2.269 1.1 3.374 1.098 1.104-.002 2.15-.412 3.365-1.097l-.736-1.306c-1.138.64-1.913.902-2.632.903-.718.001-1.493-.255-2.63-.902l-.74 1.304Z' })));
};
var ForwardRef$9A = forwardRef(SvgBagSmile);

var SvgBag = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15.25 6a.75.75 0 0 0 1.5 0h-1.5Zm-8 0a.75.75 0 0 0 1.5 0h-1.5ZM12 2.75A3.25 3.25 0 0 1 15.25 6h1.5A4.75 4.75 0 0 0 12 1.25v1.5Zm0-1.5A4.75 4.75 0 0 0 7.25 6h1.5A3.25 3.25 0 0 1 12 2.75v-1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'm3.562 17.504.744.093-.744-.093Zm16.876 0-.744.093.744-.093Zm-1-8 .744-.093-.744.093Zm-14.876 0-.744-.093.744.093Zm3.97-2.754h6.937v-1.5H8.53v1.5Zm10.162 2.847 1 8 1.488-.186-1-8-1.488.186ZM16.469 21.25H7.53v1.5h8.938v-1.5ZM4.306 17.597l1-8-1.488-.186-1 8 1.488.186Zm3.225 3.653a3.25 3.25 0 0 1-3.225-3.653l-1.488-.186A4.75 4.75 0 0 0 7.53 22.75v-1.5Zm12.163-3.653a3.25 3.25 0 0 1-3.225 3.653v1.5a4.75 4.75 0 0 0 4.713-5.34l-1.488.187ZM15.469 6.75a3.25 3.25 0 0 1 3.225 2.847l1.488-.186A4.75 4.75 0 0 0 15.47 5.25v1.5ZM8.53 5.25a4.75 4.75 0 0 0-4.713 4.16l1.488.187A3.25 3.25 0 0 1 8.531 6.75v-1.5Z' })));
};
var ForwardRef$9z = forwardRef(SvgBag);

var SvgBank = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M3.033 10h17.934c1.02 0 1.42-1.351.572-1.93l-8.395-5.716a2.026 2.026 0 0 0-2.288 0L2.461 8.07c-.849.579-.448 1.93.572 1.93ZM4 10h5v8H4zm11 0h5v8h-5zm4.382 8a1 1 0 0 1 .894.553l1 2A1 1 0 0 1 20.382 22H3.618a1 1 0 0 1-.894-1.447l1-2A1 1 0 0 1 4.618 18h14.764Z' })));
};
var ForwardRef$9y = forwardRef(SvgBank);

var SvgBarChartMiddleLong = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 4, height: 18, x: 10, y: 3, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("rect", { width: 4, height: 13, x: 2, y: 8, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("rect", { width: 4, height: 13, x: 18, y: 8, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 })));
};
var ForwardRef$9x = forwardRef(SvgBarChartMiddleLong);

var SvgBarChart = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 4, height: 18, x: 2, y: 3, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("rect", { width: 4, height: 13, x: 10, y: 8, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("rect", { width: 4, height: 18, x: 18, y: 3, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 })));
};
var ForwardRef$9w = forwardRef(SvgBarChart);

var SvgBarcodeBorder = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M1.25 8a.75.75 0 0 0 1.5 0h-1.5ZM8 2.75a.75.75 0 0 0 0-1.5v1.5Zm8-1.5a.75.75 0 0 0 0 1.5v-1.5ZM21.25 8a.75.75 0 0 0 1.5 0h-1.5Zm1.5 7.944a.75.75 0 0 0-1.5 0h1.5ZM16 21.25a.75.75 0 0 0 0 1.5v-1.5Zm-8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-5.25-6.806a.75.75 0 0 0-1.5 0h1.5ZM7 11.25a.75.75 0 0 0 0 1.5v-1.5Zm10 1.5a.75.75 0 0 0 0-1.5v1.5ZM15.25 9.5a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2a.75.75 0 0 0-1.5 0h1.5Zm-5.5 2a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2a.75.75 0 0 0-1.5 0h1.5Zm-5.5 2a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2a.75.75 0 0 0-1.5 0h1.5Zm2.5 9a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2a.75.75 0 0 0-1.5 0h1.5Zm2.5 2a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2a.75.75 0 0 0-1.5 0h1.5Zm-9.5 2a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2a.75.75 0 0 0-1.5 0h1.5Zm-6-6.5V6h-1.5v2h1.5ZM6 2.75h2v-1.5H6v1.5Zm10 0h2v-1.5h-2v1.5ZM21.25 6v2h1.5V6h-1.5Zm0 9.944V18h1.5v-2.056h-1.5ZM18 21.25h-2v1.5h2v-1.5Zm-10 0H6v1.5h2v-1.5ZM2.75 18v-2.056h-1.5V18h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM2.75 6A3.25 3.25 0 0 1 6 2.75v-1.5A4.75 4.75 0 0 0 1.25 6h1.5ZM7 12.75h10v-1.5H7v1.5Zm9.75-3.25v-2h-1.5v2h1.5Zm-4 0v-2h-1.5v2h1.5Zm-4 0v-2h-1.5v2h1.5Zm4 7v-2h-1.5v2h1.5Zm4 0v-2h-1.5v2h1.5Zm-8 0v-2h-1.5v2h1.5Z' })));
};
var ForwardRef$9v = forwardRef(SvgBarcodeBorder);

var SvgBatteryAlert = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 12, height: 18, x: 6, y: 4, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M10 2h4m-2 7v4m0 3v1' })));
};
var ForwardRef$9u = forwardRef(SvgBatteryAlert);

var SvgBatteryChargingFull = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm9 13 1.753 1.402a1 1 0 0 0 1.377-.122L15 11' }),
        React.createElement("rect", { width: 12, height: 18, x: 6, y: 4, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M10 2h4' })));
};
var ForwardRef$9t = forwardRef(SvgBatteryChargingFull);

var SvgBatteryCharging = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 12, height: 18, x: 6, y: 4, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M10 2h4' })));
};
var ForwardRef$9s = forwardRef(SvgBatteryCharging);

var SvgBatteryHorizontalCharging = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: '#2B3341', strokeLinejoin: 'round', d: 'm8.11 12.129.908-.887 3.185-3.11c.318-.31.904-.024.751.367l-.878 2.25c-.095.245.118.497.419.497h1.063c.379 0 .582.381.332.625L9.797 15.87c-.318.31-.904.023-.751-.368l.878-2.25c.095-.245-.118-.497-.419-.497H8.442c-.379 0-.582-.381-.332-.625Z' }),
        React.createElement("rect", { width: 12, height: 18, x: 20, y: 6, stroke: 'currentColor', strokeWidth: 1.5, rx: 2, transform: 'rotate(90 20 6)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M22 10v4' })));
};
var ForwardRef$9r = forwardRef(SvgBatteryHorizontalCharging);

var SvgBatteryHorizontalFull = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm8 12 1.753 1.402a1 1 0 0 0 1.377-.122L14 10' }),
        React.createElement("rect", { width: 12, height: 18, x: 20, y: 6, stroke: 'currentColor', strokeWidth: 1.5, rx: 2, transform: 'rotate(90 20 6)' }),
        React.createElement("rect", { width: 12, height: 18, x: 20, y: 6, stroke: 'currentColor', strokeWidth: 1.5, rx: 2, transform: 'rotate(90 20 6)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M22 10v4' })));
};
var ForwardRef$9q = forwardRef(SvgBatteryHorizontalFull);

var SvgBatteryHorizontalLowbet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M22 10v4M3 3l18 18' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.19 5.25H4A2.75 2.75 0 0 0 1.25 8v8A2.75 2.75 0 0 0 4 18.75h14c.487 0 .944-.127 1.34-.349l-1.163-1.163a1.258 1.258 0 0 1-.177.012H4c-.69 0-1.25-.56-1.25-1.25V8c0-.69.56-1.25 1.25-1.25h3.69l-1.5-1.5Zm13.048 10.927c.008-.058.012-.117.012-.177V8c0-.69-.56-1.25-1.25-1.25H9.81l-1.5-1.5H18A2.75 2.75 0 0 1 20.75 8v8c0 .487-.127.944-.349 1.34l-1.163-1.163Z', clipRule: 'evenodd' })));
};
var ForwardRef$9p = forwardRef(SvgBatteryHorizontalLowbet);

var SvgBatteryHorizontalSavingMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 12, height: 18, x: 20, y: 6, stroke: 'currentColor', strokeWidth: 1.5, rx: 2, transform: 'rotate(90 20 6)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M22 10v4M11 9v6m3-3H8' })));
};
var ForwardRef$9o = forwardRef(SvgBatteryHorizontalSavingMode);

var SvgBatteryHorizontal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 12, height: 18, x: 21, y: 6, stroke: 'currentColor', strokeWidth: 1.5, rx: 2, transform: 'rotate(90 21 6)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M23 10v4' })));
};
var ForwardRef$9n = forwardRef(SvgBatteryHorizontal);

var SvgBatteryLowbet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M10 2h4M3 3l18 18' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.598 4.66A2.737 2.737 0 0 0 5.25 6v14A2.75 2.75 0 0 0 8 22.75h8A2.75 2.75 0 0 0 18.75 20v-2.19l-1.5-1.5V20c0 .69-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25V6c0-.06.004-.12.012-.177L5.598 4.66Zm11.652 9.53V6c0-.69-.56-1.25-1.25-1.25H8c-.06 0-.12.004-.177.012L6.66 3.598A2.737 2.737 0 0 1 8 3.25h8A2.75 2.75 0 0 1 18.75 6v9.69l-1.5-1.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$9m = forwardRef(SvgBatteryLowbet);

var SvgBatterySavingMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 12, height: 18, x: 6, y: 4, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M10 2h4m-2 8v6m3-3H9' })));
};
var ForwardRef$9l = forwardRef(SvgBatterySavingMode);

var SvgBattery = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 12, height: 18, x: 6, y: 4, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M10 2h4' })));
};
var ForwardRef$9k = forwardRef(SvgBattery);

var SvgBill = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M17 7H7m10 4H7m5 4H7' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M19 2H5a2 2 0 0 0-2 2v15.154a2 2 0 0 0 2.677 1.882l1.562-.562a2 2 0 0 1 1.498.058l2.442 1.099a2 2 0 0 0 1.642 0l2.442-1.1a2 2 0 0 1 1.498-.057l1.562.562A2 2 0 0 0 21 19.154V4a2 2 0 0 0-2-2Z' })));
};
var ForwardRef$9j = forwardRef(SvgBill);

var SvgBloodPlus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 11v6m3-3H9' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M4 14.111c0-4.649 4.63-9.233 6.845-11.16a1.743 1.743 0 0 1 2.31 0C15.371 4.877 20 9.461 20 14.11 20 18 16.97 22 12 22c-4.97 0-8-4-8-7.889Z' })));
};
var ForwardRef$9i = forwardRef(SvgBloodPlus);

var SvgBlood = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M4 14.111c0-4.649 4.63-9.233 6.845-11.16a1.743 1.743 0 0 1 2.31 0C15.371 4.877 20 9.461 20 14.11 20 18 16.97 22 12 22c-4.97 0-8-4-8-7.889Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M16.876 15c-.406 1.838-1.79 3.499-3.876 3.905' })));
};
var ForwardRef$9h = forwardRef(SvgBlood);

var SvgBluetoothConnected = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm6 8 10.886 7.257a1 1 0 0 1 .085 1.6l-3.33 2.776A1 1 0 0 1 12 18.865V5.135a1 1 0 0 1 1.64-.768l3.331 2.776a1 1 0 0 1-.085 1.6L6 16' }),
        React.createElement("path", { fill: 'currentColor', d: 'M18.414 10.586 19.828 12l-1.414 1.414L17 12l1.414-1.414Zm-12.828 0L7 12l-1.414 1.414L4.172 12l1.414-1.414Z' })));
};
var ForwardRef$9g = forwardRef(SvgBluetoothConnected);

var SvgBluetoothOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 16, cy: 12, r: 1, fill: 'currentColor' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm4 8 10.886 7.257a1 1 0 0 1 .085 1.6l-3.33 2.776A1 1 0 0 1 10 18.865V5.135a1 1 0 0 1 1.64-.768l3.331 2.776a1 1 0 0 1-.085 1.6L4 16m14.775-7.28A4.98 4.98 0 0 1 20 12c0 1.28-.481 2.448-1.273 3.333' })));
};
var ForwardRef$9f = forwardRef(SvgBluetoothOff);

var SvgBluetooth = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M20 20 4 4' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.25 10.31v1.29l-5.666 3.777a.75.75 0 0 0 .832 1.248l4.834-3.222v5.463c0 1.484 1.73 2.294 2.87 1.345l3.834-3.195-1.065-1.065-3.729 3.107a.25.25 0 0 1-.41-.192v-6.463l.354-.237-1.854-1.854Zm7.274 5.153.012.012-.012-.012Zm-4.147-4.146-1.081-1.082 3.174-2.116a.25.25 0 0 0 .021-.4l-3.33-2.776a.25.25 0 0 0-.41.192V9.69l-1.5-1.5V5.135c0-1.484 1.73-2.294 2.87-1.344l3.33 2.776a1.75 1.75 0 0 1-.15 2.8l-2.924 1.95Z', clipRule: 'evenodd' })));
};
var ForwardRef$9e = forwardRef(SvgBluetooth);

var SvgBoard = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M5 6.75h14v-1.5H5v1.5ZM21.25 9v10h1.5V9h-1.5ZM19 21.25H5v1.5h14v-1.5ZM2.75 19V9h-1.5v10h1.5ZM5 21.25A2.25 2.25 0 0 1 2.75 19h-1.5A3.75 3.75 0 0 0 5 22.75v-1.5ZM21.25 19A2.25 2.25 0 0 1 19 21.25v1.5A3.75 3.75 0 0 0 22.75 19h-1.5ZM19 6.75A2.25 2.25 0 0 1 21.25 9h1.5A3.75 3.75 0 0 0 19 5.25v1.5ZM5 5.25A3.75 3.75 0 0 0 1.25 9h1.5A2.25 2.25 0 0 1 5 6.75v-1.5Zm2 4a.75.75 0 0 0 0 1.5v-1.5Zm10 1.5a.75.75 0 0 0 0-1.5v1.5Zm-10 0h10v-1.5H7v1.5Zm0 2.5a.75.75 0 0 0 0 1.5v-1.5Zm10 1.5a.75.75 0 0 0 0-1.5v1.5Zm-10 0h10v-1.5H7v1.5Zm0 2.5a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5Zm-5 0h5v-1.5H7v1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M5.584 5.376a.75.75 0 0 0 .832 1.248l-.832-1.248ZM12 2l.416-.624a.75.75 0 0 0-.832 0L12 2Zm5.584 4.624a.75.75 0 1 0 .832-1.248l-.832 1.248Zm-11.168 0 6-4-.832-1.248-6 4 .832 1.248Zm5.168-4 6 4 .832-1.248-6-4-.832 1.248Z' })));
};
var ForwardRef$9d = forwardRef(SvgBoard);

var SvgBookmark = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm7.2 20.6.45.6-.45-.6Zm3.6-2.7-.45-.6.45.6Zm2.4 0 .45-.6-.45.6Zm3.6 2.7-.45.6.45-.6ZM3.25 5v14h1.5V5h-1.5Zm4.4 16.2 3.6-2.7-.9-1.2-3.6 2.7.9 1.2Zm5.1-2.7 3.6 2.7.9-1.2-3.6-2.7-.9 1.2Zm8 .5V5h-1.5v14h1.5ZM18 2.25H6v1.5h12v-1.5ZM20.75 5A2.75 2.75 0 0 0 18 2.25v1.5c.69 0 1.25.56 1.25 1.25h1.5Zm-4.4 16.2c1.813 1.36 4.4.066 4.4-2.2h-1.5c0 1.03-1.176 1.618-2 1l-.9 1.2Zm-5.1-2.7a1.25 1.25 0 0 1 1.5 0l.9-1.2a2.75 2.75 0 0 0-3.3 0l.9 1.2Zm-8 .5c0 2.266 2.587 3.56 4.4 2.2l-.9-1.2c-.824.618-2 .03-2-1h-1.5Zm1.5-14c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 3.25 5h1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M4 7.25a.75.75 0 0 0 0 1.5v-1.5Zm16 1.5a.75.75 0 0 0 0-1.5v1.5Zm-16 0h16v-1.5H4v1.5Z' })));
};
var ForwardRef$9c = forwardRef(SvgBookmark);

var SvgBoxAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M14 22H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 2h8v7.586c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0l-1.586 1.586c-.63.63-1.707.184-1.707-.707V2Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 19h-6m3 3v-6' })));
};
var ForwardRef$9b = forwardRef(SvgBoxAdd);

var SvgBoxArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M15 22H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v7' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 2h8v7.586c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0l-1.586 1.586c-.63.63-1.707.184-1.707-.707V2Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm22 20.414-1.293 1.293a1 1 0 0 1-1.414 0L18 20.414M20 16v5.414' })));
};
var ForwardRef$9a = forwardRef(SvgBoxArrowDown);

var SvgBoxArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M16 22H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v7' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 2h8v7.586c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0l-1.586 1.586c-.63.63-1.707.184-1.707-.707V2Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm22 17.586-1.293-1.293a1 1 0 0 0-1.414 0L18 17.586M20 22v-5.414' })));
};
var ForwardRef$99 = forwardRef(SvgBoxArrowUp);

var SvgBoxCancel = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M13 22H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v7' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 2h8v7.586c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0l-1.586 1.586c-.63.63-1.707.184-1.707-.707V2Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M21.121 21.121 16.88 16.88m-.001 4.241 4.242-4.242' })));
};
var ForwardRef$98 = forwardRef(SvgBoxCancel);

var SvgBoxDone = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 22H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 2h8v7.586c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0l-1.586 1.586c-.63.63-1.707.184-1.707-.707V2Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm15 20 1.753 1.402a1 1 0 0 0 1.377-.122L21 18' })));
};
var ForwardRef$97 = forwardRef(SvgBoxDone);

var SvgBoxFavorite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M13 22H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v7' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 2h8v7.586c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0l-1.586 1.586c-.63.63-1.707.184-1.707-.707V2Zm10.265 14.735L18 17l-.265-.265a1.875 1.875 0 1 0-2.652 2.652l1.856 1.856a1.5 1.5 0 0 0 2.122 0l1.856-1.856a1.875 1.875 0 0 0-2.652-2.652Z' })));
};
var ForwardRef$96 = forwardRef(SvgBoxFavorite);

var SvgBoxLocation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M14 22H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v5' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 2h8v7.586c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0l-1.586 1.586c-.63.63-1.707.184-1.707-.707V2Z' }),
        React.createElement("circle", { cx: 19, cy: 17, r: 1, fill: 'currentColor' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 17c0 1.546-1.469 3.376-2.35 4.336a.873.873 0 0 1-1.3 0C17.47 20.376 16 18.546 16 17c0-2.21 1.343-3 3-3s3 .79 3 3Z' })));
};
var ForwardRef$95 = forwardRef(SvgBoxLocation);

var SvgBoxMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M13 22H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v9' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 2h8v7.586c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0l-1.586 1.586c-.63.63-1.707.184-1.707-.707V2Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 19h-6' })));
};
var ForwardRef$94 = forwardRef(SvgBoxMinus);

var SvgBoxSearch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M13 22H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v7' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 2h8v7.586c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0l-1.586 1.586c-.63.63-1.707.184-1.707-.707V2Z' }),
        React.createElement("circle", { cx: 18, cy: 18, r: 3, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm20.5 20.5 1 1' })));
};
var ForwardRef$93 = forwardRef(SvgBoxSearch);

var SvgBoxTime = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 22H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 2h8v7.586c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0l-1.586 1.586c-.63.63-1.707.184-1.707-.707V2Z' }),
        React.createElement("circle", { cx: 18, cy: 18, r: 4, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M19 18h-1v-1.5' })));
};
var ForwardRef$92 = forwardRef(SvgBoxTime);

var SvgBriefcaseTriangular = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 20, height: 16, x: 2, y: 6, stroke: 'currentColor', strokeWidth: 1.5, rx: 4 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M8 6V5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1M2 11s6.095 4 10 4c3.905 0 10-4 10-4' }),
        React.createElement("path", { fill: 'currentColor', d: 'M14 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' })));
};
var ForwardRef$91 = forwardRef(SvgBriefcaseTriangular);

var SvgBriefcase = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 20, height: 16, x: 2, y: 6, stroke: 'currentColor', strokeWidth: 1.5, rx: 4 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M8 6V5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1M2 13h20' }),
        React.createElement("path", { fill: 'currentColor', d: 'M14 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' })));
};
var ForwardRef$90 = forwardRef(SvgBriefcase);

var SvgCallHospital = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 17, cy: 7, r: 5, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M19 5v4m-4-4v4m4-2h-4' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 20.222V18.91a2 2 0 0 0-1.257-1.857l-1.479-.592a2 2 0 0 0-2.531.963l-.066.132s-2.223-.445-4-2.223c-1.778-1.777-2.223-4-2.223-4l.132-.066a2 2 0 0 0 .963-2.531l-.592-1.479A2 2 0 0 0 5.09 6H3.778C2.796 6 2 6.796 2 7.778 2 15.633 8.368 22 16.222 22c.982 0 1.778-.796 1.778-1.778Z' })));
};
var ForwardRef$8$ = forwardRef(SvgCallHospital);

var SvgCameraOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M10.717 10.788a3 3 0 1 0 3.99 4.007' }),
        React.createElement("circle", { cx: 12, cy: 7, r: 1, fill: 'currentColor' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M21 21 3 3' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.812 5.873A5.752 5.752 0 0 0 2.25 11.5v4A5.75 5.75 0 0 0 8 21.25h8c1.7 0 3.227-.737 4.28-1.91l-1.063-1.063A4.24 4.24 0 0 1 16 19.75H8a4.25 4.25 0 0 1-4.25-4.25v-4A4.25 4.25 0 0 1 8 7.25h.126c.02 0 .04 0 .06-.002L6.813 5.873ZM20 16.939c.162-.45.25-.934.25-1.439v-4A4.25 4.25 0 0 0 16 7.25h-.126a.75.75 0 0 1-.726-.563 3.252 3.252 0 0 0-6.05-.65l-1.1-1.099a4.751 4.751 0 0 1 8.424.827A5.75 5.75 0 0 1 21.75 11.5v4c0 .928-.22 1.804-.61 2.58L20 16.94Z', clipRule: 'evenodd' })));
};
var ForwardRef$8_ = forwardRef(SvgCameraOff);

var SvgCameraSwitch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M21 12a9 9 0 0 0-8.002-8.945C12.45 2.995 12 3.448 12 4v.5M3 12a9 9 0 0 0 8.002 8.945c.549.06.998-.393.998-.945v-.5' }),
        React.createElement("path", { fill: 'currentColor', d: 'M13.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M17 13.853v-2.118c0-1.462-1.244-2.647-2.778-2.647h-.07C13.906 8.175 13.036 7.5 12 7.5s-1.905.675-2.152 1.588h-.07C8.244 9.088 7 10.273 7 11.735v2.118C7 15.315 8.244 16.5 9.778 16.5h4.444c1.534 0 2.778-1.185 2.778-2.647Z' })));
};
var ForwardRef$8Z = forwardRef(SvgCameraSwitch);

var SvgCamera = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M15 13.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' }),
        React.createElement("circle", { cx: 12, cy: 7, r: 1, fill: 'currentColor' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M21 15.5v-4a5 5 0 0 0-5-5h-.126a4.002 4.002 0 0 0-7.748 0H8a5 5 0 0 0-5 5v4a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5Z' })));
};
var ForwardRef$8Y = forwardRef(SvgCamera);

var SvgCapsuleOpen = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M9.5 19.5c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5S8 17 8 17s1.5 1.395 1.5 2.5Zm8 0c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5S16 17 16 17s1.5 1.395 1.5 2.5Zm-4-6c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5S12 11 12 11s1.5 1.395 1.5 2.5ZM3 8.242A3 3 0 0 1 7.243 4l2.828 2.828-4.242 4.243L3 8.242Zm18 0A3 3 0 1 0 16.757 4L13.93 6.828l4.242 4.243L21 8.242Z' })));
};
var ForwardRef$8X = forwardRef(SvgCapsuleOpen);

var SvgCapsule = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M10.558 4.792a6.117 6.117 0 0 1 8.65 8.65l-5.766 5.767a6.117 6.117 0 1 1-8.65-8.65l5.766-5.767Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M16.95 7.05a3 3 0 0 1 0 4.243' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm7.757 7.757 8.486 8.486' })));
};
var ForwardRef$8W = forwardRef(SvgCapsule);

var SvgCardAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M14 21H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6' }),
        React.createElement("circle", { cx: 6, cy: 17, r: 1, fill: 'currentColor' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M19 15v6m3-3h-6M2 7h20v4H2V7Z' })));
};
var ForwardRef$8V = forwardRef(SvgCardAdd);

var SvgCardArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M15 21H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6' }),
        React.createElement("circle", { cx: 6, cy: 17, r: 1, fill: 'currentColor' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M2 7h20v4H2V7Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm22 19.414-1.293 1.293a1 1 0 0 1-1.414 0L18 19.414M20 16v4.414' })));
};
var ForwardRef$8U = forwardRef(SvgCardArrowDown);

var SvgCardArrowLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M13 21H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8' }),
        React.createElement("circle", { cx: 6, cy: 17, r: 1, fill: 'currentColor' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M2 7h20v4H2V7Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm17.586 21-1.293-1.293a1 1 0 0 1 0-1.414L17.586 17M22 19h-5.414' })));
};
var ForwardRef$8T = forwardRef(SvgCardArrowLeft);

var SvgCardArrowRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M14 21H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v7' }),
        React.createElement("circle", { cx: 6, cy: 17, r: 1, fill: 'currentColor' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M2 7h20v4H2V7Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm20.414 21 1.293-1.293a1 1 0 0 0 0-1.414L20.414 17M16 19h5.414' })));
};
var ForwardRef$8S = forwardRef(SvgCardArrowRight);

var SvgCardArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M16 21H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6' }),
        React.createElement("circle", { cx: 6, cy: 17, r: 1, fill: 'currentColor' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M2 7h20v4H2V7Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm22 17.586-1.293-1.293a1 1 0 0 0-1.414 0L18 17.586M20 21v-4.414' })));
};
var ForwardRef$8R = forwardRef(SvgCardArrowUp);

var SvgCardCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M13 21H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v7' }),
        React.createElement("circle", { cx: 6, cy: 17, r: 1, fill: 'currentColor' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M2 7h20v4H2V7Zm14 12 1.753 1.402a1 1 0 0 0 1.377-.122L22 17' })));
};
var ForwardRef$8Q = forwardRef(SvgCardCheck);

var SvgCardDash = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M6 3.75h12v-1.5H6v1.5ZM21.25 7v10h1.5V7h-1.5ZM18 20.25H6v1.5h12v-1.5ZM2.75 17V7h-1.5v10h1.5ZM6 20.25A3.25 3.25 0 0 1 2.75 17h-1.5A4.75 4.75 0 0 0 6 21.75v-1.5ZM21.25 17A3.25 3.25 0 0 1 18 20.25v1.5A4.75 4.75 0 0 0 22.75 17h-1.5ZM18 3.75A3.25 3.25 0 0 1 21.25 7h1.5A4.75 4.75 0 0 0 18 2.25v1.5ZM6 2.25A4.75 4.75 0 0 0 1.25 7h1.5A3.25 3.25 0 0 1 6 3.75v-1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M2 7v-.75a.75.75 0 0 0-.75.75H2Zm20 0h.75a.75.75 0 0 0-.75-.75V7Zm0 4v.75a.75.75 0 0 0 .75-.75H22ZM2 11h-.75c0 .414.336.75.75.75V11Zm0-3.25h20v-1.5H2v1.5ZM21.25 7v4h1.5V7h-1.5Zm.75 3.25H2v1.5h20v-1.5ZM2.75 11V7h-1.5v4h1.5ZM8 17.75a.75.75 0 0 0 0-1.5v1.5Zm-2-1.5a.75.75 0 0 0 0 1.5v-1.5Zm2 0H6v1.5h2v-1.5Z' })));
};
var ForwardRef$8P = forwardRef(SvgCardDash);

var SvgCardDot = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 18, height: 20, x: 22, y: 3, stroke: 'currentColor', strokeWidth: 1.5, rx: 4, transform: 'rotate(90 22 3)' }),
        React.createElement("circle", { cx: 6, cy: 17, r: 1, fill: 'currentColor' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M2 7h20v4H2V7Z' })));
};
var ForwardRef$8O = forwardRef(SvgCardDot);

var SvgCardMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M14 21H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v7' }),
        React.createElement("circle", { cx: 6, cy: 17, r: 1, fill: 'currentColor' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 18h-6M2 7h20v4H2V7Z' })));
};
var ForwardRef$8N = forwardRef(SvgCardMinus);

var SvgCardRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M14 21H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6' }),
        React.createElement("circle", { cx: 6, cy: 17, r: 1, fill: 'currentColor' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M21.121 15.879 16.88 20.12m4.241.001L16.88 15.88M2 7h20v4H2V7Z' })));
};
var ForwardRef$8M = forwardRef(SvgCardRemove);

var SvgCardUser = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M13 21H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6' }),
        React.createElement("circle", { cx: 6, cy: 17, r: 1, fill: 'currentColor' }),
        React.createElement("circle", { cx: 2, cy: 2, r: 2, stroke: 'currentColor', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 17 19)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M22 21c-.599-1.196-1.718-2-3-2s-2.401.804-3 2' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M2 7h20v4H2V7Z' })));
};
var ForwardRef$8L = forwardRef(SvgCardUser);

var SvgCardWithdraw = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M4 12a2 2 0 0 1 2-2h9a2 2 0 1 1 0 4H6a2 2 0 0 1-2-2Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M12 18a4 4 0 1 0 3.413-3.957M12 18a4.001 4.001 0 0 1 3.413-3.957M12 18H6a2 2 0 1 1 0-4h9c.142 0 .28.015.413.043' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm14 5.414-1.293 1.293a1 1 0 0 1-1.414 0L10 5.414M12 2v4.414' })));
};
var ForwardRef$8K = forwardRef(SvgCardWithdraw);

var SvgCardiogram = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 12h5l2-3 4 6 2-3h5m-9-6.476.765-.822c2.113-2.27 5.538-2.27 7.65 0 2.113 2.27 2.113 5.95 0 8.22l-6.885 7.397a2.06 2.06 0 0 1-3.06 0l-6.886-7.397c-2.112-2.27-2.112-5.95 0-8.22 2.113-2.27 5.538-2.27 7.651 0l.765.822Z' })));
};
var ForwardRef$8J = forwardRef(SvgCardiogram);

var SvgCargoShip = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'square', strokeWidth: 1.5, d: 'm18.96 20 2.738-4.486c.65-1.063.21-2.467-.922-2.95l-8.011-3.408a1.95 1.95 0 0 0-1.53 0l-8.01 3.409c-1.133.482-1.572 1.886-.923 2.949L5.04 20' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M18 11V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v7' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M13 5h-2M3 22l1.532-1.022a2.581 2.581 0 0 1 2.913.034v0a2.582 2.582 0 0 0 2.866.063l.186-.118a2.75 2.75 0 0 1 2.994.037v0A2.72 2.72 0 0 0 16.5 21v0a2.704 2.704 0 0 1 3 0l1.5 1' })));
};
var ForwardRef$8I = forwardRef(SvgCargoShip);

var SvgCargo = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 20, height: 14, x: 2, y: 8, stroke: 'currentColor', strokeWidth: 1.5, rx: 4 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 12v6m-5-6v6m10-6v6' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 2v2m0 0L6 8m6-4 6 4' })));
};
var ForwardRef$8H = forwardRef(SvgCargo);

var SvgCartAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M2 1.25a.75.75 0 0 0 0 1.5v-1.5Zm4 3.5h12v-1.5H6v1.5ZM21.25 8v5h1.5V8h-1.5ZM18 16.25h-8v1.5h8v-1.5ZM6.75 13V4h-1.5v9h1.5ZM4 1.25H2v1.5h2v-1.5ZM6.75 4A2.75 2.75 0 0 0 4 1.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM10 16.25A3.25 3.25 0 0 1 6.75 13h-1.5A4.75 4.75 0 0 0 10 17.75v-1.5ZM21.25 13A3.25 3.25 0 0 1 18 16.25v1.5A4.75 4.75 0 0 0 22.75 13h-1.5ZM18 4.75A3.25 3.25 0 0 1 21.25 8h1.5A4.75 4.75 0 0 0 18 3.25v1.5ZM10.25 20.5a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm9.75.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5ZM14.75 8a.75.75 0 0 0-1.5 0h1.5Zm-1.5 5a.75.75 0 0 0 1.5 0h-1.5Zm0-5v5h1.5V8h-1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M16.5 11.25a.75.75 0 0 0 0-1.5v1.5Zm-5-1.5a.75.75 0 0 0 0 1.5v-1.5Zm5 0h-5v1.5h5v-1.5Z' })));
};
var ForwardRef$8G = forwardRef(SvgCartAdd);

var SvgCartArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M2 1.25a.75.75 0 0 0 0 1.5v-1.5Zm4 3.5h12v-1.5H6v1.5ZM21.25 8v5h1.5V8h-1.5ZM18 16.25h-8v1.5h8v-1.5ZM6.75 13V4h-1.5v9h1.5ZM4 1.25H2v1.5h2v-1.5ZM6.75 4A2.75 2.75 0 0 0 4 1.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM10 16.25A3.25 3.25 0 0 1 6.75 13h-1.5A4.75 4.75 0 0 0 10 17.75v-1.5ZM21.25 13A3.25 3.25 0 0 1 18 16.25v1.5A4.75 4.75 0 0 0 22.75 13h-1.5ZM18 4.75A3.25 3.25 0 0 1 21.25 8h1.5A4.75 4.75 0 0 0 18 3.25v1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M5.26 5.123a.75.75 0 0 0 1.48-.246l-1.48.246Zm.38-2.287-.74.123.74-.123ZM2 1.25a.75.75 0 0 0 0 1.5v-1.5Zm4.74 3.627-.36-2.165-1.48.247.36 2.164 1.48-.246ZM4.653 1.25H2v1.5h2.653v-1.5Zm1.726 1.462A1.75 1.75 0 0 0 4.653 1.25v1.5a.25.25 0 0 1 .246.209l1.48-.247ZM10.25 20.5a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm9.75.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm-1.97-7.22a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-3.237.763.53-.53-.53.53Zm-.763-1.823a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM14.75 8a.75.75 0 0 0-1.5 0h1.5Zm-1.5 5a.75.75 0 0 0 1.5 0h-1.5Zm2.22-1.53-1.293 1.293 1.06 1.06 1.293-1.293-1.06-1.06Zm-1.647 1.293L12.53 11.47l-1.06 1.06 1.293 1.293 1.06-1.06Zm.354 0a.25.25 0 0 1-.354 0l-1.06 1.06a1.75 1.75 0 0 0 2.474 0l-1.06-1.06ZM13.25 8v5h1.5V8h-1.5Z' })));
};
var ForwardRef$8F = forwardRef(SvgCartArrowDown);

var SvgCartArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M2 1.25a.75.75 0 0 0 0 1.5v-1.5Zm4 3.5h12v-1.5H6v1.5ZM21.25 8v5h1.5V8h-1.5ZM18 16.25h-8v1.5h8v-1.5ZM6.75 13V4h-1.5v9h1.5ZM4 1.25H2v1.5h2v-1.5ZM6.75 4A2.75 2.75 0 0 0 4 1.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM10 16.25A3.25 3.25 0 0 1 6.75 13h-1.5A4.75 4.75 0 0 0 10 17.75v-1.5ZM21.25 13A3.25 3.25 0 0 1 18 16.25v1.5A4.75 4.75 0 0 0 22.75 13h-1.5ZM18 4.75A3.25 3.25 0 0 1 21.25 8h1.5A4.75 4.75 0 0 0 18 3.25v1.5ZM10.25 20.5a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm9.75.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm-3.03-9.634a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-.763-1.823-.53.53.53-.53Zm-1.414 0 .53.53-.53-.53Zm-1.823.762a.75.75 0 1 0 1.06 1.061l-1.06-1.06Zm1.78 4.53a.75.75 0 0 0 1.5 0h-1.5Zm1.5-5a.75.75 0 0 0-1.5 0h1.5Zm1.78.47-1.293-1.292-1.06 1.06 1.293 1.293 1.06-1.06Zm-3.767-1.292L11.47 9.055l1.06 1.061 1.293-1.293-1.06-1.06Zm2.474 0a1.75 1.75 0 0 0-2.474 0l1.06 1.06a.25.25 0 0 1 .354 0l1.06-1.06Zm-.487 5.823v-5h-1.5v5h1.5Z' })));
};
var ForwardRef$8E = forwardRef(SvgCartArrowUp);

var SvgCartCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M10.25 20.5a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm9.75.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm-7.031-9.336a.75.75 0 0 0-.938 1.172l.938-1.172Zm1.284 1.988.468-.585-.468.585Zm1.377-.122-.564-.494.564.494Zm3.434-2.786a.75.75 0 1 0-1.128-.988l1.128.988Zm-7.033 2.092 1.753 1.402.937-1.171-1.752-1.403-.938 1.172Zm4.163 1.188 2.87-3.28-1.128-.988-2.87 3.28 1.128.988Zm-2.41.214a1.75 1.75 0 0 0 2.41-.214l-1.128-.988a.25.25 0 0 1-.345.03l-.937 1.172ZM2 1.25a.75.75 0 0 0 0 1.5v-1.5Zm4 3.5h12v-1.5H6v1.5ZM21.25 8v5h1.5V8h-1.5ZM18 16.25h-8v1.5h8v-1.5ZM6.75 13V4h-1.5v9h1.5ZM4 1.25H2v1.5h2v-1.5ZM6.75 4A2.75 2.75 0 0 0 4 1.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM10 16.25A3.25 3.25 0 0 1 6.75 13h-1.5A4.75 4.75 0 0 0 10 17.75v-1.5ZM21.25 13A3.25 3.25 0 0 1 18 16.25v1.5A4.75 4.75 0 0 0 22.75 13h-1.5ZM18 4.75A3.25 3.25 0 0 1 21.25 8h1.5A4.75 4.75 0 0 0 18 3.25v1.5Z' })));
};
var ForwardRef$8D = forwardRef(SvgCartCheck);

var SvgCartHasDash = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M2 1.25a.75.75 0 0 0 0 1.5v-1.5Zm4 3.5h12v-1.5H6v1.5ZM21.25 8v5h1.5V8h-1.5ZM18 16.25h-8v1.5h8v-1.5ZM6.75 13V4h-1.5v9h1.5ZM4 1.25H2v1.5h2v-1.5ZM6.75 4A2.75 2.75 0 0 0 4 1.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM10 16.25A3.25 3.25 0 0 1 6.75 13h-1.5A4.75 4.75 0 0 0 10 17.75v-1.5ZM21.25 13A3.25 3.25 0 0 1 18 16.25v1.5A4.75 4.75 0 0 0 22.75 13h-1.5ZM18 4.75A3.25 3.25 0 0 1 21.25 8h1.5A4.75 4.75 0 0 0 18 3.25v1.5ZM10.25 20.5a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm9.75.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm-7.5-12a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6 0h6v-1.5h-6v1.5Zm0 2.5a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6 0h6v-1.5h-6v1.5Z' })));
};
var ForwardRef$8C = forwardRef(SvgCartHasDash);

var SvgCartMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M2 1.25a.75.75 0 0 0 0 1.5v-1.5Zm4 3.5h12v-1.5H6v1.5ZM21.25 8v5h1.5V8h-1.5ZM18 16.25h-8v1.5h8v-1.5ZM6.75 13V4h-1.5v9h1.5ZM4 1.25H2v1.5h2v-1.5ZM6.75 4A2.75 2.75 0 0 0 4 1.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM10 16.25A3.25 3.25 0 0 1 6.75 13h-1.5A4.75 4.75 0 0 0 10 17.75v-1.5ZM21.25 13A3.25 3.25 0 0 1 18 16.25v1.5A4.75 4.75 0 0 0 22.75 13h-1.5ZM18 4.75A3.25 3.25 0 0 1 21.25 8h1.5A4.75 4.75 0 0 0 18 3.25v1.5ZM10.25 20.5a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm9.75.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm-2-8.5a.75.75 0 0 0 0-1.5v1.5Zm-5-1.5a.75.75 0 0 0 0 1.5v-1.5Zm5 0h-5v1.5h5v-1.5Z' })));
};
var ForwardRef$8B = forwardRef(SvgCartMinus);

var SvgCartRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M2 1.25a.75.75 0 0 0 0 1.5v-1.5Zm4 3.5h12v-1.5H6v1.5ZM21.25 8v5h1.5V8h-1.5ZM18 16.25h-8v1.5h8v-1.5ZM6.75 13V4h-1.5v9h1.5ZM4 1.25H2v1.5h2v-1.5ZM6.75 4A2.75 2.75 0 0 0 4 1.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM10 16.25A3.25 3.25 0 0 1 6.75 13h-1.5A4.75 4.75 0 0 0 10 17.75v-1.5ZM21.25 13A3.25 3.25 0 0 1 18 16.25v1.5A4.75 4.75 0 0 0 22.75 13h-1.5ZM18 4.75A3.25 3.25 0 0 1 21.25 8h1.5A4.75 4.75 0 0 0 18 3.25v1.5ZM10.25 20.5a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm9.75.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm-3.262-6.952a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-4.596a.75.75 0 1 0-1.061 1.06l1.06-1.06Zm3.535 3.535-3.535-3.535-1.061 1.06 3.536 3.536 1.06-1.06Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M11.702 11.737a.75.75 0 0 0 1.06 1.061l-1.06-1.06Zm4.596-2.474a.75.75 0 0 0-1.06-1.061l1.06 1.06Zm-3.535 3.535 3.535-3.535-1.06-1.061-3.536 3.535 1.06 1.061Z' })));
};
var ForwardRef$8A = forwardRef(SvgCartRemove);

var SvgCartSmile = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M2 1.25a.75.75 0 0 0 0 1.5v-1.5Zm4 3.5h12v-1.5H6v1.5ZM21.25 8v5h1.5V8h-1.5ZM18 16.25h-8v1.5h8v-1.5ZM6.75 13V4h-1.5v9h1.5ZM4 1.25H2v1.5h2v-1.5ZM6.75 4A2.75 2.75 0 0 0 4 1.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM10 16.25A3.25 3.25 0 0 1 6.75 13h-1.5A4.75 4.75 0 0 0 10 17.75v-1.5ZM21.25 13A3.25 3.25 0 0 1 18 16.25v1.5A4.75 4.75 0 0 0 22.75 13h-1.5ZM18 4.75A3.25 3.25 0 0 1 21.25 8h1.5A4.75 4.75 0 0 0 18 3.25v1.5ZM10.25 20.5a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm9.75.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm-7.13-8.402a.75.75 0 1 0-.74 1.304l.74-1.304Zm5.998 1.305a.75.75 0 1 0-.736-1.306l.736 1.306Zm-6.739-.001c1.22.694 2.269 1.1 3.374 1.098 1.104-.002 2.15-.412 3.365-1.097l-.736-1.306c-1.138.64-1.913.902-2.632.903-.718.001-1.493-.255-2.63-.902l-.74 1.304Z' })));
};
var ForwardRef$8z = forwardRef(SvgCartSmile);

var SvgCart = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M10.25 20.5a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm9.75.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5ZM2 1.25a.75.75 0 0 0 0 1.5v-1.5Zm4 6a.75.75 0 0 0 0 1.5v-1.5Zm15.5 1.5a.75.75 0 0 0 0-1.5v1.5ZM6 4.75h12v-1.5H6v1.5ZM21.25 8v5h1.5V8h-1.5ZM18 16.25h-8v1.5h8v-1.5ZM6.75 13V4h-1.5v9h1.5ZM4 1.25H2v1.5h2v-1.5Zm2 7.5h15.5v-1.5H6v1.5ZM6.75 4A2.75 2.75 0 0 0 4 1.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM10 16.25A3.25 3.25 0 0 1 6.75 13h-1.5A4.75 4.75 0 0 0 10 17.75v-1.5ZM21.25 13A3.25 3.25 0 0 1 18 16.25v1.5A4.75 4.75 0 0 0 22.75 13h-1.5ZM18 4.75A3.25 3.25 0 0 1 21.25 8h1.5A4.75 4.75 0 0 0 18 3.25v1.5Z' })));
};
var ForwardRef$8y = forwardRef(SvgCart);

var SvgCast = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M4 21a2 2 0 0 0-2-2m6 2a6 6 0 0 0-6-6m10 6c0-5.523-4.477-10-10-10' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M2 7.429V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4h-2.6' })));
};
var ForwardRef$8x = forwardRef(SvgCast);

var SvgCctv = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M7.25 17a.75.75 0 0 0 1.5 0h-1.5ZM8 16h-.75H8Zm8 0h-.75.75Zm-.75 1a.75.75 0 0 0 1.5 0h-1.5ZM12 12v.75V12Zm9.75-3a.75.75 0 0 0-1.5 0h1.5Zm-18 0a.75.75 0 0 0-1.5 0h1.5Zm5 8v-1h-1.5v1h1.5Zm6.5-1v1h1.5v-1h-1.5ZM12 12.75A3.25 3.25 0 0 1 15.25 16h1.5A4.75 4.75 0 0 0 12 11.25v1.5ZM8.75 16A3.25 3.25 0 0 1 12 12.75v-1.5A4.75 4.75 0 0 0 7.25 16h1.5Zm11.5-7A8.25 8.25 0 0 1 12 17.25v1.5A9.75 9.75 0 0 0 21.75 9h-1.5ZM12 17.25A8.25 8.25 0 0 1 3.75 9h-1.5A9.75 9.75 0 0 0 12 18.75v-1.5ZM3.5 6.75h17v-1.5h-17v1.5Zm17 1.5h-17v1.5h17v-1.5Zm-17 0a.75.75 0 0 1-.75-.75h-1.5A2.25 2.25 0 0 0 3.5 9.75v-1.5Zm17.75-.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm-17-1.5A2.25 2.25 0 0 0 1.25 7.5h1.5a.75.75 0 0 1 .75-.75v-1.5Z' }),
        React.createElement("circle", { r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 12 15)' })));
};
var ForwardRef$8w = forwardRef(SvgCctv);

var SvgChartArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M2 2v16a4 4 0 0 0 4 4h16' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm7 10 2.586 2.586a2 2 0 0 0 2.828 0l1.172-1.172a2 2 0 0 1 2.828 0L19 14' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M17.5 15H19a1 1 0 0 0 1-1v-1.5' })));
};
var ForwardRef$8v = forwardRef(SvgChartArrowDown);

var SvgChartArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M2 2v16a4 4 0 0 0 4 4h16' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm7 14 2.586-2.586a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 0 2.828 0L19 10' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M17.5 9H19a1 1 0 0 1 1 1v1.5' })));
};
var ForwardRef$8u = forwardRef(SvgChartArrowUp);

var SvgChartHistogram = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M7 14v3m4-5v5m4-3v3m4-5v5M2 2v16a4 4 0 0 0 4 4h16' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm7 10 2.586-2.586a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 0 2.828 0L19 6' })));
};
var ForwardRef$8t = forwardRef(SvgChartHistogram);

var SvgClipboardActivity = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M16 4h1a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h1m8 0a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2m8 0a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M7 13h2l2-2 2 4 2-2h2' })));
};
var ForwardRef$8s = forwardRef(SvgClipboardActivity);

var SvgClipboardAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M12.75 11a.75.75 0 0 0-1.5 0h1.5Zm-1.5 6a.75.75 0 0 0 1.5 0h-1.5ZM15 14.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5ZM11.25 11v6h1.5v-6h-1.5Zm9-3v10h1.5V8h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V8h-1.5v10h1.5ZM16 4.75h1v-1.5h-1v1.5Zm-9 0h1v-1.5H7v1.5Zm0 16.5A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Zm1.5-10A4.75 4.75 0 0 0 17 3.25v1.5A3.25 3.25 0 0 1 20.25 8h1.5Zm-18 0A3.25 3.25 0 0 1 7 4.75v-1.5A4.75 4.75 0 0 0 2.25 8h1.5ZM10 2.75h4v-1.5h-4v1.5Zm4 2.5h-4v1.5h4v-1.5Zm-4 0c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 6.75v-1.5ZM15.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 4h-1.5ZM14 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 7.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm5 12H9v1.5h6v-1.5Z' })));
};
var ForwardRef$8r = forwardRef(SvgClipboardAdd);

var SvgClipboardCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M9.469 13.414a.75.75 0 0 0-.938 1.172l.938-1.172Zm1.284 1.988.468-.585-.468.585Zm1.377-.122-.564-.494.564.494Zm3.434-2.786a.75.75 0 1 0-1.128-.988l1.128.988Zm-7.033 2.092 1.753 1.402.937-1.171-1.752-1.403-.938 1.172Zm4.163 1.188 2.87-3.28-1.128-.988-2.87 3.28 1.128.988Zm-2.41.214a1.75 1.75 0 0 0 2.41-.214l-1.128-.988a.25.25 0 0 1-.345.03l-.937 1.172ZM20.25 8v10h1.5V8h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V8h-1.5v10h1.5ZM16 4.75h1v-1.5h-1v1.5Zm-9 0h1v-1.5H7v1.5Zm0 16.5A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Zm1.5-10A4.75 4.75 0 0 0 17 3.25v1.5A3.25 3.25 0 0 1 20.25 8h1.5Zm-18 0A3.25 3.25 0 0 1 7 4.75v-1.5A4.75 4.75 0 0 0 2.25 8h1.5ZM10 2.75h4v-1.5h-4v1.5Zm4 2.5h-4v1.5h4v-1.5Zm-4 0c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 6.75v-1.5ZM15.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 4h-1.5ZM14 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 7.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z' })));
};
var ForwardRef$8q = forwardRef(SvgClipboardCheck);

var SvgClipboardDelete = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M14.652 12.409a.75.75 0 0 0-1.061-1.06l1.06 1.06Zm-5.304 3.182a.75.75 0 1 0 1.061 1.06l-1.06-1.06Zm4.243 1.06a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-3.182-5.303a.75.75 0 1 0-1.06 1.061l1.06-1.06Zm3.182 0-4.243 4.243 1.061 1.06 4.243-4.242-1.061-1.06ZM20.25 8v10h1.5V8h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V8h-1.5v10h1.5ZM16 4.75h1v-1.5h-1v1.5Zm-9 0h1v-1.5H7v1.5Zm0 16.5A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Zm1.5-10A4.75 4.75 0 0 0 17 3.25v1.5A3.25 3.25 0 0 1 20.25 8h1.5Zm-18 0A3.25 3.25 0 0 1 7 4.75v-1.5A4.75 4.75 0 0 0 2.25 8h1.5ZM10 2.75h4v-1.5h-4v1.5Zm4 2.5h-4v1.5h4v-1.5Zm-4 0c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 6.75v-1.5ZM15.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 4h-1.5ZM14 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 7.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm4.652 14.341-4.243-4.243-1.06 1.061 4.242 4.243 1.06-1.061Z' })));
};
var ForwardRef$8p = forwardRef(SvgClipboardDelete);

var SvgClipboardDownload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M10.53 14.47a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm.763 1.823-.53.53.53-.53Zm1.414 0-.53-.53.53.53Zm1.823-.763a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM12.75 11a.75.75 0 0 0-1.5 0h1.5Zm-1.5 5a.75.75 0 0 0 1.5 0h-1.5Zm-1.78-.47 1.293 1.293 1.06-1.06-1.293-1.293-1.06 1.06Zm3.767 1.293 1.293-1.293-1.06-1.06-1.293 1.293 1.06 1.06Zm-2.474 0a1.75 1.75 0 0 0 2.474 0l-1.06-1.06a.25.25 0 0 1-.354 0l-1.06 1.06ZM11.25 11v5h1.5v-5h-1.5Zm9-3v10h1.5V8h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V8h-1.5v10h1.5ZM16 4.75h1v-1.5h-1v1.5Zm-9 0h1v-1.5H7v1.5Zm0 16.5A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Zm1.5-10A4.75 4.75 0 0 0 17 3.25v1.5A3.25 3.25 0 0 1 20.25 8h1.5Zm-18 0A3.25 3.25 0 0 1 7 4.75v-1.5A4.75 4.75 0 0 0 2.25 8h1.5ZM10 2.75h4v-1.5h-4v1.5Zm4 2.5h-4v1.5h4v-1.5Zm-4 0c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 6.75v-1.5ZM15.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 4h-1.5ZM14 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 7.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z' })));
};
var ForwardRef$8o = forwardRef(SvgClipboardDownload);

var SvgClipboardFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm12 12.182-.53.53a.75.75 0 0 0 1.06 0l-.53-.53Zm.265-.265.53.53-.53-.53Zm-.53 0-.53.53.53-.53Zm-2.652 2.651.53-.53-.53.53Zm1.856 1.857-.53.53.53-.53Zm1.591-3.713.265-.265-1.06-1.06-.265.265 1.06 1.06Zm-1.326-.265.266.265 1.06-1.06-.265-.265-1.06 1.06ZM8.553 15.1l1.856 1.856 1.06-1.06-1.856-1.857-1.06 1.06Zm5.038 1.856 1.856-1.856-1.06-1.06-1.857 1.855 1.06 1.06Zm.795-4.508c.44.44.44 1.152 0 1.591l1.061 1.06a2.625 2.625 0 0 0 0-3.712l-1.06 1.061Zm1.061-1.06a2.625 2.625 0 0 0-3.712 0l1.06 1.06c.44-.44 1.152-.44 1.591 0l1.061-1.06Zm-5.834 1.06c.44-.44 1.152-.44 1.591 0l1.061-1.06a2.625 2.625 0 0 0-3.712 0l1.06 1.06Zm.796 4.508a2.25 2.25 0 0 0 3.182 0l-1.06-1.06a.75.75 0 0 1-1.061 0l-1.061 1.06Zm-1.856-5.568a2.625 2.625 0 0 0 0 3.712l1.06-1.06a1.125 1.125 0 0 1 0-1.592l-1.06-1.06ZM20.25 8v10h1.5V8h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V8h-1.5v10h1.5ZM16 4.75h1v-1.5h-1v1.5Zm-9 0h1v-1.5H7v1.5Zm0 16.5A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Zm1.5-10A4.75 4.75 0 0 0 17 3.25v1.5A3.25 3.25 0 0 1 20.25 8h1.5Zm-18 0A3.25 3.25 0 0 1 7 4.75v-1.5A4.75 4.75 0 0 0 2.25 8h1.5ZM10 2.75h4v-1.5h-4v1.5Zm4 2.5h-4v1.5h4v-1.5Zm-4 0c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 6.75v-1.5ZM15.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 4h-1.5ZM14 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 7.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z' })));
};
var ForwardRef$8n = forwardRef(SvgClipboardFavourite);

var SvgClipboardList = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M12 9.25a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-4 2.5a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-4 2.5a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5ZM20.25 8v10h1.5V8h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V8h-1.5v10h1.5ZM16 4.75h1v-1.5h-1v1.5Zm-9 0h1v-1.5H7v1.5Zm0 16.5A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Zm1.5-10A4.75 4.75 0 0 0 17 3.25v1.5A3.25 3.25 0 0 1 20.25 8h1.5Zm-18 0A3.25 3.25 0 0 1 7 4.75v-1.5A4.75 4.75 0 0 0 2.25 8h1.5ZM10 2.75h4v-1.5h-4v1.5Zm4 2.5h-4v1.5h4v-1.5Zm-4 0c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 6.75v-1.5ZM15.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 4h-1.5ZM14 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 7.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm2 9.5h4v-1.5h-4v1.5Zm0 4h4v-1.5h-4v1.5Zm0 4h4v-1.5h-4v1.5ZM9.5 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' })));
};
var ForwardRef$8m = forwardRef(SvgClipboardList);

var SvgClipboardMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15 14.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm6 0H9v1.5h6v-1.5ZM20.25 8v10h1.5V8h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V8h-1.5v10h1.5ZM16 4.75h1v-1.5h-1v1.5Zm-9 0h1v-1.5H7v1.5Zm0 16.5A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Zm1.5-10A4.75 4.75 0 0 0 17 3.25v1.5A3.25 3.25 0 0 1 20.25 8h1.5Zm-18 0A3.25 3.25 0 0 1 7 4.75v-1.5A4.75 4.75 0 0 0 2.25 8h1.5ZM10 2.75h4v-1.5h-4v1.5Zm4 2.5h-4v1.5h4v-1.5Zm-4 0c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 6.75v-1.5ZM15.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 4h-1.5ZM14 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 7.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z' })));
};
var ForwardRef$8l = forwardRef(SvgClipboardMinus);

var SvgClipboardSearch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15.03 14.97a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-.06 2.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM14.25 13A2.25 2.25 0 0 1 12 15.25v1.5A3.75 3.75 0 0 0 15.75 13h-1.5ZM12 15.25A2.25 2.25 0 0 1 9.75 13h-1.5A3.75 3.75 0 0 0 12 16.75v-1.5ZM9.75 13A2.25 2.25 0 0 1 12 10.75v-1.5A3.75 3.75 0 0 0 8.25 13h1.5ZM12 10.75A2.25 2.25 0 0 1 14.25 13h1.5A3.75 3.75 0 0 0 12 9.25v1.5Zm1.97 5.28 1 1 1.06-1.06-1-1-1.06 1.06ZM20.25 8v10h1.5V8h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V8h-1.5v10h1.5ZM16 4.75h1v-1.5h-1v1.5Zm-9 0h1v-1.5H7v1.5Zm0 16.5A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Zm1.5-10A4.75 4.75 0 0 0 17 3.25v1.5A3.25 3.25 0 0 1 20.25 8h1.5Zm-18 0A3.25 3.25 0 0 1 7 4.75v-1.5A4.75 4.75 0 0 0 2.25 8h1.5ZM10 2.75h4v-1.5h-4v1.5Zm4 2.5h-4v1.5h4v-1.5Zm-4 0c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 6.75v-1.5ZM15.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 4h-1.5ZM14 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 7.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z' })));
};
var ForwardRef$8k = forwardRef(SvgClipboardSearch);

var SvgClipboardUpload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M9.47 12.056a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm1.823-.763-.53-.53.53.53Zm1.414 0-.53.53.53-.53Zm.763 1.823a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-2.22 3.47a.75.75 0 0 0 1.5 0h-1.5Zm1.5-5a.75.75 0 0 0-1.5 0h1.5Zm-2.22 1.53 1.293-1.293-1.06-1.06-1.293 1.293 1.06 1.06Zm1.647-1.293 1.293 1.293 1.06-1.06-1.293-1.293-1.06 1.06Zm-.354 0a.25.25 0 0 1 .354 0l1.06-1.06a1.75 1.75 0 0 0-2.474 0l1.06 1.06Zm.927 4.763v-5h-1.5v5h1.5ZM20.25 8v10h1.5V8h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V8h-1.5v10h1.5ZM16 4.75h1v-1.5h-1v1.5Zm-9 0h1v-1.5H7v1.5Zm0 16.5A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Zm1.5-10A4.75 4.75 0 0 0 17 3.25v1.5A3.25 3.25 0 0 1 20.25 8h1.5Zm-18 0A3.25 3.25 0 0 1 7 4.75v-1.5A4.75 4.75 0 0 0 2.25 8h1.5ZM10 2.75h4v-1.5h-4v1.5Zm4 2.5h-4v1.5h4v-1.5Zm-4 0c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 6.75v-1.5ZM15.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 4h-1.5ZM14 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 7.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z' })));
};
var ForwardRef$8j = forwardRef(SvgClipboardUpload);

var SvgClipboard = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M8 9.25a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8 2.5a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8 2.5a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5ZM20.25 8v10h1.5V8h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V8h-1.5v10h1.5ZM16 4.75h1v-1.5h-1v1.5Zm-9 0h1v-1.5H7v1.5Zm0 16.5A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Zm1.5-10A4.75 4.75 0 0 0 17 3.25v1.5A3.25 3.25 0 0 1 20.25 8h1.5Zm-18 0A3.25 3.25 0 0 1 7 4.75v-1.5A4.75 4.75 0 0 0 2.25 8h1.5ZM8 10.75h8v-1.5H8v1.5Zm0 4h8v-1.5H8v1.5Zm0 4h4v-1.5H8v1.5Zm2-16h4v-1.5h-4v1.5Zm4 2.5h-4v1.5h4v-1.5Zm-4 0c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 6.75v-1.5ZM15.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 4h-1.5ZM14 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 7.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z' })));
};
var ForwardRef$8i = forwardRef(SvgClipboard);

var SvgCoinDollar = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M14 10a2 2 0 1 0-2 2m0 0a2 2 0 1 1-2 2' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 6.5V8m0 8v1.5' })));
};
var ForwardRef$8h = forwardRef(SvgCoinDollar);

var SvgCoinEuro = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M16 9.2A4.113 4.113 0 0 0 13.083 8C10.828 8 9 9.79 9 12s1.828 4 4.083 4c1.143 0 2.176-.46 2.917-1.2' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 13.5h5m-5-3h5' })));
};
var ForwardRef$8g = forwardRef(SvgCoinEuro);

var SvgCoinPound = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M9 12h4m1-2.118v-.497C14 8.62 13.38 8 12.615 8v0c-.764 0-1.384.62-1.384 1.385v.57a6.16 6.16 0 0 1-1.485 4.01v0c-.686.8-.118 2.035.934 2.035H14' })));
};
var ForwardRef$8f = forwardRef(SvgCoinPound);

var SvgCoinYen = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M9 11h6m-6 3h6M9 7l3 4 3-4m-3 4v6' })));
};
var ForwardRef$8e = forwardRef(SvgCoinYen);

var SvgCoin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 4, height: 12, x: 20, y: 4, stroke: 'currentColor', strokeWidth: 1.5, rx: 2, transform: 'rotate(90 20 4)' }),
        React.createElement("rect", { width: 4, height: 12, x: 20, y: 12, stroke: 'currentColor', strokeWidth: 1.5, rx: 2, transform: 'rotate(90 20 12)' }),
        React.createElement("rect", { width: 4, height: 12, x: 16, y: 8, stroke: 'currentColor', strokeWidth: 1.5, rx: 2, transform: 'rotate(90 16 8)' }),
        React.createElement("rect", { width: 4, height: 12, x: 17, y: 16, stroke: 'currentColor', strokeWidth: 1.5, rx: 2, transform: 'rotate(90 17 16)' })));
};
var ForwardRef$8d = forwardRef(SvgCoin);

var SvgColorInversion = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M3 13.111C3 8.201 8.625 2 12 2s9 6.202 9 11.111C21 18.021 16.97 22 12 22s-9-3.98-9-8.889Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 2v20' })));
};
var ForwardRef$8c = forwardRef(SvgColorInversion);

var SvgComputer = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 20, height: 16, x: 2, y: 2, stroke: 'currentColor', strokeWidth: 1.5, rx: 3 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M9 22h3m3 0h-3m0 0v-4' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M11 15h2' })));
};
var ForwardRef$8b = forwardRef(SvgComputer);

var SvgCoupon = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm21.018 14.836-.245.708.245-.708Zm0-5.672.245.71-.245-.71ZM2.982 14.836l.245.708-.245-.708Zm0-5.672-.245.71.245-.71ZM6 20.25A3.25 3.25 0 0 1 2.75 17h-1.5A4.75 4.75 0 0 0 6 21.75v-1.5ZM21.25 17A3.25 3.25 0 0 1 18 20.25v1.5A4.75 4.75 0 0 0 22.75 17h-1.5ZM18 3.75A3.25 3.25 0 0 1 21.25 7h1.5A4.75 4.75 0 0 0 18 2.25v1.5ZM6 2.25A4.75 4.75 0 0 0 1.25 7h1.5A3.25 3.25 0 0 1 6 3.75v-1.5Zm15.264 11.877A2.251 2.251 0 0 1 19.75 12h-1.5a3.751 3.751 0 0 0 2.523 3.544l.49-1.417ZM19.75 12a2.25 2.25 0 0 1 1.514-2.127l-.491-1.417A3.751 3.751 0 0 0 18.25 12h1.5Zm-15.5 0c0 .984-.632 1.822-1.513 2.127l.49 1.417A3.751 3.751 0 0 0 5.75 12h-1.5ZM2.737 9.873A2.251 2.251 0 0 1 4.25 12h1.5a3.751 3.751 0 0 0-2.523-3.544l-.49 1.417ZM22.75 8V7h-1.5v1h1.5Zm-1.5 8v1h1.5v-1h-1.5Zm-20 0v1h1.5v-1h-1.5Zm1.5-8V7h-1.5v1h1.5ZM18 20.25H6v1.5h12v-1.5Zm0-18H6v1.5h12v-1.5ZM2.737 14.127c-.68.235-1.487.87-1.487 1.873h1.5c0-.056.02-.13.102-.219a.92.92 0 0 1 .375-.237l-.49-1.417Zm18.527-4.254c.678-.235 1.486-.87 1.486-1.873h-1.5c0 .056-.02.13-.102.219a.921.921 0 0 1-.375.237l.49 1.417ZM3.227 8.456a.921.921 0 0 1-.375-.237C2.77 8.129 2.75 8.056 2.75 8h-1.5c0 1.002.808 1.638 1.487 1.873l.49-1.417Zm17.546 7.088a.92.92 0 0 1 .375.237c.081.09.102.163.102.219h1.5c0-1.002-.808-1.638-1.486-1.873l-.491 1.417ZM10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-.47-5.47a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-7.06 4.94a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm6-6-6 6 1.06 1.06 6-6-1.06-1.06Z' })));
};
var ForwardRef$8a = forwardRef(SvgCoupon);

var SvgCube = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M20 6.444 12 10 4 6.444' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm18.625 4.944-5-2.222a4 4 0 0 0-3.25 0l-5 2.222A4 4 0 0 0 3 8.6v6.8a4 4 0 0 0 2.375 3.656l5 2.222a4 4 0 0 0 3.25 0l5-2.222A4 4 0 0 0 21 15.4V8.6a4 4 0 0 0-2.375-3.656ZM12 10v11' })));
};
var ForwardRef$89 = forwardRef(SvgCube);

var SvgDarkMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 2v20' })));
};
var ForwardRef$88 = forwardRef(SvgDarkMode);

var SvgDeliveryAirPlane = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 12, height: 12, x: 6, y: 2, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M13 5h-2' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'm5.434 15.828-1.55-1.513a1.117 1.117 0 0 0-.78-.315c-.77 0-1.303.751-1.033 1.455l1.517 3.95C4.188 20.964 5.717 22 7.425 22h13.126c.8 0 1.449-.633 1.449-1.414a1.4 1.4 0 0 0-.424-1l-1.449-1.414A4.149 4.149 0 0 0 17.23 17h-8.9a4.149 4.149 0 0 1-2.897-1.172Z' })));
};
var ForwardRef$87 = forwardRef(SvgDeliveryAirPlane);

var SvgDeliveryCancel = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm9.414 8.586-2.828 2.828m2.828 0L6.586 8.586' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M14 19V7m0 12h2m-2 0H9m5-12a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a4.002 4.002 0 0 0 3.004 3.875M14 7h3.21a2 2 0 0 1 1.367.54l2.79 2.617a2 2 0 0 1 .633 1.46V17a2 2 0 0 1-2 2m0 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m-7 0a2 2 0 1 1-3.996-.125M9 19a2 2 0 0 0-3.996-.125' })));
};
var ForwardRef$86 = forwardRef(SvgDeliveryCancel);

var SvgDeliveryConveyor = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 12, height: 12, x: 6, y: 3, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("rect", { width: 20, height: 6, x: 2, y: 15, stroke: 'currentColor', strokeWidth: 1.5, rx: 3 }),
        React.createElement("circle", { cx: 17, cy: 18, r: 1, fill: 'currentColor' }),
        React.createElement("circle", { cx: 12, cy: 18, r: 1, fill: 'currentColor' }),
        React.createElement("circle", { cx: 7, cy: 18, r: 1, fill: 'currentColor' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M13 6h-2' })));
};
var ForwardRef$85 = forwardRef(SvgDeliveryConveyor);

var SvgDeliveryDone = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm5 10 1.753 1.402a1 1 0 0 0 1.377-.122L11 8' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M14 19V7m0 12h2m-2 0H9m5-12a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a4.002 4.002 0 0 0 3.004 3.875M14 7h3.21a2 2 0 0 1 1.367.54l2.79 2.617a2 2 0 0 1 .633 1.46V17a2 2 0 0 1-2 2m0 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m-7 0a2 2 0 1 1-3.996-.125M9 19a2 2 0 0 0-3.996-.125' })));
};
var ForwardRef$84 = forwardRef(SvgDeliveryDone);

var SvgDeliveryParachute = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 10, height: 10, x: 7, y: 12, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 2C7.582 2 4 4.686 4 8c0-1.105 1.79-2 4-2s4 .895 4 2c0-1.105 1.79-2 4-2s4 .895 4 2c0-3.314-3.582-6-8-6Zm1 12h-2m9-6-5 4m-3-4v4M4 8l5 4' })));
};
var ForwardRef$83 = forwardRef(SvgDeliveryParachute);

var SvgDeliveryTime = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M14 19V7m0 12h2m-2 0H9m5-12a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a4.002 4.002 0 0 0 3.004 3.875M14 7h3.21a2 2 0 0 1 1.367.54l2.79 2.617a2 2 0 0 1 .633 1.46V17a2 2 0 0 1-2 2m0 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m-7 0a2 2 0 1 1-3.996-.125M9 19a2 2 0 0 0-3.996-.125' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 7.5V11h2.5' })));
};
var ForwardRef$82 = forwardRef(SvgDeliveryTime);

var SvgDelivery = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M14 19V7m0 12h2m-2 0H9m5-12a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a4.002 4.002 0 0 0 3.004 3.875M14 7h3.21a2 2 0 0 1 1.367.54l2.79 2.617a2 2 0 0 1 .633 1.46V17a2 2 0 0 1-2 2m0 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m-7 0a2 2 0 1 1-3.996-.125M9 19a2 2 0 0 0-3.996-.125' })));
};
var ForwardRef$81 = forwardRef(SvgDelivery);

var SvgDeposit = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M18 7h.75a.75.75 0 0 0-.75-.75V7Zm0 4h-.75.75ZM6 7v-.75a.75.75 0 0 0-.75.75H6Zm11.25 0v4h1.5V7h-1.5Zm0 4v8h1.5v-8h-1.5ZM16 20.25H8v1.5h8v-1.5ZM6.75 19V7h-1.5v12h1.5ZM6 7.75h12v-1.5H6v1.5Zm0-4h12v-1.5H6v1.5ZM2.75 7A3.25 3.25 0 0 1 6 3.75v-1.5A4.75 4.75 0 0 0 1.25 7h1.5ZM6 10.25A3.25 3.25 0 0 1 2.75 7h-1.5A4.75 4.75 0 0 0 6 11.75v-1.5ZM21.25 7A3.25 3.25 0 0 1 18 10.25v1.5A4.75 4.75 0 0 0 22.75 7h-1.5Zm1.5 0A4.75 4.75 0 0 0 18 2.25v1.5A3.25 3.25 0 0 1 21.25 7h1.5Zm-5.5 12c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 18.75 19h-1.5ZM8 20.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 8 21.75v-1.5Zm5.47-7.134a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-.763-1.823-.53.53.53-.53Zm-1.414 0 .53.53-.53-.53Zm-1.823.763a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm1.78 4.53a.75.75 0 0 0 1.5 0h-1.5Zm1.5-5a.75.75 0 0 0-1.5 0h1.5Zm1.78.47-1.293-1.293-1.06 1.06 1.293 1.293 1.06-1.06Zm-3.767-1.293L9.47 12.056l1.06 1.06 1.293-1.293-1.06-1.06Zm2.474 0a1.75 1.75 0 0 0-2.474 0l1.06 1.06a.25.25 0 0 1 .354 0l1.06-1.06Zm-.487 5.823v-5h-1.5v5h1.5Z' })));
};
var ForwardRef$80 = forwardRef(SvgDeposit);

var SvgDestinationDashedThree = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M6.5 16a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm14 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M9 16c0 2.21-2 6-4 6s-4-3.79-4-6a4 4 0 0 1 8 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 5c0 1.123-.946 2.561-1.775 3.607-.651.82-1.841.864-2.522.069C16.892 7.729 16 6.414 16 5.209 16 3 17.343 2 19 2s3 1 3 3ZM8 5c0 1.123-.946 2.561-1.775 3.607-.651.82-1.841.864-2.522.069C2.892 7.729 2 6.414 2 5.209 2 3 3.343 2 5 2s3 1 3 3Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeDasharray: '.5 3', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm11 18 6.5-6.5M9 9.5h6' })));
};
var ForwardRef$7$ = forwardRef(SvgDestinationDashedThree);

var SvgDestinationDashedTwo = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M7.5 16a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM20 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M10 16c0 2.21-2 6-4 6s-4-3.79-4-6a4 4 0 0 1 8 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 5c0 1.123-.946 2.561-1.775 3.607-.651.82-1.841.864-2.522.069C16.892 7.729 16 6.414 16 5.209 16 3 17.343 2 19 2s3 1 3 3Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeDasharray: '.5 3', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm12.5 16 4.5-4.5' })));
};
var ForwardRef$7_ = forwardRef(SvgDestinationDashedTwo);

var SvgDestinationLine = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M13.076 13H10a2 2 0 1 0 0 4h9a2 2 0 1 1 0 4H3' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M17.267 6.342a1.317 1.317 0 1 1-2.634 0 1.317 1.317 0 0 1 2.634 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M19.9 6.342c0 2.181-2.633 5.267-3.95 5.267-1.316 0-3.95-3.086-3.95-5.267a3.95 3.95 0 1 1 7.9 0Z' })));
};
var ForwardRef$7Z = forwardRef(SvgDestinationLine);

var SvgDestination = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 14.039, cy: 5.268, r: 1.142, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M6.616 16.886a1.317 1.317 0 1 1-2.633 0 1.317 1.317 0 0 1 2.633 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M9.25 16.886c0 2.181-2.634 5.267-3.95 5.267-1.317 0-3.95-3.086-3.95-5.267a3.95 3.95 0 1 1 7.9 0Zm8.215-11.618c0 1.892-2.284 4.568-3.426 4.568-1.142 0-3.425-2.676-3.425-4.568a3.426 3.426 0 0 1 6.85 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M13.945 12.195v2.765a2.292 2.292 0 0 0 2.293 2.292h2.257a2.327 2.327 0 0 1 0 4.654h-8.53' })));
};
var ForwardRef$7Y = forwardRef(SvgDestination);

var SvgDevices = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 8, height: 13, x: 14, y: 7, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M20 4H6a2 2 0 0 0-2 2v11h7m0 0H3.5A1.5 1.5 0 0 0 2 18.5v0A1.5 1.5 0 0 0 3.5 20H11' })));
};
var ForwardRef$7X = forwardRef(SvgDevices);

var SvgDigitalHealth = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M14 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm5.852 15.246 3.719 4.599c1.245 1.54 3.613 1.54 4.858 0l3.72-4.598A3.82 3.82 0 0 0 19 12.845v-.173C19 10.644 17.338 9 15.288 9a3.73 3.73 0 0 0-2.625 1.076L12 10.73l-.663-.655A3.733 3.733 0 0 0 8.712 9C6.662 9 5 10.644 5 12.672v.173c0 .873.3 1.72.852 2.401Z' })));
};
var ForwardRef$7W = forwardRef(SvgDigitalHealth);

var SvgDirectionDownDoubleCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm8 9 2.8 2.1a2 2 0 0 0 2.4 0L16 9m-8 5 2.8 2.1a2 2 0 0 0 2.4 0L16 14' })));
};
var ForwardRef$7V = forwardRef(SvgDirectionDownDoubleCircle);

var SvgDirectionDownDoubleRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm8 8 2.8 2.1a2 2 0 0 0 2.4 0L16 8m-8 5 2.8 2.1a2 2 0 0 0 2.4 0L16 13' })));
};
var ForwardRef$7U = forwardRef(SvgDirectionDownDoubleRectangle);

var SvgDirectionDownDouble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm7 7 5 4 5-4M7 13l5 4 5-4' })));
};
var ForwardRef$7T = forwardRef(SvgDirectionDownDouble);

var SvgDirectionDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm7 10 5 4 5-4' })));
};
var ForwardRef$7S = forwardRef(SvgDirectionDown);

var SvgDirectionLeftDoubleCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm15 8-2.1 2.8a2 2 0 0 0 0 2.4L15 16m-5-8-2.1 2.8a2 2 0 0 0 0 2.4L10 16' })));
};
var ForwardRef$7R = forwardRef(SvgDirectionLeftDoubleCircle);

var SvgDirectionLeftDoubleRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm16 8-2.1 2.8a2 2 0 0 0 0 2.4L16 16m-5-8-2.1 2.8a2 2 0 0 0 0 2.4L11 16' })));
};
var ForwardRef$7Q = forwardRef(SvgDirectionLeftDoubleRectangle);

var SvgDirectionLeftDouble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm17 7-4 5 4 5M11 7l-4 5 4 5' })));
};
var ForwardRef$7P = forwardRef(SvgDirectionLeftDouble);

var SvgDirectionLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm14 7-4 5 4 5' })));
};
var ForwardRef$7O = forwardRef(SvgDirectionLeft);

var SvgDirectionRightDoubleCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm9 16 2.1-2.8a2 2 0 0 0 0-2.4L9 8m5 8 2.1-2.8a2 2 0 0 0 0-2.4L14 8' })));
};
var ForwardRef$7N = forwardRef(SvgDirectionRightDoubleCircle);

var SvgDirectionRightDoubleRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm9 16 2.1-2.8a2 2 0 0 0 0-2.4L9 8m5 8 2.1-2.8a2 2 0 0 0 0-2.4L14 8' })));
};
var ForwardRef$7M = forwardRef(SvgDirectionRightDoubleRectangle);

var SvgDirectionRightDouble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm7 7 4 5-4 5m6-10 4 5-4 5' })));
};
var ForwardRef$7L = forwardRef(SvgDirectionRightDouble);

var SvgDirectionRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm10 7 4 5-4 5' })));
};
var ForwardRef$7K = forwardRef(SvgDirectionRight);

var SvgDirectionUpDoubleCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm16 15-2.8-2.1a2 2 0 0 0-2.4 0L8 15m8-5-2.8-2.1a2 2 0 0 0-2.4 0L8 10' })));
};
var ForwardRef$7J = forwardRef(SvgDirectionUpDoubleCircle);

var SvgDirectionUpDoubleRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm16 15-2.8-2.1a2 2 0 0 0-2.4 0L8 15m8-5-2.8-2.1a2 2 0 0 0-2.4 0L8 10' })));
};
var ForwardRef$7I = forwardRef(SvgDirectionUpDoubleRectangle);

var SvgDirectionUpDouble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm7 17 5-4 5 4M7 11l5-4 5 4' })));
};
var ForwardRef$7H = forwardRef(SvgDirectionUpDouble);

var SvgDirectionUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm17 14-5-4-5 4' })));
};
var ForwardRef$7G = forwardRef(SvgDirectionUp);

var SvgDna = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M6.341 2C7.165 4.33 9.387 6 12 6a6 6 0 0 1 0 12 6.002 6.002 0 0 0-5.659 4' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M18 2a6.003 6.003 0 0 1-5.659 4 6 6 0 1 0 0 12A6.003 6.003 0 0 1 18 22M7 10h10M7 14h10' })));
};
var ForwardRef$7F = forwardRef(SvgDna);

var SvgDoNotDisturb = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M7 12h10' })));
};
var ForwardRef$7E = forwardRef(SvgDoNotDisturb);

var SvgDollar = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M15.5 8.5A3.5 3.5 0 1 0 12 12m-3.5 3.5A3.5 3.5 0 1 0 12 12' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 3v18' })));
};
var ForwardRef$7D = forwardRef(SvgDollar);

var SvgDonateCoin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M2 8h2l6.262 2.74a1.911 1.911 0 0 1 .99 2.503v0a1.911 1.911 0 0 1-2.509 1.004L7 13.5' }),
        React.createElement("path", { fill: 'currentColor', d: 'M2.335 16.33a.75.75 0 1 0-.67 1.34l.67-1.34Zm9-3-.67-.336-.671 1.341.67.336.671-1.342Zm2.398 2.037-.335.67.335-.67Zm2.683 1.383H18v-1.5h-1.584v1.5ZM18 19.25H9.889v1.5H18v-1.5Zm-11.354-.765-4.31-2.156-.671 1.342 4.31 2.155.671-1.341Zm7.423-3.79-2.734-1.366-.67 1.342 2.733 1.366.67-1.341Zm-4.18 4.555a7.25 7.25 0 0 1-3.243-.765l-.67 1.341a8.75 8.75 0 0 0 3.913.924v-1.5ZM19.25 18c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 18h-1.5ZM18 16.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 15.25v1.5Zm-1.584-1.5a5.25 5.25 0 0 1-2.348-.554l-.67 1.341a6.75 6.75 0 0 0 3.018.713v-1.5Z' }),
        React.createElement("circle", { cx: 18, cy: 8, r: 4, stroke: 'currentColor', strokeWidth: 1.5 })));
};
var ForwardRef$7C = forwardRef(SvgDonateCoin);

var SvgDonate = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M2 8h2l6.262 2.74a1.911 1.911 0 0 1 .99 2.503v0a1.911 1.911 0 0 1-2.509 1.004L7 13.5' }),
        React.createElement("path", { fill: 'currentColor', d: 'M2.335 16.33a.75.75 0 1 0-.67 1.34l.67-1.34Zm9-3-.67-.336-.671 1.341.67.336.671-1.342Zm2.398 2.037-.335.67.335-.67Zm2.683 1.383H18v-1.5h-1.584v1.5ZM18 19.25H9.889v1.5H18v-1.5Zm-11.354-.765-4.31-2.156-.671 1.342 4.31 2.155.671-1.341Zm7.423-3.79-2.734-1.366-.67 1.342 2.733 1.366.67-1.341Zm-4.18 4.555a7.25 7.25 0 0 1-3.243-.765l-.67 1.341a8.75 8.75 0 0 0 3.913.924v-1.5ZM19.25 18c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 18h-1.5ZM18 16.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 15.25v1.5Zm-1.584-1.5a5.25 5.25 0 0 1-2.348-.554l-.67 1.341a6.75 6.75 0 0 0 3.018.713v-1.5Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm12.608 8.51 2.83 3.538a2 2 0 0 0 3.124 0l2.83-3.538A2.776 2.776 0 0 0 22 6.776v-.124A2.652 2.652 0 0 0 19.348 4h-.297c-.513 0-1.005.204-1.367.566a.967.967 0 0 1-1.368 0A1.934 1.934 0 0 0 14.95 4h-.297A2.652 2.652 0 0 0 12 6.652v.124c0 .63.214 1.242.608 1.734Z' })));
};
var ForwardRef$7B = forwardRef(SvgDonate);

var SvgDonation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 9, height: 9, x: 13, y: 3, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18.5 6h-2M2 9h2l6.262 2.74a1.911 1.911 0 0 1 .99 2.503v0a1.911 1.911 0 0 1-2.509 1.004L7 14.5' }),
        React.createElement("path", { fill: 'currentColor', d: 'M2.335 17.33a.75.75 0 1 0-.67 1.34l.67-1.34Zm9-3-.67-.336-.671 1.341.67.336.671-1.342Zm2.398 2.037-.335.67.335-.67Zm2.683 1.383H18v-1.5h-1.584v1.5ZM18 20.25H9.889v1.5H18v-1.5Zm-11.354-.765-4.31-2.156-.671 1.342 4.31 2.155.671-1.341Zm7.423-3.79-2.734-1.366-.67 1.342 2.733 1.366.67-1.341Zm-4.18 4.555a7.25 7.25 0 0 1-3.243-.765l-.67 1.341a8.75 8.75 0 0 0 3.913.924v-1.5ZM19.25 19c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 19h-1.5ZM18 17.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 16.25v1.5Zm-1.584-1.5a5.25 5.25 0 0 1-2.348-.554l-.67 1.341a6.75 6.75 0 0 0 3.018.713v-1.5Z' })));
};
var ForwardRef$7A = forwardRef(SvgDonation);

var SvgDownloadCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm8 11 4 4m0 0 4-4m-4 4V1' }),
        React.createElement("path", { fill: 'currentColor', d: 'M18.83 7.53a.75.75 0 0 0-1.17.94l1.17-.94Zm-12.49.94a.75.75 0 1 0-1.17-.94l1.17.94ZM19.25 13A7.25 7.25 0 0 1 12 20.25v1.5A8.75 8.75 0 0 0 20.75 13h-1.5ZM12 20.25A7.25 7.25 0 0 1 4.75 13h-1.5A8.75 8.75 0 0 0 12 21.75v-1.5Zm5.66-11.78A7.216 7.216 0 0 1 19.25 13h1.5a8.716 8.716 0 0 0-1.92-5.47l-1.17.94ZM4.75 13c0-1.715.595-3.29 1.59-4.53l-1.17-.94A8.716 8.716 0 0 0 3.25 13h1.5Z' })));
};
var ForwardRef$7z = forwardRef(SvgDownloadCircle);

var SvgDownloadRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm9 12 3 3m0 0 3-3m-3 3V3M7.5 9H7a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-4a4 4 0 0 0-4-4h-.5' })));
};
var ForwardRef$7y = forwardRef(SvgDownloadRectangle);

var SvgDribbble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M16.935 3.3A9.954 9.954 0 0 0 12 2a9.96 9.96 0 0 0-6.455 2.362m11.39-1.061c-4.79 4.63-7.808 11.083-7.931 18.242m7.931-18.242a10.008 10.008 0 0 1 4.952 7.19M5.545 4.363C8.24 8.366 12.812 11 18 11a15.02 15.02 0 0 0 3.887-.508M5.545 4.362A9.978 9.978 0 0 0 2 12c0 4.48 2.945 8.27 7.004 9.543M2 12.853A14.977 14.977 0 0 1 7 12c5.195 0 9.773 2.641 12.465 6.654m-10.461 2.89A9.994 9.994 0 0 0 12 22a9.975 9.975 0 0 0 7.465-3.346m0 0A9.962 9.962 0 0 0 22 12c0-.513-.039-1.017-.113-1.508' })));
};
var ForwardRef$7x = forwardRef(SvgDribbble);

var SvgDrive = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm22 16-3 5H5m17-5L15 3H9m13 13h-5.778M5 21l-3-5L9 3M5 21l2.778-5M9 3l3 5.4m4.222 7.6H7.778m8.444 0L12 8.4M7.778 16 12 8.4' })));
};
var ForwardRef$7w = forwardRef(SvgDrive);

var SvgEarnings = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 2, cy: 2, r: 2, stroke: 'currentColor', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 14 18)' }),
        React.createElement("circle", { cx: 2, cy: 2, r: 2, stroke: 'currentColor', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 6 10)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M14 4h4a2 2 0 0 1 2 2v4m-1-5L4 20' })));
};
var ForwardRef$7v = forwardRef(SvgEarnings);

var SvgEuro = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M21 6.401A8.226 8.226 0 0 0 15.167 4C10.657 4 7 7.582 7 12s3.656 8 8.167 8A8.23 8.23 0 0 0 21 17.599' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 14h13M3 10h13' })));
};
var ForwardRef$7u = forwardRef(SvgEuro);

var SvgExchangeRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M7.25 12a.75.75 0 0 0 1.5 0h-1.5ZM16 9v.75a.75.75 0 0 0 .53-1.28L16 9Zm-1.47-2.53a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM8.75 12v-1h-1.5v1h1.5ZM10 9.75h6v-1.5h-6v1.5Zm6.53-1.28-2-2-1.06 1.06 2 2 1.06-1.06ZM8.75 11c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 7.25 11h1.5Zm8 1a.75.75 0 0 0-1.5 0h1.5ZM8 15v-.75a.75.75 0 0 0-.53 1.28L8 15Zm1.47 2.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM15.25 12v1h1.5v-1h-1.5ZM14 14.25H8v1.5h6v-1.5Zm-6.53 1.28 2 2 1.06-1.06-2-2-1.06 1.06ZM15.25 13c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 13h-1.5Z' })));
};
var ForwardRef$7t = forwardRef(SvgExchangeRectangle);

var SvgExchange = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M3.25 13a.75.75 0 0 0 1.5 0h-1.5ZM20 7v.75a.75.75 0 0 0 .53-1.28L20 7Zm-2.47-3.53a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM4.75 13v-1h-1.5v1h1.5ZM9 7.75h11v-1.5H9v1.5Zm11.53-1.28-3-3-1.06 1.06 3 3 1.06-1.06ZM4.75 12A4.25 4.25 0 0 1 9 7.75v-1.5A5.75 5.75 0 0 0 3.25 12h1.5Zm16-1a.75.75 0 0 0-1.5 0h1.5ZM4 17v-.75a.75.75 0 0 0-.53 1.28L4 17Zm2.47 3.53a.75.75 0 0 0 1.06-1.06l-1.06 1.06ZM19.25 11v1h1.5v-1h-1.5ZM15 16.25H4v1.5h11v-1.5ZM3.47 17.53l3 3 1.06-1.06-3-3-1.06 1.06ZM19.25 12A4.25 4.25 0 0 1 15 16.25v1.5A5.75 5.75 0 0 0 20.75 12h-1.5Z' })));
};
var ForwardRef$7s = forwardRef(SvgExchange);

var SvgEyeDropper = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm14.486 5.536 2.12-2.122a2 2 0 0 1 2.83 0v0a2 2 0 0 1 0 2.829l-2.122 2.121' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm14.485 5.536-5.9 5.9a4 4 0 0 0-1.17 2.828v1.171h1.17a4 4 0 0 0 2.83-1.171l5.899-5.9' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm13.071 4.121 5.657 5.657' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M7 20.5c0 1.105-.672 1.5-1.5 1.5S4 21.605 4 20.5 5.5 18 5.5 18 7 19.395 7 20.5Z' })));
};
var ForwardRef$7r = forwardRef(SvgEyeDropper);

var SvgEyeScannerBorder = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm4.912 13.101-.555.505.555-.505Zm0-2.202-.555-.505.555.505ZM19.088 13.1l.555.505-.555-.505Zm0-2.202.555-.505-.555.505ZM1.25 8a.75.75 0 0 0 1.5 0h-1.5ZM8 2.75a.75.75 0 0 0 0-1.5v1.5Zm8-1.5a.75.75 0 0 0 0 1.5v-1.5ZM21.25 8a.75.75 0 0 0 1.5 0h-1.5Zm1.5 8a.75.75 0 0 0-1.5 0h1.5ZM16 21.25a.75.75 0 0 0 0 1.5v-1.5Zm-8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-5.25-6.194a.75.75 0 1 0-1.5 0h1.5Zm15.783-3.96c-.644.71-1.598 1.634-2.745 2.377-1.15.746-2.445 1.277-3.788 1.277v1.5c1.735 0 3.315-.682 4.604-1.518 1.293-.838 2.345-1.862 3.039-2.626l-1.11-1.01ZM12 16.25c-1.343 0-2.638-.531-3.788-1.277-1.147-.743-2.1-1.668-2.745-2.376l-1.11 1.009c.694.764 1.746 1.788 3.039 2.626 1.29.836 2.869 1.518 4.604 1.518v-1.5Zm-6.533-4.847c.644-.708 1.598-1.633 2.745-2.376C9.362 8.28 10.657 7.75 12 7.75v-1.5c-1.735 0-3.315.682-4.604 1.518-1.293.838-2.345 1.863-3.039 2.626l1.11 1.01ZM12 7.75c1.343 0 2.638.531 3.789 1.277 1.146.743 2.1 1.668 2.744 2.376l1.11-1.009c-.694-.763-1.746-1.788-3.039-2.626C15.314 6.932 13.735 6.25 12 6.25v1.5Zm-6.533 4.847a.87.87 0 0 1 0-1.194l-1.11-1.009a2.37 2.37 0 0 0 0 3.212l1.11-1.01Zm14.176 1.009a2.37 2.37 0 0 0 0-3.212l-1.11 1.01a.87.87 0 0 1 0 1.193l1.11 1.009ZM13.25 12c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 12h-1.5ZM12 13.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 14.75v-1.5ZM10.75 12c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 12h1.5ZM12 10.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 9.25v1.5ZM2.75 8V6h-1.5v2h1.5ZM6 2.75h2v-1.5H6v1.5Zm10 0h2v-1.5h-2v1.5ZM21.25 6v2h1.5V6h-1.5Zm0 10v2h1.5v-2h-1.5ZM18 21.25h-2v1.5h2v-1.5Zm-10 0H6v1.5h2v-1.5ZM2.75 18v-1.444h-1.5V18h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM2.75 6A3.25 3.25 0 0 1 6 2.75v-1.5A4.75 4.75 0 0 0 1.25 6h1.5Z' })));
};
var ForwardRef$7q = forwardRef(SvgEyeScannerBorder);

var SvgEye = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M19.102 10.086a2.487 2.487 0 0 1 0 3.828C17.45 15.324 14.883 17 12 17s-5.45-1.675-7.102-3.086a2.487 2.487 0 0 1 0-3.828C6.55 8.676 9.117 7 12 7s5.45 1.675 7.102 3.086Z' }),
        React.createElement("circle", { cx: 12, cy: 12, r: 2, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 2v2m0 16v2m9-17-1.5 1.5M3 5l1.5 1.5M21 19l-1.5-1.5M3 19l1.5-1.5' })));
};
var ForwardRef$7p = forwardRef(SvgEye);

var SvgFacebookSquare = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h4.5v-7H7v-3h3.5v-2a4 4 0 0 1 4-4H17v3h-2.5a1 1 0 0 0-1 1v2H17v3h-3.5v7H18a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z' })));
};
var ForwardRef$7o = forwardRef(SvgFacebookSquare);

var SvgFacebook = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 3h-3a5 5 0 0 0-5 5v2H6v4h4v7h4v-7h4v-4h-4V8a1 1 0 0 1 1-1h3V3Z' })));
};
var ForwardRef$7n = forwardRef(SvgFacebook);

var SvgFastDelivery = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M14 19V7m0 12h2m-2 0H9m5-12a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a4.002 4.002 0 0 0 3.004 3.875M14 7h3.21a2 2 0 0 1 1.367.54l2.79 2.617a2 2 0 0 1 .633 1.46V17a2 2 0 0 1-2 2m0 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m-7 0a2 2 0 1 1-3.996-.125M9 19a2 2 0 0 0-3.996-.125' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M10 8H8m2 4H6' })));
};
var ForwardRef$7m = forwardRef(SvgFastDelivery);

var SvgFastTime = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 6v4.5m1.5 3L15 15' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 18H2m4-3H2' })));
};
var ForwardRef$7l = forwardRef(SvgFastTime);

var SvgFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm12 5.524-.549.511a.75.75 0 0 0 1.098 0L12 5.525Zm.765-.822-.549-.51.549.51Zm-1.53 0 .549-.51-.549.51Zm-7.65 8.22-.55.51.55-.51Zm6.885 7.397.549-.51-.55.51Zm3.06 0-.549-.51.55.51Zm6.886-7.397-.55-.511.55.51Zm0-8.22.549-.51-.55.51Zm-16.832 0-.549-.51.55.51Zm8.965 1.333.765-.822-1.098-1.022-.765.822 1.098 1.022Zm-1.863-.822.765.822 1.098-1.022-.765-.822-1.098 1.022Zm-7.65 8.22L9.92 20.83l1.098-1.022-6.886-7.397-1.098 1.022Zm11.043 7.397 6.886-7.397-1.099-1.022-6.885 7.397 1.098 1.022Zm5.787-15.617c1.845 1.982 1.845 5.216 0 7.198l1.099 1.022c2.38-2.558 2.38-6.684 0-9.242l-1.099 1.022Zm1.099-1.022c-2.41-2.588-6.34-2.588-8.749 0l1.098 1.022c1.816-1.95 4.736-1.95 6.552 0l1.099-1.022ZM4.133 5.213c1.816-1.95 4.737-1.95 6.553 0l1.098-1.022c-2.41-2.588-6.34-2.588-8.749 0l1.098 1.022ZM9.921 20.83a2.81 2.81 0 0 0 4.158 0l-1.098-1.022c-.548.59-1.414.59-1.962 0L9.92 20.83ZM3.035 4.191c-2.38 2.558-2.38 6.684 0 9.242l1.098-1.022c-1.844-1.982-1.844-5.216 0-7.198L3.035 4.191Z' })));
};
var ForwardRef$7k = forwardRef(SvgFavourite);

var SvgFigma = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 12, height: 6, x: 6, y: 3, stroke: 'currentColor', strokeWidth: 1.5, rx: 3 }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M6 12a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3Zm0 6a3 3 0 0 1 3-3h3v3a3 3 0 1 1-6 0Z' }),
        React.createElement("circle", { cx: 15, cy: 12, r: 3, stroke: 'currentColor', strokeWidth: 1.5 })));
};
var ForwardRef$7j = forwardRef(SvgFigma);

var SvgFilterBigCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 8h3m-3 8h6m9 0h3m-6-8h6' }),
        React.createElement("circle", { cx: 15, cy: 16, r: 3, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("circle", { cx: 9, cy: 8, r: 3, stroke: 'currentColor', strokeWidth: 1.5 })));
};
var ForwardRef$7i = forwardRef(SvgFilterBigCircle);

var SvgFilterSmallCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 6h7m-7 6h9m7 0h2m-7-6h7m-8 12h7M3 18h3' }),
        React.createElement("circle", { cx: 8, cy: 18, r: 2, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("circle", { cx: 17, cy: 12, r: 2, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("circle", { cx: 12, cy: 6, r: 2, stroke: 'currentColor', strokeWidth: 1.5 })));
};
var ForwardRef$7h = forwardRef(SvgFilterSmallCircle);

var SvgFingerPrintBorder = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M1.25 8a.75.75 0 0 0 1.5 0h-1.5ZM8 2.75a.75.75 0 0 0 0-1.5v1.5Zm8-1.5a.75.75 0 0 0 0 1.5v-1.5ZM21.25 8a.75.75 0 0 0 1.5 0h-1.5Zm1.5 8a.75.75 0 0 0-1.5 0h1.5ZM16 21.25a.75.75 0 0 0 0 1.5v-1.5Zm-8 1.5a.75.75 0 0 0 0-1.5v1.5ZM2.75 16a.75.75 0 0 0-1.5 0h1.5Zm11-6a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-4.78 3.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm.873.187-.53-.53.53.53Zm5.127-.187a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM2.75 8V6h-1.5v2h1.5ZM6 2.75h2v-1.5H6v1.5Zm10 0h2v-1.5h-2v1.5ZM21.25 6v2h1.5V6h-1.5Zm0 10v2h1.5v-2h-1.5ZM18 21.25h-2v1.5h2v-1.5Zm-10 0H6v1.5h2v-1.5ZM2.75 18v-2h-1.5v2h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM2.75 6A3.25 3.25 0 0 1 6 2.75v-1.5A4.75 4.75 0 0 0 1.25 6h1.5Zm9.5 4v3h1.5v-3h-1.5Zm-3.72 7.53.343-.343-1.06-1.06-.343.343 1.06 1.06Zm2.22-4.873V10h-1.5v2.657h1.5ZM15.25 10v2.657h1.5V10h-1.5Zm-1.437 6.127-.343.343 1.06 1.06.344-.343-1.061-1.06Zm1.437-3.47c0 1.301-.517 2.55-1.437 3.47l1.06 1.06a6.407 6.407 0 0 0 1.877-4.53h-1.5ZM13 7.75A2.25 2.25 0 0 1 15.25 10h1.5A3.75 3.75 0 0 0 13 6.25v1.5ZM10.75 10A2.25 2.25 0 0 1 13 7.75v-1.5A3.75 3.75 0 0 0 9.25 10h1.5Zm-1.877 7.187a6.407 6.407 0 0 0 1.877-4.53h-1.5c0 1.301-.517 2.55-1.437 3.47l1.06 1.06Z' })));
};
var ForwardRef$7g = forwardRef(SvgFingerPrintBorder);

var SvgFingerPrint = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 10v4m-5.5 7 .243-.243A6 6 0 0 0 8.5 16.515V10A3.5 3.5 0 0 1 12 6.5v0a3.5 3.5 0 0 1 3.5 3.5v6.515a6 6 0 0 1-1.757 4.242L13.5 21' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M5 17v-7a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v7' })));
};
var ForwardRef$7f = forwardRef(SvgFingerPrint);

var SvgFiverr = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M16 3h-4a5 5 0 0 0-5 5v2H4v4h3v7h4v-7h5v7h4V10h-9V8a1 1 0 0 1 1-1h4V3Z' })));
};
var ForwardRef$7e = forwardRef(SvgFiverr);

var SvgFlagCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("ellipse", { cx: 12, cy: 19, stroke: 'currentColor', strokeWidth: 1.5, rx: 9, ry: 3 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 19v-9m0 0V4a2 2 0 0 1 2-2h5.382a1 1 0 0 1 .894 1.447l-1.052 2.106a1 1 0 0 0 0 .894l1.052 2.106A1 1 0 0 1 19.382 10H12Z' })));
};
var ForwardRef$7d = forwardRef(SvgFlagCircle);

var SvgFlag = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M15 16h1.127a4 4 0 0 1 3.072 1.44l1.067 1.28c1.086 1.302.16 3.28-1.536 3.28H5.27c-1.696 0-2.622-1.978-1.536-3.28L4.8 17.44A4 4 0 0 1 7.873 16H9' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 19v-9m0 0V4a2 2 0 0 1 2-2h5.382a1 1 0 0 1 .894 1.447l-1.052 2.106a1 1 0 0 0 0 .894l1.052 2.106A1 1 0 0 1 19.382 10H12Z' })));
};
var ForwardRef$7c = forwardRef(SvgFlag);

var SvgFlashAuto = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 13.5 12 2v8.5h5L8 22v-8.5H3Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm16 8 2.5-6L21 8m-4-2h3' })));
};
var ForwardRef$7b = forwardRef(SvgFlashAuto);

var SvgFlashLight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M17.143 2H6.857A.857.857 0 0 0 6 2.857a5.144 5.144 0 0 0 3 4.677V19a3 3 0 1 0 6 0V7.534c1.77-.813 3-2.601 3-4.677A.857.857 0 0 0 17.143 2ZM12 9v2' })));
};
var ForwardRef$7a = forwardRef(SvgFlashLight);

var SvgFlashOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm4 4 16 16M10.488 6.488 14 2v8.5h5l-1.976 2.524M8.732 8.732 5 13.5h5V22l5.268-6.732' })));
};
var ForwardRef$79 = forwardRef(SvgFlashOff);

var SvgFlash = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M5 13.5 14 2v8.5h5L10 22v-8.5H5Z' })));
};
var ForwardRef$78 = forwardRef(SvgFlash);

var SvgGiveBlood = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M14 8.056c0-1.984 1.685-3.943 2.868-5.075a1.621 1.621 0 0 1 2.264 0C20.315 4.113 22 6.072 22 8.056 22 10 20.485 12 18 12c-2.485 0-4-2-4-3.944Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M2 10h2l6.262 2.74a1.911 1.911 0 0 1 .99 2.503v0a1.911 1.911 0 0 1-2.509 1.004L7 15.5' }),
        React.createElement("path", { fill: 'currentColor', d: 'M2.335 18.33a.75.75 0 1 0-.67 1.34l.67-1.34Zm9-3-.67-.336-.671 1.341.67.336.671-1.342Zm2.398 2.037-.335.67.335-.67Zm2.683 1.383H18v-1.5h-1.584v1.5ZM18 21.25H9.889v1.5H18v-1.5Zm-11.354-.765-4.31-2.156-.671 1.342 4.31 2.155.671-1.341Zm7.423-3.79-2.734-1.366-.67 1.342 2.733 1.366.67-1.341Zm-4.18 4.555a7.25 7.25 0 0 1-3.243-.765l-.67 1.341a8.75 8.75 0 0 0 3.913.924v-1.5ZM19.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 20h-1.5ZM18 18.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 17.25v1.5Zm-1.584-1.5a5.25 5.25 0 0 1-2.348-.554l-.67 1.341a6.75 6.75 0 0 0 3.018.713v-1.5Z' })));
};
var ForwardRef$77 = forwardRef(SvgGiveBlood);

var SvgGivePill = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 6, height: 12, x: 16, y: 2, stroke: 'currentColor', strokeWidth: 1.5, rx: 3 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M16 8h6M2 10h2l6.262 2.74a1.911 1.911 0 0 1 .99 2.503v0a1.911 1.911 0 0 1-2.509 1.004L7 15.5' }),
        React.createElement("path", { fill: 'currentColor', d: 'M2.335 18.33a.75.75 0 1 0-.67 1.34l.67-1.34Zm9-3-.67-.336-.671 1.341.67.336.671-1.342Zm2.398 2.037-.335.67.335-.67Zm2.683 1.383H18v-1.5h-1.584v1.5ZM18 21.25H9.889v1.5H18v-1.5Zm-11.354-.765-4.31-2.156-.671 1.342 4.31 2.155.671-1.341Zm7.423-3.79-2.734-1.366-.67 1.342 2.733 1.366.67-1.341Zm-4.18 4.555a7.25 7.25 0 0 1-3.243-.765l-.67 1.341a8.75 8.75 0 0 0 3.913.924v-1.5ZM19.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 20h-1.5ZM18 18.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 17.25v1.5Zm-1.584-1.5a5.25 5.25 0 0 1-2.348-.554l-.67 1.341a6.75 6.75 0 0 0 3.018.713v-1.5Z' })));
};
var ForwardRef$76 = forwardRef(SvgGivePill);

var SvgGlassBroken = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M12.767 14v-.75.75Zm-1.534 0v.75V14ZM7.983 2v-.75V2Zm8.034 0v.75V2Zm2.233 3.563-.685.305.685-.305Zm-1.32-2.97-.685.305.686-.304Zm-9.86 0 .685.305-.686-.304Zm-1.32 2.97-.686-.304.686.304Zm7.017 7.687h-1.534v1.5h1.534v-1.5ZM7.983 2.75h8.034v-1.5H7.983v1.5Zm10.953 2.509-1.32-2.97-1.37.61 1.319 2.969 1.37-.61ZM6.384 2.289l-1.32 2.97 1.371.609 1.32-2.97-1.371-.609Zm9.633.461a.25.25 0 0 1 .228.148l1.371-.609a1.75 1.75 0 0 0-1.6-1.039v1.5Zm-8.034-1.5a1.75 1.75 0 0 0-1.599 1.04l1.37.608a.25.25 0 0 1 .23-.148v-1.5Zm3.25 12c-3.8 0-6.34-3.91-4.798-7.382l-1.37-.61C3.08 9.723 6.347 14.75 11.232 14.75v-1.5Zm1.534 1.5c4.885 0 8.152-5.028 6.169-9.491l-1.371.609c1.543 3.472-.998 7.382-4.798 7.382v1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M12.75 14a.75.75 0 0 0-1.5 0h1.5ZM15 22.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm3.75.75v-8h-1.5v8h1.5Zm-.75.75h3v-1.5h-3v1.5Zm0-1.5H9v1.5h3v-1.5Zm1.17-15.915a.75.75 0 1 0-1.34-.67l1.34.67ZM11 8l-.67-.335A.75.75 0 0 0 11 8.75V8Zm2 0 .67.335A.75.75 0 0 0 13 7.25V8Zm-2.17 2.665a.75.75 0 1 0 1.34.67l-1.34-.67Zm1-6-1.5 3 1.34.67 1.5-3-1.34-.67ZM11 8.75h2v-1.5h-2v1.5Zm1.33-1.085-1.5 3 1.34.67 1.5-3-1.34-.67Z' })));
};
var ForwardRef$75 = forwardRef(SvgGlassBroken);

var SvgGlobeEarth = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M17.345 3.547a2.22 2.22 0 0 0-.9 1.786 2.222 2.222 0 0 1-2.223 2.223 2.222 2.222 0 0 0 0 4.444c1.228 0 2.222.995 2.222 2.222 0 1.228.995 2.222 2.223 2.222h2.293M17.346 3.547A9.953 9.953 0 0 0 12 2c-5.147 0-9.386 3.889-9.939 8.889m15.284-7.342A9.993 9.993 0 0 1 22 12c0 5.523-4.477 10-10 10a9.958 9.958 0 0 1-6.286-2.222m0 0h2.953a2.222 2.222 0 1 0 0-4.445 2.222 2.222 0 0 1-2.223-2.222 2.222 2.222 0 0 0-2.222-2.222H2.061m3.653 8.889a9.98 9.98 0 0 1-3.653-8.89' })));
};
var ForwardRef$74 = forwardRef(SvgGlobeEarth);

var SvgGlobe = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("ellipse", { cx: 12, cy: 12, stroke: 'currentColor', strokeWidth: 1.5, rx: 4, ry: 10 }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M21.996 11.72c-1.802 1.482-5.601 2.502-9.996 2.502-4.395 0-8.194-1.02-9.996-2.502m19.992 0C21.848 6.327 17.43 2 12 2c-5.43 0-9.848 4.327-9.996 9.72m19.992 0c.003.093.004.186.004.28 0 5.523-4.477 10-10 10S2 17.523 2 12c0-.094.001-.187.004-.28' })));
};
var ForwardRef$73 = forwardRef(SvgGlobe);

var SvgGmail = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 20, height: 18, x: 2, y: 3, stroke: 'currentColor', strokeWidth: 1.5, rx: 4 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm2 7 7.501 6.001a4 4 0 0 0 4.998 0L22 7' })));
};
var ForwardRef$72 = forwardRef(SvgGmail);

var SvgGold = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M8.392 8.153A1.5 1.5 0 0 1 9.852 7h4.296a1.5 1.5 0 0 1 1.46 1.153l.952 4A1.5 1.5 0 0 1 15.1 14H8.9a1.5 1.5 0 0 1-1.46-1.847l.952-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M3.392 15.153A1.5 1.5 0 0 1 4.852 14h4.297a1.5 1.5 0 0 1 1.459 1.153l.952 4A1.5 1.5 0 0 1 10.1 21H3.9a1.5 1.5 0 0 1-1.46-1.847l.952-4Zm10 0A1.5 1.5 0 0 1 14.852 14h4.296a1.5 1.5 0 0 1 1.46 1.153l.952 4A1.5 1.5 0 0 1 20.1 21h-6.2a1.5 1.5 0 0 1-1.46-1.847l.952-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 3v1m6 0-1 1M6 4l1 1' })));
};
var ForwardRef$71 = forwardRef(SvgGold);

var SvgGooglePlus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 12h4m-2 2v-4M8.5 12H15a6.5 6.5 0 1 1-1.904-4.596' })));
};
var ForwardRef$70 = forwardRef(SvgGooglePlus);

var SvgGoogle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 13.5v-3h9.888c.074.49.112.99.112 1.5 0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2a9.969 9.969 0 0 1 7.071 2.929L16.95 7.05a7 7 0 1 0 1.89 6.45H12Z' })));
};
var ForwardRef$6$ = forwardRef(SvgGoogle);

var SvgGpsCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 8, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("circle", { cx: 12, cy: 12, r: 3, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 4V2m0 20v-2m8-8h2M2 12h2' })));
};
var ForwardRef$6_ = forwardRef(SvgGpsCircle);

var SvgGpsOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 5V3m0 18v-2m7-7h2M3 12h2M3 3l18 18M9.47 5.47a7 7 0 0 1 9.058 9.058M7.051 7.051a7 7 0 1 0 9.9 9.9' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M14.121 14.121a3 3 0 1 1-4.243-4.243' })));
};
var ForwardRef$6Z = forwardRef(SvgGpsOff);

var SvgGpsSend = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 8, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm10.763 12.92-1.515-.504a.5.5 0 0 1-.04-.934l4.643-1.99a.5.5 0 0 1 .657.657l-1.99 4.642a.5.5 0 0 1-.934-.039l-.505-1.515a.5.5 0 0 0-.316-.316Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 4V2m0 20v-2m8-8h2M2 12h2' })));
};
var ForwardRef$6Y = forwardRef(SvgGpsSend);

var SvgGps = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 8, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("circle", { cx: 12, cy: 12, r: 3, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 4V2m0 20v-2m8-8h2M2 12h2' })));
};
var ForwardRef$6X = forwardRef(SvgGps);

var SvgGraphicEq = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 4v16M8 7v10m8-10v10M4 10v4m16-4v4' })));
};
var ForwardRef$6W = forwardRef(SvgGraphicEq);

var SvgHanger = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm13.724 7.08.626.414-.626-.413ZM9.201 6a.75.75 0 0 0 1.5 0h-1.5Zm11.937 10.372.43-.615-.43.615Zm-18.276 0-.43-.615.43.615ZM13.299 6c0 .246-.073.474-.201.668l1.252.826c.283-.43.449-.944.449-1.494h-1.5ZM10.7 6c0-.673.565-1.25 1.299-1.25v-1.5C10.471 3.25 9.2 4.464 9.2 6h1.5ZM12 4.75c.734 0 1.299.577 1.299 1.25h1.5c0-1.536-1.27-2.75-2.799-2.75v1.5Zm-.429 5.865 9.138 6.373.858-1.23-9.138-6.373-.858 1.23Zm8.377 8.635H4.052v1.5h15.896v-1.5ZM3.29 16.988l9.138-6.373-.858-1.23-9.138 6.372.858 1.23Zm17.418 0c.985.687.54 2.262-.761 2.262v1.5c2.684 0 3.878-3.418 1.62-4.993l-.859 1.23ZM4.052 19.25c-1.3 0-1.746-1.575-.761-2.262l-.858-1.23c-2.259 1.574-1.065 4.992 1.62 4.992v-1.5Zm9.046-12.582c-.13.196-.29.398-.48.628-.182.22-.396.473-.587.73-.377.506-.781 1.169-.781 1.974h1.5c0-.3.151-.631.484-1.077.163-.22.342-.431.541-.673a8.97 8.97 0 0 0 .575-.756l-1.252-.826Z' })));
};
var ForwardRef$6V = forwardRef(SvgHanger);

var SvgHangout = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M12 1c-5.248 0-9.5 4.308-9.5 9.625 0 4.974 4.403 9.056 9.3 9.164.11.003.2.092.2.203v2.686c0 .148.156.244.288.177 5.583-2.854 9.212-7.453 9.212-12.23C21.5 5.308 17.248 1 12 1Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M17.238 11.808c0 1.096-.984 2.04-1.821 2.175-.11.018-.2-.072-.2-.183v-1.908a.2.2 0 0 0-.2-.2h-1.579a.2.2 0 0 1-.2-.2V8.2c0-.11.09-.2.2-.2h3.6a.2.2 0 0 1 .2.2v3.608Zm-6.477 0c0 1.096-.984 2.04-1.821 2.175-.11.018-.2-.072-.2-.183v-1.908a.2.2 0 0 0-.2-.2H6.962a.2.2 0 0 1-.2-.2V8.2c0-.11.09-.2.2-.2h3.6c.11 0 .2.09.2.2v3.608Z' })));
};
var ForwardRef$6U = forwardRef(SvgHangout);

var SvgHealthCare = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M16.459 2.946 16 3.402l-.459-.456a3.258 3.258 0 0 0-4.59 0 3.217 3.217 0 0 0 0 4.566l4.13 4.11c.508.504 1.33.504 1.837 0l4.131-4.11a3.217 3.217 0 0 0 0-4.566 3.258 3.258 0 0 0-4.59 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M2 10h2l6.262 2.74a1.911 1.911 0 0 1 .99 2.503v0a1.911 1.911 0 0 1-2.509 1.004L7 15.5' }),
        React.createElement("path", { fill: 'currentColor', d: 'M2.335 18.33a.75.75 0 1 0-.67 1.34l.67-1.34Zm9-3-.67-.336-.671 1.341.67.336.671-1.342Zm2.398 2.037-.335.67.335-.67Zm2.683 1.383H18v-1.5h-1.584v1.5ZM18 21.25H9.889v1.5H18v-1.5Zm-11.354-.765-4.31-2.156-.671 1.342 4.31 2.155.671-1.341Zm7.423-3.79-2.734-1.366-.67 1.342 2.733 1.366.67-1.341Zm-4.18 4.555a7.25 7.25 0 0 1-3.243-.765l-.67 1.341a8.75 8.75 0 0 0 3.913.924v-1.5ZM19.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 20h-1.5ZM18 18.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 17.25v1.5Zm-1.584-1.5a5.25 5.25 0 0 1-2.348-.554l-.67 1.341a6.75 6.75 0 0 0 3.018.713v-1.5Z' })));
};
var ForwardRef$6T = forwardRef(SvgHealthCare);

var SvgHeart = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12.765 4.702 12 5.524l-.765-.822c-2.113-2.27-5.538-2.27-7.65 0-2.113 2.27-2.113 5.95 0 8.22l6.885 7.397a2.06 2.06 0 0 0 3.06 0l6.886-7.397c2.112-2.27 2.112-5.95 0-8.22-2.113-2.27-5.538-2.27-7.651 0Z' })));
};
var ForwardRef$6S = forwardRef(SvgHeart);

var SvgHomeAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58ZM12.75 11a.75.75 0 0 0-1.5 0h1.5Zm-1.5 6a.75.75 0 0 0 1.5 0h-1.5ZM15 14.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm11.25-3.1v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm7.5.85v6h1.5v-6h-1.5ZM15 13.25H9v1.5h6v-1.5Z' })));
};
var ForwardRef$6R = forwardRef(SvgHomeAdd);

var SvgHomeArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58ZM7.67 10.665a.75.75 0 1 0-1.34.67l1.34-.67Zm1.436 4.546.67-.335-.67.335Zm1.788 0-.67-.335.67.335Zm1.212-2.422.67.335-.67-.335Zm1.788 0-.67.335.67-.335ZM16 17v.75a.75.75 0 0 0 .67-.415L16 17Zm1.67-1.665a.75.75 0 1 0-1.34-.67l1.34.67ZM14 16.25a.75.75 0 0 0 0 1.5v-1.5Zm6.25-6.1v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm2.58 1.185 2.105 4.212 1.341-.671-2.105-4.211-1.342.67Zm5.235 4.212 1.211-2.423-1.341-.67-1.211 2.422 1.341.67Zm1.659-2.423 2.105 4.211 1.342-.67-2.106-4.212-1.341.671Zm3.447 4.211 1-2-1.342-.67-1 2 1.342.67ZM16 16.25h-2v1.5h2v-1.5Zm-3.224-3.126a.25.25 0 0 1 .448 0l1.341-.67c-.645-1.29-2.485-1.29-3.13 0l1.341.67Zm-4.341 2.423c.645 1.29 2.485 1.29 3.13 0l-1.341-.671a.25.25 0 0 1-.448 0l-1.341.67Z' })));
};
var ForwardRef$6Q = forwardRef(SvgHomeArrowDown);

var SvgHomeArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm7 17 2.106-4.211a1 1 0 0 1 1.788 0l1.212 2.422a1 1 0 0 0 1.788 0L16 11m0 0 1 2m-1-2h-2m7-.85v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.046 4.046 0 0 1 21 10.15Z' })));
};
var ForwardRef$6P = forwardRef(SvgHomeArrowUp);

var SvgHomeCelsius = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58Zm-6.025 5.286a.75.75 0 1 0 .99-1.126l-.99 1.126Zm.99 4.5a.75.75 0 1 0-.99-1.126l.99 1.126Zm5.755-6.663v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm8.26 6.1c-1.25 0-2.26-1.01-2.26-2.25h-1.5a3.755 3.755 0 0 0 3.76 3.75v-1.5ZM9.75 14c0-1.24 1.01-2.25 2.26-2.25v-1.5A3.755 3.755 0 0 0 8.25 14h1.5Zm2.26-2.25c.574 0 1.096.212 1.495.563l.99-1.126a3.753 3.753 0 0 0-2.486-.937v1.5Zm1.495 3.937c-.4.35-.921.563-1.496.563v1.5a3.75 3.75 0 0 0 2.486-.937l-.99-1.126ZM16.5 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' })));
};
var ForwardRef$6O = forwardRef(SvgHomeCelsius);

var SvgHomeCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58Zm-10 6.443a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm.745 1.805.53-.53-.53.53Zm3.078-.305-.624-.416.624.416Zm3.271-3.554a.75.75 0 1 0-1.248-.832l1.248.832Zm3.626-1.266v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm4.72 4.38 1.275 1.275 1.06-1.06L9.53 13.47l-1.06 1.06Zm5.507.856 2.647-3.97-1.248-.832-2.647 3.97 1.248.832Zm-4.232.42a2.75 2.75 0 0 0 4.232-.42l-1.248-.832a1.25 1.25 0 0 1-1.924.19l-1.06 1.061Z' })));
};
var ForwardRef$6N = forwardRef(SvgHomeCheck);

var SvgHomeCloud = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58Zm-5.81 5.097-.69.295a.75.75 0 0 0 .923.418l-.234-.713Zm6.53-1.974v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm6.75 6.1a2.75 2.75 0 0 1-2.75-2.75h-1.5a4.25 4.25 0 0 0 4.25 4.25v-1.5ZM7.75 13.5a2.75 2.75 0 0 1 2.75-2.75v-1.5a4.25 4.25 0 0 0-4.25 4.25h1.5Zm8.5 1a1.75 1.75 0 0 1-1.75 1.75v1.5a3.25 3.25 0 0 0 3.25-3.25h-1.5Zm-1.75-1.75c.966 0 1.75.784 1.75 1.75h1.5a3.25 3.25 0 0 0-3.25-3.25v1.5Zm-.547.087c.171-.056.355-.087.547-.087v-1.5c-.353 0-.694.057-1.015.162l.468 1.425ZM10.5 10.75a2.75 2.75 0 0 1 2.53 1.67l1.379-.59A4.25 4.25 0 0 0 10.5 9.25v1.5Zm4 5.5h-4v1.5h4v-1.5Z' })));
};
var ForwardRef$6M = forwardRef(SvgHomeCloud);

var SvgHomeDownload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58Zm-9 7.443a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm2.177 1.823-.53-.53.53.53Zm1.823-.763a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-3.28.47a.75.75 0 0 0 1.5 0h-1.5Zm1.5-7a.75.75 0 0 0-1.5 0h1.5Zm7.5 1.15v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm5.72 5.38 1.293 1.293 1.06-1.06-1.293-1.293-1.06 1.06Zm3.767 1.293 1.293-1.293-1.06-1.06-1.293 1.293 1.06 1.06Zm-2.474 0a1.75 1.75 0 0 0 2.474 0l-1.06-1.06a.25.25 0 0 1-.354 0l-1.06 1.06ZM12.75 16V9h-1.5v7h1.5Z' })));
};
var ForwardRef$6L = forwardRef(SvgHomeDownload);

var SvgHomeEye = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58Zm-11.52 8.07-.514.547.514-.547Zm0-2.194.513.546-.513-.546Zm7.982 2.194-.513-.546.513.546Zm0-2.194.514-.547-.514.547Zm4.259-2.753v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm11.728 4.4c-.881.828-2.147 1.7-3.478 1.7v1.5c1.93 0 3.56-1.22 4.505-2.106l-1.027-1.093ZM12 16.25c-1.33 0-2.596-.872-3.478-1.7l-1.027 1.094C8.44 16.53 10.07 17.75 12 17.75v-1.5Zm-3.478-2.8c.882-.828 2.147-1.7 3.478-1.7v-1.5c-1.93 0-3.56 1.22-4.505 2.106l1.027 1.093ZM12 11.75c1.33 0 2.597.872 3.478 1.7l1.027-1.094C15.56 11.47 13.93 10.25 12 10.25v1.5Zm-3.478 2.8a.736.736 0 0 1 0-1.1l-1.027-1.094a2.236 2.236 0 0 0 0 3.288l1.027-1.093Zm7.983 1.094a2.236 2.236 0 0 0 0-3.288l-1.027 1.093c.33.31.33.792 0 1.102l1.027 1.093Z' }),
        React.createElement("circle", { cx: 12, cy: 14, r: 1, fill: 'currentColor' })));
};
var ForwardRef$6K = forwardRef(SvgHomeEye);

var SvgHomeFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58ZM12 12l-.53.53a.75.75 0 0 0 1.06 0L12 12Zm.31-.31.53.531-.53-.53Zm-.62 0-.53.531.53-.53Zm-3.093 3.094-.53.53.53-.53Zm2.166 2.166.53-.53-.53.53Zm2.474 0-.53-.53.53.53Zm2.166-2.166.53.53-.53-.53Zm-6.806-3.093-.53-.53.53.53Zm11.653-1.54v7.816h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm8.78 2.38.31-.309-1.061-1.06-.31.309 1.061 1.06Zm-1.37-.309.31.31 1.06-1.061-.309-.31-1.06 1.061Zm-3.093 3.094 2.165 2.165 1.06-1.06-2.165-2.166-1.06 1.06Zm5.7 2.165 2.166-2.165-1.06-1.061-2.166 2.165 1.06 1.061Zm1.106-5.259a1.437 1.437 0 0 1 0 2.033l1.06 1.06a2.938 2.938 0 0 0 0-4.154l-1.06 1.061Zm1.06-1.06a2.937 2.937 0 0 0-4.154 0l1.06 1.06a1.437 1.437 0 0 1 2.034 0l1.06-1.06Zm-6.806 1.06a1.437 1.437 0 0 1 2.033 0l1.061-1.06a2.937 2.937 0 0 0-4.154 0l1.06 1.06Zm1.105 5.26a2.5 2.5 0 0 0 3.536 0l-1.06-1.062a1 1 0 0 1-1.415 0l-1.06 1.061Zm-2.165-6.32a2.938 2.938 0 0 0 0 4.154l1.06-1.061a1.437 1.437 0 0 1 0-2.033l-1.06-1.06Z' })));
};
var ForwardRef$6J = forwardRef(SvgHomeFavourite);

var SvgHomeFilter = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58ZM8 10.25a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm2-1.5a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-2 3.5a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8-1.5a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5ZM10.75 10a.75.75 0 0 0-1.5 0h1.5Zm-1.5 2a.75.75 0 0 0 1.5 0h-1.5Zm5.5 3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 2a.75.75 0 0 0 1.5 0h-1.5Zm7-6.85v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5ZM8 11.75h2v-1.5H8v1.5Zm4 0h4v-1.5h-4v1.5Zm2 5h2v-1.5h-2v1.5Zm-6 0h4v-1.5H8v1.5ZM9.25 10v2h1.5v-2h-1.5Zm4 5v2h1.5v-2h-1.5Z' })));
};
var ForwardRef$6I = forwardRef(SvgHomeFilter);

var SvgHomeFlash = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58ZM13.6 9.45a.75.75 0 1 0-1.2-.9l1.2.9ZM10 13l-.6-.45a.75.75 0 0 0 .6 1.2V13Zm4 0 .6.45a.75.75 0 0 0-.6-1.2V13Zm-3.6 3.55a.75.75 0 1 0 1.2.9l-1.2-.9Zm9.85-6.4v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm8.65-1.6-3 4 1.2.9 3-4-1.2-.9Zm-2.4 5.2h4v-1.5h-4v1.5Zm3.4-1.2-3 4 1.2.9 3-4-1.2-.9Z' })));
};
var ForwardRef$6H = forwardRef(SvgHomeFlash);

var SvgHomeFluid = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58ZM12 9l.48-.576a.75.75 0 0 0-.96 0L12 9Zm8.25 1.15v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm12.5 4.25c0-.79-.275-1.562-.633-2.242-.362-.686-.835-1.329-1.293-1.873a16.84 16.84 0 0 0-1.797-1.821l-.033-.029-.01-.008-.002-.002h-.001v-.001L12 9l-.48.576.006.006a4.02 4.02 0 0 1 .128.11 15.38 15.38 0 0 1 1.522 1.559c.417.495.819 1.047 1.114 1.606.298.566.46 1.09.46 1.543h1.5ZM12 9l-.48-.576-.002.001-.002.002-.01.008-.033.029-.12.104a16.848 16.848 0 0 0-1.677 1.717c-.458.544-.931 1.187-1.293 1.873-.358.68-.633 1.452-.633 2.242h1.5c0-.453.162-.977.46-1.543.295-.559.697-1.11 1.114-1.606a15.38 15.38 0 0 1 1.65-1.67l.005-.004h.001c0-.001 0-.001 0 0L12 9Zm-4.25 5.4c0 1.445.544 2.554 1.382 3.294.822.726 1.881 1.056 2.868 1.056v-1.5c-.67 0-1.361-.227-1.875-.68-.497-.44-.875-1.13-.875-2.17h-1.5ZM12 18.75c.987 0 2.046-.33 2.867-1.056.839-.74 1.383-1.849 1.383-3.294h-1.5c0 1.04-.378 1.73-.875 2.17-.514.453-1.205.68-1.875.68v1.5Z' })));
};
var ForwardRef$6G = forwardRef(SvgHomeFluid);

var SvgHomeGraph = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58ZM8.75 11a.75.75 0 0 0-1.5 0h1.5Zm-1.5 4a.75.75 0 0 0 1.5 0h-1.5Zm9.5-4a.75.75 0 0 0-1.5 0h1.5Zm-1.5 4a.75.75 0 0 0 1.5 0h-1.5Zm-2.5-6a.75.75 0 0 0-1.5 0h1.5Zm-1.5 8a.75.75 0 0 0 1.5 0h-1.5Zm9-6.85v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm3.5.85v4h1.5v-4h-1.5Zm8 0v4h1.5v-4h-1.5Zm-4-2v8h1.5V9h-1.5Z' })));
};
var ForwardRef$6F = forwardRef(SvgHomeGraph);

var SvgHomeInformation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58ZM12.75 13a.75.75 0 0 0-1.5 0h1.5Zm-1.5 5a.75.75 0 0 0 1.5 0h-1.5Zm9-7.85v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm7.5 2.85v5h1.5v-5h-1.5ZM13 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' })));
};
var ForwardRef$6E = forwardRef(SvgHomeInformation);

var SvgHomeLink = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58Zm-3.994 5.266-.53-.53.53.53Zm-.884-.177a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-3.89 2.122a.75.75 0 1 0 1.061-1.061l-1.06 1.06Zm-2.298-.53.53.53-.53-.53Zm.884.176a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm3.89-2.122a.75.75 0 1 0-1.061 1.061l1.06-1.06Zm7.012-1.612v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm8.073 1.259 1.415-1.414-1.061-1.06-1.414 1.413 1.06 1.061Zm3.182.354-.353.353 1.06 1.06.354-.353-1.06-1.06Zm-4.242-1.415a2.75 2.75 0 0 0 0 3.89l1.06-1.061a1.25 1.25 0 0 1 0-1.768l-1.06-1.06Zm4.242-.353a1.25 1.25 0 0 1 0 1.768l1.06 1.06a2.75 2.75 0 0 0 0-3.889l-1.06 1.06Zm1.06-1.06a2.75 2.75 0 0 0-3.888 0l1.06 1.06a1.25 1.25 0 0 1 1.768 0l1.06-1.06Zm-3.888 5.656-1.415 1.414 1.061 1.06 1.414-1.413-1.06-1.061Zm-3.182-.354.353-.353-1.06-1.06-.354.353 1.06 1.06Zm4.242 1.415a2.75 2.75 0 0 0 0-3.89l-1.06 1.061a1.25 1.25 0 0 1 0 1.768l1.06 1.06Zm-4.242.353a1.25 1.25 0 0 1 0-1.768l-1.06-1.06a2.75 2.75 0 0 0 0 3.889l1.06-1.06Zm-1.06 1.06a2.75 2.75 0 0 0 3.888 0l-1.06-1.06a1.25 1.25 0 0 1-1.768 0l-1.06 1.06Z' })));
};
var ForwardRef$6D = forwardRef(SvgHomeLink);

var SvgHomeLocationBig = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M21 17.986v-8.07c0-1.239-.57-2.408-1.544-3.169l-5-3.902a3.99 3.99 0 0 0-4.912 0l-5 3.902A4.018 4.018 0 0 0 3 9.916v8.07A4.007 4.007 0 0 0 7 22h10c2.21 0 4-1.797 4-4.014Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M16.305 15.801C16.305 18.084 14.152 22 12 22c-2.152 0-4.305-3.916-4.305-6.199 0-2.282 1.928-4.132 4.305-4.132s4.305 1.85 4.305 4.132Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M13.291 15.543a1.291 1.291 0 1 1-2.582 0 1.291 1.291 0 0 1 2.582 0Z' })));
};
var ForwardRef$6C = forwardRef(SvgHomeLocationBig);

var SvgHomeLocation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58ZM12 18l-.48.576a.75.75 0 0 0 .96 0L12 18Zm8.25-7.85v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm11 2.45c0 .453-.162.977-.46 1.543-.295.559-.697 1.11-1.114 1.606a15.38 15.38 0 0 1-1.625 1.648l-.025.022-.005.004h-.001c0 .001 0 .001 0 0L12 18l.48.576.002-.001.002-.002a.964.964 0 0 0 .01-.008l.033-.029a15.655 15.655 0 0 0 .537-.487c.342-.325.8-.787 1.26-1.334.458-.544.931-1.187 1.293-1.873.358-.68.633-1.452.633-2.242h-1.5ZM12 18l.48-.576-.006-.005-.025-.022a13.843 13.843 0 0 1-.479-.435 15.38 15.38 0 0 1-1.146-1.213c-.417-.495-.819-1.047-1.114-1.606-.298-.566-.46-1.09-.46-1.543h-1.5c0 .79.275 1.562.633 2.242.362.686.835 1.329 1.293 1.873a16.843 16.843 0 0 0 1.797 1.821l.033.029a.964.964 0 0 0 .01.008l.002.002h.001v.001L12 18Zm-2.75-5.4c0-1.04.378-1.73.875-2.17.514-.453 1.205-.68 1.875-.68v-1.5c-.987 0-2.046.33-2.868 1.056-.838.74-1.382 1.849-1.382 3.294h1.5ZM12 9.75c.67 0 1.361.227 1.875.68.497.44.875 1.13.875 2.17h1.5c0-1.445-.544-2.554-1.383-3.294C14.046 8.58 12.988 8.25 12 8.25v1.5Z' }),
        React.createElement("circle", { cx: 12, cy: 12, r: 1, fill: 'currentColor' })));
};
var ForwardRef$6B = forwardRef(SvgHomeLocation);

var SvgHomeLock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58Zm.72 3.123v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm6.25 2.6h4v-1.5h-4v1.5ZM15.25 14v2h1.5v-2h-1.5ZM14 17.25h-4v1.5h4v-1.5ZM8.75 16v-2h-1.5v2h1.5ZM10 17.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 18.75v-1.5ZM15.25 16c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 16h-1.5ZM14 12.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 11.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 7.25 14h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm.75.75v-1h-1.5v1h1.5Zm2.5-1v1h1.5v-1h-1.5ZM12 9.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 8.25v1.5ZM10.75 11c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 11h1.5Z' })));
};
var ForwardRef$6A = forwardRef(SvgHomeLock);

var SvgHomeMail = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58Zm-9.195 5.302a.75.75 0 1 0-.67 1.342l.67-1.342Zm.77 1.224-.335.67.336-.67Zm1.79 0 .335.67-.336-.67Zm1.44.118a.75.75 0 1 0-.67-1.342l.67 1.342Zm5.915-3.52v7.816h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm6.25.6h4v-1.5h-4v1.5ZM16.25 13v2h1.5v-2h-1.5ZM14 17.25h-4v1.5h4v-1.5ZM7.75 15v-2h-1.5v2h1.5ZM10 17.25A2.25 2.25 0 0 1 7.75 15h-1.5A3.75 3.75 0 0 0 10 18.75v-1.5ZM16.25 15A2.25 2.25 0 0 1 14 17.25v1.5A3.75 3.75 0 0 0 17.75 15h-1.5ZM14 10.75A2.25 2.25 0 0 1 16.25 13h1.5A3.75 3.75 0 0 0 14 9.25v1.5Zm-4-1.5A3.75 3.75 0 0 0 6.25 13h1.5A2.25 2.25 0 0 1 10 10.75v-1.5Zm-.335 4.42 1.105.554.671-1.342-1.106-.553-.67 1.342Zm3.565.554 1.105-.553-.67-1.342-1.106.553.67 1.342Zm-2.46 0a2.75 2.75 0 0 0 2.46 0l-.671-1.342a1.25 1.25 0 0 1-1.118 0l-.67 1.342Z' })));
};
var ForwardRef$6z = forwardRef(SvgHomeMail);

var SvgHomeMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58ZM15 14.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm11.25-3.1v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5ZM15 13.25H9v1.5h6v-1.5Z' })));
};
var ForwardRef$6y = forwardRef(SvgHomeMinus);

var SvgHomeNotification = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58ZM7.986 15.138l.513.547-.513-.547Zm8.028 0-.513.547.513-.547ZM11 18.25a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm7.25-9.6v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm11.527 6.1H8.723v1.5h6.556v-1.5Zm-.694-3.917v1.234h1.5v-1.234h-1.5Zm-5.166 1.234v-1.234h-1.5v1.234h1.5Zm-.918 2.118a2.903 2.903 0 0 0 .918-2.118h-1.5a1.4 1.4 0 0 1-.444 1.024L8.5 15.685Zm6.084-2.118a2.9 2.9 0 0 0 .918 2.118l1.026-1.094a1.403 1.403 0 0 1-.444-1.024h-1.5Zm-5.86 2.683a.327.327 0 0 1-.224-.565l-1.026-1.094c-1.208 1.132-.406 3.159 1.25 3.159v-1.5Zm6.554 1.5c1.656 0 2.458-2.027 1.25-3.16L15.5 15.686a.327.327 0 0 1-.223.565v1.5Zm.806-5.417A4.083 4.083 0 0 0 12 8.25v1.5a2.583 2.583 0 0 1 2.583 2.583h1.5Zm-6.666 0A2.583 2.583 0 0 1 12 9.75v-1.5a4.083 4.083 0 0 0-4.083 4.083h1.5ZM11 19.75h2v-1.5h-2v1.5Z' })));
};
var ForwardRef$6x = forwardRef(SvgHomeNotification);

var SvgHomePower = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58ZM12.75 10a.75.75 0 0 0-1.5 0h1.5Zm-1.5 2a.75.75 0 0 0 1.5 0h-1.5Zm4.312-1.142a.75.75 0 0 0-1.124.992l1.124-.992Zm-6 .992a.75.75 0 0 0-1.124-.992l1.124.992Zm10.688-1.7v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm7.5-.15v2h1.5v-2h-1.5Zm4 4A3.25 3.25 0 0 1 12 17.25v1.5A4.75 4.75 0 0 0 16.75 14h-1.5ZM12 17.25A3.25 3.25 0 0 1 8.75 14h-1.5A4.75 4.75 0 0 0 12 18.75v-1.5Zm2.438-5.4c.506.574.812 1.325.812 2.15h1.5a4.735 4.735 0 0 0-1.188-3.142l-1.124.992ZM8.75 14c0-.825.306-1.576.812-2.15l-1.124-.992A4.735 4.735 0 0 0 7.25 14h1.5Z' })));
};
var ForwardRef$6w = forwardRef(SvgHomePower);

var SvgHomeRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58Zm-5.939 9.625a.75.75 0 0 0 1.06-1.061l-1.06 1.06Zm-3.182-5.304a.75.75 0 1 0-1.06 1.061l1.06-1.06Zm-1.06 4.243a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm5.303-3.182a.75.75 0 1 0-1.061-1.06l1.06 1.06Zm5.598-2.259v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm10.902 5.441-4.243-4.243-1.06 1.061 4.242 4.243 1.06-1.061Zm-4.243 1.06 4.243-4.242-1.061-1.06-4.243 4.242 1.061 1.06Z' })));
};
var ForwardRef$6v = forwardRef(SvgHomeRemove);

var SvgHomeSetting = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58Zm-4.068 4.627-.64.391.64-.391Zm.424.692.64-.391-.64.391Zm-7.348 4 .64-.391-.64.391Zm-.424-.692-.64.391.64-.391Zm.31-1.093-.358-.659.358.659Zm1.273 2.078-.358-.659.358.66Zm5.879-3.2-.359-.659.359.66Zm-1.273-2.078.358.659-.358-.66Zm-6.19.985-.639-.391.64.391Zm.425-.692.64.391-.64-.391Zm7.348 4 .64.391-.64-.391Zm-.424.692-.64-.391.64.391Zm-1.16.293.36-.659-.36.66Zm1.274-2.078.358-.659-.358.659Zm-5.879-3.2-.358.659.358-.66Zm-1.273 2.078.359-.659-.359.66Zm5.834-2.054-.359-.658.359.658Zm0 5.23-.359.658.359-.658Zm-4.516 0 .359.658-.359-.658Zm0-5.23.359-.658-.359.658ZM20.25 10.15v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm7.826.6h.848v-1.5h-.848v1.5Zm.848 6.5h-.848v1.5h.848v-1.5Zm-.848 0a.123.123 0 0 1-.086-.03.052.052 0 0 1-.012-.016V17.2h-1.5c0 .897.757 1.55 1.598 1.55v-1.5Zm.947-.05-.001.004a.05.05 0 0 1-.012.016.123.123 0 0 1-.086.03v1.5c.84 0 1.599-.653 1.599-1.55h-1.5Zm-.099-6.45c.042 0 .07.015.086.03a.05.05 0 0 1 .012.016v.004h1.5c0-.897-.757-1.55-1.598-1.55v1.5Zm-.848-1.5c-.84 0-1.599.653-1.599 1.55h1.5l.001-.004a.052.052 0 0 1 .012-.016.123.123 0 0 1 .086-.03v-1.5Zm3.246 2.795.425.693 1.279-.783-.424-.693-1.28.783Zm-5.644 3.91-.425-.693-1.279.783.424.693 1.28-.783Zm-.425-.693a.031.031 0 0 1-.003-.006v-.004l.007-.012a.084.084 0 0 1 .026-.02l-.717-1.318c-.763.415-1.062 1.376-.592 2.143l1.28-.783Zm.586.718a.14.14 0 0 1-.102.012.105.105 0 0 1-.06-.037l-1.279.783c.453.74 1.418.963 2.158.56l-.717-1.317Zm5.908-3.242a.025.025 0 0 1 .003.007v.003a.033.033 0 0 1-.007.012.083.083 0 0 1-.026.02l.717 1.318c.763-.415 1.062-1.376.592-2.143l-1.28.783Zm.855-1.476c-.453-.74-1.418-.963-2.158-.56l.717 1.318a.14.14 0 0 1 .102-.012c.036.01.053.027.06.037l1.279-.783Zm-7.349 1.476.425-.693-1.28-.783-.424.693 1.28.783Zm6.494 2.524-.425.693 1.28.783.424-.693-1.28-.783Zm-.425.693c-.006.01-.023.028-.059.037a.14.14 0 0 1-.101-.012l-.718 1.318c.74.403 1.705.18 2.158-.56l-1.28-.783Zm.395-.736a.085.085 0 0 1 .026.02c.004.006.006.01.006.013l.001.002v.002l-.003.006 1.279.783c.47-.767.171-1.728-.592-2.143l-.717 1.318Zm-6.04-3.174a.1.1 0 0 1 .06-.037.14.14 0 0 1 .102.012l.717-1.318c-.74-.402-1.705-.18-2.158.56l1.28.783Zm-1.703-.09c-.47.767-.171 1.728.592 2.143l.717-1.318a.084.084 0 0 1-.026-.02.034.034 0 0 1-.007-.012.012.012 0 0 1 0-.003l.003-.007-1.279-.783Zm7.142.089.046-.024-.718-1.318-.045.025.717 1.317Zm.045 3.936-.045-.024-.717 1.317.045.025.717-1.317Zm-5.277-.024-.045.024.717 1.318.045-.025-.717-1.317Zm-.045-3.936.045.024.717-1.317-.045-.025-.717 1.318Zm.638-1.22a.09.09 0 0 1 .041-.072.09.09 0 0 1 .083-.002l-.717 1.318a1.416 1.416 0 0 0 2.093-1.244h-1.5Zm-1.911 3.298a.112.112 0 0 1 0-.196l.717 1.318a1.388 1.388 0 0 0 0-2.44l-.717 1.318Zm2.035 3.175a.09.09 0 0 1-.083-.001.09.09 0 0 1-.04-.072h1.5a1.416 1.416 0 0 0-2.094-1.244l.717 1.317Zm3.922-.073a.09.09 0 0 1-.041.072.09.09 0 0 1-.083.002l.717-1.318a1.416 1.416 0 0 0-2.093 1.244h1.5Zm1.911-3.298a.112.112 0 0 1 0 .196l-.717-1.318a1.388 1.388 0 0 0 0 2.44l.717-1.318ZM13.9 10.727a.09.09 0 0 1 .083.001.09.09 0 0 1 .04.072h-1.5a1.416 1.416 0 0 0 2.094 1.244l-.717-1.317ZM12.75 14a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z' })));
};
var ForwardRef$6u = forwardRef(SvgHomeSetting);

var SvgHomeShare = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58Zm.72 3.123v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5ZM8 13.75a.75.75 0 0 1-.75-.75h-1.5A2.25 2.25 0 0 0 8 15.25v-1.5ZM7.25 13a.75.75 0 0 1 .75-.75v-1.5A2.25 2.25 0 0 0 5.75 13h1.5Zm8.5-3.5a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-1.5 0a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 15 7.25v1.5Zm.75 7.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5A2.25 2.25 0 0 0 15 18.75v-1.5Zm0-1.5a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 15 14.25v1.5Zm0-5.5a.75.75 0 0 1-.671-.415l-1.341.672A2.25 2.25 0 0 0 15 11.75v-1.5Zm-.671-.415a.744.744 0 0 1-.079-.335h-1.5c0 .36.085.703.238 1.007l1.34-.672ZM14.25 16.5c0-.122.028-.235.079-.335l-1.341-.672a2.244 2.244 0 0 0-.238 1.007h1.5Zm.079-.335A.75.75 0 0 1 15 15.75v-1.5a2.25 2.25 0 0 0-2.012 1.243l1.34.672ZM9.677 13l4.316-2.158-.67-1.342-4.316 2.158.67 1.342ZM8 12.25a.75.75 0 0 1 .671.415l1.341-.672A2.25 2.25 0 0 0 8 10.75v1.5Zm.671.415c.05.1.079.213.079.335h1.5c0-.36-.085-.703-.238-1.007l-1.34.672Zm.336 1.677 4.316 2.158.67-1.342L9.677 13l-.67 1.342ZM8.75 13a.744.744 0 0 1-.079.335l1.341.672c.153-.304.238-.647.238-1.007h-1.5Zm-.079.335A.75.75 0 0 1 8 13.75v1.5a2.25 2.25 0 0 0 2.012-1.243l-1.34-.672Z' })));
};
var ForwardRef$6t = forwardRef(SvgHomeShare);

var SvgHomeShield = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58Zm-10.424 3.42.336.67-.336-.67Zm2-1 .335.671-.335-.67Zm1.788 0 .336-.67-.336.67Zm1.991.996-.335.67.335-.67Zm-6.857 1.795.749-.037-.75.037Zm2.859 5.95.463-.59-.463.59Zm2.226 0 .465.588-.465-.589Zm2.851-5.941.75.04-.75-.04Zm4.286-2.097v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm5.692.968 1.999-1-.67-1.342-2 1 .67 1.342Zm3.117-1 1.99.995.671-1.341-1.99-.996-.671 1.342Zm-5.28 2.156c.076 1.567.311 2.785.827 3.83.52 1.054 1.29 1.865 2.318 2.673l.927-1.18c-.93-.73-1.515-1.377-1.9-2.156-.387-.786-.603-1.774-.674-3.24l-1.498.073Zm6.299 6.502c1.033-.815 1.796-1.633 2.31-2.686.51-1.045.742-2.256.825-3.803l-1.498-.08c-.078 1.45-.29 2.435-.675 3.225-.381.78-.962 1.434-1.892 2.166l.93 1.178Zm-3.154 0c.923.727 2.229.73 3.154 0l-.93-1.178a1.052 1.052 0 0 1-1.297 0l-.928 1.179Zm1.017-8.658a1.25 1.25 0 0 1 1.118 0l.67-1.342a2.75 2.75 0 0 0-2.459 0l.671 1.342Zm3.109.995c.434.218.69.651.665 1.094l1.498.08c.058-1.08-.562-2.05-1.493-2.515l-.67 1.341ZM8.77 9.776c-.924.462-1.544 1.422-1.492 2.498l1.498-.073c-.021-.439.233-.867.665-1.083l-.67-1.342Z' })));
};
var ForwardRef$6s = forwardRef(SvgHomeShield);

var SvgHomeUpload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58ZM9.47 10.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm1.823-.763-.53-.53.53.53Zm1.414 0-.53.53.53-.53Zm.763 1.823a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM12.75 10a.75.75 0 0 0-1.5 0h1.5Zm-1.5 7a.75.75 0 0 0 1.5 0h-1.5Zm9-6.85v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm6.78 1.38 1.293-1.293-1.06-1.06L9.47 10.47l1.06 1.06Zm1.647-1.293 1.293 1.293 1.06-1.06-1.293-1.293-1.06 1.06Zm-.354 0a.25.25 0 0 1 .354 0l1.06-1.06a1.75 1.75 0 0 0-2.474 0l1.06 1.06ZM11.25 10v7h1.5v-7h-1.5Z' })));
};
var ForwardRef$6r = forwardRef(SvgHomeUpload);

var SvgHomeWarning = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58ZM11.25 14a.75.75 0 0 0 1.5 0h-1.5Zm1.5-5a.75.75 0 0 0-1.5 0h1.5Zm7.5 1.15v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm9 3.85V9h-1.5v5h1.5Zm.25 3a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z' })));
};
var ForwardRef$6q = forwardRef(SvgHomeWarning);

var SvgHomeWave = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M7 15h.5A1.5 1.5 0 0 0 9 13.5v-1a1.5 1.5 0 0 1 3 0v3a1.5 1.5 0 0 0 3 0 1.5 1.5 0 0 1 1.5-1.5h.5m4-3.85v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.046 4.046 0 0 1 21 10.15Z' })));
};
var ForwardRef$6p = forwardRef(SvgHomeWave);

var SvgHomeWifi = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M12.75 17a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM4.47 7.027l-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58Zm-3.818 6.26a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-6.364 1.061a.75.75 0 0 0 1.061 1.061l-1.06-1.06Zm-2.121-2.121a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.364 3.182a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm6.659-5.259v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm8.25 1.6a5.23 5.23 0 0 1 3.712 1.538l1.06-1.061A6.731 6.731 0 0 0 12 10.25v1.5Zm-1.591 3.659A2.24 2.24 0 0 1 12 14.75v-1.5a3.74 3.74 0 0 0-2.652 1.098l1.061 1.061Zm-2.121-2.121A5.231 5.231 0 0 1 12 11.75v-1.5a6.731 6.731 0 0 0-4.773 1.977l1.06 1.06ZM12 14.75a2.24 2.24 0 0 1 1.591.659l1.06-1.06A3.74 3.74 0 0 0 12 13.25v1.5Z' })));
};
var ForwardRef$6o = forwardRef(SvgHomeWifi);

var SvgHome = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M8.293 15.31a.75.75 0 1 0-.586 1.38l.586-1.38Zm8.004 1.379a.75.75 0 0 0-.594-1.378l.594 1.378ZM4.47 7.027l-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58ZM7.707 16.69c1.63.691 2.97 1.063 4.335 1.06 1.366-.003 2.68-.382 4.255-1.061l-.594-1.378c-1.49.643-2.589.936-3.664.939-1.077.003-2.204-.286-3.746-.94l-.586 1.38Zm12.543-6.54v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Z' })));
};
var ForwardRef$6n = forwardRef(SvgHome);

var SvgHoney = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 3.5 16.5 6v5L12 13.5 7.5 11V6L12 3.5Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm7.5 11 4.5 2.5v5L7.5 21 3 18.5v-5L7.5 11Zm9 0 4.5 2.5v5L16.5 21 12 18.5v-5l4.5-2.5Z' })));
};
var ForwardRef$6m = forwardRef(SvgHoney);

var SvgHospitalBed = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M22 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M19 4.5v4m-3-4v4m3-2h-3M2 9v9m0 4v-4m0 0h20v4m-2-8H2v4h20v-2a2 2 0 0 0-2-2ZM5 12v2h5v-2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1Z' })));
};
var ForwardRef$6l = forwardRef(SvgHospitalBed);

var SvgHospitalPanel = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M16 8v8m0-4H8m0-4v8' })));
};
var ForwardRef$6k = forwardRef(SvgHospitalPanel);

var SvgHospital = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M4 22V6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v16M9 22v-5a3 3 0 1 1 6 0v5M12 5v6m3-3H9M2 22h20' })));
};
var ForwardRef$6j = forwardRef(SvgHospital);

var SvgHotspotOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M22 22 2 2m12 12a2 2 0 1 1-2-2m0-4a6 6 0 0 1 6 6M7.757 18.243A5.98 5.98 0 0 1 6 14c0-2.17 1.151-4.07 2.876-5.124M4.93 21.071A9.969 9.969 0 0 1 2 14a9.985 9.985 0 0 1 4-8m15.405 11.405A9.984 9.984 0 0 0 22 14c0-5.523-4.477-10-10-10-1.196 0-2.342.21-3.405.595' })));
};
var ForwardRef$6i = forwardRef(SvgHotspotOff);

var SvgHotspot = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 14, r: 2, stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M19.071 21.071A9.97 9.97 0 0 0 22 14c0-5.523-4.477-10-10-10S2 8.477 2 14a9.969 9.969 0 0 0 2.929 7.071m11.314-2.828a6 6 0 1 0-8.485 0' })));
};
var ForwardRef$6h = forwardRef(SvgHotspot);

var SvgInCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm12 8 4 4m0 0-4 4m4-4H2' }),
        React.createElement("path", { fill: 'currentColor', d: 'M8.53 18.83a.75.75 0 0 1 .94-1.17l-.94 1.17Zm.94-12.49a.75.75 0 1 1-.94-1.17l.94 1.17ZM14 19.25A7.25 7.25 0 0 0 21.25 12h1.5A8.75 8.75 0 0 1 14 20.75v-1.5ZM21.25 12A7.25 7.25 0 0 0 14 4.75v-1.5A8.75 8.75 0 0 1 22.75 12h-1.5ZM9.47 17.66A7.216 7.216 0 0 0 14 19.25v1.5a8.717 8.717 0 0 1-5.47-1.92l.94-1.17ZM14 4.75c-1.715 0-3.29.595-4.53 1.59l-.94-1.17A8.716 8.716 0 0 1 14 3.25v1.5Z' })));
};
var ForwardRef$6g = forwardRef(SvgInCircle);

var SvgInRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm12 9-3 3m0 0 3 3m-3-3h12m-6-4.5V7a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-.5' })));
};
var ForwardRef$6f = forwardRef(SvgInRectangle);

var SvgInjection = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M13.485 6.535 8.3 11.721a2 2 0 0 0-.566 1.131l-.236 1.65a2 2 0 0 0 2.263 2.263l1.65-.236a2 2 0 0 0 1.131-.566l5.186-5.185a2 2 0 0 0 0-2.828l-1.414-1.415a2 2 0 0 0-2.829 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm19.85 4.414-2.83 2.828M18.435 3l2.829 2.828m-12.021 4.95 7.07 1.414m-8.484 4.243L3 21' })));
};
var ForwardRef$6e = forwardRef(SvgInjection);

var SvgInstagram = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 20, height: 20, x: 2, y: 2, stroke: 'currentColor', strokeWidth: 1.5, rx: 4 }),
        React.createElement("circle", { cx: 18, cy: 6, r: 1, fill: 'currentColor' }),
        React.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: 'currentColor', strokeWidth: 1.5 })));
};
var ForwardRef$6d = forwardRef(SvgInstagram);

var SvgInternet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20 19.25a.75.75 0 0 0 0-1.5v1.5Zm-16-1.5a.75.75 0 0 0 0 1.5v-1.5ZM11.25 22a.75.75 0 0 0 1.5 0h-1.5Zm6-14c0 2.9-2.35 5.25-5.25 5.25v1.5A6.75 6.75 0 0 0 18.75 8h-1.5ZM12 13.25A5.25 5.25 0 0 1 6.75 8h-1.5A6.75 6.75 0 0 0 12 14.75v-1.5ZM6.75 8c0-2.9 2.35-5.25 5.25-5.25v-1.5A6.75 6.75 0 0 0 5.25 8h1.5ZM12 2.75c2.9 0 5.25 2.35 5.25 5.25h1.5A6.75 6.75 0 0 0 12 1.25v1.5ZM13.25 8c0 1.599-.217 3.015-.547 4.005-.167.5-.348.85-.514 1.06-.171.217-.241.185-.189.185v1.5c.604 0 1.06-.368 1.367-.757.314-.398.563-.927.759-1.513.393-1.181.624-2.765.624-4.48h-1.5ZM12 13.25c.052 0-.018.032-.19-.186-.165-.21-.346-.56-.513-1.059-.33-.99-.547-2.406-.547-4.005h-1.5c0 1.715.23 3.299.624 4.48.196.586.445 1.115.758 1.513.307.389.764.757 1.368.757v-1.5ZM10.75 8c0-1.599.217-3.015.547-4.005.167-.5.348-.85.514-1.06.171-.217.241-.185.189-.185v-1.5c-.604 0-1.06.368-1.367.757-.314.398-.563.927-.759 1.513C9.481 4.701 9.25 6.285 9.25 8h1.5ZM12 2.75c-.052 0 .018-.032.19.186.165.21.346.56.513 1.059.33.99.547 2.406.547 4.005h1.5c0-1.715-.23-3.299-.624-4.48-.196-.586-.445-1.115-.758-1.513-.307-.389-.764-.757-1.368-.757v1.5Zm2.25 15.75A2.25 2.25 0 0 0 12 16.25v1.5a.75.75 0 0 1 .75.75h1.5ZM12 16.25a2.25 2.25 0 0 0-2.25 2.25h1.5a.75.75 0 0 1 .75-.75v-1.5ZM9.75 18.5A2.25 2.25 0 0 0 12 20.75v-1.5a.75.75 0 0 1-.75-.75h-1.5ZM12 20.75a2.25 2.25 0 0 0 2.25-2.25h-1.5a.75.75 0 0 1-.75.75v1.5Zm.75-3.75v-3h-1.5v3h1.5Zm.75 2.25H20v-1.5h-6.5v1.5Zm-9.5 0h6.5v-1.5H4v1.5ZM12.75 22v-2h-1.5v2h1.5ZM6 8.75h12v-1.5H6v1.5Z' })));
};
var ForwardRef$6c = forwardRef(SvgInternet);

var SvgInvoicePercent = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2.323 6.036-.255.706.255-.706Zm-1.562-.562.254-.706-.254.706Zm-1.498.058-.308-.684.308.684ZM12.82 21.63l-.308-.684.308.684Zm-1.642 0 .308-.684-.308.684Zm-2.442-1.1.308-.683-.308.684Zm-1.498-.057-.254-.706.254.706Zm-1.562.562.254.706-.254-.706ZM5 2.75h14v-1.5H5v1.5ZM20.25 4v15.154h1.5V4h-1.5Zm-1.673 16.33-1.562-.562-.508 1.412 1.561.562.509-1.412Zm-3.622-.482-2.442 1.099.616 1.368 2.441-1.1-.615-1.367Zm-3.468 1.099-2.442-1.1-.615 1.369 2.441 1.099.616-1.368Zm-4.502-1.179-1.562.563.508 1.41 1.562-.561-.508-1.412Zm-3.235-.614V4h-1.5v15.154h1.5Zm1.673 1.177a1.25 1.25 0 0 1-1.673-1.177h-1.5a2.75 2.75 0 0 0 3.681 2.588l-.508-1.412Zm3.622-.483a2.75 2.75 0 0 0-2.06-.08l.508 1.412a1.25 1.25 0 0 1 .937.036l.615-1.368Zm3.468 1.099a1.25 1.25 0 0 1-1.026 0l-.616 1.368a2.75 2.75 0 0 0 2.258 0l-.616-1.368Zm4.502-1.179a2.75 2.75 0 0 0-2.06.08l.615 1.368a1.25 1.25 0 0 1 .937-.036l.508-1.412Zm3.235-.614a1.25 1.25 0 0 1-1.673 1.177l-.509 1.41a2.75 2.75 0 0 0 3.682-2.587h-1.5ZM19 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 19 1.25v1.5ZM5 1.25A2.75 2.75 0 0 0 2.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm3.47 13.22a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm7.06-4.94a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-6 6 6-6-1.06-1.06-6 6 1.06 1.06Z' })));
};
var ForwardRef$6b = forwardRef(SvgInvoicePercent);

var SvgInvoice = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M7 2.75h10v-1.5H7v1.5ZM20.25 6v12h1.5V6h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V6h-1.5v12h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5ZM17 2.75A3.25 3.25 0 0 1 20.25 6h1.5A4.75 4.75 0 0 0 17 1.25v1.5ZM7 1.25A4.75 4.75 0 0 0 2.25 6h1.5A3.25 3.25 0 0 1 7 2.75v-1.5Zm10 6.5a.75.75 0 0 0 0-1.5v1.5ZM7 6.25a.75.75 0 0 0 0 1.5v-1.5Zm10 0H7v1.5h10v-1.5Zm0 6.5a.75.75 0 0 0 0-1.5v1.5Zm-10-1.5a.75.75 0 0 0 0 1.5v-1.5Zm10 0H7v1.5h10v-1.5Zm-5 6.5a.75.75 0 0 0 0-1.5v1.5Zm-5-1.5a.75.75 0 0 0 0 1.5v-1.5Zm5 0H7v1.5h5v-1.5Z' })));
};
var ForwardRef$6a = forwardRef(SvgInvoice);

var SvgLaptop = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10H4V6ZM2 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1 3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z' })));
};
var ForwardRef$69 = forwardRef(SvgLaptop);

var SvgLightMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 2v2m0 16v2m8.66-15-1.732 1M5.072 16 3.34 17m0-10 1.732 1m13.856 8 1.732 1' })));
};
var ForwardRef$68 = forwardRef(SvgLightMode);

var SvgLineChartAscending = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18.4 7.2a2 2 0 1 0 3.2-2.4 2 2 0 0 0-3.2 2.4Zm0 0-4.8 3.6m0 0a2 2 0 1 0-3.2 2.4m3.2-2.4a2 2 0 1 1-3.2 2.4m0 0-4.8 3.6m0 0a2 2 0 1 0-3.2 2.4 2 2 0 0 0 3.2-2.4Z' })));
};
var ForwardRef$67 = forwardRef(SvgLineChartAscending);

var SvgLineChartDescending = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18.89 16.336a2 2 0 1 1 2.22 3.329 2 2 0 0 1-2.22-3.33Zm0 0-5.78-8.672m0 0A1.997 1.997 0 0 1 10.4 7.2m2.71.464A2 2 0 1 0 10.4 7.2m0 0-4.8 3.6m0 0a2 2 0 1 1-3.2 2.4 2 2 0 0 1 3.2-2.4Z' })));
};
var ForwardRef$66 = forwardRef(SvgLineChartDescending);

var SvgLineChart = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18.89 7.664a2 2 0 1 0 2.219-3.329 2 2 0 0 0-2.218 3.33Zm0 0-5.78 8.672m0 0a1.997 1.997 0 0 0-2.71.464m2.71-.464a2 2 0 1 1-2.71.464m0 0-4.8-3.6m0 0a2 2 0 1 0-3.2-2.4 2 2 0 0 0 3.2 2.4Z' })));
};
var ForwardRef$65 = forwardRef(SvgLineChart);

var SvgLinkedln = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 4, cy: 4, r: 2, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M2 8.5h4V22H2V8.5ZM9 22h4v-7a2 2 0 1 1 4 0v7h4v-7a6 6 0 0 0-8-5.659V8.5H9V22Zm0 0v-7' })));
};
var ForwardRef$64 = forwardRef(SvgLinkedln);

var SvgLocationAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M17 11a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M21 10.889C21 15.799 15.375 22 12 22s-9-6.202-9-11.111C3 5.979 7.03 2 12 2s9 3.98 9 8.889Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 9v4m2-2h-4' })));
};
var ForwardRef$63 = forwardRef(SvgLocationAdd);

var SvgLocationHospital = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M20 9.889c0 4.649-4.63 9.233-6.845 11.16-.67.584-1.64.584-2.31 0C8.629 19.123 4 14.539 4 9.89 4 6 7.03 2 12 2c4.97 0 8 4 8 7.889Z' }),
        React.createElement("circle", { cx: 12, cy: 10, r: 5, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M14 8v4m-4-4v4m4-2h-4' })));
};
var ForwardRef$62 = forwardRef(SvgLocationHospital);

var SvgLocationMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 11, r: 5, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M21 10.889C21 15.799 15.375 22 12 22s-9-6.202-9-11.111C3 5.979 7.03 2 12 2s9 3.98 9 8.889Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M14 11h-4' })));
};
var ForwardRef$61 = forwardRef(SvgLocationMinus);

var SvgLocationRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 11, r: 5, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M21 10.889C21 15.799 15.375 22 12 22s-9-6.202-9-11.111C3 5.979 7.03 2 12 2s9 3.98 9 8.889Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm13.414 9.586-2.828 2.828m0-2.828 2.828 2.828' })));
};
var ForwardRef$60 = forwardRef(SvgLocationRemove);

var SvgLocationShare = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 11, r: 3, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M19 11c0 4.418-4.5 9-7 9s-7-4.582-7-9 3.134-7 7-7 7 2.582 7 7Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M20.953 6C21.623 7.312 22 8.862 22 10.625c0 1.131-.223 2.27-.609 3.375M2.61 14C2.223 12.895 2 11.756 2 10.625 2 8.862 2.377 7.312 3.047 6' })));
};
var ForwardRef$5$ = forwardRef(SvgLocationShare);

var SvgLocationUser = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M13.5 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M21 10.889C21 15.799 15.375 22 12 22s-9-6.202-9-11.111C3 5.979 7.03 2 12 2s9 3.98 9 8.889Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M14.863 15.1a3.001 3.001 0 0 0-5.726 0m5.726 0a5 5 0 1 0-5.725 0m5.725 0A4.98 4.98 0 0 1 12 16a4.977 4.977 0 0 1-2.863-.9' })));
};
var ForwardRef$5_ = forwardRef(SvgLocationUser);

var SvgLocation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 11, r: 3, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M21 10.889C21 15.799 15.375 22 12 22s-9-6.202-9-11.111C3 5.979 7.03 2 12 2s9 3.98 9 8.889Z' })));
};
var ForwardRef$5Z = forwardRef(SvgLocation);

var SvgLock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 16, height: 14, x: 4, y: 7, stroke: 'currentColor', strokeWidth: 1.5, rx: 4 }),
        React.createElement("circle", { cx: 12, cy: 14, r: 2, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M16 7a4 4 0 0 0-8 0' })));
};
var ForwardRef$5Y = forwardRef(SvgLock);

var SvgMapAccordionBelow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M8 2.27c-1.867.21-4.14 1.757-5.278 2.618A1.86 1.86 0 0 0 2 6.383v9.67c0 .852 1.028 1.347 1.736.871C4.946 16.112 6.59 15.19 8 15.031M8 2.27c3.318-.372 4.682 3.56 8 3.19M8 2.27v12.76m8-9.57c1.411-.159 3.054-1.081 4.264-1.894.708-.476 1.736.019 1.736.872v9.67a1.86 1.86 0 0 1-.722 1.494 21.18 21.18 0 0 1-1.694 1.161M16 5.46v6.38m-8 3.19c1.214-.135 2.166.305 3.048.9' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M19.555 15.805c0 2.283-2.153 6.2-4.305 6.2-2.152 0-4.305-3.917-4.305-6.2 0-2.282 1.928-4.132 4.305-4.132s4.305 1.85 4.305 4.132Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M16.541 15.547a1.291 1.291 0 1 1-2.582 0 1.291 1.291 0 0 1 2.582 0Z' })));
};
var ForwardRef$5X = forwardRef(SvgMapAccordionBelow);

var SvgMapAccordionFlag = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M8.566 6.025C6.7 6.234 4.426 7.782 3.29 8.642a1.86 1.86 0 0 0-.723 1.495v9.67c0 .853 1.028 1.348 1.737.872 1.21-.813 2.852-1.736 4.263-1.894m0-12.76c3.319-.372 4.682 3.561 8 3.19m-8-3.19v12.76m8-9.57c1.412-.158 3.055-1.081 4.264-1.894.709-.476 1.736.02 1.736.873v9.669a1.86 1.86 0 0 1-.722 1.495c-1.138.86-3.41 2.408-5.278 2.617m0-12.76v12.76m-8-3.19c3.319-.371 4.682 3.562 8 3.19' }),
        React.createElement("path", { fill: 'currentColor', d: 'M13.102 13.107a.75.75 0 0 0 1.5 0h-1.5Zm.75-11.024v-.75a.75.75 0 0 0-.75.75h.75Zm6 0 .666.346a.75.75 0 0 0-.666-1.095v.75Zm0 3.624v.75a.75.75 0 0 0 .646-1.131l-.646.38Zm-1-1.696-.666-.346a.75.75 0 0 0 .02.727l.646-.381Zm-4.25 9.096v-7.4h-1.5v7.4h1.5Zm-.75-10.274h6v-1.5h-6v1.5Zm6 2.124h-6v1.5h6v-1.5Zm-5.25.75V2.084h-1.5v3.623h1.5Zm4.584-3.969-1 1.927 1.332.691 1-1.927-1.332-.69Zm-.98 2.654 1 1.696 1.292-.762-1-1.696-1.292.762Z' })));
};
var ForwardRef$5W = forwardRef(SvgMapAccordionFlag);

var SvgMapAccordionPin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M8 6.52c-1.867.21-4.14 1.757-5.278 2.618A1.86 1.86 0 0 0 2 10.633v9.67c0 .852 1.028 1.347 1.736.871C4.946 20.362 6.59 19.44 8 19.281M8 6.52v12.76M8 6.52c2.964-.332 4.368 2.77 7 3.172.314.048.646.057 1 .017m0 0a5.42 5.42 0 0 0 1.03-.228c1.133-.36 2.31-1.044 3.234-1.665.708-.476 1.736.019 1.736.872v9.67a1.86 1.86 0 0 1-.722 1.494c-1.138.86-3.41 2.409-5.278 2.618m0-12.76v12.76m-8-3.19c3.318-.372 4.682 3.561 8 3.19' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M18.383 6.496a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v8' })));
};
var ForwardRef$5V = forwardRef(SvgMapAccordionPin);

var SvgMapAccordionTop = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M19.893 6.27c0 2.361-2.227 6.414-4.454 6.414S10.985 8.63 10.985 6.27c0-2.361 1.995-4.276 4.454-4.276 2.46 0 4.454 1.915 4.454 4.276Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M16.776 6.003a1.336 1.336 0 1 1-2.673 0 1.336 1.336 0 0 1 2.673 0ZM8 6.036c-1.867.209-4.14 1.757-5.278 2.617A1.86 1.86 0 0 0 2 10.148v9.67c0 .853 1.028 1.348 1.736.871 1.21-.812 2.853-1.735 4.264-1.893m0-12.76v12.76m0-12.76c1.22-.137 2.175.308 3.06.906M8 18.796c3.318-.372 4.682 3.561 8 3.19m0 0c1.867-.209 4.14-1.757 5.278-2.617A1.86 1.86 0 0 0 22 17.873v-9.67c0-.853-1.028-1.348-1.736-.872-.227.152-.468.308-.721.462M16 21.986V12.56' })));
};
var ForwardRef$5U = forwardRef(SvgMapAccordionTop);

var SvgMapAccordion = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M8 2.295c-1.867.21-4.14 1.757-5.278 2.618A1.86 1.86 0 0 0 2 6.408v9.669c0 .853 1.028 1.348 1.736.872.928-.623 2.11-1.31 3.247-1.67M8 2.296c3.318-.371 4.682 3.562 8 3.19m-8-3.19v9.475m8-6.285c1.411-.158 3.054-1.08 4.264-1.893.708-.476 1.736.019 1.736.872v9.67a1.86 1.86 0 0 1-.722 1.494c-1.138.86-3.41 2.409-5.278 2.618m0-12.76v6.38' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M17 14.744c0 2.65-2.5 7.2-5 7.2s-5-4.55-5-7.2c0-2.651 2.239-4.8 5-4.8s5 2.149 5 4.8Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M13.5 14.444a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' })));
};
var ForwardRef$5T = forwardRef(SvgMapAccordion);

var SvgMapBig = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M19 8.857c0 2.285-1.698 5.14-3.558 7.046C14.22 17.157 12.926 18 12 18c-.926 0-2.22-.843-3.442-2.097C6.698 13.997 5 11.142 5 8.857 5 5.07 8.134 2 12 2s7 3.07 7 6.857Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M15.154 16.19C18.57 16.614 21 17.712 21 19c0 1.657-4.03 3-9 3s-9-1.343-9-3c0-1.287 2.431-2.385 5.846-2.81' })));
};
var ForwardRef$5S = forwardRef(SvgMapBig);

var SvgMapCircleGps = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M6.299 6.5c-1.397.58-2.771 1.533-3.577 2.142A1.86 1.86 0 0 0 2 10.137v9.67c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894 3.318-.371 4.682 3.562 8 3.19 1.867-.209 4.14-1.757 5.278-2.617A1.86 1.86 0 0 0 22 17.863v-9.67c0-.853-1.028-1.348-1.736-.872-.681.458-1.5.95-2.336 1.321' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'm10.763 8.92-1.515-.504a.5.5 0 0 1-.04-.934l4.643-1.99a.5.5 0 0 1 .657.657l-1.99 4.642a.5.5 0 0 1-.934-.039l-.505-1.515a.5.5 0 0 0-.316-.316Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0Z' })));
};
var ForwardRef$5R = forwardRef(SvgMapCircleGps);

var SvgMapFlag = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M7.098 6.878c-1.867.21-4.14 1.757-5.278 2.617a1.86 1.86 0 0 0-.722 1.495v9.67c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894 3.318-.371 4.682 3.562 8 3.19 1.867-.209 4.14-1.757 5.278-2.617a1.86 1.86 0 0 0 .722-1.495v-9.67c0-.853-1.028-1.348-1.736-.872-1.21.813-2.852 1.736-4.264 1.894-3.318.372-4.682-3.561-8-3.19Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M15 13.96v-8m0-3.917h6l-1 2.084 1 2.083h-6V2.043Z' })));
};
var ForwardRef$5Q = forwardRef(SvgMapFlag);

var SvgMapGpsBelow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M8 2.025c-1.867.209-4.14 1.757-5.278 2.617A1.86 1.86 0 0 0 2 6.137v9.67c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894m0-12.76c3.318-.372 4.682 3.561 8 3.19m-8-3.19v12.76m8-9.57c1.411-.158 3.054-1.081 4.264-1.894.708-.476 1.736.02 1.736.873v9.669a1.86 1.86 0 0 1-.722 1.495c-.625.472-1.593 1.152-2.647 1.704M16 5.215v7.672m-8 1.898a3.855 3.855 0 0 1 2.06.337' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm13.527 17.684-2.894-.965c-.84-.28-.963-1.333-.371-1.841a1.1 1.1 0 0 1 .37-.208l7.839-2.613a1.08 1.08 0 0 1 1.366 1.367l-1.377 4.131-1.236 3.707c-.328.984-1.72.984-2.049 0l-.965-2.895a1.08 1.08 0 0 0-.683-.683Z' })));
};
var ForwardRef$5P = forwardRef(SvgMapGpsBelow);

var SvgMapGpsNavigation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M8 18.785c-1.411.158-3.054 1.081-4.264 1.894-.708.476-1.736-.02-1.736-.872v-9.67c0-.585.255-1.142.722-1.495.782-.591 2.1-1.507 3.455-2.09a7.73 7.73 0 0 1 1.13-.396M8 18.786c3.318-.372 4.682 3.56 8 3.19m-8-3.19v-7.522m8 10.711c1.867-.209 4.14-1.757 5.278-2.617A1.86 1.86 0 0 0 22 17.863v-9.67c0-.853-1.028-1.348-1.736-.872a18.39 18.39 0 0 1-1.303.802M16 21.975V12.73m-4.338-3.81-1.515-.504a.5.5 0 0 1-.039-.934l4.643-1.99a.5.5 0 0 1 .656.657l-1.99 4.642a.5.5 0 0 1-.933-.039l-.505-1.515a.5.5 0 0 0-.317-.316Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M18.9 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z' })));
};
var ForwardRef$5O = forwardRef(SvgMapGpsNavigation);

var SvgMapGps = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M19 16.862a20.527 20.527 0 0 0 2.278-1.504A1.86 1.86 0 0 0 22 13.863v-9.67c0-.853-1.028-1.348-1.736-.872-1.21.813-2.853 1.736-4.264 1.894-3.318.371-4.682-3.562-8-3.19-1.867.209-4.14 1.757-5.278 2.617A1.86 1.86 0 0 0 2 6.137v9.67c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894.806-.09 1.497.074 2.129.368' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'm13.633 17.684-2.894-.965c-.84-.28-.964-1.333-.372-1.841.103-.088.226-.16.371-.208l7.838-2.613a1.08 1.08 0 0 1 1.367 1.367l-1.378 4.131-1.235 3.706c-.328.985-1.721.985-2.05 0l-.964-2.894a1.08 1.08 0 0 0-.683-.683Z' })));
};
var ForwardRef$5N = forwardRef(SvgMapGps);

var SvgMapLocationAccordion = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M8 18.834c-1.411.158-3.054 1.081-4.264 1.894-.708.476-1.736-.019-1.736-.872v-9.67c0-.585.255-1.142.722-1.495 1.01-.763 2.914-2.069 4.635-2.499M8 18.834c3.318-.371 4.682 3.562 8 3.19m-8-3.19V9.378m8 12.646c1.867-.209 4.14-1.757 5.278-2.617A1.86 1.86 0 0 0 22 17.912v-9.67c0-.853-1.028-1.348-1.736-.872-.995.669-2.283 1.412-3.495 1.743M16 22.024V11.211' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M17.462 6.863c0 2.651-2.5 7.2-5 7.2s-5-4.549-5-7.2c0-2.65 2.238-4.8 5-4.8 2.761 0 5 2.15 5 4.8Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M13.962 6.563a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' })));
};
var ForwardRef$5M = forwardRef(SvgMapLocationAccordion);

var SvgMapLocationBelow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M12.305 16.61c-1.276-.958-2.502-2.027-4.305-1.825-1.411.158-3.054 1.081-4.264 1.894-.708.476-1.736-.02-1.736-.872v-9.67c0-.585.255-1.142.722-1.495C3.86 3.782 6.132 2.234 8 2.025c3.318-.372 4.682 3.561 8 3.19 1.411-.158 3.054-1.081 4.264-1.894.708-.476 1.736.02 1.736.873v9.669c0 .116-.01.23-.03.342' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M22 14.8c0 2.651-2.5 7.2-5 7.2s-5-4.549-5-7.2 2.239-4.8 5-4.8 5 2.149 5 4.8Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M18.5 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' })));
};
var ForwardRef$5L = forwardRef(SvgMapLocationBelow);

var SvgMapLocationMiddle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M16 17.975c1.867-.209 4.14-1.757 5.278-2.617A1.86 1.86 0 0 0 22 13.863v-9.67c0-.853-1.028-1.348-1.736-.872-1.21.813-2.853 1.736-4.264 1.894-3.318.371-4.682-3.562-8-3.19-1.867.209-4.14 1.757-5.278 2.617A1.86 1.86 0 0 0 2 6.137v9.67c0 .853 1.028 1.348 1.736.872.95-.639 2.169-1.345 3.331-1.696' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M17 14.8c0 2.651-2.5 7.2-5 7.2s-5-4.549-5-7.2S9.239 10 12 10s5 2.149 5 4.8Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M13.5 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' })));
};
var ForwardRef$5K = forwardRef(SvgMapLocationMiddle);

var SvgMapLocationTop = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M11.605 7.321C10.56 6.543 9.473 5.86 8 6.025c-1.867.209-4.14 1.757-5.278 2.617A1.86 1.86 0 0 0 2 10.137v9.67c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894 3.318-.371 4.682 3.562 8 3.19 1.867-.209 4.14-1.757 5.278-2.617A1.86 1.86 0 0 0 22 17.863v-9.67c0-.38-.203-.688-.492-.872' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M21.58 6.8c0 2.651-2.5 7.2-5 7.2s-5-4.549-5-7.2 2.24-4.8 5-4.8c2.762 0 5 2.149 5 4.8Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M18.08 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' })));
};
var ForwardRef$5J = forwardRef(SvgMapLocationTop);

var SvgMapLocation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M7.07 6.222c-1.642.494-3.394 1.699-4.348 2.42A1.86 1.86 0 0 0 2 10.137v9.67c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894 3.318-.371 4.682 3.562 8 3.19 1.867-.209 4.14-1.757 5.278-2.617A1.86 1.86 0 0 0 22 17.863v-9.67c0-.853-1.028-1.348-1.736-.872-1.046.703-2.414 1.487-3.678 1.79' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M17 6.8c0 2.651-2.5 7.2-5 7.2S7 9.451 7 6.8 9.239 2 12 2s5 2.149 5 4.8Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M13.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' })));
};
var ForwardRef$5I = forwardRef(SvgMapLocation);

var SvgMapPaper = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M8 4.025c-1.867.209-4.14 1.757-5.278 2.617A1.86 1.86 0 0 0 2 8.137v9.67c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894m0-12.76c3.318-.372 4.682 3.561 8 3.19m-8-3.19v12.76m8-9.57c1.411-.158 3.054-1.081 4.264-1.894.708-.476 1.736.02 1.736.873v9.669a1.86 1.86 0 0 1-.722 1.495c-1.138.86-3.41 2.408-5.278 2.617m0-12.76v12.76m-8-3.19c3.318-.371 4.682 3.562 8 3.19' })));
};
var ForwardRef$5H = forwardRef(SvgMapPaper);

var SvgMapPeopleAccordion = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M8 4.025c-1.867.209-4.14 1.757-5.278 2.617A1.86 1.86 0 0 0 2 8.137v9.67c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894m0-12.76v12.76m0-12.76c2.4-.269 3.777 1.714 5.612 2.692M8 16.785c3.318-.371 4.682 3.562 8 3.19m0 0c1.867-.209 4.14-1.757 5.278-2.617A1.86 1.86 0 0 0 22 15.863v-9.67c0-.853-1.028-1.348-1.736-.872-.63.423-1.377.876-2.148 1.236M16 19.975V16.06' }),
        React.createElement("path", { fill: 'currentColor', d: 'm18.667 11.057-.25-.708.25.708Zm-6.133-3.055-.65-.376.65.376Zm7.097.318-.68.315.68-.315Zm-6.767-.803.588.466-.588-.466ZM17.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 18.75 4h-1.5ZM16 5.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 16 6.75v-1.5ZM14.75 4c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 13.25 4h1.5ZM16 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 16 1.25v1.5ZM17.25 12v2h1.5v-2h-1.5Zm-2.5 2v-2h-1.5v2h1.5ZM16 15.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 16 16.75v-1.5ZM17.25 14c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 18.75 14h-1.5Zm-6-4c0 .966.784 1.75 1.75 1.75v-1.5a.25.25 0 0 1-.25-.25h-1.5Zm3.5 2A1.75 1.75 0 0 0 13 10.25v1.5a.25.25 0 0 1 .25.25h1.5Zm4.5-2a.25.25 0 0 1-.25.25v1.5A1.75 1.75 0 0 0 20.75 10h-1.5Zm-.5 2a.25.25 0 0 1 .167-.236l-.5-1.415A1.75 1.75 0 0 0 17.25 12h1.5Zm.167-.236A.246.246 0 0 1 19 11.75v-1.5c-.203 0-.4.035-.582.1l.499 1.414Zm-7.032-4.138A4.731 4.731 0 0 0 11.25 10h1.5c0-.593.158-1.146.434-1.623l-1.3-.75ZM16 6.75a3.25 3.25 0 0 1 2.95 1.885l1.362-.63A4.75 4.75 0 0 0 16 5.25v1.5Zm2.95 1.885c.192.414.3.876.3 1.365h1.5c0-.711-.157-1.388-.438-1.996l-1.361.631ZM16 5.25c-1.51 0-2.855.705-3.723 1.8l1.175.933A3.243 3.243 0 0 1 16 6.75v-1.5Zm-3.723 1.8a4.747 4.747 0 0 0-.392.576l1.299.75c.08-.137.17-.269.268-.393l-1.175-.932Z' })));
};
var ForwardRef$5G = forwardRef(SvgMapPeopleAccordion);

var SvgMapPeople = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M12.612 8.035C11.222 7.028 9.947 5.764 8 5.982c-1.867.209-4.14 1.757-5.278 2.617A1.86 1.86 0 0 0 2 10.094v9.67c0 .853 1.028 1.348 1.736.872C4.946 19.823 6.59 18.9 8 18.742c3.318-.372 4.682 3.561 8 3.19 1.867-.209 4.14-1.757 5.278-2.617A1.86 1.86 0 0 0 22 17.82V8.15c0-.853-1.028-1.348-1.736-.872-.302.203-.63.412-.976.615' }),
        React.createElement("path", { fill: 'currentColor', d: 'm18.667 11.059-.25-.708.25.708Zm-6.133-3.056-.65-.375.65.375Zm7.097.319-.68.315.68-.315Zm-6.767-.803.588.466-.588-.466Zm4.386-3.517c0 .69-.56 1.25-1.25 1.25v1.5a2.75 2.75 0 0 0 2.75-2.75h-1.5ZM16 5.252c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 16 6.752v-1.5Zm-1.25-1.25c0-.69.56-1.25 1.25-1.25v-1.5a2.75 2.75 0 0 0-2.75 2.75h1.5ZM16 2.752c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 16 1.252v1.5Zm1.25 9.25v2h1.5v-2h-1.5Zm-2.5 2v-2h-1.5v2h1.5Zm1.25 1.25c-.69 0-1.25-.56-1.25-1.25h-1.5a2.75 2.75 0 0 0 2.75 2.75v-1.5Zm1.25-1.25c0 .69-.56 1.25-1.25 1.25v1.5a2.75 2.75 0 0 0 2.75-2.75h-1.5Zm-6-4c0 .966.784 1.75 1.75 1.75v-1.5a.25.25 0 0 1-.25-.25h-1.5Zm3.5 2a1.75 1.75 0 0 0-1.75-1.75v1.5a.25.25 0 0 1 .25.25h1.5Zm4.5-2a.25.25 0 0 1-.25.25v1.5a1.75 1.75 0 0 0 1.75-1.75h-1.5Zm-.5 2a.25.25 0 0 1 .167-.236l-.5-1.415a1.75 1.75 0 0 0-1.167 1.651h1.5Zm.167-.236a.249.249 0 0 1 .083-.014v-1.5c-.203 0-.4.035-.582.1l.499 1.414Zm-7.032-4.138a4.731 4.731 0 0 0-.635 2.374h1.5c0-.593.158-1.146.434-1.623l-1.3-.75ZM16 6.752a3.25 3.25 0 0 1 2.95 1.885l1.362-.63A4.75 4.75 0 0 0 16 5.251v1.5Zm2.95 1.885c.192.414.3.876.3 1.365h1.5c0-.711-.157-1.388-.438-1.996l-1.361.631ZM16 5.252c-1.51 0-2.855.705-3.723 1.8l1.175.933A3.243 3.243 0 0 1 16 6.752v-1.5Zm-3.723 1.8a4.746 4.746 0 0 0-.392.576l1.299.75c.08-.137.17-.27.268-.393l-1.175-.933Z' })));
};
var ForwardRef$5F = forwardRef(SvgMapPeople);

var SvgMapPin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M8 6.025c-2.097.235-4.706 2.158-5.644 2.9A.951.951 0 0 0 2 9.676v10.13c0 .854 1.028 1.349 1.736.873 1.21-.813 2.853-1.736 4.264-1.894 3.318-.371 4.682 3.562 8 3.19 2.097-.235 4.706-2.158 5.644-2.9a.951.951 0 0 0 .356-.751V8.194c0-.854-1.028-1.349-1.736-.873-1.21.813-2.853 1.736-4.264 1.894-3.318.371-4.682-3.562-8-3.19Z' }),
        React.createElement("circle", { cx: 16, cy: 4, r: 2, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M16 14V6' })));
};
var ForwardRef$5E = forwardRef(SvgMapPin);

var SvgMapSmall = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M18 9c0 3.314-4 8-6 8s-6-4.686-6-8a6 6 0 1 1 12 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M15 15h1.127a4 4 0 0 1 3.072 1.44l1.067 1.28c1.086 1.302.16 3.28-1.536 3.28H5.27c-1.696 0-2.622-1.978-1.536-3.28L4.8 16.44A4 4 0 0 1 7.873 15H9' })));
};
var ForwardRef$5D = forwardRef(SvgMapSmall);

var SvgMap = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M8 4.025c-1.867.209-4.14 1.757-5.278 2.617A1.86 1.86 0 0 0 2 8.137v9.67c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894 3.318-.371 4.682 3.562 8 3.19 1.867-.209 4.14-1.757 5.278-2.617A1.86 1.86 0 0 0 22 15.863v-9.67c0-.853-1.028-1.348-1.736-.872-1.21.813-2.853 1.736-4.264 1.894-3.318.371-4.682-3.562-8-3.19Z' })));
};
var ForwardRef$5C = forwardRef(SvgMap);

var SvgMask = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 11V8a2 2 0 1 1 4 0v4a4 4 0 0 1-4 4M6 11V8a2 2 0 1 0-4 0v4a4 4 0 0 0 4 4m4.211-8.106L6 10v5.127a4 4 0 0 0 1.44 3.072l.719.6a6 6 0 0 0 7.682 0l.72-.6A4 4 0 0 0 18 15.126V10l-4.211-2.106a4 4 0 0 0-3.578 0Z' })));
};
var ForwardRef$5B = forwardRef(SvgMask);

var SvgMasterCard = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 18, height: 20, x: 22, y: 3, stroke: 'currentColor', strokeWidth: 1.5, rx: 4, transform: 'rotate(90 22 3)' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M12 9.764c-.614.55-1 1.348-1 2.236a2.99 2.99 0 0 0 1 2.236m0-4.472a3 3 0 1 1 0 4.472m0-4.472a3 3 0 1 0 0 4.472' })));
};
var ForwardRef$5A = forwardRef(SvgMasterCard);

var SvgMaximizeCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M16 3h5m0 0v5m0-5L10 14' }),
        React.createElement("path", { fill: 'currentColor', d: 'M19.75 13a.75.75 0 0 0-1.5 0h1.5ZM11 5.75a.75.75 0 0 0 0-1.5v1.5ZM18.25 13A7.25 7.25 0 0 1 11 20.25v1.5A8.75 8.75 0 0 0 19.75 13h-1.5ZM11 20.25A7.25 7.25 0 0 1 3.75 13h-1.5A8.75 8.75 0 0 0 11 21.75v-1.5ZM3.75 13A7.25 7.25 0 0 1 11 5.75v-1.5A8.75 8.75 0 0 0 2.25 13h1.5Z' })));
};
var ForwardRef$5z = forwardRef(SvgMaximizeCircle);

var SvgMaximizeRectangleDoted = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M8 11.25H6v1.5h2v-1.5ZM1.25 16v2h1.5v-2h-1.5ZM6 22.75h2v-1.5H6v1.5ZM12.75 18v-2h-1.5v2h1.5ZM8 22.75A4.75 4.75 0 0 0 12.75 18h-1.5A3.25 3.25 0 0 1 8 21.25v1.5ZM1.25 18A4.75 4.75 0 0 0 6 22.75v-1.5A3.25 3.25 0 0 1 2.75 18h-1.5ZM6 11.25A4.75 4.75 0 0 0 1.25 16h1.5A3.25 3.25 0 0 1 6 12.75v-1.5Zm2 1.5A3.25 3.25 0 0 1 11.25 16h1.5A4.75 4.75 0 0 0 8 11.25v1.5Zm10-11.5h-8v1.5h8v-1.5ZM22.75 14V6h-1.5v8h1.5ZM18 18.75A4.75 4.75 0 0 0 22.75 14h-1.5A3.25 3.25 0 0 1 18 17.25v1.5Zm-8-17.5A4.75 4.75 0 0 0 5.25 6h1.5A3.25 3.25 0 0 1 10 2.75v-1.5Zm8 1.5A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5Zm0 14.5h-6v1.5h6v-1.5ZM5.25 6v6h1.5V6h-1.5Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 7h5m0 0v5m0-5-6 6' })));
};
var ForwardRef$5y = forwardRef(SvgMaximizeRectangleDoted);

var SvgMaximizeRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20.25 9a.75.75 0 0 0 1.5 0h-1.5ZM21 3h.75a.75.75 0 0 0-.75-.75V3Zm-6-.75a.75.75 0 0 0 0 1.5v-1.5ZM9.47 13.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM21.75 9V3h-1.5v6h1.5ZM21 2.25h-6v1.5h6v-1.5Zm-.53.22-11 11 1.06 1.06 11-11-1.06-1.06Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-5' })));
};
var ForwardRef$5x = forwardRef(SvgMaximizeRectangle);

var SvgMedicalBook = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M15 9H9m3 3V6' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M20 16H7a3 3 0 0 0-3 3m0 0a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v14Z' })));
};
var ForwardRef$5w = forwardRef(SvgMedicalBook);

var SvgMedicalInformation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M8 11v6m3-3H5m14-2h-5m3 4h-3' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M14 6h4a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4h4m4 0V4a2 2 0 1 0-4 0v2m4 0a2 2 0 1 1-4 0' })));
};
var ForwardRef$5v = forwardRef(SvgMedicalInformation);

var SvgMedicalService = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 11v6m3-3H9M8 6V5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1M6 22h12a4 4 0 0 0 4-4v-8a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4Z' })));
};
var ForwardRef$5u = forwardRef(SvgMedicalService);

var SvgMenuCircleHorizontal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 16.75, cy: 12.25, r: 1.25, fill: 'currentColor', transform: 'rotate(90 16.75 12.25)' }),
        React.createElement("circle", { cx: 11.75, cy: 12.25, r: 1.25, fill: 'currentColor', transform: 'rotate(90 11.75 12.25)' }),
        React.createElement("circle", { cx: 6.75, cy: 12.25, r: 1.25, fill: 'currentColor', transform: 'rotate(90 6.75 12.25)' })));
};
var ForwardRef$5t = forwardRef(SvgMenuCircleHorizontal);

var SvgMenuCircleVertical = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12.25, cy: 7.25, r: 1.25, fill: 'currentColor' }),
        React.createElement("circle", { cx: 12.25, cy: 12.25, r: 1.25, fill: 'currentColor' }),
        React.createElement("circle", { cx: 12.25, cy: 17.25, r: 1.25, fill: 'currentColor' })));
};
var ForwardRef$5s = forwardRef(SvgMenuCircleVertical);

var SvgMenuHome = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M8 11.25a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8 2.5a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5ZM4.47 7.027l-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58ZM8 12.75h8v-1.5H8v1.5Zm0 4h8v-1.5H8v1.5Zm12.25-6.6v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Z' })));
};
var ForwardRef$5r = forwardRef(SvgMenuHome);

var SvgMenuLineHorizontalHalf = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M7 7.25a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5Zm-5 2.5a.75.75 0 0 0 0 1.5v-1.5Zm10 1.5a.75.75 0 0 0 0-1.5v1.5Zm-5 2.5a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5Zm-10-8h5v-1.5H7v1.5Zm0 4h10v-1.5H7v1.5Zm5 4h5v-1.5h-5v1.5Z' })));
};
var ForwardRef$5q = forwardRef(SvgMenuLineHorizontalHalf);

var SvgMenuLineHorizontal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M7 7.25a.75.75 0 0 0 0 1.5v-1.5Zm10 1.5a.75.75 0 0 0 0-1.5v1.5Zm-10 2.5a.75.75 0 0 0 0 1.5v-1.5Zm10 1.5a.75.75 0 0 0 0-1.5v1.5Zm-10 2.5a.75.75 0 0 0 0 1.5v-1.5Zm10 1.5a.75.75 0 0 0 0-1.5v1.5Zm-10-8h10v-1.5H7v1.5Zm0 4h10v-1.5H7v1.5Zm0 4h10v-1.5H7v1.5Z' })));
};
var ForwardRef$5p = forwardRef(SvgMenuLineHorizontal);

var SvgMenuLineVerticalHalf = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M12.75 7a.75.75 0 0 0-1.5 0h1.5Zm-1.5 10a.75.75 0 0 0 1.5 0h-1.5Zm-2.5-5a.75.75 0 0 0-1.5 0h1.5Zm-1.5 5a.75.75 0 0 0 1.5 0h-1.5Zm9.5-10a.75.75 0 0 0-1.5 0h1.5Zm-1.5 5a.75.75 0 0 0 1.5 0h-1.5Zm-4-5v10h1.5V7h-1.5Zm-4 5v5h1.5v-5h-1.5Zm8-5v5h1.5V7h-1.5Z' })));
};
var ForwardRef$5o = forwardRef(SvgMenuLineVerticalHalf);

var SvgMenuLineVertical = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.75 10a.75.75 0 0 0-1.5 0h1.5Zm-1.5 4a.75.75 0 0 0 1.5 0h-1.5Zm-2.5-7a.75.75 0 0 0-1.5 0h1.5Zm-1.5 10a.75.75 0 0 0 1.5 0h-1.5Zm-2.5-7a.75.75 0 0 0-1.5 0h1.5Zm-1.5 4a.75.75 0 0 0 1.5 0h-1.5Zm8-4v4h1.5v-4h-1.5Zm-4-3v10h1.5V7h-1.5Zm-4 3v4h1.5v-4h-1.5Z' })));
};
var ForwardRef$5n = forwardRef(SvgMenuLineVertical);

var SvgMenuUser = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M14 11.25a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8-6.5a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6 8.5a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8-5h8v-1.5h-8v1.5Zm0-5h8v-1.5h-8v1.5Zm2 10h6v-1.5h-6v1.5ZM9.25 8A2.25 2.25 0 0 1 7 10.25v1.5A3.75 3.75 0 0 0 10.75 8h-1.5ZM7 10.25A2.25 2.25 0 0 1 4.75 8h-1.5A3.75 3.75 0 0 0 7 11.75v-1.5ZM4.75 8A2.25 2.25 0 0 1 7 5.75v-1.5A3.75 3.75 0 0 0 3.25 8h1.5ZM7 5.75A2.25 2.25 0 0 1 9.25 8h1.5A3.75 3.75 0 0 0 7 4.25v1.5ZM11.25 16c0 .462-.316 1.007-1.1 1.478-.77.462-1.882.772-3.15.772v1.5c1.493 0 2.881-.362 3.921-.986 1.025-.615 1.829-1.569 1.829-2.764h-1.5ZM7 18.25c-1.268 0-2.38-.31-3.15-.772-.784-.47-1.1-1.017-1.1-1.478h-1.5c0 1.195.804 2.15 1.829 2.764 1.04.624 2.428.986 3.921.986v-1.5ZM2.75 16c0-.461.316-1.007 1.1-1.478.77-.462 1.882-.772 3.15-.772v-1.5c-1.493 0-2.881.362-3.921.986C2.054 13.85 1.25 14.805 1.25 16h1.5ZM7 13.75c1.268 0 2.38.31 3.15.772.784.47 1.1 1.017 1.1 1.478h1.5c0-1.195-.804-2.15-1.829-2.764-1.04-.624-2.428-.986-3.921-.986v1.5Z' })));
};
var ForwardRef$5m = forwardRef(SvgMenuUser);

var SvgMessenger = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'square', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.511.335 2.945.936 4.229l-.713 4.396a1 1 0 0 0 1.152 1.146l4.355-.726A9.96 9.96 0 0 0 12 22Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'm10 9-4 6 4-3 4 3 4-6-4 3-4-3Z' })));
};
var ForwardRef$5l = forwardRef(SvgMessenger);

var SvgMiniStoreCrooked = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M19.25 12v6h1.5v-6h-1.5ZM16 21.25H8v1.5h8v-1.5ZM4.75 18v-6h-1.5v6h1.5ZM8 21.25A3.25 3.25 0 0 1 4.75 18h-1.5A4.75 4.75 0 0 0 8 22.75v-1.5ZM19.25 18A3.25 3.25 0 0 1 16 21.25v1.5A4.75 4.75 0 0 0 20.75 18h-1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'm20.895 5.143.707-.251-.707.251Zm.758 2.132.707-.251-.707.25Zm-19.306 0 .706.251-.706-.251Zm.758-2.132.706.251-.706-.251ZM16.083 8.25a.75.75 0 0 0-1.5 0h1.5Zm5.791 1.025-.727-.183.727.183ZM9.417 8.25a.75.75 0 0 0-1.5 0h1.5ZM2.126 9.275l-.727.183.727-.183ZM7.231 2.75h9.538v-1.5H7.23v1.5ZM20.19 5.394l.758 2.132 1.413-.502-.758-2.132-1.413.502ZM3.053 7.526l.758-2.132-1.413-.502-.758 2.132 1.413.502ZM16.77 2.75c1.456 0 2.836 1.002 3.42 2.644l1.413-.502c-.766-2.155-2.655-3.642-4.833-3.642v1.5Zm-9.54-1.5c-2.178 0-4.067 1.487-4.833 3.642l1.413.502C4.394 3.752 5.774 2.75 7.23 2.75v-1.5Zm11.436 10c-1.347 0-2.584-1.258-2.584-3h-1.5c0 2.4 1.748 4.5 4.084 4.5v-1.5Zm2.48-2.158c-.329 1.303-1.36 2.158-2.48 2.158v1.5c1.93 0 3.47-1.45 3.934-3.292l-1.454-.366ZM12 11.25c-1.346 0-2.583-1.258-2.583-3h-1.5c0 2.4 1.747 4.5 4.083 4.5v-1.5Zm2.583-3c0 1.742-1.237 3-2.583 3v1.5c2.336 0 4.083-2.1 4.083-4.5h-1.5Zm-9.25 3c-1.12 0-2.151-.855-2.48-2.158L1.4 9.458c.464 1.843 2.004 3.292 3.934 3.292v-1.5Zm2.584-3c0 1.742-1.238 3-2.584 3v1.5c2.336 0 4.084-2.1 4.084-4.5h-1.5ZM1.64 7.024c-.242.68-.465 1.547-.241 2.434l1.454-.366c-.11-.441-.017-.955.2-1.566L1.64 7.024Zm19.307.502c.217.61.31 1.125.2 1.566l1.454.366c.224-.887 0-1.754-.241-2.434l-1.413.502ZM15 22v.75a.75.75 0 0 0 .75-.75H15Zm-6 0h-.75c0 .414.336.75.75.75V22Zm5.25-3v3h1.5v-3h-1.5Zm.75 2.25H9v1.5h6v-1.5ZM9.75 22v-3h-1.5v3h1.5ZM12 16.75A2.25 2.25 0 0 1 14.25 19h1.5A3.75 3.75 0 0 0 12 15.25v1.5Zm0-1.5A3.75 3.75 0 0 0 8.25 19h1.5A2.25 2.25 0 0 1 12 16.75v-1.5Z' })));
};
var ForwardRef$5k = forwardRef(SvgMiniStoreCrooked);

var SvgMiniStoreSmile = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M19.25 12v6h1.5v-6h-1.5ZM16 21.25H8v1.5h8v-1.5ZM4.75 18v-6h-1.5v6h1.5ZM8 21.25A3.25 3.25 0 0 1 4.75 18h-1.5A4.75 4.75 0 0 0 8 22.75v-1.5ZM19.25 18A3.25 3.25 0 0 1 16 21.25v1.5A4.75 4.75 0 0 0 20.75 18h-1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'm20.895 5.143.707-.251-.707.251Zm.758 2.132.707-.251-.707.25Zm-19.306 0 .706.251-.706-.251Zm.758-2.132.706.251-.706-.251ZM16.083 8.25a.75.75 0 0 0-1.5 0h1.5Zm5.791 1.025-.727-.183.727.183ZM9.417 8.25a.75.75 0 0 0-1.5 0h1.5ZM2.126 9.275l-.727.183.727-.183ZM7.231 2.75h9.538v-1.5H7.23v1.5ZM20.19 5.394l.758 2.132 1.413-.502-.758-2.132-1.413.502ZM3.053 7.526l.758-2.132-1.413-.502-.758 2.132 1.413.502ZM16.77 2.75c1.456 0 2.836 1.002 3.42 2.644l1.413-.502c-.766-2.155-2.655-3.642-4.833-3.642v1.5Zm-9.54-1.5c-2.178 0-4.067 1.487-4.833 3.642l1.413.502C4.394 3.752 5.774 2.75 7.23 2.75v-1.5Zm11.436 10c-1.347 0-2.584-1.258-2.584-3h-1.5c0 2.4 1.748 4.5 4.084 4.5v-1.5Zm2.48-2.158c-.329 1.303-1.36 2.158-2.48 2.158v1.5c1.93 0 3.47-1.45 3.934-3.292l-1.454-.366ZM12 11.25c-1.346 0-2.583-1.258-2.583-3h-1.5c0 2.4 1.747 4.5 4.083 4.5v-1.5Zm2.583-3c0 1.742-1.237 3-2.583 3v1.5c2.336 0 4.083-2.1 4.083-4.5h-1.5Zm-9.25 3c-1.12 0-2.151-.855-2.48-2.158L1.4 9.458c.464 1.843 2.004 3.292 3.934 3.292v-1.5Zm2.584-3c0 1.742-1.238 3-2.584 3v1.5c2.336 0 4.084-2.1 4.084-4.5h-1.5ZM1.64 7.024c-.242.68-.465 1.547-.241 2.434l1.454-.366c-.11-.441-.017-.955.2-1.566L1.64 7.024Zm19.307.502c.217.61.31 1.125.2 1.566l1.454.366c.224-.887 0-1.754-.241-2.434l-1.413.502ZM9.37 16.348a.75.75 0 1 0-.74 1.304l.74-1.304Zm5.998 1.305a.75.75 0 1 0-.736-1.306l.736 1.306Zm-6.739-.001c1.22.694 2.269 1.1 3.374 1.098 1.104-.002 2.15-.412 3.365-1.097l-.736-1.306c-1.138.64-1.913.902-2.632.903-.718.001-1.493-.256-2.63-.902l-.74 1.304Z' })));
};
var ForwardRef$5j = forwardRef(SvgMiniStoreSmile);

var SvgMinimizeCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M15 14h-5m0 0V9m0 5L21 3' }),
        React.createElement("path", { fill: 'currentColor', d: 'M19.75 13a.75.75 0 0 0-1.5 0h1.5ZM11 5.75a.75.75 0 0 0 0-1.5v1.5ZM18.25 13A7.25 7.25 0 0 1 11 20.25v1.5A8.75 8.75 0 0 0 19.75 13h-1.5ZM11 20.25A7.25 7.25 0 0 1 3.75 13h-1.5A8.75 8.75 0 0 0 11 21.75v-1.5ZM3.75 13A7.25 7.25 0 0 1 11 5.75v-1.5A8.75 8.75 0 0 0 2.25 13h1.5Z' })));
};
var ForwardRef$5i = forwardRef(SvgMinimizeCircle);

var SvgMinimizeRectangleDoted = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M6 6v-.75V6Zm12-4.75h-2v1.5h2v-1.5ZM11.25 6v2h1.5V6h-1.5ZM16 12.75h2v-1.5h-2v1.5ZM22.75 8V6h-1.5v2h1.5ZM18 12.75A4.75 4.75 0 0 0 22.75 8h-1.5A3.25 3.25 0 0 1 18 11.25v1.5ZM11.25 8A4.75 4.75 0 0 0 16 12.75v-1.5A3.25 3.25 0 0 1 12.75 8h-1.5ZM16 1.25A4.75 4.75 0 0 0 11.25 6h1.5A3.25 3.25 0 0 1 16 2.75v-1.5Zm2 1.5A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM1.25 10v8h1.5v-8h-1.5ZM6 22.75h8v-1.5H6v1.5Zm8 0A4.75 4.75 0 0 0 18.75 18h-1.5A3.25 3.25 0 0 1 14 21.25v1.5ZM1.25 18A4.75 4.75 0 0 0 6 22.75v-1.5A3.25 3.25 0 0 1 2.75 18h-1.5ZM6 5.25A4.75 4.75 0 0 0 1.25 10h1.5A3.25 3.25 0 0 1 6 6.75v-1.5Zm0 1.5h6v-1.5H6v1.5ZM18.75 18v-6h-1.5v6h1.5Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 17H7m0 0v-5m0 5 6-6' })));
};
var ForwardRef$5h = forwardRef(SvgMinimizeRectangleDoted);

var SvgMinimizeRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M10.75 8a.75.75 0 0 0-1.5 0h1.5ZM10 14h-.75c0 .414.336.75.75.75V14Zm6 .75a.75.75 0 0 0 0-1.5v1.5Zm5.53-11.22a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM9.25 8v6h1.5V8h-1.5Zm.75 6.75h6v-1.5h-6v1.5Zm.53-.22 11-11-1.06-1.06-11 11 1.06 1.06Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-5' })));
};
var ForwardRef$5g = forwardRef(SvgMinimizeRectangle);

var SvgMobileDataOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm11 17-1.586 1.586a2 2 0 0 1-2.828 0L5 17m3-9v10.5' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm4 4 16 16' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.75 13.69V5.828c.047.035.091.074.134.117L18.47 7.53a.75.75 0 1 0 1.06-1.061l-1.585-1.586a2.75 2.75 0 0 0-3.89 0L12.47 6.47a.75.75 0 0 0 1.06 1.06l1.586-1.585a1.26 1.26 0 0 1 .134-.117v6.362l1.5 1.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$5f = forwardRef(SvgMobileDataOff);

var SvgMobileData = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm11 17-1.586 1.586a2 2 0 0 1-2.828 0L5 17m3-7v8.5M13 7l1.586-1.586a2 2 0 0 1 2.828 0L19 7m-3 7V5.5' })));
};
var ForwardRef$5e = forwardRef(SvgMobileData);

var SvgMobilePayment = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 15h-6V7h6m0 8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2m0 8v5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3' }),
        React.createElement("path", { fill: 'currentColor', d: 'M13 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M20 10h-8' })));
};
var ForwardRef$5d = forwardRef(SvgMobilePayment);

var SvgMobile = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 14, height: 20, x: 5, y: 2, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, rx: 3 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M11 19h2' })));
};
var ForwardRef$5c = forwardRef(SvgMobile);

var SvgMoneyBagEuro = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M15 12.05a3.5 3.5 0 1 0 0 4.899' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 15.5h4m-4-2h4' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M5.632 11.103A6 6 0 0 1 11.325 7h1.35a6 6 0 0 1 5.692 4.103l1 3C20.663 17.988 17.771 22 13.675 22h-3.35c-4.096 0-6.988-4.012-5.693-7.897l1-3Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M14.086 7H9.914L8.513 5.393c-1.373-1.575.229-3.93 2.234-3.283l.928.3c.211.067.439.067.65 0l.928-.3c2.005-.647 3.607 1.708 2.234 3.283L14.086 7Z' })));
};
var ForwardRef$5b = forwardRef(SvgMoneyBagEuro);

var SvgMoneyBagPound = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M9 14.5h4m1-2.118v-.497c0-.765-.62-1.385-1.385-1.385v0c-.764 0-1.384.62-1.384 1.385v.57a6.16 6.16 0 0 1-1.485 4.01v0c-.686.8-.118 2.035.934 2.035H14' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M5.632 11.103A6 6 0 0 1 11.325 7h1.35a6 6 0 0 1 5.692 4.103l1 3C20.663 17.988 17.771 22 13.675 22h-3.35c-4.096 0-6.988-4.012-5.693-7.897l1-3Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M14.086 7H9.914L8.513 5.393c-1.373-1.575.229-3.93 2.234-3.283l.928.3c.211.067.439.067.65 0l.928-.3c2.005-.647 3.607 1.708 2.234 3.283L14.086 7Z' })));
};
var ForwardRef$5a = forwardRef(SvgMoneyBagPound);

var SvgMoneyBagYen = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M10 14.5h4m-4 2h4M10 11l2 3 2-3m-2 3v5' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M5.632 11.103A6 6 0 0 1 11.325 7h1.35a6 6 0 0 1 5.692 4.103l1 3C20.663 17.988 17.771 22 13.675 22h-3.35c-4.096 0-6.988-4.012-5.693-7.897l1-3Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M14.086 7H9.914L8.513 5.393c-1.373-1.575.229-3.93 2.234-3.283l.928.3c.211.067.439.067.65 0l.928-.3c2.005-.647 3.607 1.708 2.234 3.283L14.086 7Z' })));
};
var ForwardRef$59 = forwardRef(SvgMoneyBagYen);

var SvgMoneyAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M13 20H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v5' }),
        React.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 9)' }),
        React.createElement("circle", { cx: 2, cy: 2, r: 2, stroke: 'currentColor', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 10 14)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M19 14v6m3-3h-6' })));
};
var ForwardRef$58 = forwardRef(SvgMoneyAdd);

var SvgMoneyArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M15 20H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v3' }),
        React.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 9)' }),
        React.createElement("circle", { cx: 2, cy: 2, r: 2, stroke: 'currentColor', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 10 14)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm22 18.414-1.293 1.293a1 1 0 0 1-1.414 0L18 18.414M20 14v5.414' })));
};
var ForwardRef$57 = forwardRef(SvgMoneyArrowDown);

var SvgMoneyArrowLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M13 20H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6' }),
        React.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 9)' }),
        React.createElement("circle", { cx: 2, cy: 2, r: 2, stroke: 'currentColor', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 10 14)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm17.586 20-1.293-1.293a1 1 0 0 1 0-1.414L17.586 16M22 18h-5.414' })));
};
var ForwardRef$56 = forwardRef(SvgMoneyArrowLeft);

var SvgMoneyArrowRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M13 20H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v5' }),
        React.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 9)' }),
        React.createElement("circle", { cx: 2, cy: 2, r: 2, stroke: 'currentColor', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 10 14)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm20.414 20 1.293-1.293a1 1 0 0 0 0-1.414L20.414 16M16 18h5.414' })));
};
var ForwardRef$55 = forwardRef(SvgMoneyArrowRight);

var SvgMoneyArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M16 20H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v3' }),
        React.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 9)' }),
        React.createElement("circle", { cx: 2, cy: 2, r: 2, stroke: 'currentColor', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 10 14)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm22 15.586-1.293-1.293a1 1 0 0 0-1.414 0L18 15.586M20 20v-5.414' })));
};
var ForwardRef$54 = forwardRef(SvgMoneyArrowUp);

var SvgMoneyBagCoin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M14.5 14.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M5.632 11.103A6 6 0 0 1 11.325 7h1.35a6 6 0 0 1 5.692 4.103l1 3C20.663 17.988 17.771 22 13.675 22h-3.35c-4.096 0-6.988-4.012-5.693-7.897l1-3Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M14.086 7H9.914L8.513 5.393c-1.373-1.575.229-3.93 2.234-3.283l.928.3c.211.067.439.067.65 0l.928-.3c2.005-.647 3.607 1.708 2.234 3.283L14.086 7Z' })));
};
var ForwardRef$53 = forwardRef(SvgMoneyBagCoin);

var SvgMoneyBagCoins = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M20 18h-6m6 0a2 2 0 0 1 0 4h-6a2 2 0 1 1 0-4m6 0a2 2 0 0 0 0-4h-.667M14 18a2 2 0 1 1 0-4h5.333m-5.658 8h-3.35c-4.096 0-6.988-4.012-5.693-7.897l1-3A6 6 0 0 1 11.324 7h1.351a6 6 0 0 1 5.692 4.103L19.333 14m-5.247-7H9.914L8.513 5.393c-1.373-1.575.229-3.93 2.234-3.283l.928.3c.211.067.439.067.65 0l.928-.3c2.005-.647 3.607 1.708 2.234 3.283L14.086 7Z' })));
};
var ForwardRef$52 = forwardRef(SvgMoneyBagCoins);

var SvgMoneyBagDollar = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M14 12.75c0-.966-.895-1.75-2-1.75s-2 .784-2 1.75.895 1.75 2 1.75 2 .784 2 1.75S13.105 18 12 18s-2-.784-2-1.75' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 9.5V11m0 7v1.5' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M5.632 11.103A6 6 0 0 1 11.325 7h1.35a6 6 0 0 1 5.692 4.103l1 3C20.663 17.988 17.771 22 13.675 22h-3.35c-4.096 0-6.988-4.012-5.693-7.897l1-3Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M14.086 7H9.914L8.513 5.393c-1.373-1.575.229-3.93 2.234-3.283l.928.3c.211.067.439.067.65 0l.928-.3c2.005-.647 3.607 1.708 2.234 3.283L14.086 7Z' })));
};
var ForwardRef$51 = forwardRef(SvgMoneyBagDollar);

var SvgMoneyBag = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M5.632 11.103A6 6 0 0 1 11.325 7h1.35a6 6 0 0 1 5.692 4.103l1 3C20.663 17.988 17.771 22 13.675 22h-3.35c-4.096 0-6.988-4.012-5.693-7.897l1-3Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M14.086 7H9.914L8.513 5.393c-1.373-1.575.229-3.93 2.234-3.283l.928.3c.211.067.439.067.65 0l.928-.3c2.005-.647 3.607 1.708 2.234 3.283L14.086 7Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M9 17c2.254 1.315 3.578 1.345 6 0' })));
};
var ForwardRef$50 = forwardRef(SvgMoneyBag);

var SvgMoneyBigCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 20, height: 16, x: 2, y: 4, stroke: 'currentColor', strokeWidth: 1.5, rx: 4 }),
        React.createElement("circle", { cx: 2, cy: 2, r: 2, stroke: 'currentColor', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 10 14)' })));
};
var ForwardRef$4$ = forwardRef(SvgMoneyBigCircle);

var SvgMoneyCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M13 20H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v5' }),
        React.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 9)' }),
        React.createElement("circle", { cx: 2, cy: 2, r: 2, stroke: 'currentColor', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 10 14)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm16 18 1.753 1.402a1 1 0 0 0 1.377-.122L22 16' })));
};
var ForwardRef$4_ = forwardRef(SvgMoneyCheck);

var SvgMoneyCoin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M20 12V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8' }),
        React.createElement("rect", { width: 10, height: 4, x: 12, y: 16, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("rect", { width: 10, height: 4, x: 12, y: 12, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 })));
};
var ForwardRef$4Z = forwardRef(SvgMoneyCoin);

var SvgMoneyDash = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M6 4.75h12v-1.5H6v1.5ZM21.25 8v8h1.5V8h-1.5ZM18 19.25H6v1.5h12v-1.5ZM2.75 16V8h-1.5v8h1.5ZM6 19.25A3.25 3.25 0 0 1 2.75 16h-1.5A4.75 4.75 0 0 0 6 20.75v-1.5ZM21.25 16A3.25 3.25 0 0 1 18 19.25v1.5A4.75 4.75 0 0 0 22.75 16h-1.5ZM18 4.75A3.25 3.25 0 0 1 21.25 8h1.5A4.75 4.75 0 0 0 18 3.25v1.5ZM6 3.25A4.75 4.75 0 0 0 1.25 8h1.5A3.25 3.25 0 0 1 6 4.75v-1.5Zm-1 3a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm-2 0h2v-1.5H5v1.5Zm12 8.5a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm-2 0h2v-1.5h-2v1.5ZM13.25 12c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 12h-1.5ZM12 13.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 14.75v-1.5ZM10.75 12c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 12h1.5ZM12 10.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 9.25v1.5Z' })));
};
var ForwardRef$4Y = forwardRef(SvgMoneyDash);

var SvgMoneyDollar = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 20, height: 16, x: 2, y: 4, stroke: 'currentColor', strokeWidth: 1.5, rx: 4 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M14 10a2 2 0 1 0-2 2m0 0a2 2 0 1 1-2 2' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 6.5V8m0 8v1.5' })));
};
var ForwardRef$4X = forwardRef(SvgMoneyDollar);

var SvgMoneyDoubleDot = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 20, height: 16, x: 2, y: 4, stroke: 'currentColor', strokeWidth: 1.5, rx: 4 }),
        React.createElement("circle", { cx: 2, cy: 2, r: 2, stroke: 'currentColor', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 10 14)' }),
        React.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 17 13)' }),
        React.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 13)' })));
};
var ForwardRef$4W = forwardRef(SvgMoneyDoubleDot);

var SvgMoneyEuro = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 20, height: 16, x: 2, y: 4, stroke: 'currentColor', strokeWidth: 1.5, rx: 4 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M16 9.2A4.113 4.113 0 0 0 13.083 8C10.828 8 9 9.79 9 12s1.828 4 4.083 4c1.143 0 2.176-.46 2.917-1.2' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 13.5h5m-5-3h5' })));
};
var ForwardRef$4V = forwardRef(SvgMoneyEuro);

var SvgMoneyFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M14 20H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v4.5' }),
        React.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 9)' }),
        React.createElement("circle", { cx: 2, cy: 2, r: 2, stroke: 'currentColor', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 10 14)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm19.221 15.779-.22.22-.222-.22a1.562 1.562 0 1 0-2.21 2.21l1.547 1.546a1.25 1.25 0 0 0 1.768 0l1.547-1.546a1.562 1.562 0 1 0-2.21-2.21Z' })));
};
var ForwardRef$4U = forwardRef(SvgMoneyFavourite);

var SvgMoneyIncome = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 18, height: 14, x: 3, y: 8, stroke: 'currentColor', strokeWidth: 1.5, rx: 3 }),
        React.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 17 20)' }),
        React.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 12)' }),
        React.createElement("circle", { cx: 2, cy: 2, r: 2, stroke: 'currentColor', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 10 17)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm14 3.914-1.293 1.293a1 1 0 0 1-1.414 0L10 3.914M12 2v2.914' })));
};
var ForwardRef$4T = forwardRef(SvgMoneyIncome);

var SvgMoneyMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M13 20H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v5' }),
        React.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 9)' }),
        React.createElement("circle", { cx: 2, cy: 2, r: 2, stroke: 'currentColor', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 10 14)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 17h-6' })));
};
var ForwardRef$4S = forwardRef(SvgMoneyMinus);

var SvgMoneyPound = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 20, height: 16, x: 2, y: 4, stroke: 'currentColor', strokeWidth: 1.5, rx: 4 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M9 12h4m1-2.118v-.497C14 8.62 13.38 8 12.615 8v0c-.764 0-1.384.62-1.384 1.385v.57a6.16 6.16 0 0 1-1.485 4.01v0c-.686.8-.118 2.035.934 2.035H14' })));
};
var ForwardRef$4R = forwardRef(SvgMoneyPound);

var SvgMoneyProfitBelow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 18, height: 14, x: 3, y: 2, stroke: 'currentColor', strokeWidth: 1.5, rx: 3 }),
        React.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 17 14)' }),
        React.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 6)' }),
        React.createElement("circle", { cx: 2, cy: 2, r: 2, stroke: 'currentColor', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 10 11)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm14 20.086-1.293-1.293a1 1 0 0 0-1.414 0L10 20.086M12 22v-2.914' })));
};
var ForwardRef$4Q = forwardRef(SvgMoneyProfitBelow);

var SvgMoneyProfitTop = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 18, height: 14, x: 3, y: 8, stroke: 'currentColor', strokeWidth: 1.5, rx: 3 }),
        React.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 17 20)' }),
        React.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 12)' }),
        React.createElement("circle", { cx: 2, cy: 2, r: 2, stroke: 'currentColor', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 10 17)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm14 3.586-1.293-1.293a1 1 0 0 0-1.414 0L10 3.586M12 5.5V2.586' })));
};
var ForwardRef$4P = forwardRef(SvgMoneyProfitTop);

var SvgMoneyRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M14 20H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v5' }),
        React.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 9)' }),
        React.createElement("circle", { cx: 2, cy: 2, r: 2, stroke: 'currentColor', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 10 14)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M21.5 15.757 17.257 20m4.243 0-4.243-4.243' })));
};
var ForwardRef$4O = forwardRef(SvgMoneyRemove);

var SvgMoneySmallCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 20, height: 16, x: 2, y: 4, stroke: 'currentColor', strokeWidth: 1.5, rx: 4 }),
        React.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 17 17)' }),
        React.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 9)' }),
        React.createElement("circle", { cx: 2, cy: 2, r: 2, stroke: 'currentColor', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 10 14)' })));
};
var ForwardRef$4N = forwardRef(SvgMoneySmallCircle);

var SvgMoneyUser = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M13 20H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v3.5' }),
        React.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 9)' }),
        React.createElement("circle", { cx: 2, cy: 2, r: 2, stroke: 'currentColor', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 10 14)' }),
        React.createElement("circle", { cx: 2, cy: 2, r: 2, stroke: 'currentColor', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 17 18)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M22 20c-.599-1.196-1.718-2-3-2s-2.401.804-3 2' })));
};
var ForwardRef$4M = forwardRef(SvgMoneyUser);

var SvgMoneyWithdraw = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 18, height: 14, x: 3, y: 2, stroke: 'currentColor', strokeWidth: 1.5, rx: 3 }),
        React.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 17 14)' }),
        React.createElement("circle", { cx: 1, cy: 1, r: 1, fill: 'currentColor', transform: 'matrix(1 0 0 -1 5 6)' }),
        React.createElement("circle", { cx: 2, cy: 2, r: 2, stroke: 'currentColor', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 10 11)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm14 20.414-1.293 1.293a1 1 0 0 1-1.414 0L10 20.414m2-1.914v2.914' })));
};
var ForwardRef$4L = forwardRef(SvgMoneyWithdraw);

var SvgMoneyYen = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 20, height: 16, x: 2, y: 4, stroke: 'currentColor', strokeWidth: 1.5, rx: 4 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M9 11h6m-6 3h6M9 7l3 4 3-4m-3 4v6' })));
};
var ForwardRef$4K = forwardRef(SvgMoneyYen);

var SvgMoney = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M6 4.75h12v-1.5H6v1.5ZM21.25 8v8h1.5V8h-1.5ZM18 19.25H6v1.5h12v-1.5ZM2.75 16V8h-1.5v8h1.5ZM6 19.25A3.25 3.25 0 0 1 2.75 16h-1.5A4.75 4.75 0 0 0 6 20.75v-1.5ZM21.25 16A3.25 3.25 0 0 1 18 19.25v1.5A4.75 4.75 0 0 0 22.75 16h-1.5ZM18 4.75A3.25 3.25 0 0 1 21.25 8h1.5A4.75 4.75 0 0 0 18 3.25v1.5ZM6 3.25A4.75 4.75 0 0 0 1.25 8h1.5A3.25 3.25 0 0 1 6 4.75v-1.5ZM13.25 12c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 12h-1.5ZM12 13.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 14.75v-1.5ZM10.75 12c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 12h1.5ZM12 10.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 9.25v1.5ZM6.5 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm13 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-13 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm13 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' })));
};
var ForwardRef$4J = forwardRef(SvgMoney);

var SvgMusicOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 6, cy: 18, r: 3, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm3 3 18 18m-2-8.952V5.002a2 2 0 0 0-2.743-1.857l-4.743 1.897a3.994 3.994 0 0 0-1.462 1.01M9 18.048V9m10 6v-4.998a2 2 0 0 0-2.743-1.857L13.32 9.32m4.825 8.825a3 3 0 1 1-4.242-4.242' })));
};
var ForwardRef$4I = forwardRef(SvgMusicOff);

var SvgMusic = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 17, cy: 16.048, r: 3, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("circle", { cx: 7, cy: 18, r: 3, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M20 16.048v-6.046a2 2 0 0 0-2.743-1.857l-4.743 1.897A4 4 0 0 0 10 13.756v4.292' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M20 12.048V5.002a2 2 0 0 0-2.743-1.857l-4.743 1.897A4 4 0 0 0 10 8.756v7.292' })));
};
var ForwardRef$4H = forwardRef(SvgMusic);

var SvgNavigation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm9.21 13.396-3.703-1.234c-2.01-.67-2.01-3.513 0-4.183l11.588-3.862c1.723-.575 3.363 1.065 2.788 2.788l-3.862 11.588c-.67 2.01-3.513 2.01-4.183 0l-1.234-3.703a2.204 2.204 0 0 0-1.394-1.394Z' })));
};
var ForwardRef$4G = forwardRef(SvgNavigation);

var SvgNetflix = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M4 3.84v16.32h5v-9.12m11 9.12V3.84h-5v8.64' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M4 3.84h5l11 16.32h-5L4 3.84Z' })));
};
var ForwardRef$4F = forwardRef(SvgNetflix);

var SvgNextArrow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm14.008 17.245-.378-.647.378.647Zm6.03-3.518-.377-.647.377.647Zm0-3.455.378-.647-.378.647Zm-6.03-3.518-.378.648.378-.648Zm-8 10.491-.378-.647.378.647Zm0-10.49-.378.647.378-.648Zm8.378 11.138 6.03-3.518-.755-1.295-6.031 3.518.756 1.295Zm6.03-8.268-6.03-3.518-.756 1.295 6.03 3.518.756-1.295Zm0 4.75c1.82-1.06 1.82-3.69 0-4.75l-.755 1.295a1.25 1.25 0 0 1 0 2.16l.755 1.295ZM10.25 15.518c0 2.122 2.302 3.445 4.136 2.375l-.756-1.295a1.25 1.25 0 0 1-1.88-1.08h-1.5Zm1.5-7.036a1.25 1.25 0 0 1 1.88-1.08l.756-1.295c-1.834-1.07-4.136.253-4.136 2.375h1.5Zm-9.5 0v7.036h1.5V8.482h-1.5Zm0 7.036c0 2.122 2.302 3.445 4.136 2.375l-.756-1.295a1.25 1.25 0 0 1-1.88-1.08h-1.5Zm1.5-7.036a1.25 1.25 0 0 1 1.88-1.08l.756-1.295C4.552 5.037 2.25 6.36 2.25 8.482h1.5Zm7.628.537L6.386 6.107 5.63 7.402l4.992 2.912.756-1.295Zm-1.128-.537v1.185h1.5V8.482h-1.5Zm0 1.185v4.666h1.5V9.667h-1.5Zm0 4.666v1.185h1.5v-1.185h-1.5Zm-3.864 3.56 4.992-2.912-.756-1.296-4.992 2.913.756 1.295Z' })));
};
var ForwardRef$4E = forwardRef(SvgNextArrow);

var SvgNightMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18.328 14.869A9.197 9.197 0 0 1 9.525 3 9.201 9.201 0 0 0 3 11.803 9.197 9.197 0 0 0 12.197 21 9.201 9.201 0 0 0 21 14.475a9.196 9.196 0 0 1-2.672.394Z' })));
};
var ForwardRef$4D = forwardRef(SvgNightMode);

var SvgNotificationOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm3 2.75 18 18' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M19.918 15.668a1.891 1.891 0 0 0-.373-1.788 3.816 3.816 0 0 1-.88-2.042l-.345-3.044C17.946 5.491 15.23 3 12 3c-1.33 0-2.572.422-3.6 1.15M6.502 6.252a6.668 6.668 0 0 0-.822 2.542l-.345 3.044a3.816 3.816 0 0 1-.88 2.042C3.422 15.096 4.261 17 5.83 17h11.42' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M15 19c-.437 1.165-1.615 2-3 2s-2.563-.835-3-2' })));
};
var ForwardRef$4C = forwardRef(SvgNotificationOff);

var SvgNotificationWithCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 17, cy: 5, r: 3, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M11.072 4.07c-2.809.423-5.055 2.743-5.392 5.724l-.345 3.044a3.817 3.817 0 0 1-.88 2.042C3.422 16.096 4.261 18 5.83 18h12.34c1.57 0 2.408-1.904 1.374-3.12a3.817 3.817 0 0 1-.879-2.042l-.228-2.011' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M15 20c-.437 1.165-1.615 2-3 2s-2.563-.835-3-2' })));
};
var ForwardRef$4B = forwardRef(SvgNotificationWithCircle);

var SvgNotification = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M5.68 8.794C6.054 5.491 8.77 3 12 3c3.23 0 5.946 2.49 6.32 5.794l.345 3.044a3.82 3.82 0 0 0 .88 2.042c1.033 1.216.194 3.12-1.375 3.12H5.83c-1.57 0-2.408-1.904-1.375-3.12a3.816 3.816 0 0 0 .88-2.042l.345-3.044Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M15 19c-.437 1.165-1.615 2-3 2s-2.563-.835-3-2' })));
};
var ForwardRef$4A = forwardRef(SvgNotification);

var SvgOpenBoxAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 2v4m2-2h-4' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M4 10v6.764a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.763V10' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm18 5 2 1-8 4-8-4 2-1' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm20 6-8 4 2 3 8-4-2-3ZM4 6l8 4-2 3-8-4 2-3Z' })));
};
var ForwardRef$4z = forwardRef(SvgOpenBoxAdd);

var SvgOpenBoxArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm14 5.414-1.293 1.293a1 1 0 0 1-1.414 0L10 5.414M12 2v4.414' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M4 10v6.764a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.763V10' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm18 5 2 1-8 4-8-4 2-1' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm20 6-8 4 2 3 8-4-2-3ZM4 6l8 4-2 3-8-4 2-3Z' })));
};
var ForwardRef$4y = forwardRef(SvgOpenBoxArrowDown);

var SvgOpenBoxArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm14 3.586-1.293-1.293a1 1 0 0 0-1.414 0L10 3.586M12 7V2.586' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M4 10v6.764a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.763V10' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm18 5 2 1-8 4-8-4 2-1' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm20 6-8 4 2 3 8-4-2-3ZM4 6l8 4-2 3-8-4 2-3Z' })));
};
var ForwardRef$4x = forwardRef(SvgOpenBoxArrowUp);

var SvgOpenBoxDone = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm9 4 1.753 1.402a1 1 0 0 0 1.377-.122L15 2' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M4 10v6.764a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.763V10' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm18 5 2 1-8 4-8-4 2-1' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm20 6-8 4 2 3 8-4-2-3ZM4 6l8 4-2 3-8-4 2-3Z' })));
};
var ForwardRef$4w = forwardRef(SvgOpenBoxDone);

var SvgOpenBoxFavorite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm12.23 2.5-.23.24-.23-.24a1.568 1.568 0 0 0-2.295 0 1.768 1.768 0 0 0 0 2.412L11.082 6.6a1.254 1.254 0 0 0 1.836 0l1.607-1.688a1.768 1.768 0 0 0 0-2.412 1.568 1.568 0 0 0-2.296 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M4 10v6.764a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.763V10' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm18 5 2 1-8 4-8-4 2-1' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm20 6-8 4 2 3 8-4-2-3ZM4 6l8 4-2 3-8-4 2-3Z' })));
};
var ForwardRef$4v = forwardRef(SvgOpenBoxFavorite);

var SvgOpenBoxMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M14 2h-4' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M4 10v6.764a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.763V10' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm18 5 2 1-8 4-8-4 2-1' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm20 6-8 4 2 3 8-4-2-3ZM4 6l8 4-2 3-8-4 2-3Z' })));
};
var ForwardRef$4u = forwardRef(SvgOpenBoxMinus);

var SvgOpenBoxRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm13.414 2.586-2.828 2.828m2.828 0-2.828-2.828' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M4 10v6.764a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.763V10' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm18 5 2 1-8 4-8-4 2-1' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm20 6-8 4 2 3 8-4-2-3ZM4 6l8 4-2 3-8-4 2-3Z' })));
};
var ForwardRef$4t = forwardRef(SvgOpenBoxRemove);

var SvgOpenBoxSearch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 11, cy: 4, r: 2, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M4 10v6.764a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.763V10' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm18 5 2 1-8 4-8-4 2-1' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm20 6-8 4 2 3 8-4-2-3ZM4 6l8 4-2 3-8-4 2-3Zm8.5-.5 1 1' })));
};
var ForwardRef$4s = forwardRef(SvgOpenBoxSearch);

var SvgOpenBoxTwoSide = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M4 9v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9m-8-5h7.263c.343 0 .661.184.838.486l1.758 3C22.25 8.152 21.781 9 21.021 9h-4.984a1.945 1.945 0 0 1-1.675-.971L12 4Zm0 0H4.737a.973.973 0 0 0-.838.486l-1.758 3C1.75 8.152 2.219 9 2.979 9h4.984c.686 0 1.322-.369 1.675-.971L12 4Z' })));
};
var ForwardRef$4r = forwardRef(SvgOpenBoxTwoSide);

var SvgOpenBox = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M4 10v6.764a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.763V10' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm20 6-7.106-3.553a2 2 0 0 0-1.788 0L4 6l8 4 8-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm20 6-8 4 2 3 8-4-2-3ZM4 6l8 4-2 3-8-4 2-3Z' })));
};
var ForwardRef$4q = forwardRef(SvgOpenBox);

var SvgOutCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm18 8 4 4m0 0-4 4m4-4H8' }),
        React.createElement("path", { fill: 'currentColor', d: 'M15.47 18.83a.75.75 0 1 0-.94-1.17l.94 1.17Zm-.94-12.49a.75.75 0 1 0 .94-1.17l-.94 1.17ZM10 19.25A7.25 7.25 0 0 1 2.75 12h-1.5A8.75 8.75 0 0 0 10 20.75v-1.5ZM2.75 12A7.25 7.25 0 0 1 10 4.75v-1.5A8.75 8.75 0 0 0 1.25 12h1.5Zm11.78 5.66A7.216 7.216 0 0 1 10 19.25v1.5a8.717 8.717 0 0 0 5.47-1.92l-.94-1.17ZM10 4.75c1.715 0 3.29.595 4.53 1.59l.94-1.17A8.716 8.716 0 0 0 10 3.25v1.5Z' })));
};
var ForwardRef$4p = forwardRef(SvgOutCircle);

var SvgOutRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm18 9 3 3m0 0-3 3m3-3H9m6-4.5V7a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-.5' })));
};
var ForwardRef$4o = forwardRef(SvgOutRectangle);

var SvgPackageBoxCube = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm20 7-8 4-8-4' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm18.625 4.668-5-2.31a3.863 3.863 0 0 0-3.25 0l-5 2.31C3.931 5.335 3 6.823 3 8.466v7.068c0 1.643.93 3.131 2.375 3.798l5 2.31a3.863 3.863 0 0 0 3.25 0l5-2.31C20.069 18.665 21 17.177 21 15.534V8.466c0-1.643-.93-3.131-2.375-3.798ZM12 11v11' })));
};
var ForwardRef$4n = forwardRef(SvgPackageBoxCube);

var SvgPackageBoxDash = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 20, height: 20, x: 2, y: 2, stroke: 'currentColor', strokeWidth: 1.5, rx: 4 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M10 6h4' })));
};
var ForwardRef$4m = forwardRef(SvgPackageBoxDash);

var SvgPackageBoxFavorite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 18V7.657a4 4 0 0 0-1.172-2.829l-1.656-1.656A4 4 0 0 0 16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.172 4.828A4 4 0 0 0 2 7.657V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M2.5 7h19' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M9 7h6v6l-3-2-3 2V7Z' })));
};
var ForwardRef$4l = forwardRef(SvgPackageBoxFavorite);

var SvgPackageBoxHandle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M6 2.75h12v-1.5H6v1.5ZM21.25 6v12h1.5V6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M8 2v-.75a.75.75 0 0 0-.75.75H8Zm8 0h.75a.75.75 0 0 0-.75-.75V2Zm-3.293 6.707-.53.53.53-.53Zm-1.414 0-.53-.53.53.53Zm-1.586 1.586.53.53-.53-.53Zm4.586 0 .53-.53-.53.53ZM8 2.75h8v-1.5H8v1.5ZM15.25 2v7.586h1.5V2h-1.5Zm-6.5 7.586V2h-1.5v7.586h1.5Zm6.073.177-1.586-1.586-1.06 1.06 1.586 1.586 1.06-1.06Zm-4.06-1.586L9.177 9.763l1.06 1.06 1.586-1.586-1.06-1.06Zm2.474 0a1.75 1.75 0 0 0-2.474 0l1.06 1.06a.25.25 0 0 1 .354 0l1.06-1.06ZM7.25 9.586c0 1.559 1.885 2.34 2.987 1.237l-1.06-1.06a.25.25 0 0 1-.427-.177h-1.5Zm8 0a.25.25 0 0 1-.427.177l-1.06 1.06c1.102 1.103 2.987.322 2.987-1.237h-1.5Z' })));
};
var ForwardRef$4k = forwardRef(SvgPackageBoxHandle);

var SvgPackageBoxTwoSide = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm20 7-8 4-8-4' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm18.625 4.668-5-2.31a3.863 3.863 0 0 0-3.25 0l-5 2.31C3.931 5.335 3 6.823 3 8.466v7.068c0 1.643.93 3.131 2.375 3.798l5 2.31a3.863 3.863 0 0 0 3.25 0l5-2.31C20.069 18.665 21 17.177 21 15.534V8.466c0-1.643-.93-3.131-2.375-3.798Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm8 4 9 5v10.5M12 11v11' })));
};
var ForwardRef$4j = forwardRef(SvgPackageBoxTwoSide);

var SvgPackageBox = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M8.403 2v-.75V2Zm7.194 0v.75V2Zm2.499.877-.469.585.469-.585ZM21.249 5.4l.469-.586-.469.586Zm-18.498 0-.469-.586.469.586Zm3.153-2.523.469.585-.469-.585ZM21.25 6.96V18h1.5V6.961h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6.961h-1.5V18h1.5ZM8.403 2.75h7.194v-1.5H8.403v1.5Zm9.224.712 3.154 2.523.937-1.171-3.154-2.523-.937 1.171ZM3.22 5.985l3.154-2.523-.937-1.171-3.154 2.523.937 1.171ZM15.597 2.75a3.25 3.25 0 0 1 2.03.712l.937-1.171a4.75 4.75 0 0 0-2.967-1.041v1.5Zm-7.194-1.5a4.75 4.75 0 0 0-2.967 1.04l.937 1.172a3.25 3.25 0 0 1 2.03-.712v-1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5Zm1.5-11.039a2.75 2.75 0 0 0-1.032-2.147l-.937 1.171c.296.237.469.597.469.976h1.5Zm-20 0c0-.38.173-.739.47-.976l-.938-1.171A2.75 2.75 0 0 0 1.25 6.96h1.5ZM9 6v-.75a.75.75 0 0 0-.75.75H9Zm6 0h.75a.75.75 0 0 0-.75-.75V6Zm-6 .75h6v-1.5H9v1.5ZM14.25 6v3h1.5V6h-1.5Zm-4.5 3V6h-1.5v3h1.5ZM12 11.25A2.25 2.25 0 0 1 9.75 9h-1.5A3.75 3.75 0 0 0 12 12.75v-1.5ZM14.25 9A2.25 2.25 0 0 1 12 11.25v1.5A3.75 3.75 0 0 0 15.75 9h-1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M2.5 5.25a.75.75 0 0 0 0 1.5v-1.5Zm19 1.5a.75.75 0 0 0 0-1.5v1.5Zm-19 0h19v-1.5h-19v1.5Z' })));
};
var ForwardRef$4i = forwardRef(SvgPackageBox);

var SvgPackageCube = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M17.5 9.5 12 12 6.5 9.5' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm16.83 8.203-4-1.824a2 2 0 0 0-1.66 0l-4 1.824A2 2 0 0 0 6 10.023v4.954a2 2 0 0 0 1.17 1.82l4 1.824a2 2 0 0 0 1.66 0l4-1.824a2 2 0 0 0 1.17-1.82v-4.954a2 2 0 0 0-1.17-1.82ZM12 12v6m0-16v1m0 18v1m8.071-18.071-.707.707M4.636 19.364l-.707.707M22 12h-1M3 12H2m18.071 8.071-.707-.707M4.636 4.636l-.707-.707' })));
};
var ForwardRef$4h = forwardRef(SvgPackageCube);

var SvgPackageDashCentre = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M10 10h4' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 18V8.403a4 4 0 0 0-.877-2.499l-1.922-2.403A4 4 0 0 0 16.078 2H7.923a4 4 0 0 0-3.124 1.501L2.877 5.904A4 4 0 0 0 2 8.404V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 7h18' })));
};
var ForwardRef$4g = forwardRef(SvgPackageDashCentre);

var SvgPackageDashLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M5 10h3m-3 3h3' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 18V8.403a4 4 0 0 0-.877-2.499l-1.922-2.403A4 4 0 0 0 16.078 2H7.923a4 4 0 0 0-3.124 1.501L2.877 5.904A4 4 0 0 0 2 8.404V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 7h18' })));
};
var ForwardRef$4f = forwardRef(SvgPackageDashLeft);

var SvgPackageDashRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M16 19h3m-3-3h3' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 18V8.403a4 4 0 0 0-.877-2.499l-1.922-2.403A4 4 0 0 0 16.078 2H7.923a4 4 0 0 0-3.124 1.501L2.877 5.904A4 4 0 0 0 2 8.404V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 7h18' })));
};
var ForwardRef$4e = forwardRef(SvgPackageDashRight);

var SvgPackageFavorite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 20, height: 20, x: 2, y: 2, stroke: 'currentColor', strokeWidth: 1.5, rx: 4 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 2h8v7.586c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0l-1.586 1.586c-.63.63-1.707.184-1.707-.707V2Z' })));
};
var ForwardRef$4d = forwardRef(SvgPackageFavorite);

var SvgPackageSun = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M11 12h2' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 16V9.495a2 2 0 0 0-.586-1.414L15.92 6.586A2 2 0 0 0 14.505 6h-5.01a2 2 0 0 0-1.414.586L6.586 8.08A2 2 0 0 0 6 9.495V16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'square', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M7 9h10' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 2v1m0 18v1m8.071-18.071-.707.707M4.636 19.364l-.707.707M22 12h-1M3 12H2m18.071 8.071-.707-.707M4.636 4.636l-.707-.707' })));
};
var ForwardRef$4c = forwardRef(SvgPackageSun);

var SvgPackage = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 12, height: 12, x: 6, y: 6, stroke: 'currentColor', strokeWidth: 1.5, rx: 3 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 2v1m0 18v1m8.071-18.071-.707.707M4.636 19.364l-.707.707M22 12h-1m-8-3h-2m-8 3H2m18.071 8.071-.707-.707M4.636 4.636l-.707-.707' })));
};
var ForwardRef$4b = forwardRef(SvgPackage);

var SvgPackagingAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M15 14H9m3 3v-6' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 18V8.403a4 4 0 0 0-.877-2.499l-1.922-2.403A4 4 0 0 0 16.078 2H7.923a4 4 0 0 0-3.124 1.501L2.877 5.904A4 4 0 0 0 2 8.404V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 7h18' })));
};
var ForwardRef$4a = forwardRef(SvgPackagingAdd);

var SvgPackagingArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm14 15.414-1.293 1.293a1 1 0 0 1-1.414 0L10 15.414M12 11v5.414' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 18V8.403a4 4 0 0 0-.877-2.499l-1.922-2.403A4 4 0 0 0 16.078 2H7.923a4 4 0 0 0-3.124 1.501L2.877 5.904A4 4 0 0 0 2 8.404V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 7h18' })));
};
var ForwardRef$49 = forwardRef(SvgPackagingArrowDown);

var SvgPackagingArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm14 12.586-1.293-1.293a1 1 0 0 0-1.414 0L10 12.586M12 17v-5.414' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 18V8.403a4 4 0 0 0-.877-2.499l-1.922-2.403A4 4 0 0 0 16.078 2H7.923a4 4 0 0 0-3.124 1.501L2.877 5.904A4 4 0 0 0 2 8.404V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 7h18' })));
};
var ForwardRef$48 = forwardRef(SvgPackagingArrowUp);

var SvgPackagingCancel = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm9.879 16.121 4.242-4.242m-4.242 0 4.242 4.242' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 18V8.403a4 4 0 0 0-.877-2.499l-1.922-2.403A4 4 0 0 0 16.078 2H7.923a4 4 0 0 0-3.124 1.501L2.877 5.904A4 4 0 0 0 2 8.404V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 7h18' })));
};
var ForwardRef$47 = forwardRef(SvgPackagingCancel);

var SvgPackagingDone = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm9 14 1.753 1.402a1 1 0 0 0 1.377-.122L15 12' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 18V8.403a4 4 0 0 0-.877-2.499l-1.922-2.403A4 4 0 0 0 16.078 2H7.923a4 4 0 0 0-3.124 1.501L2.877 5.904A4 4 0 0 0 2 8.404V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 7h18' })));
};
var ForwardRef$46 = forwardRef(SvgPackagingDone);

var SvgPackagingFavorite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm12.265 11.917-.265.265-.265-.265a1.875 1.875 0 1 0-2.652 2.652l1.856 1.856a1.5 1.5 0 0 0 2.122 0l1.856-1.857a1.875 1.875 0 0 0-2.652-2.651Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 18V8.403a4 4 0 0 0-.877-2.499l-1.922-2.403A4 4 0 0 0 16.078 2H7.923a4 4 0 0 0-3.124 1.501L2.877 5.904A4 4 0 0 0 2 8.404V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 7h18' })));
};
var ForwardRef$45 = forwardRef(SvgPackagingFavorite);

var SvgPackagingLocationBox = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 10, cy: 8, r: 2, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M16.002 14c.603-1.32.998-2.687.998-4 0-5.523-3.134-8-7-8s-7 2.477-7 8c0 3.281 2.47 6.899 4.476 9.295 1.341 1.602 3.707 1.602 5.048 0 .156-.187.315-.38.476-.582M16.002 14H15a2 2 0 0 0-2 2v2.713M16.002 14H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1.287' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 16h-2' })));
};
var ForwardRef$44 = forwardRef(SvgPackagingLocationBox);

var SvgPackagingLocation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 13, r: 1, fill: 'currentColor' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 18V8.403a4 4 0 0 0-.877-2.499l-1.922-2.403A4 4 0 0 0 16.078 2H7.923a4 4 0 0 0-3.124 1.501L2.877 5.904A4 4 0 0 0 2 8.404V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 7h18' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M15 13c0 1.546-1.469 3.376-2.35 4.336a.873.873 0 0 1-1.3 0C10.47 16.376 9 14.546 9 13c0-2.21 1.343-3 3-3s3 .79 3 3Z' })));
};
var ForwardRef$43 = forwardRef(SvgPackagingLocation);

var SvgPackagingMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M15 14H9' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 18V8.403a4 4 0 0 0-.877-2.499l-1.922-2.403A4 4 0 0 0 16.078 2H7.923a4 4 0 0 0-3.124 1.501L2.877 5.904A4 4 0 0 0 2 8.404V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 7h18' })));
};
var ForwardRef$42 = forwardRef(SvgPackagingMinus);

var SvgPackagingSearch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 14, r: 3, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 18V8.403a4 4 0 0 0-.877-2.499l-1.922-2.403A4 4 0 0 0 16.078 2H7.923a4 4 0 0 0-3.124 1.501L2.877 5.904A4 4 0 0 0 2 8.404V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 7h18m-6.5 9.5 1 1' })));
};
var ForwardRef$41 = forwardRef(SvgPackagingSearch);

var SvgPackagingTime = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 14, r: 4, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M13 14h-1v-1.5' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 18V8.403a4 4 0 0 0-.877-2.499l-1.922-2.403A4 4 0 0 0 16.078 2H7.923a4 4 0 0 0-3.124 1.501L2.877 5.904A4 4 0 0 0 2 8.404V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 7h18' })));
};
var ForwardRef$40 = forwardRef(SvgPackagingTime);

var SvgPaperPin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M7 10.172V7.828a2 2 0 0 0-.586-1.414C5.154 5.154 6.047 3 7.828 3h8.344c1.781 0 2.674 2.154 1.414 3.414A2 2 0 0 0 17 7.828v2.344a2 2 0 0 0 .586 1.414c1.26 1.26.367 3.414-1.414 3.414H7.828c-1.781 0-2.674-2.154-1.414-3.414A2 2 0 0 0 7 10.172ZM12 15v6' })));
};
var ForwardRef$3$ = forwardRef(SvgPaperPin);

var SvgParcel = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 18V8.403a4 4 0 0 0-.877-2.499l-1.922-2.403A4 4 0 0 0 16.078 2H7.923a4 4 0 0 0-3.124 1.501L2.877 5.904A4 4 0 0 0 2 8.404V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 7h18' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm11 13.586-1.293-1.293a1 1 0 0 0-1.414 0L7 13.586M9 17v-4.414m8 2.828-1.293 1.293a1 1 0 0 1-1.414 0L13 15.414M15 12v4.414' })));
};
var ForwardRef$3_ = forwardRef(SvgParcel);

var SvgPayoneer = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("circle", { cx: 12, cy: 12, r: 7, stroke: 'currentColor', strokeWidth: 1.5 })));
};
var ForwardRef$3Z = forwardRef(SvgPayoneer);

var SvgPaypal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M13 3H8.5L3 18h4l2-5h4a5 5 0 0 0 0-10Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm7 18-1.207 3H10l2-5h4a5 5 0 0 0 2-9.584' })));
};
var ForwardRef$3Y = forwardRef(SvgPaypal);

var SvgPeopleCircleBelow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a4 4 0 0 1 4 4v2a1 1 0 0 1-1 1 1 1 0 0 0-1 1v3a2 2 0 1 1-4 0v-3a1 1 0 0 0-1-1 1 1 0 0 1-1-1v-2a4 4 0 0 1 4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M14 16.074c4.008.303 7 1.498 7 2.926 0 1.657-4.03 3-9 3s-9-1.343-9-3c0-1.428 2.992-2.623 7-2.926' })));
};
var ForwardRef$3X = forwardRef(SvgPeopleCircleBelow);

var SvgPeople = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M14 16h2.127a4 4 0 0 1 3.072 1.44l1.067 1.28c1.086 1.302.16 3.28-1.536 3.28H5.27c-1.696 0-2.622-1.978-1.536-3.28L4.8 17.44A4 4 0 0 1 7.873 16H10' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a4 4 0 0 1 4 4v2a1 1 0 0 1-1 1 1 1 0 0 0-1 1v3a2 2 0 1 1-4 0v-3a1 1 0 0 0-1-1 1 1 0 0 1-1-1v-2a4 4 0 0 1 4-4Z' })));
};
var ForwardRef$3W = forwardRef(SvgPeople);

var SvgPhoneLock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M14 16v-1a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v1m0 0h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M9 22H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v5' })));
};
var ForwardRef$3V = forwardRef(SvgPhoneLock);

var SvgPieChart = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M21.802 10.013a10.012 10.012 0 0 0-7.815-7.816C12.905 1.98 12 2.895 12 4v6a2 2 0 0 0 2 2h6c1.105 0 2.02-.905 1.802-1.987Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M9 4.223A9 9 0 1 0 19.777 15' })));
};
var ForwardRef$3U = forwardRef(SvgPieChart);

var SvgPillTablet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M4 6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6Z' }),
        React.createElement("circle", { cx: 8, cy: 6, r: 1, fill: 'currentColor' }),
        React.createElement("circle", { cx: 8, cy: 12, r: 1, fill: 'currentColor' }),
        React.createElement("circle", { cx: 8, cy: 18, r: 1, fill: 'currentColor' }),
        React.createElement("circle", { cx: 16, cy: 6, r: 1, fill: 'currentColor' }),
        React.createElement("circle", { cx: 16, cy: 12, r: 1, fill: 'currentColor' }),
        React.createElement("circle", { cx: 16, cy: 18, r: 1, fill: 'currentColor' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 7v10' })));
};
var ForwardRef$3T = forwardRef(SvgPillTablet);

var SvgPillsCapsule = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M5 10a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-8Zm0-6a2 2 0 0 1 2-2h10a2 2 0 1 1 0 4H7a2 2 0 0 1-2-2Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M15 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' })));
};
var ForwardRef$3S = forwardRef(SvgPillsCapsule);

var SvgPills = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 9, cy: 15, r: 7, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M16 15a7 7 0 0 0-7.938-6.938 7 7 0 1 1 7.875 7.875A7.07 7.07 0 0 0 16 15Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M2 15h14m3.95-10.95-6 6' })));
};
var ForwardRef$3R = forwardRef(SvgPills);

var SvgPinCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("ellipse", { cx: 12, cy: 19, stroke: 'currentColor', strokeWidth: 1.5, rx: 9, ry: 3 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 0v11' })));
};
var ForwardRef$3Q = forwardRef(SvgPinCircle);

var SvgPin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M15 15h1.127a4 4 0 0 1 3.072 1.44l1.067 1.28c1.086 1.302.16 3.28-1.536 3.28H5.27c-1.696 0-2.622-1.978-1.536-3.28L4.8 16.44A4 4 0 0 1 7.873 15H9' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v10' })));
};
var ForwardRef$3P = forwardRef(SvgPin);

var SvgPinterestCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 20a9.985 9.985 0 0 1-4-8C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.99 9.99 0 0 1-3.131-.5l2.631-10' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M10.172 16.655A5 5 0 1 0 7.668 14.5' })));
};
var ForwardRef$3O = forwardRef(SvgPinterestCircle);

var SvgPinterest = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 4.4c-3.045 0-5.474 2.297-5.474 5.086 0 .185.01.368.032.548.064.558-.178 1.14-.692 1.367-.76.337-1.661-.033-1.786-.854A7.064 7.064 0 0 1 4 9.486C4 5.33 7.603 2 12 2s8 3.331 8 7.486c0 4.154-3.603 7.485-8 7.485a8.58 8.58 0 0 1-1.45-.123L9.165 21.15c-.204.634-.91.99-1.577.797-.667-.193-1.043-.864-.84-1.498l4.043-12.571c.204-.634.91-.99 1.577-.797.667.193 1.043.864.84 1.498l-1.914 5.95c.23.028.466.042.705.042 3.045 0 5.474-2.297 5.474-5.085 0-2.789-2.43-5.086-5.474-5.086Z' })));
};
var ForwardRef$3N = forwardRef(SvgPinterest);

var SvgPlaster = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 4, height: 5.523, x: 12.538, y: 8.633, stroke: 'currentColor', strokeWidth: 1.5, rx: 1, transform: 'rotate(45 12.538 8.633)' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M14.206 4.166a3.98 3.98 0 1 1 5.628 5.628l-10.04 10.04a3.98 3.98 0 1 1-5.628-5.628l10.04-10.04Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm16.243 6.343 1.414 1.414M6.343 16.243l1.414 1.414' })));
};
var ForwardRef$3M = forwardRef(SvgPlaster);

var SvgPound = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M7 12h10m2-4V6.5A3.5 3.5 0 0 0 15.5 3v0A3.5 3.5 0 0 0 12 6.5v2.069a10 10 0 0 1-2.106 6.14L7.51 17.771C6.489 19.086 7.425 21 9.089 21H19' })));
};
var ForwardRef$3L = forwardRef(SvgPound);

var SvgPress = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm10 13-.53.53a.75.75 0 0 0 1.28-.53H10Zm4 0h-.75c0 .414.336.75.75.75V13Zm-5.414-1.414-.53.53.53-.53Zm-3.3 2.242-.683.31.682-.31Zm2.648 5.827.683-.31-.683.31Zm11.218.33-.651-.373.65.373Zm.321-.563.651.372-.651-.372ZM5.25 8a.75.75 0 1 0 1.5 0h-1.5Zm12 0a.75.75 0 0 0 1.5 0h-1.5Zm-6.5 5V7h-1.5v6h1.5Zm2.5-6v6h1.5V7h-1.5Zm.75 6.75h2v-1.5h-2v1.5Zm1.679 7.5h-4.103v1.5h4.103v-1.5Zm-8.573-9.5h.066v-1.5h-.066v1.5Zm.95.366L9.47 13.53l1.06-1.06-1.414-1.415-1.06 1.061Zm-3.453 2.022 2.648 5.828 1.366-.621-2.649-5.828-1.365.621Zm15.2 6.219.321-.563-1.302-.744-.321.562 1.302.745Zm.947-2.92V17h-1.5v.438h1.5Zm-.626 2.357a4.75 4.75 0 0 0 .626-2.356h-1.5a3.25 3.25 0 0 1-.428 1.612l1.302.744ZM7.172 11.75c.331 0 .65.132.884.366l1.06-1.06a2.75 2.75 0 0 0-1.944-.806v1.5Zm-.066-1.5c-2 0-3.331 2.067-2.503 3.888l1.365-.62a1.25 1.25 0 0 1 1.138-1.768v-1.5Zm8.573 12.5a4.75 4.75 0 0 0 4.124-2.393l-1.302-.745a3.25 3.25 0 0 1-2.822 1.638v1.5Zm.321-9A3.25 3.25 0 0 1 19.25 17h1.5A4.75 4.75 0 0 0 16 12.25v1.5Zm-4-8c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 4.25v1.5Zm-.424 15.5a3.25 3.25 0 0 1-2.959-1.905l-1.366.62a4.75 4.75 0 0 0 4.325 2.785v-1.5ZM10.75 7c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 7h1.5Zm-4 1c0-2.9 2.35-5.25 5.25-5.25v-1.5A6.75 6.75 0 0 0 5.25 8h1.5ZM12 2.75c2.9 0 5.25 2.35 5.25 5.25h1.5A6.75 6.75 0 0 0 12 1.25v1.5Z' })));
};
var ForwardRef$3K = forwardRef(SvgPress);

var SvgPreviousArrow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm10.023 17.245.378-.647-.378.647Zm-6.03-3.518.377-.647-.378.647Zm0-3.455-.379-.647.378.647Zm6.03-3.518.378.648-.378-.648Zm8 10.491.378-.647-.378.647Zm0-10.49.378.647-.378-.648ZM9.645 17.892l-6.03-3.518.755-1.295 6.03 3.518-.755 1.295Zm-6.03-8.268 6.03-3.518.756 1.295-6.03 3.518-.757-1.295Zm0 4.75c-1.82-1.06-1.82-3.69 0-4.75l.755 1.295a1.25 1.25 0 0 0 0 2.16l-.756 1.295Zm10.166 1.143c0 2.122-2.303 3.445-4.136 2.375l.756-1.295a1.25 1.25 0 0 0 1.88-1.08h1.5Zm-1.5-7.036a1.25 1.25 0 0 0-1.88-1.08l-.756-1.295c1.833-1.07 4.136.253 4.136 2.375h-1.5Zm9.5 0v7.036h-1.5V8.482h1.5Zm0 7.036c0 2.122-2.303 3.445-4.136 2.375l.756-1.295a1.25 1.25 0 0 0 1.88-1.08h1.5Zm-1.5-7.036a1.25 1.25 0 0 0-1.88-1.08l-.756-1.295c1.833-1.07 4.136.253 4.136 2.375h-1.5Zm-7.628.537 4.992-2.912.756 1.295-4.992 2.912-.756-1.295Zm1.128-.537v1.185h-1.5V8.482h1.5Zm0 1.185v4.666h-1.5V9.667h1.5Zm0 4.666v1.185h-1.5v-1.185h1.5Zm3.864 3.56-4.992-2.912.756-1.296 4.992 2.913-.756 1.295Z' })));
};
var ForwardRef$3J = forwardRef(SvgPreviousArrow);

var SvgProfitCart = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 11a4 4 0 1 1 0-8h12a4 4 0 0 1 0 8m0-4v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7h12Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm14 12.586-1.293-1.293a1 1 0 0 0-1.414 0L10 12.586m2 4v-5' })));
};
var ForwardRef$3I = forwardRef(SvgProfitCart);

var SvgProfitCoin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M4 12a2 2 0 0 1 2-2h9a2 2 0 1 1 0 4H6a2 2 0 0 1-2-2Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M12 18a4 4 0 1 0 3.413-3.957M12 18a4.001 4.001 0 0 1 3.413-3.957M12 18H6a2 2 0 1 1 0-4h9c.142 0 .28.015.413.043' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm14 3.586-1.293-1.293a1 1 0 0 0-1.414 0L10 3.586M12 7V2.586' })));
};
var ForwardRef$3H = forwardRef(SvgProfitCoin);

var SvgProfit = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20.114 15.281a.75.75 0 0 0-1.39-.562l1.39.562ZM3.886 8.72a.75.75 0 0 0 1.39.562l-1.39-.562ZM20.75 12A8.75 8.75 0 0 0 12 3.25v1.5A7.25 7.25 0 0 1 19.25 12h1.5Zm-17.5 0A8.75 8.75 0 0 0 12 20.75v-1.5A7.25 7.25 0 0 1 4.75 12h-1.5ZM12 20.75a8.753 8.753 0 0 0 8.114-5.469l-1.39-.562A7.253 7.253 0 0 1 12 19.25v1.5Zm0-17.5a8.753 8.753 0 0 0-8.114 5.469l1.39.562A7.253 7.253 0 0 1 12 4.75v-1.5Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M14 10a2 2 0 1 0-2 2m0 0a2 2 0 1 1-2 2' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 6.5V8m0 8v1.5m6-6.5.894.447a2 2 0 0 0 2.095-.189L22 10.5M2 13l.894-.447a2 2 0 0 1 2.095.189L6 13.5' })));
};
var ForwardRef$3G = forwardRef(SvgProfit);

var SvgPyramid = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M21.594 16.5 14.648 4.516c-1.17-2.021-4.125-2.021-5.296 0L2.406 16.5c-1.162 2.005.307 4.5 2.649 4.5h13.89c2.342 0 3.81-2.495 2.649-4.5Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'square', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M7.5 9h9M4 15h16' })));
};
var ForwardRef$3F = forwardRef(SvgPyramid);

var SvgQrScan = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M5 8V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m0 8v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1m-3-4h20' })));
};
var ForwardRef$3E = forwardRef(SvgQrScan);

var SvgReceipt = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M17 7.75a.75.75 0 0 0 0-1.5v1.5ZM7 6.25a.75.75 0 0 0 0 1.5v-1.5Zm10 0H7v1.5h10v-1.5Zm0 5.5a.75.75 0 0 0 0-1.5v1.5Zm-10-1.5a.75.75 0 0 0 0 1.5v-1.5Zm10 0H7v1.5h10v-1.5Zm-5 5.5a.75.75 0 0 0 0-1.5v1.5Zm-5-1.5a.75.75 0 0 0 0 1.5v-1.5Zm5 0H7v1.5h5v-1.5Zm6.323 6.786-.255.706.255-.706Zm-1.562-.562.254-.706-.254.706Zm-1.498.058-.308-.684.308.684ZM12.82 21.63l-.308-.684.308.684Zm-1.642 0 .308-.684-.308.684Zm-2.442-1.1.308-.683-.308.684Zm-1.498-.057-.254-.706.254.706Zm-1.562.562.254.706-.254-.706ZM5 2.75h14v-1.5H5v1.5ZM20.25 4v15.154h1.5V4h-1.5Zm-1.673 16.33-1.562-.562-.508 1.412 1.561.562.509-1.412Zm-3.622-.482-2.442 1.099.616 1.368 2.441-1.1-.615-1.367Zm-3.468 1.099-2.442-1.1-.615 1.369 2.441 1.099.616-1.368Zm-4.502-1.179-1.562.563.508 1.41 1.562-.561-.508-1.412Zm-3.235-.614V4h-1.5v15.154h1.5Zm1.673 1.177a1.25 1.25 0 0 1-1.673-1.177h-1.5a2.75 2.75 0 0 0 3.681 2.588l-.508-1.412Zm3.622-.483a2.75 2.75 0 0 0-2.06-.08l.508 1.412a1.25 1.25 0 0 1 .937.036l.615-1.368Zm3.468 1.099a1.25 1.25 0 0 1-1.026 0l-.616 1.368a2.75 2.75 0 0 0 2.258 0l-.616-1.368Zm4.502-1.179a2.75 2.75 0 0 0-2.06.08l.615 1.368a1.25 1.25 0 0 1 .937-.036l.508-1.412Zm3.235-.614a1.25 1.25 0 0 1-1.673 1.177l-.509 1.41a2.75 2.75 0 0 0 3.682-2.587h-1.5ZM19 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 19 1.25v1.5ZM5 1.25A2.75 2.75 0 0 0 2.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z' })));
};
var ForwardRef$3D = forwardRef(SvgReceipt);

var SvgRedoCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm15.465 10 .185.727a.75.75 0 0 0 .565-.727h-.75Zm.75-2.5a.75.75 0 0 0-1.5 0h1.5Zm-2.9 2.273a.75.75 0 1 0 .37 1.454l-.37-1.454Zm3.285 3.414a.75.75 0 1 0-1.452-.374l1.452.374ZM12 15.25A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75v-1.5ZM8.75 12A3.25 3.25 0 0 1 12 8.75v-1.5A4.75 4.75 0 0 0 7.25 12h1.5ZM12 8.75c1.202 0 2.253.652 2.816 1.626l1.298-.752A4.749 4.749 0 0 0 12 7.25v1.5ZM16.215 10V7.5h-1.5V10h1.5Zm-.935-.727-1.965.5.37 1.454 1.965-.5-.37-1.454Zm-.132 3.54A3.252 3.252 0 0 1 12 15.25v1.5a4.752 4.752 0 0 0 4.6-3.563l-1.452-.374Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z' })));
};
var ForwardRef$3C = forwardRef(SvgRedoCircle);

var SvgRedoRectangleLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm8.41 10-.186.727A.75.75 0 0 1 7.66 10h.75Zm-.75-2.5a.75.75 0 0 1 1.5 0h-1.5Zm2.899 2.273a.75.75 0 0 1-.37 1.454l.37-1.454Zm-3.285 3.414a.75.75 0 1 1 1.452-.374l-1.452.374Zm4.6 2.063a3.25 3.25 0 0 0 3.25-3.25h1.5a4.75 4.75 0 0 1-4.75 4.75v-1.5Zm3.25-3.25a3.25 3.25 0 0 0-3.25-3.25v-1.5a4.75 4.75 0 0 1 4.75 4.75h-1.5Zm-3.25-3.25a3.248 3.248 0 0 0-2.816 1.626L7.76 9.623a4.748 4.748 0 0 1 4.114-2.374v1.5ZM7.659 10V7.5h1.5V10h-1.5Zm.935-.727 1.965.5-.37 1.454-1.965-.5.37-1.454Zm.132 3.54a3.252 3.252 0 0 0 3.148 2.437v1.5a4.752 4.752 0 0 1-4.6-3.563l1.452-.374Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z' })));
};
var ForwardRef$3B = forwardRef(SvgRedoRectangleLeft);

var SvgRedoRectangleRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm15.465 10 .185.727a.75.75 0 0 0 .565-.727h-.75Zm.75-2.5a.75.75 0 0 0-1.5 0h1.5Zm-2.9 2.273a.75.75 0 1 0 .37 1.454l-.37-1.454Zm3.285 3.414a.75.75 0 1 0-1.452-.374l1.452.374ZM12 15.25A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75v-1.5ZM8.75 12A3.25 3.25 0 0 1 12 8.75v-1.5A4.75 4.75 0 0 0 7.25 12h1.5ZM12 8.75c1.202 0 2.253.652 2.816 1.626l1.298-.752A4.749 4.749 0 0 0 12 7.25v1.5ZM16.215 10V7.5h-1.5V10h1.5Zm-.935-.727-1.965.5.37 1.454 1.965-.5-.37-1.454Zm-.132 3.54A3.252 3.252 0 0 1 12 15.25v1.5a4.752 4.752 0 0 0 4.6-3.563l-1.452-.374Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z' })));
};
var ForwardRef$3A = forwardRef(SvgRedoRectangleRight);

var SvgRedo = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M21.75 12a.75.75 0 0 0-1.5 0h1.5Zm-1.954-4.5v.75a.75.75 0 0 0 .75-.75h-.75Zm.75-4.5a.75.75 0 0 0-1.5 0h1.5Zm-5.171 3.75a.75.75 0 0 0 0 1.5v-1.5ZM20.25 12A8.25 8.25 0 0 1 12 20.25v1.5A9.75 9.75 0 0 0 21.75 12h-1.5ZM12 20.25A8.25 8.25 0 0 1 3.75 12h-1.5A9.75 9.75 0 0 0 12 21.75v-1.5ZM3.75 12A8.25 8.25 0 0 1 12 3.75v-1.5A9.75 9.75 0 0 0 2.25 12h1.5ZM12 3.75a8.247 8.247 0 0 1 7.147 4.126l1.298-.752A9.747 9.747 0 0 0 12 2.25v1.5Zm8.546 3.75V3h-1.5v4.5h1.5Zm-.75-.75h-4.421v1.5h4.421v-1.5Z' })));
};
var ForwardRef$3z = forwardRef(SvgRedo);

var SvgReloadCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm14.58 8.002-.367.654a.75.75 0 0 0 1.065-.93l-.697.276Zm-5.16 7.996.368-.654a.75.75 0 0 0-1.066.93l.697-.276Zm5.063-10.275a.75.75 0 0 0-1.394.554l1.394-.554ZM9.517 18.277a.75.75 0 0 0 1.394-.554l-1.394.554Zm8.038-7.682a.75.75 0 0 0-1.443.41l1.443-.41Zm-11.11 2.81a.75.75 0 1 0 1.443-.41l-1.443.41ZM16.25 12c0 2.115-1.853 3.917-4.25 3.917v1.5c3.126 0 5.75-2.378 5.75-5.417h-1.5Zm-8.5 0c0-2.115 1.853-3.917 4.25-3.917v-1.5c-3.126 0-5.75 2.378-5.75 5.417h1.5ZM12 8.083c.814 0 1.57.21 2.213.573l.736-1.307A5.997 5.997 0 0 0 12 6.583v1.5Zm0 7.834c-.814 0-1.57-.21-2.212-.573l-.737 1.307a5.997 5.997 0 0 0 2.949.766v-1.5Zm3.278-8.192-.795-2.002-1.394.554.795 2.002 1.394-.554Zm-6.556 8.55.795 2.002 1.394-.554-.795-2.002-1.394.554Zm7.39-5.27c.09.317.138.65.138.995h1.5c0-.485-.068-.956-.195-1.405l-1.443.41Zm-8.224 1.99A3.63 3.63 0 0 1 7.75 12h-1.5c0 .485.068.956.195 1.405l1.443-.41Z' }),
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 })));
};
var ForwardRef$3y = forwardRef(SvgReloadCircle);

var SvgReloadRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm14.58 8.002-.367.654a.75.75 0 0 0 1.065-.93l-.697.276Zm-5.16 7.996.368-.654a.75.75 0 0 0-1.066.93l.697-.276Zm5.063-10.275a.75.75 0 0 0-1.394.554l1.394-.554ZM9.517 18.277a.75.75 0 0 0 1.394-.554l-1.394.554Zm8.038-7.682a.75.75 0 0 0-1.443.41l1.443-.41Zm-11.11 2.81a.75.75 0 1 0 1.443-.41l-1.443.41ZM16.25 12c0 2.115-1.853 3.917-4.25 3.917v1.5c3.126 0 5.75-2.378 5.75-5.417h-1.5Zm-8.5 0c0-2.115 1.853-3.917 4.25-3.917v-1.5c-3.126 0-5.75 2.378-5.75 5.417h1.5ZM12 8.083c.814 0 1.57.21 2.213.573l.736-1.307A5.997 5.997 0 0 0 12 6.583v1.5Zm0 7.834c-.814 0-1.57-.21-2.212-.573l-.737 1.307a5.997 5.997 0 0 0 2.949.766v-1.5Zm3.278-8.192-.795-2.002-1.394.554.795 2.002 1.394-.554Zm-6.556 8.55.795 2.002 1.394-.554-.795-2.002-1.394.554Zm7.39-5.27c.09.317.138.65.138.995h1.5c0-.485-.068-.956-.195-1.405l-1.443.41Zm-8.224 1.99A3.63 3.63 0 0 1 7.75 12h-1.5c0 .485.068.956.195 1.405l1.443-.41Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z' })));
};
var ForwardRef$3x = forwardRef(SvgReloadRectangle);

var SvgReload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15.558 1.733a.75.75 0 0 0-1.402.534l1.402-.534ZM8.442 22.267a.75.75 0 0 0 1.402-.534l-1.402.534Zm7.593-17.176-.379.647a.75.75 0 0 0 1.08-.914l-.7.267Zm-8.07 13.818.379-.647a.75.75 0 0 0-1.08.914l.7-.267ZM4.42 16.375a.75.75 0 1 0 1.298-.75l-1.298.75Zm15.158-8.75a.75.75 0 1 0-1.299.75l1.299-.75ZM19.25 12A7.25 7.25 0 0 1 12 19.25v1.5A8.75 8.75 0 0 0 20.75 12h-1.5Zm-14.5 0A7.25 7.25 0 0 1 12 4.75v-1.5A8.75 8.75 0 0 0 3.25 12h1.5ZM12 4.75c1.335 0 2.584.36 3.656.988l.758-1.295A8.713 8.713 0 0 0 12 3.25v1.5Zm4.736.074-1.178-3.091-1.402.534 1.178 3.09 1.402-.533ZM12 19.25a7.212 7.212 0 0 1-3.656-.988l-.758 1.294A8.713 8.713 0 0 0 12 20.75v-1.5Zm-4.736-.074 1.178 3.091 1.402-.534-1.178-3.09-1.402.533Zm-1.545-3.551A7.214 7.214 0 0 1 4.75 12h-1.5a8.71 8.71 0 0 0 1.171 4.375l1.298-.75Zm12.561-7.25A7.212 7.212 0 0 1 19.25 12h1.5a8.713 8.713 0 0 0-1.171-4.376l-1.299.752Z' })));
};
var ForwardRef$3w = forwardRef(SvgReload);

var SvgRestart = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a10 10 0 0 0 8.96-5.556' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm22 12-3-1' })));
};
var ForwardRef$3v = forwardRef(SvgRestart);

var SvgReturnBox = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M4 12v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7m-8-4h7.5a1 1 0 0 1 .8.4l1.5 2A1 1 0 0 1 21 12h-5.5a1 1 0 0 1-.8-.4L12 8Zm0 0H4.5a1 1 0 0 0-.8.4l-1.5 2A1 1 0 0 0 3 12h5.5a1 1 0 0 0 .8-.4L12 8Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M9.586 4 8 2h6.5A1.5 1.5 0 0 1 16 3.5v0A1.5 1.5 0 0 1 14.5 5H13' })));
};
var ForwardRef$3u = forwardRef(SvgReturnBox);

var SvgReturnCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 10, height: 10, x: 7, y: 7, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M13 10h-2' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M22 12c0 5.523-4.477 10-10 10a9.985 9.985 0 0 1-8-4m-2-6C2 6.477 6.477 2 12 2a9.985 9.985 0 0 1 8 4M4 18l-1 3M20 6l1-3' })));
};
var ForwardRef$3t = forwardRef(SvgReturnCircle);

var SvgReturn = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M4 12v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7m-8-4h7.5a1 1 0 0 1 .8.4l1.5 2A1 1 0 0 1 21 12h-5.5a1 1 0 0 1-.8-.4L12 8Zm0 0H4.5a1 1 0 0 0-.8.4l-1.5 2A1 1 0 0 0 3 12h5.5a1 1 0 0 0 .8-.4L12 8Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm10 3.586 1.293-1.293a1 1 0 0 1 1.414 0L14 3.586M12 5.5V2.586' })));
};
var ForwardRef$3s = forwardRef(SvgReturn);

var SvgReward = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm15.629 21.451.278-.696-.278.696ZM12.37 20.15l.279-.697-.279.697Zm-.742 0 .278.696-.278-.696Zm-3.258 1.3.279.697-.279-.697ZM16.25 16v4.523h1.5V16h-1.5Zm-8.5 4.523V16h-1.5v4.523h1.5Zm8.157.232-3.257-1.303-.557 1.393 3.257 1.303.557-1.393Zm-4.557-1.303-3.257 1.303.557 1.393 3.257-1.303-.557-1.393Zm1.3 0a1.75 1.75 0 0 0-1.3 0l.557 1.393a.25.25 0 0 1 .186 0l.557-1.393Zm-6.4 1.071a1.75 1.75 0 0 0 2.4 1.625l-.557-1.393a.25.25 0 0 1-.343-.232h-1.5Zm10 0a.25.25 0 0 1-.343.232l-.557 1.393a1.75 1.75 0 0 0 2.4-1.625h-1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'm8.642 3.64.06.747-.06-.747Zm1.235-.512.486.57-.486-.57ZM5.714 5.705l-.747-.06.747.06Zm1.991-1.99-.06-.748.06.747ZM5.128 7.876l-.57-.486.57.486Zm.512-1.235.747.06-.747-.06Zm-1.122 4.766.571-.487-.57.487Zm0-2.816.571.487-.57-.487Zm1.122 4.766.747-.06-.747.06Zm-.512-1.235-.57.487.57-.487Zm2.577 4.163-.06.747.06-.747Zm-1.99-1.991-.748.06.747-.06Zm4.162 2.577-.486.57.486-.57Zm-1.235-.512.06-.747-.06.747Zm4.766 1.122.486.57-.486-.57Zm-2.816 0 .487-.571-.487.57Zm4.766-1.122-.06-.747.06.747Zm-1.235.512-.486-.57.486.57Zm4.163-2.577.747.06-.747-.06Zm-1.991 1.99.06.748-.06-.747Zm2.577-4.162-.57-.486.57.486Zm-.512 1.235-.747-.06.747.06Zm1.122-4.766-.571.487.57-.487Zm0 2.816.57.486-.57-.486ZM18.36 6.642l-.747.06.747-.06Zm.512 1.235.57-.486-.57.486Zm-2.577-4.163.06-.747-.06.747Zm1.99 1.991.748-.06-.747.06Zm-4.162-2.577.487-.57-.487.57Zm1.235.512-.06.747.06-.747Zm-1.95-1.122-.487.571.487-.57Zm-2.816 0-.486-.57.486.57Zm2.33.571.714.61.974-1.142-.716-.61-.973 1.142Zm2.376 1.298.937.075.12-1.495-.937-.075-.12 1.495Zm2.24 1.378.075.937 1.495-.12-.075-.937-1.495.12Zm.763 2.598.61.716 1.141-.973-.61-.715-1.14.972Zm.61 2.558-.61.716 1.142.973.61-.716-1.142-.973Zm-1.298 2.377-.075.937 1.495.12.075-.937-1.495-.12Zm-1.378 2.24-.937.075.12 1.495.937-.075-.12-1.495Zm-2.598.763-.716.61.973 1.141.716-.61-.973-1.14Zm-2.558.61-.716-.61-.972 1.142.715.61.973-1.142Zm-2.377-1.298-.937-.075-.12 1.495.937.075.12-1.495Zm-2.24-1.378-.075-.937-1.495.12.075.937 1.495-.12Zm-.763-2.598-.61-.716-1.141.973.61.716 1.14-.973Zm-.61-2.558.61-.716-1.142-.972-.61.715 1.142.973Zm1.298-2.377.075-.937-1.495-.12-.075.937 1.495.12Zm1.378-2.24.937-.075-.12-1.495-.937.075.12 1.495Zm2.599-.763.715-.61-.973-1.141-.715.61.973 1.14Zm-1.662.688a2.92 2.92 0 0 0 1.662-.688L9.39 2.557a1.42 1.42 0 0 1-.809.335l.12 1.495Zm-2.24 1.378a1.42 1.42 0 0 1 1.303-1.303l-.12-1.495a2.92 2.92 0 0 0-2.678 2.678l1.495.12Zm-.763 2.598a2.92 2.92 0 0 0 .688-1.661l-1.495-.12a1.42 1.42 0 0 1-.335.809l1.142.972Zm-.61 2.558a1.42 1.42 0 0 1 0-1.842l-1.141-.973a2.92 2.92 0 0 0 0 3.788l1.141-.973Zm1.298 2.377a2.92 2.92 0 0 0-.688-1.662l-1.142.974c.194.227.311.51.335.808l1.495-.12Zm1.378 2.24a1.42 1.42 0 0 1-1.303-1.303l-1.495.12a2.92 2.92 0 0 0 2.678 2.678l.12-1.495Zm2.599.763a2.92 2.92 0 0 0-1.662-.688l-.12 1.495c.298.024.581.141.809.335l.973-1.142Zm2.557.61a1.42 1.42 0 0 1-1.842 0l-.973 1.141a2.92 2.92 0 0 0 3.788 0l-.973-1.141Zm2.377-1.298a2.92 2.92 0 0 0-1.662.688l.974 1.142a1.42 1.42 0 0 1 .808-.335l-.12-1.495Zm2.24-1.378a1.42 1.42 0 0 1-1.303 1.303l.12 1.495a2.92 2.92 0 0 0 2.678-2.679l-1.495-.119Zm.763-2.598a2.92 2.92 0 0 0-.688 1.661l1.495.12a1.42 1.42 0 0 1 .335-.808l-1.142-.973Zm.61-2.558a1.42 1.42 0 0 1 0 1.842l1.141.973a2.92 2.92 0 0 0 0-3.788l-1.141.973Zm-1.298-2.377a2.92 2.92 0 0 0 .688 1.661l1.142-.972a1.42 1.42 0 0 1-.335-.809l-1.495.12Zm-1.378-2.24a1.42 1.42 0 0 1 1.303 1.303l1.495-.12a2.92 2.92 0 0 0-2.678-2.678l-.12 1.495Zm-2.598-.763a2.92 2.92 0 0 0 1.661.688l.12-1.495a1.42 1.42 0 0 1-.808-.335L13.636 3.7Zm.257-1.751a2.92 2.92 0 0 0-3.788 0l.973 1.141a1.42 1.42 0 0 1 1.842 0l.973-1.141Z' })));
};
var ForwardRef$3r = forwardRef(SvgReward);

var SvgRoadHorizontal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 20, height: 14, x: 2, y: 5, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, rx: 4 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12.5 12h-1m6.5 0h-1M7 12H6' })));
};
var ForwardRef$3q = forwardRef(SvgRoadHorizontal);

var SvgRoadLocationHorizontal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8.008 8H6a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-6a4 4 0 0 0-4-4h-1.913' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12.5 15h-1m6.5 0h-1M7 15H6' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M16.454 6.276c0 2.361-2.227 6.414-4.454 6.414S7.546 8.637 7.546 6.276C7.546 3.914 9.54 2 12 2s4.454 1.914 4.454 4.276Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M13.336 6.009a1.336 1.336 0 1 1-2.672 0 1.336 1.336 0 0 1 2.672 0Z' })));
};
var ForwardRef$3p = forwardRef(SvgRoadLocationHorizontal);

var SvgRoadLocation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 16v1m0-5.5v1M12 7v1m-.832-4H8.386a2 2 0 0 0-1.873 1.298l-4.5 12A2 2 0 0 0 3.886 20h16.228a2 2 0 0 0 1.873-2.702l-1.279-3.409' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M19.424 6.313a1.375 1.375 0 1 1-2.75 0 1.375 1.375 0 0 1 2.75 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M22.174 6.313c0 2.277-2.75 5.499-4.124 5.499-1.375 0-4.125-3.222-4.125-5.5a4.125 4.125 0 0 1 8.25 0Z' })));
};
var ForwardRef$3o = forwardRef(SvgRoadLocation);

var SvgRoadPinHorizontal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 4, r: 2, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 12V6' }),
        React.createElement("rect", { width: 20, height: 14, x: 2, y: 8, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, rx: 4 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12.5 15h-1m5.5 0h-1m-8 0H7' })));
};
var ForwardRef$3n = forwardRef(SvgRoadPinHorizontal);

var SvgRoadPin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 17, cy: 5, r: 3, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M17 12V8m-5 8v1m0-5.5v1M12 7v1' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M11.083 4H8.386a2 2 0 0 0-1.873 1.298l-4.5 12A2 2 0 0 0 3.886 20h16.228a2 2 0 0 0 1.873-2.702l-2.554-6.811' })));
};
var ForwardRef$3m = forwardRef(SvgRoadPin);

var SvgRoad = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6.513 5.298A2 2 0 0 1 8.386 4h7.228a2 2 0 0 1 1.873 1.298l4.5 12A2 2 0 0 1 20.114 20H3.886a2 2 0 0 1-1.873-2.702l4.5-12Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 16v1m0-5.5v1M12 7v1' })));
};
var ForwardRef$3l = forwardRef(SvgRoad);

var SvgRoofHomeAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543ZM12.75 11a.75.75 0 0 0-1.5 0h1.5Zm-1.5 6a.75.75 0 0 0 1.5 0h-1.5ZM15 14.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm7.18 8H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232ZM11.25 11v6h1.5v-6h-1.5ZM15 13.25H9v1.5h6v-1.5Z' })));
};
var ForwardRef$3k = forwardRef(SvgRoofHomeAdd);

var SvgRoofHomeArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543Zm-13.51-.58a.75.75 0 1 0-1.34.67l1.34-.67Zm1.436 4.546.67-.335-.67.335Zm1.788 0-.67-.335.67.335Zm1.212-2.422.67.335-.67-.335Zm1.788 0-.67.335.67-.335ZM16 17v.75a.75.75 0 0 0 .67-.415L16 17Zm1.67-1.665a.75.75 0 1 0-1.34-.67l1.34.67ZM14 16.25a.75.75 0 0 0 0 1.5v-1.5Zm2.18 5H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232Zm3.604 4.754 2.106 4.212 1.341-.671-2.105-4.211-1.342.67Zm5.236 4.212 1.211-2.423-1.341-.67-1.211 2.422 1.341.67Zm1.659-2.423 2.105 4.211 1.342-.67-2.106-4.212-1.341.671Zm3.447 4.211 1-2-1.342-.67-1 2 1.342.67ZM16 16.25h-2v1.5h2v-1.5Zm-3.224-3.126a.25.25 0 0 1 .448 0l1.341-.67c-.645-1.29-2.485-1.29-3.13 0l1.341.67Zm-4.341 2.423c.645 1.29 2.485 1.29 3.13 0l-1.341-.671a.25.25 0 0 1-.448 0l-1.341.67Z' })));
};
var ForwardRef$3j = forwardRef(SvgRoofHomeArrowDown);

var SvgRoofHomeArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543Zm-14.85 5.42a.75.75 0 1 0 1.34.67l-1.34-.67Zm2.776-3.876.67.335-.67-.335Zm1.788 0-.67.335.67-.335Zm1.212 2.422.67-.335-.67.335Zm1.788 0-.67-.335.67.335ZM16 11l.67-.335a.75.75 0 0 0-.67-.415V11Zm.33 2.335a.75.75 0 1 0 1.34-.67l-1.34.67ZM14 10.25a.75.75 0 0 0 0 1.5v-1.5Zm2.18 11H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232ZM7.67 17.335l2.105-4.21-1.341-.672-2.106 4.212 1.342.67Zm2.553-4.21 1.21 2.422 1.342-.671-1.21-2.423-1.342.671Zm4.341 2.422 2.106-4.212-1.342-.67-2.105 4.21 1.341.672Zm.764-4.212 1 2 1.342-.67-1-2-1.342.67ZM16 10.25h-2v1.5h2v-1.5Zm-4.565 5.297c.645 1.29 2.485 1.29 3.13 0l-1.341-.671a.25.25 0 0 1-.448 0l-1.341.67Zm-1.659-2.423a.25.25 0 0 1 .448 0l1.341-.67c-.645-1.29-2.485-1.29-3.13 0l1.341.67Z' })));
};
var ForwardRef$3i = forwardRef(SvgRoofHomeArrowUp);

var SvgRoofHomeCelsius = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543Zm-7.675 1.568a.75.75 0 1 0 .99-1.126l-.99 1.126Zm.99 4.5a.75.75 0 1 0-.99-1.126l.99 1.126Zm1.685 3.937H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232Zm9.284 10.169A2.255 2.255 0 0 1 9.75 14.5h-1.5a3.755 3.755 0 0 0 3.76 3.75v-1.5ZM9.75 14.5c0-1.24 1.01-2.25 2.26-2.25v-1.5a3.755 3.755 0 0 0-3.76 3.75h1.5Zm2.26-2.25c.574 0 1.096.212 1.495.563l.99-1.126a3.753 3.753 0 0 0-2.486-.937v1.5Zm1.495 3.937c-.4.35-.921.563-1.496.563v1.5a3.75 3.75 0 0 0 2.486-.937l-.99-1.126ZM16.5 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' })));
};
var ForwardRef$3h = forwardRef(SvgRoofHomeCelsius);

var SvgRoofHomeCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543ZM9.53 14.47a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm.745 1.805.53-.53-.53.53Zm3.078-.305.624.416-.624-.416Zm3.271-3.554a.75.75 0 1 0-1.248-.832l1.248.832Zm-.444 8.834H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232Zm5.745 8.95 1.275 1.274 1.06-1.06L9.53 14.47l-1.06 1.06Zm5.507.855 2.647-3.97-1.248-.832-2.647 3.97 1.248.832Zm-4.232.42a2.75 2.75 0 0 0 4.232-.42l-1.248-.832a1.25 1.25 0 0 1-1.924.19l-1.06 1.061Z' })));
};
var ForwardRef$3g = forwardRef(SvgRoofHomeCheck);

var SvgRoofHomeCloud = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543Zm-7.46.88-.69.294a.75.75 0 0 0 .923.418l-.234-.713Zm2.46 9.125H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232ZM10.5 16.25a2.75 2.75 0 0 1-2.75-2.75h-1.5a4.25 4.25 0 0 0 4.25 4.25v-1.5ZM7.75 13.5a2.75 2.75 0 0 1 2.75-2.75v-1.5a4.25 4.25 0 0 0-4.25 4.25h1.5Zm8.5 1a1.75 1.75 0 0 1-1.75 1.75v1.5a3.25 3.25 0 0 0 3.25-3.25h-1.5Zm-1.75-1.75c.966 0 1.75.784 1.75 1.75h1.5a3.25 3.25 0 0 0-3.25-3.25v1.5Zm-.547.087c.171-.056.355-.087.547-.087v-1.5c-.353 0-.694.057-1.015.162l.468 1.425ZM10.5 10.75a2.75 2.75 0 0 1 2.53 1.67l1.379-.59A4.25 4.25 0 0 0 10.5 9.25v1.5Zm4 5.5h-4v1.5h4v-1.5Z' })));
};
var ForwardRef$3f = forwardRef(SvgRoofHomeCloud);

var SvgRoofHomeDownload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543ZM10.53 14.47a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm2.177 1.823-.53-.53.53.53Zm1.823-.763a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-3.28.47a.75.75 0 0 0 1.5 0h-1.5Zm1.5-7a.75.75 0 0 0-1.5 0h1.5Zm3.43 12.25H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232Zm6.745 8.95 1.293 1.292 1.06-1.06-1.293-1.293-1.06 1.06Zm3.767 1.292 1.293-1.293-1.06-1.06-1.293 1.293 1.06 1.06Zm-2.474 0a1.75 1.75 0 0 0 2.474 0l-1.06-1.06a.25.25 0 0 1-.354 0l-1.06 1.06ZM12.75 16V9h-1.5v7h1.5Z' })));
};
var ForwardRef$3e = forwardRef(SvgRoofHomeDownload);

var SvgRoofHomeEye = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543ZM8.01 15.097l-.514.547.514-.547Zm0-2.194.513.546-.513-.546Zm7.982 2.194-.513-.546.513.546Zm0-2.194.514-.547-.514.547Zm.19 8.347H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.968 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.03 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232Zm12.753 7.97c-.881.827-2.147 1.699-3.478 1.699v1.5c1.93 0 3.56-1.22 4.505-2.106l-1.027-1.093ZM12 16.25c-1.33 0-2.596-.872-3.478-1.7l-1.027 1.094C8.44 16.53 10.07 17.75 12 17.75v-1.5Zm-3.478-2.8c.882-.828 2.147-1.7 3.478-1.7v-1.5c-1.93 0-3.56 1.22-4.505 2.106l1.027 1.093ZM12 11.75c1.33 0 2.597.872 3.478 1.7l1.027-1.094C15.56 11.47 13.93 10.25 12 10.25v1.5Zm-3.478 2.8a.736.736 0 0 1 0-1.1l-1.027-1.094a2.236 2.236 0 0 0 0 3.288l1.027-1.093Zm7.983 1.094a2.236 2.236 0 0 0 0-3.288l-1.027 1.093c.33.31.33.792 0 1.102l1.027 1.093Z' }),
        React.createElement("circle", { cx: 12, cy: 14, r: 1, fill: 'currentColor' })));
};
var ForwardRef$3d = forwardRef(SvgRoofHomeEye);

var SvgRoofHomeFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543Zm-9.18.467-.53.53a.75.75 0 0 0 1.06 0l-.53-.53Zm.31-.31.53.531-.53-.53Zm-.62 0-.53.531.53-.53Zm1.547 5.26-.53-.53.53.53Zm2.166-2.165.53.53-.53-.53Zm-6.806-3.094-.53-.53.53.53Zm7.583 9.847H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232Zm9.805 5.662.31-.31-1.061-1.06-.31.309 1.061 1.06Zm-1.37-.31.31.31 1.06-1.061-.309-.31-1.06 1.061Zm-3.093 3.094 2.165 2.165 1.06-1.06-2.165-2.166-1.06 1.06Zm5.7 2.165 2.166-2.165-1.06-1.06-2.166 2.165 1.06 1.06Zm1.106-5.259a1.437 1.437 0 0 1 0 2.033l1.06 1.06a2.938 2.938 0 0 0 0-4.153l-1.06 1.06Zm1.06-1.06a2.938 2.938 0 0 0-4.154 0l1.06 1.06a1.437 1.437 0 0 1 2.034 0l1.06-1.06Zm-6.806 1.06a1.437 1.437 0 0 1 2.033 0l1.061-1.06a2.938 2.938 0 0 0-4.154 0l1.06 1.06Zm1.105 5.26a2.5 2.5 0 0 0 3.536 0l-1.06-1.061a1 1 0 0 1-1.415 0l-1.06 1.06Zm-2.165-6.32a2.937 2.937 0 0 0 0 4.154l1.06-1.06a1.437 1.437 0 0 1 0-2.034l-1.06-1.06Z' })));
};
var ForwardRef$3c = forwardRef(SvgRoofHomeFavourite);

var SvgRoofHomeFilter = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543ZM8 11.25a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm2-1.5a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-2 3.5a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8-1.5a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5ZM10.75 11a.75.75 0 0 0-1.5 0h1.5Zm-1.5 2a.75.75 0 0 0 1.5 0h-1.5Zm5.5 3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 2a.75.75 0 0 0 1.5 0h-1.5Zm2.93 3.25H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232ZM8 12.75h2v-1.5H8v1.5Zm4 0h4v-1.5h-4v1.5Zm2 5h2v-1.5h-2v1.5Zm-6 0h4v-1.5H8v1.5ZM9.25 11v2h1.5v-2h-1.5Zm4 5v2h1.5v-2h-1.5Z' })));
};
var ForwardRef$3b = forwardRef(SvgRoofHomeFilter);

var SvgRoofHomeFlash = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543ZM13.6 9.45a.75.75 0 1 0-1.2-.9l1.2.9ZM10 13l-.6-.45a.75.75 0 0 0 .6 1.2V13Zm4 0 .6.45a.75.75 0 0 0-.6-1.2V13Zm-3.6 3.55a.75.75 0 1 0 1.2.9l-1.2-.9Zm5.78 4.7H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232ZM12.4 8.55l-3 4 1.2.9 3-4-1.2-.9Zm-2.4 5.2h4v-1.5h-4v1.5Zm3.4-1.2-3 4 1.2.9 3-4-1.2-.9Z' })));
};
var ForwardRef$3a = forwardRef(SvgRoofHomeFlash);

var SvgRoofHomeFluid = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543ZM12 9l.48-.576a.75.75 0 0 0-.96 0L12 9Zm4.18 12.25H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232ZM16.25 14.4c0-.79-.275-1.562-.633-2.242-.362-.686-.835-1.329-1.293-1.873a16.84 16.84 0 0 0-1.797-1.821l-.033-.029-.01-.008-.002-.002h-.001v-.001L12 9l-.48.576.006.006a4.02 4.02 0 0 1 .128.11 15.38 15.38 0 0 1 1.522 1.559c.417.495.819 1.047 1.114 1.606.298.566.46 1.09.46 1.543h1.5ZM12 9l-.48-.576-.002.001-.002.002-.01.008-.033.029-.12.104a16.848 16.848 0 0 0-1.677 1.717c-.458.544-.931 1.187-1.293 1.873-.358.68-.633 1.452-.633 2.242h1.5c0-.453.162-.977.46-1.543.295-.559.697-1.11 1.114-1.606a15.38 15.38 0 0 1 1.65-1.67l.005-.004h.001c0-.001 0-.001 0 0L12 9Zm-4.25 5.4c0 1.445.544 2.554 1.382 3.294.822.726 1.881 1.056 2.868 1.056v-1.5c-.67 0-1.361-.227-1.875-.68-.497-.44-.875-1.13-.875-2.17h-1.5ZM12 18.75c.987 0 2.046-.33 2.867-1.056.839-.74 1.383-1.849 1.383-3.294h-1.5c0 1.04-.378 1.73-.875 2.17-.514.453-1.205.68-1.875.68v1.5Z' })));
};
var ForwardRef$39 = forwardRef(SvgRoofHomeFluid);

var SvgRoofHomeGraph = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543ZM8.75 12a.75.75 0 0 0-1.5 0h1.5Zm-1.5 4a.75.75 0 0 0 1.5 0h-1.5Zm9.5-4a.75.75 0 0 0-1.5 0h1.5Zm-1.5 4a.75.75 0 0 0 1.5 0h-1.5Zm-2.5-6a.75.75 0 0 0-1.5 0h1.5Zm-1.5 8a.75.75 0 0 0 1.5 0h-1.5Zm4.93 3.25H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232ZM7.25 12v4h1.5v-4h-1.5Zm8 0v4h1.5v-4h-1.5Zm-4-2v8h1.5v-8h-1.5Z' })));
};
var ForwardRef$38 = forwardRef(SvgRoofHomeGraph);

var SvgRoofHomeInformation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543ZM12.75 12a.75.75 0 0 0-1.5 0h1.5Zm-1.5 5a.75.75 0 0 0 1.5 0h-1.5Zm4.93 4.25H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232ZM11.25 12v5h1.5v-5h-1.5ZM13 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' })));
};
var ForwardRef$37 = forwardRef(SvgRoofHomeInformation);

var SvgRoofHomeLink = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543Zm-9.887-.366-.53-.53.53.53Zm1.414-1.414.53.53-.53-.53Zm2.829 2.828-.53-.53.53.53Zm-.884-.177a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-3.89 2.122a.75.75 0 1 0 1.061-1.061l-1.06 1.06Zm-2.298-.53.53.53-.53-.53Zm.884.176a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm3.89-2.122a.75.75 0 1 0-1.061 1.061l1.06-1.06Zm2.942 9.488H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232Zm9.098 4.828 1.415-1.414-1.061-1.06-1.414 1.413 1.06 1.061Zm3.182.354-.353.353 1.06 1.06.354-.353-1.06-1.06Zm-4.242-1.415a2.75 2.75 0 0 0 0 3.89l1.06-1.061a1.25 1.25 0 0 1 0-1.768l-1.06-1.06Zm4.242-.353a1.25 1.25 0 0 1 0 1.768l1.06 1.06a2.75 2.75 0 0 0 0-3.889l-1.06 1.06Zm1.06-1.06a2.75 2.75 0 0 0-3.888 0l1.06 1.06a1.25 1.25 0 0 1 1.768 0l1.06-1.06Zm-3.888 5.656-1.415 1.414 1.061 1.06 1.414-1.413-1.06-1.061Zm-3.182-.354.353-.353-1.06-1.06-.354.353 1.06 1.06Zm4.242 1.415a2.75 2.75 0 0 0 0-3.89l-1.06 1.061a1.25 1.25 0 0 1 0 1.768l1.06 1.06Zm-4.242.353a1.25 1.25 0 0 1 0-1.768l-1.06-1.06a2.75 2.75 0 0 0 0 3.889l1.06-1.06Zm-1.06 1.06a2.75 2.75 0 0 0 3.888 0l-1.06-1.06a1.25 1.25 0 0 1-1.768 0l-1.06 1.06Z' })));
};
var ForwardRef$36 = forwardRef(SvgRoofHomeLink);

var SvgRoofHomeLocationBig = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M16.305 15.604c0 2.283-2.153 6.199-4.305 6.199-2.152 0-4.305-3.916-4.305-6.199 0-2.282 1.928-4.132 4.305-4.132s4.305 1.85 4.305 4.132Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M13.291 15.346a1.291 1.291 0 1 1-2.582 0 1.291 1.291 0 0 1 2.582 0Z' })));
};
var ForwardRef$35 = forwardRef(SvgRoofHomeLocationBig);

var SvgRoofHomeLocation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543ZM12 19l-.48.576a.75.75 0 0 0 .96 0L12 19Zm4.18 2.25H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232ZM14.75 13.6c0 .453-.162.977-.46 1.543-.295.559-.697 1.11-1.114 1.606a15.38 15.38 0 0 1-1.625 1.648l-.025.022-.005.004h-.001c0 .001 0 .001 0 0L12 19l.48.576.002-.001.002-.002a.964.964 0 0 0 .01-.008l.033-.029a15.655 15.655 0 0 0 .537-.487c.342-.325.8-.787 1.26-1.334.458-.544.931-1.187 1.293-1.873.358-.68.633-1.452.633-2.242h-1.5ZM12 19l.48-.576-.006-.005-.025-.022a13.843 13.843 0 0 1-.479-.435 15.38 15.38 0 0 1-1.146-1.213c-.417-.495-.819-1.047-1.114-1.606-.298-.566-.46-1.09-.46-1.543h-1.5c0 .79.275 1.562.633 2.242.362.686.835 1.329 1.293 1.873a16.843 16.843 0 0 0 1.797 1.821l.033.029a.964.964 0 0 0 .01.008l.002.002h.001v.001L12 19Zm-2.75-5.4c0-1.04.378-1.73.875-2.17.514-.453 1.205-.68 1.875-.68v-1.5c-.987 0-2.046.33-2.868 1.056-.838.74-1.382 1.849-1.382 3.294h1.5ZM12 10.75c.67 0 1.361.227 1.875.68.497.44.875 1.13.875 2.17h1.5c0-1.445-.544-2.554-1.383-3.294C14.046 9.58 12.988 9.25 12 9.25v1.5Z' }),
        React.createElement("circle", { cx: 12, cy: 13, r: 1, fill: 'currentColor' })));
};
var ForwardRef$34 = forwardRef(SvgRoofHomeLocation);

var SvgRoofHomeLock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543Zm-5 10.005H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232ZM10 12.75h4v-1.5h-4v1.5ZM15.25 14v2h1.5v-2h-1.5ZM14 17.25h-4v1.5h4v-1.5ZM8.75 16v-2h-1.5v2h1.5ZM10 17.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 18.75v-1.5ZM15.25 16c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 16h-1.5ZM14 12.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 11.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 7.25 14h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm.75.75v-1h-1.5v1h1.5Zm2.5-1v1h1.5v-1h-1.5ZM12 9.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 8.25v1.5ZM10.75 11c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 11h1.5Z' })));
};
var ForwardRef$33 = forwardRef(SvgRoofHomeLock);

var SvgRoofHomeMail = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543Zm-10.845 1.084a.75.75 0 1 0-.67 1.342l.67-1.342Zm.77 1.224-.335.67.336-.67Zm1.79 0 .335.67-.336-.67Zm1.44.118a.75.75 0 1 0-.67-1.342l.67 1.342Zm1.845 7.579H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232ZM10 10.75h4v-1.5h-4v1.5ZM16.25 13v2h1.5v-2h-1.5ZM14 17.25h-4v1.5h4v-1.5ZM7.75 15v-2h-1.5v2h1.5ZM10 17.25A2.25 2.25 0 0 1 7.75 15h-1.5A3.75 3.75 0 0 0 10 18.75v-1.5ZM16.25 15A2.25 2.25 0 0 1 14 17.25v1.5A3.75 3.75 0 0 0 17.75 15h-1.5ZM14 10.75A2.25 2.25 0 0 1 16.25 13h1.5A3.75 3.75 0 0 0 14 9.25v1.5Zm-4-1.5A3.75 3.75 0 0 0 6.25 13h1.5A2.25 2.25 0 0 1 10 10.75v-1.5Zm-.335 4.42 1.105.554.671-1.342-1.106-.553-.67 1.342Zm3.565.554 1.105-.553-.67-1.342-1.106.553.67 1.342Zm-2.46 0a2.75 2.75 0 0 0 2.46 0l-.671-1.342a1.25 1.25 0 0 1-1.118 0l-.67 1.342Z' })));
};
var ForwardRef$32 = forwardRef(SvgRoofHomeMail);

var SvgRoofHomeMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543ZM15 14.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm7.18 8H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232ZM15 13.25H9v1.5h6v-1.5Z' })));
};
var ForwardRef$31 = forwardRef(SvgRoofHomeMinus);

var SvgRoofHomeNotification = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543ZM7.986 15.138l.513.547-.513-.547Zm8.028 0-.513.547.513-.547ZM11 18.25a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm3.18 1.5H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232Zm12.553 9.669H8.721v1.5h6.556v-1.5Zm-.695-3.917v1.234h1.5v-1.234h-1.5Zm-5.166 1.234v-1.234h-1.5v1.234h1.5Zm-.918 2.118a2.903 2.903 0 0 0 .918-2.118h-1.5a1.4 1.4 0 0 1-.444 1.024L8.5 15.685Zm6.084-2.118a2.9 2.9 0 0 0 .918 2.118l1.026-1.094a1.403 1.403 0 0 1-.444-1.024h-1.5Zm-5.86 2.683a.327.327 0 0 1-.224-.565l-1.026-1.094c-1.208 1.132-.406 3.159 1.25 3.159v-1.5Zm6.554 1.5c1.656 0 2.458-2.027 1.25-3.16L15.5 15.686a.327.327 0 0 1-.223.565v1.5Zm.806-5.417A4.083 4.083 0 0 0 12 8.25v1.5a2.583 2.583 0 0 1 2.583 2.583h1.5Zm-6.666 0A2.583 2.583 0 0 1 12 9.75v-1.5a4.083 4.083 0 0 0-4.083 4.083h1.5ZM11 19.75h2v-1.5h-2v1.5Z' })));
};
var ForwardRef$30 = forwardRef(SvgRoofHomeNotification);

var SvgRoofHomePower = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543ZM12.75 10a.75.75 0 0 0-1.5 0h1.5Zm-1.5 2a.75.75 0 0 0 1.5 0h-1.5Zm4.312-1.142a.75.75 0 0 0-1.124.992l1.124-.992Zm-6 .992a.75.75 0 0 0-1.124-.992l1.124.992Zm6.618 9.4H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232ZM11.25 10v2h1.5v-2h-1.5Zm4 4A3.25 3.25 0 0 1 12 17.25v1.5A4.75 4.75 0 0 0 16.75 14h-1.5ZM12 17.25A3.25 3.25 0 0 1 8.75 14h-1.5A4.75 4.75 0 0 0 12 18.75v-1.5Zm2.438-5.4c.506.574.812 1.325.812 2.15h1.5a4.735 4.735 0 0 0-1.188-3.142l-1.124.992ZM8.75 14c0-.825.306-1.576.812-2.15l-1.124-.992A4.735 4.735 0 0 0 7.25 14h1.5Z' })));
};
var ForwardRef$2$ = forwardRef(SvgRoofHomePower);

var SvgRoofHomeRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543Zm-7.589 5.407a.75.75 0 0 0 1.06-1.061l-1.06 1.06Zm-3.182-5.304a.75.75 0 1 0-1.06 1.061l1.06-1.06Zm-1.06 4.243a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm5.303-3.182a.75.75 0 1 0-1.061-1.06l1.06 1.06Zm1.528 8.841H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232Zm11.927 9.01-4.243-4.243-1.06 1.061 4.242 4.243 1.06-1.061Zm-4.243 1.06 4.243-4.242-1.061-1.06-4.243 4.242 1.061 1.06Z' })));
};
var ForwardRef$2_ = forwardRef(SvgRoofHomeRemove);

var SvgRoofHomeSetting = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543Zm-5.718.409-.64.391.64-.391Zm.424.692.64-.391-.64.391Zm-7.348 4 .64-.391-.64.391Zm-.424-.692-.64.391.64-.391Zm.31-1.093-.358-.659.358.659Zm1.273 2.078-.358-.659.358.66Zm5.879-3.2-.359-.659.359.66Zm-1.273-2.078.358.659-.358-.66Zm-6.19.985-.639-.391.64.391Zm.425-.692.64.391-.64-.391Zm7.348 4 .64.391-.64-.391Zm-.424.692-.64-.391.64.391Zm-1.16.293.36-.659-.36.66Zm1.274-2.078.358-.659-.358.659Zm-5.879-3.2-.358.659.358-.66Zm-1.273 2.078.359-.659-.359.66Zm5.834-2.054-.359-.658.359.658Zm0 5.23-.359.658.359-.658Zm-4.516 0 .359.658-.359-.658Zm0-5.23.359-.658-.359.658Zm6.438 9.865H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232Zm8.85 4.169h.85v-1.5h-.85v1.5Zm.85 6.5h-.85v1.5h.85v-1.5Zm-.85 0a.123.123 0 0 1-.085-.03.052.052 0 0 1-.012-.016V17.2h-1.5c0 .897.757 1.55 1.598 1.55v-1.5Zm.948-.05-.001.004a.05.05 0 0 1-.012.016.123.123 0 0 1-.086.03v1.5c.84 0 1.599-.653 1.599-1.55h-1.5Zm-.099-6.45c.042 0 .07.015.086.03a.05.05 0 0 1 .012.016v.004h1.5c0-.897-.757-1.55-1.598-1.55v1.5Zm-.848-1.5c-.84 0-1.599.653-1.599 1.55h1.5l.001-.004a.052.052 0 0 1 .012-.016.123.123 0 0 1 .086-.03v-1.5Zm3.246 2.795.425.693 1.279-.783-.424-.693-1.28.783Zm-5.644 3.91-.425-.693-1.279.783.424.693 1.28-.783Zm-.425-.693a.031.031 0 0 1-.003-.006v-.004l.007-.012a.084.084 0 0 1 .026-.02l-.717-1.318c-.763.415-1.062 1.376-.592 2.143l1.28-.783Zm.586.718a.14.14 0 0 1-.102.012.105.105 0 0 1-.06-.037l-1.279.783c.453.74 1.418.963 2.158.56l-.717-1.317Zm5.908-3.242a.025.025 0 0 1 .003.007v.003a.033.033 0 0 1-.007.012.083.083 0 0 1-.026.02l.717 1.318c.763-.415 1.062-1.376.592-2.143l-1.28.783Zm.855-1.476c-.453-.74-1.418-.963-2.158-.56l.717 1.318a.14.14 0 0 1 .102-.012c.036.01.053.027.06.037l1.279-.783Zm-7.349 1.476.425-.693-1.28-.783-.424.693 1.28.783Zm6.494 2.524-.425.693 1.28.783.424-.693-1.28-.783Zm-.425.693c-.006.01-.023.028-.059.037a.14.14 0 0 1-.101-.012l-.718 1.318c.74.403 1.705.18 2.158-.56l-1.28-.783Zm.395-.736a.085.085 0 0 1 .026.02c.004.006.006.01.006.013l.001.002v.002l-.003.006 1.279.783c.47-.767.171-1.728-.592-2.143l-.717 1.318Zm-6.04-3.174a.1.1 0 0 1 .06-.037.14.14 0 0 1 .102.012l.717-1.318c-.74-.402-1.705-.18-2.158.56l1.28.783Zm-1.703-.09c-.47.767-.171 1.728.592 2.143l.717-1.318a.084.084 0 0 1-.026-.02.034.034 0 0 1-.007-.012.012.012 0 0 1 0-.003l.003-.007-1.279-.783Zm7.142.089.046-.024-.718-1.318-.045.025.717 1.317Zm.045 3.936-.045-.024-.717 1.317.045.025.717-1.317Zm-5.277-.024-.045.024.717 1.318.045-.025-.717-1.317Zm-.045-3.936.045.024.717-1.317-.045-.025-.717 1.318Zm.638-1.22a.09.09 0 0 1 .041-.072.09.09 0 0 1 .083-.002l-.717 1.318a1.416 1.416 0 0 0 2.093-1.244h-1.5Zm-1.911 3.298a.112.112 0 0 1 0-.196l.717 1.318a1.388 1.388 0 0 0 0-2.44l-.717 1.318Zm2.035 3.175a.09.09 0 0 1-.083-.001.09.09 0 0 1-.04-.072h1.5a1.416 1.416 0 0 0-2.094-1.244l.717 1.317Zm3.922-.073a.09.09 0 0 1-.041.072.09.09 0 0 1-.083.002l.717-1.318a1.416 1.416 0 0 0-2.093 1.244h1.5Zm1.911-3.298a.112.112 0 0 1 0 .196l-.717-1.318a1.388 1.388 0 0 0 0 2.44l.717-1.318ZM13.9 10.727a.09.09 0 0 1 .083.001.09.09 0 0 1 .04.072h-1.5a1.416 1.416 0 0 0 2.094 1.244l-.717-1.317ZM12.75 14a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z' })));
};
var ForwardRef$2Z = forwardRef(SvgRoofHomeSetting);

var SvgRoofHomeShare = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543Zm-5 10.005H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232ZM9 14.75a.75.75 0 0 1-.75-.75h-1.5A2.25 2.25 0 0 0 9 16.25v-1.5ZM8.25 14a.75.75 0 0 1 .75-.75v-1.5A2.25 2.25 0 0 0 6.75 14h1.5Zm7.5-3.5a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-1.5 0a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 15 8.25v1.5Zm.75 7.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5A2.25 2.25 0 0 0 15 19.75v-1.5Zm0-1.5a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 15 15.25v1.5Zm0-5.5a.75.75 0 0 1-.671-.415l-1.341.672A2.25 2.25 0 0 0 15 12.75v-1.5Zm-.671-.415a.743.743 0 0 1-.079-.335h-1.5c0 .36.085.703.238 1.007l1.34-.672ZM14.25 17.5c0-.122.028-.235.079-.335l-1.341-.672a2.244 2.244 0 0 0-.238 1.007h1.5Zm.079-.335A.75.75 0 0 1 15 16.75v-1.5a2.25 2.25 0 0 0-2.012 1.243l1.34.672Zm-3.578-3.207 3.316-2.158-.818-1.258L9.933 12.7l.818 1.258ZM9 13.25a.75.75 0 0 1 .671.415l1.341-.672A2.25 2.25 0 0 0 9 11.75v1.5Zm.671.415c.05.1.079.213.079.335h1.5c0-.36-.085-.703-.238-1.007l-1.34.672Zm.262 1.635 3.316 2.158.818-1.258-3.316-2.158-.818 1.258ZM9.75 14a.744.744 0 0 1-.079.335l1.341.672c.153-.304.238-.647.238-1.007h-1.5Zm-.079.335A.75.75 0 0 1 9 14.75v1.5a2.25 2.25 0 0 0 2.012-1.243l-1.34-.672Z' })));
};
var ForwardRef$2Y = forwardRef(SvgRoofHomeShare);

var SvgRoofHomeShield = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543Zm-12.074-.798.336.67-.336-.67Zm2-1 .335.671-.335-.67Zm1.788 0 .336-.67-.336.67Zm1.991.996-.335.67.335-.67Zm-6.857 1.795.749-.037-.75.037Zm2.859 5.95.463-.59-.463.59Zm2.226 0 .465.588-.465-.589Zm2.851-5.941.75.04-.75-.04Zm.216 9.003H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232Zm6.717 4.537 1.999-1-.67-1.342-2 1 .67 1.342Zm3.117-1 1.99.995.671-1.341-1.99-.996-.671 1.342Zm-5.28 2.156c.076 1.567.311 2.785.827 3.83.52 1.054 1.29 1.865 2.318 2.673l.927-1.18c-.93-.73-1.515-1.377-1.9-2.156-.387-.786-.603-1.774-.674-3.24l-1.498.073Zm6.299 6.502c1.033-.815 1.796-1.633 2.31-2.686.51-1.045.742-2.256.825-3.803l-1.498-.08c-.078 1.45-.29 2.435-.675 3.225-.381.78-.962 1.434-1.892 2.166l.93 1.178Zm-3.154 0c.923.727 2.229.73 3.154 0l-.93-1.178a1.052 1.052 0 0 1-1.297 0l-.928 1.179Zm1.017-8.658a1.25 1.25 0 0 1 1.118 0l.67-1.342a2.75 2.75 0 0 0-2.459 0l.671 1.342Zm3.109.995c.434.218.69.651.665 1.094l1.498.08c.058-1.08-.562-2.05-1.493-2.515l-.67 1.341ZM8.77 9.776c-.924.462-1.544 1.422-1.492 2.498l1.498-.073c-.021-.439.233-.867.665-1.083l-.67-1.342Z' })));
};
var ForwardRef$2X = forwardRef(SvgRoofHomeShield);

var SvgRoofHomeUpload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543ZM9.47 10.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm1.823-.763-.53-.53.53.53Zm1.414 0-.53.53.53-.53Zm.763 1.823a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM12.75 10a.75.75 0 0 0-1.5 0h1.5Zm-1.5 7a.75.75 0 0 0 1.5 0h-1.5Zm4.93 4.25H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232Zm7.805 4.95 1.293-1.294-1.06-1.06L9.47 10.47l1.06 1.06Zm1.647-1.294 1.293 1.293 1.06-1.06-1.293-1.293-1.06 1.06Zm-.354 0a.25.25 0 0 1 .354 0l1.06-1.06a1.75 1.75 0 0 0-2.474 0l1.06 1.06ZM11.25 10v7h1.5v-7h-1.5Z' })));
};
var ForwardRef$2W = forwardRef(SvgRoofHomeUpload);

var SvgRoofHomeWarning = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543ZM11.25 14a.75.75 0 0 0 1.5 0h-1.5Zm1.5-5a.75.75 0 0 0-1.5 0h1.5Zm3.43 12.25H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232ZM12.75 14V9h-1.5v5h1.5Zm.25 3a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z' })));
};
var ForwardRef$2V = forwardRef(SvgRoofHomeWarning);

var SvgRoofHomeWave = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543ZM7 14.25a.75.75 0 0 0 0 1.5v-1.5Zm10 .5a.75.75 0 0 0 0-1.5v1.5Zm-.82 6.5H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232ZM7 15.75h.5v-1.5H7v1.5Zm2.75-2.25v-1h-1.5v1h1.5Zm1.5-1v3h1.5v-3h-1.5Zm5.25 2.25h.5v-1.5h-.5v1.5Zm-.75.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm-2.25 2.25a2.25 2.25 0 0 0 2.25-2.25h-1.5a.75.75 0 0 1-.75.75v1.5Zm-2.25-2.25a2.25 2.25 0 0 0 2.25 2.25v-1.5a.75.75 0 0 1-.75-.75h-1.5Zm-.75-3.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm-.75.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5ZM7.5 15.75a2.25 2.25 0 0 0 2.25-2.25h-1.5a.75.75 0 0 1-.75.75v1.5Z' })));
};
var ForwardRef$2U = forwardRef(SvgRoofHomeWave);

var SvgRoofHomeWifi = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M12.75 17a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.962-3.712a.75.75 0 1 0 1.06-1.061l-1.06 1.06Zm-6.364 1.06a.75.75 0 0 0 1.061 1.061l-1.06-1.06Zm-2.121-2.121a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.364 3.182a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM3.153 7.197l.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543ZM12 11.75a5.23 5.23 0 0 1 3.712 1.538l1.06-1.061A6.731 6.731 0 0 0 12 10.25v1.5Zm-1.591 3.659A2.24 2.24 0 0 1 12 14.75v-1.5a3.74 3.74 0 0 0-2.652 1.098l1.061 1.061Zm-2.121-2.121A5.231 5.231 0 0 1 12 11.75v-1.5a6.731 6.731 0 0 0-4.773 1.977l1.06 1.06ZM12 14.75a2.24 2.24 0 0 1 1.591.659l1.06-1.06A3.74 3.74 0 0 0 12 13.25v1.5Zm4.18 6.5H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232Z' })));
};
var ForwardRef$2T = forwardRef(SvgRoofHomeWifi);

var SvgRoofHome = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543ZM8.293 15.31a.75.75 0 1 0-.586 1.38l.586-1.38Zm8.004 1.379a.75.75 0 0 0-.594-1.378l.594 1.378Zm-.117 4.561H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232Zm4.982 10.11c1.63.69 2.97 1.062 4.335 1.059 1.366-.003 2.68-.382 4.255-1.061l-.594-1.378c-1.49.643-2.589.936-3.664.939-1.077.003-2.204-.286-3.746-.94l-.586 1.38Z' })));
};
var ForwardRef$2S = forwardRef(SvgRoofHome);

var SvgRotateLock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M10 10V9a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v1m0 0h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a10 10 0 0 0 8.96-5.556' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm22 12-3-1' })));
};
var ForwardRef$2R = forwardRef(SvgRotateLock);

var SvgSafeBoxStar = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 20, height: 20, x: 2, y: 2, stroke: 'currentColor', strokeWidth: 1.5, rx: 4 }),
        React.createElement("circle", { cx: 4, cy: 4, r: 4, stroke: 'currentColor', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 8 16)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 8V6m0 12v-2m3.598-6.5 1.732-1m-10.66 7 1.732-1m7.196 0 1.732 1m-10.66-7 1.732 1' })));
};
var ForwardRef$2Q = forwardRef(SvgSafeBoxStar);

var SvgSafeBox = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 20, height: 20, x: 2, y: 2, stroke: 'currentColor', strokeWidth: 1.5, rx: 4 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 9V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M13.5 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M13.5 12H18' })));
};
var ForwardRef$2P = forwardRef(SvgSafeBox);

var SvgScreenRotate = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 8.5, height: 14, x: 4.045, y: 10.056, stroke: 'currentColor', strokeWidth: 1.5, rx: 2, transform: 'rotate(-45 4.045 10.056)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M14 3.223A9.013 9.013 0 0 1 20.777 10L22 8M10 20.777A9.013 9.013 0 0 1 3.223 14L2 16' })));
};
var ForwardRef$2O = forwardRef(SvgScreenRotate);

var SvgScreenshot = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 10, height: 10, x: 7, y: 7, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M9 3H5a2 2 0 0 0-2 2v4m12 12h4a2 2 0 0 0 2-2v-4' })));
};
var ForwardRef$2N = forwardRef(SvgScreenshot);

var SvgSdStorage = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M20 18V6a4 4 0 0 0-4-4h-5.343a4 4 0 0 0-2.829 1.172L5.172 5.828A4 4 0 0 0 4 8.657V18a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M17 7V5m-3 2V5m-3 2V5' })));
};
var ForwardRef$2M = forwardRef(SvgSdStorage);

var SvgSecurity = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M10.375 2.722 5.378 4.943c-1.446.643-2.4 2.082-2.308 3.66.36 6.175 2.168 8.893 6.866 12.074a3.686 3.686 0 0 0 4.129 0c4.712-3.197 6.456-5.954 6.847-12.052.102-1.59-.854-3.044-2.31-3.69l-4.977-2.213a4 4 0 0 0-3.25 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm9 12 1.753 1.402a1 1 0 0 0 1.377-.122L15 10' })));
};
var ForwardRef$2L = forwardRef(SvgSecurity);

var SvgSensor = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.773 7.227a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm2.828-2.829a.75.75 0 0 0-1.06 1.061l1.06-1.06Zm-3.889 11.314a.75.75 0 1 0 1.061 1.06l-1.06-1.06Zm2.829 2.829a.75.75 0 0 0 1.06 1.06l-1.06-1.06ZM4.399 19.6a.75.75 0 1 0 1.06-1.06L4.4 19.6Zm2.828-2.828a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm1.06-8.486a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM5.46 5.46A.75.75 0 1 0 4.4 4.4l1.06 1.06ZM13.251 12c0 .691-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 12h-1.5ZM12 13.25A1.25 1.25 0 0 1 10.75 12h-1.5A2.75 2.75 0 0 0 12 14.75v-1.5ZM10.75 12c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 12h1.5ZM12 10.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 9.25v1.5Zm3.712-2.462A5.231 5.231 0 0 1 17.25 12h1.5a6.731 6.731 0 0 0-1.977-4.773l-1.06 1.06Zm2.829-2.828A9.219 9.219 0 0 1 21.25 12h1.5c0-2.968-1.204-5.656-3.149-7.6l-1.06 1.06ZM17.25 12c0 1.45-.587 2.762-1.538 3.713l1.061 1.06A6.73 6.73 0 0 0 18.75 12h-1.5Zm4 0a9.218 9.218 0 0 1-2.71 6.542l1.061 1.06A10.719 10.719 0 0 0 22.75 12h-1.5ZM5.46 18.542A9.219 9.219 0 0 1 2.75 12h-1.5c0 2.968 1.204 5.657 3.149 7.601l1.06-1.06Zm2.828-2.829A5.231 5.231 0 0 1 6.75 12h-1.5a6.73 6.73 0 0 0 1.977 4.773l1.06-1.06ZM6.75 12c0-1.45.587-2.762 1.538-3.713l-1.061-1.06A6.731 6.731 0 0 0 5.25 12h1.5Zm-4 0a9.219 9.219 0 0 1 2.71-6.541l-1.061-1.06a10.719 10.719 0 0 0-3.149 7.6h1.5Z' })));
};
var ForwardRef$2K = forwardRef(SvgSensor);

var SvgSetting = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12.848 4h-1.697c-.937 0-1.696.716-1.696 1.6a1.333 1.333 0 0 1-1.97 1.17l-.09-.048c-.812-.442-1.85-.18-2.319.585l-.848 1.386c-.469.765-.19 1.744.62 2.186.89.483.89 1.759 0 2.242-.81.442-1.089 1.42-.62 2.186l.848 1.386c.469.765 1.507 1.027 2.318.585l.09-.049c.889-.483 1.97.16 1.97 1.171 0 .884.76 1.6 1.697 1.6h1.697c.938 0 1.697-.716 1.697-1.6a1.333 1.333 0 0 1 1.97-1.17l.09.049c.812.441 1.85.18 2.319-.586l.848-1.386c.469-.765.19-1.744-.62-2.186a1.277 1.277 0 0 1 0-2.242c.81-.442 1.089-1.42.62-2.186l-.848-1.386c-.469-.765-1.507-1.027-2.318-.585l-.09.049a1.333 1.333 0 0 1-1.97-1.171c0-.884-.76-1.6-1.697-1.6Z' }),
        React.createElement("circle", { cx: 12, cy: 12, r: 3, stroke: 'currentColor', strokeWidth: 1.5 })));
};
var ForwardRef$2J = forwardRef(SvgSetting);

var SvgShield = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm9 12 1.753 1.402a1 1 0 0 0 1.377-.122L15 10' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M10.375 2.722 5.378 4.943c-1.446.643-2.4 2.082-2.308 3.66.36 6.175 2.168 8.893 6.866 12.074a3.686 3.686 0 0 0 4.129 0c4.712-3.197 6.456-5.954 6.847-12.052.102-1.59-.854-3.044-2.31-3.69l-4.977-2.213a4 4 0 0 0-3.25 0Z' })));
};
var ForwardRef$2I = forwardRef(SvgShield);

var SvgShipping = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 19, cy: 5, r: 1, fill: 'currentColor' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 5c0 1.546-1.469 3.376-2.35 4.336a.873.873 0 0 1-1.3 0C17.47 8.376 16 6.546 16 5c0-2.21 1.343-3 3-3s3 .79 3 3ZM7 14a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M11 14h2m-8.154 3H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h10' })));
};
var ForwardRef$2H = forwardRef(SvgShipping);

var SvgShoppingBagAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M9 7h-.75H9Zm.75-1a.75.75 0 0 0-1.5 0h1.5Zm6 0a.75.75 0 0 0-1.5 0h1.5ZM15 7h.75H15ZM9.75 7V6h-1.5v1h1.5Zm4.5-1v1h1.5V6h-1.5ZM12 9.25A2.25 2.25 0 0 1 9.75 7h-1.5A3.75 3.75 0 0 0 12 10.75v-1.5Zm0 1.5A3.75 3.75 0 0 0 15.75 7h-1.5A2.25 2.25 0 0 1 12 9.25v1.5ZM4.443 6.342l-.74-.123.74.123Zm-1.667 10 .74.124-.74-.124Zm16.781-10 .74-.123-.74.123Zm.37 6.781a.75.75 0 1 0 1.48-.246l-1.48.246ZM13 21.75a.75.75 0 0 0 0-1.5v1.5Zm-4.611-18h7.223v-1.5H8.389v1.5ZM3.703 6.22l-1.667 10 1.48.246 1.667-10-1.48-.247Zm15.114.246 1.11 6.657 1.48-.246-1.11-6.658-1.48.247ZM13 20.25H6.722v1.5H13v-1.5Zm-4.611-18a4.75 4.75 0 0 0-4.686 3.97l1.48.246A3.25 3.25 0 0 1 8.389 3.75v-1.5Zm7.223 1.5a3.25 3.25 0 0 1 3.205 2.716l1.48-.247A4.75 4.75 0 0 0 15.61 2.25v1.5ZM2.035 16.22a4.75 4.75 0 0 0 4.686 5.53v-1.5a3.25 3.25 0 0 1-3.206-3.784l-1.48-.247ZM19.75 15a.75.75 0 0 0-1.5 0h1.5Zm-1.5 6a.75.75 0 0 0 1.5 0h-1.5Zm0-6v6h1.5v-6h-1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M22 18.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm6 0h-6v1.5h6v-1.5Z' })));
};
var ForwardRef$2G = forwardRef(SvgShoppingBagAdd);

var SvgShoppingBagCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M9 7h-.75H9Zm.75-1a.75.75 0 0 0-1.5 0h1.5Zm6 0a.75.75 0 0 0-1.5 0h1.5ZM15 7h.75H15ZM9.75 7V6h-1.5v1h1.5Zm4.5-1v1h1.5V6h-1.5ZM12 9.25A2.25 2.25 0 0 1 9.75 7h-1.5A3.75 3.75 0 0 0 12 10.75v-1.5Zm0 1.5A3.75 3.75 0 0 0 15.75 7h-1.5A2.25 2.25 0 0 1 12 9.25v1.5ZM4.443 6.342l-.74-.123.74.123Zm-1.667 10 .74.124-.74-.124Zm16.781-10 .74-.123-.74.123Zm.37 6.781a.75.75 0 1 0 1.48-.246l-1.48.246ZM13 21.75a.75.75 0 0 0 0-1.5v1.5Zm-4.611-18h7.223v-1.5H8.389v1.5ZM3.703 6.22l-1.667 10 1.48.246 1.667-10-1.48-.247Zm15.114.246 1.11 6.657 1.48-.246-1.11-6.658-1.48.247ZM13 20.25H6.722v1.5H13v-1.5Zm-4.611-18a4.75 4.75 0 0 0-4.686 3.97l1.48.246A3.25 3.25 0 0 1 8.389 3.75v-1.5Zm7.223 1.5a3.25 3.25 0 0 1 3.205 2.716l1.48-.247A4.75 4.75 0 0 0 15.61 2.25v1.5ZM2.035 16.22a4.75 4.75 0 0 0 4.686 5.53v-1.5a3.25 3.25 0 0 1-3.206-3.784l-1.48-.247Zm14.433 2.194a.75.75 0 0 0-.937 1.172l.937-1.172Zm1.285 1.988.468-.585-.468.585Zm1.377-.122-.564-.494.564.494Zm3.434-2.786a.75.75 0 1 0-1.128-.988l1.128.988Zm-7.033 2.092 1.753 1.402.937-1.171-1.753-1.403-.937 1.172Zm4.164 1.188 2.87-3.28-1.13-.988-2.87 3.28 1.13.988Zm-2.41.214a1.75 1.75 0 0 0 2.41-.214l-1.13-.988a.25.25 0 0 1-.344.03l-.937 1.172Z' })));
};
var ForwardRef$2F = forwardRef(SvgShoppingBagCheck);

var SvgShoppingBagFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M9 7h-.75H9Zm.75-1a.75.75 0 0 0-1.5 0h1.5Zm6 0a.75.75 0 0 0-1.5 0h1.5ZM15 7h.75H15ZM9.75 7V6h-1.5v1h1.5Zm4.5-1v1h1.5V6h-1.5ZM12 9.25A2.25 2.25 0 0 1 9.75 7h-1.5A3.75 3.75 0 0 0 12 10.75v-1.5Zm0 1.5A3.75 3.75 0 0 0 15.75 7h-1.5A2.25 2.25 0 0 1 12 9.25v1.5ZM4.443 6.342l-.74-.123.74.123Zm-1.667 10 .74.124-.74-.124Zm16.781-10 .74-.123-.74.123Zm.37 6.781a.75.75 0 1 0 1.48-.246l-1.48.246ZM13 21.75a.75.75 0 0 0 0-1.5v1.5Zm-4.611-18h7.223v-1.5H8.389v1.5ZM3.703 6.22l-1.667 10 1.48.246 1.667-10-1.48-.247Zm15.114.246 1.11 6.657 1.48-.246-1.11-6.658-1.48.247ZM13 20.25H6.722v1.5H13v-1.5Zm-4.611-18a4.75 4.75 0 0 0-4.686 3.97l1.48.246A3.25 3.25 0 0 1 8.389 3.75v-1.5Zm7.223 1.5a3.25 3.25 0 0 1 3.205 2.716l1.48-.247A4.75 4.75 0 0 0 15.61 2.25v1.5ZM2.035 16.22a4.75 4.75 0 0 0 4.686 5.53v-1.5a3.25 3.25 0 0 1-3.206-3.784l-1.48-.247Zm16.222-.038-.53.53a.75.75 0 0 0 1.06 0l-.53-.53Zm.265-.265-.53-.53.53.53Zm-.53 0-.53.53.53-.53Zm-2.651 2.651.53-.53-.53.53Zm1.856 1.857-.53.53.53-.53Zm2.121 0 .53.53-.53-.53Zm1.856-1.857-.53-.53.53.53Zm-5.833-2.651.53.53-.53-.53Zm3.447.795.265-.265-1.06-1.06-.266.265 1.06 1.06Zm-1.326-.265.265.265 1.06-1.06-.264-.265-1.061 1.06ZM14.81 19.1l1.856 1.856 1.061-1.06-1.856-1.857-1.06 1.06Zm5.038 1.856 1.857-1.856-1.061-1.06-1.856 1.855 1.06 1.06Zm.796-4.508c.44.44.44 1.152 0 1.591l1.06 1.06a2.625 2.625 0 0 0 0-3.711l-1.06 1.06Zm1.06-1.06a2.625 2.625 0 0 0-3.712 0l1.06 1.06c.44-.44 1.152-.44 1.592 0l1.06-1.06Zm-5.833 1.06c.44-.44 1.152-.44 1.59 0l1.062-1.06a2.625 2.625 0 0 0-3.713 0l1.06 1.06Zm.795 4.508a2.25 2.25 0 0 0 3.182 0l-1.06-1.06a.75.75 0 0 1-1.061 0l-1.06 1.06Zm-1.856-5.568a2.625 2.625 0 0 0 0 3.712l1.06-1.06a1.125 1.125 0 0 1 0-1.592l-1.06-1.06Z' })));
};
var ForwardRef$2E = forwardRef(SvgShoppingBagFavourite);

var SvgShoppingBagMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M9 7h-.75H9Zm.75-1a.75.75 0 0 0-1.5 0h1.5Zm6 0a.75.75 0 0 0-1.5 0h1.5ZM15 7h.75H15ZM9.75 7V6h-1.5v1h1.5Zm4.5-1v1h1.5V6h-1.5ZM12 9.25A2.25 2.25 0 0 1 9.75 7h-1.5A3.75 3.75 0 0 0 12 10.75v-1.5Zm0 1.5A3.75 3.75 0 0 0 15.75 7h-1.5A2.25 2.25 0 0 1 12 9.25v1.5ZM4.443 6.342l-.74-.123.74.123Zm-1.667 10 .74.124-.74-.124Zm16.781-10 .74-.123-.74.123Zm.37 6.781a.75.75 0 1 0 1.48-.246l-1.48.246ZM13 21.75a.75.75 0 0 0 0-1.5v1.5Zm-4.611-18h7.223v-1.5H8.389v1.5ZM3.703 6.22l-1.667 10 1.48.246 1.667-10-1.48-.247Zm15.114.246 1.11 6.657 1.48-.246-1.11-6.658-1.48.247ZM13 20.25H6.722v1.5H13v-1.5Zm-4.611-18a4.75 4.75 0 0 0-4.686 3.97l1.48.246A3.25 3.25 0 0 1 8.389 3.75v-1.5Zm7.223 1.5a3.25 3.25 0 0 1 3.205 2.716l1.48-.247A4.75 4.75 0 0 0 15.61 2.25v1.5ZM2.035 16.22a4.75 4.75 0 0 0 4.686 5.53v-1.5a3.25 3.25 0 0 1-3.206-3.784l-1.48-.247ZM22 17.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm6 0h-6v1.5h6v-1.5Z' })));
};
var ForwardRef$2D = forwardRef(SvgShoppingBagMinus);

var SvgShoppingBagRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M9 7h-.75H9Zm.75-1a.75.75 0 0 0-1.5 0h1.5Zm6 0a.75.75 0 0 0-1.5 0h1.5ZM15 7h.75H15ZM9.75 7V6h-1.5v1h1.5Zm4.5-1v1h1.5V6h-1.5ZM12 9.25A2.25 2.25 0 0 1 9.75 7h-1.5A3.75 3.75 0 0 0 12 10.75v-1.5Zm0 1.5A3.75 3.75 0 0 0 15.75 7h-1.5A2.25 2.25 0 0 1 12 9.25v1.5ZM4.443 6.342l-.74-.123.74.123Zm-1.667 10 .74.124-.74-.124Zm16.781-10 .74-.123-.74.123Zm.37 6.781a.75.75 0 1 0 1.48-.246l-1.48.246ZM13 21.75a.75.75 0 0 0 0-1.5v1.5Zm-4.611-18h7.223v-1.5H8.389v1.5ZM3.703 6.22l-1.667 10 1.48.246 1.667-10-1.48-.247Zm15.114.246 1.11 6.657 1.48-.246-1.11-6.658-1.48.247ZM13 20.25H6.722v1.5H13v-1.5Zm-4.611-18a4.75 4.75 0 0 0-4.686 3.97l1.48.246A3.25 3.25 0 0 1 8.389 3.75v-1.5Zm7.223 1.5a3.25 3.25 0 0 1 3.205 2.716l1.48-.247A4.75 4.75 0 0 0 15.61 2.25v1.5ZM2.035 16.22a4.75 4.75 0 0 0 4.686 5.53v-1.5a3.25 3.25 0 0 1-3.206-3.784l-1.48-.247Zm19.617.189a.75.75 0 0 0-1.061-1.06l1.06 1.06Zm-5.304 3.182a.75.75 0 1 0 1.061 1.06l-1.06-1.06Zm4.243-4.243-4.243 4.243 1.061 1.06 4.243-4.242-1.061-1.06Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M20.591 20.652a.75.75 0 0 0 1.06-1.061l-1.06 1.06Zm-3.182-5.304a.75.75 0 1 0-1.06 1.061l1.06-1.06Zm4.243 4.243-4.243-4.243-1.06 1.061 4.242 4.243 1.06-1.061Z' })));
};
var ForwardRef$2C = forwardRef(SvgShoppingBagRemove);

var SvgShoppingBag = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M9 7h.75H9Zm.75-1a.75.75 0 0 0-1.5 0h1.5Zm6 0a.75.75 0 0 0-1.5 0h1.5ZM15 7h.75H15Zm-3 3v.75V10ZM9.75 7V6h-1.5v1h1.5Zm4.5-1v1h1.5V6h-1.5ZM12 9.25A2.25 2.25 0 0 1 9.75 7h-1.5A3.75 3.75 0 0 0 12 10.75v-1.5Zm0 1.5A3.75 3.75 0 0 0 15.75 7h-1.5A2.25 2.25 0 0 1 12 9.25v1.5Zm7.557-4.408.74-.123-.74.123Zm1.667 10-.74.124.74-.124Zm-16.781-10-.74-.123.74.123Zm-1.667 10 .74.124-.74-.124ZM8.39 3.75h7.223v-1.5H8.389v1.5Zm10.428 2.716 1.667 10 1.48-.247-1.667-10-1.48.247Zm-1.54 13.784H6.722v1.5h10.556v-1.5ZM3.703 6.22l-1.667 10 1.48.246 1.667-10-1.48-.247ZM8.39 2.25a4.75 4.75 0 0 0-4.686 3.97l1.48.246A3.25 3.25 0 0 1 8.389 3.75v-1.5Zm7.223 1.5a3.25 3.25 0 0 1 3.205 2.716l1.48-.247A4.75 4.75 0 0 0 15.61 2.25v1.5Zm4.872 12.716a3.25 3.25 0 0 1-3.206 3.784v1.5a4.75 4.75 0 0 0 4.686-5.53l-1.48.246ZM6.722 20.25a3.25 3.25 0 0 1-3.206-3.784l-1.48-.247a4.75 4.75 0 0 0 4.686 5.531v-1.5Z' })));
};
var ForwardRef$2B = forwardRef(SvgShoppingBag);

var SvgShoppingBasketAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M12.75 13a.75.75 0 0 0-1.5 0h1.5Zm-1.5 6a.75.75 0 0 0 1.5 0h-1.5Zm0-6v6h1.5v-6h-1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M15 16.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm6 0H9v1.5h6v-1.5Zm4.816 3.705.728.179-.728-.18Zm1.966-8-.728-.18.728.18Zm-17.597 8-.729.179.729-.18Zm-1.967-8 .728-.18-.728.18ZM15.931 21.25H8.07v1.5h7.862v-1.5ZM6.102 6.75h11.796v-1.5H6.102v1.5Zm14.442 12.384 1.966-8-1.456-.358-1.967 8 1.457.358Zm-15.631-.358-1.967-8-1.456.358 1.966 8 1.457-.358ZM15.93 22.75a4.75 4.75 0 0 0 4.613-3.616l-1.457-.358a3.25 3.25 0 0 1-3.156 2.474v1.5Zm-7.862-1.5a3.25 3.25 0 0 1-3.156-2.474l-1.457.358A4.75 4.75 0 0 0 8.07 22.75v-1.5Zm-1.967-16C3.02 5.25.754 8.14 1.49 11.134l1.456-.358A3.25 3.25 0 0 1 6.102 6.75v-1.5Zm11.796 1.5a3.25 3.25 0 0 1 3.156 4.026l1.456.358c.736-2.994-1.53-5.884-4.612-5.884v1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M3 9.25a.75.75 0 0 0 0 1.5v-1.5Zm18 1.5a.75.75 0 0 0 0-1.5v1.5Zm-18 0h18v-1.5H3v1.5Zm6.6-8.3a.75.75 0 0 0-1.2-.9l1.2.9Zm-4.2 3.1a.75.75 0 1 0 1.2.9l-1.2-.9Zm3-4-3 4 1.2.9 3-4-1.2-.9Zm7.2 0a.75.75 0 0 0-1.2.9l1.2-.9Zm1.8 4.9a.75.75 0 1 0 1.2-.9l-1.2.9Zm-3-4 3 4 1.2-.9-3-4-1.2.9Z' })));
};
var ForwardRef$2A = forwardRef(SvgShoppingBasketAdd);

var SvgShoppingBasketArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M14.53 17.53a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-3.237.763.53-.53-.53.53Zm-.763-1.823a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM12.75 13a.75.75 0 0 0-1.5 0h1.5Zm-1.5 5a.75.75 0 0 0 1.5 0h-1.5Zm2.22-1.53-1.293 1.293 1.06 1.06 1.293-1.293-1.06-1.06Zm-1.647 1.293L10.53 16.47l-1.06 1.06 1.293 1.293 1.06-1.06Zm.354 0a.25.25 0 0 1-.354 0l-1.06 1.06a1.75 1.75 0 0 0 2.474 0l-1.06-1.06ZM11.25 13v5h1.5v-5h-1.5Zm8.566 5.955.728.179-.728-.18Zm1.966-8-.728-.18.728.18Zm-17.597 8-.729.179.729-.18Zm-1.967-8 .728-.18-.728.18ZM15.931 21.25H8.07v1.5h7.862v-1.5ZM6.102 6.75h11.796v-1.5H6.102v1.5Zm14.442 12.384 1.966-8-1.456-.358-1.967 8 1.457.358Zm-15.631-.358-1.967-8-1.456.358 1.966 8 1.457-.358ZM15.93 22.75a4.75 4.75 0 0 0 4.613-3.616l-1.457-.358a3.25 3.25 0 0 1-3.156 2.474v1.5Zm-7.862-1.5a3.25 3.25 0 0 1-3.156-2.474l-1.457.358A4.75 4.75 0 0 0 8.07 22.75v-1.5Zm-1.967-16C3.02 5.25.754 8.14 1.49 11.134l1.456-.358A3.25 3.25 0 0 1 6.102 6.75v-1.5Zm11.796 1.5a3.25 3.25 0 0 1 3.156 4.026l1.456.358c.736-2.994-1.53-5.884-4.612-5.884v1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M3 9.25a.75.75 0 0 0 0 1.5v-1.5Zm18 1.5a.75.75 0 0 0 0-1.5v1.5Zm-18 0h18v-1.5H3v1.5Zm6.6-8.3a.75.75 0 0 0-1.2-.9l1.2.9Zm-4.2 3.1a.75.75 0 1 0 1.2.9l-1.2-.9Zm3-4-3 4 1.2.9 3-4-1.2-.9Zm7.2 0a.75.75 0 0 0-1.2.9l1.2-.9Zm1.8 4.9a.75.75 0 1 0 1.2-.9l-1.2.9Zm-3-4 3 4 1.2-.9-3-4-1.2.9Z' })));
};
var ForwardRef$2z = forwardRef(SvgShoppingBasketArrowDown);

var SvgShoppingBasketArrowOut = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M13.47 15.116a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-.763-1.823-.53.53.53-.53Zm-1.414 0 .53.53-.53-.53Zm-1.823.763a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm1.78 4.53a.75.75 0 0 0 1.5 0h-1.5Zm1.5-5a.75.75 0 0 0-1.5 0h1.5Zm1.78.47-1.293-1.293-1.06 1.06 1.293 1.293 1.06-1.06Zm-3.767-1.293L9.47 14.056l1.06 1.06 1.293-1.293-1.06-1.06Zm2.474 0a1.75 1.75 0 0 0-2.474 0l1.06 1.06a.25.25 0 0 1 .354 0l1.06-1.06Zm-.487 5.823v-5h-1.5v5h1.5Zm7.066.369.728.179-.728-.18Zm1.966-8-.728-.18.728.18Zm-17.597 8-.729.179.729-.18Zm-1.967-8 .728-.18-.728.18ZM15.931 21.25H8.07v1.5h7.862v-1.5ZM6.102 6.75h11.796v-1.5H6.102v1.5Zm14.442 12.384 1.966-8-1.456-.358-1.967 8 1.457.358Zm-15.631-.358-1.967-8-1.456.358 1.966 8 1.457-.358ZM15.93 22.75a4.75 4.75 0 0 0 4.613-3.616l-1.457-.358a3.25 3.25 0 0 1-3.156 2.474v1.5Zm-7.862-1.5a3.25 3.25 0 0 1-3.156-2.474l-1.457.358A4.75 4.75 0 0 0 8.07 22.75v-1.5Zm-1.967-16C3.02 5.25.754 8.14 1.49 11.134l1.456-.358A3.25 3.25 0 0 1 6.102 6.75v-1.5Zm11.796 1.5a3.25 3.25 0 0 1 3.156 4.026l1.456.358c.736-2.994-1.53-5.884-4.612-5.884v1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M3 9.25a.75.75 0 0 0 0 1.5v-1.5Zm18 1.5a.75.75 0 0 0 0-1.5v1.5Zm-18 0h18v-1.5H3v1.5Zm6.6-8.3a.75.75 0 0 0-1.2-.9l1.2.9Zm-4.2 3.1a.75.75 0 1 0 1.2.9l-1.2-.9Zm3-4-3 4 1.2.9 3-4-1.2-.9Zm7.2 0a.75.75 0 0 0-1.2.9l1.2-.9Zm1.8 4.9a.75.75 0 1 0 1.2-.9l-1.2.9Zm-3-4 3 4 1.2-.9-3-4-1.2.9Z' })));
};
var ForwardRef$2y = forwardRef(SvgShoppingBasketArrowOut);

var SvgShoppingBasketCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M18.035 6v-.75V6Zm3.882 4.808.735.15-.735-.15Zm-19.834 0 .735-.15-.735.15ZM5.965 6v.75V6ZM7.6 22v-.75.75Zm-3.882-3.192-.735.15.735-.15ZM16.4 22v.75V22Zm3.882-3.192.735.15-.735-.15ZM16.4 21.25H7.6v1.5h8.8v-1.5ZM4.453 18.658l-1.635-8-1.47.3 1.635 8 1.47-.3ZM5.965 6.75h12.07v-1.5H5.965v1.5Zm15.217 3.908-1.635 8 1.47.3 1.635-8-1.47-.3ZM18.035 6.75c2.028 0 3.56 1.883 3.147 3.908l1.47.3c.6-2.938-1.623-5.708-4.617-5.708v1.5ZM2.818 10.658C2.404 8.633 3.938 6.75 5.965 6.75v-1.5c-2.994 0-5.217 2.77-4.617 5.708l1.47-.3ZM7.6 21.25a3.222 3.222 0 0 1-3.147-2.592l-1.47.3c.45 2.203 2.375 3.792 4.617 3.792v-1.5Zm8.8 1.5c2.242 0 4.167-1.589 4.617-3.792l-1.47-.3A3.223 3.223 0 0 1 16.4 21.25v1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M21 10.75h.75v-1.5H21v1.5ZM3 9.25h-.75v1.5H3v-1.5Zm18 0H3v1.5h18v-1.5ZM9.469 15.414a.75.75 0 0 0-.938 1.172l.938-1.172Zm6.095-.92a.75.75 0 1 0-1.128-.988l1.128.988Zm-4.811 2.908-.469.586.469-.586Zm-2.222-.816 1.753 1.402.937-1.171-1.752-1.403-.938 1.172Zm4.163 1.188 2.87-3.28-1.128-.988-2.87 3.28 1.128.988Zm-2.41.214a1.75 1.75 0 0 0 2.41-.214l-1.128-.988a.25.25 0 0 1-.345.03l-.937 1.172ZM9.6 2.45a.75.75 0 1 0-1.2-.9l1.2.9Zm-4.2 3.1a.75.75 0 1 0 1.2.9l-1.2-.9Zm3-4-3 4 1.2.9 3-4-1.2-.9Zm7.2 0a.75.75 0 1 0-1.2.9l1.2-.9Zm1.8 4.9a.75.75 0 1 0 1.2-.9l-1.2.9Zm-3-4 3 4 1.2-.9-3-4-1.2.9Z' })));
};
var ForwardRef$2x = forwardRef(SvgShoppingBasketCheck);

var SvgShoppingBasketDoubleDoor = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M2.587 9.25a.75.75 0 1 0 0 1.5v-1.5Zm18.826 1.5a.75.75 0 0 0 0-1.5v1.5ZM18.035 6v-.75V6Zm3.882 4.808.735.15-.735-.15Zm-19.834 0 .735-.15-.735.15ZM5.965 6v.75V6ZM7.6 22v-.75.75Zm-3.882-3.192-.735.15.735-.15ZM16.4 22v.75V22Zm3.882-3.192.735.15-.735-.15ZM16.4 21.25H7.6v1.5h8.8v-1.5ZM4.453 18.658l-1.635-8-1.47.3 1.635 8 1.47-.3ZM5.965 6.75h12.07v-1.5H5.965v1.5Zm15.217 3.908-1.635 8 1.47.3 1.635-8-1.47-.3Zm-18.595.092h18.826v-1.5H2.587v1.5Zm15.448-4c2.028 0 3.56 1.883 3.147 3.908l1.47.3c.6-2.938-1.623-5.708-4.617-5.708v1.5ZM2.818 10.658C2.404 8.633 3.938 6.75 5.965 6.75v-1.5c-2.994 0-5.217 2.77-4.617 5.708l1.47-.3ZM7.6 21.25a3.222 3.222 0 0 1-3.147-2.592l-1.47.3c.45 2.203 2.375 3.792 4.617 3.792v-1.5Zm8.8 1.5c2.242 0 4.167-1.589 4.617-3.792l-1.47-.3A3.223 3.223 0 0 1 16.4 21.25v1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M9.6 2.45a.75.75 0 1 0-1.2-.9l1.2.9Zm-4.2 3.1a.75.75 0 1 0 1.2.9l-1.2-.9Zm3-4-3 4 1.2.9 3-4-1.2-.9Zm7.2 0a.75.75 0 1 0-1.2.9l1.2-.9Zm1.8 4.9a.75.75 0 1 0 1.2-.9l-1.2.9Zm-3-4 3 4 1.2-.9-3-4-1.2.9ZM9.75 14a.75.75 0 0 0-1.5 0h1.5Zm-1.5 4a.75.75 0 0 0 1.5 0h-1.5Zm0-4v4h1.5v-4h-1.5Zm7.5 0a.75.75 0 0 0-1.5 0h1.5Zm-1.5 4a.75.75 0 0 0 1.5 0h-1.5Zm0-4v4h1.5v-4h-1.5Z' })));
};
var ForwardRef$2w = forwardRef(SvgShoppingBasketDoubleDoor);

var SvgShoppingBasketFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M9.6 2.45a.75.75 0 1 0-1.2-.9l1.2.9Zm-4.2 3.1a.75.75 0 1 0 1.2.9l-1.2-.9Zm3-4-3 4 1.2.9 3-4-1.2-.9Zm7.2 0a.75.75 0 1 0-1.2.9l1.2-.9Zm1.8 4.9a.75.75 0 1 0 1.2-.9l-1.2.9Zm-3-4 3 4 1.2-.9-3-4-1.2.9Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M2.587 9.25a.75.75 0 1 0 0 1.5v-1.5Zm18.826 1.5a.75.75 0 0 0 0-1.5v1.5ZM18.035 6v-.75V6Zm3.882 4.808.735.15-.735-.15Zm-19.834 0 .735-.15-.735.15ZM5.965 6v.75V6ZM7.6 22v-.75.75Zm-3.882-3.192-.735.15.735-.15ZM16.4 22v.75V22Zm3.882-3.192.735.15-.735-.15ZM16.4 21.25H7.6v1.5h8.8v-1.5ZM4.453 18.658l-1.635-8-1.47.3 1.635 8 1.47-.3ZM5.965 6.75h12.07v-1.5H5.965v1.5Zm15.217 3.908-1.635 8 1.47.3 1.635-8-1.47-.3Zm-18.595.092h18.826v-1.5H2.587v1.5Zm15.448-4c2.028 0 3.56 1.883 3.147 3.908l1.47.3c.6-2.938-1.623-5.708-4.617-5.708v1.5ZM2.818 10.658C2.404 8.633 3.938 6.75 5.965 6.75v-1.5c-2.994 0-5.217 2.77-4.617 5.708l1.47-.3ZM7.6 21.25a3.222 3.222 0 0 1-3.147-2.592l-1.47.3c.45 2.203 2.375 3.792 4.617 3.792v-1.5Zm8.8 1.5c2.242 0 4.167-1.589 4.617-3.792l-1.47-.3A3.223 3.223 0 0 1 16.4 21.25v1.5ZM12 14l-.53.53a.75.75 0 0 0 1.06 0L12 14Zm.265-.265-.53-.53.53.53Zm-.53 0-.53.53.53-.53Zm-2.652 2.652-.53.53.53-.53Zm1.856 1.856.53-.53-.53.53Zm2.122 0-.53-.53.53.53Zm1.856-1.856.53.53-.53-.53Zm-5.834-2.652.53.53-.53-.53Zm3.447.795.266-.265-1.061-1.06-.265.265 1.06 1.06Zm-1.325-.265.265.265 1.06-1.06-.265-.266-1.06 1.061Zm-2.652 2.652 1.856 1.856 1.06-1.06-1.855-1.857-1.061 1.06Zm5.038 1.856 1.856-1.856-1.06-1.06-1.857 1.855 1.061 1.061Zm.796-4.508c.439.44.439 1.152 0 1.591l1.06 1.06a2.625 2.625 0 0 0 0-3.712l-1.06 1.061Zm1.06-1.06a2.625 2.625 0 0 0-3.712 0l1.06 1.06c.44-.44 1.152-.44 1.591 0l1.061-1.06Zm-5.833 1.06a1.123 1.123 0 0 1 1.59 0l1.061-1.06a2.625 2.625 0 0 0-3.712 0l1.06 1.06Zm.795 4.508a2.25 2.25 0 0 0 3.182 0l-1.06-1.06a.75.75 0 0 1-1.061 0l-1.061 1.06Zm-1.856-5.569a2.625 2.625 0 0 0 0 3.713l1.06-1.06a1.125 1.125 0 0 1 0-1.592l-1.06-1.06Z' })));
};
var ForwardRef$2v = forwardRef(SvgShoppingBasketFavourite);

var SvgShoppingBasketMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15 16.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm6 0H9v1.5h6v-1.5Zm4.816 3.705.728.179-.728-.18Zm1.966-8-.728-.18.728.18Zm-17.597 8-.729.179.729-.18Zm-1.967-8 .728-.18-.728.18ZM15.931 21.25H8.07v1.5h7.862v-1.5ZM6.102 6.75h11.796v-1.5H6.102v1.5Zm14.442 12.384 1.966-8-1.456-.358-1.967 8 1.457.358Zm-15.631-.358-1.967-8-1.456.358 1.966 8 1.457-.358ZM15.93 22.75a4.75 4.75 0 0 0 4.613-3.616l-1.457-.358a3.25 3.25 0 0 1-3.156 2.474v1.5Zm-7.862-1.5a3.25 3.25 0 0 1-3.156-2.474l-1.457.358A4.75 4.75 0 0 0 8.07 22.75v-1.5Zm-1.967-16C3.02 5.25.754 8.14 1.49 11.134l1.456-.358A3.25 3.25 0 0 1 6.102 6.75v-1.5Zm11.796 1.5a3.25 3.25 0 0 1 3.156 4.026l1.456.358c.736-2.994-1.53-5.884-4.612-5.884v1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M3 9.25a.75.75 0 0 0 0 1.5v-1.5Zm18 1.5a.75.75 0 0 0 0-1.5v1.5Zm-18 0h18v-1.5H3v1.5Zm6.6-8.3a.75.75 0 0 0-1.2-.9l1.2.9Zm-4.2 3.1a.75.75 0 1 0 1.2.9l-1.2-.9Zm3-4-3 4 1.2.9 3-4-1.2-.9Zm7.2 0a.75.75 0 0 0-1.2.9l1.2-.9Zm1.8 4.9a.75.75 0 1 0 1.2-.9l-1.2.9Zm-3-4 3 4 1.2-.9-3-4-1.2.9Z' })));
};
var ForwardRef$2u = forwardRef(SvgShoppingBasketMinus);

var SvgShoppingBasketRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm19.816 18.955.728.179-.728-.18Zm1.966-8-.728-.18.728.18Zm-17.597 8-.729.179.729-.18Zm-1.967-8 .728-.18-.728.18ZM15.931 21.25H8.07v1.5h7.862v-1.5ZM6.102 6.75h11.796v-1.5H6.102v1.5Zm14.442 12.384 1.966-8-1.456-.358-1.967 8 1.457.358Zm-15.631-.358-1.967-8-1.456.358 1.966 8 1.457-.358ZM15.93 22.75a4.75 4.75 0 0 0 4.613-3.616l-1.457-.358a3.25 3.25 0 0 1-3.156 2.474v1.5Zm-7.862-1.5a3.25 3.25 0 0 1-3.156-2.474l-1.457.358A4.75 4.75 0 0 0 8.07 22.75v-1.5Zm-1.967-16C3.02 5.25.754 8.14 1.49 11.134l1.456-.358A3.25 3.25 0 0 1 6.102 6.75v-1.5Zm11.796 1.5a3.25 3.25 0 0 1 3.156 4.026l1.456.358c.736-2.994-1.53-5.884-4.612-5.884v1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M3 9.25a.75.75 0 0 0 0 1.5v-1.5Zm18 1.5a.75.75 0 0 0 0-1.5v1.5Zm-18 0h18v-1.5H3v1.5Zm10.591 7.902a.75.75 0 0 0 1.06-1.061l-1.06 1.06Zm-3.182-5.304a.75.75 0 1 0-1.06 1.061l1.06-1.06Zm4.243 4.243-4.243-4.243-1.06 1.061 4.242 4.243 1.06-1.061Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M14.652 14.409a.75.75 0 0 0-1.061-1.06l1.06 1.06Zm-5.304 3.182a.75.75 0 1 0 1.061 1.06l-1.06-1.06Zm4.243-4.243-4.243 4.243 1.061 1.06 4.243-4.242-1.061-1.06ZM9.6 2.45a.75.75 0 0 0-1.2-.9l1.2.9Zm-4.2 3.1a.75.75 0 1 0 1.2.9l-1.2-.9Zm3-4-3 4 1.2.9 3-4-1.2-.9Zm7.2 0a.75.75 0 0 0-1.2.9l1.2-.9Zm1.8 4.9a.75.75 0 1 0 1.2-.9l-1.2.9Zm-3-4 3 4 1.2-.9-3-4-1.2.9Z' })));
};
var ForwardRef$2t = forwardRef(SvgShoppingBasketRemove);

var SvgShoppingBasketSimple = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm19.816 18.955.728.179-.728-.18Zm1.966-8-.728-.18.728.18Zm-17.598 8-.728.179.728-.18Zm-1.966-8 .728-.18-.728.18ZM15.931 21.25H8.07v1.5h7.862v-1.5ZM6.102 6.75h11.796v-1.5H6.102v1.5Zm14.442 12.384 1.966-8-1.456-.358-1.967 8 1.457.358Zm-15.631-.358-1.967-8-1.456.358 1.966 8 1.457-.358ZM15.93 22.75a4.75 4.75 0 0 0 4.613-3.616l-1.457-.358a3.25 3.25 0 0 1-3.156 2.474v1.5Zm-7.862-1.5a3.25 3.25 0 0 1-3.156-2.474l-1.457.358A4.75 4.75 0 0 0 8.07 22.75v-1.5Zm-1.967-16C3.02 5.25.754 8.14 1.49 11.134l1.456-.358A3.25 3.25 0 0 1 6.102 6.75v-1.5Zm11.796 1.5a3.25 3.25 0 0 1 3.156 4.026l1.456.358c.736-2.994-1.53-5.884-4.612-5.884v1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M3 9.25a.75.75 0 0 0 0 1.5v-1.5Zm18 1.5a.75.75 0 0 0 0-1.5v1.5Zm-18 0h18v-1.5H3v1.5Zm6.6-8.3a.75.75 0 0 0-1.2-.9l1.2.9Zm-4.2 3.1a.75.75 0 1 0 1.2.9l-1.2-.9Zm3-4-3 4 1.2.9 3-4-1.2-.9Zm7.2 0a.75.75 0 0 0-1.2.9l1.2-.9Zm1.8 4.9a.75.75 0 1 0 1.2-.9l-1.2.9Zm-3-4 3 4 1.2-.9-3-4-1.2.9Z' })));
};
var ForwardRef$2s = forwardRef(SvgShoppingBasketSimple);

var SvgShoppingBasketSingleDoor = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M2.587 9.25a.75.75 0 1 0 0 1.5v-1.5Zm18.826 1.5a.75.75 0 0 0 0-1.5v1.5ZM18.035 6v-.75V6Zm3.882 4.808.735.15-.735-.15Zm-19.834 0 .735-.15-.735.15ZM5.965 6v.75V6ZM7.6 22v-.75.75Zm-3.882-3.192-.735.15.735-.15ZM16.4 22v.75V22Zm3.882-3.192.735.15-.735-.15ZM16.4 21.25H7.6v1.5h8.8v-1.5ZM4.453 18.658l-1.635-8-1.47.3 1.635 8 1.47-.3ZM5.965 6.75h12.07v-1.5H5.965v1.5Zm15.217 3.908-1.635 8 1.47.3 1.635-8-1.47-.3Zm-18.595.092h18.826v-1.5H2.587v1.5Zm15.448-4c2.028 0 3.56 1.883 3.147 3.908l1.47.3c.6-2.938-1.623-5.708-4.617-5.708v1.5ZM2.818 10.658C2.404 8.633 3.938 6.75 5.965 6.75v-1.5c-2.994 0-5.217 2.77-4.617 5.708l1.47-.3ZM7.6 21.25a3.222 3.222 0 0 1-3.147-2.592l-1.47.3c.45 2.203 2.375 3.792 4.617 3.792v-1.5Zm8.8 1.5c2.242 0 4.167-1.589 4.617-3.792l-1.47-.3A3.223 3.223 0 0 1 16.4 21.25v1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M17.468 2.586a.75.75 0 1 0-.936-1.172l.936 1.172Zm-5.937 2.828a.75.75 0 1 0 .938 1.172l-.938-1.172Zm5-4-5 4 .938 1.172 5-4-.938-1.172ZM9.75 14a.75.75 0 0 0-1.5 0h1.5Zm-1.5 4a.75.75 0 0 0 1.5 0h-1.5Zm0-4v4h1.5v-4h-1.5Zm7.5 0a.75.75 0 0 0-1.5 0h1.5Zm-1.5 4a.75.75 0 0 0 1.5 0h-1.5Zm0-4v4h1.5v-4h-1.5Z' })));
};
var ForwardRef$2r = forwardRef(SvgShoppingBasketSingleDoor);

var SvgShoppingBasket = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M9.75 14a.75.75 0 0 0-1.5 0h1.5Zm-1.5 4a.75.75 0 0 0 1.5 0h-1.5Zm0-4v4h1.5v-4h-1.5Zm7.5 0a.75.75 0 0 0-1.5 0h1.5Zm-1.5 4a.75.75 0 0 0 1.5 0h-1.5Zm0-4v4h1.5v-4h-1.5Zm-9-8a.75.75 0 0 0 1.5 0h-1.5Zm12 0a.75.75 0 0 0 1.5 0h-1.5ZM6.75 6V4h-1.5v2h1.5ZM8 2.75h8v-1.5H8v1.5ZM17.25 4v2h1.5V4h-1.5ZM16 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 16 1.25v1.5ZM6.75 4c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 5.25 4h1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M2.587 9.25a.75.75 0 1 0 0 1.5v-1.5Zm18.826 1.5a.75.75 0 0 0 0-1.5v1.5ZM18.035 6v-.75V6Zm3.882 4.808.735.15-.735-.15Zm-19.834 0 .735-.15-.735.15ZM5.965 6v.75V6ZM7.6 22v-.75.75Zm-3.882-3.192-.735.15.735-.15ZM16.4 22v.75V22Zm3.882-3.192.735.15-.735-.15ZM16.4 21.25H7.6v1.5h8.8v-1.5ZM4.453 18.658l-1.635-8-1.47.3 1.635 8 1.47-.3ZM5.965 6.75h12.07v-1.5H5.965v1.5Zm15.217 3.908-1.635 8 1.47.3 1.635-8-1.47-.3Zm-18.595.092h18.826v-1.5H2.587v1.5Zm15.448-4c2.028 0 3.56 1.883 3.147 3.908l1.47.3c.6-2.938-1.623-5.708-4.617-5.708v1.5ZM2.818 10.658C2.404 8.633 3.938 6.75 5.965 6.75v-1.5c-2.994 0-5.217 2.77-4.617 5.708l1.47-.3ZM7.6 21.25a3.222 3.222 0 0 1-3.147-2.592l-1.47.3c.45 2.203 2.375 3.792 4.617 3.792v-1.5Zm8.8 1.5c2.242 0 4.167-1.589 4.617-3.792l-1.47-.3A3.223 3.223 0 0 1 16.4 21.25v1.5Z' })));
};
var ForwardRef$2q = forwardRef(SvgShoppingBasket);

var SvgShutDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M16 2.832c3.532 1.543 6 5.067 6 9.168 0 5.523-4.477 10-10 10S2 17.523 2 12c0-4.1 2.468-7.625 6-9.168' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 2v4' })));
};
var ForwardRef$2p = forwardRef(SvgShutDown);

var SvgSignalCellularBad = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm22 16-4 4m0-4 4 4m-7.144 0H4.148c-1.965 0-2.894-2.331-1.434-3.596l13.708-11.87C17.802 3.339 20 4.28 20 6.067v6.87' })));
};
var ForwardRef$2o = forwardRef(SvgSignalCellularBad);

var SvgSignalCellularLine = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M21 20V4m-6 16V8M9 20v-8m-6 8v-4' })));
};
var ForwardRef$2n = forwardRef(SvgSignalCellularLine);

var SvgSignalCellularNoInternetDashed = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M20 13V4m-6 16V8M8 20v-8m-6 8v-4m16 4 4-4m-4 0 4 4' })));
};
var ForwardRef$2m = forwardRef(SvgSignalCellularNoInternetDashed);

var SvgSignalCellularNoInternet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M18 12v4m0 3v1m-3.144 0H5.148c-1.965 0-2.894-2.331-1.434-3.596l13.708-11.87C18.802 3.339 21 4.28 21 6.067v6.87' })));
};
var ForwardRef$2l = forwardRef(SvgSignalCellularNoInternet);

var SvgSignalCellularOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm3 3 18 18m0-4.063V5.067c0-1.786-2.198-2.728-3.578-1.533l-5.3 4.589m6.874 10.873a2.225 2.225 0 0 1-.14.004H5.148c-1.965 0-2.894-2.331-1.434-3.596l6.265-5.425' })));
};
var ForwardRef$2k = forwardRef(SvgSignalCellularOff);

var SvgSignalCellular = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M18.856 20H5.148c-1.965 0-2.894-2.331-1.434-3.596l13.708-11.87C18.802 3.339 21 4.28 21 6.067v11.87c0 1.14-.96 2.063-2.144 2.063Z' })));
};
var ForwardRef$2j = forwardRef(SvgSignalCellular);

var SvgSignpostBig = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M17 11.5H5.414a1 1 0 0 1-.707-.293l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 .707-.293H17a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Zm-10 3h11.586a1 1 0 0 1 .707.293l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-.707.293H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M13.5 5.5V4a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1.5m3 6v3m-3-3v3m3 6V22a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1.5' })));
};
var ForwardRef$2i = forwardRef(SvgSignpostBig);

var SvgSignpostRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M13.5 4.51V3a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v2.314m3-.804 2.218-.595a1 1 0 0 1 .852.16l1.547 1.14a1 1 0 0 1 .323 1.206l-.77 1.76a1 1 0 0 1-.658.564l-3.512.941m0-5.176-3 .804m0 0L5.557 6.638a1 1 0 0 0-.707 1.225l.777 2.898a1 1 0 0 0 1.224.707l3.649-.978m3-.804-3 .804m3-.804V14m-3-3.51V14m3 0h3.02a1 1 0 0 1 .78.375l1.2 1.5a1 1 0 0 1 0 1.25l-1.2 1.5a1 1 0 0 1-.78.375H13.5m0-5h-3m0 0H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4.5m3 0v2a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-2m3 0h-3' })));
};
var ForwardRef$2h = forwardRef(SvgSignpostRight);

var SvgSignpostSmall = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M10.5 9H4L2 7l2-2h6.5v4Zm0 8H4l-2-2 2-2h6.5v4Zm3-8H20l2 2-2 2h-6.5V9Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M10.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3Z' })));
};
var ForwardRef$2g = forwardRef(SvgSignpostSmall);

var SvgSignpostTop = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M13.5 5.938V3a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4.67m3-1.732 2.132-1.23a1 1 0 0 1 .758-.1l2.732.731a1 1 0 0 1 .707 1.225l-.732 2.732a1 1 0 0 1-.466.607L13.5 12.866m0-6.928-3 1.732m0 0L3.866 11.5a1 1 0 0 0-.366 1.366l2 3.464a1 1 0 0 0 1.366.366l3.634-2.098m0 0V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8.134m-3 1.732 3-1.732' })));
};
var ForwardRef$2f = forwardRef(SvgSignpostTop);

var SvgSignpost = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M9.5 12H5.414a1 1 0 0 1-.707-.293l-2-2a1 1 0 0 1 0-1.414l2-2A1 1 0 0 1 5.414 6H9.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Zm5 0h4.086a1 1 0 0 1 .707.293l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-.707.293H14.5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M10.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3Z' })));
};
var ForwardRef$2e = forwardRef(SvgSignpost);

var SvgSimCard = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M4 18V6a4 4 0 0 1 4-4h5.343a4 4 0 0 1 2.829 1.172l2.656 2.656A4 4 0 0 1 20 8.657V18a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M16 18h-4m4-4h-4' })));
};
var ForwardRef$2d = forwardRef(SvgSimCard);

var SvgSkype = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M4 12a8 8 0 0 0 8.958 7.943 5 5 0 1 0 6.986-6.986 8 8 0 0 0-8.9-8.9 5 5 0 1 0-6.986 6.986A8.08 8.08 0 0 0 4 12Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M14.5 10a2 2 0 0 0-2-2h-1a2 2 0 1 0 0 4h1a2 2 0 1 1 0 4h-1a2 2 0 0 1-2-2' })));
};
var ForwardRef$2c = forwardRef(SvgSkype);

var SvgSlack = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M12 5.5a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1-3 0v-5Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M20 10.5a1.5 1.5 0 0 1-1.5 1.5H17v-1.5a1.5 1.5 0 0 1 3 0Zm-3 10a1.5 1.5 0 0 0-1.5-1.5H14v1.5a1.5 1.5 0 0 0 3 0ZM7 5.5A1.5 1.5 0 0 0 8.5 7H10V5.5a1.5 1.5 0 1 0-3 0Zm-3 10A1.5 1.5 0 0 1 5.5 14H7v1.5a1.5 1.5 0 0 1-3 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M9 15.5a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1-3 0v-5ZM8.5 9a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 1 1 0-3h5Zm12 5a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 0 1 0-3h5Z' })));
};
var ForwardRef$2b = forwardRef(SvgSlack);

var SvgSmartAirConditioning = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15.712 4.288a.75.75 0 1 0 1.06-1.061l-1.06 1.06Zm-6.364 1.06A.75.75 0 1 0 10.41 6.41L9.35 5.35ZM7.227 3.227a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.364 3.182a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM2 12h-.75H2Zm4-4v.75V8Zm0 10v-.75.75Zm-4-4h.75H2Zm20 0h.75H22Zm-4 4v.75V18Zm4-6h-.75.75Zm-4-4v-.75V8ZM3 14.25h-.75v1.5H3v-1.5Zm18 1.5h.75v-1.5H21v1.5ZM15.25 22a.75.75 0 0 0 1.5 0h-1.5Zm1.5-1.5a.75.75 0 0 0-1.5 0h1.5Zm-5.5 1.5a.75.75 0 0 0 1.5 0h-1.5Zm1.5-1.5a.75.75 0 0 0-1.5 0h1.5ZM7.25 22a.75.75 0 0 0 1.5 0h-1.5Zm1.5-1.5a.75.75 0 0 0-1.5 0h1.5ZM12 2.75a5.23 5.23 0 0 1 3.712 1.538l1.06-1.061A6.731 6.731 0 0 0 12 1.25v1.5Zm-1.591 3.659A2.24 2.24 0 0 1 12 5.75v-1.5a3.74 3.74 0 0 0-2.652 1.098L10.41 6.41ZM8.288 4.288A5.231 5.231 0 0 1 12 2.75v-1.5a6.731 6.731 0 0 0-4.773 1.977l1.06 1.06ZM12 5.75a2.24 2.24 0 0 1 1.591.659l1.06-1.06A3.74 3.74 0 0 0 12 4.25v1.5ZM21.25 12v2h1.5v-2h-1.5ZM18 17.25H6v1.5h12v-1.5ZM2.75 14v-2h-1.5v2h1.5ZM6 8.75h12v-1.5H6v1.5ZM2.75 12A3.25 3.25 0 0 1 6 8.75v-1.5A4.75 4.75 0 0 0 1.25 12h1.5ZM6 17.25A3.25 3.25 0 0 1 2.75 14h-1.5A4.75 4.75 0 0 0 6 18.75v-1.5ZM21.25 14A3.25 3.25 0 0 1 18 17.25v1.5A4.75 4.75 0 0 0 22.75 14h-1.5Zm1.5-2A4.75 4.75 0 0 0 18 7.25v1.5A3.25 3.25 0 0 1 21.25 12h1.5ZM3 15.75h18v-1.5H3v1.5ZM16.75 22v-1.5h-1.5V22h1.5Zm-4 0v-1.5h-1.5V22h1.5Zm-4 0v-1.5h-1.5V22h1.5Z' })));
};
var ForwardRef$2a = forwardRef(SvgSmartAirConditioning);

var SvgSmartDoor = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15.712 4.288a.75.75 0 0 0 1.061-1.061l-1.06 1.06Zm-6.364 1.06A.75.75 0 0 0 10.41 6.41L9.35 5.35ZM7.227 3.227a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.364 3.182a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM6 12h-.75H6Zm4-4v-.75V8Zm0 14v.75V22Zm-4-4h.75H6Zm12 0h-.75.75Zm-4 4v-.75.75Zm4-10h.75H18Zm-4-4v.75V8Zm-4.25 5.5a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM12 2.75a5.23 5.23 0 0 1 3.712 1.538l1.061-1.061A6.731 6.731 0 0 0 12 1.25v1.5Zm-1.591 3.659A2.24 2.24 0 0 1 12 5.75v-1.5a3.74 3.74 0 0 0-2.652 1.098L10.41 6.41ZM8.288 4.288A5.231 5.231 0 0 1 12 2.75v-1.5a6.731 6.731 0 0 0-4.773 1.977l1.06 1.06ZM12 5.75a2.24 2.24 0 0 1 1.591.659l1.06-1.06A3.74 3.74 0 0 0 12 4.25v1.5ZM17.25 12v6h1.5v-6h-1.5ZM14 21.25h-4v1.5h4v-1.5ZM6.75 18v-6h-1.5v6h1.5ZM10 8.75h4v-1.5h-4v1.5ZM6.75 12A3.25 3.25 0 0 1 10 8.75v-1.5A4.75 4.75 0 0 0 5.25 12h1.5ZM10 21.25A3.25 3.25 0 0 1 6.75 18h-1.5A4.75 4.75 0 0 0 10 22.75v-1.5ZM17.25 18A3.25 3.25 0 0 1 14 21.25v1.5A4.75 4.75 0 0 0 18.75 18h-1.5Zm1.5-6A4.75 4.75 0 0 0 14 7.25v1.5A3.25 3.25 0 0 1 17.25 12h1.5Zm-10.5 1.5v3h1.5v-3h-1.5Z' })));
};
var ForwardRef$29 = forwardRef(SvgSmartDoor);

var SvgSmartHumidity = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M12.75 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.962-3.712a.75.75 0 1 0 1.06-1.061l-1.06 1.06Zm-6.364 1.06a.75.75 0 1 0 1.061 1.061l-1.06-1.06Zm-2.121-2.121a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.364 3.182a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-.375-13.342-.509.55.508-.55Zm-2.431 0-.509-.552.508.552ZM12 12.75a5.23 5.23 0 0 1 3.712 1.538l1.06-1.061A6.732 6.732 0 0 0 12 11.25v1.5Zm-1.591 3.659A2.24 2.24 0 0 1 12 15.75v-1.5a3.74 3.74 0 0 0-2.652 1.098l1.061 1.061Zm-2.121-2.121A5.231 5.231 0 0 1 12 12.75v-1.5a6.732 6.732 0 0 0-4.773 1.977l1.06 1.06ZM12 15.75a2.24 2.24 0 0 1 1.591.659l1.06-1.06A3.74 3.74 0 0 0 12 14.25v1.5ZM20.75 14c0-2.326-1.255-4.706-2.696-6.694-1.457-2.012-3.193-3.742-4.33-4.79l-1.017 1.102c1.101 1.016 2.757 2.67 4.133 4.568 1.392 1.922 2.41 3.977 2.41 5.814h1.5ZM10.276 2.515c-1.137 1.049-2.873 2.78-4.33 4.791C4.506 9.294 3.25 11.674 3.25 14h1.5c0-1.837 1.018-3.892 2.41-5.814 1.375-1.898 3.032-3.552 4.133-4.568l-1.017-1.103ZM3.25 14c0 2.971 1.142 5.183 2.842 6.64 1.68 1.442 3.861 2.11 5.908 2.11v-1.5c-1.74 0-3.56-.571-4.932-1.748C5.714 18.34 4.75 16.552 4.75 14h-1.5ZM12 22.75c2.047 0 4.227-.668 5.909-2.11 1.699-1.457 2.841-3.669 2.841-6.64h-1.5c0 2.551-.964 4.34-2.318 5.502C15.56 20.679 13.74 21.25 12 21.25v1.5Zm1.724-20.235a2.529 2.529 0 0 0-3.448 0l1.017 1.103a1.029 1.029 0 0 1 1.414 0l1.017-1.103Z' })));
};
var ForwardRef$28 = forwardRef(SvgSmartHumidity);

var SvgSmartKeyDotted = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M18 22.75a.75.75 0 0 0 0-1.5v1.5ZM17.25 13a.75.75 0 0 0 1.5 0h-1.5ZM10 2.75h4v-1.5h-4v1.5Zm8 18.5h-8v1.5h8v-1.5ZM6.75 18V6h-1.5v12h1.5Zm10.5-12v7h1.5V6h-1.5ZM10 21.25A3.25 3.25 0 0 1 6.75 18h-1.5A4.75 4.75 0 0 0 10 22.75v-1.5Zm4-18.5A3.25 3.25 0 0 1 17.25 6h1.5A4.75 4.75 0 0 0 14 1.25v1.5Zm-4-1.5A4.75 4.75 0 0 0 5.25 6h1.5A3.25 3.25 0 0 1 10 2.75v-1.5Zm3.5 18.5h7v-1.5h-7v1.5Zm7-4.5h-7v1.5h7v-1.5Zm-7 0a2.25 2.25 0 0 0-2.25 2.25h1.5a.75.75 0 0 1 .75-.75v-1.5Zm9.25 2.25a2.25 2.25 0 0 0-2.25-2.25v1.5a.75.75 0 0 1 .75.75h1.5Zm-2.25 2.25a2.25 2.25 0 0 0 2.25-2.25h-1.5a.75.75 0 0 1-.75.75v1.5Zm-7-1.5a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-12.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-2.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm5.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-2.75 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-2.75-3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm5.5-3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z' })));
};
var ForwardRef$27 = forwardRef(SvgSmartKeyDotted);

var SvgSmartKey = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M12.75 11.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm1.697-3.885a.75.75 0 1 0 1.107-1.012l-1.107 1.012Zm-4.5 1.309a.75.75 0 0 0 1.107 1.012L9.945 9.174Zm-1.5-2.32a.75.75 0 1 0 1.107 1.011L8.446 6.853Zm4.5 3.332a.75.75 0 1 0 1.107-1.012l-1.108 1.012ZM18 22.75a.75.75 0 0 0 0-1.5v1.5ZM17.25 13a.75.75 0 0 0 1.5 0h-1.5ZM12 6.75c.941 0 1.807.416 2.447 1.115l1.107-1.012C14.656 5.873 13.401 5.25 12 5.25v1.5Zm-.947 3.436c.256-.28.591-.436.947-.436v-1.5c-.816 0-1.541.363-2.054.924l1.107 1.012Zm-1.5-2.32c.64-.7 1.505-1.116 2.447-1.116v-1.5c-1.402 0-2.657.623-3.554 1.603l1.108 1.012ZM12 9.75c.356 0 .69.156.946.436l1.107-1.012A2.777 2.777 0 0 0 12 8.25v1.5Zm-2-7h4v-1.5h-4v1.5Zm8 18.5h-8v1.5h8v-1.5ZM6.75 18V6h-1.5v12h1.5Zm10.5-12v7h1.5V6h-1.5ZM10 21.25A3.25 3.25 0 0 1 6.75 18h-1.5A4.75 4.75 0 0 0 10 22.75v-1.5Zm4-18.5A3.25 3.25 0 0 1 17.25 6h1.5A4.75 4.75 0 0 0 14 1.25v1.5Zm-4-1.5A4.75 4.75 0 0 0 5.25 6h1.5A3.25 3.25 0 0 1 10 2.75v-1.5Zm3.5 18.5h7v-1.5h-7v1.5Zm7-4.5h-7v1.5h7v-1.5Zm-7 0a2.25 2.25 0 0 0-2.25 2.25h1.5a.75.75 0 0 1 .75-.75v-1.5Zm9.25 2.25a2.25 2.25 0 0 0-2.25-2.25v1.5a.75.75 0 0 1 .75.75h1.5Zm-2.25 2.25a2.25 2.25 0 0 0 2.25-2.25h-1.5a.75.75 0 0 1-.75.75v1.5Zm-7-1.5a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Z' })));
};
var ForwardRef$26 = forwardRef(SvgSmartKey);

var SvgSmartLight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15.712 4.288a.75.75 0 0 0 1.061-1.061l-1.06 1.06Zm-6.364 1.06A.75.75 0 0 0 10.41 6.41L9.35 5.35Zm-2.12-2.121a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm6.363 3.182a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-7.94 6.62-.656-.364.656.364Zm12.698 0 .656-.364-.656.364Zm-2.222-4-.655.364.655-.364Zm-8.254 0 .656.364-.656-.364ZM12.75 16a.75.75 0 0 0-1.5 0h1.5ZM15 22.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm3-18.5a5.23 5.23 0 0 1 3.712 1.538l1.061-1.061A6.731 6.731 0 0 0 12 1.25v1.5Zm-1.59 3.659A2.24 2.24 0 0 1 12 5.75v-1.5a3.74 3.74 0 0 0-2.652 1.098L10.41 6.41ZM8.287 4.288A5.231 5.231 0 0 1 12 2.75v-1.5a6.731 6.731 0 0 0-4.773 1.977l1.06 1.06ZM12 5.75a2.24 2.24 0 0 1 1.591.659l1.06-1.06a3.74 3.74 0 0 0-2.65-1.099v1.5Zm-2.379 3h4.758v-1.5H9.62v1.5Zm5.85.643 2.223 4 1.311-.729-2.222-4-1.312.729Zm1.13 5.857H7.4v1.5h9.202v-1.5ZM6.306 13.393l2.223-4-1.312-.729-2.222 4 1.311.729ZM7.4 15.25a1.25 1.25 0 0 1-1.093-1.857l-1.31-.729c-1.02 1.833.306 4.086 2.403 4.086v-1.5Zm10.295-1.857A1.25 1.25 0 0 1 16.6 15.25v1.5c2.097 0 3.422-2.253 2.404-4.085l-1.311.728ZM14.379 8.75c.454 0 .872.246 1.093.643l1.31-.729A2.75 2.75 0 0 0 14.38 7.25v1.5ZM9.62 7.25a2.75 2.75 0 0 0-2.404 1.414l1.312.729A1.25 1.25 0 0 1 9.62 8.75v-1.5ZM11.25 16v6h1.5v-6h-1.5Zm.75 6.75h3v-1.5h-3v1.5Zm0-1.5H9v1.5h3v-1.5Z' })));
};
var ForwardRef$25 = forwardRef(SvgSmartLight);

var SvgSmartLock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M12.75 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.962-3.712a.75.75 0 1 0 1.06-1.061l-1.06 1.06Zm-6.364 1.06a.75.75 0 0 0 1.061 1.061l-1.06-1.06Zm-2.121-2.121a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.364 3.182a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM12 12.75a5.23 5.23 0 0 1 3.712 1.538l1.06-1.061A6.731 6.731 0 0 0 12 11.25v1.5Zm-1.591 3.659A2.24 2.24 0 0 1 12 15.75v-1.5a3.74 3.74 0 0 0-2.652 1.098l1.061 1.061Zm-2.121-2.121A5.231 5.231 0 0 1 12 12.75v-1.5a6.731 6.731 0 0 0-4.773 1.977l1.06 1.06ZM12 15.75a2.24 2.24 0 0 1 1.591.659l1.06-1.06A3.74 3.74 0 0 0 12 14.25v1.5Zm-4-7h8v-1.5H8v1.5ZM19.25 12v6h1.5v-6h-1.5ZM16 21.25H8v1.5h8v-1.5ZM4.75 18v-6h-1.5v6h1.5ZM8 21.25A3.25 3.25 0 0 1 4.75 18h-1.5A4.75 4.75 0 0 0 8 22.75v-1.5ZM19.25 18A3.25 3.25 0 0 1 16 21.25v1.5A4.75 4.75 0 0 0 20.75 18h-1.5ZM16 8.75A3.25 3.25 0 0 1 19.25 12h1.5A4.75 4.75 0 0 0 16 7.25v1.5Zm-8-1.5A4.75 4.75 0 0 0 3.25 12h1.5A3.25 3.25 0 0 1 8 8.75v-1.5Zm.75.75V6h-1.5v2h1.5Zm6.5-2v2h1.5V6h-1.5ZM12 2.75A3.25 3.25 0 0 1 15.25 6h1.5A4.75 4.75 0 0 0 12 1.25v1.5ZM8.75 6A3.25 3.25 0 0 1 12 2.75v-1.5A4.75 4.75 0 0 0 7.25 6h1.5Z' })));
};
var ForwardRef$24 = forwardRef(SvgSmartLock);

var SvgSmartMusic = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M19 18v-8' }),
        React.createElement("path", { fill: 'currentColor', d: 'M17.712 4.288a.75.75 0 0 0 1.061-1.061l-1.06 1.06Zm-6.364 1.06A.75.75 0 0 0 12.41 6.41l-1.06-1.06ZM9.227 3.227a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.364 3.182a.75.75 0 0 0 1.06-1.06l-1.06 1.06ZM9 10.819h-.75H9Zm.804-.98.147.736-.147-.736Zm.392 3.922.147.735-.147-.735ZM9 12.78h.75H9Zm10-1.6h.75H19Zm-.804.98-.147-.736.147.736ZM19 9.22h-.75.75Zm-1.196-.98-.147-.736.147.735ZM9.75 12a.75.75 0 0 0-1.5 0h1.5Zm8.5 6c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 19.75 18h-1.5ZM17 19.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 17 20.75v-1.5ZM15.75 18c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 14.25 18h1.5ZM17 16.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 17 15.25v1.5ZM8.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 9.75 20h-1.5ZM7 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 7 22.75v-1.5ZM5.75 20c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 4.25 20h1.5ZM7 18.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 7 17.25v1.5Zm7-16a5.23 5.23 0 0 1 3.712 1.538l1.061-1.061A6.731 6.731 0 0 0 14 1.25v1.5Zm-1.591 3.659A2.24 2.24 0 0 1 14 5.75v-1.5a3.74 3.74 0 0 0-2.652 1.098L12.41 6.41Zm-2.121-2.121A5.231 5.231 0 0 1 14 2.75v-1.5a6.731 6.731 0 0 0-4.773 1.977l1.06 1.06ZM14 5.75a2.24 2.24 0 0 1 1.591.659l1.06-1.06A3.74 3.74 0 0 0 14 4.25v1.5Zm4.25 3.47v1.96h1.5V9.22h-1.5Zm-.201 2.205-8 1.6.294 1.471 8-1.6-.294-1.47ZM9.75 12.78v-1.96h-1.5v1.96h1.5Zm.201-2.205 8-1.6-.294-1.471-8 1.6.294 1.47Zm-.201.245a.25.25 0 0 1 .201-.245l-.294-1.471A1.75 1.75 0 0 0 8.25 10.82h1.5Zm.299 2.205a.25.25 0 0 1-.299-.245h-1.5a1.75 1.75 0 0 0 2.093 1.716l-.294-1.47Zm8.201-1.845a.25.25 0 0 1-.201.245l.294 1.471a1.75 1.75 0 0 0 1.407-1.716h-1.5Zm1.5-1.96a1.75 1.75 0 0 0-2.093-1.716l.294 1.47a.25.25 0 0 1 .299.246h1.5ZM9.75 20v-8h-1.5v8h1.5Z' })));
};
var ForwardRef$23 = forwardRef(SvgSmartMusic);

var SvgSmartPhone = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M12.75 14a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.962-3.712a.75.75 0 0 0 1.061-1.061l-1.06 1.06Zm-6.364 1.06a.75.75 0 1 0 1.061 1.061l-1.06-1.06ZM7.227 9.227a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.364 3.182a.75.75 0 0 0 1.06-1.06l-1.06 1.06ZM5 6h-.75H5Zm4-4v.75V2Zm0 20v.75V22Zm-4-4h.75H5Zm14 0h.75H19Zm-4 4v-.75.75Zm4-16h-.75.75Zm-4-4v-.75V2Zm-4 16.25a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm-1-11a5.23 5.23 0 0 1 3.712 1.538l1.061-1.061A6.731 6.731 0 0 0 12 7.25v1.5Zm-1.591 3.659A2.24 2.24 0 0 1 12 11.75v-1.5a3.74 3.74 0 0 0-2.652 1.098l1.061 1.061Zm-2.121-2.121A5.231 5.231 0 0 1 12 8.75v-1.5a6.731 6.731 0 0 0-4.773 1.977l1.06 1.06ZM12 11.75a2.24 2.24 0 0 1 1.591.659l1.06-1.06A3.74 3.74 0 0 0 12 10.25v1.5ZM18.25 6v12h1.5V6h-1.5ZM15 21.25H9v1.5h6v-1.5ZM5.75 18V6h-1.5v12h1.5ZM9 2.75h6v-1.5H9v1.5ZM5.75 6A3.25 3.25 0 0 1 9 2.75v-1.5A4.75 4.75 0 0 0 4.25 6h1.5ZM9 21.25A3.25 3.25 0 0 1 5.75 18h-1.5A4.75 4.75 0 0 0 9 22.75v-1.5ZM18.25 18A3.25 3.25 0 0 1 15 21.25v1.5A4.75 4.75 0 0 0 19.75 18h-1.5Zm1.5-12A4.75 4.75 0 0 0 15 1.25v1.5A3.25 3.25 0 0 1 18.25 6h1.5ZM11 19.75h2v-1.5h-2v1.5Z' })));
};
var ForwardRef$22 = forwardRef(SvgSmartPhone);

var SvgSmartPlug = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15.712 4.288a.75.75 0 1 0 1.06-1.061l-1.06 1.06Zm-6.364 1.06A.75.75 0 1 0 10.41 6.41L9.35 5.35ZM7.227 3.227a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.364 3.182a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM12 2.75a5.23 5.23 0 0 1 3.712 1.538l1.06-1.061A6.731 6.731 0 0 0 12 1.25v1.5Zm-1.591 3.659A2.24 2.24 0 0 1 12 5.75v-1.5a3.74 3.74 0 0 0-2.652 1.098L10.41 6.41ZM8.288 4.288A5.231 5.231 0 0 1 12 2.75v-1.5a6.731 6.731 0 0 0-4.773 1.977l1.06 1.06ZM12 5.75a2.24 2.24 0 0 1 1.591.659l1.06-1.06A3.74 3.74 0 0 0 12 4.25v1.5Zm-4 3h8v-1.5H8v1.5ZM18.25 11v8h1.5v-8h-1.5ZM16 21.25H8v1.5h8v-1.5ZM5.75 19v-8h-1.5v8h1.5ZM8 21.25A2.25 2.25 0 0 1 5.75 19h-1.5A3.75 3.75 0 0 0 8 22.75v-1.5ZM18.25 19A2.25 2.25 0 0 1 16 21.25v1.5A3.75 3.75 0 0 0 19.75 19h-1.5ZM16 8.75A2.25 2.25 0 0 1 18.25 11h1.5A3.75 3.75 0 0 0 16 7.25v1.5Zm-8-1.5A3.75 3.75 0 0 0 4.25 11h1.5A2.25 2.25 0 0 1 8 8.75v-1.5ZM15.25 15A3.25 3.25 0 0 1 12 18.25v1.5A4.75 4.75 0 0 0 16.75 15h-1.5ZM12 18.25A3.25 3.25 0 0 1 8.75 15h-1.5A4.75 4.75 0 0 0 12 19.75v-1.5ZM8.75 15A3.25 3.25 0 0 1 12 11.75v-1.5A4.75 4.75 0 0 0 7.25 15h1.5ZM12 11.75A3.25 3.25 0 0 1 15.25 15h1.5A4.75 4.75 0 0 0 12 10.25v1.5ZM11.25 15a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm3 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z' })));
};
var ForwardRef$21 = forwardRef(SvgSmartPlug);

var SvgSmartPower = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15.712 4.288a.75.75 0 0 0 1.061-1.061l-1.06 1.06Zm-6.364 1.06A.75.75 0 0 0 10.41 6.41L9.35 5.35ZM7.227 3.227a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.364 3.182a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm1.73 1.587a.75.75 0 1 0-.643 1.355l.644-1.355Zm-6 1.355a.75.75 0 0 0-.643-1.355l.644 1.355ZM12.75 8a.75.75 0 0 0-1.5 0h1.5Zm-1.5 2a.75.75 0 0 0 1.5 0h-1.5ZM12 2.75a5.23 5.23 0 0 1 3.712 1.538l1.061-1.061A6.731 6.731 0 0 0 12 1.25v1.5Zm-1.591 3.659A2.24 2.24 0 0 1 12 5.75v-1.5a3.74 3.74 0 0 0-2.652 1.098L10.41 6.41ZM8.288 4.288A5.231 5.231 0 0 1 12 2.75v-1.5a6.731 6.731 0 0 0-4.773 1.977l1.06 1.06ZM12 5.75a2.24 2.24 0 0 1 1.591.659l1.06-1.06A3.74 3.74 0 0 0 12 4.25v1.5ZM18.25 15A6.25 6.25 0 0 1 12 21.25v1.5A7.75 7.75 0 0 0 19.75 15h-1.5ZM12 21.25A6.25 6.25 0 0 1 5.75 15h-1.5A7.75 7.75 0 0 0 12 22.75v-1.5Zm2.678-11.899A6.25 6.25 0 0 1 18.25 15h1.5a7.75 7.75 0 0 0-4.428-7.004l-.644 1.355ZM5.75 15a6.25 6.25 0 0 1 3.572-5.649l-.644-1.355A7.75 7.75 0 0 0 4.25 15h1.5Zm5.5-7v2h1.5V8h-1.5Z' })));
};
var ForwardRef$20 = forwardRef(SvgSmartPower);

var SvgSmartRemote = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M12.75 11.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm3 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm3 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-3 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-3 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-3 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.038-13.962a.75.75 0 0 0 1.061-1.061l-1.06 1.06Zm-6.364 1.06A.75.75 0 0 0 10.41 6.41L9.35 5.35ZM7.227 3.227a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.364 3.182a.75.75 0 0 0 1.06-1.06l-1.06 1.06ZM12 2.75a5.23 5.23 0 0 1 3.712 1.538l1.061-1.061A6.731 6.731 0 0 0 12 1.25v1.5Zm-1.591 3.659A2.24 2.24 0 0 1 12 5.75v-1.5a3.74 3.74 0 0 0-2.652 1.098L10.41 6.41ZM8.288 4.288A5.231 5.231 0 0 1 12 2.75v-1.5a6.731 6.731 0 0 0-4.773 1.977l1.06 1.06ZM12 5.75a2.24 2.24 0 0 1 1.591.659l1.06-1.06A3.74 3.74 0 0 0 12 4.25v1.5Zm-2 3h4v-1.5h-4v1.5ZM17.25 12v6h1.5v-6h-1.5ZM14 21.25h-4v1.5h4v-1.5ZM6.75 18v-6h-1.5v6h1.5ZM10 21.25A3.25 3.25 0 0 1 6.75 18h-1.5A4.75 4.75 0 0 0 10 22.75v-1.5ZM17.25 18A3.25 3.25 0 0 1 14 21.25v1.5A4.75 4.75 0 0 0 18.75 18h-1.5ZM14 8.75A3.25 3.25 0 0 1 17.25 12h1.5A4.75 4.75 0 0 0 14 7.25v1.5Zm-4-1.5A4.75 4.75 0 0 0 5.25 12h1.5A3.25 3.25 0 0 1 10 8.75v-1.5Z' })));
};
var ForwardRef$1$ = forwardRef(SvgSmartRemote);

var SvgSmartSpeaker = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15.712 7.288a.75.75 0 1 0 1.06-1.061l-1.06 1.06Zm-6.364 1.06A.75.75 0 1 0 10.41 9.41L9.35 8.35ZM7.227 6.227a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.364 3.182a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM12 5.75a5.23 5.23 0 0 1 3.712 1.538l1.06-1.061A6.731 6.731 0 0 0 12 4.25v1.5Zm-1.591 3.659A2.24 2.24 0 0 1 12 8.75v-1.5a3.74 3.74 0 0 0-2.652 1.098L10.41 9.41ZM8.288 7.288A5.231 5.231 0 0 1 12 5.75v-1.5a6.731 6.731 0 0 0-4.773 1.977l1.06 1.06ZM12 8.75a2.24 2.24 0 0 1 1.591.659l1.06-1.06A3.74 3.74 0 0 0 12 7.25v1.5Zm-3-6h6v-1.5H9v1.5ZM18.25 6v12h1.5V6h-1.5ZM15 21.25H9v1.5h6v-1.5ZM5.75 18V6h-1.5v12h1.5ZM9 21.25A3.25 3.25 0 0 1 5.75 18h-1.5A4.75 4.75 0 0 0 9 22.75v-1.5ZM18.25 18A3.25 3.25 0 0 1 15 21.25v1.5A4.75 4.75 0 0 0 19.75 18h-1.5ZM15 2.75A3.25 3.25 0 0 1 18.25 6h1.5A4.75 4.75 0 0 0 15 1.25v1.5Zm-6-1.5A4.75 4.75 0 0 0 4.25 6h1.5A3.25 3.25 0 0 1 9 2.75v-1.5ZM15.25 15A3.25 3.25 0 0 1 12 18.25v1.5A4.75 4.75 0 0 0 16.75 15h-1.5ZM12 18.25A3.25 3.25 0 0 1 8.75 15h-1.5A4.75 4.75 0 0 0 12 19.75v-1.5ZM8.75 15A3.25 3.25 0 0 1 12 11.75v-1.5A4.75 4.75 0 0 0 7.25 15h1.5ZM12 11.75A3.25 3.25 0 0 1 15.25 15h1.5A4.75 4.75 0 0 0 12 10.25v1.5Z' }),
        React.createElement("circle", { cx: 12, cy: 15, r: 1, fill: 'currentColor' })));
};
var ForwardRef$1_ = forwardRef(SvgSmartSpeaker);

var SvgSmartSwitch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15.712 7.045a.75.75 0 0 0 1.061-1.06l-1.06 1.06Zm-6.364 1.06a.75.75 0 0 0 1.061 1.061l-1.06-1.06Zm-2.121-2.12a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.364 3.181a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM5 14h.75H5Zm2-2v-.75.75Zm0 6v.75V18Zm-2-2h-.75H5Zm14 0h.75H19Zm-2 2v-.75.75Zm2-4h-.75.75Zm-2-2v-.75.75Zm-5 2h-.75.75Zm2-2v.75V12Zm0 6v.75V18Zm-2-2h.75H12Zm0-10.493a5.23 5.23 0 0 1 3.712 1.538l1.061-1.06A6.731 6.731 0 0 0 12 4.006v1.5Zm-1.591 3.66A2.24 2.24 0 0 1 12 8.506v-1.5a3.74 3.74 0 0 0-2.652 1.099l1.061 1.06ZM8.288 7.044A5.231 5.231 0 0 1 12 5.507v-1.5a6.731 6.731 0 0 0-4.773 1.977l1.06 1.061ZM12 8.507a2.24 2.24 0 0 1 1.591.66l1.06-1.061A3.74 3.74 0 0 0 12 7.007v1.5ZM18.25 14v2h1.5v-2h-1.5ZM17 17.25H7v1.5h10v-1.5ZM5.75 16v-2h-1.5v2h1.5ZM7 12.75h10v-1.5H7v1.5ZM5.75 14c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 4.25 14h1.5ZM7 17.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 7 18.75v-1.5ZM18.25 16c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 19.75 16h-1.5Zm1.5-2A2.75 2.75 0 0 0 17 11.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM17 17.25h-3v1.5h3v-1.5ZM12.75 16v-2h-1.5v2h1.5ZM14 12.75h3v-1.5h-3v1.5ZM12.75 14c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 11.25 14h1.5ZM14 17.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 14 18.75v-1.5Z' })));
};
var ForwardRef$1Z = forwardRef(SvgSmartSwitch);

var SvgSmartThermostat = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 19, r: 1, fill: 'currentColor' }),
        React.createElement("path", { fill: 'currentColor', d: 'M15.712 4.288a.75.75 0 1 0 1.06-1.061l-1.06 1.06Zm-6.364 1.06A.75.75 0 1 0 10.41 6.41L9.35 5.35ZM7.227 3.227a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.364 3.182a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM10 10h.75H10Zm4 0h.75H14Zm0 6.764h-.75c0 .213.09.416.25.559l.5-.56Zm-4 0 .5.559a.75.75 0 0 0 .25-.56H10Zm7-8.514a.75.75 0 0 0 0 1.5v-1.5Zm1 1.5a.75.75 0 0 0 0-1.5v1.5Zm-1 1.5a.75.75 0 0 0 0 1.5v-1.5Zm3 1.5a.75.75 0 0 0 0-1.5v1.5Zm-3 1.5a.75.75 0 0 0 0 1.5v-1.5Zm1 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6-13a5.23 5.23 0 0 1 3.712 1.538l1.06-1.061A6.731 6.731 0 0 0 12 1.25v1.5Zm-1.591 3.659A2.24 2.24 0 0 1 12 5.75v-1.5a3.74 3.74 0 0 0-2.652 1.098L10.41 6.41ZM8.288 4.288A5.231 5.231 0 0 1 12 2.75v-1.5a6.731 6.731 0 0 0-4.773 1.977l1.06 1.06ZM12 5.75a2.24 2.24 0 0 1 1.591.659l1.06-1.06A3.74 3.74 0 0 0 12 4.25v1.5ZM10.75 10c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 10h1.5Zm4 0A2.75 2.75 0 0 0 12 7.25v1.5c.69 0 1.25.56 1.25 1.25h1.5Zm-.5 9A2.25 2.25 0 0 1 12 21.25v1.5A3.75 3.75 0 0 0 15.75 19h-1.5ZM12 21.25A2.25 2.25 0 0 1 9.75 19h-1.5A3.75 3.75 0 0 0 12 22.75v-1.5Zm1.5-3.927c.461.413.75 1.01.75 1.677h1.5c0-1.11-.484-2.11-1.25-2.795l-1 1.118ZM13.25 10v6.764h1.5V10h-1.5Zm-3.5 9c0-.666.289-1.264.75-1.677l-1-1.118A3.743 3.743 0 0 0 8.25 19h1.5Zm1-2.236V10h-1.5v6.764h1.5ZM17 9.75h1v-1.5h-1v1.5Zm0 3h3v-1.5h-3v1.5Zm0 3h1v-1.5h-1v1.5Z' })));
};
var ForwardRef$1Y = forwardRef(SvgSmartThermostat);

var SvgSmartTv = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M12.75 13a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.962-3.712a.75.75 0 1 0 1.06-1.061l-1.06 1.06Zm-6.364 1.06a.75.75 0 1 0 1.061 1.061l-1.06-1.06ZM7.227 8.227a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.364 3.182a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM2 7h-.75H2Zm4-4v.75V3Zm0 14v-.75.75Zm-4-4h.75H2Zm20 0h.75H22Zm-4 4v.75V17Zm4-10h-.75.75ZM6.751 20.293a.75.75 0 1 0 .498 1.415l-.498-1.415Zm10.014 1.42a.75.75 0 1 0 .47-1.425l-.47 1.424ZM11.25 20a.75.75 0 0 0 1.5 0h-1.5Zm1.5-3a.75.75 0 0 0-1.5 0h1.5ZM12 7.75a5.23 5.23 0 0 1 3.712 1.538l1.06-1.061A6.731 6.731 0 0 0 12 6.25v1.5Zm-1.591 3.659A2.24 2.24 0 0 1 12 10.75v-1.5a3.74 3.74 0 0 0-2.652 1.098l1.061 1.061ZM8.288 9.288A5.231 5.231 0 0 1 12 7.75v-1.5a6.731 6.731 0 0 0-4.773 1.977l1.06 1.06ZM12 10.75a2.24 2.24 0 0 1 1.591.659l1.06-1.06A3.74 3.74 0 0 0 12 9.25v1.5ZM21.25 7v6h1.5V7h-1.5ZM18 16.25H6v1.5h12v-1.5ZM2.75 13V7h-1.5v6h1.5ZM6 3.75h12v-1.5H6v1.5ZM2.75 7A3.25 3.25 0 0 1 6 3.75v-1.5A4.75 4.75 0 0 0 1.25 7h1.5ZM6 16.25A3.25 3.25 0 0 1 2.75 13h-1.5A4.75 4.75 0 0 0 6 17.75v-1.5ZM21.25 13A3.25 3.25 0 0 1 18 16.25v1.5A4.75 4.75 0 0 0 22.75 13h-1.5Zm1.5-6A4.75 4.75 0 0 0 18 2.25v1.5A3.25 3.25 0 0 1 21.25 7h1.5ZM7.249 21.707c1.843-.648 3.236-.955 4.638-.957 1.406-.002 2.878.303 4.878.962l.47-1.424c-2.07-.683-3.715-1.04-5.35-1.038-1.638.002-3.21.366-5.134 1.043l.498 1.415ZM12.75 20v-3h-1.5v3h1.5Z' })));
};
var ForwardRef$1X = forwardRef(SvgSmartTv);

var SvgSmartWatch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M12.75 15a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.962-3.712a.75.75 0 0 0 1.061-1.061l-1.06 1.06Zm-6.364 1.06a.75.75 0 1 0 1.061 1.061l-1.06-1.06Zm-2.121-2.121a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.364 3.182a.75.75 0 0 0 1.06-1.06l-1.06 1.06ZM5 10h-.75H5Zm4-4v.75V6Zm0 12v.75V18Zm-4-4h.75H5Zm14 0h.75H19Zm-4 4v-.75.75Zm4-8h-.75.75Zm-4-4v-.75V6Zm1-2h-.75.75ZM8 4h-.75H8Zm2-2v-.75V2Zm4 0v.75V2ZM8 20h.75H8Zm8 0h.75H16Zm-2 2v-.75.75Zm-4 0v.75V22Zm2-12.25a5.23 5.23 0 0 1 3.712 1.538l1.061-1.061A6.731 6.731 0 0 0 12 8.25v1.5Zm-1.591 3.659A2.24 2.24 0 0 1 12 12.75v-1.5a3.74 3.74 0 0 0-2.652 1.098l1.061 1.061Zm-2.121-2.121A5.231 5.231 0 0 1 12 9.75v-1.5a6.731 6.731 0 0 0-4.773 1.977l1.06 1.06ZM12 12.75a2.24 2.24 0 0 1 1.591.659l1.06-1.06A3.74 3.74 0 0 0 12 11.25v1.5ZM18.25 10v4h1.5v-4h-1.5ZM15 17.25H9v1.5h6v-1.5ZM5.75 14v-4h-1.5v4h1.5ZM9 6.75h6v-1.5H9v1.5ZM5.75 10A3.25 3.25 0 0 1 9 6.75v-1.5A4.75 4.75 0 0 0 4.25 10h1.5ZM9 17.25A3.25 3.25 0 0 1 5.75 14h-1.5A4.75 4.75 0 0 0 9 18.75v-1.5ZM18.25 14A3.25 3.25 0 0 1 15 17.25v1.5A4.75 4.75 0 0 0 19.75 14h-1.5Zm1.5-4A4.75 4.75 0 0 0 15 5.25v1.5A3.25 3.25 0 0 1 18.25 10h1.5Zm-4.5-6v2h1.5V4h-1.5Zm-6.5 2V4h-1.5v2h1.5ZM10 2.75h4v-1.5h-4v1.5ZM8.75 4c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 7.25 4h1.5Zm8 0A2.75 2.75 0 0 0 14 1.25v1.5c.69 0 1.25.56 1.25 1.25h1.5Zm-8 16v-2h-1.5v2h1.5Zm6.5-2v2h1.5v-2h-1.5ZM14 21.25h-4v1.5h4v-1.5ZM15.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 20h-1.5Zm-8 0A2.75 2.75 0 0 0 10 22.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5Z' })));
};
var ForwardRef$1W = forwardRef(SvgSmartWatch);

var SvgSnapchat = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 17c-1.102 0-1.844 0-2.365.589-.608.687-1.279 1.411-2.197 1.411h-.771a2 2 0 0 0-1.2.4l-1.067.8a4 4 0 0 1-4.8 0l-1.067-.8a2 2 0 0 0-1.2-.4h-.771c-.918 0-1.59-.724-2.197-1.411C3.845 17 3.102 17 2 17l2.4-1.8A4 4 0 0 0 6 12v-.5h-.5a1.5 1.5 0 0 1 0-3H6V8a6 6 0 1 1 12 0v.5h.5a1.5 1.5 0 0 1 0 3H18v.5a4 4 0 0 0 1.6 3.2L22 17Z' })));
};
var ForwardRef$1V = forwardRef(SvgSnapchat);

var SvgSolarPanel = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm3.447 7.106-.67-.336.67.336Zm17.106 0 .67-.336-.67.336Zm-2-4-.671.335.67-.335Zm-13.106 0 .671.335-.67-.335ZM4 5.25a.75.75 0 0 0 0 1.5v-1.5Zm16 1.5a.75.75 0 0 0 0-1.5v1.5ZM10.2 2v-.75a.75.75 0 0 0-.742.639L10.2 2Zm3.6 0 .742-.111a.75.75 0 0 0-.742-.639V2Zm1.2 8v.75a.75.75 0 0 0 .742-.861L15 10Zm-6 0-.742-.111A.75.75 0 0 0 9 10.75V10Zm10.75 0a.75.75 0 0 0-1.5 0h1.5Zm-14 0a.75.75 0 0 0-1.5 0h1.5Zm10.75 7.25a.75.75 0 0 0 0 1.5v-1.5Zm-9 1.5a.75.75 0 0 0 0-1.5v1.5Zm6.1-4.3a.75.75 0 1 0-1.2-.9l1.2.9ZM10 18l-.6-.45a.75.75 0 0 0 .6 1.2V18Zm4 0 .6.45a.75.75 0 0 0-.6-1.2V18Zm-3.6 3.55a.75.75 0 1 0 1.2.9l-1.2-.9ZM7.236 2.75h9.528v-1.5H7.236v1.5Zm10.646.691 2 4 1.341-.67-2-4-1.341.67Zm.882 5.809H5.236v1.5h13.528v-1.5ZM4.118 7.441l2-4-1.342-.67-2 4 1.342.67ZM5.236 9.25a1.25 1.25 0 0 1-1.118-1.809l-1.342-.67c-.914 1.828.416 3.979 2.46 3.979v-1.5Zm14.646-1.809a1.25 1.25 0 0 1-1.118 1.809v1.5c2.044 0 3.374-2.151 2.46-3.98l-1.342.671ZM16.764 2.75c.473 0 .906.268 1.118.691l1.341-.67a2.75 2.75 0 0 0-2.46-1.521v1.5Zm-9.528-1.5a2.75 2.75 0 0 0-2.46 1.52l1.342.671a1.25 1.25 0 0 1 1.118-.691v-1.5ZM4 6.75h16v-1.5H4v1.5Zm6.2-4h3.6v-1.5h-3.6v1.5Zm2.858-.639 1.2 8 1.484-.222-1.2-8-1.484.222ZM15 9.25H9v1.5h6v-1.5Zm-5.258.861 1.2-8-1.484-.222-1.2 8 1.484.222ZM18.25 10v6h1.5v-6h-1.5Zm-12.5 6v-6h-1.5v6h1.5ZM17 17.25h-.5v1.5h.5v-1.5Zm-9.5 0H7v1.5h.5v-1.5ZM4.25 16A2.75 2.75 0 0 0 7 18.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5Zm14 0c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 19.75 16h-1.5Zm-5.85-2.45-3 4 1.2.9 3-4-1.2-.9Zm-2.4 5.2h4v-1.5h-4v1.5Zm3.4-1.2-3 4 1.2.9 3-4-1.2-.9Z' })));
};
var ForwardRef$1U = forwardRef(SvgSolarPanel);

var SvgSpotify = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M6.5 15c1.667-.5 5.9-1 9.5 1m-9.5-4c1.667-.5 6.9-1 10.5 1M6 9c2.5-1 8.4-1 12 1' })));
};
var ForwardRef$1T = forwardRef(SvgSpotify);

var SvgSpringNotesAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-6.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm5.5 5a.75.75 0 0 0-1.5 0h1.5Zm-1.5 6a.75.75 0 0 0 1.5 0h-1.5ZM15 13.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-2-8h10v-1.5H7v1.5ZM20.25 7.5V18h1.5V7.5h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V7.5h-1.5V18h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5ZM15.25 2v3h1.5V2h-1.5Zm-8 0v3h1.5V2h-1.5Zm4 8v6h1.5v-6h-1.5ZM15 12.25H9v1.5h6v-1.5Z' })));
};
var ForwardRef$1S = forwardRef(SvgSpringNotesAdd);

var SvgSpringNotesCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-6.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm2.219 7.414a.75.75 0 0 0-.938 1.172l.938-1.172Zm1.284 1.988.468-.585-.468.585Zm1.377-.122-.564-.494.564.494Zm3.434-2.786a.75.75 0 1 0-1.128-.988l1.128.988ZM7 4.25h10v-1.5H7v1.5ZM20.25 7.5V18h1.5V7.5h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V7.5h-1.5V18h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5ZM15.25 2v3h1.5V2h-1.5Zm-8 0v3h1.5V2h-1.5Zm1.281 11.586 1.753 1.402.937-1.171-1.752-1.403-.938 1.172Zm4.163 1.188 2.87-3.28-1.128-.988-2.87 3.28 1.128.988Zm-2.41.214a1.75 1.75 0 0 0 2.41-.214l-1.128-.988a.25.25 0 0 1-.345.03l-.937 1.172Z' })));
};
var ForwardRef$1R = forwardRef(SvgSpringNotesCheck);

var SvgSpringNotesDelete = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-6.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm7.402 6.409a.75.75 0 0 0-1.061-1.06l1.06 1.06Zm-5.304 3.182a.75.75 0 1 0 1.061 1.06l-1.06-1.06Zm4.243 1.06a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-3.182-5.303a.75.75 0 1 0-1.06 1.061l1.06-1.06ZM7 4.25h10v-1.5H7v1.5ZM20.25 7.5V18h1.5V7.5h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V7.5h-1.5V18h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5ZM15.25 2v3h1.5V2h-1.5Zm-8 0v3h1.5V2h-1.5Zm6.341 8.348-4.243 4.243 1.061 1.06 4.243-4.242-1.061-1.06Zm1.06 4.243-4.242-4.243-1.06 1.061 4.242 4.243 1.06-1.061Z' })));
};
var ForwardRef$1Q = forwardRef(SvgSpringNotesDelete);

var SvgSpringNotesDownload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-6.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm7.28 9.53a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-3.237.763.53-.53-.53.53Zm-.763-1.823a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM12.75 10a.75.75 0 0 0-1.5 0h1.5Zm-1.5 5a.75.75 0 0 0 1.5 0h-1.5ZM7 4.25h10v-1.5H7v1.5ZM20.25 7.5V18h1.5V7.5h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V7.5h-1.5V18h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5ZM15.25 2v3h1.5V2h-1.5Zm-8 0v3h1.5V2h-1.5Zm6.22 11.47-1.293 1.293 1.06 1.06 1.293-1.293-1.06-1.06Zm-1.647 1.293L10.53 13.47l-1.06 1.06 1.293 1.293 1.06-1.06Zm.354 0a.25.25 0 0 1-.354 0l-1.06 1.06a1.75 1.75 0 0 0 2.474 0l-1.06-1.06ZM11.25 10v5h1.5v-5h-1.5Z' })));
};
var ForwardRef$1P = forwardRef(SvgSpringNotesDownload);

var SvgSpringNotesEditAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20.25 10a.75.75 0 0 0 1.5 0h-1.5ZM9 22.75a.75.75 0 0 0 0-1.5v1.5Zm3-.75-.721-.206-.37 1.297 1.297-.37L12 22Zm1.128-3.495.53.53-.53-.53Zm-.255.434-.722-.205.722.205Zm2.188 2.188.205.722-.205-.722Zm3.082-7.637-.53-.53.53.53ZM8.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm9.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-2.5 3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 6a.75.75 0 0 0 1.5 0h-1.5ZM15 11.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-2-6h10v-1.5H7v1.5ZM3.75 18V7.5h-1.5V18h1.5Zm16.5-10.5V10h1.5V7.5h-1.5ZM9 21.25H7v1.5h2v-1.5ZM2.25 18A4.75 4.75 0 0 0 7 22.75v-1.5A3.25 3.25 0 0 1 3.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5Zm12.98 12.577-5.015 5.015 1.06 1.06 5.015-5.014-1.06-1.061Zm-6.322 3.708 5.015-5.014-1.06-1.061-5.015 5.015 1.06 1.06Zm1.197 1.371-3.06.873.41 1.442 3.061-.872-.41-1.443Zm-2.134 1.8.873-3.061-1.443-.411-.872 3.06 1.442.412Zm-.123-4.231a1.75 1.75 0 0 0-.447.759l1.443.41a.253.253 0 0 1 .064-.109l-1.06-1.06Zm2.367 2.367a.253.253 0 0 1-.11.064l.411 1.443c.287-.082.548-.236.76-.447l-1.061-1.06Zm5.014-6.321a.923.923 0 0 1 0 1.306l1.061 1.06a2.424 2.424 0 0 0 0-3.427l-1.06 1.06Zm1.061-1.061a2.424 2.424 0 0 0-3.428 0l1.061 1.06a.924.924 0 0 1 1.306 0l1.061-1.06ZM7.25 2v3h1.5V2h-1.5Zm8 0v3h1.5V2h-1.5Zm-4 6v6h1.5V8h-1.5ZM15 10.25H9v1.5h6v-1.5Z' })));
};
var ForwardRef$1O = forwardRef(SvgSpringNotesEditAdd);

var SvgSpringNotesEditCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20.25 10a.75.75 0 0 0 1.5 0h-1.5ZM9 22.75a.75.75 0 0 0 0-1.5v1.5ZM8.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm9.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-5.781 5.414a.75.75 0 0 0-.938 1.172l.938-1.172Zm1.284 1.988.468-.585-.468.585Zm1.377-.122-.564-.494.564.494Zm3.434-2.786a.75.75 0 1 0-1.128-.988l1.128.988ZM12 22l-.721-.206a.75.75 0 0 0 .927.927L12 22Zm1.128-3.495.53.53-.53-.53Zm-.255.434-.722-.205.722.205Zm2.188 2.188.205.722-.205-.722Zm3.082-7.637-.53-.53.53.53ZM7 4.25h10v-1.5H7v1.5ZM3.75 18V7.5h-1.5V18h1.5Zm16.5-10.5V10h1.5V7.5h-1.5ZM9 21.25H7v1.5h2v-1.5ZM2.25 18A4.75 4.75 0 0 0 7 22.75v-1.5A3.25 3.25 0 0 1 3.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5ZM7.25 2v3h1.5V2h-1.5Zm8 0v3h1.5V2h-1.5Zm-6.719 9.586 1.753 1.402.937-1.171-1.752-1.403-.938 1.172Zm4.163 1.188 2.87-3.28-1.128-.988-2.87 3.28 1.128.988Zm-2.41.214a1.75 1.75 0 0 0 2.41-.214l-1.128-.988a.25.25 0 0 1-.345.03l-.937 1.172Zm9.695 2.339-5.014 5.015 1.06 1.06 5.015-5.014-1.06-1.061Zm-6.32 3.708 5.014-5.014-1.06-1.061-5.015 5.015 1.06 1.06Zm1.196 1.371-3.06.873.41 1.442 3.061-.872-.41-1.443Zm-2.134 1.8.873-3.061-1.443-.411-.872 3.06 1.442.412Zm-.123-4.231a1.75 1.75 0 0 0-.447.759l1.443.41a.253.253 0 0 1 .064-.109l-1.06-1.06Zm2.367 2.367a.253.253 0 0 1-.11.064l.411 1.443c.287-.082.548-.236.76-.447l-1.061-1.06Zm5.014-6.321a.923.923 0 0 1 0 1.306l1.061 1.06a2.424 2.424 0 0 0 0-3.427l-1.06 1.06Zm1.061-1.061a2.424 2.424 0 0 0-3.428 0l1.061 1.06a.924.924 0 0 1 1.306 0l1.061-1.06Z' })));
};
var ForwardRef$1N = forwardRef(SvgSpringNotesEditCheck);

var SvgSpringNotesEditDelete = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20.25 10a.75.75 0 0 0 1.5 0h-1.5ZM9 22.75a.75.75 0 0 0 0-1.5v1.5Zm3-.75-.721-.206-.37 1.297 1.297-.37L12 22Zm1.128-3.495.53.53-.53-.53Zm-.255.434-.722-.205.722.205Zm2.188 2.188.205.722-.205-.722Zm3.082-7.637-.53-.53.53.53ZM8.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm9.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-1.659 8.652a.75.75 0 0 0 1.06-1.061l-1.06 1.06Zm-3.182-5.304a.75.75 0 1 0-1.06 1.061l1.06-1.06Zm4.243 1.061a.75.75 0 1 0-1.061-1.06l1.06 1.06Zm-5.304 3.182a.75.75 0 1 0 1.061 1.06l-1.06-1.06ZM7 4.25h10v-1.5H7v1.5ZM3.75 18V7.5h-1.5V18h1.5Zm16.5-10.5V10h1.5V7.5h-1.5ZM9 21.25H7v1.5h2v-1.5ZM2.25 18A4.75 4.75 0 0 0 7 22.75v-1.5A3.25 3.25 0 0 1 3.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5Zm12.98 12.577-5.015 5.015 1.06 1.06 5.015-5.014-1.06-1.061Zm-6.322 3.708 5.015-5.014-1.06-1.061-5.015 5.015 1.06 1.06Zm1.197 1.371-3.06.873.41 1.442 3.061-.872-.41-1.443Zm-2.134 1.8.873-3.061-1.443-.411-.872 3.06 1.442.412Zm-.123-4.231a1.75 1.75 0 0 0-.447.759l1.443.41a.253.253 0 0 1 .064-.109l-1.06-1.06Zm2.367 2.367a.253.253 0 0 1-.11.064l.411 1.443c.287-.082.548-.236.76-.447l-1.061-1.06Zm5.014-6.321a.923.923 0 0 1 0 1.306l1.061 1.06a2.424 2.424 0 0 0 0-3.427l-1.06 1.06Zm1.061-1.061a2.424 2.424 0 0 0-3.428 0l1.061 1.06a.924.924 0 0 1 1.306 0l1.061-1.06ZM7.25 2v3h1.5V2h-1.5Zm8 0v3h1.5V2h-1.5Zm-.598 10.591-4.243-4.243-1.06 1.061 4.242 4.243 1.06-1.061ZM13.59 8.348l-4.243 4.243 1.061 1.06 4.243-4.242-1.061-1.06Z' })));
};
var ForwardRef$1M = forwardRef(SvgSpringNotesEditDelete);

var SvgSpringNotesEditDownload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20.25 10a.75.75 0 0 0 1.5 0h-1.5ZM9 22.75a.75.75 0 0 0 0-1.5v1.5Zm3-.75-.721-.206-.37 1.297 1.297-.37L12 22Zm1.128-3.495.53.53-.53-.53Zm-.255.434-.722-.205.722.205Zm2.188 2.188.205.722-.205-.722Zm3.082-7.637-.53-.53.53.53ZM8.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm9.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-.72 7.53a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-1.823.763.53.53-.53-.53Zm-1.414 0 .53-.53-.53.53Zm-.763-1.823a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM12.75 9a.75.75 0 0 0-1.5 0h1.5Zm-1.5 4a.75.75 0 0 0 1.5 0h-1.5ZM7 4.25h10v-1.5H7v1.5ZM3.75 18V7.5h-1.5V18h1.5Zm16.5-10.5V10h1.5V7.5h-1.5ZM9 21.25H7v1.5h2v-1.5ZM2.25 18A4.75 4.75 0 0 0 7 22.75v-1.5A3.25 3.25 0 0 1 3.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5Zm12.98 12.577-5.015 5.015 1.06 1.06 5.015-5.014-1.06-1.061Zm-6.322 3.708 5.015-5.014-1.06-1.061-5.015 5.015 1.06 1.06Zm1.197 1.371-3.06.873.41 1.442 3.061-.872-.41-1.443Zm-2.134 1.8.873-3.061-1.443-.411-.872 3.06 1.442.412Zm-.123-4.231a1.75 1.75 0 0 0-.447.759l1.443.41a.253.253 0 0 1 .064-.109l-1.06-1.06Zm2.367 2.367a.253.253 0 0 1-.11.064l.411 1.443c.287-.082.548-.236.76-.447l-1.061-1.06Zm5.014-6.321a.923.923 0 0 1 0 1.306l1.061 1.06a2.424 2.424 0 0 0 0-3.427l-1.06 1.06Zm1.061-1.061a2.424 2.424 0 0 0-3.428 0l1.061 1.06a.924.924 0 0 1 1.306 0l1.061-1.06ZM7.25 2v3h1.5V2h-1.5Zm8 0v3h1.5V2h-1.5Zm-1.78 9.47-1.293 1.293 1.06 1.06 1.293-1.293-1.06-1.06Zm-1.647 1.293L10.53 11.47l-1.06 1.06 1.293 1.293 1.06-1.06Zm.354 0a.25.25 0 0 1-.354 0l-1.06 1.06a1.75 1.75 0 0 0 2.474 0l-1.06-1.06ZM11.25 9v4h1.5V9h-1.5Z' })));
};
var ForwardRef$1L = forwardRef(SvgSpringNotesEditDownload);

var SvgSpringNotesEditFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20.25 10a.75.75 0 0 0 1.5 0h-1.5ZM9 22.75a.75.75 0 0 0 0-1.5v1.5Zm3-.75-.721-.206a.75.75 0 0 0 .927.927L12 22Zm1.128-3.495.53.53-.53-.53Zm-.255.434-.722-.205.722.205Zm2.188 2.188.205.722-.205-.722Zm3.082-7.637-.53-.53.53.53ZM8.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm9.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM12 8.94l-.53.53a.75.75 0 0 0 1.06 0L12 8.94Zm.265-.266.53.53-.53-.53Zm-.53 0-.53.53.53-.53Zm-2.652 2.652.53-.53-.53.53Zm1.856 1.856-.53.53.53-.53ZM7 4.25h10v-1.5H7v1.5ZM3.75 18V7.5h-1.5V18h1.5Zm16.5-10.5V10h1.5V7.5h-1.5ZM9 21.25H7v1.5h2v-1.5ZM2.25 18A4.75 4.75 0 0 0 7 22.75v-1.5A3.25 3.25 0 0 1 3.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5Zm12.98 12.577-5.015 5.015 1.06 1.06 5.015-5.014-1.06-1.061Zm-6.322 3.708 5.015-5.014-1.06-1.061-5.015 5.015 1.06 1.06Zm1.197 1.371-3.06.873.41 1.442 3.061-.872-.41-1.443Zm-2.134 1.8.873-3.061-1.443-.411-.872 3.06 1.442.412Zm-.123-4.231a1.75 1.75 0 0 0-.447.759l1.443.41a.253.253 0 0 1 .064-.109l-1.06-1.06Zm2.367 2.367a.253.253 0 0 1-.11.064l.411 1.443c.287-.082.548-.236.76-.447l-1.061-1.06Zm5.014-6.321a.923.923 0 0 1 0 1.306l1.061 1.06a2.424 2.424 0 0 0 0-3.427l-1.06 1.06Zm1.061-1.061a2.424 2.424 0 0 0-3.428 0l1.061 1.06a.924.924 0 0 1 1.306 0l1.061-1.06ZM7.25 2v3h1.5V2h-1.5Zm8 0v3h1.5V2h-1.5Zm-2.72 7.47.265-.265-1.06-1.061-.265.265 1.06 1.06Zm-1.326-.265.266.265 1.06-1.061-.265-.265-1.06 1.06Zm-2.651 2.651 1.856 1.856 1.06-1.06-1.856-1.856-1.06 1.06Zm5.038 1.856 1.856-1.856-1.06-1.06-1.857 1.856 1.06 1.06Zm.795-4.508c.44.44.44 1.152 0 1.591l1.061 1.061a2.625 2.625 0 0 0 0-3.712l-1.06 1.06Zm1.061-1.06a2.625 2.625 0 0 0-3.712 0l1.06 1.06a1.126 1.126 0 0 1 1.591 0l1.061-1.06Zm-5.834 1.06a1.126 1.126 0 0 1 1.591 0l1.061-1.06a2.625 2.625 0 0 0-3.712 0l1.06 1.06Zm.796 4.508a2.25 2.25 0 0 0 3.182 0l-1.06-1.06a.75.75 0 0 1-1.061 0l-1.061 1.06ZM8.553 8.144a2.625 2.625 0 0 0 0 3.712l1.06-1.06a1.125 1.125 0 0 1 0-1.591l-1.06-1.061Z' })));
};
var ForwardRef$1K = forwardRef(SvgSpringNotesEditFavourite);

var SvgSpringNotesEditMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20.25 10a.75.75 0 0 0 1.5 0h-1.5ZM9 22.75a.75.75 0 0 0 0-1.5v1.5Zm3-.75-.721-.206-.37 1.297 1.297-.37L12 22Zm1.128-3.495.53.53-.53-.53Zm-.255.434-.722-.205.722.205Zm2.188 2.188.205.722-.205-.722Zm3.082-7.637-.53-.53.53.53ZM8.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm9.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM15 11.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-2-6h10v-1.5H7v1.5ZM3.75 18V7.5h-1.5V18h1.5Zm16.5-10.5V10h1.5V7.5h-1.5ZM9 21.25H7v1.5h2v-1.5ZM2.25 18A4.75 4.75 0 0 0 7 22.75v-1.5A3.25 3.25 0 0 1 3.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5Zm12.98 12.577-5.015 5.015 1.06 1.06 5.015-5.014-1.06-1.061Zm-6.322 3.708 5.015-5.014-1.06-1.061-5.015 5.015 1.06 1.06Zm1.197 1.371-3.06.873.41 1.442 3.061-.872-.41-1.443Zm-2.134 1.8.873-3.061-1.443-.411-.872 3.06 1.442.412Zm-.123-4.231a1.75 1.75 0 0 0-.447.759l1.443.41a.253.253 0 0 1 .064-.109l-1.06-1.06Zm2.367 2.367a.253.253 0 0 1-.11.064l.411 1.443c.287-.082.548-.236.76-.447l-1.061-1.06Zm5.014-6.321a.923.923 0 0 1 0 1.306l1.061 1.06a2.424 2.424 0 0 0 0-3.427l-1.06 1.06Zm1.061-1.061a2.424 2.424 0 0 0-3.428 0l1.061 1.06a.924.924 0 0 1 1.306 0l1.061-1.06ZM7.25 2v3h1.5V2h-1.5Zm8 0v3h1.5V2h-1.5ZM15 10.25H9v1.5h6v-1.5Z' })));
};
var ForwardRef$1J = forwardRef(SvgSpringNotesEditMinus);

var SvgSpringNotesEditSearch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20.25 10a.75.75 0 0 0 1.5 0h-1.5ZM9 22.75a.75.75 0 0 0 0-1.5v1.5Zm3-.75-.721-.206-.37 1.297 1.297-.37L12 22Zm1.128-3.495.53.53-.53-.53Zm-.255.434-.722-.205.722.205Zm2.188 2.188.205.722-.205-.722Zm3.082-7.637-.53-.53.53.53ZM8.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm9.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-4.72 8.53a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-2.06-.06a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM7 4.25h10v-1.5H7v1.5ZM3.75 18V7.5h-1.5V18h1.5Zm16.5-10.5V10h1.5V7.5h-1.5ZM9 21.25H7v1.5h2v-1.5ZM2.25 18A4.75 4.75 0 0 0 7 22.75v-1.5A3.25 3.25 0 0 1 3.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5Zm12.98 12.577-5.015 5.015 1.06 1.06 5.015-5.014-1.06-1.061Zm-6.322 3.708 5.015-5.014-1.06-1.061-5.015 5.015 1.06 1.06Zm1.197 1.371-3.06.873.41 1.442 3.061-.872-.41-1.443Zm-2.134 1.8.873-3.061-1.443-.411-.872 3.06 1.442.412Zm-.123-4.231a1.75 1.75 0 0 0-.447.759l1.443.41a.253.253 0 0 1 .064-.109l-1.06-1.06Zm2.367 2.367a.253.253 0 0 1-.11.064l.411 1.443c.287-.082.548-.236.76-.447l-1.061-1.06Zm5.014-6.321a.923.923 0 0 1 0 1.306l1.061 1.06a2.424 2.424 0 0 0 0-3.427l-1.06 1.06Zm1.061-1.061a2.424 2.424 0 0 0-3.428 0l1.061 1.06a.924.924 0 0 1 1.306 0l1.061-1.06ZM7.25 2v3h1.5V2h-1.5Zm8 0v3h1.5V2h-1.5Zm-6.5 9A3.25 3.25 0 0 0 12 14.25v-1.5A1.75 1.75 0 0 1 10.25 11h-1.5ZM12 14.25A3.25 3.25 0 0 0 15.25 11h-1.5A1.75 1.75 0 0 1 12 12.75v1.5ZM15.25 11A3.25 3.25 0 0 0 12 7.75v1.5c.966 0 1.75.784 1.75 1.75h1.5ZM12 7.75A3.25 3.25 0 0 0 8.75 11h1.5c0-.966.784-1.75 1.75-1.75v-1.5Zm-2.53 4.72-1 1 1.06 1.06 1-1-1.06-1.06Z' })));
};
var ForwardRef$1I = forwardRef(SvgSpringNotesEditSearch);

var SvgSpringNotesEditUpload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20.25 10a.75.75 0 0 0 1.5 0h-1.5ZM9 22.75a.75.75 0 0 0 0-1.5v1.5Zm3-.75-.721-.206-.37 1.297 1.297-.37L12 22Zm1.128-3.495.53.53-.53-.53Zm-.255.434-.722-.205.722.205Zm2.188 2.188.205.722-.205-.722Zm3.082-7.637-.53-.53.53.53ZM8.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm9.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-1.78 6.116a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-.763-1.823.53-.53-.53.53Zm-1.414 0 .53.53-.53-.53Zm-1.823.763a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm1.78 3.53a.75.75 0 0 0 1.5 0h-1.5Zm1.5-4a.75.75 0 0 0-1.5 0h1.5ZM7 4.25h10v-1.5H7v1.5ZM3.75 18V7.5h-1.5V18h1.5Zm16.5-10.5V10h1.5V7.5h-1.5ZM9 21.25H7v1.5h2v-1.5ZM2.25 18A4.75 4.75 0 0 0 7 22.75v-1.5A3.25 3.25 0 0 1 3.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5Zm12.98 12.577-5.015 5.015 1.06 1.06 5.015-5.014-1.06-1.061Zm-6.322 3.708 5.015-5.014-1.06-1.061-5.015 5.015 1.06 1.06Zm1.197 1.371-3.06.873.41 1.442 3.061-.872-.41-1.443Zm-2.134 1.8.873-3.061-1.443-.411-.872 3.06 1.442.412Zm-.123-4.231a1.75 1.75 0 0 0-.447.759l1.443.41a.253.253 0 0 1 .064-.109l-1.06-1.06Zm2.367 2.367a.253.253 0 0 1-.11.064l.411 1.443c.287-.082.548-.236.76-.447l-1.061-1.06Zm5.014-6.321a.923.923 0 0 1 0 1.306l1.061 1.06a2.424 2.424 0 0 0 0-3.427l-1.06 1.06Zm1.061-1.061a2.424 2.424 0 0 0-3.428 0l1.061 1.06a.924.924 0 0 1 1.306 0l1.061-1.06ZM7.25 2v3h1.5V2h-1.5Zm8 0v3h1.5V2h-1.5Zm-.72 8.056-1.293-1.293-1.06 1.06 1.293 1.293 1.06-1.06Zm-3.767-1.293L9.47 10.056l1.06 1.06 1.293-1.293-1.06-1.06Zm2.474 0a1.75 1.75 0 0 0-2.474 0l1.06 1.06a.25.25 0 0 1 .354 0l1.06-1.06Zm-.487 4.823v-4h-1.5v4h1.5Z' })));
};
var ForwardRef$1H = forwardRef(SvgSpringNotesEditUpload);

var SvgSpringNotesEdit = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20.25 10a.75.75 0 0 0 1.5 0h-1.5ZM9 22.75a.75.75 0 0 0 0-1.5v1.5Zm3-.75-.721-.206-.37 1.297 1.297-.37L12 22Zm1.128-3.495.53.53-.53-.53Zm-.255.434-.722-.205.722.205Zm2.188 2.188.205.722-.205-.722Zm3.082-7.637-.53-.53.53.53ZM8.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm9.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM7 4.25h10v-1.5H7v1.5ZM3.75 18V7.5h-1.5V18h1.5Zm16.5-10.5V10h1.5V7.5h-1.5ZM9 21.25H7v1.5h2v-1.5ZM2.25 18A4.75 4.75 0 0 0 7 22.75v-1.5A3.25 3.25 0 0 1 3.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5Zm12.98 12.577-5.015 5.015 1.06 1.06 5.015-5.014-1.06-1.061Zm-6.322 3.708 5.015-5.014-1.06-1.061-5.015 5.015 1.06 1.06Zm1.197 1.371-3.06.873.41 1.442 3.061-.872-.41-1.443Zm-2.134 1.8.873-3.061-1.443-.411-.872 3.06 1.442.412Zm-.123-4.231a1.75 1.75 0 0 0-.447.759l1.443.41a.253.253 0 0 1 .064-.109l-1.06-1.06Zm2.367 2.367a.253.253 0 0 1-.11.064l.411 1.443c.287-.082.548-.236.76-.447l-1.061-1.06Zm5.014-6.321a.923.923 0 0 1 0 1.306l1.061 1.06a2.424 2.424 0 0 0 0-3.427l-1.06 1.06Zm1.061-1.061a2.424 2.424 0 0 0-3.428 0l1.061 1.06a.924.924 0 0 1 1.306 0l1.061-1.06ZM7.25 2v3h1.5V2h-1.5Zm8 0v3h1.5V2h-1.5Z' })));
};
var ForwardRef$1G = forwardRef(SvgSpringNotesEdit);

var SvgSpringNotesFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-6.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM12 10.94l-.53.53a.75.75 0 0 0 1.06 0l-.53-.53Zm.265-.266.53.53-.53-.53Zm-.53 0-.53.53.53-.53Zm-2.652 2.652.53-.53-.53.53Zm1.856 1.856-.53.53.53-.53ZM7 4.25h10v-1.5H7v1.5ZM20.25 7.5V18h1.5V7.5h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V7.5h-1.5V18h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5ZM15.25 2v3h1.5V2h-1.5Zm-8 0v3h1.5V2h-1.5Zm5.28 9.47.265-.266-1.06-1.06-.265.265 1.06 1.06Zm-1.326-.266.266.266 1.06-1.061-.265-.265-1.06 1.06Zm-2.651 2.652 1.856 1.856 1.06-1.06-1.856-1.856-1.06 1.06Zm5.038 1.856 1.856-1.856-1.06-1.06-1.857 1.856 1.06 1.06Zm.795-4.508c.44.44.44 1.152 0 1.591l1.061 1.061a2.625 2.625 0 0 0 0-3.712l-1.06 1.06Zm1.061-1.06a2.625 2.625 0 0 0-3.712 0l1.06 1.06a1.126 1.126 0 0 1 1.591 0l1.061-1.06Zm-5.834 1.06a1.126 1.126 0 0 1 1.591 0l1.061-1.06a2.625 2.625 0 0 0-3.712 0l1.06 1.06Zm.796 4.508a2.25 2.25 0 0 0 3.182 0l-1.06-1.06a.75.75 0 0 1-1.061 0l-1.061 1.06Zm-1.856-5.568a2.625 2.625 0 0 0 0 3.712l1.06-1.06a1.125 1.125 0 0 1 0-1.591l-1.06-1.061Z' })));
};
var ForwardRef$1F = forwardRef(SvgSpringNotesFavourite);

var SvgSpringNotesList = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M17 13.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm6-2.5a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm6 9.5a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5ZM16.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-6.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM7 4.25h10v-1.5H7v1.5ZM20.25 7.5V18h1.5V7.5h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V7.5h-1.5V18h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5Zm10 9.5h-6v1.5h6v-1.5Zm0-4h-6v1.5h6v-1.5Zm0 8h-6v1.5h6v-1.5ZM15.25 2v3h1.5V2h-1.5Zm-8 0v3h1.5V2h-1.5ZM8.5 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' })));
};
var ForwardRef$1E = forwardRef(SvgSpringNotesList);

var SvgSpringNotesRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-6.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM15 13.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-2-8h10v-1.5H7v1.5ZM20.25 7.5V18h1.5V7.5h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V7.5h-1.5V18h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5ZM15.25 2v3h1.5V2h-1.5Zm-8 0v3h1.5V2h-1.5ZM15 12.25H9v1.5h6v-1.5Z' })));
};
var ForwardRef$1D = forwardRef(SvgSpringNotesRemove);

var SvgSpringNotesSearch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-6.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm7.78 9.97a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-.06 2.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM7 4.25h10v-1.5H7v1.5ZM20.25 7.5V18h1.5V7.5h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V7.5h-1.5V18h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5ZM15.25 2v3h1.5V2h-1.5Zm-8 0v3h1.5V2h-1.5Zm7 11A2.25 2.25 0 0 1 12 15.25v1.5A3.75 3.75 0 0 0 15.75 13h-1.5ZM12 15.25A2.25 2.25 0 0 1 9.75 13h-1.5A3.75 3.75 0 0 0 12 16.75v-1.5ZM9.75 13A2.25 2.25 0 0 1 12 10.75v-1.5A3.75 3.75 0 0 0 8.25 13h1.5ZM12 10.75A2.25 2.25 0 0 1 14.25 13h1.5A3.75 3.75 0 0 0 12 9.25v1.5Zm1.97 5.28 1 1 1.06-1.06-1-1-1.06 1.06Z' })));
};
var ForwardRef$1C = forwardRef(SvgSpringNotesSearch);

var SvgSpringNotesUpload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-6.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm2.22 6.47a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm1.823-.763-.53-.53.53.53Zm1.414 0-.53.53.53-.53Zm.763 1.823a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM11.25 16a.75.75 0 0 0 1.5 0h-1.5Zm1.5-5a.75.75 0 0 0-1.5 0h1.5ZM7 4.25h10v-1.5H7v1.5ZM20.25 7.5V18h1.5V7.5h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V7.5h-1.5V18h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5ZM15.25 2v3h1.5V2h-1.5Zm-8 0v3h1.5V2h-1.5Zm3.28 10.53 1.293-1.293-1.06-1.06L9.47 11.47l1.06 1.06Zm1.647-1.293 1.293 1.293 1.06-1.06-1.293-1.293-1.06 1.06Zm-.354 0a.25.25 0 0 1 .354 0l1.06-1.06a1.75 1.75 0 0 0-2.474 0l1.06 1.06ZM12.75 16v-5h-1.5v5h1.5Z' })));
};
var ForwardRef$1B = forwardRef(SvgSpringNotesUpload);

var SvgSpringNotesWriteEdit = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20.25 10a.75.75 0 0 0 1.5 0h-1.5ZM9 22.75a.75.75 0 0 0 0-1.5v1.5ZM8.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM16 9.75a.75.75 0 0 0 0-1.5v1.5Zm-8-1.5a.75.75 0 0 0 0 1.5v-1.5Zm6 5.5a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5ZM12 22l-.721-.206-.37 1.297 1.297-.37L12 22Zm1.128-3.495.53.53-.53-.53Zm-.255.434-.722-.205.722.205Zm2.188 2.188.205.722-.205-.722Zm3.082-7.637-.53-.53.53.53ZM10 17.75a.75.75 0 0 0 0-1.5v1.5Zm-2-1.5a.75.75 0 0 0 0 1.5v-1.5ZM16.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM7 4.25h10v-1.5H7v1.5ZM3.75 18V7.5h-1.5V18h1.5Zm16.5-10.5V10h1.5V7.5h-1.5ZM9 21.25H7v1.5h2v-1.5ZM2.25 18A4.75 4.75 0 0 0 7 22.75v-1.5A3.25 3.25 0 0 1 3.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5ZM7.25 2v3h1.5V2h-1.5ZM16 8.25H8v1.5h8v-1.5Zm-2 4H8v1.5h6v-1.5Zm5.98 3.077-5.015 5.015 1.06 1.06 5.015-5.014-1.06-1.061Zm-6.322 3.708 5.015-5.014-1.06-1.061-5.015 5.015 1.06 1.06Zm1.197 1.371-3.06.873.41 1.442 3.061-.872-.41-1.443Zm-2.134 1.8.873-3.061-1.443-.411-.872 3.06 1.442.412Zm-.123-4.231a1.75 1.75 0 0 0-.447.759l1.443.41a.253.253 0 0 1 .064-.109l-1.06-1.06Zm2.367 2.367a.253.253 0 0 1-.11.064l.411 1.443c.287-.082.548-.236.76-.447l-1.061-1.06Zm5.014-6.321a.923.923 0 0 1 0 1.306l1.061 1.06a2.424 2.424 0 0 0 0-3.427l-1.06 1.06Zm1.061-1.061a2.424 2.424 0 0 0-3.428 0l1.061 1.06a.924.924 0 0 1 1.306 0l1.061-1.06ZM10 16.25H8v1.5h2v-1.5ZM15.25 2v3h1.5V2h-1.5Z' })));
};
var ForwardRef$1A = forwardRef(SvgSpringNotesWriteEdit);

var SvgSpringNotes = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M7 8.25a.75.75 0 0 0 0 1.5v-1.5Zm10 1.5a.75.75 0 0 0 0-1.5v1.5Zm-10 2.5a.75.75 0 0 0 0 1.5v-1.5Zm10 1.5a.75.75 0 0 0 0-1.5v1.5Zm-10 2.5a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5ZM16.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-6.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM7 4.25h10v-1.5H7v1.5ZM20.25 7.5V18h1.5V7.5h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V7.5h-1.5V18h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5Zm0 7h10v-1.5H7v1.5Zm0 4h10v-1.5H7v1.5Zm0 4h5v-1.5H7v1.5ZM15.25 2v3h1.5V2h-1.5Zm-8 0v3h1.5V2h-1.5Z' })));
};
var ForwardRef$1z = forwardRef(SvgSpringNotes);

var SvgStandbyMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("circle", { cx: 12, cy: 12, r: 4, stroke: 'currentColor', strokeWidth: 1.5 })));
};
var ForwardRef$1y = forwardRef(SvgStandbyMode);

var SvgStethoscope = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M22 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M4 3v0a2 2 0 0 0-2 2v3a5 5 0 0 0 5 5v0a5 5 0 0 0 5-5V5a2 2 0 0 0-2-2v0' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M7 13v5.25A3.75 3.75 0 0 0 10.75 22v0a3.75 3.75 0 0 0 3.75-3.75v-5.5A2.75 2.75 0 0 1 17.25 10v0A2.75 2.75 0 0 1 20 12.75V14M10 2v2M4 2v2' })));
};
var ForwardRef$1x = forwardRef(SvgStethoscope);

var SvgStorage = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h12Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M2 12h20' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 8V6m-4 2V6m4 12v-2m-4 2v-2' })));
};
var ForwardRef$1w = forwardRef(SvgStorage);

var SvgStoreSmile = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.083 8.25a.75.75 0 0 0-1.5 0h1.5Zm-6.666 0a.75.75 0 0 0-1.5 0h1.5ZM21.25 6v2.25h1.5V6h-1.5Zm-2.583 5.25c-1.347 0-2.584-1.258-2.584-3h-1.5c0 2.4 1.748 4.5 4.084 4.5v-1.5Zm2.583-3c0 1.742-1.237 3-2.583 3v1.5c2.335 0 4.083-2.1 4.083-4.5h-1.5Zm-9.25 3c-1.346 0-2.583-1.258-2.583-3h-1.5c0 2.4 1.747 4.5 4.083 4.5v-1.5Zm2.583-3c0 1.742-1.237 3-2.583 3v1.5c2.336 0 4.083-2.1 4.083-4.5h-1.5Zm-11.833 0V6h-1.5v2.25h1.5Zm2.583 3c-1.346 0-2.583-1.258-2.583-3h-1.5c0 2.4 1.748 4.5 4.083 4.5v-1.5Zm2.584-3c0 1.742-1.238 3-2.584 3v1.5c2.336 0 4.084-2.1 4.084-4.5h-1.5ZM18 1.25H6v1.5h12v-1.5ZM2.75 6A3.25 3.25 0 0 1 6 2.75v-1.5A4.75 4.75 0 0 0 1.25 6h1.5Zm20 0A4.75 4.75 0 0 0 18 1.25v1.5A3.25 3.25 0 0 1 21.25 6h1.5ZM9.37 17.348a.75.75 0 1 0-.74 1.304l.74-1.304Zm5.998 1.305a.75.75 0 1 0-.736-1.306l.736 1.306Zm-6.739-.001c1.22.694 2.269 1.1 3.374 1.098 1.104-.002 2.15-.412 3.365-1.097l-.736-1.306c-1.138.64-1.913.902-2.632.903-.718.001-1.493-.256-2.63-.902l-.74 1.304Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M20.25 11v7h1.5v-7h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18v-7h-1.5v7h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Z' })));
};
var ForwardRef$1v = forwardRef(SvgStoreSmile);

var SvgStore = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M11 22v.75a.75.75 0 0 0 .75-.75H11Zm-4 0h-.75c0 .414.336.75.75.75V22Zm3.25-4v4h1.5v-4h-1.5Zm.75 3.25H7v1.5h4v-1.5ZM7.75 22v-4h-1.5v4h1.5ZM9 16.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 9 15.25v1.5Zm0-1.5A2.75 2.75 0 0 0 6.25 18h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm7.083-7a.75.75 0 0 0-1.5 0h1.5Zm-6.666 0a.75.75 0 0 0-1.5 0h1.5ZM21.25 6v2.25h1.5V6h-1.5Zm-2.583 5.25c-1.347 0-2.584-1.258-2.584-3h-1.5c0 2.4 1.748 4.5 4.084 4.5v-1.5Zm2.583-3c0 1.742-1.237 3-2.583 3v1.5c2.335 0 4.083-2.1 4.083-4.5h-1.5Zm-9.25 3c-1.346 0-2.583-1.258-2.583-3h-1.5c0 2.4 1.747 4.5 4.083 4.5v-1.5Zm2.583-3c0 1.742-1.237 3-2.583 3v1.5c2.336 0 4.083-2.1 4.083-4.5h-1.5Zm-11.833 0V6h-1.5v2.25h1.5Zm2.583 3c-1.346 0-2.583-1.258-2.583-3h-1.5c0 2.4 1.748 4.5 4.083 4.5v-1.5Zm2.584-3c0 1.742-1.238 3-2.584 3v1.5c2.336 0 4.084-2.1 4.084-4.5h-1.5ZM18 1.25H6v1.5h12v-1.5ZM2.75 6A3.25 3.25 0 0 1 6 2.75v-1.5A4.75 4.75 0 0 0 1.25 6h1.5Zm20 0A4.75 4.75 0 0 0 18 1.25v1.5A3.25 3.25 0 0 1 21.25 6h1.5ZM15 14.75h2v-1.5h-2v1.5Zm2.25.25v1h1.5v-1h-1.5ZM17 16.25h-2v1.5h2v-1.5ZM14.75 16v-1h-1.5v1h1.5Zm.25.25a.25.25 0 0 1-.25-.25h-1.5c0 .966.784 1.75 1.75 1.75v-1.5Zm2.25-.25a.25.25 0 0 1-.25.25v1.5A1.75 1.75 0 0 0 18.75 16h-1.5ZM17 14.75a.25.25 0 0 1 .25.25h1.5A1.75 1.75 0 0 0 17 13.25v1.5Zm-2-1.5A1.75 1.75 0 0 0 13.25 15h1.5a.25.25 0 0 1 .25-.25v-1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M20.25 11v7h1.5v-7h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18v-7h-1.5v7h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Z' })));
};
var ForwardRef$1u = forwardRef(SvgStore);

var SvgSwitch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M16 6a6 6 0 0 1 0 12H8A6 6 0 1 1 8 6h8Z' }),
        React.createElement("circle", { cx: 16, cy: 12, r: 6, stroke: 'currentColor', strokeWidth: 1.5 })));
};
var ForwardRef$1t = forwardRef(SvgSwitch);

var SvgSyrup = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M8 3.5A1.5 1.5 0 0 1 9.5 2h5a1.5 1.5 0 0 1 0 3h-5A1.5 1.5 0 0 1 8 3.5Zm-2 8.64a4 4 0 0 1 1.781-3.327l.328-.22A2 2 0 0 0 9 6.93V5h6v1.93a2 2 0 0 0 .89 1.664l.329.219A4 4 0 0 1 18 12.14V18a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-5.86Z' }),
        React.createElement("circle", { cx: 12, cy: 15, r: 3, stroke: 'currentColor', strokeWidth: 1.5 })));
};
var ForwardRef$1s = forwardRef(SvgSyrup);

var SvgTablet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 20, height: 16, x: 20, y: 2, stroke: 'currentColor', strokeWidth: 1.5, rx: 4, transform: 'rotate(90 20 2)' }),
        React.createElement("circle", { cx: 12, cy: 19, r: 1, fill: 'currentColor', transform: 'rotate(90 12 19)' })));
};
var ForwardRef$1r = forwardRef(SvgTablet);

var SvgTagCrooked = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15.712 10.056a1.25 1.25 0 0 1-1.768 0l-1.06 1.06a2.75 2.75 0 0 0 3.889 0l-1.06-1.06Zm-1.768 0a1.25 1.25 0 0 1 0-1.768l-1.06-1.06a2.75 2.75 0 0 0 0 3.888l1.06-1.06Zm0-1.768a1.25 1.25 0 0 1 1.768 0l1.06-1.06a2.75 2.75 0 0 0-3.888 0l1.06 1.06Zm1.768 0a1.25 1.25 0 0 1 0 1.768l1.06 1.06a2.75 2.75 0 0 0 0-3.889l-1.06 1.06Zm.828-4.51-.052.749.052-.749Zm3.682 3.682.748-.053-.748.053ZM2.808 16.95l-.53.53.53-.53Zm.038-5.695.53.53-.53-.53Zm4.204 9.937.53-.53-.53.53Zm13.45-9.768-.748.053.748-.053ZM9.41 4.69l-.53-.53.53.53Zm3.166-1.19.052-.748-.052.748Zm6.205 10.558-6.566 6.566 1.06 1.06 6.566-6.565-1.06-1.06Zm-11.2 6.604L3.338 16.42l-1.06 1.06 4.242 4.243 1.06-1.06Zm-4.205-8.877 6.566-6.566-1.06-1.06-6.566 6.565 1.06 1.06Zm9.147-7.537 3.965.279.105-1.497-3.965-.278-.105 1.496Zm6.95 3.264.279 3.965 1.496-.105-.278-3.965-1.497.105Zm-2.985-2.985a3.21 3.21 0 0 1 2.985 2.985l1.497-.105a4.71 4.71 0 0 0-4.377-4.377l-.105 1.497ZM3.338 16.42c-1.263-1.263-1.259-3.338.038-4.635l-1.06-1.06c-1.87 1.869-1.9 4.893-.039 6.755l1.061-1.06Zm8.877 4.204c-1.297 1.297-3.372 1.3-4.634.038l-1.061 1.06c1.862 1.862 4.886 1.832 6.756-.038l-1.06-1.06Zm7.626-5.505a4.828 4.828 0 0 0 1.407-3.747l-1.496.105a3.328 3.328 0 0 1-.971 2.581l1.06 1.06Zm-9.9-9.9a3.328 3.328 0 0 1 2.582-.97l.105-1.497a4.828 4.828 0 0 0-3.747 1.407l1.06 1.06Z' })));
};
var ForwardRef$1q = forwardRef(SvgTagCrooked);

var SvgTag = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm9.397 2.976.492.566-.492-.566Zm5.206 0-.492.566.492-.566Zm3 2.606.492-.566-.492.566Zm-11.206 0-.492-.566.492.566ZM18.25 8.661v9.285h1.5V8.66h-1.5ZM15 21.25H9v1.5h6v-1.5Zm-9.25-3.304V8.66h-1.5v9.285h1.5ZM6.889 6.149l3-2.607-.984-1.132-3 2.606.984 1.133Zm7.222-2.607 3 2.607.984-1.133-3-2.606-.984 1.132Zm-4.222 0a3.21 3.21 0 0 1 4.222 0l.984-1.132a4.71 4.71 0 0 0-6.19 0l.984 1.132ZM9 21.25c-1.785 0-3.25-1.47-3.25-3.304h-1.5c0 2.643 2.117 4.804 4.75 4.804v-1.5Zm9.25-3.304c0 1.834-1.465 3.304-3.25 3.304v1.5c2.633 0 4.75-2.16 4.75-4.804h-1.5Zm1.5-9.285a4.83 4.83 0 0 0-1.655-3.645l-.984 1.133A3.328 3.328 0 0 1 18.25 8.66h1.5Zm-14 0c0-.969.418-1.886 1.139-2.512l-.984-1.133A4.828 4.828 0 0 0 4.25 8.661h1.5ZM13.25 8c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 8h-1.5ZM12 9.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 10.75v-1.5ZM10.75 8c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 8h1.5ZM12 6.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 5.25v1.5Z' })));
};
var ForwardRef$1p = forwardRef(SvgTag);

var SvgTaskCheckPaper = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 18V6a4 4 0 0 1 4-4h5.343a4 4 0 0 1 2.829 1.172l4.656 4.656A4 4 0 0 1 21 10.657V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M14 2v3a4 4 0 0 0 4 4h3' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm9 14 1.753 1.402a1 1 0 0 0 1.377-.122L15 12' })));
};
var ForwardRef$1o = forwardRef(SvgTaskCheckPaper);

var SvgTelegram = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm3.909 11.095 15.389-6.65a1 1 0 0 1 1.384 1.074l-2.104 13.276a1 1 0 0 1-1.715.53L13.53 15.77a2 2 0 0 1-.125-2.6l2.318-3.24c.14-.18-.08-.416-.27-.29l-4.846 3.253a4 4 0 0 1-2.801.637l-3.644-.527c-.998-.145-1.179-1.508-.253-1.908Z' })));
};
var ForwardRef$1n = forwardRef(SvgTelegram);

var SvgTestTube = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'm12.889 6.142 4.97 4.97-9.112 9.11a3.514 3.514 0 1 1-4.97-4.97l9.112-9.11Zm4.141-2.485a2.343 2.343 0 1 1 3.313 3.313l-.828.828-3.313-3.313.828-.828Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M12.474 3.242a1.757 1.757 0 0 1 2.485 0l5.798 5.798a1.757 1.757 0 1 1-2.485 2.485l-5.798-5.798a1.757 1.757 0 0 1 0-2.485Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm6 13 9 1' })));
};
var ForwardRef$1m = forwardRef(SvgTestTube);

var SvgThermometer = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm9.69 10.174 6.316-6.317a2.925 2.925 0 0 1 4.137 4.137l-6.317 6.316a1.95 1.95 0 0 1-1.103.552l-1.126.161a1.95 1.95 0 0 0-1.103.552l-4.997 4.997a1.463 1.463 0 1 1-2.069-2.069l4.997-4.997a1.95 1.95 0 0 0 .552-1.103l.16-1.126a1.95 1.95 0 0 1 .552-1.103ZM6 16l2 2' })));
};
var ForwardRef$1l = forwardRef(SvgThermometer);

var SvgTiktok = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M10 21a6 6 0 0 0 6-6V8.197c.883.51 1.907.803 3 .803h1V6h-1a3 3 0 0 1-3-3h-3v12a3 3 0 1 1-3-3V9a6 6 0 0 0 0 12Z' })));
};
var ForwardRef$1k = forwardRef(SvgTiktok);

var SvgTooth = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 6.91c1.972 0 3.07-.707 3.945-1.495 1.972-1.776 5.252-4.07 8.318-1.176 4.995 4.714-2.113 16.623-4.683 16.623-2.554 0-.7-7.295-3.58-7.387' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 5.366c-1.978-1.77-5.226-3.994-8.263-1.127C-1.258 8.953 5.85 20.862 8.42 20.862c2.554 0 .7-7.296 3.58-7.387' })));
};
var ForwardRef$1j = forwardRef(SvgTooth);

var SvgTransfer = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 10, height: 8, x: 2, y: 2, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("rect", { width: 10, height: 8, x: 12, y: 14, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm20.414 4 1.293 1.293a1 1 0 0 1 0 1.414L20.414 8M16 6h5.414M3.586 16l-1.293 1.293a1 1 0 0 0 0 1.414L3.586 20M8 18H2.586' })));
};
var ForwardRef$1i = forwardRef(SvgTransfer);

var SvgTransfusion = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M8 14.9c0-4.072 3.837-8.089 5.83-9.9a1.724 1.724 0 0 1 2.34 0C18.164 6.81 22 10.827 22 14.9c0 3.5-2.65 7.1-7 7.1s-7-3.6-7-7.1Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M6.81 3.066C5.06 4.751 2 8.197 2 11.69 2 14.8 4.272 18 8 18c.234 0 .462-.013.683-.037A7.316 7.316 0 0 1 8 14.9c0-3.116 2.246-6.2 4.194-8.287-.973-1.47-2.146-2.72-3.004-3.546a1.7 1.7 0 0 0-2.38 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M19 16c-.314 1.412-1.385 2.688-3 3' })));
};
var ForwardRef$1h = forwardRef(SvgTransfusion);

var SvgTrolleyCrooked = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm12.42 15.405-.191-.725.191.725Zm-2.249-1.277-.723.197.723-.197Zm10.641-2.807-.724.197.724-.197Zm-1.298 2.213.191.726-.191-.726ZM16.663 3.063l.19.725-.19-.725ZM18.91 4.34l.724-.197-.724.197Zm-9.342.593-.191-.725.19.725ZM8.27 7.146l.723-.197-.723.197ZM5.135 6.102l.724-.197-.724.197ZM2.887 4.824l.191.725-.191-.725Zm-1.078-.491a.75.75 0 1 0 .382 1.45l-.382-1.45ZM22.19 16.41a.75.75 0 0 0-.382-1.45l.382 1.45ZM12.75 6.124a.75.75 0 0 0 .382 1.45l-.382-1.45Zm2.155.983a.75.75 0 1 0-.382-1.45l.383 1.45ZM9.76 5.658l7.094-1.87-.383-1.451-7.093 1.87.382 1.451Zm8.428-1.121 1.9 6.981 1.448-.394-1.901-6.981-1.447.394Zm1.135 8.272-7.094 1.871.382 1.45 7.094-1.87-.382-1.45Zm-8.428 1.122-1.9-6.982-1.448.394 1.9 6.982 1.448-.394Zm1.334.749a1.09 1.09 0 0 1-1.334-.75l-1.447.395c.373 1.37 1.795 2.166 3.163 1.805l-.382-1.45Zm7.86-3.162c.15.553-.18 1.137-.766 1.291l.382 1.45c1.373-.361 2.205-1.76 1.83-3.135l-1.447.394Zm-3.235-7.73a1.09 1.09 0 0 1 1.334.749l1.447-.394c-.373-1.37-1.795-2.167-3.164-1.806l.383 1.45Zm-7.476.42c-1.373.362-2.205 1.76-1.831 3.135l1.447-.394c-.15-.553.18-1.136.766-1.291l-.382-1.45Zm.371 14.714c.15.552-.18 1.136-.766 1.29l.383 1.451c1.372-.362 2.205-1.76 1.83-3.135l-1.447.394Zm-.766 1.29a1.09 1.09 0 0 1-1.334-.749l-1.447.394c.373 1.37 1.795 2.167 3.164 1.806l-.383-1.45Zm-1.334-.749c-.15-.552.18-1.136.766-1.29l-.382-1.451c-1.373.362-2.205 1.76-1.83 3.135l1.446-.394Zm.766-1.29a1.09 1.09 0 0 1 1.334.749l1.447-.394c-.373-1.37-1.795-2.167-3.163-1.806l.382 1.45Zm.533-.923L5.859 5.905l-1.447.394L7.5 17.644l1.448-.394ZM2.695 4.1l-.886.234.382 1.45.887-.234-.383-1.45ZM5.86 5.905c-.373-1.37-1.795-2.167-3.164-1.806l.383 1.45a1.09 1.09 0 0 1 1.334.75l1.447-.394Zm4.805 13.545 11.527-3.04-.382-1.45L10.28 18l.383 1.45Zm2.47-11.875 1.772-.468-.382-1.45-1.773.467.382 1.45Z' })));
};
var ForwardRef$1g = forwardRef(SvgTrolleyCrooked);

var SvgTrolley = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M10 5.75h8v-1.5h-8v1.5ZM19.25 7v8h1.5V7h-1.5ZM18 16.25h-8v1.5h8v-1.5ZM8.75 15V7h-1.5v8h1.5ZM10 16.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 17.75v-1.5ZM19.25 15c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 15h-1.5ZM18 5.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 4.25v1.5Zm-8-1.5A2.75 2.75 0 0 0 7.25 7h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM6.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 7.75 20h-1.5ZM5 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 5 22.75v-1.5ZM3.75 20c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 2.25 20h1.5ZM5 18.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 5 17.25v1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M4.25 18a.75.75 0 0 0 1.5 0h-1.5ZM2 1.25a.75.75 0 0 0 0 1.5v-1.5ZM5.75 18V4h-1.5v14h1.5ZM3 1.25H2v1.5h1v-1.5ZM5.75 4A2.75 2.75 0 0 0 3 1.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM7 19.25a.75.75 0 0 0 0 1.5v-1.5Zm15 1.5a.75.75 0 0 0 0-1.5v1.5Zm-15 0h15v-1.5H7v1.5Zm6-13.5a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm-2 0h2v-1.5h-2v1.5Z' })));
};
var ForwardRef$1f = forwardRef(SvgTrolley);

var SvgTurnLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M8.973 3.254a4.281 4.281 0 0 1 6.054 0l5.72 5.719a4.281 4.281 0 0 1 0 6.054l-5.72 5.72a4.281 4.281 0 0 1-6.054 0l-5.72-5.72a4.281 4.281 0 0 1 0-6.054l5.72-5.72Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M10.586 8 9.293 9.293a1 1 0 0 0 0 1.414L10.586 12m-1-2H12a2 2 0 0 1 2 2v4' })));
};
var ForwardRef$1e = forwardRef(SvgTurnLeft);

var SvgTurnRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M8.973 3.254a4.281 4.281 0 0 1 6.054 0l5.72 5.719a4.281 4.281 0 0 1 0 6.054l-5.72 5.72a4.281 4.281 0 0 1-6.054 0l-5.72-5.72a4.281 4.281 0 0 1 0-6.054l5.72-5.72Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm13.414 8 1.293 1.293a1 1 0 0 1 0 1.414L13.414 12m1-2H12a2 2 0 0 0-2 2v4' })));
};
var ForwardRef$1d = forwardRef(SvgTurnRight);

var SvgTurnTwoSide = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M8.973 3.254a4.281 4.281 0 0 1 6.054 0l5.72 5.719a4.281 4.281 0 0 1 0 6.054l-5.72 5.72a4.281 4.281 0 0 1-6.054 0l-5.72-5.72a4.281 4.281 0 0 1 0-6.054l5.72-5.72Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm15.414 9 1.293 1.293a1 1 0 0 1 0 1.414L15.414 13m1-2H14a2 2 0 0 0-2 2m0 0v3m0-3a2 2 0 0 0-2-2H7.586m1-2-1.293 1.293a1 1 0 0 0 0 1.414L8.586 13' })));
};
var ForwardRef$1c = forwardRef(SvgTurnTwoSide);

var SvgTurn = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M8.973 3.254a4.281 4.281 0 0 1 6.054 0l5.72 5.719a4.281 4.281 0 0 1 0 6.054l-5.72 5.72a4.281 4.281 0 0 1-6.054 0l-5.72-5.72a4.281 4.281 0 0 1 0-6.054l5.72-5.72Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm10 7.586 1.293-1.293a1 1 0 0 1 1.414 0L14 7.586M12 16V6.586M12 16v1m0-1a4 4 0 0 1 4-4h1.414M12 16a4 4 0 0 0-4-4H6.586m9.828-2 1.293 1.293a1 1 0 0 1 0 1.414L16.414 14m-8.828-4-1.293 1.293a1 1 0 0 0 0 1.414L7.586 14' })));
};
var ForwardRef$1b = forwardRef(SvgTurn);

var SvgTwitterPlus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M9 3.5V2h4v5h4v4h-4v5a2 2 0 0 0 2 2h4v4h-4a6 6 0 0 1-6-6v-5H5V7h.5A3.5 3.5 0 0 0 9 3.5Z' })));
};
var ForwardRef$1a = forwardRef(SvgTwitterPlus);

var SvgTwitterSparrow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M15.286 4c-2.104 0-3.81 1.79-3.81 4 0 .334.04.658.113.968C9.3 8.968 5.7 8.444 3 4.888c0 8.89 3.6 11.408 5.4 11.556-1.35 1.334-3.454 2.32-5.4 2.506.837.76 3.46 1.017 4.667 1.05 6.241 0 11.314-5.253 11.426-11.778C20.29 7.444 20.86 5.334 21 4.89c-.583.612-1.8.889-2.77.573C17.532 4.569 16.472 4 15.286 4Z' })));
};
var ForwardRef$19 = forwardRef(SvgTwitterSparrow);

var SvgTwitter = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 4v13a5 5 0 0 0 5 5h5a2 2 0 1 0 0-4h-4a2 2 0 0 1-2-2v-4h6a2 2 0 1 0 0-4h-6V4a2 2 0 1 0-4 0Z' })));
};
var ForwardRef$18 = forwardRef(SvgTwitter);

var SvgUTurnLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M8.973 3.254a4.281 4.281 0 0 1 6.054 0l5.72 5.719a4.281 4.281 0 0 1 0 6.054l-5.72 5.72a4.281 4.281 0 0 1-6.054 0l-5.72-5.72a4.281 4.281 0 0 1 0-6.054l5.72-5.72Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm11 12.414-1.293 1.293a1 1 0 0 1-1.414 0L7 12.414m2 1V11a3 3 0 1 1 6 0v5' })));
};
var ForwardRef$17 = forwardRef(SvgUTurnLeft);

var SvgUTurnRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M8.973 3.254a4.281 4.281 0 0 1 6.054 0l5.72 5.719a4.281 4.281 0 0 1 0 6.054l-5.72 5.72a4.281 4.281 0 0 1-6.054 0l-5.72-5.72a4.281 4.281 0 0 1 0-6.054l5.72-5.72Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm13 12.414 1.293 1.293a1 1 0 0 0 1.414 0L17 12.414m-2 1V11a3 3 0 1 0-6 0v5' })));
};
var ForwardRef$16 = forwardRef(SvgUTurnRight);

var SvgUmbrella = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M8 20a2 2 0 1 0 4 0v-8' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M12 2c4.308 0 8.66 3.778 9.744 8.022C22.017 11.092 21.104 12 20 12H4c-1.105 0-2.017-.908-1.744-1.978C3.339 5.778 7.692 2 12 2Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M12 2c2.21 0 4 4.477 4 10H8C8 6.477 9.79 2 12 2Z' })));
};
var ForwardRef$15 = forwardRef(SvgUmbrella);

var SvgUndoCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm8.41 10-.186.727A.75.75 0 0 1 7.66 10h.75Zm-.75-2.5a.75.75 0 0 1 1.5 0h-1.5Zm2.899 2.273a.75.75 0 0 1-.37 1.454l.37-1.454Zm-3.285 3.414a.75.75 0 1 1 1.452-.374l-1.452.374Zm4.6 2.063a3.25 3.25 0 0 0 3.25-3.25h1.5a4.75 4.75 0 0 1-4.75 4.75v-1.5Zm3.25-3.25a3.25 3.25 0 0 0-3.25-3.25v-1.5a4.75 4.75 0 0 1 4.75 4.75h-1.5Zm-3.25-3.25a3.248 3.248 0 0 0-2.816 1.626L7.76 9.623a4.748 4.748 0 0 1 4.114-2.374v1.5ZM7.659 10V7.5h1.5V10h-1.5Zm.935-.727 1.965.5-.37 1.454-1.965-.5.37-1.454Zm.132 3.54a3.252 3.252 0 0 0 3.148 2.437v1.5a4.752 4.752 0 0 1-4.6-3.563l1.452-.374Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z' })));
};
var ForwardRef$14 = forwardRef(SvgUndoCircle);

var SvgUndo = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M2.25 12a.75.75 0 0 1 1.5 0h-1.5Zm1.954-4.5v.75a.75.75 0 0 1-.75-.75h.75ZM3.454 3a.75.75 0 0 1 1.5 0h-1.5Zm5.171 3.75a.75.75 0 0 1 0 1.5v-1.5ZM3.75 12A8.25 8.25 0 0 0 12 20.25v1.5A9.75 9.75 0 0 1 2.25 12h1.5ZM12 20.25A8.25 8.25 0 0 0 20.25 12h1.5A9.75 9.75 0 0 1 12 21.75v-1.5ZM20.25 12A8.25 8.25 0 0 0 12 3.75v-1.5A9.75 9.75 0 0 1 21.75 12h-1.5ZM12 3.75a8.246 8.246 0 0 0-7.147 4.126l-1.298-.752A9.746 9.746 0 0 1 12 2.25v1.5ZM3.454 7.5V3h1.5v4.5h-1.5Zm.75-.75h4.421v1.5H4.204v-1.5Z' })));
};
var ForwardRef$13 = forwardRef(SvgUndo);

var SvgUnlock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 16, height: 14, x: 4, y: 7, stroke: 'currentColor', strokeWidth: 1.5, rx: 4 }),
        React.createElement("circle", { cx: 12, cy: 14, r: 2, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M16 7a4 4 0 0 0-6.646-3' })));
};
var ForwardRef$12 = forwardRef(SvgUnlock);

var SvgUploadCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm8 6 4-4m0 0 4 4m-4-4v14' }),
        React.createElement("path", { fill: 'currentColor', d: 'M18.83 8.53a.75.75 0 0 0-1.17.94l1.17-.94Zm-12.49.94a.75.75 0 1 0-1.17-.94l1.17.94ZM19.25 14A7.25 7.25 0 0 1 12 21.25v1.5A8.75 8.75 0 0 0 20.75 14h-1.5ZM12 21.25A7.25 7.25 0 0 1 4.75 14h-1.5A8.75 8.75 0 0 0 12 22.75v-1.5Zm5.66-11.78A7.216 7.216 0 0 1 19.25 14h1.5a8.717 8.717 0 0 0-1.92-5.47l-1.17.94ZM4.75 14c0-1.715.595-3.29 1.59-4.53l-1.17-.94A8.716 8.716 0 0 0 3.25 14h1.5Z' })));
};
var ForwardRef$11 = forwardRef(SvgUploadCircle);

var SvgUploadRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm9 6 3-3m0 0 3 3m-3-3v12M7.5 9H7a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-4a4 4 0 0 0-4-4h-.5' })));
};
var ForwardRef$10 = forwardRef(SvgUploadRectangle);

var SvgUsb = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm10.2 3.4 1-1.333a1 1 0 0 1 1.6 0l1 1.333A1 1 0 0 1 13 5h-2a1 1 0 0 1-.8-1.6Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 5v13' }),
        React.createElement("path", { fill: 'currentColor', d: 'M19.5 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' }),
        React.createElement("circle", { cx: 12, cy: 20, r: 2, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { fill: 'currentColor', d: 'M4.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 7v2.28a1 1 0 0 1-.684.948L12 12M6 9v2.28a1 1 0 0 0 .684.948L12 14' })));
};
var ForwardRef$$ = forwardRef(SvgUsb);

var SvgUserAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("ellipse", { cx: 10, cy: 17.5, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, rx: 7, ry: 3.5 }),
        React.createElement("circle", { cx: 10, cy: 7, r: 4, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M21 11h-4m2-2v4' })));
};
var ForwardRef$_ = forwardRef(SvgUserAdd);

var SvgUserBlock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("ellipse", { cx: 10, cy: 17.5, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, rx: 7, ry: 3.5 }),
        React.createElement("circle", { cx: 10, cy: 7, r: 4, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5 }),
        React.createElement("circle", { cx: 19, cy: 11, r: 3, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm20.5 9.5-3 3' })));
};
var ForwardRef$Z = forwardRef(SvgUserBlock);

var SvgUserCircleAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M7 15c2.946-1.32 4.7-1.347 8 0' }),
        React.createElement("circle", { r: 3, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 11 8)' }),
        React.createElement("path", { fill: 'currentColor', d: 'M19.046 12.834a.75.75 0 1 0 1.462.332l-1.462-.332Zm-5.88 7.674a.75.75 0 1 0-.332-1.462l.332 1.462ZM20.75 11A9.75 9.75 0 0 0 11 1.25v1.5A8.25 8.25 0 0 1 19.25 11h1.5ZM11 1.25A9.75 9.75 0 0 0 1.25 11h1.5A8.25 8.25 0 0 1 11 2.75v-1.5ZM1.25 11A9.75 9.75 0 0 0 11 20.75v-1.5A8.25 8.25 0 0 1 2.75 11h-1.5Zm19.258 2.166A9.782 9.782 0 0 0 20.75 11h-1.5a8.26 8.26 0 0 1-.204 1.834l1.462.332ZM11 20.75a9.73 9.73 0 0 0 2.166-.242l-.332-1.462A8.278 8.278 0 0 1 11 19.25v1.5Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M18 16v4m2-2h-4' })));
};
var ForwardRef$Y = forwardRef(SvgUserCircleAdd);

var SvgUserCircleBlock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M6.278 14.468a.75.75 0 1 0 .727 1.312l-.727-1.312Zm5.64.332a.75.75 0 0 0 .164-1.49l-.165 1.49Zm-4.913.98A8.21 8.21 0 0 1 11 14.75v-1.5a9.71 9.71 0 0 0-4.722 1.218l.727 1.312ZM11 14.75c.31 0 .617.017.918.05l.164-1.49A9.853 9.853 0 0 0 11 13.25v1.5Z' }),
        React.createElement("circle", { r: 3, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 11 8)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M19.395 14.25a9 9 0 1 0-5.145 5.145m5.145-5.145A4.002 4.002 0 0 1 18 22a4.002 4.002 0 0 1-3.75-2.605m5.145-5.145a4 4 0 0 0-5.145 5.145' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm20.5 15.5-5 5' })));
};
var ForwardRef$X = forwardRef(SvgUserCircleBlock);

var SvgUserCircleMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M7 15c2.946-1.32 4.7-1.347 8 0' }),
        React.createElement("circle", { r: 3, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 11 8)' }),
        React.createElement("path", { fill: 'currentColor', d: 'M18.696 13.98a.75.75 0 0 0 1.399.541l-1.4-.542Zm-5.53 6.528a.75.75 0 1 0-.332-1.462l.332 1.462ZM20.75 11A9.75 9.75 0 0 0 11 1.25v1.5A8.25 8.25 0 0 1 19.25 11h1.5ZM11 1.25A9.75 9.75 0 0 0 1.25 11h1.5A8.25 8.25 0 0 1 11 2.75v-1.5ZM1.25 11A9.75 9.75 0 0 0 11 20.75v-1.5A8.25 8.25 0 0 1 2.75 11h-1.5Zm18.845 3.521A9.727 9.727 0 0 0 20.75 11h-1.5a8.227 8.227 0 0 1-.554 2.98l1.399.541ZM11 20.75a9.73 9.73 0 0 0 2.166-.242l-.332-1.462A8.278 8.278 0 0 1 11 19.25v1.5Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M20 18h-4' })));
};
var ForwardRef$W = forwardRef(SvgUserCircleMinus);

var SvgUserCircleRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M7 15c2.946-1.32 4.7-1.347 8 0' }),
        React.createElement("circle", { r: 3, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 11 8)' }),
        React.createElement("path", { fill: 'currentColor', d: 'M19.046 12.834a.75.75 0 1 0 1.462.332l-1.462-.332Zm-5.88 7.674a.75.75 0 1 0-.332-1.462l.332 1.462ZM20.75 11A9.75 9.75 0 0 0 11 1.25v1.5A8.25 8.25 0 0 1 19.25 11h1.5ZM11 1.25A9.75 9.75 0 0 0 1.25 11h1.5A8.25 8.25 0 0 1 11 2.75v-1.5ZM1.25 11A9.75 9.75 0 0 0 11 20.75v-1.5A8.25 8.25 0 0 1 2.75 11h-1.5Zm19.258 2.166A9.782 9.782 0 0 0 20.75 11h-1.5a8.26 8.26 0 0 1-.204 1.834l1.462.332ZM11 20.75a9.73 9.73 0 0 0 2.166-.242l-.332-1.462A8.278 8.278 0 0 1 11 19.25v1.5Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm19.414 16.586-2.828 2.828m2.828 0-2.828-2.828' })));
};
var ForwardRef$V = forwardRef(SvgUserCircleRemove);

var SvgUserCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm18.559 19.549.492.566-.492-.566ZM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5ZM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75v1.5Zm0 13a6.253 6.253 0 0 1 5.856 4.061l1.405-.525A7.753 7.753 0 0 0 12 14.25v1.5ZM21.25 12a9.227 9.227 0 0 1-3.183 6.983l.984 1.132A10.727 10.727 0 0 0 22.75 12h-1.5Zm-3.183 6.983A9.212 9.212 0 0 1 12 21.25v1.5c2.697 0 5.164-.994 7.051-2.635l-.984-1.132Zm-11.923.828A6.253 6.253 0 0 1 12 15.75v-1.5a7.753 7.753 0 0 0-7.261 5.036l1.405.525ZM12 21.25a9.212 9.212 0 0 1-6.067-2.267l-.984 1.132A10.712 10.712 0 0 0 12 22.75v-1.5Zm-6.067-2.267A9.227 9.227 0 0 1 2.75 12h-1.5c0 3.24 1.434 6.145 3.699 8.115l.984-1.132Z' }),
        React.createElement("circle", { r: 3, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 12 9)' })));
};
var ForwardRef$U = forwardRef(SvgUserCircle);

var SvgUserCommunity = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 6, cy: 4, r: 2, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("ellipse", { cx: 6, cy: 8, stroke: 'currentColor', strokeWidth: 1.5, rx: 3, ry: 2 }),
        React.createElement("circle", { cx: 18, cy: 16, r: 2, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M22 12c0-5.523-4.477-10-10-10m0 20C6.477 22 2 17.523 2 12' }),
        React.createElement("ellipse", { cx: 18, cy: 20, stroke: 'currentColor', strokeWidth: 1.5, rx: 3, ry: 2 })));
};
var ForwardRef$T = forwardRef(SvgUserCommunity);

var SvgUserMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("ellipse", { cx: 10, cy: 17.5, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, rx: 7, ry: 3.5 }),
        React.createElement("circle", { cx: 10, cy: 7, r: 4, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M21 11h-4' })));
};
var ForwardRef$S = forwardRef(SvgUserMinus);

var SvgUserPolygon = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm5.078 5.44.383.645-.383-.646Zm0 13.12.383-.645-.383.646Zm9 2.869.383.645-.383-.645Zm-4.156 0-.383.645.383-.645Zm9-2.868.382.645-.382-.645Zm0-13.122-.383.646.383-.646Zm-4.844-2.868-.382.646.383-.646Zm-4.156 0-.383-.645.383.645Zm3.774.646 4.843 2.868.765-1.291-4.843-2.868-.765 1.29Zm6.554 5.915v5.736h1.5V9.132h-1.5Zm-16.5 5.736V9.132h-1.5v5.736h1.5Zm1.71-8.783 4.844-2.868-.765-1.291-4.843 2.868.765 1.29ZM3.75 9.132c0-1.265.658-2.424 1.71-3.047l-.764-1.291c-1.52.9-2.446 2.556-2.446 4.338h1.5Zm1.71 8.783c-1.052-.623-1.71-1.782-1.71-3.047h-1.5c0 1.782.927 3.438 2.446 4.338l.765-1.29Zm8.236 2.868a3.317 3.317 0 0 1-3.392 0l-.765 1.291a4.82 4.82 0 0 0 4.922 0l-.765-1.29Zm6.554-5.915c0 1.265-.658 2.424-1.71 3.047l.764 1.291c1.52-.9 2.446-2.556 2.446-4.338h-1.5Zm-1.71-8.783c1.052.623 1.71 1.782 1.71 3.047h1.5c0-1.782-.927-3.438-2.446-4.338l-.765 1.29Zm-4.08-4.16a4.817 4.817 0 0 0-4.92 0l.764 1.292a3.317 3.317 0 0 1 3.392 0l.765-1.291Zm4.08 15.99-.621.368.764 1.29.62-.367-.764-1.29Zm-.621.368-4.223 2.5.765 1.291 4.222-2.5-.764-1.291ZM12 15.948c2.404 0 4.514 1.339 5.648 3.349l1.306-.737c-1.382-2.45-3.974-4.112-6.954-4.112v1.5Zm-1.696 4.835-4.223-2.5-.764 1.29 4.222 2.501.765-1.29Zm-4.223-2.5-.62-.368-.765 1.291.62.367.765-1.29Zm.271 1.014c1.134-2.01 3.244-3.35 5.648-3.35v-1.5c-2.98 0-5.572 1.663-6.954 4.113l1.306.737Z' }),
        React.createElement("circle", { r: 3, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 12 9)' })));
};
var ForwardRef$R = forwardRef(SvgUserPolygon);

var SvgUserRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { r: 3, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 12 9)' }),
        React.createElement("path", { fill: 'currentColor', d: 'M6 2.75h12v-1.5H6v1.5ZM21.25 6v12h1.5V6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5ZM21.25 18a3.252 3.252 0 0 1-2.438 3.148l.374 1.453A4.752 4.752 0 0 0 22.75 18h-1.5Zm-2.438 3.148c-.259.066-.53.102-.812.102v1.5c.408 0 .806-.052 1.186-.15l-.374-1.452ZM12 15.75a6.25 6.25 0 0 1 6.249 6.137l1.5-.026A7.75 7.75 0 0 0 12 14.25v1.5Zm-6 5.5c-.281 0-.553-.036-.812-.102L4.814 22.6c.38.097.778.149 1.186.149v-1.5Zm-.812-.102A3.252 3.252 0 0 1 2.75 18h-1.5a4.752 4.752 0 0 0 3.564 4.6l.374-1.452Zm.563.74A6.25 6.25 0 0 1 12 15.75v-1.5a7.75 7.75 0 0 0-7.749 7.611l1.5.026Z' })));
};
var ForwardRef$Q = forwardRef(SvgUserRectangle);

var SvgUserRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("ellipse", { cx: 10, cy: 17.5, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, rx: 7, ry: 3.5 }),
        React.createElement("circle", { cx: 10, cy: 7, r: 4, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm17 13 2-2m2-2-2 2m0 0 2 2m-2-2-2-2' })));
};
var ForwardRef$P = forwardRef(SvgUserRemove);

var SvgUser = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("ellipse", { cx: 12, cy: 17.5, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, rx: 7, ry: 3.5 }),
        React.createElement("circle", { cx: 12, cy: 7, r: 4, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5 })));
};
var ForwardRef$O = forwardRef(SvgUser);

var SvgUsersDouble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("ellipse", { cx: 10, cy: 17.5, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, rx: 7, ry: 3.5 }),
        React.createElement("circle", { cx: 10, cy: 7, r: 4, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5 }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.045 10.25a6.033 6.033 0 0 1-1.168 1.33 3.75 3.75 0 1 0 1.465-7.314c.266.518.46 1.081.565 1.674a2.25 2.25 0 0 1-.862 4.31ZM19 17.556a3.639 3.639 0 0 1-.5 1.755 8.644 8.644 0 0 0 1.031-.351c.597-.249 1.13-.564 1.524-.953.397-.39.695-.9.695-1.507 0-.607-.298-1.116-.695-1.508-.394-.388-.927-.703-1.524-.952-1.022-.426-2.34-.7-3.781-.772 1.002.51 1.82 1.149 2.385 1.876.298.083.572.178.82.28.488.204.834.427 1.047.637.21.207.248.355.248.439 0 .084-.038.232-.248.439-.206.203-.537.419-1.002.617Z', clipRule: 'evenodd' })));
};
var ForwardRef$N = forwardRef(SvgUsersDouble);

var SvgUsersTriple = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("ellipse", { cx: 12, cy: 16.5, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, rx: 6, ry: 2.5 }),
        React.createElement("circle", { cx: 12, cy: 8, r: 3, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5 }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.445 13.261c-1.238.052-2.376.275-3.26.628-.504.202-.963.462-1.307.788-.347.327-.628.774-.628 1.323 0 .549.281.996.628 1.323.344.326.803.586 1.308.788.5.2 1.081.358 1.716.467-.494-.533-.803-1.128-.882-1.758a5.336 5.336 0 0 1-.277-.102c-.4-.16-.674-.332-.835-.484-.158-.15-.158-.23-.158-.234 0-.005 0-.084.158-.234.161-.152.435-.324.835-.484.203-.081.429-.155.675-.221.414-.69 1.116-1.305 2.027-1.8ZM19.98 16.82c-.078.63-.388 1.225-.882 1.758a8.57 8.57 0 0 0 1.716-.467c.505-.202.964-.462 1.309-.788.346-.327.627-.774.627-1.323 0-.549-.281-.996-.627-1.323-.345-.326-.804-.586-1.309-.788-.883-.353-2.02-.576-3.26-.627.912.494 1.615 1.109 2.028 1.799.246.066.472.14.675.221.4.16.674.332.835.484.158.15.158.23.158.234 0 .005 0 .084-.158.234-.161.152-.435.324-.835.484-.088.035-.18.069-.277.102Zm-3.466-6.668a5.01 5.01 0 0 1-.851 1.252 2.75 2.75 0 1 0 1.029-5.136c.171.465.276.963.302 1.482H17a1.25 1.25 0 1 1-.486 2.402ZM7.308 6.267a2.75 2.75 0 1 0 1.029 5.136 5.01 5.01 0 0 1-.851-1.25 1.25 1.25 0 1 1-.48-2.402 4.98 4.98 0 0 1 .302-1.484Z', clipRule: 'evenodd' })));
};
var ForwardRef$M = forwardRef(SvgUsersTriple);

var SvgVibrateMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 8, height: 14, x: 8, y: 5, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, rx: 2 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M19 10v4m3-5v6M5 14v-4m-3 5V9' })));
};
var ForwardRef$L = forwardRef(SvgVibrateMode);

var SvgVideoOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm1.75 2 20 20m-20-20 3.101 3.101M15.75 12V9.333l2.671-2.374c1.29-1.147 3.329-.231 3.329 1.495v7.092c0 .705-.34 1.275-.83 1.624M15.75 10V9a4 4 0 0 0-4-4h-3m-3.899.101A4.002 4.002 0 0 0 1.75 9v6a4 4 0 0 0 4 4h6c1.9 0 3.49-1.325 3.899-3.101L4.85 5.1Z' })));
};
var ForwardRef$K = forwardRef(SvgVideoOff);

var SvgVideo = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 14, height: 14, x: 2, y: 5, stroke: 'currentColor', strokeWidth: 1.5, rx: 4 }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'm16 9.333 2.671-2.374C19.961 5.812 22 6.728 22 8.454v7.092c0 1.726-2.039 2.642-3.329 1.495L16 14.667V9.333Z' }),
        React.createElement("circle", { cx: 11, cy: 10, r: 2, stroke: 'currentColor', strokeWidth: 1.5 })));
};
var ForwardRef$J = forwardRef(SvgVideo);

var SvgViewOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm4 4 16 16m-6-5.764A3 3 0 0 1 9.764 10' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M19.608 15.608a22.453 22.453 0 0 0 1.522-1.461 3.085 3.085 0 0 0 0-4.294C19.174 7.795 15.816 5 12 5c-.891 0-1.758.153-2.587.413M6.5 6.803c-1.459.931-2.702 2.074-3.63 3.05a3.085 3.085 0 0 0 0 4.294C4.825 16.205 8.184 19 12 19c1.868 0 3.627-.67 5.165-1.596' })));
};
var ForwardRef$I = forwardRef(SvgViewOff);

var SvgViewPrivacy = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 11, r: 3, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M17 15v-1.5a1.5 1.5 0 0 1 1.5-1.5v0a1.5 1.5 0 0 1 1.5 1.5V15m0 0h-3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 18c-3.816 0-7.175-2.795-9.13-4.853a3.085 3.085 0 0 1 0-4.294C4.825 6.795 8.184 4 12 4c3.816 0 7.174 2.795 9.13 4.853.58.61.87 1.377.87 2.145' })));
};
var ForwardRef$H = forwardRef(SvgViewPrivacy);

var SvgView = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M21.13 9.853a3.085 3.085 0 0 1 0 4.294C19.174 16.205 15.816 19 12 19c-3.816 0-7.175-2.795-9.13-4.853a3.085 3.085 0 0 1 0-4.294C4.825 7.795 8.184 5 12 5c3.816 0 7.174 2.795 9.13 4.853Z' }),
        React.createElement("circle", { cx: 12, cy: 12, r: 3, stroke: 'currentColor', strokeWidth: 1.5 })));
};
var ForwardRef$G = forwardRef(SvgView);

var SvgWalletAddClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M19 15v6m3-3h-6' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 12a3 3 0 0 0-3-3H2v6h3a3 3 0 0 0 3-3Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M14 21H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6' })));
};
var ForwardRef$F = forwardRef(SvgWalletAddClose);

var SvgWalletAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M19 16v6m3-8V6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4h14ZM2 12v4h4a2 2 0 1 0 0-4H2Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 19h-6' })));
};
var ForwardRef$E = forwardRef(SvgWalletAdd);

var SvgWalletArrowDownClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm22 19.414-1.293 1.293a1 1 0 0 1-1.414 0L18 19.414M20 15v5.414' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 12a3 3 0 0 0-3-3H2v6h3a3 3 0 0 0 3-3Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M15 21H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v5' })));
};
var ForwardRef$D = forwardRef(SvgWalletArrowDownClose);

var SvgWalletArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm22 20.414-1.293 1.293a1 1 0 0 1-1.414 0L18 20.414M20 16v5.414' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 13V6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h9' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4h14ZM2 12v4h4a2 2 0 1 0 0-4H2Z' })));
};
var ForwardRef$C = forwardRef(SvgWalletArrowDown);

var SvgWalletArrowLeftClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm17.586 21-1.293-1.293a1 1 0 0 1 0-1.414L17.586 17M22 19h-5.414' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 12a3 3 0 0 0-3-3H2v6h3a3 3 0 0 0 3-3Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M13 21H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v7' })));
};
var ForwardRef$B = forwardRef(SvgWalletArrowLeftClose);

var SvgWalletArrowLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm17.586 22-1.293-1.293a1 1 0 0 1 0-1.414L17.586 18M22 20h-5.414' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 15V6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h7' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4h14ZM2 12v4h4a2 2 0 1 0 0-4H2Z' })));
};
var ForwardRef$A = forwardRef(SvgWalletArrowLeft);

var SvgWalletArrowRightClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm20.414 21 1.293-1.293a1 1 0 0 0 0-1.414L20.414 17M16 19h5.414' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 12a3 3 0 0 0-3-3H2v6h3a3 3 0 0 0 3-3Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M13 21H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v7' })));
};
var ForwardRef$z = forwardRef(SvgWalletArrowRightClose);

var SvgWalletArrowRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm20.414 22 1.293-1.293a1 1 0 0 0 0-1.414L20.414 18M16 20h5.414' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 15V6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h7' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4h14ZM2 12v4h4a2 2 0 1 0 0-4H2Z' })));
};
var ForwardRef$y = forwardRef(SvgWalletArrowRight);

var SvgWalletArrowUpClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm22 16.586-1.293-1.293a1 1 0 0 0-1.414 0L18 16.586M20 21v-5.414' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 12a3 3 0 0 0-3-3H2v6h3a3 3 0 0 0 3-3Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M16 21H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v5' })));
};
var ForwardRef$x = forwardRef(SvgWalletArrowUpClose);

var SvgWalletArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm22 17.586-1.293-1.293a1 1 0 0 0-1.414 0L18 17.586M20 22v-5.414' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 13V6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h9' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4h14ZM2 12v4h4a2 2 0 1 0 0-4H2Z' })));
};
var ForwardRef$w = forwardRef(SvgWalletArrowUp);

var SvgWalletCheckClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm16 19 1.753 1.402a1 1 0 0 0 1.377-.122L22 17' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 12a3 3 0 0 0-3-3H2v6h3a3 3 0 0 0 3-3Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M13 21H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6' })));
};
var ForwardRef$v = forwardRef(SvgWalletCheckClose);

var SvgWalletCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm16 20 1.753 1.402a1 1 0 0 0 1.377-.122L22 18m0-4V6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h7' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4h14ZM2 12v4h4a2 2 0 1 0 0-4H2Z' })));
};
var ForwardRef$u = forwardRef(SvgWalletCheck);

var SvgWalletClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V7Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 12a3 3 0 0 0-3-3H2v6h3a3 3 0 0 0 3-3Z' })));
};
var ForwardRef$t = forwardRef(SvgWalletClose);

var SvgWalletMinusClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M21 18h-6' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 12a3 3 0 0 0-3-3H2v6h3a3 3 0 0 0 3-3Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M13 21H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v7' })));
};
var ForwardRef$s = forwardRef(SvgWalletMinusClose);

var SvgWalletMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 18h-6m6-4V6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4h14ZM2 12v4h4a2 2 0 1 0 0-4H2Z' })));
};
var ForwardRef$r = forwardRef(SvgWalletMinus);

var SvgWalletOpenLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M2 6v-.75a.75.75 0 0 0-.75.75H2Zm0 .75h16v-1.5H2v1.5ZM21.25 10v8h1.5v-8h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 6.75A3.25 3.25 0 0 1 21.25 10h1.5A4.75 4.75 0 0 0 18 5.25v1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M16 6v.75a.75.75 0 0 0 .75-.75H16ZM2 6h-.75c0 .414.336.75.75.75V6Zm4-3.25h6v-1.5H6v1.5Zm10 2.5H2v1.5h14v-1.5Zm-4-2.5A3.25 3.25 0 0 1 15.25 6h1.5A4.75 4.75 0 0 0 12 1.25v1.5Zm-6-1.5A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5ZM22 12h.75a.75.75 0 0 0-.75-.75V12Zm0 4v.75a.75.75 0 0 0 .75-.75H22Zm-4-4v.75V12Zm0 4v.75V16Zm3.25-4v4h1.5v-4h-1.5Zm.75 3.25h-4v1.5h4v-1.5Zm-4-2.5h4v-1.5h-4v1.5ZM16.75 14c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 15.25 14h1.5ZM18 15.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 18 16.75v-1.5Z' })));
};
var ForwardRef$q = forwardRef(SvgWalletOpenLeft);

var SvgWalletOpenRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6Zm0 0a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4h14Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M2 12v4h4a2 2 0 1 0 0-4H2Z' })));
};
var ForwardRef$p = forwardRef(SvgWalletOpenRight);

var SvgWalletRemoveClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M21.5 16.757 17.257 21m4.243 0-4.243-4.243' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 12a3 3 0 0 0-3-3H2v6h3a3 3 0 0 0 3-3Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M13 21H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6.5' })));
};
var ForwardRef$o = forwardRef(SvgWalletRemoveClose);

var SvgWalletRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M21.5 17.757 17.257 22m4.243 0-4.243-4.243M22 14V6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h7' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4h14ZM2 12v4h4a2 2 0 1 0 0-4H2Z' })));
};
var ForwardRef$n = forwardRef(SvgWalletRemove);

var SvgWalletUserClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 2, cy: 2, r: 2, stroke: 'currentColor', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 17 19)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M22 21c-.599-1.196-1.718-2-3-2s-2.401.804-3 2' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 12a3 3 0 0 0-3-3H2v6h3a3 3 0 0 0 3-3Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M13 21H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6' })));
};
var ForwardRef$m = forwardRef(SvgWalletUserClose);

var SvgWalletUser = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 2, cy: 2, r: 2, stroke: 'currentColor', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 17 20)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 13V6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h6' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4h14ZM2 12v4h4a2 2 0 1 0 0-4H2Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M22 22c-.599-1.196-1.718-2-3-2s-2.401.804-3 2' })));
};
var ForwardRef$l = forwardRef(SvgWalletUser);

var SvgWallet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M6 3.75h12v-1.5H6v1.5ZM21.25 7v10h1.5V7h-1.5ZM18 20.25H6v1.5h12v-1.5ZM2.75 17V7h-1.5v10h1.5ZM6 20.25A3.25 3.25 0 0 1 2.75 17h-1.5A4.75 4.75 0 0 0 6 21.75v-1.5ZM21.25 17A3.25 3.25 0 0 1 18 20.25v1.5A4.75 4.75 0 0 0 22.75 17h-1.5ZM18 3.75A3.25 3.25 0 0 1 21.25 7h1.5A4.75 4.75 0 0 0 18 2.25v1.5ZM6 2.25A4.75 4.75 0 0 0 1.25 7h1.5A3.25 3.25 0 0 1 6 3.75v-1.5Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M22 9h.75a.75.75 0 0 0-.75-.75V9Zm0 6v.75a.75.75 0 0 0 .75-.75H22Zm-4-6v.75V9Zm0 6v.75V15Zm3.25-6v6h1.5V9h-1.5Zm.75 5.25h-4v1.5h4v-1.5Zm-4-4.5h4v-1.5h-4v1.5ZM15.75 12A2.25 2.25 0 0 1 18 9.75v-1.5A3.75 3.75 0 0 0 14.25 12h1.5ZM18 14.25A2.25 2.25 0 0 1 15.75 12h-1.5A3.75 3.75 0 0 0 18 15.75v-1.5Z' })));
};
var ForwardRef$k = forwardRef(SvgWallet);

var SvgWarehouse = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M2 10.083a4 4 0 0 1 1.706-3.277l6-4.2a4 4 0 0 1 4.588 0l6 4.2A4 4 0 0 1 22 10.083V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9.917Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M18 22V12a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v10' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 14H6m12 4H6' })));
};
var ForwardRef$j = forwardRef(SvgWarehouse);

var SvgWhatsapp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'square', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.511.335 2.945.936 4.229l-.713 4.396a1 1 0 0 0 1.152 1.146l4.355-.726A9.96 9.96 0 0 0 12 22Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M16 15.111v-.436c0-.542-.33-1.03-.833-1.23l-.466-.187a1.08 1.08 0 0 0-1.368.52s-1.11-.222-2-1.111c-.889-.89-1.11-2-1.11-2a1.08 1.08 0 0 0 .519-1.368l-.187-.466A1.325 1.325 0 0 0 9.325 8H8.89a.889.889 0 0 0-.89.889A7.111 7.111 0 0 0 15.111 16a.889.889 0 0 0 .889-.889Z' })));
};
var ForwardRef$i = forwardRef(SvgWhatsapp);

var SvgWheelChairHuman = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 7v8h3l3.5 6H20' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M13.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M17.362 19.5A7 7 0 1 1 12 8h3' })));
};
var ForwardRef$h = forwardRef(SvgWheelChairHuman);

var SvgWheelChair = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 7, cy: 16, r: 5, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("circle", { cx: 20.5, cy: 19.5, r: 1.5, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 16h6.5a2 2 0 0 1 2 2v0M4 3h1a2 2 0 0 1 2 2v6m0-5h10a2 2 0 0 1 2 2v8' })));
};
var ForwardRef$g = forwardRef(SvgWheelChair);

var SvgWidgets = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 8, height: 8, x: 2, y: 14, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("rect", { width: 8, height: 8, x: 2, y: 2, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("rect", { width: 8, height: 8, x: 14, y: 14, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M13.1 8.071a2 2 0 0 1 0-2.828l2.829-2.829a2 2 0 0 1 2.828 0l2.829 2.829a2 2 0 0 1 0 2.828l-2.829 2.828a2 2 0 0 1-2.828 0L13.1 8.071Z' })));
};
var ForwardRef$f = forwardRef(SvgWidgets);

var SvgWifiSignalBad = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm19.5 10.875 1.464-1.977c.594-.801.513-1.93-.26-2.56-5.448-4.45-11.96-4.45-17.408 0-.773.63-.854 1.759-.26 2.56l7.357 9.932a2 2 0 0 0 3.214 0l.615-.83m7.021-4L17 18.243M17 14l4.243 4.243' })));
};
var ForwardRef$e = forwardRef(SvgWifiSignalBad);

var SvgWifiSignalNoInternet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm19.5 10.875 1.464-1.977c.594-.801.513-1.93-.26-2.56-5.448-4.45-11.96-4.45-17.408 0-.773.63-.854 1.759-.26 2.56l7.357 9.932a2 2 0 0 0 3.214 0l.615-.83M17 10v4m0 3v1' })));
};
var ForwardRef$d = forwardRef(SvgWifiSignalNoInternet);

var SvgWifiSignalOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm3 3 18 18M9.303 5.303c3.86-.873 7.856.139 11.401 3.034.773.631.854 1.76.26 2.561l-2.58 3.485M6.353 6.354a16.024 16.024 0 0 0-3.058 1.983c-.773.631-.854 1.76-.26 2.561l7.357 9.932a2 2 0 0 0 3.214 0l3.074-4.15' })));
};
var ForwardRef$c = forwardRef(SvgWifiSignalOff);

var SvgWifiSignal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M10.393 18.83 3.036 8.898c-.594-.801-.513-1.93.26-2.56 5.448-4.45 11.96-4.45 17.408 0 .773.63.854 1.759.26 2.56l-7.357 9.932a2 2 0 0 1-3.214 0Z' })));
};
var ForwardRef$b = forwardRef(SvgWifiSignal);

var SvgWifiOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12.445, cy: 19, r: 1, fill: 'currentColor' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm3 3 18 18m.89-13.334A13.95 13.95 0 0 0 12.445 4c-1.352 0-2.66.192-3.896.55m10.135 6.963a8.969 8.969 0 0 0-5.666-2.495m-3.593 6.358A3.991 3.991 0 0 1 12.445 14c.83 0 1.602.253 2.242.687m-8.48-3.174a9 9 0 0 1 3.288-2.018M3 7.665A14.04 14.04 0 0 1 5.719 5.72' })));
};
var ForwardRef$a = forwardRef(SvgWifiOff);

var SvgWifi = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 19, r: 1, fill: 'currentColor' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M21.445 7.666A13.95 13.95 0 0 0 12 4a13.95 13.95 0 0 0-9.445 3.666m15.684 3.847A8.97 8.97 0 0 0 12 9a8.97 8.97 0 0 0-6.239 2.513m9.259 3.864A3.991 3.991 0 0 0 12 14a3.99 3.99 0 0 0-3.02 1.377' })));
};
var ForwardRef$9 = forwardRef(SvgWifi);

var SvgWirelessCharging = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm13 8-3 4h4l-3 4M4.929 4.929A9.969 9.969 0 0 0 2 11.999a9.969 9.969 0 0 0 2.929 7.072M7.757 7.757A5.981 5.981 0 0 0 6 12c0 1.657.672 3.157 1.757 4.242m11.314 2.829A9.969 9.969 0 0 0 22 12a9.969 9.969 0 0 0-2.929-7.071m-2.828 11.313A5.981 5.981 0 0 0 18 12a5.981 5.981 0 0 0-1.757-4.243' })));
};
var ForwardRef$8 = forwardRef(SvgWirelessCharging);

var SvgWithdraw = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 11a4 4 0 1 1 0-8h12a4 4 0 0 1 0 8m0-4v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7h12Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm14 15-1.293 1.293a1 1 0 0 1-1.414 0L10 15m2-4v5' })));
};
var ForwardRef$7 = forwardRef(SvgWithdraw);

var SvgYen = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 11h12M6 15h12M6 3l6 8 6-8m-6 8v10' })));
};
var ForwardRef$6 = forwardRef(SvgYen);

var SvgYoutube = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 20, height: 18, x: 2, y: 3, stroke: 'currentColor', strokeWidth: 1.5, rx: 4 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm10.447 8.724 4.764 2.382a1 1 0 0 1 0 1.788l-4.764 2.382A1 1 0 0 1 9 14.382V9.618a1 1 0 0 1 1.447-.894Z' })));
};
var ForwardRef$5 = forwardRef(SvgYoutube);

var SvgZoomInRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm17 7-4 4m-6 6 4-4m2-2h4m-4 0V7m-2 6v4m0-4H7M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z' })));
};
var ForwardRef$4 = forwardRef(SvgZoomInRectangle);

var SvgZoomIn = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm20 4-7 7m-9 9 7-7m2-2h5m-5 0V6m-2 7v5m0-5H6' })));
};
var ForwardRef$3 = forwardRef(SvgZoomIn);

var SvgZoomOutCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-8-4h3m0 0v3m0-3-8 8m0 0v-3m0 3h3' })));
};
var ForwardRef$2 = forwardRef(SvgZoomOutCircle);

var SvgZoomOutRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm7 6h3m0 0v3m0-3-8 8m0 0v-3m0 3h3' })));
};
var ForwardRef$1 = forwardRef(SvgZoomOutRectangle);

var SvgZoomOut = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M13.5 6H18m0 0v4.5M18 6 6 18m0 0v-4.5M6 18h4.5' })));
};
var ForwardRef = forwardRef(SvgZoomOut);

export { ForwardRef$au as AboutPhone, ForwardRef$at as Accessibility, ForwardRef$as as Activity, ForwardRef$ar as AddTo, ForwardRef$aq as AirPlane, ForwardRef$ao as AirplaneMode, ForwardRef$ap as AirplaneModeOff, ForwardRef$an as Ambulance, ForwardRef$am as AppsCircle, ForwardRef$al as AppsDoubleCircle, ForwardRef$ak as AppsRectangle, ForwardRef$aj as AppsTripleRectangle, ForwardRef$ag as ArrowBack, ForwardRef$ai as ArrowBackCircle, ForwardRef$ah as ArrowBackRectangle, ForwardRef$ad as ArrowDown, ForwardRef$af as ArrowDownCircle, ForwardRef$ae as ArrowDownRectangle, ForwardRef$ac as ArrowDropDown, ForwardRef$ab as ArrowDropLeft, ForwardRef$aa as ArrowDropRight, ForwardRef$a9 as ArrowDropUp, ForwardRef$a6 as ArrowLeft, ForwardRef$a8 as ArrowLeftCircle, ForwardRef$a7 as ArrowLeftRectangle, ForwardRef$a3 as ArrowMove, ForwardRef$a5 as ArrowMoveCircle, ForwardRef$a4 as ArrowMoveRectangle, ForwardRef$a0 as ArrowReturn, ForwardRef$a2 as ArrowReturnCircle, ForwardRef$a1 as ArrowReturnRectangle, ForwardRef$9Z as ArrowRight, ForwardRef$9$ as ArrowRightCircle, ForwardRef$9_ as ArrowRightRectangle, ForwardRef$9V as ArrowSort, ForwardRef$9Y as ArrowSortCircle, ForwardRef$9W as ArrowSortRectangle, ForwardRef$9X as ArrowSortRectangleHalf, ForwardRef$9U as ArrowThickDown, ForwardRef$9T as ArrowThickLeft, ForwardRef$9S as ArrowThickRight, ForwardRef$9R as ArrowThickUp, ForwardRef$9N as ArrowTransfer, ForwardRef$9Q as ArrowTransferCircle, ForwardRef$9O as ArrowTransferRectangle, ForwardRef$9P as ArrowTransferRectangleHalf, ForwardRef$9K as ArrowUp, ForwardRef$9M as ArrowUpCircle, ForwardRef$9L as ArrowUpRectangle, ForwardRef$9J as Atm, ForwardRef$9H as Auto, ForwardRef$9I as AutoRotation, ForwardRef$9G as BadgePercent, ForwardRef$9z as Bag, ForwardRef$9F as BagAdd, ForwardRef$9E as BagCheck, ForwardRef$9D as BagFavourite, ForwardRef$9C as BagMinus, ForwardRef$9B as BagRemove, ForwardRef$9A as BagSmile, ForwardRef$9y as Bank, ForwardRef$9w as BarChart, ForwardRef$9x as BarChartMiddleLong, ForwardRef$9v as BarcodeBorder, ForwardRef$9k as Battery, ForwardRef$9u as BatteryAlert, ForwardRef$9s as BatteryCharging, ForwardRef$9t as BatteryChargingFull, ForwardRef$9n as BatteryHorizontal, ForwardRef$9r as BatteryHorizontalCharging, ForwardRef$9q as BatteryHorizontalFull, ForwardRef$9p as BatteryHorizontalLowbet, ForwardRef$9o as BatteryHorizontalSavingMode, ForwardRef$9m as BatteryLowbet, ForwardRef$9l as BatterySavingMode, ForwardRef$9j as Bill, ForwardRef$9h as Blood, ForwardRef$9i as BloodPlus, ForwardRef$9e as Bluetooth, ForwardRef$9g as BluetoothConnected, ForwardRef$9f as BluetoothOff, ForwardRef$9d as Board, ForwardRef$9c as Bookmark, ForwardRef$9b as BoxAdd, ForwardRef$9a as BoxArrowDown, ForwardRef$99 as BoxArrowUp, ForwardRef$98 as BoxCancel, ForwardRef$97 as BoxDone, ForwardRef$96 as BoxFavorite, ForwardRef$95 as BoxLocation, ForwardRef$94 as BoxMinus, ForwardRef$93 as BoxSearch, ForwardRef$92 as BoxTime, ForwardRef$90 as Briefcase, ForwardRef$91 as BriefcaseTriangular, ForwardRef$8$ as CallHospital, ForwardRef$8Y as Camera, ForwardRef$8_ as CameraOff, ForwardRef$8Z as CameraSwitch, ForwardRef$8W as Capsule, ForwardRef$8X as CapsuleOpen, ForwardRef$8V as CardAdd, ForwardRef$8U as CardArrowDown, ForwardRef$8T as CardArrowLeft, ForwardRef$8S as CardArrowRight, ForwardRef$8R as CardArrowUp, ForwardRef$8Q as CardCheck, ForwardRef$8P as CardDash, ForwardRef$8O as CardDot, ForwardRef$8N as CardMinus, ForwardRef$8M as CardRemove, ForwardRef$8L as CardUser, ForwardRef$8K as CardWithdraw, ForwardRef$8J as Cardiogram, ForwardRef$8H as Cargo, ForwardRef$8I as CargoShip, ForwardRef$8y as Cart, ForwardRef$8G as CartAdd, ForwardRef$8F as CartArrowDown, ForwardRef$8E as CartArrowUp, ForwardRef$8D as CartCheck, ForwardRef$8C as CartHasDash, ForwardRef$8B as CartMinus, ForwardRef$8A as CartRemove, ForwardRef$8z as CartSmile, ForwardRef$8x as Cast, ForwardRef$8w as Cctv, ForwardRef$8v as ChartArrowDown, ForwardRef$8u as ChartArrowUp, ForwardRef$8t as ChartHistogram, ForwardRef$8i as Clipboard, ForwardRef$8s as ClipboardActivity, ForwardRef$8r as ClipboardAdd, ForwardRef$8q as ClipboardCheck, ForwardRef$8p as ClipboardDelete, ForwardRef$8o as ClipboardDownload, ForwardRef$8n as ClipboardFavourite, ForwardRef$8m as ClipboardList, ForwardRef$8l as ClipboardMinus, ForwardRef$8k as ClipboardSearch, ForwardRef$8j as ClipboardUpload, ForwardRef$8d as Coin, ForwardRef$8h as CoinDollar, ForwardRef$8g as CoinEuro, ForwardRef$8f as CoinPound, ForwardRef$8e as CoinYen, ForwardRef$8c as ColorInversion, ForwardRef$8b as Computer, ForwardRef$8a as Coupon, ForwardRef$89 as Cube, ForwardRef$88 as DarkMode, ForwardRef$81 as Delivery, ForwardRef$87 as DeliveryAirPlane, ForwardRef$86 as DeliveryCancel, ForwardRef$85 as DeliveryConveyor, ForwardRef$84 as DeliveryDone, ForwardRef$83 as DeliveryParachute, ForwardRef$82 as DeliveryTime, ForwardRef$80 as Deposit, ForwardRef$7Y as Destination, ForwardRef$7$ as DestinationDashedThree, ForwardRef$7_ as DestinationDashedTwo, ForwardRef$7Z as DestinationLine, ForwardRef$7X as Devices, ForwardRef$7W as DigitalHealth, ForwardRef$7S as DirectionDown, ForwardRef$7T as DirectionDownDouble, ForwardRef$7V as DirectionDownDoubleCircle, ForwardRef$7U as DirectionDownDoubleRectangle, ForwardRef$7O as DirectionLeft, ForwardRef$7P as DirectionLeftDouble, ForwardRef$7R as DirectionLeftDoubleCircle, ForwardRef$7Q as DirectionLeftDoubleRectangle, ForwardRef$7K as DirectionRight, ForwardRef$7L as DirectionRightDouble, ForwardRef$7N as DirectionRightDoubleCircle, ForwardRef$7M as DirectionRightDoubleRectangle, ForwardRef$7G as DirectionUp, ForwardRef$7H as DirectionUpDouble, ForwardRef$7J as DirectionUpDoubleCircle, ForwardRef$7I as DirectionUpDoubleRectangle, ForwardRef$7F as Dna, ForwardRef$7E as DoNotDisturb, ForwardRef$7D as Dollar, ForwardRef$7B as Donate, ForwardRef$7C as DonateCoin, ForwardRef$7A as Donation, ForwardRef$7z as DownloadCircle, ForwardRef$7y as DownloadRectangle, ForwardRef$7x as Dribbble, ForwardRef$7w as Drive, ForwardRef$7v as Earnings, ForwardRef$7u as Euro, ForwardRef$7s as Exchange, ForwardRef$7t as ExchangeRectangle, ForwardRef$7p as Eye, ForwardRef$7r as EyeDropper, ForwardRef$7q as EyeScannerBorder, ForwardRef$7n as Facebook, ForwardRef$7o as FacebookSquare, ForwardRef$7m as FastDelivery, ForwardRef$7l as FastTime, ForwardRef$7k as Favourite, ForwardRef$7j as Figma, ForwardRef$7i as FilterBigCircle, ForwardRef$7h as FilterSmallCircle, ForwardRef$7f as FingerPrint, ForwardRef$7g as FingerPrintBorder, ForwardRef$7e as Fiverr, ForwardRef$7c as Flag, ForwardRef$7d as FlagCircle, ForwardRef$78 as Flash, ForwardRef$7b as FlashAuto, ForwardRef$7a as FlashLight, ForwardRef$79 as FlashOff, ForwardRef$77 as GiveBlood, ForwardRef$76 as GivePill, ForwardRef$75 as GlassBroken, ForwardRef$73 as Globe, ForwardRef$74 as GlobeEarth, ForwardRef$72 as Gmail, ForwardRef$71 as Gold, ForwardRef$6$ as Google, ForwardRef$70 as GooglePlus, ForwardRef$6X as Gps, ForwardRef$6_ as GpsCircle, ForwardRef$6Z as GpsOff, ForwardRef$6Y as GpsSend, ForwardRef$6W as GraphicEq, ForwardRef$6V as Hanger, ForwardRef$6U as Hangout, ForwardRef$6T as HealthCare, ForwardRef$6S as Heart, ForwardRef$6n as Home, ForwardRef$6R as HomeAdd, ForwardRef$6Q as HomeArrowDown, ForwardRef$6P as HomeArrowUp, ForwardRef$6O as HomeCelsius, ForwardRef$6N as HomeCheck, ForwardRef$6M as HomeCloud, ForwardRef$6L as HomeDownload, ForwardRef$6K as HomeEye, ForwardRef$6J as HomeFavourite, ForwardRef$6I as HomeFilter, ForwardRef$6H as HomeFlash, ForwardRef$6G as HomeFluid, ForwardRef$6F as HomeGraph, ForwardRef$6E as HomeInformation, ForwardRef$6D as HomeLink, ForwardRef$6B as HomeLocation, ForwardRef$6C as HomeLocationBig, ForwardRef$6A as HomeLock, ForwardRef$6z as HomeMail, ForwardRef$6y as HomeMinus, ForwardRef$6x as HomeNotification, ForwardRef$6w as HomePower, ForwardRef$6v as HomeRemove, ForwardRef$6u as HomeSetting, ForwardRef$6t as HomeShare, ForwardRef$6s as HomeShield, ForwardRef$6r as HomeUpload, ForwardRef$6q as HomeWarning, ForwardRef$6p as HomeWave, ForwardRef$6o as HomeWifi, ForwardRef$6m as Honey, ForwardRef$6j as Hospital, ForwardRef$6l as HospitalBed, ForwardRef$6k as HospitalPanel, ForwardRef$6h as Hotspot, ForwardRef$6i as HotspotOff, ForwardRef$6g as InCircle, ForwardRef$6f as InRectangle, ForwardRef$6e as Injection, ForwardRef$6d as Instagram, ForwardRef$6c as Internet, ForwardRef$6a as Invoice, ForwardRef$6b as InvoicePercent, ForwardRef$69 as Laptop, ForwardRef$68 as LightMode, ForwardRef$65 as LineChart, ForwardRef$67 as LineChartAscending, ForwardRef$66 as LineChartDescending, ForwardRef$64 as Linkedln, ForwardRef$5Z as Location, ForwardRef$63 as LocationAdd, ForwardRef$62 as LocationHospital, ForwardRef$61 as LocationMinus, ForwardRef$60 as LocationRemove, ForwardRef$5$ as LocationShare, ForwardRef$5_ as LocationUser, ForwardRef$5Y as Lock, ForwardRef$5C as Map, ForwardRef$5T as MapAccordion, ForwardRef$5X as MapAccordionBelow, ForwardRef$5W as MapAccordionFlag, ForwardRef$5V as MapAccordionPin, ForwardRef$5U as MapAccordionTop, ForwardRef$5S as MapBig, ForwardRef$5R as MapCircleGps, ForwardRef$5Q as MapFlag, ForwardRef$5N as MapGps, ForwardRef$5P as MapGpsBelow, ForwardRef$5O as MapGpsNavigation, ForwardRef$5I as MapLocation, ForwardRef$5M as MapLocationAccordion, ForwardRef$5L as MapLocationBelow, ForwardRef$5K as MapLocationMiddle, ForwardRef$5J as MapLocationTop, ForwardRef$5H as MapPaper, ForwardRef$5F as MapPeople, ForwardRef$5G as MapPeopleAccordion, ForwardRef$5E as MapPin, ForwardRef$5D as MapSmall, ForwardRef$5B as Mask, ForwardRef$5A as MasterCard, ForwardRef$5z as MaximizeCircle, ForwardRef$5x as MaximizeRectangle, ForwardRef$5y as MaximizeRectangleDoted, ForwardRef$5w as MedicalBook, ForwardRef$5v as MedicalInformation, ForwardRef$5u as MedicalService, ForwardRef$5t as MenuCircleHorizontal, ForwardRef$5s as MenuCircleVertical, ForwardRef$5r as MenuHome, ForwardRef$5p as MenuLineHorizontal, ForwardRef$5q as MenuLineHorizontalHalf, ForwardRef$5n as MenuLineVertical, ForwardRef$5o as MenuLineVerticalHalf, ForwardRef$5m as MenuUser, ForwardRef$5l as Messenger, ForwardRef$5k as MiniStoreCrooked, ForwardRef$5j as MiniStoreSmile, ForwardRef$5i as MinimizeCircle, ForwardRef$5g as MinimizeRectangle, ForwardRef$5h as MinimizeRectangleDoted, ForwardRef$5c as Mobile, ForwardRef$5e as MobileData, ForwardRef$5f as MobileDataOff, ForwardRef$5d as MobilePayment, ForwardRef$4J as Money, ForwardRef$58 as MoneyAdd, ForwardRef$57 as MoneyArrowDown, ForwardRef$56 as MoneyArrowLeft, ForwardRef$55 as MoneyArrowRight, ForwardRef$54 as MoneyArrowUp, ForwardRef$50 as MoneyBag, ForwardRef$53 as MoneyBagCoin, ForwardRef$52 as MoneyBagCoins, ForwardRef$51 as MoneyBagDollar, ForwardRef$5b as MoneyBagEuro, ForwardRef$5a as MoneyBagPound, ForwardRef$59 as MoneyBagYen, ForwardRef$4$ as MoneyBigCircle, ForwardRef$4_ as MoneyCheck, ForwardRef$4Z as MoneyCoin, ForwardRef$4Y as MoneyDash, ForwardRef$4X as MoneyDollar, ForwardRef$4W as MoneyDoubleDot, ForwardRef$4V as MoneyEuro, ForwardRef$4U as MoneyFavourite, ForwardRef$4T as MoneyIncome, ForwardRef$4S as MoneyMinus, ForwardRef$4R as MoneyPound, ForwardRef$4Q as MoneyProfitBelow, ForwardRef$4P as MoneyProfitTop, ForwardRef$4O as MoneyRemove, ForwardRef$4N as MoneySmallCircle, ForwardRef$4M as MoneyUser, ForwardRef$4L as MoneyWithdraw, ForwardRef$4K as MoneyYen, ForwardRef$4H as Music, ForwardRef$4I as MusicOff, ForwardRef$4G as Navigation, ForwardRef$4F as Netflix, ForwardRef$4E as NextArrow, ForwardRef$4D as NightMode, ForwardRef$4A as Notification, ForwardRef$4C as NotificationOff, ForwardRef$4B as NotificationWithCircle, ForwardRef$4q as OpenBox, ForwardRef$4z as OpenBoxAdd, ForwardRef$4y as OpenBoxArrowDown, ForwardRef$4x as OpenBoxArrowUp, ForwardRef$4w as OpenBoxDone, ForwardRef$4v as OpenBoxFavorite, ForwardRef$4u as OpenBoxMinus, ForwardRef$4t as OpenBoxRemove, ForwardRef$4s as OpenBoxSearch, ForwardRef$4r as OpenBoxTwoSide, ForwardRef$4p as OutCircle, ForwardRef$4o as OutRectangle, ForwardRef$4b as Package, ForwardRef$4i as PackageBox, ForwardRef$4n as PackageBoxCube, ForwardRef$4m as PackageBoxDash, ForwardRef$4l as PackageBoxFavorite, ForwardRef$4k as PackageBoxHandle, ForwardRef$4j as PackageBoxTwoSide, ForwardRef$4h as PackageCube, ForwardRef$4g as PackageDashCentre, ForwardRef$4f as PackageDashLeft, ForwardRef$4e as PackageDashRight, ForwardRef$4d as PackageFavorite, ForwardRef$4c as PackageSun, ForwardRef$4a as PackagingAdd, ForwardRef$49 as PackagingArrowDown, ForwardRef$48 as PackagingArrowUp, ForwardRef$47 as PackagingCancel, ForwardRef$46 as PackagingDone, ForwardRef$45 as PackagingFavorite, ForwardRef$43 as PackagingLocation, ForwardRef$44 as PackagingLocationBox, ForwardRef$42 as PackagingMinus, ForwardRef$41 as PackagingSearch, ForwardRef$40 as PackagingTime, ForwardRef$3$ as PaperPin, ForwardRef$3_ as Parcel, ForwardRef$3Z as Payoneer, ForwardRef$3Y as Paypal, ForwardRef$3W as People, ForwardRef$3X as PeopleCircleBelow, ForwardRef$3V as PhoneLock, ForwardRef$3U as PieChart, ForwardRef$3T as PillTablet, ForwardRef$3R as Pills, ForwardRef$3S as PillsCapsule, ForwardRef$3P as Pin, ForwardRef$3Q as PinCircle, ForwardRef$3N as Pinterest, ForwardRef$3O as PinterestCircle, ForwardRef$3M as Plaster, ForwardRef$3L as Pound, ForwardRef$3K as Press, ForwardRef$3J as PreviousArrow, ForwardRef$3G as Profit, ForwardRef$3I as ProfitCart, ForwardRef$3H as ProfitCoin, ForwardRef$3F as Pyramid, ForwardRef$3E as QrScan, ForwardRef$3D as Receipt, ForwardRef$3z as Redo, ForwardRef$3C as RedoCircle, ForwardRef$3B as RedoRectangleLeft, ForwardRef$3A as RedoRectangleRight, ForwardRef$3w as Reload, ForwardRef$3y as ReloadCircle, ForwardRef$3x as ReloadRectangle, ForwardRef$3v as Restart, ForwardRef$3s as Return, ForwardRef$3u as ReturnBox, ForwardRef$3t as ReturnCircle, ForwardRef$3r as Reward, ForwardRef$3l as Road, ForwardRef$3q as RoadHorizontal, ForwardRef$3o as RoadLocation, ForwardRef$3p as RoadLocationHorizontal, ForwardRef$3m as RoadPin, ForwardRef$3n as RoadPinHorizontal, ForwardRef$2S as RoofHome, ForwardRef$3k as RoofHomeAdd, ForwardRef$3j as RoofHomeArrowDown, ForwardRef$3i as RoofHomeArrowUp, ForwardRef$3h as RoofHomeCelsius, ForwardRef$3g as RoofHomeCheck, ForwardRef$3f as RoofHomeCloud, ForwardRef$3e as RoofHomeDownload, ForwardRef$3d as RoofHomeEye, ForwardRef$3c as RoofHomeFavourite, ForwardRef$3b as RoofHomeFilter, ForwardRef$3a as RoofHomeFlash, ForwardRef$39 as RoofHomeFluid, ForwardRef$38 as RoofHomeGraph, ForwardRef$37 as RoofHomeInformation, ForwardRef$36 as RoofHomeLink, ForwardRef$34 as RoofHomeLocation, ForwardRef$35 as RoofHomeLocationBig, ForwardRef$33 as RoofHomeLock, ForwardRef$32 as RoofHomeMail, ForwardRef$31 as RoofHomeMinus, ForwardRef$30 as RoofHomeNotification, ForwardRef$2$ as RoofHomePower, ForwardRef$2_ as RoofHomeRemove, ForwardRef$2Z as RoofHomeSetting, ForwardRef$2Y as RoofHomeShare, ForwardRef$2X as RoofHomeShield, ForwardRef$2W as RoofHomeUpload, ForwardRef$2V as RoofHomeWarning, ForwardRef$2U as RoofHomeWave, ForwardRef$2T as RoofHomeWifi, ForwardRef$2R as RotateLock, ForwardRef$2P as SafeBox, ForwardRef$2Q as SafeBoxStar, ForwardRef$2O as ScreenRotate, ForwardRef$2N as Screenshot, ForwardRef$2M as SdStorage, ForwardRef$2L as Security, ForwardRef$2K as Sensor, ForwardRef$2J as Setting, ForwardRef$2I as Shield, ForwardRef$2H as Shipping, ForwardRef$2B as ShoppingBag, ForwardRef$2G as ShoppingBagAdd, ForwardRef$2F as ShoppingBagCheck, ForwardRef$2E as ShoppingBagFavourite, ForwardRef$2D as ShoppingBagMinus, ForwardRef$2C as ShoppingBagRemove, ForwardRef$2q as ShoppingBasket, ForwardRef$2A as ShoppingBasketAdd, ForwardRef$2z as ShoppingBasketArrowDown, ForwardRef$2y as ShoppingBasketArrowOut, ForwardRef$2x as ShoppingBasketCheck, ForwardRef$2w as ShoppingBasketDoubleDoor, ForwardRef$2v as ShoppingBasketFavourite, ForwardRef$2u as ShoppingBasketMinus, ForwardRef$2t as ShoppingBasketRemove, ForwardRef$2s as ShoppingBasketSimple, ForwardRef$2r as ShoppingBasketSingleDoor, ForwardRef$2p as ShutDown, ForwardRef$2j as SignalCellular, ForwardRef$2o as SignalCellularBad, ForwardRef$2n as SignalCellularLine, ForwardRef$2l as SignalCellularNoInternet, ForwardRef$2m as SignalCellularNoInternetDashed, ForwardRef$2k as SignalCellularOff, ForwardRef$2e as Signpost, ForwardRef$2i as SignpostBig, ForwardRef$2h as SignpostRight, ForwardRef$2g as SignpostSmall, ForwardRef$2f as SignpostTop, ForwardRef$2d as SimCard, ForwardRef$2c as Skype, ForwardRef$2b as Slack, ForwardRef$2a as SmartAirConditioning, ForwardRef$29 as SmartDoor, ForwardRef$28 as SmartHumidity, ForwardRef$26 as SmartKey, ForwardRef$27 as SmartKeyDotted, ForwardRef$25 as SmartLight, ForwardRef$24 as SmartLock, ForwardRef$23 as SmartMusic, ForwardRef$22 as SmartPhone, ForwardRef$21 as SmartPlug, ForwardRef$20 as SmartPower, ForwardRef$1$ as SmartRemote, ForwardRef$1_ as SmartSpeaker, ForwardRef$1Z as SmartSwitch, ForwardRef$1Y as SmartThermostat, ForwardRef$1X as SmartTv, ForwardRef$1W as SmartWatch, ForwardRef$1V as Snapchat, ForwardRef$1U as SolarPanel, ForwardRef$1T as Spotify, ForwardRef$1z as SpringNotes, ForwardRef$1S as SpringNotesAdd, ForwardRef$1R as SpringNotesCheck, ForwardRef$1Q as SpringNotesDelete, ForwardRef$1P as SpringNotesDownload, ForwardRef$1G as SpringNotesEdit, ForwardRef$1O as SpringNotesEditAdd, ForwardRef$1N as SpringNotesEditCheck, ForwardRef$1M as SpringNotesEditDelete, ForwardRef$1L as SpringNotesEditDownload, ForwardRef$1K as SpringNotesEditFavourite, ForwardRef$1J as SpringNotesEditMinus, ForwardRef$1I as SpringNotesEditSearch, ForwardRef$1H as SpringNotesEditUpload, ForwardRef$1F as SpringNotesFavourite, ForwardRef$1E as SpringNotesList, ForwardRef$1D as SpringNotesRemove, ForwardRef$1C as SpringNotesSearch, ForwardRef$1B as SpringNotesUpload, ForwardRef$1A as SpringNotesWriteEdit, ForwardRef$1y as StandbyMode, ForwardRef$1x as Stethoscope, ForwardRef$1w as Storage, ForwardRef$1u as Store, ForwardRef$1v as StoreSmile, ForwardRef$1t as Switch, ForwardRef$1s as Syrup, ForwardRef$1r as Tablet, ForwardRef$1p as Tag, ForwardRef$1q as TagCrooked, ForwardRef$1o as TaskCheckPaper, ForwardRef$1n as Telegram, ForwardRef$1m as TestTube, ForwardRef$1l as Thermometer, ForwardRef$1k as Tiktok, ForwardRef$1j as Tooth, ForwardRef$1i as Transfer, ForwardRef$1h as Transfusion, ForwardRef$1f as Trolley, ForwardRef$1g as TrolleyCrooked, ForwardRef$1b as Turn, ForwardRef$1e as TurnLeft, ForwardRef$1d as TurnRight, ForwardRef$1c as TurnTwoSide, ForwardRef$18 as Twitter, ForwardRef$1a as TwitterPlus, ForwardRef$19 as TwitterSparrow, ForwardRef$17 as UTurnLeft, ForwardRef$16 as UTurnRight, ForwardRef$15 as Umbrella, ForwardRef$13 as Undo, ForwardRef$14 as UndoCircle, ForwardRef$12 as Unlock, ForwardRef$11 as UploadCircle, ForwardRef$10 as UploadRectangle, ForwardRef$$ as Usb, ForwardRef$O as User, ForwardRef$_ as UserAdd, ForwardRef$Z as UserBlock, ForwardRef$U as UserCircle, ForwardRef$Y as UserCircleAdd, ForwardRef$X as UserCircleBlock, ForwardRef$W as UserCircleMinus, ForwardRef$V as UserCircleRemove, ForwardRef$T as UserCommunity, ForwardRef$S as UserMinus, ForwardRef$R as UserPolygon, ForwardRef$Q as UserRectangle, ForwardRef$P as UserRemove, ForwardRef$N as UsersDouble, ForwardRef$M as UsersTriple, ForwardRef$L as VibrateMode, ForwardRef$J as Video, ForwardRef$K as VideoOff, ForwardRef$G as View, ForwardRef$I as ViewOff, ForwardRef$H as ViewPrivacy, ForwardRef$k as Wallet, ForwardRef$E as WalletAdd, ForwardRef$F as WalletAddClose, ForwardRef$C as WalletArrowDown, ForwardRef$D as WalletArrowDownClose, ForwardRef$A as WalletArrowLeft, ForwardRef$B as WalletArrowLeftClose, ForwardRef$y as WalletArrowRight, ForwardRef$z as WalletArrowRightClose, ForwardRef$w as WalletArrowUp, ForwardRef$x as WalletArrowUpClose, ForwardRef$u as WalletCheck, ForwardRef$v as WalletCheckClose, ForwardRef$t as WalletClose, ForwardRef$r as WalletMinus, ForwardRef$s as WalletMinusClose, ForwardRef$q as WalletOpenLeft, ForwardRef$p as WalletOpenRight, ForwardRef$n as WalletRemove, ForwardRef$o as WalletRemoveClose, ForwardRef$l as WalletUser, ForwardRef$m as WalletUserClose, ForwardRef$j as Warehouse, ForwardRef$i as Whatsapp, ForwardRef$g as WheelChair, ForwardRef$h as WheelChairHuman, ForwardRef$f as Widgets, ForwardRef$9 as Wifi, ForwardRef$a as WifiOff, ForwardRef$b as WifiSignal, ForwardRef$e as WifiSignalBad, ForwardRef$d as WifiSignalNoInternet, ForwardRef$c as WifiSignalOff, ForwardRef$8 as WirelessCharging, ForwardRef$7 as Withdraw, ForwardRef$6 as Yen, ForwardRef$5 as Youtube, ForwardRef$3 as ZoomIn, ForwardRef$4 as ZoomInRectangle, ForwardRef as ZoomOut, ForwardRef$2 as ZoomOutCircle, ForwardRef$1 as ZoomOutRectangle };
