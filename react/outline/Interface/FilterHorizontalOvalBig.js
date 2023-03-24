import * as React from "react";

function FilterHorizontalOvalBig({ size, title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ React.createElement(
		"svg",
		Object.assign(
			{
				width: size || "1rem",
				height: size || "1rem",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24",
				fill: "none",
				"strokeWidth":"1.5",
				"strokeLinecap":"round",
				"strokeLinejoin":"round",
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
			 "M3 7H8M19 7H21M19 7C19 8.65685 17.6569 10 16 10H14C12.3431 10 11 8.65685 11 7C11 5.34315 12.3431 4 14 4L16 4C17.6569 4 19 5.34315 19 7ZM16 17H21M3 17H5M5 17C5 18.6569 6.34315 20 8 20H10C11.6569 20 13 18.6569 13 17C13 15.3431 11.6569 14 10 14H8C6.34315 14 5 15.3431 5 17Z" 

		}),
	);
}

export default React.forwardRef(FilterHorizontalOvalBig);

