import * as React from "react";

function FileWriteBent({ size, title, titleId, ...props }, svgRef) {
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
			d: "M3 16.5V5C3 3.34315 4.34315 2 6 2H16C17.6569 2 19 3.34315 19 5V16.5H10.3C9.85817 16.5 9.5 16.8582 9.5 17.3C9.5 19.0673 8.0425 20.5 6.27519 20.5C4.48027 20.5 3 19.0449 3 17.25V16.5ZM7 6.25C6.58579 6.25 6.25 6.58579 6.25 7C6.25 7.41421 6.58579 7.75 7 7.75H15C15.4142 7.75 15.75 7.41421 15.75 7C15.75 6.58579 15.4142 6.25 15 6.25H7ZM6.25 12C6.25 11.5858 6.58579 11.25 7 11.25H11C11.4142 11.25 11.75 11.5858 11.75 12C11.75 12.4142 11.4142 12.75 11 12.75H7C6.58579 12.75 6.25 12.4142 6.25 12ZM22.8766 18.9899C22.4361 20.7202 20.8675 22 19 22H7C8.86748 22 10.4361 20.7202 10.8766 18.9899C11.0128 18.4547 11.4477 18 12 18H22C22.5523 18 23.0128 18.4547 22.8766 18.9899Z",
		}),
	);
}

export default React.forwardRef(FileWriteBent);
