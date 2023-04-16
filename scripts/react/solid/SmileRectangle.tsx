import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSmileRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.293 4.293 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v13.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392V5.38l-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028M8.34 9.066c.369.126.66.538.66.934 0 .527-.473 1-1 1-.242 0-.521-.119-.701-.299A.984.984 0 0 1 7.3 9.298a.977.977 0 0 1 1.04-.232m8 0c.369.126.66.538.66.934 0 .527-.473 1-1 1-.242 0-.521-.119-.701-.299a.984.984 0 0 1 .001-1.403.977.977 0 0 1 1.04-.232m-6.8 5.412a4.15 4.15 0 0 0 2.46.759c.915 0 1.7-.239 2.436-.743.298-.204.38-.23.644-.205.497.048.792.616.559 1.074-.108.211-.502.5-1.059.776a5.749 5.749 0 0 1-5.12.022c-.507-.246-.95-.558-1.087-.764a.748.748 0 0 1 .194-1.002c.293-.209.584-.184.973.083'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmileRectangle);
export default ForwardRef;