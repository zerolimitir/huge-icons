import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgClapperboard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.397 2.04c-1.591.27-2.819 1.371-3.264 2.928-.103.362-.107.408-.123 1.702L1.993 8H5.68l1.5-3 1.5-3-1.55.005c-.852.002-1.632.018-1.733.035M8.82 5l-1.5 3h6.36l1.5-3 1.5-3h-6.36l-1.5 3m8 0-1.5 3H22V6.816c0-1.039-.01-1.233-.083-1.589-.309-1.517-1.423-2.707-2.886-3.084a7.007 7.007 0 0 0-.541-.12l-.169-.024L16.82 5m-6.14 6.918c-.264.091-.558.384-.632.631-.067.225-.068 4.673-.001 4.899.054.179.308.487.473.572.062.032.194.076.295.099.38.085.449.05 2.281-1.168.926-.616 1.736-1.168 1.799-1.226.395-.362.395-1.088 0-1.45-.063-.058-.873-.61-1.799-1.226-1.941-1.29-1.945-1.292-2.416-1.131'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClapperboard);
export default ForwardRef;
