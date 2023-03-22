import * as React from "react";

function Brightness({ size, title, titleId, ...props }, svgRef) {
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
			 d:"M12.0001 2V3M12.0001 21V22M20.6603 7L19.7943 7.5M4.20587 16.5L3.33985 17M3.33984 7L4.20587 7.5M19.7943 16.5L20.6603 17M18.0001 12C18.0001 15.3137 15.3138 18 12.0001 18C8.68641 18 6.00012 15.3137 6.00012 12C6.00012 8.68629 8.68641 6 12.0001 6C15.3138 6 18.0001 8.68629 18.0001 12Z" ,
			 stroke:"#28303F",
			  strokeWidth:"1.5" ,
			  strokeLinecap:"round"
		}),
	);
}

export default React.forwardRef(Brightness);

