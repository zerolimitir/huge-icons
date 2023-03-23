import * as React from "react";

function FileDownload({ size, title, titleId, ...props }, svgRef) {
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
			d: "M3 6V18C3 20.2091 4.79086 22 7 22H11.3431C11.6509 22 11.955 21.9645 12.25 21.8959V18C12.25 15.3766 14.3766 13.25 17 13.25H20.8959C20.9645 12.955 21 12.6509 21 12.3431V6C21 3.79086 19.2091 2 17 2H7C4.79086 2 3 3.79086 3 6ZM14.1716 20.8284C14.039 20.961 13.898 21.0833 13.75 21.1949V18C13.75 16.2051 15.2051 14.75 17 14.75H20.1949C20.0833 14.898 19.961 15.039 19.8284 15.1716L14.1716 20.8284ZM12.8839 10.0555C12.8414 10.098 12.7967 10.1368 12.75 10.1718L12.75 6.00006C12.75 5.58584 12.4142 5.25006 12 5.25006C11.5858 5.25006 11.25 5.58584 11.25 6.00006L11.25 10.1718C11.2033 10.1368 11.1586 10.098 11.1161 10.0555L9.53033 8.46973C9.23744 8.17683 8.76256 8.17683 8.46967 8.46973C8.17678 8.76262 8.17678 9.23749 8.46967 9.53039L10.0555 11.1162C11.1294 12.1901 12.8706 12.1901 13.9445 11.1162L15.5303 9.53039C15.8232 9.23749 15.8232 8.76262 15.5303 8.46973C15.2374 8.17683 14.7626 8.17683 14.4697 8.46973L12.8839 10.0555Z",
		}),
	);
}

export default React.forwardRef(FileDownload);
