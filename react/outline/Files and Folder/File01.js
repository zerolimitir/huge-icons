import * as React from "react";

function File01({ size, title, titleId, ...props }, svgRef) {
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
			d: "M7 22C8.86748 22 10.4361 20.7202 10.8766 18.9899C11.0128 18.4547 11.4477 18 12 18H19M7 22C4.79086 22 3 20.2091 3 18V5C3 3.34315 4.34315 2 6 2H16C17.6569 2 19 3.34315 19 5V18M7 22H19C20.8675 22 22.4361 20.7202 22.8766 18.9899C23.0128 18.4547 22.5523 18 22 18H19M15 7H7M11 12H7",
		}),
	);
}

export default React.forwardRef(File01);
