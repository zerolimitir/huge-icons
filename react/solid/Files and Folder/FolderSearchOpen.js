import * as React from "react";

function FolderSearchOpen({ size, title, titleId, ...props }, svgRef) {
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
			d: "M17 4C18.4865 4 19.7205 5.08114 19.9585 6.5H4V5C4 3.34315 5.34315 2 7 2H9.56917C10.2372 2 10.8862 2.22298 11.4131 2.6336L12.3535 3.3664C12.8805 3.77702 13.5294 4 14.1975 4H17ZM20.526 8H3.47391C2.20062 8 1.25151 9.17404 1.5183 10.4191L3.32239 18.8381C3.71759 20.6824 5.34745 22 7.2336 22H16.7663C18.6524 22 20.2823 20.6824 20.6775 18.8381L22.4816 10.4191C22.7484 9.17403 21.7992 8 20.526 8ZM10.7499 14.5C10.7499 13.5335 11.5334 12.75 12.4999 12.75C13.4664 12.75 14.2499 13.5335 14.2499 14.5C14.2499 15.4665 13.4664 16.25 12.4999 16.25C11.5334 16.25 10.7499 15.4665 10.7499 14.5ZM12.4999 11.25C10.705 11.25 9.24994 12.7051 9.24994 14.5C9.24994 15.1257 9.42678 15.7102 9.73321 16.2061L8.46961 17.4697C8.17672 17.7626 8.17672 18.2374 8.46961 18.5303C8.7625 18.8232 9.23738 18.8232 9.53027 18.5303L10.7939 17.2667C11.2898 17.5732 11.8742 17.75 12.4999 17.75C14.2949 17.75 15.7499 16.2949 15.7499 14.5C15.7499 12.7051 14.2949 11.25 12.4999 11.25Z",
		}),
	);
}

export default React.forwardRef(FolderSearchOpen);
