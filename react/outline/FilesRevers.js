import * as React from "react";

function FilesRevers({ size, title, titleId, ...props }, svgRef) {
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
				"stroke-linejoin": "round",
				"aria-hidden": "true",
				ref: svgRef,
				"aria-labelledby": titleId,
			},
			props,
		),
		title ? /*#__PURE__*/ React.createElement("title", { id: titleId }, title) : null,
		/*#__PURE__*/ React.createElement("path", {
			d: "M7 18L7 10C7 7.79086 8.79086 6 11 6L17 6M7 18C7 20.2091 8.79086 22 11 22H13.3431C14.404 22 15.4214 21.5786 16.1716 20.8284L19.8284 17.1716C20.5786 16.4214 21 15.404 21 14.3431V10C21 7.79086 19.2091 6 17 6M7 18C4.79086 18 3 16.2091 3 14L3 6C3 3.79086 4.79086 2 7 2L13 2C15.2091 2 17 3.79086 17 6M15 22V20C15 17.7909 16.7909 16 19 16H21",
		}),
	);
}

export default React.forwardRef(FilesRevers);
