import * as React from "react";

function FileSharing({ size, title, titleId, ...props }, svgRef) {
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
			d: "M18 9.5V8C18 6.89543 17.1046 6 16 6H13.5M10.5 18H8C6.89543 18 6 17.1046 6 16V14.5M3 4V10C3 11.1046 3.89543 12 5 12H9C10.1046 12 11 11.1046 11 10V4.90754C11 4.33081 10.751 3.78216 10.317 3.40238L9.27982 2.49485C8.91524 2.17584 8.44726 2 7.96282 2H5C3.89543 2 3 2.89543 3 4ZM13 14V20C13 21.1046 13.8954 22 15 22H19C20.1046 22 21 21.1046 21 20V14.9075C21 14.3308 20.751 13.7822 20.317 13.4024L19.2798 12.4948C18.9152 12.1758 18.4473 12 17.9628 12H15C13.8954 12 13 12.8954 13 14Z",
		}),
	);
}

export default React.forwardRef(FileSharing);
