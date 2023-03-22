import * as React from "react";

function Loading({ size, title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ React.createElement(
		"svg",
		Object.assign(
			{
				width: size || "1rem",
				height: size || "1rem",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"stroke-width":"1.5",
				"stroke-linecap":"round",
				"stroke-linejoin":"round",
				stroke: "#28303F",
				"aria-hidden": "true",
				ref: svgRef,
				"aria-labelledby": titleId,
			},
			props,
		),
		title
			? /*#__PURE__*/ React.createElement(
					"title",
					{
						id: titleId,
					},
					title,
			  )
			: null,
		/*#__PURE__*/ React.createElement("path", {
			 d:
			 "M13.9998 4C13.9998 5.10457 13.1043 6 11.9998 6C10.8952 6 9.99978 5.10457 9.99978 4C9.99978 2.89543 10.8952 2 11.9998 2C13.1043 2 13.9998 2.89543 13.9998 4Z"

		}),
			/*#__PURE__*/ React.createElement("path", {
				d:
				"M13.9998 20C13.9998 21.1046 13.1043 22 11.9998 22C10.8952 22 9.99978 21.1046 9.99978 20C9.99978 18.8954 10.8952 18 11.9998 18C13.1043 18 13.9998 18.8954 13.9998 20Z" 
   
		   }),
		   	/*#__PURE__*/ React.createElement("path", {
			 d:
			 "M19.928 9.73205C18.9714 10.2843 17.7482 9.95658 17.196 9C16.6437 8.04341 16.9714 6.82023 17.928 6.26794C18.8846 5.71566 20.1078 6.04341 20.6601 7C21.2123 7.95658 20.8846 9.17976 19.928 9.73205Z"

		}),
			/*#__PURE__*/ React.createElement("path", {
				d:
				"M6.07162 17.732C5.11504 18.2843 3.89186 17.9566 3.33957 17C2.78729 16.0434 3.11504 14.8202 4.07162 14.2679C5.02821 13.7157 6.25139 14.0434 6.80367 15C7.35596 15.9566 7.02821 17.1798 6.07162 17.732Z" 
   
		   }),
		   	/*#__PURE__*/ React.createElement("path", {
			 d:
			 "M17.928 17.732C16.9714 17.1798 16.6437 15.9566 17.196 15C17.7482 14.0434 18.9714 13.7157 19.928 14.2679C20.8846 14.8202 21.2123 16.0434 20.6601 17C20.1078 17.9566 18.8846 18.2843 17.928 17.732Z"

		}),
			/*#__PURE__*/ React.createElement("path", {
				d:
				"M4.07162 9.73208C3.11504 9.17979 2.78729 7.95661 3.33957 7.00003C3.89186 6.04344 5.11504 5.71569 6.07162 6.26797C7.02821 6.82026 7.35596 8.04344 6.80367 9.00003C6.25139 9.95661 5.02821 10.2844 4.07162 9.73208Z"
   
		   }),
	);
}

export default React.forwardRef(Loading);

