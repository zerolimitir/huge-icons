import * as React from "react";

function FileUploadBent({ size, title, titleId, ...props }, svgRef) {
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
			d: "M2 5V16.5V17.25C2 19.0449 3.48027 20.5 5.27519 20.5C7.0425 20.5 8.5 19.0673 8.5 17.3C8.5 16.8582 8.85817 16.5 9.3 16.5H18V5C18 3.34315 16.6569 2 15 2H5C3.34315 2 2 3.34315 2 5ZM9.25 8.82817C9.20334 8.86325 9.15858 8.90202 9.11612 8.94449L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303C6.17678 10.2374 6.17678 9.76251 6.46967 9.46961L8.05546 7.88383C9.1294 6.80988 10.8706 6.80988 11.9445 7.88382L13.5303 9.46961C13.8232 9.76251 13.8232 10.2374 13.5303 10.5303C13.2374 10.8232 12.7626 10.8232 12.4697 10.5303L10.8839 8.94449C10.8414 8.90202 10.7967 8.86325 10.75 8.82817V12.9999C10.75 13.4142 10.4142 13.7499 10 13.7499C9.58579 13.7499 9.25 13.4142 9.25 12.9999V8.82817ZM21.8766 18.9899C21.4361 20.7202 19.8675 22 18 22H6C7.86748 22 9.43606 20.7202 9.87657 18.9899C10.0128 18.4547 10.4477 18 11 18H21C21.5523 18 22.0128 18.4547 21.8766 18.9899Z",
		}),
	);
}

export default React.forwardRef(FileUploadBent);
