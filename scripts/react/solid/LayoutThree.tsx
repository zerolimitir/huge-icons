import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLayoutThree = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.293 4.293 0 0 0-1.702.669C2.963 3.234 2.4 4.03 2.134 4.968c-.096.342-.106.45-.124 1.322l-.018.95h20.015l-.017-.93c-.015-.841-.027-.967-.12-1.315a4.011 4.011 0 0 0-1.601-2.283 5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028M2.01 13.71l.012 4.95.11.378c.441 1.507 1.585 2.572 3.094 2.879.388.079.533.083 3.21.083h2.804V8.76H1.998l.012 4.95m10.75 1.671v6.622l2.93-.012 2.93-.012.391-.108a4.004 4.004 0 0 0 2.906-3.097c.081-.398.083-.511.083-5.21V8.76h-9.24v6.621'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutThree);
export default ForwardRef;
