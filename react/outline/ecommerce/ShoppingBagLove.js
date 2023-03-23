import * as React from "react";

function ShoppingBagLove({ size, title, titleId, ...props }, svgRef) {
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
      d: "M18.5225 15.9168L18.2574 16.182L17.9922 15.9168C17.26 15.1846 16.0728 15.1846 15.3406 15.9168C14.6083 16.649 14.6083 17.8362 15.3406 18.5684L17.1967 20.4246C17.7825 21.0104 18.7322 21.0104 19.318 20.4246L21.1742 18.5684C21.9064 17.8362 21.9064 16.649 21.1742 15.9168C20.442 15.1846 19.2548 15.1846 18.5225 15.9168Z",
      strokeLinejoin: "round",
    })
  );
}

export default React.forwardRef(ShoppingBagLove);
