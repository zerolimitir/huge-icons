import * as React from "react";

function Filter02({ size, title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ React.createElement(
		"svg",
		Object.assign(
			{
				width: size || "1rem",
				height: size || "1rem",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"stroke-width":"1.5",
				"stroke-linecap":"round",
				"stroke-linejoin":"round",
				stroke: "#28303F",
				"aria-hidden": "true",
				ref: svgRef,
				"aria-labelledby": titleId,
			},
			props,
		),
		title
			? /*#__PURE__*/ React.createElement(
					"title",
					{
						id: titleId,
					},
					title,
			  )
			: null,
		/*#__PURE__*/ React.createElement("path", {
			 d:
			 "M7 21L7 16M7 5V3M7 5C8.65685 5 10 6.34315 10 8V10C10 11.6569 8.65685 13 7 13C5.34315 13 4 11.6569 4 10V8C4 6.34315 5.34315 5 7 5ZM17 8V3M17 21V19M17 19C18.6569 19 20 17.6569 20 16V14C20 12.3431 18.6569 11 17 11C15.3431 11 14 12.3431 14 14V16C14 17.6569 15.3431 19 17 19Z"

		}),
	);
}

export default React.forwardRef(Filter02);

