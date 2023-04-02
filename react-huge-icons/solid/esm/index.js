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
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H8Zm3 16.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Zm1-12a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75ZM12 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$4J = forwardRef(SvgAboutPhone);

var SvgAccessibility = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM4.272 5.82a.75.75 0 0 1 .907-.548c2.681.66 4.716.979 6.754.978 2.04-.001 4.12-.322 6.894-.98a.75.75 0 0 1 .346 1.46c-1.952.463-3.609.772-5.173.92v4.305l.744 5.952a.75.75 0 1 1-1.488.186L12.494 12h-.988l-.762 6.093a.75.75 0 1 1-1.488-.186L10 11.952v-4.29c-1.583-.141-3.236-.455-5.18-.934a.75.75 0 0 1-.548-.908Z', clipRule: 'evenodd' })));
};
var ForwardRef$4I = forwardRef(SvgAccessibility);

var SvgActivity = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6Zm4.685 5.695a.75.75 0 0 0-1.356-.03L7.536 11.25H6a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 .67-.415l1.29-2.578 3.355 7.548a.75.75 0 0 0 1.381-.026l1.812-4.529H18a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0-.696.472l-1.34 3.35-3.279-7.377Z', clipRule: 'evenodd' })));
};
var ForwardRef$4H = forwardRef(SvgActivity);

var SvgAirplaneModeOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.605 6.224V4.395a2.395 2.395 0 0 1 4.79 0v1.829c0 .748.426 1.444 1.126 1.84l4.914 2.784c1.02.578.569 2.006-.635 2.006h-3.886L9.582 6.522c.015-.098.023-.198.023-.298ZM3.53 2.47a.75.75 0 0 0-1.06 1.06l5.067 5.068-3.972 2.25c-1.02.578-.569 2.006.635 2.006h4.207c.662 0 1.198.486 1.198 1.085v2.599c0 .428-.14.847-.403 1.204l-1.886 2.564c-.681.927.433 2.071 1.532 1.573l2.08-.943a2.619 2.619 0 0 1 2.143 0l2.081.943c1.098.498 2.213-.646 1.532-1.573l-1.887-2.564a2.029 2.029 0 0 1-.402-1.204v-1.082l6.075 6.074a.75.75 0 1 0 1.06-1.06l-18-18Z', clipRule: 'evenodd' })));
};
var ForwardRef$4G = forwardRef(SvgAirplaneModeOff);

var SvgAirplaneMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm16.684 20.306-1.887-2.564a2.029 2.029 0 0 1-.402-1.204v-2.6c0-.599.536-1.084 1.198-1.084H19.8c1.203 0 1.655-1.428.635-2.006l-4.914-2.784c-.7-.396-1.126-1.092-1.126-1.84V4.395a2.395 2.395 0 0 0-4.79 0v1.829c0 .748-.426 1.444-1.126 1.84l-4.914 2.784c-1.02.578-.568 2.006.635 2.006h4.207c.662 0 1.198.486 1.198 1.085v2.599c0 .428-.14.847-.402 1.204l-1.887 2.564c-.681.927.433 2.071 1.532 1.573l2.08-.943a2.619 2.619 0 0 1 2.143 0l2.081.943c1.098.498 2.213-.646 1.532-1.573Z' })));
};
var ForwardRef$4F = forwardRef(SvgAirplaneMode);

var SvgAmbulance = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 3h3.5a4 4 0 0 1 4 4v12h-3a3.5 3.5 0 0 0-6.907-.805A3.994 3.994 0 0 1 2 15V7a4 4 0 0 1 4-4Zm0 4.25a.75.75 0 0 1 .75.75v1.25h2.5V8a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0v-1.25h-2.5V12a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 6 7.25Zm9 9.946a3.5 3.5 0 0 1 6.446 1.186c.343-.359.554-.846.554-1.382v-5.383a2 2 0 0 0-.632-1.46l-2.791-2.616A2 2 0 0 0 17.209 7H15v10.196ZM9 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm11 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$4E = forwardRef(SvgAmbulance);

var SvgAppsCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-7-3a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', clipRule: 'evenodd' })));
};
var ForwardRef$4D = forwardRef(SvgAppsCircle);

var SvgAppsDoubleCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V6Zm-8 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H6Z', clipRule: 'evenodd' })));
};
var ForwardRef$4C = forwardRef(SvgAppsDoubleCircle);

var SvgAppsRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16 4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2ZM6 14a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H6ZM4 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm12 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$4B = forwardRef(SvgAppsRectangle);

var SvgAppsTripleRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M4 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm12-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2Zm1 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 14a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H6Z', clipRule: 'evenodd' })));
};
var ForwardRef$4A = forwardRef(SvgAppsTripleRectangle);

var SvgArrowBackCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM9.47 6.47a.75.75 0 1 1 1.06 1.06l-.72.72H13a3.75 3.75 0 1 1 0 7.5H8a.75.75 0 0 1 0-1.5h5a2.25 2.25 0 0 0 0-4.5H9.81l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$4z = forwardRef(SvgArrowBackCircle);

var SvgArrowBackRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4ZM9.47 6.47a.75.75 0 1 1 1.06 1.06l-.72.72H13a3.75 3.75 0 1 1 0 7.5H8a.75.75 0 0 1 0-1.5h5a2.25 2.25 0 0 0 0-4.5H9.81l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$4y = forwardRef(SvgArrowBackRectangle);

var SvgArrowBack = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.6 4.55a.75.75 0 0 0-1.05-.15l-4 3a.75.75 0 0 0 0 1.2l4 3a.75.75 0 1 0 .9-1.2l-2.2-1.65H15a3.25 3.25 0 1 1 0 6.5H5a.75.75 0 0 0 0 1.5h10a4.75 4.75 0 1 0 0-9.5H7.25l2.2-1.65a.75.75 0 0 0 .15-1.05Z', clipRule: 'evenodd' })));
};
var ForwardRef$4x = forwardRef(SvgArrowBack);

var SvgArrowDownCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.53-8.47-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V8a.75.75 0 0 1 1.5 0v6.19l1.72-1.72a.75.75 0 1 1 1.06 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$4w = forwardRef(SvgArrowDownCircle);

var SvgArrowDownRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-2.47 11.53-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V8a.75.75 0 0 1 1.5 0v6.19l1.72-1.72a.75.75 0 1 1 1.06 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$4v = forwardRef(SvgArrowDownRectangle);

var SvgArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.47 18.53a.75.75 0 0 0 1.06 0l4-4a.75.75 0 1 0-1.06-1.06l-2.72 2.72V6a.75.75 0 0 0-1.5 0v10.19l-2.72-2.72a.75.75 0 0 0-1.06 1.06l4 4Z', clipRule: 'evenodd' })));
};
var ForwardRef$4u = forwardRef(SvgArrowDown);

var SvgArrowDropDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15.518 6H8.482C6.938 6 5.977 7.674 6.755 9.008l3.517 6.03c.772 1.323 2.684 1.323 3.456 0l3.518-6.03C18.023 7.674 17.061 6 15.518 6Z' })));
};
var ForwardRef$4t = forwardRef(SvgArrowDropDown);

var SvgArrowDropLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M17 15.518V8.482c0-1.544-1.674-2.505-3.008-1.727l-6.03 3.517c-1.323.772-1.323 2.684 0 3.456l6.03 3.518c1.334.777 3.008-.184 3.008-1.728Z' })));
};
var ForwardRef$4s = forwardRef(SvgArrowDropLeft);

var SvgArrowDropRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M7 15.518V8.482c0-1.544 1.674-2.505 3.008-1.727l6.03 3.517c1.323.772 1.323 2.684 0 3.456l-6.03 3.518C8.674 18.023 7 17.061 7 15.518Z' })));
};
var ForwardRef$4r = forwardRef(SvgArrowDropRight);

var SvgArrowDropUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M8.482 17h7.036c1.543 0 2.505-1.674 1.727-3.008l-3.517-6.03c-.772-1.323-2.684-1.323-3.456 0l-3.517 6.03C5.977 15.326 6.938 17 8.482 17Z' })));
};
var ForwardRef$4q = forwardRef(SvgArrowDropUp);

var SvgArrowLeftCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM10.47 8.47l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72H16a.75.75 0 0 0 0-1.5H9.81l1.72-1.72a.75.75 0 0 0-1.06-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$4p = forwardRef(SvgArrowLeftCircle);

var SvgArrowLeftRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm1.47 9.47a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72H16a.75.75 0 0 0 0-1.5H9.81l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z', clipRule: 'evenodd' })));
};
var ForwardRef$4o = forwardRef(SvgArrowLeftRectangle);

var SvgArrowLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.47 11.47a.75.75 0 0 0 0 1.06l4 4a.75.75 0 1 0 1.06-1.06l-2.72-2.72H18a.75.75 0 0 0 0-1.5H7.81l2.72-2.72a.75.75 0 1 0-1.06-1.06l-4 4Z', clipRule: 'evenodd' })));
};
var ForwardRef$4n = forwardRef(SvgArrowLeft);

var SvgArrowMoveCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm.53-2.47a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72v-3.44H7.81l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 1.06l-.72.72h3.44V7.81l-.72.72a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-.72-.72v3.44h3.44l-.72-.72a.75.75 0 1 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72h-3.44v3.44l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$4m = forwardRef(SvgArrowMoveCircle);

var SvgArrowMoveRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm6.53 16.53a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72v-3.44H7.81l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 1.06l-.72.72h3.44V7.81l-.72.72a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-.72-.72v3.44h3.44l-.72-.72a.75.75 0 1 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72h-3.44v3.44l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$4l = forwardRef(SvgArrowMoveRectangle);

var SvgArrowMove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.47 21.53a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72v-6.44h6.44l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72h-6.44V4.81l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72v6.44H4.81l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72h6.44v6.44l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z', clipRule: 'evenodd' })));
};
var ForwardRef$4k = forwardRef(SvgArrowMove);

var SvgArrowReturnCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm2.53-15.53a.75.75 0 1 0-1.06 1.06l.72.72H11a3.75 3.75 0 1 0 0 7.5h5a.75.75 0 0 0 0-1.5h-5a2.25 2.25 0 0 1 0-4.5h3.19l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$4j = forwardRef(SvgArrowReturnCircle);

var SvgArrowReturnRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-3.47 4.47a.75.75 0 1 0-1.06 1.06l.72.72H11a3.75 3.75 0 1 0 0 7.5h5a.75.75 0 0 0 0-1.5h-5a2.25 2.25 0 0 1 0-4.5h3.19l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$4i = forwardRef(SvgArrowReturnRectangle);

var SvgArrowReturn = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14.4 4.55a.75.75 0 0 1 1.05-.15l4 3a.75.75 0 0 1 0 1.2l-4 3a.75.75 0 1 1-.9-1.2l2.2-1.65H9a3.25 3.25 0 1 0 0 6.5h10a.75.75 0 0 1 0 1.5H9a4.75 4.75 0 1 1 0-9.5h7.75l-2.2-1.65a.75.75 0 0 1-.15-1.05Z', clipRule: 'evenodd' })));
};
var ForwardRef$4h = forwardRef(SvgArrowReturn);

var SvgArrowRightCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm1.53-13.53 3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H8a.75.75 0 0 1 0-1.5h6.19l-1.72-1.72a.75.75 0 0 1 1.06-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$4g = forwardRef(SvgArrowRightCircle);

var SvgArrowRightRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-4.47 6.47 3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H8a.75.75 0 0 1 0-1.5h6.19l-1.72-1.72a.75.75 0 0 1 1.06-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$4f = forwardRef(SvgArrowRightRectangle);

var SvgArrowRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18.53 12.53a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 1 0-1.06 1.06l2.72 2.72H6a.75.75 0 0 0 0 1.5h10.19l-2.72 2.72a.75.75 0 1 0 1.06 1.06l4-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$4e = forwardRef(SvgArrowRight);

var SvgArrowSortCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM10.287 7.307A.75.75 0 0 1 10.75 8v8a.75.75 0 0 1-1.5 0V9.81l-.72.72a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 .817-.163ZM13.25 16a.75.75 0 0 0 1.28.53l2-2a.75.75 0 0 0-1.06-1.06l-.72.72V8a.75.75 0 0 0-1.5 0v8Z', clipRule: 'evenodd' })));
};
var ForwardRef$4d = forwardRef(SvgArrowSortCircle);

var SvgArrowSortRectangleHalf = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-7.713 5.307A.75.75 0 0 1 10.75 8v8a.75.75 0 0 1-1.5 0V9.81l-.72.72a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 .817-.163ZM13.25 16a.75.75 0 0 0 1.28.53l2-2a.75.75 0 0 0-1.06-1.06l-.72.72V8a.75.75 0 0 0-1.5 0v8Z', clipRule: 'evenodd' })));
};
var ForwardRef$4c = forwardRef(SvgArrowSortRectangleHalf);

var SvgArrowSortRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4ZM8.47 7.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72V16a.75.75 0 0 1-1.5 0V9.81l-.72.72a.75.75 0 1 1-1.06-1.06l2-2Zm4 7.06 2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V8a.75.75 0 0 0-1.5 0v6.19l-.72-.72a.75.75 0 1 0-1.06 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$4b = forwardRef(SvgArrowSortRectangle);

var SvgArrowSort = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm12.47 15.53 3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V6a.75.75 0 0 0-1.5 0v10.19l-1.72-1.72a.75.75 0 1 0-1.06 1.06ZM8.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72V18a.75.75 0 0 0 1.5 0V7.81l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z', clipRule: 'evenodd' })));
};
var ForwardRef$4a = forwardRef(SvgArrowSort);

var SvgArrowThickDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15 4v9h1.796a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0l-4.796-5.48A1 1 0 0 1 7.204 13H9V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1Z' })));
};
var ForwardRef$49 = forwardRef(SvgArrowThickDown);

var SvgArrowThickLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20 9h-9V7.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506l5.48 4.796c.647.566 1.659.106 1.659-.753V15h9a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Z' })));
};
var ForwardRef$48 = forwardRef(SvgArrowThickLeft);

var SvgArrowThickRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M4 9h9V7.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506l-5.48 4.796c-.647.566-1.659.106-1.659-.753V15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Z' })));
};
var ForwardRef$47 = forwardRef(SvgArrowThickRight);

var SvgArrowThickUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M9 20v-9H7.204a1 1 0 0 1-.753-1.659l4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H15v9a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z' })));
};
var ForwardRef$46 = forwardRef(SvgArrowThickUp);

var SvgArrowTransferCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-5.307-1.713a.75.75 0 0 1-.693.463H8a.75.75 0 0 1 0-1.5h6.19l-.72-.72a.75.75 0 0 1 1.06-1.06l2 2a.75.75 0 0 1 .163.817ZM8 13.25a.75.75 0 0 0-.53 1.28l2 2a.75.75 0 0 0 1.06-1.06l-.72-.72H16a.75.75 0 0 0 0-1.5H8Z', clipRule: 'evenodd' })));
};
var ForwardRef$45 = forwardRef(SvgArrowTransferCircle);

var SvgArrowTransferRectangleHalf = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-1.307 8.287a.75.75 0 0 1-.693.463H8a.75.75 0 0 1 0-1.5h6.19l-.72-.72a.75.75 0 0 1 1.06-1.06l2 2a.75.75 0 0 1 .163.817ZM8 13.25a.75.75 0 0 0-.53 1.28l2 2a.75.75 0 0 0 1.06-1.06l-.72-.72H16a.75.75 0 0 0 0-1.5H8Z', clipRule: 'evenodd' })));
};
var ForwardRef$44 = forwardRef(SvgArrowTransferRectangleHalf);

var SvgArrowTransferRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-1.47 6.47a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H8a.75.75 0 0 1 0-1.5h6.19l-.72-.72a.75.75 0 0 1 1.06-1.06l2 2Zm-9.06 6a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72H16a.75.75 0 0 0 0-1.5H9.81l.72-.72a.75.75 0 1 0-1.06-1.06l-2 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$43 = forwardRef(SvgArrowTransferRectangle);

var SvgArrowTransfer = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm15.53 11.53 3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H6a.75.75 0 0 0 0 1.5h10.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06ZM5.47 15.47a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H18a.75.75 0 0 0 0-1.5H7.81l1.72-1.72a.75.75 0 1 0-1.06-1.06l-3 3Z', clipRule: 'evenodd' })));
};
var ForwardRef$42 = forwardRef(SvgArrowTransfer);

var SvgArrowUpCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.53-11.53-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72V16a.75.75 0 0 0 1.5 0V9.81l1.72 1.72a.75.75 0 1 0 1.06-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$41 = forwardRef(SvgArrowUpCircle);

var SvgArrowUpRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-5.47 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72V16a.75.75 0 0 0 1.5 0V9.81l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z', clipRule: 'evenodd' })));
};
var ForwardRef$40 = forwardRef(SvgArrowUpRectangle);

var SvgArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.47 5.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06l-2.72-2.72V18a.75.75 0 0 1-1.5 0V7.81l-2.72 2.72a.75.75 0 1 1-1.06-1.06l4-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$3$ = forwardRef(SvgArrowUp);

var SvgAutoRotation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.53 2.984a.75.75 0 1 0-1.06 1.061l7.07 7.071a1.25 1.25 0 0 1 0 1.768l-2.962 2.962v-1.018a.75.75 0 0 0-1.5 0v1.829c0 .966.784 1.75 1.75 1.75h1.829a.75.75 0 0 0 0-1.5h-1.018l2.962-2.963a2.75 2.75 0 0 0 0-3.889l-7.07-7.07ZM6.343 5.593a.75.75 0 1 0 0 1.5h1.018l-2.963 2.962a2.75 2.75 0 0 0 0 3.89l7.072 7.07a.75.75 0 0 0 1.06-1.06l-7.07-7.071a1.25 1.25 0 0 1 0-1.768l2.962-2.962V9.17a.75.75 0 1 0 1.5 0V7.343a1.75 1.75 0 0 0-1.75-1.75H6.343Z', clipRule: 'evenodd' })));
};
var ForwardRef$3_ = forwardRef(SvgAutoRotation);

var SvgAuto = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM9.964 13.75l-1.293 2.585a.75.75 0 1 1-1.342-.67l4-8a.75.75 0 0 1 1.342 0l4 8a.75.75 0 1 1-1.342.67l-1.293-2.586-.036.001H9.964Zm3.322-1.5h-2.572L12 9.677l1.287 2.573Z', clipRule: 'evenodd' })));
};
var ForwardRef$3Z = forwardRef(SvgAuto);

var SvgBatteryAlert = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10 1.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4ZM8 4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H8Zm4.75 5a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0V9ZM12 15.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$3Y = forwardRef(SvgBatteryAlert);

var SvgBatteryChargingFull = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10 1.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4ZM6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6Zm9.494 4.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.753-1.402a.75.75 0 0 1 .938-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z', clipRule: 'evenodd' })));
};
var ForwardRef$3X = forwardRef(SvgBatteryChargingFull);

var SvgBatteryCharging = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10 1.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4ZM6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6Zm3.11 7.161.908-1.108 3.185-3.89c.318-.386.904-.028.751.46l-.878 2.814c-.095.305.118.62.419.62h1.063c.379 0 .582.477.332.782l-4.093 4.997c-.318.387-.904.029-.751-.46l.878-2.813c.095-.305-.118-.62-.419-.62H9.442c-.379 0-.582-.477-.332-.782Z', clipRule: 'evenodd' })));
};
var ForwardRef$3W = forwardRef(SvgBatteryCharging);

var SvgBatteryHorizontalCharging = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14Zm-9.89 6.129.908-.887 3.185-3.11c.318-.31.904-.024.751.367l-.878 2.25c-.095.245.118.497.419.497h1.063c.379 0 .582.381.332.625L9.797 15.87c-.318.31-.904.023-.751-.368l.878-2.25c.095-.245-.118-.497-.419-.497H8.442c-.379 0-.582-.381-.332-.625ZM22.75 10a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$3V = forwardRef(SvgBatteryHorizontalCharging);

var SvgBatteryHorizontalFull = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14Zm-3.506 3.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.753-1.402a.75.75 0 0 1 .938-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07ZM22.75 10a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$3U = forwardRef(SvgBatteryHorizontalFull);

var SvgBatteryHorizontalLowbet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.47 2.47a.75.75 0 0 1 1.06 0L7.06 6l11.805 11.804 2.665 2.666a.75.75 0 1 1-1.06 1.06L16.94 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h.94L2.47 3.53a.75.75 0 0 1 0-1.06ZM22 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75ZM20 8v8c0 .277-.056.541-.158.781L9.06 6H18a2 2 0 0 1 2 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$3T = forwardRef(SvgBatteryHorizontalLowbet);

var SvgBatteryHorizontalSavingMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20 8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Zm-8.25 1a.75.75 0 0 0-1.5 0v2.25H8a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H14a.75.75 0 0 0 0-1.5h-2.25V9Zm11 1a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$3S = forwardRef(SvgBatteryHorizontalSavingMode);

var SvgBatteryHorizontal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Zm2.75 2a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$3R = forwardRef(SvgBatteryHorizontal);

var SvgBatteryLowbet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 2Zm-6.78.47a.75.75 0 0 1 1.06 0l2.666 2.665L18 16.94l3.53 3.53a.75.75 0 1 1-1.06 1.061L18 19.06V20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7.06L2.47 3.53a.75.75 0 0 1 0-1.06ZM8 4h8a2 2 0 0 1 2 2v8.94L7.22 4.157A2 2 0 0 1 8 4Z', clipRule: 'evenodd' })));
};
var ForwardRef$3Q = forwardRef(SvgBatteryLowbet);

var SvgBatterySavingMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10 1.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4ZM8 4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H8Zm4.75 6a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V16a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V10Z', clipRule: 'evenodd' })));
};
var ForwardRef$3P = forwardRef(SvgBatterySavingMode);

var SvgBattery = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10 1.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4ZM8 4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H8Z', clipRule: 'evenodd' })));
};
var ForwardRef$3O = forwardRef(SvgBattery);

var SvgBloodPlus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M4 14.111c0-4.648 4.63-9.233 6.845-11.16a1.743 1.743 0 0 1 2.31 0C15.371 4.877 20 9.462 20 14.11 20 18 16.97 22 12 22c-4.97 0-8-4-8-7.89Zm8-3.86a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V17a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V11a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$3N = forwardRef(SvgBloodPlus);

var SvgBlood = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.845 2.95C8.629 4.878 4 9.463 4 14.111c0 3.89 3.03 7.89 8 7.89 4.97 0 8-4 8-7.89 0-4.648-4.63-9.233-6.845-11.16a1.743 1.743 0 0 0-2.31 0Zm2.012 15.22a.75.75 0 0 0 .287 1.472c2.426-.473 4.005-2.399 4.464-4.48a.75.75 0 1 0-1.464-.324c-.353 1.597-1.54 2.991-3.287 3.331Z', clipRule: 'evenodd' })));
};
var ForwardRef$3M = forwardRef(SvgBlood);

