import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLineChart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M19.62 4.039a2.04 2.04 0 0 0-1.51 1.317c-.113.31-.119.935-.013 1.244.119.348.286.612.542.856.885.844 2.338.671 3.021-.359.24-.361.312-.615.312-1.097 0-.327-.018-.471-.084-.65a2.05 2.05 0 0 0-1.244-1.236c-.255-.089-.786-.128-1.024-.075m-16 6a2.042 2.042 0 0 0-1.51 1.317c-.117.319-.116.971.002 1.294a2.071 2.071 0 0 0 1.244 1.24c.309.112.935.119 1.244.014.73-.249 1.239-.828 1.361-1.548a2.003 2.003 0 0 0-1.317-2.242c-.255-.089-.786-.128-1.024-.075m8.06 5.989c-.615.103-1.221.551-1.478 1.094a2.02 2.02 0 0 0 1.154 2.768c.317.116.971.116 1.288 0a2.074 2.074 0 0 0 1.244-1.24c.115-.316.122-.938.015-1.25-.246-.719-.841-1.249-1.528-1.361a2.3 2.3 0 0 0-.695-.011'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLineChart);
export default ForwardRef;
