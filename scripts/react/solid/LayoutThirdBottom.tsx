import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLayoutThirdBottom = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.293 4.293 0 0 0-1.702.669c-.766.52-1.322 1.304-1.6 2.256l-.109.372-.012 4.95-.012 4.95h20.004l-.011-4.93-.011-4.93-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028M2.01 17.71c.018.876.028.979.126 1.328.421 1.492 1.58 2.572 3.09 2.879.401.082.494.083 6.774.083s6.373-.001 6.774-.083a3.994 3.994 0 0 0 3.094-2.905c.096-.356.107-.477.122-1.322l.017-.93H1.992l.018.95'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutThirdBottom);
export default ForwardRef;
