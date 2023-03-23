import * as React from "react";

function ArchiveDownload({ size, title, titleId, ...props }, svgRef) {
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
			d: "M20 11.6115V6C20 3.79086 18.2091 2 16 2H8C5.79086 2 4 3.79086 4 6V11.6115C4.32161 11.5385 4.65631 11.5 5 11.5H6C7.10165 11.5 8.13901 12.0187 8.8 12.9L10 14.5C10.4721 15.1295 11.2131 15.5 12 15.5C12.7869 15.5 13.5279 15.1295 14 14.5L15.2 12.9C15.861 12.0187 16.8983 11.5 18 11.5H19C19.3437 11.5 19.6784 11.5385 20 11.6115ZM11.25 9.17183C11.2033 9.13675 11.1586 9.09798 11.1161 9.05551L9.53033 7.46973C9.23744 7.17684 8.76256 7.17684 8.46967 7.46973C8.17678 7.76262 8.17678 8.23749 8.46967 8.53039L10.0555 10.1162C11.1294 11.1901 12.8706 11.1901 13.9445 10.1162L15.5303 8.53039C15.8232 8.23749 15.8232 7.76262 15.5303 7.46973C15.2374 7.17684 14.7626 7.17684 14.4697 7.46973L12.8839 9.05551C12.8414 9.09798 12.7967 9.13675 12.75 9.17183V5.00006C12.75 4.58584 12.4142 4.25006 12 4.25006C11.5858 4.25006 11.25 4.58584 11.25 5.00006V9.17183ZM22 16V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V16C2 14.3431 3.34315 13 5 13H6C6.62951 13 7.22229 13.2964 7.6 13.8L8.8 15.4C9.55542 16.4072 10.741 17 12 17C13.259 17 14.4446 16.4072 15.2 15.4L16.4 13.8C16.7777 13.2964 17.3705 13 18 13H19C20.6569 13 22 14.3431 22 16Z",
		}),
	);
}

export default React.forwardRef(ArchiveDownload);
