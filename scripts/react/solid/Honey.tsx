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
            d='M9.71 3.767 7.48 5.011v4.982l2.238 1.244c1.23.683 2.256 1.243 2.278 1.243.022 0 1.049-.56 2.282-1.245l2.242-1.246V5.015l-2.227-1.238c-1.225-.68-2.255-1.241-2.29-1.245-.035-.004-1.066.552-2.293 1.235m-5.47 8.99-2.22 1.235v5.021l2.22 1.234c1.221.678 2.238 1.233 2.26 1.233.022 0 1.039-.555 2.26-1.233l2.22-1.234v-5.021l-2.22-1.235c-1.221-.68-2.238-1.235-2.26-1.235-.022 0-1.039.555-2.26 1.235m11 0-2.22 1.235v5.021l2.22 1.234c1.221.678 2.238 1.233 2.26 1.233.022 0 1.039-.555 2.26-1.233l2.22-1.234v-5.021l-2.22-1.235c-1.221-.68-2.238-1.235-2.26-1.235-.022 0-1.039.555-2.26 1.235'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHoney);
export default ForwardRef;