var SvgBluetoothConnected = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.16 4.943a.25.25 0 0 0-.41.192V10.6l3.72-2.48a.25.25 0 0 0 .02-.4l-3.33-2.776ZM11.25 10.6V5.135c0-1.484 1.73-2.294 2.87-1.344l3.331 2.776a1.75 1.75 0 0 1-.15 2.8L13.352 12l3.95 2.633a1.75 1.75 0 0 1 .15 2.8l-3.33 2.776c-1.14.95-2.871.14-2.871-1.344v-5.463l-4.834 3.222a.75.75 0 0 1-.832-1.248L10.648 12 5.584 8.624a.75.75 0 1 1 .832-1.248L11.25 10.6Zm1.5 2.803v5.463a.25.25 0 0 0 .41.192l3.33-2.776a.25.25 0 0 0-.02-.4l-3.72-2.48Zm5.664-2.816L19.828 12l-1.414 1.414L17 12l1.414-1.414ZM7 12l-1.414-1.414L4.172 12l1.414 1.414L7 12Z', clipRule: 'evenodd' })));
};
var ForwardRef$3L = forwardRef(SvgBluetoothConnected);

var SvgBluetoothOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.16 4.943a.25.25 0 0 0-.41.192V10.6l3.72-2.48a.25.25 0 0 0 .021-.4l-3.33-2.776ZM9.25 10.6V5.135c0-1.484 1.73-2.294 2.87-1.344l3.331 2.776a1.75 1.75 0 0 1-.15 2.8L11.353 12l3.95 2.633a1.75 1.75 0 0 1 .15 2.8L12.12 20.21c-1.14.95-2.87.14-2.87-1.344v-5.463l-4.834 3.222a.75.75 0 0 1-.832-1.248L8.648 12 3.584 8.624a.75.75 0 0 1 .832-1.248L9.25 10.6Zm1.5 2.803v5.463a.25.25 0 0 0 .41.192l3.331-2.776a.25.25 0 0 0-.021-.4l-3.72-2.48ZM17 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2.34-3.771a.75.75 0 1 0-1.131.984A4.23 4.23 0 0 1 19.25 12c0 1.089-.409 2.08-1.082 2.833a.75.75 0 1 0 1.118 1A5.731 5.731 0 0 0 20.75 12a5.73 5.73 0 0 0-1.41-3.771Z', clipRule: 'evenodd' })));
};
var ForwardRef$3K = forwardRef(SvgBluetoothOff);

var SvgBluetooth = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M4.53 3.47a.75.75 0 0 0-1.06 1.06l7.353 7.353-5.239 3.493a.75.75 0 1 0 .832 1.248L11.25 13.4v5.464c0 1.484 1.73 2.294 2.87 1.344l2.743-2.285 2.607 2.606a.75.75 0 1 0 1.06-1.06l-16-16Zm11.268 13.389L12.75 13.81v5.054a.25.25 0 0 0 .41.192l2.638-2.198Zm-2.502-6.624 1.081 1.082 2.925-1.95a1.75 1.75 0 0 0 .15-2.8L14.12 3.79c-1.14-.95-2.87-.14-2.87 1.344v3.054l1.5 1.5V5.135a.25.25 0 0 1 .41-.192l3.331 2.776a.25.25 0 0 1-.021.4l-3.174 2.116Z', clipRule: 'evenodd' })));
};
var ForwardRef$3J = forwardRef(SvgBluetooth);

var SvgCallHospital = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-7-2.75a.75.75 0 0 1 .75.75v1.25h2.5V5a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0V7.75h-2.5V9a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75Zm3 14.66v1.312c0 .982-.796 1.778-1.778 1.778C8.368 22 2 15.633 2 7.778 2 6.796 2.796 6 3.778 6H5.09a2 2 0 0 1 1.857 1.257l.592 1.479a2 2 0 0 1-.963 2.531l-.132.066s.445 2.223 2.223 4c1.777 1.778 4 2.223 4 2.223l.066-.132a2 2 0 0 1 2.531-.963l1.479.592A2 2 0 0 1 18 18.91Z', clipRule: 'evenodd' })));
};
var ForwardRef$3I = forwardRef(SvgCallHospital);

var SvgCameraOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-1.801-1.8A4.976 4.976 0 0 1 16 20.5H8a5 5 0 0 1-5-5v-4a5 5 0 0 1 2.9-4.54L2.47 3.53a.75.75 0 0 1 0-1.06ZM12 16.5a3 3 0 0 1-1.89-5.33l4.22 4.22A2.995 2.995 0 0 1 12 16.5Zm9-5a5 5 0 0 0-5-5h-.126a4.002 4.002 0 0 0-7.33-1.016l12.033 12.032A4.984 4.984 0 0 0 21 15.5v-4ZM13 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$3H = forwardRef(SvgCameraOff);

var SvgCameraSwitch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.08 2.31c-1.048-.116-1.83.748-1.83 1.69v.5a.75.75 0 0 0 1.5 0V4c0-.072.03-.129.065-.163a.118.118 0 0 1 .101-.037A8.251 8.251 0 0 1 20.25 12a.75.75 0 0 0 1.5 0c0-5.02-3.793-9.153-8.67-9.69ZM3.75 12a.75.75 0 0 0-1.5 0c0 5.02 3.793 9.152 8.67 9.69 1.048.116 1.83-.748 1.83-1.69v-.5a.75.75 0 0 0-1.5 0v.5c0 .072-.03.129-.065.163a.118.118 0 0 1-.101.037A8.251 8.251 0 0 1 3.75 12ZM17 13.853v-2.118c0-1.462-1.244-2.647-2.778-2.647h-.07C13.906 8.175 13.036 7.5 12 7.5s-1.905.675-2.152 1.588h-.07C8.244 9.088 7 10.273 7 11.735v2.118C7 15.315 8.244 16.5 9.778 16.5h4.444c1.534 0 2.778-1.185 2.778-2.647ZM13.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$3G = forwardRef(SvgCameraSwitch);

var SvgCamera = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 11.5a5 5 0 0 0-5-5h-.126a4.002 4.002 0 0 0-7.748 0H8a5 5 0 0 0-5 5v4a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-4Zm-6 2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM12 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$3F = forwardRef(SvgCamera);

var SvgCapsuleOpen = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3 8.242A3 3 0 0 1 7.243 4l2.828 2.828-4.242 4.243L3 8.242ZM12 15c.828 0 1.5-.396 1.5-1.5 0-1.105-1.5-2.5-1.5-2.5s-1.5 1.395-1.5 2.5c0 1.104.672 1.5 1.5 1.5Zm-2.5 4.5c0 1.104-.672 1.5-1.5 1.5s-1.5-.396-1.5-1.5C6.5 18.395 8 17 8 17s1.5 1.395 1.5 2.5Zm8 0c0 1.104-.672 1.5-1.5 1.5s-1.5-.396-1.5-1.5c0-1.105 1.5-2.5 1.5-2.5s1.5 1.395 1.5 2.5ZM21 4a3 3 0 0 1 0 4.242l-2.829 2.829-4.242-4.243L16.757 4A3 3 0 0 1 21 4Z', clipRule: 'evenodd' })));
};
var ForwardRef$3E = forwardRef(SvgCapsuleOpen);

var SvgCapsule = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm16.849 15.801 2.36-2.36a6.117 6.117 0 1 0-8.65-8.65l-2.36 2.36c.03.023.06.048.089.076l8.485 8.485a.746.746 0 0 1 .076.09Zm-1.048 1.048a.764.764 0 0 1-.089-.076L7.227 8.288a.755.755 0 0 1-.076-.09l-2.36 2.36a6.117 6.117 0 0 0 8.65 8.65l2.36-2.359Zm.618-10.33a.75.75 0 0 1 1.061 0 3.75 3.75 0 0 1 0 5.304.75.75 0 1 1-1.06-1.06 2.25 2.25 0 0 0 0-3.182.75.75 0 0 1 0-1.061Z', clipRule: 'evenodd' })));
};
var ForwardRef$3D = forwardRef(SvgCapsule);

var SvgCardiogram = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm12 5.524.765-.822c2.113-2.27 5.538-2.27 7.65 0 1.649 1.771 2.011 4.4 1.088 6.548H16a.75.75 0 0 0-.624.334L14 13.648l-3.376-5.064a.75.75 0 0 0-1.248 0L7.599 11.25H2.497c-.923-2.148-.56-4.777 1.087-6.548 2.113-2.27 5.538-2.27 7.651 0l.765.822ZM3.431 12.75c.05.058.101.115.153.172l6.886 7.397a2.06 2.06 0 0 0 3.06 0l6.886-7.397a5.62 5.62 0 0 0 .153-.172h-4.168l-1.777 2.666a.75.75 0 0 1-1.248 0L10 10.352l-1.376 2.064A.75.75 0 0 1 8 12.75H3.431Z', clipRule: 'evenodd' })));
};
var ForwardRef$3C = forwardRef(SvgCardiogram);

var SvgCast = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 3h12a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4h-3.535C13.995 13.332 8.842 8.5 2 8.5V7a4 4 0 0 1 4-4Zm-4.75 8a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75a.75.75 0 0 1-1.5 0A9.25 9.25 0 0 0 2 11.75a.75.75 0 0 1-.75-.75ZM2 14.25a.75.75 0 0 0 0 1.5c2.9 0 5.25 2.35 5.25 5.25a.75.75 0 0 0 1.5 0A6.75 6.75 0 0 0 2 14.25Zm0 4a.75.75 0 0 0 0 1.5c.69 0 1.25.56 1.25 1.25a.75.75 0 0 0 1.5 0A2.75 2.75 0 0 0 2 18.25Z', clipRule: 'evenodd' })));
};
var ForwardRef$3B = forwardRef(SvgCast);

var SvgClipboardActivity = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10 2a2 2 0 1 0 0 4h4a2 2 0 1 0 0-4h-4ZM6.5 4.03A4 4 0 0 0 3 8v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V8a4 4 0 0 0-3.5-3.969A3.5 3.5 0 0 1 14 7.5h-4a3.5 3.5 0 0 1-3.5-3.47Zm4.62 6.23a.75.75 0 0 1 .55.405l1.536 3.069 1.264-1.264a.75.75 0 0 1 .53-.22h2a.75.75 0 0 1 0 1.5h-1.69l-1.78 1.78a.75.75 0 0 1-1.2-.195l-1.536-3.069L9.53 13.53a.75.75 0 0 1-.53.22H7a.75.75 0 0 1 0-1.5h1.69l1.78-1.78a.75.75 0 0 1 .65-.21Z', clipRule: 'evenodd' })));
};
var ForwardRef$3A = forwardRef(SvgClipboardActivity);

var SvgClipboardAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282 3.5a2 2 0 0 1 2-2h4a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2Zm-1.5.031a4 4 0 0 0-3.5 3.97v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-10a4 4 0 0 0-3.5-3.97 3.5 3.5 0 0 1-3.5 3.47h-4a3.5 3.5 0 0 1-3.5-3.47Zm6.25 6.969a.75.75 0 1 0-1.5 0v2.25h-2.25a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25h2.25a.75.75 0 1 0 0-1.5h-2.25V10.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$3z = forwardRef(SvgClipboardAdd);

var SvgClipboardCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282 3.5a2 2 0 0 1 2-2h4a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2Zm-1.5.031a4 4 0 0 0-3.5 3.97v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-10a4 4 0 0 0-3.5-3.97 3.5 3.5 0 0 1-3.5 3.47h-4a3.5 3.5 0 0 1-3.5-3.47Zm9.064 8.463a.75.75 0 1 0-1.129-.988l-2.87 3.28a.25.25 0 0 1-.344.03L9.75 12.915a.75.75 0 1 0-.937 1.172l1.753 1.402a1.75 1.75 0 0 0 2.41-.214l2.87-3.28Z', clipRule: 'evenodd' })));
};
var ForwardRef$3y = forwardRef(SvgClipboardCheck);

var SvgClipboardDelete = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282 3.5a2 2 0 0 1 2-2h4a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2Zm-1.5.031a4 4 0 0 0-3.5 3.97v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-10a4 4 0 0 0-3.5-3.97 3.5 3.5 0 0 1-3.5 3.47h-4a3.5 3.5 0 0 1-3.5-3.47Zm8.151 8.378a.75.75 0 0 0-1.06-1.06l-1.591 1.59-1.591-1.59a.75.75 0 1 0-1.06 1.06l1.59 1.591-1.59 1.591a.75.75 0 1 0 1.06 1.06l1.59-1.59 1.592 1.59a.75.75 0 0 0 1.06-1.06l-1.59-1.591 1.59-1.591Z', clipRule: 'evenodd' })));
};
var ForwardRef$3x = forwardRef(SvgClipboardDelete);

var SvgClipboardDowload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282 3.5a2 2 0 0 1 2-2h4a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2Zm-1.5.031a4 4 0 0 0-3.5 3.97v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-10a4 4 0 0 0-3.5-3.97 3.5 3.5 0 0 1-3.5 3.47h-4a3.5 3.5 0 0 1-3.5-3.47Zm6.97 10.439-.72.72V10.5a.75.75 0 1 0-1.5 0v4.19l-.72-.72a.75.75 0 0 0-1.06 1.06l1.292 1.293a1.75 1.75 0 0 0 2.475 0l1.293-1.293a.75.75 0 1 0-1.06-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$3w = forwardRef(SvgClipboardDowload);

var SvgClipboardFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282 3.5a2 2 0 0 1 2-2h4a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2Zm-1.5.031a4 4 0 0 0-3.5 3.97v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-10a4 4 0 0 0-3.5-3.97 3.5 3.5 0 0 1-3.5 3.47h-4a3.5 3.5 0 0 1-3.5-3.47Zm5.5 8.151.265-.265a1.875 1.875 0 1 1 2.651 2.652l-1.856 1.856a1.5 1.5 0 0 1-2.121 0l-1.856-1.857a1.875 1.875 0 1 1 2.652-2.651l.265.265Z', clipRule: 'evenodd' })));
};
var ForwardRef$3v = forwardRef(SvgClipboardFavourite);

var SvgClipboardList = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.282 1.5a2 2 0 0 0 0 4h4a2 2 0 1 0 0-4h-4Zm-7 6a4 4 0 0 1 3.5-3.969 3.5 3.5 0 0 0 3.5 3.47h4a3.5 3.5 0 0 0 3.5-3.47 4 4 0 0 1 3.5 3.97v10a4 4 0 0 1-4 4h-10a4 4 0 0 1-4-4v-10Zm8.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 1 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm.75 3.25a.75.75 0 0 0 0 1.5h4a.75.75 0 1 0 0-1.5h-4Zm-.75 4.75a.75.75 0 0 1 .75-.75h4a.75.75 0 1 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm-1.75-8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$3u = forwardRef(SvgClipboardList);

var SvgClipboardMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282 3.5a2 2 0 0 1 2-2h4a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2Zm-1.5.031a4 4 0 0 0-3.5 3.97v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-10a4 4 0 0 0-3.5-3.97 3.5 3.5 0 0 1-3.5 3.47h-4a3.5 3.5 0 0 1-3.5-3.47Zm8.5 10.719a.75.75 0 1 0 0-1.5h-6a.75.75 0 0 0 0 1.5h6Z', clipRule: 'evenodd' })));
};
var ForwardRef$3t = forwardRef(SvgClipboardMinus);

var SvgClipboardSearch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282 3.5a2 2 0 0 1 2-2h4a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2Zm-1.5.031a4 4 0 0 0-3.5 3.97v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-10a4 4 0 0 0-3.5-3.97 3.5 3.5 0 0 1-3.5 3.47h-4a3.5 3.5 0 0 1-3.5-3.47Zm3.25 8.969a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm2.25-3.75a3.75 3.75 0 1 0 2.068 6.879l.901.901a.75.75 0 0 0 1.061-1.06l-.902-.902a3.75 3.75 0 0 0-3.129-5.818Z', clipRule: 'evenodd' })));
};
var ForwardRef$3s = forwardRef(SvgClipboardSearch);

var SvgClipboardUpload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282 3.5a2 2 0 0 1 2-2h4a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2Zm-1.5.031a4 4 0 0 0-3.5 3.97v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-10a4 4 0 0 0-3.5-3.97 3.5 3.5 0 0 1-3.5 3.47h-4a3.5 3.5 0 0 1-3.5-3.47Zm6.97 9.085-.72-.72v4.19a.75.75 0 1 1-1.5 0v-4.19l-.72.72a.75.75 0 0 1-1.06-1.06l1.292-1.293a1.75 1.75 0 0 1 2.475 0l1.293 1.293a.75.75 0 1 1-1.06 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$3r = forwardRef(SvgClipboardUpload);

var SvgClipboard = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282 3.5a2 2 0 0 1 2-2h4a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2Zm-1.5.031a4 4 0 0 0-3.5 3.97v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-10a4 4 0 0 0-3.5-3.97 3.5 3.5 0 0 1-3.5 3.47h-4a3.5 3.5 0 0 1-3.5-3.47Zm1.5 5.219a.75.75 0 1 0 0 1.5h8a.75.75 0 1 0 0-1.5h-8Zm-.75 4.75a.75.75 0 0 1 .75-.75h8a.75.75 0 1 1 0 1.5h-8a.75.75 0 0 1-.75-.75Zm.75 3.25a.75.75 0 0 0 0 1.5h4a.75.75 0 1 0 0-1.5h-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$3q = forwardRef(SvgClipboard);

var SvgColorInversion = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.45 6.824c-1.568 1.88-2.7 4.214-2.7 6.176a7.251 7.251 0 0 0 6.5 7.212V3.883c-.401.13-.857.354-1.35.683-.82.545-1.674 1.329-2.45 2.258Zm1.62-3.507c.945-.63 1.967-1.067 2.93-1.067.963 0 1.985.438 2.931 1.067.961.639 1.92 1.527 2.77 2.546 1.68 2.014 3.049 4.68 3.049 7.137a8.75 8.75 0 1 1-17.5 0c0-2.457 1.368-5.123 3.05-7.137.85-1.02 1.808-1.907 2.77-2.546Z', clipRule: 'evenodd' })));
};
var ForwardRef$3p = forwardRef(SvgColorInversion);

var SvgComputer = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3h-6.25v2.25H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25V19H5a3 3 0 0 1-3-3V5Zm8.25 11a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$3o = forwardRef(SvgComputer);

var SvgDarkMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.25 3.784a8.25 8.25 0 0 0 0 16.432V3.784ZM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Z', clipRule: 'evenodd' })));
};
var ForwardRef$3n = forwardRef(SvgDarkMode);

var SvgDevices = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18.5 4H6a2 2 0 0 0-2 2v9.5h8.5v-8a2 2 0 0 1 2-2H20A1.5 1.5 0 0 0 18.5 4ZM14 9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V9ZM3.5 17h9v3h-9a1.5 1.5 0 0 1 0-3Z', clipRule: 'evenodd' })));
};
var ForwardRef$3m = forwardRef(SvgDevices);

var SvgDigitalHealth = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM9.57 19.845l-3.718-4.598A3.82 3.82 0 0 1 5 12.845v-.173C5 10.644 6.662 9 8.712 9c.985 0 1.93.387 2.625 1.076l.663.655.663-.655A3.733 3.733 0 0 1 15.288 9C17.338 9 19 10.644 19 12.672v.173c0 .873-.3 1.72-.852 2.401l-3.719 4.599c-1.245 1.54-3.613 1.54-4.858 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$3l = forwardRef(SvgDigitalHealth);

var SvgDirectionDownCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM7.4 8.55a.75.75 0 0 1 1.05-.15l2.8 2.1a1.25 1.25 0 0 0 1.5 0l2.8-2.1a.75.75 0 0 1 .9 1.2l-2.8 2.1a2.75 2.75 0 0 1-3.3 0l-2.8-2.1a.75.75 0 0 1-.15-1.05Zm1.05 4.85a.75.75 0 0 0-.9 1.2l2.8 2.1a2.75 2.75 0 0 0 3.3 0l2.8-2.1a.75.75 0 1 0-.9-1.2l-2.8 2.1a1.25 1.25 0 0 1-1.5 0l-2.8-2.1Z', clipRule: 'evenodd' })));
};
var ForwardRef$3k = forwardRef(SvgDirectionDownCircle);

var SvgDirectionDownDoubleRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm1.4 5.55a.75.75 0 0 1 1.05-.15l2.8 2.1a1.25 1.25 0 0 0 1.5 0l2.8-2.1a.75.75 0 0 1 .9 1.2l-2.8 2.1a2.75 2.75 0 0 1-3.3 0l-2.8-2.1a.75.75 0 0 1-.15-1.05Zm1.05 4.85a.75.75 0 0 0-.9 1.2l2.8 2.1a2.75 2.75 0 0 0 3.3 0l2.8-2.1a.75.75 0 1 0-.9-1.2l-2.8 2.1a1.25 1.25 0 0 1-1.5 0l-2.8-2.1Z', clipRule: 'evenodd' })));
};
var ForwardRef$3j = forwardRef(SvgDirectionDownDoubleRectangle);

var SvgDirectionDownDouble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.469 6.414a.75.75 0 1 0-.937 1.172l5 4a.75.75 0 0 0 .937 0l5-4a.75.75 0 1 0-.938-1.172L12 10.04 7.469 6.414Zm0 6a.75.75 0 1 0-.937 1.172l5 4a.75.75 0 0 0 .937 0l5-4a.75.75 0 1 0-.938-1.172L12 16.04l-4.531-3.626Z', clipRule: 'evenodd' })));
};
var ForwardRef$3i = forwardRef(SvgDirectionDownDouble);

var SvgDirectionDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.414 9.532a.75.75 0 0 1 1.055-.118L12 13.04l4.532-3.626a.75.75 0 1 1 .936 1.172l-5 4a.75.75 0 0 1-.937 0l-5-4a.75.75 0 0 1-.117-1.054Z', clipRule: 'evenodd' })));
};
var ForwardRef$3h = forwardRef(SvgDirectionDown);

var SvgDirectionLeftDoubleCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-6.55-4.6a.75.75 0 0 1 .15 1.05l-2.1 2.8a1.25 1.25 0 0 0 0 1.5l2.1 2.8a.75.75 0 0 1-1.2.9l-2.1-2.8a2.75 2.75 0 0 1 0-3.3l2.1-2.8a.75.75 0 0 1 1.05-.15ZM10.6 8.45a.75.75 0 0 0-1.2-.9l-2.1 2.8a2.75 2.75 0 0 0 0 3.3l2.1 2.8a.75.75 0 1 0 1.2-.9l-2.1-2.8a1.25 1.25 0 0 1 0-1.5l2.1-2.8Z', clipRule: 'evenodd' })));
};
var ForwardRef$3g = forwardRef(SvgDirectionLeftDoubleCircle);

var SvgDirectionLeftDoubleRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm10.45 5.4a.75.75 0 0 1 .15 1.05l-2.1 2.8a1.25 1.25 0 0 0 0 1.5l2.1 2.8a.75.75 0 0 1-1.2.9l-2.1-2.8a2.75 2.75 0 0 1 0-3.3l2.1-2.8a.75.75 0 0 1 1.05-.15ZM11.6 8.45a.75.75 0 0 0-1.2-.9l-2.1 2.8a2.75 2.75 0 0 0 0 3.3l2.1 2.8a.75.75 0 1 0 1.2-.9l-2.1-2.8a1.25 1.25 0 0 1 0-1.5l2.1-2.8Z', clipRule: 'evenodd' })));
};
var ForwardRef$3f = forwardRef(SvgDirectionLeftDoubleRectangle);

var SvgDirectionLeftDouble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.586 7.469a.75.75 0 1 0-1.172-.937l-4 5a.75.75 0 0 0 0 .937l4 5a.75.75 0 1 0 1.172-.938L13.96 12l3.626-4.531Zm-6 0a.75.75 0 1 0-1.172-.937l-4 5a.75.75 0 0 0 0 .937l4 5a.75.75 0 1 0 1.172-.938L7.96 12l3.626-4.531Z', clipRule: 'evenodd' })));
};
var ForwardRef$3e = forwardRef(SvgDirectionLeftDouble);

var SvgDirectionLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14.469 6.414a.75.75 0 0 1 .117 1.055L10.96 12l3.626 4.532a.75.75 0 1 1-1.172.936l-4-5a.75.75 0 0 1 0-.937l4-5a.75.75 0 0 1 1.055-.117Z', clipRule: 'evenodd' })));
};
var ForwardRef$3d = forwardRef(SvgDirectionLeft);

var SvgDirectionRightDoubleCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8.55 16.6a.75.75 0 0 1-.15-1.05l2.1-2.8a1.25 1.25 0 0 0 0-1.5l-2.1-2.8a.75.75 0 0 1 1.2-.9l2.1 2.8a2.75 2.75 0 0 1 0 3.3l-2.1 2.8a.75.75 0 0 1-1.05.15Zm4.85-1.05a.75.75 0 0 0 1.2.9l2.1-2.8a2.75 2.75 0 0 0 0-3.3l-2.1-2.8a.75.75 0 1 0-1.2.9l2.1 2.8a1.25 1.25 0 0 1 0 1.5l-2.1 2.8Z', clipRule: 'evenodd' })));
};
var ForwardRef$3c = forwardRef(SvgDirectionRightDoubleCircle);

var SvgDirectionRightDoubleRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm2.55 14.6a.75.75 0 0 1-.15-1.05l2.1-2.8a1.25 1.25 0 0 0 0-1.5l-2.1-2.8a.75.75 0 0 1 1.2-.9l2.1 2.8a2.75 2.75 0 0 1 0 3.3l-2.1 2.8a.75.75 0 0 1-1.05.15Zm4.85-1.05a.75.75 0 0 0 1.2.9l2.1-2.8a2.75 2.75 0 0 0 0-3.3l-2.1-2.8a.75.75 0 1 0-1.2.9l2.1 2.8a1.25 1.25 0 0 1 0 1.5l-2.1 2.8Z', clipRule: 'evenodd' })));
};
var ForwardRef$3b = forwardRef(SvgDirectionRightDoubleRectangle);

var SvgDirectionRightDouble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.414 7.469a.75.75 0 1 1 1.172-.937l4 5a.75.75 0 0 1 0 .937l-4 5a.75.75 0 1 1-1.172-.938L10.04 12 6.414 7.469Zm6 0a.75.75 0 1 1 1.172-.937l4 5a.75.75 0 0 1 0 .937l-4 5a.75.75 0 1 1-1.172-.938L16.04 12l-3.626-4.531Z', clipRule: 'evenodd' })));
};
var ForwardRef$3a = forwardRef(SvgDirectionRightDouble);

var SvgDirectionRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.532 6.414a.75.75 0 0 0-.118 1.055L13.04 12l-3.626 4.532a.75.75 0 1 0 1.172.936l4-5a.75.75 0 0 0 0-.937l-4-5a.75.75 0 0 0-1.054-.117Z', clipRule: 'evenodd' })));
};
var ForwardRef$39 = forwardRef(SvgDirectionRight);

var SvgDirectionUpDoubleCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-5.4 3.45a.75.75 0 0 1-1.05.15l-2.8-2.1a1.25 1.25 0 0 0-1.5 0l-2.8 2.1a.75.75 0 0 1-.9-1.2l2.8-2.1a2.75 2.75 0 0 1 3.3 0l2.8 2.1a.75.75 0 0 1 .15 1.05Zm-1.05-4.85a.75.75 0 0 0 .9-1.2l-2.8-2.1a2.75 2.75 0 0 0-3.3 0l-2.8 2.1a.75.75 0 0 0 .9 1.2l2.8-2.1a1.25 1.25 0 0 1 1.5 0l2.8 2.1Z', clipRule: 'evenodd' })));
};
var ForwardRef$38 = forwardRef(SvgDirectionUpDoubleCircle);

var SvgDirectionUpDoubleRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm10.6 13.45a.75.75 0 0 1-1.05.15l-2.8-2.1a1.25 1.25 0 0 0-1.5 0l-2.8 2.1a.75.75 0 0 1-.9-1.2l2.8-2.1a2.75 2.75 0 0 1 3.3 0l2.8 2.1a.75.75 0 0 1 .15 1.05Zm-1.05-4.85a.75.75 0 0 0 .9-1.2l-2.8-2.1a2.75 2.75 0 0 0-3.3 0l-2.8 2.1a.75.75 0 0 0 .9 1.2l2.8-2.1a1.25 1.25 0 0 1 1.5 0l2.8 2.1Z', clipRule: 'evenodd' })));
};
var ForwardRef$37 = forwardRef(SvgDirectionUpDoubleRectangle);

var SvgDirectionUpDouble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.469 17.586a.75.75 0 1 1-.937-1.172l5-4a.75.75 0 0 1 .937 0l5 4a.75.75 0 1 1-.938 1.172L12 13.96l-4.531 3.626Zm0-6a.75.75 0 1 1-.937-1.172l5-4a.75.75 0 0 1 .937 0l5 4a.75.75 0 1 1-.938 1.172L12 7.96l-4.531 3.626Z', clipRule: 'evenodd' })));
};
var ForwardRef$36 = forwardRef(SvgDirectionUpDouble);

var SvgDirectionUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.586 14.469a.75.75 0 0 1-1.054.117L12 10.96l-4.532 3.626a.75.75 0 1 1-.937-1.172l5-4a.75.75 0 0 1 .938 0l5 4a.75.75 0 0 1 .117 1.055Z', clipRule: 'evenodd' })));
};
var ForwardRef$35 = forwardRef(SvgDirectionUp);

var SvgDna = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.091 1.293a.75.75 0 0 1 .957.457A5.253 5.253 0 0 0 12 5.25c.057 0 .114 0 .17.002a6.88 6.88 0 0 1 .171-.002c2.285 0 4.23-1.46 4.952-3.5a.75.75 0 0 1 1.414.5 6.772 6.772 0 0 1-3.447 3.838 6.777 6.777 0 0 1 2.906 3.162H6.176A6.778 6.778 0 0 1 9.08 6.088 6.772 6.772 0 0 1 5.634 2.25a.75.75 0 0 1 .457-.957Zm-.384 9.457h12.927a6.792 6.792 0 0 1 0 2.5H5.707a6.787 6.787 0 0 1 0-2.5Zm.468 4a6.778 6.778 0 0 0 2.906 3.162 6.772 6.772 0 0 0-3.447 3.838.75.75 0 1 0 1.414.5A5.252 5.252 0 0 1 12 18.75c.057 0 .114 0 .17-.002.057.002.114.002.171.002 2.285 0 4.23 1.46 4.952 3.5a.75.75 0 1 0 1.414-.5 6.772 6.772 0 0 0-3.447-3.838 6.777 6.777 0 0 0 2.906-3.162H6.176Z', clipRule: 'evenodd' })));
};
var ForwardRef$34 = forwardRef(SvgDna);

var SvgDoNotDisturb = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM7 11.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5H7Z', clipRule: 'evenodd' })));
};
var ForwardRef$33 = forwardRef(SvgDoNotDisturb);

var SvgDownloadCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.47 11.53a.75.75 0 1 1 1.06-1.06l2.72 2.72V1a.75.75 0 0 1 1.5 0v12.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4ZM6.34 8.47a.75.75 0 1 0-1.17-.94 8.75 8.75 0 1 0 13.661 0 .75.75 0 0 0-1.17.94 7.25 7.25 0 1 1-11.32 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$32 = forwardRef(SvgDownloadCircle);

var SvgDownloadRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.25 17A4.75 4.75 0 0 0 7 21.75h10A4.75 4.75 0 0 0 21.75 17v-4A4.75 4.75 0 0 0 17 8.25h-.5a.75.75 0 0 0 0 1.5h.5A3.25 3.25 0 0 1 20.25 13v4A3.25 3.25 0 0 1 17 20.25H7A3.25 3.25 0 0 1 3.75 17v-4A3.25 3.25 0 0 1 7 9.75h.5a.75.75 0 0 0 0-1.5H7A4.75 4.75 0 0 0 2.25 13v4Zm6.22-4.47a.75.75 0 1 1 1.06-1.06l1.72 1.72V3a.75.75 0 0 1 1.5 0v10.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3Z', clipRule: 'evenodd' })));
};
var ForwardRef$31 = forwardRef(SvgDownloadRectangle);

var SvgDribbble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.097 13.4c.49 3.5 2.793 6.42 5.928 7.779.137-2.82.72-5.53 1.682-8.07a16.917 16.917 0 0 0-3.176-.299c-1.54 0-3.028.207-4.434.59Zm7.409 8.286c.797.205 1.633.314 2.494.314 2.87 0 5.458-1.21 7.282-3.146-1.99-2.529-4.818-4.448-8.103-5.393a24.86 24.86 0 0 0-1.673 8.225Zm10.74-4.027a9.953 9.953 0 0 0 1.74-6.184 18.435 18.435 0 0 1-3.286.294c-2.2 0-4.304-.387-6.243-1.093a25.44 25.44 0 0 0-.69 1.394c3.395 1.013 6.342 2.987 8.479 5.59Zm1.55-7.674a10.006 10.006 0 0 0-4.05-6.17 26.7 26.7 0 0 0-4.531 5.539 16.75 16.75 0 0 0 5.485.915c1.06 0 2.096-.098 3.097-.284ZM16.405 3.02A9.959 9.959 0 0 0 12 2a9.957 9.957 0 0 0-6.142 2.108 15.716 15.716 0 0 0 5.945 4.682 28.139 28.139 0 0 1 4.601-5.77Zm-11.66 2.1A9.965 9.965 0 0 0 2 11.874a18.339 18.339 0 0 1 4.53-.565c1.29 0 2.548.133 3.758.386.241-.54.5-1.072.775-1.595a17.214 17.214 0 0 1-6.32-4.982Z', clipRule: 'evenodd' })));
};
var ForwardRef$30 = forwardRef(SvgDribbble);

var SvgDrive = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21.192 14.5 15 3H9l3 5.4 3.389 6.1h5.803ZM8.155 4.568 2 16l3 5 2.778-5 3.364-6.056-2.987-5.376ZM19 21H6.716l2.778-5H22l-3 5Z', clipRule: 'evenodd' })));
};
var ForwardRef$2$ = forwardRef(SvgDrive);

var SvgExchangeRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-4.53 4.47a.75.75 0 0 1 1.06 0l2 2A.75.75 0 0 1 16 9.75h-6c-.69 0-1.25.56-1.25 1.25v1a.75.75 0 0 1-1.5 0v-1A2.75 2.75 0 0 1 10 8.25h4.19l-.72-.72a.75.75 0 0 1 0-1.06Zm-6 9.06 2 2a.75.75 0 1 0 1.06-1.06l-.72-.72H14A2.75 2.75 0 0 0 16.75 13v-1a.75.75 0 0 0-1.5 0v1c0 .69-.56 1.25-1.25 1.25H8a.75.75 0 0 0-.53 1.28Z', clipRule: 'evenodd' })));
};
var ForwardRef$2_ = forwardRef(SvgExchangeRectangle);

var SvgExchange = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.53 3.47a.75.75 0 0 0-1.06 1.06l1.72 1.72H9A5.75 5.75 0 0 0 3.25 12v1a.75.75 0 0 0 1.5 0v-1A4.25 4.25 0 0 1 9 7.75h11a.75.75 0 0 0 .53-1.28l-3-3ZM6.47 20.53a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15A5.75 5.75 0 0 0 20.75 12v-1a.75.75 0 0 0-1.5 0v1A4.25 4.25 0 0 1 15 16.25H4a.75.75 0 0 0-.53 1.28l3 3Z', clipRule: 'evenodd' })));
};
var ForwardRef$2Z = forwardRef(SvgExchange);

var SvgEyeDropper = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm13.275 5.436.663.647-5.352 5.352a4 4 0 0 0-1.172 2.829v1.171h1.172a4 4 0 0 0 2.828-1.171l5.387-5.386.675.659a.75.75 0 0 0 1.048-1.073l-.663-.647 1.574-1.574a2 2 0 1 0-2.828-2.829l-1.608 1.608-.676-.659a.75.75 0 0 0-1.048 1.073ZM5.5 22c.828 0 1.5-.395 1.5-1.5C7 19.396 5.5 18 5.5 18S4 19.396 4 20.5c0 1.105.672 1.5 1.5 1.5Z' })));
};
var ForwardRef$2Y = forwardRef(SvgEyeDropper);

var SvgEye = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm7.102 8.836C17.45 8.676 14.883 7 12 7s-5.45 1.675-7.102 3.086a2.487 2.487 0 0 0 0 3.828C6.55 15.324 9.117 17 12 17s5.45-1.675 7.102-3.086a2.487 2.487 0 0 0 0-3.828ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.75 6a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2ZM2.47 4.47a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06Zm19.06 0a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0Zm-18 15.06a.75.75 0 0 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 1.06l-1.5 1.5Zm18-1.06a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 1 1 1.06-1.06l1.5 1.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$2X = forwardRef(SvgEye);

var SvgFacebookSquare = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h4.5v-6H7v-3h3.5v-2a4 4 0 0 1 4-4H17v3h-2.5a1 1 0 0 0-1 1v2H17v3h-3.5v6H18a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z' })));
};
var ForwardRef$2W = forwardRef(SvgFacebookSquare);

var SvgFacebook = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M18 3h-3a5 5 0 0 0-5 5v2H6v4h4v7h4v-7h4v-4h-4V8a1 1 0 0 1 1-1h3V3Z' })));
};
var ForwardRef$2V = forwardRef(SvgFacebook);

var SvgFigma = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9 3a3 3 0 0 0 0 6 3 3 0 1 0 0 6 3 3 0 1 0 3 3v-6a3 3 0 1 0 3-3 3 3 0 1 0 0-6H9Zm6 6a3 3 0 0 0-3 3V9h3Z', clipRule: 'evenodd' })));
};
var ForwardRef$2U = forwardRef(SvgFigma);

var SvgFilterBigCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9 11a3 3 0 1 0-2.905-3.75H3a.75.75 0 0 0 0 1.5h3.095A3.001 3.001 0 0 0 9 11Zm-6 4.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5H3ZM15 19a3.001 3.001 0 0 0 2.905-2.25H21a.75.75 0 0 0 0-1.5h-3.095A3.001 3.001 0 0 0 12 16a3 3 0 0 0 3 3ZM14 7.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7Z', clipRule: 'evenodd' })));
};
var ForwardRef$2T = forwardRef(SvgFilterBigCircle);

var SvgFilterSmallCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.855 6.75a2 2 0 0 1-3.71 0H3a.75.75 0 0 1 0-1.5h7.145a2 2 0 0 1 3.71 0H21a.75.75 0 0 1 0 1.5h-7.145ZM2.25 12a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75ZM17 10a2 2 0 0 1 1.855 1.25H21a.75.75 0 0 1 0 1.5h-2.145A2 2 0 1 1 17 10Zm-5 7.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5h-8ZM2.25 18a.75.75 0 0 1 .75-.75h3.145a2 2 0 1 1 0 1.5H3a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$2S = forwardRef(SvgFilterSmallCircle);

var SvgFingerPrint = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.75 10a6.25 6.25 0 1 1 12.5 0v7a.75.75 0 0 0 1.5 0v-7a7.75 7.75 0 0 0-15.5 0v7a.75.75 0 0 0 1.5 0v-7ZM12 7.25A2.75 2.75 0 0 0 9.25 10v6.515a6.75 6.75 0 0 1-1.977 4.773l-.243.242a.75.75 0 0 1-1.06-1.06l.242-.243a5.25 5.25 0 0 0 1.538-3.712V10a4.25 4.25 0 0 1 8.5 0v6.515a6.75 6.75 0 0 1-1.977 4.773l-.243.242a.75.75 0 1 1-1.06-1.06l.242-.243a5.25 5.25 0 0 0 1.538-3.712V10A2.75 2.75 0 0 0 12 7.25Zm0 2a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$2R = forwardRef(SvgFingerPrint);

var SvgFiverr = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16 3h-4a5 5 0 0 0-5 5v2H4v4h3v7h4v-7h5v7h4V10h-9V8a1 1 0 0 1 1-1h4V3Z' })));
};
var ForwardRef$2Q = forwardRef(SvgFiverr);

var SvgFlashAuto = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19.192 1.712a.75.75 0 0 0-1.384 0l-2.5 6a.75.75 0 0 0 1.384.576l.641-1.538h2.334l.64 1.538a.75.75 0 0 0 1.385-.576l-2.5-6ZM18.5 3.95l.542 1.3h-1.084l.542-1.3ZM12 2 3 13.5h5V22l9-11.5h-5V2Z', clipRule: 'evenodd' })));
};
var ForwardRef$2P = forwardRef(SvgFlashAuto);

var SvgFlashLight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.857 2h10.286c.473 0 .857.384.857.857a5.144 5.144 0 0 1-3 4.677V19a3 3 0 1 1-6 0V7.534a5.144 5.144 0 0 1-3-4.677C6 2.384 6.384 2 6.857 2Zm5.893 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0V9Z', clipRule: 'evenodd' })));
};
var ForwardRef$2O = forwardRef(SvgFlashLight);

var SvgFlashOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19 10.5h-5V2l-3.925 5.015 6.537 6.536L19 10.5ZM4.53 3.47a.75.75 0 0 0-1.06 1.06l4.796 4.797L5 13.5h5V22l4.803-6.137 4.667 4.667a.75.75 0 1 0 1.06-1.06l-16-16Z', clipRule: 'evenodd' })));
};
var ForwardRef$2N = forwardRef(SvgFlashOff);

var SvgFlash = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M5 13.5 14 2v8.5h5L10 22v-8.5H5Z' })));
};
var ForwardRef$2M = forwardRef(SvgFlash);

var SvgGiveBlood = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.868 2.981C15.685 4.113 14 6.072 14 8.056 14 10 15.515 12 18 12c2.485 0 4-2 4-3.944 0-1.984-1.685-3.943-2.868-5.075a1.621 1.621 0 0 0-2.264 0ZM2 10.001h2l6.262 2.739a1.911 1.911 0 0 1 .757 2.906l2.714 1.72a6.001 6.001 0 0 0 2.683.634H18a2 2 0 1 1 0 4H9.889a7.999 7.999 0 0 1-3.578-.845L2 19v-9Z', clipRule: 'evenodd' })));
};
var ForwardRef$2L = forwardRef(SvgGiveBlood);

var SvgGivePill = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16 5a3 3 0 1 1 6 0v2.25h-6V5Zm0 6V8.75h6V11a3 3 0 1 1-6 0ZM2 10h2l6.262 2.74a1.911 1.911 0 0 1 .757 2.906l2.714 1.72a6.001 6.001 0 0 0 2.683.634H18a2 2 0 1 1 0 4H9.889a8 8 0 0 1-3.578-.845L2 19v-9Z', clipRule: 'evenodd' })));
};
var ForwardRef$2K = forwardRef(SvgGivePill);

var SvgGmail = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm2.03 6.512 8.206 5.968a3 3 0 0 0 3.528 0l8.207-5.968A4 4 0 0 0 18 3H6a4 4 0 0 0-3.97 3.512ZM22 8.964l-7.06 5.134a5 5 0 0 1-5.88 0L2 8.964V17a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V8.964Z', clipRule: 'evenodd' })));
};
var ForwardRef$2J = forwardRef(SvgGmail);

var SvgGooglePlus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.75 12a5.75 5.75 0 0 1 9.816-4.066.75.75 0 1 0 1.06-1.06A7.25 7.25 0 1 0 15.75 12a.75.75 0 0 0-.749-.751H8.5a.75.75 0 0 0 0 1.5h5.701A5.751 5.751 0 0 1 2.75 12Zm18-2a.75.75 0 0 0-1.5 0v1.25H18a.75.75 0 0 0 0 1.5h1.25V14a.75.75 0 0 0 1.5 0v-1.25H22a.75.75 0 0 0 0-1.5h-1.25V10Z', clipRule: 'evenodd' })));
};
var ForwardRef$2I = forwardRef(SvgGooglePlus);

var SvgGoogle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M12 13.5v-3h9.888c.074.49.112.99.112 1.5 0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2a9.969 9.969 0 0 1 7.071 2.929L16.95 7.05a7 7 0 1 0 1.89 6.45H12Z' })));
};
var ForwardRef$2H = forwardRef(SvgGoogle);

var SvgGpsOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 1.25a.75.75 0 0 1 .75.75v2.035a8.002 8.002 0 0 1 7.215 7.216L20 11.25h2a.75.75 0 0 1 0 1.5h-2.035a7.949 7.949 0 0 1-.988 3.167l-3.28-3.281a3.75 3.75 0 0 0-4.332-4.332L8.082 5.023a7.95 7.95 0 0 1 3.168-.988V2a.75.75 0 0 1 .75-.75Zm-7.965 10H2a.75.75 0 0 0 0 1.5h2.035a8.002 8.002 0 0 0 7.216 7.215L11.25 20v2a.75.75 0 0 0 1.5 0v-2.035a7.964 7.964 0 0 0 4.352-1.803l3.368 3.368a.75.75 0 1 0 1.06-1.06l-18-18a.75.75 0 0 0-1.06 1.06l3.368 3.368a7.964 7.964 0 0 0-1.803 4.353ZM9.75 12a2.25 2.25 0 0 0 3.22 2.03l1.098 1.099a3.75 3.75 0 0 1-5.197-5.197L9.97 11.03a2.24 2.24 0 0 0-.219.97Z', clipRule: 'evenodd' })));
};
var ForwardRef$2G = forwardRef(SvgGpsOff);

