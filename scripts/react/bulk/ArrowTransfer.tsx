import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowTransfer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.66 12.356c-.107.05-.688.606-1.746 1.67-1.509 1.518-1.587 1.603-1.625 1.784a.935.935 0 0 0 0 .38c.038.181.116.267 1.645 1.804 1.072 1.078 1.659 1.64 1.766 1.69a.74.74 0 0 0 1.049-.579c.04-.346-.009-.415-1.003-1.415l-.924-.93h5.067c3.549 0 5.129-.013 5.273-.044.758-.163.758-1.269 0-1.432-.144-.031-1.724-.044-5.273-.044H7.822l.887-.89c.914-.918 1.012-1.047 1.01-1.339-.001-.173-.112-.439-.225-.539a.794.794 0 0 0-.834-.116'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowTransfer);
export default ForwardRef;
