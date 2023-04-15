import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWifiCrooked = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.96 16.062c-.418.089-.891.352-1.219.677a2.476 2.476 0 0 0 .001 3.525 2.486 2.486 0 0 0 3.52-.002 2.486 2.486 0 0 0 0-3.522 2.511 2.511 0 0 0-2.302-.678'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWifiCrooked);
export default ForwardRef;
