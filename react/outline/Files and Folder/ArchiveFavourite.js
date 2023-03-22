import * as React from "react";

function ArchiveFavourite({ size, title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ React.createElement(
		"svg",
		Object.assign(
			{
				width: size || "1rem",
				height: size || "1rem",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "1.5",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"aria-hidden": "true",
				ref: svgRef,
				"aria-labelledby": titleId,
			},
			props,
		),
		title ? /*#__PURE__*/ React.createElement("title", { id: titleId }, title) : null,
		/*#__PURE__*/ React.createElement("path", {
			d: "M20 13V6C20 3.79086 18.2091 2 16 2H8C5.79086 2 4 3.79086 4 6V13M11.2191 11.0239L9.36501 8.70626C9.12873 8.41091 9 8.04394 9 7.6657V7.59099C9 6.71231 9.71231 6 10.591 6C11.0129 6 11.4176 6.16762 11.716 6.46599L12 6.75L12.284 6.46599C12.5824 6.16762 12.9871 6 13.409 6C14.2877 6 15 6.71231 15 7.59099V7.6657C15 8.04394 14.8713 8.41091 14.635 8.70626L12.7809 11.0239C12.3805 11.5243 11.6195 11.5243 11.2191 11.0239ZM22 16V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V16C2 14.3431 3.34315 13 5 13H6C6.62951 13 7.22229 13.2964 7.6 13.8L8.8 15.4C9.55542 16.4072 10.741 17 12 17C13.259 17 14.4446 16.4072 15.2 15.4L16.4 13.8C16.7777 13.2964 17.3705 13 18 13H19C20.6569 13 22 14.3431 22 16Z",
		}),
	);
}

export default React.forwardRef(ArchiveFavourite);
