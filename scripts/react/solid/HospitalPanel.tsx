import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHospitalPanel = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.293 4.293 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v13.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392V5.38l-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028m2.972 5.338c.08.051.188.162.24.246l.095.153.012 1.73.012 1.73h6.472l.012-1.733.012-1.733.107-.162A.7.7 0 0 1 16 7.267a.7.7 0 0 1 .633.345l.107.162v8.459l-.121.172c-.166.236-.346.334-.619.334s-.453-.097-.619-.334l-.121-.172-.012-1.736-.012-1.737H8.764l-.012 1.737-.012 1.736-.121.172c-.166.237-.346.334-.619.334s-.453-.098-.619-.334l-.121-.172V7.78l.093-.149c.233-.375.691-.484 1.052-.25'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHospitalPanel);
export default ForwardRef;
