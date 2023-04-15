import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLayoutFive = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.42 2.044a4.83 4.83 0 0 0-.579.139 3.972 3.972 0 0 0-2.653 2.639C2.032 5.315 2 5.671 2 6.883V8h20V6.909c0-1.213-.035-1.601-.186-2.082a4.006 4.006 0 0 0-3.269-2.784c-.378-.052-12.756-.052-13.125.001M8 18.5V22h5.184c5.083 0 5.191-.002 5.59-.083a4 4 0 0 0 3.096-2.905l.107-.392.014-1.81.013-1.81H8v3.5'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutFive);
export default ForwardRef;
