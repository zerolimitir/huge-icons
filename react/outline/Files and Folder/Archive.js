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
			d: "M20 13V6C20 3.79086 18.2091 2 16 2H8C5.79086 2 4 3.79086 4 6V13M22 16V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V16C2 14.3431 3.34315 13 5 13H6C6.62951 13 7.22229 13.2964 7.6 13.8L8.8 15.4C9.55542 16.4072 10.741 17 12 17C13.259 17 14.4446 16.4072 15.2 15.4L16.4 13.8C16.7777 13.2964 17.3705 13 18 13H19C20.6569 13 22 14.3431 22 16Z",
		}),
	);
}

export default React.forwardRef(Archive);
