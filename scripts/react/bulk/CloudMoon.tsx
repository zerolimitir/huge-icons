import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCloudMoon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.42 4.043c-1.419.17-2.759.979-3.54 2.137-.165.245-.4.665-.4.715 0 .01.155.121.345.247a7.042 7.042 0 0 1 2.442 2.752c.158.314.188.351.265.329.518-.151.841-.196 1.428-.199.688-.004 1.032.045 1.574.221.78.254 1.394.638 2.022 1.267l.457.457.072-.095c.144-.19.415-.696.541-1.011a4.972 4.972 0 0 0-2.084-6.147 4.698 4.698 0 0 0-1.462-.58 5.62 5.62 0 0 0-1.66-.093'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudMoon);
export default ForwardRef;
