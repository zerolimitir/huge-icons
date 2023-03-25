import * as React from "react";

function TrolleyCrooked({ size, title, titleId, ...props }, svgRef) {
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
      d: "M10.4727 18.7249C10.7351 19.6888 10.1539 20.6797 9.17445 20.938C8.19501 21.1963 7.18827 20.6242 6.92583 19.6602C6.66339 18.6963 7.24463 17.7054 8.22407 17.4472M10.4727 18.7249C10.2103 17.7609 9.20351 17.1889 8.22407 17.4472M10.4727 18.7249L22 15.6849M8.22407 17.4472L5.13534 6.10196C4.8729 5.13799 3.86616 4.56593 2.88672 4.82422L2 5.05806M12.9418 6.84935L14.7153 6.38167M12.4201 15.4052L19.5138 13.5345C20.4932 13.2762 21.0745 12.2854 20.812 11.3214L18.9113 4.33975C18.6488 3.37579 17.6421 2.80373 16.6626 3.06202L9.56892 4.93275C8.58948 5.19104 8.00824 6.18188 8.27068 7.14585L10.1714 14.1275C10.4339 15.0915 11.4406 15.6635 12.4201 15.4052Z",
      strokeLinejoin: "round",
      strokeLinecap: "round",
    })
  );
}
export default React.forwardRef(TrolleyCrooked);
