import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowThickRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.712 6.251c-.252.083-.492.283-.596.494-.093.188-.096.231-.108 1.225L12.996 9H8.423c-4.979 0-4.745-.01-5.049.222a1.19 1.19 0 0 0-.243.289L3.02 9.7v4.6l.111.189c.061.103.17.234.243.289.304.232.07.222 5.051.222H13v.97c0 .545.019 1.035.042 1.119.099.358.48.664.875.702.428.041.343.105 3.469-2.629 2.091-1.829 2.902-2.562 2.975-2.688.142-.249.142-.698 0-.947-.072-.125-.875-.852-2.911-2.633-1.546-1.353-2.892-2.505-2.99-2.56-.21-.118-.536-.154-.748-.083'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowThickRight);
export default ForwardRef;
