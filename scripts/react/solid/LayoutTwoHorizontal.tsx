import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLayoutTwoHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.302 4.302 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v13.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.388.079.533.083 3.21.083h2.804V2l-2.79.005c-1.535.003-2.892.02-3.017.038M12.76 12v10.003l2.93-.012 2.93-.012.391-.108a4.001 4.001 0 0 0 2.907-3.101c.083-.407.083-.457.073-6.9l-.011-6.49-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.058 5.058 0 0 0-1.311-.599c-.332-.087-.387-.089-3.268-.103l-2.93-.014V12'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutTwoHorizontal);
export default ForwardRef;
