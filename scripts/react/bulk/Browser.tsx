import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBrowser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.42 2.044a4.83 4.83 0 0 0-.579.139 3.972 3.972 0 0 0-2.653 2.639C2.032 5.315 2 5.671 2 6.883V8h20V6.909c0-1.213-.035-1.601-.186-2.082a4.006 4.006 0 0 0-3.269-2.784c-.378-.052-12.756-.052-13.125.001m9.092 2.103c.63.387.642 1.299.023 1.692a.998.998 0 0 1-1.394-.336c-.107-.174-.121-.232-.121-.5 0-.259.016-.33.111-.492a.955.955 0 0 1 .941-.496.836.836 0 0 1 .44.132m4 0c.63.387.642 1.299.023 1.692a.998.998 0 0 1-1.394-.336c-.107-.174-.121-.232-.121-.5 0-.259.016-.33.111-.492a.955.955 0 0 1 .941-.496.836.836 0 0 1 .44.132'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBrowser);
export default ForwardRef;
