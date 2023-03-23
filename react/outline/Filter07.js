import * as React from "react";

function Filter07({ size, title, titleId, ...props }, svgRef) {
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
			 "M20 8.32624C20 9.97193 16.4183 11.306 12 11.306C7.58172 11.306 4 9.97193 4 8.32624M20 8.32624C20 12.0778 17.9318 15.2897 15 16.6158V19.0176C15 19.7701 14.572 20.458 13.8944 20.7945L11.8944 21.7877C10.5646 22.4481 9 21.4877 9 20.0109V16.6158C6.06817 15.2897 4 12.0778 4 8.32624M20 8.32624C20 7.38522 18.8289 6.54609 17 6M4 8.32624C4 7.38522 5.17107 6.54609 7 6M14 5V7M10 7V8M10 2V4"

		}),
	);
}

export default React.forwardRef(Filter07);

