import * as React from "react";

function CheckMarkRectangle({ size, title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ React.createElement(
		"svg",
		Object.assign(
			{
				width: size || "1rem",
				height: size || "1rem",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24",
				fill: "currentColor",
				stroke: "none",
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
			 d:"M7 10L10.5264 12.8211C11.3537 13.483 12.5536 13.3848 13.2624 12.5973L21 4M22 9V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6C2 3.79086 3.79086 2 6 2H17",
			  stroke:"#28303F",
			   strokeWidth:"1.5",
			    strokeLinecap:"round" ,
				strokeLinejoin:"round"
		}),
	);
}

export default React.forwardRef(CheckMarkRectangle);

