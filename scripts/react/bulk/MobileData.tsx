import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMobileData = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.811 9.278a.883.883 0 0 0-.481.374c-.065.119-.071.426-.09 4.318l-.02 4.191-.88-.885c-.552-.555-.94-.912-1.04-.959a.67.67 0 0 0-.6-.001c-.406.188-.565.594-.384.984.048.104.424.506 1.069 1.145.977.967 1.002.987 1.375 1.166.861.413 1.619.413 2.48 0 .374-.179.397-.199 1.374-1.166.546-.542 1.028-1.052 1.07-1.133a.783.783 0 0 0-.119-.846c-.191-.218-.577-.284-.865-.149-.1.047-.488.404-1.04.959l-.88.885-.02-4.191c-.02-4.132-.021-4.192-.102-4.329a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMobileData);
export default ForwardRef;
