import * as React from "react";

function FolderShare({ size, title, titleId, ...props }, svgRef) {
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
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"aria-hidden": "true",
				ref: svgRef,
				"aria-labelledby": titleId,
			},
			props,
		),
		title ? /*#__PURE__*/ React.createElement("title", { id: titleId }, title) : null,
		/*#__PURE__*/ React.createElement("path", {
			d: "M16 6H17C18.1046 6 19 6.89543 19 8V12.5M5 13V16C5 17.1046 5.89543 18 7 18H8M13 5.5V8C13 9.10457 12.1046 10 11 10H5C3.89543 10 3 9.10457 3 8V4C3 2.89543 3.89543 2 5 2H6.33333C6.76607 2 7.18714 2.14036 7.53333 2.4L8.46667 3.1C8.81286 3.35964 9.23393 3.5 9.66667 3.5H11C12.1046 3.5 13 4.39543 13 5.5ZM21 17.5V20C21 21.1046 20.1046 22 19 22H13C11.8954 22 11 21.1046 11 20V16C11 14.8954 11.8954 14 13 14H14.3333C14.7661 14 15.1871 14.1404 15.5333 14.4L16.4667 15.1C16.8129 15.3596 17.2339 15.5 17.6667 15.5H19C20.1046 15.5 21 16.3954 21 17.5Z",
		}),
	);
}

export default React.forwardRef(FolderShare);
