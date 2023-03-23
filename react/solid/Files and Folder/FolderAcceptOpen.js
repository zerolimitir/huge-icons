import * as React from "react";

function FolderAcceptOpen({ size, title, titleId, ...props }, svgRef) {
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
			d: "M16.9999 4C18.4864 4 19.7204 5.08114 19.9585 6.5H3.99994V5C3.99994 3.34315 5.34309 2 6.99994 2H9.56911C10.2372 2 10.8861 2.22298 11.4131 2.6336L12.3535 3.3664C12.8804 3.77702 13.5294 4 14.1974 4H16.9999ZM20.526 8H3.47391C2.20062 8 1.25151 9.17404 1.5183 10.4191L3.32239 18.8381C3.71759 20.6824 5.34745 22 7.2336 22H16.7663C18.6524 22 20.2823 20.6824 20.6775 18.8381L22.4816 10.4191C22.7484 9.17403 21.7992 8 20.526 8ZM15.4938 12.4356C15.8056 12.7083 15.8372 13.1822 15.5644 13.4939L12.6945 16.7738C12.0778 17.4786 11.0156 17.5729 10.2843 16.9879L8.53145 15.5857C8.208 15.3269 8.15556 14.8549 8.41431 14.5315C8.67307 14.208 9.14504 14.1556 9.46849 14.4144L11.2213 15.8166C11.3258 15.9002 11.4775 15.8867 11.5656 15.786L14.4355 12.5061C14.7083 12.1944 15.1821 12.1628 15.4938 12.4356Z",
		}),
	);
}

export default React.forwardRef(FolderAcceptOpen);
