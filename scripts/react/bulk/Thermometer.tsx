import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgThermometer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.591 17.35c-1.57 1.573-1.571 1.575-1.571 2.191 0 .326.012.386.13.625.154.313.405.559.723.708.193.09.281.106.588.106.614 0 .644-.021 2.209-1.589L8 18.059l-1.031-1.03-1.03-1.03-1.348 1.351'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgThermometer);
export default ForwardRef;
