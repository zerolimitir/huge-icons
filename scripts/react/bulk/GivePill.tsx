import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgGivePill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16 9.642c0 1.791.017 1.978.234 2.509a3.046 3.046 0 0 0 1.615 1.615 2.998 2.998 0 0 0 4.089-2.185c.05-.24.062-.617.062-1.939V8h-6v1.642'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGivePill);
export default ForwardRef;
