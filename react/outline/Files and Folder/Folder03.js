import * as React from "react";

function Folder03({ size, title, titleId, ...props }, svgRef) {
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
				"aria-hidden": "true",
				ref: svgRef,
				"aria-labelledby": titleId,
			},
			props,
		),
		title ? /*#__PURE__*/ React.createElement("title", { id: titleId }, title) : null,
		/*#__PURE__*/ React.createElement("path", {
			d: "M11.0667 3.8L10.6167 4.4L11.0667 3.8ZM12.9333 5.2L13.3833 4.6L12.9333 5.2ZM21.25 10V17H22.75V10H21.25ZM18 20.25H6V21.75H18V20.25ZM2.75 17V7H1.25V17H2.75ZM15.3333 6.75H18V5.25H15.3333V6.75ZM6 3.75H8.66667V2.25H6V3.75ZM10.6167 4.4L12.4833 5.8L13.3833 4.6L11.5167 3.2L10.6167 4.4ZM8.66667 3.75C9.36987 3.75 10.0541 3.97808 10.6167 4.4L11.5167 3.2C10.6945 2.58334 9.69443 2.25 8.66667 2.25V3.75ZM15.3333 5.25C14.6301 5.25 13.9459 5.02192 13.3833 4.6L12.4833 5.8C13.3055 6.41665 14.3056 6.75 15.3333 6.75V5.25ZM6 20.25C4.20507 20.25 2.75 18.7949 2.75 17H1.25C1.25 19.6234 3.37665 21.75 6 21.75V20.25ZM21.25 17C21.25 18.7949 19.7949 20.25 18 20.25V21.75C20.6234 21.75 22.75 19.6234 22.75 17H21.25ZM22.75 10C22.75 7.37665 20.6234 5.25 18 5.25V6.75C19.7949 6.75 21.25 8.20507 21.25 10H22.75ZM2.75 7C2.75 5.20507 4.20507 3.75 6 3.75V2.25C3.37665 2.25 1.25 4.37665 1.25 7H2.75Z",
		}),
	);
}

export default React.forwardRef(Folder03);
