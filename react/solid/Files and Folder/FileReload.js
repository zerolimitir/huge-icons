import * as React from "react";

function FileReload({ size, title, titleId, ...props }, svgRef) {
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
			d: "M3 6V18C3 20.2091 4.79086 22 7 22H11.3431C11.6509 22 11.955 21.9645 12.25 21.8959V18C12.25 15.3766 14.3766 13.25 17 13.25H20.8959C20.9645 12.955 21 12.6509 21 12.3431V6C21 3.79086 19.2091 2 17 2H7C4.79086 2 3 3.79086 3 6ZM14.1716 20.8284C14.039 20.961 13.898 21.0833 13.75 21.1949V18C13.75 16.2051 15.2051 14.75 17 14.75H20.1949C20.0833 14.8981 19.961 15.039 19.8284 15.1716L14.1716 20.8284ZM11.2854 6.91403C12.0787 6.63425 12.9947 6.81264 13.6269 7.4449C14.2592 8.07717 14.4376 8.99313 14.1578 9.78646C14.02 10.1771 14.225 10.6054 14.6156 10.7432C15.0063 10.881 15.4346 10.676 15.5724 10.2854C16.037 8.96804 15.7435 7.44014 14.6876 6.38424C13.6317 5.32835 12.1038 5.03485 10.7865 5.49943C10.3959 5.63719 10.1909 6.06554 10.3286 6.45617C10.4664 6.84681 10.8948 7.0518 11.2854 6.91403ZM13.2854 12.5724C13.676 12.4346 13.881 12.0062 13.7432 11.6156C13.6055 11.225 13.1771 11.02 12.7865 11.1578C11.9932 11.4375 11.0772 11.2591 10.4449 10.6269C9.81269 9.99462 9.63429 9.07867 9.91407 8.28535C10.0518 7.89472 9.84684 7.46637 9.45621 7.32861C9.06558 7.19084 8.63723 7.39583 8.49946 7.78647C8.03489 9.10378 8.3284 10.6317 9.38429 11.6875C10.4402 12.7434 11.9681 13.0369 13.2854 12.5724Z",
		}),
	);
}

export default React.forwardRef(FileReload);