var SvgGps = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.75 2a.75.75 0 0 0-1.5 0v2.035a8.002 8.002 0 0 0-7.215 7.216L4 11.25H2a.75.75 0 0 0 0 1.5h2.035a8.002 8.002 0 0 0 7.216 7.215L11.25 20v2a.75.75 0 0 0 1.5 0v-2.035a8.002 8.002 0 0 0 7.215-7.216l.035.001h2a.75.75 0 0 0 0-1.5h-2.035a8.002 8.002 0 0 0-7.216-7.215L12.75 4V2ZM12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$2F = forwardRef(SvgGps);

var SvgGraphicEq = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75Zm-4 3a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7A.75.75 0 0 1 8 6.25Zm8.75.75a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0V7ZM4 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4A.75.75 0 0 1 4 9.25Zm16.75.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$2E = forwardRef(SvgGraphicEq);

var SvgHangout = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M12 1c-5.248 0-9.5 4.308-9.5 9.625 0 5.042 4.524 9.167 9.5 9.167V23c5.745-2.842 9.5-7.517 9.5-12.375C21.5 5.308 17.248 1 12 1Zm-.452 11c0 1.283-.815 2.292-1.81 2.292V12H7.476V7.875h4.072V12Zm5.428 0c0 1.283-.814 2.292-1.81 2.292V12h-2.261V7.875h4.071V12Z' })));
};
var ForwardRef$2D = forwardRef(SvgHangout);

var SvgHealthCare = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm16 3.402.459-.456a3.258 3.258 0 0 1 4.59 0 3.217 3.217 0 0 1 0 4.566l-4.13 4.11a1.303 1.303 0 0 1-1.837 0l-4.131-4.11a3.217 3.217 0 0 1 0-4.566 3.258 3.258 0 0 1 4.59 0l.459.456ZM2 10h2l6.262 2.74a1.911 1.911 0 0 1 .757 2.906l2.714 1.72a6.001 6.001 0 0 0 2.683.634H18a2 2 0 1 1 0 4H9.889a8 8 0 0 1-3.578-.845L2 19v-9Z', clipRule: 'evenodd' })));
};
var ForwardRef$2C = forwardRef(SvgHealthCare);

var SvgHeart = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M12.765 4.702 12 5.524l-.765-.822c-2.113-2.27-5.538-2.27-7.65 0-2.113 2.27-2.113 5.95 0 8.22l6.885 7.397a2.06 2.06 0 0 0 3.06 0l6.886-7.397c2.112-2.27 2.112-5.95 0-8.22-2.113-2.27-5.538-2.27-7.651 0Z' })));
};
var ForwardRef$2B = forwardRef(SvgHeart);

var SvgHoney = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2.5 16.5 5v5L12 12.5 7.5 10V5L12 2.5Zm-5.5 9L11 14v5l-4.5 2.5L2 19v-5l4.5-2.5ZM22 14l-4.5-2.5L13 14v5l4.5 2.5L22 19v-5Z', clipRule: 'evenodd' })));
};
var ForwardRef$2A = forwardRef(SvgHoney);

var SvgHospitalBed = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-6-2.75a.75.75 0 0 1 .75.75v1.25h1.5V4.5a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0V7.25h-1.5V8.5a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75ZM2.75 9a.75.75 0 0 0-1.5 0v13a.75.75 0 0 0 1.5 0v-3.25H20.5V22a.75.75 0 0 0 1.5 0v-6a2 2 0 0 0-2-2H10v-2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2H2.75V9Z', clipRule: 'evenodd' })));
};
var ForwardRef$2z = forwardRef(SvgHospitalBed);

var SvgHospitalPanel = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6Zm2.75 6a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0v-3.25h6.5V16a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v3.25h-6.5V8Z', clipRule: 'evenodd' })));
};
var ForwardRef$2y = forwardRef(SvgHospitalPanel);

var SvgHospital = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15 17v4.25H9V17a3 3 0 1 1 6 0Zm7 4.25h-2V6a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v15.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5ZM12.75 5a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V11a.75.75 0 0 0 1.5 0V8.75H15a.75.75 0 0 0 0-1.5h-2.25V5Z', clipRule: 'evenodd' })));
};
var ForwardRef$2x = forwardRef(SvgHospital);

var SvgHotspotOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.53 1.47a.75.75 0 0 0-1.06 1.06l3.413 3.413A10.725 10.725 0 0 0 1.25 14c0 2.968 1.204 5.657 3.149 7.601a.75.75 0 1 0 1.06-1.06A9.219 9.219 0 0 1 2.75 14a9.227 9.227 0 0 1 3.196-6.994L7.72 8.78A6.737 6.737 0 0 0 5.25 14a6.73 6.73 0 0 0 1.977 4.773.75.75 0 1 0 1.06-1.06A5.231 5.231 0 0 1 6.75 14a5.24 5.24 0 0 1 2.037-4.152l2.348 2.348a2 2 0 1 0 2.669 2.669l7.666 7.665a.75.75 0 1 0 1.06-1.06L9.418 8.357a.747.747 0 0 0-.023-.023L6.538 5.477a.744.744 0 0 0-.017-.017L2.53 1.47ZM12 4.75a9.231 9.231 0 0 0-3.15.55.75.75 0 0 1-.51-1.41A10.732 10.732 0 0 1 12 3.25c5.937 0 10.75 4.813 10.75 10.75 0 1.284-.226 2.517-.64 3.66a.75.75 0 1 1-1.41-.51c.356-.982.55-2.043.55-3.15A9.25 9.25 0 0 0 12 4.75ZM11.25 8a.75.75 0 0 1 .75-.75A6.75 6.75 0 0 1 18.75 14a.75.75 0 0 1-1.5 0c0-2.9-2.35-5.25-5.25-5.25a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$2w = forwardRef(SvgHotspotOff);

var SvgHotspot = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.75 14a9.25 9.25 0 0 1 18.5 0 9.218 9.218 0 0 1-2.71 6.54.75.75 0 0 0 1.061 1.061A10.719 10.719 0 0 0 22.75 14c0-5.937-4.813-10.75-10.75-10.75S1.25 8.063 1.25 14c0 2.968 1.204 5.657 3.149 7.601a.75.75 0 1 0 1.06-1.06A9.219 9.219 0 0 1 2.75 14Zm4 0a5.25 5.25 0 1 1 8.962 3.712.75.75 0 0 0 1.061 1.061 6.75 6.75 0 1 0-9.546 0 .75.75 0 1 0 1.06-1.06A5.231 5.231 0 0 1 6.75 14ZM12 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z', clipRule: 'evenodd' })));
};
var ForwardRef$2v = forwardRef(SvgHotspot);

var SvgInCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.53 7.47a.75.75 0 1 0-1.06 1.06l2.72 2.72H2a.75.75 0 0 0 0 1.5h12.19l-2.72 2.72a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 0-1.06l-4-4ZM9.47 6.34a.75.75 0 1 1-.94-1.17 8.75 8.75 0 1 1 0 13.661.75.75 0 0 1 .94-1.17 7.25 7.25 0 1 0 0-11.32Z', clipRule: 'evenodd' })));
};
var ForwardRef$2u = forwardRef(SvgInCircle);

var SvgInRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7 2.25A4.75 4.75 0 0 0 2.25 7v10A4.75 4.75 0 0 0 7 21.75h4A4.75 4.75 0 0 0 15.75 17v-.5a.75.75 0 0 0-1.5 0v.5A3.25 3.25 0 0 1 11 20.25H7A3.25 3.25 0 0 1 3.75 17V7A3.25 3.25 0 0 1 7 3.75h4A3.25 3.25 0 0 1 14.25 7v.5a.75.75 0 0 0 1.5 0V7A4.75 4.75 0 0 0 11 2.25H7Zm4.47 6.22a.75.75 0 1 1 1.06 1.06l-1.72 1.72H21a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3Z', clipRule: 'evenodd' })));
};
var ForwardRef$2t = forwardRef(SvgInRectangle);

var SvgInjection = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18.965 2.47a.75.75 0 0 0-1.06 1.06l.884.884-2.298 2.298-.177-.176a2 2 0 0 0-2.829 0l-3.72 3.72 7.34 1.145.623-.623a2 2 0 0 0 0-2.828l-.177-.177 2.299-2.298.883.884a.75.75 0 1 0 1.06-1.06l-1.4-1.401-.013-.014-.014-.013-1.4-1.401Zm-10.514 9.1-.151.151a2 2 0 0 0-.566 1.131l-.236 1.65c-.053.371-.001.727.13 1.043l-5.146 4.913a.75.75 0 1 0 1.036 1.085l5.157-4.925c.327.144.698.202 1.086.147l1.65-.236a2 2 0 0 0 1.132-.565l3.249-3.25-7.34-1.144Z', clipRule: 'evenodd' })));
};
var ForwardRef$2s = forwardRef(SvgInjection);

var SvgInstagram = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7 2a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5H7Zm11 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-1 5a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', clipRule: 'evenodd' })));
};
var ForwardRef$2r = forwardRef(SvgInstagram);

var SvgLaptop = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 4a2 2 0 0 0-2 2v9.5h16V6a2 2 0 0 0-2-2H6ZM2.75 17a.75.75 0 0 0-.75.75A2.25 2.25 0 0 0 4.25 20h15.5A2.25 2.25 0 0 0 22 17.75a.75.75 0 0 0-.75-.75H2.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$2q = forwardRef(SvgLaptop);

var SvgLightMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-4.25 8a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Zm8.56-13.375a.75.75 0 0 1-.275 1.025l-1.732 1a.75.75 0 1 1-.75-1.3l1.732-1a.75.75 0 0 1 1.025.275ZM5.447 16.65a.75.75 0 1 0-.75-1.3l-1.732 1a.75.75 0 1 0 .75 1.3l1.732-1ZM2.69 6.625a.75.75 0 0 1 1.025-.274l1.732 1a.75.75 0 1 1-.75 1.299l-1.732-1a.75.75 0 0 1-.275-1.025Zm16.613 8.725a.75.75 0 0 0-.75 1.3l1.732 1a.75.75 0 0 0 .75-1.3l-1.732-1Z', clipRule: 'evenodd' })));
};
var ForwardRef$2p = forwardRef(SvgLightMode);

var SvgLinkedln = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 4.5V22H2V8.5h4Zm3 0h4v.841A6 6 0 0 1 21 15v7h-4v-7a2 2 0 1 0-4 0v7H9V8.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$2o = forwardRef(SvgLinkedln);

var SvgLocationHospital = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20 9.889c0 4.649-4.63 9.233-6.845 11.16-.67.584-1.64.584-2.31 0C8.629 19.123 4 14.539 4 9.89 4 6 7.03 2 12 2c4.97 0 8 4 8 7.889ZM17 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-6.25-2a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-1.25h2.5V12a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v1.25h-2.5V8Z', clipRule: 'evenodd' })));
};
var ForwardRef$2n = forwardRef(SvgLocationHospital);

var SvgLocation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c3.375 0 9-6.202 9-11.111C21 5.979 16.97 2 12 2s-9 3.98-9 8.889C3 15.799 8.625 22 12 22Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', clipRule: 'evenodd' })));
};
var ForwardRef$2m = forwardRef(SvgLocation);

var SvgLock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2.25A4.75 4.75 0 0 0 7.25 7v.07A4.001 4.001 0 0 0 4 11v6a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-6c0-1.953-1.4-3.579-3.25-3.93V7A4.75 4.75 0 0 0 12 2.25ZM15.25 7a3.25 3.25 0 0 0-6.5 0h6.5ZM14 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$2l = forwardRef(SvgLock);

var SvgMask = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.25 8a1.25 1.25 0 1 0-2.5 0v4a3.251 3.251 0 0 0 2.5 3.163V8Zm1.5.786V8a2.75 2.75 0 0 0-5.5 0v4a4.75 4.75 0 0 0 4.278 4.727c.282.79.772 1.5 1.431 2.049l.72.6a6.75 6.75 0 0 0 8.642 0l.72-.6a4.75 4.75 0 0 0 1.431-2.05A4.75 4.75 0 0 0 22.75 12V8a2.75 2.75 0 1 0-5.5 0v.786l-3.126-1.562a4.75 4.75 0 0 0-4.248 0L6.75 8.786ZM20 6.75c-.69 0-1.25.56-1.25 1.25v7.163A3.251 3.251 0 0 0 21.25 12V8c0-.69-.56-1.25-1.25-1.25Z', clipRule: 'evenodd' })));
};
var ForwardRef$2k = forwardRef(SvgMask);

var SvgMaximizeCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.25 3c0 .414.336.75.75.75h3.19l-9.72 9.72a.75.75 0 1 0 1.06 1.06l9.72-9.72V8a.75.75 0 0 0 1.5 0V3a.75.75 0 0 0-.75-.75h-5a.75.75 0 0 0-.75.75ZM3.75 13A7.25 7.25 0 0 1 11 5.75a.75.75 0 0 0 0-1.5A8.75 8.75 0 1 0 19.75 13a.75.75 0 0 0-1.5 0 7.25 7.25 0 1 1-14.5 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$2j = forwardRef(SvgMaximizeCircle);

var SvgMaximizeRectangleDoted = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.25 6A4.75 4.75 0 0 1 10 1.25h8A4.75 4.75 0 0 1 22.75 6v8A4.75 4.75 0 0 1 18 18.75h-5.309a4.751 4.751 0 0 1-4.691 4H6A4.75 4.75 0 0 1 1.25 18v-2a4.751 4.751 0 0 1 4-4.691V6Zm1.5 5.25H8a4.73 4.73 0 0 1 2.787.903l4.402-4.403H12a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V8.81l-4.403 4.403A4.73 4.73 0 0 1 12.75 16v1.25H18A3.25 3.25 0 0 0 21.25 14V6A3.25 3.25 0 0 0 18 2.75h-8A3.25 3.25 0 0 0 6.75 6v5.25Z', clipRule: 'evenodd' })));
};
var ForwardRef$2i = forwardRef(SvgMaximizeRectangleDoted);

var SvgMaximizeRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 2.25h-6a.75.75 0 0 0 0 1.5h4.19l-9.72 9.72a.75.75 0 1 0 1.06 1.06l9.72-9.72V9a.75.75 0 0 0 1.5 0V3a.75.75 0 0 0-.75-.75Zm-14 2A4.75 4.75 0 0 0 2.25 9v8A4.75 4.75 0 0 0 7 21.75h8A4.75 4.75 0 0 0 19.75 17v-5a.75.75 0 0 0-1.5 0v5A3.25 3.25 0 0 1 15 20.25H7A3.25 3.25 0 0 1 3.75 17V9A3.25 3.25 0 0 1 7 5.75h5a.75.75 0 0 0 0-1.5H7Z', clipRule: 'evenodd' })));
};
var ForwardRef$2h = forwardRef(SvgMaximizeRectangle);

var SvgMedicalBook = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7 2h10a3 3 0 0 1 3 3v9.5H7a4.484 4.484 0 0 0-3 1.146V5a3 3 0 0 1 3-3Zm5 3.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V12a.75.75 0 0 1-1.5 0V9.75H9a.75.75 0 0 1 0-1.5h2.25V6a.75.75 0 0 1 .75-.75ZM7 16h13v3a3 3 0 0 1-3 3H7a3 3 0 1 1 0-6Z', clipRule: 'evenodd' })));
};
var ForwardRef$2g = forwardRef(SvgMedicalBook);

var SvgMedicalInformation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2ZM8.5 6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-8a4 4 0 0 0-4-4h-2.5a3.5 3.5 0 1 1-7 0ZM8 10.25a.75.75 0 0 1 .75.75v2.25H11a.75.75 0 0 1 0 1.5H8.75V17a.75.75 0 0 1-1.5 0v-2.25H5a.75.75 0 0 1 0-1.5h2.25V11a.75.75 0 0 1 .75-.75Zm11 2.5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0 0 1.5h5ZM17.75 16a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$2f = forwardRef(SvgMedicalInformation);

var SvgMedicalService = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.75 5A2.25 2.25 0 0 1 11 2.75h2A2.25 2.25 0 0 1 15.25 5v1h-6.5V5Zm-1.5 1V5A3.75 3.75 0 0 1 11 1.25h2A3.75 3.75 0 0 1 16.75 5v1H18a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4h1.25ZM12 10.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V17a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V11a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$2e = forwardRef(SvgMedicalService);

var SvgMenuCircleHorizontal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.5 12.25a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0Zm6.25 1.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm5 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$2d = forwardRef(SvgMenuCircleHorizontal);

var SvgMenuCircleVertical = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.5 6.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0 5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-1.25 6.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$2c = forwardRef(SvgMenuCircleVertical);

var SvgMenuHome = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033ZM7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75ZM8 15.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H8Z', clipRule: 'evenodd' })));
};
var ForwardRef$2b = forwardRef(SvgMenuHome);

var SvgMenuLineHorizontalHalf = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.25 8A.75.75 0 0 1 7 7.25h5a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 8Zm0 4a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM12 15.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z', clipRule: 'evenodd' })));
};
var ForwardRef$2a = forwardRef(SvgMenuLineHorizontalHalf);

var SvgMenuLineHorizontal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.25 8A.75.75 0 0 1 7 7.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 8Zm0 4a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 15.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5H7Z', clipRule: 'evenodd' })));
};
var ForwardRef$29 = forwardRef(SvgMenuLineHorizontal);

var SvgMenuLineVerticalHalf = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 6.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75Zm-4 5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75ZM16.75 7a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0V7Z', clipRule: 'evenodd' })));
};
var ForwardRef$28 = forwardRef(SvgMenuLineVerticalHalf);

var SvgMenuLineVertical = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 6.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75Zm4 3a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75ZM8.75 10a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$27 = forwardRef(SvgMenuLineVertical);

var SvgMenuUser = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3.25-1a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75ZM16 16.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6ZM7 19c2.761 0 5-1.343 5-3s-2.239-3-5-3-5 1.343-5 3 2.239 3 5 3Z', clipRule: 'evenodd' })));
};
var ForwardRef$26 = forwardRef(SvgMenuUser);

var SvgMessenger = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 12c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-4.27-.955l-4.356.726a1 1 0 0 1-1.151-1.146l.713-4.396A9.962 9.962 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10Zm-12 0-4 3 4-6 4 3 4-3-4 6-4-3Z', clipRule: 'evenodd' })));
};
var ForwardRef$25 = forwardRef(SvgMessenger);

var SvgMinimizeCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.75 14a.75.75 0 0 0-.75-.75h-3.19l9.72-9.72a.75.75 0 0 0-1.06-1.06l-9.72 9.72V9a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h5a.75.75 0 0 0 .75-.75Zm-12-1A7.25 7.25 0 0 1 11 5.75a.75.75 0 0 0 0-1.5A8.75 8.75 0 1 0 19.75 13a.75.75 0 0 0-1.5 0 7.25 7.25 0 1 1-14.5 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$24 = forwardRef(SvgMinimizeCircle);

var SvgMinimizeRectangleDoted = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.309 5.25c.36-2.267 2.323-4 4.691-4h2A4.75 4.75 0 0 1 22.75 6v2a4.751 4.751 0 0 1-4 4.691V18A4.75 4.75 0 0 1 14 22.75H6A4.75 4.75 0 0 1 1.25 18v-8A4.75 4.75 0 0 1 6 5.25h5.309Zm-.059 1.5H6A3.25 3.25 0 0 0 2.75 10v8A3.25 3.25 0 0 0 6 21.25h8A3.25 3.25 0 0 0 17.25 18v-5.25H16a4.728 4.728 0 0 1-2.787-.903L8.811 16.25H12a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 1.5 0v3.19l4.403-4.403A4.728 4.728 0 0 1 11.25 8V6.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$23 = forwardRef(SvgMinimizeRectangleDoted);

var SvgMinimizeRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21.53 3.53a.75.75 0 0 0-1.06-1.06l-9.72 9.72V8a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h6a.75.75 0 0 0 0-1.5h-4.19l9.72-9.72ZM7 4.25A4.75 4.75 0 0 0 2.25 9v8A4.75 4.75 0 0 0 7 21.75h8A4.75 4.75 0 0 0 19.75 17v-5a.75.75 0 0 0-1.5 0v5A3.25 3.25 0 0 1 15 20.25H7A3.25 3.25 0 0 1 3.75 17V9A3.25 3.25 0 0 1 7 5.75h5a.75.75 0 0 0 0-1.5H7Z', clipRule: 'evenodd' })));
};
var ForwardRef$22 = forwardRef(SvgMinimizeRectangle);

var SvgMobileDataOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M4.53 3.47a.75.75 0 0 0-1.06 1.06l3.78 3.78v9.862a1.27 1.27 0 0 1-.134-.117L5.53 16.47a.75.75 0 0 0-1.06 1.06l1.585 1.586a2.75 2.75 0 0 0 3.89 0l1.585-1.586a.75.75 0 1 0-1.06-1.06l-1.586 1.585a1.27 1.27 0 0 1-.134.117V9.81l10.72 10.72a.75.75 0 1 0 1.06-1.061l-11.999-12-.001-.001-4-4Zm12.22 2.358v7.861l-1.5-1.5V5.83a1.26 1.26 0 0 0-.134.115L13.53 7.53a.75.75 0 1 1-1.06-1.06l1.585-1.586a2.75 2.75 0 0 1 3.89 0L19.53 6.47a.75.75 0 0 1-1.06 1.06l-1.586-1.586a1.26 1.26 0 0 0-.134-.116Z', clipRule: 'evenodd' })));
};
var ForwardRef$21 = forwardRef(SvgMobileDataOff);

var SvgMobileData = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.116 5.944a1.26 1.26 0 0 1 .134-.116V14a.75.75 0 0 0 1.5 0V5.828c.047.035.091.074.134.116L18.47 7.53a.75.75 0 1 0 1.06-1.06l-1.585-1.586a2.75 2.75 0 0 0-3.89 0L12.47 6.469a.75.75 0 0 0 1.06 1.061l1.586-1.586ZM8.884 18.055a1.27 1.27 0 0 1-.134.117V10a.75.75 0 0 0-1.5 0v8.172a1.27 1.27 0 0 1-.134-.117L5.53 16.47a.75.75 0 0 0-1.06 1.06l1.585 1.586a2.75 2.75 0 0 0 3.89 0l1.585-1.586a.75.75 0 1 0-1.06-1.06l-1.586 1.585Z', clipRule: 'evenodd' })));
};
var ForwardRef$20 = forwardRef(SvgMobileData);

var SvgMobile = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H8Zm3 16.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$1$ = forwardRef(SvgMobile);

var SvgMusicOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21.75 4.775a2.75 2.75 0 0 0-3.62-2.61l-6.632 2.212a4.744 4.744 0 0 0-2.343 1.717l4.233 4.234 5.217-1.74a1.25 1.25 0 0 1 1.645 1.187v4.224a3.734 3.734 0 0 0-2.25-.75c-.5 0-.977.099-1.414.276l4.888 4.888A3.74 3.74 0 0 0 21.75 17V4.775ZM3.53 2.469A.75.75 0 1 0 2.47 3.53l5.78 5.78V16a3.75 3.75 0 1 0 1.5 3v-5.117a3.248 3.248 0 0 1 2.222-3.083L3.53 2.47Zm18 19.061a.75.75 0 0 0 0-1.06l-.848-.85-5.303-5.302a3.75 3.75 0 0 0 4.035 6.156l1.056 1.056a.75.75 0 0 0 1.06 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$1_ = forwardRef(SvgMusicOff);

var SvgMusic = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18.13 2.166a2.75 2.75 0 0 1 3.62 2.609V17a3.75 3.75 0 1 1-1.5-3V9.774a1.25 1.25 0 0 0-1.645-1.186l-6.633 2.21a3.25 3.25 0 0 0-2.222 3.084V19a3.75 3.75 0 1 1-1.5-3V8.882a4.75 4.75 0 0 1 3.248-4.506l6.632-2.211Z', clipRule: 'evenodd' })));
};
var ForwardRef$1Z = forwardRef(SvgMusic);

var SvgNetflix = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M4 3h5l11 17h-5L4 3Zm0 2.761V20h5v-6.511L4 5.76ZM20 3v14.239l-5-7.727V3h5Z', clipRule: 'evenodd' })));
};
var ForwardRef$1Y = forwardRef(SvgNetflix);

var SvgNextArrow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.985 14.333v1.185c0 1.543 1.674 2.505 3.007 1.727l4.993-2.912v1.185c0 1.543 1.674 2.505 3.007 1.727l6.031-3.518c1.323-.771 1.323-2.683 0-3.455l-6.03-3.518c-1.334-.777-3.008.184-3.008 1.728v1.185L5.992 6.754c-1.333-.777-3.007.184-3.007 1.728v5.851Z', clipRule: 'evenodd' })));
};
var ForwardRef$1X = forwardRef(SvgNextArrow);

var SvgNightMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M18.328 14.869A9.197 9.197 0 0 1 9.525 3 9.201 9.201 0 0 0 3 11.803 9.197 9.197 0 0 0 12.197 21 9.201 9.201 0 0 0 21 14.475a9.196 9.196 0 0 1-2.672.394Z' })));
};
var ForwardRef$1W = forwardRef(SvgNightMode);

var SvgNotificationOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.47 2.47a.75.75 0 0 0 0 1.06l3.612 3.613a6.67 6.67 0 0 0-.402 1.651l-.345 3.044a3.816 3.816 0 0 1-.88 2.042C3.422 15.096 4.261 17 5.83 17h10.11l4.53 4.53a.75.75 0 1 0 1.06-1.06l-18-18a.75.75 0 0 0-1.06 0Zm16.195 9.368-.345-3.044C17.946 5.491 15.23 3 12 3a6.22 6.22 0 0 0-3.745 1.255l11.597 11.597a1.898 1.898 0 0 0-.308-1.972 3.816 3.816 0 0 1-.879-2.042Zm-3.693 7.234C14.515 20.198 13.357 21 12 21s-2.515-.8-2.972-1.928a.423.423 0 0 1 .395-.572h5.154a.423.423 0 0 1 .395.572Z', clipRule: 'evenodd' })));
};
var ForwardRef$1V = forwardRef(SvgNotificationOff);

var SvgNotificationWithCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1.676 4.823A5.005 5.005 0 0 1 12.1 4H12C8.77 4 6.054 6.49 5.68 9.794l-.345 3.044a3.816 3.816 0 0 1-.88 2.042C3.422 16.096 4.261 18 5.83 18h12.34c1.57 0 2.408-1.904 1.374-3.12a3.816 3.816 0 0 1-.879-2.042l-.341-3.015ZM14.972 20.07C14.515 21.2 13.357 22 12 22s-2.515-.8-2.972-1.928a.423.423 0 0 1 .395-.572h5.154a.423.423 0 0 1 .395.572Z', clipRule: 'evenodd' })));
};
var ForwardRef$1U = forwardRef(SvgNotificationWithCircle);

var SvgNotification = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 3C8.77 3 6.054 5.49 5.68 8.794l-.345 3.044a3.816 3.816 0 0 1-.88 2.042C3.422 15.096 4.261 17 5.83 17h12.34c1.57 0 2.408-1.904 1.374-3.12a3.816 3.816 0 0 1-.879-2.042l-.345-3.044C17.946 5.491 15.23 3 12 3Zm2.972 16.072C14.515 20.198 13.357 21 12 21s-2.515-.8-2.972-1.928a.423.423 0 0 1 .395-.572h5.154a.423.423 0 0 1 .395.572Z', clipRule: 'evenodd' })));
};
var ForwardRef$1T = forwardRef(SvgNotification);

var SvgOutCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18.53 7.47a.75.75 0 1 0-1.06 1.06l2.72 2.72H8a.75.75 0 1 0 0 1.5h12.19l-2.72 2.72a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 0-1.06l-4-4Zm-4-1.13a.75.75 0 1 0 .94-1.17 8.75 8.75 0 1 0 0 13.661.75.75 0 0 0-.94-1.17 7.25 7.25 0 1 1 0-11.32Z', clipRule: 'evenodd' })));
};
var ForwardRef$1S = forwardRef(SvgOutCircle);

var SvgOutRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7 2.25A4.75 4.75 0 0 0 2.25 7v10A4.75 4.75 0 0 0 7 21.75h4A4.75 4.75 0 0 0 15.75 17v-.5a.75.75 0 0 0-1.5 0v.5A3.25 3.25 0 0 1 11 20.25H7A3.25 3.25 0 0 1 3.75 17V7A3.25 3.25 0 0 1 7 3.75h4A3.25 3.25 0 0 1 14.25 7v.5a.75.75 0 0 0 1.5 0V7A4.75 4.75 0 0 0 11 2.25H7Zm11.53 6.22a.75.75 0 1 0-1.06 1.06l1.72 1.72H9a.75.75 0 0 0 0 1.5h10.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3Z', clipRule: 'evenodd' })));
};
var ForwardRef$1R = forwardRef(SvgOutRectangle);

var SvgPayoneer = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-3a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z', clipRule: 'evenodd' })));
};
var ForwardRef$1Q = forwardRef(SvgPayoneer);

var SvgPaypal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.5 3H13a5 5 0 0 1 0 10H9l-2 5H3L8.5 3ZM6 21l.55-1.5h1.466l2-5H13a6.5 6.5 0 0 0 6.473-7.097A5 5 0 0 1 16 16h-4l-2 5H6Z', clipRule: 'evenodd' })));
};
var ForwardRef$1P = forwardRef(SvgPaypal);

var SvgPhoneLock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7 1.25A3.75 3.75 0 0 0 3.25 5v14A3.75 3.75 0 0 0 7 22.75h3.5a.75.75 0 0 0 0-1.5H7A2.25 2.25 0 0 1 4.75 19V5A2.25 2.25 0 0 1 7 2.75h8A2.25 2.25 0 0 1 17.25 5v5.5a.75.75 0 0 0 1.5 0V5A3.75 3.75 0 0 0 15 1.25H7Zm9 12.5c-.69 0-1.25.56-1.25 1.25v1h2.5v-1c0-.69-.56-1.25-1.25-1.25ZM13.25 15v1.145A2 2 0 0 0 12 18v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-1.25-1.855V15a2.75 2.75 0 1 0-5.5 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$1O = forwardRef(SvgPhoneLock);

var SvgPillTablet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H8Zm0 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9-13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0V7Z', clipRule: 'evenodd' })));
};
var ForwardRef$1N = forwardRef(SvgPillTablet);

var SvgPillsCapsule = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.75 2a1.75 1.75 0 1 0 0 3.5h10.5a1.75 1.75 0 1 0 0-3.5H6.75ZM5 11a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-7Zm10 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$1M = forwardRef(SvgPillsCapsule);

var SvgPills = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.5 15c0-2.077-.745-3.98-1.983-5.457l4.935-4.934a7.001 7.001 0 0 1-2.97 10.938A8.61 8.61 0 0 0 17.5 15ZM9 6.5c-.184 0-.366.006-.547.017a7.001 7.001 0 0 1 10.938-2.97l-4.934 4.936A8.466 8.466 0 0 0 9 6.5ZM9 22a7.001 7.001 0 0 1-6.96-6.25h13.92A7.001 7.001 0 0 1 9 22Zm-6.96-7.75h13.92a7.001 7.001 0 0 0-13.92 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$1L = forwardRef(SvgPills);

var SvgPinterestCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 12c0 5.523-4.477 10-10 10a9.966 9.966 0 0 1-2.41-.293l.004-.016 1.078-4.095a5.75 5.75 0 1 0-3.652-2.72.75.75 0 1 0 1.298-.752 4.25 4.25 0 1 1 2.735 2.02l1.172-4.453a.75.75 0 1 0-1.45-.382l-2.613 9.928A10.003 10.003 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10Z', clipRule: 'evenodd' })));
};
var ForwardRef$1K = forwardRef(SvgPinterestCircle);

var SvgPinterest = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M12 4.4c-3.045 0-5.474 2.297-5.474 5.086 0 .185.01.368.032.548.064.558-.178 1.14-.692 1.367-.76.337-1.661-.033-1.786-.854A7.064 7.064 0 0 1 4 9.486C4 5.33 7.603 2 12 2s8 3.331 8 7.486c0 4.154-3.603 7.485-8 7.485a8.58 8.58 0 0 1-1.45-.123L9.165 21.15c-.204.634-.91.99-1.577.797-.667-.193-1.043-.864-.84-1.498l4.043-12.571c.204-.634.91-.99 1.577-.797.667.193 1.043.864.84 1.498l-1.914 5.95c.23.028.466.042.705.042 3.045 0 5.474-2.297 5.474-5.085 0-2.789-2.43-5.086-5.474-5.086Z' })));
};
var ForwardRef$1J = forwardRef(SvgPinterest);

var SvgPlaster = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm19.834 9.794-10.04 10.04a3.98 3.98 0 0 1-5.628-5.628l10.04-10.04a3.98 3.98 0 1 1 5.628 5.628Zm-6.589-.454a1 1 0 0 0-1.414 0l-2.49 2.491a1 1 0 0 0 0 1.415l1.413 1.414a1 1 0 0 0 1.415 0l2.49-2.491a1 1 0 0 0 0-1.414L13.245 9.34Zm2.467-3.527a.75.75 0 0 1 1.061 0l1.414 1.414a.75.75 0 0 1-1.06 1.06l-1.415-1.414a.75.75 0 0 1 0-1.06Zm-8.838 9.9a.75.75 0 1 0-1.061 1.06l1.414 1.414a.75.75 0 1 0 1.06-1.06l-1.413-1.415Z', clipRule: 'evenodd' })));
};
var ForwardRef$1I = forwardRef(SvgPlaster);

var SvgPreviousArrow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21.03 14.333v1.185c0 1.543-1.674 2.505-3.007 1.727l-4.992-2.912v1.185c0 1.543-1.675 2.505-3.008 1.727l-6.03-3.518c-1.324-.771-1.324-2.683 0-3.455l6.03-3.518c1.333-.777 3.008.184 3.008 1.728v1.185l4.992-2.913c1.333-.777 3.008.184 3.008 1.728v5.851Z', clipRule: 'evenodd' })));
};
var ForwardRef$1H = forwardRef(SvgPreviousArrow);

var SvgQrScan = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7 5.75c-.69 0-1.25.56-1.25 1.25v1a.75.75 0 0 1-1.5 0V7A2.75 2.75 0 0 1 7 4.25h10A2.75 2.75 0 0 1 19.75 7v1a.75.75 0 0 1-1.5 0V7c0-.69-.56-1.25-1.25-1.25H7Zm10 12.5c.69 0 1.25-.56 1.25-1.25v-1a.75.75 0 0 1 1.5 0v1A2.75 2.75 0 0 1 17 19.75H7A2.75 2.75 0 0 1 4.25 17v-1a.75.75 0 0 1 1.5 0v1c0 .69.56 1.25 1.25 1.25h10Zm-15-7a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5H2Z', clipRule: 'evenodd' })));
};
var ForwardRef$1G = forwardRef(SvgQrScan);

var SvgRedoCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm4.215-13.5a.75.75 0 0 0-1.5 0v.602a4.75 4.75 0 1 0 1.885 5.085.75.75 0 1 0-1.452-.374A3.252 3.252 0 0 1 8.75 12a3.25 3.25 0 0 1 5.398-2.439l-.833.212a.75.75 0 1 0 .37 1.454l1.965-.5a.75.75 0 0 0 .565-.727V7.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$1F = forwardRef(SvgRedoCircle);

var SvgRedoRectangleLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm.66 4.5a.75.75 0 0 1 1.5 0v.602a4.75 4.75 0 1 1-1.885 5.085.75.75 0 1 1 1.451-.374A3.252 3.252 0 0 0 15.124 12a3.25 3.25 0 0 0-5.398-2.439l.833.212a.75.75 0 0 1-.37 1.454l-1.965-.5A.75.75 0 0 1 7.66 10V7.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$1E = forwardRef(SvgRedoRectangleLeft);

var SvgRedoRectangleRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm9.215 4.5a.75.75 0 0 0-1.5 0v.602a4.75 4.75 0 1 0 1.885 5.085.75.75 0 1 0-1.452-.374A3.252 3.252 0 0 1 8.75 12a3.25 3.25 0 0 1 5.398-2.439l-.833.212a.75.75 0 1 0 .37 1.454l1.965-.5a.75.75 0 0 0 .565-.727V7.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$1D = forwardRef(SvgRedoRectangleRight);

var SvgRedo = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 3.75A8.25 8.25 0 1 0 20.25 12a.75.75 0 0 1 1.5 0c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25a9.723 9.723 0 0 1 7.046 3.01V3a.75.75 0 1 1 1.5 0v4.5a.75.75 0 0 1-.75.75h-4.421a.75.75 0 0 1 0-1.5h2.99a8.233 8.233 0 0 0-6.365-3Z', clipRule: 'evenodd' })));
};
var ForwardRef$1C = forwardRef(SvgRedo);

var SvgReloadCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm2.483-16.277a.75.75 0 0 0-1.394.554l.173.437A6.11 6.11 0 0 0 12 6.584C8.874 6.583 6.25 8.96 6.25 12c0 .485.068.956.195 1.405a.75.75 0 0 0 1.443-.41A3.63 3.63 0 0 1 7.75 12c0-2.115 1.853-3.917 4.25-3.917a4.5 4.5 0 0 1 2.213.572.75.75 0 0 0 1.065-.93l-.795-2.002Zm3.072 4.872a.75.75 0 0 0-1.443.41c.09.317.138.65.138.995 0 2.115-1.853 3.917-4.25 3.917-.814 0-1.57-.21-2.212-.573a.75.75 0 0 0-1.066.93l.795 2.003a.75.75 0 1 0 1.394-.554l-.173-.437c.406.085.829.13 1.262.13 3.126 0 5.75-2.377 5.75-5.416 0-.485-.068-.956-.195-1.405Z', clipRule: 'evenodd' })));
};
var ForwardRef$1B = forwardRef(SvgReloadCircle);

var SvgReloadRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm8.483 3.723a.75.75 0 0 0-1.394.554l.173.437A6.11 6.11 0 0 0 12 6.584C8.874 6.583 6.25 8.96 6.25 12c0 .485.068.956.195 1.405a.75.75 0 0 0 1.443-.41A3.63 3.63 0 0 1 7.75 12c0-2.115 1.853-3.917 4.25-3.917a4.5 4.5 0 0 1 2.213.572.75.75 0 0 0 1.065-.93l-.795-2.002Zm3.072 4.872a.75.75 0 0 0-1.443.41c.09.317.138.65.138.995 0 2.115-1.853 3.917-4.25 3.917-.814 0-1.57-.21-2.212-.573a.75.75 0 0 0-1.066.93l.795 2.003a.75.75 0 1 0 1.394-.554l-.173-.437c.406.085.829.13 1.262.13 3.126 0 5.75-2.377 5.75-5.416 0-.485-.068-.956-.195-1.405Z', clipRule: 'evenodd' })));
};
var ForwardRef$1A = forwardRef(SvgReloadRectangle);

var SvgReload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14.59 1.3a.75.75 0 0 1 .968.433l1.178 3.09a.75.75 0 0 1-1.08.915 7.25 7.25 0 0 0-9.937 9.886.75.75 0 1 1-1.298.752 8.75 8.75 0 0 1 10.27-12.703l-.535-1.406a.75.75 0 0 1 .434-.968Zm3.964 6.05a.75.75 0 0 1 1.025.274 8.75 8.75 0 0 1-10.27 12.703l.535 1.406a.75.75 0 0 1-1.402.534l-1.178-3.09a.75.75 0 0 1 1.08-.915 7.25 7.25 0 0 0 9.937-9.886.75.75 0 0 1 .273-1.025Z', clipRule: 'evenodd' })));
};
var ForwardRef$1z = forwardRef(SvgReload);

var SvgRestart = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2.75a9.25 9.25 0 1 0 8.289 13.36.75.75 0 1 1 1.343.668A10.75 10.75 0 0 1 12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12a.75.75 0 0 1-.987.711l-3-1a.75.75 0 0 1 .474-1.422l1.953.65A9.251 9.251 0 0 0 12 2.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$1y = forwardRef(SvgRestart);

var SvgRotateLock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.75 12a9.25 9.25 0 0 1 18.44-1.06l-1.953-.651a.75.75 0 0 0-.474 1.422l3 1A.75.75 0 0 0 22.75 12c0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12 6.063 22.75 12 22.75a10.75 10.75 0 0 0 9.632-5.972.75.75 0 0 0-1.343-.667A9.25 9.25 0 0 1 2.75 12ZM12 7.75c-.69 0-1.25.56-1.25 1.25v1h2.5V9c0-.69-.56-1.25-1.25-1.25ZM9.25 10c0 .048.004.095.013.14A2 2 0 0 0 8 12v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-1.263-1.86.752.752 0 0 0 .013-.14V9a2.75 2.75 0 1 0-5.5 0v1Z', clipRule: 'evenodd' })));
};
var ForwardRef$1x = forwardRef(SvgRotateLock);

var SvgScreenRotate = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14.166 2.491a.75.75 0 0 0-.332 1.463 8.263 8.263 0 0 1 6.212 6.212.75.75 0 0 0 1.371.225l1.223-2a.75.75 0 1 0-1.28-.782l-.371.607a9.768 9.768 0 0 0-6.823-5.725ZM3.955 13.834a.75.75 0 0 0-1.372-.226l-1.223 2a.75.75 0 1 0 1.28.783l.372-.608a9.768 9.768 0 0 0 6.822 5.725.75.75 0 1 0 .332-1.463 8.263 8.263 0 0 1-6.211-6.211ZM5.459 8.64a2 2 0 0 0 0 2.829l7.071 7.07a2 2 0 0 0 2.829 0l3.182-3.181a2 2 0 0 0 0-2.829l-7.071-7.07a2 2 0 0 0-2.829 0L5.46 8.641Z', clipRule: 'evenodd' })));
};
var ForwardRef$1w = forwardRef(SvgScreenRotate);

var SvgScreenshot = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.25 5A2.75 2.75 0 0 1 5 2.25h4a.75.75 0 0 1 0 1.5H5c-.69 0-1.25.56-1.25 1.25v4a.75.75 0 0 1-1.5 0V5ZM7 9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9Zm12 12.75A2.75 2.75 0 0 0 21.75 19v-4a.75.75 0 0 0-1.5 0v4c0 .69-.56 1.25-1.25 1.25h-4a.75.75 0 0 0 0 1.5h4Z', clipRule: 'evenodd' })));
};
var ForwardRef$1v = forwardRef(SvgScreenshot);

var SvgSdStorage = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20 6v12a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8.657a4 4 0 0 1 1.172-2.829l2.656-2.656A4 4 0 0 1 10.657 2H16a4 4 0 0 1 4 4Zm-2.25-1a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0V5ZM14 4.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75ZM11.75 5a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0V5Z', clipRule: 'evenodd' })));
};
var ForwardRef$1u = forwardRef(SvgSdStorage);

var SvgSecurity = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm5.378 4.943 4.998-2.221a4 4 0 0 1 3.249 0l4.978 2.212c1.455.647 2.41 2.101 2.309 3.691-.391 6.098-2.135 8.854-6.847 12.052a3.685 3.685 0 0 1-4.13 0c-4.697-3.181-6.505-5.9-6.865-12.073-.092-1.58.862-3.019 2.308-3.661Zm10.187 5.55a.75.75 0 1 0-1.13-.987l-2.87 3.28a.25.25 0 0 1-.344.03L9.47 11.414a.75.75 0 0 0-.937 1.171l1.752 1.403a1.75 1.75 0 0 0 2.41-.214l2.87-3.28Z', clipRule: 'evenodd' })));
};
var ForwardRef$1t = forwardRef(SvgSecurity);

var SvgSetting = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.152 4h1.697c.937 0 1.697.716 1.697 1.6a1.333 1.333 0 0 0 1.97 1.17l.09-.048c.811-.442 1.85-.18 2.318.585l.848 1.386c.469.765.19 1.744-.62 2.186a1.277 1.277 0 0 0 0 2.242c.81.442 1.089 1.42.62 2.186l-.848 1.386c-.469.765-1.507 1.027-2.318.585l-.09-.049a1.333 1.333 0 0 0-1.97 1.171c0 .884-.76 1.6-1.697 1.6h-1.697c-.938 0-1.697-.716-1.697-1.6a1.333 1.333 0 0 0-1.97-1.17l-.09.049c-.812.441-1.85.18-2.319-.586l-.848-1.386c-.469-.765-.19-1.744.62-2.186a1.277 1.277 0 0 0 0-2.242c-.81-.442-1.089-1.42-.62-2.186l.848-1.386c.469-.765 1.507-1.027 2.318-.585l.09.049c.889.483 1.97-.16 1.97-1.171 0-.884.76-1.6 1.697-1.6ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', clipRule: 'evenodd' })));
};
var ForwardRef$1s = forwardRef(SvgSetting);

var SvgShutDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.75 2a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0V2ZM8.3 3.52a.75.75 0 0 0-.6-1.375A10.752 10.752 0 0 0 1.25 12c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12c0-4.41-2.655-8.197-6.45-9.855a.75.75 0 0 0-.6 1.374 9.25 9.25 0 1 1-7.4 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$1r = forwardRef(SvgShutDown);

var SvgSignalCellulerBad = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15 20H4.148c-1.965 0-2.894-2.331-1.434-3.596l13.708-11.87C17.802 3.339 20 4.28 20 6.067V13a1 1 0 0 1-1 1h-2a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1Zm7.28-3.72a.75.75 0 1 0-1.06-1.06l-1.47 1.47-1.47-1.47a.75.75 0 1 0-1.06 1.06l1.47 1.47-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 1 0 1.06-1.06l-1.47-1.47 1.47-1.47Z', clipRule: 'evenodd' })));
};
var ForwardRef$1q = forwardRef(SvgSignalCellulerBad);

