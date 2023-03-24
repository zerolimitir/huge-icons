import * as React from "react";

function FilterVerticalOval({ size, title, titleId, ...props }, svgRef) {
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
			 "M4 21V15M4 15C5.10457 15 6 14.1046 6 13V11C6 9.89543 5.10457 9 4 9M4 15C2.89543 15 2 14.1046 2 13V11C2 9.89543 2.89543 9 4 9M12 21V14M12 5V3M12 5C13.1046 5 14 5.89543 14 7V9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9V7C10 5.89543 10.8954 5 12 5ZM4 9L4 3M20 10V3M20 21V19M20 19C21.1046 19 22 18.1046 22 17V15C22 13.8954 21.1046 13 20 13C18.8954 13 18 13.8954 18 15V17C18 18.1046 18.8954 19 20 19Z" 

		}),
	);
}

export default React.forwardRef(FilterVerticalOval);

