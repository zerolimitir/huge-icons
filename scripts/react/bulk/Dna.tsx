import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDna = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.36 2.036c0 .081.28.683.458.984.897 1.521 2.297 2.506 4.102 2.888.533.113 2.032.102 2.586-.019a7.306 7.306 0 0 0 1.533-.528c1.3-.654 2.428-1.902 2.903-3.211l.054-.15h-5.818c-3.475 0-5.818.015-5.818.036m4.929 16.005a6.102 6.102 0 0 0-4.491 2.963c-.155.264-.438.885-.438.96 0 .021 2.343.036 5.818.036h5.818l-.054-.15c-.341-.939-1.048-1.897-1.882-2.549a5.922 5.922 0 0 0-2.562-1.183c-.46-.093-1.727-.137-2.209-.077'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDna);
export default ForwardRef;
