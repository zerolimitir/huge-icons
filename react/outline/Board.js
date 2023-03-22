import * as React from "react";

function Board({ size, title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ React.createElement(
		"svg",
		Object.assign(
			{
				width: size || "1rem",
				height: size || "1rem",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24",
				fill: "currentColor",
				
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
			d:"M7 7H17M7 12H12M16 17L19 22M8 17L5 22M12 17V20M19 2L5 2C3.34315 2 2 3.34315 2 5L2 14C2 15.6569 3.34315 17 5 17L19 17C20.6569 17 22 15.6569 22 14L22 5C22 3.34315 20.6569 2 19 2Z",
			 stroke:"#28303F",
			  strokeWidth:"1.5",
			   strokeLinecap:"round",
			    strokeLinejoin:"round"
		}),
	);
}

export default React.forwardRef(Board);

