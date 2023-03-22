import * as React from "react";

function FolderFavourite02({ size, title, titleId, ...props }, svgRef) {
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
			d: "M9.36494 14.7063L11.2191 17.024C11.6194 17.5244 12.3805 17.5244 12.7808 17.024L14.6349 14.7063C14.8712 14.411 14.9999 14.044 14.9999 13.6658V13.5911C14.9999 12.7124 14.2876 12.0001 13.4089 12.0001C12.987 12.0001 12.5823 12.1677 12.2839 12.4661L11.9999 12.7501L11.7159 12.4661C11.4176 12.1677 11.0129 12.0001 10.5909 12.0001C9.71224 12.0001 8.99993 12.7124 8.99993 13.5911V13.6658C8.99993 14.044 9.12866 14.411 9.36494 14.7063Z",
		}),
		/*#__PURE__*/ React.createElement("path", {
			d: "M19.9999 8V7C19.9999 5.34315 18.6568 4 16.9999 4H14.1974C13.5294 4 12.8804 3.77702 12.3535 3.3664L11.4131 2.6336C10.8861 2.22298 10.2372 2 9.5691 2H6.99993C5.34308 2 3.99993 3.34315 3.99993 5V8H19.9999Z",
		}),
		/*#__PURE__*/ React.createElement("path", {
			d: "M20.526 8H3.47391C2.20062 8 1.25151 9.17404 1.5183 10.4191L3.32239 18.8381C3.71759 20.6824 5.34745 22 7.2336 22H16.7663C18.6524 22 20.2823 20.6824 20.6775 18.8381L22.4816 10.4191C22.7484 9.17403 21.7992 8 20.526 8Z",
		}),
	);
}

export default React.forwardRef(FolderFavourite02);
