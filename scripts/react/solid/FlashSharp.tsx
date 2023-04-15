import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFlashSharp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.529 7.71c-2.448 3.128-4.461 5.715-4.474 5.749-.021.054.243.061 2.461.061H10l.01 4.228.01 4.229 4.475-5.719 4.475-5.718-2.485-.01L14 10.519l-.01-4.248-.01-4.248L9.529 7.71'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFlashSharp);
export default ForwardRef;
