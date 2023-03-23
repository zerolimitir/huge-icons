import * as React from "react";

function ArchiveDone({ size, title, titleId, ...props }, svgRef) {
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
			d: "M20 11.6115V6C20 3.79086 18.2091 2 16 2H8C5.79086 2 4 3.79086 4 6V11.6115C4.32161 11.5385 4.65631 11.5 5 11.5H6C7.10165 11.5 8.13901 12.0187 8.8 12.9L10 14.5C10.4721 15.1295 11.2131 15.5 12 15.5C12.7869 15.5 13.5279 15.1295 14 14.5L15.2 12.9C15.861 12.0187 16.8983 11.5 18 11.5H19C19.3437 11.5 19.6784 11.5385 20 11.6115ZM15.4939 5.43558C15.8056 5.70834 15.8372 6.18216 15.5645 6.49389L12.6946 9.77378C12.0779 10.4786 11.0156 10.5729 10.2843 9.98792L8.53151 8.58566C8.20806 8.3269 8.15562 7.85494 8.41438 7.53149C8.67313 7.20804 9.1451 7.1556 9.46855 7.41436L11.2214 8.81662C11.3258 8.90019 11.4776 8.88671 11.5657 8.78603L14.4356 5.50613C14.7084 5.1944 15.1822 5.16282 15.4939 5.43558ZM22 16V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V16C2 14.3431 3.34315 13 5 13H6C6.62951 13 7.22229 13.2964 7.6 13.8L8.8 15.4C9.55542 16.4072 10.741 17 12 17C13.259 17 14.4446 16.4072 15.2 15.4L16.4 13.8C16.7777 13.2964 17.3705 13 18 13H19C20.6569 13 22 14.3431 22 16Z",
		}),
	);
}

export default React.forwardRef(ArchiveDone);
