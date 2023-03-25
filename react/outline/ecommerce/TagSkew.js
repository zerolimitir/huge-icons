import * as React from "react";

function TagSkew({ size, title, titleId, ...props }, svgRef) {
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
      d: "M16.2426 10.5858C15.4615 11.3669 14.1952 11.3669 13.4142 10.5858C12.6331 9.8048 12.6331 8.53847 13.4142 7.75742C14.1952 6.97637 15.4615 6.97637 16.2426 7.75742C17.0236 8.53847 17.0236 9.8048 16.2426 10.5858Z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M9.41144 4.68911C10.2484 3.85219 11.4043 3.41786 12.5759 3.50011L16.5402 3.77844C18.5196 3.91741 20.0826 5.48041 20.2216 7.45987L20.4999 11.4242C20.5822 12.5958 20.1478 13.7517 19.3109 14.5886L12.7456 21.154C11.1622 22.7373 8.61235 22.7545 7.05026 21.1924L2.80762 16.9498C1.24552 15.3877 1.26274 12.8378 2.84608 11.2545L9.41144 4.68911Z",
      strokeLinejoin: "round",
    })
  );
}
export default React.forwardRef(TagSkew);
