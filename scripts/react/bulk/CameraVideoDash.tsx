import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCameraVideoDash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M19.759 7.083c-.56.062-.932.286-1.497.905-.648.709-.944 1.224-1.149 2-.09.341-.093.402-.093 2.012 0 1.618.002 1.669.095 2.018.222.841.546 1.376 1.313 2.166.325.335.444.429.697.55.946.454 2.11.098 2.612-.799.256-.459.241-.234.254-3.803.013-3.498.011-3.534-.196-3.943-.31-.616-.902-1.035-1.555-1.103a2.77 2.77 0 0 0-.481-.003M6.7 11.316a.745.745 0 0 0 .029 1.382c.129.054.494.062 2.78.061 2.472-.001 2.641-.005 2.791-.075.38-.175.552-.587.398-.955a.734.734 0 0 0-.398-.413c-.15-.07-.318-.074-2.8-.074-2.482 0-2.65.004-2.8.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCameraVideoDash);
export default ForwardRef;
