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
var ForwardRef$4J = forwardRef(SvgAboutPhone);

var SvgAccessibility = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M13.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M5 6c5.424 1.337 8.4 1.33 14 0' }),
        React.createElement("path", { fill: 'currentColor', d: 'M10 12V7h4v5h-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm11 10-1 8m3-8 1 8' })));
};
var ForwardRef$4I = forwardRef(SvgAccessibility);

var SvgActivity = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 12h2l2-4 4 9 2-5h2' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z' })));
};
var ForwardRef$4H = forwardRef(SvgActivity);

var SvgAirplaneModeOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M21 21 3 3m11.395 11.395v2.143c0 .428.14.847.402 1.204l1.887 2.564c.681.927-.434 2.071-1.532 1.573l-2.08-.943a2.619 2.619 0 0 0-2.143 0l-2.081.943c-1.099.498-2.213-.646-1.532-1.573l1.887-2.564c.262-.357.402-.776.402-1.204v-2.6c0-.599-.536-1.084-1.198-1.084H4.2c-1.203 0-1.655-1.428-.635-2.006l4.65-2.634m1.39-2.61V4.396a2.395 2.395 0 0 1 4.79 0v1.829c0 .748.426 1.444 1.126 1.84l4.914 2.784c1.02.578.569 2.006-.635 2.006h-2.946' })));
};
var ForwardRef$4G = forwardRef(SvgAirplaneModeOff);

var SvgAirplaneMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'm16.684 20.306-1.887-2.564a2.029 2.029 0 0 1-.402-1.204v-2.6c0-.599.536-1.084 1.198-1.084H19.8c1.203 0 1.655-1.428.635-2.006l-4.914-2.784c-.7-.396-1.126-1.092-1.126-1.84V4.395a2.395 2.395 0 0 0-4.79 0v1.829c0 .748-.426 1.444-1.126 1.84l-4.914 2.784c-1.02.578-.568 2.006.635 2.006h4.207c.662 0 1.198.486 1.198 1.085v2.599c0 .428-.14.847-.402 1.204l-1.887 2.564c-.681.927.433 2.071 1.532 1.573l2.08-.943a2.619 2.619 0 0 1 2.143 0l2.081.943c1.098.498 2.213-.646 1.532-1.573Z' })));
};
var ForwardRef$4F = forwardRef(SvgAirplaneMode);

var SvgAmbulance = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M14 19V7m0 12h2m-2 0H9m5-12a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a4.002 4.002 0 0 0 3.004 3.875M14 7h3.21a2 2 0 0 1 1.367.54l2.79 2.617a2 2 0 0 1 .633 1.46V17a2 2 0 0 1-2 2m0 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m-7 0a2 2 0 1 1-3.996-.125M9 19a2 2 0 0 0-3.996-.125' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 8v4m4-4v4m0-2H6' })));
};
var ForwardRef$4E = forwardRef(SvgAmbulance);

var SvgAppsCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M9.25 7A2.25 2.25 0 0 1 7 9.25v1.5A3.75 3.75 0 0 0 10.75 7h-1.5ZM7 9.25A2.25 2.25 0 0 1 4.75 7h-1.5A3.75 3.75 0 0 0 7 10.75v-1.5ZM4.75 7A2.25 2.25 0 0 1 7 4.75v-1.5A3.75 3.75 0 0 0 3.25 7h1.5ZM7 4.75A2.25 2.25 0 0 1 9.25 7h1.5A3.75 3.75 0 0 0 7 3.25v1.5ZM19.25 17A2.25 2.25 0 0 1 17 19.25v1.5A3.75 3.75 0 0 0 20.75 17h-1.5ZM17 19.25A2.25 2.25 0 0 1 14.75 17h-1.5A3.75 3.75 0 0 0 17 20.75v-1.5ZM14.75 17A2.25 2.25 0 0 1 17 14.75v-1.5A3.75 3.75 0 0 0 13.25 17h1.5ZM17 14.75A2.25 2.25 0 0 1 19.25 17h1.5A3.75 3.75 0 0 0 17 13.25v1.5ZM9.25 17A2.25 2.25 0 0 1 7 19.25v1.5A3.75 3.75 0 0 0 10.75 17h-1.5ZM7 19.25A2.25 2.25 0 0 1 4.75 17h-1.5A3.75 3.75 0 0 0 7 20.75v-1.5ZM4.75 17A2.25 2.25 0 0 1 7 14.75v-1.5A3.75 3.75 0 0 0 3.25 17h1.5ZM7 14.75A2.25 2.25 0 0 1 9.25 17h1.5A3.75 3.75 0 0 0 7 13.25v1.5ZM19.25 7A2.25 2.25 0 0 1 17 9.25v1.5A3.75 3.75 0 0 0 20.75 7h-1.5ZM17 9.25A2.25 2.25 0 0 1 14.75 7h-1.5A3.75 3.75 0 0 0 17 10.75v-1.5ZM14.75 7A2.25 2.25 0 0 1 17 4.75v-1.5A3.75 3.75 0 0 0 13.25 7h1.5ZM17 4.75A2.25 2.25 0 0 1 19.25 7h1.5A3.75 3.75 0 0 0 17 3.25v1.5Z' })));
};
var ForwardRef$4D = forwardRef(SvgAppsCircle);

var SvgAppsDoubleCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M9.25 7A2.25 2.25 0 0 1 7 9.25v1.5A3.75 3.75 0 0 0 10.75 7h-1.5ZM7 9.25A2.25 2.25 0 0 1 4.75 7h-1.5A3.75 3.75 0 0 0 7 10.75v-1.5ZM4.75 7A2.25 2.25 0 0 1 7 4.75v-1.5A3.75 3.75 0 0 0 3.25 7h1.5ZM7 4.75A2.25 2.25 0 0 1 9.25 7h1.5A3.75 3.75 0 0 0 7 3.25v1.5ZM19.25 17A2.25 2.25 0 0 1 17 19.25v1.5A3.75 3.75 0 0 0 20.75 17h-1.5ZM17 19.25A2.25 2.25 0 0 1 14.75 17h-1.5A3.75 3.75 0 0 0 17 20.75v-1.5ZM14.75 17A2.25 2.25 0 0 1 17 14.75v-1.5A3.75 3.75 0 0 0 13.25 17h1.5ZM17 14.75A2.25 2.25 0 0 1 19.25 17h1.5A3.75 3.75 0 0 0 17 13.25v1.5Zm-1-10h2v-1.5h-2v1.5ZM19.25 6v2h1.5V6h-1.5ZM18 9.25h-2v1.5h2v-1.5ZM14.75 8V6h-1.5v2h1.5ZM16 9.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 16 10.75v-1.5ZM19.25 8c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 8h-1.5ZM18 4.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 3.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 13.25 6h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM6 14.75h2v-1.5H6v1.5ZM9.25 16v2h1.5v-2h-1.5ZM8 19.25H6v1.5h2v-1.5ZM4.75 18v-2h-1.5v2h1.5ZM6 19.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 6 20.75v-1.5ZM9.25 18c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 10.75 18h-1.5ZM8 14.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 8 13.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 3.25 16h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z' })));
};
var ForwardRef$4C = forwardRef(SvgAppsDoubleCircle);

var SvgAppsRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16 4.75h2v-1.5h-2v1.5ZM19.25 6v2h1.5V6h-1.5ZM18 9.25h-2v1.5h2v-1.5ZM14.75 8V6h-1.5v2h1.5ZM16 9.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 16 10.75v-1.5ZM19.25 8c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 8h-1.5ZM18 4.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 3.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 13.25 6h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM6 14.75h2v-1.5H6v1.5ZM9.25 16v2h1.5v-2h-1.5ZM8 19.25H6v1.5h2v-1.5ZM4.75 18v-2h-1.5v2h1.5ZM6 19.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 6 20.75v-1.5ZM9.25 18c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 10.75 18h-1.5ZM8 14.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 8 13.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 3.25 16h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm0-8.5h2v-1.5H6v1.5ZM9.25 6v2h1.5V6h-1.5ZM8 9.25H6v1.5h2v-1.5ZM4.75 8V6h-1.5v2h1.5ZM6 9.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 6 10.75v-1.5ZM9.25 8c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 10.75 8h-1.5ZM8 4.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 8 3.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 3.25 6h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm10 11.5h2v-1.5h-2v1.5ZM19.25 16v2h1.5v-2h-1.5ZM18 19.25h-2v1.5h2v-1.5ZM14.75 18v-2h-1.5v2h1.5ZM16 19.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 16 20.75v-1.5ZM19.25 18c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 18h-1.5ZM18 14.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 13.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 13.25 16h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z' })));
};
var ForwardRef$4B = forwardRef(SvgAppsRectangle);

var SvgAppsTripleRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M19.25 17A2.25 2.25 0 0 1 17 19.25v1.5A3.75 3.75 0 0 0 20.75 17h-1.5ZM17 19.25A2.25 2.25 0 0 1 14.75 17h-1.5A3.75 3.75 0 0 0 17 20.75v-1.5ZM14.75 17A2.25 2.25 0 0 1 17 14.75v-1.5A3.75 3.75 0 0 0 13.25 17h1.5ZM17 14.75A2.25 2.25 0 0 1 19.25 17h1.5A3.75 3.75 0 0 0 17 13.25v1.5Zm-1-10h2v-1.5h-2v1.5ZM19.25 6v2h1.5V6h-1.5ZM18 9.25h-2v1.5h2v-1.5ZM14.75 8V6h-1.5v2h1.5ZM16 9.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 16 10.75v-1.5ZM19.25 8c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 8h-1.5ZM18 4.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 3.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 13.25 6h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM6 4.75h2v-1.5H6v1.5ZM9.25 6v2h1.5V6h-1.5ZM8 9.25H6v1.5h2v-1.5ZM4.75 8V6h-1.5v2h1.5ZM6 9.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 6 10.75v-1.5ZM9.25 8c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 10.75 8h-1.5ZM8 4.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 8 3.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 3.25 6h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm0 11.5h2v-1.5H6v1.5ZM9.25 16v2h1.5v-2h-1.5ZM8 19.25H6v1.5h2v-1.5ZM4.75 18v-2h-1.5v2h1.5ZM6 19.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 6 20.75v-1.5ZM9.25 18c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 10.75 18h-1.5ZM8 14.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 8 13.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 3.25 16h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z' })));
};
var ForwardRef$4A = forwardRef(SvgAppsTripleRectangle);

var SvgArrowBackCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { fill: 'currentColor', d: 'M9.47 6.47a.75.75 0 1 1 1.06 1.06L9.47 6.47ZM8 9l-.53.53a.75.75 0 0 1 0-1.06L8 9Zm2.53 1.47a.75.75 0 1 1-1.06 1.06l1.06-1.06ZM8 15.75a.75.75 0 0 1 0-1.5v1.5Zm2.53-8.22-2 2-1.06-1.06 2-2 1.06 1.06Zm-2 .94 2 2-1.06 1.06-2-2 1.06-1.06ZM8 8.25h5v1.5H8v-1.5Zm5 7.5H8v-1.5h5v1.5ZM16.75 12A3.75 3.75 0 0 1 13 15.75v-1.5A2.25 2.25 0 0 0 15.25 12h1.5ZM13 8.25A3.75 3.75 0 0 1 16.75 12h-1.5A2.25 2.25 0 0 0 13 9.75v-1.5Z' })));
};
var ForwardRef$4z = forwardRef(SvgArrowBackCircle);

var SvgArrowBackRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M9.47 6.47a.75.75 0 1 1 1.06 1.06L9.47 6.47ZM8 9l-.53.53a.75.75 0 0 1 0-1.06L8 9Zm2.53 1.47a.75.75 0 1 1-1.06 1.06l1.06-1.06ZM8 15.75a.75.75 0 0 1 0-1.5v1.5Zm2.53-8.22-2 2-1.06-1.06 2-2 1.06 1.06Zm-2 .94 2 2-1.06 1.06-2-2 1.06-1.06ZM8 8.25h5v1.5H8v-1.5Zm5 7.5H8v-1.5h5v1.5ZM16.75 12A3.75 3.75 0 0 1 13 15.75v-1.5A2.25 2.25 0 0 0 15.25 12h1.5ZM13 8.25A3.75 3.75 0 0 1 16.75 12h-1.5A2.25 2.25 0 0 0 13 9.75v-1.5Z' })));
};
var ForwardRef$4y = forwardRef(SvgArrowBackRectangle);

var SvgArrowBack = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm5 8-.45.6a.75.75 0 0 1 0-1.2L5 8Zm0 8.75a.75.75 0 0 1 0-1.5v1.5ZM8.55 4.4a.75.75 0 1 1 .9 1.2l-.9-1.2Zm.9 6a.75.75 0 1 1-.9 1.2l.9-1.2ZM5 7.25h10v1.5H5v-1.5Zm10 9.5H5v-1.5h10v1.5ZM4.55 7.4l4-3 .9 1.2-4 3-.9-1.2Zm.9 0 4 3-.9 1.2-4-3 .9-1.2Zm14.3 4.6A4.75 4.75 0 0 1 15 16.75v-1.5A3.25 3.25 0 0 0 18.25 12h1.5ZM15 7.25A4.75 4.75 0 0 1 19.75 12h-1.5A3.25 3.25 0 0 0 15 8.75v-1.5Z' })));
};
var ForwardRef$4x = forwardRef(SvgArrowBack);

var SvgArrowDownCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm9 13 3 3m0 0 3-3m-3 3V8' })));
};
var ForwardRef$4w = forwardRef(SvgArrowDownCircle);

var SvgArrowDownRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm3 11 3 3m0 0 3-3m-3 3V8' })));
};
var ForwardRef$4v = forwardRef(SvgArrowDownRectangle);

var SvgArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm8 14 4 4m0 0 4-4m-4 4V6' })));
};
var ForwardRef$4u = forwardRef(SvgArrowDown);

var SvgArrowDropDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M15.518 7H8.482c-1.544 0-2.505 1.674-1.727 3.008l3.517 6.03c.772 1.323 2.684 1.323 3.456 0l3.518-6.03C18.023 8.674 17.061 7 15.518 7Z' })));
};
var ForwardRef$4t = forwardRef(SvgArrowDropDown);

var SvgArrowDropLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M17 15.518V8.482c0-1.544-1.674-2.505-3.008-1.727l-6.03 3.517c-1.323.772-1.323 2.684 0 3.456l6.03 3.518c1.334.777 3.008-.184 3.008-1.728Z' })));
};
var ForwardRef$4s = forwardRef(SvgArrowDropLeft);

var SvgArrowDropRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M7 15.518V8.482c0-1.544 1.674-2.505 3.008-1.727l6.03 3.517c1.323.772 1.323 2.684 0 3.456l-6.03 3.518C8.674 18.023 7 17.061 7 15.518Z' })));
};
var ForwardRef$4r = forwardRef(SvgArrowDropRight);

var SvgArrowDropUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8.482 17h7.036c1.543 0 2.505-1.674 1.727-3.008l-3.517-6.03c-.772-1.323-2.684-1.323-3.456 0l-3.517 6.03C5.977 15.326 6.938 17 8.482 17Z' })));
};
var ForwardRef$4q = forwardRef(SvgArrowDropUp);

var SvgArrowLeftCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm11 15-3-3m0 0 3-3m-3 3h8' })));
};
var ForwardRef$4p = forwardRef(SvgArrowLeftCircle);

var SvgArrowLeftRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-7 13-3-3m0 0 3-3m-3 3h8' })));
};
var ForwardRef$4o = forwardRef(SvgArrowLeftRectangle);

var SvgArrowLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm10 8-4 4m0 0 4 4m-4-4h12' })));
};
var ForwardRef$4n = forwardRef(SvgArrowLeft);

var SvgArrowMoveCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Zm11 4-2 2m0 0-2-2m2 2V6m0 0 2 2m-2-2-2 2m-2 6-2-2m0 0 2-2m-2 2h12m0 0-2 2m2-2-2-2' })));
};
var ForwardRef$4m = forwardRef(SvgArrowMoveCircle);

var SvgArrowMoveRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-4 14-2 2m0 0-2-2m2 2V6m0 0 2 2m-2-2-2 2m-2 6-2-2m0 0 2-2m-2 2h12m0 0-2 2m2-2-2-2' })));
};
var ForwardRef$4l = forwardRef(SvgArrowMoveRectangle);

var SvgArrowMove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm15 18-3 3m0 0-3-3m3 3V3m0 0 3 3m-3-3L9 6m-3 9-3-3m0 0 3-3m-3 3h18m0 0-3 3m3-3-3-3' })));
};
var ForwardRef$4k = forwardRef(SvgArrowMove);

var SvgArrowReturnCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { fill: 'currentColor', d: 'M14.53 6.47a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM16 9l.53.53a.75.75 0 0 0 0-1.06L16 9Zm-2.53 1.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM16 15.75a.75.75 0 0 0 0-1.5v1.5Zm-2.53-8.22 2 2 1.06-1.06-2-2-1.06 1.06Zm2 .94-2 2 1.06 1.06 2-2-1.06-1.06Zm.53-.22h-5v1.5h5v-1.5Zm-5 7.5h5v-1.5h-5v1.5ZM7.25 12A3.75 3.75 0 0 0 11 15.75v-1.5A2.25 2.25 0 0 1 8.75 12h-1.5ZM11 8.25A3.75 3.75 0 0 0 7.25 12h1.5A2.25 2.25 0 0 1 11 9.75v-1.5Z' })));
};
var ForwardRef$4j = forwardRef(SvgArrowReturnCircle);

var SvgArrowReturnRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M14.53 6.47a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM16 9l.53.53a.75.75 0 0 0 0-1.06L16 9Zm-2.53 1.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM16 15.75a.75.75 0 0 0 0-1.5v1.5Zm-2.53-8.22 2 2 1.06-1.06-2-2-1.06 1.06Zm2 .94-2 2 1.06 1.06 2-2-1.06-1.06Zm.53-.22h-5v1.5h5v-1.5Zm-5 7.5h5v-1.5h-5v1.5ZM7.25 12A3.75 3.75 0 0 0 11 15.75v-1.5A2.25 2.25 0 0 1 8.75 12h-1.5ZM11 8.25A3.75 3.75 0 0 0 7.25 12h1.5A2.25 2.25 0 0 1 11 9.75v-1.5Z' })));
};
var ForwardRef$4i = forwardRef(SvgArrowReturnRectangle);

var SvgArrowReturn = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm19 8 .45.6a.75.75 0 0 0 0-1.2L19 8Zm0 8.75a.75.75 0 0 0 0-1.5v1.5ZM15.45 4.4a.75.75 0 1 0-.9 1.2l.9-1.2Zm-.9 6a.75.75 0 1 0 .9 1.2l-.9-1.2ZM19 7.25H9v1.5h10v-1.5Zm-10 9.5h10v-1.5H9v1.5ZM19.45 7.4l-4-3-.9 1.2 4 3 .9-1.2Zm-.9 0-4 3 .9 1.2 4-3-.9-1.2ZM4.25 12A4.75 4.75 0 0 0 9 16.75v-1.5A3.25 3.25 0 0 1 5.75 12h-1.5ZM9 7.25A4.75 4.75 0 0 0 4.25 12h1.5A3.25 3.25 0 0 1 9 8.75v-1.5Z' })));
};
var ForwardRef$4h = forwardRef(SvgArrowReturn);

var SvgArrowRightCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm13 15 3-3m0 0-3-3m3 3H8' })));
};
var ForwardRef$4g = forwardRef(SvgArrowRightCircle);

var SvgArrowRightRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm7 13 3-3m0 0-3-3m3 3H8' })));
};
var ForwardRef$4f = forwardRef(SvgArrowRightRectangle);

var SvgArrowRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm14 16 4-4m0 0-4-4m4 4H6' })));
};
var ForwardRef$4e = forwardRef(SvgArrowRight);

var SvgArrowSortCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { fill: 'currentColor', d: 'M7.47 9.47a.75.75 0 1 0 1.06 1.06L7.47 9.47ZM10 8h.75a.75.75 0 0 0-1.28-.53L10 8Zm-.75 8a.75.75 0 0 0 1.5 0h-1.5Zm-.72-5.47 2-2-1.06-1.06-2 2 1.06 1.06ZM9.25 8v8h1.5V8h-1.5Zm7.28 6.53a.75.75 0 1 0-1.06-1.06l1.06 1.06ZM14 16h-.75a.75.75 0 0 0 1.28.53L14 16Zm.75-8a.75.75 0 0 0-1.5 0h1.5Zm.72 5.47-2 2 1.06 1.06 2-2-1.06-1.06ZM14.75 16V8h-1.5v8h1.5Z' })));
};
var ForwardRef$4d = forwardRef(SvgArrowSortCircle);

var SvgArrowSortRectangleHalf = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M7.47 9.47a.75.75 0 1 0 1.06 1.06L7.47 9.47ZM10 8h.75a.75.75 0 0 0-1.28-.53L10 8Zm-.75 8a.75.75 0 0 0 1.5 0h-1.5Zm-.72-5.47 2-2-1.06-1.06-2 2 1.06 1.06ZM9.25 8v8h1.5V8h-1.5Zm7.28 6.53a.75.75 0 1 0-1.06-1.06l1.06 1.06ZM14 16h-.75a.75.75 0 0 0 1.28.53L14 16Zm.75-8a.75.75 0 0 0-1.5 0h1.5Zm.72 5.47-2 2 1.06 1.06 2-2-1.06-1.06ZM14.75 16V8h-1.5v8h1.5Z' })));
};
var ForwardRef$4c = forwardRef(SvgArrowSortRectangleHalf);

var SvgArrowSortRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4ZM7 10l2-2m0 0 2 2M9 8v8m8-2-2 2m0 0-2-2m2 2V8' })));
};
var ForwardRef$4b = forwardRef(SvgArrowSortRectangle);

var SvgArrowSort = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm5 9 3-3m0 0 3 3M8 6v12m11-3-3 3m0 0-3-3m3 3V6' })));
};
var ForwardRef$4a = forwardRef(SvgArrowSort);

var SvgArrowThickDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15 13h-.75c0 .414.336.75.75.75V13Zm-6 0v.75a.75.75 0 0 0 .75-.75H9Zm-2.549 1.659.565-.494-.565.494Zm11.098 0-.565-.494.565.494ZM15.75 13V5h-1.5v8h1.5ZM13 2.25h-2v1.5h2v-1.5ZM8.25 5v8h1.5V5h-1.5ZM9 12.25H7.204v1.5H9v-1.5Zm-3.113 2.902 4.043 4.622 1.13-.988-4.044-4.621-1.13.987Zm8.183 4.622 4.043-4.622-1.129-.987-4.043 4.62 1.129.989Zm2.726-7.524H15v1.5h1.796v-1.5ZM9.93 19.774a2.75 2.75 0 0 0 4.14 0l-1.13-.988a1.25 1.25 0 0 1-1.88 0l-1.13.988ZM7.204 12.25c-1.504 0-2.307 1.77-1.317 2.902l1.129-.987a.25.25 0 0 1 .188-.415v-1.5ZM11 2.25A2.75 2.75 0 0 0 8.25 5h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm7.113 12.902c.99-1.131.187-2.902-1.317-2.902v1.5a.25.25 0 0 1 .188.415l1.13.987ZM15.75 5A2.75 2.75 0 0 0 13 2.25v1.5c.69 0 1.25.56 1.25 1.25h1.5Z' })));
};
var ForwardRef$49 = forwardRef(SvgArrowThickDown);

var SvgArrowThickLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M11 9v.75a.75.75 0 0 1-.75-.75H11Zm0 6h-.75a.75.75 0 0 1 .75-.75V15Zm-1.659 2.549.494-.565-.494.565Zm0-11.098.494.565-.494-.565ZM11 8.25h8v1.5h-8v-1.5ZM21.75 11v2h-1.5v-2h1.5ZM19 15.75h-8v-1.5h8v1.5ZM11.75 15v1.796h-1.5V15h1.5Zm-2.902 3.113L4.226 14.07l.988-1.13 4.621 4.044-.987 1.13ZM4.226 9.93l4.622-4.043.987 1.129-4.621 4.043-.988-1.129Zm7.524-2.726V9h-1.5V7.204h1.5ZM4.226 14.07a2.75 2.75 0 0 1 0-4.14l.988 1.13a1.25 1.25 0 0 0 0 1.88l-.988 1.13Zm7.524 2.726c0 1.504-1.77 2.307-2.902 1.317l.987-1.129a.25.25 0 0 0 .415-.188h1.5Zm10-3.796A2.75 2.75 0 0 1 19 15.75v-1.5c.69 0 1.25-.56 1.25-1.25h1.5ZM8.848 5.887c1.131-.99 2.902-.187 2.902 1.317h-1.5a.25.25 0 0 0-.415-.188l-.987-1.13ZM19 8.25A2.75 2.75 0 0 1 21.75 11h-1.5c0-.69-.56-1.25-1.25-1.25v-1.5Z' })));
};
var ForwardRef$48 = forwardRef(SvgArrowThickLeft);

var SvgArrowThickRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M13 9v.75a.75.75 0 0 0 .75-.75H13Zm0 6h.75a.75.75 0 0 0-.75-.75V15Zm1.659 2.549-.494-.565.494.565Zm0-11.098-.494.565.494-.565ZM13 8.25H5v1.5h8v-1.5ZM2.25 11v2h1.5v-2h-1.5ZM5 15.75h8v-1.5H5v1.5Zm7.25-.75v1.796h1.5V15h-1.5Zm2.902 3.113 4.622-4.043-.988-1.13-4.621 4.044.987 1.13Zm4.622-8.183-4.622-4.043-.987 1.129 4.62 4.043.989-1.129ZM12.25 7.204V9h1.5V7.204h-1.5Zm7.524 6.866a2.75 2.75 0 0 0 0-4.14l-.988 1.13a1.25 1.25 0 0 1 0 1.88l.988 1.13Zm-7.524 2.726c0 1.504 1.77 2.307 2.902 1.317l-.987-1.129a.25.25 0 0 1-.415-.188h-1.5ZM2.25 13A2.75 2.75 0 0 0 5 15.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5Zm12.902-7.113c-1.131-.99-2.902-.187-2.902 1.317h1.5a.25.25 0 0 1 .415-.188l.987-1.13ZM5 8.25A2.75 2.75 0 0 0 2.25 11h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z' })));
};
var ForwardRef$47 = forwardRef(SvgArrowThickRight);

var SvgArrowThickUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M9 11h.75a.75.75 0 0 0-.75-.75V11Zm6 0v-.75a.75.75 0 0 0-.75.75H15Zm2.549-1.659-.565.494.565-.494Zm-11.098 0 .565.494-.565-.494ZM8.25 11v8h1.5v-8h-1.5ZM11 21.75h2v-1.5h-2v1.5ZM15.75 19v-8h-1.5v8h1.5ZM15 11.75h1.796v-1.5H15v1.5Zm3.113-2.902L14.07 4.226l-1.13.988 4.044 4.621 1.13-.987ZM9.93 4.226 5.887 8.848l1.129.987 4.043-4.621-1.129-.988ZM7.204 11.75H9v-1.5H7.204v1.5Zm6.866-7.524a2.75 2.75 0 0 0-4.14 0l1.13.988a1.25 1.25 0 0 1 1.88 0l1.13-.988Zm2.726 7.524c1.504 0 2.307-1.77 1.317-2.902l-1.129.987a.25.25 0 0 1-.188.415v1.5ZM13 21.75A2.75 2.75 0 0 0 15.75 19h-1.5c0 .69-.56 1.25-1.25 1.25v1.5ZM5.887 8.848c-.99 1.131-.187 2.902 1.317 2.902v-1.5a.25.25 0 0 1-.188-.415l-1.13-.987ZM8.25 19A2.75 2.75 0 0 0 11 21.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5Z' })));
};
var ForwardRef$46 = forwardRef(SvgArrowThickUp);

var SvgArrowTransferCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { fill: 'currentColor', d: 'M14.53 7.47a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM16 10v.75a.75.75 0 0 0 .53-1.28L16 10Zm-8-.75a.75.75 0 0 0 0 1.5v-1.5Zm5.47-.72 2 2 1.06-1.06-2-2-1.06 1.06Zm2.53.72H8v1.5h8v-1.5Zm-6.53 7.28a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM8 14v-.75a.75.75 0 0 0-.53 1.28L8 14Zm8 .75a.75.75 0 0 0 0-1.5v1.5Zm-5.47.72-2-2-1.06 1.06 2 2 1.06-1.06ZM8 14.75h8v-1.5H8v1.5Z' })));
};
var ForwardRef$45 = forwardRef(SvgArrowTransferCircle);

var SvgArrowTransferRectangleHalf = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M14.53 7.47a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM16 10v.75a.75.75 0 0 0 .53-1.28L16 10Zm-8-.75a.75.75 0 0 0 0 1.5v-1.5Zm5.47-.72 2 2 1.06-1.06-2-2-1.06 1.06Zm2.53.72H8v1.5h8v-1.5Zm-6.53 7.28a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM8 14v-.75a.75.75 0 0 0-.53 1.28L8 14Zm8 .75a.75.75 0 0 0 0-1.5v1.5Zm-5.47.72-2-2-1.06 1.06 2 2 1.06-1.06ZM8 14.75h8v-1.5H8v1.5Z' })));
};
var ForwardRef$44 = forwardRef(SvgArrowTransferRectangleHalf);

var SvgArrowTransferRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-4 5 2 2m0 0-2 2m2-2H8m2 8-2-2m0 0 2-2m-2 2h8' })));
};
var ForwardRef$43 = forwardRef(SvgArrowTransferRectangle);

var SvgArrowTransfer = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm15 5 3 3m0 0-3 3m3-3H6m3 11-3-3m0 0 3-3m-3 3h12' })));
};
var ForwardRef$42 = forwardRef(SvgArrowTransfer);

var SvgArrowUpCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm9 11 3-3m0 0 3 3m-3-3v8' })));
};
var ForwardRef$41 = forwardRef(SvgArrowUpCircle);

var SvgArrowUpRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm3 9 3-3m0 0 3 3m-3-3v8' })));
};
var ForwardRef$40 = forwardRef(SvgArrowUpRectangle);

var SvgArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm8 10 4-4m0 0 4 4m-4-4v12' })));
};
var ForwardRef$3$ = forwardRef(SvgArrowUp);

var SvgAutoRotation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm12 3.515 7.071 7.07a2 2 0 0 1 0 2.83l-3.536 3.535M12 20.485l-7.071-7.07a2 2 0 0 1 0-2.83L8.464 7.05' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M14.828 14.829v1.828a1 1 0 0 0 1 1h1.829M9.172 9.171V7.343a1 1 0 0 0-1-1H6.343' })));
};
var ForwardRef$3_ = forwardRef(SvgAutoRotation);

var SvgAuto = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M10 13h4' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm8 16 4-8 4 8' })));
};
var ForwardRef$3Z = forwardRef(SvgAuto);

var SvgBatteryAlert = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 12, height: 18, x: 6, y: 4, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M10 2h4m-2 7v4m0 3v1' })));
};
var ForwardRef$3Y = forwardRef(SvgBatteryAlert);

var SvgBatteryChargingFull = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm9 13 1.753 1.402a1 1 0 0 0 1.377-.122L15 11' }),
        React.createElement("rect", { width: 12, height: 18, x: 6, y: 4, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M10 2h4' })));
};
var ForwardRef$3X = forwardRef(SvgBatteryChargingFull);

var SvgBatteryCharging = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 12, height: 18, x: 6, y: 4, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M10 2h4' })));
};
var ForwardRef$3W = forwardRef(SvgBatteryCharging);

var SvgBatteryHorizontalCharging = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: '#2B3341', strokeLinejoin: 'round', d: 'm8.11 12.129.908-.887 3.185-3.11c.318-.31.904-.024.751.367l-.878 2.25c-.095.245.118.497.419.497h1.063c.379 0 .582.381.332.625L9.797 15.87c-.318.31-.904.023-.751-.368l.878-2.25c.095-.245-.118-.497-.419-.497H8.442c-.379 0-.582-.381-.332-.625Z' }),
        React.createElement("rect", { width: 12, height: 18, x: 20, y: 6, stroke: 'currentColor', strokeWidth: 1.5, rx: 2, transform: 'rotate(90 20 6)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M22 10v4' })));
};
var ForwardRef$3V = forwardRef(SvgBatteryHorizontalCharging);

var SvgBatteryHorizontalFull = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm8 12 1.753 1.402a1 1 0 0 0 1.377-.122L14 10' }),
        React.createElement("rect", { width: 12, height: 18, x: 20, y: 6, stroke: 'currentColor', strokeWidth: 1.5, rx: 2, transform: 'rotate(90 20 6)' }),
        React.createElement("rect", { width: 12, height: 18, x: 20, y: 6, stroke: 'currentColor', strokeWidth: 1.5, rx: 2, transform: 'rotate(90 20 6)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M22 10v4' })));
};
var ForwardRef$3U = forwardRef(SvgBatteryHorizontalFull);

var SvgBatteryHorizontalLowbet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M22 10v4M3 3l18 18' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.19 5.25H4A2.75 2.75 0 0 0 1.25 8v8A2.75 2.75 0 0 0 4 18.75h14c.487 0 .944-.127 1.34-.349l-1.163-1.163a1.258 1.258 0 0 1-.177.012H4c-.69 0-1.25-.56-1.25-1.25V8c0-.69.56-1.25 1.25-1.25h3.69l-1.5-1.5Zm13.048 10.927c.008-.058.012-.117.012-.177V8c0-.69-.56-1.25-1.25-1.25H9.81l-1.5-1.5H18A2.75 2.75 0 0 1 20.75 8v8c0 .487-.127.944-.349 1.34l-1.163-1.163Z', clipRule: 'evenodd' })));
};
var ForwardRef$3T = forwardRef(SvgBatteryHorizontalLowbet);

var SvgBatteryHorizontalSavingMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 12, height: 18, x: 20, y: 6, stroke: 'currentColor', strokeWidth: 1.5, rx: 2, transform: 'rotate(90 20 6)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M22 10v4M11 9v6m3-3H8' })));
};
var ForwardRef$3S = forwardRef(SvgBatteryHorizontalSavingMode);

var SvgBatteryHorizontal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 12, height: 18, x: 21, y: 6, stroke: 'currentColor', strokeWidth: 1.5, rx: 2, transform: 'rotate(90 21 6)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M23 10v4' })));
};
var ForwardRef$3R = forwardRef(SvgBatteryHorizontal);

var SvgBatteryLowbet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M10 2h4M3 3l18 18' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.598 4.66A2.737 2.737 0 0 0 5.25 6v14A2.75 2.75 0 0 0 8 22.75h8A2.75 2.75 0 0 0 18.75 20v-2.19l-1.5-1.5V20c0 .69-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25V6c0-.06.004-.12.012-.177L5.598 4.66Zm11.652 9.53V6c0-.69-.56-1.25-1.25-1.25H8c-.06 0-.12.004-.177.012L6.66 3.598A2.737 2.737 0 0 1 8 3.25h8A2.75 2.75 0 0 1 18.75 6v9.69l-1.5-1.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$3Q = forwardRef(SvgBatteryLowbet);

var SvgBatterySavingMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 12, height: 18, x: 6, y: 4, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M10 2h4m-2 8v6m3-3H9' })));
};
var ForwardRef$3P = forwardRef(SvgBatterySavingMode);

var SvgBattery = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 12, height: 18, x: 6, y: 4, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M10 2h4' })));
};
var ForwardRef$3O = forwardRef(SvgBattery);

var SvgBloodPlus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 11v6m3-3H9' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M4 14.111c0-4.649 4.63-9.233 6.845-11.16a1.743 1.743 0 0 1 2.31 0C15.371 4.877 20 9.461 20 14.11 20 18 16.97 22 12 22c-4.97 0-8-4-8-7.889Z' })));
};
var ForwardRef$3N = forwardRef(SvgBloodPlus);

var SvgBlood = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M4 14.111c0-4.649 4.63-9.233 6.845-11.16a1.743 1.743 0 0 1 2.31 0C15.371 4.877 20 9.461 20 14.11 20 18 16.97 22 12 22c-4.97 0-8-4-8-7.889Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M16.876 15c-.406 1.838-1.79 3.499-3.876 3.905' })));
};
var ForwardRef$3M = forwardRef(SvgBlood);

var SvgBluetoothConnected = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm6 8 10.886 7.257a1 1 0 0 1 .085 1.6l-3.33 2.776A1 1 0 0 1 12 18.865V5.135a1 1 0 0 1 1.64-.768l3.331 2.776a1 1 0 0 1-.085 1.6L6 16' }),
        React.createElement("path", { fill: 'currentColor', d: 'M18.414 10.586 19.828 12l-1.414 1.414L17 12l1.414-1.414Zm-12.828 0L7 12l-1.414 1.414L4.172 12l1.414-1.414Z' })));
};
var ForwardRef$3L = forwardRef(SvgBluetoothConnected);

var SvgBluetoothOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 16, cy: 12, r: 1, fill: 'currentColor' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm4 8 10.886 7.257a1 1 0 0 1 .085 1.6l-3.33 2.776A1 1 0 0 1 10 18.865V5.135a1 1 0 0 1 1.64-.768l3.331 2.776a1 1 0 0 1-.085 1.6L4 16m14.775-7.28A4.98 4.98 0 0 1 20 12c0 1.28-.481 2.448-1.273 3.333' })));
};
var ForwardRef$3K = forwardRef(SvgBluetoothOff);

var SvgBluetooth = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M20 20 4 4' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.25 10.31v1.29l-5.666 3.777a.75.75 0 0 0 .832 1.248l4.834-3.222v5.463c0 1.484 1.73 2.294 2.87 1.345l3.834-3.195-1.065-1.065-3.729 3.107a.25.25 0 0 1-.41-.192v-6.463l.354-.237-1.854-1.854Zm7.274 5.153.012.012-.012-.012Zm-4.147-4.146-1.081-1.082 3.174-2.116a.25.25 0 0 0 .021-.4l-3.33-2.776a.25.25 0 0 0-.41.192V9.69l-1.5-1.5V5.135c0-1.484 1.73-2.294 2.87-1.344l3.33 2.776a1.75 1.75 0 0 1-.15 2.8l-2.924 1.95Z', clipRule: 'evenodd' })));
};
var ForwardRef$3J = forwardRef(SvgBluetooth);

var SvgCallHospital = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 17, cy: 7, r: 5, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M19 5v4m-4-4v4m4-2h-4' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 20.222V18.91a2 2 0 0 0-1.257-1.857l-1.479-.592a2 2 0 0 0-2.531.963l-.066.132s-2.223-.445-4-2.223c-1.778-1.777-2.223-4-2.223-4l.132-.066a2 2 0 0 0 .963-2.531l-.592-1.479A2 2 0 0 0 5.09 6H3.778C2.796 6 2 6.796 2 7.778 2 15.633 8.368 22 16.222 22c.982 0 1.778-.796 1.778-1.778Z' })));
};
var ForwardRef$3I = forwardRef(SvgCallHospital);

var SvgCameraOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M10.717 10.788a3 3 0 1 0 3.99 4.007' }),
        React.createElement("circle", { cx: 12, cy: 7, r: 1, fill: 'currentColor' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M21 21 3 3' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.812 5.873A5.752 5.752 0 0 0 2.25 11.5v4A5.75 5.75 0 0 0 8 21.25h8c1.7 0 3.227-.737 4.28-1.91l-1.063-1.063A4.24 4.24 0 0 1 16 19.75H8a4.25 4.25 0 0 1-4.25-4.25v-4A4.25 4.25 0 0 1 8 7.25h.126c.02 0 .04 0 .06-.002L6.813 5.873ZM20 16.939c.162-.45.25-.934.25-1.439v-4A4.25 4.25 0 0 0 16 7.25h-.126a.75.75 0 0 1-.726-.563 3.252 3.252 0 0 0-6.05-.65l-1.1-1.099a4.751 4.751 0 0 1 8.424.827A5.75 5.75 0 0 1 21.75 11.5v4c0 .928-.22 1.804-.61 2.58L20 16.94Z', clipRule: 'evenodd' })));
};
var ForwardRef$3H = forwardRef(SvgCameraOff);

var SvgCameraSwitch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M21 12a9 9 0 0 0-8.002-8.945C12.45 2.995 12 3.448 12 4v.5M3 12a9 9 0 0 0 8.002 8.945c.549.06.998-.393.998-.945v-.5' }),
        React.createElement("path", { fill: 'currentColor', d: 'M13.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M17 13.853v-2.118c0-1.462-1.244-2.647-2.778-2.647h-.07C13.906 8.175 13.036 7.5 12 7.5s-1.905.675-2.152 1.588h-.07C8.244 9.088 7 10.273 7 11.735v2.118C7 15.315 8.244 16.5 9.778 16.5h4.444c1.534 0 2.778-1.185 2.778-2.647Z' })));
};
var ForwardRef$3G = forwardRef(SvgCameraSwitch);

var SvgCamera = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M15 13.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' }),
        React.createElement("circle", { cx: 12, cy: 7, r: 1, fill: 'currentColor' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M21 15.5v-4a5 5 0 0 0-5-5h-.126a4.002 4.002 0 0 0-7.748 0H8a5 5 0 0 0-5 5v4a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5Z' })));
};
var ForwardRef$3F = forwardRef(SvgCamera);

var SvgCapsuleOpen = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M9.5 19.5c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5S8 17 8 17s1.5 1.395 1.5 2.5Zm8 0c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5S16 17 16 17s1.5 1.395 1.5 2.5Zm-4-6c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5S12 11 12 11s1.5 1.395 1.5 2.5ZM3 8.242A3 3 0 0 1 7.243 4l2.828 2.828-4.242 4.243L3 8.242Zm18 0A3 3 0 1 0 16.757 4L13.93 6.828l4.242 4.243L21 8.242Z' })));
};
var ForwardRef$3E = forwardRef(SvgCapsuleOpen);

var SvgCapsule = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M10.558 4.792a6.117 6.117 0 0 1 8.65 8.65l-5.766 5.767a6.117 6.117 0 1 1-8.65-8.65l5.766-5.767Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M16.95 7.05a3 3 0 0 1 0 4.243' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm7.757 7.757 8.486 8.486' })));
};
var ForwardRef$3D = forwardRef(SvgCapsule);

var SvgCardiogram = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 12h5l2-3 4 6 2-3h5m-9-6.476.765-.822c2.113-2.27 5.538-2.27 7.65 0 2.113 2.27 2.113 5.95 0 8.22l-6.885 7.397a2.06 2.06 0 0 1-3.06 0l-6.886-7.397c-2.112-2.27-2.112-5.95 0-8.22 2.113-2.27 5.538-2.27 7.651 0l.765.822Z' })));
};
var ForwardRef$3C = forwardRef(SvgCardiogram);

var SvgCast = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M4 21a2 2 0 0 0-2-2m6 2a6 6 0 0 0-6-6m10 6c0-5.523-4.477-10-10-10' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M2 7.429V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4h-2.6' })));
};
var ForwardRef$3B = forwardRef(SvgCast);

var SvgClipboardActivity = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M16 4h1a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h1m8 0a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2m8 0a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M7 13h2l2-2 2 4 2-2h2' })));
};
var ForwardRef$3A = forwardRef(SvgClipboardActivity);

var SvgClipboardAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M12.75 11a.75.75 0 0 0-1.5 0h1.5Zm-1.5 6a.75.75 0 0 0 1.5 0h-1.5ZM15 14.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5ZM11.25 11v6h1.5v-6h-1.5Zm9-3v10h1.5V8h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V8h-1.5v10h1.5ZM16 4.75h1v-1.5h-1v1.5Zm-9 0h1v-1.5H7v1.5Zm0 16.5A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Zm1.5-10A4.75 4.75 0 0 0 17 3.25v1.5A3.25 3.25 0 0 1 20.25 8h1.5Zm-18 0A3.25 3.25 0 0 1 7 4.75v-1.5A4.75 4.75 0 0 0 2.25 8h1.5ZM10 2.75h4v-1.5h-4v1.5Zm4 2.5h-4v1.5h4v-1.5Zm-4 0c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 6.75v-1.5ZM15.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 4h-1.5ZM14 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 7.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm5 12H9v1.5h6v-1.5Z' })));
};
var ForwardRef$3z = forwardRef(SvgClipboardAdd);

var SvgClipboardCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M9.469 13.414a.75.75 0 0 0-.938 1.172l.938-1.172Zm1.284 1.988.468-.585-.468.585Zm1.377-.122-.564-.494.564.494Zm3.434-2.786a.75.75 0 1 0-1.128-.988l1.128.988Zm-7.033 2.092 1.753 1.402.937-1.171-1.752-1.403-.938 1.172Zm4.163 1.188 2.87-3.28-1.128-.988-2.87 3.28 1.128.988Zm-2.41.214a1.75 1.75 0 0 0 2.41-.214l-1.128-.988a.25.25 0 0 1-.345.03l-.937 1.172ZM20.25 8v10h1.5V8h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V8h-1.5v10h1.5ZM16 4.75h1v-1.5h-1v1.5Zm-9 0h1v-1.5H7v1.5Zm0 16.5A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Zm1.5-10A4.75 4.75 0 0 0 17 3.25v1.5A3.25 3.25 0 0 1 20.25 8h1.5Zm-18 0A3.25 3.25 0 0 1 7 4.75v-1.5A4.75 4.75 0 0 0 2.25 8h1.5ZM10 2.75h4v-1.5h-4v1.5Zm4 2.5h-4v1.5h4v-1.5Zm-4 0c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 6.75v-1.5ZM15.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 4h-1.5ZM14 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 7.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z' })));
};
var ForwardRef$3y = forwardRef(SvgClipboardCheck);

var SvgClipboardDelete = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M14.652 12.409a.75.75 0 0 0-1.061-1.06l1.06 1.06Zm-5.304 3.182a.75.75 0 1 0 1.061 1.06l-1.06-1.06Zm4.243 1.06a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-3.182-5.303a.75.75 0 1 0-1.06 1.061l1.06-1.06Zm3.182 0-4.243 4.243 1.061 1.06 4.243-4.242-1.061-1.06ZM20.25 8v10h1.5V8h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V8h-1.5v10h1.5ZM16 4.75h1v-1.5h-1v1.5Zm-9 0h1v-1.5H7v1.5Zm0 16.5A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Zm1.5-10A4.75 4.75 0 0 0 17 3.25v1.5A3.25 3.25 0 0 1 20.25 8h1.5Zm-18 0A3.25 3.25 0 0 1 7 4.75v-1.5A4.75 4.75 0 0 0 2.25 8h1.5ZM10 2.75h4v-1.5h-4v1.5Zm4 2.5h-4v1.5h4v-1.5Zm-4 0c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 6.75v-1.5ZM15.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 4h-1.5ZM14 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 7.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm4.652 14.341-4.243-4.243-1.06 1.061 4.242 4.243 1.06-1.061Z' })));
};
var ForwardRef$3x = forwardRef(SvgClipboardDelete);

var SvgClipboardDownload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M10.53 14.47a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm.763 1.823-.53.53.53-.53Zm1.414 0-.53-.53.53.53Zm1.823-.763a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM12.75 11a.75.75 0 0 0-1.5 0h1.5Zm-1.5 5a.75.75 0 0 0 1.5 0h-1.5Zm-1.78-.47 1.293 1.293 1.06-1.06-1.293-1.293-1.06 1.06Zm3.767 1.293 1.293-1.293-1.06-1.06-1.293 1.293 1.06 1.06Zm-2.474 0a1.75 1.75 0 0 0 2.474 0l-1.06-1.06a.25.25 0 0 1-.354 0l-1.06 1.06ZM11.25 11v5h1.5v-5h-1.5Zm9-3v10h1.5V8h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V8h-1.5v10h1.5ZM16 4.75h1v-1.5h-1v1.5Zm-9 0h1v-1.5H7v1.5Zm0 16.5A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Zm1.5-10A4.75 4.75 0 0 0 17 3.25v1.5A3.25 3.25 0 0 1 20.25 8h1.5Zm-18 0A3.25 3.25 0 0 1 7 4.75v-1.5A4.75 4.75 0 0 0 2.25 8h1.5ZM10 2.75h4v-1.5h-4v1.5Zm4 2.5h-4v1.5h4v-1.5Zm-4 0c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 6.75v-1.5ZM15.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 4h-1.5ZM14 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 7.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z' })));
};
var ForwardRef$3w = forwardRef(SvgClipboardDownload);

var SvgClipboardFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm12 12.182-.53.53a.75.75 0 0 0 1.06 0l-.53-.53Zm.265-.265.53.53-.53-.53Zm-.53 0-.53.53.53-.53Zm-2.652 2.651.53-.53-.53.53Zm1.856 1.857-.53.53.53-.53Zm1.591-3.713.265-.265-1.06-1.06-.265.265 1.06 1.06Zm-1.326-.265.266.265 1.06-1.06-.265-.265-1.06 1.06ZM8.553 15.1l1.856 1.856 1.06-1.06-1.856-1.857-1.06 1.06Zm5.038 1.856 1.856-1.856-1.06-1.06-1.857 1.855 1.06 1.06Zm.795-4.508c.44.44.44 1.152 0 1.591l1.061 1.06a2.625 2.625 0 0 0 0-3.712l-1.06 1.061Zm1.061-1.06a2.625 2.625 0 0 0-3.712 0l1.06 1.06c.44-.44 1.152-.44 1.591 0l1.061-1.06Zm-5.834 1.06c.44-.44 1.152-.44 1.591 0l1.061-1.06a2.625 2.625 0 0 0-3.712 0l1.06 1.06Zm.796 4.508a2.25 2.25 0 0 0 3.182 0l-1.06-1.06a.75.75 0 0 1-1.061 0l-1.061 1.06Zm-1.856-5.568a2.625 2.625 0 0 0 0 3.712l1.06-1.06a1.125 1.125 0 0 1 0-1.592l-1.06-1.06ZM20.25 8v10h1.5V8h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V8h-1.5v10h1.5ZM16 4.75h1v-1.5h-1v1.5Zm-9 0h1v-1.5H7v1.5Zm0 16.5A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Zm1.5-10A4.75 4.75 0 0 0 17 3.25v1.5A3.25 3.25 0 0 1 20.25 8h1.5Zm-18 0A3.25 3.25 0 0 1 7 4.75v-1.5A4.75 4.75 0 0 0 2.25 8h1.5ZM10 2.75h4v-1.5h-4v1.5Zm4 2.5h-4v1.5h4v-1.5Zm-4 0c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 6.75v-1.5ZM15.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 4h-1.5ZM14 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 7.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z' })));
};
var ForwardRef$3v = forwardRef(SvgClipboardFavourite);

var SvgClipboardList = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M12 9.25a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-4 2.5a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-4 2.5a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5ZM20.25 8v10h1.5V8h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V8h-1.5v10h1.5ZM16 4.75h1v-1.5h-1v1.5Zm-9 0h1v-1.5H7v1.5Zm0 16.5A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Zm1.5-10A4.75 4.75 0 0 0 17 3.25v1.5A3.25 3.25 0 0 1 20.25 8h1.5Zm-18 0A3.25 3.25 0 0 1 7 4.75v-1.5A4.75 4.75 0 0 0 2.25 8h1.5ZM10 2.75h4v-1.5h-4v1.5Zm4 2.5h-4v1.5h4v-1.5Zm-4 0c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 6.75v-1.5ZM15.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 4h-1.5ZM14 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 7.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm2 9.5h4v-1.5h-4v1.5Zm0 4h4v-1.5h-4v1.5Zm0 4h4v-1.5h-4v1.5ZM9.5 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' })));
};
var ForwardRef$3u = forwardRef(SvgClipboardList);

var SvgClipboardMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15 14.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm6 0H9v1.5h6v-1.5ZM20.25 8v10h1.5V8h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V8h-1.5v10h1.5ZM16 4.75h1v-1.5h-1v1.5Zm-9 0h1v-1.5H7v1.5Zm0 16.5A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Zm1.5-10A4.75 4.75 0 0 0 17 3.25v1.5A3.25 3.25 0 0 1 20.25 8h1.5Zm-18 0A3.25 3.25 0 0 1 7 4.75v-1.5A4.75 4.75 0 0 0 2.25 8h1.5ZM10 2.75h4v-1.5h-4v1.5Zm4 2.5h-4v1.5h4v-1.5Zm-4 0c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 6.75v-1.5ZM15.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 4h-1.5ZM14 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 7.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z' })));
};
var ForwardRef$3t = forwardRef(SvgClipboardMinus);

