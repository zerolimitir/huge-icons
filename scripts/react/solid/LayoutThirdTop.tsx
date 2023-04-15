import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLayoutThirdTop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.293 4.293 0 0 0-1.702.669C2.963 3.234 2.4 4.03 2.134 4.968c-.096.342-.106.45-.124 1.322l-.018.95h20.015l-.017-.93c-.015-.841-.027-.967-.12-1.315a4.011 4.011 0 0 0-1.601-2.283 5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028M2.01 13.71l.012 4.95.11.378c.441 1.507 1.585 2.572 3.094 2.879.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.403 3.098-2.905l.108-.392.011-4.93.011-4.93H1.998l.012 4.95'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutThirdTop);
export default ForwardRef;
