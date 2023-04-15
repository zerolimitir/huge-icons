import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChartPie = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.281 2.224c-.603.162-1.047.64-1.22 1.314-.09.353-.092 6.607-.001 6.954a2.045 2.045 0 0 0 1.442 1.447c.201.052.693.061 3.464.061 2.204 0 3.297-.014 3.442-.044.71-.148 1.257-.681 1.4-1.366.059-.28.009-.624-.194-1.33a10.026 10.026 0 0 0-6.737-6.834c-.5-.152-1.051-.268-1.251-.263a1.868 1.868 0 0 0-.345.061'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartPie);
export default ForwardRef;
