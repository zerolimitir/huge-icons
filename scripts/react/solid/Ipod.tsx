import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgIpod = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.293 4.293 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v13.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392V5.38l-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028M13 6.347c2.335.38 4.248 2.298 4.661 4.673a6.994 6.994 0 0 1 0 1.96A5.789 5.789 0 0 1 13 17.666c-.514.093-1.486.093-2 0a5.789 5.789 0 0 1-4.661-4.686 6.847 6.847 0 0 1 0-1.96C6.612 9.456 7.55 8.032 8.86 7.19c1.252-.805 2.64-1.087 4.14-.843m-1.42 3.7C10.707 10.214 10 11.087 10 12c0 .92.69 1.768 1.592 1.956C12.816 14.211 14 13.249 14 12c0-.523-.21-1.017-.596-1.404-.491-.49-1.127-.682-1.824-.549'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgIpod);
export default ForwardRef;
