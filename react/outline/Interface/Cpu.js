import * as React from "react";

function Cpu({ size, title, titleId, ...props }, svgRef) {
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
			d:"M10 4V2M14 4V2M14 20V22M10 20V22M20 10H22M20 14H22M4 10H2M4 14H2M8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20ZM11 15H13C14.1046 15 15 14.1046 15 13V11C15 9.89543 14.1046 9 13 9H11C9.89543 9 9 9.89543 9 11V13C9 14.1046 9.89543 15 11 15Z" 

		}),
	);
}

export default React.forwardRef(Cpu);

