import * as React from "react";

function Trolley({ size, title, titleId, ...props }, svgRef) {
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
      d: "M8 7C8 5.89543 8.89543 5 10 5H18C19.1046 5 20 5.89543 20 7V15C20 16.1046 19.1046 17 18 17H10C8.89543 17 8 16.1046 8 15V7Z",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M7 20C7 21.1046 6.10457 22 5 22C3.89543 22 3 21.1046 3 20C3 18.8954 3.89543 18 5 18C6.10457 18 7 18.8954 7 20Z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      key: "path3",
      d: "M5 18V4C5 2.89543 4.10457 2 3 2H2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M7 20H22",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M13 8H15",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    })
  );
}
export default React.forwardRef(Trolley);
