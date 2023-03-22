import * as React from "react";

function FolderStand({ size, title, titleId, ...props }, svgRef) {
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
			d: "M5 7.53513V4C5 2.89543 5.89543 2 7 2H17C18.1046 2 19 2.89543 19 4V10.1601M21 13.625V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V11C3 8.79086 4.79086 7 7 7H8.89653C9.74359 7 10.5688 7.2689 11.2532 7.76797L12.7468 8.85703C13.4312 9.3561 14.2564 9.625 15.1035 9.625H17C19.2091 9.625 21 11.4159 21 13.625Z",
		}),
	);
}

export default React.forwardRef(FolderStand);
