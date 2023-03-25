import * as React from "react";

function Invoice({ size, title, titleId, ...props }, svgRef) {
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
      d: "M3 6C3 3.79086 4.79086 2 7 2H17C19.2091 2 21 3.79086 21 6V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V6Z",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M17 7L7 7",
      strokeLinejoin: "round",
      strokeLinecap: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M17 12L7 12",
      strokeLinejoin: "round",
      strokeLinecap: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M12 17L7 17",
      strokeLinejoin: "round",
      strokeLinecap: "round",
    })
  );
}
export default React.forwardRef(Invoice);
