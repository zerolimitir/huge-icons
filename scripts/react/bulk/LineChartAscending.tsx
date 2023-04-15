import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLineChartAscending = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M19.62 4.039c-.888.197-1.513.89-1.604 1.778-.095.923.469 1.773 1.384 2.086.309.106.934.1 1.244-.013a2.071 2.071 0 0 0 1.244-1.24c.066-.179.084-.323.084-.65s-.018-.471-.084-.65a2.05 2.05 0 0 0-1.244-1.236c-.255-.089-.786-.128-1.024-.075m-8 6c-.888.197-1.513.89-1.604 1.778-.095.923.469 1.773 1.384 2.086.309.106.934.1 1.244-.013 1.371-.498 1.799-2.216.811-3.252a1.914 1.914 0 0 0-1.355-.618 2.333 2.333 0 0 0-.48.019m-8 6a2.042 2.042 0 0 0-1.51 1.317c-.117.319-.116.971.002 1.294a2.071 2.071 0 0 0 1.244 1.24c.317.116.971.116 1.288 0 1.372-.501 1.799-2.216.811-3.252A1.914 1.914 0 0 0 4.1 16.02a2.333 2.333 0 0 0-.48.019'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLineChartAscending);
export default ForwardRef;
