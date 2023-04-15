import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTwitterPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9 2.875c0 .949-.049 1.366-.214 1.82a3.605 3.605 0 0 1-1.734 1.94c-.453.227-.89.33-1.502.354L5 7.011V11h3.996l.015 2.91c.014 2.81.017 2.923.101 3.281.569 2.448 2.279 4.152 4.714 4.697.378.085.494.089 2.784.103l2.39.014V18h-2.098c-1.377 0-2.171-.015-2.31-.044-.762-.159-1.411-.818-1.549-1.573-.028-.155-.043-1.135-.043-2.81V11h4V7h-4V2H9v.875'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTwitterPlus);
export default ForwardRef;
