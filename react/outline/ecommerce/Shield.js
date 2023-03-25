import * as React from "react";

function Shield({ size, title, titleId, ...props }, svgRef) {
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
      d: "M10.3755 2.72201L5.37764 4.94327C3.93202 5.58577 2.97803 7.02461 3.07002 8.6039C3.42965 14.7781 5.2377 17.4963 9.93582 20.6769C11.1804 21.5195 12.821 21.5216 14.0647 20.6776C18.7772 17.4796 20.5206 14.7231 20.9118 8.62529C21.0138 7.03555 20.0583 5.58144 18.6026 4.93446L13.6246 2.72201C12.5903 2.26234 11.4097 2.26234 10.3755 2.72201Z",
      strokeLinejoin: "round",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M9 11L10.7528 12.4023C11.1707 12.7366 11.7777 12.6826 12.1301 12.2799L15 9",
      strokeLinejoin: "round",
      strokeLinecap: "round",
    })
  );
}
export default React.forwardRef(Shield);
