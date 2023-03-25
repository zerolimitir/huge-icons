import * as React from "react";

function GlassBroken({ size, title, titleId, ...props }, svgRef) {
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
      d: "M11.2326 14H12.7674C17.1094 14 20.0137 9.53089 18.2503 5.56317L16.9306 2.59386C16.7701 2.23273 16.412 2 16.0168 2L7.98321 2C7.58802 2 7.2299 2.23273 7.0694 2.59386L5.7497 5.56317C3.98627 9.53089 6.89062 14 11.2326 14Z",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M12 22V14M12 22H15M12 22H9",
      strokeLinecap: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M12.5 5L11 8H13L11.5 11",
      strokeLinejoin: "round",
      strokeLinecap: "round",
    })
  );
}
export default React.forwardRef(GlassBroken);
