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
            d='M19.68 4.027a2.539 2.539 0 0 0-.789.322c-.611.403-.931 1.079-.877 1.851l.023.34-2.496 1.869-2.497 1.868-.226-.099a1.991 1.991 0 0 0-2.222.421c-.44.436-.627.952-.582 1.601l.023.34-2.496 1.869-2.497 1.868-.22-.097a2.01 2.01 0 0 0-2.301.484c-.72.788-.688 1.976.074 2.74.793.795 2.01.794 2.806-.001.437-.437.625-.947.584-1.583l-.024-.36 2.497-1.869 2.496-1.868.212.093c.788.348 1.631.192 2.236-.412.44-.441.627-.956.582-1.604l-.023-.34 2.496-1.869 2.497-1.868.212.093c.785.346 1.631.19 2.236-.413A1.97 1.97 0 0 0 22 6c0-.932-.71-1.791-1.617-1.957a2.26 2.26 0 0 0-.703-.016'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLineChartAscending);
export default ForwardRef;
