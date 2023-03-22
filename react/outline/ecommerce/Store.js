import * as React from "react";

function Store({ size, title, titleId, ...props }, svgRef) {
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
      d: "M20 12V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V12",
      stroke: "currentColor",
      stroke: "#28303F",
      strokeWidth: "1.5",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M16.7687 2H7.23126C5.4139 2 3.77964 3.24476 3.10469 5.14305L2.34671 7.27487C2.11726 7.92019 1.95866 8.61074 2.12602 9.27488C2.52236 10.8478 3.80824 12 5.33333 12C7.17428 12 8.66667 10.3211 8.66667 8.25C8.66667 10.3211 10.1591 12 12 12C13.841 12 15.3333 10.3211 15.3333 8.25C15.3333 10.3211 16.8257 12 18.6667 12C20.1918 12 21.4776 10.8478 21.874 9.27488C22.0413 8.61074 21.8827 7.92019 21.6533 7.27487L20.8953 5.14305C20.2204 3.24475 18.5861 2 16.7687 2Z",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M9 17C11.3561 18.3404 12.6476 18.3263 15 17",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    })
  );
}

export default React.forwardRef(Store);
