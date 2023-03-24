import * as React from "react";

function Interactive({ size, title, titleId, ...props }, svgRef) {
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
			 "M16.6379 10.1283C15.897 8.29416 14.0996 7 12 7C9.23858 7 7 9.23858 7 12C7 14.0996 8.29416 15.897 10.1283 16.6379M11.9156 21.9997C6.43159 21.9543 2 17.4947 2 12C2 6.47715 6.47715 2 12 2C17.4947 2 21.9543 6.43159 21.9997 11.9156M12.0573 13.4235L14.6699 21.2614C14.9982 22.2462 16.3911 22.2462 16.7193 21.2614L17.6841 18.3672C17.7916 18.0447 18.0447 17.7916 18.3672 17.6841L21.2614 16.7193C22.2462 16.3911 22.2462 14.9982 21.2614 14.6699L13.4235 12.0573C12.5792 11.7758 11.7758 12.5792 12.0573 13.4235Z"

		}),
	);
}

export default React.forwardRef(Interactive);