var SvgClipboardSearch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15.03 14.97a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-.06 2.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM14.25 13A2.25 2.25 0 0 1 12 15.25v1.5A3.75 3.75 0 0 0 15.75 13h-1.5ZM12 15.25A2.25 2.25 0 0 1 9.75 13h-1.5A3.75 3.75 0 0 0 12 16.75v-1.5ZM9.75 13A2.25 2.25 0 0 1 12 10.75v-1.5A3.75 3.75 0 0 0 8.25 13h1.5ZM12 10.75A2.25 2.25 0 0 1 14.25 13h1.5A3.75 3.75 0 0 0 12 9.25v1.5Zm1.97 5.28 1 1 1.06-1.06-1-1-1.06 1.06ZM20.25 8v10h1.5V8h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V8h-1.5v10h1.5ZM16 4.75h1v-1.5h-1v1.5Zm-9 0h1v-1.5H7v1.5Zm0 16.5A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Zm1.5-10A4.75 4.75 0 0 0 17 3.25v1.5A3.25 3.25 0 0 1 20.25 8h1.5Zm-18 0A3.25 3.25 0 0 1 7 4.75v-1.5A4.75 4.75 0 0 0 2.25 8h1.5ZM10 2.75h4v-1.5h-4v1.5Zm4 2.5h-4v1.5h4v-1.5Zm-4 0c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 6.75v-1.5ZM15.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 4h-1.5ZM14 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 7.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z' })));
};
var ForwardRef$3s = forwardRef(SvgClipboardSearch);

var SvgClipboardUpload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M9.47 12.056a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm1.823-.763-.53-.53.53.53Zm1.414 0-.53.53.53-.53Zm.763 1.823a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-2.22 3.47a.75.75 0 0 0 1.5 0h-1.5Zm1.5-5a.75.75 0 0 0-1.5 0h1.5Zm-2.22 1.53 1.293-1.293-1.06-1.06-1.293 1.293 1.06 1.06Zm1.647-1.293 1.293 1.293 1.06-1.06-1.293-1.293-1.06 1.06Zm-.354 0a.25.25 0 0 1 .354 0l1.06-1.06a1.75 1.75 0 0 0-2.474 0l1.06 1.06Zm.927 4.763v-5h-1.5v5h1.5ZM20.25 8v10h1.5V8h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V8h-1.5v10h1.5ZM16 4.75h1v-1.5h-1v1.5Zm-9 0h1v-1.5H7v1.5Zm0 16.5A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Zm1.5-10A4.75 4.75 0 0 0 17 3.25v1.5A3.25 3.25 0 0 1 20.25 8h1.5Zm-18 0A3.25 3.25 0 0 1 7 4.75v-1.5A4.75 4.75 0 0 0 2.25 8h1.5ZM10 2.75h4v-1.5h-4v1.5Zm4 2.5h-4v1.5h4v-1.5Zm-4 0c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 6.75v-1.5ZM15.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 4h-1.5ZM14 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 7.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z' })));
};
var ForwardRef$3r = forwardRef(SvgClipboardUpload);

var SvgClipboard = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M8 9.25a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8 2.5a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8 2.5a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5ZM20.25 8v10h1.5V8h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V8h-1.5v10h1.5ZM16 4.75h1v-1.5h-1v1.5Zm-9 0h1v-1.5H7v1.5Zm0 16.5A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Zm1.5-10A4.75 4.75 0 0 0 17 3.25v1.5A3.25 3.25 0 0 1 20.25 8h1.5Zm-18 0A3.25 3.25 0 0 1 7 4.75v-1.5A4.75 4.75 0 0 0 2.25 8h1.5ZM8 10.75h8v-1.5H8v1.5Zm0 4h8v-1.5H8v1.5Zm0 4h4v-1.5H8v1.5Zm2-16h4v-1.5h-4v1.5Zm4 2.5h-4v1.5h4v-1.5Zm-4 0c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 6.75v-1.5ZM15.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 4h-1.5ZM14 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 7.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z' })));
};
var ForwardRef$3q = forwardRef(SvgClipboard);

var SvgColorInversion = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M3 13.111C3 8.201 8.625 2 12 2s9 6.202 9 11.111C21 18.021 16.97 22 12 22s-9-3.98-9-8.889Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 2v20' })));
};
var ForwardRef$3p = forwardRef(SvgColorInversion);

var SvgComputer = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 20, height: 16, x: 2, y: 2, stroke: 'currentColor', strokeWidth: 1.5, rx: 3 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M9 22h3m3 0h-3m0 0v-4' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M11 15h2' })));
};
var ForwardRef$3o = forwardRef(SvgComputer);

var SvgDarkMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 2v20' })));
};
var ForwardRef$3n = forwardRef(SvgDarkMode);

var SvgDevices = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 8, height: 13, x: 14, y: 7, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M20 4H6a2 2 0 0 0-2 2v11h7m0 0H3.5A1.5 1.5 0 0 0 2 18.5v0A1.5 1.5 0 0 0 3.5 20H11' })));
};
var ForwardRef$3m = forwardRef(SvgDevices);

var SvgDigitalHealth = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M14 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm5.852 15.246 3.719 4.599c1.245 1.54 3.613 1.54 4.858 0l3.72-4.598A3.82 3.82 0 0 0 19 12.845v-.173C19 10.644 17.338 9 15.288 9a3.73 3.73 0 0 0-2.625 1.076L12 10.73l-.663-.655A3.733 3.733 0 0 0 8.712 9C6.662 9 5 10.644 5 12.672v.173c0 .873.3 1.72.852 2.401Z' })));
};
var ForwardRef$3l = forwardRef(SvgDigitalHealth);

var SvgDirectionDownDoubleCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm8 9 2.8 2.1a2 2 0 0 0 2.4 0L16 9m-8 5 2.8 2.1a2 2 0 0 0 2.4 0L16 14' })));
};
var ForwardRef$3k = forwardRef(SvgDirectionDownDoubleCircle);

var SvgDirectionDownDoubleRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm8 8 2.8 2.1a2 2 0 0 0 2.4 0L16 8m-8 5 2.8 2.1a2 2 0 0 0 2.4 0L16 13' })));
};
var ForwardRef$3j = forwardRef(SvgDirectionDownDoubleRectangle);

var SvgDirectionDownDouble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm7 7 5 4 5-4M7 13l5 4 5-4' })));
};
var ForwardRef$3i = forwardRef(SvgDirectionDownDouble);

var SvgDirectionDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm7 10 5 4 5-4' })));
};
var ForwardRef$3h = forwardRef(SvgDirectionDown);

var SvgDirectionLeftDoubleCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm15 8-2.1 2.8a2 2 0 0 0 0 2.4L15 16m-5-8-2.1 2.8a2 2 0 0 0 0 2.4L10 16' })));
};
var ForwardRef$3g = forwardRef(SvgDirectionLeftDoubleCircle);

var SvgDirectionLeftDoubleRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm16 8-2.1 2.8a2 2 0 0 0 0 2.4L16 16m-5-8-2.1 2.8a2 2 0 0 0 0 2.4L11 16' })));
};
var ForwardRef$3f = forwardRef(SvgDirectionLeftDoubleRectangle);

var SvgDirectionLeftDouble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm17 7-4 5 4 5M11 7l-4 5 4 5' })));
};
var ForwardRef$3e = forwardRef(SvgDirectionLeftDouble);

var SvgDirectionLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm14 7-4 5 4 5' })));
};
var ForwardRef$3d = forwardRef(SvgDirectionLeft);

var SvgDirectionRightDoubleCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm9 16 2.1-2.8a2 2 0 0 0 0-2.4L9 8m5 8 2.1-2.8a2 2 0 0 0 0-2.4L14 8' })));
};
var ForwardRef$3c = forwardRef(SvgDirectionRightDoubleCircle);

var SvgDirectionRightDoubleRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm9 16 2.1-2.8a2 2 0 0 0 0-2.4L9 8m5 8 2.1-2.8a2 2 0 0 0 0-2.4L14 8' })));
};
var ForwardRef$3b = forwardRef(SvgDirectionRightDoubleRectangle);

var SvgDirectionRightDouble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm7 7 4 5-4 5m6-10 4 5-4 5' })));
};
var ForwardRef$3a = forwardRef(SvgDirectionRightDouble);

var SvgDirectionRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm10 7 4 5-4 5' })));
};
var ForwardRef$39 = forwardRef(SvgDirectionRight);

var SvgDirectionUpDoubleCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm16 15-2.8-2.1a2 2 0 0 0-2.4 0L8 15m8-5-2.8-2.1a2 2 0 0 0-2.4 0L8 10' })));
};
var ForwardRef$38 = forwardRef(SvgDirectionUpDoubleCircle);

var SvgDirectionUpDoubleRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm16 15-2.8-2.1a2 2 0 0 0-2.4 0L8 15m8-5-2.8-2.1a2 2 0 0 0-2.4 0L8 10' })));
};
var ForwardRef$37 = forwardRef(SvgDirectionUpDoubleRectangle);

var SvgDirectionUpDouble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm7 17 5-4 5 4M7 11l5-4 5 4' })));
};
var ForwardRef$36 = forwardRef(SvgDirectionUpDouble);

var SvgDirectionUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm17 14-5-4-5 4' })));
};
var ForwardRef$35 = forwardRef(SvgDirectionUp);

var SvgDna = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M6.341 2C7.165 4.33 9.387 6 12 6a6 6 0 0 1 0 12 6.002 6.002 0 0 0-5.659 4' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M18 2a6.003 6.003 0 0 1-5.659 4 6 6 0 1 0 0 12A6.003 6.003 0 0 1 18 22M7 10h10M7 14h10' })));
};
var ForwardRef$34 = forwardRef(SvgDna);

var SvgDoNotDisturb = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M7 12h10' })));
};
var ForwardRef$33 = forwardRef(SvgDoNotDisturb);

var SvgDownloadCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm8 11 4 4m0 0 4-4m-4 4V1' }),
        React.createElement("path", { fill: 'currentColor', d: 'M18.83 7.53a.75.75 0 0 0-1.17.94l1.17-.94Zm-12.49.94a.75.75 0 1 0-1.17-.94l1.17.94ZM19.25 13A7.25 7.25 0 0 1 12 20.25v1.5A8.75 8.75 0 0 0 20.75 13h-1.5ZM12 20.25A7.25 7.25 0 0 1 4.75 13h-1.5A8.75 8.75 0 0 0 12 21.75v-1.5Zm5.66-11.78A7.216 7.216 0 0 1 19.25 13h1.5a8.716 8.716 0 0 0-1.92-5.47l-1.17.94ZM4.75 13c0-1.715.595-3.29 1.59-4.53l-1.17-.94A8.716 8.716 0 0 0 3.25 13h1.5Z' })));
};
var ForwardRef$32 = forwardRef(SvgDownloadCircle);

var SvgDownloadRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm9 12 3 3m0 0 3-3m-3 3V3M7.5 9H7a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-4a4 4 0 0 0-4-4h-.5' })));
};
var ForwardRef$31 = forwardRef(SvgDownloadRectangle);

var SvgDribbble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M16.935 3.3A9.954 9.954 0 0 0 12 2a9.96 9.96 0 0 0-6.455 2.362m11.39-1.061c-4.79 4.63-7.808 11.083-7.931 18.242m7.931-18.242a10.008 10.008 0 0 1 4.952 7.19M5.545 4.363C8.24 8.366 12.812 11 18 11a15.02 15.02 0 0 0 3.887-.508M5.545 4.362A9.978 9.978 0 0 0 2 12c0 4.48 2.945 8.27 7.004 9.543M2 12.853A14.977 14.977 0 0 1 7 12c5.195 0 9.773 2.641 12.465 6.654m-10.461 2.89A9.994 9.994 0 0 0 12 22a9.975 9.975 0 0 0 7.465-3.346m0 0A9.962 9.962 0 0 0 22 12c0-.513-.039-1.017-.113-1.508' })));
};
var ForwardRef$30 = forwardRef(SvgDribbble);

var SvgDrive = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm22 16-3 5H5m17-5L15 3H9m13 13h-5.778M5 21l-3-5L9 3M5 21l2.778-5M9 3l3 5.4m4.222 7.6H7.778m8.444 0L12 8.4M7.778 16 12 8.4' })));
};
var ForwardRef$2$ = forwardRef(SvgDrive);

var SvgExchangeRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M7.25 12a.75.75 0 0 0 1.5 0h-1.5ZM16 9v.75a.75.75 0 0 0 .53-1.28L16 9Zm-1.47-2.53a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM8.75 12v-1h-1.5v1h1.5ZM10 9.75h6v-1.5h-6v1.5Zm6.53-1.28-2-2-1.06 1.06 2 2 1.06-1.06ZM8.75 11c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 7.25 11h1.5Zm8 1a.75.75 0 0 0-1.5 0h1.5ZM8 15v-.75a.75.75 0 0 0-.53 1.28L8 15Zm1.47 2.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM15.25 12v1h1.5v-1h-1.5ZM14 14.25H8v1.5h6v-1.5Zm-6.53 1.28 2 2 1.06-1.06-2-2-1.06 1.06ZM15.25 13c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 13h-1.5Z' })));
};
var ForwardRef$2_ = forwardRef(SvgExchangeRectangle);

var SvgExchange = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M3.25 13a.75.75 0 0 0 1.5 0h-1.5ZM20 7v.75a.75.75 0 0 0 .53-1.28L20 7Zm-2.47-3.53a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM4.75 13v-1h-1.5v1h1.5ZM9 7.75h11v-1.5H9v1.5Zm11.53-1.28-3-3-1.06 1.06 3 3 1.06-1.06ZM4.75 12A4.25 4.25 0 0 1 9 7.75v-1.5A5.75 5.75 0 0 0 3.25 12h1.5Zm16-1a.75.75 0 0 0-1.5 0h1.5ZM4 17v-.75a.75.75 0 0 0-.53 1.28L4 17Zm2.47 3.53a.75.75 0 0 0 1.06-1.06l-1.06 1.06ZM19.25 11v1h1.5v-1h-1.5ZM15 16.25H4v1.5h11v-1.5ZM3.47 17.53l3 3 1.06-1.06-3-3-1.06 1.06ZM19.25 12A4.25 4.25 0 0 1 15 16.25v1.5A5.75 5.75 0 0 0 20.75 12h-1.5Z' })));
};
var ForwardRef$2Z = forwardRef(SvgExchange);

var SvgEyeDropper = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm14.486 5.536 2.12-2.122a2 2 0 0 1 2.83 0v0a2 2 0 0 1 0 2.829l-2.122 2.121' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm14.485 5.536-5.9 5.9a4 4 0 0 0-1.17 2.828v1.171h1.17a4 4 0 0 0 2.83-1.171l5.899-5.9' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm13.071 4.121 5.657 5.657' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M7 20.5c0 1.105-.672 1.5-1.5 1.5S4 21.605 4 20.5 5.5 18 5.5 18 7 19.395 7 20.5Z' })));
};
var ForwardRef$2Y = forwardRef(SvgEyeDropper);

var SvgEye = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M19.102 10.086a2.487 2.487 0 0 1 0 3.828C17.45 15.324 14.883 17 12 17s-5.45-1.675-7.102-3.086a2.487 2.487 0 0 1 0-3.828C6.55 8.676 9.117 7 12 7s5.45 1.675 7.102 3.086Z' }),
        React.createElement("circle", { cx: 12, cy: 12, r: 2, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 2v2m0 16v2m9-17-1.5 1.5M3 5l1.5 1.5M21 19l-1.5-1.5M3 19l1.5-1.5' })));
};
var ForwardRef$2X = forwardRef(SvgEye);

var SvgFacebookSquare = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h4.5v-7H7v-3h3.5v-2a4 4 0 0 1 4-4H17v3h-2.5a1 1 0 0 0-1 1v2H17v3h-3.5v7H18a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z' })));
};
var ForwardRef$2W = forwardRef(SvgFacebookSquare);

var SvgFacebook = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 3h-3a5 5 0 0 0-5 5v2H6v4h4v7h4v-7h4v-4h-4V8a1 1 0 0 1 1-1h3V3Z' })));
};
var ForwardRef$2V = forwardRef(SvgFacebook);

var SvgFigma = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 12, height: 6, x: 6, y: 3, stroke: 'currentColor', strokeWidth: 1.5, rx: 3 }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M6 12a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3Zm0 6a3 3 0 0 1 3-3h3v3a3 3 0 1 1-6 0Z' }),
        React.createElement("circle", { cx: 15, cy: 12, r: 3, stroke: 'currentColor', strokeWidth: 1.5 })));
};
var ForwardRef$2U = forwardRef(SvgFigma);

var SvgFilterBigCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 8h3m-3 8h6m9 0h3m-6-8h6' }),
        React.createElement("circle", { cx: 15, cy: 16, r: 3, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("circle", { cx: 9, cy: 8, r: 3, stroke: 'currentColor', strokeWidth: 1.5 })));
};
var ForwardRef$2T = forwardRef(SvgFilterBigCircle);

var SvgFilterSmallCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 6h7m-7 6h9m7 0h2m-7-6h7m-8 12h7M3 18h3' }),
        React.createElement("circle", { cx: 8, cy: 18, r: 2, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("circle", { cx: 17, cy: 12, r: 2, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("circle", { cx: 12, cy: 6, r: 2, stroke: 'currentColor', strokeWidth: 1.5 })));
};
var ForwardRef$2S = forwardRef(SvgFilterSmallCircle);

var SvgFingerPrint = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 10v4m-5.5 7 .243-.243A6 6 0 0 0 8.5 16.515V10A3.5 3.5 0 0 1 12 6.5v0a3.5 3.5 0 0 1 3.5 3.5v6.515a6 6 0 0 1-1.757 4.242L13.5 21' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M5 17v-7a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v7' })));
};
var ForwardRef$2R = forwardRef(SvgFingerPrint);

var SvgFiverr = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M16 3h-4a5 5 0 0 0-5 5v2H4v4h3v7h4v-7h5v7h4V10h-9V8a1 1 0 0 1 1-1h4V3Z' })));
};
var ForwardRef$2Q = forwardRef(SvgFiverr);

var SvgFlashAuto = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 13.5 12 2v8.5h5L8 22v-8.5H3Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm16 8 2.5-6L21 8m-4-2h3' })));
};
var ForwardRef$2P = forwardRef(SvgFlashAuto);

var SvgFlashLight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M17.143 2H6.857A.857.857 0 0 0 6 2.857a5.144 5.144 0 0 0 3 4.677V19a3 3 0 1 0 6 0V7.534c1.77-.813 3-2.601 3-4.677A.857.857 0 0 0 17.143 2ZM12 9v2' })));
};
var ForwardRef$2O = forwardRef(SvgFlashLight);

var SvgFlashOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm4 4 16 16M10.488 6.488 14 2v8.5h5l-1.976 2.524M8.732 8.732 5 13.5h5V22l5.268-6.732' })));
};
var ForwardRef$2N = forwardRef(SvgFlashOff);

var SvgFlash = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M5 13.5 14 2v8.5h5L10 22v-8.5H5Z' })));
};
var ForwardRef$2M = forwardRef(SvgFlash);

var SvgGiveBlood = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M14 8.056c0-1.984 1.685-3.943 2.868-5.075a1.621 1.621 0 0 1 2.264 0C20.315 4.113 22 6.072 22 8.056 22 10 20.485 12 18 12c-2.485 0-4-2-4-3.944Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M2 10h2l6.262 2.74a1.911 1.911 0 0 1 .99 2.503v0a1.911 1.911 0 0 1-2.509 1.004L7 15.5' }),
        React.createElement("path", { fill: 'currentColor', d: 'M2.335 18.33a.75.75 0 1 0-.67 1.34l.67-1.34Zm9-3-.67-.336-.671 1.341.67.336.671-1.342Zm2.398 2.037-.335.67.335-.67Zm2.683 1.383H18v-1.5h-1.584v1.5ZM18 21.25H9.889v1.5H18v-1.5Zm-11.354-.765-4.31-2.156-.671 1.342 4.31 2.155.671-1.341Zm7.423-3.79-2.734-1.366-.67 1.342 2.733 1.366.67-1.341Zm-4.18 4.555a7.25 7.25 0 0 1-3.243-.765l-.67 1.341a8.75 8.75 0 0 0 3.913.924v-1.5ZM19.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 20h-1.5ZM18 18.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 17.25v1.5Zm-1.584-1.5a5.25 5.25 0 0 1-2.348-.554l-.67 1.341a6.75 6.75 0 0 0 3.018.713v-1.5Z' })));
};
var ForwardRef$2L = forwardRef(SvgGiveBlood);

var SvgGivePill = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 6, height: 12, x: 16, y: 2, stroke: 'currentColor', strokeWidth: 1.5, rx: 3 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M16 8h6M2 10h2l6.262 2.74a1.911 1.911 0 0 1 .99 2.503v0a1.911 1.911 0 0 1-2.509 1.004L7 15.5' }),
        React.createElement("path", { fill: 'currentColor', d: 'M2.335 18.33a.75.75 0 1 0-.67 1.34l.67-1.34Zm9-3-.67-.336-.671 1.341.67.336.671-1.342Zm2.398 2.037-.335.67.335-.67Zm2.683 1.383H18v-1.5h-1.584v1.5ZM18 21.25H9.889v1.5H18v-1.5Zm-11.354-.765-4.31-2.156-.671 1.342 4.31 2.155.671-1.341Zm7.423-3.79-2.734-1.366-.67 1.342 2.733 1.366.67-1.341Zm-4.18 4.555a7.25 7.25 0 0 1-3.243-.765l-.67 1.341a8.75 8.75 0 0 0 3.913.924v-1.5ZM19.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 20h-1.5ZM18 18.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 17.25v1.5Zm-1.584-1.5a5.25 5.25 0 0 1-2.348-.554l-.67 1.341a6.75 6.75 0 0 0 3.018.713v-1.5Z' })));
};
var ForwardRef$2K = forwardRef(SvgGivePill);

var SvgGmail = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 20, height: 18, x: 2, y: 3, stroke: 'currentColor', strokeWidth: 1.5, rx: 4 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm2 7 7.501 6.001a4 4 0 0 0 4.998 0L22 7' })));
};
var ForwardRef$2J = forwardRef(SvgGmail);

var SvgGooglePlus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 12h4m-2 2v-4M8.5 12H15a6.5 6.5 0 1 1-1.904-4.596' })));
};
var ForwardRef$2I = forwardRef(SvgGooglePlus);

var SvgGoogle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 13.5v-3h9.888c.074.49.112.99.112 1.5 0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2a9.969 9.969 0 0 1 7.071 2.929L16.95 7.05a7 7 0 1 0 1.89 6.45H12Z' })));
};
var ForwardRef$2H = forwardRef(SvgGoogle);

var SvgGpsOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 5V3m0 18v-2m7-7h2M3 12h2M3 3l18 18M9.47 5.47a7 7 0 0 1 9.058 9.058M7.051 7.051a7 7 0 1 0 9.9 9.9' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M14.121 14.121a3 3 0 1 1-4.243-4.243' })));
};
var ForwardRef$2G = forwardRef(SvgGpsOff);

var SvgGps = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 8, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("circle", { cx: 12, cy: 12, r: 3, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 4V2m0 20v-2m8-8h2M2 12h2' })));
};
var ForwardRef$2F = forwardRef(SvgGps);

var SvgGraphicEq = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 4v16M8 7v10m8-10v10M4 10v4m16-4v4' })));
};
var ForwardRef$2E = forwardRef(SvgGraphicEq);

var SvgHangout = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M12 1c-5.248 0-9.5 4.308-9.5 9.625 0 4.974 4.403 9.056 9.3 9.164.11.003.2.092.2.203v2.686c0 .148.156.244.288.177 5.583-2.854 9.212-7.453 9.212-12.23C21.5 5.308 17.248 1 12 1Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M17.238 11.808c0 1.096-.984 2.04-1.821 2.175-.11.018-.2-.072-.2-.183v-1.908a.2.2 0 0 0-.2-.2h-1.579a.2.2 0 0 1-.2-.2V8.2c0-.11.09-.2.2-.2h3.6a.2.2 0 0 1 .2.2v3.608Zm-6.477 0c0 1.096-.984 2.04-1.821 2.175-.11.018-.2-.072-.2-.183v-1.908a.2.2 0 0 0-.2-.2H6.962a.2.2 0 0 1-.2-.2V8.2c0-.11.09-.2.2-.2h3.6c.11 0 .2.09.2.2v3.608Z' })));
};
var ForwardRef$2D = forwardRef(SvgHangout);

var SvgHealthCare = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M16.459 2.946 16 3.402l-.459-.456a3.258 3.258 0 0 0-4.59 0 3.217 3.217 0 0 0 0 4.566l4.13 4.11c.508.504 1.33.504 1.837 0l4.131-4.11a3.217 3.217 0 0 0 0-4.566 3.258 3.258 0 0 0-4.59 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M2 10h2l6.262 2.74a1.911 1.911 0 0 1 .99 2.503v0a1.911 1.911 0 0 1-2.509 1.004L7 15.5' }),
        React.createElement("path", { fill: 'currentColor', d: 'M2.335 18.33a.75.75 0 1 0-.67 1.34l.67-1.34Zm9-3-.67-.336-.671 1.341.67.336.671-1.342Zm2.398 2.037-.335.67.335-.67Zm2.683 1.383H18v-1.5h-1.584v1.5ZM18 21.25H9.889v1.5H18v-1.5Zm-11.354-.765-4.31-2.156-.671 1.342 4.31 2.155.671-1.341Zm7.423-3.79-2.734-1.366-.67 1.342 2.733 1.366.67-1.341Zm-4.18 4.555a7.25 7.25 0 0 1-3.243-.765l-.67 1.341a8.75 8.75 0 0 0 3.913.924v-1.5ZM19.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 20h-1.5ZM18 18.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 17.25v1.5Zm-1.584-1.5a5.25 5.25 0 0 1-2.348-.554l-.67 1.341a6.75 6.75 0 0 0 3.018.713v-1.5Z' })));
};
var ForwardRef$2C = forwardRef(SvgHealthCare);

