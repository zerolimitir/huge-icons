import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWallet = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M18.38 9.059c-1.155.255-2.01 1.093-2.305 2.26-.11.439-.091 1.11.046 1.541.312.986 1.017 1.693 2.019 2.025.273.09.323.093 2.07.106l1.79.014V9l-1.69.003c-1.244.003-1.753.017-1.93.056'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWallet);
export default ForwardRef;
