import * as React from "react";

function FolderOpenCrooked({ size, title, titleId, ...props }, svgRef) {
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
			d: "M19.3247 9.75V8.625C19.3247 6.76104 17.8704 5.25 16.0763 5.25H12.7227C12.1448 5.25 11.5773 5.0898 11.0788 4.78592L8.91049 3.46408C8.41201 3.1602 7.84453 3 7.26659 3H5.24839C3.45435 3 2 4.51104 2 6.375V17.625C2 19.489 3.45435 21 5.24839 21H14.7069C16.2282 21 17.6381 20.1707 18.4208 18.8152L21.688 13.1576C22.5541 11.6579 21.5144 9.75 19.8311 9.75H19.3247ZM19.3247 9.75H10.2287C8.51706 9.75 6.96597 10.7973 6.27081 12.4224L3.0828 19.875",
		}),
	);
}

export default React.forwardRef(FolderOpenCrooked);
