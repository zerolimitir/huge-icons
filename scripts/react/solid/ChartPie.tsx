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
            d='M13.281 2.224c-.603.162-1.047.64-1.22 1.314-.052.205-.061.698-.061 3.448 0 2.189.014 3.277.044 3.422.157.75.798 1.391 1.548 1.548.295.061 6.521.061 6.816 0 .71-.148 1.257-.681 1.4-1.366.059-.28.009-.624-.194-1.33a10.026 10.026 0 0 0-6.737-6.834c-.5-.152-1.051-.268-1.251-.263a1.868 1.868 0 0 0-.345.061M9.78 4.084a9.172 9.172 0 0 0-4.42 1.909A8.921 8.921 0 0 0 2.918 9.06 8.983 8.983 0 0 0 7.02 21.062a8.98 8.98 0 0 0 12.062-4.122c.431-.886.73-1.872.837-2.76.023-.198.051-.427.062-.508l.019-.148-3.25-.013c-3.189-.014-3.256-.016-3.559-.101-.733-.205-1.16-.453-1.671-.969a3.334 3.334 0 0 1-.773-1.167c-.227-.569-.227-.561-.227-4.037V4.04l-.25.005a4.93 4.93 0 0 0-.49.039'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartPie);
export default ForwardRef;
