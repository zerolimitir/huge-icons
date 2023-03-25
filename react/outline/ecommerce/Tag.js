import * as React from "react";

function Tag({ size, title, titleId, ...props }, svgRef) {
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
      d: "M5 8.66079C5 7.47721 5.51025 6.35273 6.39683 5.58246L9.39683 2.97607C10.8948 1.67464 13.1052 1.67464 14.6032 2.97607L17.6032 5.58246C18.4897 6.35273 19 7.47721 19 8.66079V17.9456C19 20.1848 17.2091 22 15 22H9C6.79086 22 5 20.1848 5 17.9456V8.66079Z",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z",
    })
  );
}
export default React.forwardRef(Tag);
