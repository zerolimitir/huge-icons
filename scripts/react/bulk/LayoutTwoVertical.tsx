import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLayoutTwoVertical = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='m2.01 15.33.013 3.33.11.378c.438 1.505 1.584 2.572 3.093 2.879.401.082.494.083 6.774.083s6.373-.001 6.774-.083a4.002 4.002 0 0 0 3.097-2.905l.108-.392.012-3.31.012-3.31H1.997l.013 3.33'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutTwoVertical);
export default ForwardRef;
