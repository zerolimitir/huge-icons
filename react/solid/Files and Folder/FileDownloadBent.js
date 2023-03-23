import * as React from "react";

function FileDownloadBent({ size, title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ React.createElement(
		"svg",
		Object.assign(
			{
				width: size || "1rem",
				height: size || "1rem",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24",
				fill: "currentColor",
				stroke: "none",
				fillRule: "evenodd",
				clipRule: "evenodd",
				"aria-hidden": "true",
				ref: svgRef,
				"aria-labelledby": titleId,
			},
			props,
		),
		title ? /*#__PURE__*/ React.createElement("title", { id: titleId }, title) : null,
		/*#__PURE__*/ React.createElement("path", {
			d: "M2 5V16.5V17.25C2 19.0449 3.48027 20.5 5.27519 20.5C7.0425 20.5 8.5 19.0673 8.5 17.3C8.5 16.8582 8.85817 16.5 9.3 16.5H18V5C18 3.34315 16.6569 2 15 2H5C3.34315 2 2 3.34315 2 5ZM9.25 11.1718C9.20334 11.1368 9.15858 11.098 9.11612 11.0555L7.53033 9.46973C7.23744 9.17684 6.76256 9.17684 6.46967 9.46973C6.17678 9.76262 6.17678 10.2375 6.46967 10.5304L8.05546 12.1162C9.1294 13.1901 10.8706 13.1901 11.9445 12.1162L13.5303 10.5304C13.8232 10.2375 13.8232 9.76262 13.5303 9.46973C13.2374 9.17684 12.7626 9.17684 12.4697 9.46973L10.8839 11.0555C10.8414 11.098 10.7967 11.1368 10.75 11.1718V7.00006C10.75 6.58584 10.4142 6.25006 10 6.25006C9.58579 6.25006 9.25 6.58584 9.25 7.00006V11.1718ZM21.8766 18.9899C21.4361 20.7202 19.8675 22 18 22H6C7.86748 22 9.43606 20.7202 9.87657 18.9899C10.0128 18.4547 10.4477 18 11 18H21C21.5523 18 22.0128 18.4547 21.8766 18.9899Z",
		}),
	);
}

export default React.forwardRef(FileDownloadBent);
