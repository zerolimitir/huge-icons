import * as React from "react";

function FolderFavourite({ size, title, titleId, ...props }, svgRef) {
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
			d: "M22 10V17C22 19.2091 20.2091 21 18 21H6C3.79086 21 2 19.2091 2 17V7C2 4.79086 3.79086 3 6 3H8.66667C9.53215 3 10.3743 3.28071 11.0667 3.8L12.9333 5.2C13.6257 5.71929 14.4679 6 15.3333 6H18C20.2091 6 22 7.79086 22 10ZM11.2191 16.0239L9.36501 13.7063C9.12873 13.4109 9 13.0439 9 12.6657V12.591C9 11.7123 9.71231 11 10.591 11C11.0129 11 11.4176 11.1676 11.716 11.466L12 11.75L12.284 11.466C12.5824 11.1676 12.9871 11 13.409 11C14.2877 11 15 11.7123 15 12.591V12.6657C15 13.0439 14.8713 13.4109 14.635 13.7063L12.7809 16.0239C12.3805 16.5243 11.6195 16.5243 11.2191 16.0239Z",
		}),
	);
}

export default React.forwardRef(FolderFavourite);
