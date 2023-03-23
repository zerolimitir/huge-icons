import * as React from "react";

function Flag({ size, title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ React.createElement(
		"svg",
		Object.assign(
			{
				width: size || "1rem",
				height: size || "1rem",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24",
				fill: "none",
				"stroke-width":"1.5",
				"stroke-linecap":"round",
				"stroke-linejoin":"round",
				stroke: "currentColor",
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
			 "M3 22V14M3 14V3M3 14H7M3 3V2M3 3H15C16.1046 3 17 3.89543 17 5V7M17 7H19C20.1046 7 21 7.89543 21 9V17C21 18.1046 20.1046 19 19 19H9C7.89543 19 7 18.1046 7 17V14M17 7V12C17 13.1046 16.1046 14 15 14H7"

		}),
	);
}

export default React.forwardRef(Flag);

