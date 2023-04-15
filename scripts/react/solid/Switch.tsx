import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSwitch = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.42 5.283c-1.587.123-3.16.874-4.283 2.044a6.742 6.742 0 0 0-1.72 6.153 6.76 6.76 0 0 0 5.937 5.238c.564.057 8.728.057 9.292 0a6.76 6.76 0 0 0 5.937-5.238c.624-2.726-.549-5.607-2.903-7.13a6.651 6.651 0 0 0-3.172-1.07c-.578-.045-8.507-.043-9.088.003m5.277 1.716c-1.355.907-2.232 2.211-2.583 3.841-.075.35-.09.542-.09 1.16 0 .618.015.81.09 1.16.35 1.627 1.238 2.947 2.586 3.844l.359.239-2.939-.013-2.94-.013-.412-.108c-1.265-.333-2.323-1.053-3.049-2.075-.287-.404-.654-1.177-.774-1.634-.335-1.267-.222-2.515.332-3.66.388-.8.885-1.413 1.562-1.927.405-.307 1.251-.732 1.701-.856.656-.181.816-.189 3.737-.193l2.777-.004-.357.239'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSwitch);
export default ForwardRef;
