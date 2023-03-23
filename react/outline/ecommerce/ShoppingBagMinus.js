import * as React from "react";

function ShoppingBagMinus({ size, title, titleId, ...props }, svgRef) {
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
      d: "M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6",
      strokeLinejoin: "round",
      strokeLineCap: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M20.6667 13L19.5571 6.3424C19.2356 4.41365 17.5669 3 15.6115 3H8.38851C6.43316 3 4.7644 4.41365 4.44294 6.3424L2.77627 16.3424C2.36992 18.7805 4.25009 21 6.72185 21H13",
      strokeLinejoin: "round",
      strokeLineCap: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M22 17L16 17",
      strokeLinejoin: "round",
      strokeLineCap: "round",
    })
  );
}

export default React.forwardRef(ShoppingBagMinus);
