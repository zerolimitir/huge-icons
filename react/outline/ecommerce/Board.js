import * as React from "react";

function Board({ size, title, titleId, ...props }, svgRef) {
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
      d: "M2 9C2 7.34315 3.34315 6 5 6H19C20.6569 6 22 7.34315 22 9V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V9Z",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M7 10H17",
      strokeLinecap: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M7 14H17",
      strokeLinecap: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M7 18H12",
      strokeLinecap: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M6 6L12 2L18 6",
      strokeLinejoin: "round",
      strokeLinecap: "round",
    })
  );
}
export default React.forwardRef(Board);
