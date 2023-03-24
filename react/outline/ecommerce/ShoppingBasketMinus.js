import * as React from "react";

function ShoppingBasketMinus({ size, title, titleId, ...props }, svgRef) {
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
      d: "M15 16L9 16",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M8.06888 22H15.9312C17.7726 22 19.3761 20.7429 19.8156 18.9548L21.7821 10.9548C22.4017 8.43408 20.4935 6 17.8977 6H6.10235C3.50657 6 1.59835 8.4341 2.21799 10.9548L4.18452 18.9548C4.62407 20.743 6.22753 22 8.06888 22Z",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M3 10H21",
      strokeLinecap: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M8.99976 2L5.99976 6",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M14.9998 2L17.9998 6",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    })
  );
}
export default React.forwardRef(ShoppingBasketMinus);
