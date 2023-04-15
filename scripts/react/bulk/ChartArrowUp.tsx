import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChartArrowUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M1.811 1.278a.883.883 0 0 0-.481.374c-.066.12-.071.608-.082 8.308-.008 5.417.002 8.302.029 8.541.131 1.143.551 2.005 1.384 2.838.82.82 1.667 1.239 2.791 1.38.473.059 16.553.056 16.767-.004.212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-8.423-.02-8.423-.02-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 2.912 19l-.132-.38-.02-8.42c-.02-8.396-.02-8.42-.102-8.559a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartArrowUp);
export default ForwardRef;
