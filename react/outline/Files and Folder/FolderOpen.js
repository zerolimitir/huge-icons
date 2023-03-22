import * as React from "react";

function Folder01({ size, title, titleId, ...props }, svgRef) {
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
			d: "M19.9999 8V7C19.9999 5.34315 18.6568 4 16.9999 4H14.1974C13.5294 4 12.8804 3.77702 12.3535 3.3664L11.4131 2.6336C10.8861 2.22298 10.2372 2 9.5691 2H6.99993C5.34308 2 3.99993 3.34315 3.99993 5V8H19.9999Z",
		}),
		/*#__PURE__*/ React.createElement("path", {
			d: "M20.526 8H3.47391C2.20062 8 1.25151 9.17404 1.5183 10.4191L3.32239 18.8381C3.71759 20.6824 5.34745 22 7.2336 22H16.7663C18.6524 22 20.2823 20.6824 20.6775 18.8381L22.4816 10.4191C22.7484 9.17403 21.7992 8 20.526 8Z",
		}),
	);
}

export default React.forwardRef(Folder01);
