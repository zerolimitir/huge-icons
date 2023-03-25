import * as React from "react";

function WithDraw({ size, title, titleId, ...props }, svgRef) {
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
      d: "M18 11L18 7L6 7V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V11ZM18 11C20.2091 11 22 9.20914 22 7C22 4.79086 20.2091 3 18 3H6C3.79086 3 2 4.79086 2 7C2 9.20914 3.79086 11 6 11",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M14 15L12.7071 16.2929C12.3166 16.6834 11.6834 16.6834 11.2929 16.2929L10 15M12 11V16",
      strokeLinecap: "round",
    })
  );
}
export default React.forwardRef(WithDraw);
