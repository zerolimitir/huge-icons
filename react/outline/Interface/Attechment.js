import * as React from "react";

function Attechment({ size, title, titleId, ...props }, svgRef) {
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
				"strokeWidth":"1.5",
				"strokeLinecap":"round",
				"strokeLinejoin":"round",
				"aria-hidden": "true",
				ref: svgRef,
				"aria-labelledby": titleId,
			},
			props,
		),
		title ? /*#__PURE__*/ React.createElement("title", { id: titleId }, title) : null,
		/*#__PURE__*/ React.createElement("path", {
			d: "M14.0001 7.33337L8.66679 12.6667C7.93041 13.4031 7.93041 14.597 8.66679 15.3334C9.40317 16.0698 10.5971 16.0698 11.3335 15.3334L16.6668 10C18.1396 8.52728 18.1395 6.13946 16.6668 4.6667C15.194 3.19394 12.8062 3.19394 11.3335 4.6667L6.00012 10C3.79098 12.2092 3.79098 15.7909 6.00012 18C8.20926 20.2092 11.791 20.2092 14.0001 18L19.3335 12.6667",
		}),
	);
}

export default React.forwardRef(Attechment);
