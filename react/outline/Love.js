import * as React from "react";

function Love({ size, title, titleId, ...props }, svgRef) {
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
			 "M17 6.49999C18.1045 6.49999 19 7.39542 19 8.49999M12 5.70252L12.6851 4.99999C14.816 2.8147 18.2709 2.8147 20.4018 4.99999C22.4755 7.12659 22.5392 10.5538 20.5461 12.7599L14.8197 19.0981C13.2984 20.782 10.7015 20.782 9.18026 19.0981L3.45393 12.7599C1.46078 10.5538 1.5245 7.12661 3.5982 5C5.72912 2.81471 9.18404 2.81472 11.315 5.00001L12 5.70252Z"

		}),
	);
}

export default React.forwardRef(Love);

