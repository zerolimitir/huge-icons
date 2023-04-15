import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLayoutThirdLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.302 4.302 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v13.24l.111.397c.347 1.242 1.226 2.235 2.389 2.698.541.215 1.01.285 1.916.285h.804V2l-.79.005c-.435.003-.892.02-1.017.038M8.76 12v10.002l4.93-.011 4.93-.011.391-.108c1.505-.415 2.597-1.581 2.907-3.102.083-.407.083-.457.073-6.9l-.011-6.49-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.094 5.094 0 0 0-1.311-.599l-.338-.09-4.93-.013-4.93-.012V12'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutThirdLeft);
export default ForwardRef;
