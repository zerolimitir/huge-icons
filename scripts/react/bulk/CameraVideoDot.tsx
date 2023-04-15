import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCameraVideoDot = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M19.759 7.083c-.56.062-.932.286-1.497.905-.648.709-.944 1.224-1.149 2-.09.341-.093.402-.093 2.012 0 1.618.002 1.669.095 2.018.222.841.546 1.376 1.313 2.166.325.335.444.429.697.55.946.454 2.11.098 2.612-.799.256-.459.241-.234.254-3.803.013-3.498.011-3.534-.196-3.943-.31-.616-.902-1.035-1.555-1.103a2.77 2.77 0 0 0-.481-.003m-9.321.992a1.984 1.984 0 0 0-.872.542c-.78.813-.759 2.04.05 2.816.814.781 2.04.76 2.817-.049A1.91 1.91 0 0 0 13 10c0-.895-.597-1.678-1.477-1.936a2.275 2.275 0 0 0-1.085.011'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCameraVideoDot);
export default ForwardRef;
