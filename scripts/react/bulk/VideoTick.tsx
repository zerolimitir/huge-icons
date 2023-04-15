import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgVideoTick = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.397 2.04c-1.591.27-2.819 1.371-3.264 2.928-.103.362-.107.408-.123 1.702L1.993 8H5.68l1.5-3 1.5-3-1.55.005c-.852.002-1.632.018-1.733.035M8.82 5l-1.5 3h6.36l1.5-3 1.5-3h-6.36l-1.5 3m8 0-1.5 3H22V6.816c0-1.039-.01-1.233-.083-1.589-.309-1.517-1.423-2.707-2.886-3.084a7.007 7.007 0 0 0-.541-.12l-.169-.024L16.82 5m-2.126 6.317c-.133.061-.473.425-1.676 1.799-1.388 1.586-1.518 1.724-1.634 1.724-.103 0-.284-.127-1.005-.708-.936-.755-1.149-.893-1.376-.891a.893.893 0 0 0-.551.244.895.895 0 0 0-.212.525c0 .309.122.444 1.16 1.278.539.433 1.065.835 1.169.892a1.75 1.75 0 0 0 1.045.18c.413-.064.723-.228 1.034-.548.549-.565 2.964-3.359 3.035-3.512.18-.384-.003-.827-.412-.998a.672.672 0 0 0-.577.015'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVideoTick);
export default ForwardRef;
