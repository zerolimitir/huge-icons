import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLayoutThirdThree = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.293 4.293 0 0 0-1.702.669C2.963 3.234 2.4 4.03 2.134 4.968c-.096.342-.106.45-.124 1.322l-.018.95h20.015l-.017-.93c-.015-.841-.027-.967-.12-1.315a4.011 4.011 0 0 0-1.601-2.283 5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028M2.01 13.71l.012 4.95.11.378c.363 1.24 1.235 2.218 2.388 2.677.541.215 1.01.285 1.916.285h.804V8.76H1.998l.012 4.95m6.75 1.67V22h6.48V8.76H8.76v6.62m8 .004v6.623l.93-.017c.845-.015.966-.026 1.321-.121a3.996 3.996 0 0 0 2.906-3.095c.081-.398.083-.511.083-5.21V8.76h-5.24v6.624'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutThirdThree);
export default ForwardRef;
