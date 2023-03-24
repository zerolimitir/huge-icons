import * as React from "react";

function HelpPolygon({ size, title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ React.createElement(
		"svg",
		Object.assign(
			{
				width: size || "1rem",
				height: size || "1rem",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24",
				fill: "none",
				"strokeWidth":"1.5",
				"strokeLinecap":"round",
				"strokeLinejoin":"round",
				stroke: "currentColor",
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
			 "M10 8.99997C10 7.8954 10.8954 6.99997 12 6.99997C13.1046 6.99997 14 7.8954 14 8.99997C14 9.39812 13.8837 9.7691 13.6831 10.0808C13.0854 11.0096 12 11.8954 12 13V13.5M12 16V17M3 9.13192V14.8681C3 16.3914 3.7923 17.799 5.07846 18.5607L9.92154 21.4288C11.2077 22.1904 12.7923 22.1904 14.0785 21.4288L18.9215 18.5607C20.2077 17.799 21 16.3914 21 14.8681V9.13192C21 7.6086 20.2077 6.20099 18.9215 5.43932L14.0785 2.57125C12.7923 1.80958 11.2077 1.80958 9.92154 2.57125L5.07846 5.43932C3.7923 6.20099 3 7.6086 3 9.13192Z" 

		}),
	);
}

export default React.forwardRef(HelpPolygon);

