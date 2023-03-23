import * as React from "react";

function Layers({ size, title, titleId, ...props }, svgRef) {
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
			 "M21 18L12.8123 21.639C12.2951 21.8688 11.7049 21.8688 11.1877 21.639L3 18M21 13L12.8123 16.639C12.2951 16.8688 11.7049 16.8688 11.1877 16.639L3 13M3.78885 7.89444L11.1056 11.5528C11.6686 11.8343 12.3314 11.8343 12.8944 11.5528L20.2111 7.89444C20.9482 7.52592 20.9482 6.47411 20.2111 6.10559L12.8944 2.44723C12.3314 2.1657 11.6686 2.1657 11.1056 2.44723L3.78886 6.10559C3.05181 6.47411 3.05181 7.52592 3.78885 7.89444Z" 

		}),
	);
}

export default React.forwardRef(Layers);

