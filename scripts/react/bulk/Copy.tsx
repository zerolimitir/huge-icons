import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCopy = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.42 8.044a4.614 4.614 0 0 0-1.199.386 4.001 4.001 0 0 0-2.178 3.025c-.059.426-.059 6.664 0 7.09.247 1.773 1.679 3.192 3.443 3.413.448.057 6.58.057 7.028 0 1.796-.225 3.24-1.686 3.448-3.489.028-.241.038-1.546.03-3.769l-.012-3.4-.112-.36c-.473-1.531-1.59-2.562-3.116-2.876-.269-.056-.743-.063-3.7-.059-1.866.003-3.5.02-3.632.039'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCopy);
export default ForwardRef;
