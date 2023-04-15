import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTablet = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.433 2.042a4.334 4.334 0 0 0-1.702.67c-.775.527-1.335 1.322-1.602 2.277l-.109.391v13.24l.111.397c.422 1.511 1.576 2.591 3.1 2.901.405.083.48.084 4.9.073l4.489-.011.391-.108c1.505-.415 2.597-1.581 2.907-3.102.083-.407.083-.457.073-6.9l-.011-6.49-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.094 5.094 0 0 0-1.311-.599l-.338-.09-4.48-.007c-2.464-.004-4.582.008-4.707.026m4.907 16.024c.369.126.66.538.66.934 0 .527-.473 1-1 1-.242 0-.521-.119-.701-.299a.984.984 0 0 1 .001-1.403.977.977 0 0 1 1.04-.232'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTablet);
export default ForwardRef;
