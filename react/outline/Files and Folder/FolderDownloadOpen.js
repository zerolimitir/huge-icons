import * as React from "react";

function FolderDownload02({ size, title, titleId, ...props }, svgRef) {
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
			d: "M9.00006 15L10.5858 16.5858C11.3669 17.3668 12.6332 17.3668 13.4143 16.5858L15.0001 15M12.0001 17V12M20.0001 7V8H4.00006V5C4.00006 3.34315 5.3432 2 7.00006 2H9.56923C10.2373 2 10.8862 2.22298 11.4132 2.6336L12.3536 3.3664C12.8806 3.77702 13.5295 4 14.1976 4H17.0001C18.6569 4 20.0001 5.34315 20.0001 7ZM3.47403 8H20.5261C21.7994 8 22.7485 9.17403 22.4817 10.4191L20.6776 18.8381C20.2824 20.6824 18.6525 22 16.7664 22H7.23372C5.34757 22 3.71771 20.6824 3.32251 18.8381L1.51843 10.4191C1.25163 9.17404 2.20074 8 3.47403 8Z",
		}),
	);
}

export default React.forwardRef(FolderDownload02);
