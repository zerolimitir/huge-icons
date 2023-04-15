import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.7 7.317c-.108.05-.845.762-2.267 2.189C5.267 11.68 5.24 11.71 5.24 12c0 .29.027.32 2.193 2.494 1.422 1.427 2.159 2.139 2.267 2.189a.733.733 0 0 0 1.06-.663.847.847 0 0 0-.077-.332c-.043-.081-.876-.945-1.853-1.92l-1.775-1.772 1.776-1.768c.977-.972 1.81-1.835 1.852-1.916a.847.847 0 0 0 .077-.332.733.733 0 0 0-1.06-.663'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowLeft);
export default ForwardRef;
