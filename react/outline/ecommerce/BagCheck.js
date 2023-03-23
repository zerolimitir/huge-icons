import * as React from "react";

function BagCheck({ size, title, titleId, ...props }, svgRef) {
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
      d: "M16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6",
      strokeLinejoin: "round",
      strokeLineCap: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M4.562 9.50386C4.81221 7.50215 6.51381 6 8.53111 6H15.4688C17.4861 6 19.1877 7.50215 19.438 9.50386L20.438 17.5039C20.7364 19.8913 18.8748 22 16.4688 22H7.53111C5.12511 22 3.26357 19.8913 3.562 17.5039L4.562 9.50386Z",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M9 14L10.7528 15.4023C11.1707 15.7366 11.7777 15.6826 12.1301 15.2799L15 12",
      strokeLineCap: "round",
    })
  );
}

export default React.forwardRef(BagCheck);
