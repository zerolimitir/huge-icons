import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgClockRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.293 4.293 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v13.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392V5.38l-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028m6.972 4.338c.08.051.188.162.24.246l.095.153.011 2.341.012 2.341 1.188.394c.654.217 1.255.428 1.335.468a.745.745 0 0 1 .228 1.176.746.746 0 0 1-.688.22c-.29-.066-3.151-1.034-3.251-1.099a.996.996 0 0 1-.205-.229l-.11-.166V6.78l.093-.149c.233-.375.691-.484 1.052-.25'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClockRectangle);
export default ForwardRef;
