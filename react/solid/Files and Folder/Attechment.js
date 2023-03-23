import * as React from "react";

function Attechment({ size, title, titleId, ...props }, svgRef) {
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
			d: "M10.803 4.13637C12.5687 2.37072 15.4313 2.37072 17.197 4.13637C18.9627 5.90203 18.9627 8.76471 17.197 10.5304L11.8637 15.8637C10.8344 16.893 9.16561 16.893 8.13633 15.8637C7.10706 14.8344 7.10706 13.1657 8.13633 12.1364L13.4697 6.80304C13.7626 6.51015 14.2374 6.51015 14.5303 6.80304C14.8232 7.09593 14.8232 7.57081 14.5303 7.8637L9.19699 13.197C8.75351 13.6405 8.75351 14.3596 9.19699 14.803C9.64048 15.2465 10.3595 15.2465 10.803 14.803L16.1363 9.46971C17.3162 8.28984 17.3162 6.3769 16.1363 5.19703C14.9565 4.01717 13.0435 4.01717 11.8637 5.19703L6.53032 10.5304C4.61408 12.4466 4.61408 15.5535 6.53033 17.4697C8.44657 19.386 11.5534 19.386 13.4697 17.4697L18.803 12.1364C19.0959 11.8435 19.5708 11.8435 19.8637 12.1364C20.1566 12.4293 20.1566 12.9041 19.8637 13.197L14.5303 18.5304C12.0283 21.0324 7.9717 21.0324 5.46967 18.5304C2.96763 16.0283 2.96763 11.9717 5.46966 9.46971L10.803 4.13637Z",
		}),
	);
}

export default React.forwardRef(Attechment);