var SvgHeart = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12.765 4.702 12 5.524l-.765-.822c-2.113-2.27-5.538-2.27-7.65 0-2.113 2.27-2.113 5.95 0 8.22l6.885 7.397a2.06 2.06 0 0 0 3.06 0l6.886-7.397c2.112-2.27 2.112-5.95 0-8.22-2.113-2.27-5.538-2.27-7.651 0Z' })));
};
var ForwardRef$2B = forwardRef(SvgHeart);

var SvgHoney = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 3.5 16.5 6v5L12 13.5 7.5 11V6L12 3.5Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm7.5 11 4.5 2.5v5L7.5 21 3 18.5v-5L7.5 11Zm9 0 4.5 2.5v5L16.5 21 12 18.5v-5l4.5-2.5Z' })));
};
var ForwardRef$2A = forwardRef(SvgHoney);

var SvgHospitalBed = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M22 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M19 4.5v4m-3-4v4m3-2h-3M2 9v9m0 4v-4m0 0h20v4m-2-8H2v4h20v-2a2 2 0 0 0-2-2ZM5 12v2h5v-2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1Z' })));
};
var ForwardRef$2z = forwardRef(SvgHospitalBed);

var SvgHospitalPanel = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M16 8v8m0-4H8m0-4v8' })));
};
var ForwardRef$2y = forwardRef(SvgHospitalPanel);

var SvgHospital = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M4 22V6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v16M9 22v-5a3 3 0 1 1 6 0v5M12 5v6m3-3H9M2 22h20' })));
};
var ForwardRef$2x = forwardRef(SvgHospital);

var SvgHotspotOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M22 22 2 2m12 12a2 2 0 1 1-2-2m0-4a6 6 0 0 1 6 6M7.757 18.243A5.98 5.98 0 0 1 6 14c0-2.17 1.151-4.07 2.876-5.124M4.93 21.071A9.969 9.969 0 0 1 2 14a9.985 9.985 0 0 1 4-8m15.405 11.405A9.984 9.984 0 0 0 22 14c0-5.523-4.477-10-10-10-1.196 0-2.342.21-3.405.595' })));
};
var ForwardRef$2w = forwardRef(SvgHotspotOff);

var SvgHotspot = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 14, r: 2, stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M19.071 21.071A9.97 9.97 0 0 0 22 14c0-5.523-4.477-10-10-10S2 8.477 2 14a9.969 9.969 0 0 0 2.929 7.071m11.314-2.828a6 6 0 1 0-8.485 0' })));
};
var ForwardRef$2v = forwardRef(SvgHotspot);

var SvgInCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm12 8 4 4m0 0-4 4m4-4H2' }),
        React.createElement("path", { fill: 'currentColor', d: 'M8.53 18.83a.75.75 0 0 1 .94-1.17l-.94 1.17Zm.94-12.49a.75.75 0 1 1-.94-1.17l.94 1.17ZM14 19.25A7.25 7.25 0 0 0 21.25 12h1.5A8.75 8.75 0 0 1 14 20.75v-1.5ZM21.25 12A7.25 7.25 0 0 0 14 4.75v-1.5A8.75 8.75 0 0 1 22.75 12h-1.5ZM9.47 17.66A7.216 7.216 0 0 0 14 19.25v1.5a8.717 8.717 0 0 1-5.47-1.92l.94-1.17ZM14 4.75c-1.715 0-3.29.595-4.53 1.59l-.94-1.17A8.716 8.716 0 0 1 14 3.25v1.5Z' })));
};
var ForwardRef$2u = forwardRef(SvgInCircle);

var SvgInRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm12 9-3 3m0 0 3 3m-3-3h12m-6-4.5V7a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-.5' })));
};
var ForwardRef$2t = forwardRef(SvgInRectangle);

var SvgInjection = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M13.485 6.535 8.3 11.721a2 2 0 0 0-.566 1.131l-.236 1.65a2 2 0 0 0 2.263 2.263l1.65-.236a2 2 0 0 0 1.131-.566l5.186-5.185a2 2 0 0 0 0-2.828l-1.414-1.415a2 2 0 0 0-2.829 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm19.85 4.414-2.83 2.828M18.435 3l2.829 2.828m-12.021 4.95 7.07 1.414m-8.484 4.243L3 21' })));
};
var ForwardRef$2s = forwardRef(SvgInjection);

var SvgInstagram = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 20, height: 20, x: 2, y: 2, stroke: 'currentColor', strokeWidth: 1.5, rx: 4 }),
        React.createElement("circle", { cx: 18, cy: 6, r: 1, fill: 'currentColor' }),
        React.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: 'currentColor', strokeWidth: 1.5 })));
};
var ForwardRef$2r = forwardRef(SvgInstagram);

var SvgLaptop = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10H4V6ZM2 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1 3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z' })));
};
var ForwardRef$2q = forwardRef(SvgLaptop);

var SvgLightMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 2v2m0 16v2m8.66-15-1.732 1M5.072 16 3.34 17m0-10 1.732 1m13.856 8 1.732 1' })));
};
var ForwardRef$2p = forwardRef(SvgLightMode);

var SvgLinkedln = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 4, cy: 4, r: 2, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M2 8.5h4V22H2V8.5ZM9 22h4v-7a2 2 0 1 1 4 0v7h4v-7a6 6 0 0 0-8-5.659V8.5H9V22Zm0 0v-7' })));
};
var ForwardRef$2o = forwardRef(SvgLinkedln);

var SvgLocationHospital = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M20 9.889c0 4.649-4.63 9.233-6.845 11.16-.67.584-1.64.584-2.31 0C8.629 19.123 4 14.539 4 9.89 4 6 7.03 2 12 2c4.97 0 8 4 8 7.889Z' }),
        React.createElement("circle", { cx: 12, cy: 10, r: 5, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M14 8v4m-4-4v4m4-2h-4' })));
};
var ForwardRef$2n = forwardRef(SvgLocationHospital);

var SvgLocation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 11, r: 3, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M21 10.889C21 15.799 15.375 22 12 22s-9-6.202-9-11.111C3 5.979 7.03 2 12 2s9 3.98 9 8.889Z' })));
};
var ForwardRef$2m = forwardRef(SvgLocation);

var SvgLock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 16, height: 14, x: 4, y: 7, stroke: 'currentColor', strokeWidth: 1.5, rx: 4 }),
        React.createElement("circle", { cx: 12, cy: 14, r: 2, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M16 7a4 4 0 0 0-8 0' })));
};
var ForwardRef$2l = forwardRef(SvgLock);

var SvgMask = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 11V8a2 2 0 1 1 4 0v4a4 4 0 0 1-4 4M6 11V8a2 2 0 1 0-4 0v4a4 4 0 0 0 4 4m4.211-8.106L6 10v5.127a4 4 0 0 0 1.44 3.072l.719.6a6 6 0 0 0 7.682 0l.72-.6A4 4 0 0 0 18 15.126V10l-4.211-2.106a4 4 0 0 0-3.578 0Z' })));
};
var ForwardRef$2k = forwardRef(SvgMask);

var SvgMaximizeCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M16 3h5m0 0v5m0-5L10 14' }),
        React.createElement("path", { fill: 'currentColor', d: 'M19.75 13a.75.75 0 0 0-1.5 0h1.5ZM11 5.75a.75.75 0 0 0 0-1.5v1.5ZM18.25 13A7.25 7.25 0 0 1 11 20.25v1.5A8.75 8.75 0 0 0 19.75 13h-1.5ZM11 20.25A7.25 7.25 0 0 1 3.75 13h-1.5A8.75 8.75 0 0 0 11 21.75v-1.5ZM3.75 13A7.25 7.25 0 0 1 11 5.75v-1.5A8.75 8.75 0 0 0 2.25 13h1.5Z' })));
};
var ForwardRef$2j = forwardRef(SvgMaximizeCircle);

var SvgMaximizeRectangleDoted = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M8 11.25H6v1.5h2v-1.5ZM1.25 16v2h1.5v-2h-1.5ZM6 22.75h2v-1.5H6v1.5ZM12.75 18v-2h-1.5v2h1.5ZM8 22.75A4.75 4.75 0 0 0 12.75 18h-1.5A3.25 3.25 0 0 1 8 21.25v1.5ZM1.25 18A4.75 4.75 0 0 0 6 22.75v-1.5A3.25 3.25 0 0 1 2.75 18h-1.5ZM6 11.25A4.75 4.75 0 0 0 1.25 16h1.5A3.25 3.25 0 0 1 6 12.75v-1.5Zm2 1.5A3.25 3.25 0 0 1 11.25 16h1.5A4.75 4.75 0 0 0 8 11.25v1.5Zm10-11.5h-8v1.5h8v-1.5ZM22.75 14V6h-1.5v8h1.5ZM18 18.75A4.75 4.75 0 0 0 22.75 14h-1.5A3.25 3.25 0 0 1 18 17.25v1.5Zm-8-17.5A4.75 4.75 0 0 0 5.25 6h1.5A3.25 3.25 0 0 1 10 2.75v-1.5Zm8 1.5A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5Zm0 14.5h-6v1.5h6v-1.5ZM5.25 6v6h1.5V6h-1.5Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 7h5m0 0v5m0-5-6 6' })));
};
var ForwardRef$2i = forwardRef(SvgMaximizeRectangleDoted);

var SvgMaximizeRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20.25 9a.75.75 0 0 0 1.5 0h-1.5ZM21 3h.75a.75.75 0 0 0-.75-.75V3Zm-6-.75a.75.75 0 0 0 0 1.5v-1.5ZM9.47 13.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM21.75 9V3h-1.5v6h1.5ZM21 2.25h-6v1.5h6v-1.5Zm-.53.22-11 11 1.06 1.06 11-11-1.06-1.06Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-5' })));
};
var ForwardRef$2h = forwardRef(SvgMaximizeRectangle);

var SvgMedicalBook = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M15 9H9m3 3V6' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M20 16H7a3 3 0 0 0-3 3m0 0a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v14Z' })));
};
var ForwardRef$2g = forwardRef(SvgMedicalBook);

var SvgMedicalInformation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M8 11v6m3-3H5m14-2h-5m3 4h-3' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M14 6h4a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4h4m4 0V4a2 2 0 1 0-4 0v2m4 0a2 2 0 1 1-4 0' })));
};
var ForwardRef$2f = forwardRef(SvgMedicalInformation);

var SvgMedicalService = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 11v6m3-3H9M8 6V5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1M6 22h12a4 4 0 0 0 4-4v-8a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4Z' })));
};
var ForwardRef$2e = forwardRef(SvgMedicalService);

var SvgMenuCircleHorizontal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 16.75, cy: 12.25, r: 1.25, fill: 'currentColor', transform: 'rotate(90 16.75 12.25)' }),
        React.createElement("circle", { cx: 11.75, cy: 12.25, r: 1.25, fill: 'currentColor', transform: 'rotate(90 11.75 12.25)' }),
        React.createElement("circle", { cx: 6.75, cy: 12.25, r: 1.25, fill: 'currentColor', transform: 'rotate(90 6.75 12.25)' })));
};
var ForwardRef$2d = forwardRef(SvgMenuCircleHorizontal);

var SvgMenuCircleVertical = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12.25, cy: 7.25, r: 1.25, fill: 'currentColor' }),
        React.createElement("circle", { cx: 12.25, cy: 12.25, r: 1.25, fill: 'currentColor' }),
        React.createElement("circle", { cx: 12.25, cy: 17.25, r: 1.25, fill: 'currentColor' })));
};
var ForwardRef$2c = forwardRef(SvgMenuCircleVertical);

var SvgMenuHome = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M8 11.25a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8 2.5a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5ZM4.47 7.027l-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58ZM8 12.75h8v-1.5H8v1.5Zm0 4h8v-1.5H8v1.5Zm12.25-6.6v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Z' })));
};
var ForwardRef$2b = forwardRef(SvgMenuHome);

var SvgMenuLineHorizontalHalf = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M7 7.25a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5Zm-5 2.5a.75.75 0 0 0 0 1.5v-1.5Zm10 1.5a.75.75 0 0 0 0-1.5v1.5Zm-5 2.5a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5Zm-10-8h5v-1.5H7v1.5Zm0 4h10v-1.5H7v1.5Zm5 4h5v-1.5h-5v1.5Z' })));
};
var ForwardRef$2a = forwardRef(SvgMenuLineHorizontalHalf);

var SvgMenuLineHorizontal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M7 7.25a.75.75 0 0 0 0 1.5v-1.5Zm10 1.5a.75.75 0 0 0 0-1.5v1.5Zm-10 2.5a.75.75 0 0 0 0 1.5v-1.5Zm10 1.5a.75.75 0 0 0 0-1.5v1.5Zm-10 2.5a.75.75 0 0 0 0 1.5v-1.5Zm10 1.5a.75.75 0 0 0 0-1.5v1.5Zm-10-8h10v-1.5H7v1.5Zm0 4h10v-1.5H7v1.5Zm0 4h10v-1.5H7v1.5Z' })));
};
var ForwardRef$29 = forwardRef(SvgMenuLineHorizontal);

var SvgMenuLineVerticalHalf = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M12.75 7a.75.75 0 0 0-1.5 0h1.5Zm-1.5 10a.75.75 0 0 0 1.5 0h-1.5Zm-2.5-5a.75.75 0 0 0-1.5 0h1.5Zm-1.5 5a.75.75 0 0 0 1.5 0h-1.5Zm9.5-10a.75.75 0 0 0-1.5 0h1.5Zm-1.5 5a.75.75 0 0 0 1.5 0h-1.5Zm-4-5v10h1.5V7h-1.5Zm-4 5v5h1.5v-5h-1.5Zm8-5v5h1.5V7h-1.5Z' })));
};
var ForwardRef$28 = forwardRef(SvgMenuLineVerticalHalf);

var SvgMenuLineVertical = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.75 10a.75.75 0 0 0-1.5 0h1.5Zm-1.5 4a.75.75 0 0 0 1.5 0h-1.5Zm-2.5-7a.75.75 0 0 0-1.5 0h1.5Zm-1.5 10a.75.75 0 0 0 1.5 0h-1.5Zm-2.5-7a.75.75 0 0 0-1.5 0h1.5Zm-1.5 4a.75.75 0 0 0 1.5 0h-1.5Zm8-4v4h1.5v-4h-1.5Zm-4-3v10h1.5V7h-1.5Zm-4 3v4h1.5v-4h-1.5Z' })));
};
var ForwardRef$27 = forwardRef(SvgMenuLineVertical);

var SvgMenuUser = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M14 11.25a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8-6.5a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6 8.5a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8-5h8v-1.5h-8v1.5Zm0-5h8v-1.5h-8v1.5Zm2 10h6v-1.5h-6v1.5ZM9.25 8A2.25 2.25 0 0 1 7 10.25v1.5A3.75 3.75 0 0 0 10.75 8h-1.5ZM7 10.25A2.25 2.25 0 0 1 4.75 8h-1.5A3.75 3.75 0 0 0 7 11.75v-1.5ZM4.75 8A2.25 2.25 0 0 1 7 5.75v-1.5A3.75 3.75 0 0 0 3.25 8h1.5ZM7 5.75A2.25 2.25 0 0 1 9.25 8h1.5A3.75 3.75 0 0 0 7 4.25v1.5ZM11.25 16c0 .462-.316 1.007-1.1 1.478-.77.462-1.882.772-3.15.772v1.5c1.493 0 2.881-.362 3.921-.986 1.025-.615 1.829-1.569 1.829-2.764h-1.5ZM7 18.25c-1.268 0-2.38-.31-3.15-.772-.784-.47-1.1-1.017-1.1-1.478h-1.5c0 1.195.804 2.15 1.829 2.764 1.04.624 2.428.986 3.921.986v-1.5ZM2.75 16c0-.461.316-1.007 1.1-1.478.77-.462 1.882-.772 3.15-.772v-1.5c-1.493 0-2.881.362-3.921.986C2.054 13.85 1.25 14.805 1.25 16h1.5ZM7 13.75c1.268 0 2.38.31 3.15.772.784.47 1.1 1.017 1.1 1.478h1.5c0-1.195-.804-2.15-1.829-2.764-1.04-.624-2.428-.986-3.921-.986v1.5Z' })));
};
var ForwardRef$26 = forwardRef(SvgMenuUser);

var SvgMessenger = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'square', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.511.335 2.945.936 4.229l-.713 4.396a1 1 0 0 0 1.152 1.146l4.355-.726A9.96 9.96 0 0 0 12 22Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'm10 9-4 6 4-3 4 3 4-6-4 3-4-3Z' })));
};
var ForwardRef$25 = forwardRef(SvgMessenger);

var SvgMinimizeCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M15 14h-5m0 0V9m0 5L21 3' }),
        React.createElement("path", { fill: 'currentColor', d: 'M19.75 13a.75.75 0 0 0-1.5 0h1.5ZM11 5.75a.75.75 0 0 0 0-1.5v1.5ZM18.25 13A7.25 7.25 0 0 1 11 20.25v1.5A8.75 8.75 0 0 0 19.75 13h-1.5ZM11 20.25A7.25 7.25 0 0 1 3.75 13h-1.5A8.75 8.75 0 0 0 11 21.75v-1.5ZM3.75 13A7.25 7.25 0 0 1 11 5.75v-1.5A8.75 8.75 0 0 0 2.25 13h1.5Z' })));
};
var ForwardRef$24 = forwardRef(SvgMinimizeCircle);

var SvgMinimizeRectangleDoted = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M6 6v-.75V6Zm12-4.75h-2v1.5h2v-1.5ZM11.25 6v2h1.5V6h-1.5ZM16 12.75h2v-1.5h-2v1.5ZM22.75 8V6h-1.5v2h1.5ZM18 12.75A4.75 4.75 0 0 0 22.75 8h-1.5A3.25 3.25 0 0 1 18 11.25v1.5ZM11.25 8A4.75 4.75 0 0 0 16 12.75v-1.5A3.25 3.25 0 0 1 12.75 8h-1.5ZM16 1.25A4.75 4.75 0 0 0 11.25 6h1.5A3.25 3.25 0 0 1 16 2.75v-1.5Zm2 1.5A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM1.25 10v8h1.5v-8h-1.5ZM6 22.75h8v-1.5H6v1.5Zm8 0A4.75 4.75 0 0 0 18.75 18h-1.5A3.25 3.25 0 0 1 14 21.25v1.5ZM1.25 18A4.75 4.75 0 0 0 6 22.75v-1.5A3.25 3.25 0 0 1 2.75 18h-1.5ZM6 5.25A4.75 4.75 0 0 0 1.25 10h1.5A3.25 3.25 0 0 1 6 6.75v-1.5Zm0 1.5h6v-1.5H6v1.5ZM18.75 18v-6h-1.5v6h1.5Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 17H7m0 0v-5m0 5 6-6' })));
};
var ForwardRef$23 = forwardRef(SvgMinimizeRectangleDoted);

var SvgMinimizeRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M10.75 8a.75.75 0 0 0-1.5 0h1.5ZM10 14h-.75c0 .414.336.75.75.75V14Zm6 .75a.75.75 0 0 0 0-1.5v1.5Zm5.53-11.22a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM9.25 8v6h1.5V8h-1.5Zm.75 6.75h6v-1.5h-6v1.5Zm.53-.22 11-11-1.06-1.06-11 11 1.06 1.06Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-5' })));
};
var ForwardRef$22 = forwardRef(SvgMinimizeRectangle);

var SvgMobileDataOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm11 17-1.586 1.586a2 2 0 0 1-2.828 0L5 17m3-9v10.5' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm4 4 16 16' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.75 13.69V5.828c.047.035.091.074.134.117L18.47 7.53a.75.75 0 1 0 1.06-1.061l-1.585-1.586a2.75 2.75 0 0 0-3.89 0L12.47 6.47a.75.75 0 0 0 1.06 1.06l1.586-1.585a1.26 1.26 0 0 1 .134-.117v6.362l1.5 1.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$21 = forwardRef(SvgMobileDataOff);

var SvgMobileData = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm11 17-1.586 1.586a2 2 0 0 1-2.828 0L5 17m3-7v8.5M13 7l1.586-1.586a2 2 0 0 1 2.828 0L19 7m-3 7V5.5' })));
};
var ForwardRef$20 = forwardRef(SvgMobileData);

var SvgMobile = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 14, height: 20, x: 5, y: 2, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, rx: 3 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M11 19h2' })));
};
var ForwardRef$1$ = forwardRef(SvgMobile);

var SvgMusicOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 6, cy: 18, r: 3, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm3 3 18 18m-2-8.952V5.002a2 2 0 0 0-2.743-1.857l-4.743 1.897a3.994 3.994 0 0 0-1.462 1.01M9 18.048V9m10 6v-4.998a2 2 0 0 0-2.743-1.857L13.32 9.32m4.825 8.825a3 3 0 1 1-4.242-4.242' })));
};
var ForwardRef$1_ = forwardRef(SvgMusicOff);

var SvgMusic = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 17, cy: 16.048, r: 3, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("circle", { cx: 7, cy: 18, r: 3, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M20 16.048v-6.046a2 2 0 0 0-2.743-1.857l-4.743 1.897A4 4 0 0 0 10 13.756v4.292' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M20 12.048V5.002a2 2 0 0 0-2.743-1.857l-4.743 1.897A4 4 0 0 0 10 8.756v7.292' })));
};
var ForwardRef$1Z = forwardRef(SvgMusic);

var SvgNetflix = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M4 3.84v16.32h5v-9.12m11 9.12V3.84h-5v8.64' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M4 3.84h5l11 16.32h-5L4 3.84Z' })));
};
var ForwardRef$1Y = forwardRef(SvgNetflix);

var SvgNextArrow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm14.008 17.245-.378-.647.378.647Zm6.03-3.518-.377-.647.377.647Zm0-3.455.378-.647-.378.647Zm-6.03-3.518-.378.648.378-.648Zm-8 10.491-.378-.647.378.647Zm0-10.49-.378.647.378-.648Zm8.378 11.138 6.03-3.518-.755-1.295-6.031 3.518.756 1.295Zm6.03-8.268-6.03-3.518-.756 1.295 6.03 3.518.756-1.295Zm0 4.75c1.82-1.06 1.82-3.69 0-4.75l-.755 1.295a1.25 1.25 0 0 1 0 2.16l.755 1.295ZM10.25 15.518c0 2.122 2.302 3.445 4.136 2.375l-.756-1.295a1.25 1.25 0 0 1-1.88-1.08h-1.5Zm1.5-7.036a1.25 1.25 0 0 1 1.88-1.08l.756-1.295c-1.834-1.07-4.136.253-4.136 2.375h1.5Zm-9.5 0v7.036h1.5V8.482h-1.5Zm0 7.036c0 2.122 2.302 3.445 4.136 2.375l-.756-1.295a1.25 1.25 0 0 1-1.88-1.08h-1.5Zm1.5-7.036a1.25 1.25 0 0 1 1.88-1.08l.756-1.295C4.552 5.037 2.25 6.36 2.25 8.482h1.5Zm7.628.537L6.386 6.107 5.63 7.402l4.992 2.912.756-1.295Zm-1.128-.537v1.185h1.5V8.482h-1.5Zm0 1.185v4.666h1.5V9.667h-1.5Zm0 4.666v1.185h1.5v-1.185h-1.5Zm-3.864 3.56 4.992-2.912-.756-1.296-4.992 2.913.756 1.295Z' })));
};
var ForwardRef$1X = forwardRef(SvgNextArrow);

var SvgNightMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18.328 14.869A9.197 9.197 0 0 1 9.525 3 9.201 9.201 0 0 0 3 11.803 9.197 9.197 0 0 0 12.197 21 9.201 9.201 0 0 0 21 14.475a9.196 9.196 0 0 1-2.672.394Z' })));
};
var ForwardRef$1W = forwardRef(SvgNightMode);

var SvgNotificationOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm3 2.75 18 18' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M19.918 15.668a1.891 1.891 0 0 0-.373-1.788 3.816 3.816 0 0 1-.88-2.042l-.345-3.044C17.946 5.491 15.23 3 12 3c-1.33 0-2.572.422-3.6 1.15M6.502 6.252a6.668 6.668 0 0 0-.822 2.542l-.345 3.044a3.816 3.816 0 0 1-.88 2.042C3.422 15.096 4.261 17 5.83 17h11.42' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M15 19c-.437 1.165-1.615 2-3 2s-2.563-.835-3-2' })));
};
var ForwardRef$1V = forwardRef(SvgNotificationOff);

var SvgNotificationWithCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 17, cy: 5, r: 3, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M11.072 4.07c-2.809.423-5.055 2.743-5.392 5.724l-.345 3.044a3.817 3.817 0 0 1-.88 2.042C3.422 16.096 4.261 18 5.83 18h12.34c1.57 0 2.408-1.904 1.374-3.12a3.817 3.817 0 0 1-.879-2.042l-.228-2.011' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M15 20c-.437 1.165-1.615 2-3 2s-2.563-.835-3-2' })));
};
var ForwardRef$1U = forwardRef(SvgNotificationWithCircle);

var SvgNotification = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M5.68 8.794C6.054 5.491 8.77 3 12 3c3.23 0 5.946 2.49 6.32 5.794l.345 3.044a3.82 3.82 0 0 0 .88 2.042c1.033 1.216.194 3.12-1.375 3.12H5.83c-1.57 0-2.408-1.904-1.375-3.12a3.816 3.816 0 0 0 .88-2.042l.345-3.044Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M15 19c-.437 1.165-1.615 2-3 2s-2.563-.835-3-2' })));
};
var ForwardRef$1T = forwardRef(SvgNotification);

var SvgOutCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm18 8 4 4m0 0-4 4m4-4H8' }),
        React.createElement("path", { fill: 'currentColor', d: 'M15.47 18.83a.75.75 0 1 0-.94-1.17l.94 1.17Zm-.94-12.49a.75.75 0 1 0 .94-1.17l-.94 1.17ZM10 19.25A7.25 7.25 0 0 1 2.75 12h-1.5A8.75 8.75 0 0 0 10 20.75v-1.5ZM2.75 12A7.25 7.25 0 0 1 10 4.75v-1.5A8.75 8.75 0 0 0 1.25 12h1.5Zm11.78 5.66A7.216 7.216 0 0 1 10 19.25v1.5a8.717 8.717 0 0 0 5.47-1.92l-.94-1.17ZM10 4.75c1.715 0 3.29.595 4.53 1.59l.94-1.17A8.716 8.716 0 0 0 10 3.25v1.5Z' })));
};
var ForwardRef$1S = forwardRef(SvgOutCircle);

var SvgOutRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm18 9 3 3m0 0-3 3m3-3H9m6-4.5V7a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-.5' })));
};
var ForwardRef$1R = forwardRef(SvgOutRectangle);

var SvgPayoneer = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("circle", { cx: 12, cy: 12, r: 7, stroke: 'currentColor', strokeWidth: 1.5 })));
};
var ForwardRef$1Q = forwardRef(SvgPayoneer);

var SvgPaypal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M13 3H8.5L3 18h4l2-5h4a5 5 0 0 0 0-10Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm7 18-1.207 3H10l2-5h4a5 5 0 0 0 2-9.584' })));
};
var ForwardRef$1P = forwardRef(SvgPaypal);

var SvgPhoneLock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M14 16v-1a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v1m0 0h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M9 22H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v5' })));
};
var ForwardRef$1O = forwardRef(SvgPhoneLock);

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
var ForwardRef$1N = forwardRef(SvgPillTablet);

var SvgPillsCapsule = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M5 10a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-8Zm0-6a2 2 0 0 1 2-2h10a2 2 0 1 1 0 4H7a2 2 0 0 1-2-2Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M15 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' })));
};
var ForwardRef$1M = forwardRef(SvgPillsCapsule);

var SvgPills = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 9, cy: 15, r: 7, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M16 15a7 7 0 0 0-7.938-6.938 7 7 0 1 1 7.875 7.875A7.07 7.07 0 0 0 16 15Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M2 15h14m3.95-10.95-6 6' })));
};
var ForwardRef$1L = forwardRef(SvgPills);

var SvgPinterestCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 20a9.985 9.985 0 0 1-4-8C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.99 9.99 0 0 1-3.131-.5l2.631-10' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M10.172 16.655A5 5 0 1 0 7.668 14.5' })));
};
var ForwardRef$1K = forwardRef(SvgPinterestCircle);

var SvgPinterest = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 4.4c-3.045 0-5.474 2.297-5.474 5.086 0 .185.01.368.032.548.064.558-.178 1.14-.692 1.367-.76.337-1.661-.033-1.786-.854A7.064 7.064 0 0 1 4 9.486C4 5.33 7.603 2 12 2s8 3.331 8 7.486c0 4.154-3.603 7.485-8 7.485a8.58 8.58 0 0 1-1.45-.123L9.165 21.15c-.204.634-.91.99-1.577.797-.667-.193-1.043-.864-.84-1.498l4.043-12.571c.204-.634.91-.99 1.577-.797.667.193 1.043.864.84 1.498l-1.914 5.95c.23.028.466.042.705.042 3.045 0 5.474-2.297 5.474-5.085 0-2.789-2.43-5.086-5.474-5.086Z' })));
};
var ForwardRef$1J = forwardRef(SvgPinterest);

var SvgPlaster = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 4, height: 5.523, x: 12.538, y: 8.633, stroke: 'currentColor', strokeWidth: 1.5, rx: 1, transform: 'rotate(45 12.538 8.633)' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M14.206 4.166a3.98 3.98 0 1 1 5.628 5.628l-10.04 10.04a3.98 3.98 0 1 1-5.628-5.628l10.04-10.04Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm16.243 6.343 1.414 1.414M6.343 16.243l1.414 1.414' })));
};
var ForwardRef$1I = forwardRef(SvgPlaster);

var SvgPreviousArrow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm10.023 17.245.378-.647-.378.647Zm-6.03-3.518.377-.647-.378.647Zm0-3.455-.379-.647.378.647Zm6.03-3.518.378.648-.378-.648Zm8 10.491.378-.647-.378.647Zm0-10.49.378.647-.378-.648ZM9.645 17.892l-6.03-3.518.755-1.295 6.03 3.518-.755 1.295Zm-6.03-8.268 6.03-3.518.756 1.295-6.03 3.518-.757-1.295Zm0 4.75c-1.82-1.06-1.82-3.69 0-4.75l.755 1.295a1.25 1.25 0 0 0 0 2.16l-.756 1.295Zm10.166 1.143c0 2.122-2.303 3.445-4.136 2.375l.756-1.295a1.25 1.25 0 0 0 1.88-1.08h1.5Zm-1.5-7.036a1.25 1.25 0 0 0-1.88-1.08l-.756-1.295c1.833-1.07 4.136.253 4.136 2.375h-1.5Zm9.5 0v7.036h-1.5V8.482h1.5Zm0 7.036c0 2.122-2.303 3.445-4.136 2.375l.756-1.295a1.25 1.25 0 0 0 1.88-1.08h1.5Zm-1.5-7.036a1.25 1.25 0 0 0-1.88-1.08l-.756-1.295c1.833-1.07 4.136.253 4.136 2.375h-1.5Zm-7.628.537 4.992-2.912.756 1.295-4.992 2.912-.756-1.295Zm1.128-.537v1.185h-1.5V8.482h1.5Zm0 1.185v4.666h-1.5V9.667h1.5Zm0 4.666v1.185h-1.5v-1.185h1.5Zm3.864 3.56-4.992-2.912.756-1.296 4.992 2.913-.756 1.295Z' })));
};
var ForwardRef$1H = forwardRef(SvgPreviousArrow);

var SvgQrScan = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M5 8V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m0 8v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1m-3-4h20' })));
};
var ForwardRef$1G = forwardRef(SvgQrScan);

var SvgRedoCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm15.465 10 .185.727a.75.75 0 0 0 .565-.727h-.75Zm.75-2.5a.75.75 0 0 0-1.5 0h1.5Zm-2.9 2.273a.75.75 0 1 0 .37 1.454l-.37-1.454Zm3.285 3.414a.75.75 0 1 0-1.452-.374l1.452.374ZM12 15.25A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75v-1.5ZM8.75 12A3.25 3.25 0 0 1 12 8.75v-1.5A4.75 4.75 0 0 0 7.25 12h1.5ZM12 8.75c1.202 0 2.253.652 2.816 1.626l1.298-.752A4.749 4.749 0 0 0 12 7.25v1.5ZM16.215 10V7.5h-1.5V10h1.5Zm-.935-.727-1.965.5.37 1.454 1.965-.5-.37-1.454Zm-.132 3.54A3.252 3.252 0 0 1 12 15.25v1.5a4.752 4.752 0 0 0 4.6-3.563l-1.452-.374Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z' })));
};
var ForwardRef$1F = forwardRef(SvgRedoCircle);

var SvgRedoRectangleLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm8.41 10-.186.727A.75.75 0 0 1 7.66 10h.75Zm-.75-2.5a.75.75 0 0 1 1.5 0h-1.5Zm2.899 2.273a.75.75 0 0 1-.37 1.454l.37-1.454Zm-3.285 3.414a.75.75 0 1 1 1.452-.374l-1.452.374Zm4.6 2.063a3.25 3.25 0 0 0 3.25-3.25h1.5a4.75 4.75 0 0 1-4.75 4.75v-1.5Zm3.25-3.25a3.25 3.25 0 0 0-3.25-3.25v-1.5a4.75 4.75 0 0 1 4.75 4.75h-1.5Zm-3.25-3.25a3.248 3.248 0 0 0-2.816 1.626L7.76 9.623a4.748 4.748 0 0 1 4.114-2.374v1.5ZM7.659 10V7.5h1.5V10h-1.5Zm.935-.727 1.965.5-.37 1.454-1.965-.5.37-1.454Zm.132 3.54a3.252 3.252 0 0 0 3.148 2.437v1.5a4.752 4.752 0 0 1-4.6-3.563l1.452-.374Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z' })));
};
var ForwardRef$1E = forwardRef(SvgRedoRectangleLeft);

var SvgRedoRectangleRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm15.465 10 .185.727a.75.75 0 0 0 .565-.727h-.75Zm.75-2.5a.75.75 0 0 0-1.5 0h1.5Zm-2.9 2.273a.75.75 0 1 0 .37 1.454l-.37-1.454Zm3.285 3.414a.75.75 0 1 0-1.452-.374l1.452.374ZM12 15.25A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75v-1.5ZM8.75 12A3.25 3.25 0 0 1 12 8.75v-1.5A4.75 4.75 0 0 0 7.25 12h1.5ZM12 8.75c1.202 0 2.253.652 2.816 1.626l1.298-.752A4.749 4.749 0 0 0 12 7.25v1.5ZM16.215 10V7.5h-1.5V10h1.5Zm-.935-.727-1.965.5.37 1.454 1.965-.5-.37-1.454Zm-.132 3.54A3.252 3.252 0 0 1 12 15.25v1.5a4.752 4.752 0 0 0 4.6-3.563l-1.452-.374Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z' })));
};
var ForwardRef$1D = forwardRef(SvgRedoRectangleRight);

var SvgRedo = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M21.75 12a.75.75 0 0 0-1.5 0h1.5Zm-1.954-4.5v.75a.75.75 0 0 0 .75-.75h-.75Zm.75-4.5a.75.75 0 0 0-1.5 0h1.5Zm-5.171 3.75a.75.75 0 0 0 0 1.5v-1.5ZM20.25 12A8.25 8.25 0 0 1 12 20.25v1.5A9.75 9.75 0 0 0 21.75 12h-1.5ZM12 20.25A8.25 8.25 0 0 1 3.75 12h-1.5A9.75 9.75 0 0 0 12 21.75v-1.5ZM3.75 12A8.25 8.25 0 0 1 12 3.75v-1.5A9.75 9.75 0 0 0 2.25 12h1.5ZM12 3.75a8.247 8.247 0 0 1 7.147 4.126l1.298-.752A9.747 9.747 0 0 0 12 2.25v1.5Zm8.546 3.75V3h-1.5v4.5h1.5Zm-.75-.75h-4.421v1.5h4.421v-1.5Z' })));
};
var ForwardRef$1C = forwardRef(SvgRedo);

var SvgReloadCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm14.58 8.002-.367.654a.75.75 0 0 0 1.065-.93l-.697.276Zm-5.16 7.996.368-.654a.75.75 0 0 0-1.066.93l.697-.276Zm5.063-10.275a.75.75 0 0 0-1.394.554l1.394-.554ZM9.517 18.277a.75.75 0 0 0 1.394-.554l-1.394.554Zm8.038-7.682a.75.75 0 0 0-1.443.41l1.443-.41Zm-11.11 2.81a.75.75 0 1 0 1.443-.41l-1.443.41ZM16.25 12c0 2.115-1.853 3.917-4.25 3.917v1.5c3.126 0 5.75-2.378 5.75-5.417h-1.5Zm-8.5 0c0-2.115 1.853-3.917 4.25-3.917v-1.5c-3.126 0-5.75 2.378-5.75 5.417h1.5ZM12 8.083c.814 0 1.57.21 2.213.573l.736-1.307A5.997 5.997 0 0 0 12 6.583v1.5Zm0 7.834c-.814 0-1.57-.21-2.212-.573l-.737 1.307a5.997 5.997 0 0 0 2.949.766v-1.5Zm3.278-8.192-.795-2.002-1.394.554.795 2.002 1.394-.554Zm-6.556 8.55.795 2.002 1.394-.554-.795-2.002-1.394.554Zm7.39-5.27c.09.317.138.65.138.995h1.5c0-.485-.068-.956-.195-1.405l-1.443.41Zm-8.224 1.99A3.63 3.63 0 0 1 7.75 12h-1.5c0 .485.068.956.195 1.405l1.443-.41Z' }),
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 })));
};
var ForwardRef$1B = forwardRef(SvgReloadCircle);

var SvgReloadRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm14.58 8.002-.367.654a.75.75 0 0 0 1.065-.93l-.697.276Zm-5.16 7.996.368-.654a.75.75 0 0 0-1.066.93l.697-.276Zm5.063-10.275a.75.75 0 0 0-1.394.554l1.394-.554ZM9.517 18.277a.75.75 0 0 0 1.394-.554l-1.394.554Zm8.038-7.682a.75.75 0 0 0-1.443.41l1.443-.41Zm-11.11 2.81a.75.75 0 1 0 1.443-.41l-1.443.41ZM16.25 12c0 2.115-1.853 3.917-4.25 3.917v1.5c3.126 0 5.75-2.378 5.75-5.417h-1.5Zm-8.5 0c0-2.115 1.853-3.917 4.25-3.917v-1.5c-3.126 0-5.75 2.378-5.75 5.417h1.5ZM12 8.083c.814 0 1.57.21 2.213.573l.736-1.307A5.997 5.997 0 0 0 12 6.583v1.5Zm0 7.834c-.814 0-1.57-.21-2.212-.573l-.737 1.307a5.997 5.997 0 0 0 2.949.766v-1.5Zm3.278-8.192-.795-2.002-1.394.554.795 2.002 1.394-.554Zm-6.556 8.55.795 2.002 1.394-.554-.795-2.002-1.394.554Zm7.39-5.27c.09.317.138.65.138.995h1.5c0-.485-.068-.956-.195-1.405l-1.443.41Zm-8.224 1.99A3.63 3.63 0 0 1 7.75 12h-1.5c0 .485.068.956.195 1.405l1.443-.41Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z' })));
};
var ForwardRef$1A = forwardRef(SvgReloadRectangle);

var SvgReload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15.558 1.733a.75.75 0 0 0-1.402.534l1.402-.534ZM8.442 22.267a.75.75 0 0 0 1.402-.534l-1.402.534Zm7.593-17.176-.379.647a.75.75 0 0 0 1.08-.914l-.7.267Zm-8.07 13.818.379-.647a.75.75 0 0 0-1.08.914l.7-.267ZM4.42 16.375a.75.75 0 1 0 1.298-.75l-1.298.75Zm15.158-8.75a.75.75 0 1 0-1.299.75l1.299-.75ZM19.25 12A7.25 7.25 0 0 1 12 19.25v1.5A8.75 8.75 0 0 0 20.75 12h-1.5Zm-14.5 0A7.25 7.25 0 0 1 12 4.75v-1.5A8.75 8.75 0 0 0 3.25 12h1.5ZM12 4.75c1.335 0 2.584.36 3.656.988l.758-1.295A8.713 8.713 0 0 0 12 3.25v1.5Zm4.736.074-1.178-3.091-1.402.534 1.178 3.09 1.402-.533ZM12 19.25a7.212 7.212 0 0 1-3.656-.988l-.758 1.294A8.713 8.713 0 0 0 12 20.75v-1.5Zm-4.736-.074 1.178 3.091 1.402-.534-1.178-3.09-1.402.533Zm-1.545-3.551A7.214 7.214 0 0 1 4.75 12h-1.5a8.71 8.71 0 0 0 1.171 4.375l1.298-.75Zm12.561-7.25A7.212 7.212 0 0 1 19.25 12h1.5a8.713 8.713 0 0 0-1.171-4.376l-1.299.752Z' })));
};
var ForwardRef$1z = forwardRef(SvgReload);

var SvgRestart = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a10 10 0 0 0 8.96-5.556' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm22 12-3-1' })));
};
var ForwardRef$1y = forwardRef(SvgRestart);

var SvgRotateLock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M10 10V9a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v1m0 0h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a10 10 0 0 0 8.96-5.556' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm22 12-3-1' })));
};
var ForwardRef$1x = forwardRef(SvgRotateLock);

var SvgScreenRotate = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 8.5, height: 14, x: 4.045, y: 10.056, stroke: 'currentColor', strokeWidth: 1.5, rx: 2, transform: 'rotate(-45 4.045 10.056)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M14 3.223A9.013 9.013 0 0 1 20.777 10L22 8M10 20.777A9.013 9.013 0 0 1 3.223 14L2 16' })));
};
var ForwardRef$1w = forwardRef(SvgScreenRotate);

var SvgScreenshot = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 10, height: 10, x: 7, y: 7, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M9 3H5a2 2 0 0 0-2 2v4m12 12h4a2 2 0 0 0 2-2v-4' })));
};
var ForwardRef$1v = forwardRef(SvgScreenshot);

var SvgSdStorage = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M20 18V6a4 4 0 0 0-4-4h-5.343a4 4 0 0 0-2.829 1.172L5.172 5.828A4 4 0 0 0 4 8.657V18a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M17 7V5m-3 2V5m-3 2V5' })));
};
var ForwardRef$1u = forwardRef(SvgSdStorage);

var SvgSecurity = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M10.375 2.722 5.378 4.943c-1.446.643-2.4 2.082-2.308 3.66.36 6.175 2.168 8.893 6.866 12.074a3.686 3.686 0 0 0 4.129 0c4.712-3.197 6.456-5.954 6.847-12.052.102-1.59-.854-3.044-2.31-3.69l-4.977-2.213a4 4 0 0 0-3.25 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm9 12 1.753 1.402a1 1 0 0 0 1.377-.122L15 10' })));
};
var ForwardRef$1t = forwardRef(SvgSecurity);

var SvgSetting = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12.848 4h-1.697c-.937 0-1.696.716-1.696 1.6a1.333 1.333 0 0 1-1.97 1.17l-.09-.048c-.812-.442-1.85-.18-2.319.585l-.848 1.386c-.469.765-.19 1.744.62 2.186.89.483.89 1.759 0 2.242-.81.442-1.089 1.42-.62 2.186l.848 1.386c.469.765 1.507 1.027 2.318.585l.09-.049c.889-.483 1.97.16 1.97 1.171 0 .884.76 1.6 1.697 1.6h1.697c.938 0 1.697-.716 1.697-1.6a1.333 1.333 0 0 1 1.97-1.17l.09.049c.812.441 1.85.18 2.319-.586l.848-1.386c.469-.765.19-1.744-.62-2.186a1.277 1.277 0 0 1 0-2.242c.81-.442 1.089-1.42.62-2.186l-.848-1.386c-.469-.765-1.507-1.027-2.318-.585l-.09.049a1.333 1.333 0 0 1-1.97-1.171c0-.884-.76-1.6-1.697-1.6Z' }),
        React.createElement("circle", { cx: 12, cy: 12, r: 3, stroke: 'currentColor', strokeWidth: 1.5 })));
};
var ForwardRef$1s = forwardRef(SvgSetting);

var SvgShutDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M16 2.832c3.532 1.543 6 5.067 6 9.168 0 5.523-4.477 10-10 10S2 17.523 2 12c0-4.1 2.468-7.625 6-9.168' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 2v4' })));
};
var ForwardRef$1r = forwardRef(SvgShutDown);

var SvgSignalCellulerBad = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm22 16-4 4m0-4 4 4m-7.144 0H4.148c-1.965 0-2.894-2.331-1.434-3.596l13.708-11.87C17.802 3.339 20 4.28 20 6.067v6.87' })));
};
var ForwardRef$1q = forwardRef(SvgSignalCellulerBad);

var SvgSignalCellulerLine = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M21 20V4m-6 16V8M9 20v-8m-6 8v-4' })));
};
var ForwardRef$1p = forwardRef(SvgSignalCellulerLine);

var SvgSignalCellulerNoInternetDashed = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M20 13V4m-6 16V8M8 20v-8m-6 8v-4m16 4 4-4m-4 0 4 4' })));
};
var ForwardRef$1o = forwardRef(SvgSignalCellulerNoInternetDashed);

var SvgSignalCellulerNoInternet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M18 12v4m0 3v1m-3.144 0H5.148c-1.965 0-2.894-2.331-1.434-3.596l13.708-11.87C18.802 3.339 21 4.28 21 6.067v6.87' })));
};
var ForwardRef$1n = forwardRef(SvgSignalCellulerNoInternet);

var SvgSignalCellulerOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm3 3 18 18m0-4.063V5.067c0-1.786-2.198-2.728-3.578-1.533l-5.3 4.589m6.874 10.873a2.225 2.225 0 0 1-.14.004H5.148c-1.965 0-2.894-2.331-1.434-3.596l6.265-5.425' })));
};
var ForwardRef$1m = forwardRef(SvgSignalCellulerOff);

var SvgSignalCelluler = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M18.856 20H5.148c-1.965 0-2.894-2.331-1.434-3.596l13.708-11.87C18.802 3.339 21 4.28 21 6.067v11.87c0 1.14-.96 2.063-2.144 2.063Z' })));
};
var ForwardRef$1l = forwardRef(SvgSignalCelluler);

var SvgSimCard = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M4 18V6a4 4 0 0 1 4-4h5.343a4 4 0 0 1 2.829 1.172l2.656 2.656A4 4 0 0 1 20 8.657V18a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M16 18h-4m4-4h-4' })));
};
var ForwardRef$1k = forwardRef(SvgSimCard);

var SvgSkype = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M4 12a8 8 0 0 0 8.958 7.943 5 5 0 1 0 6.986-6.986 8 8 0 0 0-8.9-8.9 5 5 0 1 0-6.986 6.986A8.08 8.08 0 0 0 4 12Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M14.5 10a2 2 0 0 0-2-2h-1a2 2 0 1 0 0 4h1a2 2 0 1 1 0 4h-1a2 2 0 0 1-2-2' })));
};
var ForwardRef$1j = forwardRef(SvgSkype);

var SvgSlack = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M12 5.5a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1-3 0v-5Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M20 10.5a1.5 1.5 0 0 1-1.5 1.5H17v-1.5a1.5 1.5 0 0 1 3 0Zm-3 10a1.5 1.5 0 0 0-1.5-1.5H14v1.5a1.5 1.5 0 0 0 3 0ZM7 5.5A1.5 1.5 0 0 0 8.5 7H10V5.5a1.5 1.5 0 1 0-3 0Zm-3 10A1.5 1.5 0 0 1 5.5 14H7v1.5a1.5 1.5 0 0 1-3 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M9 15.5a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1-3 0v-5ZM8.5 9a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 1 1 0-3h5Zm12 5a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 0 1 0-3h5Z' })));
};
var ForwardRef$1i = forwardRef(SvgSlack);

var SvgSnapchat = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M22 17c-1.102 0-1.844 0-2.365.589-.608.687-1.279 1.411-2.197 1.411h-.771a2 2 0 0 0-1.2.4l-1.067.8a4 4 0 0 1-4.8 0l-1.067-.8a2 2 0 0 0-1.2-.4h-.771c-.918 0-1.59-.724-2.197-1.411C3.845 17 3.102 17 2 17l2.4-1.8A4 4 0 0 0 6 12v-.5h-.5a1.5 1.5 0 0 1 0-3H6V8a6 6 0 1 1 12 0v.5h.5a1.5 1.5 0 0 1 0 3H18v.5a4 4 0 0 0 1.6 3.2L22 17Z' })));
};
var ForwardRef$1h = forwardRef(SvgSnapchat);

var SvgSpotify = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M6.5 15c1.667-.5 5.9-1 9.5 1m-9.5-4c1.667-.5 6.9-1 10.5 1M6 9c2.5-1 8.4-1 12 1' })));
};
var ForwardRef$1g = forwardRef(SvgSpotify);

var SvgSpringNotesAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-6.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm5.5 5a.75.75 0 0 0-1.5 0h1.5Zm-1.5 6a.75.75 0 0 0 1.5 0h-1.5ZM15 13.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-2-8h10v-1.5H7v1.5ZM20.25 7.5V18h1.5V7.5h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V7.5h-1.5V18h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5ZM15.25 2v3h1.5V2h-1.5Zm-8 0v3h1.5V2h-1.5Zm4 8v6h1.5v-6h-1.5ZM15 12.25H9v1.5h6v-1.5Z' })));
};
var ForwardRef$1f = forwardRef(SvgSpringNotesAdd);

var SvgSpringNotesCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-6.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm2.219 7.414a.75.75 0 0 0-.938 1.172l.938-1.172Zm1.284 1.988.468-.585-.468.585Zm1.377-.122-.564-.494.564.494Zm3.434-2.786a.75.75 0 1 0-1.128-.988l1.128.988ZM7 4.25h10v-1.5H7v1.5ZM20.25 7.5V18h1.5V7.5h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V7.5h-1.5V18h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5ZM15.25 2v3h1.5V2h-1.5Zm-8 0v3h1.5V2h-1.5Zm1.281 11.586 1.753 1.402.937-1.171-1.752-1.403-.938 1.172Zm4.163 1.188 2.87-3.28-1.128-.988-2.87 3.28 1.128.988Zm-2.41.214a1.75 1.75 0 0 0 2.41-.214l-1.128-.988a.25.25 0 0 1-.345.03l-.937 1.172Z' })));
};
var ForwardRef$1e = forwardRef(SvgSpringNotesCheck);

var SvgSpringNotesDelete = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-6.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm7.402 6.409a.75.75 0 0 0-1.061-1.06l1.06 1.06Zm-5.304 3.182a.75.75 0 1 0 1.061 1.06l-1.06-1.06Zm4.243 1.06a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-3.182-5.303a.75.75 0 1 0-1.06 1.061l1.06-1.06ZM7 4.25h10v-1.5H7v1.5ZM20.25 7.5V18h1.5V7.5h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V7.5h-1.5V18h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5ZM15.25 2v3h1.5V2h-1.5Zm-8 0v3h1.5V2h-1.5Zm6.341 8.348-4.243 4.243 1.061 1.06 4.243-4.242-1.061-1.06Zm1.06 4.243-4.242-4.243-1.06 1.061 4.242 4.243 1.06-1.061Z' })));
};
var ForwardRef$1d = forwardRef(SvgSpringNotesDelete);

var SvgSpringNotesDownload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-6.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm7.28 9.53a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-3.237.763.53-.53-.53.53Zm-.763-1.823a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM12.75 10a.75.75 0 0 0-1.5 0h1.5Zm-1.5 5a.75.75 0 0 0 1.5 0h-1.5ZM7 4.25h10v-1.5H7v1.5ZM20.25 7.5V18h1.5V7.5h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V7.5h-1.5V18h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5ZM15.25 2v3h1.5V2h-1.5Zm-8 0v3h1.5V2h-1.5Zm6.22 11.47-1.293 1.293 1.06 1.06 1.293-1.293-1.06-1.06Zm-1.647 1.293L10.53 13.47l-1.06 1.06 1.293 1.293 1.06-1.06Zm.354 0a.25.25 0 0 1-.354 0l-1.06 1.06a1.75 1.75 0 0 0 2.474 0l-1.06-1.06ZM11.25 10v5h1.5v-5h-1.5Z' })));
};
var ForwardRef$1c = forwardRef(SvgSpringNotesDownload);

var SvgSpringNotesEditAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20.25 10a.75.75 0 0 0 1.5 0h-1.5ZM9 22.75a.75.75 0 0 0 0-1.5v1.5Zm3-.75-.721-.206-.37 1.297 1.297-.37L12 22Zm1.128-3.495.53.53-.53-.53Zm-.255.434-.722-.205.722.205Zm2.188 2.188.205.722-.205-.722Zm3.082-7.637-.53-.53.53.53ZM8.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm9.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-2.5 3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 6a.75.75 0 0 0 1.5 0h-1.5ZM15 11.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-2-6h10v-1.5H7v1.5ZM3.75 18V7.5h-1.5V18h1.5Zm16.5-10.5V10h1.5V7.5h-1.5ZM9 21.25H7v1.5h2v-1.5ZM2.25 18A4.75 4.75 0 0 0 7 22.75v-1.5A3.25 3.25 0 0 1 3.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5Zm12.98 12.577-5.015 5.015 1.06 1.06 5.015-5.014-1.06-1.061Zm-6.322 3.708 5.015-5.014-1.06-1.061-5.015 5.015 1.06 1.06Zm1.197 1.371-3.06.873.41 1.442 3.061-.872-.41-1.443Zm-2.134 1.8.873-3.061-1.443-.411-.872 3.06 1.442.412Zm-.123-4.231a1.75 1.75 0 0 0-.447.759l1.443.41a.253.253 0 0 1 .064-.109l-1.06-1.06Zm2.367 2.367a.253.253 0 0 1-.11.064l.411 1.443c.287-.082.548-.236.76-.447l-1.061-1.06Zm5.014-6.321a.923.923 0 0 1 0 1.306l1.061 1.06a2.424 2.424 0 0 0 0-3.427l-1.06 1.06Zm1.061-1.061a2.424 2.424 0 0 0-3.428 0l1.061 1.06a.924.924 0 0 1 1.306 0l1.061-1.06ZM7.25 2v3h1.5V2h-1.5Zm8 0v3h1.5V2h-1.5Zm-4 6v6h1.5V8h-1.5ZM15 10.25H9v1.5h6v-1.5Z' })));
};
var ForwardRef$1b = forwardRef(SvgSpringNotesEditAdd);

var SvgSpringNotesEditCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20.25 10a.75.75 0 0 0 1.5 0h-1.5ZM9 22.75a.75.75 0 0 0 0-1.5v1.5ZM8.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm9.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-5.781 5.414a.75.75 0 0 0-.938 1.172l.938-1.172Zm1.284 1.988.468-.585-.468.585Zm1.377-.122-.564-.494.564.494Zm3.434-2.786a.75.75 0 1 0-1.128-.988l1.128.988ZM12 22l-.721-.206a.75.75 0 0 0 .927.927L12 22Zm1.128-3.495.53.53-.53-.53Zm-.255.434-.722-.205.722.205Zm2.188 2.188.205.722-.205-.722Zm3.082-7.637-.53-.53.53.53ZM7 4.25h10v-1.5H7v1.5ZM3.75 18V7.5h-1.5V18h1.5Zm16.5-10.5V10h1.5V7.5h-1.5ZM9 21.25H7v1.5h2v-1.5ZM2.25 18A4.75 4.75 0 0 0 7 22.75v-1.5A3.25 3.25 0 0 1 3.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5ZM7.25 2v3h1.5V2h-1.5Zm8 0v3h1.5V2h-1.5Zm-6.719 9.586 1.753 1.402.937-1.171-1.752-1.403-.938 1.172Zm4.163 1.188 2.87-3.28-1.128-.988-2.87 3.28 1.128.988Zm-2.41.214a1.75 1.75 0 0 0 2.41-.214l-1.128-.988a.25.25 0 0 1-.345.03l-.937 1.172Zm9.695 2.339-5.014 5.015 1.06 1.06 5.015-5.014-1.06-1.061Zm-6.32 3.708 5.014-5.014-1.06-1.061-5.015 5.015 1.06 1.06Zm1.196 1.371-3.06.873.41 1.442 3.061-.872-.41-1.443Zm-2.134 1.8.873-3.061-1.443-.411-.872 3.06 1.442.412Zm-.123-4.231a1.75 1.75 0 0 0-.447.759l1.443.41a.253.253 0 0 1 .064-.109l-1.06-1.06Zm2.367 2.367a.253.253 0 0 1-.11.064l.411 1.443c.287-.082.548-.236.76-.447l-1.061-1.06Zm5.014-6.321a.923.923 0 0 1 0 1.306l1.061 1.06a2.424 2.424 0 0 0 0-3.427l-1.06 1.06Zm1.061-1.061a2.424 2.424 0 0 0-3.428 0l1.061 1.06a.924.924 0 0 1 1.306 0l1.061-1.06Z' })));
};
var ForwardRef$1a = forwardRef(SvgSpringNotesEditCheck);

var SvgSpringNotesEditDelete = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20.25 10a.75.75 0 0 0 1.5 0h-1.5ZM9 22.75a.75.75 0 0 0 0-1.5v1.5Zm3-.75-.721-.206-.37 1.297 1.297-.37L12 22Zm1.128-3.495.53.53-.53-.53Zm-.255.434-.722-.205.722.205Zm2.188 2.188.205.722-.205-.722Zm3.082-7.637-.53-.53.53.53ZM8.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm9.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-1.659 8.652a.75.75 0 0 0 1.06-1.061l-1.06 1.06Zm-3.182-5.304a.75.75 0 1 0-1.06 1.061l1.06-1.06Zm4.243 1.061a.75.75 0 1 0-1.061-1.06l1.06 1.06Zm-5.304 3.182a.75.75 0 1 0 1.061 1.06l-1.06-1.06ZM7 4.25h10v-1.5H7v1.5ZM3.75 18V7.5h-1.5V18h1.5Zm16.5-10.5V10h1.5V7.5h-1.5ZM9 21.25H7v1.5h2v-1.5ZM2.25 18A4.75 4.75 0 0 0 7 22.75v-1.5A3.25 3.25 0 0 1 3.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5Zm12.98 12.577-5.015 5.015 1.06 1.06 5.015-5.014-1.06-1.061Zm-6.322 3.708 5.015-5.014-1.06-1.061-5.015 5.015 1.06 1.06Zm1.197 1.371-3.06.873.41 1.442 3.061-.872-.41-1.443Zm-2.134 1.8.873-3.061-1.443-.411-.872 3.06 1.442.412Zm-.123-4.231a1.75 1.75 0 0 0-.447.759l1.443.41a.253.253 0 0 1 .064-.109l-1.06-1.06Zm2.367 2.367a.253.253 0 0 1-.11.064l.411 1.443c.287-.082.548-.236.76-.447l-1.061-1.06Zm5.014-6.321a.923.923 0 0 1 0 1.306l1.061 1.06a2.424 2.424 0 0 0 0-3.427l-1.06 1.06Zm1.061-1.061a2.424 2.424 0 0 0-3.428 0l1.061 1.06a.924.924 0 0 1 1.306 0l1.061-1.06ZM7.25 2v3h1.5V2h-1.5Zm8 0v3h1.5V2h-1.5Zm-.598 10.591-4.243-4.243-1.06 1.061 4.242 4.243 1.06-1.061ZM13.59 8.348l-4.243 4.243 1.061 1.06 4.243-4.242-1.061-1.06Z' })));
};
var ForwardRef$19 = forwardRef(SvgSpringNotesEditDelete);

var SvgSpringNotesEditDownload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20.25 10a.75.75 0 0 0 1.5 0h-1.5ZM9 22.75a.75.75 0 0 0 0-1.5v1.5Zm3-.75-.721-.206-.37 1.297 1.297-.37L12 22Zm1.128-3.495.53.53-.53-.53Zm-.255.434-.722-.205.722.205Zm2.188 2.188.205.722-.205-.722Zm3.082-7.637-.53-.53.53.53ZM8.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm9.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-.72 7.53a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-1.823.763.53.53-.53-.53Zm-1.414 0 .53-.53-.53.53Zm-.763-1.823a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM12.75 9a.75.75 0 0 0-1.5 0h1.5Zm-1.5 4a.75.75 0 0 0 1.5 0h-1.5ZM7 4.25h10v-1.5H7v1.5ZM3.75 18V7.5h-1.5V18h1.5Zm16.5-10.5V10h1.5V7.5h-1.5ZM9 21.25H7v1.5h2v-1.5ZM2.25 18A4.75 4.75 0 0 0 7 22.75v-1.5A3.25 3.25 0 0 1 3.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5Zm12.98 12.577-5.015 5.015 1.06 1.06 5.015-5.014-1.06-1.061Zm-6.322 3.708 5.015-5.014-1.06-1.061-5.015 5.015 1.06 1.06Zm1.197 1.371-3.06.873.41 1.442 3.061-.872-.41-1.443Zm-2.134 1.8.873-3.061-1.443-.411-.872 3.06 1.442.412Zm-.123-4.231a1.75 1.75 0 0 0-.447.759l1.443.41a.253.253 0 0 1 .064-.109l-1.06-1.06Zm2.367 2.367a.253.253 0 0 1-.11.064l.411 1.443c.287-.082.548-.236.76-.447l-1.061-1.06Zm5.014-6.321a.923.923 0 0 1 0 1.306l1.061 1.06a2.424 2.424 0 0 0 0-3.427l-1.06 1.06Zm1.061-1.061a2.424 2.424 0 0 0-3.428 0l1.061 1.06a.924.924 0 0 1 1.306 0l1.061-1.06ZM7.25 2v3h1.5V2h-1.5Zm8 0v3h1.5V2h-1.5Zm-1.78 9.47-1.293 1.293 1.06 1.06 1.293-1.293-1.06-1.06Zm-1.647 1.293L10.53 11.47l-1.06 1.06 1.293 1.293 1.06-1.06Zm.354 0a.25.25 0 0 1-.354 0l-1.06 1.06a1.75 1.75 0 0 0 2.474 0l-1.06-1.06ZM11.25 9v4h1.5V9h-1.5Z' })));
};
var ForwardRef$18 = forwardRef(SvgSpringNotesEditDownload);

var SvgSpringNotesEditFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20.25 10a.75.75 0 0 0 1.5 0h-1.5ZM9 22.75a.75.75 0 0 0 0-1.5v1.5Zm3-.75-.721-.206a.75.75 0 0 0 .927.927L12 22Zm1.128-3.495.53.53-.53-.53Zm-.255.434-.722-.205.722.205Zm2.188 2.188.205.722-.205-.722Zm3.082-7.637-.53-.53.53.53ZM8.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm9.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM12 8.94l-.53.53a.75.75 0 0 0 1.06 0L12 8.94Zm.265-.266.53.53-.53-.53Zm-.53 0-.53.53.53-.53Zm-2.652 2.652.53-.53-.53.53Zm1.856 1.856-.53.53.53-.53ZM7 4.25h10v-1.5H7v1.5ZM3.75 18V7.5h-1.5V18h1.5Zm16.5-10.5V10h1.5V7.5h-1.5ZM9 21.25H7v1.5h2v-1.5ZM2.25 18A4.75 4.75 0 0 0 7 22.75v-1.5A3.25 3.25 0 0 1 3.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5Zm12.98 12.577-5.015 5.015 1.06 1.06 5.015-5.014-1.06-1.061Zm-6.322 3.708 5.015-5.014-1.06-1.061-5.015 5.015 1.06 1.06Zm1.197 1.371-3.06.873.41 1.442 3.061-.872-.41-1.443Zm-2.134 1.8.873-3.061-1.443-.411-.872 3.06 1.442.412Zm-.123-4.231a1.75 1.75 0 0 0-.447.759l1.443.41a.253.253 0 0 1 .064-.109l-1.06-1.06Zm2.367 2.367a.253.253 0 0 1-.11.064l.411 1.443c.287-.082.548-.236.76-.447l-1.061-1.06Zm5.014-6.321a.923.923 0 0 1 0 1.306l1.061 1.06a2.424 2.424 0 0 0 0-3.427l-1.06 1.06Zm1.061-1.061a2.424 2.424 0 0 0-3.428 0l1.061 1.06a.924.924 0 0 1 1.306 0l1.061-1.06ZM7.25 2v3h1.5V2h-1.5Zm8 0v3h1.5V2h-1.5Zm-2.72 7.47.265-.265-1.06-1.061-.265.265 1.06 1.06Zm-1.326-.265.266.265 1.06-1.061-.265-.265-1.06 1.06Zm-2.651 2.651 1.856 1.856 1.06-1.06-1.856-1.856-1.06 1.06Zm5.038 1.856 1.856-1.856-1.06-1.06-1.857 1.856 1.06 1.06Zm.795-4.508c.44.44.44 1.152 0 1.591l1.061 1.061a2.625 2.625 0 0 0 0-3.712l-1.06 1.06Zm1.061-1.06a2.625 2.625 0 0 0-3.712 0l1.06 1.06a1.126 1.126 0 0 1 1.591 0l1.061-1.06Zm-5.834 1.06a1.126 1.126 0 0 1 1.591 0l1.061-1.06a2.625 2.625 0 0 0-3.712 0l1.06 1.06Zm.796 4.508a2.25 2.25 0 0 0 3.182 0l-1.06-1.06a.75.75 0 0 1-1.061 0l-1.061 1.06ZM8.553 8.144a2.625 2.625 0 0 0 0 3.712l1.06-1.06a1.125 1.125 0 0 1 0-1.591l-1.06-1.061Z' })));
};
var ForwardRef$17 = forwardRef(SvgSpringNotesEditFavourite);

var SvgSpringNotesEditMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20.25 10a.75.75 0 0 0 1.5 0h-1.5ZM9 22.75a.75.75 0 0 0 0-1.5v1.5Zm3-.75-.721-.206-.37 1.297 1.297-.37L12 22Zm1.128-3.495.53.53-.53-.53Zm-.255.434-.722-.205.722.205Zm2.188 2.188.205.722-.205-.722Zm3.082-7.637-.53-.53.53.53ZM8.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm9.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM15 11.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-2-6h10v-1.5H7v1.5ZM3.75 18V7.5h-1.5V18h1.5Zm16.5-10.5V10h1.5V7.5h-1.5ZM9 21.25H7v1.5h2v-1.5ZM2.25 18A4.75 4.75 0 0 0 7 22.75v-1.5A3.25 3.25 0 0 1 3.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5Zm12.98 12.577-5.015 5.015 1.06 1.06 5.015-5.014-1.06-1.061Zm-6.322 3.708 5.015-5.014-1.06-1.061-5.015 5.015 1.06 1.06Zm1.197 1.371-3.06.873.41 1.442 3.061-.872-.41-1.443Zm-2.134 1.8.873-3.061-1.443-.411-.872 3.06 1.442.412Zm-.123-4.231a1.75 1.75 0 0 0-.447.759l1.443.41a.253.253 0 0 1 .064-.109l-1.06-1.06Zm2.367 2.367a.253.253 0 0 1-.11.064l.411 1.443c.287-.082.548-.236.76-.447l-1.061-1.06Zm5.014-6.321a.923.923 0 0 1 0 1.306l1.061 1.06a2.424 2.424 0 0 0 0-3.427l-1.06 1.06Zm1.061-1.061a2.424 2.424 0 0 0-3.428 0l1.061 1.06a.924.924 0 0 1 1.306 0l1.061-1.06ZM7.25 2v3h1.5V2h-1.5Zm8 0v3h1.5V2h-1.5ZM15 10.25H9v1.5h6v-1.5Z' })));
};
var ForwardRef$16 = forwardRef(SvgSpringNotesEditMinus);

var SvgSpringNotesEditSearch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20.25 10a.75.75 0 0 0 1.5 0h-1.5ZM9 22.75a.75.75 0 0 0 0-1.5v1.5Zm3-.75-.721-.206-.37 1.297 1.297-.37L12 22Zm1.128-3.495.53.53-.53-.53Zm-.255.434-.722-.205.722.205Zm2.188 2.188.205.722-.205-.722Zm3.082-7.637-.53-.53.53.53ZM8.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm9.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-4.72 8.53a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-2.06-.06a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM7 4.25h10v-1.5H7v1.5ZM3.75 18V7.5h-1.5V18h1.5Zm16.5-10.5V10h1.5V7.5h-1.5ZM9 21.25H7v1.5h2v-1.5ZM2.25 18A4.75 4.75 0 0 0 7 22.75v-1.5A3.25 3.25 0 0 1 3.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5Zm12.98 12.577-5.015 5.015 1.06 1.06 5.015-5.014-1.06-1.061Zm-6.322 3.708 5.015-5.014-1.06-1.061-5.015 5.015 1.06 1.06Zm1.197 1.371-3.06.873.41 1.442 3.061-.872-.41-1.443Zm-2.134 1.8.873-3.061-1.443-.411-.872 3.06 1.442.412Zm-.123-4.231a1.75 1.75 0 0 0-.447.759l1.443.41a.253.253 0 0 1 .064-.109l-1.06-1.06Zm2.367 2.367a.253.253 0 0 1-.11.064l.411 1.443c.287-.082.548-.236.76-.447l-1.061-1.06Zm5.014-6.321a.923.923 0 0 1 0 1.306l1.061 1.06a2.424 2.424 0 0 0 0-3.427l-1.06 1.06Zm1.061-1.061a2.424 2.424 0 0 0-3.428 0l1.061 1.06a.924.924 0 0 1 1.306 0l1.061-1.06ZM7.25 2v3h1.5V2h-1.5Zm8 0v3h1.5V2h-1.5Zm-6.5 9A3.25 3.25 0 0 0 12 14.25v-1.5A1.75 1.75 0 0 1 10.25 11h-1.5ZM12 14.25A3.25 3.25 0 0 0 15.25 11h-1.5A1.75 1.75 0 0 1 12 12.75v1.5ZM15.25 11A3.25 3.25 0 0 0 12 7.75v1.5c.966 0 1.75.784 1.75 1.75h1.5ZM12 7.75A3.25 3.25 0 0 0 8.75 11h1.5c0-.966.784-1.75 1.75-1.75v-1.5Zm-2.53 4.72-1 1 1.06 1.06 1-1-1.06-1.06Z' })));
};
var ForwardRef$15 = forwardRef(SvgSpringNotesEditSearch);

var SvgSpringNotesEditUpload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20.25 10a.75.75 0 0 0 1.5 0h-1.5ZM9 22.75a.75.75 0 0 0 0-1.5v1.5Zm3-.75-.721-.206-.37 1.297 1.297-.37L12 22Zm1.128-3.495.53.53-.53-.53Zm-.255.434-.722-.205.722.205Zm2.188 2.188.205.722-.205-.722Zm3.082-7.637-.53-.53.53.53ZM8.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm9.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-1.78 6.116a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-.763-1.823.53-.53-.53.53Zm-1.414 0 .53.53-.53-.53Zm-1.823.763a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm1.78 3.53a.75.75 0 0 0 1.5 0h-1.5Zm1.5-4a.75.75 0 0 0-1.5 0h1.5ZM7 4.25h10v-1.5H7v1.5ZM3.75 18V7.5h-1.5V18h1.5Zm16.5-10.5V10h1.5V7.5h-1.5ZM9 21.25H7v1.5h2v-1.5ZM2.25 18A4.75 4.75 0 0 0 7 22.75v-1.5A3.25 3.25 0 0 1 3.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5Zm12.98 12.577-5.015 5.015 1.06 1.06 5.015-5.014-1.06-1.061Zm-6.322 3.708 5.015-5.014-1.06-1.061-5.015 5.015 1.06 1.06Zm1.197 1.371-3.06.873.41 1.442 3.061-.872-.41-1.443Zm-2.134 1.8.873-3.061-1.443-.411-.872 3.06 1.442.412Zm-.123-4.231a1.75 1.75 0 0 0-.447.759l1.443.41a.253.253 0 0 1 .064-.109l-1.06-1.06Zm2.367 2.367a.253.253 0 0 1-.11.064l.411 1.443c.287-.082.548-.236.76-.447l-1.061-1.06Zm5.014-6.321a.923.923 0 0 1 0 1.306l1.061 1.06a2.424 2.424 0 0 0 0-3.427l-1.06 1.06Zm1.061-1.061a2.424 2.424 0 0 0-3.428 0l1.061 1.06a.924.924 0 0 1 1.306 0l1.061-1.06ZM7.25 2v3h1.5V2h-1.5Zm8 0v3h1.5V2h-1.5Zm-.72 8.056-1.293-1.293-1.06 1.06 1.293 1.293 1.06-1.06Zm-3.767-1.293L9.47 10.056l1.06 1.06 1.293-1.293-1.06-1.06Zm2.474 0a1.75 1.75 0 0 0-2.474 0l1.06 1.06a.25.25 0 0 1 .354 0l1.06-1.06Zm-.487 4.823v-4h-1.5v4h1.5Z' })));
};
var ForwardRef$14 = forwardRef(SvgSpringNotesEditUpload);

var SvgSpringNotesEdit = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20.25 10a.75.75 0 0 0 1.5 0h-1.5ZM9 22.75a.75.75 0 0 0 0-1.5v1.5Zm3-.75-.721-.206-.37 1.297 1.297-.37L12 22Zm1.128-3.495.53.53-.53-.53Zm-.255.434-.722-.205.722.205Zm2.188 2.188.205.722-.205-.722Zm3.082-7.637-.53-.53.53.53ZM8.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm9.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM7 4.25h10v-1.5H7v1.5ZM3.75 18V7.5h-1.5V18h1.5Zm16.5-10.5V10h1.5V7.5h-1.5ZM9 21.25H7v1.5h2v-1.5ZM2.25 18A4.75 4.75 0 0 0 7 22.75v-1.5A3.25 3.25 0 0 1 3.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5Zm12.98 12.577-5.015 5.015 1.06 1.06 5.015-5.014-1.06-1.061Zm-6.322 3.708 5.015-5.014-1.06-1.061-5.015 5.015 1.06 1.06Zm1.197 1.371-3.06.873.41 1.442 3.061-.872-.41-1.443Zm-2.134 1.8.873-3.061-1.443-.411-.872 3.06 1.442.412Zm-.123-4.231a1.75 1.75 0 0 0-.447.759l1.443.41a.253.253 0 0 1 .064-.109l-1.06-1.06Zm2.367 2.367a.253.253 0 0 1-.11.064l.411 1.443c.287-.082.548-.236.76-.447l-1.061-1.06Zm5.014-6.321a.923.923 0 0 1 0 1.306l1.061 1.06a2.424 2.424 0 0 0 0-3.427l-1.06 1.06Zm1.061-1.061a2.424 2.424 0 0 0-3.428 0l1.061 1.06a.924.924 0 0 1 1.306 0l1.061-1.06ZM7.25 2v3h1.5V2h-1.5Zm8 0v3h1.5V2h-1.5Z' })));
};
var ForwardRef$13 = forwardRef(SvgSpringNotesEdit);

var SvgSpringNotesFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-6.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM12 10.94l-.53.53a.75.75 0 0 0 1.06 0l-.53-.53Zm.265-.266.53.53-.53-.53Zm-.53 0-.53.53.53-.53Zm-2.652 2.652.53-.53-.53.53Zm1.856 1.856-.53.53.53-.53ZM7 4.25h10v-1.5H7v1.5ZM20.25 7.5V18h1.5V7.5h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V7.5h-1.5V18h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5ZM15.25 2v3h1.5V2h-1.5Zm-8 0v3h1.5V2h-1.5Zm5.28 9.47.265-.266-1.06-1.06-.265.265 1.06 1.06Zm-1.326-.266.266.266 1.06-1.061-.265-.265-1.06 1.06Zm-2.651 2.652 1.856 1.856 1.06-1.06-1.856-1.856-1.06 1.06Zm5.038 1.856 1.856-1.856-1.06-1.06-1.857 1.856 1.06 1.06Zm.795-4.508c.44.44.44 1.152 0 1.591l1.061 1.061a2.625 2.625 0 0 0 0-3.712l-1.06 1.06Zm1.061-1.06a2.625 2.625 0 0 0-3.712 0l1.06 1.06a1.126 1.126 0 0 1 1.591 0l1.061-1.06Zm-5.834 1.06a1.126 1.126 0 0 1 1.591 0l1.061-1.06a2.625 2.625 0 0 0-3.712 0l1.06 1.06Zm.796 4.508a2.25 2.25 0 0 0 3.182 0l-1.06-1.06a.75.75 0 0 1-1.061 0l-1.061 1.06Zm-1.856-5.568a2.625 2.625 0 0 0 0 3.712l1.06-1.06a1.125 1.125 0 0 1 0-1.591l-1.06-1.061Z' })));
};
var ForwardRef$12 = forwardRef(SvgSpringNotesFavourite);

var SvgSpringNotesList = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M17 13.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm6-2.5a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm6 9.5a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5ZM16.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-6.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM7 4.25h10v-1.5H7v1.5ZM20.25 7.5V18h1.5V7.5h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V7.5h-1.5V18h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5Zm10 9.5h-6v1.5h6v-1.5Zm0-4h-6v1.5h6v-1.5Zm0 8h-6v1.5h6v-1.5ZM15.25 2v3h1.5V2h-1.5Zm-8 0v3h1.5V2h-1.5ZM8.5 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' })));
};
var ForwardRef$11 = forwardRef(SvgSpringNotesList);

var SvgSpringNotesRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-6.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM15 13.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-2-8h10v-1.5H7v1.5ZM20.25 7.5V18h1.5V7.5h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V7.5h-1.5V18h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5ZM15.25 2v3h1.5V2h-1.5Zm-8 0v3h1.5V2h-1.5ZM15 12.25H9v1.5h6v-1.5Z' })));
};
var ForwardRef$10 = forwardRef(SvgSpringNotesRemove);