var SvgSignalCellulerLine = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21.75 4a.75.75 0 0 0-1.5 0v16a.75.75 0 0 0 1.5 0V4Zm-6 4a.75.75 0 0 0-1.5 0v12a.75.75 0 0 0 1.5 0V8ZM9 11.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0v-8a.75.75 0 0 1 .75-.75ZM3.75 16a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$1p = forwardRef(SvgSignalCellulerLine);

var SvgSignalCellulerNoInternetDashed = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20 3.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75Zm-6 4a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75ZM8.75 12a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0v-8ZM2 15.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75ZM21.06 18l1.47-1.47a.75.75 0 1 0-1.06-1.06L20 16.94l-1.47-1.47a.75.75 0 1 0-1.06 1.06L18.94 18l-1.47 1.47a.75.75 0 1 0 1.06 1.06L20 19.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L21.06 18Z', clipRule: 'evenodd' })));
};
var ForwardRef$1o = forwardRef(SvgSignalCellulerNoInternetDashed);

var SvgSignalCellulerNoInternet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19 9.75h2V6.067c0-1.786-2.198-2.728-3.578-1.533L3.714 16.404C2.254 17.669 3.184 20 5.148 20H16.75v-8A2.25 2.25 0 0 1 19 9.75Zm.75 2.25a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Zm0 7a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1Z', clipRule: 'evenodd' })));
};
var ForwardRef$1n = forwardRef(SvgSignalCellulerNoInternet);

var SvgSignalCellulerOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.148 19c-1.965 0-2.894-2.331-1.434-3.596l5.696-4.933-6.94-6.94A.75.75 0 0 1 3.53 2.47l18 18a.75.75 0 1 1-1.06 1.06L17.94 19H5.147ZM21 16.937V5.067c0-1.786-2.198-2.728-3.578-1.533l-5.803 5.025 9.203 9.202a1.99 1.99 0 0 0 .178-.824Z', clipRule: 'evenodd' })));
};
var ForwardRef$1m = forwardRef(SvgSignalCellulerOff);

var SvgSignalCelluler = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M18.856 20H5.148c-1.965 0-2.894-2.331-1.434-3.596l13.708-11.87C18.802 3.339 21 4.28 21 6.067v11.87c0 1.14-.96 2.063-2.144 2.063Z' })));
};
var ForwardRef$1l = forwardRef(SvgSignalCelluler);

var SvgSimCard = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M4 18V6a4 4 0 0 1 4-4h5.343a4 4 0 0 1 2.829 1.172l2.656 2.656A4 4 0 0 1 20 8.657V18a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Zm7.25 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm.75-4.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$1k = forwardRef(SvgSimCard);

var SvgSkype = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 20a8 8 0 0 1-7.943-8.958 5 5 0 1 1 6.986-6.986 8 8 0 0 1 8.9 8.9 5 5 0 1 1-6.986 6.986A8.092 8.092 0 0 1 12 20Zm-.5-12.75a2.75 2.75 0 0 0 0 5.5h1a1.25 1.25 0 1 1 0 2.5h-1c-.69 0-1.25-.56-1.25-1.25a.75.75 0 0 0-1.5 0 2.75 2.75 0 0 0 2.75 2.75h1a2.75 2.75 0 1 0 0-5.5h-1a1.25 1.25 0 1 1 0-2.5h1c.69 0 1.25.56 1.25 1.25a.75.75 0 0 0 1.5 0 2.75 2.75 0 0 0-2.75-2.75h-1Z', clipRule: 'evenodd' })));
};
var ForwardRef$1j = forwardRef(SvgSkype);

var SvgSlack = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.319 6.138a2 2 0 1 1 2-2v2h-2Zm5.311-3.902a2 2 0 0 0-2 2v5a2 2 0 0 0 4 0v-5a2 2 0 0 0-2-2Zm5.212 9a2 2 0 1 0-2-2v2h2Zm-3.212 8.626a2 2 0 0 0-2-2h-2v2a2 2 0 0 0 4 0ZM2.15 14.637a2 2 0 0 1 2-2h2v2a2 2 0 1 1-4 0Zm7.14-2a2 2 0 0 0-2 2v5.225a2 2 0 1 0 4 0v-5.225a2 2 0 0 0-2-2Zm.13-5.4a2 2 0 1 1 0 4H4.15a2 2 0 1 1 0-4h5.27Zm12.423 7.4a2 2 0 0 0-2-2H14.63a2 2 0 0 0 0 4h5.212a2 2 0 0 0 2-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$1i = forwardRef(SvgSlack);

var SvgSnapchat = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M22 17c-1.102 0-1.844 0-2.365.589-.608.687-1.279 1.411-2.197 1.411h-.771a2 2 0 0 0-1.2.4l-1.067.8a4 4 0 0 1-4.8 0l-1.067-.8a2 2 0 0 0-1.2-.4h-.771c-.918 0-1.59-.724-2.197-1.411C3.845 17 3.102 17 2 17l2.4-1.8A4 4 0 0 0 6 12v-.5h-.5a1.5 1.5 0 0 1 0-3H6V8a6 6 0 0 1 12 0v.5h.5a1.5 1.5 0 0 1 0 3H18v.5a4 4 0 0 0 1.6 3.2L22 17Z' })));
};
var ForwardRef$1h = forwardRef(SvgSnapchat);

var SvgSpotify = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM6.279 9.696c1.106-.442 3.083-.694 5.267-.572 2.174.121 4.425.607 6.09 1.532a.75.75 0 1 0 .728-1.312C16.43 8.27 13.93 7.755 11.63 7.627c-2.29-.128-4.514.12-5.908.678a.75.75 0 0 0 .558 1.392Zm.437 3.023c.737-.222 2.378-.467 4.285-.407 1.906.06 3.98.425 5.635 1.344a.75.75 0 1 0 .728-1.312c-1.946-1.08-4.288-1.467-6.315-1.531-2.026-.064-3.835.19-4.765.469a.75.75 0 0 0 .432 1.437Zm0 3c1.553-.466 5.559-.93 8.92.937a.75.75 0 1 0 .728-1.311c-3.839-2.133-8.3-1.597-10.08-1.063a.75.75 0 1 0 .432 1.437Z', clipRule: 'evenodd' })));
};
var ForwardRef$1g = forwardRef(SvgSpotify);

var SvgSpringNotesAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.032 1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-.25V1.5Zm-4 8a.75.75 0 1 0-1.5 0v2.25h-2.25a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25h2.25a.75.75 0 1 0 0-1.5h-2.25V9.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$1f = forwardRef(SvgSpringNotesAdd);

var SvgSpringNotesCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.032 1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-.25V1.5Zm-1.186 9.494a.75.75 0 1 0-1.129-.988l-2.87 3.28a.25.25 0 0 1-.344.03L9.75 11.915a.75.75 0 1 0-.937 1.172l1.753 1.402a1.75 1.75 0 0 0 2.41-.214l2.87-3.28Z', clipRule: 'evenodd' })));
};
var ForwardRef$1e = forwardRef(SvgSpringNotesCheck);

var SvgSpringNotesDelete = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.032 1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-.25V1.5Zm-2.099 9.409a.75.75 0 1 0-1.06-1.06l-1.591 1.59-1.591-1.59a.75.75 0 1 0-1.06 1.06l1.59 1.591-1.59 1.591a.75.75 0 1 0 1.06 1.06l1.59-1.59 1.592 1.59a.75.75 0 0 0 1.06-1.06l-1.59-1.591 1.59-1.591Z', clipRule: 'evenodd' })));
};
var ForwardRef$1d = forwardRef(SvgSpringNotesDelete);

var SvgSpringNotesDownload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.032 1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-.25V1.5Zm-6.22 11.47.72.72V9.5a.75.75 0 0 1 1.5 0v4.19l.72-.72a.75.75 0 0 1 1.06 1.06l-1.293 1.293a1.75 1.75 0 0 1-2.475 0L9.751 14.03a.75.75 0 1 1 1.061-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$1c = forwardRef(SvgSpringNotesDownload);

var SvgSpringNotesEditAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M18.424 12.99a1.674 1.674 0 0 1 2.367 2.367l-5.014 5.015c-.121.12-.27.209-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.626-2.197c.047-.164.135-.313.256-.434l5.014-5.015Z' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.032 1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h.586a1 1 0 0 0 .707-.293L20.989 8.793a1 1 0 0 0 .293-.707V7a4 4 0 0 0-4-4h-.25V1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5Zm3.25 6.25a.75.75 0 0 1 .75.75v1.25h1.25a.75.75 0 1 1 0 1.5h-1.25v1.25a.75.75 0 1 1-1.5 0v-1.25h-1.25a.75.75 0 0 1 0-1.5h1.25V8.5a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$1b = forwardRef(SvgSpringNotesEditAdd);

var SvgSpringNotesEditCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M18.424 12.99a1.674 1.674 0 0 1 2.367 2.367l-5.014 5.015c-.121.12-.27.209-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.626-2.197c.047-.164.135-.313.256-.434l5.014-5.015Z' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.032 1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h.586a1 1 0 0 0 .707-.293L20.989 8.793a1 1 0 0 0 .293-.707V7a4 4 0 0 0-4-4h-.25V1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5Zm5.842 8.46a.75.75 0 1 0-1.184-.92l-1.674 2.151a.25.25 0 0 1-.364.033l-.868-.781a.75.75 0 1 0-1.004 1.114l.868.782a1.75 1.75 0 0 0 2.552-.227l1.674-2.152Z', clipRule: 'evenodd' })));
};
var ForwardRef$1a = forwardRef(SvgSpringNotesEditCheck);

var SvgSpringNotesEditDelete = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M18.424 12.99a1.674 1.674 0 0 1 2.367 2.367l-5.014 5.015c-.121.12-.27.209-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.626-2.197c.047-.164.135-.313.256-.434l5.014-5.015Z' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.032 1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h.586a1 1 0 0 0 .707-.293L20.989 8.793a1 1 0 0 0 .293-.707V7a4 4 0 0 0-4-4h-.25V1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5Zm5.194 8.116a.75.75 0 0 0-1.06-1.06l-.884.883-.884-.884a.75.75 0 0 0-1.06 1.061l.883.884-.884.884a.75.75 0 0 0 1.06 1.06l.885-.883.884.883a.75.75 0 0 0 1.06-1.06l-.884-.884.884-.884Z', clipRule: 'evenodd' })));
};
var ForwardRef$19 = forwardRef(SvgSpringNotesEditDelete);

var SvgSpringNotesEditDownload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282.75a.75.75 0 0 1 .75.75V3h6.5V1.5a.75.75 0 0 1 1.5 0V3h.25a4 4 0 0 1 4 4v1.086a1 1 0 0 1-.293.707L8.575 21.207a1 1 0 0 1-.707.293h-.586a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h.25V1.5a.75.75 0 0 1 .75-.75Zm3.25 10.94-.72-.72a.75.75 0 1 0-1.06 1.06l1.292 1.293a1.75 1.75 0 0 0 2.475 0l1.293-1.293a.75.75 0 0 0-1.06-1.06l-.72.72V8.5a.75.75 0 1 0-1.5 0v3.19Zm9.26 1.3a1.674 1.674 0 0 0-2.368 0l-5.014 5.015a1 1 0 0 0-.256.434l-.626 2.197a.5.5 0 0 0 .618.618l2.196-.627a.991.991 0 0 0 .435-.255l5.014-5.015a1.674 1.674 0 0 0 0-2.367Z', clipRule: 'evenodd' })));
};
var ForwardRef$18 = forwardRef(SvgSpringNotesEditDownload);

var SvgSpringNotesEditFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282.75a.75.75 0 0 1 .75.75V3h6.5V1.5a.75.75 0 0 1 1.5 0V3h.25a4 4 0 0 1 4 4v1.086a1 1 0 0 1-.293.707L8.575 21.207a1 1 0 0 1-.707.293h-.586a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h.25V1.5a.75.75 0 0 1 .75-.75ZM12.512 9l-.23.241-.23-.241a1.568 1.568 0 0 0-2.295 0 1.768 1.768 0 0 0 0 2.412l1.607 1.689a1.254 1.254 0 0 0 1.836 0l1.606-1.689a1.768 1.768 0 0 0 0-2.412 1.568 1.568 0 0 0-2.295 0Zm8.28 3.99a1.674 1.674 0 0 0-2.368 0l-5.014 5.015a1 1 0 0 0-.256.434l-.626 2.197a.5.5 0 0 0 .618.618l2.196-.627a.991.991 0 0 0 .435-.255l5.014-5.015a1.674 1.674 0 0 0 0-2.367Z', clipRule: 'evenodd' })));
};
var ForwardRef$17 = forwardRef(SvgSpringNotesEditFavourite);

var SvgSpringNotesEditMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282.75a.75.75 0 0 1 .75.75V3h6.5V1.5a.75.75 0 0 1 1.5 0V3h.25a4 4 0 0 1 4 4v1.086a1 1 0 0 1-.293.707L8.575 21.207a1 1 0 0 1-.707.293h-.586a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h.25V1.5a.75.75 0 0 1 .75-.75Zm6.75 9.75a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75Zm5.76 2.49a1.674 1.674 0 0 0-2.368 0l-5.014 5.015a1 1 0 0 0-.256.434l-.626 2.197a.5.5 0 0 0 .618.618l2.196-.627a.991.991 0 0 0 .435-.255l5.014-5.015a1.674 1.674 0 0 0 0-2.367Z', clipRule: 'evenodd' })));
};
var ForwardRef$16 = forwardRef(SvgSpringNotesEditMinus);

var SvgSpringNotesEditSearch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282.75a.75.75 0 0 1 .75.75V3h6.5V1.5a.75.75 0 0 1 1.5 0V3h.25a4 4 0 0 1 4 4v1.086a1 1 0 0 1-.293.707L8.575 21.207a1 1 0 0 1-.707.293h-.586a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h.25V1.5a.75.75 0 0 1 .75-.75Zm.75 9.75a3.25 3.25 0 1 1 1.544 2.767l-.764.763a.75.75 0 0 1-1.06-1.06l.763-.764a3.235 3.235 0 0 1-.483-1.706Zm3.25-1.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Zm8.51 4.24a1.674 1.674 0 0 0-2.368 0l-5.014 5.015a1 1 0 0 0-.256.434l-.626 2.197a.5.5 0 0 0 .618.618l2.196-.627a.991.991 0 0 0 .435-.255l5.014-5.015a1.674 1.674 0 0 0 0-2.367Z', clipRule: 'evenodd' })));
};
var ForwardRef$15 = forwardRef(SvgSpringNotesEditSearch);

var SvgSpringNotesEditUpload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282.75a.75.75 0 0 1 .75.75V3h6.5V1.5a.75.75 0 0 1 1.5 0V3h.25a4 4 0 0 1 4 4v1.086a1 1 0 0 1-.293.707L8.575 21.207a1 1 0 0 1-.707.293h-.586a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h.25V1.5a.75.75 0 0 1 .75-.75Zm3.25 9.146-.72.72a.75.75 0 0 1-1.06-1.06l1.292-1.293a1.75 1.75 0 0 1 2.475 0l1.293 1.292a.75.75 0 1 1-1.06 1.061l-.72-.72v3.19a.75.75 0 1 1-1.5 0v-3.19Zm9.26 3.094a1.674 1.674 0 0 0-2.368 0l-5.014 5.015a1 1 0 0 0-.256.434l-.626 2.197a.5.5 0 0 0 .618.618l2.196-.627a.991.991 0 0 0 .435-.255l5.014-5.015a1.674 1.674 0 0 0 0-2.367Z', clipRule: 'evenodd' })));
};
var ForwardRef$14 = forwardRef(SvgSpringNotesEditUpload);

var SvgSpringNotesEdit = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.032 1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h.586a1 1 0 0 0 .707-.293L20.989 8.793a1 1 0 0 0 .293-.707V7a4 4 0 0 0-4-4h-.25V1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5Zm11.76 11.49a1.674 1.674 0 0 0-2.368 0l-5.014 5.015a1 1 0 0 0-.256.434l-.626 2.197a.5.5 0 0 0 .618.618l2.196-.627a.991.991 0 0 0 .435-.255l5.014-5.015a1.674 1.674 0 0 0 0-2.367Z', clipRule: 'evenodd' })));
};
var ForwardRef$13 = forwardRef(SvgSpringNotesEdit);

var SvgSpringNotesFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.032 1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-.25V1.5Zm-4.726 9.14.23-.24a1.568 1.568 0 0 1 2.295 0 1.768 1.768 0 0 1 0 2.411L13.225 14.5a1.254 1.254 0 0 1-1.837 0l-1.606-1.689a1.768 1.768 0 0 1 0-2.412 1.568 1.568 0 0 1 2.295 0l.23.242Z', clipRule: 'evenodd' })));
};
var ForwardRef$12 = forwardRef(SvgSpringNotesFavourite);

var SvgSpringNotesList = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.282.75a.75.75 0 0 1 .75.75V3h.25a4 4 0 0 1 4 4v10.5a4 4 0 0 1-4 4h-10a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h.25V1.5a.75.75 0 1 1 1.5 0V3h6.5V1.5a.75.75 0 0 1 .75-.75Zm1.75 11.75a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Zm-.75-3.25a.75.75 0 1 0 0-1.5h-6a.75.75 0 0 0 0 1.5h6Zm.75 7.25a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Zm-9.25-8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$11 = forwardRef(SvgSpringNotesList);

var SvgSpringNotesRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.032 1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-.25V1.5Zm-1.75 11.75a.75.75 0 1 0 0-1.5h-6a.75.75 0 0 0 0 1.5h6Z', clipRule: 'evenodd' })));
};
var ForwardRef$10 = forwardRef(SvgSpringNotesRemove);

var SvgSpringNotesSearch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.032 1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-.25V1.5Zm-4.75 8.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.75 2.25a3.75 3.75 0 1 1 6.878 2.068l.902.902a.75.75 0 1 1-1.06 1.06l-.902-.901A3.75 3.75 0 0 1 8.532 12.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$$ = forwardRef(SvgSpringNotesSearch);

var SvgSpringNotesUpload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.032 1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-.25V1.5Zm-3.28 10.53-.72-.72v4.19a.75.75 0 1 1-1.5 0v-4.19l-.72.72a.75.75 0 1 1-1.06-1.06l1.292-1.293a1.75 1.75 0 0 1 2.475 0l1.293 1.293a.75.75 0 0 1-1.06 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$_ = forwardRef(SvgSpringNotesUpload);

var SvgSpringNotesWriteEdit = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282.75a.75.75 0 0 1 .75.75V3h6.5V1.5a.75.75 0 0 1 1.5 0V3h.25a4 4 0 0 1 4 4v1.086a1 1 0 0 1-.293.707L8.575 21.207a1 1 0 0 1-.707.293h-.586a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h.25V1.5a.75.75 0 0 1 .75-.75Zm7 8.5a.75.75 0 1 0 0-1.5h-7a.75.75 0 1 0 0 1.5h7Zm-3 4a.75.75 0 1 0 0-1.5h-4a.75.75 0 0 0 0 1.5h4Zm-2.25 3.25a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75Zm10.76-3.51a1.674 1.674 0 0 0-2.368 0l-5.014 5.015a1 1 0 0 0-.256.434l-.626 2.197a.5.5 0 0 0 .618.618l2.196-.627a.991.991 0 0 0 .435-.255l5.014-5.015a1.674 1.674 0 0 0 0-2.367Z', clipRule: 'evenodd' })));
};
var ForwardRef$Z = forwardRef(SvgSpringNotesWriteEdit);

var SvgSpringNotes = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.032 1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-.25V1.5Zm-9.75 6.25a.75.75 0 1 0 0 1.5h10a.75.75 0 1 0 0-1.5h-10Zm-.75 4.75a.75.75 0 0 1 .75-.75h10a.75.75 0 1 1 0 1.5h-10a.75.75 0 0 1-.75-.75Zm.75 3.25a.75.75 0 0 0 0 1.5h5a.75.75 0 1 0 0-1.5h-5Z', clipRule: 'evenodd' })));
};
var ForwardRef$Y = forwardRef(SvgSpringNotes);

var SvgStandbyMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM8.75 12a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM12 7.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$X = forwardRef(SvgStandbyMode);

var SvgStethoscope = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.75 2a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0c.304.228.5.591.5 1v3a4.25 4.25 0 0 1-8.5 0V5c0-.409.196-.772.5-1a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-1.5 0v.354A2.751 2.751 0 0 0 1.25 5v3a5.751 5.751 0 0 0 5 5.701v4.549a4.5 4.5 0 1 0 9 0v-5.5a2 2 0 1 1 4 0V14a.8.8 0 0 0 .013.14 2 2 0 1 0 1.474 0 .752.752 0 0 0 .013-.14v-1.25a3.5 3.5 0 1 0-7 0v5.5a3 3 0 1 1-6 0v-4.549a5.75 5.75 0 0 0 5-5.701V5a2.75 2.75 0 0 0-2-2.646V2Z', clipRule: 'evenodd' })));
};
var ForwardRef$W = forwardRef(SvgStethoscope);

var SvgStorage = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v5.25h20V6Zm0 6.75H2V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-5.25Zm-4-8.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75ZM14.75 5a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0V5ZM18 15.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm-3.25.75a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$V = forwardRef(SvgStorage);

var SvgSwitch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22.75 12A6.75 6.75 0 0 0 16 5.25H8a6.75 6.75 0 0 0 0 13.5h8A6.75 6.75 0 0 0 22.75 12Zm-9.657 5.25A5.998 5.998 0 0 1 10 12a5.998 5.998 0 0 1 3.093-5.25H8a5.25 5.25 0 1 0 0 10.5h5.093Z', clipRule: 'evenodd' })));
};
var ForwardRef$U = forwardRef(SvgSwitch);

var SvgSyrup = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.5 2a1.5 1.5 0 1 0 0 3h5a1.5 1.5 0 0 0 0-3h-5ZM6 12.14a4 4 0 0 1 1.781-3.327l.328-.22A2 2 0 0 0 9 6.93V6.5h6v.43a2 2 0 0 0 .89 1.664l.329.219A4 4 0 0 1 18 12.14V18a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-5.86ZM15 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$T = forwardRef(SvgSyrup);

var SvgTablet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20 6a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V6Zm-9 13a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$S = forwardRef(SvgTablet);

var SvgTaskCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19.828 7.828c.133.133.255.274.367.422H18A3.25 3.25 0 0 1 14.75 5V2.805c.148.112.289.234.422.367l4.656 4.656ZM13.25 5V2.104A4 4 0 0 0 12.343 2H7a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-7.343a3.98 3.98 0 0 0-.104-.907H18A4.75 4.75 0 0 1 13.25 5Zm2.314 7.494a.75.75 0 1 0-1.128-.988l-2.87 3.28a.25.25 0 0 1-.345.03L9.47 13.415a.75.75 0 0 0-.938 1.172l1.753 1.402a1.75 1.75 0 0 0 2.41-.214l2.87-3.28Z', clipRule: 'evenodd' })));
};
var ForwardRef$R = forwardRef(SvgTaskCheck);

