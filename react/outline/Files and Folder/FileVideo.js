import * as React from "react";

function FileVideo({ size, title, titleId, ...props }, svgRef) {
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
				"stroke-width": "1.5",
				"stroke-linejoin": "round",
				"aria-hidden": "true",
				ref: svgRef,
				"aria-labelledby": titleId,
			},
			props,
		),
		title ? /*#__PURE__*/ React.createElement("title", { id: titleId }, title) : null,
		/*#__PURE__*/ React.createElement("path", {
			d: "M13 2V6C13 8.20914 14.7909 10 17 10L21 10M3 6L3 18C3 20.2091 4.79086 22 7 22H17C19.2091 22 21 20.2091 21 18V11.6569C21 10.596 20.5786 9.57857 19.8284 8.82843L14.1716 3.17157C13.4214 2.42143 12.404 2 11.3431 2L7 2C4.79086 2 3 3.79086 3 6ZM10 13.8028V16.1972C10 17.3953 11.3352 18.1099 12.3321 17.4453L14.1279 16.2481C15.0185 15.6543 15.0185 14.3457 14.1279 13.7519L12.332 12.5547C11.3352 11.8901 10 12.6047 10 13.8028Z",
		}),
	);
}

export default React.forwardRef(FileVideo);
