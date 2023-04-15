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
            d='M5.433 2.043a4.293 4.293 0 0 0-1.702.669c-.767.522-1.328 1.314-1.598 2.256-.103.362-.107.408-.123 1.702L1.993 8h20.013l-.015-1.31c-.015-1.261-.02-1.324-.12-1.695a4.023 4.023 0 0 0-1.602-2.283 5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutThirdTop);
export default ForwardRef;
