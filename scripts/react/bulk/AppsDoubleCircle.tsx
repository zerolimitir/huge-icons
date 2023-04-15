import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAppsDoubleCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.503 14.04a3.19 3.19 0 0 0-1.8 1.04c-.716.837-.897 2.02-.469 3.071a3.046 3.046 0 0 0 1.615 1.615 2.982 2.982 0 0 0 3.266-.651 2.982 2.982 0 0 0 .131-4.095c-.349-.396-.97-.781-1.49-.923-.265-.073-.986-.106-1.253-.057'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAppsDoubleCircle);
export default ForwardRef;
