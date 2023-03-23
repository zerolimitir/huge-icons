import * as React from "react";

function FileUploadBent({ size, title, titleId, ...props }, svgRef) {
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
			d: "M6 22C7.86748 22 9.43606 20.7202 9.87657 18.9899C10.0128 18.4547 10.4477 18 11 18H18M6 22C3.79086 22 2 20.2091 2 18V5C2 3.34315 3.34315 2 5 2H15C16.6569 2 18 3.34315 18 5V18M6 22H18C19.8675 22 21.4361 20.7202 21.8766 18.9899C22.0128 18.4547 21.5523 18 21 18H18M7 10L8.58579 8.41421C9.36683 7.63317 10.6332 7.63316 11.4142 8.41421L13 10M10 8V13",
		}),
	);
}

export default React.forwardRef(FileUploadBent);
