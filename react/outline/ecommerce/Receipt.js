import * as React from "react";

function Receipt({ size, title, titleId, ...props }, svgRef) {
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
      d: "M17 7L7 7",
      strokeLinejoin: "round",
      strokeLinecap: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M17 11L7 11",
      strokeLinejoin: "round",
      strokeLinecap: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M12 15L7 15",
      strokeLinejoin: "round",
      strokeLinecap: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M19 2H5C3.89543 2 3 2.89543 3 4V19.1543C3 20.5396 4.37412 21.5053 5.67744 21.0361L7.2392 20.4739C7.72721 20.2982 8.26439 20.319 8.73737 20.5318L11.1793 21.6307C11.7012 21.8655 12.2988 21.8655 12.8207 21.6307L15.2626 20.5318C15.7356 20.319 16.2728 20.2982 16.7608 20.4739L18.3226 21.0361C19.6259 21.5053 21 20.5396 21 19.1543V4C21 2.89543 20.1046 2 19 2Z",
      strokeLinecap: "round",
    })
  );
}
export default React.forwardRef(Receipt);
