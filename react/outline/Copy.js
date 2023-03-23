import * as React from "react";

function Copy({ size, title, titleId, ...props }, svgRef) {
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
			d:"M8 8V6C8 3.79086 9.79086 2 12 2L18 2C20.2091 2 22 3.79086 22 6V12C22 14.2091 20.2091 16 18 16H16M8 8H6C3.79086 8 2 9.79086 2 12V18C2 20.2091 3.79086 22 6 22H12C14.2091 22 16 20.2091 16 18V16M8 8H12C14.2091 8 16 9.79086 16 12V16",
		
		}),
	);
}

export default React.forwardRef(Copy);

