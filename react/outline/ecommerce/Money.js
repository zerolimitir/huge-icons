import * as React from "react";

function Money({ size, title, titleId, ...props }, svgRef) {
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
      d: "M2 8C2 5.79086 3.79086 4 6 4H18C20.2091 4 22 5.79086 22 8V16C22 18.2091 20.2091 20 18 20H6C3.79086 20 2 18.2091 2 16V8Z",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M6.5 7.5C6.5 8.05228 6.05228 8.5 5.5 8.5C4.94772 8.5 4.5 8.05228 4.5 7.5C4.5 6.94772 4.94772 6.5 5.5 6.5C6.05228 6.5 6.5 6.94772 6.5 7.5Z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M19.5 7.5C19.5 8.05228 19.0523 8.5 18.5 8.5C17.9477 8.5 17.5 8.05228 17.5 7.5C17.5 6.94772 17.9477 6.5 18.5 6.5C19.0523 6.5 19.5 6.94772 19.5 7.5Z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M6.5 16.5C6.5 17.0523 6.05228 17.5 5.5 17.5C4.94772 17.5 4.5 17.0523 4.5 16.5C4.5 15.9477 4.94772 15.5 5.5 15.5C6.05228 15.5 6.5 15.9477 6.5 16.5Z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M19.5 16.5C19.5 17.0523 19.0523 17.5 18.5 17.5C17.9477 17.5 17.5 17.0523 17.5 16.5C17.5 15.9477 17.9477 15.5 18.5 15.5C19.0523 15.5 19.5 15.9477 19.5 16.5Z",
    })
  );
}
export default React.forwardRef(Money);
