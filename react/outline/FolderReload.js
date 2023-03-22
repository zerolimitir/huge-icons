import * as React from "react";

function FolderReload({ size, title, titleId, ...props }, svgRef) {
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
			d: "M11.0001 10.1708C12.0554 9.79864 13.2773 10.0346 14.1214 10.8787C14.9655 11.7227 15.2014 12.9447 14.8292 14M9.17088 12C8.7987 13.0553 9.03465 14.2772 9.87873 15.1213C10.7228 15.9654 11.9447 16.2013 13.0001 15.8291M22 10V17C22 19.2091 20.2091 21 18 21H6C3.79086 21 2 19.2091 2 17V7C2 4.79086 3.79086 3 6 3H8.66667C9.53215 3 10.3743 3.28071 11.0667 3.8L12.9333 5.2C13.6257 5.71929 14.4679 6 15.3333 6H18C20.2091 6 22 7.79086 22 10Z",
		}),
	);
}

export default React.forwardRef(FolderReload);
