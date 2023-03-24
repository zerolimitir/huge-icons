import * as React from "react";

function ShoppingBasketArrowOut({ size, title, titleId, ...props }, svgRef) {
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
      d: "M14 14.5858L12.7071 13.2929C12.3166 12.9024 11.6834 12.9024 11.2929 13.2929L10 14.5858M12 18.5858V13.5858",
      strokeLineCap: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M8.06887 22H15.9312C17.7726 22 19.376 20.7429 19.8156 18.9548L21.7821 10.9548C22.4017 8.43408 20.4935 6 17.8977 6H6.10234C3.50656 6 1.59834 8.4341 2.21798 10.9548L4.18451 18.9548C4.62406 20.743 6.22752 22 8.06887 22Z",
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
export default React.forwardRef(ShoppingBasketArrowOut);
