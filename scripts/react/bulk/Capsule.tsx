import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCapsule = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.641 6.37c-.251.128-.408.341-.431.584-.025.259.039.439.234.661.418.475.603.954.603 1.565 0 .625-.172 1.053-.639 1.591a1.13 1.13 0 0 0-.21.357c-.148.55.411 1.087.946.911a1.16 1.16 0 0 0 .328-.214c.773-.71 1.223-1.973 1.091-3.058a3.843 3.843 0 0 0-.702-1.802c-.47-.637-.812-.804-1.22-.595M6.037 9.31c-1.071 1.08-1.695 1.741-1.849 1.958a6.6 6.6 0 0 0-1.053 2.512c-.099.537-.099 1.565 0 2.1a6.036 6.036 0 0 0 1.722 3.263c.919.918 1.917 1.45 3.203 1.706.582.116 1.612.122 2.18.014a7.236 7.236 0 0 0 1.715-.582c.757-.389 1.029-.62 2.765-2.347l1.62-1.612-4.32-4.321C9.644 9.624 7.69 7.68 7.677 7.68c-.012 0-.75.734-1.64 1.63'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCapsule);
export default ForwardRef;
