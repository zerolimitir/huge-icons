import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.647 13.326a.745.745 0 0 0-.353.924c.052.136.497.601 2.195 2.297C11.682 18.735 11.71 18.76 12 18.76c.29 0 .32-.026 2.493-2.193 1.162-1.159 2.147-2.174 2.19-2.255a.847.847 0 0 0 .077-.332.733.733 0 0 0-1.06-.663c-.107.05-.751.668-1.932 1.851l-1.772 1.777-1.768-1.778c-1.193-1.199-1.82-1.801-1.928-1.851a.738.738 0 0 0-.653.01'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowDown);
export default ForwardRef;
