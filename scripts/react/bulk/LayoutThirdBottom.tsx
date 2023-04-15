import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLayoutThirdBottom = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2.01 17.33c.017 1.3.019 1.339.125 1.708.427 1.496 1.582 2.572 3.091 2.879.401.082.494.083 6.774.083s6.373-.001 6.774-.083a4 4 0 0 0 3.096-2.905c.102-.379.106-.435.121-1.702l.015-1.31H1.993l.017 1.33'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutThirdBottom);
export default ForwardRef;
