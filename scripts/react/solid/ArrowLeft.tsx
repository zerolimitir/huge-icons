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
            d='M9.7 7.317c-.108.05-.845.762-2.267 2.189C5.267 11.68 5.24 11.71 5.24 12c0 .29.027.32 2.193 2.494 1.422 1.427 2.159 2.139 2.267 2.189a.733.733 0 0 0 1.06-.663.84.84 0 0 0-.064-.312c-.035-.07-.696-.763-1.47-1.538L7.82 12.76h5.12c3.612 0 5.167-.013 5.279-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-5.193-.02-5.193-.02 1.382-1.38c.761-.759 1.418-1.447 1.461-1.528a.847.847 0 0 0 .077-.332.733.733 0 0 0-1.06-.663'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowLeft);
export default ForwardRef;
