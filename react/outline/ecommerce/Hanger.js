import * as React from "react";

function Hanger({ size, title, titleId, ...props }, svgRef) {
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
        strokeWidth: "1.5",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId,
      },
      props
    ),
    title
      ? /*#__PURE__*/ React.createElement(
          "title",
          {
            id: titleId,
          },
          title
        )
      : null,
    /*#__PURE__*/ React.createElement("path", {
      d: "M9.95142 6C9.95142 4.89543 10.8686 4 12 4C13.1314 4 14.0486 4.89543 14.0486 6C14.0486 6.39815 13.9294 6.76913 13.724 7.08079C13.1118 8.00967 12 8.89543 12 10M12 10L21.1382 16.3725C22.7599 17.5034 21.9405 20 19.9475 20H4.05248C2.05954 20 1.24005 17.5034 2.86177 16.3725L12 10Z",
      strokeLinejoin: "round",
      strokeLinecap: "round",
    })
  );
}
export default React.forwardRef(Hanger);
