import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLineChartDescending = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.62 4.039c-.888.197-1.513.89-1.604 1.778-.093.91.457 1.758 1.341 2.068 1.052.368 2.174-.198 2.546-1.285.107-.312.1-.934-.015-1.25a2.052 2.052 0 0 0-1.244-1.236c-.255-.089-.786-.128-1.024-.075m-8 6a2.042 2.042 0 0 0-1.51 1.317c-.117.319-.116.971.002 1.294a2.071 2.071 0 0 0 1.244 1.24c.317.116.971.116 1.288 0a2.01 2.01 0 0 0 1.317-2.246c-.121-.713-.614-1.285-1.321-1.531-.251-.088-.784-.126-1.02-.074m15.969 6c-.657.119-1.253.663-1.492 1.361-.107.312-.1.934.015 1.25.21.577.662 1.027 1.244 1.24.317.116.971.116 1.288 0a2.071 2.071 0 0 0 1.244-1.24c.066-.179.084-.323.084-.65s-.018-.471-.084-.65a2.05 2.05 0 0 0-1.244-1.236c-.257-.089-.775-.126-1.055-.075'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLineChartDescending);
export default ForwardRef;
