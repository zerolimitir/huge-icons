import * as React from "react";

function ShoppingBasketCheck({ size, title, titleId, ...props }, svgRef) {
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
      d: "M20.282 18.808C19.9021 20.6666 18.2806 22 16.4002 22H7.59978C5.71942 22 4.09787 20.6666 3.71804 18.808L2.08312 10.808C1.57594 8.32624 3.45403 6 5.96486 6L18.0351 6C20.546 6 22.4241 8.32624 21.9169 10.808L20.282 18.808Z",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M21 10H3",
      strokeLinecap: "square",
    }),
    /*#__PURE__*/ React.createElement("path", {
      key: "path3",
      d: "M9 16L10.7528 17.4023C11.1707 17.7366 11.7777 17.6826 12.1301 17.2799L15 14",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M9 2L6 6",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M15 2L18 6",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    })
  );
}
export default React.forwardRef(ShoppingBasketCheck);
