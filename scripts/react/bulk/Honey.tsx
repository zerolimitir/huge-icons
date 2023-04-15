import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHoney = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.71 4.767 7.48 6.011v4.982l2.238 1.244c1.23.683 2.258 1.243 2.282 1.243.024 0 1.052-.56 2.282-1.243l2.238-1.244V6.015l-2.227-1.238c-1.225-.68-2.255-1.241-2.29-1.245-.035-.004-1.066.552-2.293 1.235'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHoney);
export default ForwardRef;
