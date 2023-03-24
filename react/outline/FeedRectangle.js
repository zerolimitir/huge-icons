import * as React from "react";

function FeedRectangle({ size, title, titleId, ...props }, svgRef) {
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
			 "M8.5 17C8.5 17.8284 7.82843 18.5 7 18.5C6.17157 18.5 5.5 17.8284 5.5 17C5.5 16.1716 6.17157 15.5 7 15.5C7.82843 15.5 8.5 16.1716 8.5 17Z"

		}),
		/*#__PURE__*/ React.createElement("path", {
			d:
			"M6 11C9.651 11.4553 12.5447 14.349 13 18M6 6C12.6274 6 18 11.3726 18 18M6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22Z" 

	   }),
	);
}

export default React.forwardRef(FeedRectangle);

