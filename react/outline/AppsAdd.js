import * as React from "react";

function AppsAdd({ size, title, titleId, ...props }, svgRef) {
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
			d:"M18 2V6M18 6V10M18 6H14M18 6H22M4 10H8C9.10457 10 10 9.10457 10 8V4C10 2.89543 9.10457 2 8 2H4C2.89543 2 2 2.89543 2 4V8C2 9.10457 2.89543 10 4 10ZM10 18C10 20.2091 8.20914 22 6 22C3.79086 22 2 20.2091 2 18C2 15.7909 3.79086 14 6 14C8.20914 14 10 15.7909 10 18ZM16 22H20C21.1046 22 22 21.1046 22 20V16C22 14.8954 21.1046 14 20 14H16C14.8954 14 14 14.8954 14 16V20C14 21.1046 14.8954 22 16 22Z" ,
			stroke:"#28303F" ,
			strokeWidth:"1.5",
			 strokeLinecap:"round"	
			}),
	);
}

export default React.forwardRef(AppsAdd);

