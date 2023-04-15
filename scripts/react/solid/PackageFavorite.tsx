import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPackageFavorite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.293 4.293 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v13.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392V5.38l-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028M15.991 5.69c-.012 2.41-.002 2.315-.286 2.599-.275.275-.796.376-1.105.215-.077-.041-.556-.485-1.065-.989C12.516 6.507 12.41 6.432 12 6.432c-.41 0-.516.075-1.535 1.083-.509.504-.988.948-1.065.989-.309.161-.83.06-1.105-.215-.284-.284-.274-.189-.286-2.599l-.012-2.17h8.006l-.012 2.17'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackageFavorite);
export default ForwardRef;
