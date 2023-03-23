import * as React from "react";

function Mic({ size, title, titleId, ...props }, svgRef) {
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
			 "M17 8V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7V14C7 16.7614 9.23858 19 12 19C14.7614 19 17 16.7614 17 14V13M17 8H13M17 8V13M17 13H13M20 12V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V12"

		}),
	);
}

export default React.forwardRef(Mic);

