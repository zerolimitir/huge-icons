import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgStop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M8.42 5.044a4.614 4.614 0 0 0-1.199.386 4.001 4.001 0 0 0-2.178 3.025c-.059.426-.059 6.664 0 7.09.247 1.773 1.679 3.192 3.443 3.413.448.057 6.58.057 7.028 0a4.008 4.008 0 0 0 3.444-3.444c.057-.448.057-6.58 0-7.028-.221-1.764-1.64-3.196-3.413-3.443-.375-.052-6.759-.051-7.125.001'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStop);
export default ForwardRef;
