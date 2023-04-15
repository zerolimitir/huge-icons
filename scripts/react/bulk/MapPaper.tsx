import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMapPaper = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M8.76 10.392c0 6.026.004 6.364.07 6.382.039.011.159.031.267.046.754.103 1.542.529 2.963 1.601.374.282.83.61 1.014.729.677.437 1.419.743 1.932.797l.234.024V7.242l-.09-.019-.35-.064c-.316-.056-.887-.272-1.24-.468-.385-.214-.859-.539-1.62-1.113a23.51 23.51 0 0 0-1.014-.728c-.677-.437-1.419-.743-1.932-.797l-.234-.024v6.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapPaper);
export default ForwardRef;
