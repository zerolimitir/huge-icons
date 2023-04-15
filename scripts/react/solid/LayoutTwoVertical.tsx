import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLayoutTwoVertical = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.293 4.293 0 0 0-1.702.669c-.766.521-1.324 1.307-1.6 2.256l-.108.372-.013 2.95-.013 2.95h20.006l-.012-2.93-.012-2.93-.106-.385a4.03 4.03 0 0 0-1.604-2.283 5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028M2.01 15.71l.013 2.95.11.378c.437 1.504 1.584 2.572 3.093 2.879.401.082.494.083 6.774.083s6.373-.001 6.774-.083a4.003 4.003 0 0 0 3.097-2.905l.108-.392.012-2.93.012-2.93H1.997l.013 2.95'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutTwoVertical);
export default ForwardRef;