var SvgTelegram = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm2.896 10.796 15.39-6.65a1 1 0 0 1 1.383 1.074l-2.104 13.276a1 1 0 0 1-1.714.53l-3.453-3.657a2 2 0 0 1-.125-2.6L14.71 9.63c.14-.18-.081-.416-.27-.289l-4.847 3.252a4 4 0 0 1-2.8.637l-3.644-.527c-.998-.144-1.18-1.508-.254-1.908Z' })));
};
var ForwardRef$Q = forwardRef(SvgTelegram);

var SvgTestTube = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.474 3.243a.99.99 0 0 1 1.4 0l6.883 6.882a.99.99 0 1 1-1.4 1.4l-6.883-6.882a.99.99 0 0 1 0-1.4Zm4.556.414a2.343 2.343 0 1 1 3.313 3.313L20 7.313 16.687 4l.343-.343ZM12.53 6.5l4.97 4.97-1.754 1.754-9.111-.828L12.53 6.5Zm-7.276 7.276 9.111.829-5.618 5.617a3.514 3.514 0 1 1-4.97-4.97l1.477-1.476Z', clipRule: 'evenodd' })));
};
var ForwardRef$P = forwardRef(SvgTestTube);

var SvgThermometer = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.006 3.857 9.69 10.174a1.95 1.95 0 0 0-.551 1.103l-.161 1.126a1.95 1.95 0 0 1-.552 1.103l-1.93 1.93.035.034 2 2a.728.728 0 0 1 .033.035l1.93-1.93a1.95 1.95 0 0 1 1.104-.552l1.126-.16a1.95 1.95 0 0 0 1.103-.553l6.317-6.316a2.925 2.925 0 1 0-4.137-4.137ZM7.505 18.564a.764.764 0 0 1-.035-.034l-2-2a.728.728 0 0 1-.033-.035l-2.009 2.008a1.463 1.463 0 1 0 2.069 2.069l2.008-2.008Z', clipRule: 'evenodd' })));
};
var ForwardRef$O = forwardRef(SvgThermometer);

var SvgTiktok = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M10 21a6 6 0 0 0 6-6V8.197c.883.51 1.907.803 3 .803h1V6h-1a3 3 0 0 1-3-3h-3v12a3 3 0 1 1-3-3V9a6 6 0 0 0 0 12Z' })));
};
var ForwardRef$N = forwardRef(SvgTiktok);

var SvgTooth = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20.263 4.24c-2.423-2.288-4.944-1.367-6.869-.003a2.43 2.43 0 0 1-2.793.006c-1.933-1.356-4.464-2.27-6.865-.004C-1.258 8.953 5.85 20.862 8.42 20.862c2.554 0 .7-7.295 3.58-7.387 2.88.092 1.026 7.387 3.58 7.387 2.57 0 9.678-11.909 4.683-16.623Z' })));
};
var ForwardRef$M = forwardRef(SvgTooth);

var SvgTransfusion = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.81 3.066C5.06 4.751 2 8.197 2 11.69c0 2.837 1.89 5.748 5.05 6.239A8.764 8.764 0 0 1 6.5 14.9c0-2.483 1.156-4.811 2.435-6.654a24.43 24.43 0 0 1 2.362-2.868A23.446 23.446 0 0 0 9.19 3.066a1.7 1.7 0 0 0-2.38 0ZM8 14.9c0-4.072 3.837-8.09 5.83-9.9a1.724 1.724 0 0 1 2.34 0C18.164 6.81 22 10.827 22 14.9c0 3.5-2.65 7.1-7 7.1s-7-3.6-7-7.1Zm7.264 4.242a.75.75 0 0 1 .594-.879c1.277-.247 2.15-1.259 2.41-2.426a.75.75 0 0 1 1.464.326c-.369 1.657-1.637 3.196-3.59 3.573a.75.75 0 0 1-.878-.594Z', clipRule: 'evenodd' })));
};
var ForwardRef$L = forwardRef(SvgTransfusion);

var SvgTwitterPlus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M9 3.5V2h4v5h4v4h-4v5a2 2 0 0 0 2 2h4v4h-4a6 6 0 0 1-6-6v-5H5V7h.5A3.5 3.5 0 0 0 9 3.5Z' })));
};
var ForwardRef$K = forwardRef(SvgTwitterPlus);

var SvgTwitterSparrow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15.286 4c-2.104 0-3.81 1.79-3.81 4 0 .334.04.658.113.968-2.023 0-5.07-.409-7.615-2.958-.338-.34-.962-.113-.939.366.378 7.687 3.67 9.929 5.365 10.068-1.095 1.082-2.685 1.935-4.285 2.318-.423.101-.527.564-.114.698 1.145.372 2.784.516 3.666.54 6.241 0 11.313-5.253 11.426-11.778.82-.533 1.345-1.69 1.64-2.51.071-.199-.256-.431-.452-.35-.612.255-1.389.315-2.05.1C17.53 4.569 16.471 4 15.285 4Z' })));
};
var ForwardRef$J = forwardRef(SvgTwitterSparrow);

var SvgTwitter = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M6 4v13a5 5 0 0 0 5 5h5a2 2 0 1 0 0-4h-4a2 2 0 0 1-2-2v-4h6a2 2 0 1 0 0-4h-6V4a2 2 0 1 0-4 0Z' })));
};
var ForwardRef$I = forwardRef(SvgTwitter);

var SvgUndoCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18ZM7.66 7.5a.75.75 0 0 1 1.5 0v.602a4.75 4.75 0 1 1-1.885 5.085.75.75 0 1 1 1.451-.374A3.252 3.252 0 0 0 15.124 12a3.25 3.25 0 0 0-5.398-2.439l.833.212a.75.75 0 0 1-.37 1.454l-1.965-.5A.75.75 0 0 1 7.66 10V7.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$H = forwardRef(SvgUndoCircle);

var SvgUndo = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 3.75A8.25 8.25 0 1 1 3.75 12a.75.75 0 0 0-1.5 0c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25a9.722 9.722 0 0 0-7.046 3.01V3a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75h4.421a.75.75 0 0 0 0-1.5h-2.99a8.233 8.233 0 0 1 6.365-3Z', clipRule: 'evenodd' })));
};
var ForwardRef$G = forwardRef(SvgUndo);

var SvgUnlock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.85 4.562A3.25 3.25 0 0 1 15.25 7H8a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-6c0-1.953-1.4-3.579-3.25-3.93V7a4.75 4.75 0 0 0-7.892-3.562.75.75 0 1 0 .993 1.124ZM14 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$F = forwardRef(SvgUnlock);

var SvgUploadCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.47 5.47a.75.75 0 1 0 1.06 1.06l2.72-2.72V16a.75.75 0 0 0 1.5 0V3.81l2.72 2.72a.75.75 0 1 0 1.06-1.06l-4-4a.75.75 0 0 0-1.06 0l-4 4Zm-1.13 4a.75.75 0 1 0-1.17-.94 8.75 8.75 0 1 0 13.661 0 .75.75 0 0 0-1.17.94 7.25 7.25 0 1 1-11.32 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$E = forwardRef(SvgUploadCircle);

var SvgUploadRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.25 17A4.75 4.75 0 0 0 7 21.75h10A4.75 4.75 0 0 0 21.75 17v-4A4.75 4.75 0 0 0 17 8.25h-.5a.75.75 0 0 0 0 1.5h.5A3.25 3.25 0 0 1 20.25 13v4A3.25 3.25 0 0 1 17 20.25H7A3.25 3.25 0 0 1 3.75 17v-4A3.25 3.25 0 0 1 7 9.75h.5a.75.75 0 0 0 0-1.5H7A4.75 4.75 0 0 0 2.25 13v4ZM8.47 5.47a.75.75 0 0 0 1.06 1.06l1.72-1.72V15a.75.75 0 0 0 1.5 0V4.81l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3Z', clipRule: 'evenodd' })));
};
var ForwardRef$D = forwardRef(SvgUploadRectangle);

var SvgUsb = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm10.2 3.4 1-1.333a1 1 0 0 1 1.6 0l1 1.333A1 1 0 0 1 13 5h-.25v5.96l4.329-1.443a.25.25 0 0 0 .171-.238V7.3a1.5 1.5 0 1 1 1.5 0v1.98a1.75 1.75 0 0 1-1.197 1.66l-4.803 1.602V18a.753.753 0 0 1-.013.14 2 2 0 1 1-1.474 0 .753.753 0 0 1-.013-.14v-3.46l-4.803-1.6a1.75 1.75 0 0 1-1.197-1.66V9.469A1 1 0 0 1 4.5 8.5v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-.75.969v1.81a.25.25 0 0 0 .171.238l4.329 1.443V5H11a1 1 0 0 1-.8-1.6Z', clipRule: 'evenodd' })));
};
var ForwardRef$C = forwardRef(SvgUsb);

var SvgUserAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm3 10c0 2.21-3.134 4-7 4s-7-1.79-7-4 3.134-4 7-4 7 1.79 7 4Zm1-4.25a.75.75 0 0 1-.75-.75v-1.25H16a.75.75 0 0 1 0-1.5h1.25V8a.75.75 0 0 1 1.5 0v1.25H20a.75.75 0 0 1 0 1.5h-1.25V12a.75.75 0 0 1-.75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$B = forwardRef(SvgUserAdd);

var SvgUserBlock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm3 10c0 2.21-3.134 4-7 4s-7-1.79-7-4 3.134-4 7-4 7 1.79 7 4Zm-.524-4.415 4.109-4.109a3 3 0 0 1-4.109 4.109ZM15 10c0 .556.151 1.077.415 1.524l4.109-4.109A3 3 0 0 0 15 10Z', clipRule: 'evenodd' })));
};
var ForwardRef$A = forwardRef(SvgUserBlock);

var SvgUserCircleAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.582 17.919c0 .66.116 1.292.329 1.878a9 9 0 1 1 6.928-7.092 5.5 5.5 0 0 0-7.257 5.213ZM11 13.75a8.21 8.21 0 0 0-3.995 1.03.75.75 0 0 1-.727-1.312A9.71 9.71 0 0 1 11 12.25c.366 0 .727.02 1.082.06a.75.75 0 1 1-.164 1.49 8.343 8.343 0 0 0-.918-.05ZM11 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm11 13a4.002 4.002 0 0 0-4-4 4 4 0 1 0 4 4Zm-3.25-2a.75.75 0 0 0-1.5 0v1.25H16a.75.75 0 0 0 0 1.5h1.25V20a.75.75 0 0 0 1.5 0v-1.25H20a.75.75 0 0 0 0-1.5h-1.25V16Z', clipRule: 'evenodd' })));
};
var ForwardRef$z = forwardRef(SvgUserCircleAdd);

var SvgUserCircleBlock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.582 17.919c0 .66.116 1.292.329 1.878a9 9 0 1 1 6.928-7.092 5.5 5.5 0 0 0-7.257 5.213ZM11 13.75a8.21 8.21 0 0 0-3.995 1.03.75.75 0 0 1-.727-1.312A9.71 9.71 0 0 1 11 12.25c.366 0 .727.02 1.082.06a.75.75 0 1 1-.164 1.49 8.343 8.343 0 0 0-.918-.05ZM11 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm7 9a3.98 3.98 0 0 1 2.248.691l-5.557 5.557A4 4 0 0 1 18 14Zm-2.248 7.309 5.557-5.557a4 4 0 0 1-5.557 5.557Z', clipRule: 'evenodd' })));
};
var ForwardRef$y = forwardRef(SvgUserCircleBlock);

var SvgUserCircleMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.582 17.919c0 .66.116 1.292.329 1.878a9 9 0 1 1 6.928-7.092 5.5 5.5 0 0 0-7.257 5.213ZM11 13.75a8.21 8.21 0 0 0-3.995 1.03.75.75 0 0 1-.727-1.312A9.71 9.71 0 0 1 11 12.25c.366 0 .727.02 1.082.06a.75.75 0 1 1-.164 1.49 8.343 8.343 0 0 0-.918-.05ZM11 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm11 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-1.25 0a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$x = forwardRef(SvgUserCircleMinus);

var SvgUserCircleRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.582 17.919c0 .66.116 1.292.329 1.878a9 9 0 1 1 6.928-7.092 5.5 5.5 0 0 0-7.257 5.213ZM11 13.75a8.21 8.21 0 0 0-3.995 1.03.75.75 0 0 1-.727-1.312A9.71 9.71 0 0 1 11 12.25c.366 0 .727.02 1.082.06a.75.75 0 1 1-.164 1.49 8.343 8.343 0 0 0-.918-.05ZM11 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm11 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-3.116 1.945a.75.75 0 0 0 1.06-1.061L19.062 18l.884-.884a.75.75 0 0 0-1.061-1.06l-.884.883-.884-.884a.75.75 0 0 0-1.06 1.061l.883.884-.884.884a.75.75 0 1 0 1.061 1.06l.884-.883.884.884Z', clipRule: 'evenodd' })));
};
var ForwardRef$w = forwardRef(SvgUserCircleRemove);

var SvgUserCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 12a9.976 9.976 0 0 1-3.441 7.549A9.961 9.961 0 0 1 12 22a9.961 9.961 0 0 1-6.559-2.451A9.977 9.977 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10Zm-7-3a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm-3 5c1.713 0 2.839.917 3.633 1.935.593.76.389 1.876-.47 2.312A6.97 6.97 0 0 1 12 19a6.97 6.97 0 0 1-3.162-.753c-.86-.436-1.064-1.551-.471-2.312C9.16 14.917 10.287 14 12 14Z', clipRule: 'evenodd' })));
};
var ForwardRef$v = forwardRef(SvgUserCircle);

var SvgUserCommunity = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 6c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2Zm11 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2 1.343-2 3-2ZM11.25 3a.75.75 0 0 1 .75-.75A9.75 9.75 0 0 1 21.75 12a.75.75 0 0 1-1.5 0A8.25 8.25 0 0 0 12 3.75a.75.75 0 0 1-.75-.75ZM3 11.25a.75.75 0 0 1 .75.75A8.25 8.25 0 0 0 12 20.25a.75.75 0 0 1 0 1.5A9.75 9.75 0 0 1 2.25 12a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$u = forwardRef(SvgUserCommunity);

var SvgUserMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm3 10c0 2.21-3.134 4-7 4s-7-1.79-7-4 3.134-4 7-4 7 1.79 7 4Zm-1-7.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$t = forwardRef(SvgUserMinus);

var SvgUserPolygon = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.922 2.571a4.067 4.067 0 0 1 4.156 0l4.844 2.868C20.208 6.201 21 7.61 21 9.132v5.736c0 1.523-.792 2.931-2.078 3.693l-.621.367-4.222 2.5a4.067 4.067 0 0 1-4.157 0l-4.223-2.5-.62-.367C3.791 17.799 3 16.39 3 14.868V9.132c0-1.523.792-2.931 2.078-3.693l4.844-2.868Zm6.173 12.633C15.023 14.457 13.583 14 12 14c-1.583 0-3.023.457-4.095 1.204-.515.359-.407 1.095.13 1.418l3.45 2.07a1 1 0 0 0 1.03 0l3.45-2.07c.537-.323.645-1.06.13-1.418ZM12 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z', clipRule: 'evenodd' })));
};
var ForwardRef$s = forwardRef(SvgUserPolygon);

var SvgUserRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2H6a4 4 0 0 0-4 4v12a4.002 4.002 0 0 0 4 4h12a4.002 4.002 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-3 7a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm-7.847 8.015C7.7 15.282 9.663 14 12 14c2.337 0 4.3 1.282 4.847 3.015.167.527-.295.985-.847.985H8c-.552 0-1.014-.458-.847-.985Z', clipRule: 'evenodd' })));
};
var ForwardRef$r = forwardRef(SvgUserRectangle);

var SvgUserRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm3 10c0 2.21-3.134 4-7 4s-7-1.79-7-4 3.134-4 7-4 7 1.79 7 4Zm-.47-9.53a.75.75 0 1 0-1.06 1.06L16.94 10l-1.47 1.47a.75.75 0 1 0 1.06 1.06L18 11.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L19.06 10l1.47-1.47a.75.75 0 0 0-1.06-1.06L18 8.94l-1.47-1.47Z', clipRule: 'evenodd' })));
};
var ForwardRef$q = forwardRef(SvgUserRemove);

var SvgUser = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 10c3.866 0 7-1.79 7-4s-3.134-4-7-4-7 1.79-7 4 3.134 4 7 4Z', clipRule: 'evenodd' })));
};
var ForwardRef$p = forwardRef(SvgUser);

var SvgUsersDouble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 10c3.866 0 7-1.79 7-4s-3.134-4-7-4-7 1.79-7 4 3.134 4 7 4Zm3.961-10.184A5.482 5.482 0 0 0 15.5 7c0-.705-.133-1.378-.374-1.997a3 3 0 1 1-1.165 5.813ZM18.5 17c0 .539-.12 1.06-.343 1.552C19.863 18.021 21 17.078 21 16c0-1.506-2.22-2.753-5.113-2.967 1.61 1 2.613 2.408 2.613 3.967Z', clipRule: 'evenodd' })));
};
var ForwardRef$o = forwardRef(SvgUsersDouble);

var SvgUsersTriple = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 8c3.314 0 6-1.343 6-3s-2.686-3-6-3-6 1.343-6 3 2.686 3 6 3Zm-5.618-5.981C3.912 13.171 2 14.224 2 15.5c0 1.052 1.3 1.952 3.14 2.321-.412-.556-.64-1.173-.64-1.82 0-1.144.71-2.188 1.882-2.982ZM19.5 16c0 .648-.228 1.265-.64 1.821 1.84-.369 3.14-1.269 3.14-2.32 0-1.277-1.912-2.33-4.382-2.482C18.79 13.813 19.5 14.857 19.5 16Zm-3.782-5.465a4.518 4.518 0 0 0 .69-3.446 2 2 0 1 1-.69 3.446ZM7 7a2 2 0 0 1 .592.09 4.52 4.52 0 0 0 .69 3.445A2 2 0 1 1 7 7Z', clipRule: 'evenodd' })));
};
var ForwardRef$n = forwardRef(SvgUsersTriple);

var SvgVibrateMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.5 7a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2V7ZM19 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75ZM22.75 9a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0V9ZM5 14.75a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75ZM1.25 15a.75.75 0 0 0 1.5 0V9a.75.75 0 0 0-1.5 0v6Z', clipRule: 'evenodd' })));
};
var ForwardRef$m = forwardRef(SvgVibrateMode);

var SvgVideoOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M1.47 1.47a.75.75 0 0 0 0 1.06l2.21 2.211A3.995 3.995 0 0 0 2 8v8a4 4 0 0 0 4 4h6c1.883 0 3.461-1.3 3.887-3.052l5.583 5.582a.75.75 0 1 0 1.06-1.06l-20-20a.75.75 0 0 0-1.06 0ZM16 12.94 7.06 4H12a4 4 0 0 1 4 4v4.94Zm1.5 1.5 2.507 2.506c1.018-.011 1.993-.802 1.993-2.004V9.057c0-1.813-2.219-2.69-3.46-1.367L17.5 8.8v5.64Z', clipRule: 'evenodd' })));
};
var ForwardRef$l = forwardRef(SvgVideoOff);

var SvgVideo = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2 8a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Zm11 1a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm5.54 7.31L17.5 15.2V8.8l1.04-1.11C19.782 6.367 22 7.244 22 9.057v5.885c0 1.813-2.219 2.691-3.46 1.368Z', clipRule: 'evenodd' })));
};
var ForwardRef$k = forwardRef(SvgVideo);

var SvgViewOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.87 9.853a3.085 3.085 0 0 0 0 4.294C4.825 16.205 8.184 19 12 19c1.66 0 3.234-.53 4.643-1.296l2.827 2.826a.75.75 0 1 0 1.06-1.06l-16-16a.75.75 0 0 0-1.06 1.06l2.575 2.575C4.782 7.975 3.7 8.98 2.87 9.853ZM9 12a3 3 0 0 0 4.524 2.585l-4.109-4.109A2.986 2.986 0 0 0 9 12Zm12.13-2.147a3.085 3.085 0 0 1 0 4.294 21.835 21.835 0 0 1-2.032 1.89l-4.099-4.098A3 3 0 0 0 12.061 9L8.72 5.658C9.754 5.25 10.857 5 11.999 5c3.816 0 7.175 2.795 9.131 4.853Z', clipRule: 'evenodd' })));
};
var ForwardRef$j = forwardRef(SvgViewOff);

var SvgViewPrivacy = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 18a8.39 8.39 0 0 0 2-.248v-4.516A3 3 0 1 1 14.83 10h7.002a3.162 3.162 0 0 0-.702-1.147C19.174 6.795 15.816 4 12 4 8.184 4 4.825 6.795 2.87 8.853a3.085 3.085 0 0 0 0 4.294C4.825 15.205 8.184 18 12 18Zm6.5-5.25a.75.75 0 0 0-.75.75V15h1.5v-1.5a.75.75 0 0 0-.75-.75Zm-2.25.75v1.645A2 2 0 0 0 15 17v1a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-1a2 2 0 0 0-1.25-1.855V13.5a2.25 2.25 0 0 0-4.5 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$i = forwardRef(SvgViewPrivacy);

var SvgView = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21.13 14.147a3.085 3.085 0 0 0 0-4.294C19.174 7.795 15.816 5 12 5 8.184 5 4.825 7.795 2.87 9.853a3.085 3.085 0 0 0 0 4.294C4.825 16.205 8.184 19 12 19c3.816 0 7.174-2.795 9.13-4.853ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', clipRule: 'evenodd' })));
};
var ForwardRef$h = forwardRef(SvgView);

var SvgWhatsapp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 12c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-4.27-.955l-4.356.726a1 1 0 0 1-1.151-1.146l.713-4.396A9.962 9.962 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10Zm-6 2.675v.436a.889.889 0 0 1-.889.889A7.111 7.111 0 0 1 8 8.889C8 8.398 8.398 8 8.889 8h.436c.542 0 1.03.33 1.23.833l.187.466a1.08 1.08 0 0 1-.52 1.368s.222 1.11 1.111 2c.89.889 2 1.11 2 1.11a1.08 1.08 0 0 1 1.367-.519l.467.187c.503.2.833.688.833 1.23Z', clipRule: 'evenodd' })));
};
var ForwardRef$g = forwardRef(SvgWhatsapp);

