import * as React from "react";

function InvoicePercent({ size, title, titleId, ...props }, svgRef) {
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
      d: "M10 9C10 9.55228 9.55228 10 9 10C8.44772 10 8 9.55228 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9Z",
      fill: "currentColor",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M16 15C16 15.5523 15.5523 16 15 16C14.4477 16 14 15.5523 14 15C14 14.4477 14.4477 14 15 14C15.5523 14 16 14.4477 16 15Z",
      fill: "currentColor",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M19 2H5C3.89543 2 3 2.89543 3 4V19.1543C3 20.5396 4.37412 21.5053 5.67744 21.0361L7.2392 20.4739C7.72721 20.2982 8.26439 20.319 8.73737 20.5318L11.1793 21.6307C11.7012 21.8655 12.2988 21.8655 12.8207 21.6307L15.2626 20.5318C15.7356 20.319 16.2728 20.2982 16.7608 20.4739L18.3226 21.0361C19.6259 21.5053 21 20.5396 21 19.1543V4C21 2.89543 20.1046 2 19 2Z",
      strokeLinecap: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M9 15L15 9",
      strokeLinecap: "round",
    })
  );
}
export default React.forwardRef(InvoicePercent);
