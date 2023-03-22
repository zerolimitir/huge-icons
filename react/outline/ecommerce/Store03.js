import * as React from "react";

function Store04({ size, title, titleId, ...props }, svgRef) {
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
        strokeLinejoin: "round",
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
      d: "M7 18C7 16.8954 7.89543 16 9 16C10.1046 16 11 16.8954 11 18V22H7V18Z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M22 8.25V6C22 3.79086 20.2091 2 18 2H6C3.79086 2 2 3.79086 2 6V8.25C2 10.3211 3.49238 12 5.33333 12C7.17428 12 8.66667 10.3211 8.66667 8.25C8.66667 10.3211 10.1591 12 12 12C13.841 12 15.3333 10.3211 15.3333 8.25C15.3333 10.3211 16.8257 12 18.6667 12C20.5076 12 22 10.3211 22 8.25Z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M14 15C14 14.4477 14.4477 14 15 14H17C17.5523 14 18 14.4477 18 15V16C18 16.5523 17.5523 17 17 17H15C14.4477 17 14 16.5523 14 16V15Z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M21 11V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V11",
    })
  );
}

export default React.forwardRef(Store04);
