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
var ForwardRef$au = forwardRef(SvgAboutPhone);

var SvgAccessibility = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM4.272 5.82a.75.75 0 0 1 .907-.548c2.681.66 4.716.979 6.754.978 2.04-.001 4.12-.322 6.894-.98a.75.75 0 0 1 .346 1.46c-1.952.463-3.609.772-5.173.92v4.305l.744 5.952a.75.75 0 1 1-1.488.186L12.494 12h-.988l-.762 6.093a.75.75 0 1 1-1.488-.186L10 11.952v-4.29c-1.583-.141-3.236-.455-5.18-.934a.75.75 0 0 1-.548-.908Z', clipRule: 'evenodd' })));
};
var ForwardRef$at = forwardRef(SvgAccessibility);

var SvgActivity = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6Zm4.685 5.695a.75.75 0 0 0-1.356-.03L7.536 11.25H6a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 .67-.415l1.29-2.578 3.355 7.548a.75.75 0 0 0 1.381-.026l1.812-4.529H18a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0-.696.472l-1.34 3.35-3.279-7.377Z', clipRule: 'evenodd' })));
};
var ForwardRef$as = forwardRef(SvgActivity);

var SvgAddTo = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M4 13.5V19a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5.5h-4.5a2.5 2.5 0 0 1-2-1l-1.5-2-1.5 2a2.5 2.5 0 0 1-2 1H4Zm7.25-9.31-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0L14.53 4.53a.75.75 0 0 0-1.06-1.06l-.72.72V2a.75.75 0 0 0-1.5 0v2.19Z', clipRule: 'evenodd' }),
        React.createElement("path", { fill: 'currentColor', d: 'M4.55 8.04h14.913a1 1 0 0 1 .797.396l1.456 1.924a1 1 0 0 1-.797 1.603h-5.39a1 1 0 0 1-.79-.388L12.005 8.04l-2.728 3.534a1 1 0 0 1-.791.39H3.043a1 1 0 0 1-.787-1.617l1.506-1.924a1 1 0 0 1 .788-.383Z' })));
};
var ForwardRef$ar = forwardRef(SvgAddTo);

var SvgAirPlane = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M14.41 6.34V4.405a2.41 2.41 0 1 0-4.821 0V6.34a2 2 0 0 1-.99 1.726l-4.89 2.862c-.88.515-.515 1.863.505 1.863h4.524a1 1 0 0 1 1 1v2.477a3 3 0 0 1-.62 1.826l-1.775 2.313a.994.994 0 0 0 1.159 1.527l2.736-1.123a2 2 0 0 1 1.517 0l2.743 1.123a.994.994 0 0 0 1.159-1.527l-1.775-2.313a3 3 0 0 1-.62-1.826V13.79a1 1 0 0 1 1-1h4.524c1.02 0 1.385-1.348.505-1.863L15.4 8.066a2 2 0 0 1-.99-1.726Z' })));
};
var ForwardRef$aq = forwardRef(SvgAirPlane);

var SvgAirplaneModeOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.605 6.224V4.395a2.395 2.395 0 0 1 4.79 0v1.829c0 .748.426 1.444 1.126 1.84l4.914 2.784c1.02.578.569 2.006-.635 2.006h-3.886L9.582 6.522c.015-.098.023-.198.023-.298ZM3.53 2.47a.75.75 0 0 0-1.06 1.06l5.067 5.068-3.972 2.25c-1.02.578-.569 2.006.635 2.006h4.207c.662 0 1.198.486 1.198 1.085v2.599c0 .428-.14.847-.403 1.204l-1.886 2.564c-.681.927.433 2.071 1.532 1.573l2.08-.943a2.619 2.619 0 0 1 2.143 0l2.081.943c1.098.498 2.213-.646 1.532-1.573l-1.887-2.564a2.029 2.029 0 0 1-.402-1.204v-1.082l6.075 6.074a.75.75 0 1 0 1.06-1.06l-18-18Z', clipRule: 'evenodd' })));
};
var ForwardRef$ap = forwardRef(SvgAirplaneModeOff);

var SvgAirplaneMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm16.684 20.306-1.887-2.564a2.029 2.029 0 0 1-.402-1.204v-2.6c0-.599.536-1.084 1.198-1.084H19.8c1.203 0 1.655-1.428.635-2.006l-4.914-2.784c-.7-.396-1.126-1.092-1.126-1.84V4.395a2.395 2.395 0 0 0-4.79 0v1.829c0 .748-.426 1.444-1.126 1.84l-4.914 2.784c-1.02.578-.568 2.006.635 2.006h4.207c.662 0 1.198.486 1.198 1.085v2.599c0 .428-.14.847-.402 1.204l-1.887 2.564c-.681.927.433 2.071 1.532 1.573l2.08-.943a2.619 2.619 0 0 1 2.143 0l2.081.943c1.098.498 2.213-.646 1.532-1.573Z' })));
};
var ForwardRef$ao = forwardRef(SvgAirplaneMode);

var SvgAmbulance = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 3h3.5a4 4 0 0 1 4 4v12h-3a3.5 3.5 0 0 0-6.907-.805A3.994 3.994 0 0 1 2 15V7a4 4 0 0 1 4-4Zm0 4.25a.75.75 0 0 1 .75.75v1.25h2.5V8a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0v-1.25h-2.5V12a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 6 7.25Zm9 9.946a3.5 3.5 0 0 1 6.446 1.186c.343-.359.554-.846.554-1.382v-5.383a2 2 0 0 0-.632-1.46l-2.791-2.616A2 2 0 0 0 17.209 7H15v10.196ZM9 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm11 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$an = forwardRef(SvgAmbulance);

var SvgAppsCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-7-3a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', clipRule: 'evenodd' })));
};
var ForwardRef$am = forwardRef(SvgAppsCircle);

var SvgAppsDoubleCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V6Zm-8 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H6Z', clipRule: 'evenodd' })));
};
var ForwardRef$al = forwardRef(SvgAppsDoubleCircle);

var SvgAppsRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16 4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2ZM6 14a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H6ZM4 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm12 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$ak = forwardRef(SvgAppsRectangle);

var SvgAppsTripleRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M4 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm12-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2Zm1 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 14a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H6Z', clipRule: 'evenodd' })));
};
var ForwardRef$aj = forwardRef(SvgAppsTripleRectangle);

var SvgArrowBackCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM9.47 6.47a.75.75 0 1 1 1.06 1.06l-.72.72H13a3.75 3.75 0 1 1 0 7.5H8a.75.75 0 0 1 0-1.5h5a2.25 2.25 0 0 0 0-4.5H9.81l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$ai = forwardRef(SvgArrowBackCircle);

var SvgArrowBackRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4ZM9.47 6.47a.75.75 0 1 1 1.06 1.06l-.72.72H13a3.75 3.75 0 1 1 0 7.5H8a.75.75 0 0 1 0-1.5h5a2.25 2.25 0 0 0 0-4.5H9.81l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$ah = forwardRef(SvgArrowBackRectangle);

var SvgArrowBack = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.6 4.55a.75.75 0 0 0-1.05-.15l-4 3a.75.75 0 0 0 0 1.2l4 3a.75.75 0 1 0 .9-1.2l-2.2-1.65H15a3.25 3.25 0 1 1 0 6.5H5a.75.75 0 0 0 0 1.5h10a4.75 4.75 0 1 0 0-9.5H7.25l2.2-1.65a.75.75 0 0 0 .15-1.05Z', clipRule: 'evenodd' })));
};
var ForwardRef$ag = forwardRef(SvgArrowBack);

var SvgArrowDownCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.53-8.47-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V8a.75.75 0 0 1 1.5 0v6.19l1.72-1.72a.75.75 0 1 1 1.06 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$af = forwardRef(SvgArrowDownCircle);

var SvgArrowDownRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-2.47 11.53-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V8a.75.75 0 0 1 1.5 0v6.19l1.72-1.72a.75.75 0 1 1 1.06 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$ae = forwardRef(SvgArrowDownRectangle);

var SvgArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.47 18.53a.75.75 0 0 0 1.06 0l4-4a.75.75 0 1 0-1.06-1.06l-2.72 2.72V6a.75.75 0 0 0-1.5 0v10.19l-2.72-2.72a.75.75 0 0 0-1.06 1.06l4 4Z', clipRule: 'evenodd' })));
};
var ForwardRef$ad = forwardRef(SvgArrowDown);

var SvgArrowDropDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15.518 6H8.482C6.938 6 5.977 7.674 6.755 9.008l3.517 6.03c.772 1.323 2.684 1.323 3.456 0l3.518-6.03C18.023 7.674 17.061 6 15.518 6Z' })));
};
var ForwardRef$ac = forwardRef(SvgArrowDropDown);

var SvgArrowDropLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M17 15.518V8.482c0-1.544-1.674-2.505-3.008-1.727l-6.03 3.517c-1.323.772-1.323 2.684 0 3.456l6.03 3.518c1.334.777 3.008-.184 3.008-1.728Z' })));
};
var ForwardRef$ab = forwardRef(SvgArrowDropLeft);

var SvgArrowDropRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M7 15.518V8.482c0-1.544 1.674-2.505 3.008-1.727l6.03 3.517c1.323.772 1.323 2.684 0 3.456l-6.03 3.518C8.674 18.023 7 17.061 7 15.518Z' })));
};
var ForwardRef$aa = forwardRef(SvgArrowDropRight);

var SvgArrowDropUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M8.482 17h7.036c1.543 0 2.505-1.674 1.727-3.008l-3.517-6.03c-.772-1.323-2.684-1.323-3.456 0l-3.517 6.03C5.977 15.326 6.938 17 8.482 17Z' })));
};
var ForwardRef$a9 = forwardRef(SvgArrowDropUp);

var SvgArrowLeftCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM10.47 8.47l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72H16a.75.75 0 0 0 0-1.5H9.81l1.72-1.72a.75.75 0 0 0-1.06-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$a8 = forwardRef(SvgArrowLeftCircle);

var SvgArrowLeftRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm1.47 9.47a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72H16a.75.75 0 0 0 0-1.5H9.81l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z', clipRule: 'evenodd' })));
};
var ForwardRef$a7 = forwardRef(SvgArrowLeftRectangle);

var SvgArrowLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.47 11.47a.75.75 0 0 0 0 1.06l4 4a.75.75 0 1 0 1.06-1.06l-2.72-2.72H18a.75.75 0 0 0 0-1.5H7.81l2.72-2.72a.75.75 0 1 0-1.06-1.06l-4 4Z', clipRule: 'evenodd' })));
};
var ForwardRef$a6 = forwardRef(SvgArrowLeft);

var SvgArrowMoveCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm.53-2.47a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72v-3.44H7.81l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 1.06l-.72.72h3.44V7.81l-.72.72a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-.72-.72v3.44h3.44l-.72-.72a.75.75 0 1 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72h-3.44v3.44l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$a5 = forwardRef(SvgArrowMoveCircle);

var SvgArrowMoveRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm6.53 16.53a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72v-3.44H7.81l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 1.06l-.72.72h3.44V7.81l-.72.72a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-.72-.72v3.44h3.44l-.72-.72a.75.75 0 1 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72h-3.44v3.44l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$a4 = forwardRef(SvgArrowMoveRectangle);

var SvgArrowMove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.47 21.53a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72v-6.44h6.44l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72h-6.44V4.81l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72v6.44H4.81l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72h6.44v6.44l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z', clipRule: 'evenodd' })));
};
var ForwardRef$a3 = forwardRef(SvgArrowMove);

var SvgArrowReturnCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm2.53-15.53a.75.75 0 1 0-1.06 1.06l.72.72H11a3.75 3.75 0 1 0 0 7.5h5a.75.75 0 0 0 0-1.5h-5a2.25 2.25 0 0 1 0-4.5h3.19l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$a2 = forwardRef(SvgArrowReturnCircle);

var SvgArrowReturnRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-3.47 4.47a.75.75 0 1 0-1.06 1.06l.72.72H11a3.75 3.75 0 1 0 0 7.5h5a.75.75 0 0 0 0-1.5h-5a2.25 2.25 0 0 1 0-4.5h3.19l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$a1 = forwardRef(SvgArrowReturnRectangle);

var SvgArrowReturn = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14.4 4.55a.75.75 0 0 1 1.05-.15l4 3a.75.75 0 0 1 0 1.2l-4 3a.75.75 0 1 1-.9-1.2l2.2-1.65H9a3.25 3.25 0 1 0 0 6.5h10a.75.75 0 0 1 0 1.5H9a4.75 4.75 0 1 1 0-9.5h7.75l-2.2-1.65a.75.75 0 0 1-.15-1.05Z', clipRule: 'evenodd' })));
};
var ForwardRef$a0 = forwardRef(SvgArrowReturn);

var SvgArrowRightCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm1.53-13.53 3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H8a.75.75 0 0 1 0-1.5h6.19l-1.72-1.72a.75.75 0 0 1 1.06-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$9$ = forwardRef(SvgArrowRightCircle);

var SvgArrowRightRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-4.47 6.47 3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H8a.75.75 0 0 1 0-1.5h6.19l-1.72-1.72a.75.75 0 0 1 1.06-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$9_ = forwardRef(SvgArrowRightRectangle);

var SvgArrowRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18.53 12.53a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 1 0-1.06 1.06l2.72 2.72H6a.75.75 0 0 0 0 1.5h10.19l-2.72 2.72a.75.75 0 1 0 1.06 1.06l4-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$9Z = forwardRef(SvgArrowRight);

var SvgArrowSortCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM10.287 7.307A.75.75 0 0 1 10.75 8v8a.75.75 0 0 1-1.5 0V9.81l-.72.72a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 .817-.163ZM13.25 16a.75.75 0 0 0 1.28.53l2-2a.75.75 0 0 0-1.06-1.06l-.72.72V8a.75.75 0 0 0-1.5 0v8Z', clipRule: 'evenodd' })));
};
var ForwardRef$9Y = forwardRef(SvgArrowSortCircle);

var SvgArrowSortRectangleHalf = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-7.713 5.307A.75.75 0 0 1 10.75 8v8a.75.75 0 0 1-1.5 0V9.81l-.72.72a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 .817-.163ZM13.25 16a.75.75 0 0 0 1.28.53l2-2a.75.75 0 0 0-1.06-1.06l-.72.72V8a.75.75 0 0 0-1.5 0v8Z', clipRule: 'evenodd' })));
};
var ForwardRef$9X = forwardRef(SvgArrowSortRectangleHalf);

var SvgArrowSortRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4ZM8.47 7.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72V16a.75.75 0 0 1-1.5 0V9.81l-.72.72a.75.75 0 1 1-1.06-1.06l2-2Zm4 7.06 2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V8a.75.75 0 0 0-1.5 0v6.19l-.72-.72a.75.75 0 1 0-1.06 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$9W = forwardRef(SvgArrowSortRectangle);

var SvgArrowSort = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm12.47 15.53 3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V6a.75.75 0 0 0-1.5 0v10.19l-1.72-1.72a.75.75 0 1 0-1.06 1.06ZM8.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72V18a.75.75 0 0 0 1.5 0V7.81l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z', clipRule: 'evenodd' })));
};
var ForwardRef$9V = forwardRef(SvgArrowSort);

var SvgArrowThickDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15 4v9h1.796a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0l-4.796-5.48A1 1 0 0 1 7.204 13H9V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1Z' })));
};
var ForwardRef$9U = forwardRef(SvgArrowThickDown);

var SvgArrowThickLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20 9h-9V7.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506l5.48 4.796c.647.566 1.659.106 1.659-.753V15h9a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Z' })));
};
var ForwardRef$9T = forwardRef(SvgArrowThickLeft);

var SvgArrowThickRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M4 9h9V7.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506l-5.48 4.796c-.647.566-1.659.106-1.659-.753V15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Z' })));
};
var ForwardRef$9S = forwardRef(SvgArrowThickRight);

var SvgArrowThickUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M9 20v-9H7.204a1 1 0 0 1-.753-1.659l4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H15v9a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z' })));
};
var ForwardRef$9R = forwardRef(SvgArrowThickUp);

var SvgArrowTransferCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-5.307-1.713a.75.75 0 0 1-.693.463H8a.75.75 0 0 1 0-1.5h6.19l-.72-.72a.75.75 0 0 1 1.06-1.06l2 2a.75.75 0 0 1 .163.817ZM8 13.25a.75.75 0 0 0-.53 1.28l2 2a.75.75 0 0 0 1.06-1.06l-.72-.72H16a.75.75 0 0 0 0-1.5H8Z', clipRule: 'evenodd' })));
};
var ForwardRef$9Q = forwardRef(SvgArrowTransferCircle);

var SvgArrowTransferRectangleHalf = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-1.307 8.287a.75.75 0 0 1-.693.463H8a.75.75 0 0 1 0-1.5h6.19l-.72-.72a.75.75 0 0 1 1.06-1.06l2 2a.75.75 0 0 1 .163.817ZM8 13.25a.75.75 0 0 0-.53 1.28l2 2a.75.75 0 0 0 1.06-1.06l-.72-.72H16a.75.75 0 0 0 0-1.5H8Z', clipRule: 'evenodd' })));
};
var ForwardRef$9P = forwardRef(SvgArrowTransferRectangleHalf);

var SvgArrowTransferRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-1.47 6.47a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H8a.75.75 0 0 1 0-1.5h6.19l-.72-.72a.75.75 0 0 1 1.06-1.06l2 2Zm-9.06 6a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72H16a.75.75 0 0 0 0-1.5H9.81l.72-.72a.75.75 0 1 0-1.06-1.06l-2 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$9O = forwardRef(SvgArrowTransferRectangle);

var SvgArrowTransfer = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm15.53 11.53 3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H6a.75.75 0 0 0 0 1.5h10.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06ZM5.47 15.47a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H18a.75.75 0 0 0 0-1.5H7.81l1.72-1.72a.75.75 0 1 0-1.06-1.06l-3 3Z', clipRule: 'evenodd' })));
};
var ForwardRef$9N = forwardRef(SvgArrowTransfer);

var SvgArrowUpCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.53-11.53-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72V16a.75.75 0 0 0 1.5 0V9.81l1.72 1.72a.75.75 0 1 0 1.06-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$9M = forwardRef(SvgArrowUpCircle);

var SvgArrowUpRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-5.47 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72V16a.75.75 0 0 0 1.5 0V9.81l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z', clipRule: 'evenodd' })));
};
var ForwardRef$9L = forwardRef(SvgArrowUpRectangle);

var SvgArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.47 5.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06l-2.72-2.72V18a.75.75 0 0 1-1.5 0V7.81l-2.72 2.72a.75.75 0 1 1-1.06-1.06l4-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$9K = forwardRef(SvgArrowUp);

var SvgAtm = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.5 1.75a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0v-2h10.25a3 3 0 0 0 3-3V12.5H6.5V11h13.25V8.5H6.5V7h13.25v-.25a3 3 0 0 0-3-3H6.5v-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$9J = forwardRef(SvgAtm);

var SvgAutoRotation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.53 2.984a.75.75 0 1 0-1.06 1.061l7.07 7.071a1.25 1.25 0 0 1 0 1.768l-2.962 2.962v-1.018a.75.75 0 0 0-1.5 0v1.829c0 .966.784 1.75 1.75 1.75h1.829a.75.75 0 0 0 0-1.5h-1.018l2.962-2.963a2.75 2.75 0 0 0 0-3.889l-7.07-7.07ZM6.343 5.593a.75.75 0 1 0 0 1.5h1.018l-2.963 2.962a2.75 2.75 0 0 0 0 3.89l7.072 7.07a.75.75 0 0 0 1.06-1.06l-7.07-7.071a1.25 1.25 0 0 1 0-1.768l2.962-2.962V9.17a.75.75 0 1 0 1.5 0V7.343a1.75 1.75 0 0 0-1.75-1.75H6.343Z', clipRule: 'evenodd' })));
};
var ForwardRef$9I = forwardRef(SvgAutoRotation);

var SvgAuto = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM9.964 13.75l-1.293 2.585a.75.75 0 1 1-1.342-.67l4-8a.75.75 0 0 1 1.342 0l4 8a.75.75 0 1 1-1.342.67l-1.293-2.586-.036.001H9.964Zm3.322-1.5h-2.572L12 9.677l1.287 2.573Z', clipRule: 'evenodd' })));
};
var ForwardRef$9H = forwardRef(SvgAuto);

var SvgBadgePercent = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.946 2.658a3 3 0 0 0-3.892 0l-.682.582a3 3 0 0 1-1.708.707l-.894.072A3 3 0 0 0 4.02 6.77l-.072.894a3 3 0 0 1-.707 1.708l-.582.682a3 3 0 0 0 0 3.892l.582.683a3 3 0 0 1 .707 1.707l.072.894a3 3 0 0 0 2.751 2.752l.894.071a3 3 0 0 1 1.708.707l.682.582a3 3 0 0 0 3.892 0l.683-.582a3 3 0 0 1 1.707-.707l.894-.071a3 3 0 0 0 2.752-2.752l.071-.894a3 3 0 0 1 .707-1.707l.582-.683a3 3 0 0 0 0-3.892l-.582-.682a3 3 0 0 1-.707-1.708l-.071-.894a3 3 0 0 0-2.753-2.75l-.894-.072a3 3 0 0 1-1.707-.707l-.683-.582ZM9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-.47-5.47a.75.75 0 1 0-1.06-1.06l-6 6a.75.75 0 0 0 1.06 1.06l6-6Z', clipRule: 'evenodd' })));
};
var ForwardRef$9G = forwardRef(SvgBadgePercent);

var SvgBagAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 1.25A3.75 3.75 0 0 0 8.25 5v1.01a4 4 0 0 0-3.688 3.494l-1 8A4 4 0 0 0 7.532 22h8.937a4 4 0 0 0 3.969-4.496l-1-8A4 4 0 0 0 15.75 6.01V5A3.75 3.75 0 0 0 12 1.25ZM14.25 6V5a2.25 2.25 0 0 0-4.5 0v1h4.5Zm-6 8a.75.75 0 0 1 .75-.75h2.25V11a.75.75 0 0 1 1.5 0v2.25H15a.75.75 0 0 1 0 1.5h-2.25V17a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$9F = forwardRef(SvgBagAdd);

var SvgBagCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.25 5a3.75 3.75 0 0 1 7.5 0v1.01a4 4 0 0 1 3.688 3.494l1 8A4 4 0 0 1 16.468 22H7.532a4 4 0 0 1-3.969-4.496l1-8A4 4 0 0 1 8.25 6.01V5Zm6 0v1h-4.5V5a2.25 2.25 0 1 1 4.5 0Zm1.314 7.494a.75.75 0 1 0-1.128-.988l-2.87 3.28a.25.25 0 0 1-.345.03L9.47 13.415a.75.75 0 0 0-.938 1.172l1.753 1.402a1.75 1.75 0 0 0 2.41-.214l2.87-3.28Z', clipRule: 'evenodd' })));
};
var ForwardRef$9E = forwardRef(SvgBagCheck);

var SvgBagFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.25 5a3.75 3.75 0 0 1 7.5 0v1.01a4 4 0 0 1 3.688 3.494l1 8A4 4 0 0 1 16.468 22H7.532a4 4 0 0 1-3.969-4.496l1-8A4 4 0 0 1 8.25 6.01V5Zm6 0v1h-4.5V5a2.25 2.25 0 1 1 4.5 0ZM12 12l.265-.265a1.875 1.875 0 1 1 2.652 2.651l-1.856 1.857a1.5 1.5 0 0 1-2.122 0l-1.856-1.857a1.875 1.875 0 0 1 2.652-2.651L12 12Z', clipRule: 'evenodd' })));
};
var ForwardRef$9D = forwardRef(SvgBagFavourite);

var SvgBagMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.25 5a3.75 3.75 0 0 1 7.5 0v1.01a4 4 0 0 1 3.688 3.494l1 8A4 4 0 0 1 16.468 22H7.532a4 4 0 0 1-3.969-4.496l1-8A4 4 0 0 1 8.25 6.01V5Zm6 0v1h-4.5V5a2.25 2.25 0 1 1 4.5 0ZM9 13.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z', clipRule: 'evenodd' })));
};
var ForwardRef$9C = forwardRef(SvgBagMinus);

var SvgBagRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.25 5a3.75 3.75 0 0 1 7.5 0v1.01a4 4 0 0 1 3.688 3.494l1 8A4 4 0 0 1 16.468 22H7.532a4 4 0 0 1-3.969-4.496l1-8A4 4 0 0 1 8.25 6.01V5Zm6 0v1h-4.5V5a2.25 2.25 0 1 1 4.5 0Zm-3.841 6.348a.75.75 0 1 0-1.06 1.061L10.938 14l-1.59 1.591a.75.75 0 1 0 1.06 1.06L12 15.062l1.591 1.59a.75.75 0 1 0 1.06-1.06L13.062 14l1.59-1.591a.75.75 0 0 0-1.06-1.06L12 12.938l-1.591-1.59Z', clipRule: 'evenodd' })));
};
var ForwardRef$9B = forwardRef(SvgBagRemove);

var SvgBagSmile = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.25 5a3.75 3.75 0 0 1 7.5 0v1.01a4 4 0 0 1 3.688 3.494l1 8A4 4 0 0 1 16.468 22H7.532a4 4 0 0 1-3.969-4.496l1-8A4 4 0 0 1 8.25 6.01V5Zm6 0v1h-4.5V5a2.25 2.25 0 1 1 4.5 0Zm1.118 11.653a.75.75 0 1 0-.736-1.306c-1.138.64-1.913.902-2.632.903-.718.001-1.493-.255-2.63-.902a.75.75 0 1 0-.74 1.304c1.22.694 2.268 1.1 3.373 1.098 1.104-.002 2.15-.412 3.365-1.097Z', clipRule: 'evenodd' })));
};
var ForwardRef$9A = forwardRef(SvgBagSmile);

var SvgBag = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 1.625a3.75 3.75 0 0 0-3.75 3.75v1.01a4 4 0 0 0-3.688 3.494l-1 8a4 4 0 0 0 3.97 4.496h8.937a4 4 0 0 0 3.969-4.496l-1-8a4 4 0 0 0-3.688-3.494v-1.01A3.75 3.75 0 0 0 12 1.625Zm2.25 4.75v-1a2.25 2.25 0 0 0-4.5 0v1h4.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$9z = forwardRef(SvgBag);

var SvgBank = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M3.033 8.75h17.934c1.02 0 1.42-1.351.572-1.93l-8.395-5.716a2.026 2.026 0 0 0-2.288 0L2.461 6.82c-.849.578-.448 1.929.572 1.929Zm2.467 1.5h3v5h-3v-5Zm13 0h-3v5h3v-5Zm-8 0h3v5h-3v-5Zm9.776 7.053a1 1 0 0 0-.894-.553H4.618a1 1 0 0 0-.894.553l-1 2a1 1 0 0 0 .894 1.447h16.764a1 1 0 0 0 .894-1.447l-1-2Z' })));
};
var ForwardRef$9y = forwardRef(SvgBank);

var SvgBarChartMiddleLong = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10 5a2 2 0 1 1 4 0v14a2 2 0 1 1-4 0V5Zm-8 5a2 2 0 1 1 4 0v9a2 2 0 1 1-4 0v-9Zm18-2a2 2 0 0 0-2 2v9a2 2 0 1 0 4 0v-9a2 2 0 0 0-2-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$9x = forwardRef(SvgBarChartMiddleLong);

var SvgBarChart = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2 5a2 2 0 1 1 4 0v14a2 2 0 1 1-4 0V5Zm8 5a2 2 0 1 1 4 0v9a2 2 0 1 1-4 0v-9Zm10-7a2 2 0 0 0-2 2v14a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$9w = forwardRef(SvgBarChart);

var SvgBarcodeBorder = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.75 6A3.25 3.25 0 0 1 6 2.75h2a.75.75 0 0 0 0-1.5H6A4.75 4.75 0 0 0 1.25 6v2a.75.75 0 0 0 1.5 0V6ZM16 1.25a.75.75 0 0 0 0 1.5h2A3.25 3.25 0 0 1 21.25 6v2a.75.75 0 0 0 1.5 0V6A4.75 4.75 0 0 0 18 1.25h-2ZM2.75 15.944a.75.75 0 0 0-1.5 0V18A4.75 4.75 0 0 0 6 22.75h2a.75.75 0 0 0 0-1.5H6A3.25 3.25 0 0 1 2.75 18v-2.056Zm20 0a.75.75 0 0 0-1.5 0V18A3.25 3.25 0 0 1 18 21.25h-2a.75.75 0 0 0 0 1.5h2A4.75 4.75 0 0 0 22.75 18v-2.056ZM7 11.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5H7Zm9-4.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm-3.25.75a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2ZM8 6.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 8 6.75Zm4.75 7.75a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Zm3.25-.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm-7.25.75a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$9v = forwardRef(SvgBarcodeBorder);

var SvgBatteryAlert = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10 1.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4ZM8 4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H8Zm4.75 5a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0V9ZM12 15.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$9u = forwardRef(SvgBatteryAlert);

var SvgBatteryChargingFull = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10 1.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4ZM6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6Zm9.494 4.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.753-1.402a.75.75 0 0 1 .938-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z', clipRule: 'evenodd' })));
};
var ForwardRef$9t = forwardRef(SvgBatteryChargingFull);

var SvgBatteryCharging = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10 1.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4ZM6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6Zm3.11 7.161.908-1.108 3.185-3.89c.318-.386.904-.028.751.46l-.878 2.814c-.095.305.118.62.419.62h1.063c.379 0 .582.477.332.782l-4.093 4.997c-.318.387-.904.029-.751-.46l.878-2.813c.095-.305-.118-.62-.419-.62H9.442c-.379 0-.582-.477-.332-.782Z', clipRule: 'evenodd' })));
};
var ForwardRef$9s = forwardRef(SvgBatteryCharging);

var SvgBatteryHorizontalCharging = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14Zm-9.89 6.129.908-.887 3.185-3.11c.318-.31.904-.024.751.367l-.878 2.25c-.095.245.118.497.419.497h1.063c.379 0 .582.381.332.625L9.797 15.87c-.318.31-.904.023-.751-.368l.878-2.25c.095-.245-.118-.497-.419-.497H8.442c-.379 0-.582-.381-.332-.625ZM22.75 10a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$9r = forwardRef(SvgBatteryHorizontalCharging);

var SvgBatteryHorizontalFull = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14Zm-3.506 3.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.753-1.402a.75.75 0 0 1 .938-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07ZM22.75 10a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$9q = forwardRef(SvgBatteryHorizontalFull);

var SvgBatteryHorizontalLowbet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.47 2.47a.75.75 0 0 1 1.06 0L7.06 6l11.805 11.804 2.665 2.666a.75.75 0 1 1-1.06 1.06L16.94 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h.94L2.47 3.53a.75.75 0 0 1 0-1.06ZM22 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75ZM20 8v8c0 .277-.056.541-.158.781L9.06 6H18a2 2 0 0 1 2 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$9p = forwardRef(SvgBatteryHorizontalLowbet);

var SvgBatteryHorizontalSavingMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20 8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Zm-8.25 1a.75.75 0 0 0-1.5 0v2.25H8a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H14a.75.75 0 0 0 0-1.5h-2.25V9Zm11 1a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$9o = forwardRef(SvgBatteryHorizontalSavingMode);

var SvgBatteryHorizontal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Zm2.75 2a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$9n = forwardRef(SvgBatteryHorizontal);

var SvgBatteryLowbet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 2Zm-6.78.47a.75.75 0 0 1 1.06 0l2.666 2.665L18 16.94l3.53 3.53a.75.75 0 1 1-1.06 1.061L18 19.06V20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7.06L2.47 3.53a.75.75 0 0 1 0-1.06ZM8 4h8a2 2 0 0 1 2 2v8.94L7.22 4.157A2 2 0 0 1 8 4Z', clipRule: 'evenodd' })));
};
var ForwardRef$9m = forwardRef(SvgBatteryLowbet);

var SvgBatterySavingMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10 1.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4ZM8 4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H8Zm4.75 6a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V16a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V10Z', clipRule: 'evenodd' })));
};
var ForwardRef$9l = forwardRef(SvgBatterySavingMode);

var SvgBattery = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10 1.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4ZM8 4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H8Z', clipRule: 'evenodd' })));
};
var ForwardRef$9k = forwardRef(SvgBattery);

var SvgBill = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5 2h14a2 2 0 0 1 2 2v15.154a2 2 0 0 1-2.677 1.882l-1.562-.562a2 2 0 0 0-1.498.058L12.82 21.63a2 2 0 0 1-1.642 0l-2.442-1.1a2 2 0 0 0-1.498-.057l-1.562.562A2 2 0 0 1 3 19.154V4a2 2 0 0 1 2-2Zm12 5.75a.75.75 0 0 0 0-1.5H7a.75.75 0 0 0 0 1.5h10Zm.75 3.25a.75.75 0 0 1-.75.75H7a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75ZM12 15.75a.75.75 0 0 0 0-1.5H7a.75.75 0 0 0 0 1.5h5Z', clipRule: 'evenodd' })));
};
var ForwardRef$9j = forwardRef(SvgBill);

var SvgBloodPlus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M4 14.111c0-4.648 4.63-9.233 6.845-11.16a1.743 1.743 0 0 1 2.31 0C15.371 4.877 20 9.462 20 14.11 20 18 16.97 22 12 22c-4.97 0-8-4-8-7.89Zm8-3.86a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V17a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V11a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$9i = forwardRef(SvgBloodPlus);

var SvgBlood = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.845 2.95C8.629 4.878 4 9.463 4 14.111c0 3.89 3.03 7.89 8 7.89 4.97 0 8-4 8-7.89 0-4.648-4.63-9.233-6.845-11.16a1.743 1.743 0 0 0-2.31 0Zm2.012 15.22a.75.75 0 0 0 .287 1.472c2.426-.473 4.005-2.399 4.464-4.48a.75.75 0 1 0-1.464-.324c-.353 1.597-1.54 2.991-3.287 3.331Z', clipRule: 'evenodd' })));
};
var ForwardRef$9h = forwardRef(SvgBlood);

var SvgBluetoothConnected = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.16 4.943a.25.25 0 0 0-.41.192V10.6l3.72-2.48a.25.25 0 0 0 .02-.4l-3.33-2.776ZM11.25 10.6V5.135c0-1.484 1.73-2.294 2.87-1.344l3.331 2.776a1.75 1.75 0 0 1-.15 2.8L13.352 12l3.95 2.633a1.75 1.75 0 0 1 .15 2.8l-3.33 2.776c-1.14.95-2.871.14-2.871-1.344v-5.463l-4.834 3.222a.75.75 0 0 1-.832-1.248L10.648 12 5.584 8.624a.75.75 0 1 1 .832-1.248L11.25 10.6Zm1.5 2.803v5.463a.25.25 0 0 0 .41.192l3.33-2.776a.25.25 0 0 0-.02-.4l-3.72-2.48Zm5.664-2.816L19.828 12l-1.414 1.414L17 12l1.414-1.414ZM7 12l-1.414-1.414L4.172 12l1.414 1.414L7 12Z', clipRule: 'evenodd' })));
};
var ForwardRef$9g = forwardRef(SvgBluetoothConnected);

var SvgBluetoothOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.16 4.943a.25.25 0 0 0-.41.192V10.6l3.72-2.48a.25.25 0 0 0 .021-.4l-3.33-2.776ZM9.25 10.6V5.135c0-1.484 1.73-2.294 2.87-1.344l3.331 2.776a1.75 1.75 0 0 1-.15 2.8L11.353 12l3.95 2.633a1.75 1.75 0 0 1 .15 2.8L12.12 20.21c-1.14.95-2.87.14-2.87-1.344v-5.463l-4.834 3.222a.75.75 0 0 1-.832-1.248L8.648 12 3.584 8.624a.75.75 0 0 1 .832-1.248L9.25 10.6Zm1.5 2.803v5.463a.25.25 0 0 0 .41.192l3.331-2.776a.25.25 0 0 0-.021-.4l-3.72-2.48ZM17 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2.34-3.771a.75.75 0 1 0-1.131.984A4.23 4.23 0 0 1 19.25 12c0 1.089-.409 2.08-1.082 2.833a.75.75 0 1 0 1.118 1A5.731 5.731 0 0 0 20.75 12a5.73 5.73 0 0 0-1.41-3.771Z', clipRule: 'evenodd' })));
};
var ForwardRef$9f = forwardRef(SvgBluetoothOff);

var SvgBluetooth = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M4.53 3.47a.75.75 0 0 0-1.06 1.06l7.353 7.353-5.239 3.493a.75.75 0 1 0 .832 1.248L11.25 13.4v5.464c0 1.484 1.73 2.294 2.87 1.344l2.743-2.285 2.607 2.606a.75.75 0 1 0 1.06-1.06l-16-16Zm11.268 13.389L12.75 13.81v5.054a.25.25 0 0 0 .41.192l2.638-2.198Zm-2.502-6.624 1.081 1.082 2.925-1.95a1.75 1.75 0 0 0 .15-2.8L14.12 3.79c-1.14-.95-2.87-.14-2.87 1.344v3.054l1.5 1.5V5.135a.25.25 0 0 1 .41-.192l3.331 2.776a.25.25 0 0 1-.021.4l-3.174 2.116Z', clipRule: 'evenodd' })));
};
var ForwardRef$9e = forwardRef(SvgBluetooth);

var SvgBoard = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.48 1.424a.75.75 0 0 0-.96 0L6.028 6H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-1.028L12.48 1.424ZM15.63 6 12 2.976 8.372 6h7.257Zm-9.38 4A.75.75 0 0 1 7 9.25h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 13.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5H7ZM6.25 18a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$9d = forwardRef(SvgBoard);

var SvgBookmark = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M4 8.75V19c0 1.648 1.882 2.589 3.2 1.6l3.6-2.7a2 2 0 0 1 2.4 0l3.6 2.7c1.319.989 3.2.048 3.2-1.6V8.75H4Zm0-1.5h16V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2.25Z' })));
};
var ForwardRef$9c = forwardRef(SvgBookmark);

var SvgBoxAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17 2.062h1a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2h-5a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4v-12a4 4 0 0 1 4-4h11ZM8 7.648V3.562h8v4.086c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0L9.707 8.355C9.077 8.985 8 8.539 8 7.648Zm10.75 8.414a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25v-2.25Z', clipRule: 'evenodd' })));
};
var ForwardRef$9b = forwardRef(SvgBoxAdd);

var SvgBoxArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17 2.062h1a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2h-5a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4v-12a4 4 0 0 1 4-4h11ZM8 7.648V3.562h8v4.086c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0L9.707 8.355C9.077 8.985 8 8.539 8 7.648Zm8.735 11.53.72.724V16.12c0-.417.336-.755.75-.755s.75.338.75.755v3.783l.72-.724a.747.747 0 0 1 1.06 0 .758.758 0 0 1 0 1.067l-1.293 1.301a1.742 1.742 0 0 1-2.474 0l-1.293-1.3a.758.758 0 0 1 0-1.068.747.747 0 0 1 1.06 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$9a = forwardRef(SvgBoxArrowDown);

var SvgBoxArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17 2h1a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2h-5a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h11ZM8 7.586V3.5h8v4.086c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0L9.707 8.293C9.077 8.923 8 8.477 8 7.586Zm11.705 10.6-.72-.724v3.783a.752.752 0 0 1-.75.755.752.752 0 0 1-.75-.755v-3.783l-.719.724a.747.747 0 0 1-1.06 0 .758.758 0 0 1 0-1.067l1.292-1.301a1.742 1.742 0 0 1 2.475 0l1.293 1.3a.758.758 0 0 1 0 1.068.747.747 0 0 1-1.06 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$99 = forwardRef(SvgBoxArrowUp);

var SvgBoxCancel = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17 2h1a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2h-5a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h11ZM8 7.586V3.5h8v4.086c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0L9.707 8.293C9.077 8.923 8 8.477 8 7.586Zm8.409 8.762a.75.75 0 1 0-1.06 1.061L16.938 19l-1.59 1.591a.75.75 0 1 0 1.06 1.06L18 20.062l1.591 1.59a.75.75 0 0 0 1.06-1.06L19.062 19l1.59-1.591a.75.75 0 0 0-1.06-1.06L18 17.938l-1.591-1.59Z', clipRule: 'evenodd' })));
};
var ForwardRef$98 = forwardRef(SvgBoxCancel);

var SvgBoxDone = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17 2.062h1a4 4 0 0 1 4 4v7a2 2 0 0 1-2 2h-5a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4v-12a4 4 0 0 1 4-4h11ZM8 7.648V3.562h8v4.086c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0L9.707 8.355C9.077 8.985 8 8.539 8 7.648Zm13.564 10.908a.75.75 0 1 0-1.128-.988l-2.87 3.28a.25.25 0 0 1-.345.03l-1.752-1.401a.75.75 0 1 0-.938 1.17l1.753 1.403a1.75 1.75 0 0 0 2.41-.214l2.87-3.28Z', clipRule: 'evenodd' })));
};
var ForwardRef$97 = forwardRef(SvgBoxDone);

var SvgBoxFavorite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17 2h1a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2h-5a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h11ZM8 7.586V3.5h8v4.086c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0L9.707 8.293C9.077 8.923 8 8.477 8 7.586ZM18 17l.265-.265a1.875 1.875 0 1 1 2.652 2.652l-1.856 1.856a1.5 1.5 0 0 1-2.122 0l-1.856-1.856a1.875 1.875 0 0 1 2.652-2.652L18 17Z', clipRule: 'evenodd' })));
};
var ForwardRef$96 = forwardRef(SvgBoxFavorite);

var SvgBoxLocation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17 2.062h1a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2h-5a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4v-12a4 4 0 0 1 4-4h11ZM8 7.648V3.562h8v4.086c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0L9.707 8.355C9.077 8.985 8 8.539 8 7.648Zm13 10.414c0 1.546-1.469 3.376-2.35 4.336a.873.873 0 0 1-1.3 0c-.881-.96-2.35-2.79-2.35-4.336 0-2.209 1.343-3 3-3s3 .791 3 3Zm-2 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$95 = forwardRef(SvgBoxLocation);

var SvgBoxMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17 2h1a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2h-5a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h11ZM8 7.586V3.5h8v4.086c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0L9.707 8.293C9.077 8.923 8 8.477 8 7.586ZM21 18.75a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0 0 1.5h6Z', clipRule: 'evenodd' })));
};
var ForwardRef$94 = forwardRef(SvgBoxMinus);

var SvgBoxSearch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17 2.062h1a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2h-5a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4v-12a4 4 0 0 1 4-4h11ZM8 7.648V3.562h8v4.086c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0L9.707 8.355C9.077 8.985 8 8.539 8 7.648Zm7.75 10.914a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0Zm1.75-3.25a3.25 3.25 0 1 0 1.706 6.017l.764.764a.75.75 0 1 0 1.06-1.061l-.763-.764a3.25 3.25 0 0 0-2.767-4.956Z', clipRule: 'evenodd' })));
};
var ForwardRef$93 = forwardRef(SvgBoxSearch);

var SvgBoxTime = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17 2.062h1a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2h-5a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4v-12a4 4 0 0 1 4-4h11ZM8 7.648V3.562h8v4.086c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0L9.707 8.355C9.077 8.985 8 8.539 8 7.648Zm12.959 10.935a3.48 3.48 0 1 1-6.959 0 3.48 3.48 0 0 1 6.959 0Zm-3.789-1.549a.5.5 0 0 1 .5.5v1.09l.801.001a.5.5 0 1 1 0 1h-1.3a.5.5 0 0 1-.5-.5v-1.591a.5.5 0 0 1 .5-.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$92 = forwardRef(SvgBoxTime);

var SvgBriefcaseTriangular = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.75 3.75A2.25 2.25 0 0 1 11 1.5h2a2.25 2.25 0 0 1 2.25 2.25v1h-6.5v-1Zm-1.5 1v-1A3.75 3.75 0 0 1 11 0h2a3.75 3.75 0 0 1 3.75 3.75v1H18a4 4 0 0 1 4 4v1.173c-.694.334-1.565.734-2.53 1.134-1.796.744-3.856 1.46-5.693 1.775a2 2 0 0 0-3.554 0c-1.837-.315-3.897-1.03-5.693-1.775-.965-.4-1.836-.8-2.53-1.134V8.75a4 4 0 0 1 4-4h1.25Zm12.794 7.693a50.22 50.22 0 0 0 1.956-.86v5.167a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-5.168c.58.27 1.243.566 1.956.86 1.832.76 4.066 1.549 6.13 1.887a2 2 0 0 0 3.829 0c2.063-.338 4.297-1.127 6.13-1.886Z', clipRule: 'evenodd' })));
};
var ForwardRef$91 = forwardRef(SvgBriefcaseTriangular);

var SvgBriefcase = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.75 3.75A2.25 2.25 0 0 1 11 1.5h2a2.25 2.25 0 0 1 2.25 2.25v1h-6.5v-1Zm-1.5 1v-1A3.75 3.75 0 0 1 11 0h2a3.75 3.75 0 0 1 3.75 3.75v1H18a4 4 0 0 1 4 4V11h-8.145a2 2 0 0 0-3.71 0H2V8.75a4 4 0 0 1 4-4h1.25Zm6.605 7.75H22v4.25a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V12.5h8.145a2 2 0 0 0 3.71 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$90 = forwardRef(SvgBriefcase);

var SvgCallHospital = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-7-2.75a.75.75 0 0 1 .75.75v1.25h2.5V5a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0V7.75h-2.5V9a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75Zm3 14.66v1.312c0 .982-.796 1.778-1.778 1.778C8.368 22 2 15.633 2 7.778 2 6.796 2.796 6 3.778 6H5.09a2 2 0 0 1 1.857 1.257l.592 1.479a2 2 0 0 1-.963 2.531l-.132.066s.445 2.223 2.223 4c1.777 1.778 4 2.223 4 2.223l.066-.132a2 2 0 0 1 2.531-.963l1.479.592A2 2 0 0 1 18 18.91Z', clipRule: 'evenodd' })));
};
var ForwardRef$8$ = forwardRef(SvgCallHospital);

var SvgCameraOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-1.801-1.8A4.976 4.976 0 0 1 16 20.5H8a5 5 0 0 1-5-5v-4a5 5 0 0 1 2.9-4.54L2.47 3.53a.75.75 0 0 1 0-1.06ZM12 16.5a3 3 0 0 1-1.89-5.33l4.22 4.22A2.995 2.995 0 0 1 12 16.5Zm9-5a5 5 0 0 0-5-5h-.126a4.002 4.002 0 0 0-7.33-1.016l12.033 12.032A4.984 4.984 0 0 0 21 15.5v-4ZM13 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$8_ = forwardRef(SvgCameraOff);

var SvgCameraSwitch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.08 2.31c-1.048-.116-1.83.748-1.83 1.69v.5a.75.75 0 0 0 1.5 0V4c0-.072.03-.129.065-.163a.118.118 0 0 1 .101-.037A8.251 8.251 0 0 1 20.25 12a.75.75 0 0 0 1.5 0c0-5.02-3.793-9.153-8.67-9.69ZM3.75 12a.75.75 0 0 0-1.5 0c0 5.02 3.793 9.152 8.67 9.69 1.048.116 1.83-.748 1.83-1.69v-.5a.75.75 0 0 0-1.5 0v.5c0 .072-.03.129-.065.163a.118.118 0 0 1-.101.037A8.251 8.251 0 0 1 3.75 12ZM17 13.853v-2.118c0-1.462-1.244-2.647-2.778-2.647h-.07C13.906 8.175 13.036 7.5 12 7.5s-1.905.675-2.152 1.588h-.07C8.244 9.088 7 10.273 7 11.735v2.118C7 15.315 8.244 16.5 9.778 16.5h4.444c1.534 0 2.778-1.185 2.778-2.647ZM13.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$8Z = forwardRef(SvgCameraSwitch);

var SvgCamera = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 11.5a5 5 0 0 0-5-5h-.126a4.002 4.002 0 0 0-7.748 0H8a5 5 0 0 0-5 5v4a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-4Zm-6 2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM12 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$8Y = forwardRef(SvgCamera);

var SvgCapsuleOpen = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3 8.242A3 3 0 0 1 7.243 4l2.828 2.828-4.242 4.243L3 8.242ZM12 15c.828 0 1.5-.396 1.5-1.5 0-1.105-1.5-2.5-1.5-2.5s-1.5 1.395-1.5 2.5c0 1.104.672 1.5 1.5 1.5Zm-2.5 4.5c0 1.104-.672 1.5-1.5 1.5s-1.5-.396-1.5-1.5C6.5 18.395 8 17 8 17s1.5 1.395 1.5 2.5Zm8 0c0 1.104-.672 1.5-1.5 1.5s-1.5-.396-1.5-1.5c0-1.105 1.5-2.5 1.5-2.5s1.5 1.395 1.5 2.5ZM21 4a3 3 0 0 1 0 4.242l-2.829 2.829-4.242-4.243L16.757 4A3 3 0 0 1 21 4Z', clipRule: 'evenodd' })));
};
var ForwardRef$8X = forwardRef(SvgCapsuleOpen);

var SvgCapsule = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm16.849 15.801 2.36-2.36a6.117 6.117 0 1 0-8.65-8.65l-2.36 2.36c.03.023.06.048.089.076l8.485 8.485a.746.746 0 0 1 .076.09Zm-1.048 1.048a.764.764 0 0 1-.089-.076L7.227 8.288a.755.755 0 0 1-.076-.09l-2.36 2.36a6.117 6.117 0 0 0 8.65 8.65l2.36-2.359Zm.618-10.33a.75.75 0 0 1 1.061 0 3.75 3.75 0 0 1 0 5.304.75.75 0 1 1-1.06-1.06 2.25 2.25 0 0 0 0-3.182.75.75 0 0 1 0-1.061Z', clipRule: 'evenodd' })));
};
var ForwardRef$8W = forwardRef(SvgCapsule);

var SvgCardAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21.93 6.25A4.001 4.001 0 0 0 18 3H6a4.001 4.001 0 0 0-3.93 3.25h19.86Zm.07 1.5v2.5H2v-2.5h20Zm-20 4h20V14a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4v-5.25ZM7 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm12.75 0a.75.75 0 0 0-1.5 0v1.25H17a.75.75 0 0 0 0 1.5h1.25V21a.75.75 0 0 0 1.5 0v-1.25H21a.75.75 0 0 0 0-1.5h-1.25V17Z', clipRule: 'evenodd' })));
};
var ForwardRef$8V = forwardRef(SvgCardAdd);

var SvgCardArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 25 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22.305 6.25A4.001 4.001 0 0 0 18.375 3h-12a4.001 4.001 0 0 0-3.93 3.25h19.86Zm.07 1.5v2.5h-20v-2.5h20Zm-20 4h20V14a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1h-7a4 4 0 0 1-4-4v-5.25Zm5 5.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10.53 1.884.72.72V17a.75.75 0 0 1 1.5 0v2.604l.72-.72a.75.75 0 1 1 1.06 1.06l-1.293 1.293a1.75 1.75 0 0 1-2.474 0l-1.293-1.292a.75.75 0 1 1 1.06-1.061Z', clipRule: 'evenodd' })));
};
var ForwardRef$8U = forwardRef(SvgCardArrowDown);

var SvgCardArrowLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 25 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22.305 6.25A4.001 4.001 0 0 0 18.375 3h-12a4.001 4.001 0 0 0-3.93 3.25h19.86Zm.07 1.5v2.5h-20v-2.5h20Zm-20 4h20V14a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1h-7a4 4 0 0 1-4-4v-5.25Zm5 5.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm12.116.53-.72.72h3.604a.75.75 0 0 1 0 1.5h-3.604l.72.72a.75.75 0 1 1-1.06 1.06l-1.293-1.293a1.75 1.75 0 0 1 0-2.474l1.292-1.293a.75.75 0 1 1 1.061 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$8T = forwardRef(SvgCardArrowLeft);

var SvgCardArrowRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 25 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22.305 6.25A4.001 4.001 0 0 0 18.375 3h-12a4.001 4.001 0 0 0-3.93 3.25h19.86Zm.07 1.5v2.5h-20v-2.5h20Zm-20 4h20V14a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1h-7a4 4 0 0 1-4-4v-5.25Zm5 5.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm12.884.53.72.72h-3.604a.75.75 0 0 0 0 1.5h3.604l-.72.72a.75.75 0 1 0 1.06 1.06l1.293-1.293a1.75 1.75 0 0 0 0-2.474L21.32 16.47a.75.75 0 1 0-1.061 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$8S = forwardRef(SvgCardArrowRight);

var SvgCardArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 25 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22.305 6.25A4.001 4.001 0 0 0 18.375 3h-12a4.001 4.001 0 0 0-3.93 3.25h19.86Zm.07 1.5v2.5h-20v-2.5h20Zm-20 4h20V14a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1h-7a4 4 0 0 1-4-4v-5.25Zm5 5.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10.53 2.116.72-.72V21a.75.75 0 0 0 1.5 0v-2.604l.72.72a.75.75 0 1 0 1.06-1.06l-1.293-1.293a1.75 1.75 0 0 0-2.474 0l-1.293 1.292a.75.75 0 1 0 1.06 1.061Z', clipRule: 'evenodd' })));
};
var ForwardRef$8R = forwardRef(SvgCardArrowUp);

var SvgCardCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21.93 6.25A4.001 4.001 0 0 0 18 3H6a4.001 4.001 0 0 0-3.93 3.25h19.86Zm.07 1.5v2.5H2v-2.5h20Zm-20 4h20V14a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4v-5.25ZM7 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm15.564.494a.75.75 0 1 0-1.128-.988l-2.87 3.28a.25.25 0 0 1-.345.03l-1.753-1.402a.75.75 0 0 0-.937 1.172l1.753 1.402a1.75 1.75 0 0 0 2.41-.214l2.87-3.28Z', clipRule: 'evenodd' })));
};
var ForwardRef$8Q = forwardRef(SvgCardCheck);

var SvgCardDash = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2 7.75v2.5h20v-2.5H2Zm19.93-1.5H2.07A4.001 4.001 0 0 1 6 3h12c1.953 0 3.579 1.4 3.93 3.25ZM2 11.75h20V17a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-5.25Zm4 4.5a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5H6Z', clipRule: 'evenodd' })));
};
var ForwardRef$8P = forwardRef(SvgCardDash);

var SvgCardDot = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 3c1.953 0 3.579 1.4 3.93 3.25H2.07A4.001 4.001 0 0 1 6 3h12Zm4 7.25v-2.5H2v2.5h20Zm0 1.5H2V17a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-5.25ZM6 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$8O = forwardRef(SvgCardDot);

var SvgCardMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21.93 6.25A4.001 4.001 0 0 0 18 3H6a4.001 4.001 0 0 0-3.93 3.25h19.86Zm.07 1.5v2.5H2v-2.5h20Zm-20 4h20V14a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4v-5.25ZM7 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm14 1.75a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5h4Z', clipRule: 'evenodd' })));
};
var ForwardRef$8N = forwardRef(SvgCardMinus);

var SvgCardRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M18 3c1.953 0 3.579 1.4 3.93 3.25H2.07A4.001 4.001 0 0 1 6 3h12Zm4 7.25v-2.5H2v2.5h20Z' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 11.75H2V17a4 4 0 0 0 4 4h7a1 1 0 0 0 1-1v-1a4 4 0 0 1 4-4h3a1 1 0 0 0 1-1v-2.25ZM6 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', clipRule: 'evenodd' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20.055 16.803a.75.75 0 0 1 0 1.06l-.883.884.883.884a.75.75 0 0 1-1.06 1.06l-.884-.883-.884.884a.75.75 0 1 1-1.06-1.06l.883-.885-.884-.884a.75.75 0 0 1 1.061-1.06l.884.884.884-.884a.75.75 0 0 1 1.06 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$8M = forwardRef(SvgCardRemove);

var SvgCardUser = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 25 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18.375 2c1.953 0 3.579 1.4 3.93 3.25H2.445A4.001 4.001 0 0 1 6.375 2h12Zm4 7.25v-2.5h-20v2.5h20Zm0 1.5h-20V16a4 4 0 0 0 4 4h7a1 1 0 0 0 1-1v-1a4 4 0 0 1 4-4h3a1 1 0 0 0 1-1v-2.25Zm-16 6.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm15 0a2 2 0 1 0-2 2c-1.246 0-2.377.641-3.208 1.684-.451.566.024 1.316.748 1.316h4.92c.724 0 1.199-.75.748-1.316C21.753 19.641 20.62 19 19.375 19a2 2 0 0 0 2-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$8L = forwardRef(SvgCardUser);

var SvgCardWithdraw = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm10.53 5.634.72.72V2.75a.75.75 0 0 1 1.5 0v3.604l.72-.72a.75.75 0 1 1 1.06 1.06l-1.293 1.293a1.75 1.75 0 0 1-2.474 0L9.47 6.695a.75.75 0 0 1 1.06-1.061ZM6 10.75a2 2 0 1 0 0 4 2 2 0 1 0 0 4h4.5a5.5 5.5 0 0 1 6.416-5.424A2 2 0 0 0 15 10.75H6Zm14 8a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$8K = forwardRef(SvgCardWithdraw);

var SvgCardiogram = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm12 5.524.765-.822c2.113-2.27 5.538-2.27 7.65 0 1.649 1.771 2.011 4.4 1.088 6.548H16a.75.75 0 0 0-.624.334L14 13.648l-3.376-5.064a.75.75 0 0 0-1.248 0L7.599 11.25H2.497c-.923-2.148-.56-4.777 1.087-6.548 2.113-2.27 5.538-2.27 7.651 0l.765.822ZM3.431 12.75c.05.058.101.115.153.172l6.886 7.397a2.06 2.06 0 0 0 3.06 0l6.886-7.397a5.62 5.62 0 0 0 .153-.172h-4.168l-1.777 2.666a.75.75 0 0 1-1.248 0L10 10.352l-1.376 2.064A.75.75 0 0 1 8 12.75H3.431Z', clipRule: 'evenodd' })));
};
var ForwardRef$8J = forwardRef(SvgCardiogram);

var SvgCargoShip = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 2h8a2 2 0 0 1 2 2v6.754l-4.648-1.978a3.45 3.45 0 0 0-2.704 0L6 10.754V4a2 2 0 0 1 2-2Zm5.75 3a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75ZM4.117 20.354c.127-.085.259-.16.394-.226a1.967 1.967 0 0 1-.056-.086l-2.153-3.528c-.65-1.063-.21-2.467.922-2.95l8.011-3.408a1.95 1.95 0 0 1 1.53 0l8.01 3.409c1.133.482 1.572 1.886.923 2.949l-2.209 3.619c.146.07.29.151.427.243l1.5 1a.75.75 0 0 1-.832 1.248l-1.5-1a1.954 1.954 0 0 0-2.168 0 3.468 3.468 0 0 1-3.84-.006 2 2 0 0 0-2.177-.029l-.185.118a3.332 3.332 0 0 1-3.7-.081 1.832 1.832 0 0 0-2.065-.024l-1.533 1.022a.75.75 0 0 1-.832-1.248l1.533-1.022Z', clipRule: 'evenodd' })));
};
var ForwardRef$8I = forwardRef(SvgCargoShip);

var SvgCargo = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.75 2a.75.75 0 0 0-1.5 0v1.649l-5.222 4.35H6a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-6a4 4 0 0 0-4-4h-.028L12.75 3.65V2Zm2.879 6L12 4.976 8.372 8h7.257ZM12 11.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75ZM7.75 12a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Zm9.25-.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$8H = forwardRef(SvgCargo);

var SvgCartAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.75 1.25a.75.75 0 0 0 0 1.5h2C5.44 2.75 6 3.31 6 4v9a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H7.5a2.75 2.75 0 0 0-2.75-2.75h-2ZM9.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM20 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM14.75 8a.75.75 0 0 0-1.5 0v1.75H11.5a.75.75 0 0 0 0 1.5h1.75V13a.75.75 0 0 0 1.5 0v-1.75h1.75a.75.75 0 0 0 0-1.5h-1.75V8Z', clipRule: 'evenodd' })));
};
var ForwardRef$8G = forwardRef(SvgCartAdd);

var SvgCartArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.75 1.25a.75.75 0 0 0 0 1.5h2C5.44 2.75 6 3.31 6 4v9a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H7.5a2.75 2.75 0 0 0-2.75-2.75h-2ZM9.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM20 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-6.75-8.31-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.293a.75.75 0 0 0-1.06-1.06l-.72.72V8a.75.75 0 0 0-1.5 0v4.19Z', clipRule: 'evenodd' })));
};
var ForwardRef$8F = forwardRef(SvgCartArrowDown);

var SvgCartArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.75 1.25a.75.75 0 0 0 0 1.5h2C5.44 2.75 6 3.31 6 4v9a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H7.5a2.75 2.75 0 0 0-2.75-2.75h-2ZM9.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM20 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13.25 9.396l-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.292a.75.75 0 1 1-1.06 1.061l-.72-.72v4.19a.75.75 0 0 1-1.5 0v-4.19Z', clipRule: 'evenodd' })));
};
var ForwardRef$8E = forwardRef(SvgCartArrowUp);

var SvgCartCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.75 1.25a.75.75 0 0 0 0 1.5h2C5.44 2.75 6 3.31 6 4v9a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H7.5a2.75 2.75 0 0 0-2.75-2.75h-2Zm14.814 8.244a.75.75 0 1 0-1.128-.988l-2.87 3.28a.25.25 0 0 1-.345.03l-1.752-1.402a.75.75 0 0 0-.938 1.172l1.753 1.402a1.75 1.75 0 0 0 2.41-.214l2.87-3.28ZM9.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z', clipRule: 'evenodd' })));
};
var ForwardRef$8D = forwardRef(SvgCartCheck);

var SvgCartHasDash = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.75 1.25a.75.75 0 0 0 0 1.5h2C5.44 2.75 6 3.31 6 4v9a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H7.5a2.75 2.75 0 0 0-2.75-2.75h-2ZM9.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM20 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM11 7.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Zm-.75 4.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$8C = forwardRef(SvgCartHasDash);

var SvgCartMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.75 1.25a.75.75 0 0 0 0 1.5h2C5.44 2.75 6 3.31 6 4v9a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H7.5a2.75 2.75 0 0 0-2.75-2.75h-2ZM9.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM20 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM11.5 9.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$8B = forwardRef(SvgCartMinus);

var SvgCartRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.75 1.25a.75.75 0 0 0 0 1.5h2C5.44 2.75 6 3.31 6 4v9a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H7.5a2.75 2.75 0 0 0-2.75-2.75h-2ZM9.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM20 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM11.702 8.202a.75.75 0 0 1 1.06 0L14 9.439l1.237-1.237a.75.75 0 1 1 1.061 1.06L15.061 10.5l1.237 1.237a.75.75 0 1 1-1.06 1.061L14 11.561l-1.238 1.237a.75.75 0 0 1-1.06-1.06l1.237-1.238-1.237-1.237a.75.75 0 0 1 0-1.061Z', clipRule: 'evenodd' })));
};
var ForwardRef$8A = forwardRef(SvgCartRemove);

var SvgCartSmile = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.75 1.25a.75.75 0 0 0 0 1.5h2C5.44 2.75 6 3.31 6 4v9a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H7.5a2.75 2.75 0 0 0-2.75-2.75h-2ZM9.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM20 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-2.347-8.868a.75.75 0 0 1-.285 1.021c-1.215.685-2.261 1.095-3.365 1.097-1.105.002-2.154-.404-3.374-1.098a.75.75 0 1 1 .742-1.304c1.136.646 1.911.903 2.629.902.72-.001 1.494-.262 2.632-.903a.75.75 0 0 1 1.021.285Z', clipRule: 'evenodd' })));
};
var ForwardRef$8z = forwardRef(SvgCartSmile);

var SvgCart = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2 2a.75.75 0 0 1 .75-.75h2A2.75 2.75 0 0 1 7.5 4H18c1.953 0 3.579 1.4 3.93 3.25H6V4c0-.69-.56-1.25-1.25-1.25h-2A.75.75 0 0 1 2 2Zm7.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM6 8.75h16V13a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V8.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$8y = forwardRef(SvgCart);

var SvgCast = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 3h12a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4h-3.535C13.995 13.332 8.842 8.5 2 8.5V7a4 4 0 0 1 4-4Zm-4.75 8a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75a.75.75 0 0 1-1.5 0A9.25 9.25 0 0 0 2 11.75a.75.75 0 0 1-.75-.75ZM2 14.25a.75.75 0 0 0 0 1.5c2.9 0 5.25 2.35 5.25 5.25a.75.75 0 0 0 1.5 0A6.75 6.75 0 0 0 2 14.25Zm0 4a.75.75 0 0 0 0 1.5c.69 0 1.25.56 1.25 1.25a.75.75 0 0 0 1.5 0A2.75 2.75 0 0 0 2 18.25Z', clipRule: 'evenodd' })));
};
var ForwardRef$8x = forwardRef(SvgCast);

var SvgCctv = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3.5 6a1.5 1.5 0 1 0 0 3h17a1.5 1.5 0 0 0 0-3h-17Zm11.75 11.395A8.978 8.978 0 0 1 12 18a8.978 8.978 0 0 1-3.25-.605V17a3.25 3.25 0 0 1 6.5 0v.395Zm1.488-.741a4.75 4.75 0 0 0-9.476 0A9 9 0 0 1 3.055 10h17.89a9 9 0 0 1-4.207 6.654ZM13 16a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$8w = forwardRef(SvgCctv);

var SvgChartArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.5 1.75a.75.75 0 0 0-1.5 0v16a4.75 4.75 0 0 0 4.75 4.75h16a.75.75 0 0 0 0-1.5h-16a3.25 3.25 0 0 1-3.25-3.25v-16Zm14.195 8.884L19 12.939v-.689a.75.75 0 0 1 1.5 0v1.5a1.75 1.75 0 0 1-1.75 1.75h-1.5a.75.75 0 0 1 0-1.5h.69l-2.306-2.306a1.25 1.25 0 0 0-1.768 0l-1.171 1.172a2.75 2.75 0 0 1-3.89 0L6.22 10.28a.75.75 0 1 1 1.06-1.06l2.586 2.585a1.25 1.25 0 0 0 1.768 0l1.171-1.171a2.75 2.75 0 0 1 3.89 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$8v = forwardRef(SvgChartArrowDown);

var SvgChartArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.5 1.75a.75.75 0 0 0-1.5 0v16a4.75 4.75 0 0 0 4.75 4.75h16a.75.75 0 0 0 0-1.5h-16a3.25 3.25 0 0 1-3.25-3.25v-16Zm14 7a.75.75 0 0 1 .75-.75h1.5c.966 0 1.75.784 1.75 1.75v1.5a.75.75 0 0 1-1.5 0v-.69l-2.305 2.306a2.75 2.75 0 0 1-3.89 0l-1.171-1.171a1.25 1.25 0 0 0-1.768 0L7.28 14.28a.75.75 0 0 1-1.06-1.06l2.585-2.586a2.75 2.75 0 0 1 3.89 0l1.171 1.171a1.25 1.25 0 0 0 1.768 0L17.939 9.5h-.689a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$8u = forwardRef(SvgChartArrowUp);

var SvgChartHistogram = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M1.75 1a.75.75 0 0 1 .75.75v16A3.25 3.25 0 0 0 5.75 21h16a.75.75 0 0 1 0 1.5h-16A4.75 4.75 0 0 1 1 17.75v-16A.75.75 0 0 1 1.75 1Zm9.75 10.75a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0v-5Zm-4 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-3Zm7.25-.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm4.75 3.75v-5a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0Zm-.22-10.47a.75.75 0 0 0-1.06-1.06l-2.586 2.585a1.25 1.25 0 0 1-1.768 0l-1.171-1.171a2.75 2.75 0 0 0-3.89 0L6.22 9.22a.75.75 0 1 0 1.06 1.06l2.586-2.585a1.25 1.25 0 0 1 1.768 0l1.171 1.171a2.75 2.75 0 0 0 3.89 0L19.28 6.28Z', clipRule: 'evenodd' })));
};
var ForwardRef$8t = forwardRef(SvgChartHistogram);

var SvgClipboardActivity = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10 2a2 2 0 1 0 0 4h4a2 2 0 1 0 0-4h-4ZM6.5 4.03A4 4 0 0 0 3 8v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V8a4 4 0 0 0-3.5-3.969A3.5 3.5 0 0 1 14 7.5h-4a3.5 3.5 0 0 1-3.5-3.47Zm4.62 6.23a.75.75 0 0 1 .55.405l1.536 3.069 1.264-1.264a.75.75 0 0 1 .53-.22h2a.75.75 0 0 1 0 1.5h-1.69l-1.78 1.78a.75.75 0 0 1-1.2-.195l-1.536-3.069L9.53 13.53a.75.75 0 0 1-.53.22H7a.75.75 0 0 1 0-1.5h1.69l1.78-1.78a.75.75 0 0 1 .65-.21Z', clipRule: 'evenodd' })));
};
var ForwardRef$8s = forwardRef(SvgClipboardActivity);

var SvgClipboardAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282 3.5a2 2 0 0 1 2-2h4a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2Zm-1.5.031a4 4 0 0 0-3.5 3.97v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-10a4 4 0 0 0-3.5-3.97 3.5 3.5 0 0 1-3.5 3.47h-4a3.5 3.5 0 0 1-3.5-3.47Zm6.25 6.969a.75.75 0 1 0-1.5 0v2.25h-2.25a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25h2.25a.75.75 0 1 0 0-1.5h-2.25V10.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$8r = forwardRef(SvgClipboardAdd);

var SvgClipboardCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282 3.5a2 2 0 0 1 2-2h4a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2Zm-1.5.031a4 4 0 0 0-3.5 3.97v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-10a4 4 0 0 0-3.5-3.97 3.5 3.5 0 0 1-3.5 3.47h-4a3.5 3.5 0 0 1-3.5-3.47Zm9.064 8.463a.75.75 0 1 0-1.129-.988l-2.87 3.28a.25.25 0 0 1-.344.03L9.75 12.915a.75.75 0 1 0-.937 1.172l1.753 1.402a1.75 1.75 0 0 0 2.41-.214l2.87-3.28Z', clipRule: 'evenodd' })));
};
var ForwardRef$8q = forwardRef(SvgClipboardCheck);

var SvgClipboardDelete = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282 3.5a2 2 0 0 1 2-2h4a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2Zm-1.5.031a4 4 0 0 0-3.5 3.97v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-10a4 4 0 0 0-3.5-3.97 3.5 3.5 0 0 1-3.5 3.47h-4a3.5 3.5 0 0 1-3.5-3.47Zm8.151 8.378a.75.75 0 0 0-1.06-1.06l-1.591 1.59-1.591-1.59a.75.75 0 1 0-1.06 1.06l1.59 1.591-1.59 1.591a.75.75 0 1 0 1.06 1.06l1.59-1.59 1.592 1.59a.75.75 0 0 0 1.06-1.06l-1.59-1.591 1.59-1.591Z', clipRule: 'evenodd' })));
};
var ForwardRef$8p = forwardRef(SvgClipboardDelete);

var SvgClipboardDownload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282 3.5a2 2 0 0 1 2-2h4a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2Zm-1.5.031a4 4 0 0 0-3.5 3.97v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-10a4 4 0 0 0-3.5-3.97 3.5 3.5 0 0 1-3.5 3.47h-4a3.5 3.5 0 0 1-3.5-3.47Zm6.97 10.439-.72.72V10.5a.75.75 0 1 0-1.5 0v4.19l-.72-.72a.75.75 0 0 0-1.06 1.06l1.292 1.293a1.75 1.75 0 0 0 2.475 0l1.293-1.293a.75.75 0 1 0-1.06-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$8o = forwardRef(SvgClipboardDownload);

var SvgClipboardFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282 3.5a2 2 0 0 1 2-2h4a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2Zm-1.5.031a4 4 0 0 0-3.5 3.97v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-10a4 4 0 0 0-3.5-3.97 3.5 3.5 0 0 1-3.5 3.47h-4a3.5 3.5 0 0 1-3.5-3.47Zm5.5 8.151.265-.265a1.875 1.875 0 1 1 2.651 2.652l-1.856 1.856a1.5 1.5 0 0 1-2.121 0l-1.856-1.857a1.875 1.875 0 1 1 2.652-2.651l.265.265Z', clipRule: 'evenodd' })));
};
var ForwardRef$8n = forwardRef(SvgClipboardFavourite);

var SvgClipboardList = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.282 1.5a2 2 0 0 0 0 4h4a2 2 0 1 0 0-4h-4Zm-7 6a4 4 0 0 1 3.5-3.969 3.5 3.5 0 0 0 3.5 3.47h4a3.5 3.5 0 0 0 3.5-3.47 4 4 0 0 1 3.5 3.97v10a4 4 0 0 1-4 4h-10a4 4 0 0 1-4-4v-10Zm8.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 1 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm.75 3.25a.75.75 0 0 0 0 1.5h4a.75.75 0 1 0 0-1.5h-4Zm-.75 4.75a.75.75 0 0 1 .75-.75h4a.75.75 0 1 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm-1.75-8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$8m = forwardRef(SvgClipboardList);

var SvgClipboardMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282 3.5a2 2 0 0 1 2-2h4a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2Zm-1.5.031a4 4 0 0 0-3.5 3.97v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-10a4 4 0 0 0-3.5-3.97 3.5 3.5 0 0 1-3.5 3.47h-4a3.5 3.5 0 0 1-3.5-3.47Zm8.5 10.719a.75.75 0 1 0 0-1.5h-6a.75.75 0 0 0 0 1.5h6Z', clipRule: 'evenodd' })));
};
var ForwardRef$8l = forwardRef(SvgClipboardMinus);

var SvgClipboardSearch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282 3.5a2 2 0 0 1 2-2h4a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2Zm-1.5.031a4 4 0 0 0-3.5 3.97v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-10a4 4 0 0 0-3.5-3.97 3.5 3.5 0 0 1-3.5 3.47h-4a3.5 3.5 0 0 1-3.5-3.47Zm3.25 8.969a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm2.25-3.75a3.75 3.75 0 1 0 2.068 6.879l.901.901a.75.75 0 0 0 1.061-1.06l-.902-.902a3.75 3.75 0 0 0-3.129-5.818Z', clipRule: 'evenodd' })));
};
var ForwardRef$8k = forwardRef(SvgClipboardSearch);

var SvgClipboardUpload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282 3.5a2 2 0 0 1 2-2h4a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2Zm-1.5.031a4 4 0 0 0-3.5 3.97v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-10a4 4 0 0 0-3.5-3.97 3.5 3.5 0 0 1-3.5 3.47h-4a3.5 3.5 0 0 1-3.5-3.47Zm6.97 9.085-.72-.72v4.19a.75.75 0 1 1-1.5 0v-4.19l-.72.72a.75.75 0 0 1-1.06-1.06l1.292-1.293a1.75 1.75 0 0 1 2.475 0l1.293 1.293a.75.75 0 1 1-1.06 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$8j = forwardRef(SvgClipboardUpload);

var SvgClipboard = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282 3.5a2 2 0 0 1 2-2h4a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2Zm-1.5.031a4 4 0 0 0-3.5 3.97v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-10a4 4 0 0 0-3.5-3.97 3.5 3.5 0 0 1-3.5 3.47h-4a3.5 3.5 0 0 1-3.5-3.47Zm1.5 5.219a.75.75 0 1 0 0 1.5h8a.75.75 0 1 0 0-1.5h-8Zm-.75 4.75a.75.75 0 0 1 .75-.75h8a.75.75 0 1 1 0 1.5h-8a.75.75 0 0 1-.75-.75Zm.75 3.25a.75.75 0 0 0 0 1.5h4a.75.75 0 1 0 0-1.5h-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$8i = forwardRef(SvgClipboard);

var SvgCoinDollar = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-10-.75A1.25 1.25 0 1 1 13.25 10a.75.75 0 0 0 1.5 0 2.75 2.75 0 0 0-2-2.646V6.5a.75.75 0 0 0-1.5 0v.854A2.751 2.751 0 0 0 12 12.75 1.25 1.25 0 1 1 10.75 14a.75.75 0 0 0-1.5 0 2.75 2.75 0 0 0 2 2.646v.854a.75.75 0 0 0 1.5 0v-.854A2.751 2.751 0 0 0 12 11.25Z', clipRule: 'evenodd' })));
};
var ForwardRef$8h = forwardRef(SvgCoinDollar);

var SvgCoinEuro = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM10.358 9.75c.578-.618 1.39-1 2.281-1 .88 0 1.676.368 2.253.97a.75.75 0 0 0 1.083-1.038 4.608 4.608 0 0 0-3.336-1.432c-1.783 0-3.32 1.016-4.105 2.5H7.77a.75.75 0 0 0 0 1.5h.266a4.861 4.861 0 0 0 0 1.5H7.77a.75.75 0 0 0 0 1.5h.764c.784 1.484 2.322 2.5 4.105 2.5 1.31 0 2.492-.551 3.336-1.432a.75.75 0 0 0-1.083-1.037 3.107 3.107 0 0 1-2.253.969 3.118 3.118 0 0 1-2.28-1h2.2a.75.75 0 0 0 0-1.5H9.563a3.354 3.354 0 0 1 0-1.5h2.998a.75.75 0 0 0 0-1.5h-2.202Z', clipRule: 'evenodd' })));
};
var ForwardRef$8g = forwardRef(SvgCoinEuro);

var SvgCoinPound = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8.25 12a.75.75 0 0 1 .75-.75h1.323c.104-.42.158-.856.158-1.295v-.57a2.135 2.135 0 1 1 4.269 0v.497a.75.75 0 1 1-1.5 0v-.497a.635.635 0 1 0-1.27 0v.57c0 .437-.04.87-.122 1.295H13a.75.75 0 0 1 0 1.5h-1.61a6.908 6.908 0 0 1-1.075 1.704.482.482 0 0 0 .365.796H14a.75.75 0 0 1 0 1.5h-3.32c-1.693 0-2.607-1.987-1.504-3.273.197-.228.373-.472.527-.727H9a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$8f = forwardRef(SvgCoinPound);

var SvgCoinYen = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8.25 11a.75.75 0 0 1 .75-.75h1.5l-2.1-2.8a.75.75 0 1 1 1.2-.9l2.4 3.2 2.4-3.2a.75.75 0 1 1 1.2.9l-2.1 2.8H15a.75.75 0 0 1 0 1.5h-2.25v1.5H15a.75.75 0 0 1 0 1.5h-2.25V17a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25v-1.5H9a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$8e = forwardRef(SvgCoinYen);

var SvgCoin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20 6a2 2 0 0 0-2-2h-8a2 2 0 0 0-.001 4H6a2 2 0 1 0 0 4h3.998A2 2 0 0 0 10 16H7a2 2 0 1 0 0 4h8a2 2 0 1 0 0-4h3a2 2 0 1 0 0-4h-3.998a2 2 0 0 0-.001-4H18a2 2 0 0 0 2-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$8d = forwardRef(SvgCoin);

var SvgColorInversion = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.45 6.824c-1.568 1.88-2.7 4.214-2.7 6.176a7.251 7.251 0 0 0 6.5 7.212V3.883c-.401.13-.857.354-1.35.683-.82.545-1.674 1.329-2.45 2.258Zm1.62-3.507c.945-.63 1.967-1.067 2.93-1.067.963 0 1.985.438 2.931 1.067.961.639 1.92 1.527 2.77 2.546 1.68 2.014 3.049 4.68 3.049 7.137a8.75 8.75 0 1 1-17.5 0c0-2.457 1.368-5.123 3.05-7.137.85-1.02 1.808-1.907 2.77-2.546Z', clipRule: 'evenodd' })));
};
var ForwardRef$8c = forwardRef(SvgColorInversion);

var SvgComputer = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3h-6.25v2.25H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25V19H5a3 3 0 0 1-3-3V5Zm8.25 11a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$8b = forwardRef(SvgComputer);

var SvgCoupon = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 21a4 4 0 0 1-4-4v-1c0-.552.46-.984.982-1.164a3.001 3.001 0 0 0 0-5.672C2.46 8.984 2 8.552 2 8V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v1c0 .552-.46.984-.982 1.164a3.001 3.001 0 0 0 0 5.672c.522.18.982.612.982 1.164v1a4 4 0 0 1-4 4H6Zm3-11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-.47-5.47a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06l6-6Z', clipRule: 'evenodd' })));
};
var ForwardRef$8a = forwardRef(SvgCoupon);

var SvgCube = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm13.625 1.472 5 2.222c.407.181.773.425 1.09.717L12 7.926 4.286 4.41a3.995 3.995 0 0 1 1.09-.717l5-2.222a4 4 0 0 1 3.249 0ZM3.38 5.647A3.995 3.995 0 0 0 3 7.35v6.801a4 4 0 0 0 2.375 3.656l5 2.222c.283.126.576.217.875.274V9.232L3.38 5.647Zm9.37 14.655a3.98 3.98 0 0 0 .875-.274l5-2.222A4 4 0 0 0 21 14.15v-6.8c0-.601-.134-1.18-.38-1.703l-7.87 3.585v11.07Z', clipRule: 'evenodd' })));
};
var ForwardRef$89 = forwardRef(SvgCube);

var SvgDarkMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.25 3.784a8.25 8.25 0 0 0 0 16.432V3.784ZM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Z', clipRule: 'evenodd' })));
};
var ForwardRef$88 = forwardRef(SvgDarkMode);

var SvgDeliveryAirPlane = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4Zm7.75 1a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Zm-9.866 9.315 1.55 1.513A4.149 4.149 0 0 0 8.331 17h8.899c1.086 0 2.128.421 2.897 1.172l1.449 1.414a1.4 1.4 0 0 1 .424 1c0 .78-.649 1.414-1.449 1.414H7.425c-1.708 0-3.237-1.034-3.837-2.596l-1.517-3.95C1.801 14.752 2.334 14 3.104 14c.293 0 .573.113.78.315Z', clipRule: 'evenodd' })));
};
var ForwardRef$87 = forwardRef(SvgDeliveryAirPlane);

var SvgDeliveryCancel = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 3.062h3.5a4 4 0 0 1 4 4v12h-3a3.5 3.5 0 0 0-6.907-.805A3.994 3.994 0 0 1 2 15.062v-8a4 4 0 0 1 4-4Zm3.945 5.056a.75.75 0 0 1 0 1.06l-.884.884.884.884a.75.75 0 0 1-1.061 1.06L8 11.124l-.884.884a.75.75 0 1 1-1.06-1.061l.883-.884-.883-.884a.75.75 0 1 1 1.06-1.06L8 9l.884-.883a.75.75 0 0 1 1.06 0Zm11.5 10.326A3.5 3.5 0 0 0 15 17.258V7.062h2.21a2 2 0 0 1 1.367.541l2.79 2.617A2 2 0 0 1 22 11.678v5.383a1.99 1.99 0 0 1-.554 1.382ZM9 19.062a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm11 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$86 = forwardRef(SvgDeliveryCancel);

var SvgDeliveryConveyor = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5Zm6.75 1a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75ZM2 18a3 3 0 0 1 3-3h14a3 3 0 1 1 0 6H5a3 3 0 0 1-3-3Zm16 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-6 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$85 = forwardRef(SvgDeliveryConveyor);

var SvgDeliveryDone = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 3.062h3.5a4 4 0 0 1 4 4v12h-3a3.5 3.5 0 0 0-6.907-.805A3.994 3.994 0 0 1 2 15.062v-8a4 4 0 0 1 4-4Zm5.494 4.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.753-1.402a.75.75 0 0 1 .938-1.172L7.22 10.88a.25.25 0 0 0 .345-.03l2.87-3.28a.75.75 0 0 1 1.058-.071Zm9.952 10.946A3.5 3.5 0 0 0 15 17.258V7.062h2.21a2 2 0 0 1 1.367.541l2.79 2.617A2 2 0 0 1 22 11.678v5.383a1.99 1.99 0 0 1-.554 1.382ZM9 19.062a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm11 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$84 = forwardRef(SvgDeliveryDone);

var SvgDeliveryParachute = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.06 12 4.836 7.775c.096-.144.291-.328.672-.519.6-.3 1.48-.506 2.493-.506s1.894.207 2.493.506c.644.323.757.629.757.744v4H9.06Zm-1.504.616L3.47 8.53A.75.75 0 0 1 3.25 8c0-1.946 1.053-3.65 2.643-4.843C7.483 1.965 9.644 1.25 12 1.25c2.356 0 4.517.715 6.107 1.907C19.697 4.35 20.75 6.054 20.75 8a.75.75 0 0 1-.22.53l-4.086 4.086c.345.36.556.847.556 1.384v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6c0-.537.212-1.024.556-1.384ZM14.939 12l4.226-4.225c-.096-.144-.291-.328-.672-.519-.6-.3-1.48-.506-2.493-.506s-1.894.207-2.493.506c-.644.323-.757.629-.757.744v4h2.19Zm-1.189 2a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$83 = forwardRef(SvgDeliveryParachute);

var SvgDeliveryTime = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 3.062h3.5a4 4 0 0 1 4 4v12h-3a3.5 3.5 0 0 0-6.907-.805A3.994 3.994 0 0 1 2 15.062v-8a4 4 0 0 1 4-4Zm2 3.75a.75.75 0 0 1 .75.75v2.75h1.75a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 .75-.75Zm13.446 11.632A3.5 3.5 0 0 0 15 17.258V7.062h2.21a2 2 0 0 1 1.367.541l2.79 2.617A2 2 0 0 1 22 11.678v5.383a1.99 1.99 0 0 1-.554 1.382ZM9 19.062a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm11 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$82 = forwardRef(SvgDeliveryTime);

var SvgDelivery = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 3.062h3.5a4 4 0 0 1 4 4v12h-3a3.5 3.5 0 0 0-6.907-.805A3.994 3.994 0 0 1 2 15.062v-8a4 4 0 0 1 4-4Zm3 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm11 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2-3.5a3.5 3.5 0 0 1 3.446 2.882c.343-.359.554-.846.554-1.382V11.68a2 2 0 0 0-.632-1.46l-2.791-2.616a2 2 0 0 0-1.368-.54H15v10.195a3.498 3.498 0 0 1 3-1.696Z', clipRule: 'evenodd' })));
};
var ForwardRef$81 = forwardRef(SvgDelivery);

var SvgDeposit = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 3H6a4 4 0 0 0-1.5 7.71V7A1.5 1.5 0 0 1 6 5.5h12A1.5 1.5 0 0 1 19.5 7v3.71A4.001 4.001 0 0 0 18 3Zm0 16V7H6v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2Zm-6.75-6.604-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.293a.75.75 0 1 1-1.06 1.06l-.72-.72v4.19a.75.75 0 0 1-1.5 0v-4.19Z', clipRule: 'evenodd' })));
};
var ForwardRef$80 = forwardRef(SvgDeposit);

var SvgDestinationDashedThree = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 7c0 2.21-2 6-4 6s-4-3.79-4-6a4 4 0 0 1 8 0Zm-2.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM10 12.25a2.75 2.75 0 1 0 0 5.5h9a1.25 1.25 0 1 1 0 2.5H3a.75.75 0 0 0 0 1.5h16a2.75 2.75 0 1 0 0-5.5h-9a1.25 1.25 0 1 1 0-2.5h3a.75.75 0 0 0 0-1.5h-3Z', clipRule: 'evenodd' })));
};
var ForwardRef$7$ = forwardRef(SvgDestinationDashedThree);

var SvgDestinationDashedTwo = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20.225 8.607C21.055 7.56 22 6.123 22 5c0-2-1.343-3-3-3s-3 1-3 3.21c0 1.204.892 2.519 1.703 3.466.68.795 1.871.75 2.522-.07ZM19 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 22c2 0 4-3.79 4-6a4 4 0 0 0-8 0c0 2.21 2 6 4 6Zm0-4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11.53-5.47a.75.75 0 1 0-1.06-1.06l-.161.16a.75.75 0 1 0 1.06 1.061l.161-.16Zm-2.089 2.09a.75.75 0 1 0-1.06-1.061l-.322.321a.75.75 0 1 0 1.06 1.061l.322-.321Zm-2.25 2.25a.75.75 0 1 0-1.06-1.061l-.161.16a.75.75 0 1 0 1.06 1.061l.161-.16Z', clipRule: 'evenodd' })));
};
var ForwardRef$7_ = forwardRef(SvgDestinationDashedTwo);

var SvgDestinationLine = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.225 8.607C7.055 7.56 8 6.123 8 5c0-2-1.343-3-3-3S2 3 2 5.21c0 1.204.892 2.519 1.703 3.466.68.795 1.871.75 2.522-.07ZM5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 16c2 0 4-3.79 4-6a4 4 0 0 0-8 0c0 2.21 2 6 4 6Zm0-4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM22 5c0 1.123-.946 2.561-1.775 3.607-.651.82-1.841.864-2.522.069C16.892 7.729 16 6.414 16 5.209 16 3 17.343 2 19 2s3 1 3 3Zm-2 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1.97 5.97a.75.75 0 0 1 0 1.06l-.154.155a.75.75 0 0 1-1.061-1.06l.155-.155a.75.75 0 0 1 1.06 0Zm-2.012 2.012a.75.75 0 0 1 0 1.06l-.31.31a.75.75 0 0 1-1.06-1.06l.31-.31a.75.75 0 0 1 1.06 0Zm-2.166 2.166a.75.75 0 0 1 0 1.06l-.31.31a.75.75 0 1 1-1.06-1.06l.31-.31a.75.75 0 0 1 1.06 0Zm-2.167 2.167a.75.75 0 0 1 0 1.06l-.155.155a.75.75 0 1 1-1.06-1.06l.154-.155a.75.75 0 0 1 1.061 0ZM9 8.75a.75.75 0 0 0 0 1.5h.214a.75.75 0 0 0 0-1.5H9Zm2.786 0a.75.75 0 0 0 0 1.5h.428a.75.75 0 0 0 0-1.5h-.428Zm3 0a.75.75 0 0 0 0 1.5H15a.75.75 0 0 0 0-1.5h-.214Z', clipRule: 'evenodd' })));
};
var ForwardRef$7Z = forwardRef(SvgDestinationLine);

var SvgDestination = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.225 8.607C16.055 7.56 17 6.123 17 5c0-2-1.343-3-3-3s-3 1-3 3.21c0 1.204.892 2.519 1.703 3.466.68.795 1.871.75 2.522-.07ZM14 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 22c2 0 4-3.79 4-6a4 4 0 0 0-8 0c0 2.21 2 6 4 6Zm0-4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8.75-6.5a.75.75 0 0 0-1.5 0v2A3.75 3.75 0 0 0 17 16.75h1a2.25 2.25 0 0 1 0 4.5h-8a.75.75 0 0 0 0 1.5h8a3.75 3.75 0 1 0 0-7.5h-1A2.25 2.25 0 0 1 14.75 13v-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$7Y = forwardRef(SvgDestination);

var SvgDevices = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18.5 4H6a2 2 0 0 0-2 2v9.5h8.5v-8a2 2 0 0 1 2-2H20A1.5 1.5 0 0 0 18.5 4ZM14 9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V9ZM3.5 17h9v3h-9a1.5 1.5 0 0 1 0-3Z', clipRule: 'evenodd' })));
};
var ForwardRef$7X = forwardRef(SvgDevices);

var SvgDigitalHealth = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM9.57 19.845l-3.718-4.598A3.82 3.82 0 0 1 5 12.845v-.173C5 10.644 6.662 9 8.712 9c.985 0 1.93.387 2.625 1.076l.663.655.663-.655A3.733 3.733 0 0 1 15.288 9C17.338 9 19 10.644 19 12.672v.173c0 .873-.3 1.72-.852 2.401l-3.719 4.599c-1.245 1.54-3.613 1.54-4.858 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$7W = forwardRef(SvgDigitalHealth);

var SvgDirectionDownDoubleCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM7.4 8.55a.75.75 0 0 1 1.05-.15l2.8 2.1a1.25 1.25 0 0 0 1.5 0l2.8-2.1a.75.75 0 0 1 .9 1.2l-2.8 2.1a2.75 2.75 0 0 1-3.3 0l-2.8-2.1a.75.75 0 0 1-.15-1.05Zm1.05 4.85a.75.75 0 0 0-.9 1.2l2.8 2.1a2.75 2.75 0 0 0 3.3 0l2.8-2.1a.75.75 0 1 0-.9-1.2l-2.8 2.1a1.25 1.25 0 0 1-1.5 0l-2.8-2.1Z', clipRule: 'evenodd' })));
};
var ForwardRef$7V = forwardRef(SvgDirectionDownDoubleCircle);

var SvgDirectionDownDoubleRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm1.4 5.55a.75.75 0 0 1 1.05-.15l2.8 2.1a1.25 1.25 0 0 0 1.5 0l2.8-2.1a.75.75 0 0 1 .9 1.2l-2.8 2.1a2.75 2.75 0 0 1-3.3 0l-2.8-2.1a.75.75 0 0 1-.15-1.05Zm1.05 4.85a.75.75 0 0 0-.9 1.2l2.8 2.1a2.75 2.75 0 0 0 3.3 0l2.8-2.1a.75.75 0 1 0-.9-1.2l-2.8 2.1a1.25 1.25 0 0 1-1.5 0l-2.8-2.1Z', clipRule: 'evenodd' })));
};
var ForwardRef$7U = forwardRef(SvgDirectionDownDoubleRectangle);

var SvgDirectionDownDouble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.469 6.414a.75.75 0 1 0-.937 1.172l5 4a.75.75 0 0 0 .937 0l5-4a.75.75 0 1 0-.938-1.172L12 10.04 7.469 6.414Zm0 6a.75.75 0 1 0-.937 1.172l5 4a.75.75 0 0 0 .937 0l5-4a.75.75 0 1 0-.938-1.172L12 16.04l-4.531-3.626Z', clipRule: 'evenodd' })));
};
var ForwardRef$7T = forwardRef(SvgDirectionDownDouble);

var SvgDirectionDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.414 9.532a.75.75 0 0 1 1.055-.118L12 13.04l4.532-3.626a.75.75 0 1 1 .936 1.172l-5 4a.75.75 0 0 1-.937 0l-5-4a.75.75 0 0 1-.117-1.054Z', clipRule: 'evenodd' })));
};
var ForwardRef$7S = forwardRef(SvgDirectionDown);

var SvgDirectionLeftDoubleCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-6.55-4.6a.75.75 0 0 1 .15 1.05l-2.1 2.8a1.25 1.25 0 0 0 0 1.5l2.1 2.8a.75.75 0 0 1-1.2.9l-2.1-2.8a2.75 2.75 0 0 1 0-3.3l2.1-2.8a.75.75 0 0 1 1.05-.15ZM10.6 8.45a.75.75 0 0 0-1.2-.9l-2.1 2.8a2.75 2.75 0 0 0 0 3.3l2.1 2.8a.75.75 0 1 0 1.2-.9l-2.1-2.8a1.25 1.25 0 0 1 0-1.5l2.1-2.8Z', clipRule: 'evenodd' })));
};
var ForwardRef$7R = forwardRef(SvgDirectionLeftDoubleCircle);

var SvgDirectionLeftDoubleRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm10.45 5.4a.75.75 0 0 1 .15 1.05l-2.1 2.8a1.25 1.25 0 0 0 0 1.5l2.1 2.8a.75.75 0 0 1-1.2.9l-2.1-2.8a2.75 2.75 0 0 1 0-3.3l2.1-2.8a.75.75 0 0 1 1.05-.15ZM11.6 8.45a.75.75 0 0 0-1.2-.9l-2.1 2.8a2.75 2.75 0 0 0 0 3.3l2.1 2.8a.75.75 0 1 0 1.2-.9l-2.1-2.8a1.25 1.25 0 0 1 0-1.5l2.1-2.8Z', clipRule: 'evenodd' })));
};
var ForwardRef$7Q = forwardRef(SvgDirectionLeftDoubleRectangle);

var SvgDirectionLeftDouble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.586 7.469a.75.75 0 1 0-1.172-.937l-4 5a.75.75 0 0 0 0 .937l4 5a.75.75 0 1 0 1.172-.938L13.96 12l3.626-4.531Zm-6 0a.75.75 0 1 0-1.172-.937l-4 5a.75.75 0 0 0 0 .937l4 5a.75.75 0 1 0 1.172-.938L7.96 12l3.626-4.531Z', clipRule: 'evenodd' })));
};
var ForwardRef$7P = forwardRef(SvgDirectionLeftDouble);

var SvgDirectionLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14.469 6.414a.75.75 0 0 1 .117 1.055L10.96 12l3.626 4.532a.75.75 0 1 1-1.172.936l-4-5a.75.75 0 0 1 0-.937l4-5a.75.75 0 0 1 1.055-.117Z', clipRule: 'evenodd' })));
};
var ForwardRef$7O = forwardRef(SvgDirectionLeft);

var SvgDirectionRightDoubleCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8.55 16.6a.75.75 0 0 1-.15-1.05l2.1-2.8a1.25 1.25 0 0 0 0-1.5l-2.1-2.8a.75.75 0 0 1 1.2-.9l2.1 2.8a2.75 2.75 0 0 1 0 3.3l-2.1 2.8a.75.75 0 0 1-1.05.15Zm4.85-1.05a.75.75 0 0 0 1.2.9l2.1-2.8a2.75 2.75 0 0 0 0-3.3l-2.1-2.8a.75.75 0 1 0-1.2.9l2.1 2.8a1.25 1.25 0 0 1 0 1.5l-2.1 2.8Z', clipRule: 'evenodd' })));
};
var ForwardRef$7N = forwardRef(SvgDirectionRightDoubleCircle);

var SvgDirectionRightDoubleRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm2.55 14.6a.75.75 0 0 1-.15-1.05l2.1-2.8a1.25 1.25 0 0 0 0-1.5l-2.1-2.8a.75.75 0 0 1 1.2-.9l2.1 2.8a2.75 2.75 0 0 1 0 3.3l-2.1 2.8a.75.75 0 0 1-1.05.15Zm4.85-1.05a.75.75 0 0 0 1.2.9l2.1-2.8a2.75 2.75 0 0 0 0-3.3l-2.1-2.8a.75.75 0 1 0-1.2.9l2.1 2.8a1.25 1.25 0 0 1 0 1.5l-2.1 2.8Z', clipRule: 'evenodd' })));
};
var ForwardRef$7M = forwardRef(SvgDirectionRightDoubleRectangle);

var SvgDirectionRightDouble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.414 7.469a.75.75 0 1 1 1.172-.937l4 5a.75.75 0 0 1 0 .937l-4 5a.75.75 0 1 1-1.172-.938L10.04 12 6.414 7.469Zm6 0a.75.75 0 1 1 1.172-.937l4 5a.75.75 0 0 1 0 .937l-4 5a.75.75 0 1 1-1.172-.938L16.04 12l-3.626-4.531Z', clipRule: 'evenodd' })));
};
var ForwardRef$7L = forwardRef(SvgDirectionRightDouble);

var SvgDirectionRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.532 6.414a.75.75 0 0 0-.118 1.055L13.04 12l-3.626 4.532a.75.75 0 1 0 1.172.936l4-5a.75.75 0 0 0 0-.937l-4-5a.75.75 0 0 0-1.054-.117Z', clipRule: 'evenodd' })));
};
var ForwardRef$7K = forwardRef(SvgDirectionRight);

var SvgDirectionUpDoubleCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-5.4 3.45a.75.75 0 0 1-1.05.15l-2.8-2.1a1.25 1.25 0 0 0-1.5 0l-2.8 2.1a.75.75 0 0 1-.9-1.2l2.8-2.1a2.75 2.75 0 0 1 3.3 0l2.8 2.1a.75.75 0 0 1 .15 1.05Zm-1.05-4.85a.75.75 0 0 0 .9-1.2l-2.8-2.1a2.75 2.75 0 0 0-3.3 0l-2.8 2.1a.75.75 0 0 0 .9 1.2l2.8-2.1a1.25 1.25 0 0 1 1.5 0l2.8 2.1Z', clipRule: 'evenodd' })));
};
var ForwardRef$7J = forwardRef(SvgDirectionUpDoubleCircle);

var SvgDirectionUpDoubleRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm10.6 13.45a.75.75 0 0 1-1.05.15l-2.8-2.1a1.25 1.25 0 0 0-1.5 0l-2.8 2.1a.75.75 0 0 1-.9-1.2l2.8-2.1a2.75 2.75 0 0 1 3.3 0l2.8 2.1a.75.75 0 0 1 .15 1.05Zm-1.05-4.85a.75.75 0 0 0 .9-1.2l-2.8-2.1a2.75 2.75 0 0 0-3.3 0l-2.8 2.1a.75.75 0 0 0 .9 1.2l2.8-2.1a1.25 1.25 0 0 1 1.5 0l2.8 2.1Z', clipRule: 'evenodd' })));
};
var ForwardRef$7I = forwardRef(SvgDirectionUpDoubleRectangle);

var SvgDirectionUpDouble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.469 17.586a.75.75 0 1 1-.937-1.172l5-4a.75.75 0 0 1 .937 0l5 4a.75.75 0 1 1-.938 1.172L12 13.96l-4.531 3.626Zm0-6a.75.75 0 1 1-.937-1.172l5-4a.75.75 0 0 1 .937 0l5 4a.75.75 0 1 1-.938 1.172L12 7.96l-4.531 3.626Z', clipRule: 'evenodd' })));
};
var ForwardRef$7H = forwardRef(SvgDirectionUpDouble);

var SvgDirectionUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.586 14.469a.75.75 0 0 1-1.054.117L12 10.96l-4.532 3.626a.75.75 0 1 1-.937-1.172l5-4a.75.75 0 0 1 .938 0l5 4a.75.75 0 0 1 .117 1.055Z', clipRule: 'evenodd' })));
};
var ForwardRef$7G = forwardRef(SvgDirectionUp);

var SvgDna = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.091 1.293a.75.75 0 0 1 .957.457A5.253 5.253 0 0 0 12 5.25c.057 0 .114 0 .17.002a6.88 6.88 0 0 1 .171-.002c2.285 0 4.23-1.46 4.952-3.5a.75.75 0 0 1 1.414.5 6.772 6.772 0 0 1-3.447 3.838 6.777 6.777 0 0 1 2.906 3.162H6.176A6.778 6.778 0 0 1 9.08 6.088 6.772 6.772 0 0 1 5.634 2.25a.75.75 0 0 1 .457-.957Zm-.384 9.457h12.927a6.792 6.792 0 0 1 0 2.5H5.707a6.787 6.787 0 0 1 0-2.5Zm.468 4a6.778 6.778 0 0 0 2.906 3.162 6.772 6.772 0 0 0-3.447 3.838.75.75 0 1 0 1.414.5A5.252 5.252 0 0 1 12 18.75c.057 0 .114 0 .17-.002.057.002.114.002.171.002 2.285 0 4.23 1.46 4.952 3.5a.75.75 0 1 0 1.414-.5 6.772 6.772 0 0 0-3.447-3.838 6.777 6.777 0 0 0 2.906-3.162H6.176Z', clipRule: 'evenodd' })));
};
var ForwardRef$7F = forwardRef(SvgDna);

var SvgDoNotDisturb = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM7 11.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5H7Z', clipRule: 'evenodd' })));
};
var ForwardRef$7E = forwardRef(SvgDoNotDisturb);

var SvgDollar = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 1a.75.75 0 0 1 .75.75v1.316a4.251 4.251 0 0 1 3.5 4.184.75.75 0 0 1-1.5 0 2.75 2.75 0 0 0-2-2.646v5.462a4.251 4.251 0 0 1 0 8.368v1.316a.75.75 0 0 1-1.5 0v-1.316a4.251 4.251 0 0 1-3.5-4.184.75.75 0 0 1 1.5 0 2.75 2.75 0 0 0 2 2.646v-5.462a4.251 4.251 0 0 1 0-8.368V1.75A.75.75 0 0 1 12 1Zm-.75 3.604a2.751 2.751 0 0 0 0 5.292V4.604Zm1.5 7v5.293a2.751 2.751 0 0 0 0-5.293Z', clipRule: 'evenodd' })));
};
var ForwardRef$7D = forwardRef(SvgDollar);

var SvgDonateCoin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM2 8h1.582a2 2 0 0 1 .801.168l5.88 2.572a1.911 1.911 0 0 1 .756 2.906l2.714 1.72a6.001 6.001 0 0 0 2.683.634H18a2 2 0 1 1 0 4H9.889a8 8 0 0 1-3.578-.845L2 17V8Z', clipRule: 'evenodd' })));
};
var ForwardRef$7C = forwardRef(SvgDonateCoin);

var SvgDonate = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm15.438 12.048-2.83-3.538A2.776 2.776 0 0 1 12 6.776v-.124A2.652 2.652 0 0 1 14.652 4h.297c.513 0 1.005.204 1.367.566a.967.967 0 0 0 1.368 0A1.934 1.934 0 0 1 19.05 4h.297A2.652 2.652 0 0 1 22 6.652v.124a2.78 2.78 0 0 1-.608 1.734l-2.83 3.538a2 2 0 0 1-3.124 0ZM2 8h1.582a2 2 0 0 1 .801.168l5.88 2.572a1.911 1.911 0 0 1 .756 2.906l2.714 1.72a6.001 6.001 0 0 0 2.683.634H18a2 2 0 1 1 0 4H9.889a8 8 0 0 1-3.578-.845L2 17V8Z', clipRule: 'evenodd' })));
};
var ForwardRef$7B = forwardRef(SvgDonate);

var SvgDonation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13 5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2V5Zm6.25 1a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75ZM2 9h2l6.262 2.74a1.911 1.911 0 0 1 .757 2.906l2.714 1.72a6 6 0 0 0 2.683.634H18a2 2 0 1 1 0 4H9.889a8 8 0 0 1-3.578-.845L2 18V9Z', clipRule: 'evenodd' })));
};
var ForwardRef$7A = forwardRef(SvgDonation);

var SvgDownloadCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.47 11.53a.75.75 0 1 1 1.06-1.06l2.72 2.72V1a.75.75 0 0 1 1.5 0v12.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4ZM6.34 8.47a.75.75 0 1 0-1.17-.94 8.75 8.75 0 1 0 13.661 0 .75.75 0 0 0-1.17.94 7.25 7.25 0 1 1-11.32 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$7z = forwardRef(SvgDownloadCircle);

var SvgDownloadRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.25 17A4.75 4.75 0 0 0 7 21.75h10A4.75 4.75 0 0 0 21.75 17v-4A4.75 4.75 0 0 0 17 8.25h-.5a.75.75 0 0 0 0 1.5h.5A3.25 3.25 0 0 1 20.25 13v4A3.25 3.25 0 0 1 17 20.25H7A3.25 3.25 0 0 1 3.75 17v-4A3.25 3.25 0 0 1 7 9.75h.5a.75.75 0 0 0 0-1.5H7A4.75 4.75 0 0 0 2.25 13v4Zm6.22-4.47a.75.75 0 1 1 1.06-1.06l1.72 1.72V3a.75.75 0 0 1 1.5 0v10.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3Z', clipRule: 'evenodd' })));
};
var ForwardRef$7y = forwardRef(SvgDownloadRectangle);

var SvgDribbble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.097 13.4c.49 3.5 2.793 6.42 5.928 7.779.137-2.82.72-5.53 1.682-8.07a16.917 16.917 0 0 0-3.176-.299c-1.54 0-3.028.207-4.434.59Zm7.409 8.286c.797.205 1.633.314 2.494.314 2.87 0 5.458-1.21 7.282-3.146-1.99-2.529-4.818-4.448-8.103-5.393a24.86 24.86 0 0 0-1.673 8.225Zm10.74-4.027a9.953 9.953 0 0 0 1.74-6.184 18.435 18.435 0 0 1-3.286.294c-2.2 0-4.304-.387-6.243-1.093a25.44 25.44 0 0 0-.69 1.394c3.395 1.013 6.342 2.987 8.479 5.59Zm1.55-7.674a10.006 10.006 0 0 0-4.05-6.17 26.7 26.7 0 0 0-4.531 5.539 16.75 16.75 0 0 0 5.485.915c1.06 0 2.096-.098 3.097-.284ZM16.405 3.02A9.959 9.959 0 0 0 12 2a9.957 9.957 0 0 0-6.142 2.108 15.716 15.716 0 0 0 5.945 4.682 28.139 28.139 0 0 1 4.601-5.77Zm-11.66 2.1A9.965 9.965 0 0 0 2 11.874a18.339 18.339 0 0 1 4.53-.565c1.29 0 2.548.133 3.758.386.241-.54.5-1.072.775-1.595a17.214 17.214 0 0 1-6.32-4.982Z', clipRule: 'evenodd' })));
};
var ForwardRef$7x = forwardRef(SvgDribbble);

var SvgDrive = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21.192 14.5 15 3H9l3 5.4 3.389 6.1h5.803ZM8.155 4.568 2 16l3 5 2.778-5 3.364-6.056-2.987-5.376ZM19 21H6.716l2.778-5H22l-3 5Z', clipRule: 'evenodd' })));
};
var ForwardRef$7w = forwardRef(SvgDrive);

var SvgEarnings = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13 3.75a.75.75 0 0 1 .75-.75h4a2.75 2.75 0 0 1 2.75 2.75v4a.75.75 0 0 1-1.5 0v-4c0-.06-.004-.12-.012-.177L4.28 20.28a.75.75 0 0 1-1.06-1.06L17.927 4.512a1.261 1.261 0 0 0-.177-.012h-4a.75.75 0 0 1-.75-.75Zm-3.25 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$7v = forwardRef(SvgEarnings);

var SvgEuro = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.86 10.75a7.126 7.126 0 0 0 0 2.5H16a.75.75 0 0 1 0 1.5H8.303c1.106 2.635 3.755 4.5 6.864 4.5 2.08 0 3.957-.836 5.303-2.182a.75.75 0 0 1 1.06 1.061 8.976 8.976 0 0 1-6.363 2.621c-3.936 0-7.292-2.508-8.468-6H3a.75.75 0 0 1 0-1.5h3.34a8.674 8.674 0 0 1 0-2.5H3a.75.75 0 0 1 0-1.5h3.699c1.176-3.492 4.532-6 8.468-6a8.976 8.976 0 0 1 6.363 2.62.75.75 0 1 1-1.06 1.062 7.476 7.476 0 0 0-5.303-2.182c-3.11 0-5.758 1.865-6.864 4.5H16a.75.75 0 0 1 0 1.5H7.86Z', clipRule: 'evenodd' })));
};
var ForwardRef$7u = forwardRef(SvgEuro);

var SvgExchangeRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-4.53 4.47a.75.75 0 0 1 1.06 0l2 2A.75.75 0 0 1 16 9.75h-6c-.69 0-1.25.56-1.25 1.25v1a.75.75 0 0 1-1.5 0v-1A2.75 2.75 0 0 1 10 8.25h4.19l-.72-.72a.75.75 0 0 1 0-1.06Zm-6 9.06 2 2a.75.75 0 1 0 1.06-1.06l-.72-.72H14A2.75 2.75 0 0 0 16.75 13v-1a.75.75 0 0 0-1.5 0v1c0 .69-.56 1.25-1.25 1.25H8a.75.75 0 0 0-.53 1.28Z', clipRule: 'evenodd' })));
};
var ForwardRef$7t = forwardRef(SvgExchangeRectangle);

var SvgExchange = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.53 3.47a.75.75 0 0 0-1.06 1.06l1.72 1.72H9A5.75 5.75 0 0 0 3.25 12v1a.75.75 0 0 0 1.5 0v-1A4.25 4.25 0 0 1 9 7.75h11a.75.75 0 0 0 .53-1.28l-3-3ZM6.47 20.53a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15A5.75 5.75 0 0 0 20.75 12v-1a.75.75 0 0 0-1.5 0v1A4.25 4.25 0 0 1 15 16.25H4a.75.75 0 0 0-.53 1.28l3 3Z', clipRule: 'evenodd' })));
};
var ForwardRef$7s = forwardRef(SvgExchange);

var SvgEyeDropper = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm13.275 5.436.663.647-5.352 5.352a4 4 0 0 0-1.172 2.829v1.171h1.172a4 4 0 0 0 2.828-1.171l5.387-5.386.675.659a.75.75 0 0 0 1.048-1.073l-.663-.647 1.574-1.574a2 2 0 1 0-2.828-2.829l-1.608 1.608-.676-.659a.75.75 0 0 0-1.048 1.073ZM5.5 22c.828 0 1.5-.395 1.5-1.5C7 19.396 5.5 18 5.5 18S4 19.396 4 20.5c0 1.105.672 1.5 1.5 1.5Z' })));
};
var ForwardRef$7r = forwardRef(SvgEyeDropper);

var SvgEyeScannerBorder = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.5 5.75A3.25 3.25 0 0 1 5.75 2.5h2a.75.75 0 0 0 0-1.5h-2A4.75 4.75 0 0 0 1 5.75v2a.75.75 0 0 0 1.5 0v-2ZM15.75 1a.75.75 0 0 0 0 1.5h2A3.25 3.25 0 0 1 21 5.75v2a.75.75 0 0 0 1.5 0v-2A4.75 4.75 0 0 0 17.75 1h-2Zm6.75 14.75a.75.75 0 0 0-1.5 0v2A3.25 3.25 0 0 1 17.75 21h-2a.75.75 0 0 0 0 1.5h2a4.75 4.75 0 0 0 4.75-4.75v-2Zm-20 .556a.75.75 0 1 0-1.5 0v1.444a4.75 4.75 0 0 0 4.75 4.75h2a.75.75 0 0 0 0-1.5h-2a3.25 3.25 0 0 1-3.25-3.25v-1.444Zm16.79-3.455c-1.423 1.472-4.265 3.899-7.54 3.899-3.274 0-6.117-2.427-7.54-3.899-.613-.634-.613-1.568 0-2.202C5.633 9.176 8.476 6.75 11.75 6.75s6.117 2.426 7.54 3.899c.613.634.613 1.568 0 2.202Z', clipRule: 'evenodd' })));
};
var ForwardRef$7q = forwardRef(SvgEyeScannerBorder);

var SvgEye = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm7.102 8.836C17.45 8.676 14.883 7 12 7s-5.45 1.675-7.102 3.086a2.487 2.487 0 0 0 0 3.828C6.55 15.324 9.117 17 12 17s5.45-1.675 7.102-3.086a2.487 2.487 0 0 0 0-3.828ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.75 6a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2ZM2.47 4.47a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06Zm19.06 0a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0Zm-18 15.06a.75.75 0 0 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 1.06l-1.5 1.5Zm18-1.06a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 1 1 1.06-1.06l1.5 1.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$7p = forwardRef(SvgEye);

var SvgFacebookSquare = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h4.5v-6H7v-3h3.5v-2a4 4 0 0 1 4-4H17v3h-2.5a1 1 0 0 0-1 1v2H17v3h-3.5v6H18a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z' })));
};
var ForwardRef$7o = forwardRef(SvgFacebookSquare);

var SvgFacebook = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M18 3h-3a5 5 0 0 0-5 5v2H6v4h4v7h4v-7h4v-4h-4V8a1 1 0 0 1 1-1h3V3Z' })));
};
var ForwardRef$7n = forwardRef(SvgFacebook);

var SvgFastDelivery = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.5 3.062H6a4 4 0 0 0-4 4v8c0 1.306.626 2.465 1.593 3.195a3.5 3.5 0 0 1 6.907.805h3v-12a4 4 0 0 0-4-4ZM8 7.312a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5H8Zm-2.75 4.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Zm16.196 6.382A3.5 3.5 0 0 0 15 17.258V7.062h2.21a2 2 0 0 1 1.367.541l2.79 2.617A2 2 0 0 1 22 11.678v5.383a1.99 1.99 0 0 1-.554 1.382ZM9 19.062a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm11 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$7m = forwardRef(SvgFastDelivery);

var SvgFastTime = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 12c0 5.523-4.477 10-10 10a1 1 0 0 1-1-1v-3a2 2 0 0 0-2-2H4a2 2 0 0 1-2-2v-2C2 6.477 6.477 2 12 2s10 4.477 10 10ZM12 5.25a.75.75 0 0 0-.75.75v4.145a2 2 0 1 0 1.573 3.678.747.747 0 0 0 .147.207l1.5 1.5a.75.75 0 1 0 1.06-1.06l-1.5-1.5a.751.751 0 0 0-.207-.147 2 2 0 0 0-1.073-2.678V6a.75.75 0 0 0-.75-.75ZM1.25 22a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75ZM2 18.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5H2Z', clipRule: 'evenodd' })));
};
var ForwardRef$7l = forwardRef(SvgFastTime);

var SvgFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M12.765 4.702 12 5.524l-.765-.822c-2.113-2.27-5.538-2.27-7.65 0-2.113 2.27-2.113 5.95 0 8.22l6.885 7.397a2.06 2.06 0 0 0 3.06 0l6.886-7.397c2.112-2.27 2.112-5.95 0-8.22-2.113-2.27-5.538-2.27-7.651 0Z' })));
};
var ForwardRef$7k = forwardRef(SvgFavourite);

var SvgFigma = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9 3a3 3 0 0 0 0 6 3 3 0 1 0 0 6 3 3 0 1 0 3 3v-6a3 3 0 1 0 3-3 3 3 0 1 0 0-6H9Zm6 6a3 3 0 0 0-3 3V9h3Z', clipRule: 'evenodd' })));
};
var ForwardRef$7j = forwardRef(SvgFigma);

var SvgFilterBigCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9 11a3 3 0 1 0-2.905-3.75H3a.75.75 0 0 0 0 1.5h3.095A3.001 3.001 0 0 0 9 11Zm-6 4.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5H3ZM15 19a3.001 3.001 0 0 0 2.905-2.25H21a.75.75 0 0 0 0-1.5h-3.095A3.001 3.001 0 0 0 12 16a3 3 0 0 0 3 3ZM14 7.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7Z', clipRule: 'evenodd' })));
};
var ForwardRef$7i = forwardRef(SvgFilterBigCircle);

var SvgFilterSmallCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.855 6.75a2 2 0 0 1-3.71 0H3a.75.75 0 0 1 0-1.5h7.145a2 2 0 0 1 3.71 0H21a.75.75 0 0 1 0 1.5h-7.145ZM2.25 12a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75ZM17 10a2 2 0 0 1 1.855 1.25H21a.75.75 0 0 1 0 1.5h-2.145A2 2 0 1 1 17 10Zm-5 7.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5h-8ZM2.25 18a.75.75 0 0 1 .75-.75h3.145a2 2 0 1 1 0 1.5H3a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$7h = forwardRef(SvgFilterSmallCircle);

var SvgFingerPrintBorder = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 2.75A3.25 3.25 0 0 0 2.75 6v2a.75.75 0 0 1-1.5 0V6A4.75 4.75 0 0 1 6 1.25h2a.75.75 0 0 1 0 1.5H6ZM15.25 2a.75.75 0 0 1 .75-.75h2A4.75 4.75 0 0 1 22.75 6v2a.75.75 0 0 1-1.5 0V6A3.25 3.25 0 0 0 18 2.75h-2a.75.75 0 0 1-.75-.75ZM2 15.25a.75.75 0 0 1 .75.75v2A3.25 3.25 0 0 0 6 21.25h2a.75.75 0 0 1 0 1.5H6A4.75 4.75 0 0 1 1.25 18v-2a.75.75 0 0 1 .75-.75Zm20 0a.75.75 0 0 1 .75.75v2A4.75 4.75 0 0 1 18 22.75h-2a.75.75 0 0 1 0-1.5h2A3.25 3.25 0 0 0 21.25 18v-2a.75.75 0 0 1 .75-.75Zm-9-6a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm-2.25.75a2.25 2.25 0 0 1 4.5 0v2.657c0 1.301-.517 2.55-1.437 3.47l-.343.343a.75.75 0 1 0 1.06 1.06l.344-.343a6.407 6.407 0 0 0 1.876-4.53V10a3.75 3.75 0 1 0-7.5 0v2.657c0 1.301-.517 2.55-1.437 3.47l-.343.343a.75.75 0 1 0 1.06 1.06l.343-.343a6.407 6.407 0 0 0 1.877-4.53V10Z', clipRule: 'evenodd' })));
};
var ForwardRef$7g = forwardRef(SvgFingerPrintBorder);

var SvgFingerPrint = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.75 10a6.25 6.25 0 1 1 12.5 0v7a.75.75 0 0 0 1.5 0v-7a7.75 7.75 0 0 0-15.5 0v7a.75.75 0 0 0 1.5 0v-7ZM12 7.25A2.75 2.75 0 0 0 9.25 10v6.515a6.75 6.75 0 0 1-1.977 4.773l-.243.242a.75.75 0 0 1-1.06-1.06l.242-.243a5.25 5.25 0 0 0 1.538-3.712V10a4.25 4.25 0 0 1 8.5 0v6.515a6.75 6.75 0 0 1-1.977 4.773l-.243.242a.75.75 0 1 1-1.06-1.06l.242-.243a5.25 5.25 0 0 0 1.538-3.712V10A2.75 2.75 0 0 0 12 7.25Zm0 2a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$7f = forwardRef(SvgFingerPrint);

var SvgFiverr = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16 3h-4a5 5 0 0 0-5 5v2H4v4h3v7h4v-7h5v7h4V10h-9V8a1 1 0 0 1 1-1h4V3Z' })));
};
var ForwardRef$7e = forwardRef(SvgFiverr);

var SvgFlagCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.75 16.095C5.87 16.427 3 17.602 3 19c0 1.657 4.03 3 9 3s9-1.343 9-3c0-1.398-2.868-2.572-6.75-2.905V18a2.25 2.25 0 1 1-4.5 0v-1.905Z', clipRule: 'evenodd' }),
        React.createElement("path", { fill: 'currentColor', d: 'M12.75 18a.75.75 0 0 1-1.5 0l.005-14a2 2 0 0 1 2-2h5.382a1 1 0 0 1 .894 1.447l-1.053 2.106a1 1 0 0 0 0 .894l1.053 2.106A1 1 0 0 1 18.637 10H12.75v8Z' })));
};
var ForwardRef$7d = forwardRef(SvgFlagCircle);

var SvgFlag = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.75 16H7.875A4 4 0 0 0 4.8 17.44l-1.067 1.28C2.648 20.022 3.574 22 5.27 22h13.46c1.696 0 2.622-1.978 1.537-3.28L19.2 17.44A4 4 0 0 0 16.127 16H14.25v1.5a2.25 2.25 0 0 1-4.5 0V16Z', clipRule: 'evenodd' }),
        React.createElement("path", { fill: 'currentColor', d: 'M12.75 17.5a.75.75 0 0 1-1.5 0l.005-14a2 2 0 0 1 2-2h5.382a1 1 0 0 1 .894 1.447l-1.053 2.106a1 1 0 0 0 0 .894l1.053 2.106a1 1 0 0 1-.894 1.447H12.75v8Z' })));
};
var ForwardRef$7c = forwardRef(SvgFlag);

var SvgFlashAuto = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19.192 1.712a.75.75 0 0 0-1.384 0l-2.5 6a.75.75 0 0 0 1.384.576l.641-1.538h2.334l.64 1.538a.75.75 0 0 0 1.385-.576l-2.5-6ZM18.5 3.95l.542 1.3h-1.084l.542-1.3ZM12 2 3 13.5h5V22l9-11.5h-5V2Z', clipRule: 'evenodd' })));
};
var ForwardRef$7b = forwardRef(SvgFlashAuto);

var SvgFlashLight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.857 2h10.286c.473 0 .857.384.857.857a5.144 5.144 0 0 1-3 4.677V19a3 3 0 1 1-6 0V7.534a5.144 5.144 0 0 1-3-4.677C6 2.384 6.384 2 6.857 2Zm5.893 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0V9Z', clipRule: 'evenodd' })));
};
var ForwardRef$7a = forwardRef(SvgFlashLight);

var SvgFlashOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19 10.5h-5V2l-3.925 5.015 6.537 6.536L19 10.5ZM4.53 3.47a.75.75 0 0 0-1.06 1.06l4.796 4.797L5 13.5h5V22l4.803-6.137 4.667 4.667a.75.75 0 1 0 1.06-1.06l-16-16Z', clipRule: 'evenodd' })));
};
var ForwardRef$79 = forwardRef(SvgFlashOff);

var SvgFlash = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M5 13.5 14 2v8.5h5L10 22v-8.5H5Z' })));
};
var ForwardRef$78 = forwardRef(SvgFlash);

var SvgGiveBlood = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.868 2.981C15.685 4.113 14 6.072 14 8.056 14 10 15.515 12 18 12c2.485 0 4-2 4-3.944 0-1.984-1.685-3.943-2.868-5.075a1.621 1.621 0 0 0-2.264 0ZM2 10.001h2l6.262 2.739a1.911 1.911 0 0 1 .757 2.906l2.714 1.72a6.001 6.001 0 0 0 2.683.634H18a2 2 0 1 1 0 4H9.889a7.999 7.999 0 0 1-3.578-.845L2 19v-9Z', clipRule: 'evenodd' })));
};
var ForwardRef$77 = forwardRef(SvgGiveBlood);

var SvgGivePill = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16 5a3 3 0 1 1 6 0v2.25h-6V5Zm0 6V8.75h6V11a3 3 0 1 1-6 0ZM2 10h2l6.262 2.74a1.911 1.911 0 0 1 .757 2.906l2.714 1.72a6.001 6.001 0 0 0 2.683.634H18a2 2 0 1 1 0 4H9.889a8 8 0 0 1-3.578-.845L2 19v-9Z', clipRule: 'evenodd' })));
};
var ForwardRef$76 = forwardRef(SvgGivePill);

var SvgGlassBroken = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 25', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.75 13.627h.017c4.342 0 7.247-4.47 5.483-8.437l-1.32-2.97a1 1 0 0 0-.913-.593H7.983a1 1 0 0 0-.914.594L5.75 5.19c-1.763 3.968 1.142 8.437 5.484 8.437h.017v7.25H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25v-7.25Zm.085-9.671a.75.75 0 0 1 .336 1.006l-.957 1.915H13a.75.75 0 0 1 .67 1.085l-1.5 3a.75.75 0 1 1-1.34-.67l.957-1.915H11a.75.75 0 0 1-.67-1.086l1.5-3a.75.75 0 0 1 1.005-.335Z', clipRule: 'evenodd' })));
};
var ForwardRef$75 = forwardRef(SvgGlassBroken);

var SvgGlobeEarth = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19.96 18.053A9.984 9.984 0 0 1 12 22a9.997 9.997 0 0 1-2.746-.382 3.216 3.216 0 0 0 2.305-3.082 3.217 3.217 0 0 0-3.22-3.215c-.95 0-1.718-.769-1.718-1.714a3.217 3.217 0 0 0-3.22-3.215H2.13C2.898 5.634 7.024 2 12 2c1.726 0 3.35.437 4.767 1.207a3.197 3.197 0 0 0-.535 1.774c0 .946-.768 1.715-1.72 1.715a3.217 3.217 0 0 0-3.218 3.214 3.217 3.217 0 0 0 3.219 3.215c.95 0 1.719.768 1.719 1.714a3.217 3.217 0 0 0 3.22 3.214h.508Zm.945-1.5h-1.454c-.95 0-1.719-.769-1.719-1.714a3.217 3.217 0 0 0-3.22-3.214c-.95 0-1.718-.77-1.718-1.715 0-.945.768-1.714 1.719-1.714a3.217 3.217 0 0 0 3.219-3.215c0-.356.108-.687.295-.961A9.984 9.984 0 0 1 22 12a9.95 9.95 0 0 1-1.095 4.553Zm-18.904-4.66L2 12a9.98 9.98 0 0 0 4.347 8.25H8.34c.95 0 1.719-.769 1.719-1.714 0-.946-.768-1.715-1.72-1.715a3.217 3.217 0 0 1-3.218-3.214c0-.946-.769-1.715-1.72-1.715h-1.4Z', clipRule: 'evenodd' })));
};
var ForwardRef$74 = forwardRef(SvgGlobeEarth);

var SvgGlobe = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.876 4.478C9.19 6.368 8.75 9.026 8.75 12c0 .38.007.754.021 1.122A40.13 40.13 0 0 0 12 13.25c1.12 0 2.204-.045 3.229-.128.014-.368.021-.742.021-1.122 0-2.974-.44-5.633-1.126-7.522-.345-.947-.738-1.661-1.136-2.125a2.555 2.555 0 0 0-.338-.332 10.148 10.148 0 0 0-1.3 0c-.107.085-.22.194-.338.332-.398.464-.791 1.178-1.136 2.125Zm5.256 10.157A41.86 41.86 0 0 1 12 14.75c-1.08 0-2.129-.04-3.131-.115.174 1.898.531 3.577 1.007 4.887.345.947.738 1.662 1.136 2.125.118.138.231.247.338.332a10.131 10.131 0 0 0 1.3 0c.107-.085.22-.194.338-.332.399-.463.791-1.178 1.136-2.125.476-1.31.833-2.99 1.008-4.887Zm-7.867-1.667c-.01-.32-.015-.642-.015-.968 0-3.101.456-5.942 1.217-8.034.206-.569.44-1.094.7-1.559C5.122 3.6 2.145 7.28 2.005 11.677c.877.398 2.087.756 3.562 1.03.537.1 1.105.187 1.698.261Zm-5.177.364c.917.342 2.005.627 3.205.85.65.12 1.337.223 2.057.307.174 2.118.565 4.029 1.117 5.546.206.568.44 1.093.7 1.558a10.01 10.01 0 0 1-7.08-8.261Zm14.562 1.157c.72-.084 1.408-.187 2.057-.308 1.2-.222 2.288-.507 3.205-.85a10.01 10.01 0 0 1-7.079 8.262c.26-.465.494-.99.7-1.558.552-1.517.943-3.428 1.117-5.546Zm5.345-2.812c-.877.398-2.087.756-3.562 1.03-.537.1-1.105.187-1.698.261.01-.32.015-.642.015-.968 0-3.101-.456-5.942-1.217-8.034a10.716 10.716 0 0 0-.7-1.559c4.045 1.193 7.022 4.873 7.162 9.27Z', clipRule: 'evenodd' })));
};
var ForwardRef$73 = forwardRef(SvgGlobe);

var SvgGmail = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm2.03 6.512 8.206 5.968a3 3 0 0 0 3.528 0l8.207-5.968A4 4 0 0 0 18 3H6a4 4 0 0 0-3.97 3.512ZM22 8.964l-7.06 5.134a5 5 0 0 1-5.88 0L2 8.964V17a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V8.964Z', clipRule: 'evenodd' })));
};
var ForwardRef$72 = forwardRef(SvgGmail);

var SvgGold = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.75 1.75a.75.75 0 1 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1Zm-2.899 4a1.5 1.5 0 0 0-1.459 1.153l-.952 4A1.5 1.5 0 0 0 8.9 12.75H4.85a1.5 1.5 0 0 0-1.459 1.153l-.952 4A1.5 1.5 0 0 0 3.9 19.75h6.2a1.5 1.5 0 0 0 1.46-1.847l-.953-4a1.5 1.5 0 0 0-1.46-1.153h5.704a1.5 1.5 0 0 0-1.46 1.153l-.952 4a1.5 1.5 0 0 0 1.46 1.847H20.1a1.5 1.5 0 0 0 1.46-1.847l-.953-4a1.5 1.5 0 0 0-1.46-1.153H15.1a1.5 1.5 0 0 0 1.46-1.847l-.953-4a1.5 1.5 0 0 0-1.46-1.153H9.853Zm8.68-2.47-1 1a.75.75 0 0 1-1.061-1.06l1-1a.75.75 0 0 1 1.06 1.06Zm-12-1.06A.75.75 0 0 0 5.47 3.28l1 1a.75.75 0 0 0 1.06-1.06l-1-1Z', clipRule: 'evenodd' })));
};
var ForwardRef$71 = forwardRef(SvgGold);

var SvgGooglePlus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.75 12a5.75 5.75 0 0 1 9.816-4.066.75.75 0 1 0 1.06-1.06A7.25 7.25 0 1 0 15.75 12a.75.75 0 0 0-.749-.751H8.5a.75.75 0 0 0 0 1.5h5.701A5.751 5.751 0 0 1 2.75 12Zm18-2a.75.75 0 0 0-1.5 0v1.25H18a.75.75 0 0 0 0 1.5h1.25V14a.75.75 0 0 0 1.5 0v-1.25H22a.75.75 0 0 0 0-1.5h-1.25V10Z', clipRule: 'evenodd' })));
};
var ForwardRef$70 = forwardRef(SvgGooglePlus);

var SvgGoogle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M12 13.5v-3h9.888c.074.49.112.99.112 1.5 0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2a9.969 9.969 0 0 1 7.071 2.929L16.95 7.05a7 7 0 1 0 1.89 6.45H12Z' })));
};
var ForwardRef$6$ = forwardRef(SvgGoogle);

var SvgGpsCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 1.25a.75.75 0 0 1 .75.75v2.035a8.002 8.002 0 0 1 7.215 7.216L20 11.25h2a.75.75 0 0 1 0 1.5h-2.035a8.002 8.002 0 0 1-7.216 7.215l.001.035v2a.75.75 0 0 1-1.5 0v-2.035a8.002 8.002 0 0 1-7.215-7.216L4 12.75H2a.75.75 0 0 1 0-1.5h2.035a8.002 8.002 0 0 1 7.216-7.215L11.25 4V2a.75.75 0 0 1 .75-.75ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', clipRule: 'evenodd' })));
};
var ForwardRef$6_ = forwardRef(SvgGpsCircle);

var SvgGpsOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 1.25a.75.75 0 0 1 .75.75v2.035a8.002 8.002 0 0 1 7.215 7.216L20 11.25h2a.75.75 0 0 1 0 1.5h-2.035a7.949 7.949 0 0 1-.988 3.167l-3.28-3.281a3.75 3.75 0 0 0-4.332-4.332L8.082 5.023a7.95 7.95 0 0 1 3.168-.988V2a.75.75 0 0 1 .75-.75Zm-7.965 10H2a.75.75 0 0 0 0 1.5h2.035a8.002 8.002 0 0 0 7.216 7.215L11.25 20v2a.75.75 0 0 0 1.5 0v-2.035a7.964 7.964 0 0 0 4.352-1.803l3.368 3.368a.75.75 0 1 0 1.06-1.06l-18-18a.75.75 0 0 0-1.06 1.06l3.368 3.368a7.964 7.964 0 0 0-1.803 4.353ZM9.75 12a2.25 2.25 0 0 0 3.22 2.03l1.098 1.099a3.75 3.75 0 0 1-5.197-5.197L9.97 11.03a2.24 2.24 0 0 0-.219.97Z', clipRule: 'evenodd' })));
};
var ForwardRef$6Z = forwardRef(SvgGpsOff);

var SvgGpsSend = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 1.25a.75.75 0 0 1 .75.75v2.035a8.002 8.002 0 0 1 7.215 7.216L20 11.25h2a.75.75 0 0 1 0 1.5h-2.035a8.002 8.002 0 0 1-7.216 7.215l.001.035v2a.75.75 0 0 1-1.5 0v-2.035a8.002 8.002 0 0 1-7.215-7.216L4 12.75H2a.75.75 0 0 1 0-1.5h2.035a8.002 8.002 0 0 1 7.216-7.215L11.25 4V2a.75.75 0 0 1 .75-.75ZM9.248 12.416l1.515.505a.5.5 0 0 1 .316.316l.505 1.515a.5.5 0 0 0 .934.04l1.99-4.643a.5.5 0 0 0-.657-.657l-4.642 1.99a.5.5 0 0 0 .039.934Z', clipRule: 'evenodd' })));
};
var ForwardRef$6Y = forwardRef(SvgGpsSend);

var SvgGps = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.75 2a.75.75 0 0 0-1.5 0v2.035a8.002 8.002 0 0 0-7.215 7.216L4 11.25H2a.75.75 0 0 0 0 1.5h2.035a8.002 8.002 0 0 0 7.216 7.215L11.25 20v2a.75.75 0 0 0 1.5 0v-2.035a8.002 8.002 0 0 0 7.215-7.216l.035.001h2a.75.75 0 0 0 0-1.5h-2.035a8.002 8.002 0 0 0-7.216-7.215L12.75 4V2ZM12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$6X = forwardRef(SvgGps);

var SvgGraphicEq = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75Zm-4 3a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7A.75.75 0 0 1 8 6.25Zm8.75.75a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0V7ZM4 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4A.75.75 0 0 1 4 9.25Zm16.75.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$6W = forwardRef(SvgGraphicEq);

var SvgHanger = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 4.75c-.734 0-1.299.577-1.299 1.25a.75.75 0 0 1-1.5 0c0-1.536 1.27-2.75 2.799-2.75S14.799 4.464 14.799 6c0 .55-.166 1.064-.449 1.494a9.006 9.006 0 0 1-.575.756l-.103.125c-.158.192-.304.367-.438.548-.21.282-.348.518-.421.73l8.754 6.104c2.259 1.575 1.065 4.993-1.62 4.993H4.053c-2.684 0-3.878-3.418-1.62-4.993l8.854-6.173c.107-.62.436-1.142.745-1.558.16-.214.334-.425.493-.617l.094-.113c.19-.23.35-.432.48-.628.127-.194.2-.422.2-.668 0-.673-.564-1.25-1.298-1.25Zm0 6.164-8.71 6.074c-.984.687-.539 2.262.762 2.262h15.896c1.3 0 1.746-1.575.761-2.262L12 10.914Z', clipRule: 'evenodd' })));
};
var ForwardRef$6V = forwardRef(SvgHanger);

var SvgHangout = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M12 1c-5.248 0-9.5 4.308-9.5 9.625 0 5.042 4.524 9.167 9.5 9.167V23c5.745-2.842 9.5-7.517 9.5-12.375C21.5 5.308 17.248 1 12 1Zm-.452 11c0 1.283-.815 2.292-1.81 2.292V12H7.476V7.875h4.072V12Zm5.428 0c0 1.283-.814 2.292-1.81 2.292V12h-2.261V7.875h4.071V12Z' })));
};
var ForwardRef$6U = forwardRef(SvgHangout);

var SvgHealthCare = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm16 3.402.459-.456a3.258 3.258 0 0 1 4.59 0 3.217 3.217 0 0 1 0 4.566l-4.13 4.11a1.303 1.303 0 0 1-1.837 0l-4.131-4.11a3.217 3.217 0 0 1 0-4.566 3.258 3.258 0 0 1 4.59 0l.459.456ZM2 10h2l6.262 2.74a1.911 1.911 0 0 1 .757 2.906l2.714 1.72a6.001 6.001 0 0 0 2.683.634H18a2 2 0 1 1 0 4H9.889a8 8 0 0 1-3.578-.845L2 19v-9Z', clipRule: 'evenodd' })));
};
var ForwardRef$6T = forwardRef(SvgHealthCare);

var SvgHeart = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M12.765 4.702 12 5.524l-.765-.822c-2.113-2.27-5.538-2.27-7.65 0-2.113 2.27-2.113 5.95 0 8.22l6.885 7.397a2.06 2.06 0 0 0 3.06 0l6.886-7.397c2.112-2.27 2.112-5.95 0-8.22-2.113-2.27-5.538-2.27-7.651 0Z' })));
};
var ForwardRef$6S = forwardRef(SvgHeart);

var SvgHomeAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Zm-9-7.717a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V17a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V11a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$6R = forwardRef(SvgHomeAdd);

var SvgHomeArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 10.15v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.046 4.046 0 0 1 21 10.15Zm-7 7.6a.75.75 0 0 1 0-1.5h.787l-1.563-3.126a.25.25 0 0 0-.448 0l-1.21 2.423c-.646 1.29-2.486 1.29-3.131 0l-2.106-4.212a.75.75 0 1 1 1.342-.67l2.105 4.21a.25.25 0 0 0 .448 0l1.21-2.422c.646-1.29 2.486-1.29 3.131 0L16 15.323l.33-.658a.75.75 0 0 1 1.34.67l-1 2a.75.75 0 0 1-.67.415h-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$6Q = forwardRef(SvgHomeArrowDown);

var SvgHomeArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 10.15v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.046 4.046 0 0 1 21 10.15Zm-7 .1a.75.75 0 0 0 0 1.5h.787l-1.563 3.126a.25.25 0 0 1-.448 0l-1.21-2.423c-.646-1.29-2.486-1.29-3.131 0l-2.106 4.212a.75.75 0 1 0 1.342.67l2.105-4.21a.25.25 0 0 1 .448 0l1.21 2.422c.646 1.29 2.486 1.29 3.131 0L16 12.677l.33.658a.75.75 0 0 0 1.34-.67l-1-2a.75.75 0 0 0-.67-.415h-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$6P = forwardRef(SvgHomeArrowUp);

var SvgHomeCelsius = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Zm-8.99-6.217c-1.25 0-2.26 1.01-2.26 2.25s1.01 2.25 2.26 2.25c.574 0 1.096-.212 1.495-.563a.75.75 0 1 1 .99 1.126 3.753 3.753 0 0 1-2.486.937A3.755 3.755 0 0 1 8.25 14a3.755 3.755 0 0 1 3.76-3.75 3.75 3.75 0 0 1 2.485.937.75.75 0 1 1-.99 1.126 2.253 2.253 0 0 0-1.496-.563Zm3.49-1.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$6O = forwardRef(SvgHomeCelsius);

var SvgHomeCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 10.15v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.046 4.046 0 0 1 21 10.15Zm-4.376 1.266a.75.75 0 1 0-1.248-.832l-2.647 3.97a1.25 1.25 0 0 1-1.924.19L9.53 13.47a.75.75 0 0 0-1.06 1.06l1.275 1.275a2.75 2.75 0 0 0 4.232-.419l2.647-3.97Z', clipRule: 'evenodd' })));
};
var ForwardRef$6N = forwardRef(SvgHomeCheck);

var SvgHomeCloud = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 10.15v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.046 4.046 0 0 1 21 10.15ZM10.5 17a3.5 3.5 0 1 1 3.22-4.876A2.5 2.5 0 1 1 14.5 17h-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$6M = forwardRef(SvgHomeCloud);

var SvgHomeDownload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 10.15v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.046 4.046 0 0 1 21 10.15ZM12.75 9a.75.75 0 0 0-1.5 0v6.19l-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.293a.75.75 0 1 0-1.06-1.06l-.72.72V9Z', clipRule: 'evenodd' })));
};
var ForwardRef$6L = forwardRef(SvgHomeDownload);

var SvgHomeEye = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 10.15v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.046 4.046 0 0 1 21 10.15Zm-5.009 2.753a1.486 1.486 0 0 1 0 2.194C15.08 15.954 13.631 17 12 17c-1.63 0-3.079-1.046-3.991-1.903a1.486 1.486 0 0 1 0-2.194c.912-.857 2.36-1.903 3.99-1.903 1.631 0 3.08 1.046 3.992 1.903ZM13 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$6K = forwardRef(SvgHomeEye);

var SvgHomeFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 10.15v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.046 4.046 0 0 1 21 10.15ZM12 12l.31-.31a2.187 2.187 0 1 1 3.093 3.094l-2.166 2.166a1.75 1.75 0 0 1-2.474 0l-2.166-2.166a2.188 2.188 0 0 1 3.094-3.093L12 12Z', clipRule: 'evenodd' })));
};
var ForwardRef$6J = forwardRef(SvgHomeFavourite);

var SvgHomeFilter = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 10.15v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.046 4.046 0 0 1 21 10.15ZM10.75 10a.75.75 0 0 0-1.5 0v.25H8a.75.75 0 0 0 0 1.5h1.25V12a.75.75 0 0 0 1.5 0v-2Zm1.25.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4ZM14.75 15a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-.25H16a.75.75 0 0 0 0-1.5h-1.25V15ZM8 15.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5H8Z', clipRule: 'evenodd' })));
};
var ForwardRef$6I = forwardRef(SvgHomeFilter);

var SvgHomeFlash = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 10.15v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.046 4.046 0 0 1 21 10.15Zm-7.4-.7a.75.75 0 1 0-1.2-.9l-3 4a.75.75 0 0 0 .6 1.2h2.5l-2.1 2.8a.75.75 0 1 0 1.2.9l3-4a.75.75 0 0 0-.6-1.2h-2.5l2.1-2.8Z', clipRule: 'evenodd' })));
};
var ForwardRef$6H = forwardRef(SvgHomeFlash);

var SvgHomeFluid = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 10.15v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.046 4.046 0 0 1 21 10.15ZM12 9s3.5 2.915 3.5 5.4c0 2.485-1.843 3.6-3.5 3.6s-3.5-1.115-3.5-3.6C8.5 11.915 12 9 12 9Z', clipRule: 'evenodd' })));
};
var ForwardRef$6G = forwardRef(SvgHomeFluid);

var SvgHomeGraph = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 10.15v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.046 4.046 0 0 1 21 10.15ZM8.75 11a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Zm7.25-.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75ZM12.75 9a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0V9Z', clipRule: 'evenodd' })));
};
var ForwardRef$6F = forwardRef(SvgHomeGraph);

var SvgHomeInformation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Zm-9-5.717a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75ZM12 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$6E = forwardRef(SvgHomeInformation);

var SvgHomeLink = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Zm-8.823-9.033a2.75 2.75 0 0 1 3.889 3.89l-.354.353a.75.75 0 1 1-1.06-1.06l.353-.354a1.25 1.25 0 1 0-1.768-1.768l-1.414 1.414a1.25 1.25 0 0 0 0 1.768l-1.06 1.06a2.75 2.75 0 0 1 0-3.889l1.414-1.414Zm-4.243 8.132a2.75 2.75 0 0 0 3.89 0l1.413-1.414a2.75 2.75 0 0 0 0-3.89l-1.06 1.061a1.25 1.25 0 0 1 0 1.768l-1.415 1.414a1.25 1.25 0 1 1-1.767-1.767l.353-.354a.75.75 0 0 0-1.06-1.06l-.354.353a2.75 2.75 0 0 0 0 3.889Z', clipRule: 'evenodd' })));
};
var ForwardRef$6D = forwardRef(SvgHomeLink);

var SvgHomeLocationBig = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 9.916v8.07A4.007 4.007 0 0 1 17 22h-5c2 0 5-4.239 5-7a5 5 0 0 0-10 0c0 2.761 3 7 5 7H7c-2.21 0-4-1.797-4-4.014v-8.07c0-1.239.57-2.408 1.544-3.169l5-3.902a3.99 3.99 0 0 1 4.912 0l5 3.902A4.019 4.019 0 0 1 21 9.916ZM13.5 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$6C = forwardRef(SvgHomeLocationBig);

var SvgHomeLocation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 10.15v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.046 4.046 0 0 1 21 10.15Zm-5.5 2.45c0 2.485-3.5 5.4-3.5 5.4s-3.5-2.915-3.5-5.4C8.5 10.115 10.343 9 12 9s3.5 1.115 3.5 3.6Zm-2-.1a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$6B = forwardRef(SvgHomeLocation);

var SvgHomeLock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 10.15v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.046 4.046 0 0 1 21 10.15Zm-9-.4c-.69 0-1.25.56-1.25 1.25v1h2.5v-1c0-.69-.56-1.25-1.25-1.25ZM9.25 12c0 .048.004.095.013.14A2 2 0 0 0 8 14v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-1.263-1.86.752.752 0 0 0 .013-.14v-1a2.75 2.75 0 1 0-5.5 0v1Z', clipRule: 'evenodd' })));
};
var ForwardRef$6A = forwardRef(SvgHomeLock);

var SvgHomeMail = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 10.15v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.046 4.046 0 0 1 21 10.15ZM7 12a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4Zm2.33.665a.75.75 0 0 1 1.005-.336l1.106.553a1.25 1.25 0 0 0 1.118 0l1.106-.553a.75.75 0 0 1 .67 1.342l-1.105.553a2.75 2.75 0 0 1-2.46 0l-1.105-.553a.75.75 0 0 1-.336-1.006Z', clipRule: 'evenodd' })));
};
var ForwardRef$6z = forwardRef(SvgHomeMail);

var SvgHomeMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 10.15v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.046 4.046 0 0 1 21 10.15Zm-6 4.6a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z', clipRule: 'evenodd' })));
};
var ForwardRef$6y = forwardRef(SvgHomeMinus);

var SvgHomeNotification = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033ZM8.667 12.333a3.333 3.333 0 0 1 6.666 0v1.234c0 .595.247 1.164.68 1.571.713.668.24 1.862-.736 1.862H8.723c-.976 0-1.448-1.194-.736-1.862.434-.407.68-.976.68-1.57v-1.235ZM11 18.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$6x = forwardRef(SvgHomeNotification);

var SvgHomePower = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033ZM12 9.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm-2.438 2.6a.75.75 0 1 0-1.124-.992 4.75 4.75 0 1 0 7.125 0 .75.75 0 1 0-1.125.993 3.25 3.25 0 1 1-4.875 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$6w = forwardRef(SvgHomePower);

var SvgHomeRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Zm-6.348-1.315a.75.75 0 0 1-1.061 0L12 15.06l-1.591 1.59a.75.75 0 1 1-1.06-1.06L10.938 14l-1.59-1.591a.75.75 0 1 1 1.06-1.06L12 12.938l1.591-1.59a.75.75 0 1 1 1.06 1.06L13.062 14l1.59 1.591a.75.75 0 0 1 0 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$6v = forwardRef(SvgHomeRemove);

var SvgHomeSetting = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033ZM12.424 10h-.848c-.469 0-.849.358-.849.8a.666.666 0 0 1-.985.585l-.045-.024c-.406-.221-.925-.09-1.159.293l-.424.692c-.234.383-.095.872.31 1.093a.639.639 0 0 1 0 1.122.776.776 0 0 0-.31 1.093l.424.692c.234.383.753.514 1.16.293l.044-.024a.666.666 0 0 1 .985.585c0 .442.38.8.849.8h.848c.469 0 .849-.358.849-.8 0-.506.54-.827.985-.585l.045.024c.406.221.925.09 1.159-.293l.424-.692c.235-.383.095-.872-.31-1.093a.639.639 0 0 1 0-1.122.776.776 0 0 0 .31-1.093l-.424-.692c-.234-.383-.753-.514-1.16-.293l-.044.024a.666.666 0 0 1-.985-.585c0-.442-.38-.8-.849-.8ZM12 15.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z', clipRule: 'evenodd' })));
};
var ForwardRef$6u = forwardRef(SvgHomeSetting);

var SvgHomeShare = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 10.15v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.046 4.046 0 0 1 21 10.15Zm-7.05-.9a1.8 1.8 0 0 0-1.799 1.861l-1.973.986a1.8 1.8 0 1 0 0 2.805l1.973.987-.001.061a1.8 1.8 0 1 0 .672-1.403l-1.973-.986a1.769 1.769 0 0 0 0-.122l1.973-.986A1.8 1.8 0 1 0 13.95 9.25Z', clipRule: 'evenodd' })));
};
var ForwardRef$6t = forwardRef(SvgHomeShare);

var SvgHomeShield = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 10.15v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.046 4.046 0 0 1 21 10.15Zm-11.894.297 2-1a2 2 0 0 1 1.788 0l1.991.996c.683.34 1.12 1.042 1.08 1.804-.162 2.997-.89 4.392-2.852 5.94a1.802 1.802 0 0 1-2.226 0c-1.957-1.538-2.712-2.916-2.86-5.95-.036-.757.401-1.451 1.08-1.79Z', clipRule: 'evenodd' })));
};
var ForwardRef$6s = forwardRef(SvgHomeShield);

var SvgHomeUpload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 10.15v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.046 4.046 0 0 1 21 10.15Zm-7.53 1.38-.72-.72V17a.75.75 0 0 1-1.5 0v-6.19l-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.293a.75.75 0 1 1-1.06 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$6r = forwardRef(SvgHomeUpload);

var SvgHomeWarning = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Zm-9-3.217a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75ZM12 16a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$6q = forwardRef(SvgHomeWarning);

var SvgHomeWave = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 10.15v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.046 4.046 0 0 1 21 10.15ZM9.75 12.5a.75.75 0 0 1 1.5 0v3a2.25 2.25 0 0 0 4.5 0 .75.75 0 0 1 .75-.75h.5a.75.75 0 0 0 0-1.5h-.5a2.25 2.25 0 0 0-2.25 2.25.75.75 0 0 1-1.5 0v-3a2.25 2.25 0 0 0-4.5 0v1a.75.75 0 0 1-.75.75H7a.75.75 0 0 0 0 1.5h.5a2.25 2.25 0 0 0 2.25-2.25v-1Z', clipRule: 'evenodd' })));
};
var ForwardRef$6p = forwardRef(SvgHomeWave);

var SvgHomeWifi = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033ZM12.75 17a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-4.462-3.712A5.231 5.231 0 0 1 12 11.75a5.23 5.23 0 0 1 3.712 1.538.75.75 0 1 0 1.06-1.061A6.731 6.731 0 0 0 12 10.25a6.731 6.731 0 0 0-4.773 1.977.75.75 0 0 0 1.06 1.06Zm2.121 2.121A2.24 2.24 0 0 1 12 14.75a2.24 2.24 0 0 1 1.591.659.75.75 0 1 0 1.06-1.06A3.74 3.74 0 0 0 12 13.25a3.74 3.74 0 0 0-2.652 1.098.75.75 0 0 0 1.061 1.061Z', clipRule: 'evenodd' })));
};
var ForwardRef$6o = forwardRef(SvgHomeWifi);

var SvgHome = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 10.15v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.046 4.046 0 0 1 21 10.15ZM8.293 15.31a.75.75 0 1 0-.586 1.38c1.629.691 2.97 1.063 4.335 1.06 1.366-.003 2.68-.382 4.255-1.061a.75.75 0 1 0-.594-1.378c-1.49.642-2.589.936-3.664.939-1.077.003-2.204-.286-3.746-.94Z', clipRule: 'evenodd' })));
};
var ForwardRef$6n = forwardRef(SvgHome);

var SvgHoney = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2.5 16.5 5v5L12 12.5 7.5 10V5L12 2.5Zm-5.5 9L11 14v5l-4.5 2.5L2 19v-5l4.5-2.5ZM22 14l-4.5-2.5L13 14v5l4.5 2.5L22 19v-5Z', clipRule: 'evenodd' })));
};
var ForwardRef$6m = forwardRef(SvgHoney);

var SvgHospitalBed = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-6-2.75a.75.75 0 0 1 .75.75v1.25h1.5V4.5a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0V7.25h-1.5V8.5a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75ZM2.75 9a.75.75 0 0 0-1.5 0v13a.75.75 0 0 0 1.5 0v-3.25H20.5V22a.75.75 0 0 0 1.5 0v-6a2 2 0 0 0-2-2H10v-2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2H2.75V9Z', clipRule: 'evenodd' })));
};
var ForwardRef$6l = forwardRef(SvgHospitalBed);

var SvgHospitalPanel = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6Zm2.75 6a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0v-3.25h6.5V16a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v3.25h-6.5V8Z', clipRule: 'evenodd' })));
};
var ForwardRef$6k = forwardRef(SvgHospitalPanel);

var SvgHospital = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15 17v4.25H9V17a3 3 0 1 1 6 0Zm7 4.25h-2V6a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v15.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5ZM12.75 5a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V11a.75.75 0 0 0 1.5 0V8.75H15a.75.75 0 0 0 0-1.5h-2.25V5Z', clipRule: 'evenodd' })));
};
var ForwardRef$6j = forwardRef(SvgHospital);

var SvgHotspotOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.53 1.47a.75.75 0 0 0-1.06 1.06l3.413 3.413A10.725 10.725 0 0 0 1.25 14c0 2.968 1.204 5.657 3.149 7.601a.75.75 0 1 0 1.06-1.06A9.219 9.219 0 0 1 2.75 14a9.227 9.227 0 0 1 3.196-6.994L7.72 8.78A6.737 6.737 0 0 0 5.25 14a6.73 6.73 0 0 0 1.977 4.773.75.75 0 1 0 1.06-1.06A5.231 5.231 0 0 1 6.75 14a5.24 5.24 0 0 1 2.037-4.152l2.348 2.348a2 2 0 1 0 2.669 2.669l7.666 7.665a.75.75 0 1 0 1.06-1.06L9.418 8.357a.747.747 0 0 0-.023-.023L6.538 5.477a.744.744 0 0 0-.017-.017L2.53 1.47ZM12 4.75a9.231 9.231 0 0 0-3.15.55.75.75 0 0 1-.51-1.41A10.732 10.732 0 0 1 12 3.25c5.937 0 10.75 4.813 10.75 10.75 0 1.284-.226 2.517-.64 3.66a.75.75 0 1 1-1.41-.51c.356-.982.55-2.043.55-3.15A9.25 9.25 0 0 0 12 4.75ZM11.25 8a.75.75 0 0 1 .75-.75A6.75 6.75 0 0 1 18.75 14a.75.75 0 0 1-1.5 0c0-2.9-2.35-5.25-5.25-5.25a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$6i = forwardRef(SvgHotspotOff);

var SvgHotspot = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.75 14a9.25 9.25 0 0 1 18.5 0 9.218 9.218 0 0 1-2.71 6.54.75.75 0 0 0 1.061 1.061A10.719 10.719 0 0 0 22.75 14c0-5.937-4.813-10.75-10.75-10.75S1.25 8.063 1.25 14c0 2.968 1.204 5.657 3.149 7.601a.75.75 0 1 0 1.06-1.06A9.219 9.219 0 0 1 2.75 14Zm4 0a5.25 5.25 0 1 1 8.962 3.712.75.75 0 0 0 1.061 1.061 6.75 6.75 0 1 0-9.546 0 .75.75 0 1 0 1.06-1.06A5.231 5.231 0 0 1 6.75 14ZM12 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z', clipRule: 'evenodd' })));
};
var ForwardRef$6h = forwardRef(SvgHotspot);

var SvgInCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.53 7.47a.75.75 0 1 0-1.06 1.06l2.72 2.72H2a.75.75 0 0 0 0 1.5h12.19l-2.72 2.72a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 0-1.06l-4-4ZM9.47 6.34a.75.75 0 1 1-.94-1.17 8.75 8.75 0 1 1 0 13.661.75.75 0 0 1 .94-1.17 7.25 7.25 0 1 0 0-11.32Z', clipRule: 'evenodd' })));
};
var ForwardRef$6g = forwardRef(SvgInCircle);

var SvgInRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7 2.25A4.75 4.75 0 0 0 2.25 7v10A4.75 4.75 0 0 0 7 21.75h4A4.75 4.75 0 0 0 15.75 17v-.5a.75.75 0 0 0-1.5 0v.5A3.25 3.25 0 0 1 11 20.25H7A3.25 3.25 0 0 1 3.75 17V7A3.25 3.25 0 0 1 7 3.75h4A3.25 3.25 0 0 1 14.25 7v.5a.75.75 0 0 0 1.5 0V7A4.75 4.75 0 0 0 11 2.25H7Zm4.47 6.22a.75.75 0 1 1 1.06 1.06l-1.72 1.72H21a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3Z', clipRule: 'evenodd' })));
};
var ForwardRef$6f = forwardRef(SvgInRectangle);

var SvgInjection = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18.965 2.47a.75.75 0 0 0-1.06 1.06l.884.884-2.298 2.298-.177-.176a2 2 0 0 0-2.829 0l-3.72 3.72 7.34 1.145.623-.623a2 2 0 0 0 0-2.828l-.177-.177 2.299-2.298.883.884a.75.75 0 1 0 1.06-1.06l-1.4-1.401-.013-.014-.014-.013-1.4-1.401Zm-10.514 9.1-.151.151a2 2 0 0 0-.566 1.131l-.236 1.65c-.053.371-.001.727.13 1.043l-5.146 4.913a.75.75 0 1 0 1.036 1.085l5.157-4.925c.327.144.698.202 1.086.147l1.65-.236a2 2 0 0 0 1.132-.565l3.249-3.25-7.34-1.144Z', clipRule: 'evenodd' })));
};
var ForwardRef$6e = forwardRef(SvgInjection);

var SvgInstagram = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7 2a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5H7Zm11 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-1 5a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', clipRule: 'evenodd' })));
};
var ForwardRef$6d = forwardRef(SvgInstagram);

var SvgInternet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.632 2.007c.307-.389.764-.757 1.368-.757.604 0 1.06.368 1.367.757.046.058.09.119.133.182a6.006 6.006 0 0 1 4.453 5.061H18a.75.75 0 1 1 0 1.5h-.047a6.006 6.006 0 0 1-4.453 5.06 3.235 3.235 0 0 1-.133.183c-.305.387-.759.754-1.36.757a.75.75 0 0 1 .743.75v.878c.64.226 1.146.733 1.372 1.372H20a.75.75 0 0 1 0 1.5h-5.878a2.257 2.257 0 0 1-1.372 1.372V22a.75.75 0 0 1-1.5 0v-1.378a2.256 2.256 0 0 1-1.372-1.372H4a.75.75 0 0 1 0-1.5h5.878a2.256 2.256 0 0 1 1.372-1.372V15.5a.75.75 0 0 1 .742-.75c-.6-.003-1.054-.37-1.36-.757a3.235 3.235 0 0 1-.133-.182A6.006 6.006 0 0 1 6.046 8.75H6a.75.75 0 0 1 0-1.5h.046A6.006 6.006 0 0 1 10.5 2.19c.043-.064.088-.125.133-.183Z', clipRule: 'evenodd' })));
};
var ForwardRef$6c = forwardRef(SvgInternet);

var SvgInvoicePercent = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5 2h14a2 2 0 0 1 2 2v15.154a2 2 0 0 1-2.677 1.882l-1.562-.562a2 2 0 0 0-1.498.058L12.82 21.63a2 2 0 0 1-1.642 0l-2.442-1.1a2 2 0 0 0-1.498-.057l-1.562.562A2 2 0 0 1 3 19.154V4a2 2 0 0 1 2-2Zm4 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-.47-5.47a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06l6-6Z', clipRule: 'evenodd' })));
};
var ForwardRef$6b = forwardRef(SvgInvoicePercent);

var SvgInvoice = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H7Zm10 5.75a.75.75 0 0 0 0-1.5H7a.75.75 0 0 0 0 1.5h10Zm.75 4.25a.75.75 0 0 1-.75.75H7a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75ZM12 17.75a.75.75 0 0 0 0-1.5H7a.75.75 0 0 0 0 1.5h5Z', clipRule: 'evenodd' })));
};
var ForwardRef$6a = forwardRef(SvgInvoice);

var SvgLaptop = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 4a2 2 0 0 0-2 2v9.5h16V6a2 2 0 0 0-2-2H6ZM2.75 17a.75.75 0 0 0-.75.75A2.25 2.25 0 0 0 4.25 20h15.5A2.25 2.25 0 0 0 22 17.75a.75.75 0 0 0-.75-.75H2.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$69 = forwardRef(SvgLaptop);

var SvgLightMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-4.25 8a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Zm8.56-13.375a.75.75 0 0 1-.275 1.025l-1.732 1a.75.75 0 1 1-.75-1.3l1.732-1a.75.75 0 0 1 1.025.275ZM5.447 16.65a.75.75 0 1 0-.75-1.3l-1.732 1a.75.75 0 1 0 .75 1.3l1.732-1ZM2.69 6.625a.75.75 0 0 1 1.025-.274l1.732 1a.75.75 0 1 1-.75 1.299l-1.732-1a.75.75 0 0 1-.275-1.025Zm16.613 8.725a.75.75 0 0 0-.75 1.3l1.732 1a.75.75 0 0 0 .75-1.3l-1.732-1Z', clipRule: 'evenodd' })));
};
var ForwardRef$68 = forwardRef(SvgLightMode);

var SvgLineChartAscending = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 6a2 2 0 0 1-3.033 1.713l-5.033 3.774a2 2 0 0 1-2.967 2.225l-5.033 3.775A2.003 2.003 0 0 1 4 20a2 2 0 1 1 1.034-3.713l5.032-3.774a2.002 2.002 0 0 1 2.968-2.226l5.032-3.774A2.003 2.003 0 0 1 20 4a2 2 0 0 1 2 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$67 = forwardRef(SvgLineChartAscending);

var SvgLineChartDescending = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14 6a2 2 0 1 0-3.934.513l-5.033 3.774a2 2 0 1 0 .9 1.2l5.034-3.774a1.99 1.99 0 0 0 1.438.246l5.943 8.914a2 2 0 1 0 1.248-.832l-5.943-8.914C13.872 6.806 14 6.417 14 6Z', clipRule: 'evenodd' })));
};
var ForwardRef$66 = forwardRef(SvgLineChartDescending);

var SvgLineChart = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20 8a2 2 0 1 0-1.51-.688l-6.339 8.694a1.991 1.991 0 0 0-1.31.363L5.97 12.355a2 2 0 1 0-.81 1.276l4.872 4.014a2 2 0 1 0 3.478-.956l6.34-8.695c.05.004.1.006.151.006Z', clipRule: 'evenodd' })));
};
var ForwardRef$65 = forwardRef(SvgLineChart);

var SvgLinkedln = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 4.5V22H2V8.5h4Zm3 0h4v.841A6 6 0 0 1 21 15v7h-4v-7a2 2 0 1 0-4 0v7H9V8.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$64 = forwardRef(SvgLinkedln);

var SvgLocationAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 10.889C21 15.799 15.375 22 12 22s-9-6.202-9-11.111C3 5.979 7.03 2 12 2s9 3.98 9 8.889ZM17 11a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-4.25-2a.75.75 0 0 0-1.5 0v1.25H10a.75.75 0 0 0 0 1.5h1.25V13a.75.75 0 0 0 1.5 0v-1.25H14a.75.75 0 0 0 0-1.5h-1.25V9Z', clipRule: 'evenodd' })));
};
var ForwardRef$63 = forwardRef(SvgLocationAdd);

var SvgLocationHospital = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20 9.889c0 4.649-4.63 9.233-6.845 11.16-.67.584-1.64.584-2.31 0C8.629 19.123 4 14.539 4 9.89 4 6 7.03 2 12 2c4.97 0 8 4 8 7.889ZM17 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-6.25-2a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-1.25h2.5V12a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v1.25h-2.5V8Z', clipRule: 'evenodd' })));
};
var ForwardRef$62 = forwardRef(SvgLocationHospital);

var SvgLocationMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 10.889C21 15.799 15.375 22 12 22s-9-6.202-9-11.111C3 5.979 7.03 2 12 2s9 3.98 9 8.889ZM17 11a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-3 .75a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5h4Z', clipRule: 'evenodd' })));
};
var ForwardRef$61 = forwardRef(SvgLocationMinus);

var SvgLocationRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 10.889C21 15.799 15.375 22 12 22s-9-6.202-9-11.111C3 5.979 7.03 2 12 2s9 3.98 9 8.889ZM17 11a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-5.884-1.945a.75.75 0 1 0-1.06 1.061l.883.884-.883.884a.75.75 0 0 0 1.06 1.06l.884-.883.884.884a.75.75 0 0 0 1.06-1.061L13.061 11l.884-.884a.75.75 0 1 0-1.061-1.06L12 9.938l-.884-.884Z', clipRule: 'evenodd' })));
};
var ForwardRef$60 = forwardRef(SvgLocationRemove);

var SvgLocationShare = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19 11c0 4.418-4.5 9-7 9s-7-4.582-7-9 3.134-7 7-7 7 2.582 7 7Zm-4.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM3.715 6.341a.75.75 0 1 0-1.336-.682C1.65 7.085 1.25 8.754 1.25 10.625c0 1.23.242 2.452.65 3.622a.75.75 0 1 0 1.417-.494c-.363-1.04-.567-2.095-.567-3.128 0-1.654.353-3.086.965-4.284Zm17.906-.682a.75.75 0 1 0-1.336.682c.612 1.198.965 2.63.965 4.284 0 1.033-.204 2.088-.567 3.128a.75.75 0 1 0 1.416.494c.409-1.17.651-2.393.651-3.622 0-1.871-.4-3.54-1.129-4.966Z', clipRule: 'evenodd' })));
};
var ForwardRef$5$ = forwardRef(SvgLocationShare);

var SvgLocationUser = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 10.889C21 15.799 15.375 22 12 22s-9-6.202-9-11.111C3 5.979 7.03 2 12 2s9 3.98 9 8.889ZM17 11a4.994 4.994 0 0 1-5 5 4.994 4.994 0 0 1-5-5 5 5 0 0 1 10 0Zm-3.5-2a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm1 4.5c-.382-1.217-1.157-2-2.5-2s-2.118.783-2.5 2c.81.567 1.435 1 2.5 1s1.69-.433 2.5-1Z', clipRule: 'evenodd' })));
};
var ForwardRef$5_ = forwardRef(SvgLocationUser);

var SvgLocation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c3.375 0 9-6.202 9-11.111C21 5.979 16.97 2 12 2s-9 3.98-9 8.889C3 15.799 8.625 22 12 22Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', clipRule: 'evenodd' })));
};
var ForwardRef$5Z = forwardRef(SvgLocation);

var SvgLock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2.25A4.75 4.75 0 0 0 7.25 7v.07A4.001 4.001 0 0 0 4 11v6a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-6c0-1.953-1.4-3.579-3.25-3.93V7A4.75 4.75 0 0 0 12 2.25ZM15.25 7a3.25 3.25 0 0 0-6.5 0h6.5ZM14 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$5Y = forwardRef(SvgLock);

var SvgMapAccordionBelow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M21.098 15.567a19.2 19.2 0 0 0 .18-.134A1.86 1.86 0 0 0 22 13.938v-9.67c0-.853-1.028-1.348-1.736-.872-1 .672-2.297 1.42-3.514 1.747v4.904c2.475.638 4.348 2.814 4.348 5.48v.04ZM9.43 14.969a3.76 3.76 0 0 0-.68-.121V2.088c1.278.106 2.264.856 3.25 1.607.986.75 1.972 1.5 3.25 1.606v4.557c-2.952 0-5.457 2.138-5.807 4.994-.005.039-.01.078-.013.117ZM2.722 4.717c.99-.748 2.836-2.015 4.528-2.471v12.76c-1.217.328-2.514 1.075-3.514 1.747C3.028 17.23 2 16.735 2 15.881v-9.67c0-.584.255-1.141.722-1.494Z' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19.338 17.614c.26-.743.41-1.473.41-2.088 0-2.385-2.014-4.319-4.498-4.319-2.305 0-4.205 1.664-4.468 3.809-.02.167-.03.337-.03.51 0 2.385 2.249 6.478 4.498 6.478 1.669 0 3.338-2.253 4.088-4.39Zm-4.088-1.009a1.35 1.35 0 1 0 0-2.699 1.35 1.35 0 0 0 0 2.7Z', clipRule: 'evenodd' })));
};
var ForwardRef$5X = forwardRef(SvgMapAccordionBelow);

var SvgMapAccordionFlag = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.75 13.925v7.917c1.692-.456 3.539-1.723 4.528-2.471A1.86 1.86 0 0 0 22 17.876v-9.67c0-.853-1.028-1.348-1.736-.872-.815.548-1.826 1.145-2.83 1.525v3.663a1.76 1.76 0 0 1-.684 1.403ZM12 20.393c-.986-.75-1.972-1.5-3.25-1.607V6.026c1.278.107 2.264.857 3.25 1.607.668.508 1.337 1.017 2.096 1.325v3.564c0 .772.484 1.428 1.154 1.653V22c-1.278-.107-2.264-.857-3.25-1.607ZM2.722 8.655c.99-.748 2.836-2.015 4.528-2.471v12.76c-1.217.328-2.514 1.076-3.514 1.748-.708.476-1.736-.02-1.736-.873v-9.67c0-.584.255-1.141.722-1.494Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M15.188 2.648c0-.32.26-.58.58-.58h4.634a.58.58 0 0 1 .519.84l-.643 1.285.643 1.286a.58.58 0 0 1-.518.839h-4.056v6.245a.58.58 0 0 1-1.159 0V2.648Z' })));
};
var ForwardRef$5W = forwardRef(SvgMapAccordionFlag);

var SvgMapAccordionPin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.75 13.925v7.917c1.692-.456 3.539-1.723 4.528-2.471A1.86 1.86 0 0 0 22 17.876v-9.67c0-.853-1.028-1.348-1.736-.872-.815.548-1.826 1.145-2.83 1.525v3.663a1.76 1.76 0 0 1-.684 1.403ZM12 20.393c-.986-.75-1.972-1.5-3.25-1.607V6.026c1.278.107 2.264.857 3.25 1.607.668.508 1.337 1.017 2.096 1.325v3.564c0 .772.484 1.428 1.154 1.653V22c-1.278-.107-2.264-.857-3.25-1.607ZM2.722 8.655c.99-.748 2.836-2.015 4.528-2.471v12.76c-1.217.328-2.514 1.076-3.514 1.748-.708.476-1.736-.02-1.736-.873v-9.67c0-.584.255-1.141.722-1.494Z' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.515 5.859a2 2 0 1 0-1.5 0v6.145a.75.75 0 0 0 1.5 0V5.859Z', clipRule: 'evenodd' })));
};
var ForwardRef$5V = forwardRef(SvgMapAccordionPin);

var SvgMapAccordionTop = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.75 13.757v8.096c1.692-.456 3.539-1.724 4.528-2.472A1.86 1.86 0 0 0 22 17.887v-9.67c0-.52-.383-.908-.842-1.022a8.98 8.98 0 0 1-.407 1.585c-.419 1.194-1.096 2.434-1.935 3.401-.535.618-1.235 1.236-2.066 1.576ZM9.646 6.223a3.817 3.817 0 0 0-.896-.186v12.76c1.278.107 2.264.857 3.25 1.607.986.75 1.972 1.5 3.25 1.607v-7.993c-.887-.052-1.665-.465-2.281-.957-.668-.533-1.248-1.238-1.72-1.978-.924-1.447-1.603-3.3-1.603-4.814v-.046ZM2.722 8.666c.99-.748 2.836-2.015 4.528-2.471v12.76c-1.217.328-2.514 1.076-3.514 1.748-.708.476-1.736-.02-1.736-.873v-9.67c0-.584.255-1.141.722-1.494Z' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19.49 8.337c.258-.736.406-1.458.406-2.068 0-2.363-1.995-4.279-4.457-4.279-2.283 0-4.165 1.649-4.426 3.774-.02.165-.03.334-.03.505 0 2.363 2.228 6.418 4.457 6.418 1.653 0 3.306-2.232 4.05-4.35Zm-4.05-.998a1.337 1.337 0 1 0 0-2.675 1.337 1.337 0 0 0 0 2.675Z', clipRule: 'evenodd' })));
};
var ForwardRef$5U = forwardRef(SvgMapAccordionTop);

var SvgMapAccordion = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M17.59 17.476c.21-.704.34-1.427.34-2.1a5.59 5.59 0 0 0-1.18-3.444V4.998c1.217-.327 2.514-1.075 3.514-1.747.708-.476 1.736.019 1.736.872v9.67a1.86 1.86 0 0 1-.722 1.495c-.827.625-2.254 1.614-3.689 2.188Zm-2.34-6.907A6.054 6.054 0 0 0 12 9.627a6.052 6.052 0 0 0-3.25.94V1.943c1.278.106 2.264.856 3.25 1.607.986.75 1.972 1.5 3.25 1.606v5.413Zm-8 1.363a5.614 5.614 0 0 0-1.18 3.356c-.836.371-1.653.863-2.334 1.32C3.028 17.084 2 16.59 2 15.736v-9.67c0-.585.255-1.141.722-1.494.99-.748 2.836-2.015 4.528-2.471v9.831Z' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.145 17.492c.265-.754.416-1.493.416-2.117 0-2.418-2.042-4.379-4.561-4.379-2.337 0-4.264 1.687-4.53 3.862a4.25 4.25 0 0 0-.032.517c0 2.419 2.281 6.569 4.562 6.569 1.692 0 3.384-2.285 4.145-4.452ZM12 16.47a1.368 1.368 0 1 0 0-2.737 1.368 1.368 0 0 0 0 2.737Z', clipRule: 'evenodd' })));
};
var ForwardRef$5T = forwardRef(SvgMapAccordion);

var SvgMapBig = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.442 15.903C17.302 13.997 19 11.142 19 8.857 19 5.07 15.866 2 12 2S5 5.07 5 8.857c0 2.285 1.698 5.14 3.558 7.046C9.78 17.157 11.074 18 12 18c.926 0 2.22-.843 3.442-2.097ZM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z', clipRule: 'evenodd' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.055 16.493C4.612 17.029 3 17.952 3 19c0 1.657 4.03 3 9 3s9-1.343 9-3c0-1.048-1.612-1.97-4.055-2.507-.142.157-.285.31-.429.457-.672.69-1.395 1.299-2.115 1.746-.687.426-1.528.804-2.401.804-.873 0-1.714-.378-2.4-.804-.721-.448-1.444-1.057-2.116-1.746-.144-.147-.287-.3-.429-.457Z', clipRule: 'evenodd' })));
};
var ForwardRef$5S = forwardRef(SvgMapBig);

var SvgMapCircleGps = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M4.522 7.416c-.715.433-1.347.884-1.8 1.226A1.86 1.86 0 0 0 2 10.137v9.67c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894 1.66-.186 2.83.705 4 1.595s2.34 1.781 4 1.595c1.867-.209 4.14-1.757 5.278-2.617A1.86 1.86 0 0 0 22 17.863v-9.67c0-.853-1.028-1.348-1.736-.872-.24.162-.497.327-.766.49a7.893 7.893 0 0 1-.038.968A7.501 7.501 0 0 1 4.523 7.416Z' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.968 8.624A6 6 0 1 0 6.032 7.375a6 6 0 0 0 11.936 1.25Zm-8.72-.208 1.515.505a.5.5 0 0 1 .316.316l.505 1.515a.5.5 0 0 0 .934.04l1.99-4.643a.5.5 0 0 0-.657-.657L9.21 7.482a.5.5 0 0 0 .039.934Z', clipRule: 'evenodd' })));
};
var ForwardRef$5R = forwardRef(SvgMapCircleGps);

var SvgMapFlag = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M12.848 9.642c-.62-.309-1.185-.739-1.75-1.169-1.17-.89-2.34-1.78-4-1.595-1.518.17-3.305 1.226-4.532 2.077-.961.667-1.468 1.787-1.468 2.958v8.747c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.735 4.264-1.893 1.66-.186 2.83.704 4 1.595 1.17.89 2.341 1.78 4 1.595 1.519-.17 3.306-1.226 4.532-2.077.961-.667 1.468-1.787 1.468-2.958V9.82c0-.721-.744-1.215-1.421-.965a28.46 28.46 0 0 1-2.507.804v3.196c0 1.242-.968 2.25-2.161 2.25-1.194 0-2.16-1.008-2.16-2.25V9.642Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'M14.25 1.897a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .67 1.085l-.832 1.665.833 1.664A.75.75 0 0 1 21 6.647h-5.25v6.485a.75.75 0 1 1-1.5 0V1.897Z' })));
};
var ForwardRef$5Q = forwardRef(SvgMapFlag);

var SvgMapGpsBelow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20.645 15.882c.236-.166.45-.323.633-.462A1.86 1.86 0 0 0 22 13.925v-9.67c0-.853-1.028-1.347-1.736-.871-1 .672-2.297 1.42-3.514 1.747v5.87l1.317-.44c2.017-.671 3.936 1.248 3.263 3.264l-.685 2.057ZM8.75 14.443c.146-.29.348-.555.605-.776a2.6 2.6 0 0 1 .874-.492L15.25 11.5V5.289c-1.278-.107-2.264-.857-3.25-1.607-.986-.75-1.972-1.5-3.25-1.607v12.368ZM2.722 4.704c.99-.747 2.836-2.015 4.528-2.47v12.76c-1.217.327-2.514 1.075-3.514 1.747-.708.476-1.736-.019-1.736-.872v-9.67c0-.585.255-1.142.722-1.495Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'm13.597 17.611-2.894-.964c-.84-.28-.963-1.334-.371-1.842.102-.088.226-.16.371-.208l7.838-2.612a1.08 1.08 0 0 1 1.366 1.366l-1.377 4.132-1.235 3.706c-.329.985-1.722.985-2.05 0l-.964-2.894a1.08 1.08 0 0 0-.684-.684Z' })));
};
var ForwardRef$5P = forwardRef(SvgMapGpsBelow);

var SvgMapGpsNavigation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.75 11.94v9.868c1.692-.456 3.539-1.724 4.528-2.472A1.86 1.86 0 0 0 22 17.842v-9.67c0-.853-1.028-1.348-1.736-.872-.508.34-1.091.701-1.702 1.016a6.598 6.598 0 0 1-1.812 3.624Zm-8 1.153v5.659c1.278.107 2.264.857 3.25 1.607.986.75 1.972 1.5 3.25 1.607v-8.874a6.61 6.61 0 0 1-3.25.85c-1.18 0-2.29-.309-3.25-.85ZM5.372 6.915c-1.056.552-2.024 1.233-2.65 1.706A1.86 1.86 0 0 0 2 10.116v9.669c0 .854 1.028 1.348 1.736.872 1-.672 2.297-1.42 3.514-1.747v-6.97a6.622 6.622 0 0 1-1.878-5.025Z' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.283 7.855A5.311 5.311 0 1 0 6.718 6.75a5.311 5.311 0 0 0 10.565 1.106Zm-7.72-.185 1.342.447a.442.442 0 0 1 .28.28l.447 1.342a.443.443 0 0 0 .827.034l1.76-4.11a.443.443 0 0 0-.58-.58l-4.11 1.76a.443.443 0 0 0 .035.827Z', clipRule: 'evenodd' })));
};
var ForwardRef$5O = forwardRef(SvgMapGpsNavigation);

var SvgMapGps = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M3.468 4.101C4.695 3.251 6.481 2.195 8 2.025c1.66-.186 2.83.704 4 1.595 1.17.89 2.34 1.78 4 1.595 1.411-.158 3.054-1.081 4.264-1.894.708-.476 1.736.02 1.736.873v8.747c0 1.17-.507 2.29-1.468 2.957-.321.223-.68.46-1.063.691l.897-2.691c.672-2.017-1.247-3.936-3.264-3.264l-7.838 2.613A2.523 2.523 0 0 0 7.65 14.84c-1.326.254-2.802 1.093-3.913 1.84-.708.476-1.736-.02-1.736-.872V7.059c0-1.17.507-2.29 1.468-2.958Z' }),
        React.createElement("path", { fill: 'currentColor', d: 'm12.633 17.684-2.894-.965c-.84-.28-.964-1.333-.372-1.841a1.1 1.1 0 0 1 .372-.208l7.837-2.613a1.08 1.08 0 0 1 1.367 1.367l-1.378 4.131-1.235 3.706c-.328.985-1.721.985-2.05 0l-.964-2.894a1.08 1.08 0 0 0-.683-.683Z' })));
};
var ForwardRef$5N = forwardRef(SvgMapGps);

var SvgMapLocationAccordion = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.75 11.152v10.74c1.692-.457 3.539-1.724 4.528-2.472A1.86 1.86 0 0 0 22 17.925v-9.67c0-.853-1.028-1.347-1.736-.871-.688.462-1.516.96-2.362 1.332l-.055.162c-.27.766-.643 1.552-1.097 2.274Zm-8 .823v6.86c1.278.107 2.264.857 3.25 1.607.986.75 1.972 1.5 3.25 1.607v-9.072c-.746.673-1.694 1.217-2.788 1.217-.98 0-1.836-.441-2.505-.976a7.442 7.442 0 0 1-1.207-1.243ZM6.59 6.448c-1.495.56-3.006 1.605-3.868 2.257A1.86 1.86 0 0 0 2 10.199v9.67c0 .853 1.028 1.348 1.736.872 1-.672 2.297-1.42 3.514-1.747V9.337c-.392-.974-.64-1.987-.66-2.89Z' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.568 8.43c.262-.747.412-1.48.412-2.097 0-2.396-2.023-4.338-4.518-4.338-2.315 0-4.223 1.671-4.487 3.825-.02.168-.031.34-.031.513 0 2.395 2.259 6.506 4.518 6.506 1.676 0 3.353-2.263 4.106-4.41Zm-4.106-1.013a1.356 1.356 0 1 0 0-2.71 1.356 1.356 0 0 0 0 2.71Z', clipRule: 'evenodd' })));
};
var ForwardRef$5M = forwardRef(SvgMapLocationAccordion);

var SvgMapLocationBelow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17 22c2 0 5-4.239 5-7a5 5 0 0 0-10 0c0 .49.095 1.027.261 1.578C13.034 19.133 15.355 22 17 22Zm0-6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z', clipRule: 'evenodd' }),
        React.createElement("path", { fill: 'currentColor', d: 'M3.468 4.101C4.695 3.251 6.481 2.195 8 2.025c1.66-.186 2.83.704 4 1.595 1.17.89 2.34 1.78 4 1.595 1.411-.158 3.054-1.081 4.264-1.894.708-.476 1.736.02 1.736.873v6.652a6.5 6.5 0 0 0-11.489 4.504c-.735-.413-1.539-.674-2.511-.565-1.411.158-3.054 1.081-4.264 1.894-.708.476-1.736-.02-1.736-.872V7.059c0-1.17.507-2.29 1.468-2.958Z' })));
};
var ForwardRef$5L = forwardRef(SvgMapLocationBelow);

var SvgMapLocationMiddle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.194 17.949C16.686 16.94 17 15.893 17 15a5 5 0 0 0-10 0c0 2.761 3 7 5 7 1.353 0 3.164-1.94 4.194-4.051ZM12 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z', clipRule: 'evenodd' }),
        React.createElement("path", { fill: 'currentColor', d: 'M2.722 4.642C3.86 3.782 6.132 2.234 8 2.025c1.66-.186 2.83.704 4 1.595 1.17.89 2.34 1.78 4 1.595 1.411-.158 3.054-1.081 4.264-1.894.708-.476 1.736.02 1.736.873v9.669a1.86 1.86 0 0 1-.722 1.495c-.735.555-1.942 1.397-3.209 1.98.264-.768.431-1.568.431-2.338a6.5 6.5 0 1 0-13 0c0 .202.012.407.034.614-.646.326-1.264.706-1.798 1.065-.708.476-1.736-.02-1.736-.872v-9.67c0-.585.255-1.142.722-1.495Z' })));
};
var ForwardRef$5K = forwardRef(SvgMapLocationMiddle);

var SvgMapLocationTop = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21.56 9.106c.276-.734.44-1.46.44-2.106a5 5 0 0 0-10 0c0 .212.018.432.051.659C12.454 10.387 15.153 14 17 14c1.532 0 3.652-2.488 4.56-4.894ZM17 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z', clipRule: 'evenodd' }),
        React.createElement("path", { fill: 'currentColor', d: 'M10.513 6.59a6.014 6.014 0 0 0 .054 1.287c.25 1.689 1.166 3.508 2.228 4.89.539.7 1.16 1.348 1.821 1.835.633.465 1.462.898 2.384.898.774 0 1.475-.306 2.033-.659.574-.362 1.112-.848 1.593-1.38A12.18 12.18 0 0 0 22 11.601v5.34c0 1.17-.507 2.29-1.468 2.957-1.227.852-3.013 1.907-4.532 2.077-1.66.186-2.83-.704-4-1.595-1.17-.89-2.34-1.78-4-1.595-1.411.158-3.054 1.081-4.264 1.894-.708.476-1.736-.02-1.736-.872v-8.748c0-1.17.507-2.29 1.468-2.958C4.695 7.251 6.481 6.195 8 6.025c.973-.11 1.777.152 2.513.566Z' })));
};
var ForwardRef$5J = forwardRef(SvgMapLocationTop);

var SvgMapLocation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M5.5 6.87c-1.105.563-2.127 1.28-2.778 1.772A1.86 1.86 0 0 0 2 10.137v9.67c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894 1.66-.186 2.83.705 4 1.595s2.34 1.781 4 1.595c1.867-.209 4.14-1.757 5.278-2.617A1.86 1.86 0 0 0 22 17.863v-9.67c0-.853-1.028-1.348-1.736-.872a16.89 16.89 0 0 1-1.97 1.151c-.295 1.277-.878 2.611-1.592 3.73-.53.83-1.18 1.62-1.93 2.218-.74.591-1.688 1.08-2.772 1.08-1.084 0-2.031-.489-2.772-1.08-.75-.598-1.4-1.389-1.93-2.219C6.276 10.6 5.521 8.556 5.5 6.871Z' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 14c2.5 0 5-4.549 5-7.2S14.761 2 12 2 7 4.149 7 6.8 9.5 14 12 14Zm0-6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z', clipRule: 'evenodd' })));
};
var ForwardRef$5I = forwardRef(SvgMapLocation);

var SvgMapPaper = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.75 19.83c1.692-.457 3.539-1.724 4.528-2.472A1.86 1.86 0 0 0 22 15.863v-9.67c0-.853-1.028-1.348-1.736-.872-1 .672-2.297 1.42-3.514 1.748v12.76ZM12 18.38c-.986-.75-1.972-1.5-3.25-1.607V4.013c1.278.107 2.264.857 3.25 1.607.986.75 1.972 1.5 3.25 1.607v12.76c-1.278-.107-2.264-.857-3.25-1.607ZM2.722 6.642c.99-.748 2.836-2.015 4.528-2.471v12.76c-1.217.328-2.514 1.076-3.514 1.748-.708.476-1.736-.02-1.736-.873V8.137c0-.585.255-1.142.722-1.495Z' })));
};
var ForwardRef$5H = forwardRef(SvgMapPaper);

var SvgMapPeopleAccordion = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.75 17.16v4.648c1.692-.456 3.539-1.724 4.528-2.472A1.86 1.86 0 0 0 22 17.842v-9.67c0-.853-1.028-1.348-1.736-.872l-.161.107a5.485 5.485 0 0 1 .647 2.59 2.5 2.5 0 0 1-2 2.45v1.55a3.5 3.5 0 0 1-2 3.163ZM10.812 6.748c-.624-.392-1.29-.692-2.062-.757v12.76c1.278.108 2.264.858 3.25 1.608.986.75 1.972 1.5 3.25 1.607v-4.469a3.5 3.5 0 0 1-3.5-3.5v-1.55a2.5 2.5 0 0 1-2-2.45 5.482 5.482 0 0 1 1.062-3.249ZM7.25 6.15c-1.692.455-3.539 1.723-4.528 2.47A1.86 1.86 0 0 0 2 10.117v9.669c0 .853 1.028 1.348 1.736.872 1-.672 2.297-1.42 3.514-1.747V6.15Z' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.25 5.997a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0A3.993 3.993 0 0 0 11.784 8a3.983 3.983 0 0 0-.534 1.998 1 1 0 0 0 1 1 1 1 0 0 1 1 1v2a2 2 0 1 0 4 0v-2a1 1 0 0 1 1-1 1 1 0 0 0 1-1 4 4 0 0 0-4-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$5G = forwardRef(SvgMapPeopleAccordion);

var SvgMapPeople = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M10.63 6.659C9.865 6.206 9.026 5.91 8 6.025c-1.867.209-4.14 1.757-5.278 2.617A1.86 1.86 0 0 0 2 10.137v9.67c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894 1.66-.186 2.83.705 4 1.595s2.34 1.78 4 1.595c1.867-.209 4.14-1.757 5.278-2.617A1.86 1.86 0 0 0 22 17.863v-9.67c0-.853-1.028-1.348-1.736-.872-.11.074-.224.15-.341.224l.069.144c.326.705.508 1.489.508 2.311a2.5 2.5 0 0 1-2 2.45V14a3.5 3.5 0 1 1-7 0v-1.55a2.5 2.5 0 0 1-2-2.45 5.482 5.482 0 0 1 1.13-3.341Z' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a3.993 3.993 0 0 0-3.466 2.002A3.983 3.983 0 0 0 11 10a1 1 0 0 0 1 1 1 1 0 0 1 1 1v2a2 2 0 1 0 4 0v-2a1 1 0 0 1 1-1 1 1 0 0 0 1-1 4 4 0 0 0-4-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$5F = forwardRef(SvgMapPeople);

var SvgMapPin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M13.75 8.788C13.13 8.48 12.565 8.05 12 7.62c-1.17-.89-2.34-1.78-4-1.595-1.519.17-3.305 1.225-4.532 2.076C2.507 8.77 2 9.89 2 11.06v8.748c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894 1.66-.186 2.83.705 4 1.595s2.34 1.78 4 1.595c1.519-.17 3.305-1.225 4.532-2.077.961-.667 1.468-1.787 1.468-2.957V8.194c0-.854-1.028-1.349-1.736-.873a16.63 16.63 0 0 1-2.014 1.172V12a2.25 2.25 0 0 1-4.5 0V8.788Z' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.75 5.855a2 2 0 1 0-1.5 0V12a.75.75 0 0 0 1.5 0V5.855Z', clipRule: 'evenodd' })));
};
var ForwardRef$5E = forwardRef(SvgMapPin);

var SvgMapSmall = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 17c2 0 6-4.686 6-8A6 6 0 0 0 6 9c0 3.314 4 8 6 8Zm0-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z', clipRule: 'evenodd' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.012 15.094A4 4 0 0 0 4.8 16.439l-1.067 1.28C2.648 19.023 3.574 21 5.27 21h13.46c1.696 0 2.622-1.978 1.537-3.28L19.2 16.44a4 4 0 0 0-2.211-1.346l-.06.077c-.689.873-1.467 1.66-2.249 2.246-.723.54-1.678 1.083-2.68 1.083-1.002 0-1.957-.542-2.68-1.083-.782-.585-1.56-1.373-2.248-2.246l-.06-.077Z', clipRule: 'evenodd' })));
};
var ForwardRef$5D = forwardRef(SvgMapSmall);

var SvgMap = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M8 4.025c-1.867.209-4.14 1.757-5.278 2.617A1.86 1.86 0 0 0 2 8.137v9.67c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894 3.318-.371 4.682 3.562 8 3.19 1.867-.209 4.14-1.757 5.278-2.617A1.86 1.86 0 0 0 22 15.863v-9.67c0-.853-1.028-1.348-1.736-.872-1.21.813-2.853 1.736-4.264 1.894-3.318.371-4.682-3.562-8-3.19Z' })));
};
var ForwardRef$5C = forwardRef(SvgMap);

var SvgMask = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.25 8a1.25 1.25 0 1 0-2.5 0v4a3.251 3.251 0 0 0 2.5 3.163V8Zm1.5.786V8a2.75 2.75 0 0 0-5.5 0v4a4.75 4.75 0 0 0 4.278 4.727c.282.79.772 1.5 1.431 2.049l.72.6a6.75 6.75 0 0 0 8.642 0l.72-.6a4.75 4.75 0 0 0 1.431-2.05A4.75 4.75 0 0 0 22.75 12V8a2.75 2.75 0 1 0-5.5 0v.786l-3.126-1.562a4.75 4.75 0 0 0-4.248 0L6.75 8.786ZM20 6.75c-.69 0-1.25.56-1.25 1.25v7.163A3.251 3.251 0 0 0 21.25 12V8c0-.69-.56-1.25-1.25-1.25Z', clipRule: 'evenodd' })));
};
var ForwardRef$5B = forwardRef(SvgMask);

var SvgMasterCard = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V7ZM7.75 12a2.25 2.25 0 0 1 3.125-2.074A3.734 3.734 0 0 0 10.25 12c0 .767.23 1.48.625 2.074A2.25 2.25 0 0 1 7.75 12ZM10 8.25a3.74 3.74 0 0 1 2 .577 3.75 3.75 0 1 1 0 6.345 3.75 3.75 0 1 1-2-6.923Zm2.5 2.073a2.25 2.25 0 1 1 3 3.355 2.25 2.25 0 0 1-3-3.355Z', clipRule: 'evenodd' })));
};
var ForwardRef$5A = forwardRef(SvgMasterCard);

var SvgMaximizeCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.25 3c0 .414.336.75.75.75h3.19l-9.72 9.72a.75.75 0 1 0 1.06 1.06l9.72-9.72V8a.75.75 0 0 0 1.5 0V3a.75.75 0 0 0-.75-.75h-5a.75.75 0 0 0-.75.75ZM3.75 13A7.25 7.25 0 0 1 11 5.75a.75.75 0 0 0 0-1.5A8.75 8.75 0 1 0 19.75 13a.75.75 0 0 0-1.5 0 7.25 7.25 0 1 1-14.5 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$5z = forwardRef(SvgMaximizeCircle);

var SvgMaximizeRectangleDoted = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.25 6A4.75 4.75 0 0 1 10 1.25h8A4.75 4.75 0 0 1 22.75 6v8A4.75 4.75 0 0 1 18 18.75h-5.309a4.751 4.751 0 0 1-4.691 4H6A4.75 4.75 0 0 1 1.25 18v-2a4.751 4.751 0 0 1 4-4.691V6Zm1.5 5.25H8a4.73 4.73 0 0 1 2.787.903l4.402-4.403H12a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V8.81l-4.403 4.403A4.73 4.73 0 0 1 12.75 16v1.25H18A3.25 3.25 0 0 0 21.25 14V6A3.25 3.25 0 0 0 18 2.75h-8A3.25 3.25 0 0 0 6.75 6v5.25Z', clipRule: 'evenodd' })));
};
var ForwardRef$5y = forwardRef(SvgMaximizeRectangleDoted);

var SvgMaximizeRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 2.25h-6a.75.75 0 0 0 0 1.5h4.19l-9.72 9.72a.75.75 0 1 0 1.06 1.06l9.72-9.72V9a.75.75 0 0 0 1.5 0V3a.75.75 0 0 0-.75-.75Zm-14 2A4.75 4.75 0 0 0 2.25 9v8A4.75 4.75 0 0 0 7 21.75h8A4.75 4.75 0 0 0 19.75 17v-5a.75.75 0 0 0-1.5 0v5A3.25 3.25 0 0 1 15 20.25H7A3.25 3.25 0 0 1 3.75 17V9A3.25 3.25 0 0 1 7 5.75h5a.75.75 0 0 0 0-1.5H7Z', clipRule: 'evenodd' })));
};
var ForwardRef$5x = forwardRef(SvgMaximizeRectangle);

var SvgMedicalBook = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7 2h10a3 3 0 0 1 3 3v9.5H7a4.484 4.484 0 0 0-3 1.146V5a3 3 0 0 1 3-3Zm5 3.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V12a.75.75 0 0 1-1.5 0V9.75H9a.75.75 0 0 1 0-1.5h2.25V6a.75.75 0 0 1 .75-.75ZM7 16h13v3a3 3 0 0 1-3 3H7a3 3 0 1 1 0-6Z', clipRule: 'evenodd' })));
};
var ForwardRef$5w = forwardRef(SvgMedicalBook);

var SvgMedicalInformation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2ZM8.5 6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-8a4 4 0 0 0-4-4h-2.5a3.5 3.5 0 1 1-7 0ZM8 10.25a.75.75 0 0 1 .75.75v2.25H11a.75.75 0 0 1 0 1.5H8.75V17a.75.75 0 0 1-1.5 0v-2.25H5a.75.75 0 0 1 0-1.5h2.25V11a.75.75 0 0 1 .75-.75Zm11 2.5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0 0 1.5h5ZM17.75 16a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$5v = forwardRef(SvgMedicalInformation);

var SvgMedicalService = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.75 5A2.25 2.25 0 0 1 11 2.75h2A2.25 2.25 0 0 1 15.25 5v1h-6.5V5Zm-1.5 1V5A3.75 3.75 0 0 1 11 1.25h2A3.75 3.75 0 0 1 16.75 5v1H18a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4h1.25ZM12 10.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V17a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V11a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$5u = forwardRef(SvgMedicalService);

var SvgMenuCircleHorizontal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.5 12.25a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0Zm6.25 1.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm5 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$5t = forwardRef(SvgMenuCircleHorizontal);

var SvgMenuCircleVertical = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.5 6.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0 5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-1.25 6.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$5s = forwardRef(SvgMenuCircleVertical);

var SvgMenuHome = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033ZM7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75ZM8 15.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H8Z', clipRule: 'evenodd' })));
};
var ForwardRef$5r = forwardRef(SvgMenuHome);

var SvgMenuLineHorizontalHalf = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.25 8A.75.75 0 0 1 7 7.25h5a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 8Zm0 4a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM12 15.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z', clipRule: 'evenodd' })));
};
var ForwardRef$5q = forwardRef(SvgMenuLineHorizontalHalf);

var SvgMenuLineHorizontal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.25 8A.75.75 0 0 1 7 7.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 8Zm0 4a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 15.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5H7Z', clipRule: 'evenodd' })));
};
var ForwardRef$5p = forwardRef(SvgMenuLineHorizontal);

var SvgMenuLineVerticalHalf = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 6.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75Zm-4 5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75ZM16.75 7a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0V7Z', clipRule: 'evenodd' })));
};
var ForwardRef$5o = forwardRef(SvgMenuLineVerticalHalf);

var SvgMenuLineVertical = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 6.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75Zm4 3a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75ZM8.75 10a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$5n = forwardRef(SvgMenuLineVertical);

var SvgMenuUser = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3.25-1a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75ZM16 16.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6ZM7 19c2.761 0 5-1.343 5-3s-2.239-3-5-3-5 1.343-5 3 2.239 3 5 3Z', clipRule: 'evenodd' })));
};
var ForwardRef$5m = forwardRef(SvgMenuUser);

var SvgMessenger = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 12c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-4.27-.955l-4.356.726a1 1 0 0 1-1.151-1.146l.713-4.396A9.962 9.962 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10Zm-12 0-4 3 4-6 4 3 4-3-4 6-4-3Z', clipRule: 'evenodd' })));
};
var ForwardRef$5l = forwardRef(SvgMessenger);

var SvgMiniStoreCrooked = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.231 2h9.538c1.817 0 3.451 1.245 4.126 3.143l.758 2.132c.23.645.388 1.336.22 2-.394 1.573-1.68 2.725-3.205 2.725-1.841 0-3.334-1.679-3.334-3.75 0 2.071-1.492 3.75-3.333 3.75-1.841 0-3.333-1.679-3.333-3.75 0 2.071-1.493 3.75-3.334 3.75-1.525 0-2.81-1.152-3.207-2.725-.167-.664-.009-1.355.22-2l.759-2.132C3.78 3.245 5.414 2 7.23 2ZM4 13.3V18a4 4 0 0 0 4 4h1v-2a3 3 0 1 1 6 0v2h1a4 4 0 0 0 4-4v-4.7c-.419.13-.865.2-1.333.2-1.337 0-2.49-.563-3.334-1.444-.843.881-1.996 1.444-3.333 1.444-1.337 0-2.49-.563-3.333-1.444-.844.881-1.997 1.444-3.334 1.444A4.51 4.51 0 0 1 4 13.3Z', clipRule: 'evenodd' })));
};
var ForwardRef$5k = forwardRef(SvgMiniStoreCrooked);

var SvgMiniStoreSmile = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.231 2h9.538c1.817 0 3.451 1.245 4.126 3.143l.758 2.132c.23.645.388 1.336.22 2-.394 1.573-1.68 2.725-3.205 2.725-1.841 0-3.334-1.679-3.334-3.75 0 2.071-1.492 3.75-3.333 3.75-1.841 0-3.333-1.679-3.333-3.75 0 2.071-1.493 3.75-3.334 3.75-1.525 0-2.81-1.152-3.207-2.725-.167-.664-.009-1.355.22-2l.759-2.132C3.78 3.245 5.414 2 7.23 2ZM4 13.3V18a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4.7c-.419.13-.865.2-1.333.2-1.337 0-2.49-.563-3.334-1.444-.843.881-1.996 1.444-3.333 1.444-1.337 0-2.49-.563-3.333-1.444-.844.881-1.996 1.444-3.334 1.444A4.51 4.51 0 0 1 4 13.3Zm11.653 3.331a.75.75 0 0 1-.285 1.022c-1.215.685-2.262 1.095-3.365 1.097-1.105.002-2.154-.404-3.374-1.098a.75.75 0 1 1 .742-1.304c1.136.646 1.911.903 2.629.902.719-.002 1.494-.262 2.632-.904a.75.75 0 0 1 1.021.285Z', clipRule: 'evenodd' })));
};
var ForwardRef$5j = forwardRef(SvgMiniStoreSmile);

var SvgMinimizeCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.75 14a.75.75 0 0 0-.75-.75h-3.19l9.72-9.72a.75.75 0 0 0-1.06-1.06l-9.72 9.72V9a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h5a.75.75 0 0 0 .75-.75Zm-12-1A7.25 7.25 0 0 1 11 5.75a.75.75 0 0 0 0-1.5A8.75 8.75 0 1 0 19.75 13a.75.75 0 0 0-1.5 0 7.25 7.25 0 1 1-14.5 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$5i = forwardRef(SvgMinimizeCircle);

var SvgMinimizeRectangleDoted = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.309 5.25c.36-2.267 2.323-4 4.691-4h2A4.75 4.75 0 0 1 22.75 6v2a4.751 4.751 0 0 1-4 4.691V18A4.75 4.75 0 0 1 14 22.75H6A4.75 4.75 0 0 1 1.25 18v-8A4.75 4.75 0 0 1 6 5.25h5.309Zm-.059 1.5H6A3.25 3.25 0 0 0 2.75 10v8A3.25 3.25 0 0 0 6 21.25h8A3.25 3.25 0 0 0 17.25 18v-5.25H16a4.728 4.728 0 0 1-2.787-.903L8.811 16.25H12a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 1.5 0v3.19l4.403-4.403A4.728 4.728 0 0 1 11.25 8V6.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$5h = forwardRef(SvgMinimizeRectangleDoted);

var SvgMinimizeRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21.53 3.53a.75.75 0 0 0-1.06-1.06l-9.72 9.72V8a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h6a.75.75 0 0 0 0-1.5h-4.19l9.72-9.72ZM7 4.25A4.75 4.75 0 0 0 2.25 9v8A4.75 4.75 0 0 0 7 21.75h8A4.75 4.75 0 0 0 19.75 17v-5a.75.75 0 0 0-1.5 0v5A3.25 3.25 0 0 1 15 20.25H7A3.25 3.25 0 0 1 3.75 17V9A3.25 3.25 0 0 1 7 5.75h5a.75.75 0 0 0 0-1.5H7Z', clipRule: 'evenodd' })));
};
var ForwardRef$5g = forwardRef(SvgMinimizeRectangle);

var SvgMobileDataOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M4.53 3.47a.75.75 0 0 0-1.06 1.06l3.78 3.78v9.862a1.27 1.27 0 0 1-.134-.117L5.53 16.47a.75.75 0 0 0-1.06 1.06l1.585 1.586a2.75 2.75 0 0 0 3.89 0l1.585-1.586a.75.75 0 1 0-1.06-1.06l-1.586 1.585a1.27 1.27 0 0 1-.134.117V9.81l10.72 10.72a.75.75 0 1 0 1.06-1.061l-11.999-12-.001-.001-4-4Zm12.22 2.358v7.861l-1.5-1.5V5.83a1.26 1.26 0 0 0-.134.115L13.53 7.53a.75.75 0 1 1-1.06-1.06l1.585-1.586a2.75 2.75 0 0 1 3.89 0L19.53 6.47a.75.75 0 0 1-1.06 1.06l-1.586-1.586a1.26 1.26 0 0 0-.134-.116Z', clipRule: 'evenodd' })));
};
var ForwardRef$5f = forwardRef(SvgMobileDataOff);

var SvgMobileData = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.116 5.944a1.26 1.26 0 0 1 .134-.116V14a.75.75 0 0 0 1.5 0V5.828c.047.035.091.074.134.116L18.47 7.53a.75.75 0 1 0 1.06-1.06l-1.585-1.586a2.75 2.75 0 0 0-3.89 0L12.47 6.469a.75.75 0 0 0 1.06 1.061l1.586-1.586ZM8.884 18.055a1.27 1.27 0 0 1-.134.117V10a.75.75 0 0 0-1.5 0v8.172a1.27 1.27 0 0 1-.134-.117L5.53 16.47a.75.75 0 0 0-1.06 1.06l1.585 1.586a2.75 2.75 0 0 0 3.89 0l1.585-1.586a.75.75 0 1 0-1.06-1.06l-1.586 1.585Z', clipRule: 'evenodd' })));
};
var ForwardRef$5e = forwardRef(SvgMobileData);

var SvgMobilePayment = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7 2h8a2 2 0 0 1 2 2v1.5h-4.5A1.5 1.5 0 0 0 11 7v8a1.5 1.5 0 0 0 1.5 1.5H17V20a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm4 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.5-13H17a2 2 0 0 1 2 2v.25h-6.5V7Zm0 3.75H19V13a2 2 0 0 1-2 2h-4.5v-4.25Z', clipRule: 'evenodd' })));
};
var ForwardRef$5d = forwardRef(SvgMobilePayment);

var SvgMobile = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H8Zm3 16.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$5c = forwardRef(SvgMobile);

var SvgMoneyAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 4h12a4 4 0 0 1 4 4v5a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm0 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm8 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm5.75 4a.75.75 0 0 0-1.5 0v1.25H17a.75.75 0 0 0 0 1.5h1.25V20a.75.75 0 0 0 1.5 0v-1.25H21a.75.75 0 0 0 0-1.5h-1.25V16Z', clipRule: 'evenodd' })));
};
var ForwardRef$5b = forwardRef(SvgMoneyAdd);

var SvgMoneyArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 4h12a4 4 0 0 1 4 4v5a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm0 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm8 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm3.53 5.884.72.72V16a.75.75 0 0 1 1.5 0v2.604l.72-.72a.75.75 0 1 1 1.06 1.06l-1.293 1.293a1.75 1.75 0 0 1-2.474 0l-1.293-1.292a.75.75 0 1 1 1.06-1.061Z', clipRule: 'evenodd' })));
};
var ForwardRef$5a = forwardRef(SvgMoneyArrowDown);

var SvgMoneyArrowLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 4h12a4 4 0 0 1 4 4v5a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm0 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm8 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm4.116 4.53-.72.72H21a.75.75 0 0 1 0 1.5h-3.604l.72.72a.75.75 0 1 1-1.06 1.06l-1.293-1.293a1.75 1.75 0 0 1 0-2.474l1.292-1.293a.75.75 0 1 1 1.061 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$59 = forwardRef(SvgMoneyArrowLeft);

var SvgMoneyArrowRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 4h12a4 4 0 0 1 4 4v5a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm0 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm8 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm4.884 4.53.72.72H16a.75.75 0 0 0 0 1.5h3.604l-.72.72a.75.75 0 1 0 1.06 1.06l1.293-1.293a1.75 1.75 0 0 0 0-2.474l-1.292-1.293a.75.75 0 1 0-1.061 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$58 = forwardRef(SvgMoneyArrowRight);

var SvgMoneyArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 4h12a4 4 0 0 1 4 4v5a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm0 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm8 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm3.53 6.116.72-.72V20a.75.75 0 0 0 1.5 0v-2.604l.72.72a.75.75 0 1 0 1.06-1.06l-1.293-1.293a1.75 1.75 0 0 0-2.474 0l-1.293 1.292a.75.75 0 1 0 1.06 1.061Z', clipRule: 'evenodd' })));
};
var ForwardRef$57 = forwardRef(SvgMoneyArrowUp);

var SvgMoneyBagCoin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.602 5.25H8.398c-1.162-1.57.404-3.768 2.35-3.14l.927.3c.211.067.439.067.65 0l.928-.3c1.945-.628 3.512 1.57 2.349 3.14Zm-7.096 1.5h6.988c1.32.73 2.35 1.95 2.822 3.46l1.25 4c1.207 3.864-1.68 7.79-5.727 7.79H10.16c-4.048 0-6.934-3.926-5.727-7.79l1.25-4a5.996 5.996 0 0 1 2.822-3.46ZM12 12a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z', clipRule: 'evenodd' })));
};
var ForwardRef$56 = forwardRef(SvgMoneyBagCoin);

var SvgMoneyBagCoins = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.398 5.25h7.204c1.163-1.57-.404-3.768-2.349-3.14l-.928.3a1.06 1.06 0 0 1-.65 0l-.928-.3c-1.945-.628-3.511 1.57-2.349 3.14Zm7.096 1.5H8.506a5.996 5.996 0 0 0-2.822 3.46l-1.25 4C3.227 18.074 6.114 22 10.161 22h.966a3.484 3.484 0 0 1-.627-2c0-.744.232-1.433.627-2A3.5 3.5 0 0 1 14 12.5h5.031l-.715-2.29a5.997 5.997 0 0 0-2.822-3.46ZM14 14a2 2 0 1 0 0 4 2 2 0 1 0 0 4h6a2 2 0 0 0 0-4 2 2 0 0 0 0-4h-6Z', clipRule: 'evenodd' })));
};
var ForwardRef$55 = forwardRef(SvgMoneyBagCoins);

var SvgMoneyBagDollar = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.602 5.25H8.398c-1.162-1.57.404-3.768 2.35-3.14l.927.3c.211.067.439.067.65 0l.928-.3c1.945-.628 3.512 1.57 2.349 3.14Zm-7.096 1.5h6.988c1.32.73 2.35 1.95 2.822 3.46l1.25 4c1.207 3.864-1.68 7.79-5.727 7.79H10.16c-4.048 0-6.934-3.926-5.727-7.79l1.25-4a5.996 5.996 0 0 1 2.822-3.46ZM12.75 9.5a.75.75 0 0 0-1.5 0v.846c-1.106.288-2 1.197-2 2.404 0 1.472 1.328 2.5 2.75 2.5.788 0 1.25.539 1.25 1 0 .461-.462 1-1.25 1s-1.25-.539-1.25-1a.75.75 0 0 0-1.5 0c0 1.207.894 2.116 2 2.404v.846a.75.75 0 0 0 1.5 0v-.846c1.106-.288 2-1.197 2-2.404 0-1.472-1.328-2.5-2.75-2.5-.788 0-1.25-.539-1.25-1 0-.461.462-1 1.25-1s1.25.539 1.25 1a.75.75 0 0 0 1.5 0c0-1.207-.894-2.116-2-2.404V9.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$54 = forwardRef(SvgMoneyBagDollar);

var SvgMoneyBagEuro = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.602 5.25H8.398c-1.162-1.57.404-3.768 2.35-3.14l.927.3c.211.067.439.067.65 0l.928-.3c1.945-.628 3.512 1.57 2.349 3.14Zm-7.096 1.5h6.988c1.32.73 2.35 1.95 2.822 3.46l1.25 4c1.207 3.864-1.68 7.79-5.727 7.79H10.16c-4.048 0-6.934-3.926-5.727-7.79l1.25-4a5.996 5.996 0 0 1 2.822-3.46ZM9.75 14.5c0-.084.004-.168.011-.25H12a.75.75 0 0 0 0-1.5h-1.621c.504-.61 1.267-1 2.121-1 .77 0 1.464.315 1.964.825a.75.75 0 1 0 1.072-1.05 4.25 4.25 0 0 0-6.91 1.224H8a.75.75 0 0 0 0 1.501h.257a4.315 4.315 0 0 0 0 .5H8a.75.75 0 0 0 0 1.5h.626a4.25 4.25 0 0 0 6.91 1.224.75.75 0 1 0-1.072-1.05 2.74 2.74 0 0 1-1.964.826c-.854 0-1.617-.39-2.121-1H12a.75.75 0 0 0 0-1.5H9.761a2.784 2.784 0 0 1-.011-.25Z', clipRule: 'evenodd' })));
};
var ForwardRef$53 = forwardRef(SvgMoneyBagEuro);

var SvgMoneyBagPound = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.602 5.25H8.398c-1.162-1.57.404-3.768 2.35-3.14l.927.3c.211.067.439.067.65 0l.928-.3c1.945-.628 3.512 1.57 2.349 3.14Zm-7.096 1.5h6.988c1.32.73 2.35 1.95 2.822 3.46l1.25 4c1.207 3.864-1.68 7.79-5.727 7.79H10.16c-4.048 0-6.934-3.926-5.727-7.79l1.25-4a5.996 5.996 0 0 1 2.822-3.46Zm4.11 3a2.135 2.135 0 0 0-2.135 2.135v.57c0 .44-.054.874-.158 1.295H9a.75.75 0 0 0 0 1.5h.703c-.154.255-.33.499-.527.727-1.103 1.286-.19 3.273 1.504 3.273H14a.75.75 0 0 0 0-1.5h-3.32a.482.482 0 0 1-.365-.796 6.908 6.908 0 0 0 1.075-1.704H13a.75.75 0 0 0 0-1.5h-1.142c.081-.424.123-.858.123-1.295v-.57a.635.635 0 1 1 1.269 0v.497a.75.75 0 0 0 1.5 0v-.497a2.135 2.135 0 0 0-2.135-2.135Z', clipRule: 'evenodd' })));
};
var ForwardRef$52 = forwardRef(SvgMoneyBagPound);

var SvgMoneyBagYen = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.602 5.25H8.398c-1.162-1.57.404-3.768 2.35-3.14l.927.3c.211.067.439.067.65 0l.928-.3c1.945-.628 3.512 1.57 2.349 3.14Zm-7.096 1.5h6.988c1.32.73 2.35 1.95 2.822 3.46l1.25 4c1.207 3.864-1.68 7.79-5.727 7.79H10.16c-4.048 0-6.934-3.926-5.727-7.79l1.25-4a5.996 5.996 0 0 1 2.822-3.46Zm2.118 3.834a.75.75 0 1 0-1.248.832l1.556 2.334H10a.75.75 0 0 0 0 1.5h1.25v.5H10a.75.75 0 0 0 0 1.5h1.25V19a.75.75 0 0 0 1.5 0v-1.75H14a.75.75 0 0 0 0-1.5h-1.25v-.5H14a.75.75 0 0 0 0-1.5h-.932l1.556-2.334a.75.75 0 1 0-1.248-.832L12 12.648l-1.376-2.064Z', clipRule: 'evenodd' })));
};
var ForwardRef$51 = forwardRef(SvgMoneyBagYen);

var SvgMoneyBag = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.602 5.25H8.398c-1.162-1.57.404-3.768 2.35-3.14l.927.3c.211.067.439.067.65 0l.928-.3c1.945-.628 3.512 1.57 2.349 3.14Zm-7.096 1.5h6.988c1.32.73 2.35 1.95 2.822 3.46l1.25 4c1.207 3.864-1.68 7.79-5.727 7.79H10.16c-4.048 0-6.934-3.926-5.727-7.79l1.25-4a5.996 5.996 0 0 1 2.822-3.46Zm6.858 10.906a.75.75 0 0 0-.728-1.312c-1.17.65-1.97.906-2.696.903-.721-.003-1.48-.263-2.562-.895a.75.75 0 0 0-.756 1.296c1.172.683 2.203 1.095 3.312 1.1 1.106.004 2.177-.397 3.43-1.092Z', clipRule: 'evenodd' })));
};
var ForwardRef$50 = forwardRef(SvgMoneyBag);

var SvgMoneyBigCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H6Zm6 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$4$ = forwardRef(SvgMoneyBigCircle);

var SvgMoneyCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 4h12a4 4 0 0 1 4 4v5a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm0 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm8 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm8.564 4.494a.75.75 0 0 0-1.128-.988l-2.87 3.28a.25.25 0 0 1-.345.03l-1.753-1.402a.75.75 0 1 0-.937 1.172l1.753 1.402a1.75 1.75 0 0 0 2.41-.214l2.87-3.28Z', clipRule: 'evenodd' })));
};
var ForwardRef$4_ = forwardRef(SvgMoneyCheck);

var SvgMoneyCoin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2.75H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6.5c0-.744.232-1.433.627-2A3.5 3.5 0 0 1 14 9.25h6v-4.5a2 2 0 0 0-2-2Zm-6 10a2 2 0 0 1 2-2h6a2 2 0 1 1 0 4 2 2 0 1 1 0 4h-6a2 2 0 1 1 0-4 2 2 0 0 1-2-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$4Z = forwardRef(SvgMoneyCoin);

var SvgMoneyDash = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H6ZM5 6.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5H5ZM16.25 17a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z', clipRule: 'evenodd' })));
};
var ForwardRef$4Y = forwardRef(SvgMoneyDash);

var SvgMoneyDollar = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Zm10 5.25A1.25 1.25 0 1 1 13.25 10a.75.75 0 0 0 1.5 0 2.75 2.75 0 0 0-2-2.646V6.5a.75.75 0 0 0-1.5 0v.854A2.751 2.751 0 0 0 12 12.75 1.25 1.25 0 1 1 10.75 14a.75.75 0 0 0-1.5 0 2.75 2.75 0 0 0 2 2.646v.854a.75.75 0 0 0 1.5 0v-.854A2.751 2.751 0 0 0 12 11.25Z', clipRule: 'evenodd' })));
};
var ForwardRef$4X = forwardRef(SvgMoneyDollar);

var SvgMoneyDoubleDot = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H6Zm6 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm7 2a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM6 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$4W = forwardRef(SvgMoneyDoubleDot);

var SvgMoneyEuro = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6Zm4.678 7.75c.604-.615 1.455-1 2.405-1 .938 0 1.782.377 2.387.981a.75.75 0 1 0 1.06-1.06 4.863 4.863 0 0 0-3.447-1.421 4.85 4.85 0 0 0-4.258 2.5H8a.75.75 0 0 0 0 1.5h.31a4.715 4.715 0 0 0 0 1.5H8a.75.75 0 0 0 0 1.5h.825a4.85 4.85 0 0 0 4.258 2.5c1.348 0 2.57-.543 3.447-1.42a.75.75 0 1 0-1.06-1.061 3.363 3.363 0 0 1-2.387.981c-.95 0-1.8-.385-2.405-1H13a.75.75 0 0 0 0-1.5H9.84a3.173 3.173 0 0 1 0-1.5H13a.75.75 0 0 0 0-1.5h-2.322Z', clipRule: 'evenodd' })));
};
var ForwardRef$4V = forwardRef(SvgMoneyEuro);

var SvgMoneyFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 4h12a4 4 0 0 1 4 4v5a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm0 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm8 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm5 4 .221-.221a1.562 1.562 0 1 1 2.21 2.21l-1.547 1.546a1.25 1.25 0 0 1-1.768 0L16.57 17.99a1.562 1.562 0 1 1 2.21-2.21L19 16Z', clipRule: 'evenodd' })));
};
var ForwardRef$4U = forwardRef(SvgMoneyFavourite);

var SvgMoneyIncome = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm10.53 4.134.72.72V2.75a.75.75 0 0 1 1.5 0v2.104l.72-.72a.75.75 0 1 1 1.06 1.06l-1.293 1.293a1.75 1.75 0 0 1-2.474 0L9.47 5.195a.75.75 0 0 1 1.06-1.061ZM3 11.75a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8Zm16 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-13-9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm8 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$4T = forwardRef(SvgMoneyIncome);

var SvgMoneyMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 4h12a4 4 0 0 1 4 4v5a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm0 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm8 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm7 5.75a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5h4Z', clipRule: 'evenodd' })));
};
var ForwardRef$4S = forwardRef(SvgMoneyMinus);

var SvgMoneyPound = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Zm6.25 6a.75.75 0 0 1 .75-.75h1.323c.104-.42.158-.856.158-1.295v-.57a2.135 2.135 0 1 1 4.269 0v.497a.75.75 0 1 1-1.5 0v-.497a.635.635 0 1 0-1.27 0v.57c0 .437-.04.87-.122 1.295H13a.75.75 0 0 1 0 1.5h-1.61a6.908 6.908 0 0 1-1.075 1.704.482.482 0 0 0 .365.796H14a.75.75 0 0 1 0 1.5h-3.32c-1.693 0-2.607-1.987-1.504-3.273.197-.228.373-.472.527-.727H9a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$4R = forwardRef(SvgMoneyPound);

var SvgMoneyProfitBelow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3 5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5Zm16 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM6 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm8 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm-3.47 11.616.72-.72V22a.75.75 0 0 0 1.5 0v-2.104l.72.72a.75.75 0 1 0 1.06-1.06l-1.293-1.293a1.75 1.75 0 0 0-2.474 0L9.47 19.555a.75.75 0 1 0 1.06 1.061Z', clipRule: 'evenodd' })));
};
var ForwardRef$4Q = forwardRef(SvgMoneyProfitBelow);

var SvgMoneyProfitTop = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm10.53 4.866.72-.72V6.25a.75.75 0 0 0 1.5 0V4.146l.72.72a.75.75 0 1 0 1.06-1.06l-1.293-1.293a1.75 1.75 0 0 0-2.474 0L9.47 3.805a.75.75 0 0 0 1.06 1.061ZM3 11.75a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8Zm16 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-13-9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm8 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$4P = forwardRef(SvgMoneyProfitTop);

var SvgMoneyRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 4h12a4 4 0 0 1 4 4v5a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm0 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm8 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm6.945 5.116a.75.75 0 1 0-1.061-1.06l-.884.883-.884-.884a.75.75 0 1 0-1.06 1.061l.883.884-.884.884a.75.75 0 1 0 1.061 1.06l.884-.883.884.884a.75.75 0 1 0 1.06-1.061L20.062 18l.884-.884Z', clipRule: 'evenodd' })));
};
var ForwardRef$4O = forwardRef(SvgMoneyRemove);

var SvgMoneySmallCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H6Zm12 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM7 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm5 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$4N = forwardRef(SvgMoneySmallCircle);

var SvgMoneyUser = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2.75H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h7a1 1 0 0 0 1-1v-1a4 4 0 0 1 4-4h3a1 1 0 0 0 1-1v-5a4 4 0 0 0-4-4Zm-11 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm5 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm9 7a2 2 0 1 0-2 2c-1.246 0-2.377.641-3.208 1.684-.451.566.024 1.316.748 1.316h4.92c.724 0 1.199-.75.748-1.316-.83-1.043-1.962-1.684-3.208-1.684a2 2 0 0 0 2-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$4M = forwardRef(SvgMoneyUser);

var SvgMoneyWithdraw = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3 5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5Zm16 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM6 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm8 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm-3.47 10.884.72.72V18.5a.75.75 0 0 1 1.5 0v2.104l.72-.72a.75.75 0 1 1 1.06 1.06l-1.293 1.293a1.75 1.75 0 0 1-2.474 0L9.47 20.945a.75.75 0 1 1 1.06-1.061Z', clipRule: 'evenodd' })));
};
var ForwardRef$4L = forwardRef(SvgMoneyWithdraw);

var SvgMoneyYen = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Zm6.25 5a.75.75 0 0 1 .75-.75h1.5l-2.1-2.8a.75.75 0 1 1 1.2-.9l2.4 3.2 2.4-3.2a.75.75 0 1 1 1.2.9l-2.1 2.8H15a.75.75 0 0 1 0 1.5h-2.25v1.5H15a.75.75 0 0 1 0 1.5h-2.25V17a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25v-1.5H9a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$4K = forwardRef(SvgMoneyYen);

var SvgMoney = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H6Zm6 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6.5 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm12 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-12 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm12 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$4J = forwardRef(SvgMoney);

var SvgMusicOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21.75 4.775a2.75 2.75 0 0 0-3.62-2.61l-6.632 2.212a4.744 4.744 0 0 0-2.343 1.717l4.233 4.234 5.217-1.74a1.25 1.25 0 0 1 1.645 1.187v4.224a3.734 3.734 0 0 0-2.25-.75c-.5 0-.977.099-1.414.276l4.888 4.888A3.74 3.74 0 0 0 21.75 17V4.775ZM3.53 2.469A.75.75 0 1 0 2.47 3.53l5.78 5.78V16a3.75 3.75 0 1 0 1.5 3v-5.117a3.248 3.248 0 0 1 2.222-3.083L3.53 2.47Zm18 19.061a.75.75 0 0 0 0-1.06l-.848-.85-5.303-5.302a3.75 3.75 0 0 0 4.035 6.156l1.056 1.056a.75.75 0 0 0 1.06 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$4I = forwardRef(SvgMusicOff);

var SvgMusic = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18.13 2.166a2.75 2.75 0 0 1 3.62 2.609V17a3.75 3.75 0 1 1-1.5-3V9.774a1.25 1.25 0 0 0-1.645-1.186l-6.633 2.21a3.25 3.25 0 0 0-2.222 3.084V19a3.75 3.75 0 1 1-1.5-3V8.882a4.75 4.75 0 0 1 3.248-4.506l6.632-2.211Z', clipRule: 'evenodd' })));
};
var ForwardRef$4H = forwardRef(SvgMusic);

var SvgNavigation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm9.21 13.396-3.703-1.234c-2.01-.67-2.01-3.513 0-4.183l11.588-3.862c1.723-.575 3.363 1.065 2.788 2.788l-3.862 11.588c-.67 2.01-3.513 2.01-4.183 0l-1.234-3.703a2.204 2.204 0 0 0-1.394-1.394Z' })));
};
var ForwardRef$4G = forwardRef(SvgNavigation);

var SvgNetflix = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M4 3h5l11 17h-5L4 3Zm0 2.761V20h5v-6.511L4 5.76ZM20 3v14.239l-5-7.727V3h5Z', clipRule: 'evenodd' })));
};
var ForwardRef$4F = forwardRef(SvgNetflix);

var SvgNextArrow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.985 14.333v1.185c0 1.543 1.674 2.505 3.007 1.727l4.993-2.912v1.185c0 1.543 1.674 2.505 3.007 1.727l6.031-3.518c1.323-.771 1.323-2.683 0-3.455l-6.03-3.518c-1.334-.777-3.008.184-3.008 1.728v1.185L5.992 6.754c-1.333-.777-3.007.184-3.007 1.728v5.851Z', clipRule: 'evenodd' })));
};
var ForwardRef$4E = forwardRef(SvgNextArrow);

var SvgNightMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M18.328 14.869A9.197 9.197 0 0 1 9.525 3 9.201 9.201 0 0 0 3 11.803 9.197 9.197 0 0 0 12.197 21 9.201 9.201 0 0 0 21 14.475a9.196 9.196 0 0 1-2.672.394Z' })));
};
var ForwardRef$4D = forwardRef(SvgNightMode);

var SvgNotificationOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.47 2.47a.75.75 0 0 0 0 1.06l3.612 3.613a6.67 6.67 0 0 0-.402 1.651l-.345 3.044a3.816 3.816 0 0 1-.88 2.042C3.422 15.096 4.261 17 5.83 17h10.11l4.53 4.53a.75.75 0 1 0 1.06-1.06l-18-18a.75.75 0 0 0-1.06 0Zm16.195 9.368-.345-3.044C17.946 5.491 15.23 3 12 3a6.22 6.22 0 0 0-3.745 1.255l11.597 11.597a1.898 1.898 0 0 0-.308-1.972 3.816 3.816 0 0 1-.879-2.042Zm-3.693 7.234C14.515 20.198 13.357 21 12 21s-2.515-.8-2.972-1.928a.423.423 0 0 1 .395-.572h5.154a.423.423 0 0 1 .395.572Z', clipRule: 'evenodd' })));
};
var ForwardRef$4C = forwardRef(SvgNotificationOff);

var SvgNotificationWithCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1.676 4.823A5.005 5.005 0 0 1 12.1 4H12C8.77 4 6.054 6.49 5.68 9.794l-.345 3.044a3.816 3.816 0 0 1-.88 2.042C3.422 16.096 4.261 18 5.83 18h12.34c1.57 0 2.408-1.904 1.374-3.12a3.816 3.816 0 0 1-.879-2.042l-.341-3.015ZM14.972 20.07C14.515 21.2 13.357 22 12 22s-2.515-.8-2.972-1.928a.423.423 0 0 1 .395-.572h5.154a.423.423 0 0 1 .395.572Z', clipRule: 'evenodd' })));
};
var ForwardRef$4B = forwardRef(SvgNotificationWithCircle);

var SvgNotification = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 3C8.77 3 6.054 5.49 5.68 8.794l-.345 3.044a3.816 3.816 0 0 1-.88 2.042C3.422 15.096 4.261 17 5.83 17h12.34c1.57 0 2.408-1.904 1.374-3.12a3.816 3.816 0 0 1-.879-2.042l-.345-3.044C17.946 5.491 15.23 3 12 3Zm2.972 16.072C14.515 20.198 13.357 21 12 21s-2.515-.8-2.972-1.928a.423.423 0 0 1 .395-.572h5.154a.423.423 0 0 1 .395.572Z', clipRule: 'evenodd' })));
};
var ForwardRef$4A = forwardRef(SvgNotification);

var SvgOpenBoxAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2.312a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25v1.25a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 1 1 0-1.5h1.25v-1.25a.75.75 0 0 1 .75-.75ZM4 11.74v5.087a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.826V11.74l-5.33 2.665a1.5 1.5 0 0 1-1.918-.51L12 12.766l-.752 1.128a1.5 1.5 0 0 1-1.919.51L4 11.739Zm7.976-1.661-7.96-3.992-1.987 2.956 8.002 4.023 1.945-2.987Zm0 0 2.022 2.987 8.02-3.965-2.027-2.988-8.015 3.966Z', clipRule: 'evenodd' })));
};
var ForwardRef$4z = forwardRef(SvgOpenBoxAdd);

var SvgOpenBoxArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.247 4.625V2.838c0-.417.331-.756.74-.756s.74.339.74.756v1.855l.655-.62a.735.735 0 0 1 1.069.056.773.773 0 0 1-.061 1.066l-2.051 1.899a.492.492 0 0 1-.671 0L9.613 5.2a.78.78 0 0 1-.062-1.077.742.742 0 0 1 1.067-.069l.629.571ZM4 11.74v5.087a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.826V11.74l-5.33 2.665a1.5 1.5 0 0 1-1.918-.51L12 12.766l-.752 1.128a1.5 1.5 0 0 1-1.919.51L4 11.739Zm7.976-1.661-7.96-3.992-1.987 2.956 8.002 4.023 1.945-2.987Zm0 0 2.022 2.987 8.02-3.965-2.027-2.988-8.015 3.966Z', clipRule: 'evenodd' })));
};
var ForwardRef$4y = forwardRef(SvgOpenBoxArrowDown);

var SvgOpenBoxArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.753 6.472V4.685l.629.571a.742.742 0 0 0 1.067-.068.78.78 0 0 0-.062-1.077l-2.055-1.895a.492.492 0 0 0-.67 0l-2.052 1.9a.773.773 0 0 0-.06 1.065c.276.324.76.35 1.068.057l.654-.62v1.854a.75.75 0 0 0 .74.757c.41 0 .741-.339.741-.757Zm-8.737-.386 7.96 3.992-1.945 2.987L2.03 9.042l1.987-2.956Zm7.96 3.992 8.015-3.966L22.017 9.1l-8.02 3.965-2.021-2.987ZM4 11.739v5.196a2 2 0 0 0 1.094 1.783l6 3.047a2 2 0 0 0 1.812 0l6-3.047A2 2 0 0 0 20 16.935v-5.196l-5.33 2.707a1.485 1.485 0 0 1-1.918-.518L12 12.783l-.752 1.145c-.42.64-1.242.862-1.919.518L4 11.739Z', clipRule: 'evenodd' })));
};
var ForwardRef$4x = forwardRef(SvgOpenBoxArrowUp);

var SvgOpenBoxDone = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.587 3.67a.75.75 0 1 0-1.128-.988l-2.87 3.28a.25.25 0 0 1-.345.03L9.491 4.59a.75.75 0 1 0-.937 1.171l1.753 1.403a1.75 1.75 0 0 0 2.41-.214l2.87-3.28ZM4.016 6.024l7.96 3.992-1.945 2.987L2.03 8.98l1.987-2.956Zm7.96 3.992L19.99 6.05l2.026 2.988-8.02 3.965-2.021-2.987Zm-7.953 1.661v5.087a2 2 0 0 0 1.105 1.789l6 3a2 2 0 0 0 1.79 0l6-3a2 2 0 0 0 1.105-1.789v-5.087l-5.33 2.665a1.5 1.5 0 0 1-1.918-.51l-.752-1.128-.752 1.128a1.5 1.5 0 0 1-1.919.51l-5.33-2.665Z', clipRule: 'evenodd' })));
};
var ForwardRef$4w = forwardRef(SvgOpenBoxDone);

var SvgOpenBoxFavorite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm12.23 2.562-.23.24-.23-.24a1.568 1.568 0 0 0-2.295 0 1.768 1.768 0 0 0 0 2.412l1.607 1.688a1.254 1.254 0 0 0 1.836 0l1.607-1.688a1.768 1.768 0 0 0 0-2.412 1.568 1.568 0 0 0-2.296 0ZM4 11.739v5.087a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.826V11.74l-5.33 2.665a1.5 1.5 0 0 1-1.918-.51L12 12.766l-.752 1.128a1.5 1.5 0 0 1-1.919.51L4 11.739Zm7.976-1.661-7.96-3.992-1.987 2.956 8.002 4.023 1.945-2.987Zm0 0 2.022 2.987 8.02-3.965-2.027-2.988-8.015 3.966Z', clipRule: 'evenodd' })));
};
var ForwardRef$4v = forwardRef(SvgOpenBoxFavorite);

var SvgOpenBoxMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14.75 5.062a.75.75 0 0 1-.75.75h-4a.75.75 0 1 1 0-1.5h4a.75.75 0 0 1 .75.75ZM4 11.74v5.087a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.826V11.74l-5.33 2.665a1.5 1.5 0 0 1-1.918-.51L12 12.766l-.752 1.128a1.5 1.5 0 0 1-1.919.51L4 11.739Zm7.976-1.661-7.96-3.992-1.987 2.956 8.002 4.023 1.945-2.987Zm0 0 2.022 2.987 8.02-3.965-2.027-2.988-8.015 3.966Z', clipRule: 'evenodd' })));
};
var ForwardRef$4u = forwardRef(SvgOpenBoxMinus);

var SvgOpenBoxRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.945 4.178a.75.75 0 1 0-1.061-1.06L12 4.002l-.884-.884a.75.75 0 0 0-1.06 1.06l.884.884-.884.884a.75.75 0 1 0 1.06 1.06L12 6.124l.884.884a.75.75 0 0 0 1.06-1.061l-.883-.884.884-.884Zm-9.93 1.908 7.96 3.992-1.944 2.987L2.03 9.042l1.987-2.956Zm7.96 3.992 8.016-3.966L22.017 9.1l-8.02 3.965-2.021-2.987ZM4 11.739v5.087a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.826V11.74l-5.33 2.665a1.5 1.5 0 0 1-1.918-.51L12 12.766l-.752 1.128a1.5 1.5 0 0 1-1.919.51L4 11.739Z', clipRule: 'evenodd' })));
};
var ForwardRef$4t = forwardRef(SvgOpenBoxRemove);

var SvgOpenBoxSearch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11 2.812a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm-2.75 1.25a2.75 2.75 0 1 1 5.152 1.341l.628.629a.75.75 0 0 1-1.06 1.06l-.63-.628a2.75 2.75 0 0 1-4.09-2.402ZM4 11.74v5.087a2 2 0 0 0 1.106 1.79l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.825V11.74l-5.33 2.665a1.5 1.5 0 0 1-1.918-.51L12 12.767l-.752 1.127a1.5 1.5 0 0 1-1.919.51L4 11.739Zm7.976-1.661-7.96-3.992-1.987 2.957 8.002 4.022 1.945-2.987Zm0 0 2.022 2.987 8.02-3.965-2.027-2.988-8.015 3.966Z', clipRule: 'evenodd' })));
};
var ForwardRef$4s = forwardRef(SvgOpenBoxSearch);

var SvgOpenBoxTwoSide = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 25', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3.764 5.622 2.215 7.616a1 1 0 0 0 .79 1.613H8.5a1 1 0 0 0 .8-.4l2.698-3.594 2.796 3.607a1 1 0 0 0 .79.387h5.41a1 1 0 0 0 .79-1.613l-1.55-1.995a1 1 0 0 0-.79-.386H4.555a1 1 0 0 0-.79.387Zm4.36 5.375H4v5.909c0 1.774 1.343 3.213 3 3.213h10c1.657 0 3-1.439 3-3.213v-5.91h-4.11c-1.174 0-2.268-.629-2.917-1.675l-.966-1.56-.966 1.56c-.649 1.046-1.744 1.676-2.917 1.676Z', clipRule: 'evenodd' })));
};
var ForwardRef$4r = forwardRef(SvgOpenBoxTwoSide);

var SvgOpenBox = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm18.323 5.162-5.429-2.715a2 2 0 0 0-1.788 0L5.677 5.162 12 8.323l6.323-3.161ZM4 11.677v5.087a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.764v-5.087l-5.33 2.665a1.5 1.5 0 0 1-1.918-.51L12 12.704l-.752 1.128a1.5 1.5 0 0 1-1.919.51L4 11.677Zm7.976-1.661-7.96-3.993L2.029 8.98l8.002 4.023 1.945-2.987Zm0 0 2.022 2.987 8.02-3.965L19.99 6.05l-8.015 3.966Z', clipRule: 'evenodd' })));
};
var ForwardRef$4q = forwardRef(SvgOpenBox);

var SvgOutCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18.53 7.47a.75.75 0 1 0-1.06 1.06l2.72 2.72H8a.75.75 0 1 0 0 1.5h12.19l-2.72 2.72a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 0-1.06l-4-4Zm-4-1.13a.75.75 0 1 0 .94-1.17 8.75 8.75 0 1 0 0 13.661.75.75 0 0 0-.94-1.17 7.25 7.25 0 1 1 0-11.32Z', clipRule: 'evenodd' })));
};
var ForwardRef$4p = forwardRef(SvgOutCircle);

var SvgOutRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7 2.25A4.75 4.75 0 0 0 2.25 7v10A4.75 4.75 0 0 0 7 21.75h4A4.75 4.75 0 0 0 15.75 17v-.5a.75.75 0 0 0-1.5 0v.5A3.25 3.25 0 0 1 11 20.25H7A3.25 3.25 0 0 1 3.75 17V7A3.25 3.25 0 0 1 7 3.75h4A3.25 3.25 0 0 1 14.25 7v.5a.75.75 0 0 0 1.5 0V7A4.75 4.75 0 0 0 11 2.25H7Zm11.53 6.22a.75.75 0 1 0-1.06 1.06l1.72 1.72H9a.75.75 0 0 0 0 1.5h10.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3Z', clipRule: 'evenodd' })));
};
var ForwardRef$4o = forwardRef(SvgOutRectangle);

var SvgPackageBoxCube = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm13.625 2.358 5 2.31a4.031 4.031 0 0 1 1.622 1.37L12 10.161 3.753 6.038a4.03 4.03 0 0 1 1.622-1.37l5-2.31a3.863 3.863 0 0 1 3.25 0ZM3.132 7.405A4.307 4.307 0 0 0 3 8.466v7.068c0 1.643.93 3.131 2.375 3.798l5 2.31c.283.13.576.225.875.284V11.464l-8.118-4.06Zm9.618 14.521c.299-.059.592-.154.875-.284l5-2.31C20.069 18.665 21 17.177 21 15.534V8.466c0-.364-.046-.72-.132-1.061l-8.118 4.058v10.463Z', clipRule: 'evenodd' })));
};
var ForwardRef$4n = forwardRef(SvgPackageBoxCube);

var SvgPackageBoxDash = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6Zm4 3.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$4m = forwardRef(SvgPackageBoxDash);

var SvgPackageBoxFavorite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 18V7.75h-7V13l-3-2-3 2V7.75H2V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4ZM20.828 4.828c.407.407.718.893.916 1.422H2.256a4 4 0 0 1 .916-1.422l1.656-1.656A4 4 0 0 1 7.657 2h8.686a4 4 0 0 1 2.829 1.172l1.656 1.656Z', clipRule: 'evenodd' })));
};
var ForwardRef$4l = forwardRef(SvgPackageBoxFavorite);

var SvgPackageBoxHandle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Zm14-2.5H8v4.086c0 .89 1.077 1.337 1.707.707l1.586-1.586a1 1 0 0 1 1.414 0l1.586 1.586c.63.63 1.707.184 1.707-.707V3.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$4k = forwardRef(SvgPackageBoxHandle);

var SvgPackageBoxTwoSide = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm13.625 2.358 5 2.31a4.031 4.031 0 0 1 1.622 1.37l-3.23 1.615-8.265-4.545 1.623-.75a3.863 3.863 0 0 1 3.25 0ZM7.06 3.89l-1.686.779a4.03 4.03 0 0 0-1.622 1.37L12 10.161l3.386-1.693L7.061 3.89ZM3.132 7.405A4.308 4.308 0 0 0 3 8.466v7.068c0 1.643.93 3.131 2.375 3.798l5 2.31c.283.13.576.225.875.284V11.464l-8.118-4.06Zm9.618 14.521c.299-.059.592-.154.875-.284l2.625-1.213V9.714l-3.5 1.75v10.462Zm5-2.19.875-.404C20.069 18.665 21 17.177 21 15.534V8.466c0-.364-.046-.72-.132-1.061L17.75 8.964v10.772Z', clipRule: 'evenodd' })));
};
var ForwardRef$4j = forwardRef(SvgPackageBoxTwoSide);

var SvgPackageBox = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 18V6.961c0-.07-.004-.141-.011-.211H15V9a3 3 0 1 1-6 0V6.75H2.011A2 2 0 0 0 2 6.961V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4ZM18.096 2.877l2.966 2.373H2.939l2.966-2.373A4 4 0 0 1 8.404 2h7.193a4 4 0 0 1 2.499.877Z', clipRule: 'evenodd' })));
};
var ForwardRef$4i = forwardRef(SvgPackageBox);

var SvgPackageCube = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm.83 5.128 4 1.825c.11.05.214.11.31.177L12 11.148 6.86 8.38a2 2 0 0 1 .31-.177l4-1.825a2 2 0 0 1 1.66 0ZM6.037 9.641a2 2 0 0 0-.037.382v4.954a2 2 0 0 0 1.17 1.82l4 1.824.08.035v-6.208L6.037 9.64Zm6.713 9.015.08-.035 4-1.824a2 2 0 0 0 1.17-1.82v-4.954c0-.13-.013-.258-.037-.382l-5.213 2.807v6.208Zm0 2.344a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1Zm7.851-17.602a.75.75 0 0 1 0 1.061l-.707.707a.75.75 0 0 1-1.06-1.06l.707-.708a.75.75 0 0 1 1.06 0ZM5.166 19.894a.75.75 0 1 0-1.06-1.06l-.707.707a.75.75 0 1 0 1.06 1.06l.707-.707ZM22.75 12a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75ZM3 12.75a.75.75 0 0 0 0-1.5H2a.75.75 0 0 0 0 1.5h1Zm17.601 7.85a.75.75 0 0 1-1.06 0l-.707-.707a.75.75 0 1 1 1.06-1.06l.707.707a.75.75 0 0 1 0 1.06ZM4.106 5.166a.75.75 0 1 0 1.06-1.06l-.707-.708A.75.75 0 1 0 3.4 4.46l.707.707Z', clipRule: 'evenodd' })));
};
var ForwardRef$4h = forwardRef(SvgPackageCube);

var SvgPackageDashCentre = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 18V8.403c0-.22-.018-.438-.054-.653H2.054A4 4 0 0 0 2 8.403V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4ZM2.629 6.25H21.37a4.02 4.02 0 0 0-.247-.346L19.2 3.501A4 4 0 0 0 16.078 2H7.923a4 4 0 0 0-3.124 1.501L2.877 5.904a4.003 4.003 0 0 0-.248.346ZM9.25 10a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$4g = forwardRef(SvgPackageDashCentre);

var SvgPackageDashLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 8.403V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8.403a4 4 0 0 1 .054-.653h19.892c.036.215.054.433.054.653Zm-.629-2.153a4.02 4.02 0 0 0-.247-.346L19.2 3.501A4 4 0 0 0 16.078 2H7.923a4 4 0 0 0-3.124 1.501L2.877 5.904a4.003 4.003 0 0 0-.248.346H21.37ZM5 9.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H5ZM4.25 13a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$4f = forwardRef(SvgPackageDashLeft);

var SvgPackageDashRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 8.403V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8.403a4 4 0 0 1 .054-.653h19.892c.036.215.054.433.054.653Zm-.629-2.153a4.02 4.02 0 0 0-.247-.346L19.2 3.501A4 4 0 0 0 16.078 2H7.923a4 4 0 0 0-3.124 1.501L2.877 5.904a4.003 4.003 0 0 0-.248.346H21.37ZM16 18.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3ZM15.25 16a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$4e = forwardRef(SvgPackageDashRight);

var SvgPackageFavorite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Zm14-2.5H8v4.086c0 .89 1.077 1.337 1.707.707l1.586-1.586a1 1 0 0 1 1.414 0l1.586 1.586c.63.63 1.707.184 1.707-.707V3.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$4d = forwardRef(SvgPackageFavorite);

var SvgPackageSun = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.75 2a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0V2ZM5.166 5.166a.75.75 0 0 1-1.06 0l-.708-.707A.75.75 0 1 1 4.46 3.4l.707.707a.75.75 0 0 1 0 1.06Zm15.435-.707a.75.75 0 1 0-1.06-1.06l-.707.707a.75.75 0 1 0 1.06 1.06l.707-.707ZM18 16V9.75H6V16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2Zm-.586-7.92c.054.055.104.111.151.17H6.435a2.4 2.4 0 0 1 .15-.17l1.496-1.494A2 2 0 0 1 9.495 6h5.01a2 2 0 0 1 1.414.586l1.495 1.495ZM10.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75ZM12 20.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm-6.834-1.416a.75.75 0 0 1 0 1.06l-.707.707a.75.75 0 0 1-1.06-1.06l.707-.707a.75.75 0 0 1 1.06 0ZM22 12.75a.75.75 0 0 0 0-1.5h-1a.75.75 0 0 0 0 1.5h1ZM3.75 12a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75Zm15.79 8.601a.75.75 0 0 0 1.061-1.06l-.707-.707a.75.75 0 0 0-1.06 1.06l.707.707Z', clipRule: 'evenodd' })));
};
var ForwardRef$4c = forwardRef(SvgPackageSun);

var SvgPackage = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM9 6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm4 3.75a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5h2ZM12.75 21a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1Zm7.851-17.602a.75.75 0 0 1 0 1.061l-.707.707a.75.75 0 0 1-1.06-1.06l.707-.708a.75.75 0 0 1 1.06 0ZM5.166 19.894a.75.75 0 1 0-1.06-1.06l-.707.707a.75.75 0 1 0 1.06 1.06l.707-.707ZM22.75 12a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75ZM3 12.75a.75.75 0 0 0 0-1.5H2a.75.75 0 0 0 0 1.5h1Zm17.601 7.85a.75.75 0 0 1-1.06 0l-.707-.707a.75.75 0 1 1 1.06-1.06l.707.707a.75.75 0 0 1 0 1.06ZM4.106 5.166a.75.75 0 1 0 1.06-1.06l-.707-.708A.75.75 0 1 0 3.4 4.46l.707.707Z', clipRule: 'evenodd' })));
};
var ForwardRef$4b = forwardRef(SvgPackage);

var SvgPackagingAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 8.465v9.597a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8.465a4 4 0 0 1 .054-.653h19.892c.036.215.054.433.054.653Zm-.629-2.153a4.02 4.02 0 0 0-.247-.346L19.2 3.563a4 4 0 0 0-3.123-1.5H7.923a4 4 0 0 0-3.124 1.5L2.877 5.966a4.003 4.003 0 0 0-.248.346H21.37ZM15 14.812a.75.75 0 0 0 0-1.5h-2.25v-2.25a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H15Z', clipRule: 'evenodd' })));
};
var ForwardRef$4a = forwardRef(SvgPackagingAdd);

var SvgPackagingArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 18V8.403c0-.22-.018-.438-.054-.653H2.054A4 4 0 0 0 2 8.403V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4ZM2.629 6.25H21.37a4.02 4.02 0 0 0-.247-.346L19.2 3.501A4 4 0 0 0 16.078 2H7.923a4 4 0 0 0-3.125 1.5L2.877 5.904a4.003 4.003 0 0 0-.248.346Zm8.621 9.501-.72-.724a.747.747 0 0 0-1.06 0 .758.758 0 0 0 0 1.067l1.293 1.301a1.742 1.742 0 0 0 2.474 0l1.293-1.3a.758.758 0 0 0 0-1.068.747.747 0 0 0-1.06 0l-.72.724v-4.418a.752.752 0 0 0-.75-.755.752.752 0 0 0-.75.755v4.418Z', clipRule: 'evenodd' })));
};
var ForwardRef$49 = forwardRef(SvgPackagingArrowDown);

var SvgPackagingArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 18V8.403c0-.22-.018-.438-.054-.653H2.054A4 4 0 0 0 2 8.403V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Zm-.877-12.096c.09.111.172.227.248.346H2.63c.076-.12.159-.235.248-.346L4.8 3.501A4 4 0 0 1 7.922 2h8.156A4 4 0 0 1 19.2 3.5l1.922 2.403Zm-7.653 7.689-.72-.725v4.419a.752.752 0 0 1-.75.755.752.752 0 0 1-.75-.755v-4.418l-.72.724a.747.747 0 0 1-1.06 0 .758.758 0 0 1 0-1.068l1.293-1.3a1.742 1.742 0 0 1 2.474 0l1.293 1.3a.758.758 0 0 1 0 1.068.747.747 0 0 1-1.06 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$48 = forwardRef(SvgPackagingArrowUp);

var SvgPackagingCancel = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 8.403V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8.403a4 4 0 0 1 .054-.653h19.892c.036.215.054.433.054.653Zm-.629-2.153a4.02 4.02 0 0 0-.247-.346L19.2 3.501A4 4 0 0 0 16.078 2H7.923a4 4 0 0 0-3.125 1.5L2.877 5.904a4.003 4.003 0 0 0-.248.346H21.37ZM9.348 15.59a.75.75 0 1 0 1.061 1.061L12 15.061l1.591 1.59a.75.75 0 1 0 1.06-1.06L13.062 14l1.59-1.591a.75.75 0 0 0-1.06-1.06L12 12.938l-1.591-1.59a.75.75 0 1 0-1.06 1.06l1.59 1.59-1.59 1.592Z', clipRule: 'evenodd' })));
};
var ForwardRef$47 = forwardRef(SvgPackagingCancel);

var SvgPackagingDone = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 18.062V8.465c0-.22-.018-.438-.054-.653H2.054A4 4 0 0 0 2 8.465v9.597a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Zm-.877-12.096c.09.112.172.227.248.346H2.63c.076-.119.159-.234.248-.346L4.8 3.563a4 4 0 0 1 3.123-1.5h8.156a4 4 0 0 1 3.123 1.5l1.922 2.403Zm-5.559 6.59a.75.75 0 1 0-1.128-.988l-2.87 3.28a.25.25 0 0 1-.345.03L9.47 13.477a.75.75 0 1 0-.938 1.172l1.753 1.402a1.75 1.75 0 0 0 2.41-.214l2.87-3.28Z', clipRule: 'evenodd' })));
};
var ForwardRef$46 = forwardRef(SvgPackagingDone);

var SvgPackagingFavorite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 18V8.403c0-.22-.018-.438-.054-.653H2.054A4 4 0 0 0 2 8.403V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4ZM2.629 6.25H21.37a4.02 4.02 0 0 0-.247-.346L19.2 3.501A4 4 0 0 0 16.078 2H7.923a4 4 0 0 0-3.125 1.5L2.877 5.904a4.003 4.003 0 0 0-.248.346Zm9.636 5.667-.265.265-.265-.265a1.875 1.875 0 0 0-2.652 2.651l1.856 1.856a1.5 1.5 0 0 0 2.122 0l1.856-1.856a1.875 1.875 0 0 0-2.652-2.651Z', clipRule: 'evenodd' })));
};
var ForwardRef$45 = forwardRef(SvgPackagingFavorite);

var SvgPackagingLocationBox = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15 12.562h1.582c.264-.838.418-1.68.418-2.5 0-5.523-3.134-8-7-8s-7 2.477-7 8c0 3.281 2.47 6.9 4.476 9.296 1.043 1.246 2.708 1.523 4.026.83a3.469 3.469 0 0 1-.002-.126v-4a3.5 3.5 0 0 1 3.5-3.5Zm-5-2.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3 6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4Zm5.75 0a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$44 = forwardRef(SvgPackagingLocationBox);

var SvgPackagingLocation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 18V8.403c0-.22-.018-.438-.054-.653H2.054A4 4 0 0 0 2 8.403V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4ZM2.629 6.25H21.37a4.02 4.02 0 0 0-.247-.346L19.2 3.501A4 4 0 0 0 16.078 2H7.923a4 4 0 0 0-3.125 1.5L2.877 5.904a4.003 4.003 0 0 0-.248.346Zm10.02 11.086C13.531 16.376 15 14.546 15 13c0-2.21-1.343-3-3-3s-3 .79-3 3c0 1.546 1.469 3.376 2.35 4.336a.873.873 0 0 0 1.3 0ZM12 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$43 = forwardRef(SvgPackagingLocation);

var SvgPackagingMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 18V8.403c0-.22-.018-.438-.054-.653H2.054A4 4 0 0 0 2 8.403V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4ZM2.629 6.25H21.37a4.02 4.02 0 0 0-.247-.346L19.2 3.501A4 4 0 0 0 16.078 2H7.923a4 4 0 0 0-3.125 1.5L2.877 5.904a4.003 4.003 0 0 0-.248.346ZM15.75 14a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$42 = forwardRef(SvgPackagingMinus);

var SvgPackagingSearch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 18V8.403c0-.22-.018-.438-.054-.653H2.054A4 4 0 0 0 2 8.403V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Zm-.877-12.096c.09.111.172.227.248.346H2.63c.076-.12.159-.235.248-.346L4.8 3.501A4 4 0 0 1 7.922 2h8.156A4 4 0 0 1 19.2 3.5l1.922 2.403ZM9.75 14a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM12 10.25a3.75 3.75 0 1 0 2.068 6.879l.902.901a.75.75 0 1 0 1.06-1.06l-.901-.902A3.75 3.75 0 0 0 12 10.25Z', clipRule: 'evenodd' })));
};
var ForwardRef$41 = forwardRef(SvgPackagingSearch);

var SvgPackagingTime = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 18V8.403c0-.22-.018-.438-.054-.653H2.054A4 4 0 0 0 2 8.403V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Zm-.877-12.096c.09.111.172.227.248.346H2.63c.076-.12.159-.235.248-.346L4.8 3.501A4 4 0 0 1 7.922 2h8.156A4 4 0 0 1 19.2 3.5l1.922 2.403ZM16 14a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-4.223-2.1a.6.6 0 0 1 .6.6v1.57h.946a.6.6 0 1 1 0 1.2h-1.546a.6.6 0 0 1-.6-.6V12.5a.6.6 0 0 1 .6-.6Z', clipRule: 'evenodd' })));
};
var ForwardRef$40 = forwardRef(SvgPackagingTime);

var SvgPaperPin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7 7.828v2.344a2 2 0 0 1-.586 1.414C5.154 12.846 6.047 15 7.828 15h3.422v6a.75.75 0 0 0 1.5 0v-6h3.422c1.781 0 2.674-2.154 1.414-3.414A2 2 0 0 1 17 10.172V7.828a2 2 0 0 1 .586-1.414C18.846 5.154 17.953 3 16.172 3H7.828C6.047 3 5.154 5.154 6.414 6.414A2 2 0 0 1 7 7.828Z', clipRule: 'evenodd' })));
};
var ForwardRef$3$ = forwardRef(SvgPaperPin);

var SvgParcel = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 8.465v9.597a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8.465a4 4 0 0 1 .054-.653h19.892c.036.215.054.433.054.653Zm-.629-2.153a4.02 4.02 0 0 0-.247-.346L19.2 3.563a4 4 0 0 0-3.123-1.5H7.923a4 4 0 0 0-3.124 1.5L2.877 5.966a4.003 4.003 0 0 0-.248.346H21.37ZM8.25 13.46l-.72.72a.75.75 0 0 1-1.06-1.061l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.293a.75.75 0 0 1-1.06 1.06l-.72-.72v3.604a.75.75 0 0 1-1.5 0V13.46Zm5.28 1.487.72.72v-3.604a.75.75 0 0 1 1.5 0v3.604l.72-.72a.75.75 0 1 1 1.06 1.06L16.237 17.3a1.75 1.75 0 0 1-2.474 0l-1.293-1.293a.75.75 0 0 1 1.06-1.061Z', clipRule: 'evenodd' })));
};
var ForwardRef$3_ = forwardRef(SvgParcel);

var SvgPayoneer = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-3a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z', clipRule: 'evenodd' })));
};
var ForwardRef$3Z = forwardRef(SvgPayoneer);

var SvgPaypal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.5 3H13a5 5 0 0 1 0 10H9l-2 5H3L8.5 3ZM6 21l.55-1.5h1.466l2-5H13a6.5 6.5 0 0 0 6.473-7.097A5 5 0 0 1 16 16h-4l-2 5H6Z', clipRule: 'evenodd' })));
};
var ForwardRef$3Y = forwardRef(SvgPaypal);

var SvgPeopleCircleBelow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.508 16.234C5.272 16.69 3 17.756 3 19c0 1.657 4.03 3 9 3s9-1.343 9-3c0-1.244-2.272-2.311-5.508-2.766a3.5 3.5 0 0 1-6.984 0Z', clipRule: 'evenodd' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a4 4 0 0 0-4 4v1a1 1 0 0 0 1 1 1 1 0 0 1 1 1v3a2 2 0 1 0 4 0v-3a1 1 0 0 1 1-1 1 1 0 0 0 1-1v-1a4 4 0 0 0-4-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$3X = forwardRef(SvgPeopleCircleBelow);

var SvgPeople = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.5 16h-.626A4 4 0 0 0 4.8 17.44l-1.067 1.28C2.648 20.022 3.574 22 5.27 22h13.46c1.696 0 2.622-1.978 1.537-3.28L19.2 17.44A4 4 0 0 0 16.127 16H15.5a3.5 3.5 0 1 1-7 0Z', clipRule: 'evenodd' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a4 4 0 0 0-4 4v1a1 1 0 0 0 1 1 1 1 0 0 1 1 1v3a2 2 0 1 0 4 0v-3a1 1 0 0 1 1-1 1 1 0 0 0 1-1v-1a4 4 0 0 0-4-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$3W = forwardRef(SvgPeople);

var SvgPhoneLock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7 1.25A3.75 3.75 0 0 0 3.25 5v14A3.75 3.75 0 0 0 7 22.75h3.5a.75.75 0 0 0 0-1.5H7A2.25 2.25 0 0 1 4.75 19V5A2.25 2.25 0 0 1 7 2.75h8A2.25 2.25 0 0 1 17.25 5v5.5a.75.75 0 0 0 1.5 0V5A3.75 3.75 0 0 0 15 1.25H7Zm9 12.5c-.69 0-1.25.56-1.25 1.25v1h2.5v-1c0-.69-.56-1.25-1.25-1.25ZM13.25 15v1.145A2 2 0 0 0 12 18v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-1.25-1.855V15a2.75 2.75 0 1 0-5.5 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$3V = forwardRef(SvgPhoneLock);

var SvgPieChart = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.987.947a10.012 10.012 0 0 1 7.815 7.816c.219 1.083-.697 1.987-1.802 1.987h-6a2 2 0 0 1-2-2v-6c0-1.105.905-2.02 1.987-1.803ZM2 11.75a9 9 0 0 1 8.5-8.986V8.75a3.5 3.5 0 0 0 3.5 3.5h5.986A9 9 0 0 1 2 11.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$3U = forwardRef(SvgPieChart);

var SvgPillTablet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H8Zm0 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9-13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0V7Z', clipRule: 'evenodd' })));
};
var ForwardRef$3T = forwardRef(SvgPillTablet);

var SvgPillsCapsule = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.75 2a1.75 1.75 0 1 0 0 3.5h10.5a1.75 1.75 0 1 0 0-3.5H6.75ZM5 11a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-7Zm10 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$3S = forwardRef(SvgPillsCapsule);

var SvgPills = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.5 15c0-2.077-.745-3.98-1.983-5.457l4.935-4.934a7.001 7.001 0 0 1-2.97 10.938A8.61 8.61 0 0 0 17.5 15ZM9 6.5c-.184 0-.366.006-.547.017a7.001 7.001 0 0 1 10.938-2.97l-4.934 4.936A8.466 8.466 0 0 0 9 6.5ZM9 22a7.001 7.001 0 0 1-6.96-6.25h13.92A7.001 7.001 0 0 1 9 22Zm-6.96-7.75h13.92a7.001 7.001 0 0 0-13.92 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$3R = forwardRef(SvgPills);

var SvgPinCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.75 16.095C5.868 16.427 3 17.602 3 19c0 1.657 4.03 3 9 3s9-1.343 9-3c0-1.398-2.868-2.573-6.75-2.905V18a2.25 2.25 0 0 1-4.5 0v-1.905Z', clipRule: 'evenodd' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.75 7.905A3.001 3.001 0 0 0 12 2a3 3 0 0 0-.75 5.905V18a.75.75 0 0 0 1.5 0V7.905Z', clipRule: 'evenodd' })));
};
var ForwardRef$3Q = forwardRef(SvgPinCircle);

var SvgPin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.75 15H7.874A4 4 0 0 0 4.8 16.44l-1.067 1.28C2.648 19.022 3.574 21 5.27 21h13.46c1.696 0 2.622-1.978 1.537-3.28L19.2 16.44A4 4 0 0 0 16.127 15H14.25v1a2.25 2.25 0 0 1-4.5 0v-1Z', clipRule: 'evenodd' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.75 6.855a2 2 0 1 0-1.5 0V16a.75.75 0 0 0 1.5 0V6.855Z', clipRule: 'evenodd' })));
};
var ForwardRef$3P = forwardRef(SvgPin);

var SvgPinterestCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 12c0 5.523-4.477 10-10 10a9.966 9.966 0 0 1-2.41-.293l.004-.016 1.078-4.095a5.75 5.75 0 1 0-3.652-2.72.75.75 0 1 0 1.298-.752 4.25 4.25 0 1 1 2.735 2.02l1.172-4.453a.75.75 0 1 0-1.45-.382l-2.613 9.928A10.003 10.003 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10Z', clipRule: 'evenodd' })));
};
var ForwardRef$3O = forwardRef(SvgPinterestCircle);

var SvgPinterest = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M12 4.4c-3.045 0-5.474 2.297-5.474 5.086 0 .185.01.368.032.548.064.558-.178 1.14-.692 1.367-.76.337-1.661-.033-1.786-.854A7.064 7.064 0 0 1 4 9.486C4 5.33 7.603 2 12 2s8 3.331 8 7.486c0 4.154-3.603 7.485-8 7.485a8.58 8.58 0 0 1-1.45-.123L9.165 21.15c-.204.634-.91.99-1.577.797-.667-.193-1.043-.864-.84-1.498l4.043-12.571c.204-.634.91-.99 1.577-.797.667.193 1.043.864.84 1.498l-1.914 5.95c.23.028.466.042.705.042 3.045 0 5.474-2.297 5.474-5.085 0-2.789-2.43-5.086-5.474-5.086Z' })));
};
var ForwardRef$3N = forwardRef(SvgPinterest);

var SvgPlaster = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm19.834 9.794-10.04 10.04a3.98 3.98 0 0 1-5.628-5.628l10.04-10.04a3.98 3.98 0 1 1 5.628 5.628Zm-6.589-.454a1 1 0 0 0-1.414 0l-2.49 2.491a1 1 0 0 0 0 1.415l1.413 1.414a1 1 0 0 0 1.415 0l2.49-2.491a1 1 0 0 0 0-1.414L13.245 9.34Zm2.467-3.527a.75.75 0 0 1 1.061 0l1.414 1.414a.75.75 0 0 1-1.06 1.06l-1.415-1.414a.75.75 0 0 1 0-1.06Zm-8.838 9.9a.75.75 0 1 0-1.061 1.06l1.414 1.414a.75.75 0 1 0 1.06-1.06l-1.413-1.415Z', clipRule: 'evenodd' })));
};
var ForwardRef$3M = forwardRef(SvgPlaster);

var SvgPound = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.25 6.5a4.25 4.25 0 0 1 8.5 0V8a.75.75 0 0 1-1.5 0V6.5a2.75 2.75 0 1 0-5.5 0v2.069c0 .91-.116 1.81-.34 2.681H17a.75.75 0 0 1 0 1.5h-5.096c-.363.86-.838 1.673-1.418 2.419l-2.383 3.064c-.639.82-.054 2.017.986 2.017H19a.75.75 0 0 1 0 1.5H9.09c-2.29 0-3.576-2.632-2.171-4.438l2.383-3.064c.365-.47.683-.972.95-1.498H7a.75.75 0 0 1 0-1.5h3.853a9.247 9.247 0 0 0 .397-2.681V6.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$3L = forwardRef(SvgPound);

var SvgPress = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.75 8a5.25 5.25 0 0 1 10.5 0 .75.75 0 0 0 1.5 0 6.75 6.75 0 0 0-13.5 0 .75.75 0 1 0 1.5 0ZM10 13V7a2 2 0 1 1 4 0v6h2a4 4 0 0 1 4 4v.438a4 4 0 0 1-.527 1.984l-.321.563A4 4 0 0 1 15.679 22h-4.103a4 4 0 0 1-3.642-2.345l-2.649-5.827A2 2 0 0 1 7.106 11h.066a2 2 0 0 1 1.414.586L10 13Z', clipRule: 'evenodd' })));
};
var ForwardRef$3K = forwardRef(SvgPress);

var SvgPreviousArrow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21.03 14.333v1.185c0 1.543-1.674 2.505-3.007 1.727l-4.992-2.912v1.185c0 1.543-1.675 2.505-3.008 1.727l-6.03-3.518c-1.324-.771-1.324-2.683 0-3.455l6.03-3.518c1.333-.777 3.008.184 3.008 1.728v1.185l4.992-2.913c1.333-.777 3.008.184 3.008 1.728v5.851Z', clipRule: 'evenodd' })));
};
var ForwardRef$3J = forwardRef(SvgPreviousArrow);

var SvgProfitCart = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 3H6a4 4 0 0 0-1.5 7.71V7A1.5 1.5 0 0 1 6 5.5h12A1.5 1.5 0 0 1 19.5 7v3.71A4.001 4.001 0 0 0 18 3Zm0 16V7H6v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2Zm-6.75-6.604-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.293a.75.75 0 1 1-1.06 1.06l-.72-.72v4.19a.75.75 0 0 1-1.5 0v-4.19Z', clipRule: 'evenodd' })));
};
var ForwardRef$3I = forwardRef(SvgProfitCart);

var SvgProfitCoin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm10.53 4.866.72-.72V7.75a.75.75 0 0 0 1.5 0V4.146l.72.72a.75.75 0 1 0 1.06-1.06l-1.293-1.293a1.75 1.75 0 0 0-2.474 0L9.47 3.805a.75.75 0 0 0 1.06 1.061ZM6 10.75a2 2 0 1 0 0 4 2 2 0 1 0 0 4h4.5a5.5 5.5 0 0 1 6.416-5.424A2 2 0 0 0 15 10.75H6Zm14 8a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$3H = forwardRef(SvgProfitCoin);

var SvgProfit = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 3a8.753 8.753 0 0 0-8.114 5.469.75.75 0 0 0 1.39.562 7.253 7.253 0 0 1 13.863 1.45l-.804-.402a.75.75 0 1 0-.67 1.342l.894.447a2.748 2.748 0 0 0 2.88-.26l1.01-.758a.75.75 0 1 0-.9-1.2l-.913.685A8.752 8.752 0 0 0 12 3Zm-8.77 9.974c.032-.017.065-.031.099-.045a8.752 8.752 0 0 0 16.785 2.102.75.75 0 1 0-1.39-.562 7.253 7.253 0 0 1-13.788-1.08l.614.461a.75.75 0 1 0 .9-1.2l-1.011-.758a2.75 2.75 0 0 0-2.88-.26l-.894.447a.75.75 0 1 0 .67 1.342l.895-.447Zm9.52-6.724a.75.75 0 0 0-1.5 0v.854A2.751 2.751 0 0 0 12 12.5a1.25 1.25 0 1 1-1.25 1.25.75.75 0 0 0-1.5 0 2.75 2.75 0 0 0 2 2.646v.854a.75.75 0 0 0 1.5 0v-.854A2.751 2.751 0 0 0 12 11a1.25 1.25 0 1 1 1.25-1.25.75.75 0 0 0 1.5 0 2.75 2.75 0 0 0-2-2.646V6.25Z', clipRule: 'evenodd' })));
};
var ForwardRef$3G = forwardRef(SvgProfit);

var SvgPyramid = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm20.29 13-2.608-4.5H6.318L3.71 13h16.58Zm.869 1.5H2.841l-.435.75c-1.162 2.005.307 4.5 2.649 4.5h13.89c2.342 0 3.81-2.495 2.649-4.5l-.435-.75Zm-6.51-11.234L16.813 7H7.187l2.165-3.734c1.17-2.021 4.125-2.021 5.296 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$3F = forwardRef(SvgPyramid);

var SvgQrScan = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7 5.75c-.69 0-1.25.56-1.25 1.25v1a.75.75 0 0 1-1.5 0V7A2.75 2.75 0 0 1 7 4.25h10A2.75 2.75 0 0 1 19.75 7v1a.75.75 0 0 1-1.5 0V7c0-.69-.56-1.25-1.25-1.25H7Zm10 12.5c.69 0 1.25-.56 1.25-1.25v-1a.75.75 0 0 1 1.5 0v1A2.75 2.75 0 0 1 17 19.75H7A2.75 2.75 0 0 1 4.25 17v-1a.75.75 0 0 1 1.5 0v1c0 .69.56 1.25 1.25 1.25h10Zm-15-7a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5H2Z', clipRule: 'evenodd' })));
};
var ForwardRef$3E = forwardRef(SvgQrScan);

var SvgReceipt = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5 2h14a2 2 0 0 1 2 2v15.154a2 2 0 0 1-2.677 1.882l-1.562-.562a2 2 0 0 0-1.498.058L12.82 21.63a2 2 0 0 1-1.642 0l-2.442-1.1a2 2 0 0 0-1.498-.057l-1.562.562A2 2 0 0 1 3 19.154V4a2 2 0 0 1 2-2Zm12 5.75a.75.75 0 0 0 0-1.5H7a.75.75 0 0 0 0 1.5h10Zm.75 3.25a.75.75 0 0 1-.75.75H7a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75ZM12 15.75a.75.75 0 0 0 0-1.5H7a.75.75 0 0 0 0 1.5h5Z', clipRule: 'evenodd' })));
};
var ForwardRef$3D = forwardRef(SvgReceipt);

var SvgRedoCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm4.215-13.5a.75.75 0 0 0-1.5 0v.602a4.75 4.75 0 1 0 1.885 5.085.75.75 0 1 0-1.452-.374A3.252 3.252 0 0 1 8.75 12a3.25 3.25 0 0 1 5.398-2.439l-.833.212a.75.75 0 1 0 .37 1.454l1.965-.5a.75.75 0 0 0 .565-.727V7.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$3C = forwardRef(SvgRedoCircle);

var SvgRedoRectangleLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm.66 4.5a.75.75 0 0 1 1.5 0v.602a4.75 4.75 0 1 1-1.885 5.085.75.75 0 1 1 1.451-.374A3.252 3.252 0 0 0 15.124 12a3.25 3.25 0 0 0-5.398-2.439l.833.212a.75.75 0 0 1-.37 1.454l-1.965-.5A.75.75 0 0 1 7.66 10V7.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$3B = forwardRef(SvgRedoRectangleLeft);

var SvgRedoRectangleRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm9.215 4.5a.75.75 0 0 0-1.5 0v.602a4.75 4.75 0 1 0 1.885 5.085.75.75 0 1 0-1.452-.374A3.252 3.252 0 0 1 8.75 12a3.25 3.25 0 0 1 5.398-2.439l-.833.212a.75.75 0 1 0 .37 1.454l1.965-.5a.75.75 0 0 0 .565-.727V7.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$3A = forwardRef(SvgRedoRectangleRight);

var SvgRedo = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 3.75A8.25 8.25 0 1 0 20.25 12a.75.75 0 0 1 1.5 0c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25a9.723 9.723 0 0 1 7.046 3.01V3a.75.75 0 1 1 1.5 0v4.5a.75.75 0 0 1-.75.75h-4.421a.75.75 0 0 1 0-1.5h2.99a8.233 8.233 0 0 0-6.365-3Z', clipRule: 'evenodd' })));
};
var ForwardRef$3z = forwardRef(SvgRedo);

var SvgReloadCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm2.483-16.277a.75.75 0 0 0-1.394.554l.173.437A6.11 6.11 0 0 0 12 6.584C8.874 6.583 6.25 8.96 6.25 12c0 .485.068.956.195 1.405a.75.75 0 0 0 1.443-.41A3.63 3.63 0 0 1 7.75 12c0-2.115 1.853-3.917 4.25-3.917a4.5 4.5 0 0 1 2.213.572.75.75 0 0 0 1.065-.93l-.795-2.002Zm3.072 4.872a.75.75 0 0 0-1.443.41c.09.317.138.65.138.995 0 2.115-1.853 3.917-4.25 3.917-.814 0-1.57-.21-2.212-.573a.75.75 0 0 0-1.066.93l.795 2.003a.75.75 0 1 0 1.394-.554l-.173-.437c.406.085.829.13 1.262.13 3.126 0 5.75-2.377 5.75-5.416 0-.485-.068-.956-.195-1.405Z', clipRule: 'evenodd' })));
};
var ForwardRef$3y = forwardRef(SvgReloadCircle);

var SvgReloadRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm8.483 3.723a.75.75 0 0 0-1.394.554l.173.437A6.11 6.11 0 0 0 12 6.584C8.874 6.583 6.25 8.96 6.25 12c0 .485.068.956.195 1.405a.75.75 0 0 0 1.443-.41A3.63 3.63 0 0 1 7.75 12c0-2.115 1.853-3.917 4.25-3.917a4.5 4.5 0 0 1 2.213.572.75.75 0 0 0 1.065-.93l-.795-2.002Zm3.072 4.872a.75.75 0 0 0-1.443.41c.09.317.138.65.138.995 0 2.115-1.853 3.917-4.25 3.917-.814 0-1.57-.21-2.212-.573a.75.75 0 0 0-1.066.93l.795 2.003a.75.75 0 1 0 1.394-.554l-.173-.437c.406.085.829.13 1.262.13 3.126 0 5.75-2.377 5.75-5.416 0-.485-.068-.956-.195-1.405Z', clipRule: 'evenodd' })));
};
var ForwardRef$3x = forwardRef(SvgReloadRectangle);

var SvgReload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14.59 1.3a.75.75 0 0 1 .968.433l1.178 3.09a.75.75 0 0 1-1.08.915 7.25 7.25 0 0 0-9.937 9.886.75.75 0 1 1-1.298.752 8.75 8.75 0 0 1 10.27-12.703l-.535-1.406a.75.75 0 0 1 .434-.968Zm3.964 6.05a.75.75 0 0 1 1.025.274 8.75 8.75 0 0 1-10.27 12.703l.535 1.406a.75.75 0 0 1-1.402.534l-1.178-3.09a.75.75 0 0 1 1.08-.915 7.25 7.25 0 0 0 9.937-9.886.75.75 0 0 1 .273-1.025Z', clipRule: 'evenodd' })));
};
var ForwardRef$3w = forwardRef(SvgReload);

var SvgRestart = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2.75a9.25 9.25 0 1 0 8.289 13.36.75.75 0 1 1 1.343.668A10.75 10.75 0 0 1 12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12a.75.75 0 0 1-.987.711l-3-1a.75.75 0 0 1 .474-1.422l1.953.65A9.251 9.251 0 0 0 12 2.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$3v = forwardRef(SvgRestart);

var SvgReturnBox = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 25', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.999 2.75a.75.75 0 0 0-.588 1.216l1.586 2a.75.75 0 1 0 1.175-.932l-.621-.784h4.948a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 0 0 1.5h1.5a2.25 2.25 0 0 0 0-4.5h-6.5Zm-5.785 8.613 1.549-1.995a1 1 0 0 1 .79-.386h7.444l-2.698 3.594a1 1 0 0 1-.8.4H3.004a1 1 0 0 1-.79-1.613Zm9.783-2.381h7.447a1 1 0 0 1 .79.386l1.55 1.994a1 1 0 0 1-.79 1.614h-5.411a1 1 0 0 1-.79-.387l-2.796-3.607Zm-7.998 5.414h4.124a3.518 3.518 0 0 0 2.917-1.535l.966-1.428.966 1.428a3.518 3.518 0 0 0 2.916 1.535H20v5.411c0 1.625-1.343 2.943-3 2.943H7c-1.657 0-3-1.318-3-2.943v-5.411Z', clipRule: 'evenodd' })));
};
var ForwardRef$3u = forwardRef(SvgReturnBox);

var SvgReturnCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.75 12a9.25 9.25 0 0 1 16.651-5.55.75.75 0 0 0 1.311-.213l1-3a.75.75 0 0 0-1.424-.474l-.58 1.743A10.72 10.72 0 0 0 12 1.25C6.063 1.25 1.25 6.063 1.25 12a.75.75 0 0 0 1.5 0Zm20 0a.75.75 0 0 0-1.5 0 9.25 9.25 0 0 1-16.651 5.55.75.75 0 0 0-1.311.213l-1 3a.75.75 0 1 0 1.424.474l.58-1.743A10.72 10.72 0 0 0 12 22.75c5.937 0 10.75-4.813 10.75-10.75ZM7 9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9Zm6.75 1a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$3t = forwardRef(SvgReturnCircle);

var SvgReturn = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 25', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.752 5.394V7.18a.749.749 0 0 1-.74.756.749.749 0 0 1-.74-.756V5.326l-.655.62a.735.735 0 0 1-1.069-.056.773.773 0 0 1 .06-1.066l2.052-1.899a.492.492 0 0 1 .671 0l2.055 1.894a.78.78 0 0 1 .062 1.077.742.742 0 0 1-1.068.069l-.628-.571ZM2.214 11.363l1.549-1.995a1 1 0 0 1 .79-.386h7.444l-2.698 3.594a1 1 0 0 1-.8.4H3.004a1 1 0 0 1-.79-1.613Zm9.783-2.381h7.447a1 1 0 0 1 .79.386l1.55 1.994a1 1 0 0 1-.79 1.614h-5.411a1 1 0 0 1-.79-.387l-2.796-3.607Zm-3.874 5.414H4v5.411c0 1.625 1.343 2.943 3 2.943h10c1.657 0 3-1.318 3-2.943v-5.411h-4.11a3.518 3.518 0 0 1-2.917-1.535l-.966-1.428-.966 1.428a3.518 3.518 0 0 1-2.917 1.535Z', clipRule: 'evenodd' })));
};
var ForwardRef$3s = forwardRef(SvgReturn);

var SvgReward = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.408 2.518a2.17 2.17 0 0 0-2.816 0l-.715.61a2.17 2.17 0 0 1-1.235.512l-.937.074a2.17 2.17 0 0 0-1.99 1.991l-.075.937a2.17 2.17 0 0 1-.512 1.235l-.61.715a2.17 2.17 0 0 0 0 2.816l.61.715c.296.348.475.78.512 1.235l.074.937a2.17 2.17 0 0 0 1.991 1.99l.937.075a2.17 2.17 0 0 1 1.235.512l.715.61a2.17 2.17 0 0 0 2.816 0l.715-.61a2.17 2.17 0 0 1 1.235-.512l.937-.074a2.17 2.17 0 0 0 1.99-1.991l.075-.937a2.17 2.17 0 0 1 .512-1.235l.61-.715a2.17 2.17 0 0 0 0-2.816l-.61-.715a2.17 2.17 0 0 1-.512-1.235l-.074-.937a2.17 2.17 0 0 0-1.991-1.99l-.937-.075a2.17 2.17 0 0 1-1.235-.512l-.715-.61ZM7 20.523v-2.837c.19.047.386.079.586.095l.937.075a.67.67 0 0 1 .381.158l.715.61a3.67 3.67 0 0 0 4.762 0l.715-.61a.67.67 0 0 1 .381-.158l.937-.075c.2-.016.396-.048.586-.095v2.837a1 1 0 0 1-1.371.928l-3.258-1.303a1 1 0 0 0-.742 0L8.37 21.451A1 1 0 0 1 7 20.523Z', clipRule: 'evenodd' })));
};
var ForwardRef$3r = forwardRef(SvgReward);

var SvgRoadHorizontal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 5a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4H6Zm6.5 6.25a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5h1Zm6.25.75a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75ZM7 11.25a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h1Z', clipRule: 'evenodd' })));
};
var ForwardRef$3q = forwardRef(SvgRoadHorizontal);

var SvgRoadLocationHorizontal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16 6c0 1.157-.548 2.747-1.358 4-.736 1.14-1.69 2-2.642 2-.953 0-1.905-.86-2.642-2C8.548 8.747 8 7.157 8 6a4 4 0 1 1 8 0Zm-2.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6 8h.814c.286.987.745 1.98 1.284 2.814.428.662.953 1.3 1.566 1.787.605.481 1.402.899 2.336.899.934 0 1.731-.418 2.336-.899.613-.487 1.138-1.125 1.566-1.787.54-.835.998-1.827 1.284-2.814H18a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4Zm6.5 6.25a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5h1Zm6.25.75a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75ZM7 14.25a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h1Z', clipRule: 'evenodd' })));
};
var ForwardRef$3p = forwardRef(SvgRoadLocationHorizontal);

var SvgRoadLocation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 6c0 2.21-2 6-4 6s-4-3.79-4-6a4 4 0 0 1 8 0Zm-2.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-7 0c0-.706.133-1.38.375-2H8.386a2 2 0 0 0-1.873 1.298l-4.5 12A2 2 0 0 0 3.886 20h16.228a2 2 0 0 0 1.873-2.702l-1.736-4.63c-.598.455-1.363.832-2.251.832-.979 0-1.808-.458-2.428-.974-.63-.524-1.168-1.208-1.601-1.914a10.856 10.856 0 0 1-1.22-2.845V8a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 1.268-.541A5.648 5.648 0 0 1 12.5 6Zm.25 10a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1ZM12 10.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$3o = forwardRef(SvgRoadLocation);

var SvgRoadPinHorizontal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14 4a2 2 0 0 1-1.25 1.855V8h-1.5V5.855A2 2 0 1 1 14 4Zm-2.75 4v3a.75.75 0 0 0 1.5 0V8H18a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4h5.25Zm2 7a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75Zm3.75-.75a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5h1ZM8.75 15a.75.75 0 0 0-.75-.75H7a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$3n = forwardRef(SvgRoadPinHorizontal);

var SvgRoadPin = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21 5a3.001 3.001 0 0 1-2.25 2.905V12a.75.75 0 0 1-1.5 0V7.905A3.001 3.001 0 0 1 18 2a3 3 0 0 1 3 3Zm-5.25 3.898A4.497 4.497 0 0 1 13.611 4H8.386a2 2 0 0 0-1.873 1.298l-4.5 12A2 2 0 0 0 3.886 20h16.228a2 2 0 0 0 1.873-2.702l-1.795-4.787A2.25 2.25 0 0 1 15.75 12V8.898Zm-3 7.102a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1ZM12 10.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75ZM12.75 7a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0V7Z', clipRule: 'evenodd' })));
};
var ForwardRef$3m = forwardRef(SvgRoadPin);

var SvgRoad = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.386 4a2 2 0 0 0-1.873 1.298l-4.5 12A2 2 0 0 0 3.886 20h16.228a2 2 0 0 0 1.873-2.702l-4.5-12A2 2 0 0 0 15.614 4H8.386Zm4.364 12a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1ZM12 10.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75ZM12.75 7a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0V7Z', clipRule: 'evenodd' })));
};
var ForwardRef$3l = forwardRef(SvgRoad);

var SvgRoofHomeAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.18 22c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22h8.36ZM12 10.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V17a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V11a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$3k = forwardRef(SvgRoofHomeAdd);

var SvgRoofHomeArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.18 22H7.82c-2.31 0-4.18-1.786-4.18-3.99v-4.877a2.61 2.61 0 0 0-.82-1.888c-1.216-1.16-1.058-3.083.333-4.048L9.54 2.763a4.343 4.343 0 0 1 4.918 0l6.389 4.434c1.39.965 1.548 2.888.332 4.048a2.61 2.61 0 0 0-.82 1.888v4.878c0 2.203-1.87 3.989-4.18 3.989ZM14 17.75a.75.75 0 0 1 0-1.5h.787l-1.563-3.126a.25.25 0 0 0-.448 0l-1.21 2.423c-.646 1.29-2.486 1.29-3.131 0l-2.106-4.212a.75.75 0 1 1 1.342-.67l2.105 4.21a.25.25 0 0 0 .448 0l1.21-2.422c.646-1.29 2.486-1.29 3.131 0L16 15.323l.33-.658a.75.75 0 1 1 1.34.67l-1 2a.75.75 0 0 1-.67.415h-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$3j = forwardRef(SvgRoofHomeArrowDown);

var SvgRoofHomeArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.18 22H7.82c-2.31 0-4.18-1.786-4.18-3.99v-4.877a2.61 2.61 0 0 0-.82-1.888c-1.216-1.16-1.058-3.083.333-4.048L9.54 2.763a4.343 4.343 0 0 1 4.918 0l6.389 4.434c1.39.965 1.548 2.888.332 4.048a2.61 2.61 0 0 0-.82 1.888v4.878c0 2.203-1.87 3.989-4.18 3.989ZM14 10.25a.75.75 0 0 0 0 1.5h.787l-1.563 3.126a.25.25 0 0 1-.448 0l-1.21-2.423c-.646-1.29-2.486-1.29-3.131 0l-2.106 4.212a.75.75 0 1 0 1.342.67l2.105-4.21a.25.25 0 0 1 .448 0l1.21 2.422c.646 1.29 2.486 1.29 3.131 0L16 12.677l.33.658a.75.75 0 1 0 1.34-.67l-1-2a.75.75 0 0 0-.67-.415h-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$3i = forwardRef(SvgRoofHomeArrowUp);

var SvgRoofHomeCelsius = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Zm4.19-9.75c-1.25 0-2.26 1.01-2.26 2.25s1.01 2.25 2.26 2.25c.574 0 1.096-.212 1.495-.563a.75.75 0 1 1 .99 1.126 3.753 3.753 0 0 1-2.486.937A3.755 3.755 0 0 1 8.25 14.5a3.755 3.755 0 0 1 3.76-3.75 3.75 3.75 0 0 1 2.485.937.75.75 0 1 1-.99 1.126 2.253 2.253 0 0 0-1.496-.563ZM15.5 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$3h = forwardRef(SvgRoofHomeCelsius);

var SvgRoofHomeCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.18 22H7.82c-2.31 0-4.18-1.786-4.18-3.99v-4.877a2.61 2.61 0 0 0-.82-1.888c-1.216-1.16-1.058-3.083.333-4.048L9.54 2.763a4.343 4.343 0 0 1 4.918 0l6.389 4.434c1.39.965 1.548 2.888.332 4.048a2.61 2.61 0 0 0-.82 1.888v4.878c0 2.203-1.87 3.989-4.18 3.989Zm.444-9.584a.75.75 0 1 0-1.248-.832l-2.647 3.97a1.25 1.25 0 0 1-1.924.19L9.53 14.47a.75.75 0 0 0-1.06 1.06l1.275 1.275a2.75 2.75 0 0 0 4.232-.419l2.647-3.97Z', clipRule: 'evenodd' })));
};
var ForwardRef$3g = forwardRef(SvgRoofHomeCheck);

var SvgRoofHomeCloud = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.18 22H7.82c-2.31 0-4.18-1.786-4.18-3.99v-4.877a2.61 2.61 0 0 0-.82-1.888c-1.216-1.16-1.058-3.083.333-4.048L9.54 2.763a4.343 4.343 0 0 1 4.918 0l6.389 4.434c1.39.965 1.548 2.888.332 4.048a2.61 2.61 0 0 0-.82 1.888v4.878c0 2.203-1.87 3.989-4.18 3.989Zm-5.68-5a3.5 3.5 0 1 1 3.22-4.876A2.5 2.5 0 1 1 14.5 17h-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$3f = forwardRef(SvgRoofHomeCloud);

var SvgRoofHomeDownload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3.64 18.01c0 2.204 1.87 3.99 4.18 3.99h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878Zm9.11-2.82.72-.72a.75.75 0 1 1 1.06 1.06l-1.293 1.293a1.75 1.75 0 0 1-2.474 0L9.47 15.53a.75.75 0 1 1 1.06-1.06l.72.72V9a.75.75 0 0 1 1.5 0v6.19Z', clipRule: 'evenodd' })));
};
var ForwardRef$3e = forwardRef(SvgRoofHomeDownload);

var SvgRoofHomeEye = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.18 22H7.82c-2.31 0-4.18-1.786-4.18-3.99v-4.877a2.61 2.61 0 0 0-.82-1.888c-1.216-1.16-1.058-3.083.333-4.048L9.54 2.763a4.343 4.343 0 0 1 4.918 0l6.389 4.434c1.39.965 1.548 2.888.332 4.048a2.61 2.61 0 0 0-.82 1.888v4.878c0 2.203-1.87 3.989-4.18 3.989Zm-.189-9.097a1.486 1.486 0 0 1 0 2.194C15.08 15.954 13.631 17 12 17c-1.63 0-3.079-1.046-3.991-1.903a1.486 1.486 0 0 1 0-2.194c.912-.857 2.36-1.903 3.99-1.903 1.631 0 3.08 1.046 3.992 1.903ZM13 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$3d = forwardRef(SvgRoofHomeEye);

var SvgRoofHomeFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20.36 18.01c0 2.204-1.87 3.99-4.18 3.99H7.82c-2.31 0-4.18-1.786-4.18-3.99v-4.877a2.61 2.61 0 0 0-.82-1.888c-1.216-1.16-1.058-3.083.333-4.048L9.54 2.763a4.343 4.343 0 0 1 4.918 0l6.389 4.434c1.39.965 1.548 2.888.332 4.048a2.61 2.61 0 0 0-.82 1.888v4.878ZM12 11.713l.31-.31a2.187 2.187 0 1 1 3.093 3.095l-2.166 2.165a1.75 1.75 0 0 1-2.474 0l-2.166-2.165a2.188 2.188 0 0 1 3.094-3.094l.309.31Z', clipRule: 'evenodd' })));
};
var ForwardRef$3c = forwardRef(SvgRoofHomeFavourite);

var SvgRoofHomeFilter = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3.64 18.01c0 2.204 1.87 3.99 4.18 3.99h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878ZM7.25 12a.75.75 0 0 1 .75-.75h1.25V11a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.5 0v-.25H8a.75.75 0 0 1-.75-.75Zm4.75-.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Zm2.75 5V16a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-.25H16a.75.75 0 0 0 0-1.5h-1.25Zm-6.75 0a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5H8Z', clipRule: 'evenodd' })));
};
var ForwardRef$3b = forwardRef(SvgRoofHomeFilter);

var SvgRoofHomeFlash = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.18 22H7.82c-2.31 0-4.18-1.786-4.18-3.99v-4.877a2.61 2.61 0 0 0-.82-1.888c-1.216-1.16-1.058-3.083.333-4.048L9.54 2.763a4.343 4.343 0 0 1 4.918 0l6.389 4.434c1.39.965 1.548 2.888.332 4.048a2.61 2.61 0 0 0-.82 1.888v4.878c0 2.203-1.87 3.989-4.18 3.989ZM13.6 9.45a.75.75 0 1 0-1.2-.9l-3 4a.75.75 0 0 0 .6 1.2h2.5l-2.1 2.8a.75.75 0 1 0 1.2.9l3-4a.75.75 0 0 0-.6-1.2h-2.5l2.1-2.8Z', clipRule: 'evenodd' })));
};
var ForwardRef$3a = forwardRef(SvgRoofHomeFlash);

var SvgRoofHomeFluid = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20.36 18.01c0 2.204-1.87 3.99-4.18 3.99H7.82c-2.31 0-4.18-1.786-4.18-3.99v-4.877a2.61 2.61 0 0 0-.82-1.888c-1.216-1.16-1.058-3.083.333-4.048L9.54 2.763a4.343 4.343 0 0 1 4.918 0l6.389 4.434c1.39.965 1.548 2.888.332 4.048a2.61 2.61 0 0 0-.82 1.888v4.878ZM12 9s3.5 2.915 3.5 5.4c0 2.485-1.843 3.6-3.5 3.6s-3.5-1.115-3.5-3.6C8.5 11.915 12 9 12 9Z', clipRule: 'evenodd' })));
};
var ForwardRef$39 = forwardRef(SvgRoofHomeFluid);

var SvgRoofHomeGraph = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20.36 18.01c0 2.204-1.87 3.99-4.18 3.99H7.82c-2.31 0-4.18-1.786-4.18-3.99v-4.877a2.61 2.61 0 0 0-.82-1.888c-1.216-1.16-1.058-3.083.333-4.048L9.54 2.763a4.343 4.343 0 0 1 4.918 0l6.389 4.434c1.39.965 1.548 2.888.332 4.048a2.61 2.61 0 0 0-.82 1.888v4.878ZM8.75 12a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Zm7.25-.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75ZM12.75 10a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0v-8Z', clipRule: 'evenodd' })));
};
var ForwardRef$38 = forwardRef(SvgRoofHomeGraph);

var SvgRoofHomeInformation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.18 22c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22h8.36ZM12 11.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75ZM12 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$37 = forwardRef(SvgRoofHomeInformation);

var SvgRoofHomeLink = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Zm4.357-13.066a2.75 2.75 0 1 1 3.889 3.89l-.354.353a.75.75 0 1 1-1.06-1.06l.353-.354a1.25 1.25 0 1 0-1.768-1.768l-1.414 1.414a1.25 1.25 0 0 0 0 1.768l-1.06 1.06a2.75 2.75 0 0 1 0-3.889l1.414-1.414Zm-4.243 8.132a2.75 2.75 0 0 0 3.89 0l1.413-1.414a2.75 2.75 0 0 0 0-3.89l-1.06 1.061a1.25 1.25 0 0 1 0 1.768l-1.415 1.414a1.25 1.25 0 0 1-1.767-1.768l.353-.353a.75.75 0 1 0-1.06-1.06l-.354.353a2.75 2.75 0 0 0 0 3.889Z', clipRule: 'evenodd' })));
};
var ForwardRef$36 = forwardRef(SvgRoofHomeLink);

var SvgRoofHomeLocationBig = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22H7.82c-2.31 0-4.18-1.786-4.18-3.99v-4.877a2.61 2.61 0 0 0-.82-1.888c-1.216-1.16-1.058-3.083.333-4.048L9.54 2.763a4.343 4.343 0 0 1 4.918 0l6.389 4.434c1.39.965 1.548 2.888.332 4.048a2.61 2.61 0 0 0-.82 1.888v4.878c0 2.203-1.87 3.989-4.18 3.989H12Zm5-7c0 2.761-3 7-5 7s-5-4.239-5-7a5 5 0 0 1 10 0Zm-3.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$35 = forwardRef(SvgRoofHomeLocationBig);

var SvgRoofHomeLocation = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20.36 18.01c0 2.204-1.87 3.99-4.18 3.99H7.82c-2.31 0-4.18-1.786-4.18-3.99v-4.877a2.61 2.61 0 0 0-.82-1.888c-1.216-1.16-1.058-3.083.333-4.048L9.54 2.763a4.343 4.343 0 0 1 4.918 0l6.389 4.434c1.39.965 1.548 2.888.332 4.048a2.61 2.61 0 0 0-.82 1.888v4.878ZM15.5 13.6c0 2.485-3.5 5.4-3.5 5.4s-3.5-2.915-3.5-5.4c0-2.485 1.843-3.6 3.5-3.6s3.5 1.115 3.5 3.6Zm-2-.1a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$34 = forwardRef(SvgRoofHomeLocation);

var SvgRoofHomeLock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20.36 18.01c0 2.204-1.87 3.99-4.18 3.99H7.82c-2.31 0-4.18-1.786-4.18-3.99v-4.877a2.61 2.61 0 0 0-.82-1.888c-1.216-1.16-1.058-3.083.333-4.048L9.54 2.763a4.343 4.343 0 0 1 4.918 0l6.389 4.434c1.39.965 1.548 2.888.332 4.048a2.61 2.61 0 0 0-.82 1.888v4.878ZM12 9.75c-.69 0-1.25.56-1.25 1.25v1h2.5v-1c0-.69-.56-1.25-1.25-1.25ZM9.25 12c0 .048.004.095.013.14A2 2 0 0 0 8 14v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-1.263-1.86.752.752 0 0 0 .013-.14v-1a2.75 2.75 0 1 0-5.5 0v1Z', clipRule: 'evenodd' })));
};
var ForwardRef$33 = forwardRef(SvgRoofHomeLock);

var SvgRoofHomeMail = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.18 22H7.82c-2.31 0-4.18-1.786-4.18-3.99v-4.877a2.61 2.61 0 0 0-.82-1.888c-1.216-1.16-1.058-3.083.333-4.048L9.54 2.763a4.343 4.343 0 0 1 4.918 0l6.389 4.434c1.39.965 1.548 2.888.332 4.048a2.61 2.61 0 0 0-.82 1.888v4.878c0 2.203-1.87 3.989-4.18 3.989ZM7 12a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4Zm2.33.665a.75.75 0 0 1 1.005-.336l1.106.553a1.25 1.25 0 0 0 1.118 0l1.106-.553a.75.75 0 0 1 .67 1.342l-1.105.553a2.75 2.75 0 0 1-2.46 0l-1.105-.553a.75.75 0 0 1-.336-1.006Z', clipRule: 'evenodd' })));
};
var ForwardRef$32 = forwardRef(SvgRoofHomeMail);

var SvgRoofHomeMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.18 22H7.82c-2.31 0-4.18-1.786-4.18-3.99v-4.877a2.61 2.61 0 0 0-.82-1.888c-1.216-1.16-1.058-3.083.333-4.048L9.54 2.763a4.343 4.343 0 0 1 4.918 0l6.389 4.434c1.39.965 1.548 2.888.332 4.048a2.61 2.61 0 0 0-.82 1.888v4.878c0 2.203-1.87 3.989-4.18 3.989ZM15 14.75a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z', clipRule: 'evenodd' })));
};
var ForwardRef$31 = forwardRef(SvgRoofHomeMinus);

var SvgRoofHomeNotification = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.18 22c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22h8.36Zm-7.513-9.667a3.333 3.333 0 0 1 6.666 0v1.234c0 .595.247 1.164.68 1.571.713.668.24 1.862-.736 1.862H8.723c-.976 0-1.448-1.194-.736-1.862.434-.407.68-.976.68-1.57v-1.235ZM11 18.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$30 = forwardRef(SvgRoofHomeNotification);

var SvgRoofHomePower = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.18 22c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22h8.36ZM12 9.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm-2.438 2.6a.75.75 0 1 0-1.124-.992 4.75 4.75 0 1 0 7.125 0 .75.75 0 1 0-1.125.993 3.25 3.25 0 1 1-4.875 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$2$ = forwardRef(SvgRoofHomePower);

var SvgRoofHomeRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3.64 18.01c0 2.204 1.87 3.99 4.18 3.99h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878Zm11.012-1.358a.75.75 0 0 1-1.061 0L12 15.06l-1.591 1.59a.75.75 0 1 1-1.06-1.06L10.938 14l-1.59-1.591a.75.75 0 1 1 1.06-1.06L12 12.938l1.591-1.59a.75.75 0 1 1 1.06 1.06L13.062 14l1.59 1.591a.75.75 0 0 1 0 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$2_ = forwardRef(SvgRoofHomeRemove);

var SvgRoofHomeSetting = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3.64 18.01c0 2.204 1.87 3.99 4.18 3.99h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878ZM12.423 10h-.848c-.469 0-.849.358-.849.8a.666.666 0 0 1-.985.585l-.045-.024c-.406-.221-.925-.09-1.159.293l-.424.692c-.234.383-.095.872.31 1.093a.639.639 0 0 1 0 1.122.776.776 0 0 0-.31 1.093l.424.692c.234.383.753.514 1.16.293l.044-.024a.666.666 0 0 1 .985.585c0 .442.38.8.849.8h.848c.469 0 .849-.358.849-.8 0-.506.54-.827.985-.585l.045.024c.406.221.925.09 1.159-.293l.424-.692c.235-.383.095-.872-.31-1.093a.639.639 0 0 1 0-1.122.776.776 0 0 0 .31-1.093l-.424-.692c-.234-.383-.753-.514-1.16-.293l-.044.024a.666.666 0 0 1-.985-.585c0-.442-.38-.8-.849-.8ZM12 15.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z', clipRule: 'evenodd' })));
};
var ForwardRef$2Z = forwardRef(SvgRoofHomeSetting);

var SvgRoofHomeShare = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.18 22H7.82c-2.31 0-4.18-1.786-4.18-3.99v-4.877a2.61 2.61 0 0 0-.82-1.888c-1.216-1.16-1.058-3.083.333-4.048L9.54 2.763a4.343 4.343 0 0 1 4.918 0l6.389 4.434c1.39.965 1.548 2.888.332 4.048a2.61 2.61 0 0 0-.82 1.888v4.878c0 2.203-1.87 3.989-4.18 3.989ZM14.2 9.5a1.8 1.8 0 0 0-1.799 1.861l-1.973.986a1.8 1.8 0 1 0 0 2.805l1.973.987-.001.061a1.8 1.8 0 1 0 .672-1.403l-1.973-.986a1.769 1.769 0 0 0 0-.122l1.973-.986A1.8 1.8 0 1 0 14.2 9.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$2Y = forwardRef(SvgRoofHomeShare);

var SvgRoofHomeShield = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.18 22H7.82c-2.31 0-4.18-1.786-4.18-3.99v-4.877a2.61 2.61 0 0 0-.82-1.888c-1.216-1.16-1.058-3.083.333-4.048L9.54 2.763a4.343 4.343 0 0 1 4.918 0l6.389 4.434c1.39.965 1.548 2.888.332 4.048a2.61 2.61 0 0 0-.82 1.888v4.878c0 2.203-1.87 3.989-4.18 3.989ZM9.106 10.447l2-1a2 2 0 0 1 1.788 0l1.991.996c.683.34 1.12 1.042 1.08 1.804-.162 2.997-.89 4.392-2.852 5.94a1.802 1.802 0 0 1-2.226 0c-1.957-1.538-2.712-2.916-2.86-5.95-.036-.757.401-1.451 1.08-1.79Z', clipRule: 'evenodd' })));
};
var ForwardRef$2X = forwardRef(SvgRoofHomeShield);

var SvgRoofHomeUpload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3.64 18.01c0 2.204 1.87 3.99 4.18 3.99h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878Zm9.11-7.2.72.72a.75.75 0 1 0 1.06-1.06l-1.293-1.293a1.75 1.75 0 0 0-2.474 0L9.47 10.47a.75.75 0 1 0 1.06 1.06l.72-.72V17a.75.75 0 0 0 1.5 0v-6.19Z', clipRule: 'evenodd' })));
};
var ForwardRef$2W = forwardRef(SvgRoofHomeUpload);

var SvgRoofHomeWarning = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.18 22c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22h8.36ZM12 14.75a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75ZM12 16a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$2V = forwardRef(SvgRoofHomeWarning);

var SvgRoofHomeWave = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.18 22H7.82c-2.31 0-4.18-1.786-4.18-3.99v-4.877a2.61 2.61 0 0 0-.82-1.888c-1.216-1.16-1.058-3.083.333-4.048L9.54 2.763a4.343 4.343 0 0 1 4.918 0l6.389 4.434c1.39.965 1.548 2.888.332 4.048a2.61 2.61 0 0 0-.82 1.888v4.878c0 2.203-1.87 3.989-4.18 3.989Zm-6.43-9.5a.75.75 0 0 1 1.5 0v3a2.25 2.25 0 0 0 4.5 0 .75.75 0 0 1 .75-.75h.5a.75.75 0 0 0 0-1.5h-.5a2.25 2.25 0 0 0-2.25 2.25.75.75 0 0 1-1.5 0v-3a2.25 2.25 0 0 0-4.5 0v1a.75.75 0 0 1-.75.75H7a.75.75 0 0 0 0 1.5h.5a2.25 2.25 0 0 0 2.25-2.25v-1Z', clipRule: 'evenodd' })));
};
var ForwardRef$2U = forwardRef(SvgRoofHomeWave);

var SvgRoofHomeWifi = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.18 22c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22h8.36Zm-3.43-5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-4.462-3.712A5.231 5.231 0 0 1 12 11.75a5.23 5.23 0 0 1 3.712 1.538.75.75 0 1 0 1.06-1.061A6.731 6.731 0 0 0 12 10.25a6.731 6.731 0 0 0-4.773 1.977.75.75 0 0 0 1.06 1.06Zm2.121 2.121A2.24 2.24 0 0 1 12 14.75a2.24 2.24 0 0 1 1.591.659.75.75 0 1 0 1.06-1.06A3.74 3.74 0 0 0 12 13.25a3.74 3.74 0 0 0-2.652 1.098.75.75 0 0 0 1.061 1.061Z', clipRule: 'evenodd' })));
};
var ForwardRef$2T = forwardRef(SvgRoofHomeWifi);

var SvgRoofHome = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.18 22H7.82c-2.31 0-4.18-1.786-4.18-3.99v-4.877a2.61 2.61 0 0 0-.82-1.888c-1.216-1.16-1.058-3.083.333-4.048L9.54 2.763a4.343 4.343 0 0 1 4.918 0l6.389 4.434c1.39.965 1.548 2.888.332 4.048a2.61 2.61 0 0 0-.82 1.888v4.878c0 2.203-1.87 3.989-4.18 3.989Zm-7.887-6.69a.75.75 0 1 0-.586 1.38c1.629.691 2.97 1.063 4.335 1.06 1.366-.003 2.68-.382 4.255-1.061a.75.75 0 1 0-.594-1.378c-1.49.642-2.589.936-3.664.939-1.077.003-2.204-.286-3.746-.94Z', clipRule: 'evenodd' })));
};
var ForwardRef$2S = forwardRef(SvgRoofHome);

var SvgRotateLock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.75 12a9.25 9.25 0 0 1 18.44-1.06l-1.953-.651a.75.75 0 0 0-.474 1.422l3 1A.75.75 0 0 0 22.75 12c0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12 6.063 22.75 12 22.75a10.75 10.75 0 0 0 9.632-5.972.75.75 0 0 0-1.343-.667A9.25 9.25 0 0 1 2.75 12ZM12 7.75c-.69 0-1.25.56-1.25 1.25v1h2.5V9c0-.69-.56-1.25-1.25-1.25ZM9.25 10c0 .048.004.095.013.14A2 2 0 0 0 8 12v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-1.263-1.86.752.752 0 0 0 .013-.14V9a2.75 2.75 0 1 0-5.5 0v1Z', clipRule: 'evenodd' })));
};
var ForwardRef$2R = forwardRef(SvgRotateLock);

var SvgSafeBoxStar = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6Zm6.75 4a.75.75 0 0 0-1.5 0v1.309a4.74 4.74 0 0 0-2.69 1.416L7.045 7.85a.75.75 0 1 0-.75 1.3l1.412.815A4.732 4.732 0 0 0 7.25 12c0 .728.164 1.418.457 2.035l-1.412.816a.75.75 0 1 0 .75 1.298l1.515-.874a4.74 4.74 0 0 0 2.69 1.416V18a.75.75 0 0 0 1.5 0v-1.309a4.74 4.74 0 0 0 2.69-1.416l1.515.874a.75.75 0 1 0 .75-1.299l-1.412-.815A4.73 4.73 0 0 0 16.75 12c0-.728-.164-1.418-.457-2.035l1.412-.815a.75.75 0 0 0-.75-1.3l-1.514.875a4.74 4.74 0 0 0-2.69-1.416V6Zm-4 6a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$2Q = forwardRef(SvgSafeBoxStar);

var SvgSafeBox = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6Zm2 3.25A2.75 2.75 0 0 0 5.25 8v8A2.75 2.75 0 0 0 8 18.75h8A2.75 2.75 0 0 0 18.75 16v-1a.75.75 0 0 0-1.5 0v1c0 .69-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25V8c0-.69.56-1.25 1.25-1.25h8c.69 0 1.25.56 1.25 1.25v1a.75.75 0 0 0 1.5 0V8A2.75 2.75 0 0 0 16 5.25H8Zm5.3 6a1.5 1.5 0 1 0 0 1.5H18a.75.75 0 0 0 0-1.5h-4.7Z', clipRule: 'evenodd' })));
};
var ForwardRef$2P = forwardRef(SvgSafeBox);

var SvgScreenRotate = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14.166 2.491a.75.75 0 0 0-.332 1.463 8.263 8.263 0 0 1 6.212 6.212.75.75 0 0 0 1.371.225l1.223-2a.75.75 0 1 0-1.28-.782l-.371.607a9.768 9.768 0 0 0-6.823-5.725ZM3.955 13.834a.75.75 0 0 0-1.372-.226l-1.223 2a.75.75 0 1 0 1.28.783l.372-.608a9.768 9.768 0 0 0 6.822 5.725.75.75 0 1 0 .332-1.463 8.263 8.263 0 0 1-6.211-6.211ZM5.459 8.64a2 2 0 0 0 0 2.829l7.071 7.07a2 2 0 0 0 2.829 0l3.182-3.181a2 2 0 0 0 0-2.829l-7.071-7.07a2 2 0 0 0-2.829 0L5.46 8.641Z', clipRule: 'evenodd' })));
};
var ForwardRef$2O = forwardRef(SvgScreenRotate);

var SvgScreenshot = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.25 5A2.75 2.75 0 0 1 5 2.25h4a.75.75 0 0 1 0 1.5H5c-.69 0-1.25.56-1.25 1.25v4a.75.75 0 0 1-1.5 0V5ZM7 9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9Zm12 12.75A2.75 2.75 0 0 0 21.75 19v-4a.75.75 0 0 0-1.5 0v4c0 .69-.56 1.25-1.25 1.25h-4a.75.75 0 0 0 0 1.5h4Z', clipRule: 'evenodd' })));
};
var ForwardRef$2N = forwardRef(SvgScreenshot);

var SvgSdStorage = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20 6v12a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8.657a4 4 0 0 1 1.172-2.829l2.656-2.656A4 4 0 0 1 10.657 2H16a4 4 0 0 1 4 4Zm-2.25-1a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0V5ZM14 4.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75ZM11.75 5a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0V5Z', clipRule: 'evenodd' })));
};
var ForwardRef$2M = forwardRef(SvgSdStorage);

var SvgSecurity = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm5.378 4.943 4.998-2.221a4 4 0 0 1 3.249 0l4.978 2.212c1.455.647 2.41 2.101 2.309 3.691-.391 6.098-2.135 8.854-6.847 12.052a3.685 3.685 0 0 1-4.13 0c-4.697-3.181-6.505-5.9-6.865-12.073-.092-1.58.862-3.019 2.308-3.661Zm10.187 5.55a.75.75 0 1 0-1.13-.987l-2.87 3.28a.25.25 0 0 1-.344.03L9.47 11.414a.75.75 0 0 0-.937 1.171l1.752 1.403a1.75 1.75 0 0 0 2.41-.214l2.87-3.28Z', clipRule: 'evenodd' })));
};
var ForwardRef$2L = forwardRef(SvgSecurity);

var SvgSensor = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.46 5.459a.75.75 0 1 0-1.061-1.06 10.719 10.719 0 0 0-3.149 7.6c0 2.97 1.204 5.658 3.149 7.602a.75.75 0 1 0 1.06-1.06A9.219 9.219 0 0 1 2.75 12a9.219 9.219 0 0 1 2.71-6.541Zm14.14-1.06a.75.75 0 0 0-1.06 1.06 9.219 9.219 0 0 1 2.709 6.54 9.218 9.218 0 0 1-2.71 6.542.75.75 0 0 0 1.061 1.06A10.719 10.719 0 0 0 22.75 12c0-2.969-1.204-5.657-3.149-7.602ZM8.288 8.286a.75.75 0 0 0-1.061-1.06A6.731 6.731 0 0 0 5.25 12a6.73 6.73 0 0 0 1.977 4.773.75.75 0 0 0 1.06-1.06A5.231 5.231 0 0 1 6.75 12c0-1.45.587-2.762 1.538-3.713Zm8.485-1.06a.75.75 0 0 0-1.06 1.06A5.231 5.231 0 0 1 17.25 12a5.23 5.23 0 0 1-1.538 3.712.75.75 0 1 0 1.061 1.06A6.73 6.73 0 0 0 18.75 12a6.731 6.731 0 0 0-1.977-4.773ZM12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z', clipRule: 'evenodd' })));
};
var ForwardRef$2K = forwardRef(SvgSensor);

var SvgSetting = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.152 4h1.697c.937 0 1.697.716 1.697 1.6a1.333 1.333 0 0 0 1.97 1.17l.09-.048c.811-.442 1.85-.18 2.318.585l.848 1.386c.469.765.19 1.744-.62 2.186a1.277 1.277 0 0 0 0 2.242c.81.442 1.089 1.42.62 2.186l-.848 1.386c-.469.765-1.507 1.027-2.318.585l-.09-.049a1.333 1.333 0 0 0-1.97 1.171c0 .884-.76 1.6-1.697 1.6h-1.697c-.938 0-1.697-.716-1.697-1.6a1.333 1.333 0 0 0-1.97-1.17l-.09.049c-.812.441-1.85.18-2.319-.586l-.848-1.386c-.469-.765-.19-1.744.62-2.186a1.277 1.277 0 0 0 0-2.242c-.81-.442-1.089-1.42-.62-2.186l.848-1.386c.469-.765 1.507-1.027 2.318-.585l.09.049c.889.483 1.97-.16 1.97-1.171 0-.884.76-1.6 1.697-1.6ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', clipRule: 'evenodd' })));
};
var ForwardRef$2J = forwardRef(SvgSetting);

var SvgShield = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm5.314 5.566 4.998-2.221a4 4 0 0 1 3.249 0l4.978 2.212c1.455.647 2.41 2.101 2.309 3.691-.391 6.098-2.135 8.854-6.847 12.052a3.686 3.686 0 0 1-4.13 0c-4.697-3.181-6.505-5.9-6.865-12.073-.092-1.58.862-3.018 2.308-3.661Zm10.186 5.55a.75.75 0 1 0-1.128-.987l-2.87 3.28a.25.25 0 0 1-.345.03l-1.752-1.402a.75.75 0 1 0-.937 1.171l1.752 1.403a1.75 1.75 0 0 0 2.41-.215l2.87-3.28Z', clipRule: 'evenodd' })));
};
var ForwardRef$2I = forwardRef(SvgShield);

var SvgShipping = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19.65 9.336C20.53 8.376 22 6.546 22 5c0-2.21-1.343-3-3-3s-3 .79-3 3c0 1.546 1.469 3.376 2.35 4.336a.873.873 0 0 0 1.3 0ZM19 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9 12a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H9Zm2 1.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2ZM2.75 9c0-.69.56-1.25 1.25-1.25h10a.75.75 0 0 0 0-1.5H4A2.75 2.75 0 0 0 1.25 9v6A2.75 2.75 0 0 0 4 17.75h.846a.75.75 0 0 0 0-1.5H4c-.69 0-1.25-.56-1.25-1.25V9Z', clipRule: 'evenodd' })));
};
var ForwardRef$2H = forwardRef(SvgShipping);

var SvgShoppingBagAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.612 3H8.389a4 4 0 0 0-3.946 3.342l-1.667 10A4 4 0 0 0 6.722 21H12a1 1 0 0 0 1-1v-3a4 4 0 0 1 4-4h2.486a1 1 0 0 0 .987-1.164l-.916-5.494A4 4 0 0 0 15.612 3Zm.138 4a3.75 3.75 0 1 1-7.5 0V6a.75.75 0 0 1 1.5 0v1a2.25 2.25 0 0 0 4.5 0V6a.75.75 0 0 1 1.5 0v1Zm3 8a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25V21a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V15Z', clipRule: 'evenodd' })));
};
var ForwardRef$2G = forwardRef(SvgShoppingBagAdd);

var SvgShoppingBagCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.612 3H8.389a4 4 0 0 0-3.946 3.342l-1.667 10A4 4 0 0 0 6.722 21H12a1 1 0 0 0 1-1v-3a4 4 0 0 1 4-4h2.486a1 1 0 0 0 .987-1.164l-.916-5.494A4 4 0 0 0 15.612 3Zm.138 4a3.75 3.75 0 1 1-7.5 0V6a.75.75 0 0 1 1.5 0v1a2.25 2.25 0 0 0 4.5 0V6a.75.75 0 0 1 1.5 0v1Zm6.814 8.494a.75.75 0 0 0-1.128-.988l-2.87 3.28a.25.25 0 0 1-.345.03l-1.753-1.402a.75.75 0 1 0-.937 1.172l1.753 1.402a1.75 1.75 0 0 0 2.41-.214l2.87-3.28Z', clipRule: 'evenodd' })));
};
var ForwardRef$2F = forwardRef(SvgShoppingBagCheck);

var SvgShoppingBagFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.612 3H8.389a4 4 0 0 0-3.946 3.342l-1.667 10A4 4 0 0 0 6.722 21H12a1 1 0 0 0 1-1v-3a4 4 0 0 1 4-4h2.486a1 1 0 0 0 .987-1.164l-.916-5.494A4 4 0 0 0 15.612 3Zm.138 4a3.75 3.75 0 1 1-7.5 0V6a.75.75 0 0 1 1.5 0v1a2.25 2.25 0 0 0 4.5 0V6a.75.75 0 0 1 1.5 0v1Zm2.507 8.755.265-.265a1.875 1.875 0 1 1 2.652 2.652l-1.856 1.856a1.5 1.5 0 0 1-2.121 0l-1.857-1.856a1.875 1.875 0 1 1 2.652-2.652l.265.265Z', clipRule: 'evenodd' })));
};
var ForwardRef$2E = forwardRef(SvgShoppingBagFavourite);

var SvgShoppingBagMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.612 3H8.389a4 4 0 0 0-3.946 3.342l-1.667 10A4 4 0 0 0 6.722 21H12a1 1 0 0 0 1-1v-3a4 4 0 0 1 4-4h2.486a1 1 0 0 0 .987-1.164l-.916-5.494A4 4 0 0 0 15.612 3Zm.138 4a3.75 3.75 0 1 1-7.5 0V6a.75.75 0 0 1 1.5 0v1a2.25 2.25 0 0 0 4.5 0V6a.75.75 0 0 1 1.5 0v1ZM21 17.75a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0 0 1.5h6Z', clipRule: 'evenodd' })));
};
var ForwardRef$2D = forwardRef(SvgShoppingBagMinus);

var SvgShoppingBagRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.612 3H8.389a4 4 0 0 0-3.946 3.342l-1.667 10A4 4 0 0 0 6.722 21H12a1 1 0 0 0 1-1v-3a4 4 0 0 1 4-4h2.486a1 1 0 0 0 .987-1.164l-.916-5.494A4 4 0 0 0 15.612 3Zm.138 4a3.75 3.75 0 1 1-7.5 0V6a.75.75 0 0 1 1.5 0v1a2.25 2.25 0 0 0 4.5 0V6a.75.75 0 0 1 1.5 0v1Zm4.902 9.409a.75.75 0 0 0-1.061-1.06L18 16.938l-1.591-1.59a.75.75 0 0 0-1.06 1.06L16.938 18l-1.59 1.591a.75.75 0 1 0 1.06 1.06L18 19.062l1.591 1.59a.75.75 0 1 0 1.06-1.06L19.062 18l1.59-1.591Z', clipRule: 'evenodd' })));
};
var ForwardRef$2C = forwardRef(SvgShoppingBagRemove);

var SvgShoppingBag = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.389 3h7.223a4 4 0 0 1 3.945 3.342l1.667 10A4 4 0 0 1 17.278 21H6.722a4 4 0 0 1-3.946-4.658l1.667-10A4 4 0 0 1 8.389 3ZM12 10.75A3.75 3.75 0 0 0 15.75 7V6a.75.75 0 0 0-1.5 0v1a2.25 2.25 0 0 1-4.5 0V6a.75.75 0 1 0-1.5 0v1A3.75 3.75 0 0 0 12 10.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$2B = forwardRef(SvgShoppingBag);

var SvgShoppingBasketAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M14.4 3.45 16.313 6H7.688L9.6 3.45a.75.75 0 1 0-1.2-.9L5.805 6.01A4.005 4.005 0 0 0 2.17 9.25h19.66a4.005 4.005 0 0 0-3.634-3.24L15.6 2.55a.75.75 0 0 0-1.2.9Z' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21.827 10.75H2.173c.013.068.028.136.045.205l1.967 8A4 4 0 0 0 8.069 22h7.862a4 4 0 0 0 3.885-3.045l1.966-8c.017-.069.032-.137.045-.205ZM12 12.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V19a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V13a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$2A = forwardRef(SvgShoppingBasketAdd);

var SvgShoppingBasketArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.313 6 14.4 3.45a.75.75 0 0 1 1.2-.9l2.596 3.46a4.005 4.005 0 0 1 3.633 3.24H2.171a4.005 4.005 0 0 1 3.634-3.24L8.4 2.55a.75.75 0 0 1 1.2.9L7.688 6h8.625Z' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.173 10.75h19.654a4.078 4.078 0 0 1-.045.205l-1.966 8A4 4 0 0 1 15.93 22H8.07a4 4 0 0 1-3.884-3.045l-1.967-8a4.09 4.09 0 0 1-.045-.205Zm8.357 5.72.72.72V13a.75.75 0 0 1 1.5 0v4.19l.72-.72a.75.75 0 1 1 1.06 1.06l-1.293 1.293a1.75 1.75 0 0 1-2.474 0L9.47 17.53a.75.75 0 1 1 1.06-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$2z = forwardRef(SvgShoppingBasketArrowDown);

var SvgShoppingBasketArrowOut = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.313 6 14.4 3.45a.75.75 0 0 1 1.2-.9l2.596 3.46a4.005 4.005 0 0 1 3.633 3.24H2.171a4.005 4.005 0 0 1 3.634-3.24L8.4 2.55a.75.75 0 0 1 1.2.9L7.688 6h8.625Z' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.173 10.75h19.654a4.078 4.078 0 0 1-.045.205l-1.966 8A4 4 0 0 1 15.93 22H8.07a4 4 0 0 1-3.884-3.045l-1.967-8a4.09 4.09 0 0 1-.045-.205Zm8.357 4.366.72-.72v4.19a.75.75 0 0 0 1.5 0v-4.19l.72.72a.75.75 0 1 0 1.06-1.06l-1.293-1.293a1.75 1.75 0 0 0-2.474 0L9.47 14.056a.75.75 0 1 0 1.06 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$2y = forwardRef(SvgShoppingBasketArrowOut);

var SvgShoppingBasketCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 25', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.313 6 14.4 3.45a.75.75 0 1 1 1.2-.9l2.595 3.46a4.005 4.005 0 0 1 3.634 3.24H2.171a4.005 4.005 0 0 1 3.633-3.24L8.4 2.55a.75.75 0 0 1 1.2.9L7.688 6h8.625Z' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.173 10.75h19.654a4.08 4.08 0 0 1-.045.205l-1.966 8A4 4 0 0 1 15.93 22H8.07a4 4 0 0 1-3.885-3.045l-1.966-8a4.101 4.101 0 0 1-.045-.205Zm13.391 3.744a.75.75 0 1 0-1.129-.988l-2.87 3.28a.25.25 0 0 1-.344.03l-1.753-1.402a.75.75 0 0 0-.937 1.172l1.753 1.402a1.75 1.75 0 0 0 2.41-.214l2.87-3.28Z', clipRule: 'evenodd' })));
};
var ForwardRef$2x = forwardRef(SvgShoppingBasketCheck);

var SvgShoppingBasketDoubleDoor = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18.19 6.003 15.6 2.55a.75.75 0 0 0-1.2.9L16.312 6H7.687L9.6 3.45a.75.75 0 0 0-1.2-.9L5.81 6.003C3.912 6.076 2.404 7.48 2.07 9.25h19.86c-.334-1.769-1.842-3.174-3.74-3.247Zm2.092 12.805A3.973 3.973 0 0 1 16.4 22H7.6a3.972 3.972 0 0 1-3.882-3.192l-1.635-8a4.094 4.094 0 0 1-.011-.058h19.856l-.011.058-1.635 8ZM9 13.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm6.75.75a.75.75 0 0 0-1.5 0v4a.75.75 0 1 0 1.5 0v-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$2w = forwardRef(SvgShoppingBasketDoubleDoor);

var SvgShoppingBasketFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.313 6 14.4 3.45a.75.75 0 0 1 1.2-.9l2.596 3.46a4.005 4.005 0 0 1 3.633 3.24H2.171a4.005 4.005 0 0 1 3.634-3.24L8.4 2.55a.75.75 0 0 1 1.2.9L7.688 6h8.625Z' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.173 10.75h19.654a4.078 4.078 0 0 1-.045.205l-1.966 8A4 4 0 0 1 15.93 22H8.07a4 4 0 0 1-3.884-3.045l-1.967-8a4.09 4.09 0 0 1-.045-.205ZM12 14l.265-.265a1.875 1.875 0 1 1 2.652 2.651l-1.856 1.857a1.5 1.5 0 0 1-2.122 0l-1.856-1.857a1.875 1.875 0 0 1 2.652-2.651L12 14Z', clipRule: 'evenodd' })));
};
var ForwardRef$2v = forwardRef(SvgShoppingBasketFavourite);

var SvgShoppingBasketMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M16.313 6 14.4 3.45a.75.75 0 0 1 1.2-.9l2.596 3.46a4.005 4.005 0 0 1 3.633 3.24H2.171a4.005 4.005 0 0 1 3.634-3.24L8.4 2.55a.75.75 0 0 1 1.2.9L7.688 6h8.625Z' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.173 10.75h19.654a4.078 4.078 0 0 1-.045.205l-1.966 8A4 4 0 0 1 15.93 22H8.07a4 4 0 0 1-3.884-3.045l-1.967-8a4.09 4.09 0 0 1-.045-.205Zm12.827 6a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z', clipRule: 'evenodd' })));
};
var ForwardRef$2u = forwardRef(SvgShoppingBasketMinus);

var SvgShoppingBasketRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M14.4 3.45 16.313 6H7.688L9.6 3.45a.75.75 0 1 0-1.2-.9L5.805 6.01A4.005 4.005 0 0 0 2.17 9.25h19.66a4.005 4.005 0 0 0-3.634-3.24L15.6 2.55a.75.75 0 0 0-1.2.9Z' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21.827 10.75H2.173c.013.068.028.136.045.205l1.967 8A4 4 0 0 0 8.069 22h7.862a4 4 0 0 0 3.885-3.045l1.966-8c.017-.069.032-.137.045-.205Zm-7.175 7.902a.75.75 0 0 1-1.061 0L12 17.06l-1.591 1.59a.75.75 0 1 1-1.06-1.06L10.938 16l-1.59-1.591a.75.75 0 1 1 1.06-1.06L12 14.938l1.591-1.59a.75.75 0 0 1 1.06 1.06L13.062 16l1.59 1.591a.75.75 0 0 1 0 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$2t = forwardRef(SvgShoppingBasketRemove);

var SvgShoppingBasketSimple = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14.4 3.45 16.313 6H7.688L9.6 3.45a.75.75 0 1 0-1.2-.9L5.805 6.01A4.005 4.005 0 0 0 2.17 9.25h19.66a4.005 4.005 0 0 0-3.634-3.24L15.6 2.55a.75.75 0 0 0-1.2.9Zm7.427 7.3H2.173c.013.068.028.136.045.205l1.967 8A4 4 0 0 0 8.069 22h7.862a4 4 0 0 0 3.885-3.045l1.966-8c.017-.069.032-.137.045-.205Z', clipRule: 'evenodd' })));
};
var ForwardRef$2s = forwardRef(SvgShoppingBasketSimple);

var SvgShoppingBasketSingleDoor = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M17.469 3.586a.75.75 0 1 0-.937-1.172L12.05 6H5.965C3.995 6 2.413 7.433 2.07 9.25h19.86C21.588 7.433 20.007 6 18.036 6h-3.584l3.018-2.414Z' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20.282 18.808A3.972 3.972 0 0 1 16.4 22H7.6a3.972 3.972 0 0 1-3.882-3.192l-1.635-8a4.094 4.094 0 0 1-.011-.058h19.856a3.96 3.96 0 0 1-.011.058l-1.635 8ZM9 13.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm6.75.75a.75.75 0 1 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$2r = forwardRef(SvgShoppingBasketSingleDoor);

var SvgShoppingBasket = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.25 5v1.064C3.62 6.362 2.37 7.66 2.07 9.25h19.86c-.3-1.591-1.55-2.888-3.18-3.186V5A2.75 2.75 0 0 0 16 2.25H8A2.75 2.75 0 0 0 5.25 5ZM8 3.75c-.69 0-1.25.56-1.25 1.25v1h10.5V5c0-.69-.56-1.25-1.25-1.25H8Zm13.928 7H2.072l.011.058 1.635 8A3.972 3.972 0 0 0 7.6 22h8.8a3.972 3.972 0 0 0 3.882-3.192l1.635-8 .011-.058ZM9 13.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm6.75.75a.75.75 0 0 0-1.5 0v4a.75.75 0 1 0 1.5 0v-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$2q = forwardRef(SvgShoppingBasket);

var SvgShutDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.75 2a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0V2ZM8.3 3.52a.75.75 0 0 0-.6-1.375A10.752 10.752 0 0 0 1.25 12c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12c0-4.41-2.655-8.197-6.45-9.855a.75.75 0 0 0-.6 1.374 9.25 9.25 0 1 1-7.4 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$2p = forwardRef(SvgShutDown);

var SvgSignalCellularBad = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15 20H4.148c-1.965 0-2.894-2.331-1.434-3.596l13.708-11.87C17.802 3.339 20 4.28 20 6.067V13a1 1 0 0 1-1 1h-2a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1Zm7.28-3.72a.75.75 0 1 0-1.06-1.06l-1.47 1.47-1.47-1.47a.75.75 0 1 0-1.06 1.06l1.47 1.47-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 1 0 1.06-1.06l-1.47-1.47 1.47-1.47Z', clipRule: 'evenodd' })));
};
var ForwardRef$2o = forwardRef(SvgSignalCellularBad);

var SvgSignalCellularLine = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21.75 4a.75.75 0 0 0-1.5 0v16a.75.75 0 0 0 1.5 0V4Zm-6 4a.75.75 0 0 0-1.5 0v12a.75.75 0 0 0 1.5 0V8ZM9 11.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0v-8a.75.75 0 0 1 .75-.75ZM3.75 16a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$2n = forwardRef(SvgSignalCellularLine);

var SvgSignalCellularNoInternetDashed = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20 3.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75Zm-6 4a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75ZM8.75 12a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0v-8ZM2 15.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75ZM21.06 18l1.47-1.47a.75.75 0 1 0-1.06-1.06L20 16.94l-1.47-1.47a.75.75 0 1 0-1.06 1.06L18.94 18l-1.47 1.47a.75.75 0 1 0 1.06 1.06L20 19.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L21.06 18Z', clipRule: 'evenodd' })));
};
var ForwardRef$2m = forwardRef(SvgSignalCellularNoInternetDashed);

var SvgSignalCellularNoInternet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19 9.75h2V6.067c0-1.786-2.198-2.728-3.578-1.533L3.714 16.404C2.254 17.669 3.184 20 5.148 20H16.75v-8A2.25 2.25 0 0 1 19 9.75Zm.75 2.25a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Zm0 7a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1Z', clipRule: 'evenodd' })));
};
var ForwardRef$2l = forwardRef(SvgSignalCellularNoInternet);

var SvgSignalCellularOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.148 19c-1.965 0-2.894-2.331-1.434-3.596l5.696-4.933-6.94-6.94A.75.75 0 0 1 3.53 2.47l18 18a.75.75 0 1 1-1.06 1.06L17.94 19H5.147ZM21 16.937V5.067c0-1.786-2.198-2.728-3.578-1.533l-5.803 5.025 9.203 9.202a1.99 1.99 0 0 0 .178-.824Z', clipRule: 'evenodd' })));
};
var ForwardRef$2k = forwardRef(SvgSignalCellularOff);

var SvgSignalCellular = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M18.856 20H5.148c-1.965 0-2.894-2.331-1.434-3.596l13.708-11.87C18.802 3.339 21 4.28 21 6.067v11.87c0 1.14-.96 2.063-2.144 2.063Z' })));
};
var ForwardRef$2j = forwardRef(SvgSignalCellular);

var SvgSignpostBig = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.5 3h-1a1 1 0 0 0-1 1v.5h3V4a1 1 0 0 0-1-1Zm-1 20h1a1 1 0 0 0 1-1v-.5h-3v.5a1 1 0 0 0 1 1Zm2-10.5v1h-3v-1h3Zm3.5-1H5.414a1 1 0 0 1-.707-.293l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 .707-.293H17a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Zm-10 3h11.586a1 1 0 0 1 .707.293l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-.707.293H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Z', clipRule: 'evenodd' })));
};
var ForwardRef$2i = forwardRef(SvgSignpostBig);

var SvgSignpostRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.5 2h-1a1 1 0 0 0-1 1v1.314l3-.804V3a1 1 0 0 0-1-1Zm-1 20h1a1 1 0 0 0 1-1v-1h-3v1a1 1 0 0 0 1 1Zm-1-10.51 3-.804V13h-3v-1.51Zm0-6.176L5.557 6.638a1 1 0 0 0-.707 1.225l.776 2.898a1 1 0 0 0 1.225.707l3.649-.978 3-.804 3.512-.94a1 1 0 0 0 .657-.565l.771-1.76a1 1 0 0 0-.323-1.207l-1.548-1.138a1 1 0 0 0-.851-.16L13.5 4.51l-3 .804Zm0 8.686H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10.52a1 1 0 0 0 .78-.375l1.2-1.5a1 1 0 0 0 0-1.25l-1.2-1.5a1 1 0 0 0-.78-.375H10.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$2h = forwardRef(SvgSignpostRight);

var SvgSignpostSmall = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.5 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-1ZM4 9h5.5V5H4L2 7l2 2Zm0 8h5.5v-4H4l-2 2 2 2Zm10.5-8H20l2 2-2 2h-5.5V9Z', clipRule: 'evenodd' })));
};
var ForwardRef$2g = forwardRef(SvgSignpostSmall);

var SvgSignpostTop = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.5 2h-1a1 1 0 0 0-1 1v2.938l3-1.732V3a1 1 0 0 0-1-1Zm-2 19v-4.67l3-1.732V21a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1Zm0-13.33L3.866 11.5a1 1 0 0 0-.366 1.366l2 3.464a1 1 0 0 0 1.366.366l3.634-2.098 3-1.732 5.131-2.963a1 1 0 0 0 .466-.607l.732-2.732a1 1 0 0 0-.707-1.225l-2.732-.732a1 1 0 0 0-.758.1L13.5 5.937l-3 1.733Z', clipRule: 'evenodd' })));
};
var ForwardRef$2f = forwardRef(SvgSignpostTop);

var SvgSignpost = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M11.5 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-1Zm-2 10H5.414a1 1 0 0 1-.707-.293l-2-2a1 1 0 0 1 0-1.414l2-2A1 1 0 0 1 5.414 6H9.5v6Zm5 0H19l3 3-3 3h-4.5v-6Z', clipRule: 'evenodd' })));
};
var ForwardRef$2e = forwardRef(SvgSignpost);

var SvgSimCard = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M4 18V6a4 4 0 0 1 4-4h5.343a4 4 0 0 1 2.829 1.172l2.656 2.656A4 4 0 0 1 20 8.657V18a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Zm7.25 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm.75-4.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$2d = forwardRef(SvgSimCard);

var SvgSkype = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 20a8 8 0 0 1-7.943-8.958 5 5 0 1 1 6.986-6.986 8 8 0 0 1 8.9 8.9 5 5 0 1 1-6.986 6.986A8.092 8.092 0 0 1 12 20Zm-.5-12.75a2.75 2.75 0 0 0 0 5.5h1a1.25 1.25 0 1 1 0 2.5h-1c-.69 0-1.25-.56-1.25-1.25a.75.75 0 0 0-1.5 0 2.75 2.75 0 0 0 2.75 2.75h1a2.75 2.75 0 1 0 0-5.5h-1a1.25 1.25 0 1 1 0-2.5h1c.69 0 1.25.56 1.25 1.25a.75.75 0 0 0 1.5 0 2.75 2.75 0 0 0-2.75-2.75h-1Z', clipRule: 'evenodd' })));
};
var ForwardRef$2c = forwardRef(SvgSkype);

var SvgSlack = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.319 6.138a2 2 0 1 1 2-2v2h-2Zm5.311-3.902a2 2 0 0 0-2 2v5a2 2 0 0 0 4 0v-5a2 2 0 0 0-2-2Zm5.212 9a2 2 0 1 0-2-2v2h2Zm-3.212 8.626a2 2 0 0 0-2-2h-2v2a2 2 0 0 0 4 0ZM2.15 14.637a2 2 0 0 1 2-2h2v2a2 2 0 1 1-4 0Zm7.14-2a2 2 0 0 0-2 2v5.225a2 2 0 1 0 4 0v-5.225a2 2 0 0 0-2-2Zm.13-5.4a2 2 0 1 1 0 4H4.15a2 2 0 1 1 0-4h5.27Zm12.423 7.4a2 2 0 0 0-2-2H14.63a2 2 0 0 0 0 4h5.212a2 2 0 0 0 2-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$2b = forwardRef(SvgSlack);

var SvgSmartAirConditioning = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2.75a5.23 5.23 0 0 0-3.712 1.538.75.75 0 0 1-1.061-1.061A6.731 6.731 0 0 1 12 1.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 0 1-1.06 1.06A5.231 5.231 0 0 0 12 2.75Zm0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 0 1-1.06-1.06A3.74 3.74 0 0 1 12 4.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.061 1.061A2.24 2.24 0 0 0 12 5.75ZM22 12a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2c0 .084.003.167.008.25h19.984A4.06 4.06 0 0 0 22 14v-2Zm-.402 3.75H2.402A4 4 0 0 0 6 18h12a4 4 0 0 0 3.598-2.25ZM16.75 20.5a.75.75 0 0 0-1.5 0V22a.75.75 0 0 0 1.5 0v-1.5ZM12 19.75a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm-3.25.75a.75.75 0 0 0-1.5 0V22a.75.75 0 0 0 1.5 0v-1.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$2a = forwardRef(SvgSmartAirConditioning);

var SvgSmartDoor = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.288 4.288A5.231 5.231 0 0 1 12 2.75a5.23 5.23 0 0 1 3.712 1.538.75.75 0 0 0 1.061-1.061A6.731 6.731 0 0 0 12 1.25a6.731 6.731 0 0 0-4.773 1.977.75.75 0 0 0 1.06 1.06Zm2.121 2.121A2.24 2.24 0 0 1 12 5.75a2.24 2.24 0 0 1 1.591.659.75.75 0 0 0 1.06-1.06A3.74 3.74 0 0 0 12 4.25a3.74 3.74 0 0 0-2.652 1.098.75.75 0 0 0 1.061 1.061ZM14 8a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4h4Zm-5 4.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$29 = forwardRef(SvgSmartDoor);

var SvgSmartHumidity = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20 14c0-4.163-4.546-8.87-6.784-10.933a1.779 1.779 0 0 0-2.431 0C8.546 5.13 4 9.837 4 14c0 5.523 4.213 8 8 8s8-2.477 8-8Zm-8 4.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3.712-4.462A5.231 5.231 0 0 1 12 12.75a5.23 5.23 0 0 1 3.712 1.538.75.75 0 1 0 1.06-1.061A6.732 6.732 0 0 0 12 11.25a6.732 6.732 0 0 0-4.773 1.977.75.75 0 0 0 1.06 1.06Zm2.121 2.121A2.24 2.24 0 0 1 12 15.75a2.24 2.24 0 0 1 1.591.659.75.75 0 1 0 1.06-1.06A3.74 3.74 0 0 0 12 14.25a3.74 3.74 0 0 0-2.652 1.098.75.75 0 1 0 1.061 1.061Z', clipRule: 'evenodd' })));
};
var ForwardRef$28 = forwardRef(SvgSmartHumidity);

var SvgSmartKeyDotted = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.25 6A4.75 4.75 0 0 1 10 1.25h4A4.75 4.75 0 0 1 18.75 6v7a.75.75 0 0 1-1.5 0V6A3.25 3.25 0 0 0 14 2.75h-4A3.25 3.25 0 0 0 6.75 6v12A3.25 3.25 0 0 0 10 21.25h8a.75.75 0 0 1 0 1.5h-8A4.75 4.75 0 0 1 5.25 18V6ZM20.5 19h-7a1.5 1.5 0 0 1 0-3h7a1.5 1.5 0 0 1 0 3ZM12 6.5A.75.75 0 1 0 12 5a.75.75 0 0 0 0 1.5Zm-2-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm4.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-2 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 12.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-2-3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm6.25-3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$27 = forwardRef(SvgSmartKeyDotted);

var SvgSmartKey = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.25 6A4.75 4.75 0 0 1 10 1.25h4A4.75 4.75 0 0 1 18.75 6v7a.75.75 0 0 1-1.5 0V6A3.25 3.25 0 0 0 14 2.75h-4A3.25 3.25 0 0 0 6.75 6v12A3.25 3.25 0 0 0 10 21.25h8a.75.75 0 0 1 0 1.5h-8A4.75 4.75 0 0 1 5.25 18V6Zm4.304 1.865c.639-.7 1.505-1.115 2.446-1.115.941 0 1.807.416 2.447 1.115a.75.75 0 1 0 1.107-1.012C14.656 5.873 13.401 5.25 12 5.25c-1.402 0-2.657.623-3.554 1.603a.75.75 0 0 0 1.108 1.012Zm1.5 2.32c.255-.279.59-.435.946-.435s.69.156.946.436a.75.75 0 1 0 1.107-1.012A2.777 2.777 0 0 0 12 8.25c-.816 0-1.541.363-2.054.924a.75.75 0 0 0 1.107 1.012ZM12 12.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm1.5 6.5h7a1.5 1.5 0 0 0 0-3h-7a1.5 1.5 0 0 0 0 3Z', clipRule: 'evenodd' })));
};
var ForwardRef$26 = forwardRef(SvgSmartKey);

var SvgSmartLight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.288 4.288A5.231 5.231 0 0 1 12 2.75a5.23 5.23 0 0 1 3.712 1.538.75.75 0 0 0 1.061-1.061A6.731 6.731 0 0 0 12 1.25a6.731 6.731 0 0 0-4.773 1.977.75.75 0 0 0 1.06 1.06Zm2.121 2.121A2.24 2.24 0 0 1 12 5.75a2.24 2.24 0 0 1 1.591.659.75.75 0 0 0 1.06-1.06A3.74 3.74 0 0 0 12 4.25a3.74 3.74 0 0 0-2.652 1.098.75.75 0 0 0 1.061 1.061Zm-2.536 2.62A2 2 0 0 1 9.62 8h4.758a2 2 0 0 1 1.748 1.029l2.222 4C19.088 14.362 18.125 16 16.6 16h-3.85v5.25H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25V16H7.399c-1.525 0-2.489-1.638-1.748-2.971l2.222-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$25 = forwardRef(SvgSmartLight);

var SvgSmartLock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.75 6a3.25 3.25 0 0 1 6.5 0v2h-6.5V6ZM7.253 8.07A.759.759 0 0 1 7.25 8V6a4.75 4.75 0 0 1 9.5 0v2a.763.763 0 0 1-.003.07A4.001 4.001 0 0 1 20 12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6a4.001 4.001 0 0 1 3.253-3.93ZM12.75 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-4.462-3.712A5.231 5.231 0 0 1 12 12.75a5.23 5.23 0 0 1 3.712 1.538.75.75 0 1 0 1.06-1.061A6.731 6.731 0 0 0 12 11.25a6.731 6.731 0 0 0-4.773 1.977.75.75 0 0 0 1.06 1.06Zm2.121 2.121A2.24 2.24 0 0 1 12 15.75a2.24 2.24 0 0 1 1.591.659.75.75 0 1 0 1.06-1.06A3.74 3.74 0 0 0 12 14.25a3.74 3.74 0 0 0-2.652 1.098.75.75 0 0 0 1.061 1.061Z', clipRule: 'evenodd' })));
};
var ForwardRef$24 = forwardRef(SvgSmartLock);

var SvgSmartMusic = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.288 4.288A5.231 5.231 0 0 1 14 2.75a5.23 5.23 0 0 1 3.712 1.538.75.75 0 1 0 1.06-1.061A6.731 6.731 0 0 0 14 1.25a6.731 6.731 0 0 0-4.773 1.977.75.75 0 1 0 1.06 1.06Zm2.121 2.121A2.24 2.24 0 0 1 14 5.75a2.24 2.24 0 0 1 1.591.659.75.75 0 1 0 1.06-1.06A3.74 3.74 0 0 0 14 4.25a3.74 3.74 0 0 0-2.652 1.098.75.75 0 1 0 1.061 1.061Zm5.395 1.83A1 1 0 0 1 19 9.22V18a2 2 0 1 1-1.5-1.937V12.3l-7 1.4V20A2 2 0 1 1 9 18.063V10.82a1 1 0 0 1 .804-.98l8-1.6Z', clipRule: 'evenodd' })));
};
var ForwardRef$23 = forwardRef(SvgSmartMusic);

var SvgSmartPhone = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19 5a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5Zm-7 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0-6a5.23 5.23 0 0 0-3.712 1.538.75.75 0 1 1-1.061-1.061A6.731 6.731 0 0 1 12 7.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 0 1-1.06 1.06A5.231 5.231 0 0 0 12 8.75Zm0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 1 1-1.06-1.06A3.74 3.74 0 0 1 12 10.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.061 1.061A2.24 2.24 0 0 0 12 11.75Zm-1 6.5a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$22 = forwardRef(SvgSmartPhone);

var SvgSmartPlug = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.288 4.288A5.231 5.231 0 0 1 12 2.75a5.23 5.23 0 0 1 3.712 1.538.75.75 0 1 0 1.06-1.061A6.731 6.731 0 0 0 12 1.25a6.731 6.731 0 0 0-4.773 1.977.75.75 0 0 0 1.06 1.06Zm2.121 2.121A2.24 2.24 0 0 1 12 5.75a2.24 2.24 0 0 1 1.591.659.75.75 0 1 0 1.06-1.06A3.74 3.74 0 0 0 12 4.25a3.74 3.74 0 0 0-2.652 1.098.75.75 0 1 0 1.061 1.061ZM5 11a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-8Zm7 .75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM7.25 15a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0Zm3.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$21 = forwardRef(SvgSmartPlug);

var SvgSmartPower = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2.75a5.23 5.23 0 0 0-3.712 1.538.75.75 0 0 1-1.06-1.061A6.731 6.731 0 0 1 12 1.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 1 1-1.06 1.06A5.231 5.231 0 0 0 12 2.75Zm0 3a2.24 2.24 0 0 0-1.59.659.75.75 0 0 1-1.062-1.06A3.74 3.74 0 0 1 12 4.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.06 1.061A2.24 2.24 0 0 0 12 5.75ZM9.677 8.352a.75.75 0 0 1-.355.999 6.25 6.25 0 1 0 5.356 0 .75.75 0 1 1 .644-1.355 7.75 7.75 0 1 1-6.644 0 .75.75 0 0 1 1 .356ZM12.75 8a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0V8Z', clipRule: 'evenodd' })));
};
var ForwardRef$20 = forwardRef(SvgSmartPower);

var SvgSmartRemote = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.288 4.288A5.231 5.231 0 0 1 12 2.75a5.23 5.23 0 0 1 3.712 1.538.75.75 0 1 0 1.06-1.061A6.731 6.731 0 0 0 12 1.25a6.731 6.731 0 0 0-4.773 1.977.75.75 0 0 0 1.06 1.06Zm2.121 2.121A2.24 2.24 0 0 1 12 5.75a2.24 2.24 0 0 1 1.591.659.75.75 0 1 0 1.06-1.06A3.74 3.74 0 0 0 12 4.25a3.74 3.74 0 0 0-2.652 1.098.75.75 0 1 0 1.061 1.061ZM6 12a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-6Zm6.75-.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-5.25-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25 4a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9.75 15a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm5.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-2.25 2.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9 19a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm6.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$1$ = forwardRef(SvgSmartRemote);

var SvgSmartSpeaker = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V6Zm7 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-2.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8.288 7.288A5.231 5.231 0 0 1 12 5.75a5.23 5.23 0 0 1 3.712 1.538.75.75 0 1 0 1.06-1.061A6.731 6.731 0 0 0 12 4.25a6.731 6.731 0 0 0-4.773 1.977.75.75 0 0 0 1.06 1.06Zm2.121 2.121A2.24 2.24 0 0 1 12 8.75a2.24 2.24 0 0 1 1.591.659.75.75 0 1 0 1.06-1.06A3.74 3.74 0 0 0 12 7.25a3.74 3.74 0 0 0-2.652 1.098.75.75 0 1 0 1.061 1.061Z', clipRule: 'evenodd' })));
};
var ForwardRef$1_ = forwardRef(SvgSmartSpeaker);

var SvgSmartSwitch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.288 7.045A5.231 5.231 0 0 1 12 5.507a5.23 5.23 0 0 1 3.712 1.538.75.75 0 1 0 1.06-1.06A6.731 6.731 0 0 0 12 4.006a6.731 6.731 0 0 0-4.773 1.977.75.75 0 0 0 1.06 1.061Zm2.121 2.121A2.24 2.24 0 0 1 12 8.507a2.24 2.24 0 0 1 1.591.66.75.75 0 1 0 1.06-1.061A3.74 3.74 0 0 0 12 7.007a3.74 3.74 0 0 0-2.652 1.099.75.75 0 1 0 1.061 1.06ZM17 11.25A2.75 2.75 0 0 1 19.75 14v2A2.75 2.75 0 0 1 17 18.75H7A2.75 2.75 0 0 1 4.25 16v-2A2.75 2.75 0 0 1 7 11.25h10ZM12 16c0 .473.164.908.439 1.25H7c-.69 0-1.25-.56-1.25-1.25v-2c0-.69.56-1.25 1.25-1.25h5.439A1.991 1.991 0 0 0 12 14v2Z', clipRule: 'evenodd' })));
};
var ForwardRef$1Z = forwardRef(SvgSmartSwitch);

var SvgSmartThermostat = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2.75a5.23 5.23 0 0 0-3.712 1.538.75.75 0 0 1-1.061-1.061A6.731 6.731 0 0 1 12 1.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 0 1-1.06 1.06A5.231 5.231 0 0 0 12 2.75Zm0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 0 1-1.06-1.06A3.74 3.74 0 0 1 12 4.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.061 1.061A2.24 2.24 0 0 0 12 5.75ZM10 10a2 2 0 0 1 4 0v6.764a3 3 0 1 1-4 0V10Zm2 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-11.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5h-1ZM16.25 12a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5h-1Z', clipRule: 'evenodd' })));
};
var ForwardRef$1Y = forwardRef(SvgSmartThermostat);

var SvgSmartTv = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h5.25v2.27c-1.417.082-2.824.434-4.499 1.023a.75.75 0 1 0 .498 1.415c1.843-.649 3.236-.956 4.638-.958 1.406-.002 2.878.303 4.878.962a.75.75 0 0 0 .47-1.424c-1.707-.563-3.124-.905-4.485-1.006V17H18a4 4 0 0 0 4-4V7Zm-10 6.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0-6a5.23 5.23 0 0 0-3.712 1.538.75.75 0 0 1-1.061-1.061A6.731 6.731 0 0 1 12 6.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 0 1-1.06 1.06A5.231 5.231 0 0 0 12 7.75Zm0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 1 1-1.06-1.06A3.74 3.74 0 0 1 12 9.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.061 1.061A2.24 2.24 0 0 0 12 10.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$1X = forwardRef(SvgSmartTv);

var SvgSmartWatch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16 5V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1h8ZM8 19v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1H8Zm11-9a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-4Zm-7 5.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0-6a5.23 5.23 0 0 0-3.712 1.538.75.75 0 1 1-1.061-1.061A6.731 6.731 0 0 1 12 8.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 0 1-1.06 1.06A5.231 5.231 0 0 0 12 9.75Zm0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 0 1-1.06-1.06A3.74 3.74 0 0 1 12 11.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 1 1-1.061 1.061A2.24 2.24 0 0 0 12 12.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$1W = forwardRef(SvgSmartWatch);

var SvgSnapchat = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M22 17c-1.102 0-1.844 0-2.365.589-.608.687-1.279 1.411-2.197 1.411h-.771a2 2 0 0 0-1.2.4l-1.067.8a4 4 0 0 1-4.8 0l-1.067-.8a2 2 0 0 0-1.2-.4h-.771c-.918 0-1.59-.724-2.197-1.411C3.845 17 3.102 17 2 17l2.4-1.8A4 4 0 0 0 6 12v-.5h-.5a1.5 1.5 0 0 1 0-3H6V8a6 6 0 0 1 12 0v.5h.5a1.5 1.5 0 0 1 0 3H18v.5a4 4 0 0 0 1.6 3.2L22 17Z' })));
};
var ForwardRef$1V = forwardRef(SvgSnapchat);

var SvgSolarPanel = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm8.754 10 .715-3.25h4.595l.715 3.25H8.754ZM7.22 10H5.516v6c0 .69.56 1.25 1.25 1.25h.5a.75.75 0 0 1 0 1.5h-.5A2.75 2.75 0 0 1 4.016 16V9.743a2.002 2.002 0 0 1-.802-2.637l.178-.356h4.542L7.219 10ZM4.142 5.25h4.122L8.979 2H7.003a2 2 0 0 0-1.79 1.106L4.143 5.25ZM10.514 2 9.8 5.25h3.935L13.019 2h-2.505Zm4.04 0 .715 3.25h4.123l-1.073-2.144A2 2 0 0 0 16.53 2h-1.976Zm5.588 4.75h-4.543l.715 3.25h1.703v6c0 .69-.56 1.25-1.25 1.25h-.5a.75.75 0 0 0 0 1.5h.5a2.75 2.75 0 0 0 2.75-2.75V9.743a2.002 2.002 0 0 0 .802-2.637l-.177-.356Zm-6.775 7.7a.75.75 0 0 0-1.2-.9l-3 4a.75.75 0 0 0 .6 1.2h2.5l-2.1 2.8a.75.75 0 1 0 1.2.9l3-4a.75.75 0 0 0-.6-1.2h-2.5l2.1-2.8Z', clipRule: 'evenodd' })));
};
var ForwardRef$1U = forwardRef(SvgSolarPanel);

var SvgSpotify = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM6.279 9.696c1.106-.442 3.083-.694 5.267-.572 2.174.121 4.425.607 6.09 1.532a.75.75 0 1 0 .728-1.312C16.43 8.27 13.93 7.755 11.63 7.627c-2.29-.128-4.514.12-5.908.678a.75.75 0 0 0 .558 1.392Zm.437 3.023c.737-.222 2.378-.467 4.285-.407 1.906.06 3.98.425 5.635 1.344a.75.75 0 1 0 .728-1.312c-1.946-1.08-4.288-1.467-6.315-1.531-2.026-.064-3.835.19-4.765.469a.75.75 0 0 0 .432 1.437Zm0 3c1.553-.466 5.559-.93 8.92.937a.75.75 0 1 0 .728-1.311c-3.839-2.133-8.3-1.597-10.08-1.063a.75.75 0 1 0 .432 1.437Z', clipRule: 'evenodd' })));
};
var ForwardRef$1T = forwardRef(SvgSpotify);

var SvgSpringNotesAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.032 1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-.25V1.5Zm-4 8a.75.75 0 1 0-1.5 0v2.25h-2.25a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25h2.25a.75.75 0 1 0 0-1.5h-2.25V9.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$1S = forwardRef(SvgSpringNotesAdd);

var SvgSpringNotesCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.032 1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-.25V1.5Zm-1.186 9.494a.75.75 0 1 0-1.129-.988l-2.87 3.28a.25.25 0 0 1-.344.03L9.75 11.915a.75.75 0 1 0-.937 1.172l1.753 1.402a1.75 1.75 0 0 0 2.41-.214l2.87-3.28Z', clipRule: 'evenodd' })));
};
var ForwardRef$1R = forwardRef(SvgSpringNotesCheck);

var SvgSpringNotesDelete = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.032 1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-.25V1.5Zm-2.099 9.409a.75.75 0 1 0-1.06-1.06l-1.591 1.59-1.591-1.59a.75.75 0 1 0-1.06 1.06l1.59 1.591-1.59 1.591a.75.75 0 1 0 1.06 1.06l1.59-1.59 1.592 1.59a.75.75 0 0 0 1.06-1.06l-1.59-1.591 1.59-1.591Z', clipRule: 'evenodd' })));
};
var ForwardRef$1Q = forwardRef(SvgSpringNotesDelete);

var SvgSpringNotesDownload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.032 1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-.25V1.5Zm-6.22 11.47.72.72V9.5a.75.75 0 0 1 1.5 0v4.19l.72-.72a.75.75 0 0 1 1.06 1.06l-1.293 1.293a1.75 1.75 0 0 1-2.475 0L9.751 14.03a.75.75 0 1 1 1.061-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$1P = forwardRef(SvgSpringNotesDownload);

var SvgSpringNotesEditAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M18.424 12.99a1.674 1.674 0 0 1 2.367 2.367l-5.014 5.015c-.121.12-.27.209-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.626-2.197c.047-.164.135-.313.256-.434l5.014-5.015Z' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.032 1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h.586a1 1 0 0 0 .707-.293L20.989 8.793a1 1 0 0 0 .293-.707V7a4 4 0 0 0-4-4h-.25V1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5Zm3.25 6.25a.75.75 0 0 1 .75.75v1.25h1.25a.75.75 0 1 1 0 1.5h-1.25v1.25a.75.75 0 1 1-1.5 0v-1.25h-1.25a.75.75 0 0 1 0-1.5h1.25V8.5a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$1O = forwardRef(SvgSpringNotesEditAdd);

var SvgSpringNotesEditCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M18.424 12.99a1.674 1.674 0 0 1 2.367 2.367l-5.014 5.015c-.121.12-.27.209-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.626-2.197c.047-.164.135-.313.256-.434l5.014-5.015Z' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.032 1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h.586a1 1 0 0 0 .707-.293L20.989 8.793a1 1 0 0 0 .293-.707V7a4 4 0 0 0-4-4h-.25V1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5Zm5.842 8.46a.75.75 0 1 0-1.184-.92l-1.674 2.151a.25.25 0 0 1-.364.033l-.868-.781a.75.75 0 1 0-1.004 1.114l.868.782a1.75 1.75 0 0 0 2.552-.227l1.674-2.152Z', clipRule: 'evenodd' })));
};
var ForwardRef$1N = forwardRef(SvgSpringNotesEditCheck);

var SvgSpringNotesEditDelete = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M18.424 12.99a1.674 1.674 0 0 1 2.367 2.367l-5.014 5.015c-.121.12-.27.209-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.626-2.197c.047-.164.135-.313.256-.434l5.014-5.015Z' }),
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.032 1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h.586a1 1 0 0 0 .707-.293L20.989 8.793a1 1 0 0 0 .293-.707V7a4 4 0 0 0-4-4h-.25V1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5Zm5.194 8.116a.75.75 0 0 0-1.06-1.06l-.884.883-.884-.884a.75.75 0 0 0-1.06 1.061l.883.884-.884.884a.75.75 0 0 0 1.06 1.06l.885-.883.884.883a.75.75 0 0 0 1.06-1.06l-.884-.884.884-.884Z', clipRule: 'evenodd' })));
};
var ForwardRef$1M = forwardRef(SvgSpringNotesEditDelete);

var SvgSpringNotesEditDownload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282.75a.75.75 0 0 1 .75.75V3h6.5V1.5a.75.75 0 0 1 1.5 0V3h.25a4 4 0 0 1 4 4v1.086a1 1 0 0 1-.293.707L8.575 21.207a1 1 0 0 1-.707.293h-.586a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h.25V1.5a.75.75 0 0 1 .75-.75Zm3.25 10.94-.72-.72a.75.75 0 1 0-1.06 1.06l1.292 1.293a1.75 1.75 0 0 0 2.475 0l1.293-1.293a.75.75 0 0 0-1.06-1.06l-.72.72V8.5a.75.75 0 1 0-1.5 0v3.19Zm9.26 1.3a1.674 1.674 0 0 0-2.368 0l-5.014 5.015a1 1 0 0 0-.256.434l-.626 2.197a.5.5 0 0 0 .618.618l2.196-.627a.991.991 0 0 0 .435-.255l5.014-5.015a1.674 1.674 0 0 0 0-2.367Z', clipRule: 'evenodd' })));
};
var ForwardRef$1L = forwardRef(SvgSpringNotesEditDownload);

var SvgSpringNotesEditFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282.75a.75.75 0 0 1 .75.75V3h6.5V1.5a.75.75 0 0 1 1.5 0V3h.25a4 4 0 0 1 4 4v1.086a1 1 0 0 1-.293.707L8.575 21.207a1 1 0 0 1-.707.293h-.586a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h.25V1.5a.75.75 0 0 1 .75-.75ZM12.512 9l-.23.241-.23-.241a1.568 1.568 0 0 0-2.295 0 1.768 1.768 0 0 0 0 2.412l1.607 1.689a1.254 1.254 0 0 0 1.836 0l1.606-1.689a1.768 1.768 0 0 0 0-2.412 1.568 1.568 0 0 0-2.295 0Zm8.28 3.99a1.674 1.674 0 0 0-2.368 0l-5.014 5.015a1 1 0 0 0-.256.434l-.626 2.197a.5.5 0 0 0 .618.618l2.196-.627a.991.991 0 0 0 .435-.255l5.014-5.015a1.674 1.674 0 0 0 0-2.367Z', clipRule: 'evenodd' })));
};
var ForwardRef$1K = forwardRef(SvgSpringNotesEditFavourite);

var SvgSpringNotesEditMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282.75a.75.75 0 0 1 .75.75V3h6.5V1.5a.75.75 0 0 1 1.5 0V3h.25a4 4 0 0 1 4 4v1.086a1 1 0 0 1-.293.707L8.575 21.207a1 1 0 0 1-.707.293h-.586a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h.25V1.5a.75.75 0 0 1 .75-.75Zm6.75 9.75a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75Zm5.76 2.49a1.674 1.674 0 0 0-2.368 0l-5.014 5.015a1 1 0 0 0-.256.434l-.626 2.197a.5.5 0 0 0 .618.618l2.196-.627a.991.991 0 0 0 .435-.255l5.014-5.015a1.674 1.674 0 0 0 0-2.367Z', clipRule: 'evenodd' })));
};
var ForwardRef$1J = forwardRef(SvgSpringNotesEditMinus);

var SvgSpringNotesEditSearch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282.75a.75.75 0 0 1 .75.75V3h6.5V1.5a.75.75 0 0 1 1.5 0V3h.25a4 4 0 0 1 4 4v1.086a1 1 0 0 1-.293.707L8.575 21.207a1 1 0 0 1-.707.293h-.586a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h.25V1.5a.75.75 0 0 1 .75-.75Zm.75 9.75a3.25 3.25 0 1 1 1.544 2.767l-.764.763a.75.75 0 0 1-1.06-1.06l.763-.764a3.235 3.235 0 0 1-.483-1.706Zm3.25-1.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Zm8.51 4.24a1.674 1.674 0 0 0-2.368 0l-5.014 5.015a1 1 0 0 0-.256.434l-.626 2.197a.5.5 0 0 0 .618.618l2.196-.627a.991.991 0 0 0 .435-.255l5.014-5.015a1.674 1.674 0 0 0 0-2.367Z', clipRule: 'evenodd' })));
};
var ForwardRef$1I = forwardRef(SvgSpringNotesEditSearch);

var SvgSpringNotesEditUpload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282.75a.75.75 0 0 1 .75.75V3h6.5V1.5a.75.75 0 0 1 1.5 0V3h.25a4 4 0 0 1 4 4v1.086a1 1 0 0 1-.293.707L8.575 21.207a1 1 0 0 1-.707.293h-.586a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h.25V1.5a.75.75 0 0 1 .75-.75Zm3.25 9.146-.72.72a.75.75 0 0 1-1.06-1.06l1.292-1.293a1.75 1.75 0 0 1 2.475 0l1.293 1.292a.75.75 0 1 1-1.06 1.061l-.72-.72v3.19a.75.75 0 1 1-1.5 0v-3.19Zm9.26 3.094a1.674 1.674 0 0 0-2.368 0l-5.014 5.015a1 1 0 0 0-.256.434l-.626 2.197a.5.5 0 0 0 .618.618l2.196-.627a.991.991 0 0 0 .435-.255l5.014-5.015a1.674 1.674 0 0 0 0-2.367Z', clipRule: 'evenodd' })));
};
var ForwardRef$1H = forwardRef(SvgSpringNotesEditUpload);

var SvgSpringNotesEdit = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.032 1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h.586a1 1 0 0 0 .707-.293L20.989 8.793a1 1 0 0 0 .293-.707V7a4 4 0 0 0-4-4h-.25V1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5Zm11.76 11.49a1.674 1.674 0 0 0-2.368 0l-5.014 5.015a1 1 0 0 0-.256.434l-.626 2.197a.5.5 0 0 0 .618.618l2.196-.627a.991.991 0 0 0 .435-.255l5.014-5.015a1.674 1.674 0 0 0 0-2.367Z', clipRule: 'evenodd' })));
};
var ForwardRef$1G = forwardRef(SvgSpringNotesEdit);

var SvgSpringNotesFavourite = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.032 1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-.25V1.5Zm-4.726 9.14.23-.24a1.568 1.568 0 0 1 2.295 0 1.768 1.768 0 0 1 0 2.411L13.225 14.5a1.254 1.254 0 0 1-1.837 0l-1.606-1.689a1.768 1.768 0 0 1 0-2.412 1.568 1.568 0 0 1 2.295 0l.23.242Z', clipRule: 'evenodd' })));
};
var ForwardRef$1F = forwardRef(SvgSpringNotesFavourite);

var SvgSpringNotesList = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.282.75a.75.75 0 0 1 .75.75V3h.25a4 4 0 0 1 4 4v10.5a4 4 0 0 1-4 4h-10a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h.25V1.5a.75.75 0 1 1 1.5 0V3h6.5V1.5a.75.75 0 0 1 .75-.75Zm1.75 11.75a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Zm-.75-3.25a.75.75 0 1 0 0-1.5h-6a.75.75 0 0 0 0 1.5h6Zm.75 7.25a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Zm-9.25-8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$1E = forwardRef(SvgSpringNotesList);

var SvgSpringNotesRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.032 1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-.25V1.5Zm-1.75 11.75a.75.75 0 1 0 0-1.5h-6a.75.75 0 0 0 0 1.5h6Z', clipRule: 'evenodd' })));
};
var ForwardRef$1D = forwardRef(SvgSpringNotesRemove);

var SvgSpringNotesSearch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.032 1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-.25V1.5Zm-4.75 8.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.75 2.25a3.75 3.75 0 1 1 6.878 2.068l.902.902a.75.75 0 1 1-1.06 1.06l-.902-.901A3.75 3.75 0 0 1 8.532 12.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$1C = forwardRef(SvgSpringNotesSearch);

var SvgSpringNotesUpload = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.032 1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-.25V1.5Zm-3.28 10.53-.72-.72v4.19a.75.75 0 1 1-1.5 0v-4.19l-.72.72a.75.75 0 1 1-1.06-1.06l1.292-1.293a1.75 1.75 0 0 1 2.475 0l1.293 1.293a.75.75 0 0 1-1.06 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$1B = forwardRef(SvgSpringNotesUpload);

var SvgSpringNotesWriteEdit = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.282.75a.75.75 0 0 1 .75.75V3h6.5V1.5a.75.75 0 0 1 1.5 0V3h.25a4 4 0 0 1 4 4v1.086a1 1 0 0 1-.293.707L8.575 21.207a1 1 0 0 1-.707.293h-.586a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h.25V1.5a.75.75 0 0 1 .75-.75Zm7 8.5a.75.75 0 1 0 0-1.5h-7a.75.75 0 1 0 0 1.5h7Zm-3 4a.75.75 0 1 0 0-1.5h-4a.75.75 0 0 0 0 1.5h4Zm-2.25 3.25a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75Zm10.76-3.51a1.674 1.674 0 0 0-2.368 0l-5.014 5.015a1 1 0 0 0-.256.434l-.626 2.197a.5.5 0 0 0 .618.618l2.196-.627a.991.991 0 0 0 .435-.255l5.014-5.015a1.674 1.674 0 0 0 0-2.367Z', clipRule: 'evenodd' })));
};
var ForwardRef$1A = forwardRef(SvgSpringNotesWriteEdit);

var SvgSpringNotes = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M17.032 1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-.25V1.5Zm-9.75 6.25a.75.75 0 1 0 0 1.5h10a.75.75 0 1 0 0-1.5h-10Zm-.75 4.75a.75.75 0 0 1 .75-.75h10a.75.75 0 1 1 0 1.5h-10a.75.75 0 0 1-.75-.75Zm.75 3.25a.75.75 0 0 0 0 1.5h5a.75.75 0 1 0 0-1.5h-5Z', clipRule: 'evenodd' })));
};
var ForwardRef$1z = forwardRef(SvgSpringNotes);

var SvgStandbyMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM8.75 12a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM12 7.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$1y = forwardRef(SvgStandbyMode);

var SvgStethoscope = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.75 2a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0c.304.228.5.591.5 1v3a4.25 4.25 0 0 1-8.5 0V5c0-.409.196-.772.5-1a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-1.5 0v.354A2.751 2.751 0 0 0 1.25 5v3a5.751 5.751 0 0 0 5 5.701v4.549a4.5 4.5 0 1 0 9 0v-5.5a2 2 0 1 1 4 0V14a.8.8 0 0 0 .013.14 2 2 0 1 0 1.474 0 .752.752 0 0 0 .013-.14v-1.25a3.5 3.5 0 1 0-7 0v5.5a3 3 0 1 1-6 0v-4.549a5.75 5.75 0 0 0 5-5.701V5a2.75 2.75 0 0 0-2-2.646V2Z', clipRule: 'evenodd' })));
};
var ForwardRef$1x = forwardRef(SvgStethoscope);

var SvgStorage = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v5.25h20V6Zm0 6.75H2V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-5.25Zm-4-8.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75ZM14.75 5a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0V5ZM18 15.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm-3.25.75a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$1w = forwardRef(SvgStorage);

var SvgStoreSmile = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 6v2.25c0 2.071-1.492 3.75-3.333 3.75-1.841 0-3.334-1.679-3.334-3.75 0 2.071-1.492 3.75-3.333 3.75-1.84 0-3.333-1.679-3.333-3.75 0 2.071-1.493 3.75-3.334 3.75C3.493 12 2 10.321 2 8.25V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4Zm-3.333 7.5c-1.338 0-2.49-.563-3.334-1.444-.844.881-1.996 1.444-3.333 1.444-1.337 0-2.49-.563-3.333-1.444-.844.881-1.997 1.444-3.334 1.444A4.5 4.5 0 0 1 3 12.857V18a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-5.143a4.5 4.5 0 0 1-2.333.643Zm-3.014 4.132a.75.75 0 0 1-.285 1.021c-1.215.685-2.261 1.095-3.365 1.097-1.105.002-2.154-.404-3.374-1.098a.75.75 0 1 1 .742-1.304c1.136.646 1.911.903 2.629.902.72-.001 1.494-.262 2.632-.903a.75.75 0 0 1 1.021.285Z', clipRule: 'evenodd' })));
};
var ForwardRef$1v = forwardRef(SvgStoreSmile);

var SvgStore = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 6v2.25c0 2.071-1.492 3.75-3.333 3.75-1.841 0-3.334-1.679-3.334-3.75 0 2.071-1.492 3.75-3.333 3.75-1.84 0-3.333-1.679-3.333-3.75 0 2.071-1.493 3.75-3.334 3.75C3.493 12 2 10.321 2 8.25V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4Zm-6.667 6.056c.844.881 1.996 1.444 3.334 1.444A4.5 4.5 0 0 0 21 12.857V18a4 4 0 0 1-4 4h-6v-3a2 2 0 1 0-4 0v3a4 4 0 0 1-4-4v-5.143a4.5 4.5 0 0 0 2.333.643c1.337 0 2.49-.563 3.334-1.444.843.881 1.996 1.444 3.333 1.444 1.337 0 2.49-.563 3.333-1.444ZM15 15a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$1u = forwardRef(SvgStore);

var SvgSwitch = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22.75 12A6.75 6.75 0 0 0 16 5.25H8a6.75 6.75 0 0 0 0 13.5h8A6.75 6.75 0 0 0 22.75 12Zm-9.657 5.25A5.998 5.998 0 0 1 10 12a5.998 5.998 0 0 1 3.093-5.25H8a5.25 5.25 0 1 0 0 10.5h5.093Z', clipRule: 'evenodd' })));
};
var ForwardRef$1t = forwardRef(SvgSwitch);

var SvgSyrup = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.5 2a1.5 1.5 0 1 0 0 3h5a1.5 1.5 0 0 0 0-3h-5ZM6 12.14a4 4 0 0 1 1.781-3.327l.328-.22A2 2 0 0 0 9 6.93V6.5h6v.43a2 2 0 0 0 .89 1.664l.329.219A4 4 0 0 1 18 12.14V18a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-5.86ZM15 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$1s = forwardRef(SvgSyrup);

var SvgTablet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M20 6a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V6Zm-9 13a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$1r = forwardRef(SvgTablet);

var SvgTagCrooked = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.576 3.5A4.078 4.078 0 0 0 9.41 4.69l-6.565 6.564c-1.583 1.584-1.6 4.134-.038 5.696l4.242 4.242c1.562 1.563 4.112 1.545 5.696-.038l6.565-6.565a4.077 4.077 0 0 0 1.189-3.165l-.278-3.964a3.96 3.96 0 0 0-3.682-3.682L12.576 3.5Zm.838 7.086a2 2 0 1 0 2.829-2.828 2 2 0 0 0-2.829 2.828Z', clipRule: 'evenodd' })));
};
var ForwardRef$1q = forwardRef(SvgTagCrooked);

var SvgTag = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.397 5.582A4.078 4.078 0 0 0 5 8.661v9.285C5 20.185 6.79 22 9 22h6c2.21 0 4-1.815 4-4.054V8.66c0-1.184-.51-2.308-1.397-3.079l-3-2.606a3.96 3.96 0 0 0-5.206 0l-3 2.606ZM12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z', clipRule: 'evenodd' })));
};
var ForwardRef$1p = forwardRef(SvgTag);

var SvgTaskCheckPaper = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M19.828 7.828c.133.133.255.274.367.422H18A3.25 3.25 0 0 1 14.75 5V2.805c.148.112.289.234.422.367l4.656 4.656ZM13.25 5V2.104A4 4 0 0 0 12.343 2H7a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-7.343a3.98 3.98 0 0 0-.104-.907H18A4.75 4.75 0 0 1 13.25 5Zm2.314 7.494a.75.75 0 1 0-1.128-.988l-2.87 3.28a.25.25 0 0 1-.345.03L9.47 13.415a.75.75 0 0 0-.938 1.172l1.753 1.402a1.75 1.75 0 0 0 2.41-.214l2.87-3.28Z', clipRule: 'evenodd' })));
};
var ForwardRef$1o = forwardRef(SvgTaskCheckPaper);

var SvgTelegram = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'm2.896 10.796 15.39-6.65a1 1 0 0 1 1.383 1.074l-2.104 13.276a1 1 0 0 1-1.714.53l-3.453-3.657a2 2 0 0 1-.125-2.6L14.71 9.63c.14-.18-.081-.416-.27-.289l-4.847 3.252a4 4 0 0 1-2.8.637l-3.644-.527c-.998-.144-1.18-1.508-.254-1.908Z' })));
};
var ForwardRef$1n = forwardRef(SvgTelegram);

var SvgTestTube = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.474 3.243a.99.99 0 0 1 1.4 0l6.883 6.882a.99.99 0 1 1-1.4 1.4l-6.883-6.882a.99.99 0 0 1 0-1.4Zm4.556.414a2.343 2.343 0 1 1 3.313 3.313L20 7.313 16.687 4l.343-.343ZM12.53 6.5l4.97 4.97-1.754 1.754-9.111-.828L12.53 6.5Zm-7.276 7.276 9.111.829-5.618 5.617a3.514 3.514 0 1 1-4.97-4.97l1.477-1.476Z', clipRule: 'evenodd' })));
};
var ForwardRef$1m = forwardRef(SvgTestTube);

var SvgThermometer = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M16.006 3.857 9.69 10.174a1.95 1.95 0 0 0-.551 1.103l-.161 1.126a1.95 1.95 0 0 1-.552 1.103l-1.93 1.93.035.034 2 2a.728.728 0 0 1 .033.035l1.93-1.93a1.95 1.95 0 0 1 1.104-.552l1.126-.16a1.95 1.95 0 0 0 1.103-.553l6.317-6.316a2.925 2.925 0 1 0-4.137-4.137ZM7.505 18.564a.764.764 0 0 1-.035-.034l-2-2a.728.728 0 0 1-.033-.035l-2.009 2.008a1.463 1.463 0 1 0 2.069 2.069l2.008-2.008Z', clipRule: 'evenodd' })));
};
var ForwardRef$1l = forwardRef(SvgThermometer);

var SvgTiktok = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M10 21a6 6 0 0 0 6-6V8.197c.883.51 1.907.803 3 .803h1V6h-1a3 3 0 0 1-3-3h-3v12a3 3 0 1 1-3-3V9a6 6 0 0 0 0 12Z' })));
};
var ForwardRef$1k = forwardRef(SvgTiktok);

var SvgTooth = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M20.263 4.24c-2.423-2.288-4.944-1.367-6.869-.003a2.43 2.43 0 0 1-2.793.006c-1.933-1.356-4.464-2.27-6.865-.004C-1.258 8.953 5.85 20.862 8.42 20.862c2.554 0 .7-7.295 3.58-7.387 2.88.092 1.026 7.387 3.58 7.387 2.57 0 9.678-11.909 4.683-16.623Z' })));
};
var ForwardRef$1j = forwardRef(SvgTooth);

var SvgTransfer = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3.75 2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-6Zm10 12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-6Zm6.604-7.25-.72.72a.75.75 0 0 0 1.06 1.06l1.293-1.293a1.75 1.75 0 0 0 0-2.474L20.695 3.47a.75.75 0 1 0-1.061 1.06l.72.72H15.75a.75.75 0 0 0 0 1.5h4.604ZM3.866 19.47l-.72-.72H7.75a.75.75 0 0 0 0-1.5H3.146l.72-.72a.75.75 0 1 0-1.06-1.06l-1.293 1.293a1.75 1.75 0 0 0 0 2.474l1.292 1.293a.75.75 0 0 0 1.061-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$1i = forwardRef(SvgTransfer);

var SvgTransfusion = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M6.81 3.066C5.06 4.751 2 8.197 2 11.69c0 2.837 1.89 5.748 5.05 6.239A8.764 8.764 0 0 1 6.5 14.9c0-2.483 1.156-4.811 2.435-6.654a24.43 24.43 0 0 1 2.362-2.868A23.446 23.446 0 0 0 9.19 3.066a1.7 1.7 0 0 0-2.38 0ZM8 14.9c0-4.072 3.837-8.09 5.83-9.9a1.724 1.724 0 0 1 2.34 0C18.164 6.81 22 10.827 22 14.9c0 3.5-2.65 7.1-7 7.1s-7-3.6-7-7.1Zm7.264 4.242a.75.75 0 0 1 .594-.879c1.277-.247 2.15-1.259 2.41-2.426a.75.75 0 0 1 1.464.326c-.369 1.657-1.637 3.196-3.59 3.573a.75.75 0 0 1-.878-.594Z', clipRule: 'evenodd' })));
};
var ForwardRef$1h = forwardRef(SvgTransfusion);

var SvgTrolleyCrooked = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M8.27 7.146a1.804 1.804 0 0 1 1.3-2.213l7.094-1.871c.98-.258 1.986.314 2.248 1.278l1.901 6.981a1.804 1.804 0 0 1-1.298 2.213l-7.094 1.871c-.98.259-1.986-.313-2.248-1.277L8.27 7.145Zm7.17-.956a.75.75 0 0 1-.533.917l-1.774.467a.75.75 0 0 1-.382-1.45l1.773-.468a.75.75 0 0 1 .917.534Zm-9.582-.289C5.483 4.533 4.062 3.738 2.695 4.1l-.886.234a.75.75 0 1 0 .382 1.45l.887-.234a1.09 1.09 0 0 1 1.334.75L7.64 17.716a1.793 1.793 0 0 0-.714 1.944c.262.964 1.269 1.536 2.248 1.278a1.82 1.82 0 0 0 1.303-1.292L22.2 16.408a.75.75 0 0 0-.4-1.446l-11.59 3.202a1.843 1.843 0 0 0-1.09-.73L5.857 5.9Z', clipRule: 'evenodd' })));
};
var ForwardRef$1g = forwardRef(SvgTrolleyCrooked);

var SvgTrolley = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2 1.25a.75.75 0 0 0 0 1.5h1c.69 0 1.25.56 1.25 1.25v14.145a2 2 0 1 0 2.605 2.605H22a.75.75 0 0 0 0-1.5H6.855a2.006 2.006 0 0 0-1.105-1.105V4A2.75 2.75 0 0 0 3 1.25H2ZM8 7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V7Zm4.25 1a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$1f = forwardRef(SvgTrolley);

var SvgTurnLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.027 3.254a4.281 4.281 0 0 0-6.054 0l-5.72 5.719a4.281 4.281 0 0 0 0 6.054l5.72 5.72a4.281 4.281 0 0 0 6.054 0l5.72-5.72a4.281 4.281 0 0 0 0-6.054l-5.72-5.72Zm-3.91 8.216-.72-.72H12c.69 0 1.25.56 1.25 1.25v4a.75.75 0 0 0 1.5 0v-4A2.75 2.75 0 0 0 12 9.25h-1.604l.72-.72a.75.75 0 0 0-1.06-1.06L8.763 8.763a1.75 1.75 0 0 0 0 2.474l1.293 1.293a.75.75 0 1 0 1.06-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$1e = forwardRef(SvgTurnLeft);

var SvgTurnRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.027 3.254a4.281 4.281 0 0 0-6.054 0l-5.72 5.719a4.281 4.281 0 0 0 0 6.054l5.72 5.72a4.281 4.281 0 0 0 6.054 0l5.72-5.72a4.281 4.281 0 0 0 0-6.054l-5.72-5.72Zm-2.143 8.216.72-.72H12c-.69 0-1.25.56-1.25 1.25v4a.75.75 0 0 1-1.5 0v-4A2.75 2.75 0 0 1 12 9.25h1.604l-.72-.72a.75.75 0 0 1 1.06-1.06l1.293 1.293a1.75 1.75 0 0 1 0 2.474l-1.293 1.293a.75.75 0 1 1-1.06-1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$1d = forwardRef(SvgTurnRight);

var SvgTurnTwoSide = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.027 3.254a4.281 4.281 0 0 0-6.054 0l-5.72 5.719a4.281 4.281 0 0 0 0 6.054l5.72 5.72a4.281 4.281 0 0 0 6.054 0l5.72-5.72a4.281 4.281 0 0 0 0-6.054l-5.72-5.72ZM9.117 9.53a.75.75 0 0 0-1.062-1.06L6.763 9.763a1.75 1.75 0 0 0 0 2.474l1.292 1.293a.75.75 0 0 0 1.061-1.06l-.72-.72H10c.69 0 1.25.56 1.25 1.25v3a.75.75 0 0 0 1.5 0v-3c0-.69.56-1.25 1.25-1.25h1.604l-.72.72a.75.75 0 1 0 1.06 1.06l1.293-1.293a1.75 1.75 0 0 0 0-2.474L15.945 8.47a.75.75 0 1 0-1.061 1.06l.72.72H14c-.788 0-1.499.331-2 .863a2.742 2.742 0 0 0-2-.863H8.396l.72-.72Z', clipRule: 'evenodd' })));
};
var ForwardRef$1c = forwardRef(SvgTurnTwoSide);

var SvgTurn = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.027 3.254a4.281 4.281 0 0 0-6.054 0l-5.72 5.719a4.281 4.281 0 0 0 0 6.054l5.72 5.72a4.281 4.281 0 0 0 6.054 0l5.72-5.72a4.281 4.281 0 0 0 0-6.054l-5.72-5.72ZM13.47 8.116l-.72-.72v5.14A4.733 4.733 0 0 1 16 11.25h.604l-.72-.72a.75.75 0 1 1 1.06-1.06l1.293 1.293a1.75 1.75 0 0 1 0 2.474l-1.292 1.293a.75.75 0 1 1-1.061-1.06l.72-.72H16A3.25 3.25 0 0 0 12.75 16v1a.75.75 0 0 1-1.5 0v-1A3.25 3.25 0 0 0 8 12.75h-.604l.72.72a.75.75 0 1 1-1.06 1.06l-1.293-1.293a1.75 1.75 0 0 1 0-2.474L7.055 9.47a.75.75 0 0 1 1.061 1.06l-.72.72H8c1.257 0 2.4.488 3.25 1.286v-5.14l-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.292a.75.75 0 0 1-1.06 1.061Z', clipRule: 'evenodd' })));
};
var ForwardRef$1b = forwardRef(SvgTurn);

var SvgTwitterPlus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M9 3.5V2h4v5h4v4h-4v5a2 2 0 0 0 2 2h4v4h-4a6 6 0 0 1-6-6v-5H5V7h.5A3.5 3.5 0 0 0 9 3.5Z' })));
};
var ForwardRef$1a = forwardRef(SvgTwitterPlus);

var SvgTwitterSparrow = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M15.286 4c-2.104 0-3.81 1.79-3.81 4 0 .334.04.658.113.968-2.023 0-5.07-.409-7.615-2.958-.338-.34-.962-.113-.939.366.378 7.687 3.67 9.929 5.365 10.068-1.095 1.082-2.685 1.935-4.285 2.318-.423.101-.527.564-.114.698 1.145.372 2.784.516 3.666.54 6.241 0 11.313-5.253 11.426-11.778.82-.533 1.345-1.69 1.64-2.51.071-.199-.256-.431-.452-.35-.612.255-1.389.315-2.05.1C17.53 4.569 16.471 4 15.285 4Z' })));
};
var ForwardRef$19 = forwardRef(SvgTwitterSparrow);

var SvgTwitter = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M6 4v13a5 5 0 0 0 5 5h5a2 2 0 1 0 0-4h-4a2 2 0 0 1-2-2v-4h6a2 2 0 1 0 0-4h-6V4a2 2 0 1 0-4 0Z' })));
};
var ForwardRef$18 = forwardRef(SvgTwitter);

var SvgUTurnLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.027 3.254a4.281 4.281 0 0 0-6.054 0l-5.72 5.719a4.281 4.281 0 0 0 0 6.054l5.72 5.72a4.281 4.281 0 0 0 6.054 0l5.72-5.72a4.281 4.281 0 0 0 0-6.054l-5.72-5.72ZM14.25 16a.75.75 0 0 0 1.5 0v-5a3.75 3.75 0 1 0-7.5 0v1.604l-.72-.72a.75.75 0 0 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.293a.75.75 0 1 0-1.06-1.06l-.72.72V11a2.25 2.25 0 0 1 4.5 0v5Z', clipRule: 'evenodd' })));
};
var ForwardRef$17 = forwardRef(SvgUTurnLeft);

var SvgUTurnRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M15.027 3.254a4.281 4.281 0 0 0-6.054 0l-5.72 5.719a4.281 4.281 0 0 0 0 6.054l5.72 5.72a4.281 4.281 0 0 0 6.054 0l5.72-5.72a4.281 4.281 0 0 0 0-6.054l-5.72-5.72ZM9.75 16a.75.75 0 0 1-1.5 0v-5a3.75 3.75 0 1 1 7.5 0v1.604l.72-.72a.75.75 0 1 1 1.06 1.06l-1.293 1.293a1.75 1.75 0 0 1-2.474 0l-1.293-1.293a.75.75 0 1 1 1.06-1.06l.72.72V11a2.25 2.25 0 0 0-4.5 0v5Z', clipRule: 'evenodd' })));
};
var ForwardRef$16 = forwardRef(SvgUTurnRight);

var SvgUmbrella = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M4 10.75h3.263c.08-2.979.517-5.682 1.197-7.722.217-.65.462-1.246.737-1.769-3.255 1.169-6.095 4.199-6.941 7.513-.273 1.07.64 1.978 1.744 1.978Zm8-10a7.27 7.27 0 0 0-.608.025c-.111.095-.232.22-.36.382-.405.514-.802 1.303-1.149 2.345-.62 1.861-1.039 4.397-1.119 7.248h2.486v8a1.25 1.25 0 1 1-2.5 0 .75.75 0 0 0-1.5 0 2.75 2.75 0 1 0 5.5 0v-8h2.486c-.08-2.85-.499-5.387-1.12-7.248-.346-1.042-.744-1.831-1.148-2.345a2.661 2.661 0 0 0-.36-.382A7.542 7.542 0 0 0 12 .75Zm3.54 2.278c.68 2.04 1.116 4.743 1.197 7.722H20c1.105 0 2.017-.908 1.744-1.978-.846-3.314-3.686-6.344-6.941-7.513.275.523.52 1.119.737 1.769Z', clipRule: 'evenodd' })));
};
var ForwardRef$15 = forwardRef(SvgUmbrella);

var SvgUndoCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18ZM7.66 7.5a.75.75 0 0 1 1.5 0v.602a4.75 4.75 0 1 1-1.885 5.085.75.75 0 1 1 1.451-.374A3.252 3.252 0 0 0 15.124 12a3.25 3.25 0 0 0-5.398-2.439l.833.212a.75.75 0 0 1-.37 1.454l-1.965-.5A.75.75 0 0 1 7.66 10V7.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$14 = forwardRef(SvgUndoCircle);

var SvgUndo = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 3.75A8.25 8.25 0 1 1 3.75 12a.75.75 0 0 0-1.5 0c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25a9.722 9.722 0 0 0-7.046 3.01V3a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75h4.421a.75.75 0 0 0 0-1.5h-2.99a8.233 8.233 0 0 1 6.365-3Z', clipRule: 'evenodd' })));
};
var ForwardRef$13 = forwardRef(SvgUndo);

var SvgUnlock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.85 4.562A3.25 3.25 0 0 1 15.25 7H8a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-6c0-1.953-1.4-3.579-3.25-3.93V7a4.75 4.75 0 0 0-7.892-3.562.75.75 0 1 0 .993 1.124ZM14 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$12 = forwardRef(SvgUnlock);

var SvgUploadCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.47 5.47a.75.75 0 1 0 1.06 1.06l2.72-2.72V16a.75.75 0 0 0 1.5 0V3.81l2.72 2.72a.75.75 0 1 0 1.06-1.06l-4-4a.75.75 0 0 0-1.06 0l-4 4Zm-1.13 4a.75.75 0 1 0-1.17-.94 8.75 8.75 0 1 0 13.661 0 .75.75 0 0 0-1.17.94 7.25 7.25 0 1 1-11.32 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$11 = forwardRef(SvgUploadCircle);

var SvgUploadRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.25 17A4.75 4.75 0 0 0 7 21.75h10A4.75 4.75 0 0 0 21.75 17v-4A4.75 4.75 0 0 0 17 8.25h-.5a.75.75 0 0 0 0 1.5h.5A3.25 3.25 0 0 1 20.25 13v4A3.25 3.25 0 0 1 17 20.25H7A3.25 3.25 0 0 1 3.75 17v-4A3.25 3.25 0 0 1 7 9.75h.5a.75.75 0 0 0 0-1.5H7A4.75 4.75 0 0 0 2.25 13v4ZM8.47 5.47a.75.75 0 0 0 1.06 1.06l1.72-1.72V15a.75.75 0 0 0 1.5 0V4.81l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3Z', clipRule: 'evenodd' })));
};
var ForwardRef$10 = forwardRef(SvgUploadRectangle);

var SvgUsb = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'm10.2 3.4 1-1.333a1 1 0 0 1 1.6 0l1 1.333A1 1 0 0 1 13 5h-.25v5.96l4.329-1.443a.25.25 0 0 0 .171-.238V7.3a1.5 1.5 0 1 1 1.5 0v1.98a1.75 1.75 0 0 1-1.197 1.66l-4.803 1.602V18a.753.753 0 0 1-.013.14 2 2 0 1 1-1.474 0 .753.753 0 0 1-.013-.14v-3.46l-4.803-1.6a1.75 1.75 0 0 1-1.197-1.66V9.469A1 1 0 0 1 4.5 8.5v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-.75.969v1.81a.25.25 0 0 0 .171.238l4.329 1.443V5H11a1 1 0 0 1-.8-1.6Z', clipRule: 'evenodd' })));
};
var ForwardRef$$ = forwardRef(SvgUsb);

var SvgUserAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm3 10c0 2.21-3.134 4-7 4s-7-1.79-7-4 3.134-4 7-4 7 1.79 7 4Zm1-4.25a.75.75 0 0 1-.75-.75v-1.25H16a.75.75 0 0 1 0-1.5h1.25V8a.75.75 0 0 1 1.5 0v1.25H20a.75.75 0 0 1 0 1.5h-1.25V12a.75.75 0 0 1-.75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$_ = forwardRef(SvgUserAdd);

var SvgUserBlock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm3 10c0 2.21-3.134 4-7 4s-7-1.79-7-4 3.134-4 7-4 7 1.79 7 4Zm-.524-4.415 4.109-4.109a3 3 0 0 1-4.109 4.109ZM15 10c0 .556.151 1.077.415 1.524l4.109-4.109A3 3 0 0 0 15 10Z', clipRule: 'evenodd' })));
};
var ForwardRef$Z = forwardRef(SvgUserBlock);

var SvgUserCircleAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.582 17.919c0 .66.116 1.292.329 1.878a9 9 0 1 1 6.928-7.092 5.5 5.5 0 0 0-7.257 5.213ZM11 13.75a8.21 8.21 0 0 0-3.995 1.03.75.75 0 0 1-.727-1.312A9.71 9.71 0 0 1 11 12.25c.366 0 .727.02 1.082.06a.75.75 0 1 1-.164 1.49 8.343 8.343 0 0 0-.918-.05ZM11 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm11 13a4.002 4.002 0 0 0-4-4 4 4 0 1 0 4 4Zm-3.25-2a.75.75 0 0 0-1.5 0v1.25H16a.75.75 0 0 0 0 1.5h1.25V20a.75.75 0 0 0 1.5 0v-1.25H20a.75.75 0 0 0 0-1.5h-1.25V16Z', clipRule: 'evenodd' })));
};
var ForwardRef$Y = forwardRef(SvgUserCircleAdd);

var SvgUserCircleBlock = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.582 17.919c0 .66.116 1.292.329 1.878a9 9 0 1 1 6.928-7.092 5.5 5.5 0 0 0-7.257 5.213ZM11 13.75a8.21 8.21 0 0 0-3.995 1.03.75.75 0 0 1-.727-1.312A9.71 9.71 0 0 1 11 12.25c.366 0 .727.02 1.082.06a.75.75 0 1 1-.164 1.49 8.343 8.343 0 0 0-.918-.05ZM11 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm7 9a3.98 3.98 0 0 1 2.248.691l-5.557 5.557A4 4 0 0 1 18 14Zm-2.248 7.309 5.557-5.557a4 4 0 0 1-5.557 5.557Z', clipRule: 'evenodd' })));
};
var ForwardRef$X = forwardRef(SvgUserCircleBlock);

var SvgUserCircleMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.582 17.919c0 .66.116 1.292.329 1.878a9 9 0 1 1 6.928-7.092 5.5 5.5 0 0 0-7.257 5.213ZM11 13.75a8.21 8.21 0 0 0-3.995 1.03.75.75 0 0 1-.727-1.312A9.71 9.71 0 0 1 11 12.25c.366 0 .727.02 1.082.06a.75.75 0 1 1-.164 1.49 8.343 8.343 0 0 0-.918-.05ZM11 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm11 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-1.25 0a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$W = forwardRef(SvgUserCircleMinus);

var SvgUserCircleRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12.582 17.919c0 .66.116 1.292.329 1.878a9 9 0 1 1 6.928-7.092 5.5 5.5 0 0 0-7.257 5.213ZM11 13.75a8.21 8.21 0 0 0-3.995 1.03.75.75 0 0 1-.727-1.312A9.71 9.71 0 0 1 11 12.25c.366 0 .727.02 1.082.06a.75.75 0 1 1-.164 1.49 8.343 8.343 0 0 0-.918-.05ZM11 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm11 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-3.116 1.945a.75.75 0 0 0 1.06-1.061L19.062 18l.884-.884a.75.75 0 0 0-1.061-1.06l-.884.883-.884-.884a.75.75 0 0 0-1.06 1.061l.883.884-.884.884a.75.75 0 1 0 1.061 1.06l.884-.883.884.884Z', clipRule: 'evenodd' })));
};
var ForwardRef$V = forwardRef(SvgUserCircleRemove);

var SvgUserCircle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 12a9.976 9.976 0 0 1-3.441 7.549A9.961 9.961 0 0 1 12 22a9.961 9.961 0 0 1-6.559-2.451A9.977 9.977 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10Zm-7-3a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm-3 5c1.713 0 2.839.917 3.633 1.935.593.76.389 1.876-.47 2.312A6.97 6.97 0 0 1 12 19a6.97 6.97 0 0 1-3.162-.753c-.86-.436-1.064-1.551-.471-2.312C9.16 14.917 10.287 14 12 14Z', clipRule: 'evenodd' })));
};
var ForwardRef$U = forwardRef(SvgUserCircle);

var SvgUserCommunity = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 6c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2Zm11 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2 1.343-2 3-2ZM11.25 3a.75.75 0 0 1 .75-.75A9.75 9.75 0 0 1 21.75 12a.75.75 0 0 1-1.5 0A8.25 8.25 0 0 0 12 3.75a.75.75 0 0 1-.75-.75ZM3 11.25a.75.75 0 0 1 .75.75A8.25 8.25 0 0 0 12 20.25a.75.75 0 0 1 0 1.5A9.75 9.75 0 0 1 2.25 12a.75.75 0 0 1 .75-.75Z', clipRule: 'evenodd' })));
};
var ForwardRef$T = forwardRef(SvgUserCommunity);

var SvgUserMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm3 10c0 2.21-3.134 4-7 4s-7-1.79-7-4 3.134-4 7-4 7 1.79 7 4Zm-1-7.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$S = forwardRef(SvgUserMinus);

var SvgUserPolygon = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M9.922 2.571a4.067 4.067 0 0 1 4.156 0l4.844 2.868C20.208 6.201 21 7.61 21 9.132v5.736c0 1.523-.792 2.931-2.078 3.693l-.621.367-4.222 2.5a4.067 4.067 0 0 1-4.157 0l-4.223-2.5-.62-.367C3.791 17.799 3 16.39 3 14.868V9.132c0-1.523.792-2.931 2.078-3.693l4.844-2.868Zm6.173 12.633C15.023 14.457 13.583 14 12 14c-1.583 0-3.023.457-4.095 1.204-.515.359-.407 1.095.13 1.418l3.45 2.07a1 1 0 0 0 1.03 0l3.45-2.07c.537-.323.645-1.06.13-1.418ZM12 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z', clipRule: 'evenodd' })));
};
var ForwardRef$R = forwardRef(SvgUserPolygon);

var SvgUserRectangle = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2H6a4 4 0 0 0-4 4v12a4.002 4.002 0 0 0 4 4h12a4.002 4.002 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-3 7a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm-7.847 8.015C7.7 15.282 9.663 14 12 14c2.337 0 4.3 1.282 4.847 3.015.167.527-.295.985-.847.985H8c-.552 0-1.014-.458-.847-.985Z', clipRule: 'evenodd' })));
};
var ForwardRef$Q = forwardRef(SvgUserRectangle);

var SvgUserRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M14 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm3 10c0 2.21-3.134 4-7 4s-7-1.79-7-4 3.134-4 7-4 7 1.79 7 4Zm-.47-9.53a.75.75 0 1 0-1.06 1.06L16.94 10l-1.47 1.47a.75.75 0 1 0 1.06 1.06L18 11.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L19.06 10l1.47-1.47a.75.75 0 0 0-1.06-1.06L18 8.94l-1.47-1.47Z', clipRule: 'evenodd' })));
};
var ForwardRef$P = forwardRef(SvgUserRemove);

var SvgUser = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 10c3.866 0 7-1.79 7-4s-3.134-4-7-4-7 1.79-7 4 3.134 4 7 4Z', clipRule: 'evenodd' })));
};
var ForwardRef$O = forwardRef(SvgUser);

var SvgUsersDouble = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 10c3.866 0 7-1.79 7-4s-3.134-4-7-4-7 1.79-7 4 3.134 4 7 4Zm3.961-10.184A5.482 5.482 0 0 0 15.5 7c0-.705-.133-1.378-.374-1.997a3 3 0 1 1-1.165 5.813ZM18.5 17c0 .539-.12 1.06-.343 1.552C19.863 18.021 21 17.078 21 16c0-1.506-2.22-2.753-5.113-2.967 1.61 1 2.613 2.408 2.613 3.967Z', clipRule: 'evenodd' })));
};
var ForwardRef$N = forwardRef(SvgUsersDouble);

var SvgUsersTriple = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 8c3.314 0 6-1.343 6-3s-2.686-3-6-3-6 1.343-6 3 2.686 3 6 3Zm-5.618-5.981C3.912 13.171 2 14.224 2 15.5c0 1.052 1.3 1.952 3.14 2.321-.412-.556-.64-1.173-.64-1.82 0-1.144.71-2.188 1.882-2.982ZM19.5 16c0 .648-.228 1.265-.64 1.821 1.84-.369 3.14-1.269 3.14-2.32 0-1.277-1.912-2.33-4.382-2.482C18.79 13.813 19.5 14.857 19.5 16Zm-3.782-5.465a4.518 4.518 0 0 0 .69-3.446 2 2 0 1 1-.69 3.446ZM7 7a2 2 0 0 1 .592.09 4.52 4.52 0 0 0 .69 3.445A2 2 0 1 1 7 7Z', clipRule: 'evenodd' })));
};
var ForwardRef$M = forwardRef(SvgUsersTriple);

var SvgVibrateMode = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M7.5 7a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2V7ZM19 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75ZM22.75 9a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0V9ZM5 14.75a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75ZM1.25 15a.75.75 0 0 0 1.5 0V9a.75.75 0 0 0-1.5 0v6Z', clipRule: 'evenodd' })));
};
var ForwardRef$L = forwardRef(SvgVibrateMode);

var SvgVideoOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M1.47 1.47a.75.75 0 0 0 0 1.06l2.21 2.211A3.995 3.995 0 0 0 2 8v8a4 4 0 0 0 4 4h6c1.883 0 3.461-1.3 3.887-3.052l5.583 5.582a.75.75 0 1 0 1.06-1.06l-20-20a.75.75 0 0 0-1.06 0ZM16 12.94 7.06 4H12a4 4 0 0 1 4 4v4.94Zm1.5 1.5 2.507 2.506c1.018-.011 1.993-.802 1.993-2.004V9.057c0-1.813-2.219-2.69-3.46-1.367L17.5 8.8v5.64Z', clipRule: 'evenodd' })));
};
var ForwardRef$K = forwardRef(SvgVideoOff);

var SvgVideo = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2 8a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Zm11 1a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm5.54 7.31L17.5 15.2V8.8l1.04-1.11C19.782 6.367 22 7.244 22 9.057v5.885c0 1.813-2.219 2.691-3.46 1.368Z', clipRule: 'evenodd' })));
};
var ForwardRef$J = forwardRef(SvgVideo);

var SvgViewOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.87 9.853a3.085 3.085 0 0 0 0 4.294C4.825 16.205 8.184 19 12 19c1.66 0 3.234-.53 4.643-1.296l2.827 2.826a.75.75 0 1 0 1.06-1.06l-16-16a.75.75 0 0 0-1.06 1.06l2.575 2.575C4.782 7.975 3.7 8.98 2.87 9.853ZM9 12a3 3 0 0 0 4.524 2.585l-4.109-4.109A2.986 2.986 0 0 0 9 12Zm12.13-2.147a3.085 3.085 0 0 1 0 4.294 21.835 21.835 0 0 1-2.032 1.89l-4.099-4.098A3 3 0 0 0 12.061 9L8.72 5.658C9.754 5.25 10.857 5 11.999 5c3.816 0 7.175 2.795 9.131 4.853Z', clipRule: 'evenodd' })));
};
var ForwardRef$I = forwardRef(SvgViewOff);

var SvgViewPrivacy = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 18a8.39 8.39 0 0 0 2-.248v-4.516A3 3 0 1 1 14.83 10h7.002a3.162 3.162 0 0 0-.702-1.147C19.174 6.795 15.816 4 12 4 8.184 4 4.825 6.795 2.87 8.853a3.085 3.085 0 0 0 0 4.294C4.825 15.205 8.184 18 12 18Zm6.5-5.25a.75.75 0 0 0-.75.75V15h1.5v-1.5a.75.75 0 0 0-.75-.75Zm-2.25.75v1.645A2 2 0 0 0 15 17v1a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-1a2 2 0 0 0-1.25-1.855V13.5a2.25 2.25 0 0 0-4.5 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$H = forwardRef(SvgViewPrivacy);

var SvgView = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M21.13 14.147a3.085 3.085 0 0 0 0-4.294C19.174 7.795 15.816 5 12 5 8.184 5 4.825 7.795 2.87 9.853a3.085 3.085 0 0 0 0 4.294C4.825 16.205 8.184 19 12 19c3.816 0 7.174-2.795 9.13-4.853ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', clipRule: 'evenodd' })));
};
var ForwardRef$G = forwardRef(SvgView);

var SvgWalletAddClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 3a4 4 0 0 1 4 4v7a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4v-1.5h4a3.5 3.5 0 1 0 0-7H2V7a4 4 0 0 1 4-4h12ZM8 12a2 2 0 0 0-2-2H2v4h4a2 2 0 0 0 2-2Zm11.75 5a.75.75 0 0 0-1.5 0v1.25H17a.75.75 0 0 0 0 1.5h1.25V21a.75.75 0 0 0 1.5 0v-1.25H21a.75.75 0 0 0 0-1.5h-1.25V17Z', clipRule: 'evenodd' })));
};
var ForwardRef$F = forwardRef(SvgWalletAddClose);

var SvgWalletAdd = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2h-6a4.001 4.001 0 0 0-3.71 2.5h13.42A4.001 4.001 0 0 0 18 2ZM2 16v-4h4a2 2 0 1 1 0 4H2ZM6 6h16v8a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v2a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4v-.5h4a3.5 3.5 0 1 0 0-7H2V10a4 4 0 0 1 4-4Zm13.75 12a.75.75 0 0 0-1.5 0v1.25H17a.75.75 0 0 0 0 1.5h1.25V22a.75.75 0 0 0 1.5 0v-1.25H21a.75.75 0 0 0 0-1.5h-1.25V18Z', clipRule: 'evenodd' })));
};
var ForwardRef$E = forwardRef(SvgWalletAdd);

var SvgWalletArrowDownClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2a4 4 0 0 1 4 4v7a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4v-1.5h4a3.5 3.5 0 1 0 0-7H2V6a4 4 0 0 1 4-4h12ZM8 11a2 2 0 0 0-2-2H2v4h4a2 2 0 0 0 2-2Zm9.53 7.884.72.72V16a.75.75 0 0 1 1.5 0v3.604l.72-.72a.75.75 0 1 1 1.06 1.06l-1.293 1.293a1.75 1.75 0 0 1-2.474 0l-1.293-1.292a.75.75 0 1 1 1.06-1.061Z', clipRule: 'evenodd' })));
};
var ForwardRef$D = forwardRef(SvgWalletArrowDownClose);

var SvgWalletArrowDown = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2h-6a4.001 4.001 0 0 0-3.71 2.5h13.42A4.001 4.001 0 0 0 18 2ZM2 16v-4h4a2 2 0 1 1 0 4H2ZM6 6h16v8a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v2a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4v-.5h4a3.5 3.5 0 1 0 0-7H2V10a4 4 0 0 1 4-4Zm11.53 13.884.72.72V17a.75.75 0 0 1 1.5 0v3.604l.72-.72a.75.75 0 1 1 1.06 1.06l-1.293 1.293a1.75 1.75 0 0 1-2.474 0l-1.293-1.292a.75.75 0 1 1 1.06-1.061Z', clipRule: 'evenodd' })));
};
var ForwardRef$C = forwardRef(SvgWalletArrowDown);

var SvgWalletArrowLeftClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 3a4 4 0 0 1 4 4v7a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4v-1.5h4a3.5 3.5 0 1 0 0-7H2V7a4 4 0 0 1 4-4h12ZM8 12a2 2 0 0 0-2-2H2v4h4a2 2 0 0 0 2-2Zm11.116 5.53-.72.72H22a.75.75 0 0 1 0 1.5h-3.604l.72.72a.75.75 0 1 1-1.06 1.06l-1.293-1.293a1.75 1.75 0 0 1 0-2.474l1.292-1.293a.75.75 0 1 1 1.061 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$B = forwardRef(SvgWalletArrowLeftClose);

var SvgWalletArrowLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2h-6a4.001 4.001 0 0 0-3.71 2.5h13.42A4.001 4.001 0 0 0 18 2ZM2 16v-4h4a2 2 0 1 1 0 4H2ZM6 6h16v8a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v2a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4v-.5h4a3.5 3.5 0 1 0 0-7H2V10a4 4 0 0 1 4-4Zm13.116 12.53-.72.72H22a.75.75 0 0 1 0 1.5h-3.604l.72.72a.75.75 0 1 1-1.06 1.06l-1.293-1.293a1.75 1.75 0 0 1 0-2.474l1.292-1.293a.75.75 0 1 1 1.061 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$A = forwardRef(SvgWalletArrowLeft);

var SvgWalletArrowRightClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 3a4 4 0 0 1 4 4v7a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4v-1.5h4a3.5 3.5 0 1 0 0-7H2V7a4 4 0 0 1 4-4h12ZM8 12a2 2 0 0 0-2-2H2v4h4a2 2 0 0 0 2-2Zm11.884 5.53.72.72H17a.75.75 0 0 0 0 1.5h3.604l-.72.72a.75.75 0 1 0 1.06 1.06l1.293-1.293a1.75 1.75 0 0 0 0-2.474l-1.292-1.293a.75.75 0 1 0-1.061 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$z = forwardRef(SvgWalletArrowRightClose);

var SvgWalletArrowRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2h-6a4.001 4.001 0 0 0-3.71 2.5h13.42A4.001 4.001 0 0 0 18 2ZM2 16v-4h4a2 2 0 1 1 0 4H2ZM6 6h16v8a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v2a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4v-.5h4a3.5 3.5 0 1 0 0-7H2V10a4 4 0 0 1 4-4Zm13.884 12.53.72.72H17a.75.75 0 0 0 0 1.5h3.604l-.72.72a.75.75 0 1 0 1.06 1.06l1.293-1.293a1.75 1.75 0 0 0 0-2.474l-1.292-1.293a.75.75 0 1 0-1.061 1.06Z', clipRule: 'evenodd' })));
};
var ForwardRef$y = forwardRef(SvgWalletArrowRight);

var SvgWalletArrowUpClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2a4 4 0 0 1 4 4v7a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4v-1.5h4a3.5 3.5 0 1 0 0-7H2V6a4 4 0 0 1 4-4h12ZM8 11a2 2 0 0 0-2-2H2v4h4a2 2 0 0 0 2-2Zm9.53 7.116.72-.72V21a.75.75 0 0 0 1.5 0v-3.604l.72.72a.75.75 0 1 0 1.06-1.06l-1.293-1.293a1.75 1.75 0 0 0-2.474 0l-1.293 1.292a.75.75 0 1 0 1.06 1.061Z', clipRule: 'evenodd' })));
};
var ForwardRef$x = forwardRef(SvgWalletArrowUpClose);

var SvgWalletArrowUp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2h-6a4.001 4.001 0 0 0-3.71 2.5h13.42A4.001 4.001 0 0 0 18 2ZM2 16v-4h4a2 2 0 1 1 0 4H2ZM6 6h16v8a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v2a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4v-.5h4a3.5 3.5 0 1 0 0-7H2V10a4 4 0 0 1 4-4Zm11.53 13.116.72-.72V22a.75.75 0 0 0 1.5 0v-3.604l.72.72a.75.75 0 1 0 1.06-1.06l-1.293-1.293a1.75 1.75 0 0 0-2.474 0l-1.293 1.292a.75.75 0 1 0 1.06 1.061Z', clipRule: 'evenodd' })));
};
var ForwardRef$w = forwardRef(SvgWalletArrowUp);

var SvgWalletCheckClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1.5h4a3.5 3.5 0 1 1 0 7H2V17a4 4 0 0 0 4 4h7a1 1 0 0 0 1-1v-1a4 4 0 0 1 4-4h3a1 1 0 0 0 1-1V7ZM8 12a2 2 0 0 0-2-2H2v4h4a2 2 0 0 0 2-2Zm14.494 4.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .936-1.172l1.753 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z', clipRule: 'evenodd' })));
};
var ForwardRef$v = forwardRef(SvgWalletCheckClose);

var SvgWalletCheck = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2h-6a4.001 4.001 0 0 0-3.71 2.5h13.42A4.001 4.001 0 0 0 18 2ZM2 16v-4h4a2 2 0 1 1 0 4H2ZM6 6h16v8a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v2a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4v-.5h4a3.5 3.5 0 1 0 0-7H2V10a4 4 0 0 1 4-4Zm16.564 12.494a.75.75 0 1 0-1.128-.988l-2.87 3.28a.25.25 0 0 1-.345.03l-1.753-1.402a.75.75 0 0 0-.937 1.172l1.753 1.402a1.75 1.75 0 0 0 2.41-.214l2.87-3.28Z', clipRule: 'evenodd' })));
};
var ForwardRef$u = forwardRef(SvgWalletCheck);

var SvgWalletClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1.5h4a3.5 3.5 0 1 1 0 7H2V17a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V7ZM6 10a2 2 0 1 1 0 4H2v-4h4Z', clipRule: 'evenodd' })));
};
var ForwardRef$t = forwardRef(SvgWalletClose);

var SvgWalletMinusClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 3a4 4 0 0 1 4 4v7a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4v-1.5h4a3.5 3.5 0 1 0 0-7H2V7a4 4 0 0 1 4-4h12ZM8 12a2 2 0 0 0-2-2H2v4h4a2 2 0 0 0 2-2Zm13 6.75a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5h4Z', clipRule: 'evenodd' })));
};
var ForwardRef$s = forwardRef(SvgWalletMinusClose);

var SvgWalletMinus = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2h-6a4.001 4.001 0 0 0-3.71 2.5h13.42A4.001 4.001 0 0 0 18 2ZM2 16v-4h4a2 2 0 1 1 0 4H2ZM6 6h16v8a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v2a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4v-.5h4a3.5 3.5 0 1 0 0-7H2V10a4 4 0 0 1 4-4Zm15 13.75a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5h4Z', clipRule: 'evenodd' })));
};
var ForwardRef$r = forwardRef(SvgWalletMinus);

var SvgWalletOpenLeft = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2H6a4.001 4.001 0 0 0-3.71 2.5h13.42A4.001 4.001 0 0 0 12 2Zm10 14h-4a2 2 0 1 1 0-4h4v4ZM2 6h16a4 4 0 0 1 4 4v.5h-4a3.5 3.5 0 1 0 0 7h4v.5a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z', clipRule: 'evenodd' })));
};
var ForwardRef$q = forwardRef(SvgWalletOpenLeft);

var SvgWalletOpenRight = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2h6a4.001 4.001 0 0 1 3.71 2.5H8.29A4.001 4.001 0 0 1 12 2ZM2 12v4h4a2 2 0 1 0 0-4H2Zm20-6H6a4 4 0 0 0-4 4v.5h4a3.5 3.5 0 1 1 0 7H2v.5a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6Z', clipRule: 'evenodd' })));
};
var ForwardRef$p = forwardRef(SvgWalletOpenRight);

var SvgWalletRemoveClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 3a4 4 0 0 1 4 4v7a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4v-1.5h4a3.5 3.5 0 1 0 0-7H2V7a4 4 0 0 1 4-4h12ZM8 12a2 2 0 0 0-2-2H2v4h4a2 2 0 0 0 2-2Zm12.945 6.116a.75.75 0 1 0-1.061-1.06l-.884.883-.884-.884a.75.75 0 1 0-1.06 1.061l.883.884-.884.884a.75.75 0 0 0 1.061 1.06l.884-.883.884.884a.75.75 0 1 0 1.06-1.061L20.062 19l.884-.884Z', clipRule: 'evenodd' })));
};
var ForwardRef$o = forwardRef(SvgWalletRemoveClose);

var SvgWalletRemove = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 2h-6a4.001 4.001 0 0 0-3.71 2.5h13.42A4.001 4.001 0 0 0 18 2ZM2 16v-4h4a2 2 0 1 1 0 4H2ZM6 6h16v8a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v2a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4v-.5h4a3.5 3.5 0 1 0 0-7H2V10a4 4 0 0 1 4-4Zm12.116 12.055a.75.75 0 1 0-1.06 1.061l.883.884-.884.884a.75.75 0 0 0 1.061 1.06l.884-.883.884.884a.75.75 0 0 0 1.06-1.061L20.062 20l.884-.884a.75.75 0 0 0-1.061-1.06l-.884.883-.884-.884Z', clipRule: 'evenodd' })));
};
var ForwardRef$n = forwardRef(SvgWalletRemove);

var SvgWalletUserClose = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1.5h4a3.5 3.5 0 1 1 0 7H2V16a4 4 0 0 0 4 4h7a1 1 0 0 0 1-1v-1a4 4 0 0 1 4-4h3a1 1 0 0 0 1-1V6ZM6 9a2 2 0 1 1 0 4H2V9h4Zm15 8a2 2 0 1 0-2 2c-1.246 0-2.377.641-3.208 1.684-.451.566.024 1.316.748 1.316h4.92c.724 0 1.199-.75.748-1.316C21.378 19.641 20.246 19 19 19a2 2 0 0 0 2-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$m = forwardRef(SvgWalletUserClose);

var SvgWalletUser = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 2h6a4.001 4.001 0 0 1 3.71 2.5H8.29A4.001 4.001 0 0 1 12 2ZM2 12v4h4a2 2 0 1 0 0-4H2Zm20-6H6a4 4 0 0 0-4 4v.5h4a3.5 3.5 0 1 1 0 7H2v.5a4 4 0 0 0 4 4h7a1 1 0 0 0 1-1v-3a4 4 0 0 1 4-4h3a1 1 0 0 0 1-1V6Zm-1 11a2 2 0 1 0-2 2c-1.246 0-2.377.641-3.208 1.684-.451.566.024 1.316.748 1.316h4.92c.724 0 1.199-.75.748-1.316C21.378 19.641 20.246 19 19 19a2 2 0 0 0 2-2Z', clipRule: 'evenodd' })));
};
var ForwardRef$l = forwardRef(SvgWalletUser);

var SvgWallet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2 7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v1.5h-4a3.5 3.5 0 1 0 0 7h4V17a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7Zm16 7h4v-4h-4a2 2 0 1 0 0 4Z', clipRule: 'evenodd' })));
};
var ForwardRef$k = forwardRef(SvgWallet);

var SvgWarehouse = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3.706 6.806A4 4 0 0 0 2 10.082V20a2 2 0 0 0 2 2h1.25v-9A2.75 2.75 0 0 1 8 10.25h8A2.75 2.75 0 0 1 18.75 13v9H20a2 2 0 0 0 2-2v-9.918a4 4 0 0 0-1.706-3.276l-6-4.2a4 4 0 0 0-4.588 0l-6 4.2ZM17.25 22v-2.25H6.75V22h10.5Zm-10.5-3.75v-2.5h10.5v2.5H6.75Zm0-4h10.5V13c0-.69-.56-1.25-1.25-1.25H8c-.69 0-1.25.56-1.25 1.25v1.25Z', clipRule: 'evenodd' })));
};
var ForwardRef$j = forwardRef(SvgWarehouse);

var SvgWhatsapp = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M22 12c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-4.27-.955l-4.356.726a1 1 0 0 1-1.151-1.146l.713-4.396A9.962 9.962 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10Zm-6 2.675v.436a.889.889 0 0 1-.889.889A7.111 7.111 0 0 1 8 8.889C8 8.398 8.398 8 8.889 8h.436c.542 0 1.03.33 1.23.833l.187.466a1.08 1.08 0 0 1-.52 1.368s.222 1.11 1.111 2c.89.889 2 1.11 2 1.11a1.08 1.08 0 0 1 1.367-.519l.467.187c.503.2.833.688.833 1.23Z', clipRule: 'evenodd' })));
};
var ForwardRef$i = forwardRef(SvgWhatsapp);

var SvgWheelChair = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3.25 3A.75.75 0 0 1 4 2.25h1A2.75 2.75 0 0 1 7.75 5v.25H17A2.75 2.75 0 0 1 19.75 8v7.55a2.755 2.755 0 0 1 1.431 1.836 2 2 0 1 1-1.812-.284 1.247 1.247 0 0 0-.869-.352h-5.043A6.5 6.5 0 0 0 6.25 9.543V5c0-.69-.56-1.25-1.25-1.25H4A.75.75 0 0 1 3.25 3ZM12 16a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z', clipRule: 'evenodd' })));
};
var ForwardRef$h = forwardRef(SvgWheelChair);

var SvgWheelChairHuman = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.75 2.75H15a.75.75 0 0 0 0-1.5h-3a7.75 7.75 0 1 0 5.384 13.325l.468.803a.75.75 0 0 0 .648.372H20a.75.75 0 0 0 0-1.5h-1.07l-3.282-5.628A.75.75 0 0 0 15 14.25h-2.25v-5.5Z', clipRule: 'evenodd' })));
};
var ForwardRef$g = forwardRef(SvgWheelChairHuman);

var SvgWidgets = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M13.1 5.242a2 2 0 0 0 0 2.829l2.829 2.828a2 2 0 0 0 2.828 0l2.829-2.828a2 2 0 0 0 0-2.829l-2.829-2.828a2 2 0 0 0-2.828 0L13.1 5.242ZM4 2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Zm0 12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H4Zm10 2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4Z', clipRule: 'evenodd' })));
};
var ForwardRef$f = forwardRef(SvgWidgets);

var SvgWifiSignalBad = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.393 18.83 3.036 8.898c-.594-.801-.513-1.93.26-2.56 5.448-4.45 11.96-4.45 17.408 0 .773.63.854 1.759.26 2.56l-2.508 3.386a2.25 2.25 0 0 0-3.047 3.307l.343.343-2.145 2.896a2 2 0 0 1-3.214 0Zm7.137-5.36a.75.75 0 1 0-1.06 1.06l1.59 1.591-1.59 1.591a.75.75 0 0 0 1.06 1.061l1.591-1.591 1.591 1.591a.75.75 0 0 0 1.061-1.06l-1.591-1.592 1.591-1.59a.75.75 0 1 0-1.06-1.061l-1.592 1.59-1.59-1.59Z', clipRule: 'evenodd' })));
};
var ForwardRef$e = forwardRef(SvgWifiSignalBad);

var SvgWifiSignalNoInternet = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M10.393 18.83 3.036 8.898c-.594-.801-.513-1.93.26-2.56 5.448-4.45 11.96-4.45 17.408 0 .773.63.854 1.759.26 2.56l-1.714 2.315V10a2.25 2.25 0 1 0-4.5 0v7.288l-1.143 1.542a2 2 0 0 1-3.214 0ZM17.75 10a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Zm0 7a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1Z', clipRule: 'evenodd' })));
};
var ForwardRef$d = forwardRef(SvgWifiSignalNoInternet);

var SvgWifiSignalOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3.53 2.47a.75.75 0 0 0-1.06 1.06l3.189 3.19c-.805.45-1.595.99-2.363 1.617-.773.631-.854 1.76-.26 2.561l7.357 9.932a2 2 0 0 0 3.214 0l2.623-3.54 4.24 4.24a.75.75 0 1 0 1.06-1.06l-18-18Zm17.434 8.428c.594-.801.513-1.93-.26-2.56-3.774-3.083-8.06-4.03-12.147-2.842l9.426 9.427 2.981-4.025Z', clipRule: 'evenodd' })));
};
var ForwardRef$c = forwardRef(SvgWifiSignalOff);

var SvgWifiSignal = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', d: 'M10.393 18.83 3.036 8.898c-.594-.801-.513-1.93.26-2.56 5.448-4.45 11.96-4.45 17.408 0 .773.63.854 1.759.26 2.56l-7.357 9.932a2 2 0 0 1-3.214 0Z' })));
};
var ForwardRef$b = forwardRef(SvgWifiSignal);

var SvgWifiOff = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M2.47 2.47a.75.75 0 0 1 1.06 0l2.707 2.706a.742.742 0 0 1 .024.024l3.753 3.753a.745.745 0 0 1 .023.023l5.17 5.17a.78.78 0 0 1 .02.021l6.303 6.303a.75.75 0 1 1-1.06 1.06l-6.26-6.26a3.231 3.231 0 0 0-1.765-.52 3.24 3.24 0 0 0-2.454 1.119.75.75 0 1 1-1.131-.985 4.74 4.74 0 0 1 3.336-1.628l-2.89-2.888a8.26 8.26 0 0 0-2.58 1.686.75.75 0 0 1-1.04-1.081 9.77 9.77 0 0 1 2.487-1.74L5.595 6.657c-.748.452-1.447.977-2.089 1.563a.75.75 0 1 1-1.012-1.107 14.807 14.807 0 0 1 2.012-1.545L2.47 3.53a.75.75 0 0 1 0-1.06ZM13.445 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8.758 5.27a13.26 13.26 0 0 1 3.687-.52 13.2 13.2 0 0 1 8.939 3.47.75.75 0 0 0 1.012-1.108 14.7 14.7 0 0 0-9.95-3.862c-1.424 0-2.801.202-4.105.579a.75.75 0 0 0 .417 1.44Zm4.307 3a.75.75 0 1 0-.094 1.497 8.219 8.219 0 0 1 5.193 2.287.75.75 0 1 0 1.04-1.081 9.718 9.718 0 0 0-6.139-2.704Z', clipRule: 'evenodd' })));
};
var ForwardRef$a = forwardRef(SvgWifiOff);

var SvgWifi = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M3.061 8.22A13.2 13.2 0 0 1 12 4.75a13.2 13.2 0 0 1 8.939 3.47.75.75 0 0 0 1.012-1.108A14.7 14.7 0 0 0 12 3.25a14.7 14.7 0 0 0-9.951 3.862A.75.75 0 0 0 3.06 8.22Zm3.22 3.834A8.22 8.22 0 0 1 12 9.75a8.22 8.22 0 0 1 5.719 2.304.75.75 0 1 0 1.04-1.081A9.72 9.72 0 0 0 12 8.25a9.72 9.72 0 0 0-6.759 2.723.75.75 0 1 0 1.04 1.08Zm3.265 3.815A3.24 3.24 0 0 1 12 14.75c.98 0 1.857.432 2.454 1.119a.75.75 0 0 0 1.131-.985A4.74 4.74 0 0 0 12 13.25a4.74 4.74 0 0 0-3.586 1.634.75.75 0 1 0 1.132.985ZM12 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', clipRule: 'evenodd' })));
};
var ForwardRef$9 = forwardRef(SvgWifi);

var SvgWirelessCharging = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.46 5.459a.75.75 0 1 0-1.061-1.06 10.719 10.719 0 0 0-3.149 7.6c0 2.97 1.204 5.658 3.149 7.602a.75.75 0 1 0 1.06-1.06A9.219 9.219 0 0 1 2.75 12a9.219 9.219 0 0 1 2.71-6.541Zm14.14-1.06a.75.75 0 0 0-1.06 1.06 9.219 9.219 0 0 1 2.709 6.54 9.218 9.218 0 0 1-2.71 6.542.75.75 0 0 0 1.061 1.06A10.719 10.719 0 0 0 22.75 12c0-2.969-1.204-5.657-3.149-7.602ZM8.288 8.286a.75.75 0 0 0-1.061-1.06A6.731 6.731 0 0 0 5.25 12a6.73 6.73 0 0 0 1.977 4.773.75.75 0 0 0 1.06-1.06A5.231 5.231 0 0 1 6.75 12c0-1.45.587-2.762 1.538-3.713Zm8.485-1.06a.75.75 0 0 0-1.06 1.06A5.231 5.231 0 0 1 17.25 12a5.23 5.23 0 0 1-1.538 3.712.75.75 0 1 0 1.061 1.06A6.73 6.73 0 0 0 18.75 12a6.731 6.731 0 0 0-1.977-4.773ZM13.6 8.45a.75.75 0 1 0-1.2-.9l-3 4a.75.75 0 0 0 .6 1.2h2.5l-2.1 2.8a.75.75 0 1 0 1.2.9l3-4a.75.75 0 0 0-.6-1.2h-2.5l2.1-2.8Z', clipRule: 'evenodd' })));
};
var ForwardRef$8 = forwardRef(SvgWirelessCharging);

var SvgWithdraw = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M18 3H6a4 4 0 0 0-1.5 7.71V7A1.5 1.5 0 0 1 6 5.5h12A1.5 1.5 0 0 1 19.5 7v3.71A4.001 4.001 0 0 0 18 3Zm0 16V7H6v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2Zm-6.75-3.81-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.293a.75.75 0 0 0-1.06-1.06l-.72.72V11a.75.75 0 1 0-1.5 0v4.19Z', clipRule: 'evenodd' })));
};
var ForwardRef$7 = forwardRef(SvgWithdraw);

var SvgYen = function (_a, ref) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', ref: ref, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: 'currentColor', fillRule: 'evenodd', d: 'M5.55 2.4a.75.75 0 0 1 1.05.15l5.4 7.2 5.4-7.2a.75.75 0 0 1 1.2.9l-5.1 6.8H18a.75.75 0 1 1 0 1.5h-5.25v2.5H18a.75.75 0 1 1 0 1.5h-5.25V21a.75.75 0 1 1-1.5 0v-5.25H6a.75.75 0 1 1 0-1.5h5.25v-2.5H6a.75.75 0 1 1 0-1.5h4.5l-5.1-6.8a.75.75 0 0 1 .15-1.05Z', clipRule: 'evenodd' })));
};
var ForwardRef$6 = forwardRef(SvgYen);

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

export { ForwardRef$au as AboutPhone, ForwardRef$at as Accessibility, ForwardRef$as as Activity, ForwardRef$ar as AddTo, ForwardRef$aq as AirPlane, ForwardRef$ao as AirplaneMode, ForwardRef$ap as AirplaneModeOff, ForwardRef$an as Ambulance, ForwardRef$am as AppsCircle, ForwardRef$al as AppsDoubleCircle, ForwardRef$ak as AppsRectangle, ForwardRef$aj as AppsTripleRectangle, ForwardRef$ag as ArrowBack, ForwardRef$ai as ArrowBackCircle, ForwardRef$ah as ArrowBackRectangle, ForwardRef$ad as ArrowDown, ForwardRef$af as ArrowDownCircle, ForwardRef$ae as ArrowDownRectangle, ForwardRef$ac as ArrowDropDown, ForwardRef$ab as ArrowDropLeft, ForwardRef$aa as ArrowDropRight, ForwardRef$a9 as ArrowDropUp, ForwardRef$a6 as ArrowLeft, ForwardRef$a8 as ArrowLeftCircle, ForwardRef$a7 as ArrowLeftRectangle, ForwardRef$a3 as ArrowMove, ForwardRef$a5 as ArrowMoveCircle, ForwardRef$a4 as ArrowMoveRectangle, ForwardRef$a0 as ArrowReturn, ForwardRef$a2 as ArrowReturnCircle, ForwardRef$a1 as ArrowReturnRectangle, ForwardRef$9Z as ArrowRight, ForwardRef$9$ as ArrowRightCircle, ForwardRef$9_ as ArrowRightRectangle, ForwardRef$9V as ArrowSort, ForwardRef$9Y as ArrowSortCircle, ForwardRef$9W as ArrowSortRectangle, ForwardRef$9X as ArrowSortRectangleHalf, ForwardRef$9U as ArrowThickDown, ForwardRef$9T as ArrowThickLeft, ForwardRef$9S as ArrowThickRight, ForwardRef$9R as ArrowThickUp, ForwardRef$9N as ArrowTransfer, ForwardRef$9Q as ArrowTransferCircle, ForwardRef$9O as ArrowTransferRectangle, ForwardRef$9P as ArrowTransferRectangleHalf, ForwardRef$9K as ArrowUp, ForwardRef$9M as ArrowUpCircle, ForwardRef$9L as ArrowUpRectangle, ForwardRef$9J as Atm, ForwardRef$9H as Auto, ForwardRef$9I as AutoRotation, ForwardRef$9G as BadgePercent, ForwardRef$9z as Bag, ForwardRef$9F as BagAdd, ForwardRef$9E as BagCheck, ForwardRef$9D as BagFavourite, ForwardRef$9C as BagMinus, ForwardRef$9B as BagRemove, ForwardRef$9A as BagSmile, ForwardRef$9y as Bank, ForwardRef$9w as BarChart, ForwardRef$9x as BarChartMiddleLong, ForwardRef$9v as BarcodeBorder, ForwardRef$9k as Battery, ForwardRef$9u as BatteryAlert, ForwardRef$9s as BatteryCharging, ForwardRef$9t as BatteryChargingFull, ForwardRef$9n as BatteryHorizontal, ForwardRef$9r as BatteryHorizontalCharging, ForwardRef$9q as BatteryHorizontalFull, ForwardRef$9p as BatteryHorizontalLowbet, ForwardRef$9o as BatteryHorizontalSavingMode, ForwardRef$9m as BatteryLowbet, ForwardRef$9l as BatterySavingMode, ForwardRef$9j as Bill, ForwardRef$9h as Blood, ForwardRef$9i as BloodPlus, ForwardRef$9e as Bluetooth, ForwardRef$9g as BluetoothConnected, ForwardRef$9f as BluetoothOff, ForwardRef$9d as Board, ForwardRef$9c as Bookmark, ForwardRef$9b as BoxAdd, ForwardRef$9a as BoxArrowDown, ForwardRef$99 as BoxArrowUp, ForwardRef$98 as BoxCancel, ForwardRef$97 as BoxDone, ForwardRef$96 as BoxFavorite, ForwardRef$95 as BoxLocation, ForwardRef$94 as BoxMinus, ForwardRef$93 as BoxSearch, ForwardRef$92 as BoxTime, ForwardRef$90 as Briefcase, ForwardRef$91 as BriefcaseTriangular, ForwardRef$8$ as CallHospital, ForwardRef$8Y as Camera, ForwardRef$8_ as CameraOff, ForwardRef$8Z as CameraSwitch, ForwardRef$8W as Capsule, ForwardRef$8X as CapsuleOpen, ForwardRef$8V as CardAdd, ForwardRef$8U as CardArrowDown, ForwardRef$8T as CardArrowLeft, ForwardRef$8S as CardArrowRight, ForwardRef$8R as CardArrowUp, ForwardRef$8Q as CardCheck, ForwardRef$8P as CardDash, ForwardRef$8O as CardDot, ForwardRef$8N as CardMinus, ForwardRef$8M as CardRemove, ForwardRef$8L as CardUser, ForwardRef$8K as CardWithdraw, ForwardRef$8J as Cardiogram, ForwardRef$8H as Cargo, ForwardRef$8I as CargoShip, ForwardRef$8y as Cart, ForwardRef$8G as CartAdd, ForwardRef$8F as CartArrowDown, ForwardRef$8E as CartArrowUp, ForwardRef$8D as CartCheck, ForwardRef$8C as CartHasDash, ForwardRef$8B as CartMinus, ForwardRef$8A as CartRemove, ForwardRef$8z as CartSmile, ForwardRef$8x as Cast, ForwardRef$8w as Cctv, ForwardRef$8v as ChartArrowDown, ForwardRef$8u as ChartArrowUp, ForwardRef$8t as ChartHistogram, ForwardRef$8i as Clipboard, ForwardRef$8s as ClipboardActivity, ForwardRef$8r as ClipboardAdd, ForwardRef$8q as ClipboardCheck, ForwardRef$8p as ClipboardDelete, ForwardRef$8o as ClipboardDownload, ForwardRef$8n as ClipboardFavourite, ForwardRef$8m as ClipboardList, ForwardRef$8l as ClipboardMinus, ForwardRef$8k as ClipboardSearch, ForwardRef$8j as ClipboardUpload, ForwardRef$8d as Coin, ForwardRef$8h as CoinDollar, ForwardRef$8g as CoinEuro, ForwardRef$8f as CoinPound, ForwardRef$8e as CoinYen, ForwardRef$8c as ColorInversion, ForwardRef$8b as Computer, ForwardRef$8a as Coupon, ForwardRef$89 as Cube, ForwardRef$88 as DarkMode, ForwardRef$81 as Delivery, ForwardRef$87 as DeliveryAirPlane, ForwardRef$86 as DeliveryCancel, ForwardRef$85 as DeliveryConveyor, ForwardRef$84 as DeliveryDone, ForwardRef$83 as DeliveryParachute, ForwardRef$82 as DeliveryTime, ForwardRef$80 as Deposit, ForwardRef$7Y as Destination, ForwardRef$7$ as DestinationDashedThree, ForwardRef$7_ as DestinationDashedTwo, ForwardRef$7Z as DestinationLine, ForwardRef$7X as Devices, ForwardRef$7W as DigitalHealth, ForwardRef$7S as DirectionDown, ForwardRef$7T as DirectionDownDouble, ForwardRef$7V as DirectionDownDoubleCircle, ForwardRef$7U as DirectionDownDoubleRectangle, ForwardRef$7O as DirectionLeft, ForwardRef$7P as DirectionLeftDouble, ForwardRef$7R as DirectionLeftDoubleCircle, ForwardRef$7Q as DirectionLeftDoubleRectangle, ForwardRef$7K as DirectionRight, ForwardRef$7L as DirectionRightDouble, ForwardRef$7N as DirectionRightDoubleCircle, ForwardRef$7M as DirectionRightDoubleRectangle, ForwardRef$7G as DirectionUp, ForwardRef$7H as DirectionUpDouble, ForwardRef$7J as DirectionUpDoubleCircle, ForwardRef$7I as DirectionUpDoubleRectangle, ForwardRef$7F as Dna, ForwardRef$7E as DoNotDisturb, ForwardRef$7D as Dollar, ForwardRef$7B as Donate, ForwardRef$7C as DonateCoin, ForwardRef$7A as Donation, ForwardRef$7z as DownloadCircle, ForwardRef$7y as DownloadRectangle, ForwardRef$7x as Dribbble, ForwardRef$7w as Drive, ForwardRef$7v as Earnings, ForwardRef$7u as Euro, ForwardRef$7s as Exchange, ForwardRef$7t as ExchangeRectangle, ForwardRef$7p as Eye, ForwardRef$7r as EyeDropper, ForwardRef$7q as EyeScannerBorder, ForwardRef$7n as Facebook, ForwardRef$7o as FacebookSquare, ForwardRef$7m as FastDelivery, ForwardRef$7l as FastTime, ForwardRef$7k as Favourite, ForwardRef$7j as Figma, ForwardRef$7i as FilterBigCircle, ForwardRef$7h as FilterSmallCircle, ForwardRef$7f as FingerPrint, ForwardRef$7g as FingerPrintBorder, ForwardRef$7e as Fiverr, ForwardRef$7c as Flag, ForwardRef$7d as FlagCircle, ForwardRef$78 as Flash, ForwardRef$7b as FlashAuto, ForwardRef$7a as FlashLight, ForwardRef$79 as FlashOff, ForwardRef$77 as GiveBlood, ForwardRef$76 as GivePill, ForwardRef$75 as GlassBroken, ForwardRef$73 as Globe, ForwardRef$74 as GlobeEarth, ForwardRef$72 as Gmail, ForwardRef$71 as Gold, ForwardRef$6$ as Google, ForwardRef$70 as GooglePlus, ForwardRef$6X as Gps, ForwardRef$6_ as GpsCircle, ForwardRef$6Z as GpsOff, ForwardRef$6Y as GpsSend, ForwardRef$6W as GraphicEq, ForwardRef$6V as Hanger, ForwardRef$6U as Hangout, ForwardRef$6T as HealthCare, ForwardRef$6S as Heart, ForwardRef$6n as Home, ForwardRef$6R as HomeAdd, ForwardRef$6Q as HomeArrowDown, ForwardRef$6P as HomeArrowUp, ForwardRef$6O as HomeCelsius, ForwardRef$6N as HomeCheck, ForwardRef$6M as HomeCloud, ForwardRef$6L as HomeDownload, ForwardRef$6K as HomeEye, ForwardRef$6J as HomeFavourite, ForwardRef$6I as HomeFilter, ForwardRef$6H as HomeFlash, ForwardRef$6G as HomeFluid, ForwardRef$6F as HomeGraph, ForwardRef$6E as HomeInformation, ForwardRef$6D as HomeLink, ForwardRef$6B as HomeLocation, ForwardRef$6C as HomeLocationBig, ForwardRef$6A as HomeLock, ForwardRef$6z as HomeMail, ForwardRef$6y as HomeMinus, ForwardRef$6x as HomeNotification, ForwardRef$6w as HomePower, ForwardRef$6v as HomeRemove, ForwardRef$6u as HomeSetting, ForwardRef$6t as HomeShare, ForwardRef$6s as HomeShield, ForwardRef$6r as HomeUpload, ForwardRef$6q as HomeWarning, ForwardRef$6p as HomeWave, ForwardRef$6o as HomeWifi, ForwardRef$6m as Honey, ForwardRef$6j as Hospital, ForwardRef$6l as HospitalBed, ForwardRef$6k as HospitalPanel, ForwardRef$6h as Hotspot, ForwardRef$6i as HotspotOff, ForwardRef$6g as InCircle, ForwardRef$6f as InRectangle, ForwardRef$6e as Injection, ForwardRef$6d as Instagram, ForwardRef$6c as Internet, ForwardRef$6a as Invoice, ForwardRef$6b as InvoicePercent, ForwardRef$69 as Laptop, ForwardRef$68 as LightMode, ForwardRef$65 as LineChart, ForwardRef$67 as LineChartAscending, ForwardRef$66 as LineChartDescending, ForwardRef$64 as Linkedln, ForwardRef$5Z as Location, ForwardRef$63 as LocationAdd, ForwardRef$62 as LocationHospital, ForwardRef$61 as LocationMinus, ForwardRef$60 as LocationRemove, ForwardRef$5$ as LocationShare, ForwardRef$5_ as LocationUser, ForwardRef$5Y as Lock, ForwardRef$5C as Map, ForwardRef$5T as MapAccordion, ForwardRef$5X as MapAccordionBelow, ForwardRef$5W as MapAccordionFlag, ForwardRef$5V as MapAccordionPin, ForwardRef$5U as MapAccordionTop, ForwardRef$5S as MapBig, ForwardRef$5R as MapCircleGps, ForwardRef$5Q as MapFlag, ForwardRef$5N as MapGps, ForwardRef$5P as MapGpsBelow, ForwardRef$5O as MapGpsNavigation, ForwardRef$5I as MapLocation, ForwardRef$5M as MapLocationAccordion, ForwardRef$5L as MapLocationBelow, ForwardRef$5K as MapLocationMiddle, ForwardRef$5J as MapLocationTop, ForwardRef$5H as MapPaper, ForwardRef$5F as MapPeople, ForwardRef$5G as MapPeopleAccordion, ForwardRef$5E as MapPin, ForwardRef$5D as MapSmall, ForwardRef$5B as Mask, ForwardRef$5A as MasterCard, ForwardRef$5z as MaximizeCircle, ForwardRef$5x as MaximizeRectangle, ForwardRef$5y as MaximizeRectangleDoted, ForwardRef$5w as MedicalBook, ForwardRef$5v as MedicalInformation, ForwardRef$5u as MedicalService, ForwardRef$5t as MenuCircleHorizontal, ForwardRef$5s as MenuCircleVertical, ForwardRef$5r as MenuHome, ForwardRef$5p as MenuLineHorizontal, ForwardRef$5q as MenuLineHorizontalHalf, ForwardRef$5n as MenuLineVertical, ForwardRef$5o as MenuLineVerticalHalf, ForwardRef$5m as MenuUser, ForwardRef$5l as Messenger, ForwardRef$5k as MiniStoreCrooked, ForwardRef$5j as MiniStoreSmile, ForwardRef$5i as MinimizeCircle, ForwardRef$5g as MinimizeRectangle, ForwardRef$5h as MinimizeRectangleDoted, ForwardRef$5c as Mobile, ForwardRef$5e as MobileData, ForwardRef$5f as MobileDataOff, ForwardRef$5d as MobilePayment, ForwardRef$4J as Money, ForwardRef$5b as MoneyAdd, ForwardRef$5a as MoneyArrowDown, ForwardRef$59 as MoneyArrowLeft, ForwardRef$58 as MoneyArrowRight, ForwardRef$57 as MoneyArrowUp, ForwardRef$50 as MoneyBag, ForwardRef$56 as MoneyBagCoin, ForwardRef$55 as MoneyBagCoins, ForwardRef$54 as MoneyBagDollar, ForwardRef$53 as MoneyBagEuro, ForwardRef$52 as MoneyBagPound, ForwardRef$51 as MoneyBagYen, ForwardRef$4$ as MoneyBigCircle, ForwardRef$4_ as MoneyCheck, ForwardRef$4Z as MoneyCoin, ForwardRef$4Y as MoneyDash, ForwardRef$4X as MoneyDollar, ForwardRef$4W as MoneyDoubleDot, ForwardRef$4V as MoneyEuro, ForwardRef$4U as MoneyFavourite, ForwardRef$4T as MoneyIncome, ForwardRef$4S as MoneyMinus, ForwardRef$4R as MoneyPound, ForwardRef$4Q as MoneyProfitBelow, ForwardRef$4P as MoneyProfitTop, ForwardRef$4O as MoneyRemove, ForwardRef$4N as MoneySmallCircle, ForwardRef$4M as MoneyUser, ForwardRef$4L as MoneyWithdraw, ForwardRef$4K as MoneyYen, ForwardRef$4H as Music, ForwardRef$4I as MusicOff, ForwardRef$4G as Navigation, ForwardRef$4F as Netflix, ForwardRef$4E as NextArrow, ForwardRef$4D as NightMode, ForwardRef$4A as Notification, ForwardRef$4C as NotificationOff, ForwardRef$4B as NotificationWithCircle, ForwardRef$4q as OpenBox, ForwardRef$4z as OpenBoxAdd, ForwardRef$4y as OpenBoxArrowDown, ForwardRef$4x as OpenBoxArrowUp, ForwardRef$4w as OpenBoxDone, ForwardRef$4v as OpenBoxFavorite, ForwardRef$4u as OpenBoxMinus, ForwardRef$4t as OpenBoxRemove, ForwardRef$4s as OpenBoxSearch, ForwardRef$4r as OpenBoxTwoSide, ForwardRef$4p as OutCircle, ForwardRef$4o as OutRectangle, ForwardRef$4b as Package, ForwardRef$4i as PackageBox, ForwardRef$4n as PackageBoxCube, ForwardRef$4m as PackageBoxDash, ForwardRef$4l as PackageBoxFavorite, ForwardRef$4k as PackageBoxHandle, ForwardRef$4j as PackageBoxTwoSide, ForwardRef$4h as PackageCube, ForwardRef$4g as PackageDashCentre, ForwardRef$4f as PackageDashLeft, ForwardRef$4e as PackageDashRight, ForwardRef$4d as PackageFavorite, ForwardRef$4c as PackageSun, ForwardRef$4a as PackagingAdd, ForwardRef$49 as PackagingArrowDown, ForwardRef$48 as PackagingArrowUp, ForwardRef$47 as PackagingCancel, ForwardRef$46 as PackagingDone, ForwardRef$45 as PackagingFavorite, ForwardRef$43 as PackagingLocation, ForwardRef$44 as PackagingLocationBox, ForwardRef$42 as PackagingMinus, ForwardRef$41 as PackagingSearch, ForwardRef$40 as PackagingTime, ForwardRef$3$ as PaperPin, ForwardRef$3_ as Parcel, ForwardRef$3Z as Payoneer, ForwardRef$3Y as Paypal, ForwardRef$3W as People, ForwardRef$3X as PeopleCircleBelow, ForwardRef$3V as PhoneLock, ForwardRef$3U as PieChart, ForwardRef$3T as PillTablet, ForwardRef$3R as Pills, ForwardRef$3S as PillsCapsule, ForwardRef$3P as Pin, ForwardRef$3Q as PinCircle, ForwardRef$3N as Pinterest, ForwardRef$3O as PinterestCircle, ForwardRef$3M as Plaster, ForwardRef$3L as Pound, ForwardRef$3K as Press, ForwardRef$3J as PreviousArrow, ForwardRef$3G as Profit, ForwardRef$3I as ProfitCart, ForwardRef$3H as ProfitCoin, ForwardRef$3F as Pyramid, ForwardRef$3E as QrScan, ForwardRef$3D as Receipt, ForwardRef$3z as Redo, ForwardRef$3C as RedoCircle, ForwardRef$3B as RedoRectangleLeft, ForwardRef$3A as RedoRectangleRight, ForwardRef$3w as Reload, ForwardRef$3y as ReloadCircle, ForwardRef$3x as ReloadRectangle, ForwardRef$3v as Restart, ForwardRef$3s as Return, ForwardRef$3u as ReturnBox, ForwardRef$3t as ReturnCircle, ForwardRef$3r as Reward, ForwardRef$3l as Road, ForwardRef$3q as RoadHorizontal, ForwardRef$3o as RoadLocation, ForwardRef$3p as RoadLocationHorizontal, ForwardRef$3m as RoadPin, ForwardRef$3n as RoadPinHorizontal, ForwardRef$2S as RoofHome, ForwardRef$3k as RoofHomeAdd, ForwardRef$3j as RoofHomeArrowDown, ForwardRef$3i as RoofHomeArrowUp, ForwardRef$3h as RoofHomeCelsius, ForwardRef$3g as RoofHomeCheck, ForwardRef$3f as RoofHomeCloud, ForwardRef$3e as RoofHomeDownload, ForwardRef$3d as RoofHomeEye, ForwardRef$3c as RoofHomeFavourite, ForwardRef$3b as RoofHomeFilter, ForwardRef$3a as RoofHomeFlash, ForwardRef$39 as RoofHomeFluid, ForwardRef$38 as RoofHomeGraph, ForwardRef$37 as RoofHomeInformation, ForwardRef$36 as RoofHomeLink, ForwardRef$34 as RoofHomeLocation, ForwardRef$35 as RoofHomeLocationBig, ForwardRef$33 as RoofHomeLock, ForwardRef$32 as RoofHomeMail, ForwardRef$31 as RoofHomeMinus, ForwardRef$30 as RoofHomeNotification, ForwardRef$2$ as RoofHomePower, ForwardRef$2_ as RoofHomeRemove, ForwardRef$2Z as RoofHomeSetting, ForwardRef$2Y as RoofHomeShare, ForwardRef$2X as RoofHomeShield, ForwardRef$2W as RoofHomeUpload, ForwardRef$2V as RoofHomeWarning, ForwardRef$2U as RoofHomeWave, ForwardRef$2T as RoofHomeWifi, ForwardRef$2R as RotateLock, ForwardRef$2P as SafeBox, ForwardRef$2Q as SafeBoxStar, ForwardRef$2O as ScreenRotate, ForwardRef$2N as Screenshot, ForwardRef$2M as SdStorage, ForwardRef$2L as Security, ForwardRef$2K as Sensor, ForwardRef$2J as Setting, ForwardRef$2I as Shield, ForwardRef$2H as Shipping, ForwardRef$2B as ShoppingBag, ForwardRef$2G as ShoppingBagAdd, ForwardRef$2F as ShoppingBagCheck, ForwardRef$2E as ShoppingBagFavourite, ForwardRef$2D as ShoppingBagMinus, ForwardRef$2C as ShoppingBagRemove, ForwardRef$2q as ShoppingBasket, ForwardRef$2A as ShoppingBasketAdd, ForwardRef$2z as ShoppingBasketArrowDown, ForwardRef$2y as ShoppingBasketArrowOut, ForwardRef$2x as ShoppingBasketCheck, ForwardRef$2w as ShoppingBasketDoubleDoor, ForwardRef$2v as ShoppingBasketFavourite, ForwardRef$2u as ShoppingBasketMinus, ForwardRef$2t as ShoppingBasketRemove, ForwardRef$2s as ShoppingBasketSimple, ForwardRef$2r as ShoppingBasketSingleDoor, ForwardRef$2p as ShutDown, ForwardRef$2j as SignalCellular, ForwardRef$2o as SignalCellularBad, ForwardRef$2n as SignalCellularLine, ForwardRef$2l as SignalCellularNoInternet, ForwardRef$2m as SignalCellularNoInternetDashed, ForwardRef$2k as SignalCellularOff, ForwardRef$2e as Signpost, ForwardRef$2i as SignpostBig, ForwardRef$2h as SignpostRight, ForwardRef$2g as SignpostSmall, ForwardRef$2f as SignpostTop, ForwardRef$2d as SimCard, ForwardRef$2c as Skype, ForwardRef$2b as Slack, ForwardRef$2a as SmartAirConditioning, ForwardRef$29 as SmartDoor, ForwardRef$28 as SmartHumidity, ForwardRef$26 as SmartKey, ForwardRef$27 as SmartKeyDotted, ForwardRef$25 as SmartLight, ForwardRef$24 as SmartLock, ForwardRef$23 as SmartMusic, ForwardRef$22 as SmartPhone, ForwardRef$21 as SmartPlug, ForwardRef$20 as SmartPower, ForwardRef$1$ as SmartRemote, ForwardRef$1_ as SmartSpeaker, ForwardRef$1Z as SmartSwitch, ForwardRef$1Y as SmartThermostat, ForwardRef$1X as SmartTv, ForwardRef$1W as SmartWatch, ForwardRef$1V as Snapchat, ForwardRef$1U as SolarPanel, ForwardRef$1T as Spotify, ForwardRef$1z as SpringNotes, ForwardRef$1S as SpringNotesAdd, ForwardRef$1R as SpringNotesCheck, ForwardRef$1Q as SpringNotesDelete, ForwardRef$1P as SpringNotesDownload, ForwardRef$1G as SpringNotesEdit, ForwardRef$1O as SpringNotesEditAdd, ForwardRef$1N as SpringNotesEditCheck, ForwardRef$1M as SpringNotesEditDelete, ForwardRef$1L as SpringNotesEditDownload, ForwardRef$1K as SpringNotesEditFavourite, ForwardRef$1J as SpringNotesEditMinus, ForwardRef$1I as SpringNotesEditSearch, ForwardRef$1H as SpringNotesEditUpload, ForwardRef$1F as SpringNotesFavourite, ForwardRef$1E as SpringNotesList, ForwardRef$1D as SpringNotesRemove, ForwardRef$1C as SpringNotesSearch, ForwardRef$1B as SpringNotesUpload, ForwardRef$1A as SpringNotesWriteEdit, ForwardRef$1y as StandbyMode, ForwardRef$1x as Stethoscope, ForwardRef$1w as Storage, ForwardRef$1u as Store, ForwardRef$1v as StoreSmile, ForwardRef$1t as Switch, ForwardRef$1s as Syrup, ForwardRef$1r as Tablet, ForwardRef$1p as Tag, ForwardRef$1q as TagCrooked, ForwardRef$1o as TaskCheckPaper, ForwardRef$1n as Telegram, ForwardRef$1m as TestTube, ForwardRef$1l as Thermometer, ForwardRef$1k as Tiktok, ForwardRef$1j as Tooth, ForwardRef$1i as Transfer, ForwardRef$1h as Transfusion, ForwardRef$1f as Trolley, ForwardRef$1g as TrolleyCrooked, ForwardRef$1b as Turn, ForwardRef$1e as TurnLeft, ForwardRef$1d as TurnRight, ForwardRef$1c as TurnTwoSide, ForwardRef$18 as Twitter, ForwardRef$1a as TwitterPlus, ForwardRef$19 as TwitterSparrow, ForwardRef$17 as UTurnLeft, ForwardRef$16 as UTurnRight, ForwardRef$15 as Umbrella, ForwardRef$13 as Undo, ForwardRef$14 as UndoCircle, ForwardRef$12 as Unlock, ForwardRef$11 as UploadCircle, ForwardRef$10 as UploadRectangle, ForwardRef$$ as Usb, ForwardRef$O as User, ForwardRef$_ as UserAdd, ForwardRef$Z as UserBlock, ForwardRef$U as UserCircle, ForwardRef$Y as UserCircleAdd, ForwardRef$X as UserCircleBlock, ForwardRef$W as UserCircleMinus, ForwardRef$V as UserCircleRemove, ForwardRef$T as UserCommunity, ForwardRef$S as UserMinus, ForwardRef$R as UserPolygon, ForwardRef$Q as UserRectangle, ForwardRef$P as UserRemove, ForwardRef$N as UsersDouble, ForwardRef$M as UsersTriple, ForwardRef$L as VibrateMode, ForwardRef$J as Video, ForwardRef$K as VideoOff, ForwardRef$G as View, ForwardRef$I as ViewOff, ForwardRef$H as ViewPrivacy, ForwardRef$k as Wallet, ForwardRef$E as WalletAdd, ForwardRef$F as WalletAddClose, ForwardRef$C as WalletArrowDown, ForwardRef$D as WalletArrowDownClose, ForwardRef$A as WalletArrowLeft, ForwardRef$B as WalletArrowLeftClose, ForwardRef$y as WalletArrowRight, ForwardRef$z as WalletArrowRightClose, ForwardRef$w as WalletArrowUp, ForwardRef$x as WalletArrowUpClose, ForwardRef$u as WalletCheck, ForwardRef$v as WalletCheckClose, ForwardRef$t as WalletClose, ForwardRef$r as WalletMinus, ForwardRef$s as WalletMinusClose, ForwardRef$q as WalletOpenLeft, ForwardRef$p as WalletOpenRight, ForwardRef$n as WalletRemove, ForwardRef$o as WalletRemoveClose, ForwardRef$l as WalletUser, ForwardRef$m as WalletUserClose, ForwardRef$j as Warehouse, ForwardRef$i as Whatsapp, ForwardRef$h as WheelChair, ForwardRef$g as WheelChairHuman, ForwardRef$f as Widgets, ForwardRef$9 as Wifi, ForwardRef$a as WifiOff, ForwardRef$b as WifiSignal, ForwardRef$e as WifiSignalBad, ForwardRef$d as WifiSignalNoInternet, ForwardRef$c as WifiSignalOff, ForwardRef$8 as WirelessCharging, ForwardRef$7 as Withdraw, ForwardRef$6 as Yen, ForwardRef$5 as Youtube, ForwardRef$3 as ZoomIn, ForwardRef$4 as ZoomInRectangle, ForwardRef as ZoomOut, ForwardRef$2 as ZoomOutCircle, ForwardRef$1 as ZoomOutRectangle };
