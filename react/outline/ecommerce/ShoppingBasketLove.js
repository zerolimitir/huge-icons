import * as React from "react";

function ShoppingBasketLove({ size, title, titleId, ...props }, svgRef) {
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
      d: "M9 2L6 6",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M15 2L18 6",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeLinecap: "square",
    }),
    /*#__PURE__*/ React.createElement("path", {
      key: "path3",
      d: "M2.58683 10H21.4132M18.0351 6L5.96486 6C3.45403 6 1.57594 8.32624 2.08312 10.808L3.71804 18.808C4.09787 20.6666 5.71942 22 7.59978 22H16.4002C18.2806 22 19.9021 20.6666 20.282 18.808L21.9169 10.808C22.4241 8.32624 20.546 6 18.0351 6Z",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M12.2652 13.7348L12 14L11.7348 13.7348C11.0026 13.0026 9.8154 13.0026 9.08317 13.7348C8.35094 14.4671 8.35094 15.6543 9.08317 16.3865L10.9393 18.2426C11.5251 18.8284 12.4749 18.8284 13.0606 18.2426L14.9168 16.3865C15.649 15.6543 15.649 14.4671 14.9168 13.7348C14.1846 13.0026 12.9974 13.0026 12.2652 13.7348Z",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    })
  );
}
export default React.forwardRef(ShoppingBasketLove);
