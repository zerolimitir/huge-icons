import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFlashOff = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='m12.027 4.519-1.953 2.495 3.253 3.253c1.789 1.789 3.265 3.253 3.281 3.253.015 0 .553-.67 1.194-1.49l1.167-1.49-2.484-.01L14 10.519l-.01-4.248-.01-4.248-1.953 2.496M3.672 3.362c-.349.184-.497.639-.319.981.048.093 1.065 1.14 2.484 2.557C7.159 8.22 8.24 9.313 8.24 9.329c0 .016-.72.949-1.6 2.073-.88 1.125-1.6 2.061-1.6 2.081 0 .022.998.037 2.48.037H10l.01 4.228.01 4.229 2.376-3.039a9512.96 9512.96 0 0 1 2.391-3.056c.009-.01 1.091 1.056 2.405 2.368 1.66 1.66 2.433 2.406 2.537 2.449a.735.735 0 0 0 1.031-.679.847.847 0 0 0-.077-.332c-.119-.227-16.186-16.27-16.372-16.347a.8.8 0 0 0-.639.021'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFlashOff);
export default ForwardRef;
