import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDirectionDownDoubleRectangle = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
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
            d='M5.433 2.043a4.293 4.293 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v13.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392V5.38l-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028m2.982 5.344c.086.056.797.581 1.58 1.168.938.703 1.486 1.087 1.605 1.126.099.032.279.059.4.059s.301-.027.4-.059c.119-.039.667-.423 1.605-1.126 1.814-1.359 1.703-1.287 1.994-1.291.2-.003.261.015.405.116a.755.755 0 0 1 .331.62c0 .368-.043.413-1.497 1.511-1.703 1.287-1.946 1.451-2.363 1.594-.304.104-.385.115-.875.115-.488 0-.572-.011-.868-.113-.426-.146-.541-.223-2.242-1.5-1.455-1.092-1.572-1.198-1.624-1.48-.061-.326.192-.75.502-.843a.855.855 0 0 1 .647.103m0 5c.086.056.797.581 1.58 1.168.938.703 1.486 1.087 1.605 1.126.099.032.279.059.4.059s.301-.027.4-.059c.119-.039.667-.423 1.605-1.126 1.814-1.359 1.703-1.287 1.994-1.291.2-.003.261.015.405.116a.755.755 0 0 1 .331.62c0 .368-.043.413-1.497 1.511-1.703 1.287-1.946 1.451-2.363 1.594-.304.104-.385.115-.875.115-.488 0-.572-.011-.868-.113-.426-.146-.541-.223-2.242-1.5-1.455-1.092-1.572-1.198-1.624-1.48-.061-.326.192-.75.502-.843a.855.855 0 0 1 .647.103'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDirectionDownDoubleRectangle);
export default ForwardRef;