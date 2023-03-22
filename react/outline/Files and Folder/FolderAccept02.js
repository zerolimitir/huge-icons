import * as React from "react";

function FolderAccept02({ size, title, titleId, ...props }, svgRef) {
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
			d: "M8.99993 15L10.7528 16.4023C11.1706 16.7366 11.7776 16.6826 12.13 16.2799L14.9999 13M19.9999 7V8H3.99993V5C3.99993 3.34315 5.34308 2 6.99993 2H9.5691C10.2372 2 10.8861 2.22298 11.4131 2.6336L12.3535 3.3664C12.8804 3.77702 13.5294 4 14.1974 4H16.9999C18.6568 4 19.9999 5.34315 19.9999 7ZM3.47391 8H20.526C21.7992 8 22.7484 9.17403 22.4816 10.4191L20.6775 18.8381C20.2823 20.6824 18.6524 22 16.7663 22H7.2336C5.34745 22 3.71759 20.6824 3.32239 18.8381L1.5183 10.4191C1.25151 9.17404 2.20062 8 3.47391 8Z",
		}),
	);
}

export default React.forwardRef(FolderAccept02);
