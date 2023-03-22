import * as React from "react";

function MicMute({ size, title, titleId, ...props }, svgRef) {
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
			 "M21 20.75L3 2.75M7 6.75V13.75C7 16.5114 9.23858 18.75 12 18.75C13.8931 18.75 15.5404 17.6979 16.3893 16.1466M4 11.75V13.75C4 18.1683 7.58172 21.75 12 21.75C14.6397 21.75 16.9808 20.4715 18.4378 18.5M20 11.75V13.75C20 14.368 19.9299 14.9696 19.7973 15.5473M17 12.75V6.75C17 3.98858 14.7614 1.75 12 1.75C10.3643 1.75 8.91201 2.53546 7.99979 3.74979" 

		}),
	);
}

export default React.forwardRef(MicMute);

