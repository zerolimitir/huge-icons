import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCalculatorModern = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.293 4.293 0 0 0-1.702.669C2.963 3.234 2.4 4.03 2.134 4.968c-.096.342-.106.45-.124 1.322l-.018.95h20.015l-.017-.93c-.015-.841-.027-.967-.12-1.315a4.011 4.011 0 0 0-1.601-2.283 5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028M2 11.5v2.74h5.76V8.76H2v2.74m7.24 0v2.74h5.52V8.76H9.24v2.74m7 3.883v6.623l1.19-.015c1.134-.015 1.209-.021 1.581-.122a3.996 3.996 0 0 0 2.906-3.095c.081-.398.083-.511.083-5.21V8.76h-5.76v6.623M2.01 17.21c.016 1.432.018 1.455.125 1.828.352 1.231 1.231 2.218 2.385 2.677.582.232.988.285 2.176.285H7.76v-6.24H1.994l.016 1.45m7.23 1.67V22h5.52v-6.24H9.24v3.12'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCalculatorModern);
export default ForwardRef;
