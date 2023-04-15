import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRemove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.294 5.814A2.066 2.066 0 0 0 5.799 7.38c-.091.447.015 1.024.261 1.424.144.234 8.821 8.92 9.09 9.1a1.968 1.968 0 0 0 2.494-.26c.679-.68.783-1.707.253-2.505-.185-.28-8.758-8.859-9.036-9.043-.424-.282-1.095-.402-1.567-.282'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRemove);
export default ForwardRef;
