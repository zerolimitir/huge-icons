import * as React from "react";

function FileAcceptBent({ size, title, titleId, ...props }, svgRef) {
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
			d: "M2 5V16.5V17.25C2 19.0449 3.48027 20.5 5.27519 20.5C7.0425 20.5 8.5 19.0673 8.5 17.3C8.5 16.8582 8.85817 16.5 9.3 16.5H18V5C18 3.34315 16.6569 2 15 2H5C3.34315 2 2 3.34315 2 5ZM13.4939 7.43558C13.8056 7.70834 13.8372 8.18216 13.5645 8.49389L10.6946 11.7738C10.0779 12.4786 9.01561 12.5729 8.28433 11.9879L6.53151 10.5857C6.20806 10.3269 6.15562 9.85494 6.41438 9.53149C6.67313 9.20804 7.1451 9.1556 7.46855 9.41436L9.22137 10.8166C9.32584 10.9002 9.47759 10.8867 9.56569 10.786L12.4356 7.50613C12.7084 7.1944 13.1822 7.16282 13.4939 7.43558ZM21.8766 18.9899C21.4361 20.7202 19.8675 22 18 22H6C7.86748 22 9.43606 20.7202 9.87657 18.9899C10.0128 18.4547 10.4477 18 11 18H21C21.5523 18 22.0128 18.4547 21.8766 18.9899Z",
		}),
	);
}

export default React.forwardRef(FileAcceptBent);
