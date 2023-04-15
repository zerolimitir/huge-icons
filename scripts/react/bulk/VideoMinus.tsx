import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgVideoMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.397 2.04c-1.591.27-2.819 1.371-3.264 2.928-.103.362-.107.408-.123 1.702L1.993 8H5.68l1.5-3 1.5-3-1.55.005c-.852.002-1.632.018-1.733.035M8.82 5l-1.5 3h6.36l1.5-3 1.5-3h-6.36l-1.5 3m8 0-1.5 3H22V6.816c0-1.039-.01-1.233-.083-1.589-.309-1.517-1.423-2.707-2.886-3.084a7.007 7.007 0 0 0-.541-.12l-.169-.024L16.82 5M8.7 14.316a.745.745 0 0 0 .029 1.382c.13.054.543.062 3.28.061 2.958-.001 3.14-.005 3.291-.075a.743.743 0 0 0 0-1.368c-.151-.07-.332-.074-3.3-.074s-3.149.004-3.3.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVideoMinus);
export default ForwardRef;