var SvgWheelChair = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3.25 3A.75.75 0 0 1 4 2.25h1A2.75 2.75 0 0 1 7.75 5v.25H17A2.75 2.75 0 0 1 19.75 8v7.55a2.755 2.755 0 0 1 1.431 1.836 2 2 0 1 1-1.812-.284 1.247 1.247 0 0 0-.869-.352h-5.043A6.5 6.5 0 0 0 6.25 9.543V5c0-.69-.56-1.25-1.25-1.25H4A.75.75 0 0 1 3.25 3ZM12 16a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$f = forwardRef(SvgWheelChair);

var SvgWheelChairHuman = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.75 2.75H15a.75.75 0 0 0 0-1.5h-3a7.75 7.75 0 1 0 5.384 13.325l.468.803a.75.75 0 0 0 .648.372H20a.75.75 0 0 0 0-1.5h-1.07l-3.282-5.628A.75.75 0 0 0 15 14.25h-2.25v-5.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$e = forwardRef(SvgWheelChairHuman);

var SvgWidgets = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.1 5.242a2 2 0 0 0 0 2.829l2.829 2.828a2 2 0 0 0 2.828 0l2.829-2.828a2 2 0 0 0 0-2.829l-2.829-2.828a2 2 0 0 0-2.828 0L13.1 5.242ZM4 2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Zm0 12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H4Zm10 2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$d = forwardRef(SvgWidgets);

var SvgWifiSignalBad = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.393 18.83 3.036 8.898c-.594-.801-.513-1.93.26-2.56 5.448-4.45 11.96-4.45 17.408 0 .773.63.854 1.759.26 2.56l-2.508 3.386a2.25 2.25 0 0 0-3.047 3.307l.343.343-2.145 2.896a2 2 0 0 1-3.214 0Zm7.137-5.36a.75.75 0 1 0-1.06 1.06l1.59 1.591-1.59 1.591a.75.75 0 0 0 1.06 1.061l1.591-1.591 1.591 1.591a.75.75 0 0 0 1.061-1.06l-1.591-1.592 1.591-1.59a.75.75 0 1 0-1.06-1.061l-1.592 1.59-1.59-1.59Z', clipRule: 'evenodd' })));
};
var ForwardRef$c = forwardRef(SvgWifiSignalBad);

var SvgWifiSignalNoInternet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.393 18.83 3.036 8.898c-.594-.801-.513-1.93.26-2.56 5.448-4.45 11.96-4.45 17.408 0 .773.63.854 1.759.26 2.56l-1.714 2.315V10a2.25 2.25 0 1 0-4.5 0v7.288l-1.143 1.542a2 2 0 0 1-3.214 0ZM17.75 10a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Zm0 7a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1Z', clipRule: 'evenodd' })));
};
var ForwardRef$b = forwardRef(SvgWifiSignalNoInternet);

var SvgWifiSignalOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3.53 2.47a.75.75 0 0 0-1.06 1.06l3.189 3.19c-.805.45-1.595.99-2.363 1.617-.773.631-.854 1.76-.26 2.561l7.357 9.932a2 2 0 0 0 3.214 0l2.623-3.54 4.24 4.24a.75.75 0 1 0 1.06-1.06l-18-18Zm17.434 8.428c.594-.801.513-1.93-.26-2.56-3.774-3.083-8.06-4.03-12.147-2.842l9.426 9.427 2.981-4.025Z', clipRule: 'evenodd' })));
};
var ForwardRef$a = forwardRef(SvgWifiSignalOff);

var SvgWifiSignal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M10.393 18.83 3.036 8.898c-.594-.801-.513-1.93.26-2.56 5.448-4.45 11.96-4.45 17.408 0 .773.63.854 1.759.26 2.56l-7.357 9.932a2 2 0 0 1-3.214 0Z' })));
};
var ForwardRef$9 = forwardRef(SvgWifiSignal);

var SvgWifiOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.47 2.47a.75.75 0 0 1 1.06 0l2.707 2.706a.742.742 0 0 1 .024.024l3.753 3.753a.745.745 0 0 1 .023.023l5.17 5.17a.78.78 0 0 1 .02.021l6.303 6.303a.75.75 0 1 1-1.06 1.06l-6.26-6.26a3.231 3.231 0 0 0-1.765-.52 3.24 3.24 0 0 0-2.454 1.119.75.75 0 1 1-1.131-.985 4.74 4.74 0 0 1 3.336-1.628l-2.89-2.888a8.26 8.26 0 0 0-2.58 1.686.75.75 0 0 1-1.04-1.081 9.77 9.77 0 0 1 2.487-1.74L5.595 6.657c-.748.452-1.447.977-2.089 1.563a.75.75 0 1 1-1.012-1.107 14.807 14.807 0 0 1 2.012-1.545L2.47 3.53a.75.75 0 0 1 0-1.06ZM13.445 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8.758 5.27a13.26 13.26 0 0 1 3.687-.52 13.2 13.2 0 0 1 8.939 3.47.75.75 0 0 0 1.012-1.108 14.7 14.7 0 0 0-9.95-3.862c-1.424 0-2.801.202-4.105.579a.75.75 0 0 0 .417 1.44Zm4.307 3a.75.75 0 1 0-.094 1.497 8.219 8.219 0 0 1 5.193 2.287.75.75 0 1 0 1.04-1.081 9.718 9.718 0 0 0-6.139-2.704Z', clipRule: 'evenodd' })));
};
var ForwardRef$8 = forwardRef(SvgWifiOff);

var SvgWifi = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3.061 8.22A13.2 13.2 0 0 1 12 4.75a13.2 13.2 0 0 1 8.939 3.47.75.75 0 0 0 1.012-1.108A14.7 14.7 0 0 0 12 3.25a14.7 14.7 0 0 0-9.951 3.862A.75.75 0 0 0 3.06 8.22Zm3.22 3.834A8.22 8.22 0 0 1 12 9.75a8.22 8.22 0 0 1 5.719 2.304.75.75 0 1 0 1.04-1.081A9.72 9.72 0 0 0 12 8.25a9.72 9.72 0 0 0-6.759 2.723.75.75 0 1 0 1.04 1.08Zm3.265 3.815A3.24 3.24 0 0 1 12 14.75c.98 0 1.857.432 2.454 1.119a.75.75 0 0 0 1.131-.985A4.74 4.74 0 0 0 12 13.25a4.74 4.74 0 0 0-3.586 1.634.75.75 0 1 0 1.132.985ZM12 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$7 = forwardRef(SvgWifi);

var SvgWirelessCharging = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.46 5.459a.75.75 0 1 0-1.061-1.06 10.719 10.719 0 0 0-3.149 7.6c0 2.97 1.204 5.658 3.149 7.602a.75.75 0 1 0 1.06-1.06A9.219 9.219 0 0 1 2.75 12a9.219 9.219 0 0 1 2.71-6.541Zm14.14-1.06a.75.75 0 0 0-1.06 1.06 9.219 9.219 0 0 1 2.709 6.54 9.218 9.218 0 0 1-2.71 6.542.75.75 0 0 0 1.061 1.06A10.719 10.719 0 0 0 22.75 12c0-2.969-1.204-5.657-3.149-7.602ZM8.288 8.286a.75.75 0 0 0-1.061-1.06A6.731 6.731 0 0 0 5.25 12a6.73 6.73 0 0 0 1.977 4.773.75.75 0 0 0 1.06-1.06A5.231 5.231 0 0 1 6.75 12c0-1.45.587-2.762 1.538-3.713Zm8.485-1.06a.75.75 0 0 0-1.06 1.06A5.231 5.231 0 0 1 17.25 12a5.23 5.23 0 0 1-1.538 3.712.75.75 0 1 0 1.061 1.06A6.73 6.73 0 0 0 18.75 12a6.731 6.731 0 0 0-1.977-4.773ZM13.6 8.45a.75.75 0 1 0-1.2-.9l-3 4a.75.75 0 0 0 .6 1.2h2.5l-2.1 2.8a.75.75 0 1 0 1.2.9l3-4a.75.75 0 0 0-.6-1.2h-2.5l2.1-2.8Z', clipRule: 'evenodd' })));
};
var ForwardRef$6 = forwardRef(SvgWirelessCharging);

var SvgYoutube = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.14 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h13.72a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H5.14Zm10.071 8.106-4.764-2.382A1 1 0 0 0 9 9.618v4.764a1 1 0 0 0 1.447.894l4.764-2.382a1 1 0 0 0 0-1.788Z', clipRule: 'evenodd' })));
};
var ForwardRef$5 = forwardRef(SvgYoutube);

var SvgZoomInRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm7 4.25a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-2.19l2.72-2.72a.75.75 0 0 0-1.06-1.06l-2.72 2.72V7a.75.75 0 0 0-.75-.75ZM6.25 13c0 .414.336.75.75.75h2.19l-2.72 2.72a.75.75 0 1 0 1.06 1.06l2.72-2.72V17a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-.75-.75H7a.75.75 0 0 0-.75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$4 = forwardRef(SvgZoomInRectangle);

var SvgZoomIn = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20.53 3.47a.75.75 0 0 1 0 1.06l-5.72 5.72H18a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 1.5 0v3.19l5.72-5.72a.75.75 0 0 1 1.06 0ZM6 13.75a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-3.19l-5.72 5.72a.75.75 0 0 1-1.06-1.06l5.72-5.72H6Z', clipRule: 'evenodd' })));
};
var ForwardRef$3 = forwardRef(SvgZoomIn);

var SvgZoomOutCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm.25-13c0 .414.336.75.75.75h1.19l-5.44 5.44V13a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5H9.81l5.44-5.44V11a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$2 = forwardRef(SvgZoomOutCircle);

var SvgZoomOutRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-5.75 6c0 .414.336.75.75.75h1.19l-5.44 5.44V13a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5H9.81l5.44-5.44V11a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$1 = forwardRef(SvgZoomOutRectangle);

var SvgZoomOut = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.5 6.75a.75.75 0 0 1 0-1.5H18a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V7.81l-9.44 9.44h2.69a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l9.44-9.44H13.5Z', clipRule: 'evenodd' })));
};
var ForwardRef = forwardRef(SvgZoomOut);

export { ForwardRef$4J as AboutPhone, ForwardRef$4I as Accessibility, ForwardRef$4H as Activity, ForwardRef$4F as AirplaneMode, ForwardRef$4G as AirplaneModeOff, ForwardRef$4E as Ambulance, ForwardRef$4D as AppsCircle, ForwardRef$4C as AppsDoubleCircle, ForwardRef$4B as AppsRectangle, ForwardRef$4A as AppsTripleRectangle, ForwardRef$4x as ArrowBack, ForwardRef$4z as ArrowBackCircle, ForwardRef$4y as ArrowBackRectangle, ForwardRef$4u as ArrowDown, ForwardRef$4w as ArrowDownCircle, ForwardRef$4v as ArrowDownRectangle, ForwardRef$4t as ArrowDropDown, ForwardRef$4s as ArrowDropLeft, ForwardRef$4r as ArrowDropRight, ForwardRef$4q as ArrowDropUp, ForwardRef$4n as ArrowLeft, ForwardRef$4p as ArrowLeftCircle, ForwardRef$4o as ArrowLeftRectangle, ForwardRef$4k as ArrowMove, ForwardRef$4m as ArrowMoveCircle, ForwardRef$4l as ArrowMoveRectangle, ForwardRef$4h as ArrowReturn, ForwardRef$4j as ArrowReturnCircle, ForwardRef$4i as ArrowReturnRectangle, ForwardRef$4e as ArrowRight, ForwardRef$4g as ArrowRightCircle, ForwardRef$4f as ArrowRightRectangle, ForwardRef$4a as ArrowSort, ForwardRef$4d as ArrowSortCircle, ForwardRef$4b as ArrowSortRectangle, ForwardRef$4c as ArrowSortRectangleHalf, ForwardRef$49 as ArrowThickDown, ForwardRef$48 as ArrowThickLeft, ForwardRef$47 as ArrowThickRight, ForwardRef$46 as ArrowThickUp, ForwardRef$42 as ArrowTransfer, ForwardRef$45 as ArrowTransferCircle, ForwardRef$43 as ArrowTransferRectangle, ForwardRef$44 as ArrowTransferRectangleHalf, ForwardRef$3$ as ArrowUp, ForwardRef$41 as ArrowUpCircle, ForwardRef$40 as ArrowUpRectangle, ForwardRef$3Z as Auto, ForwardRef$3_ as AutoRotation, ForwardRef$3O as Battery, ForwardRef$3Y as BatteryAlert, ForwardRef$3W as BatteryCharging, ForwardRef$3X as BatteryChargingFull, ForwardRef$3R as BatteryHorizontal, ForwardRef$3V as BatteryHorizontalCharging, ForwardRef$3U as BatteryHorizontalFull, ForwardRef$3T as BatteryHorizontalLowbet, ForwardRef$3S as BatteryHorizontalSavingMode, ForwardRef$3Q as BatteryLowbet, ForwardRef$3P as BatterySavingMode, ForwardRef$3M as Blood, ForwardRef$3N as BloodPlus, ForwardRef$3J as Bluetooth, ForwardRef$3L as BluetoothConnected, ForwardRef$3K as BluetoothOff, ForwardRef$3I as CallHospital, ForwardRef$3F as Camera, ForwardRef$3H as CameraOff, ForwardRef$3G as CameraSwitch, ForwardRef$3D as Capsule, ForwardRef$3E as CapsuleOpen, ForwardRef$3C as Cardiogram, ForwardRef$3B as Cast, ForwardRef$3q as Clipboard, ForwardRef$3A as ClipboardActivity, ForwardRef$3z as ClipboardAdd, ForwardRef$3y as ClipboardCheck, ForwardRef$3x as ClipboardDelete, ForwardRef$3w as ClipboardDowload, ForwardRef$3v as ClipboardFavourite, ForwardRef$3u as ClipboardList, ForwardRef$3t as ClipboardMinus, ForwardRef$3s as ClipboardSearch, ForwardRef$3r as ClipboardUpload, ForwardRef$3p as ColorInversion, ForwardRef$3o as Computer, ForwardRef$3n as DarkMode, ForwardRef$3m as Devices, ForwardRef$3l as DigitalHealth, ForwardRef$3h as DirectionDown, ForwardRef$3k as DirectionDownCircle, ForwardRef$3i as DirectionDownDouble, ForwardRef$3j as DirectionDownDoubleRectangle, ForwardRef$3d as DirectionLeft, ForwardRef$3e as DirectionLeftDouble, ForwardRef$3g as DirectionLeftDoubleCircle, ForwardRef$3f as DirectionLeftDoubleRectangle, ForwardRef$39 as DirectionRight, ForwardRef$3a as DirectionRightDouble, ForwardRef$3c as DirectionRightDoubleCircle, ForwardRef$3b as DirectionRightDoubleRectangle, ForwardRef$35 as DirectionUp, ForwardRef$36 as DirectionUpDouble, ForwardRef$38 as DirectionUpDoubleCircle, ForwardRef$37 as DirectionUpDoubleRectangle, ForwardRef$34 as Dna, ForwardRef$33 as DoNotDisturb, ForwardRef$32 as DownloadCircle, ForwardRef$31 as DownloadRectangle, ForwardRef$30 as Dribbble, ForwardRef$2$ as Drive, ForwardRef$2Z as Exchange, ForwardRef$2_ as ExchangeRectangle, ForwardRef$2X as Eye, ForwardRef$2Y as EyeDropper, ForwardRef$2V as Facebook, ForwardRef$2W as FacebookSquare, ForwardRef$2U as Figma, ForwardRef$2T as FilterBigCircle, ForwardRef$2S as FilterSmallCircle, ForwardRef$2R as FingerPrint, ForwardRef$2Q as Fiverr, ForwardRef$2M as Flash, ForwardRef$2P as FlashAuto, ForwardRef$2O as FlashLight, ForwardRef$2N as FlashOff, ForwardRef$2L as GiveBlood, ForwardRef$2K as GivePill, ForwardRef$2J as Gmail, ForwardRef$2H as Google, ForwardRef$2I as GooglePlus, ForwardRef$2F as Gps, ForwardRef$2G as GpsOff, ForwardRef$2E as GraphicEq, ForwardRef$2D as Hangout, ForwardRef$2C as HealthCare, ForwardRef$2B as Heart, ForwardRef$2A as Honey, ForwardRef$2x as Hospital, ForwardRef$2z as HospitalBed, ForwardRef$2y as HospitalPanel, ForwardRef$2v as Hotspot, ForwardRef$2w as HotspotOff, ForwardRef$2u as InCircle, ForwardRef$2t as InRectangle, ForwardRef$2s as Injection, ForwardRef$2r as Instagram, ForwardRef$2q as Laptop, ForwardRef$2p as LightMode, ForwardRef$2o as Linkedln, ForwardRef$2m as Location, ForwardRef$2n as LocationHospital, ForwardRef$2l as Lock, ForwardRef$2k as Mask, ForwardRef$2j as MaximizeCircle, ForwardRef$2h as MaximizeRectangle, ForwardRef$2i as MaximizeRectangleDoted, ForwardRef$2g as MedicalBook, ForwardRef$2f as MedicalInformation, ForwardRef$2e as MedicalService, ForwardRef$2d as MenuCircleHorizontal, ForwardRef$2c as MenuCircleVertical, ForwardRef$2b as MenuHome, ForwardRef$29 as MenuLineHorizontal, ForwardRef$2a as MenuLineHorizontalHalf, ForwardRef$27 as MenuLineVertical, ForwardRef$28 as MenuLineVerticalHalf, ForwardRef$26 as MenuUser, ForwardRef$25 as Messenger, ForwardRef$24 as MinimizeCircle, ForwardRef$22 as MinimizeRectangle, ForwardRef$23 as MinimizeRectangleDoted, ForwardRef$1$ as Mobile, ForwardRef$20 as MobileData, ForwardRef$21 as MobileDataOff, ForwardRef$1Z as Music, ForwardRef$1_ as MusicOff, ForwardRef$1Y as Netflix, ForwardRef$1X as NextArrow, ForwardRef$1W as NightMode, ForwardRef$1T as Notification, ForwardRef$1V as NotificationOff, ForwardRef$1U as NotificationWithCircle, ForwardRef$1S as OutCircle, ForwardRef$1R as OutRectangle, ForwardRef$1Q as Payoneer, ForwardRef$1P as Paypal, ForwardRef$1O as PhoneLock, ForwardRef$1N as PillTablet, ForwardRef$1L as Pills, ForwardRef$1M as PillsCapsule, ForwardRef$1J as Pinterest, ForwardRef$1K as PinterestCircle, ForwardRef$1I as Plaster, ForwardRef$1H as PreviousArrow, ForwardRef$1G as QrScan, ForwardRef$1C as Redo, ForwardRef$1F as RedoCircle, ForwardRef$1E as RedoRectangleLeft, ForwardRef$1D as RedoRectangleRight, ForwardRef$1z as Reload, ForwardRef$1B as ReloadCircle, ForwardRef$1A as ReloadRectangle, ForwardRef$1y as Restart, ForwardRef$1x as RotateLock, ForwardRef$1w as ScreenRotate, ForwardRef$1v as Screenshot, ForwardRef$1u as SdStorage, ForwardRef$1t as Security, ForwardRef$1s as Setting, ForwardRef$1r as ShutDown, ForwardRef$1l as SignalCelluler, ForwardRef$1q as SignalCellulerBad, ForwardRef$1p as SignalCellulerLine, ForwardRef$1n as SignalCellulerNoInternet, ForwardRef$1o as SignalCellulerNoInternetDashed, ForwardRef$1m as SignalCellulerOff, ForwardRef$1k as SimCard, ForwardRef$1j as Skype, ForwardRef$1i as Slack, ForwardRef$1h as Snapchat, ForwardRef$1g as Spotify, ForwardRef$Y as SpringNotes, ForwardRef$1f as SpringNotesAdd, ForwardRef$1e as SpringNotesCheck, ForwardRef$1d as SpringNotesDelete, ForwardRef$1c as SpringNotesDownload, ForwardRef$13 as SpringNotesEdit, ForwardRef$1b as SpringNotesEditAdd, ForwardRef$1a as SpringNotesEditCheck, ForwardRef$19 as SpringNotesEditDelete, ForwardRef$18 as SpringNotesEditDownload, ForwardRef$17 as SpringNotesEditFavourite, ForwardRef$16 as SpringNotesEditMinus, ForwardRef$15 as SpringNotesEditSearch, ForwardRef$14 as SpringNotesEditUpload, ForwardRef$12 as SpringNotesFavourite, ForwardRef$11 as SpringNotesList, ForwardRef$10 as SpringNotesRemove, ForwardRef$$ as SpringNotesSearch, ForwardRef$_ as SpringNotesUpload, ForwardRef$Z as SpringNotesWriteEdit, ForwardRef$X as StandbyMode, ForwardRef$W as Stethoscope, ForwardRef$V as Storage, ForwardRef$U as Switch, ForwardRef$T as Syrup, ForwardRef$S as Tablet, ForwardRef$R as TaskCheck, ForwardRef$Q as Telegram, ForwardRef$P as TestTube, ForwardRef$O as Thermometer, ForwardRef$N as Tiktok, ForwardRef$M as Tooth, ForwardRef$L as Transfusion, ForwardRef$I as Twitter, ForwardRef$K as TwitterPlus, ForwardRef$J as TwitterSparrow, ForwardRef$G as Undo, ForwardRef$H as UndoCircle, ForwardRef$F as Unlock, ForwardRef$E as UploadCircle, ForwardRef$D as UploadRectangle, ForwardRef$C as Usb, ForwardRef$p as User, ForwardRef$B as UserAdd, ForwardRef$A as UserBlock, ForwardRef$v as UserCircle, ForwardRef$z as UserCircleAdd, ForwardRef$y as UserCircleBlock, ForwardRef$x as UserCircleMinus, ForwardRef$w as UserCircleRemove, ForwardRef$u as UserCommunity, ForwardRef$t as UserMinus, ForwardRef$s as UserPolygon, ForwardRef$r as UserRectangle, ForwardRef$q as UserRemove, ForwardRef$o as UsersDouble, ForwardRef$n as UsersTriple, ForwardRef$m as VibrateMode, ForwardRef$k as Video, ForwardRef$l as VideoOff, ForwardRef$h as View, ForwardRef$j as ViewOff, ForwardRef$i as ViewPrivacy, ForwardRef$g as Whatsapp, ForwardRef$f as WheelChair, ForwardRef$e as WheelChairHuman, ForwardRef$d as Widgets, ForwardRef$7 as Wifi, ForwardRef$8 as WifiOff, ForwardRef$9 as WifiSignal, ForwardRef$c as WifiSignalBad, ForwardRef$b as WifiSignalNoInternet, ForwardRef$a as WifiSignalOff, ForwardRef$6 as WirelessCharging, ForwardRef$5 as Youtube, ForwardRef$3 as ZoomIn, ForwardRef$4 as ZoomInRectangle, ForwardRef as ZoomOut, ForwardRef$2 as ZoomOutCircle, ForwardRef$1 as ZoomOutRectangle };
