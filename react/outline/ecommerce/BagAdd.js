import * as React from "react";

function BagAdd({ size, title, titleId, ...props }, svgRef) {
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
      d: "M4.56203 9.50386C4.81224 7.50215 6.51384 6 8.53114 6H15.4689C17.4862 6 19.1878 7.50215 19.438 9.50386L20.438 17.5039C20.7364 19.8913 18.8749 22 16.4689 22H7.53114C5.12514 22 3.2636 19.8913 3.56203 17.5039L4.56203 9.50386Z",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M9 14H15",
      strokeLinejoin: "round",
      strokeLineCap: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M12 11L12 17",
      strokeLinejoin: "round",
      strokeLineCap: "round",
    })
  );
}

export default React.forwardRef(BagAdd);
