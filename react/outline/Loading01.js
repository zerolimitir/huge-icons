import * as React from "react";

function Loading01({ size, title, titleId, ...props }, svgRef) {
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
			 "M12 5V2M12 22V19M7.05028 7.05024L4.92896 4.92892M19.0711 19.0711L16.9498 16.9497M19 12H22M2 12H5M16.9497 7.05024L19.071 4.92892M4.92891 19.0711L7.05023 16.9497" 

		}),
	);
}

export default React.forwardRef(Loading01);

