import * as React from "react";

function MicrophoneMute({ size, title, titleId, ...props }, svgRef) {
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
			 "M12 19V22M12 19C8.13401 19 5 15.866 5 12V11M12 19C14.0327 19 15.863 18.1336 17.1418 16.75M12 22H15M12 22H9M3 2.75L21 20.75M19 11V12C19 12.8232 18.8579 13.6132 18.5969 14.3469M16 11.75V6C16 3.79086 14.2091 2 12 2C10.4444 2 9.09624 2.88797 8.43469 4.18469M8 8V12C8 14.2091 9.79086 16 12 16C13.1484 16 14.1838 15.516 14.9133 14.741" 

		}),
	);
}

export default React.forwardRef(MicrophoneMute);

