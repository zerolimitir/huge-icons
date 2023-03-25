import * as React from "react";

function MoneyBag({ size, title, titleId, ...props }, svgRef) {
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
      d: "M5.63246 11.1026C6.44915 8.65258 8.74198 7 11.3246 7H12.6755C15.258 7 17.5509 8.65258 18.3675 11.1026L19.3676 14.1026C20.6626 17.9878 17.7708 22 13.6755 22H10.3246C6.22921 22 3.3374 17.9878 4.63246 14.1026L5.63246 11.1026Z",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M9 18C11.2544 19.3147 12.5778 19.3445 15 18",
      strokeLinecap: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M14.0859 7L9.91411 7L8.51303 5.39296C7.13959 3.81763 8.74185 1.46298 10.7471 2.10985L11.6748 2.40914C11.8861 2.47728 12.1139 2.47728 12.3252 2.40914L13.2529 2.10985C15.2582 1.46298 16.8604 3.81763 15.487 5.39296L14.0859 7Z",
      strokeLinejoin: "round",
    })
  );
}
export default React.forwardRef(MoneyBag);
