import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFiverr = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path fill='currentColor' fillRule='evenodd' d='M16 15.5V21h4V10h-4v5.5' />
    </svg>
);
const ForwardRef = forwardRef(SvgFiverr);
export default ForwardRef;
