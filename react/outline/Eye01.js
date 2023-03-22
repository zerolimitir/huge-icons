import * as React from "react";

function Eye01({ size, title, titleId, ...props }, svgRef) {
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
			 "M12 2V4M21 5L19.5 6.5M2.99997 5L4.49997 6.5M12 22C15.6042 22 18.8134 19.6545 20.8772 17.6789C22.3743 16.2458 22.3743 13.7542 20.8772 12.3211C18.8134 10.3455 15.6042 8 12 8C8.3958 8 5.18661 10.3455 3.12281 12.3211C1.62573 13.7542 1.62573 16.2458 3.12281 17.6789C5.18661 19.6545 8.3958 22 12 22ZM15 15C15 16.6569 13.6568 18 12 18C10.3431 18 8.99997 16.6569 8.99997 15C8.99997 13.3431 10.3431 12 12 12C13.6568 12 15 13.3431 15 15Z"

		}),
	);
}

export default React.forwardRef(Eye01);

