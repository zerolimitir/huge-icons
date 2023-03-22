import * as React from "react";

function Collection({ size, title, titleId, ...props }, svgRef) {
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
			 d:"M20 11H4M20 11C21.1046 11 22 11.8954 22 13V17C22 19.2091 20.2091 21 18 21H6C3.79086 21 2 19.2091 2 17V13C2 11.8954 2.89543 11 4 11M20 11V9C20 7.89543 19.1046 7 18 7M4 11V9C4 7.89543 4.89543 7 6 7M18 7H6M18 7V5C18 3.89543 17.1046 3 16 3H8C6.89543 3 6 3.89543 6 5V7M10 14H14",
			  stroke:"#28303F",
			   strokeWidth:"1.5",
			    strokeLinecap:"round"
		}),
	);
}

export default React.forwardRef(Collection);

