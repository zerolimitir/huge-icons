import * as React from "react";

function WalletFill({ size, title, titleId, ...props }, svgRef) {
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
      d: "M2 6H18C20.2091 6 22 7.79086 22 10V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6Z",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M2 6C2 3.79086 3.79086 2 6 2H12C14.2091 2 16 3.79086 16 6H2Z",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M22 12L22 16H18C16.8954 16 16 15.1046 16 14C16 12.8954 16.8954 12 18 12L22 12Z",
      strokeLinejoin: "round",
    })
  );
}
export default React.forwardRef(WalletFill);
