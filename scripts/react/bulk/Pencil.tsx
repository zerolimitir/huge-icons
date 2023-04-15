import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPencil = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.66 3.057c-.813.188-1.066.375-2.273 1.678-.543.586-.987 1.078-.987 1.095 0 .039 3.731 3.77 3.77 3.77.017 0 .509-.444 1.095-.987 1.128-1.045 1.347-1.302 1.536-1.805.294-.779.245-1.653-.13-2.328a2.86 2.86 0 0 0-1.651-1.36c-.358-.112-1.019-.142-1.36-.063'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPencil);
export default ForwardRef;