var SvgSpringNotesSearch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-6.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm7.78 9.97a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-.06 2.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM7 4.25h10v-1.5H7v1.5ZM20.25 7.5V18h1.5V7.5h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V7.5h-1.5V18h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5ZM15.25 2v3h1.5V2h-1.5Zm-8 0v3h1.5V2h-1.5Zm7 11A2.25 2.25 0 0 1 12 15.25v1.5A3.75 3.75 0 0 0 15.75 13h-1.5ZM12 15.25A2.25 2.25 0 0 1 9.75 13h-1.5A3.75 3.75 0 0 0 12 16.75v-1.5ZM9.75 13A2.25 2.25 0 0 1 12 10.75v-1.5A3.75 3.75 0 0 0 8.25 13h1.5ZM12 10.75A2.25 2.25 0 0 1 14.25 13h1.5A3.75 3.75 0 0 0 12 9.25v1.5Zm1.97 5.28 1 1 1.06-1.06-1-1-1.06 1.06Z' })));
};
var ForwardRef$$ = forwardRef(SvgSpringNotesSearch);

var SvgSpringNotesUpload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-6.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm2.22 6.47a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm1.823-.763-.53-.53.53.53Zm1.414 0-.53.53.53-.53Zm.763 1.823a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM11.25 16a.75.75 0 0 0 1.5 0h-1.5Zm1.5-5a.75.75 0 0 0-1.5 0h1.5ZM7 4.25h10v-1.5H7v1.5ZM20.25 7.5V18h1.5V7.5h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V7.5h-1.5V18h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5ZM15.25 2v3h1.5V2h-1.5Zm-8 0v3h1.5V2h-1.5Zm3.28 10.53 1.293-1.293-1.06-1.06L9.47 11.47l1.06 1.06Zm1.647-1.293 1.293 1.293 1.06-1.06-1.293-1.293-1.06 1.06Zm-.354 0a.25.25 0 0 1 .354 0l1.06-1.06a1.75 1.75 0 0 0-2.474 0l1.06 1.06ZM12.75 16v-5h-1.5v5h1.5Z' })));
};
var ForwardRef$_ = forwardRef(SvgSpringNotesUpload);

var SvgSpringNotesWriteEdit = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20.25 10a.75.75 0 0 0 1.5 0h-1.5ZM9 22.75a.75.75 0 0 0 0-1.5v1.5ZM8.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM16 9.75a.75.75 0 0 0 0-1.5v1.5Zm-8-1.5a.75.75 0 0 0 0 1.5v-1.5Zm6 5.5a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5ZM12 22l-.721-.206-.37 1.297 1.297-.37L12 22Zm1.128-3.495.53.53-.53-.53Zm-.255.434-.722-.205.722.205Zm2.188 2.188.205.722-.205-.722Zm3.082-7.637-.53-.53.53.53ZM10 17.75a.75.75 0 0 0 0-1.5v1.5Zm-2-1.5a.75.75 0 0 0 0 1.5v-1.5ZM16.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM7 4.25h10v-1.5H7v1.5ZM3.75 18V7.5h-1.5V18h1.5Zm16.5-10.5V10h1.5V7.5h-1.5ZM9 21.25H7v1.5h2v-1.5ZM2.25 18A4.75 4.75 0 0 0 7 22.75v-1.5A3.25 3.25 0 0 1 3.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5ZM7.25 2v3h1.5V2h-1.5ZM16 8.25H8v1.5h8v-1.5Zm-2 4H8v1.5h6v-1.5Zm5.98 3.077-5.015 5.015 1.06 1.06 5.015-5.014-1.06-1.061Zm-6.322 3.708 5.015-5.014-1.06-1.061-5.015 5.015 1.06 1.06Zm1.197 1.371-3.06.873.41 1.442 3.061-.872-.41-1.443Zm-2.134 1.8.873-3.061-1.443-.411-.872 3.06 1.442.412Zm-.123-4.231a1.75 1.75 0 0 0-.447.759l1.443.41a.253.253 0 0 1 .064-.109l-1.06-1.06Zm2.367 2.367a.253.253 0 0 1-.11.064l.411 1.443c.287-.082.548-.236.76-.447l-1.061-1.06Zm5.014-6.321a.923.923 0 0 1 0 1.306l1.061 1.06a2.424 2.424 0 0 0 0-3.427l-1.06 1.06Zm1.061-1.061a2.424 2.424 0 0 0-3.428 0l1.061 1.06a.924.924 0 0 1 1.306 0l1.061-1.06ZM10 16.25H8v1.5h2v-1.5ZM15.25 2v3h1.5V2h-1.5Z' })));
};
var ForwardRef$Z = forwardRef(SvgSpringNotesWriteEdit);

var SvgSpringNotes = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M7 8.25a.75.75 0 0 0 0 1.5v-1.5Zm10 1.5a.75.75 0 0 0 0-1.5v1.5Zm-10 2.5a.75.75 0 0 0 0 1.5v-1.5Zm10 1.5a.75.75 0 0 0 0-1.5v1.5Zm-10 2.5a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5ZM16.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-6.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM7 4.25h10v-1.5H7v1.5ZM20.25 7.5V18h1.5V7.5h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V7.5h-1.5V18h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5Zm0 7h10v-1.5H7v1.5Zm0 4h10v-1.5H7v1.5Zm0 4h5v-1.5H7v1.5ZM15.25 2v3h1.5V2h-1.5Zm-8 0v3h1.5V2h-1.5Z' })));
};
var ForwardRef$Y = forwardRef(SvgSpringNotes);

var SvgStandbyMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("circle", { cx: 12, cy: 12, r: 4, stroke: 'currentColor', strokeWidth: 1.5 })));
};
var ForwardRef$X = forwardRef(SvgStandbyMode);

var SvgStethoscope = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M22 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M4 3v0a2 2 0 0 0-2 2v3a5 5 0 0 0 5 5v0a5 5 0 0 0 5-5V5a2 2 0 0 0-2-2v0' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M7 13v5.25A3.75 3.75 0 0 0 10.75 22v0a3.75 3.75 0 0 0 3.75-3.75v-5.5A2.75 2.75 0 0 1 17.25 10v0A2.75 2.75 0 0 1 20 12.75V14M10 2v2M4 2v2' })));
};
var ForwardRef$W = forwardRef(SvgStethoscope);

var SvgStorage = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h12Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M2 12h20' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M18 8V6m-4 2V6m4 12v-2m-4 2v-2' })));
};
var ForwardRef$V = forwardRef(SvgStorage);

var SvgSwitch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M16 6a6 6 0 0 1 0 12H8A6 6 0 1 1 8 6h8Z' }),
        React.createElement("circle", { cx: 16, cy: 12, r: 6, stroke: 'currentColor', strokeWidth: 1.5 })));
};
var ForwardRef$U = forwardRef(SvgSwitch);

var SvgSyrup = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M8 3.5A1.5 1.5 0 0 1 9.5 2h5a1.5 1.5 0 0 1 0 3h-5A1.5 1.5 0 0 1 8 3.5Zm-2 8.64a4 4 0 0 1 1.781-3.327l.328-.22A2 2 0 0 0 9 6.93V5h6v1.93a2 2 0 0 0 .89 1.664l.329.219A4 4 0 0 1 18 12.14V18a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-5.86Z' }),
        React.createElement("circle", { cx: 12, cy: 15, r: 3, stroke: 'currentColor', strokeWidth: 1.5 })));
};
var ForwardRef$T = forwardRef(SvgSyrup);

var SvgTablet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 20, height: 16, x: 20, y: 2, stroke: 'currentColor', strokeWidth: 1.5, rx: 4, transform: 'rotate(90 20 2)' }),
        React.createElement("circle", { cx: 12, cy: 19, r: 1, fill: 'currentColor', transform: 'rotate(90 12 19)' })));
};
var ForwardRef$S = forwardRef(SvgTablet);

var SvgTaskCheckPaper = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 18V6a4 4 0 0 1 4-4h5.343a4 4 0 0 1 2.829 1.172l4.656 4.656A4 4 0 0 1 21 10.657V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M14 2v3a4 4 0 0 0 4 4h3' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm9 14 1.753 1.402a1 1 0 0 0 1.377-.122L15 12' })));
};
var ForwardRef$R = forwardRef(SvgTaskCheckPaper);

var SvgTelegram = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm3.909 11.095 15.389-6.65a1 1 0 0 1 1.384 1.074l-2.104 13.276a1 1 0 0 1-1.715.53L13.53 15.77a2 2 0 0 1-.125-2.6l2.318-3.24c.14-.18-.08-.416-.27-.29l-4.846 3.253a4 4 0 0 1-2.801.637l-3.644-.527c-.998-.145-1.179-1.508-.253-1.908Z' })));
};
var ForwardRef$Q = forwardRef(SvgTelegram);

var SvgTestTube = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'm12.889 6.142 4.97 4.97-9.112 9.11a3.514 3.514 0 1 1-4.97-4.97l9.112-9.11Zm4.141-2.485a2.343 2.343 0 1 1 3.313 3.313l-.828.828-3.313-3.313.828-.828Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M12.474 3.242a1.757 1.757 0 0 1 2.485 0l5.798 5.798a1.757 1.757 0 1 1-2.485 2.485l-5.798-5.798a1.757 1.757 0 0 1 0-2.485Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm6 13 9 1' })));
};
var ForwardRef$P = forwardRef(SvgTestTube);

var SvgThermometer = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm9.69 10.174 6.316-6.317a2.925 2.925 0 0 1 4.137 4.137l-6.317 6.316a1.95 1.95 0 0 1-1.103.552l-1.126.161a1.95 1.95 0 0 0-1.103.552l-4.997 4.997a1.463 1.463 0 1 1-2.069-2.069l4.997-4.997a1.95 1.95 0 0 0 .552-1.103l.16-1.126a1.95 1.95 0 0 1 .552-1.103ZM6 16l2 2' })));
};
var ForwardRef$O = forwardRef(SvgThermometer);

var SvgTiktok = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M10 21a6 6 0 0 0 6-6V8.197c.883.51 1.907.803 3 .803h1V6h-1a3 3 0 0 1-3-3h-3v12a3 3 0 1 1-3-3V9a6 6 0 0 0 0 12Z' })));
};
var ForwardRef$N = forwardRef(SvgTiktok);

var SvgTooth = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M8 6.91c1.972 0 3.07-.707 3.945-1.495 1.972-1.776 5.252-4.07 8.318-1.176 4.995 4.714-2.113 16.623-4.683 16.623-2.554 0-.7-7.295-3.58-7.387' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 5.366c-1.978-1.77-5.226-3.994-8.263-1.127C-1.258 8.953 5.85 20.862 8.42 20.862c2.554 0 .7-7.296 3.58-7.387' })));
};
var ForwardRef$M = forwardRef(SvgTooth);

var SvgTransfusion = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M8 14.9c0-4.072 3.837-8.089 5.83-9.9a1.724 1.724 0 0 1 2.34 0C18.164 6.81 22 10.827 22 14.9c0 3.5-2.65 7.1-7 7.1s-7-3.6-7-7.1Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M6.81 3.066C5.06 4.751 2 8.197 2 11.69 2 14.8 4.272 18 8 18c.234 0 .462-.013.683-.037A7.316 7.316 0 0 1 8 14.9c0-3.116 2.246-6.2 4.194-8.287-.973-1.47-2.146-2.72-3.004-3.546a1.7 1.7 0 0 0-2.38 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M19 16c-.314 1.412-1.385 2.688-3 3' })));
};
var ForwardRef$L = forwardRef(SvgTransfusion);

var SvgTwitterPlus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M9 3.5V2h4v5h4v4h-4v5a2 2 0 0 0 2 2h4v4h-4a6 6 0 0 1-6-6v-5H5V7h.5A3.5 3.5 0 0 0 9 3.5Z' })));
};
var ForwardRef$K = forwardRef(SvgTwitterPlus);

var SvgTwitterSparrow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M15.286 4c-2.104 0-3.81 1.79-3.81 4 0 .334.04.658.113.968C9.3 8.968 5.7 8.444 3 4.888c0 8.89 3.6 11.408 5.4 11.556-1.35 1.334-3.454 2.32-5.4 2.506.837.76 3.46 1.017 4.667 1.05 6.241 0 11.314-5.253 11.426-11.778C20.29 7.444 20.86 5.334 21 4.89c-.583.612-1.8.889-2.77.573C17.532 4.569 16.472 4 15.286 4Z' })));
};
var ForwardRef$J = forwardRef(SvgTwitterSparrow);

var SvgTwitter = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M6 4v13a5 5 0 0 0 5 5h5a2 2 0 1 0 0-4h-4a2 2 0 0 1-2-2v-4h6a2 2 0 1 0 0-4h-6V4a2 2 0 1 0-4 0Z' })));
};
var ForwardRef$I = forwardRef(SvgTwitter);

var SvgUndoCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm8.41 10-.186.727A.75.75 0 0 1 7.66 10h.75Zm-.75-2.5a.75.75 0 0 1 1.5 0h-1.5Zm2.899 2.273a.75.75 0 0 1-.37 1.454l.37-1.454Zm-3.285 3.414a.75.75 0 1 1 1.452-.374l-1.452.374Zm4.6 2.063a3.25 3.25 0 0 0 3.25-3.25h1.5a4.75 4.75 0 0 1-4.75 4.75v-1.5Zm3.25-3.25a3.25 3.25 0 0 0-3.25-3.25v-1.5a4.75 4.75 0 0 1 4.75 4.75h-1.5Zm-3.25-3.25a3.248 3.248 0 0 0-2.816 1.626L7.76 9.623a4.748 4.748 0 0 1 4.114-2.374v1.5ZM7.659 10V7.5h1.5V10h-1.5Zm.935-.727 1.965.5-.37 1.454-1.965-.5.37-1.454Zm.132 3.54a3.252 3.252 0 0 0 3.148 2.437v1.5a4.752 4.752 0 0 1-4.6-3.563l1.452-.374Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z' })));
};
var ForwardRef$H = forwardRef(SvgUndoCircle);

var SvgUndo = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M2.25 12a.75.75 0 0 1 1.5 0h-1.5Zm1.954-4.5v.75a.75.75 0 0 1-.75-.75h.75ZM3.454 3a.75.75 0 0 1 1.5 0h-1.5Zm5.171 3.75a.75.75 0 0 1 0 1.5v-1.5ZM3.75 12A8.25 8.25 0 0 0 12 20.25v1.5A9.75 9.75 0 0 1 2.25 12h1.5ZM12 20.25A8.25 8.25 0 0 0 20.25 12h1.5A9.75 9.75 0 0 1 12 21.75v-1.5ZM20.25 12A8.25 8.25 0 0 0 12 3.75v-1.5A9.75 9.75 0 0 1 21.75 12h-1.5ZM12 3.75a8.246 8.246 0 0 0-7.147 4.126l-1.298-.752A9.746 9.746 0 0 1 12 2.25v1.5ZM3.454 7.5V3h1.5v4.5h-1.5Zm.75-.75h4.421v1.5H4.204v-1.5Z' })));
};
var ForwardRef$G = forwardRef(SvgUndo);

var SvgUnlock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 16, height: 14, x: 4, y: 7, stroke: 'currentColor', strokeWidth: 1.5, rx: 4 }),
        React.createElement("circle", { cx: 12, cy: 14, r: 2, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M16 7a4 4 0 0 0-6.646-3' })));
};
var ForwardRef$F = forwardRef(SvgUnlock);

var SvgUploadCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm8 6 4-4m0 0 4 4m-4-4v14' }),
        React.createElement("path", { fill: 'currentColor', d: 'M18.83 8.53a.75.75 0 0 0-1.17.94l1.17-.94Zm-12.49.94a.75.75 0 1 0-1.17-.94l1.17.94ZM19.25 14A7.25 7.25 0 0 1 12 21.25v1.5A8.75 8.75 0 0 0 20.75 14h-1.5ZM12 21.25A7.25 7.25 0 0 1 4.75 14h-1.5A8.75 8.75 0 0 0 12 22.75v-1.5Zm5.66-11.78A7.216 7.216 0 0 1 19.25 14h1.5a8.717 8.717 0 0 0-1.92-5.47l-1.17.94ZM4.75 14c0-1.715.595-3.29 1.59-4.53l-1.17-.94A8.716 8.716 0 0 0 3.25 14h1.5Z' })));
};
var ForwardRef$E = forwardRef(SvgUploadCircle);

var SvgUploadRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm9 6 3-3m0 0 3 3m-3-3v12M7.5 9H7a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-4a4 4 0 0 0-4-4h-.5' })));
};
var ForwardRef$D = forwardRef(SvgUploadRectangle);

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
var ForwardRef$C = forwardRef(SvgUsb);

var SvgUserAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("ellipse", { cx: 10, cy: 17.5, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, rx: 7, ry: 3.5 }),
        React.createElement("circle", { cx: 10, cy: 7, r: 4, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M21 11h-4m2-2v4' })));
};
var ForwardRef$B = forwardRef(SvgUserAdd);

var SvgUserBlock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("ellipse", { cx: 10, cy: 17.5, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, rx: 7, ry: 3.5 }),
        React.createElement("circle", { cx: 10, cy: 7, r: 4, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5 }),
        React.createElement("circle", { cx: 19, cy: 11, r: 3, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm20.5 9.5-3 3' })));
};
var ForwardRef$A = forwardRef(SvgUserBlock);

var SvgUserCircleAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M7 15c2.946-1.32 4.7-1.347 8 0' }),
        React.createElement("circle", { r: 3, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 11 8)' }),
        React.createElement("path", { fill: 'currentColor', d: 'M19.046 12.834a.75.75 0 1 0 1.462.332l-1.462-.332Zm-5.88 7.674a.75.75 0 1 0-.332-1.462l.332 1.462ZM20.75 11A9.75 9.75 0 0 0 11 1.25v1.5A8.25 8.25 0 0 1 19.25 11h1.5ZM11 1.25A9.75 9.75 0 0 0 1.25 11h1.5A8.25 8.25 0 0 1 11 2.75v-1.5ZM1.25 11A9.75 9.75 0 0 0 11 20.75v-1.5A8.25 8.25 0 0 1 2.75 11h-1.5Zm19.258 2.166A9.782 9.782 0 0 0 20.75 11h-1.5a8.26 8.26 0 0 1-.204 1.834l1.462.332ZM11 20.75a9.73 9.73 0 0 0 2.166-.242l-.332-1.462A8.278 8.278 0 0 1 11 19.25v1.5Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M18 16v4m2-2h-4' })));
};
var ForwardRef$z = forwardRef(SvgUserCircleAdd);

var SvgUserCircleBlock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M6.278 14.468a.75.75 0 1 0 .727 1.312l-.727-1.312Zm5.64.332a.75.75 0 0 0 .164-1.49l-.165 1.49Zm-4.913.98A8.21 8.21 0 0 1 11 14.75v-1.5a9.71 9.71 0 0 0-4.722 1.218l.727 1.312ZM11 14.75c.31 0 .617.017.918.05l.164-1.49A9.853 9.853 0 0 0 11 13.25v1.5Z' }),
        React.createElement("circle", { r: 3, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 11 8)' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M19.395 14.25a9 9 0 1 0-5.145 5.145m5.145-5.145A4.002 4.002 0 0 1 18 22a4.002 4.002 0 0 1-3.75-2.605m5.145-5.145a4 4 0 0 0-5.145 5.145' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm20.5 15.5-5 5' })));
};
var ForwardRef$y = forwardRef(SvgUserCircleBlock);

var SvgUserCircleMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M7 15c2.946-1.32 4.7-1.347 8 0' }),
        React.createElement("circle", { r: 3, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 11 8)' }),
        React.createElement("path", { fill: 'currentColor', d: 'M18.696 13.98a.75.75 0 0 0 1.399.541l-1.4-.542Zm-5.53 6.528a.75.75 0 1 0-.332-1.462l.332 1.462ZM20.75 11A9.75 9.75 0 0 0 11 1.25v1.5A8.25 8.25 0 0 1 19.25 11h1.5ZM11 1.25A9.75 9.75 0 0 0 1.25 11h1.5A8.25 8.25 0 0 1 11 2.75v-1.5ZM1.25 11A9.75 9.75 0 0 0 11 20.75v-1.5A8.25 8.25 0 0 1 2.75 11h-1.5Zm18.845 3.521A9.727 9.727 0 0 0 20.75 11h-1.5a8.227 8.227 0 0 1-.554 2.98l1.399.541ZM11 20.75a9.73 9.73 0 0 0 2.166-.242l-.332-1.462A8.278 8.278 0 0 1 11 19.25v1.5Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M20 18h-4' })));
};
var ForwardRef$x = forwardRef(SvgUserCircleMinus);

var SvgUserCircleRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M7 15c2.946-1.32 4.7-1.347 8 0' }),
        React.createElement("circle", { r: 3, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 11 8)' }),
        React.createElement("path", { fill: 'currentColor', d: 'M19.046 12.834a.75.75 0 1 0 1.462.332l-1.462-.332Zm-5.88 7.674a.75.75 0 1 0-.332-1.462l.332 1.462ZM20.75 11A9.75 9.75 0 0 0 11 1.25v1.5A8.25 8.25 0 0 1 19.25 11h1.5ZM11 1.25A9.75 9.75 0 0 0 1.25 11h1.5A8.25 8.25 0 0 1 11 2.75v-1.5ZM1.25 11A9.75 9.75 0 0 0 11 20.75v-1.5A8.25 8.25 0 0 1 2.75 11h-1.5Zm19.258 2.166A9.782 9.782 0 0 0 20.75 11h-1.5a8.26 8.26 0 0 1-.204 1.834l1.462.332ZM11 20.75a9.73 9.73 0 0 0 2.166-.242l-.332-1.462A8.278 8.278 0 0 1 11 19.25v1.5Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm19.414 16.586-2.828 2.828m2.828 0-2.828-2.828' })));
};
var ForwardRef$w = forwardRef(SvgUserCircleRemove);

var SvgUserCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm18.559 19.549.492.566-.492-.566ZM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5ZM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75v1.5Zm0 13a6.253 6.253 0 0 1 5.856 4.061l1.405-.525A7.753 7.753 0 0 0 12 14.25v1.5ZM21.25 12a9.227 9.227 0 0 1-3.183 6.983l.984 1.132A10.727 10.727 0 0 0 22.75 12h-1.5Zm-3.183 6.983A9.212 9.212 0 0 1 12 21.25v1.5c2.697 0 5.164-.994 7.051-2.635l-.984-1.132Zm-11.923.828A6.253 6.253 0 0 1 12 15.75v-1.5a7.753 7.753 0 0 0-7.261 5.036l1.405.525ZM12 21.25a9.212 9.212 0 0 1-6.067-2.267l-.984 1.132A10.712 10.712 0 0 0 12 22.75v-1.5Zm-6.067-2.267A9.227 9.227 0 0 1 2.75 12h-1.5c0 3.24 1.434 6.145 3.699 8.115l.984-1.132Z' }),
        React.createElement("circle", { r: 3, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 12 9)' })));
};
var ForwardRef$v = forwardRef(SvgUserCircle);

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
var ForwardRef$u = forwardRef(SvgUserCommunity);

var SvgUserMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("ellipse", { cx: 10, cy: 17.5, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, rx: 7, ry: 3.5 }),
        React.createElement("circle", { cx: 10, cy: 7, r: 4, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M21 11h-4' })));
};
var ForwardRef$t = forwardRef(SvgUserMinus);

var SvgUserPolygon = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm5.078 5.44.383.645-.383-.646Zm0 13.12.383-.645-.383.646Zm9 2.869.383.645-.383-.645Zm-4.156 0-.383.645.383-.645Zm9-2.868.382.645-.382-.645Zm0-13.122-.383.646.383-.646Zm-4.844-2.868-.382.646.383-.646Zm-4.156 0-.383-.645.383.645Zm3.774.646 4.843 2.868.765-1.291-4.843-2.868-.765 1.29Zm6.554 5.915v5.736h1.5V9.132h-1.5Zm-16.5 5.736V9.132h-1.5v5.736h1.5Zm1.71-8.783 4.844-2.868-.765-1.291-4.843 2.868.765 1.29ZM3.75 9.132c0-1.265.658-2.424 1.71-3.047l-.764-1.291c-1.52.9-2.446 2.556-2.446 4.338h1.5Zm1.71 8.783c-1.052-.623-1.71-1.782-1.71-3.047h-1.5c0 1.782.927 3.438 2.446 4.338l.765-1.29Zm8.236 2.868a3.317 3.317 0 0 1-3.392 0l-.765 1.291a4.82 4.82 0 0 0 4.922 0l-.765-1.29Zm6.554-5.915c0 1.265-.658 2.424-1.71 3.047l.764 1.291c1.52-.9 2.446-2.556 2.446-4.338h-1.5Zm-1.71-8.783c1.052.623 1.71 1.782 1.71 3.047h1.5c0-1.782-.927-3.438-2.446-4.338l-.765 1.29Zm-4.08-4.16a4.817 4.817 0 0 0-4.92 0l.764 1.292a3.317 3.317 0 0 1 3.392 0l.765-1.291Zm4.08 15.99-.621.368.764 1.29.62-.367-.764-1.29Zm-.621.368-4.223 2.5.765 1.291 4.222-2.5-.764-1.291ZM12 15.948c2.404 0 4.514 1.339 5.648 3.349l1.306-.737c-1.382-2.45-3.974-4.112-6.954-4.112v1.5Zm-1.696 4.835-4.223-2.5-.764 1.29 4.222 2.501.765-1.29Zm-4.223-2.5-.62-.368-.765 1.291.62.367.765-1.29Zm.271 1.014c1.134-2.01 3.244-3.35 5.648-3.35v-1.5c-2.98 0-5.572 1.663-6.954 4.113l1.306.737Z' }),
        React.createElement("circle", { r: 3, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 12 9)' })));
};
var ForwardRef$s = forwardRef(SvgUserPolygon);

var SvgUserRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { r: 3, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, transform: 'matrix(1 0 0 -1 12 9)' }),
        React.createElement("path", { fill: 'currentColor', d: 'M6 2.75h12v-1.5H6v1.5ZM21.25 6v12h1.5V6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5ZM21.25 18a3.252 3.252 0 0 1-2.438 3.148l.374 1.453A4.752 4.752 0 0 0 22.75 18h-1.5Zm-2.438 3.148c-.259.066-.53.102-.812.102v1.5c.408 0 .806-.052 1.186-.15l-.374-1.452ZM12 15.75a6.25 6.25 0 0 1 6.249 6.137l1.5-.026A7.75 7.75 0 0 0 12 14.25v1.5Zm-6 5.5c-.281 0-.553-.036-.812-.102L4.814 22.6c.38.097.778.149 1.186.149v-1.5Zm-.812-.102A3.252 3.252 0 0 1 2.75 18h-1.5a4.752 4.752 0 0 0 3.564 4.6l.374-1.452Zm.563.74A6.25 6.25 0 0 1 12 15.75v-1.5a7.75 7.75 0 0 0-7.749 7.611l1.5.026Z' })));
};
var ForwardRef$r = forwardRef(SvgUserRectangle);

var SvgUserRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("ellipse", { cx: 10, cy: 17.5, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, rx: 7, ry: 3.5 }),
        React.createElement("circle", { cx: 10, cy: 7, r: 4, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm17 13 2-2m2-2-2 2m0 0 2 2m-2-2-2-2' })));
};
var ForwardRef$q = forwardRef(SvgUserRemove);

var SvgUser = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("ellipse", { cx: 12, cy: 17.5, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, rx: 7, ry: 3.5 }),
        React.createElement("circle", { cx: 12, cy: 7, r: 4, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5 })));
};
var ForwardRef$p = forwardRef(SvgUser);

var SvgUsersDouble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("ellipse", { cx: 10, cy: 17.5, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, rx: 7, ry: 3.5 }),
        React.createElement("circle", { cx: 10, cy: 7, r: 4, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5 }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.045 10.25a6.033 6.033 0 0 1-1.168 1.33 3.75 3.75 0 1 0 1.465-7.314c.266.518.46 1.081.565 1.674a2.25 2.25 0 0 1-.862 4.31ZM19 17.556a3.639 3.639 0 0 1-.5 1.755 8.644 8.644 0 0 0 1.031-.351c.597-.249 1.13-.564 1.524-.953.397-.39.695-.9.695-1.507 0-.607-.298-1.116-.695-1.508-.394-.388-.927-.703-1.524-.952-1.022-.426-2.34-.7-3.781-.772 1.002.51 1.82 1.149 2.385 1.876.298.083.572.178.82.28.488.204.834.427 1.047.637.21.207.248.355.248.439 0 .084-.038.232-.248.439-.206.203-.537.419-1.002.617Z', clipRule: 'evenodd' })));
};
var ForwardRef$o = forwardRef(SvgUsersDouble);

var SvgUsersTriple = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("ellipse", { cx: 12, cy: 16.5, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, rx: 6, ry: 2.5 }),
        React.createElement("circle", { cx: 12, cy: 8, r: 3, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5 }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.445 13.261c-1.238.052-2.376.275-3.26.628-.504.202-.963.462-1.307.788-.347.327-.628.774-.628 1.323 0 .549.281.996.628 1.323.344.326.803.586 1.308.788.5.2 1.081.358 1.716.467-.494-.533-.803-1.128-.882-1.758a5.336 5.336 0 0 1-.277-.102c-.4-.16-.674-.332-.835-.484-.158-.15-.158-.23-.158-.234 0-.005 0-.084.158-.234.161-.152.435-.324.835-.484.203-.081.429-.155.675-.221.414-.69 1.116-1.305 2.027-1.8ZM19.98 16.82c-.078.63-.388 1.225-.882 1.758a8.57 8.57 0 0 0 1.716-.467c.505-.202.964-.462 1.309-.788.346-.327.627-.774.627-1.323 0-.549-.281-.996-.627-1.323-.345-.326-.804-.586-1.309-.788-.883-.353-2.02-.576-3.26-.627.912.494 1.615 1.109 2.028 1.799.246.066.472.14.675.221.4.16.674.332.835.484.158.15.158.23.158.234 0 .005 0 .084-.158.234-.161.152-.435.324-.835.484-.088.035-.18.069-.277.102Zm-3.466-6.668a5.01 5.01 0 0 1-.851 1.252 2.75 2.75 0 1 0 1.029-5.136c.171.465.276.963.302 1.482H17a1.25 1.25 0 1 1-.486 2.402ZM7.308 6.267a2.75 2.75 0 1 0 1.029 5.136 5.01 5.01 0 0 1-.851-1.25 1.25 1.25 0 1 1-.48-2.402 4.98 4.98 0 0 1 .302-1.484Z', clipRule: 'evenodd' })));
};
var ForwardRef$n = forwardRef(SvgUsersTriple);

var SvgVibrateMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 8, height: 14, x: 8, y: 5, stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: 1.5, rx: 2 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M19 10v4m3-5v6M5 14v-4m-3 5V9' })));
};
var ForwardRef$m = forwardRef(SvgVibrateMode);

var SvgVideoOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm1.75 2 20 20m-20-20 3.101 3.101M15.75 12V9.333l2.671-2.374c1.29-1.147 3.329-.231 3.329 1.495v7.092c0 .705-.34 1.275-.83 1.624M15.75 10V9a4 4 0 0 0-4-4h-3m-3.899.101A4.002 4.002 0 0 0 1.75 9v6a4 4 0 0 0 4 4h6c1.9 0 3.49-1.325 3.899-3.101L4.85 5.1Z' })));
};
var ForwardRef$l = forwardRef(SvgVideoOff);

var SvgVideo = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 14, height: 14, x: 2, y: 5, stroke: 'currentColor', strokeWidth: 1.5, rx: 4 }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'm16 9.333 2.671-2.374C19.961 5.812 22 6.728 22 8.454v7.092c0 1.726-2.039 2.642-3.329 1.495L16 14.667V9.333Z' }),
        React.createElement("circle", { cx: 11, cy: 10, r: 2, stroke: 'currentColor', strokeWidth: 1.5 })));
};
var ForwardRef$k = forwardRef(SvgVideo);

var SvgViewOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm4 4 16 16m-6-5.764A3 3 0 0 1 9.764 10' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M19.608 15.608a22.453 22.453 0 0 0 1.522-1.461 3.085 3.085 0 0 0 0-4.294C19.174 7.795 15.816 5 12 5c-.891 0-1.758.153-2.587.413M6.5 6.803c-1.459.931-2.702 2.074-3.63 3.05a3.085 3.085 0 0 0 0 4.294C4.825 16.205 8.184 19 12 19c1.868 0 3.627-.67 5.165-1.596' })));
};
var ForwardRef$j = forwardRef(SvgViewOff);

var SvgViewPrivacy = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 11, r: 3, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M17 15v-1.5a1.5 1.5 0 0 1 1.5-1.5v0a1.5 1.5 0 0 1 1.5 1.5V15m0 0h-3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M12 18c-3.816 0-7.175-2.795-9.13-4.853a3.085 3.085 0 0 1 0-4.294C4.825 6.795 8.184 4 12 4c3.816 0 7.174 2.795 9.13 4.853.58.61.87 1.377.87 2.145' })));
};
var ForwardRef$i = forwardRef(SvgViewPrivacy);

var SvgView = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M21.13 9.853a3.085 3.085 0 0 1 0 4.294C19.174 16.205 15.816 19 12 19c-3.816 0-7.175-2.795-9.13-4.853a3.085 3.085 0 0 1 0-4.294C4.825 7.795 8.184 5 12 5c3.816 0 7.174 2.795 9.13 4.853Z' }),
        React.createElement("circle", { cx: 12, cy: 12, r: 3, stroke: 'currentColor', strokeWidth: 1.5 })));
};
var ForwardRef$h = forwardRef(SvgView);

var SvgWhatsapp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'square', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.511.335 2.945.936 4.229l-.713 4.396a1 1 0 0 0 1.152 1.146l4.355-.726A9.96 9.96 0 0 0 12 22Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M16 15.111v-.436c0-.542-.33-1.03-.833-1.23l-.466-.187a1.08 1.08 0 0 0-1.368.52s-1.11-.222-2-1.111c-.889-.89-1.11-2-1.11-2a1.08 1.08 0 0 0 .519-1.368l-.187-.466A1.325 1.325 0 0 0 9.325 8H8.89a.889.889 0 0 0-.89.889A7.111 7.111 0 0 0 15.111 16a.889.889 0 0 0 .889-.889Z' })));
};
var ForwardRef$g = forwardRef(SvgWhatsapp);

var SvgWheelChairHuman = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 7v8h3l3.5 6H20' }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M13.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M17.362 19.5A7 7 0 1 1 12 8h3' })));
};
var ForwardRef$f = forwardRef(SvgWheelChairHuman);

var SvgWheelChair = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 7, cy: 16, r: 5, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("circle", { cx: 20.5, cy: 19.5, r: 1.5, stroke: 'currentColor', strokeWidth: 1.5 }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'M12 16h6.5a2 2 0 0 1 2 2v0M4 3h1a2 2 0 0 1 2 2v6m0-5h10a2 2 0 0 1 2 2v8' })));
};
var ForwardRef$e = forwardRef(SvgWheelChair);

var SvgWidgets = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 8, height: 8, x: 2, y: 14, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("rect", { width: 8, height: 8, x: 2, y: 2, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("rect", { width: 8, height: 8, x: 14, y: 14, stroke: 'currentColor', strokeWidth: 1.5, rx: 2 }),
        React.createElement("path", { stroke: 'currentColor', strokeWidth: 1.5, d: 'M13.1 8.071a2 2 0 0 1 0-2.828l2.829-2.829a2 2 0 0 1 2.828 0l2.829 2.829a2 2 0 0 1 0 2.828l-2.829 2.828a2 2 0 0 1-2.828 0L13.1 8.071Z' })));
};
var ForwardRef$d = forwardRef(SvgWidgets);

var SvgWifiSignalBad = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm19.5 10.875 1.464-1.977c.594-.801.513-1.93-.26-2.56-5.448-4.45-11.96-4.45-17.408 0-.773.63-.854 1.759-.26 2.56l7.357 9.932a2 2 0 0 0 3.214 0l.615-.83m7.021-4L17 18.243M17 14l4.243 4.243' })));
};
var ForwardRef$c = forwardRef(SvgWifiSignalBad);

var SvgWifiSignalNoInternet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm19.5 10.875 1.464-1.977c.594-.801.513-1.93-.26-2.56-5.448-4.45-11.96-4.45-17.408 0-.773.63-.854 1.759-.26 2.56l7.357 9.932a2 2 0 0 0 3.214 0l.615-.83M17 10v4m0 3v1' })));
};
var ForwardRef$b = forwardRef(SvgWifiSignalNoInternet);

var SvgWifiSignalOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm3 3 18 18M9.303 5.303c3.86-.873 7.856.139 11.401 3.034.773.631.854 1.76.26 2.561l-2.58 3.485M6.353 6.354a16.024 16.024 0 0 0-3.058 1.983c-.773.631-.854 1.76-.26 2.561l7.357 9.932a2 2 0 0 0 3.214 0l3.074-4.15' })));
};
var ForwardRef$a = forwardRef(SvgWifiSignalOff);

var SvgWifiSignal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M10.393 18.83 3.036 8.898c-.594-.801-.513-1.93.26-2.56 5.448-4.45 11.96-4.45 17.408 0 .773.63.854 1.759.26 2.56l-7.357 9.932a2 2 0 0 1-3.214 0Z' })));
};
var ForwardRef$9 = forwardRef(SvgWifiSignal);

var SvgWifiOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12.445, cy: 19, r: 1, fill: 'currentColor' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'm3 3 18 18m.89-13.334A13.95 13.95 0 0 0 12.445 4c-1.352 0-2.66.192-3.896.55m10.135 6.963a8.969 8.969 0 0 0-5.666-2.495m-3.593 6.358A3.991 3.991 0 0 1 12.445 14c.83 0 1.602.253 2.242.687m-8.48-3.174a9 9 0 0 1 3.288-2.018M3 7.665A14.04 14.04 0 0 1 5.719 5.72' })));
};
var ForwardRef$8 = forwardRef(SvgWifiOff);

var SvgWifi = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 19, r: 1, fill: 'currentColor' }),
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeWidth: 1.5, d: 'M21.445 7.666A13.95 13.95 0 0 0 12 4a13.95 13.95 0 0 0-9.445 3.666m15.684 3.847A8.97 8.97 0 0 0 12 9a8.97 8.97 0 0 0-6.239 2.513m9.259 3.864A3.991 3.991 0 0 0 12 14a3.99 3.99 0 0 0-3.02 1.377' })));
};
var ForwardRef$7 = forwardRef(SvgWifi);

var SvgWirelessCharging = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5, d: 'm13 8-3 4h4l-3 4M4.929 4.929A9.969 9.969 0 0 0 2 11.999a9.969 9.969 0 0 0 2.929 7.072M7.757 7.757A5.981 5.981 0 0 0 6 12c0 1.657.672 3.157 1.757 4.242m11.314 2.829A9.969 9.969 0 0 0 22 12a9.969 9.969 0 0 0-2.929-7.071m-2.828 11.313A5.981 5.981 0 0 0 18 12a5.981 5.981 0 0 0-1.757-4.243' })));
};
var ForwardRef$6 = forwardRef(SvgWirelessCharging);

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

export { ForwardRef$4J as AboutPhone, ForwardRef$4I as Accessibility, ForwardRef$4H as Activity, ForwardRef$4F as AirplaneMode, ForwardRef$4G as AirplaneModeOff, ForwardRef$4E as Ambulance, ForwardRef$4D as AppsCircle, ForwardRef$4C as AppsDoubleCircle, ForwardRef$4B as AppsRectangle, ForwardRef$4A as AppsTripleRectangle, ForwardRef$4x as ArrowBack, ForwardRef$4z as ArrowBackCircle, ForwardRef$4y as ArrowBackRectangle, ForwardRef$4u as ArrowDown, ForwardRef$4w as ArrowDownCircle, ForwardRef$4v as ArrowDownRectangle, ForwardRef$4t as ArrowDropDown, ForwardRef$4s as ArrowDropLeft, ForwardRef$4r as ArrowDropRight, ForwardRef$4q as ArrowDropUp, ForwardRef$4n as ArrowLeft, ForwardRef$4p as ArrowLeftCircle, ForwardRef$4o as ArrowLeftRectangle, ForwardRef$4k as ArrowMove, ForwardRef$4m as ArrowMoveCircle, ForwardRef$4l as ArrowMoveRectangle, ForwardRef$4h as ArrowReturn, ForwardRef$4j as ArrowReturnCircle, ForwardRef$4i as ArrowReturnRectangle, ForwardRef$4e as ArrowRight, ForwardRef$4g as ArrowRightCircle, ForwardRef$4f as ArrowRightRectangle, ForwardRef$4a as ArrowSort, ForwardRef$4d as ArrowSortCircle, ForwardRef$4b as ArrowSortRectangle, ForwardRef$4c as ArrowSortRectangleHalf, ForwardRef$49 as ArrowThickDown, ForwardRef$48 as ArrowThickLeft, ForwardRef$47 as ArrowThickRight, ForwardRef$46 as ArrowThickUp, ForwardRef$42 as ArrowTransfer, ForwardRef$45 as ArrowTransferCircle, ForwardRef$43 as ArrowTransferRectangle, ForwardRef$44 as ArrowTransferRectangleHalf, ForwardRef$3$ as ArrowUp, ForwardRef$41 as ArrowUpCircle, ForwardRef$40 as ArrowUpRectangle, ForwardRef$3Z as Auto, ForwardRef$3_ as AutoRotation, ForwardRef$3O as Battery, ForwardRef$3Y as BatteryAlert, ForwardRef$3W as BatteryCharging, ForwardRef$3X as BatteryChargingFull, ForwardRef$3R as BatteryHorizontal, ForwardRef$3V as BatteryHorizontalCharging, ForwardRef$3U as BatteryHorizontalFull, ForwardRef$3T as BatteryHorizontalLowbet, ForwardRef$3S as BatteryHorizontalSavingMode, ForwardRef$3Q as BatteryLowbet, ForwardRef$3P as BatterySavingMode, ForwardRef$3M as Blood, ForwardRef$3N as BloodPlus, ForwardRef$3J as Bluetooth, ForwardRef$3L as BluetoothConnected, ForwardRef$3K as BluetoothOff, ForwardRef$3I as CallHospital, ForwardRef$3F as Camera, ForwardRef$3H as CameraOff, ForwardRef$3G as CameraSwitch, ForwardRef$3D as Capsule, ForwardRef$3E as CapsuleOpen, ForwardRef$3C as Cardiogram, ForwardRef$3B as Cast, ForwardRef$3q as Clipboard, ForwardRef$3A as ClipboardActivity, ForwardRef$3z as ClipboardAdd, ForwardRef$3y as ClipboardCheck, ForwardRef$3x as ClipboardDelete, ForwardRef$3w as ClipboardDownload, ForwardRef$3v as ClipboardFavourite, ForwardRef$3u as ClipboardList, ForwardRef$3t as ClipboardMinus, ForwardRef$3s as ClipboardSearch, ForwardRef$3r as ClipboardUpload, ForwardRef$3p as ColorInversion, ForwardRef$3o as Computer, ForwardRef$3n as DarkMode, ForwardRef$3m as Devices, ForwardRef$3l as DigitalHealth, ForwardRef$3h as DirectionDown, ForwardRef$3i as DirectionDownDouble, ForwardRef$3k as DirectionDownDoubleCircle, ForwardRef$3j as DirectionDownDoubleRectangle, ForwardRef$3d as DirectionLeft, ForwardRef$3e as DirectionLeftDouble, ForwardRef$3g as DirectionLeftDoubleCircle, ForwardRef$3f as DirectionLeftDoubleRectangle, ForwardRef$39 as DirectionRight, ForwardRef$3a as DirectionRightDouble, ForwardRef$3c as DirectionRightDoubleCircle, ForwardRef$3b as DirectionRightDoubleRectangle, ForwardRef$35 as DirectionUp, ForwardRef$36 as DirectionUpDouble, ForwardRef$38 as DirectionUpDoubleCircle, ForwardRef$37 as DirectionUpDoubleRectangle, ForwardRef$34 as Dna, ForwardRef$33 as DoNotDisturb, ForwardRef$32 as DownloadCircle, ForwardRef$31 as DownloadRectangle, ForwardRef$30 as Dribbble, ForwardRef$2$ as Drive, ForwardRef$2Z as Exchange, ForwardRef$2_ as ExchangeRectangle, ForwardRef$2X as Eye, ForwardRef$2Y as EyeDropper, ForwardRef$2V as Facebook, ForwardRef$2W as FacebookSquare, ForwardRef$2U as Figma, ForwardRef$2T as FilterBigCircle, ForwardRef$2S as FilterSmallCircle, ForwardRef$2R as FingerPrint, ForwardRef$2Q as Fiverr, ForwardRef$2M as Flash, ForwardRef$2P as FlashAuto, ForwardRef$2O as FlashLight, ForwardRef$2N as FlashOff, ForwardRef$2L as GiveBlood, ForwardRef$2K as GivePill, ForwardRef$2J as Gmail, ForwardRef$2H as Google, ForwardRef$2I as GooglePlus, ForwardRef$2F as Gps, ForwardRef$2G as GpsOff, ForwardRef$2E as GraphicEq, ForwardRef$2D as Hangout, ForwardRef$2C as HealthCare, ForwardRef$2B as Heart, ForwardRef$2A as Honey, ForwardRef$2x as Hospital, ForwardRef$2z as HospitalBed, ForwardRef$2y as HospitalPanel, ForwardRef$2v as Hotspot, ForwardRef$2w as HotspotOff, ForwardRef$2u as InCircle, ForwardRef$2t as InRectangle, ForwardRef$2s as Injection, ForwardRef$2r as Instagram, ForwardRef$2q as Laptop, ForwardRef$2p as LightMode, ForwardRef$2o as Linkedln, ForwardRef$2m as Location, ForwardRef$2n as LocationHospital, ForwardRef$2l as Lock, ForwardRef$2k as Mask, ForwardRef$2j as MaximizeCircle, ForwardRef$2h as MaximizeRectangle, ForwardRef$2i as MaximizeRectangleDoted, ForwardRef$2g as MedicalBook, ForwardRef$2f as MedicalInformation, ForwardRef$2e as MedicalService, ForwardRef$2d as MenuCircleHorizontal, ForwardRef$2c as MenuCircleVertical, ForwardRef$2b as MenuHome, ForwardRef$29 as MenuLineHorizontal, ForwardRef$2a as MenuLineHorizontalHalf, ForwardRef$27 as MenuLineVertical, ForwardRef$28 as MenuLineVerticalHalf, ForwardRef$26 as MenuUser, ForwardRef$25 as Messenger, ForwardRef$24 as MinimizeCircle, ForwardRef$22 as MinimizeRectangle, ForwardRef$23 as MinimizeRectangleDoted, ForwardRef$1$ as Mobile, ForwardRef$20 as MobileData, ForwardRef$21 as MobileDataOff, ForwardRef$1Z as Music, ForwardRef$1_ as MusicOff, ForwardRef$1Y as Netflix, ForwardRef$1X as NextArrow, ForwardRef$1W as NightMode, ForwardRef$1T as Notification, ForwardRef$1V as NotificationOff, ForwardRef$1U as NotificationWithCircle, ForwardRef$1S as OutCircle, ForwardRef$1R as OutRectangle, ForwardRef$1Q as Payoneer, ForwardRef$1P as Paypal, ForwardRef$1O as PhoneLock, ForwardRef$1N as PillTablet, ForwardRef$1L as Pills, ForwardRef$1M as PillsCapsule, ForwardRef$1J as Pinterest, ForwardRef$1K as PinterestCircle, ForwardRef$1I as Plaster, ForwardRef$1H as PreviousArrow, ForwardRef$1G as QrScan, ForwardRef$1C as Redo, ForwardRef$1F as RedoCircle, ForwardRef$1E as RedoRectangleLeft, ForwardRef$1D as RedoRectangleRight, ForwardRef$1z as Reload, ForwardRef$1B as ReloadCircle, ForwardRef$1A as ReloadRectangle, ForwardRef$1y as Restart, ForwardRef$1x as RotateLock, ForwardRef$1w as ScreenRotate, ForwardRef$1v as Screenshot, ForwardRef$1u as SdStorage, ForwardRef$1t as Security, ForwardRef$1s as Setting, ForwardRef$1r as ShutDown, ForwardRef$1l as SignalCelluler, ForwardRef$1q as SignalCellulerBad, ForwardRef$1p as SignalCellulerLine, ForwardRef$1n as SignalCellulerNoInternet, ForwardRef$1o as SignalCellulerNoInternetDashed, ForwardRef$1m as SignalCellulerOff, ForwardRef$1k as SimCard, ForwardRef$1j as Skype, ForwardRef$1i as Slack, ForwardRef$1h as Snapchat, ForwardRef$1g as Spotify, ForwardRef$Y as SpringNotes, ForwardRef$1f as SpringNotesAdd, ForwardRef$1e as SpringNotesCheck, ForwardRef$1d as SpringNotesDelete, ForwardRef$1c as SpringNotesDownload, ForwardRef$13 as SpringNotesEdit, ForwardRef$1b as SpringNotesEditAdd, ForwardRef$1a as SpringNotesEditCheck, ForwardRef$19 as SpringNotesEditDelete, ForwardRef$18 as SpringNotesEditDownload, ForwardRef$17 as SpringNotesEditFavourite, ForwardRef$16 as SpringNotesEditMinus, ForwardRef$15 as SpringNotesEditSearch, ForwardRef$14 as SpringNotesEditUpload, ForwardRef$12 as SpringNotesFavourite, ForwardRef$11 as SpringNotesList, ForwardRef$10 as SpringNotesRemove, ForwardRef$$ as SpringNotesSearch, ForwardRef$_ as SpringNotesUpload, ForwardRef$Z as SpringNotesWriteEdit, ForwardRef$X as StandbyMode, ForwardRef$W as Stethoscope, ForwardRef$V as Storage, ForwardRef$U as Switch, ForwardRef$T as Syrup, ForwardRef$S as Tablet, ForwardRef$R as TaskCheckPaper, ForwardRef$Q as Telegram, ForwardRef$P as TestTube, ForwardRef$O as Thermometer, ForwardRef$N as Tiktok, ForwardRef$M as Tooth, ForwardRef$L as Transfusion, ForwardRef$I as Twitter, ForwardRef$K as TwitterPlus, ForwardRef$J as TwitterSparrow, ForwardRef$G as Undo, ForwardRef$H as UndoCircle, ForwardRef$F as Unlock, ForwardRef$E as UploadCircle, ForwardRef$D as UploadRectangle, ForwardRef$C as Usb, ForwardRef$p as User, ForwardRef$B as UserAdd, ForwardRef$A as UserBlock, ForwardRef$v as UserCircle, ForwardRef$z as UserCircleAdd, ForwardRef$y as UserCircleBlock, ForwardRef$x as UserCircleMinus, ForwardRef$w as UserCircleRemove, ForwardRef$u as UserCommunity, ForwardRef$t as UserMinus, ForwardRef$s as UserPolygon, ForwardRef$r as UserRectangle, ForwardRef$q as UserRemove, ForwardRef$o as UsersDouble, ForwardRef$n as UsersTriple, ForwardRef$m as VibrateMode, ForwardRef$k as Video, ForwardRef$l as VideoOff, ForwardRef$h as View, ForwardRef$j as ViewOff, ForwardRef$i as ViewPrivacy, ForwardRef$g as Whatsapp, ForwardRef$e as WheelChair, ForwardRef$f as WheelChairHuman, ForwardRef$d as Widgets, ForwardRef$7 as Wifi, ForwardRef$8 as WifiOff, ForwardRef$9 as WifiSignal, ForwardRef$c as WifiSignalBad, ForwardRef$b as WifiSignalNoInternet, ForwardRef$a as WifiSignalOff, ForwardRef$6 as WirelessCharging, ForwardRef$5 as Youtube, ForwardRef$3 as ZoomIn, ForwardRef$4 as ZoomInRectangle, ForwardRef as ZoomOut, ForwardRef$2 as ZoomOutCircle, ForwardRef$1 as ZoomOutRectangle };
