import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLoadingDoted = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M18.465 6.063c-.994.241-1.659 1.222-1.508 2.227a2.002 2.002 0 0 0 2.62 1.591 2.006 2.006 0 0 0 1.341-1.909c-.013-1.262-1.226-2.206-2.453-1.909'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLoadingDoted);
export default ForwardRef;
