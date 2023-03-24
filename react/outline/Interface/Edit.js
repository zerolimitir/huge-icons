import * as React from "react";

function Edit({ size, title, titleId, ...props }, svgRef) {
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
			 d:
			 "M3 21H21M13.7844 5.31171C13.7844 5.31171 13.7844 6.94634 15.419 8.58096C17.0537 10.2156 18.6883 10.2156 18.6883 10.2156M7.31963 17.9881L10.7523 17.4977C11.2475 17.4269 11.7064 17.1975 12.06 16.8438L20.3229 8.58096C21.2257 7.67818 21.2257 6.21449 20.3229 5.31171L18.6883 3.67708C17.7855 2.77431 16.3218 2.77431 15.419 3.67708L7.15616 11.94C6.80248 12.2936 6.57305 12.7525 6.50231 13.2477L6.01193 16.6804C5.90295 17.4432 6.5568 18.097 7.31963 17.9881Z" 

		}),
	);
}

export default React.forwardRef(Edit);

