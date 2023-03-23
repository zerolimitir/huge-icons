import * as React from "react";

function Bag({ size, title, titleId, ...props }, svgRef) {
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
      d: "M4.56201 9.50386C4.81223 7.50215 6.51383 6 8.53112 6H15.4689C17.4862 6 19.1878 7.50215 19.438 9.50386L20.438 17.5039C20.7364 19.8913 18.8749 22 16.4689 22H7.53112C5.12513 22 3.26358 19.8913 3.56201 17.5039L4.56201 9.50386Z",
      strokeLinejoin: "round",
    })
  );
}

export default React.forwardRef(Bag);
