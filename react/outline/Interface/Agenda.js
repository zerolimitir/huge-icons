import * as React from "react";

function Agenda({ size, title, titleId, ...props }, svgRef) {
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
				"strokeWidth":"1.5",
				"strokeLinecap":"round",
				"strokeLinejoin":"round",
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
			d:"M8 9H12M8 13H16M8 17H16M15.9995 2V5M7.99951 2V5M7 3.5H17C19.2091 3.5 21 5.29086 21 7.5V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V7.5C3 5.29086 4.79086 3.5 7 3.5Z",
		
		}),
	);
}

export default React.forwardRef(Agenda);

