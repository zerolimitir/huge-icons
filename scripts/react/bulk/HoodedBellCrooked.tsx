import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHoodedBellCrooked = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.684 16.27c-.316.976-.124 2.039.523 2.904.393.525.976.935 1.646 1.159.338.113.412.123.927.125.513.002.59-.008.914-.114l.354-.116-2.114-2.114C9.771 16.951 8.809 16 8.796 16c-.013 0-.064.122-.112.27'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHoodedBellCrooked);
export default ForwardRef;
