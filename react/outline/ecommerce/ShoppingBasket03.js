import * as React from "react";

function ShoppingBasket03({ size, title, titleId, ...props }, svgRef) {
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
      d: "M8.06885 22H15.9312C17.7726 22 19.376 20.7429 19.8156 18.9548L21.782 10.9548C22.4017 8.43408 20.4934 6 17.8977 6H6.10232C3.50654 6 1.59832 8.4341 2.21796 10.9548L4.18449 18.9548C4.62404 20.743 6.2275 22 8.06885 22Z",
      strokeLinejoin: "round",
      strokeLineCap: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M3 10H21",
      strokeLineCap: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M8.99976 2L5.99976 6",
      strokeLinejoin: "round",
      strokeLineCap: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M14.9998 2L17.9998 6",
      strokeLinejoin: "round",
      strokeLineCap: "round",
    })
  );
}
export default React.forwardRef(ShoppingBasket03);
