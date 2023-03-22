import * as React from "react";

function Invoice({ size, title, titleId, ...props }, svgRef) {
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
			 "M8 7H12M8 11H16M8 15H16M5 2H19C20.1046 2 21 2.89543 21 4V19.1543C21 20.5396 19.6259 21.5053 18.3226 21.0361L16.7608 20.4739C16.2728 20.2982 15.7356 20.319 15.2626 20.5318L12.8207 21.6307C12.2988 21.8655 11.7012 21.8655 11.1793 21.6307L8.73737 20.5318C8.26439 20.319 7.72721 20.2982 7.2392 20.4739L5.67744 21.0361C4.37412 21.5053 3 20.5396 3 19.1543V4C3 2.89543 3.89543 2 5 2Z" 

		}),
	);
}

export default React.forwardRef(Invoice);

