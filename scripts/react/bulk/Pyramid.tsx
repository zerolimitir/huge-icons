import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPyramid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.013 11.992 3.286 14.98l4.357.01c2.396.006 6.318.006 8.714 0l4.357-.01-1.727-2.988-1.727-2.988H6.74l-1.727 2.988'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPyramid);
export default ForwardRef;
