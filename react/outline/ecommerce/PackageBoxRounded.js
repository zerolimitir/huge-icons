import * as React from "react";

function PackageBoxRounded({ size, title, titleId, ...props }, svgRef) {
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
      d: "M22 18V6.96126C22 6.3537 21.7238 5.77907 21.2494 5.39953L18.0957 2.87654C17.3864 2.30914 16.5052 2.00001 15.5969 2.00001L8.40313 2C7.49484 2 6.6136 2.30912 5.90434 2.87653L2.75061 5.39953C2.27618 5.77907 2 6.35369 2 6.96126V18C2 20.2092 3.79086 22 6 22H18C20.2091 22 22 20.2092 22 18Z",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M9 6H15V9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9V6Z",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M2.5 6H21.5",
      strokeLinejoin: "round",
      strokeLinecap: "round",
    })
  );
}
export default React.forwardRef(PackageBoxRounded);
