import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPackageBox = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.92 2.027c-.554.063-1.345.372-1.814.708-.135.097-.901.7-1.701 1.34L2.95 5.24h18.1l-1.455-1.165c-.8-.64-1.566-1.243-1.701-1.34-.323-.231-.91-.504-1.334-.62l-.34-.093-4.08-.005c-2.244-.003-4.143.002-4.22.01M2.01 12.71l.011 5.95.111.378c.441 1.507 1.585 2.572 3.094 2.879.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392.011-5.93.011-5.93H15v1.236c0 1.454-.033 1.709-.296 2.264-.331.699-.881 1.233-1.553 1.506-1.491.607-3.145-.026-3.839-1.47-.279-.58-.283-.604-.301-2.146l-.017-1.39H1.998l.012 5.95'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackageBox);
export default ForwardRef;
