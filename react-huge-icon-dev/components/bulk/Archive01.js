import * as React from "react";
import { forwardRef } from "react";
const SvgArchive01 = ({ title, titleId }, ref) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="3rem"
    height="3rem"
    ref={ref}
    aria-labelledby={titleId}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20 13.17c-.313-.11-.65-.17-1-.17h-1a2 2 0 0 0-1.6.8l-1.2 1.6a4 4 0 0 1-6.4 0l-1.2-1.6A2 2 0 0 0 6 13H5c-.35 0-.687.06-1 .17V6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v7.17ZM9 9.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H9ZM8.25 6A.75.75 0 0 1 9 5.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 6Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M22 19v-3a3 3 0 0 0-3-3h-1a2 2 0 0 0-1.6.8l-1.2 1.6a4 4 0 0 1-6.4 0l-1.2-1.6A2 2 0 0 0 6 13H5a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3Z"
      opacity={0.4}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArchive01);
export default ForwardRef;
