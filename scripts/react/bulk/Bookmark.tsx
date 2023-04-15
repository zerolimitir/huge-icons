import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBookmark = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.534 3.057a2.063 2.063 0 0 0-1.49 1.535C4.016 4.726 4 5.39 4 6.402V8h16V6.402c0-1.012-.016-1.676-.044-1.81a2.062 2.062 0 0 0-1.548-1.548c-.323-.067-12.594-.055-12.874.013'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookmark);
export default ForwardRef;
