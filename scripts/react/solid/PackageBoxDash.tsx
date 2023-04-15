import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPackageBoxDash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.293 4.293 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v13.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392V5.38l-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028m8.94 3.312c.242.151.36.363.36.648 0 .2-.019.267-.117.406-.064.092-.18.204-.257.249-.136.08-.194.082-2.359.082s-2.223-.002-2.359-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.055-1.013.431-1.132.069-.017 1.088-.027 2.265-.024l2.14.007.153.095'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackageBoxDash);
export default ForwardRef;
