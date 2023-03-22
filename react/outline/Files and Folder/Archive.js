import * as React from "react";

function Archive({ size, title, titleId, ...props }, svgRef) {
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
			d: "M12 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H12M12 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H12M12 2V22M15.5 6H18.5M5.5 6H8.5M15.5 10H18.5M5.5 10H8.5",
		}),
		/*#__PURE__*/ React.createElement("path", {
			d: "M18 17.5C18 18.0523 17.5523 18.5 17 18.5C16.4477 18.5 16 18.0523 16 17.5C16 16.9477 16.4477 16.5 17 16.5C17.5523 16.5 18 16.9477 18 17.5Z",
			fill: "currentColor",
			"stroke": "none",
		}),
		/*#__PURE__*/ React.createElement("path", {
			d: "M8 17.5C8 18.0523 7.55228 18.5 7 18.5C6.44772 18.5 6 18.0523 6 17.5C6 16.9477 6.44772 16.5 7 16.5C7.55228 16.5 8 16.9477 8 17.5Z",
			fill: "currentColor",
			"stroke": "none",
		}),
	);
}

export default React.forwardRef(Archive);
