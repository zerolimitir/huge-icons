import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRoofHomeLocationBig = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.14 10.063a5.03 5.03 0 0 0-2.42 1.164c-1.189 1.061-1.769 2.402-1.708 3.948.034.885.279 1.733.809 2.805.556 1.126 1.117 1.92 1.938 2.743.586.588 1.059.936 1.542 1.137.248.103.326.116.699.116.373 0 .451-.013.699-.116.483-.201.956-.549 1.542-1.137.821-.823 1.382-1.617 1.938-2.743.857-1.733 1.037-3.171.572-4.56a5.153 5.153 0 0 0-2.061-2.643 5.083 5.083 0 0 0-1.847-.713c-.459-.078-1.26-.078-1.703-.001m1.44 3.038c.695.194 1.278.873 1.38 1.609.219 1.591-1.4 2.768-2.84 2.063a1.974 1.974 0 0 1-.893-2.653c.424-.866 1.394-1.286 2.353-1.019'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeLocationBig);
export default ForwardRef;
