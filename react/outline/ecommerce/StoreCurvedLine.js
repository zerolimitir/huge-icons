import * as React from "react";

function StoreCurvedLine({ size, title, titleId, ...props }, svgRef) {
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
      d: "M22 8.25V6C22 3.79086 20.2091 2 18 2H6C3.79086 2 2 3.79086 2 6V8.25C2 10.3211 3.49238 12 5.33333 12C7.17428 12 8.66667 10.3211 8.66667 8.25C8.66667 10.3211 10.1591 12 12 12C13.8409 12 15.3333 10.3211 15.3333 8.25C15.3333 10.3211 16.8257 12 18.6667 12C20.5076 12 22 10.3211 22 8.25Z",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M9 18C11.3561 19.3404 12.6476 19.3263 15 18",

      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M21 11V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V11",
      strokeLinejoin: "round",
    })
  );
}

export default React.forwardRef(StoreCurvedLine);
